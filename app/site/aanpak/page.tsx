import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { AANPAK } from "@/lib/site";

export const metadata: Metadata = { title: "Aanpak — Studio Verstelle" };

export default function AanpakPage() {
  return (
    <div className="pb-24 pt-32 sm:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <Reveal>
          <p className="s-eyebrow mb-5" style={{ color: "var(--cobalt)" }}>Aanpak</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="s-display-xl max-w-4xl">U ziet elke keuze aankomen</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="s-lede mt-6 max-w-2xl text-ink-soft">
            Geen dikke rapporten, geen verrassingen bij de oplevering. De studio werkt met een
            begeleide methode waarin u vanaf de eerste week naar beelden van uw éigen huis kijkt —
            en elke reactie telt.
          </p>
        </Reveal>

        {/* steps */}
        <div className="mt-16 space-y-6 sm:mt-24">
          {AANPAK.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="grid items-stretch gap-0 overflow-hidden border border-line bg-white/40 sm:grid-cols-[1.15fr,1fr]">
                <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[260px]">
                  <Image src={s.src} alt={s.t} fill sizes="(max-width:640px) 100vw, 55vw" className="object-cover" />
                  <span
                    className="s-index absolute left-5 top-4 text-[2rem]"
                    style={{ color: "var(--warmwhite)", textShadow: "0 2px 14px rgba(0,0,0,.65)" }}
                  >
                    {s.n}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <h2 className="s-display-m">{s.t}</h2>
                  <p className="s-body mt-3 text-ink-soft">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* speech — the differentiator */}
      <section className="mt-20 sm:mt-28" style={{ background: "var(--night)", color: "var(--warmwhite)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 sm:items-center sm:px-10 sm:py-24">
          <div>
            <Reveal>
              <p className="s-eyebrow" style={{ color: "var(--travertine)" }}>Waarom dit werkt</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="s-display-l mt-4">Uw woorden worden ontwerp</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="s-body mt-6 opacity-85">
                Tijdens het gesprek luistert de studio twee keer: naar wat u kiest, én naar wat u
                zégt. De zachte meningen — <span className="s-accent-serif">&ldquo;dit voelt te koud&rdquo;</span>,{" "}
                <span className="s-accent-serif">&ldquo;die boog vind ik prachtig&rdquo;</span> — worden vastgelegd
                bij het exacte beeld waar ze over gingen. Zo wordt niets van uw smaak verloren, en is
                het definitieve ontwerp — inclusief materialenlijst en budget — geen gok, maar een
                conclusie.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <figure className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/method/speech.webp" alt="Het gesprek, vastgelegd" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className="s-display-l max-w-3xl">Klaar om te beginnen?</h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8">
            <Link
              href="/site/intake"
              className="s-eyebrow inline-block rounded-full px-7 py-4 !tracking-[0.2em] transition-opacity hover:opacity-85"
              style={{ background: "var(--night)", color: "var(--warmwhite)" }}
            >
              Start de intake
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
