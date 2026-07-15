"use client";

import { stageById } from "@/lib/stages";
import { StageShell } from "@/components/journey/StageShell";
import { Section, FilledCard, OpenCard } from "@/components/journey/Blocks";
import { ReactionGrid } from "@/components/feedback/ReactionGrid";
import { PaletteChooser } from "@/components/feedback/PaletteChooser";
import { ChoicePicker } from "@/components/feedback/ChoicePicker";
import { Reveal } from "@/components/ui/Reveal";
import { vijfElementen, moodboard, moodboardClusters, palettes, typografie } from "@/lib/content";

const stage = stageById("stijl");
const A = stage.accent;

export default function StijlPage() {
  const board = moodboard();
  const clusters = Object.entries(moodboardClusters);

  return (
    <StageShell
      stage={stage}
      lede="Geen ingetogen minimalisme. Luxe eclectic: sculpturaal, architectonisch, een mengeling van de jaren 30, 70 en nu. Parijs, Milaan, New York. Chic en tijdloos — maar zeker nooit saai."
    >
      {/* five elements */}
      <Section stageId="stijl" sectionId="dna" eyebrow="Dit weten we al" title="Vijf dingen die in bijna elk beeld terugkomen" accent={A} feedbackLabel="Stijl — het DNA">
        <div className="space-y-4">
          {vijfElementen.map((e, i) => (
            <Reveal key={e.t} delay={i * 80}>
              <FilledCard seal={`0${i + 1}`}>
                <h3 className="display-l text-[1.4rem]">{e.t}</h3>
                <p className="body mt-2 text-ink-soft">{e.d}</p>
              </FilledCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* moodboard */}
      <Section stageId="stijl" sectionId="moodboard-intro" eyebrow="Aan jou" title="Het moodboard" accent={A} feedback={false}>
        <p className="body mb-8 max-w-2xl text-ink-soft">
          Veel om uit te kiezen. Tik op een beeld: één keer voor <strong style={{ color: A }}>♥ mooi</strong>,
          nog een keer voor <strong>✕ niet ik</strong>. Gebruik de <strong>+</strong> voor een notitie bij
          een beeld. Geen goede of foute antwoorden — het gaat om patronen.
        </p>
        {clusters.map(([key, label]) => (
          <div key={key} className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <h3 className="eyebrow" style={{ color: A }}>{label}</h3>
              <span className="rule flex-1" />
            </div>
            <ReactionGrid
              stageId="stijl"
              sectionId="moodboard"
              label={`Moodboard · ${label}`}
              items={board.filter((b) => b.cluster === label)}
              accent={A}
            />
          </div>
        ))}
      </Section>

      {/* palette */}
      <Section stageId="stijl" sectionId="palet" eyebrow="Aan jou" title="Welk kleurpalet trekt je aan?" accent={A} feedback={false}>
        <OpenCard accent={A} label="Kies een richting">
          <PaletteChooser stageId="stijl" sectionId="palet" label="Kleurpalet" palettes={palettes} accent={A} />
        </OpenCard>
      </Section>

      {/* typography */}
      <Section stageId="stijl" sectionId="typografie" eyebrow="Aan jou" title="En welke letter?" accent={A} feedback={false}>
        <p className="body mb-5 max-w-2xl text-ink-soft">
          Een beetje eclectic en sculptural, en tegelijk rustig en chic.
        </p>
        <OpenCard accent={A} label="Kies een richting">
          <ChoicePicker stageId="stijl" sectionId="typografie" label="Typografie-richting" choices={typografie} allowOther accent={A} columns={1} />
        </OpenCard>
      </Section>
    </StageShell>
  );
}
