"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoFrame, Stappen, DemoNav } from "@/components/research/Prd";
import {
  KLANT,
  VARIANTEN,
  MOCK_REACTIES,
  MIJLPALEN,
  DOCUMENTEN,
  BUDGETBAND,
  type Reactie,
} from "@/lib/mock";

const STAPPEN = ["De link", "De thuispagina", "De tabbladen", "De documenten"];
const TABS = ["Beelden", "Budget", "Planning"] as const;
type Tab = (typeof TABS)[number];

const euro = (n: number) => "€ " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/** Het beeld dat de Van Dams als favoriet markeerden — variant A. */
const HERO = VARIANTEN[0];
const NIEUW = [
  { titel: "Variant B — mohair-register", meta: "beeld · 2 dagen geleden", src: VARIANTEN[1].src },
  { titel: "Materialenlijst v2", meta: "document · 22 april" },
  { titel: "Budgetband bijgewerkt", meta: "indicatie · 22 april" },
];

const STATUS_KLEUR: Record<string, string> = {
  klaar: "rgba(42,95,214,0.35)",
  loopt: "var(--series-1)",
  wacht: "transparent",
};

function PortalChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-sm border" style={{ borderColor: "var(--line-2)" }}>
      <div
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b px-3.5 py-2.5"
        style={{ borderColor: "var(--line)", background: "rgba(28,25,23,0.03)" }}
      >
        <span className="flex items-baseline gap-2.5">
          <span className="r-eyebrow !text-[0.46rem]">Studio Verstelle</span>
          <span className="r-small !text-[0.68rem] opacity-55">{KLANT.naam}</span>
        </span>
        <span className="flex items-center gap-2.5">
          <span
            className="r-eyebrow rounded-sm px-1.5 py-0.5 !text-[0.42rem]"
            style={{ background: "rgba(28,25,23,0.06)", color: "var(--ink-3)" }}
          >
            alleen lezen
          </span>
          <span className="r-small !text-[0.66rem] opacity-40">uitloggen</span>
        </span>
      </div>
      <div className="p-3.5 sm:p-5">{children}</div>
    </div>
  );
}

export function PortaalDemo() {
  const [stap, setStap] = useState(0);
  const [mail, setMail] = useState(false);
  const [tab, setTab] = useState<Tab>("Beelden");
  const [reacties, setReacties] = useState<Record<string, Reactie>>(() =>
    Object.fromEntries(VARIANTEN.map((v) => [v.id, MOCK_REACTIES[v.id]?.reactie ?? null])),
  );

  const ga = (i: number) => setStap(Math.max(0, Math.min(STAPPEN.length - 1, i)));
  const reageer = (id: string, r: Reactie) =>
    setReacties((s) => ({ ...s, [id]: s[id] === r ? null : r }));

  const pct = ((BUDGETBAND.verwacht - BUDGETBAND.laag) / (BUDGETBAND.hoog - BUDGETBAND.laag)) * 100;

  return (
    <DemoFrame
      titel="Klantportaal"
      stap={stap + 1}
      van={STAPPEN.length}
      onder={<DemoNav stap={stap} van={STAPPEN.length} ga={ga} klaar="Dit is wat de klant ziet" />}
    >
      <Stappen stappen={STAPPEN} actief={stap} ga={ga} />

      <div className="mt-6">
        {/* ---------- 1. de magic-link ---------- */}
        {stap === 0 && (
          <div className="grid gap-6 sm:grid-cols-[1fr_1fr]">
            <div className="rounded-sm border p-5" style={{ borderColor: "var(--line-2)" }}>
              <p className="r-eyebrow !text-[0.46rem] opacity-50">Studio Verstelle</p>
              <p className="r-display-m mt-2">Je project</p>
              <p className="r-small mt-2 !text-[0.74rem]">
                Vul je e-mailadres in. Je krijgt een link — geen wachtwoord.
              </p>
              <div
                className="mt-4 rounded-sm border px-3 py-2.5"
                style={{ borderColor: "var(--line-2)", background: "rgba(28,25,23,0.02)" }}
              >
                <span className="r-small !text-[0.78rem] opacity-70">jasmijn@vandam.nl</span>
              </div>
              <button
                onClick={() => setMail(true)}
                aria-expanded={mail}
                className="r-eyebrow mt-3 w-full rounded-full px-4 py-2.5 !text-[0.5rem]"
                style={{ background: "var(--series-1)", color: "#fff" }}
              >
                {mail ? "Verstuurd — kijk in je mail" : "Stuur me de link"}
              </button>
              <p className="r-small mt-3.5 !text-[0.68rem] opacity-70">
                Geen wachtwoord betekent: geen wachtwoordherstel, geen wachtwoordkluis, geen
                gelekt wachtwoord. Het is de goedkoopste beveiliging die er is, en tegelijk de
                vriendelijkste.
              </p>
            </div>

            <div>
              {mail ? (
                <div className="rounded-sm border p-4" style={{ borderColor: "var(--line-2)" }}>
                  <p className="r-small !text-[0.68rem] opacity-55">
                    Van: Studio Verstelle &lt;elise@studioverstelle.nl&gt;
                  </p>
                  <p className="r-body mt-1 !text-[0.9rem]" style={{ fontWeight: 560 }}>
                    Je project staat klaar
                  </p>
                  <p className="r-small mt-3 !text-[0.76rem]">
                    Dag Jasmijn, hier is je link. Hij werkt vijftien minuten en is alleen voor
                    jullie project.
                  </p>
                  <button
                    onClick={() => ga(1)}
                    className="r-eyebrow mt-4 rounded-full px-4 py-2 !text-[0.5rem]"
                    style={{ background: "var(--series-1)", color: "#fff" }}
                  >
                    Bekijk mijn project →
                  </button>
                  <p className="r-small mt-4 !text-[0.66rem] italic opacity-70">
                    Eén mail, één knop. Dit is het complete inlogsysteem — en het is de reden dat
                    &ldquo;een paar dagen&rdquo; überhaupt een geloofwaardige schatting kan zijn.
                  </p>
                </div>
              ) : (
                <div
                  className="flex h-full items-center justify-center rounded-sm border border-dashed p-6"
                  style={{ borderColor: "var(--line-2)" }}
                >
                  <p className="r-small !text-[0.72rem] opacity-55">
                    Vraag de link aan — dan komt de mail hier binnen.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ---------- 2. de thuispagina ---------- */}
        {stap === 1 && (
          <PortalChrome>
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src={HERO.src}
                alt={HERO.naam}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 600px"
              />
            </div>
            <p className="r-small mt-2 !text-[0.68rem] opacity-60">
              {HERO.naam} — jullie voorkeur uit de Verkenning
            </p>

            <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <p className="r-eyebrow !text-[0.46rem] opacity-45">Waar we staan</p>
              <ol className="mt-3 grid gap-2.5 sm:grid-cols-4">
                {MIJLPALEN.map((m) => (
                  <li key={m.fase} className="flex items-baseline gap-2">
                    <span
                      className="mt-[0.3rem] h-2 w-2 shrink-0 rounded-full border"
                      style={{
                        background: STATUS_KLEUR[m.status],
                        borderColor: m.status === "wacht" ? "var(--line-2)" : "transparent",
                      }}
                      aria-hidden
                    />
                    <span>
                      <span
                        className="r-small block !text-[0.72rem]"
                        style={{
                          fontWeight: m.status === "loopt" ? 580 : 400,
                          color: m.status === "wacht" ? "var(--ink-3)" : "var(--ink)",
                        }}
                      >
                        {m.fase}
                      </span>
                      <span className="r-small block !text-[0.64rem] opacity-50">
                        {m.datum}
                        {m.status === "loopt" ? " · nu" : ""}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <p className="r-eyebrow !text-[0.46rem] opacity-45">Nieuw voor jullie</p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {NIEUW.map((n) => (
                  <div
                    key={n.titel}
                    className="flex items-center gap-2.5 rounded-sm border p-2.5"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {n.src ? (
                      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-sm">
                        <Image src={n.src} alt="" fill className="object-cover" sizes="36px" />
                      </span>
                    ) : (
                      <span
                        className="h-9 w-9 shrink-0 rounded-sm"
                        style={{ background: "rgba(42,95,214,0.08)" }}
                        aria-hidden
                      />
                    )}
                    <span className="min-w-0">
                      <span className="r-small block truncate !text-[0.72rem]">{n.titel}</span>
                      <span className="r-small block !text-[0.62rem] opacity-50">{n.meta}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </PortalChrome>
        )}

        {/* ---------- 3. de tabbladen ---------- */}
        {stap === 2 && (
          <PortalChrome>
            <div className="flex flex-wrap gap-1.5">
              {TABS.map((t) => {
                const on = t === tab;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    aria-pressed={on}
                    className="r-eyebrow rounded-full border px-3 py-1.5 !text-[0.46rem] transition-colors"
                    style={{
                      borderColor: on ? "var(--series-1)" : "var(--line-2)",
                      background: on ? "rgba(42,95,214,0.07)" : "transparent",
                      color: on ? "var(--series-1)" : "var(--ink-3)",
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {tab === "Beelden" && (
              <div className="mt-4">
                <p className="r-small !text-[0.72rem]">
                  Het enige wat de klant hier kán veranderen: wat hij ervan vindt.
                </p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {VARIANTEN.map((v) => {
                    const r = reacties[v.id];
                    return (
                      <div key={v.id} className="rounded-sm border" style={{ borderColor: "var(--line)" }}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-t-sm">
                          <Image
                            src={v.src}
                            alt={v.naam}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 280px"
                          />
                        </div>
                        <div className="p-2.5">
                          <p className="r-small !text-[0.7rem]">{v.naam}</p>
                          <div className="mt-2 flex gap-1.5">
                            {([
                              { k: "mooi" as const, label: "♥ mooi", kleur: "var(--series-1)" },
                              { k: "niet-ik" as const, label: "✕ niet ik", kleur: "var(--critical)" },
                            ]).map((b) => {
                              const on = r === b.k;
                              return (
                                <button
                                  key={b.k}
                                  onClick={() => reageer(v.id, b.k)}
                                  aria-pressed={on}
                                  className="r-eyebrow rounded-full border px-2.5 py-1 !text-[0.44rem] transition-colors"
                                  style={{
                                    borderColor: on ? b.kleur : "var(--line-2)",
                                    background: on ? b.kleur : "transparent",
                                    color: on ? "#fff" : "var(--ink-3)",
                                  }}
                                >
                                  {b.label}
                                </button>
                              );
                            })}
                          </div>
                          {MOCK_REACTIES[v.id]?.notitie && (
                            <p className="r-accent-serif mt-2 text-[0.78rem] leading-[1.45] opacity-70">
                              &ldquo;{MOCK_REACTIES[v.id].notitie}&rdquo;
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {tab === "Budget" && (
              <div className="mt-4">
                <p className="r-small !text-[0.72rem]">
                  Dezelfde band als in{" "}
                  <Link href="/research/tools/materialen" className="r-link">
                    de materialen-tool
                  </Link>
                  , hier alleen om te lezen.
                </p>
                <div className="mt-4">
                  <div className="relative">
                    <div className="h-2.5 rounded-full" style={{ background: "rgba(42,95,214,0.16)" }}>
                      <span
                        className="absolute top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full"
                        style={{ left: `${pct}%`, background: "var(--series-1)" }}
                        aria-hidden
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <span className="r-numeral text-[0.82rem] opacity-70">{euro(BUDGETBAND.laag)}</span>
                    <span className="r-numeral text-[1.1rem]" style={{ color: "var(--series-1)" }}>
                      {euro(BUDGETBAND.verwacht)}
                    </span>
                    <span className="r-numeral text-[0.82rem] opacity-70">{euro(BUDGETBAND.hoog)}</span>
                  </div>
                </div>
                <div
                  className="mt-4 rounded-sm border-l-2 p-3"
                  style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
                >
                  <p className="r-eyebrow !text-[0.46rem]" style={{ color: "var(--critical)" }}>
                    Geen offerte
                  </p>
                  <p className="r-small mt-1.5 !text-[0.7rem]">{BUDGETBAND.disclaimer}</p>
                </div>
              </div>
            )}

            {tab === "Planning" && (
              <div className="mt-4">
                <p className="r-small !text-[0.72rem]">
                  Vier mijlpalen. Geen Gantt-diagram — een klant die een Gantt krijgt, gaat erover
                  onderhandelen.
                </p>
                <ol className="mt-3">
                  {MIJLPALEN.map((m) => (
                    <li
                      key={m.fase}
                      className="flex items-baseline justify-between gap-3 border-b py-2.5 last:border-0"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <span className="flex items-baseline gap-2.5">
                        <span
                          className="h-2 w-2 shrink-0 rounded-full border"
                          style={{
                            background: STATUS_KLEUR[m.status],
                            borderColor: m.status === "wacht" ? "var(--line-2)" : "transparent",
                          }}
                          aria-hidden
                        />
                        <span
                          className="r-small !text-[0.76rem]"
                          style={{ fontWeight: m.status === "loopt" ? 580 : 400 }}
                        >
                          {m.fase}
                        </span>
                      </span>
                      <span className="r-small shrink-0 !text-[0.7rem] opacity-55">
                        {m.datum} · {m.status}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </PortalChrome>
        )}

        {/* ---------- 4. de documenten ---------- */}
        {stap === 3 && (
          <div>
            <PortalChrome>
              <p className="r-eyebrow !text-[0.46rem] opacity-45">Documenten</p>
              <ul className="mt-3">
                {DOCUMENTEN.map((d) => (
                  <li
                    key={d.naam}
                    className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 border-b py-2.5 last:border-0"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <span className="r-small !text-[0.78rem]">{d.naam}</span>
                    <span className="flex items-baseline gap-2.5">
                      <span className="r-small !text-[0.68rem] opacity-55">{d.meta}</span>
                      <span
                        className="r-eyebrow rounded-sm px-1.5 py-0.5 !text-[0.42rem]"
                        style={{
                          background:
                            d.status === "klaar" ? "rgba(42,95,214,0.09)" : "rgba(28,25,23,0.05)",
                          color: d.status === "klaar" ? "var(--series-1)" : "var(--ink-3)",
                        }}
                      >
                        {d.status === "klaar" ? "beschikbaar" : "in bewerking"}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </PortalChrome>

            <div className="mt-4 rounded-sm p-4" style={{ background: "rgba(42,95,214,0.05)" }}>
              <p className="r-eyebrow !text-[0.48rem] opacity-50">Let op die eerste regel</p>
              <p className="r-small mt-2 !text-[0.76rem]">
                &ldquo;Geaccepteerd via Moneybird&rdquo; — de offerte is níét in dit portaal
                geaccepteerd, en dat is met opzet. Facturatie, btw en offerte-acceptatie zijn
                gereguleerd, saai en veranderen continu; dat koop je weg voor €15 per maand. Het
                portaal laat alleen zien dát het gebeurd is en linkt door.{" "}
                <Link href="/research/tools/kopen" className="r-link">
                  Zie de koop-catalogus
                </Link>
                .
              </p>
              <p className="r-small mt-2.5 !text-[0.76rem]">
                Dit is de scheidslijn van het hele hoofdstuk: alles wat gereguleerd is, kopen we.
                Alles wat de klant ziet, bouwen we.
              </p>
            </div>
          </div>
        )}
      </div>
    </DemoFrame>
  );
}
