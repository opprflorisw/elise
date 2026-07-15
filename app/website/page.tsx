"use client";

import Link from "next/link";
import Image from "next/image";
import { stageById } from "@/lib/stages";
import { StageShell } from "@/components/journey/StageShell";
import { Section } from "@/components/journey/Blocks";
import { ReactionGrid } from "@/components/feedback/ReactionGrid";
import { Reveal } from "@/components/ui/Reveal";
import { mockupGrid, mockupDirections } from "@/lib/content";

const stage = stageById("website");

const concepts = [
  { slug: "a", name: "Warm Boutique", src: "/design/B1-boutique-greige.png", accent: "#6E1423", desc: "Parijse greige, hoog-contrast serif, ingetogen maar rijk." },
  { slug: "b", name: "Parijse Dusk", src: "/design/D3-parisian-dusk.png", accent: "#9A5B33", desc: "Avondlijke warmte, champagne-goud, private-club gevoel." },
  { slug: "c", name: "Donkere Monoliet", src: "/design/E3-dark-monolith.png", accent: "#191714", desc: "Cinematische architectuur, bijna geen UI, vol beeld." },
];

export default function WebsiteHub() {
  const grid = mockupGrid();

  return (
    <StageShell
      stage={stage}
      lede="Drie richtingen voor je website — geen winnaar kiezen. Loop ze door en vertel wat je aantrekt en wat je afstoot. Elk detail telt: typografie, beeld, kleur, layout, gevoel."
    >
      {/* three live concepts */}
      <Section stageId="website" sectionId="concepts-intro" eyebrow="Aan jou" title="Drie levende ontwerpen" accent={stage.accent} feedback={false}>
        <div className="grid gap-6 sm:grid-cols-3">
          {concepts.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <Link href={`/website/${c.slug}`} className="group block overflow-hidden rounded-xl border border-line transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.src} alt={c.name} fill sizes="(max-width:640px) 90vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.accent }} />
                    <h3 className="display-l text-[1.3rem]">{c.name}</h3>
                  </div>
                  <p className="body mt-1.5 text-[0.9rem] text-ink-soft">{c.desc}</p>
                  <span className="eyebrow mt-4 inline-flex items-center gap-2" style={{ color: c.accent }}>
                    Open ontwerp →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="body mt-6 text-ink-soft">
          Elk ontwerp opent op volledig scherm. Onderin verschijnt een paneel waar je per onderdeel
          reageert. Kom daarna terug voor het volgende.
        </p>
      </Section>

      {/* the 15-mockup exploration gallery */}
      <Section stageId="website" sectionId="verkenning-intro" eyebrow="De ontwerpverkenning" title="Alles wat we verkenden" accent={stage.accent} feedbackLabel="Ontwerpverkenning — algemeen">
        <p className="body mb-8 max-w-2xl text-ink-soft">
          Voordat we deze drie kozen, verkenden we vijftien richtingen — in vijf families. Reageer
          gerust op alles: ♥ mooi, ✕ niet ik, of een notitie. Ook wat we níét kozen vertelt ons veel.
        </p>
        {Object.entries(mockupDirections).map(([dir, label]) => (
          <div key={dir} className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <h3 className="eyebrow" style={{ color: stage.accent }}>{dir} · {label}</h3>
              <span className="rule flex-1" />
            </div>
            <ReactionGrid
              stageId="website"
              sectionId="verkenning"
              label={`Verkenning · ${label}`}
              items={grid.filter((g) => g.cluster === label)}
              accent={stage.accent}
              aspect="16 / 10"
            />
          </div>
        ))}
      </Section>

      {/* to overview */}
      <Section stageId="website" sectionId="naar-overzicht" accent={stage.accent} feedback={false}>
        <div className="rounded-2xl border p-7 text-center sm:p-10" style={{ borderColor: stage.accent }}>
          <h3 className="display-l">Klaar met de reis?</h3>
          <p className="body mx-auto mt-3 max-w-md text-ink-soft">
            Bekijk je overzicht en stuur alles naar Floris — dit wordt de complete basis voor je website.
          </p>
          <Link href="/overzicht" className="eyebrow mt-6 inline-block rounded-full px-8 py-4 text-paper" style={{ background: stage.accent }}>
            Naar het overzicht →
          </Link>
        </div>
      </Section>
    </StageShell>
  );
}
