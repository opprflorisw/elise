import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Owner } from "@/components/research/Pipeline";
import { MOCK_LABEL } from "@/lib/mock";

// ---------------------------------------------------------------
// The PRD scaffolding. Seven tools, one shape — so a reader who
// learns to read one page can read all seven. Decision-grade, not
// dev-grade: no schemas, no endpoints. The question each page must
// answer is "moet Elise dit bezitten?", not "hoe bouw je het?".
// ---------------------------------------------------------------

export type Verdict = "bouwen" | "kopen" | "hybride";

const V_STYLE: Record<Verdict, { bg: string; fg: string; uitleg: string }> = {
  bouwen: { bg: "rgba(42,95,214,0.11)", fg: "#1f47a3", uitleg: "raakt het handschrift of de dataset" },
  kopen: { bg: "rgba(31,158,110,0.12)", fg: "#12704e", uitleg: "opgelost, goedkoop, geen onderhoud" },
  hybride: { bg: "rgba(156,79,142,0.13)", fg: "#7a3a6e", uitleg: "koop de motor, bouw de koppeling" },
};

export function VerdictBadge({ v, uitleg = false }: { v: Verdict; uitleg?: boolean }) {
  const s = V_STYLE[v];
  return (
    <span className="inline-flex items-baseline gap-2">
      <span
        className="r-eyebrow inline-block whitespace-nowrap rounded-sm px-1.5 py-0.5 !text-[0.5rem] !tracking-[0.12em]"
        style={{ background: s.bg, color: s.fg }}
      >
        {v}
      </span>
      {uitleg && <span className="r-small !text-[0.7rem] opacity-55">{s.uitleg}</span>}
    </span>
  );
}

export function PrdHead({
  n,
  naam,
  oneliner,
  verdict,
  bouwtijd,
  eigenaars,
}: {
  n: string;
  naam: string;
  oneliner: string;
  verdict: Verdict;
  bouwtijd: string;
  eigenaars: ("AI" | "Elise" | "Klant")[];
}) {
  return (
    <header className="border-b border-[var(--line-2)] pb-9">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="r-numeral text-[2.4rem] leading-none opacity-25">{n}</span>
          <Link href="/research/tools" className="r-eyebrow hover:opacity-70" style={{ color: "var(--series-1)" }}>
            ← Verstelle OS
          </Link>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="r-display-xl mt-4 max-w-4xl">{naam}</h1>
      </Reveal>
      <Reveal delay={150}>
        <p className="r-lede mt-5 max-w-2xl">{oneliner}</p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-2">
            <span className="r-eyebrow !text-[0.48rem] opacity-40">Oordeel</span>
            <VerdictBadge v={verdict} uitleg />
          </span>
          <span className="flex items-center gap-2">
            <span className="r-eyebrow !text-[0.48rem] opacity-40">Aan het roer</span>
            {eigenaars.map((e) => (
              <Owner key={e} who={e} />
            ))}
          </span>
          <span className="flex items-center gap-2">
            <span className="r-eyebrow !text-[0.48rem] opacity-40">Bouwtijd</span>
            <span className="r-small !text-[0.74rem]">{bouwtijd}</span>
          </span>
        </div>
      </Reveal>
    </header>
  );
}

/** The core flow — max 8 steps, each with an owner. */
export function Flow({ stappen }: { stappen: { t: string; wie: "AI" | "Elise" | "Klant" }[] }) {
  return (
    <ol className="space-y-0">
      {stappen.map((s, i) => (
        <li
          key={s.t}
          className="flex items-baseline gap-4 border-b border-[var(--line)] py-3 last:border-0"
        >
          <span className="r-numeral w-5 shrink-0 text-[0.78rem] opacity-35">{i + 1}</span>
          <span className="r-body flex-1 !text-[0.92rem] text-[var(--ink-2)]">{s.t}</span>
          <Owner who={s.wie} />
        </li>
      ))}
    </ol>
  );
}

/**
 * Value in HOURS first. €250k solo is an hourly-rate invariant of €201 —
 * so a tool that saves euros saves nothing, and a tool that saves hours
 * is the whole business. Euros are the footnote, never the headline.
 */
export function Waarde({
  uren,
  perWat,
  toelichting,
  zonder,
}: {
  uren: string;
  perWat: string;
  toelichting: string;
  zonder: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
      <div className="r-card p-5 sm:w-52">
        <div className="num r-display-l" style={{ color: "var(--series-1)" }}>
          {uren}
        </div>
        <div className="r-eyebrow mt-2.5 !text-[0.5rem] opacity-70">{perWat}</div>
        <p className="r-small mt-3 !text-[0.68rem]">
          Schatting — meet dit bij de eerste echte sessie.
        </p>
      </div>
      <div className="space-y-4">
        <p className="r-body !text-[0.94rem] text-[var(--ink-2)]">{toelichting}</p>
        <div className="rounded-sm p-3.5" style={{ background: "rgba(236,131,90,0.09)" }}>
          <p className="r-eyebrow !text-[0.48rem]" style={{ color: "#a8542a" }}>
            Zonder deze tool
          </p>
          <p className="r-small mt-1.5">{zonder}</p>
        </div>
      </div>
    </div>
  );
}

/** A bought alternative, honestly stated — every build decision must survive one. */
export function Koop({
  naam,
  prijs,
  url,
  wat,
  oordeel,
  gekozen = false,
}: {
  naam: string;
  prijs: string;
  url?: string;
  wat: string;
  oordeel: string;
  gekozen?: boolean;
}) {
  return (
    <div
      className="r-card p-5"
      style={gekozen ? { borderColor: "var(--series-3)", background: "rgba(31,158,110,0.05)" } : undefined}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="r-display-m">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
              {naam} <span className="opacity-40">↗</span>
            </a>
          ) : (
            naam
          )}
        </p>
        <span className="r-numeral text-[0.85rem]" style={{ color: "var(--ink-2)" }}>
          {prijs}
        </span>
      </div>
      {gekozen && (
        <span
          className="r-eyebrow mt-2 inline-block rounded-sm px-1.5 py-0.5 !text-[0.46rem]"
          style={{ background: "rgba(31,158,110,0.14)", color: "#12704e" }}
        >
          gekozen
        </span>
      )}
      <p className="r-small mt-2.5">{wat}</p>
      <p className="r-small mt-2.5 !text-[0.72rem] italic opacity-70">{oordeel}</p>
    </div>
  );
}

export function Kpis({ items }: { items: { kpi: string; meet: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((k) => (
        <div key={k.kpi} className="r-card p-4">
          <p className="r-body !text-[0.88rem]" style={{ fontWeight: 540 }}>
            {k.kpi}
          </p>
          <p className="r-small mt-1.5 !text-[0.72rem]">{k.meet}</p>
        </div>
      ))}
    </div>
  );
}

/** Data & privacy — the speech layer is the hard case; the rest inherit its rules. */
export function Privacy({
  gegevens,
  bewaren,
  let: letOp,
}: {
  gegevens: string[];
  bewaren: string;
  let: string;
}) {
  return (
    <div className="r-card-solid p-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="r-eyebrow !text-[0.48rem] opacity-50">Welke persoonsgegevens</p>
          <ul className="mt-2.5 space-y-1.5">
            {gegevens.map((g) => (
              <li key={g} className="r-small flex gap-2">
                <span style={{ color: "var(--series-4)" }}>·</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="r-eyebrow !text-[0.48rem] opacity-50">Bewaartermijn</p>
          <p className="r-small mt-2.5">{bewaren}</p>
        </div>
      </div>
      <div className="mt-5 border-t border-[var(--line)] pt-4">
        <p className="r-small">
          <strong>Let op:</strong> {letOp}{" "}
          <Link href="/research/setup" className="r-link">
            Zie hoofdstuk 10 — Juridisch &amp; setup
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// The demo frame. Every demo wears the same chrome: a visible
// "fictieve data" stamp and a step rail. A demo that could be
// mistaken for the real product is a lie, so we label it hard.
// ---------------------------------------------------------------

export function DemoFrame({
  titel,
  stap,
  van,
  children,
  onder,
}: {
  titel: string;
  stap?: number;
  van?: number;
  children: React.ReactNode;
  onder?: React.ReactNode;
}) {
  return (
    <figure
      className="overflow-hidden rounded-sm border"
      style={{ borderColor: "var(--line-2)", background: "#fffdfa" }}
    >
      <figcaption
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b px-4 py-3"
        style={{ borderColor: "var(--line)", background: "rgba(28,25,23,0.025)" }}
      >
        <span className="flex items-center gap-3">
          <span className="r-eyebrow !text-[0.5rem]">{titel}</span>
          {stap && van && (
            <span className="r-small !text-[0.68rem] opacity-50">
              stap {stap} van {van}
            </span>
          )}
        </span>
        <span
          className="r-eyebrow rounded-sm px-2 py-0.5 !text-[0.46rem] !tracking-[0.14em]"
          style={{ background: "rgba(250,178,25,0.22)", color: "#8a5f04" }}
          title="Niets hier is echt: verzonnen klant, verzonnen citaten, verzonnen bedragen."
        >
          {MOCK_LABEL}
        </span>
      </figcaption>
      <div className="p-4 sm:p-6">{children}</div>
      {onder && (
        <div className="border-t px-4 py-3.5 sm:px-6" style={{ borderColor: "var(--line)" }}>
          {onder}
        </div>
      )}
    </figure>
  );
}

/** The step rail inside a demo — click to jump, arrow keys work for free. */
export function Stappen({
  stappen,
  actief,
  ga,
}: {
  stappen: string[];
  actief: number;
  ga: (i: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stappen.map((s, i) => {
        const on = i === actief;
        const done = i < actief;
        return (
          <button
            key={s}
            onClick={() => ga(i)}
            aria-current={on ? "step" : undefined}
            className="r-eyebrow rounded-full border px-3 py-1.5 !text-[0.46rem] transition-colors"
            style={{
              borderColor: on ? "var(--series-1)" : "var(--line-2)",
              background: on ? "var(--series-1)" : done ? "rgba(42,95,214,0.07)" : "transparent",
              color: on ? "#fff" : done ? "var(--series-1)" : "var(--ink-3)",
            }}
          >
            {i + 1}. {s}
          </button>
        );
      })}
    </div>
  );
}

/** Navigation under a demo. */
export function DemoNav({
  stap,
  van,
  ga,
  klaar,
}: {
  stap: number;
  van: number;
  ga: (i: number) => void;
  klaar?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={() => ga(stap - 1)}
        disabled={stap === 0}
        className="r-eyebrow !text-[0.5rem] transition-opacity disabled:opacity-25"
        style={{ color: "var(--ink-2)" }}
      >
        ← Terug
      </button>
      <span className="r-small !text-[0.7rem] opacity-50">
        {stap === van - 1 ? klaar ?? "Einde van de demo" : `${stap + 1} / ${van}`}
      </span>
      <button
        onClick={() => ga(stap + 1)}
        disabled={stap === van - 1}
        className="r-eyebrow rounded-full px-4 py-2 !text-[0.5rem] transition-opacity disabled:opacity-25"
        style={{ background: "var(--series-1)", color: "#fff" }}
      >
        Verder →
      </button>
    </div>
  );
}
