"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DemoFrame, Stappen, DemoNav } from "@/components/research/Prd";
import { VARIANTEN, TRANSCRIPT, OOGST, MOCK_REACTIES, type Uitspraak } from "@/lib/mock";

const STAPPEN = ["De opname", "Het transcript", "De koppeling", "De oogst"];

/** Alleen de uitspraken waar de extractie een mening uit haalt. */
const CHIPS = TRANSCRIPT.filter((u) => u.chip);
const EIND = TRANSCRIPT[TRANSCRIPT.length - 1].sec;

/** wens / bezwaar / kern — de kleur is de betekenis, het woord staat er altijd bij. */
const SOORT: Record<string, { bg: string; fg: string }> = {
  kern: { bg: "rgba(42,95,214,0.12)", fg: "#1f47a3" },
  wens: { bg: "rgba(250,178,25,0.22)", fg: "#8a5f04" },
  bezwaar: { bg: "rgba(208,59,59,0.12)", fg: "#a52c2c" },
};

/** Rol, niet identiteit: de klant is groen, de studio is terracotta. De naam doet de rest. */
const SPREKER: Record<string, { bg: string; fg: string }> = {
  Jasmijn: { bg: "rgba(31,158,110,0.12)", fg: "#12704e" },
  Roos: { bg: "rgba(31,158,110,0.12)", fg: "#12704e" },
  Elise: { bg: "rgba(200,114,42,0.13)", fg: "#8f4f18" },
};

function SprekerBadge({ wie }: { wie: string }) {
  const s = SPREKER[wie] ?? SPREKER.Elise;
  return (
    <span
      className="r-eyebrow inline-block whitespace-nowrap rounded-sm px-1.5 py-0.5 !text-[0.46rem] !tracking-[0.12em]"
      style={{ background: s.bg, color: s.fg }}
    >
      {wie}
    </span>
  );
}

function Chip({ u, dim = false }: { u: Uitspraak; dim?: boolean }) {
  const s = SOORT[u.soort ?? "kern"];
  return (
    <span
      className="r-eyebrow inline-flex items-baseline gap-1.5 rounded-full px-2 py-1 !text-[0.46rem] !tracking-[0.08em] transition-opacity"
      style={{ background: s.bg, color: s.fg, opacity: dim ? 0.35 : 1 }}
    >
      <span className="opacity-55">{u.soort}</span>
      {u.chip}
    </span>
  );
}

function beeldVan(id: string | null) {
  return VARIANTEN.find((v) => v.id === id) ?? null;
}

export function SpraakDemo() {
  const [stap, setStap] = useState(0);

  // stap 1 — de "opname"
  const [i, setI] = useState(0);
  const [spelend, setSpelend] = useState(false);

  // stap 3 — de koppeling
  const [gekoppeld, setGekoppeld] = useState(0);
  const [focus, setFocus] = useState<string | null>(null);

  const ga = (n: number) => setStap(Math.max(0, Math.min(STAPPEN.length - 1, n)));

  useEffect(() => {
    if (!spelend) return;
    if (i >= TRANSCRIPT.length - 1) {
      setSpelend(false);
      return;
    }
    const t = setTimeout(() => setI((x) => x + 1), 1600);
    return () => clearTimeout(t);
  }, [spelend, i]);

  useEffect(() => {
    if (stap !== 2 || gekoppeld >= CHIPS.length) return;
    const t = setTimeout(() => setGekoppeld((g) => g + 1), 620);
    return () => clearTimeout(t);
  }, [stap, gekoppeld]);

  const nu = TRANSCRIPT[i];
  const opScherm = beeldVan(nu.beeld);
  const laatste = gekoppeld > 0 ? CHIPS[gekoppeld - 1] : null;

  return (
    <DemoFrame
      titel="Spraak-laag"
      stap={stap + 1}
      van={STAPPEN.length}
      onder={<DemoNav stap={stap} van={STAPPEN.length} ga={ga} klaar="Dít is het bedrijfsgeheim" />}
    >
      <Stappen stappen={STAPPEN} actief={stap} ga={ga} />

      <div className="mt-6">
        {/* ---------- 1. de opname ---------- */}
        {stap === 0 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Twee uur, twee stemmen, één laptop. Er is hier geen audio — het gaat om wat de
              tool bijhoudt: <strong>wie zei wat, op welke seconde, en wat stond er toen op het
              scherm.</strong>
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_13rem]">
              <div
                className="flex flex-col justify-between rounded-sm border p-4"
                style={{ borderColor: "var(--line-2)" }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="r-numeral text-[0.85rem]" style={{ color: "var(--series-1)" }}>
                      {nu.t}
                    </span>
                    <SprekerBadge wie={nu.spreker} />
                    {nu.chip && (
                      <span className="r-eyebrow !text-[0.44rem] opacity-40">
                        de extractie pikt deze eruit
                      </span>
                    )}
                  </div>
                  <p className="r-accent-serif mt-3 text-[1.05rem] leading-[1.55]">
                    &ldquo;{nu.tekst}&rdquo;
                  </p>
                </div>
                <p className="r-small mt-4 !text-[0.68rem] opacity-45">
                  uitspraak {i + 1} van {TRANSCRIPT.length}
                </p>
              </div>

              <div>
                <p className="r-eyebrow !text-[0.46rem] opacity-45">Op het scherm</p>
                {opScherm ? (
                  <figure className="mt-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image
                        src={opScherm.src}
                        alt={opScherm.naam}
                        fill
                        className="object-cover"
                        sizes="208px"
                      />
                    </div>
                    <figcaption className="r-small mt-1.5 !text-[0.68rem]">
                      {opScherm.naam}
                    </figcaption>
                  </figure>
                ) : (
                  <div
                    className="mt-2 flex aspect-[4/3] items-center justify-center rounded-sm border border-dashed p-3"
                    style={{ borderColor: "var(--line-2)" }}
                  >
                    <p className="r-small text-center !text-[0.68rem] opacity-60">
                      Geen beeld. De laptop was al dicht.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* de tijdlijn */}
            <div className="mt-6">
              <div className="relative mx-2 h-5">
                <div
                  className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                  style={{ background: "var(--line-2)" }}
                  aria-hidden
                />
                <div
                  className="absolute left-0 top-1/2 h-px -translate-y-1/2 transition-all duration-500"
                  style={{ width: `${(nu.sec / EIND) * 100}%`, background: "var(--series-1)" }}
                  aria-hidden
                />
                {TRANSCRIPT.map((u, k) => (
                  <button
                    key={u.sec}
                    onClick={() => {
                      setI(k);
                      setSpelend(false);
                    }}
                    aria-label={`Spring naar ${u.t} — ${u.spreker}`}
                    aria-current={k === i ? "true" : undefined}
                    className="absolute top-0 h-5 w-4 -translate-x-1/2"
                    style={{ left: `${(u.sec / EIND) * 100}%` }}
                  >
                    <span
                      className="mx-auto block rounded-full transition-all"
                      style={{
                        height: k === i ? "0.6rem" : "0.4rem",
                        width: k === i ? "0.6rem" : "0.4rem",
                        background: k <= i ? "var(--series-1)" : "var(--line-2)",
                      }}
                    />
                  </button>
                ))}
              </div>
              <div className="mx-2 mt-1 flex justify-between">
                <span className="r-numeral text-[0.62rem] opacity-35">00:00</span>
                <span className="r-numeral text-[0.62rem] opacity-35">{TRANSCRIPT[TRANSCRIPT.length - 1].t}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  if (i >= TRANSCRIPT.length - 1) setI(0);
                  setSpelend((s) => !s);
                }}
                aria-pressed={spelend}
                className="r-eyebrow rounded-full px-4 py-2 !text-[0.5rem]"
                style={{ background: "var(--series-1)", color: "#fff" }}
              >
                {spelend ? "❚❚ pauze" : i >= TRANSCRIPT.length - 1 ? "↻ opnieuw" : "▶ speel af"}
              </button>
              <button
                onClick={() => {
                  setSpelend(false);
                  setI((x) => Math.max(0, x - 1));
                }}
                disabled={i === 0}
                className="r-eyebrow rounded-full border px-3 py-2 !text-[0.5rem] disabled:opacity-25"
                style={{ borderColor: "var(--line-2)", color: "var(--ink-2)" }}
              >
                ← vorige
              </button>
              <button
                onClick={() => {
                  setSpelend(false);
                  setI((x) => Math.min(TRANSCRIPT.length - 1, x + 1));
                }}
                disabled={i === TRANSCRIPT.length - 1}
                className="r-eyebrow rounded-full border px-3 py-2 !text-[0.5rem] disabled:opacity-25"
                style={{ borderColor: "var(--line-2)", color: "var(--ink-2)" }}
              >
                volgende →
              </button>
              <span className="r-small ml-auto !text-[0.68rem] opacity-45">
                let op de laatste: 02:41, geen beeld
              </span>
            </div>
          </div>
        )}

        {/* ---------- 2. het transcript ---------- */}
        {stap === 1 && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                Dit levert Voxtral in één call: de tekst én wie hem zei. Diarisatie zit zonder
                meerprijs inbegrepen — dat is de reden dat het Voxtral werd, niet de prijs.
              </p>
              <span className="r-small !text-[0.7rem] opacity-55">€ 0,31 voor twee uur</span>
            </div>

            <div className="mt-5 space-y-0">
              {TRANSCRIPT.map((u) => {
                const beeld = beeldVan(u.beeld);
                const studio = u.spreker === "Elise";
                return (
                  <div
                    key={u.sec}
                    className="grid gap-x-3.5 gap-y-1 border-b border-[var(--line)] py-3 last:border-0 sm:grid-cols-[3.2rem_1fr_7rem]"
                    style={{ opacity: studio ? 0.6 : 1 }}
                  >
                    <span className="r-numeral text-[0.72rem] opacity-45">{u.t}</span>
                    <div className="min-w-0">
                      <SprekerBadge wie={u.spreker} />
                      <p className="r-body mt-1.5 !text-[0.88rem] text-[var(--ink-2)]">{u.tekst}</p>
                    </div>
                    <span className="r-small !text-[0.66rem] opacity-45 sm:text-right">
                      {beeld ? beeld.naam.split(" — ")[0] : "— geen beeld"}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="r-small mt-4 !text-[0.74rem] italic">
              Elise&rsquo;s regels staan er lichter bij: de tool luistert naar de klant, niet
              naar de studio. En de rechterkolom — welk beeld op dat moment op het scherm stond
              — komt niet uit de transcriptie. Die weet de sessie-tool. Daar begint het stuk dat
              niemand verkoopt.
            </p>
          </div>
        )}

        {/* ---------- 3. de koppeling ---------- */}
        {stap === 2 && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                Elke uitspraak wordt een mening, en elke mening zoekt zijn beeld op via het
                tijdstempel. <strong>Dit is de hele uitvinding</strong> — en het is niets meer
                dan een seconde vergelijken met een tijdlijn.
              </p>
              <button
                onClick={() => {
                  setGekoppeld(0);
                  setFocus(null);
                }}
                className="r-eyebrow rounded-full border px-3 py-1.5 !text-[0.46rem]"
                style={{ borderColor: "var(--line-2)", color: "var(--ink-2)" }}
              >
                ↻ opnieuw
              </button>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
              {/* links: de uitspraken */}
              <div className="space-y-2">
                {CHIPS.map((u, k) => {
                  const zichtbaar = k < gekoppeld;
                  const gedimd = focus !== null && u.beeld !== focus;
                  const beeld = beeldVan(u.beeld);
                  return (
                    <div
                      key={u.sec}
                      className="rounded-sm border p-2.5"
                      style={{
                        borderColor:
                          laatste?.sec === u.sec ? "var(--series-1)" : "var(--line)",
                        opacity: zichtbaar ? (gedimd ? 0.3 : 1) : 0,
                        transform: zichtbaar ? "translateY(0)" : "translateY(8px)",
                        transition: "opacity 420ms ease, transform 420ms ease, border-color 420ms ease",
                      }}
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="r-numeral text-[0.68rem] opacity-45">{u.t}</span>
                        <SprekerBadge wie={u.spreker} />
                      </div>
                      <p className="r-small mt-1.5 !text-[0.74rem]">&ldquo;{u.tekst}&rdquo;</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="r-eyebrow !text-[0.44rem] opacity-35">wordt</span>
                        <Chip u={u} />
                        <span className="r-eyebrow !text-[0.44rem] opacity-35">→</span>
                        <span className="r-small !text-[0.68rem] opacity-60">
                          {beeld ? beeld.naam.split(" — ")[0] : "geen beeld"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* rechts: de beelden waar ze op landen */}
              <div>
                <p className="r-eyebrow !text-[0.46rem] opacity-45">
                  Waar ze landen — klik een beeld om te filteren
                </p>
                <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
                  {VARIANTEN.map((v) => {
                    const mijn = CHIPS.filter((u, k) => u.beeld === v.id && k < gekoppeld);
                    const raakt = laatste?.beeld === v.id;
                    const on = focus === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setFocus(on ? null : v.id)}
                        aria-pressed={on}
                        className="rounded-sm border p-2 text-left transition-colors"
                        style={{
                          borderColor: on || raakt ? "var(--series-1)" : "var(--line)",
                          background: on ? "rgba(42,95,214,0.05)" : "transparent",
                        }}
                      >
                        <div
                          className="relative aspect-[4/3] overflow-hidden rounded-sm transition-all"
                          style={{
                            outline: raakt ? "2px solid var(--series-1)" : "none",
                            outlineOffset: "-2px",
                          }}
                        >
                          <Image
                            src={v.src}
                            alt={v.naam}
                            fill
                            className="object-cover"
                            sizes="180px"
                          />
                        </div>
                        <p className="r-small mt-1.5 !text-[0.68rem]">
                          {v.naam.split(" — ")[0]}{" "}
                          <span className="opacity-45">· {mijn.length} uitspraken</span>
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {mijn.map((u) => (
                            <Chip key={u.sec} u={u} />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* de wees */}
                {gekoppeld >= CHIPS.length && (
                  <div
                    className="mt-2.5 rounded-sm border border-dashed p-3"
                    style={{
                      borderColor: "var(--line-2)",
                      transition: "opacity 500ms ease",
                    }}
                  >
                    <p className="r-eyebrow !text-[0.46rem] opacity-50">
                      Geen beeld · 1 uitspraak
                    </p>
                    <div className="mt-2">
                      <Chip u={CHIPS[CHIPS.length - 1]} />
                    </div>
                    <p className="r-small mt-2 !text-[0.7rem]">
                      De belangrijkste zin van het gesprek hangt aan géén beeld. Hij viel toen
                      de laptop al dicht was. Een tool die alleen koppelt, gooit hem weg — dus
                      koppelt deze tool niet alleen.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ---------- 4. de oogst ---------- */}
        {stap === 3 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Hetzelfde beeldrooster als in de sessie-tool — nu met de spraaklaag eroverheen.
              De klik is het cijfer, de uitspraak is de reden. Pas samen zijn ze een briefing.
            </p>

            <div className="mt-5 space-y-2.5">
              {OOGST.map(({ beeld, uitspraken }) => {
                const r = MOCK_REACTIES[beeld.id];
                return (
                  <div
                    key={beeld.id}
                    className="grid gap-3.5 rounded-sm border p-3 sm:grid-cols-[5rem_1fr]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image src={beeld.src} alt={beeld.naam} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <p className="r-small !text-[0.74rem]" style={{ color: "var(--ink)" }}>
                          {beeld.naam}
                        </p>
                        <span
                          className="r-eyebrow rounded-sm px-1.5 py-0.5 !text-[0.44rem]"
                          style={
                            r?.reactie === "mooi"
                              ? { background: "rgba(42,95,214,0.11)", color: "#1f47a3" }
                              : { background: "rgba(28,25,23,0.09)", color: "var(--ink)" }
                          }
                        >
                          {r?.reactie === "mooi" ? "♥ mooi" : "✕ niet ik"} · klik
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {uitspraken.map((u) => (
                          <Chip key={u.sec} u={u} />
                        ))}
                      </div>
                      <div className="mt-2 space-y-1">
                        {uitspraken.map((u) => (
                          <p key={u.sec} className="r-small !text-[0.7rem] opacity-70">
                            <span className="r-numeral opacity-50">{u.t}</span> {u.spreker}:
                            &ldquo;{u.tekst}&rdquo;
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-sm p-4" style={{ background: "rgba(42,95,214,0.05)" }}>
              <p className="r-eyebrow !text-[0.48rem]" style={{ color: "#1f47a3" }}>
                Wat de studio hieraan heeft
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {[
                  "Variant C krijgt een 👎 én de reden: 'te koud, een lobby'. Zonder de spraaklaag was het alleen een 👎.",
                  "Variant D's afwijzing gaat niet over smaak maar over geometrie — 'waar is ons tweede raam?'. Dat is een bug, geen mening.",
                  "En de zin van 02:41 hangt aan geen enkel beeld. Hij opent straks het visiedocument.",
                ].map((t) => (
                  <li key={t} className="r-small flex gap-2 !text-[0.74rem]">
                    <span style={{ color: "var(--series-1)" }}>→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </DemoFrame>
  );
}
