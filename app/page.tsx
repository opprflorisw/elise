"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useJourney } from "@/lib/store";
import { JourneyNav } from "@/components/journey/JourneyNav";
import { RedThread } from "@/components/journey/RedThread";
import { Wordmark } from "@/components/ui/Wordmark";
import { Reveal } from "@/components/ui/Reveal";

export default function StartPage() {
  const { visit } = useJourney();
  useEffect(() => visit("start"), [visit]);

  return (
    <>
      <JourneyNav />
      <RedThread accent="var(--color-bordeaux)" />

      {/* hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-24 sm:px-10">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/backdrops/start-hero.png"
            alt=""
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.28 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--color-paper) 0%, transparent 35%, transparent 60%, var(--color-paper) 100%)" }} />
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--color-bordeaux)" }}>
              Een reis in vijf hoofdstukken
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display-xl mt-6">
              Het begin van<br />een studio.
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="lede mt-8 max-w-2xl text-ink-soft">
              Dit is geen website. Het is een reis door alles wat we samen hebben ontdekt over
              de studio die jij aan het bouwen bent. Sommige dingen weten we al. Andere zijn aan
              jou. Onderweg leg je vast wat voelt als jou — en wat niet.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-12 flex items-center gap-4">
              <Link
                href="/manifest"
                className="eyebrow rounded-full px-8 py-4 text-paper transition-transform hover:translate-x-0.5"
                style={{ background: "var(--color-bordeaux)" }}
              >
                Begin de reis →
              </Link>
              <span className="eyebrow text-ink-soft">± 10 minuten</span>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 eyebrow text-ink-soft" style={{ opacity: 0.6 }}>
          scroll
        </div>
      </section>

      {/* the space in between */}
      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-10 sm:py-36">
        <Reveal>
          <p className="eyebrow mb-8 text-ink-soft">Wie je bent</p>
        </Reveal>
        <div className="space-y-3">
          {["Geen interieurontwerper.", "Geen architect.", "Geen projectontwikkelaar."].map((line, i) => (
            <Reveal key={line} delay={i * 140}>
              <p className="display-l text-ink-soft" style={{ textDecoration: "line-through", textDecorationColor: "var(--color-line-strong)", textDecorationThickness: "2px" }}>
                {line}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={520}>
          <p className="display-l mt-10">
            Maar precies de ruimte <em>daartussenin</em> —{" "}
            <span style={{ color: "var(--color-bordeaux)" }}>
              Interior Architecture &amp; Property Transformation.
            </span>
          </p>
        </Reveal>
        <Reveal delay={640}>
          <p className="lede mt-8 max-w-2xl text-ink-soft">
            Waar een ontwerper binnenkomt als de indeling al vaststaat, begin jij eerder: moet
            die muur blijven? Kan hier een vide? Kunnen we de leefruimte draaien? Hoe beweegt
            iemand door het huis? Hoe voelt de ruimte om 08:00, 15:00 en 22:00?
          </p>
        </Reveal>
      </section>

      {/* how it works */}
      <section className="mx-auto max-w-4xl px-5 pb-32 sm:px-10">
        <Reveal>
          <div className="rounded-2xl border border-line bg-paper-deep/40 p-7 sm:p-10">
            <Wordmark size="md" />
            <p className="lede mt-6 text-ink-soft">Onderweg zie je twee dingen:</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 text-[0.6rem]" style={{ color: "var(--color-gold)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-gold)" }} />
                  Dit weten we al
                </span>
                <p className="body mt-2 text-ink-soft">Dingen die we samen hebben vastgesteld — als een gegeven gepresenteerd.</p>
              </div>
              <div>
                <span className="eyebrow text-[0.6rem]" style={{ color: "var(--color-bordeaux)" }}>
                  ⌐ Aan jou
                </span>
                <p className="body mt-2 text-ink-soft">Keuzes die jij maakt. En overal een <strong>notitie-knop</strong> om te zeggen wat je voelt.</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/manifest" className="display-l inline-flex items-center gap-3 transition-transform hover:translate-x-1">
                Naar het manifest <span style={{ color: "var(--color-gold)" }}>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
