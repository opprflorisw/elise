import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Conf, Est } from "@/components/research/Blocks";
import type { Confidence } from "@/lib/research";

// ---------------------------------------------------------------
// The raw notes, rendered.
//
// Two things here are load-bearing and easy to get wrong:
//  1. The notes carry their honesty markers as literal inline text —
//     [zeker: hoog], [schatting]. Left as-is they read as debris.
//     They are the whole point of the notes, so a rehype pass
//     promotes them to the same badges the chapters use.
//  2. Some tables run to eight columns. Every one scrolls inside
//     its own box, or the page scrolls sideways on a phone.
// ---------------------------------------------------------------

const MARKER = /(\[zeker:\s*[^\]]+\]|\[schatting\])/i;

/** "middel-hoog" and "laag-middel" both occur; snap to the cautious end. */
function toLevel(raw: string): Confidence {
  const s = raw.toLowerCase();
  if (s.includes("laag")) return "laag";
  if (s.includes("middel")) return "middel";
  return "hoog";
}

type HastNode = {
  type: string;
  value?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

/**
 * react-markdown maps element names, not text nodes — so the markers have to
 * become elements before they can become components.
 */
function rehypeMarkers() {
  return (tree: HastNode) => {
    const walk = (node: HastNode) => {
      if (!node.children) return;
      let changed = false;
      const out: HastNode[] = [];

      for (const child of node.children) {
        if (child.type === "text" && child.value && new RegExp(MARKER).test(child.value)) {
          for (const part of child.value.split(new RegExp(MARKER, "gi"))) {
            if (!part) continue;
            const conf = part.match(/^\[zeker:\s*([^\]]+)\]$/i);
            if (conf) {
              out.push({
                type: "element",
                tagName: "span",
                properties: { dataConf: conf[1].trim() },
                children: [],
              });
              changed = true;
            } else if (/^\[schatting\]$/i.test(part)) {
              out.push({
                type: "element",
                tagName: "span",
                properties: { dataEst: "true" },
                children: [],
              });
              changed = true;
            } else {
              out.push({ type: "text", value: part });
            }
          }
        } else {
          out.push(child);
          walk(child);
        }
      }
      if (changed) node.children = out;
    };
    walk(tree);
  };
}

export function Markdown({ children }: { children: string }) {
  return (
    <div className="r-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeMarkers]}
        components={{
          // eight-column tables live in here; they scroll, the page does not
          table: ({ children }) => (
            <div className="r-scroll">
              <table>{children}</table>
            </div>
          ),
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          span: ({ node, children }) => {
            const p = (node?.properties ?? {}) as Record<string, unknown>;
            if (p.dataConf) {
              const label = String(p.dataConf);
              return (
                // keep the researcher's own wording ("middel-hoog") in the
                // tooltip rather than flattening it away
                <span title={`Zekerheid volgens de notitie: ${label}`}>
                  <Conf level={toLevel(label)} />
                </span>
              );
            }
            if (p.dataEst) return <Est />;
            return <span>{children}</span>;
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
