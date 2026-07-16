"use client";

import { useState } from "react";

// ============================================================
// Charts for the dossier. Plain SVG — no chart library.
// Rules applied throughout: recessive axes, thin marks, 4px
// rounded data-ends, 2px surface gaps between fills, direct
// labels + legend for identity (never colour alone), a hover
// layer on every plot, and a table view under each figure.
// Palette is the validated set from globals.css (.research).
// ============================================================

const RAMP = ["#86b6ef", "#5598e7", "#2a78d6", "#1c5cab", "#104281"];
export const SERIES = ["#2a5fd6", "#c8722a", "#1f9e6e", "#9c4f8e"];
const INK = "#1c1917";
const INK3 = "#6f675c";
const SURFACE = "#fffdfa";

export function Figure({
  title,
  note,
  children,
  table,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
  table?: { head: string[]; rows: (string | number)[][] };
}) {
  const [showTable, setShowTable] = useState(false);
  return (
    <figure className="r-card-solid p-5 sm:p-6">
      <figcaption className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="r-display-m">{title}</p>
          {note && <p className="r-small mt-1.5 max-w-xl">{note}</p>}
        </div>
        {table && (
          <button
            onClick={() => setShowTable(!showTable)}
            className="r-eyebrow shrink-0 rounded-full border border-[var(--line-2)] px-3 py-1.5 !text-[0.5rem] transition-opacity hover:opacity-60"
          >
            {showTable ? "Grafiek" : "Tabel"}
          </button>
        )}
      </figcaption>
      {showTable && table ? (
        <div className="r-scroll">
          <table className="r-table min-w-[420px]">
            <thead>
              <tr>
                {table.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        children
      )}
    </figure>
  );
}

// ---------------------------------------------------------------
// Funnel — descending magnitude. Honest horizontal bars, not a
// tapering trapezoid (which distorts area).
// ---------------------------------------------------------------

export type FunnelStage = { label: string; value: number; unit?: string; note?: string };

export function Funnel({ stages }: { stages: FunnelStage[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(...stages.map((s) => s.value));
  const rowH = 58;
  const labelW = 0;
  const h = stages.length * rowH;

  return (
    <div className="relative">
      <svg viewBox={`0 0 700 ${h}`} className="w-full" role="img" style={{ overflow: "visible" }}>
        {stages.map((s, i) => {
          const w = Math.max((s.value / max) * 700, 3);
          const y = i * rowH;
          const on = hover === i;
          return (
            <g
              key={s.label}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "default" }}
            >
              {/* generous hit target */}
              <rect x={0} y={y} width={700} height={rowH} fill="transparent" />
              <text x={labelW} y={y + 15} fontSize="11" fill={INK3} style={{ letterSpacing: "0.06em" }}>
                {s.label.toUpperCase()}
              </text>
              <rect
                x={labelW}
                y={y + 23}
                width={w}
                height={16}
                rx={4}
                fill={RAMP[Math.min(i, RAMP.length - 1)]}
                opacity={hover === null || on ? 1 : 0.45}
                style={{ transition: "opacity .2s" }}
              />
              <text
                x={labelW + w + 10}
                y={y + 36}
                fontSize="13"
                fill={INK}
                fontWeight="600"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {s.value.toLocaleString("nl-NL")}
                {s.unit ?? ""}
              </text>
            </g>
          );
        })}
      </svg>
      {hover !== null && stages[hover].note && (
        <div
          className="pointer-events-none absolute left-0 right-0 rounded-sm border border-[var(--line-2)] px-3 py-2"
          style={{ top: hover * rowH + rowH - 6, background: SURFACE, zIndex: 5 }}
        >
          <p className="r-small !text-[0.78rem]" style={{ color: INK }}>
            {stages[hover].note}
          </p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------
// Positioning map — 2 identities only (competitors vs us), so
// colour never has to separate more than two things.
// ---------------------------------------------------------------

export type MapPoint = { label: string; x: number; y: number; us?: boolean };

export function PositioningMap({
  points,
  xLabel,
  yLabel,
  xLow,
  xHigh,
  yLow,
  yHigh,
}: {
  points: MapPoint[];
  xLabel: string;
  yLabel: string;
  xLow: string;
  xHigh: string;
  yLow: string;
  yHigh: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 700;
  const H = 460;
  const P = 46;
  const px = (x: number) => P + (x / 100) * (W - P * 2);
  const py = (y: number) => H - P - (y / 100) * (H - P * 2);

  return (
    <div>
      <div className="r-scroll">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img">
          {/* recessive grid */}
          {[0, 25, 50, 75, 100].map((t) => (
            <g key={t}>
              <line x1={px(t)} y1={P} x2={px(t)} y2={H - P} stroke={INK} strokeOpacity={0.07} />
              <line x1={P} y1={py(t)} x2={W - P} y2={py(t)} stroke={INK} strokeOpacity={0.07} />
            </g>
          ))}
          {/* axes */}
          <line x1={P} y1={H - P} x2={W - P} y2={H - P} stroke={INK} strokeOpacity={0.22} />
          <line x1={P} y1={P} x2={P} y2={H - P} stroke={INK} strokeOpacity={0.22} />
          <text x={W - P} y={H - P + 26} fontSize="10" fill={INK3} textAnchor="end" style={{ letterSpacing: "0.1em" }}>
            {xHigh.toUpperCase()} →
          </text>
          <text x={P} y={H - P + 26} fontSize="10" fill={INK3} style={{ letterSpacing: "0.1em" }}>
            ← {xLow.toUpperCase()}
          </text>
          <text x={P - 12} y={P - 12} fontSize="10" fill={INK3} style={{ letterSpacing: "0.1em" }}>
            ↑ {yHigh.toUpperCase()}
          </text>
          <text x={P - 12} y={H - P + 26} fontSize="10" fill={INK3} style={{ letterSpacing: "0.1em" }}>
            ↓ {yLow.toUpperCase()}
          </text>

          {points.map((p, i) => {
            const on = hover === i;
            const c = p.us ? SERIES[0] : INK;
            return (
              <g
                key={p.label}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: "default" }}
              >
                <circle cx={px(p.x)} cy={py(p.y)} r={16} fill="transparent" />
                <circle
                  cx={px(p.x)}
                  cy={py(p.y)}
                  r={p.us ? 8 : 5}
                  fill={p.us ? c : "none"}
                  stroke={c}
                  strokeWidth={2}
                  strokeOpacity={p.us ? 1 : 0.55}
                  opacity={hover === null || on ? 1 : 0.35}
                  style={{ transition: "opacity .2s" }}
                />
                {p.us && (
                  <circle
                    cx={px(p.x)}
                    cy={py(p.y)}
                    r={13}
                    fill="none"
                    stroke={c}
                    strokeWidth={1}
                    strokeOpacity={0.4}
                  />
                )}
                {(on || p.us) && (
                  // flip the label to the inside when the point sits near the right edge,
                  // otherwise long names run off the plot
                  <text
                    x={px(p.x) + (p.x > 62 ? -1 : 1) * (p.us ? 19 : 10)}
                    y={py(p.y) + 4}
                    textAnchor={p.x > 62 ? "end" : "start"}
                    fontSize={p.us ? 12 : 11}
                    fontWeight={p.us ? 700 : 500}
                    fill={INK}
                    stroke={SURFACE}
                    strokeWidth={3}
                    paintOrder="stroke"
                  >
                    {p.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap gap-5">
        <span className="r-small flex items-center gap-2">
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="4" fill="none" stroke={INK} strokeWidth="2" strokeOpacity="0.55" />
          </svg>
          Concurrent
        </span>
        <span className="r-small flex items-center gap-2">
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="5" fill={SERIES[0]} />
          </svg>
          Studio Verstelle
        </span>
        <span className="r-small opacity-60">{xLabel} × {yLabel} · beweeg over een punt voor de naam</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Stacked revenue bars — ≤4 series, direct-labelled + legend,
// 2px surface gap between segments.
// ---------------------------------------------------------------

export type StackSeries = { label: string; values: number[] };

export function StackedBars({
  categories,
  series,
  unit = "k",
  target,
}: {
  categories: string[];
  series: StackSeries[];
  unit?: string;
  target?: { value: number; label: string };
}) {
  const [hover, setHover] = useState<{ c: number; s: number } | null>(null);
  const W = 700;
  const H = 320;
  const P = { t: 20, r: 16, b: 52, l: 46 };
  const totals = categories.map((_, ci) => series.reduce((a, s) => a + s.values[ci], 0));
  const max = Math.max(...totals, target?.value ?? 0) * 1.12;
  const bw = Math.min(88, (W - P.l - P.r) / categories.length - 26);
  const cx = (i: number) => P.l + ((i + 0.5) * (W - P.l - P.r)) / categories.length;
  const sy = (v: number) => H - P.b - (v / max) * (H - P.t - P.b);

  return (
    <div>
      <div className="r-scroll">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img">
          {/* recessive y grid */}
          {[0, 0.25, 0.5, 0.75, 1].map((f) => {
            const v = max * f;
            return (
              <g key={f}>
                <line x1={P.l} y1={sy(v)} x2={W - P.r} y2={sy(v)} stroke={INK} strokeOpacity={0.07} />
                <text x={P.l - 8} y={sy(v) + 4} fontSize="10" fill={INK3} textAnchor="end">
                  {Math.round(v)}
                </text>
              </g>
            );
          })}
          {target && (
            <g>
              <line
                x1={P.l}
                y1={sy(target.value)}
                x2={W - P.r}
                y2={sy(target.value)}
                stroke={INK}
                strokeWidth={1.5}
                strokeDasharray="5 4"
                strokeOpacity={0.5}
              />
              <text
                x={W - P.r}
                y={sy(target.value) - 7}
                fontSize="10"
                fill={INK}
                textAnchor="end"
                fontWeight="600"
                style={{ letterSpacing: "0.08em" }}
              >
                {target.label.toUpperCase()}
              </text>
            </g>
          )}

          {categories.map((cat, ci) => {
            let acc = 0;
            return (
              <g key={cat}>
                {series.map((s, si) => {
                  const v = s.values[ci];
                  const y0 = sy(acc);
                  acc += v;
                  const y1 = sy(acc);
                  const hgt = Math.max(y0 - y1 - 2, 0); // 2px surface gap
                  const on = hover?.c === ci && hover?.s === si;
                  const dim = hover !== null && !on;
                  return (
                    <rect
                      key={s.label}
                      x={cx(ci) - bw / 2}
                      y={y1}
                      width={bw}
                      height={hgt}
                      rx={si === series.length - 1 ? 4 : 0}
                      fill={SERIES[si]}
                      opacity={dim ? 0.4 : 1}
                      onMouseEnter={() => setHover({ c: ci, s: si })}
                      onMouseLeave={() => setHover(null)}
                      style={{ transition: "opacity .18s" }}
                    />
                  );
                })}
                <text
                  x={cx(ci)}
                  y={sy(totals[ci]) - 9}
                  fontSize="12"
                  fontWeight="700"
                  fill={INK}
                  textAnchor="middle"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  €{Math.round(totals[ci])}{unit}
                </text>
                <text x={cx(ci)} y={H - P.b + 18} fontSize="10.5" fill={INK3} textAnchor="middle">
                  {cat}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {series.map((s, i) => (
          <span key={s.label} className="r-small flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: SERIES[i] }} />
            {s.label}
            {hover?.s === i && (
              <span style={{ color: INK, fontWeight: 600 }}>
                {" "}€{s.values[hover.c]}
                {unit}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Cost breakdown — magnitude, one hue, ordered. Sequential job.
// ---------------------------------------------------------------

export function CostBars({ items, unit = "€" }: { items: { label: string; value: number; note?: string }[]; unit?: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(...items.map((i) => i.value));
  const total = items.reduce((a, i) => a + i.value, 0);
  return (
    <div>
      <div className="space-y-2.5">
        {items.map((it, i) => {
          const pct = (it.value / max) * 100;
          const share = (it.value / total) * 100;
          const on = hover === i;
          return (
            <div
              key={it.label}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="grid grid-cols-[1fr,auto] items-center gap-3"
            >
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="r-small" style={{ color: INK }}>
                    {it.label}
                  </span>
                  <span className="r-small opacity-50">{share.toFixed(0)}%</span>
                </div>
                <div className="mt-1.5 h-2.5 w-full rounded-sm" style={{ background: "rgba(28,25,23,0.055)" }}>
                  <div
                    className="h-full rounded-sm transition-opacity"
                    style={{
                      width: `${pct}%`,
                      background: RAMP[2],
                      opacity: hover === null || on ? 1 : 0.45,
                    }}
                  />
                </div>
                {on && it.note && <p className="r-small mt-1.5 !text-[0.75rem]">{it.note}</p>}
              </div>
              <span
                className="num r-body !text-[0.9rem] tabular-nums"
                style={{ fontWeight: 600, minWidth: "4.5rem", textAlign: "right" }}
              >
                {unit}
                {it.value.toLocaleString("nl-NL")}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-[var(--line-2)] pt-3">
        <span className="r-eyebrow !text-[0.55rem]">Totaal</span>
        <span className="num r-display-m">
          {unit}
          {total.toLocaleString("nl-NL")}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Risk matrix — status colours, always with number + label, never
// colour alone.
// ---------------------------------------------------------------

export type Risk = { id: string; label: string; kans: number; impact: number; mitigatie: string };

const sev = (r: Risk) => r.kans * r.impact;
const sevColor = (s: number) =>
  s >= 15 ? "#d03b3b" : s >= 9 ? "#ec835a" : s >= 5 ? "#fab219" : "#0ca30c";
const sevWord = (s: number) => (s >= 15 ? "kritiek" : s >= 9 ? "ernstig" : s >= 5 ? "let op" : "laag");

export function RiskMatrix({ risks }: { risks: Risk[] }) {
  const [hover, setHover] = useState<string | null>(null);
  const W = 620;
  const H = 460;
  const P = 58;
  const px = (v: number) => P + ((v - 0.5) / 5) * (W - P * 2);
  const py = (v: number) => H - P - ((v - 0.5) / 5) * (H - P * 2);
  const active = risks.find((r) => r.id === hover);

  return (
    <div>
      <div className="r-scroll">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[480px]" role="img">
          {[1, 2, 3, 4, 5].map((t) => (
            <g key={t}>
              <line x1={px(t + 0.5)} y1={P} x2={px(t + 0.5)} y2={H - P} stroke={INK} strokeOpacity={0.06} />
              <line x1={P} y1={py(t + 0.5)} x2={W - P} y2={py(t + 0.5)} stroke={INK} strokeOpacity={0.06} />
              <text x={px(t)} y={H - P + 20} fontSize="10" fill={INK3} textAnchor="middle">
                {t}
              </text>
              <text x={P - 14} y={py(t) + 4} fontSize="10" fill={INK3} textAnchor="end">
                {t}
              </text>
            </g>
          ))}
          <line x1={P} y1={H - P} x2={W - P} y2={H - P} stroke={INK} strokeOpacity={0.22} />
          <line x1={P} y1={P} x2={P} y2={H - P} stroke={INK} strokeOpacity={0.22} />
          <text x={W / 2} y={H - 14} fontSize="10" fill={INK3} textAnchor="middle" style={{ letterSpacing: "0.14em" }}>
            KANS →
          </text>
          <text
            x={16}
            y={H / 2}
            fontSize="10"
            fill={INK3}
            textAnchor="middle"
            style={{ letterSpacing: "0.14em" }}
            transform={`rotate(-90 16 ${H / 2})`}
          >
            IMPACT →
          </text>

          {risks.map((r) => {
            const s = sev(r);
            const on = hover === r.id;
            return (
              <g
                key={r.id}
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: "default" }}
              >
                <circle cx={px(r.kans)} cy={py(r.impact)} r={18} fill="transparent" />
                <circle
                  cx={px(r.kans)}
                  cy={py(r.impact)}
                  r={13}
                  fill={sevColor(s)}
                  fillOpacity={on ? 1 : 0.82}
                  stroke={SURFACE}
                  strokeWidth={2}
                />
                <text
                  x={px(r.kans)}
                  y={py(r.impact) + 4}
                  fontSize="10"
                  fontWeight="700"
                  fill="#fff"
                  textAnchor="middle"
                >
                  {r.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div
        className="mt-4 min-h-[62px] rounded-sm border border-[var(--line)] p-3.5"
        style={{ background: active ? "rgba(42,95,214,0.03)" : "transparent" }}
      >
        {active ? (
          <>
            <p className="r-body !text-[0.9rem]" style={{ fontWeight: 600 }}>
              {active.id}. {active.label}{" "}
              <span
                className="r-eyebrow ml-1 rounded-sm px-1.5 py-0.5 !text-[0.5rem]"
                style={{ background: sevColor(sev(active)), color: "#fff" }}
              >
                {sevWord(sev(active))}
              </span>
            </p>
            <p className="r-small mt-1.5">{active.mitigatie}</p>
          </>
        ) : (
          <p className="r-small">Beweeg over een risico voor de mitigatie.</p>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {[
          { c: "#0ca30c", w: "laag" },
          { c: "#fab219", w: "let op" },
          { c: "#ec835a", w: "ernstig" },
          { c: "#d03b3b", w: "kritiek" },
        ].map((l) => (
          <span key={l.w} className="r-small flex items-center gap-1.5 !text-[0.75rem]">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: l.c }} />
            {l.w}
          </span>
        ))}
      </div>
    </div>
  );
}
