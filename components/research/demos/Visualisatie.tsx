"use client";

import { useState } from "react";
import Image from "next/image";
import { DemoFrame, Stappen, DemoNav } from "@/components/research/Prd";
import {
  KLANT,
  KLANTFOTOS,
  ACCENTEN,
  VARIANTEN,
  GEOMETRIE_CHECKS,
  AI_TOTAAL,
} from "@/lib/mock";

const STAPPEN = ["De foto", "De accenten", "De varianten", "De keuze"];

export function VisualisatieDemo() {
  const [stap, setStap] = useState(0);
  const [gekozen, setGekozen] = useState<string[]>(["burl", "mohair"]);
  const [favoriet, setFavoriet] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const ga = (i: number) => setStap(Math.max(0, Math.min(STAPPEN.length - 1, i)));

  const toggle = (id: string) =>
    setGekozen((g) => (g.includes(id) ? g.filter((x) => x !== id) : g.length >= 2 ? [g[1], id] : [...g, id]));

  return (
    <DemoFrame
      titel="Visualisatie-engine"
      stap={stap + 1}
      van={STAPPEN.length}
      onder={<DemoNav stap={stap} van={STAPPEN.length} ga={ga} klaar="Zo werkt de motor" />}
    >
      <Stappen stappen={STAPPEN} actief={stap} ga={ga} />

      <div className="mt-6">
        {/* ---------- 1. de klantfoto ---------- */}
        {stap === 0 && (
          <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={KLANTFOTOS[0].src}
                  alt="Klantfoto: de woonkamer van de familie Van Dam, zoals hij nu is"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
              <figcaption className="r-small mt-2 !text-[0.7rem]">
                {KLANTFOTOS[0].naam} — precies zoals hij binnenkomt: telefoonfoto, grijs weer, rommel.
              </figcaption>
            </figure>

            <div>
              <p className="r-eyebrow !text-[0.48rem] opacity-45">De opdracht</p>
              <p className="r-display-m mt-1.5">{KLANT.naam}</p>
              <p className="r-small mt-1">
                {KLANT.pand} · {KLANT.bouwjaar} · {KLANT.oppervlak}
              </p>
              <p
                className="r-accent-serif mt-4 border-l-2 pl-3.5 text-[0.95rem] leading-[1.5]"
                style={{ borderColor: "var(--series-1)" }}
              >
                &ldquo;{KLANT.wens}&rdquo;
              </p>
              <p className="r-small mt-4 !text-[0.74rem]">
                Dit is het startpunt van de hele methode — en let op wat het níét is: een mooie
                foto. Een studio die hier een gestylde opname van maakt, bedriegt zichzelf. De
                engine krijgt de werkelijkheid.
              </p>
            </div>
          </div>
        )}

        {/* ---------- 2. de accenten ---------- */}
        {stap === 1 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Elise kiest de richting — niet de klant, en niet het model. Dit is de plek waar het
              handschrift de generatie stuurt: dezelfde foto met andere accenten levert een ander
              huis op. <strong>Kies er twee.</strong>
            </p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {ACCENTEN.map((a) => {
                const on = gekozen.includes(a.id);
                return (
                  <button
                    key={a.id}
                    onClick={() => toggle(a.id)}
                    aria-pressed={on}
                    className="flex items-center gap-3 rounded-sm border p-3.5 text-left transition-colors"
                    style={{
                      borderColor: on ? "var(--series-1)" : "var(--line-2)",
                      background: on ? "rgba(42,95,214,0.05)" : "transparent",
                    }}
                  >
                    <span
                      className="h-7 w-7 shrink-0 rounded-full"
                      style={{ background: a.kleur, outline: on ? "2px solid var(--series-1)" : "none", outlineOffset: "2px" }}
                      aria-hidden
                    />
                    <span>
                      <span className="r-body !text-[0.88rem]" style={{ fontWeight: on ? 560 : 400 }}>
                        {a.naam}
                      </span>
                      <span className="r-small block !text-[0.66rem] opacity-60">
                        {on ? "in de prompt" : "klik om te kiezen"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="r-small mt-5 !text-[0.74rem]">
              Wat hier gebeurt is de hele bouw-vs-koop-beslissing in één scherm. Het model is
              gekocht. Deze knoppen — het DNA dat erin gaat — zijn van ons.
            </p>
          </div>
        )}

        {/* ---------- 3. de varianten ---------- */}
        {stap === 2 && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                Vier varianten van <strong>dezelfde kamer</strong>. Elise loopt ze langs met de
                geometrie-checklist vóórdat de klant ze ziet.
              </p>
              <span className="r-small !text-[0.7rem] opacity-55">
                AI-kosten: € {AI_TOTAAL.toFixed(2).replace(".", ",")} per sessie
              </span>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {VARIANTEN.map((v) => {
                const gedrift = v.geometrie === "gedrift";
                const on = open === v.id;
                return (
                  <div key={v.id}>
                    <button
                      onClick={() => setOpen(on ? null : v.id)}
                      aria-expanded={on}
                      className="group block w-full text-left"
                    >
                      <div
                        className="relative aspect-[4/3] overflow-hidden rounded-sm"
                        style={{ outline: gedrift ? "2px solid var(--critical)" : "none", outlineOffset: "-2px" }}
                      >
                        <Image
                          src={v.src}
                          alt={v.naam}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                        <span
                          className="r-eyebrow absolute left-2 top-2 rounded-sm px-1.5 py-0.5 !text-[0.44rem]"
                          style={{
                            background: gedrift ? "var(--critical)" : "rgba(255,253,250,0.92)",
                            color: gedrift ? "#fff" : "var(--ink)",
                          }}
                        >
                          {gedrift ? "✕ geometrie gedrift" : "geometrie intact"}
                        </span>
                      </div>
                      <p className="r-small mt-1.5 !text-[0.74rem]">
                        {v.naam} <span className="opacity-40">{on ? "−" : "+"}</span>
                      </p>
                    </button>

                    {on && (v.drift || v.let) && (
                      <p
                        className="r-small mt-1.5 rounded-sm p-2.5 !text-[0.7rem]"
                        style={{
                          background: gedrift ? "rgba(208,59,59,0.07)" : "rgba(250,178,25,0.1)",
                        }}
                      >
                        {v.drift ?? v.let}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-sm border p-4" style={{ borderColor: "var(--line-2)" }}>
              <p className="r-eyebrow !text-[0.48rem] opacity-50">De geometrie-checklist</p>
              <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                {GEOMETRIE_CHECKS.map((c) => (
                  <li key={c} className="r-small flex gap-2 !text-[0.72rem]">
                    <span style={{ color: "var(--series-1)" }}>☐</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="r-small mt-3.5 !text-[0.7rem] italic">
                Klik variant A en D open. Dít is het hoofdrisico van de hele methode, en het is
                geen theorie: beide beelden zijn echt zo uit het model gekomen.
              </p>
            </div>
          </div>
        )}

        {/* ---------- 4. de keuze ---------- */}
        {stap === 3 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              De klant markeert een favoriet. Dat is geen &ldquo;like&rdquo; — het is het eerste
              gegeven in een dossier dat zich opstapelt.
            </p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
              {VARIANTEN.filter((v) => v.geometrie === "intact").map((v) => {
                const on = favoriet === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setFavoriet(on ? null : v.id)}
                    aria-pressed={on}
                    className="text-left"
                  >
                    <div
                      className="relative aspect-[4/3] overflow-hidden rounded-sm"
                      style={{ outline: on ? "2px solid var(--series-1)" : "none", outlineOffset: "-2px" }}
                    >
                      <Image src={v.src} alt={v.naam} fill className="object-cover" sizes="200px" />
                      {on && (
                        <span
                          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem]"
                          style={{ background: "var(--series-1)", color: "#fff" }}
                        >
                          ♥
                        </span>
                      )}
                    </div>
                    <p className="r-small mt-1.5 !text-[0.7rem]">{v.naam}</p>
                  </button>
                );
              })}
            </div>

            <div
              className="mt-5 rounded-sm p-4"
              style={{ background: favoriet ? "rgba(42,95,214,0.05)" : "rgba(28,25,23,0.03)" }}
            >
              <p className="r-eyebrow !text-[0.48rem] opacity-50">Wat de studio hiervan leert</p>
              {favoriet ? (
                <ul className="mt-2.5 space-y-1.5">
                  {[
                    `Deze klant kiest ${VARIANTEN.find((v) => v.id === favoriet)?.accenten.join(" + ")}.`,
                    "Dit beeld gaat mee naar de sessie — mét de vraag waaróm.",
                    "Over twintig projecten: welke richtingen winnen bij welk type klant.",
                  ].map((t) => (
                    <li key={t} className="r-small flex gap-2 !text-[0.74rem]">
                      <span style={{ color: "var(--series-1)" }}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="r-small mt-2 !text-[0.74rem] opacity-70">
                  Kies een favoriet om te zien wat er wordt vastgelegd.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </DemoFrame>
  );
}
