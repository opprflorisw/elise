"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoFrame, Stappen, DemoNav } from "@/components/research/Prd";
import {
  KLANT,
  KLANTFOTOS,
  VARIANTEN,
  MOCK_REACTIES,
  OOGST,
  type Reactie,
} from "@/lib/mock";

const STAPPEN = ["Het project", "Reageren", "De oogst", "De export"];

type Rij = { reactie: Reactie; notitie: string };

/** Voorgevuld met wat de Van Dams klikten — klik er zelf overheen. */
const seed = (): Record<string, Rij> =>
  Object.fromEntries(
    VARIANTEN.map((v) => [
      v.id,
      {
        reactie: MOCK_REACTIES[v.id]?.reactie ?? null,
        notitie: MOCK_REACTIES[v.id]?.notitie ?? "",
      },
    ])
  );

const REACTIE_STIJL: Record<"mooi" | "niet-ik", { bg: string; fg: string; label: string }> = {
  mooi: { bg: "rgba(42,95,214,0.11)", fg: "#1f47a3", label: "♥ mooi" },
  "niet-ik": { bg: "rgba(28,25,23,0.09)", fg: "var(--ink)", label: "✕ niet ik" },
};

function ReactieBadge({ r }: { r: Reactie }) {
  if (!r)
    return (
      <span className="r-eyebrow !text-[0.46rem] opacity-35">geen reactie</span>
    );
  const s = REACTIE_STIJL[r];
  return (
    <span
      className="r-eyebrow inline-block whitespace-nowrap rounded-sm px-1.5 py-0.5 !text-[0.46rem]"
      style={{ background: s.bg, color: s.fg }}
    >
      {s.label}
    </span>
  );
}

export function SessieDemo() {
  const [stap, setStap] = useState(0);
  const [rijen, setRijen] = useState<Record<string, Rij>>(seed);

  const ga = (i: number) => setStap(Math.max(0, Math.min(STAPPEN.length - 1, i)));

  const zet = (id: string, r: Reactie) =>
    setRijen((s) => ({ ...s, [id]: { ...s[id], reactie: s[id].reactie === r ? null : r } }));

  const noteer = (id: string, notitie: string) =>
    setRijen((s) => ({ ...s, [id]: { ...s[id], notitie } }));

  const beoordeeld = VARIANTEN.filter((v) => rijen[v.id].reactie).length;

  const exportObject = {
    project: KLANT.naam,
    pand: `${KLANT.pand}, ${KLANT.stad}`,
    fase: KLANT.fase,
    sessie: "2026-03-04",
    beelden: VARIANTEN.map((v) => ({
      id: v.id,
      accenten: v.accenten,
      geometrie: v.geometrie,
      reactie: rijen[v.id].reactie,
      notitie: rijen[v.id].notitie.trim() || null,
    })),
    spraak: null,
  };

  return (
    <DemoFrame
      titel="Sessie-tool"
      stap={stap + 1}
      van={STAPPEN.length}
      onder={<DemoNav stap={stap} van={STAPPEN.length} ga={ga} klaar="Dit patroon bestaat al" />}
    >
      <Stappen stappen={STAPPEN} actief={stap} ga={ga} />

      <div className="mt-6">
        {/* ---------- 1. de projectkaart ---------- */}
        {stap === 0 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Eén klant, één project, één sessie. Geen dashboard met twaalf tegels — Elise
              heeft geen twaalf projecten tegelijk, en een tool die doet alsof, liegt.
            </p>

            <button
              onClick={() => ga(1)}
              className="group mt-5 block w-full rounded-sm border p-4 text-left transition-colors hover:bg-[rgba(42,95,214,0.03)] sm:p-5"
              style={{ borderColor: "var(--line-2)" }}
            >
              <div className="grid gap-5 sm:grid-cols-[7rem_1fr]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:aspect-square">
                  <Image
                    src={KLANTFOTOS[0].src}
                    alt="Projectkaart: de woonkamer van de familie Van Dam"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="r-display-m transition-opacity group-hover:opacity-60">
                      {KLANT.naam}
                    </p>
                    <span
                      className="r-eyebrow rounded-sm px-1.5 py-0.5 !text-[0.46rem]"
                      style={{ background: "rgba(42,95,214,0.11)", color: "#1f47a3" }}
                    >
                      {KLANT.fase}
                    </span>
                  </div>
                  <p className="r-small mt-1 !text-[0.74rem]">
                    {KLANT.personen} · {KLANT.pand} · {KLANT.bouwjaar} · {KLANT.oppervlak}
                  </p>
                  <p
                    className="r-accent-serif mt-3.5 border-l-2 pl-3.5 text-[0.95rem] leading-[1.5]"
                    style={{ borderColor: "var(--series-1)" }}
                  >
                    &ldquo;{KLANT.wens}&rdquo;
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-[var(--line)] pt-3">
                    {[
                      ["Verbouwbudget", KLANT.budget],
                      ["Gestart", KLANT.gestart],
                      ["Beelden klaar", `${VARIANTEN.length}`],
                    ].map(([k, v]) => (
                      <span key={k} className="flex items-baseline gap-1.5">
                        <span className="r-eyebrow !text-[0.44rem] opacity-40">{k}</span>
                        <span className="r-small !text-[0.74rem]">{v}</span>
                      </span>
                    ))}
                    <span
                      className="r-eyebrow ml-auto !text-[0.46rem]"
                      style={{ color: "var(--series-1)" }}
                    >
                      Open de sessie →
                    </span>
                  </div>
                </div>
              </div>
            </button>

            <p className="r-small mt-4 !text-[0.74rem]">
              Dit scherm is het hele verschil tussen bouwen en kopen. Een gekochte suite zet
              hier een projectstatus, een urenteller en een factuurregel. Wat Elise nodig heeft
              staat er wél: de foto, de zin, het budget.
            </p>
          </div>
        )}

        {/* ---------- 2. het ReactionGrid ---------- */}
        {stap === 1 && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                De klant klikt. Het notitieveld is niet optioneel maar de helft van de waarde:{" "}
                <strong>de klik zegt wát, de notitie zegt waarom.</strong>
              </p>
              <span className="r-small !text-[0.7rem] opacity-55">
                {beoordeeld} van {VARIANTEN.length} beoordeeld
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {VARIANTEN.map((v) => {
                const rij = rijen[v.id];
                return (
                  <div
                    key={v.id}
                    className="rounded-sm border p-3"
                    style={{
                      borderColor: rij.reactie ? "var(--line-2)" : "var(--line)",
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image
                        src={v.src}
                        alt={v.naam}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 300px"
                      />
                    </div>
                    <p className="r-small mt-2 !text-[0.72rem]">{v.naam}</p>

                    <div className="mt-2.5 flex gap-2">
                      {(["mooi", "niet-ik"] as const).map((r) => {
                        const on = rij.reactie === r;
                        const s = REACTIE_STIJL[r];
                        return (
                          <button
                            key={r}
                            onClick={() => zet(v.id, r)}
                            aria-pressed={on}
                            aria-label={`${v.naam}: ${r === "mooi" ? "mooi" : "niet ik"}`}
                            className="r-eyebrow flex-1 rounded-sm border py-2 !text-[0.46rem] transition-colors"
                            style={{
                              borderColor: on
                                ? r === "mooi"
                                  ? "var(--series-1)"
                                  : "var(--ink)"
                                : "var(--line-2)",
                              background: on
                                ? r === "mooi"
                                  ? "var(--series-1)"
                                  : "var(--ink)"
                                : "transparent",
                              color: on ? "#fffdfa" : s.fg,
                            }}
                          >
                            {s.label}
                          </button>
                        );
                      })}
                    </div>

                    <label className="mt-2 block">
                      <span className="sr-only">Notitie bij {v.naam}</span>
                      <textarea
                        value={rij.notitie}
                        onChange={(e) => noteer(v.id, e.target.value)}
                        rows={2}
                        maxLength={140}
                        placeholder="Waarom? — in hun eigen woorden"
                        className="r-small w-full resize-none rounded-sm border bg-transparent p-2 !text-[0.72rem]"
                        style={{ borderColor: "var(--line)", color: "var(--ink-2)" }}
                      />
                    </label>
                  </div>
                );
              })}
            </div>

            <p className="r-small mt-4 !text-[0.74rem] italic">
              Dít is het onderdeel dat niet te koop is. Niet omdat het moeilijk is — het is
              twee knoppen en een tekstveld — maar omdat geen enkele projecttool een mening aan
              een specifiek beeld hangt. Ze hangen bestanden aan mappen.
            </p>
          </div>
        )}

        {/* ---------- 3. de oogst ---------- */}
        {stap === 2 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              De sessie is afgelopen, de klant loopt de deur uit, en de oogst is al af. Geen
              schrift, geen avond uittypen, geen &ldquo;welke was die groene ook alweer&rdquo;.
            </p>

            <div className="mt-5 space-y-2.5">
              {OOGST.map(({ beeld }) => {
                const rij = rijen[beeld.id];
                return (
                  <div
                    key={beeld.id}
                    className="grid gap-3.5 rounded-sm border p-3 sm:grid-cols-[5rem_1fr_auto]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image
                        src={beeld.src}
                        alt={beeld.naam}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="r-small !text-[0.74rem]" style={{ color: "var(--ink)" }}>
                        {beeld.naam}
                      </p>
                      {rij.notitie.trim() ? (
                        <p className="r-accent-serif mt-1 text-[0.92rem] leading-[1.5]">
                          &ldquo;{rij.notitie.trim()}&rdquo;
                        </p>
                      ) : (
                        <p className="r-small mt-1 !text-[0.72rem] opacity-45">
                          Geklikt, niet toegelicht — een cijfer zonder verhaal.
                        </p>
                      )}
                      <p className="r-small mt-1.5 !text-[0.68rem] opacity-40">
                        uitspraken uit het gesprek: geen — de spraaklaag zit hier nog niet op
                      </p>
                    </div>

                    <div className="sm:pt-0.5">
                      <ReactieBadge r={rij.reactie} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-sm p-4" style={{ background: "rgba(28,25,23,0.03)" }}>
              <p className="r-eyebrow !text-[0.48rem] opacity-50">Wat hier ontbreekt</p>
              <p className="r-small mt-2 !text-[0.74rem]">
                Vier klikken en vier zinnen. Dat is meer dan Elise ooit mee naar huis nam — en
                het is nog steeds de helft. De andere helft werd gezégd terwijl de klant keek,
                en staat in geen enkel veld hierboven.{" "}
                <Link href="/research/tools/spraak" className="r-link">
                  Dat is hoofdstuk 03
                </Link>
                .
              </p>
            </div>
          </div>
        )}

        {/* ---------- 4. de export ---------- */}
        {stap === 3 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              De oogst verlaat de tool als data, niet als PDF. Een PDF is een dood einde; dit
              leest de brief-generator.
            </p>

            <div
              className="r-scroll mt-4 rounded-sm border p-4"
              style={{ borderColor: "var(--line-2)", background: "rgba(28,25,23,0.025)" }}
            >
              <pre className="font-mono text-[0.68rem] leading-[1.7] text-[var(--ink-2)]">
                {JSON.stringify(exportObject, null, 2)}
              </pre>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-sm p-3.5" style={{ background: "rgba(42,95,214,0.05)" }}>
                <p className="r-eyebrow !text-[0.46rem]" style={{ color: "#1f47a3" }}>
                  Waarom dit veld leeg is
                </p>
                <p className="r-small mt-1.5 !text-[0.72rem]">
                  <code className="font-mono">&quot;spraak&quot;: null</code> — de sessie-tool
                  weet wát er geklikt is, niet wat er gezégd is. Dat veld vult{" "}
                  <Link href="/research/tools/spraak" className="r-link">
                    de spraaklaag
                  </Link>
                  , en dan pas is deze export een briefing.
                </p>
              </div>
              <div className="rounded-sm p-3.5" style={{ background: "rgba(28,25,23,0.03)" }}>
                <p className="r-eyebrow !text-[0.46rem] opacity-50">Waarom JSON en geen PDF</p>
                <p className="r-small mt-1.5 !text-[0.72rem]">
                  Omdat er nog iets mee moet gebeuren. Elke gekochte tool exporteert een
                  document; wij exporteren de gegevens waar het document uit gemaakt wordt. Dat
                  is precies het verschil tussen een archief en een pipeline.
                </p>
              </div>
            </div>

            <p className="r-small mt-4 !text-[0.72rem] italic opacity-70">
              Klik terug naar stap 2 en verander een reactie — de export hierboven verandert
              mee. Dit is geen plaatje van een export; het ís er een.
            </p>
          </div>
        )}
      </div>
    </DemoFrame>
  );
}
