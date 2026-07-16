"use client";

import { useState } from "react";

export type Stage = {
  n: string;
  t: string;
  doel: string;
  eigenaar: ("AI" | "Elise" | "Klant")[];
  tools: string[];
  tijd: string;
  detail: string;
  drop?: string;
};

const OWNER_STYLE: Record<string, { bg: string; fg: string }> = {
  AI: { bg: "rgba(42,95,214,0.11)", fg: "#1f47a3" },
  Elise: { bg: "rgba(200,114,42,0.13)", fg: "#8f4f18" },
  Klant: { bg: "rgba(31,158,110,0.12)", fg: "#12704e" },
};

export function Owner({ who }: { who: string }) {
  const s = OWNER_STYLE[who] ?? OWNER_STYLE.Elise;
  return (
    <span
      className="r-eyebrow inline-block whitespace-nowrap rounded-sm px-1.5 py-0.5 !text-[0.5rem] !tracking-[0.12em]"
      style={{ background: s.bg, color: s.fg }}
    >
      {who}
    </span>
  );
}

/** The pipeline: click a stage to open it. The spine on the left is the red thread. */
export function Pipeline({ stages }: { stages: Stage[] }) {
  const [open, setOpen] = useState<string | null>(stages[0]?.n ?? null);

  return (
    <div className="relative">
      {/* the thread */}
      <div
        className="absolute bottom-4 left-[13px] top-4 w-px"
        style={{ background: "linear-gradient(180deg, var(--series-1), rgba(42,95,214,0.15))" }}
      />
      <ol className="space-y-2">
        {stages.map((s) => {
          const on = open === s.n;
          return (
            <li key={s.n} className="relative pl-10">
              <span
                className="absolute left-0 top-3 grid h-[27px] w-[27px] place-items-center rounded-full border text-[0.6rem] font-semibold transition-all"
                style={{
                  borderColor: on ? "var(--series-1)" : "var(--line-2)",
                  background: on ? "var(--series-1)" : "#fffdfa",
                  color: on ? "#fff" : "var(--ink-3)",
                }}
              >
                {s.n}
              </span>
              <button
                onClick={() => setOpen(on ? null : s.n)}
                className="r-card-solid w-full p-4 text-left transition-colors hover:border-[var(--line-2)]"
                aria-expanded={on}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                  <span className="r-display-m">{s.t}</span>
                  <span className="flex flex-wrap items-center gap-1.5">
                    {s.eigenaar.map((e) => (
                      <Owner key={e} who={e} />
                    ))}
                    <span className="r-small !text-[0.7rem] opacity-60">{s.tijd}</span>
                  </span>
                </div>
                <p className="r-small mt-1.5" style={{ color: "var(--ink-2)" }}>
                  {s.doel}
                </p>

                {on && (
                  <div className="mt-4 border-t border-[var(--line)] pt-4">
                    <p className="r-body !text-[0.9rem] text-[var(--ink-2)]">{s.detail}</p>
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <span className="r-eyebrow !text-[0.5rem] opacity-50">Gereedschap</span>
                      {s.tools.map((t) => (
                        <span
                          key={t}
                          className="r-small rounded-sm px-2 py-0.5 !text-[0.7rem]"
                          style={{ background: "rgba(28,25,23,0.05)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {s.drop && (
                      <p className="r-small mt-3 !text-[0.75rem]">
                        <strong style={{ color: "var(--serious)" }}>Waar het misgaat:</strong> {s.drop}
                      </p>
                    )}
                  </div>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
