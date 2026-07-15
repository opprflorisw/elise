"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { INTAKE_BUDGET, INTAKE_TYPE } from "@/lib/site";

const field =
  "w-full border border-line bg-white/60 px-4 py-3.5 s-body outline-none transition-colors focus:border-[var(--cobalt)]";
const label = "s-eyebrow !tracking-[0.2em] opacity-70";

export default function IntakePage() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ naam: "", email: "", plaats: "", type: INTAKE_TYPE[0], budget: INTAKE_BUDGET[0], wens: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const mailto = `mailto:studio@verstelle.nl?subject=${encodeURIComponent(`Intake — ${f.naam || "nieuw project"} (${f.plaats || "?"})`)}&body=${encodeURIComponent(
    `Naam: ${f.naam}\nE-mail: ${f.email}\nPlaats / pand: ${f.plaats}\nType project: ${f.type}\nBudget-indicatie: ${f.budget}\n\nOver het project:\n${f.wens}\n\n(Vergeet niet: stuur drie foto's van de ruimte mee.)`
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-10 sm:pt-44">
      <Reveal>
        <p className="s-eyebrow mb-5" style={{ color: "var(--cobalt)" }}>Intake</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="s-display-xl max-w-4xl">Vertel ons over uw huis</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="s-lede mt-6 max-w-2xl text-ink-soft">
          Vijf vragen en drie foto&rsquo;s — meer is het niet. Binnen twee werkdagen hoort u of het
          project bij de studio past, en wat de eerste stap is.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 sm:grid-cols-12">
        {!sent ? (
          <form
            className="space-y-7 sm:col-span-7"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="naam" className={label}>Naam</label>
                <input id="naam" required value={f.naam} onChange={set("naam")} className={`mt-2 ${field}`} />
              </div>
              <div>
                <label htmlFor="email" className={label}>E-mail</label>
                <input id="email" type="email" required value={f.email} onChange={set("email")} className={`mt-2 ${field}`} />
              </div>
            </div>
            <div>
              <label htmlFor="plaats" className={label}>Plaats & type pand</label>
              <input id="plaats" placeholder="bijv. bovenwoning, Amsterdam Oud-West" value={f.plaats} onChange={set("plaats")} className={`mt-2 ${field}`} />
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="type" className={label}>Type project</label>
                <select id="type" value={f.type} onChange={set("type")} className={`mt-2 ${field}`}>
                  {INTAKE_TYPE.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className={label}>Budget-indicatie</label>
                <select id="budget" value={f.budget} onChange={set("budget")} className={`mt-2 ${field}`}>
                  {INTAKE_BUDGET.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="wens" className={label}>Waar droomt u van?</label>
              <textarea id="wens" rows={5} value={f.wens} onChange={set("wens")} className={`mt-2 ${field}`} placeholder="In een paar zinnen — perfectie is niet nodig." />
            </div>
            <button
              type="submit"
              className="s-eyebrow rounded-full px-7 py-4 !tracking-[0.2em] transition-opacity hover:opacity-85"
              style={{ background: "var(--night)", color: "var(--warmwhite)" }}
            >
              Verstuur intake
            </button>
          </form>
        ) : (
          <div className="sm:col-span-7">
            <Reveal>
              <div className="border border-line bg-white/50 p-8 sm:p-10">
                <p className="s-display-m">Dank u, {f.naam.split(" ")[0] || "en tot snel"}.</p>
                <p className="s-body mt-4 text-ink-soft">
                  Uw intake staat klaar. Klik hieronder om hem te versturen vanuit uw eigen
                  mailprogramma — en voeg meteen de drie foto&rsquo;s van uw ruimte toe.
                </p>
                <a
                  href={mailto}
                  className="s-eyebrow mt-7 inline-block rounded-full px-7 py-4 !tracking-[0.2em] transition-opacity hover:opacity-85"
                  style={{ background: "var(--cobalt)", color: "var(--warmwhite)" }}
                >
                  Open in uw mail
                </a>
                <button onClick={() => setSent(false)} className="s-link s-eyebrow ml-6 !tracking-[0.2em] opacity-60 hover:opacity-100">
                  Terug naar het formulier
                </button>
              </div>
            </Reveal>
          </div>
        )}

        <aside className="sm:col-span-4 sm:col-start-9">
          <Reveal delay={200}>
            <div className="border-t border-line pt-6">
              <p className={label}>De drie foto&rsquo;s</p>
              <p className="s-body mt-3 text-ink-soft">
                Gewoon met uw telefoon, bij daglicht: één overzicht per hoek van de ruimte.
                Niet opruimen — de studio wil het huis zien zoals het écht is.
              </p>
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <p className={label}>Wat gebeurt er daarna?</p>
              <p className="s-body mt-3 text-ink-soft">
                U ontvangt binnen twee weken de eerste beelden van uw eigen ruimte, verbeeld in
                het handschrift van de studio. Daarna plannen we het gesprek.
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
