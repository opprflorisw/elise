"use client";

import { useState, useMemo, useEffect } from "react";
import { SERIES, Figure, StackedBars } from "./Charts";

const eur = (n: number) => "€" + Math.round(n).toLocaleString("nl-NL");

function Slider({
  label,
  value,
  set,
  min,
  max,
  step = 1,
  format,
  hint,
}: {
  label: string;
  value: number;
  set: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  format?: (v: number) => string;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="r-small" style={{ color: "var(--ink)" }}>
          {label}
        </label>
        <span className="num r-body !text-[0.9rem]" style={{ fontWeight: 600 }}>
          {format ? format(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-2"
        aria-label={label}
      />
      {hint && <p className="r-small mt-1 !text-[0.72rem] opacity-70">{hint}</p>}
    </div>
  );
}

// ===============================================================
// 1. Capaciteit & omzet — does the mix fit in a real work-year?
// ===============================================================

export type Product = {
  id: string;
  label: string;
  prijs: number;
  uren: number;
  aantal: number;
  prijsMax: number;
};

export function CapacityCalculator({
  defaults,
  urenBeschikbaar = 1700,
  doel = 250000,
}: {
  defaults: Product[];
  urenBeschikbaar?: number;
  doel?: number;
}) {
  const [items, setItems] = useState(defaults);
  const [uren, setUren] = useState(urenBeschikbaar);

  const patch = (id: string, k: "prijs" | "aantal", v: number) =>
    setItems((s) => s.map((p) => (p.id === id ? { ...p, [k]: v } : p)));

  const omzet = items.reduce((a, p) => a + p.prijs * p.aantal, 0);
  const urenNodig = items.reduce((a, p) => a + p.uren * p.aantal, 0);
  const bezetting = (urenNodig / uren) * 100;
  const haalbaar = urenNodig <= uren;
  const doelGehaald = omzet >= doel;
  const uurOpbrengst = urenNodig > 0 ? omzet / urenNodig : 0;

  return (
    <div className="r-card-solid p-5 sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="r-display-m">Capaciteitsrekenmachine</p>
          <p className="r-small mt-1.5 max-w-lg">
            Schuif met aantallen en prijzen. De vraag is niet of €250k mooi is — de vraag is of het
            in een werkjaar past.
          </p>
        </div>
        <button
          onClick={() => {
            setItems(defaults);
            setUren(urenBeschikbaar);
          }}
          className="r-eyebrow shrink-0 rounded-full border border-[var(--line-2)] px-3 py-1.5 !text-[0.5rem] hover:opacity-60"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
        <div className="space-y-6">
          {items.map((p, i) => (
            <div key={p.id} className="border-l-2 pl-4" style={{ borderColor: SERIES[i % 4] }}>
              <p className="r-body !text-[0.92rem]" style={{ fontWeight: 600 }}>
                {p.label}
              </p>
              <p className="r-small !text-[0.72rem] opacity-70">{p.uren} uur per stuk</p>
              <div className="mt-3 space-y-3.5">
                <Slider
                  label="Aantal per jaar"
                  value={p.aantal}
                  set={(v) => patch(p.id, "aantal", v)}
                  min={0}
                  max={p.id === "verkenning" ? 40 : p.id === "advies" ? 60 : 20}
                />
                <Slider
                  label="Prijs"
                  value={p.prijs}
                  set={(v) => patch(p.id, "prijs", v)}
                  min={0}
                  max={p.prijsMax}
                  step={p.prijs > 5000 ? 500 : 100}
                  format={eur}
                />
              </div>
              <p className="r-small mt-2 !text-[0.75rem]">
                = <strong style={{ color: "var(--ink)" }}>{eur(p.prijs * p.aantal)}</strong> ·{" "}
                {p.uren * p.aantal} uur
              </p>
            </div>
          ))}
          <div className="border-t border-[var(--line)] pt-5">
            <Slider
              label="Beschikbare declarabele uren per jaar"
              value={uren}
              set={setUren}
              min={300}
              max={2000}
              step={50}
              hint="Deeltijd ≈ 500–700 · fulltime ≈ 1.500–1.800 (na acquisitie en administratie)"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div
            className="rounded-sm p-5"
            style={{
              background: doelGehaald ? "rgba(12,163,12,0.07)" : "rgba(28,25,23,0.04)",
              border: `1px solid ${doelGehaald ? "rgba(12,163,12,0.3)" : "var(--line)"}`,
            }}
          >
            <p className="r-eyebrow !text-[0.55rem] opacity-60">Omzet</p>
            <p className="num r-display-xl mt-1" style={{ color: doelGehaald ? "#0a7a0a" : "var(--ink)" }}>
              {eur(omzet)}
            </p>
            <p className="r-small mt-2">
              {doelGehaald ? "✓ " : ""}
              {((omzet / doel) * 100).toFixed(0)}% van het doel van {eur(doel)}
            </p>
          </div>

          <div
            className="rounded-sm p-5"
            style={{
              background: haalbaar ? "rgba(28,25,23,0.04)" : "rgba(208,59,59,0.07)",
              border: `1px solid ${haalbaar ? "var(--line)" : "rgba(208,59,59,0.35)"}`,
            }}
          >
            <p className="r-eyebrow !text-[0.55rem] opacity-60">Bezetting</p>
            <p
              className="num r-display-l mt-1"
              style={{ color: haalbaar ? "var(--ink)" : "var(--critical)" }}
            >
              {bezetting.toFixed(0)}%
            </p>
            <div className="mt-3 h-2 w-full rounded-sm" style={{ background: "rgba(28,25,23,0.08)" }}>
              <div
                className="h-full rounded-sm"
                style={{
                  width: `${Math.min(bezetting, 100)}%`,
                  background: haalbaar ? SERIES[0] : "var(--critical)",
                }}
              />
            </div>
            <p className="r-small mt-2.5">
              {urenNodig.toLocaleString("nl-NL")} uur nodig · {uren.toLocaleString("nl-NL")} beschikbaar
              {!haalbaar && (
                <strong style={{ color: "var(--critical)" }}>
                  {" "}
                  — {(urenNodig - uren).toLocaleString("nl-NL")} uur te kort
                </strong>
              )}
            </p>
          </div>

          <div className="rounded-sm border border-[var(--line)] p-5">
            <p className="r-eyebrow !text-[0.55rem] opacity-60">Effectief uurtarief</p>
            <p className="num r-display-l mt-1">{eur(uurOpbrengst)}</p>
            <p className="r-small mt-2">
              Omzet gedeeld door gewerkte uren. Dít is het getal dat zegt of het model werkt — niet de
              omzet.
            </p>
          </div>

          {!haalbaar && (
            <p className="r-small" style={{ color: "var(--critical)" }}>
              Deze mix past niet in het jaar. Verhoog de prijs in plaats van het aantal — dat is de
              enige uitweg die geen extra uren kost.
            </p>
          )}
        </div>
      </div>
      <p className="r-small mt-6 border-t border-[var(--line)] pt-4 !text-[0.72rem]">
        Defaults zijn onderbouwd met de benchmarks op deze pagina; het model zelf is een{" "}
        <em>schatting</em> — geen prognose.
      </p>
    </div>
  );
}

// ===============================================================
// 2. Funnel — how many strangers must see us for one project?
// ===============================================================

export function FunnelCalculator({
  defaults,
}: {
  defaults: {
    bezoekers: number;
    naarIntake: number;
    intakeNaarGesprek: number;
    gesprekNaarVerkenning: number;
    verkenningNaarProject: number;
  };
}) {
  const [v, setV] = useState(defaults);
  const s = (k: keyof typeof defaults) => (n: number) => setV({ ...v, [k]: n });

  const intakes = (v.bezoekers * v.naarIntake) / 100;
  const gesprekken = (intakes * v.intakeNaarGesprek) / 100;
  const verkenningen = (gesprekken * v.gesprekNaarVerkenning) / 100;
  const projecten = (verkenningen * v.verkenningNaarProject) / 100;

  const stages = [
    { label: "Bezoekers per kwartaal", value: Math.round(v.bezoekers), c: "#86b6ef" },
    { label: "Intakes ingevuld", value: Math.round(intakes), c: "#5598e7" },
    { label: "Kennismakingsgesprekken", value: Math.round(gesprekken), c: "#2a78d6" },
    { label: "Betaalde Verkenningen", value: Math.round(verkenningen * 10) / 10, c: "#1c5cab" },
    { label: "Doorlopende projecten", value: Math.round(projecten * 10) / 10, c: "#104281" },
  ];
  const max = stages[0].value || 1;

  return (
    <div className="r-card-solid p-5 sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="r-display-m">Trechterrekenmachine</p>
          <p className="r-small mt-1.5 max-w-lg">
            Hoeveel vreemden moeten ons zien voor één project? Alle percentages zijn aannames —
            verander ze zodra de eerste echte cijfers binnen zijn.
          </p>
        </div>
        <button
          onClick={() => setV(defaults)}
          className="r-eyebrow shrink-0 rounded-full border border-[var(--line-2)] px-3 py-1.5 !text-[0.5rem] hover:opacity-60"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Slider
            label="Websitebezoekers per kwartaal"
            value={v.bezoekers}
            set={s("bezoekers")}
            min={100}
            max={5000}
            step={100}
          />
          <Slider
            label="Bezoeker → intake ingevuld"
            value={v.naarIntake}
            set={s("naarIntake")}
            min={0.2}
            max={10}
            step={0.1}
            format={(n) => `${n}%`}
            hint="Premium diensten: 1–3% is normaal"
          />
          <Slider
            label="Intake → gesprek"
            value={v.intakeNaarGesprek}
            set={s("intakeNaarGesprek")}
            min={5}
            max={100}
            step={5}
            format={(n) => `${n}%`}
            hint="Wij kwalificeren: niet elke intake past bij de studio"
          />
          <Slider
            label="Gesprek → betaalde Verkenning"
            value={v.gesprekNaarVerkenning}
            set={s("gesprekNaarVerkenning")}
            min={5}
            max={100}
            step={5}
            format={(n) => `${n}%`}
          />
          <Slider
            label="Verkenning → doorlopend project"
            value={v.verkenningNaarProject}
            set={s("verkenningNaarProject")}
            min={5}
            max={100}
            step={5}
            format={(n) => `${n}%`}
            hint="De kernaanname van het hele model"
          />
        </div>

        <div>
          <div className="space-y-3">
            {stages.map((st) => (
              <div key={st.label}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="r-small" style={{ color: "var(--ink)" }}>
                    {st.label}
                  </span>
                  <span className="num r-body !text-[0.95rem]" style={{ fontWeight: 700 }}>
                    {st.value.toLocaleString("nl-NL")}
                  </span>
                </div>
                <div className="mt-1.5 h-3 w-full rounded-sm" style={{ background: "rgba(28,25,23,0.055)" }}>
                  <div
                    className="h-full rounded-sm transition-all duration-300"
                    style={{ width: `${Math.max((st.value / max) * 100, 0.5)}%`, background: st.c }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-[var(--line)] pt-5">
            <div className="flex items-baseline justify-between">
              <span className="r-small">Projecten per jaar</span>
              <span className="num r-display-m">{(projecten * 4).toFixed(1)}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="r-small">Verkenningen per jaar</span>
              <span className="num r-display-m">{(verkenningen * 4).toFixed(0)}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="r-small">Bezoekers per project</span>
              <span className="num r-display-m">
                {projecten > 0 ? Math.round(v.bezoekers / projecten).toLocaleString("nl-NL") : "—"}
              </span>
            </div>
          </div>

          {verkenningen > 13 && (
            <p className="r-small mt-4" style={{ color: "var(--serious)" }}>
              ⚠ Meer dan één Verkenning per week in de deeltijdfase — dat past niet naast een baan. In
              fase 1 is een té volle trechter een probleem, geen succes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ===============================================================
// 3. Kostendashboard — fixed floor + variable per session
// ===============================================================

export function CostDashboard({
  vast,
  variabel,
  verkoopprijs = 2000,
}: {
  vast: { label: string; value: number; note?: string }[];
  variabel: { label: string; value: number; note?: string }[];
  verkoopprijs?: number;
}) {
  const [sessies, setSessies] = useState(20);
  const vastTotaal = vast.reduce((a, i) => a + i.value, 0);
  const varPerSessie = variabel.reduce((a, i) => a + i.value, 0);
  const jaarVast = vastTotaal * 12;
  const jaarVar = varPerSessie * sessies;
  const marge = ((verkoopprijs - varPerSessie) / verkoopprijs) * 100;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Figure
        title="Vaste maandlasten"
        note="De vloer: wat het kost om te bestaan, ook in een maand zonder klant."
        table={{
          head: ["Post", "Per maand"],
          rows: vast.map((i) => [i.label, eur(i.value)]),
        }}
      >
        <div className="space-y-2.5">
          {vast.map((i) => (
            <div key={i.label} className="flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-2">
              <div>
                <span className="r-small" style={{ color: "var(--ink)" }}>
                  {i.label}
                </span>
                {i.note && <p className="r-small !text-[0.7rem] opacity-60">{i.note}</p>}
              </div>
              <span className="num r-body !text-[0.9rem]" style={{ fontWeight: 600 }}>
                {eur(i.value)}
              </span>
            </div>
          ))}
          <div className="flex items-baseline justify-between pt-2">
            <span className="r-eyebrow !text-[0.55rem]">Per maand</span>
            <span className="num r-display-m">{eur(vastTotaal)}</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="r-eyebrow !text-[0.55rem] opacity-60">Per jaar</span>
            <span className="num r-body" style={{ fontWeight: 600 }}>
              {eur(jaarVast)}
            </span>
          </div>
        </div>
      </Figure>

      <Figure
        title="Variabele AI-kosten per Verkenning"
        note="Wat één sessie aan rekenkracht kost — het getal dat de hele these draagt."
        table={{
          head: ["Component", "Per sessie"],
          rows: variabel.map((i) => [i.label, "€" + i.value.toFixed(2)]),
        }}
      >
        <div className="space-y-2.5">
          {variabel.map((i) => (
            <div key={i.label} className="flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-2">
              <div>
                <span className="r-small" style={{ color: "var(--ink)" }}>
                  {i.label}
                </span>
                {i.note && <p className="r-small !text-[0.7rem] opacity-60">{i.note}</p>}
              </div>
              <span className="num r-body !text-[0.9rem]" style={{ fontWeight: 600 }}>
                €{i.value.toFixed(2)}
              </span>
            </div>
          ))}
          <div className="flex items-baseline justify-between pt-2">
            <span className="r-eyebrow !text-[0.55rem]">Per sessie</span>
            <span className="num r-display-m">€{varPerSessie.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-5 rounded-sm p-4" style={{ background: "rgba(12,163,12,0.07)" }}>
          <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#0a7a0a" }}>
            Brutomarge op een Verkenning van {eur(verkoopprijs)}
          </p>
          <p className="num r-display-l mt-1" style={{ color: "#0a7a0a" }}>
            {marge.toFixed(1)}%
          </p>
          <p className="r-small mt-1.5">
            De AI is niet de kostenpost. Elise&rsquo;s tijd is de kostenpost.
          </p>
        </div>

        <div className="mt-5 border-t border-[var(--line)] pt-4">
          <Slider
            label="Verkenningen per jaar"
            value={sessies}
            set={setSessies}
            min={0}
            max={60}
          />
          <p className="r-small mt-2">
            AI-kosten per jaar: <strong style={{ color: "var(--ink)" }}>{eur(jaarVar)}</strong> — tegenover{" "}
            {eur(jaarVast)} aan vaste lasten.
          </p>
        </div>
      </Figure>
    </div>
  );
}

// ===============================================================
// 4. Setup-checklist — persisted, phased
// ===============================================================

export type ChecklistItem = {
  id: string;
  fase: string;
  actie: string;
  waar: string;
  kosten: string;
  prio: "must" | "should" | "later";
};

const KEY = "verstelle-setup-v1";

export function SetupChecklist({ items }: { items: ChecklistItem[] }) {
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState<string>("alle");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(KEY, JSON.stringify(done));
      } catch {}
    }
  }, [done, ready]);

  const fasen = useMemo(() => [...new Set(items.map((i) => i.fase))], [items]);
  const toggle = (id: string) =>
    setDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));

  const shown = filter === "alle" ? items : items.filter((i) => i.fase === filter);
  const pct = items.length ? (done.length / items.length) * 100 : 0;

  const prioColor = { must: "var(--critical)", should: "var(--warning)", later: "var(--ink-3)" };

  return (
    <div className="r-card-solid p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="r-display-m">De doe-dit-lijst</p>
          <p className="r-small mt-1.5">
            Afvinken blijft bewaard in deze browser. {done.length} van {items.length} gedaan.
          </p>
        </div>
        <button
          onClick={() => setDone([])}
          className="r-eyebrow rounded-full border border-[var(--line-2)] px-3 py-1.5 !text-[0.5rem] hover:opacity-60"
        >
          Wis
        </button>
      </div>

      <div className="mb-6 h-1.5 w-full rounded-sm" style={{ background: "rgba(28,25,23,0.07)" }}>
        <div
          className="h-full rounded-sm transition-all duration-500"
          style={{ width: `${pct}%`, background: pct === 100 ? "#0ca30c" : SERIES[0] }}
        />
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {["alle", ...fasen].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="r-eyebrow rounded-full border px-3 py-1.5 !text-[0.5rem] transition-all"
            style={{
              borderColor: filter === f ? "var(--series-1)" : "var(--line-2)",
              background: filter === f ? "var(--series-1)" : "transparent",
              color: filter === f ? "#fff" : "var(--ink-3)",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-1">
        {shown.map((it) => {
          const on = done.includes(it.id);
          return (
            <li key={it.id}>
              <button
                onClick={() => toggle(it.id)}
                className="flex w-full items-start gap-3 rounded-sm border-b border-[var(--line)] px-1 py-2.5 text-left transition-colors hover:bg-[rgba(42,95,214,0.03)]"
              >
                <span
                  className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-sm border text-[0.6rem] leading-none"
                  style={{
                    borderColor: on ? "#0ca30c" : "var(--line-2)",
                    background: on ? "#0ca30c" : "transparent",
                    color: "#fff",
                  }}
                  aria-hidden
                >
                  {on ? "✓" : ""}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className="r-body !text-[0.9rem]"
                    style={{
                      textDecoration: on ? "line-through" : "none",
                      opacity: on ? 0.45 : 1,
                    }}
                  >
                    {it.actie}
                  </span>
                  <span className="r-small mt-0.5 block !text-[0.72rem]">
                    {it.waar} · {it.kosten}
                  </span>
                </span>
                <span
                  className="r-eyebrow mt-0.5 shrink-0 !text-[0.45rem]"
                  style={{ color: prioColor[it.prio] }}
                >
                  {it.prio}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { StackedBars };
