"use client";

import Link from "next/link";
import { useJourney } from "@/lib/store";
import { JourneyNav } from "@/components/journey/JourneyNav";
import { RedThread } from "@/components/journey/RedThread";
import { ExportPanel } from "@/components/feedback/ExportPanel";
import { buildSummary } from "@/lib/export";
import { STAGES } from "@/lib/stages";

// key choices we hope to see answered, for the completeness nudge
const EXPECTED: { stage: string; section: string; label: string; path: string }[] = [
  { stage: "manifest", section: "naam", label: "Naam-richting", path: "/manifest" },
  { stage: "manifest", section: "materialen", label: "Drie materialen", path: "/manifest" },
  { stage: "manifest", section: "gevoel", label: "Hoe een ruimte voelt", path: "/manifest" },
  { stage: "stijl", section: "palet", label: "Kleurpalet", path: "/stijl" },
  { stage: "stijl", section: "typografie", label: "Typografie", path: "/stijl" },
  { stage: "studio", section: "methode-reactie", label: "Reactie op de methode", path: "/studio" },
];

export default function OverzichtPage() {
  const { state, ready } = useJourney();
  const summary = buildSummary(state);

  const missing = EXPECTED.filter((e) => {
    const prefix = `${e.stage}.${e.section}`;
    return !Object.keys(state.items).some((k) => k === prefix || k.startsWith(prefix + "."));
  });

  return (
    <>
      <JourneyNav />
      <RedThread accent="var(--color-bordeaux)" />

      <main className="relative z-10 mx-auto max-w-3xl px-5 pb-32 pt-28 sm:px-10 sm:pt-36">
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-display leading-none text-[clamp(3rem,10vw,6rem)]" style={{ color: "var(--color-bordeaux)" }}>✓</span>
          <span className="eyebrow text-ink-soft">Het overzicht</span>
        </div>
        <h1 className="display-xl">Jouw reis, verzameld.</h1>
        <p className="lede mt-6 max-w-2xl text-ink-soft">
          {ready ? `Je gaf ${summary.totalItems} reacties.` : "Laden…"} Alles staat hieronder. Stuur
          het naar Floris — dit wordt de complete basis voor je website.
        </p>

        {/* completeness nudge */}
        {ready && missing.length > 0 && (
          <div className="mt-10 rounded-xl border border-line bg-paper-deep/40 p-6">
            <p className="eyebrow mb-3" style={{ color: "var(--color-gold)" }}>Nog open — als je wilt</p>
            <ul className="space-y-1.5">
              {missing.map((m) => (
                <li key={`${m.stage}.${m.section}`}>
                  <Link href={m.path} className="body inline-flex items-center gap-2 hover:opacity-70">
                    <span style={{ color: "var(--color-bordeaux)" }}>→</span> {m.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="body mt-3 text-[0.85rem] text-ink-soft">Niets is verplicht — je mag ook nu al versturen.</p>
          </div>
        )}

        {/* summary by stage */}
        <div className="mt-12 space-y-10">
          {summary.stages.map((st) => (
            <section key={st.id}>
              <h2 className="display-l mb-4 text-[1.5rem]" style={{ color: "var(--color-bordeaux)" }}>{st.name}</h2>
              <div className="divide-y divide-line rounded-xl border border-line">
                {st.items.map((it, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 px-5 py-3">
                    <span className="body text-[0.9rem] text-ink-soft">{it.label}</span>
                    <span className="body text-right font-medium">{it.value}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
          {ready && summary.stages.length === 0 && (
            <p className="body text-ink-soft">
              Nog geen reacties. <Link href="/" className="underline">Begin de reis →</Link>
            </p>
          )}
        </div>

        {/* export */}
        <div className="mt-14">
          <ExportPanel />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {STAGES.map((s) => (
            <Link key={s.id} href={s.path} className="eyebrow text-ink-soft hover:text-ink">
              {s.numeral} · {s.title}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
