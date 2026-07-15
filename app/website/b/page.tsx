"use client";

import Image from "next/image";
import { ConceptBack } from "@/components/concepts/ConceptBack";
import { ElementFeedbackOverlay } from "@/components/feedback/ElementFeedbackOverlay";

// CONCEPT B — Parisian Dusk (source: D3). Espresso, champagne-gold, green/cognac, members-club.
const DUSK = "#39332C";
const DUSK_DEEP = "#2A251F";
const CHAMP = "#D8C39A";
const CREAM = "#EFE7D8";

export default function ConceptB() {
  return (
    <div style={{ background: DUSK, color: CREAM, minHeight: "100vh" }} className="font-serif">
      <ConceptBack color={CHAMP} />

      {/* nav */}
      <header className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 sm:px-10">
        <div className="text-center leading-none">
          <div className="text-[0.55rem] uppercase tracking-[0.55em]" style={{ fontFamily: "var(--font-archivo)", color: CHAMP }}>Studio</div>
          <div className="font-display text-[2.6rem] sm:text-[3.2rem]" style={{ color: CHAMP }}>Verstelle</div>
        </div>
        <nav className="mt-5 flex gap-6 text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: `${CREAM}cc` }}>
          <span>Portfolio</span><span>Over ons</span><span>Diensten</span><span>Pers</span><span>Contact</span>
        </nav>
      </header>

      {/* hero */}
      <section className="mx-auto mt-10 max-w-6xl px-6 sm:px-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-md" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
          <Image src="/images/concept-b/hero.webp" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 55%,rgba(42,37,31,0.85))" }} />
        </div>
        <div className="mt-10 text-center">
          <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)]" style={{ color: CHAMP }}>
            Sculpturale interieurs &amp; transformatie
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed" style={{ color: `${CREAM}cc` }}>
            Een dialoog tussen luxe, kunst en architectuur. Amsterdam · Parijs · Milaan.
          </p>
          <button className="mt-8 rounded-full border px-8 py-3 text-[0.7rem] uppercase tracking-[0.25em]" style={{ borderColor: CHAMP, color: CHAMP }}>
            Ontdek onze projecten →
          </button>
        </div>
      </section>

      {/* project teaser strip */}
      <section className="mx-auto mt-20 max-w-6xl px-6 pb-40 sm:px-10">
        <div className="mb-6 h-px w-full" style={{ background: `${CHAMP}44` }} />
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { src: "/images/concept-b/project-1.webp", t: "Penthouse, Zuidas", m: "Avondlijke lounge" },
            { src: "/images/concept-b/project-2.webp", t: "Herenhuis, Den Haag", m: "Eetkamer & bar" },
          ].map((p) => (
            <figure key={p.t} className="group overflow-hidden rounded-md" style={{ background: DUSK_DEEP }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={p.src} alt={p.t} fill sizes="45vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="flex items-baseline justify-between px-5 py-4">
                <span className="font-display text-[1.3rem]" style={{ color: CHAMP }}>{p.t}</span>
                <span className="text-[0.68rem] uppercase tracking-[0.15em]" style={{ color: `${CREAM}99` }}>{p.m}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ElementFeedbackOverlay concept="b" conceptName="Parijse Dusk" accent="#9A5B33" />
    </div>
  );
}
