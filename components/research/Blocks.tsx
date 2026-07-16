import Link from "next/link";
import type { Confidence } from "@/lib/research";
import { Reveal } from "@/components/ui/Reveal";

// ---------------------------------------------------------------
// Page scaffolding
// ---------------------------------------------------------------

export function PageHead({
  n,
  eyebrow,
  title,
  lede,
}: {
  n: string;
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-[var(--line-2)] pb-10">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="r-numeral text-[2.4rem] leading-none opacity-25">{n}</span>
          <span className="r-eyebrow" style={{ color: "var(--series-1)" }}>
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="r-display-xl mt-4 max-w-4xl">{title}</h1>
      </Reveal>
      <Reveal delay={150}>
        <p className="r-lede mt-5 max-w-2xl">{lede}</p>
      </Reveal>
    </header>
  );
}

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-24 sm:mt-24">
      <Reveal>
        <h2 className="r-display-l border-t border-[var(--line-2)] pt-5">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={70}>
          <p className="r-body mt-4 max-w-2xl text-[var(--ink-2)]">{intro}</p>
        </Reveal>
      )}
      <div className="mt-7">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="r-body max-w-2xl space-y-4 text-[var(--ink-2)]">{children}</div>;
}

// ---------------------------------------------------------------
// Evidence primitives
// ---------------------------------------------------------------

const CONF_STYLE: Record<Confidence, { bg: string; fg: string }> = {
  hoog: { bg: "rgba(12,163,12,0.13)", fg: "#0a7a0a" },
  middel: { bg: "rgba(250,178,25,0.20)", fg: "#8a5f04" },
  laag: { bg: "rgba(208,59,59,0.12)", fg: "#a52c2c" },
};

/** Confidence badge. Never color-alone — always carries the word. */
export function Conf({ level }: { level: Confidence }) {
  const s = CONF_STYLE[level];
  return (
    <span
      className="r-eyebrow inline-block whitespace-nowrap rounded-sm px-1.5 py-0.5 !text-[0.5rem] !tracking-[0.14em]"
      style={{ background: s.bg, color: s.fg }}
      title={`Zekerheid: ${level}`}
    >
      {level}
    </span>
  );
}

/** An estimate marker — every non-sourced number must wear one. */
export function Est({ children }: { children?: React.ReactNode }) {
  return (
    <span
      className="r-eyebrow ml-1 inline-block rounded-sm px-1 py-0.5 !text-[0.5rem] !tracking-[0.12em]"
      style={{ background: "rgba(28,25,23,0.07)", color: "var(--ink-3)" }}
      title="Schatting — niet uit een bron, redenering staat erbij"
    >
      {children ?? "schatting"}
    </span>
  );
}

export function Stat({
  value,
  label,
  sub,
  accent = "var(--series-1)",
  conf,
}: {
  value: string;
  label: string;
  sub?: string;
  accent?: string;
  conf?: Confidence;
}) {
  return (
    <div className="r-card p-5">
      <div className="num r-display-l" style={{ color: accent }}>
        {value}
      </div>
      <div className="r-eyebrow mt-2.5 !text-[0.56rem] opacity-70">{label}</div>
      {sub && <p className="r-small mt-2">{sub}</p>}
      {conf && (
        <div className="mt-3">
          <Conf level={conf} />
        </div>
      )}
    </div>
  );
}

export function StatRow({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{children}</div>;
}

/** Wide tables scroll inside their own box — the page body never scrolls sideways. */
export function Table({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: (React.ReactNode[])[];
  caption?: string;
}) {
  return (
    <figure>
      <div className="r-scroll">
        <table className="r-table min-w-[640px]">
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="r-small mt-3">{caption}</figcaption>}
    </figure>
  );
}

/** The honest block. Every page must end with one. */
export function CounterCase({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div
        className="mt-16 rounded-sm border-l-2 p-6 sm:mt-24 sm:p-8"
        style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.045)" }}
      >
        <p className="r-eyebrow" style={{ color: "var(--critical)" }}>
          Wat hiertegen pleit
        </p>
        <div className="r-body mt-4 max-w-2xl space-y-3 text-[var(--ink-2)]">{children}</div>
      </div>
    </Reveal>
  );
}

/** A choice that belongs to Elise/Floris — not to the research. */
export function Decision({
  vraag,
  opties,
  advies,
  hangtAf,
}: {
  vraag: string;
  opties: string[];
  advies: string;
  hangtAf?: string;
}) {
  return (
    <div className="r-card-solid p-6">
      <p className="r-display-m">{vraag}</p>
      <ul className="mt-4 space-y-1.5">
        {opties.map((o) => (
          <li key={o} className="r-body flex gap-2.5 text-[var(--ink-2)]">
            <span style={{ color: "var(--line-2)" }}>—</span>
            {o}
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-[var(--line)] pt-4">
        <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--series-1)" }}>
          Advies
        </p>
        <p className="r-body mt-1.5">{advies}</p>
        {hangtAf && <p className="r-small mt-2.5">Hangt af van: {hangtAf}</p>}
      </div>
    </div>
  );
}

export function Decisions({ children }: { children: React.ReactNode }) {
  return (
    <Section title="Beslispunten" intro="Dit zijn keuzes voor Elise en Floris — niet voor het onderzoek.">
      <div className="grid gap-4 lg:grid-cols-2">{children}</div>
    </Section>
  );
}

export type Source = { t: string; url?: string; org?: string; jaar?: string };

export function Sources({ items, note }: { items: Source[]; note?: string }) {
  return (
    <Section title="Bronnen">
      {note && <p className="r-small mb-5 max-w-2xl">{note}</p>}
      <ol className="grid gap-2.5 sm:grid-cols-2">
        {items.map((s, i) => (
          <li key={i} className="r-small flex gap-2.5">
            <span className="r-numeral shrink-0 opacity-40">{String(i + 1).padStart(2, "0")}</span>
            <span>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="r-link">
                  {s.t}
                </a>
              ) : (
                s.t
              )}
              {(s.org || s.jaar) && (
                <span className="opacity-60">
                  {" "}
                  — {[s.org, s.jaar].filter(Boolean).join(", ")}
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** Bottom-of-page navigation to the next dossier chapter. */
export function NextPage({ slug, title, n }: { slug: string; title: string; n: string }) {
  return (
    <Reveal>
      <Link
        href={`/research/${slug}`}
        className="group mt-16 flex items-end justify-between gap-6 border-t border-[var(--line-2)] pt-7 sm:mt-24"
      >
        <div>
          <p className="r-eyebrow opacity-50">Volgende</p>
          <p className="r-display-l mt-1.5 transition-opacity group-hover:opacity-60">{title}</p>
        </div>
        <span className="r-numeral text-[2rem] opacity-25">{n}</span>
      </Link>
    </Reveal>
  );
}

/** Pull-quote / thesis statement. The one serif moment per page. */
export function Thesis({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <blockquote
        className="my-12 border-l-2 py-1 pl-6"
        style={{ borderColor: "var(--series-1)" }}
      >
        <p className="r-accent-serif text-[clamp(1.15rem,2.3vw,1.5rem)] leading-[1.5]">{children}</p>
      </blockquote>
    </Reveal>
  );
}

/** Two-column "this vs that" — used for kopen/bouwen, wel/niet. */
export function Versus({
  leftTitle,
  rightTitle,
  left,
  right,
}: {
  leftTitle: string;
  rightTitle: string;
  left: string[];
  right: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        { t: leftTitle, items: left, c: "var(--series-3)" },
        { t: rightTitle, items: right, c: "var(--critical)" },
      ].map((col) => (
        <div key={col.t} className="r-card p-5">
          <p className="r-eyebrow !text-[0.56rem]" style={{ color: col.c }}>
            {col.t}
          </p>
          <ul className="mt-3.5 space-y-2">
            {col.items.map((i) => (
              <li key={i} className="r-body flex gap-2.5 text-[var(--ink-2)]">
                <span style={{ color: col.c }}>·</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
