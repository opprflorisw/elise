"use client";

import { useState } from "react";
import { DemoFrame, Stappen, DemoNav } from "@/components/research/Prd";
import { LEADS } from "@/lib/mock";

const STAPPEN = ["De aanvraag", "De kwalificatie", "De concept-mail", "Versturen"];
const SLOTS = ["morgen · 10:00", "vrijdag · 14:30", "maandag · 09:00"];

export function IntakeDemo() {
  const [stap, setStap] = useState(0);
  const [leadId, setLeadId] = useState(LEADS[0].id);
  const [verstuurd, setVerstuurd] = useState(false);
  const [slot, setSlot] = useState<string | null>(null);

  const lead = LEADS.find((l) => l.id === leadId) ?? LEADS[0];
  const past = lead.oordeel === "past";

  const ga = (i: number) => setStap(Math.max(0, Math.min(STAPPEN.length - 1, i)));
  const kies = (id: string) => {
    setLeadId(id);
    setVerstuurd(false);
    setSlot(null);
  };

  const i = lead.concept.indexOf(lead.markeer);
  const voor = i >= 0 ? lead.concept.slice(0, i) : lead.concept;
  const na = i >= 0 ? lead.concept.slice(i + lead.markeer.length) : "";

  return (
    <DemoFrame
      titel="Intake-assistent"
      stap={stap + 1}
      van={STAPPEN.length}
      onder={<DemoNav stap={stap} van={STAPPEN.length} ga={ga} klaar="En zo zegt de tool nee" />}
    >
      <Stappen stappen={STAPPEN} actief={stap} ga={ga} />

      {/* de lead-schakelaar staat op élke stap: het punt van de demo is de vergelijking */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="r-eyebrow !text-[0.44rem] opacity-45">Aanvraag</span>
        {LEADS.map((l) => {
          const on = l.id === leadId;
          return (
            <button
              key={l.id}
              onClick={() => kies(l.id)}
              aria-pressed={on}
              className="r-eyebrow rounded-full border px-3 py-1.5 !text-[0.46rem] transition-colors"
              style={{
                borderColor: on ? "var(--series-1)" : "var(--line-2)",
                background: on ? "rgba(42,95,214,0.07)" : "transparent",
                color: on ? "var(--series-1)" : "var(--ink-3)",
              }}
            >
              {l.naam}
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        {/* ---------- 1. de aanvraag ---------- */}
        {stap === 0 && (
          <div className="grid gap-5 sm:grid-cols-[1.3fr_1fr]">
            <div className="rounded-sm border p-4" style={{ borderColor: "var(--line-2)" }}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="r-body !text-[0.94rem]" style={{ fontWeight: 560 }}>
                  {lead.naam}
                </p>
                <span className="r-small !text-[0.68rem] opacity-50">{lead.binnen}</span>
              </div>
              <p className="r-small mt-1 !text-[0.7rem] opacity-60">{lead.pand}</p>
              <p
                className="r-accent-serif mt-4 border-l-2 pl-3.5 text-[0.95rem] leading-[1.55]"
                style={{ borderColor: "var(--line-2)" }}
              >
                &ldquo;{lead.bericht}&rdquo;
              </p>
              <p className="r-small mt-4 !text-[0.68rem] opacity-60">
                Bijlagen: 3 foto&rsquo;s
              </p>
            </div>

            <div>
              <p className="r-eyebrow !text-[0.48rem] opacity-45">Opgegeven budget</p>
              <p className="r-numeral mt-1.5 text-[1.05rem]">{lead.budget}</p>
              <p className="r-small mt-4 !text-[0.74rem]">
                Twee aanvragen, hetzelfde formulier, dezelfde vijf vragen. De ene is een
                transformatie, de andere is styling. Beide kosten Elise vandaag hetzelfde halve uur
                — en de tweede kost er zelfs méér, want een goede afwijzing is moeilijker dan een
                ja.
              </p>
              <p className="r-small mt-3 !text-[0.74rem] italic">
                Schakel hierboven tussen de twee. De hele demo verandert mee.
              </p>
            </div>
          </div>
        )}

        {/* ---------- 2. de kwalificatie ---------- */}
        {stap === 1 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Drie assen, en bij elke as de <strong>redenering</strong> — niet alleen het cijfer.
              Een score zonder redenering is een dobbelsteen met een diploma.
            </p>

            <div className="mt-4 space-y-2.5">
              {lead.scores.map((s) => (
                <div key={s.as} className="rounded-sm border p-3.5" style={{ borderColor: "var(--line-2)" }}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="r-body !text-[0.88rem]" style={{ fontWeight: 540 }}>
                      {s.as}
                    </span>
                    <span className="r-numeral text-[0.9rem]" style={{ color: "var(--series-1)" }}>
                      {s.score}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full" style={{ background: "rgba(42,95,214,0.12)" }}>
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${s.score}%`, background: "var(--series-1)" }}
                    />
                  </div>
                  <p className="r-small mt-2.5 !text-[0.74rem]">{s.redenering}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-4 rounded-sm border-l-2 p-3.5"
              style={{
                borderColor: past ? "var(--series-1)" : "var(--critical)",
                background: past ? "rgba(42,95,214,0.05)" : "rgba(208,59,59,0.05)",
              }}
            >
              <p
                className="r-eyebrow !text-[0.48rem]"
                style={{ color: past ? "var(--series-1)" : "var(--critical)" }}
              >
                {past ? "Past" : "Past niet"}
              </p>
              <p className="r-small mt-1.5">
                {past
                  ? "Voorstel: een Verkenning. De tool stelt voor; Elise beslist — en de score gaat nooit de deur uit."
                  : "Voorstel: afwijzen mét een doorverwijzing. De score gaat nooit de deur uit; niemand hoort ooit dat hij een 18 kreeg."}
              </p>
            </div>

            <p className="r-small mt-4 !text-[0.72rem] italic">
              Merk op wat er níét gebeurt: er rolt geen totaalscore uit. Drie assen die elkaar niet
              opheffen — een 92 op budget maakt een 22 op scope niet goed.
            </p>
          </div>
        )}

        {/* ---------- 3. de concept-mail ---------- */}
        {stap === 2 && (
          <div>
            <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
              Een concept in Elise&rsquo;s toon. Eén zin staat gemarkeerd:{" "}
              <strong>pas dit aan</strong>. Niet omdat die zin fout is, maar omdat een mail die
              volledig door een machine is geschreven, ook zo leest.
            </p>

            <div className="mt-4 rounded-sm border p-4 sm:p-5" style={{ borderColor: "var(--line-2)" }}>
              <p className="r-small !text-[0.68rem] opacity-55">
                Aan: {lead.naam} · Onderwerp: Je bericht aan Studio Verstelle
              </p>
              <div
                className="mt-3 whitespace-pre-wrap border-t pt-3 text-[0.88rem] leading-[1.65] text-[var(--ink-2)]"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="r-body !text-[0.88rem]">{voor}</span>
                <span
                  className="r-body !text-[0.88rem]"
                  style={{ background: "rgba(250,178,25,0.28)", boxShadow: "0 0 0 2px rgba(250,178,25,0.28)" }}
                >
                  {lead.markeer}
                </span>
                <span className="r-body !text-[0.88rem]">{na}</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-baseline gap-2">
              <span
                className="r-eyebrow rounded-sm px-1.5 py-0.5 !text-[0.44rem]"
                style={{ background: "rgba(250,178,25,0.28)", color: "#8a5f04" }}
              >
                pas dit aan
              </span>
              <span className="r-small !text-[0.72rem]">
                {past
                  ? "De belofte-zin. Wat je hier belooft, moet je in de sessie waarmaken — dus die zin schrijf je zelf."
                  : "De doorverwijs-zin. Hier moeten twee echte namen staan van mensen die je hebt gebeld. Een doorverwijzing zonder naam is een afwijzing met een strikje."}
              </span>
            </div>
          </div>
        )}

        {/* ---------- 4. versturen ---------- */}
        {stap === 3 && (
          <div>
            {!verstuurd ? (
              <div className="rounded-sm border p-5 text-center" style={{ borderColor: "var(--line-2)" }}>
                <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                  Elise heeft gelezen en de gemarkeerde zin herschreven.
                </p>
                <button
                  onClick={() => setVerstuurd(true)}
                  className="r-eyebrow mt-4 rounded-full px-5 py-2.5 !text-[0.5rem]"
                  style={{ background: "var(--series-1)", color: "#fff" }}
                >
                  Versturen als Elise →
                </button>
                <p className="r-small mx-auto mt-4 max-w-md !text-[0.72rem]">
                  Er is geen knop &ldquo;automatisch versturen&rdquo;, ook niet bij een score van
                  92. Het opstellen is geautomatiseerd, het versturen nooit — dat kost twee minuten
                  en het is de goedkoopste verzekering in het hele systeem.
                </p>
              </div>
            ) : past ? (
              <div>
                <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                  Verstuurd. In de mail zit één link: de agenda. Die is gekocht, niet gebouwd.
                </p>
                <div className="mt-4 rounded-sm border p-4 sm:p-5" style={{ borderColor: "var(--line-2)" }}>
                  <p className="r-eyebrow !text-[0.46rem] opacity-45">Kennismaking · 30 minuten</p>
                  <p className="r-display-m mt-1.5">Kies een moment</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {SLOTS.map((s) => {
                      const on = slot === s;
                      return (
                        <button
                          key={s}
                          onClick={() => setSlot(on ? null : s)}
                          aria-pressed={on}
                          className="rounded-sm border px-3 py-2.5 transition-colors"
                          style={{
                            borderColor: on ? "var(--series-1)" : "var(--line-2)",
                            background: on ? "var(--series-1)" : "transparent",
                          }}
                        >
                          <span
                            className="r-small !text-[0.74rem]"
                            style={{ color: on ? "#fff" : "var(--ink)" }}
                          >
                            {s}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="r-small mt-4 !text-[0.7rem] opacity-70">
                    {slot
                      ? `Geboekt: ${slot}. Bevestiging in beide agenda's, en de aanvraag rolt door naar de Verkenning.`
                      : "Cal.com of Calendly — dit scherm bouwen we niet. Agendasynchronisatie is tijdzones, terugkerende afspraken en zomertijd: precies het moeras dat je wegkoopt."}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p className="r-body !text-[0.92rem] text-[var(--ink-2)]">
                  Verstuurd. <strong>Geen agendalink</strong> — maar ook geen doodlopende weg.
                </p>
                <div className="mt-4 rounded-sm border p-4 sm:p-5" style={{ borderColor: "var(--line-2)" }}>
                  <p className="r-eyebrow !text-[0.46rem] opacity-45">Wat er in plaats daarvan meegaat</p>
                  <ul className="mt-3">
                    {[
                      "Interieurstylist — naam uit Elise's eigen lijst, Amsterdam",
                      "Interieurstylist — naam uit Elise's eigen lijst, Amsterdam",
                    ].map((n, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline justify-between gap-3 border-b py-2.5 last:border-0"
                        style={{ borderColor: "var(--line)" }}
                      >
                        <span className="r-small !text-[0.76rem]">{n}</span>
                        <span className="r-small shrink-0 !text-[0.66rem] opacity-45">
                          vooraf gebeld
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="r-small mt-3.5 !text-[0.72rem]">
                    Twee namen die Elise zelf kent en zelf heeft gebeld. Dat is het verschil tussen
                    een doorverwijzing en een afscheid.
                  </p>
                </div>

                <div className="mt-4 rounded-sm p-4" style={{ background: "rgba(42,95,214,0.05)" }}>
                  <p className="r-eyebrow !text-[0.48rem] opacity-50">Dít is het moeilijke deel</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {[
                      "De ja verkoopt zichzelf. De nee is het product waar je aan moet werken.",
                      "Tim hoort nooit dat hij een 18 scoorde op budget. Hij hoort dat hij de goede onvrede heeft en waar hij ermee terecht kan.",
                      "Dit is de mail die het vaakst wordt doorgestuurd. Een afwijzing die een aanbeveling oplevert, is de goedkoopste marketing die er is.",
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
        )}
      </div>
    </DemoFrame>
  );
}
