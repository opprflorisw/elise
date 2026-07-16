"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DemoFrame, Stappen, DemoNav } from "@/components/research/Prd";
import { KLANT, BRIEF, OOGST, TRANSCRIPT, MOCK_REACTIES } from "@/lib/mock";

const STAPPEN = ["De oogst", "Het concept", "De curatie"];

const CHIPS = TRANSCRIPT.filter((u) => u.chip);
const WEES = CHIPS.filter((u) => !u.beeld);

/**
 * Welke uitspraken elke sectie draagt. Afgeleid uit het transcript, niet verzonnen:
 * dit is precies wat de generator moet kunnen aanwijzen. De tijdstempels horen in de
 * machinekamer — nooit in het document dat de klant leest.
 */
const BRONNEN: Record<string, number[]> = {
  "Wat we hoorden": [161],
  "De richting": [19, 64, 82, 98],
  "Het palet": [31, 64],
  "Wat we niet doen": [82, 98, 130],
};

type Status = "akkoord" | "herschreven";

const startStatus = (): Record<string, Status> =>
  Object.fromEntries(
    BRIEF.secties.map((s) => [s.kop, s.elise ? "herschreven" : "akkoord"])
  );

/** Letterlijke citaten oplichten — dát is wat de tool doet wat een schrijver niet beter doet. */
function metCitaten(tekst: string) {
  return tekst.split(/("[^"]+")/g).map((deel, k) =>
    deel.startsWith('"') && deel.endsWith('"') && deel.length > 2 ? (
      <mark
        key={k}
        style={{
          background: "rgba(42,95,214,0.10)",
          color: "var(--ink)",
          padding: "0 0.15em",
          borderRadius: "2px",
        }}
      >
        {deel}
      </mark>
    ) : (
      <span key={k}>{deel}</span>
    )
  );
}

function Bronnen({ secs }: { secs: number[] }) {
  return (
    <p className="r-small mt-2.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 !text-[0.66rem] opacity-50">
      <span className="r-eyebrow !text-[0.42rem]">uit het gesprek</span>
      {secs.map((sec) => {
        const u = TRANSCRIPT.find((x) => x.sec === sec);
        if (!u) return null;
        return (
          <span key={sec}>
            <span className="r-numeral">{u.t}</span> {u.spreker}
          </span>
        );
      })}
    </p>
  );
}

export function BriefDemo() {
  const [stap, setStap] = useState(0);
  const [onthuld, setOnthuld] = useState(0);
  const [bezig, setBezig] = useState(false);
  const [status, setStatus] = useState<Record<string, Status>>(startStatus);

  const ga = (i: number) => setStap(Math.max(0, Math.min(STAPPEN.length - 1, i)));

  useEffect(() => {
    if (!bezig) return;
    if (onthuld >= BRIEF.secties.length) {
      setBezig(false);
      return;
    }
    const t = setTimeout(() => setOnthuld((o) => o + 1), 850);
    return () => clearTimeout(t);
  }, [bezig, onthuld]);

  // wie doorklikt naar de curatie krijgt het hele document, niet een halve reveal
  useEffect(() => {
    if (stap === 2) {
      setBezig(false);
      setOnthuld(BRIEF.secties.length);
    }
  }, [stap]);

  const herschreven = BRIEF.secties.filter((s) => status[s.kop] === "herschreven").length;

  const document = (curatie: boolean) => (
    <article className="r-card-solid p-5 sm:p-7">
      <p className="r-eyebrow !text-[0.46rem] opacity-45">{BRIEF.ondertitel}</p>
      <h3 className="r-display-l mt-1.5">{BRIEF.titel}</h3>

      <div className="mt-6 space-y-7">
        {BRIEF.secties.map((s, k) => {
          const zichtbaar = k < onthuld;
          const st = status[s.kop];
          return (
            <section
              key={s.kop}
              style={{
                opacity: zichtbaar ? 1 : 0,
                transform: zichtbaar ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                <h4 className="r-display-m">{s.kop}</h4>
                {curatie && st === "herschreven" && (
                  <span
                    className="r-eyebrow rounded-sm px-1.5 py-0.5 !text-[0.44rem]"
                    style={{ background: "rgba(200,114,42,0.13)", color: "#8f4f18" }}
                  >
                    door Elise herschreven
                  </span>
                )}
              </div>

              <p
                className="r-body mt-2.5 max-w-2xl !text-[0.92rem] text-[var(--ink-2)]"
                style={
                  curatie && st === "herschreven"
                    ? { borderLeft: "2px solid rgba(200,114,42,0.5)", paddingLeft: "0.9rem" }
                    : undefined
                }
              >
                {metCitaten(s.tekst)}
              </p>

              <Bronnen secs={BRONNEN[s.kop] ?? []} />

              {curatie && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {(["akkoord", "herschreven"] as const).map((w) => {
                    const on = st === w;
                    return (
                      <button
                        key={w}
                        onClick={() => setStatus((x) => ({ ...x, [s.kop]: w }))}
                        aria-pressed={on}
                        className="r-eyebrow rounded-full border px-3 py-1.5 !text-[0.44rem] transition-colors"
                        style={{
                          borderColor: on ? "var(--ink)" : "var(--line-2)",
                          background: on ? "var(--ink)" : "transparent",
                          color: on ? "#fffdfa" : "var(--ink-3)",
                        }}
                      >
                        {w === "akkoord" ? "zo laten" : "zelf herschrijven"}
                      </button>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </article>
  );

  return (
    <DemoFrame
      titel="Brief-generator"
      stap={stap + 1}
      van={STAPPEN.length}
      onder={<DemoNav stap={stap} van={STAPPEN.length} ga={ga} klaar="Het concept is nooit het document" />}
    >
      <Stappen stappen={STAPPEN} actief={stap} ga={ga} />

      <div className="mt-6">
        {/* ---------- 1. de input ---------- */}
        {stap === 0 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Dit is alles wat de sessie opleverde: vier beelden, vier klikken, zeven
              uitspraken. <strong>Het is een hoop, geen document.</strong> En een hoop verkoopt
              geen Ontwerp van €12.000.
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {OOGST.map(({ beeld, uitspraken }) => {
                const r = MOCK_REACTIES[beeld.id];
                return (
                  <div
                    key={beeld.id}
                    className="flex gap-3 rounded-sm border p-2.5"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <div className="relative aspect-square w-14 shrink-0 overflow-hidden rounded-sm">
                      <Image src={beeld.src} alt={beeld.naam} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="min-w-0">
                      <p className="r-small !text-[0.7rem]" style={{ color: "var(--ink)" }}>
                        {beeld.naam.split(" — ")[0]}{" "}
                        <span className="opacity-45">
                          {r?.reactie === "mooi" ? "♥" : "✕"} · {uitspraken.length} uitspraken
                        </span>
                      </p>
                      {r?.notitie && (
                        <p className="r-small mt-0.5 !text-[0.68rem] opacity-60">
                          &ldquo;{r.notitie}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="mt-2.5 rounded-sm border border-dashed p-3"
              style={{ borderColor: "var(--line-2)" }}
            >
              <p className="r-eyebrow !text-[0.44rem] opacity-50">Geen beeld · de losse zin</p>
              {WEES.map((u) => (
                <p key={u.sec} className="r-accent-serif mt-1.5 text-[0.95rem] leading-[1.5]">
                  &ldquo;{u.tekst}&rdquo;{" "}
                  <span className="r-numeral text-[0.66rem] opacity-40">
                    {u.t} {u.spreker}
                  </span>
                </p>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {[
                ["4", "beelden"],
                ["4", "reacties"],
                [`${CHIPS.length}`, "uitspraken"],
                [`${WEES.length}`, "zin zonder beeld"],
                ["0", "pagina's tekst"],
              ].map(([n, l]) => (
                <span key={l} className="flex items-baseline gap-1.5">
                  <span className="r-numeral text-[1.1rem]" style={{ color: "var(--series-1)" }}>
                    {n}
                  </span>
                  <span className="r-eyebrow !text-[0.44rem] opacity-45">{l}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ---------- 2. het concept ---------- */}
        {stap === 1 && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                Eén prompt, één sjabloon, vier secties.{" "}
                {onthuld === 0
                  ? "Druk op de knop — het duurt in het echt ongeveer even lang."
                  : "Let op de blauwe stukken: dat zijn hún woorden, teruggegeven."}
              </p>
              <button
                onClick={() => {
                  setOnthuld(0);
                  setBezig(true);
                }}
                disabled={bezig}
                className="r-eyebrow rounded-full px-4 py-2 !text-[0.5rem] transition-opacity disabled:opacity-40"
                style={{ background: "var(--series-1)", color: "#fff" }}
              >
                {bezig
                  ? "bezig…"
                  : onthuld === 0
                    ? "Genereer het concept →"
                    : "↻ opnieuw"}
              </button>
            </div>

            {onthuld === 0 && !bezig ? (
              <div
                className="mt-5 rounded-sm border border-dashed p-8 text-center"
                style={{ borderColor: "var(--line-2)" }}
              >
                <p className="r-small !text-[0.74rem] opacity-60">
                  In: de oogst van {KLANT.naam} — 4 beelden, 4 reacties, {CHIPS.length}{" "}
                  uitspraken.
                  <br />
                  Uit: een concept van vier secties. Kosten: € 1,10 aan model.
                </p>
              </div>
            ) : (
              <div className="mt-5">{document(false)}</div>
            )}

            {onthuld >= BRIEF.secties.length && (
              <p className="r-small mt-4 !text-[0.74rem] italic">
                Dít is waarom de tool bestaat, en het is niet &ldquo;tekst schrijven&rdquo;. Het
                document zegt tegen de Van Dams wat de Van Dams zelf zeiden — en tegen je eigen
                zin knik je makkelijker ja dan tegen die van een ontwerper. Elise schrijft beter
                dan dit. Maar Elise schrijft het om elf uur &rsquo;s avonds, of niet.
              </p>
            )}
          </div>
        )}

        {/* ---------- 3. de curatie ---------- */}
        {stap === 2 && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                Hier stopt de machine.{" "}
                <strong>Elise leest alles, en herschrijft wat niet klopt.</strong> Zet de
                schakelaars zelf om — en kijk onderaan wat je daarmee zegt.
              </p>
              <span className="r-small !text-[0.7rem] opacity-55">
                {herschreven} van {BRIEF.secties.length} herschreven
              </span>
            </div>

            <div className="mt-5">{document(true)}</div>

            <div
              className="mt-4 rounded-sm p-4"
              style={{
                background:
                  herschreven === 0 ? "rgba(208,59,59,0.06)" : "rgba(200,114,42,0.08)",
              }}
            >
              <p
                className="r-eyebrow !text-[0.48rem]"
                style={{ color: herschreven === 0 ? "var(--critical)" : "#8f4f18" }}
              >
                {herschreven === 0 ? "Dit is het scenario dat de tool kapotmaakt" : "Wat dit betekent"}
              </p>
              <p className="r-small mt-2 !text-[0.74rem]">
                {herschreven === 0 ? (
                  <>
                    Nul secties herschreven: het model heeft het document geschreven en Elise
                    heeft op &ldquo;akkoord&rdquo; gedrukt. Dat is precies de avond waarop dit
                    misgaat. Een generiek document is erger dan geen document — het bewijst aan
                    de klant dat er niemand meekeek.
                  </>
                ) : herschreven === BRIEF.secties.length ? (
                  <>
                    Alles herschreven. Dan is de generator geen schrijver maar een ordner: hij
                    heeft de hoop gesorteerd en de citaten opgezocht, en dat is nog steeds uren
                    waard. Maar wees eerlijk — als dit elke keer gebeurt, heet deze tool anders.
                  </>
                ) : (
                  <>
                    {herschreven} van de {BRIEF.secties.length} secties dragen Elise&rsquo;s pen.
                    Dat is geen falen van de tool — dat is de tool die werkt. Hij levert het
                    skelet en de citaten; zij levert het oordeel en de zinnen die alleen zij kan
                    schrijven. Het document gaat de deur uit onder háár naam, dus het is háár
                    document.
                  </>
                )}
              </p>
            </div>

            <p className="r-small mt-4 !text-[0.72rem] italic opacity-70">
              En let op wat er in het echte document níét staat: de tijdstempels. &ldquo;Je zei
              op 01:04&rdquo; hoort in de machinekamer, niet in een brief aan mensen die je net
              in hun woonkamer hebt gesproken.
            </p>
          </div>
        )}
      </div>
    </DemoFrame>
  );
}
