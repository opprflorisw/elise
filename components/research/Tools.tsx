"use client";

import { useState } from "react";

export type Tool = {
  n: string;
  id: string;
  naam: string;
  kern: string;
  verdict: "bouwen" | "kopen" | "bestaat al" | "kopen + koppelen";
  doel: string;
  flow: string[];
  mvp: string;
  moeilijk: string[];
  voordeel: string;
  bouwtijd: string;
  afhankelijk?: string;
};

const V_STYLE: Record<Tool["verdict"], { bg: string; fg: string }> = {
  bouwen: { bg: "rgba(42,95,214,0.11)", fg: "#1f47a3" },
  kopen: { bg: "rgba(31,158,110,0.12)", fg: "#12704e" },
  "kopen + koppelen": { bg: "rgba(31,158,110,0.12)", fg: "#12704e" },
  "bestaat al": { bg: "rgba(156,79,142,0.13)", fg: "#7a3a6e" },
};

export function Verdict({ v }: { v: Tool["verdict"] }) {
  const s = V_STYLE[v];
  return (
    <span
      className="r-eyebrow inline-block whitespace-nowrap rounded-sm px-1.5 py-0.5 !text-[0.5rem] !tracking-[0.12em]"
      style={{ background: s.bg, color: s.fg }}
    >
      {v}
    </span>
  );
}

export function ToolGrid({ tools }: { tools: Tool[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-2">
      {tools.map((t) => {
        const on = open === t.id;
        return (
          <div key={t.id} className="r-card-solid overflow-hidden">
            <button
              onClick={() => setOpen(on ? null : t.id)}
              className="w-full p-4 text-left transition-colors hover:bg-[rgba(42,95,214,0.02)] sm:p-5"
              aria-expanded={on}
            >
              <div className="flex items-start gap-4">
                <span className="r-numeral shrink-0 text-[1.1rem] opacity-30">{t.n}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                    <span className="r-display-m">{t.naam}</span>
                    <span className="flex items-center gap-2">
                      <Verdict v={t.verdict} />
                      <span className="r-small !text-[0.7rem] opacity-50">{t.bouwtijd}</span>
                    </span>
                  </div>
                  <p className="r-small mt-1.5" style={{ color: "var(--ink-2)" }}>
                    {t.kern}
                  </p>
                </div>
                <span className="r-small shrink-0 opacity-40">{on ? "−" : "+"}</span>
              </div>
            </button>

            {on && (
              <div className="border-t border-[var(--line)] px-4 pb-5 pt-4 sm:px-5 sm:pl-[52px]">
                <p className="r-body !text-[0.9rem] text-[var(--ink-2)]">{t.doel}</p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="r-eyebrow !text-[0.5rem] opacity-50">Kernflow</p>
                    <ol className="mt-2.5 space-y-1.5">
                      {t.flow.map((f, i) => (
                        <li key={f} className="r-small flex gap-2.5">
                          <span className="r-numeral shrink-0 opacity-40">{i + 1}</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="r-eyebrow !text-[0.5rem] opacity-50">MVP met nepdata</p>
                      <p className="r-small mt-2">{t.mvp}</p>
                    </div>
                    <div>
                      <p className="r-eyebrow !text-[0.5rem]" style={{ color: "var(--serious)" }}>
                        Moeilijkheden
                      </p>
                      <ul className="mt-2 space-y-1">
                        {t.moeilijk.map((m) => (
                          <li key={m} className="r-small flex gap-2">
                            <span style={{ color: "var(--serious)" }}>·</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-5 rounded-sm p-3.5"
                  style={{ background: "rgba(31,158,110,0.06)" }}
                >
                  <p className="r-eyebrow !text-[0.5rem]" style={{ color: "#12704e" }}>
                    Waarom het de moeite waard is
                  </p>
                  <p className="r-small mt-1.5">{t.voordeel}</p>
                </div>
                {t.afhankelijk && (
                  <p className="r-small mt-3 !text-[0.72rem]">Hangt af van: {t.afhankelijk}</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/** The data spine — one model, one app. Everything hangs off this. */
export function SystemDiagram() {
  const nodes = [
    { t: "Klant", d: "naam, pand, budget" },
    { t: "Project", d: "scope, fase, honorarium" },
    { t: "Sessie", d: "beelden, opname" },
    { t: "Reacties", d: "keuzes + uitspraken" },
    { t: "Brief", d: "visie, palet, materialen" },
    { t: "Ontwerp", d: "tekeningen, lijst" },
    { t: "Budget", d: "regels, marge" },
  ];
  return (
    <div className="r-scroll">
      <div className="flex min-w-[720px] items-stretch gap-1.5">
        {nodes.map((n, i) => (
          <div key={n.t} className="flex flex-1 items-center gap-1.5">
            <div
              className="flex-1 rounded-sm border p-3"
              style={{
                borderColor: "var(--line-2)",
                background: i === 3 ? "rgba(42,95,214,0.07)" : "#fffdfa",
              }}
            >
              <p className="r-body !text-[0.82rem]" style={{ fontWeight: 600 }}>
                {n.t}
              </p>
              <p className="r-small mt-0.5 !text-[0.66rem] leading-tight">{n.d}</p>
            </div>
            {i < nodes.length - 1 && (
              <span className="shrink-0 text-[0.7rem]" style={{ color: "var(--line-2)" }}>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
