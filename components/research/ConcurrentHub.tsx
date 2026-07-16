"use client";

import { useState } from "react";
import { CLUSTERS } from "@/lib/concurrenten";
import { Reveal } from "@/components/ui/Reveal";

// ---------------------------------------------------------------
// "Bekijk ze zelf." The competitor table in the chapter is our
// reading of the market; this is the market itself, one click away.
// Nobody should have to take our word for who these studios are.
// ---------------------------------------------------------------

export function ConcurrentHub() {
  const [actief, setActief] = useState(CLUSTERS[0].id);
  const cluster = CLUSTERS.find((c) => c.id === actief)!;

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {CLUSTERS.map((c) => {
          const on = c.id === actief;
          return (
            <button
              key={c.id}
              onClick={() => setActief(c.id)}
              aria-pressed={on}
              className="r-eyebrow rounded-full border px-3.5 py-2 !text-[0.46rem] transition-colors"
              style={{
                borderColor: on ? "var(--series-1)" : "var(--line-2)",
                background: on ? "var(--series-1)" : "transparent",
                color: on ? "#fff" : "var(--ink-3)",
              }}
            >
              {c.titel.split(" — ")[0]}
              <span className="ml-1.5 opacity-60">{c.items.length}</span>
            </button>
          );
        })}
      </div>

      <Reveal key={cluster.id}>
        <p className="r-body mt-5 max-w-2xl !text-[0.92rem] text-[var(--ink-2)]">{cluster.intro}</p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {cluster.items.map((c) => (
            <li key={c.url} className="r-card p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="r-body !text-[0.92rem] hover:opacity-70"
                  style={{ fontWeight: 540, color: "var(--series-1)" }}
                >
                  {c.naam} <span className="opacity-40">↗</span>
                </a>
                <span className="flex items-center gap-2.5">
                  {c.ig && (
                    <span className="r-numeral text-[0.66rem] opacity-45" title="Instagram-volgers [zeker: middel]">
                      IG {c.ig}
                    </span>
                  )}
                  <span className="r-eyebrow !text-[0.44rem] opacity-40">{c.plaats}</span>
                </span>
              </div>
              <p className="r-small mt-2 !text-[0.74rem]">{c.wat}</p>
              {c.gat && (
                <p
                  className="r-small mt-2.5 border-l pl-2.5 !text-[0.72rem] italic"
                  style={{ borderColor: "var(--travertine)" }}
                >
                  {c.gat}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Reveal>

      <p className="r-small mt-6 !text-[0.72rem]">
        Alle links geverifieerd op 16 juli 2026 en daarna niet meer aangeraakt. Sites verhuizen,
        studio&rsquo;s stoppen, prijzen verlopen — behandel dit als een foto van de markt op één dag,
        niet als een register. Instagram-cijfers komen uit zoeksnippets (directe fetch wordt
        geblokkeerd) en zijn dus{" "}
        <span title="Zekerheid: middel">middelmatig zeker</span>.
      </p>
    </div>
  );
}
