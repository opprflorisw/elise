import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Klantportaal — Studio Verstelle" };

const FEATURES = [
  { t: "Uw beelden", d: "Alle visualisaties van uw huis, met uw reacties eraan vast." },
  { t: "Moodboards & materialen", d: "Het levende moodboard van uw project, inclusief stalen en leveranciers." },
  { t: "Budget & planning", d: "Actuele materialenlijst, budgetbewaking en de planning van de verbouwing." },
  { t: "Documenten", d: "Tekeningen, offertes en afspraken — alles op één plek." },
];

export default function PortaalPage() {
  return (
    <div className="pb-24 pt-32 sm:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <Reveal>
          <p className="s-eyebrow mb-5" style={{ color: "var(--cobalt)" }}>Klantportaal</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="s-display-xl max-w-4xl">Uw project, altijd bij de hand</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="s-lede mt-6 max-w-2xl text-ink-soft">
            Elke opdrachtgever krijgt een eigen omgeving waarin het hele project samenkomt —
            van het eerste beeld tot de laatste factuur.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:mt-20 sm:grid-cols-2 sm:items-center">
          <Reveal>
            <figure className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/site/portaal.webp" alt="Klantportaal" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className="s-eyebrow rounded-full px-5 py-2.5 !tracking-[0.24em]"
                  style={{ background: "rgba(25,23,20,0.75)", color: "var(--warmwhite)", backdropFilter: "blur(6px)" }}
                >
                  Binnenkort
                </span>
              </div>
            </figure>
          </Reveal>
          <div className="space-y-7">
            {FEATURES.map((ft, i) => (
              <Reveal key={ft.t} delay={i * 90}>
                <div className="border-t border-line pt-5">
                  <h2 className="s-display-m">{ft.t}</h2>
                  <p className="s-body mt-2 text-ink-soft">{ft.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-20 border-t border-line pt-10">
            <p className="s-body max-w-xl text-ink-soft">
              Het portaal opent samen met de eerste projecten van de studio. Al opdrachtgever
              worden?
            </p>
            <Link
              href="/site/intake"
              className="s-eyebrow mt-6 inline-block rounded-full px-7 py-4 !tracking-[0.2em] transition-opacity hover:opacity-85"
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
