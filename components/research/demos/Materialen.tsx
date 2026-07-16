"use client";

import { useState } from "react";
import Image from "next/image";
import { DemoFrame, Stappen, DemoNav } from "@/components/research/Prd";
import { KLANT, MATERIALEN, VANDAM_SELECTIE, BUDGETBAND } from "@/lib/mock";

const STAPPEN = ["De bibliotheek", "De selectie", "De band"];

/** Deterministisch: geen toLocaleString, anders wijkt de server af van de client. */
const euro = (n: number) => "€ " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const CATEGORIEEN = ["Alles", ...Array.from(new Set(MATERIALEN.map((m) => m.categorie)))];

export function MaterialenDemo() {
  const [stap, setStap] = useState(0);
  const [cat, setCat] = useState("Alles");
  const [gekozen, setGekozen] = useState<string[]>(VANDAM_SELECTIE);

  const ga = (i: number) => setStap(Math.max(0, Math.min(STAPPEN.length - 1, i)));
  const toggle = (id: string) =>
    setGekozen((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));

  const zichtbaar = cat === "Alles" ? MATERIALEN : MATERIALEN.filter((m) => m.categorie === cat);
  const selectie = MATERIALEN.filter((m) => gekozen.includes(m.id));
  const pct = ((BUDGETBAND.verwacht - BUDGETBAND.laag) / (BUDGETBAND.hoog - BUDGETBAND.laag)) * 100;

  return (
    <DemoFrame
      titel="Budget & materialen"
      stap={stap + 1}
      van={STAPPEN.length}
      onder={<DemoNav stap={stap} van={STAPPEN.length} ga={ga} klaar="Zo werkt de bibliotheek" />}
    >
      <Stappen stappen={STAPPEN} actief={stap} ga={ga} />

      <div className="mt-6">
        {/* ---------- 1. de bibliotheek ---------- */}
        {stap === 0 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Twaalf van de honderd. Naam, leverancier, eenheid, prijsrange — en één zin waaróm.
              Die laatste zin is het hele verschil met een catalogus: het is Elise&rsquo;s smaak,
              opgeschreven.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {CATEGORIEEN.map((c) => {
                const on = c === cat;
                return (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    aria-pressed={on}
                    className="r-eyebrow rounded-full border px-3 py-1.5 !text-[0.46rem] transition-colors"
                    style={{
                      borderColor: on ? "var(--series-1)" : "var(--line-2)",
                      background: on ? "rgba(42,95,214,0.07)" : "transparent",
                      color: on ? "var(--series-1)" : "var(--ink-3)",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {zichtbaar.map((m) => (
                <figure key={m.id} className="rounded-sm border" style={{ borderColor: "var(--line)" }}>
                  {m.src && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-sm">
                      <Image
                        src={m.src}
                        alt={m.naam}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                    </div>
                  )}
                  <figcaption className="p-3">
                    <p className="r-body !text-[0.86rem]" style={{ fontWeight: 540 }}>
                      {m.naam}
                    </p>
                    <p className="r-small mt-0.5 !text-[0.66rem] opacity-60">
                      {m.categorie} · {m.leverancier}
                    </p>
                    <p className="r-numeral mt-2 text-[0.78rem]" style={{ color: "var(--series-1)" }}>
                      {euro(m.laag)}–{m.hoog}{" "}
                      <span className="opacity-45">/ {m.eenheid}</span>
                    </p>
                    <p className="r-accent-serif mt-2.5 text-[0.82rem] leading-[1.5] text-[var(--ink-2)]">
                      {m.waarom}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="r-small mt-5 !text-[0.74rem]">
              Dít scherm is het product. Alles hierna is opmaak — en alles hierboven is een
              spreadsheet die vanavond kan bestaan.
            </p>
          </div>
        )}

        {/* ---------- 2. de selectie ---------- */}
        {stap === 1 && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                Kies de materialen voor de woonkamer van {KLANT.naam}.{" "}
                <strong>Zes is een kamer; twaalf is een showroom.</strong>
              </p>
              <span className="r-numeral !text-[0.8rem]" style={{ color: "var(--series-1)" }}>
                {gekozen.length} / 12
              </span>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {MATERIALEN.map((m) => {
                const on = gekozen.includes(m.id);
                return (
                  <button
                    key={m.id}
                    onClick={() => toggle(m.id)}
                    aria-pressed={on}
                    className="flex items-center gap-3 rounded-sm border p-2.5 text-left transition-colors"
                    style={{
                      borderColor: on ? "var(--series-1)" : "var(--line-2)",
                      background: on ? "rgba(42,95,214,0.05)" : "transparent",
                    }}
                  >
                    {m.src && (
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm">
                        <Image src={m.src} alt="" fill className="object-cover" sizes="40px" />
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="r-body block truncate !text-[0.84rem]" style={{ fontWeight: on ? 560 : 400 }}>
                        {m.naam}
                      </span>
                      <span className="r-small block !text-[0.64rem] opacity-55">
                        {euro(m.laag)}–{m.hoog} / {m.eenheid}
                      </span>
                    </span>
                    <span
                      className="r-eyebrow shrink-0 !text-[0.44rem]"
                      style={{ color: on ? "var(--series-1)" : "var(--ink-3)", opacity: on ? 1 : 0.45 }}
                    >
                      {on ? "gekozen" : "kies"}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="r-small mt-5 !text-[0.74rem] italic">
              Er zit geen slimmigheid achter deze knoppen. Dat is het punt: het selecteren is een
              kwartier, het vullen van de bibliotheek is een winter.
            </p>
          </div>
        )}

        {/* ---------- 3. de band ---------- */}
        {stap === 2 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Hoeveelheden uit het ontwerp × de prijsranges uit de bibliotheek. Er rolt geen getal
              uit maar een <strong>band</strong> — en dat is geen slordigheid maar het eerlijkste
              wat je over een verbouwing kunt zeggen vóórdat de aannemer heeft geprijsd.
            </p>

            <div className="mt-5 rounded-sm border p-4 sm:p-5" style={{ borderColor: "var(--line-2)" }}>
              <p className="r-eyebrow !text-[0.48rem] opacity-50">
                Indicatie — woonkamer, {selectie.length} materialen
              </p>

              <div className="mt-6">
                <div className="relative">
                  <span
                    className="r-eyebrow absolute -top-5 whitespace-nowrap !text-[0.44rem]"
                    style={{ left: `${pct}%`, transform: "translateX(-50%)", color: "var(--series-1)" }}
                  >
                    verwacht
                  </span>
                  <div className="h-2.5 rounded-full" style={{ background: "rgba(42,95,214,0.16)" }}>
                    <span
                      className="absolute top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full"
                      style={{ left: `${pct}%`, background: "var(--series-1)" }}
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <span>
                    <span className="r-eyebrow block !text-[0.44rem] opacity-45">laag</span>
                    <span className="r-numeral text-[0.9rem]">{euro(BUDGETBAND.laag)}</span>
                  </span>
                  <span className="text-center">
                    <span className="r-eyebrow block !text-[0.44rem] opacity-45">verwacht</span>
                    <span className="r-numeral text-[1.15rem]" style={{ color: "var(--series-1)" }}>
                      {euro(BUDGETBAND.verwacht)}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="r-eyebrow block !text-[0.44rem] opacity-45">hoog</span>
                    <span className="r-numeral text-[0.9rem]">{euro(BUDGETBAND.hoog)}</span>
                  </span>
                </div>
              </div>

              <div
                className="mt-6 rounded-sm border-l-2 p-3.5"
                style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
              >
                <p className="r-eyebrow !text-[0.48rem]" style={{ color: "var(--critical)" }}>
                  Geen offerte
                </p>
                <p className="r-small mt-1.5">{BUDGETBAND.disclaimer}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="r-eyebrow !text-[0.48rem] opacity-50">Waar de band vandaan komt</p>
              <ul className="mt-2.5">
                {selectie.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-baseline justify-between gap-3 border-b py-1.5 last:border-0"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <span className="r-small min-w-0 flex-1 truncate !text-[0.74rem]">{m.naam}</span>
                    <span className="r-numeral shrink-0 text-[0.72rem] opacity-70">
                      {euro(m.laag)}–{m.hoog} / {m.eenheid}
                    </span>
                  </li>
                ))}
              </ul>
              {selectie.length === 0 && (
                <p className="r-small mt-2 !text-[0.74rem] opacity-70">
                  Niets geselecteerd — ga terug naar stap 2. Een lege bibliotheek geeft een lege band.
                </p>
              )}
            </div>

            <div className="mt-5 rounded-sm p-4" style={{ background: "rgba(42,95,214,0.05)" }}>
              <p className="r-eyebrow !text-[0.48rem] opacity-50">Wat de studio hiervan overhoudt</p>
              <ul className="mt-2.5 space-y-1.5">
                {[
                  "De band herrekent hier niet op je selectie — er is geen ontwerp, dus er zijn geen hoeveelheden. In de echte tool is dát de enige rekensom.",
                  "Na twintig projecten weet deze studio wat dingen écht kosten. Dat staat in geen enkel pakket, en het is niet te downloaden.",
                  "De aannemer prijst; wij ramen. Dat verschil is het hele juridische verhaal — en het hoort in je algemene voorwaarden, niet alleen in dit kadertje.",
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
