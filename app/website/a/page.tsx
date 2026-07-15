"use client";

import Image from "next/image";
import { ConceptBack } from "@/components/concepts/ConceptBack";
import { ElementFeedbackOverlay } from "@/components/feedback/ElementFeedbackOverlay";

// CONCEPT A — Warm Boutique (source: B1). Parisian greige, high-contrast serif, hairlines, bordeaux.
const PAPER = "#EDE7DE";
const INK = "#221D18";
const BORD = "#6E1423";

export default function ConceptA() {
  return (
    <div style={{ background: PAPER, color: INK, minHeight: "100vh" }} className="font-serif">
      <ConceptBack color={INK} />

      {/* top nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:px-10">
        <nav className="hidden gap-8 text-[0.7rem] uppercase tracking-[0.2em] sm:flex">
          <span>Projecten</span>
          <span>Studio</span>
          <span>Benadering</span>
        </nav>
        <div className="mx-auto text-center leading-none sm:mx-0">
          <div className="text-[0.55rem] uppercase tracking-[0.55em]" style={{ fontFamily: "var(--font-archivo)" }}>Studio</div>
          <div className="font-display text-[2rem] sm:text-[2.4rem]">Verstelle</div>
        </div>
        <nav className="hidden gap-8 text-[0.7rem] uppercase tracking-[0.2em] sm:flex">
          <span>Contact</span>
          <span style={{ color: BORD }}>NL / EN</span>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="my-6 h-px w-full" style={{ background: `${INK}22` }} />
      </div>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
          <Image src="/images/concept-a/hero.png" alt="" fill priority className="object-cover" />
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <h1 className="font-display text-[clamp(1.8rem,4.5vw,3rem)] leading-tight">
            Architectonische woningtransformatie
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed" style={{ color: `${INK}bb` }}>
            Sculpturale interieurs met Europese grootstedelijke allure. Tijdloos, gelaagd,
            en gemaakt om over twintig jaar nog steeds te kloppen.
          </p>
          <button className="mt-8 rounded-full px-8 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-white" style={{ background: BORD }}>
            Bekijk projecten
          </button>
        </div>
      </section>

      {/* project teaser */}
      <section className="mx-auto mt-20 max-w-6xl px-6 pb-40 sm:px-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-[0.75rem] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-archivo)" }}>Uitgelicht werk</h2>
          <span className="text-[0.7rem]" style={{ color: `${INK}88` }}>01 — 02</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { src: "/images/concept-a/project-1.png", t: "Herenhuis, Amsterdam-Zuid", m: "Volledige transformatie" },
            { src: "/images/concept-a/project-2.png", t: "Bovenhuis, Grachtengordel", m: "Keuken & leefruimte" },
          ].map((p) => (
            <figure key={p.t} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image src={p.src} alt={p.t} fill sizes="45vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between">
                <span className="font-display text-[1.3rem]">{p.t}</span>
                <span className="text-[0.7rem] uppercase tracking-[0.15em]" style={{ color: `${INK}88` }}>{p.m}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ElementFeedbackOverlay concept="a" conceptName="Warm Boutique" accent={BORD} />
    </div>
  );
}
