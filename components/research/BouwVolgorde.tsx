import Link from "next/link";

// ---------------------------------------------------------------
// Build order. The tool list reads like a menu; it isn't one.
// The session spine (sessie → spraak → brief) has to be built in
// that order because each one eats the previous one's output. The
// rest waits for a paying client — a studio without a portfolio
// doesn't need tools, it needs clients.
// ---------------------------------------------------------------

const FASEN = [
  {
    fase: "Fase 0",
    wanneer: "Nu — naast de baan",
    kleur: "var(--ramp-2)",
    bouw: [],
    ipv: "Niets bouwen. Drie pilotklanten volledig met de hand bedienen. Pas als hetzelfde handwerk voor de derde keer pijn doet, is het een tool waard.",
  },
  {
    fase: "Fase 1",
    wanneer: "Na de eerste betaalde Verkenning",
    kleur: "var(--ramp-3)",
    bouw: [
      { t: "Sessie-tool", s: "sessie", waarom: "Het prototype draait al — dit is een verbouwing, geen gok." },
      { t: "Intake-assistent", s: "intake", waarom: "De goedkoopste tijdwinst in de lijst: 1–2 avonden." },
    ],
    ipv: "De visualisatie-engine draait parallel mee — die bestaat grotendeels al.",
  },
  {
    fase: "Fase 2",
    wanneer: "Als de sessie staat",
    kleur: "var(--ramp-4)",
    bouw: [
      { t: "Spraak-laag", s: "spraak", waarom: "Kan pas als de sessie beeld-ID's met tijdstempels logt." },
      { t: "Brief-generator", s: "brief", waarom: "Eet de export van sessie + spraak. Zonder die twee heeft hij geen invoer." },
    ],
    ipv: "Dit is de ruggengraat. In deze volgorde, of niet.",
  },
  {
    fase: "Fase 3",
    wanneer: "Bij het eerste echte Transformatie-project",
    kleur: "var(--ramp-5)",
    bouw: [
      { t: "Budget & materialen", s: "materialen", waarom: "Begin bij de bibliotheek in een spreadsheet — dat is Elise-werk, geen code." },
      { t: "Klantportaal", s: "portaal", waarom: "Pas als drie klanten erom vragen. Eerder is het een hobby." },
    ],
    ipv: "Hier ontstaat de compounding dataset. Dat is het enige dat op termijn niet te kopiëren is.",
  },
];

export function BouwVolgorde() {
  return (
    <div className="space-y-2.5">
      {FASEN.map((f) => (
        <div key={f.fase} className="r-card-solid overflow-hidden">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-[var(--line)] px-5 py-3">
            <span className="r-eyebrow !text-[0.52rem]" style={{ color: f.kleur }}>
              {f.fase}
            </span>
            <span className="r-small !text-[0.74rem]">{f.wanneer}</span>
          </div>
          <div className="px-5 py-4">
            {f.bouw.length > 0 ? (
              <ul className="space-y-2.5">
                {f.bouw.map((b) => (
                  <li key={b.s} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: f.kleur }}
                      aria-hidden
                    />
                    <Link href={`/research/tools/${b.s}`} className="r-body !text-[0.9rem] r-link">
                      {b.t}
                    </Link>
                    <span className="r-small !text-[0.72rem] opacity-70">{b.waarom}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="r-display-m" style={{ color: "var(--ink-3)" }}>
                Bouw niets.
              </p>
            )}
            <p className="r-small mt-3.5 !text-[0.72rem] italic">{f.ipv}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
