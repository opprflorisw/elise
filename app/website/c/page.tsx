"use client";

import Image from "next/image";
import { ConceptBack } from "@/components/concepts/ConceptBack";
import { ElementFeedbackOverlay } from "@/components/feedback/ElementFeedbackOverlay";

// CONCEPT C — Dark Monolith (source: E3). Full-bleed architecture, warm white, near-zero UI.
const BLACK = "#171512";
const WHITE = "#F2EDE4";
const TRAV = "#C9B99F";

export default function ConceptC() {
  return (
    <div style={{ background: BLACK, color: WHITE, minHeight: "100vh" }} className="font-serif">
      <ConceptBack color={WHITE} />

      {/* full-viewport hero */}
      <section className="relative flex h-[100svh] flex-col">
        <Image src="/images/concept-c/hero.webp" alt="" fill priority className="object-cover" style={{ opacity: 0.72 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(23,21,18,0.35),rgba(23,21,18,0.15) 40%,rgba(23,21,18,0.9))" }} />

        {/* minimal top row: wordmark + a single menu dot */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-8 sm:px-12">
          <div className="font-display text-[1.6rem] leading-none" style={{ color: WHITE }}>
            Studio Verstelle
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border" style={{ borderColor: `${WHITE}55` }}>
            <span className="h-1 w-1 rounded-full" style={{ background: WHITE }} />
          </span>
        </div>

        {/* overlaid statement */}
        <div className="relative z-10 mt-auto px-6 pb-24 sm:px-12">
          <h1 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.95]" style={{ maxWidth: "14ch" }}>
            Het transformeren van ruimtes tot kunst
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed" style={{ color: `${WHITE}cc` }}>
            Interior Architecture &amp; Property Transformation — Amsterdam.
          </p>
          <div className="mt-8 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: TRAV }}>
            <span>01 / 05</span>
            <span className="h-px w-12" style={{ background: TRAV }} />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* one project, cinematic */}
      <section className="px-6 py-24 pb-44 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <span className="text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: TRAV }}>Geselecteerd project</span>
          <div className="mt-6 grid items-center gap-8 sm:grid-cols-[3fr,2fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src="/images/concept-c/project-1.webp" alt="" fill sizes="60vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">Vide-woning, Amsterdam-Oost</h2>
              <p className="mt-4 text-[1rem] leading-relaxed" style={{ color: `${WHITE}bb` }}>
                Een dubbele bovenwoning teruggebracht tot één dramatische, dubbelhoge ruimte —
                daglicht als bouwmateriaal, walnoot en donkere steen als contrast.
              </p>
              <button className="mt-6 text-[0.7rem] uppercase tracking-[0.25em]" style={{ color: TRAV }}>
                Bekijk project →
              </button>
            </div>
          </div>
        </div>
      </section>

      <ElementFeedbackOverlay concept="c" conceptName="Donkere Monoliet" accent="#8a6b3f" />
    </div>
  );
}
