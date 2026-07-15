"use client";

import { stageById } from "@/lib/stages";
import { StageShell } from "@/components/journey/StageShell";
import { Section, FilledCard, OpenCard } from "@/components/journey/Blocks";
import { ChoicePicker } from "@/components/feedback/ChoicePicker";
import { MaterialPicker } from "@/components/feedback/MaterialPicker";
import { CommentTextField } from "@/components/feedback/CommentTextField";
import { doenWij, doenWijNiet, naamChoices, luxeChoices, nooitChoices, materials } from "@/lib/content";

const stage = stageById("manifest");
const A = stage.accent;

export default function ManifestPage() {
  return (
    <StageShell
      stage={stage}
      lede="Het belangrijkste document van de studio. Belangrijker dan een logo. Over vijf jaar is dit de reden dat elk project nog steeds voelt alsof het door dezelfde hand is ontworpen."
    >
      {/* wat we wel / niet doen */}
      <Section stageId="manifest" sectionId="scope" eyebrow="De kern" title="Wat we wél en niet doen" accent={A} feedbackLabel="Manifest — wat we doen">
        <FilledCard>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Wel</p>
              <ul className="space-y-1.5">
                {doenWij.map((d) => (
                  <li key={d} className="body">{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3 text-ink-soft">Niet</p>
              <ul className="space-y-1.5">
                {doenWijNiet.map((d) => (
                  <li key={d} className="body text-ink-soft" style={{ textDecoration: "line-through", textDecorationColor: "var(--color-line-strong)" }}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </FilledCard>
      </Section>

      {/* naam */}
      <Section stageId="manifest" sectionId="naam" eyebrow="Aan jou" title="Hoe noemen we de studio?" accent={A} feedback={false}>
        <p className="body mb-5 max-w-2xl text-ink-soft">
          “Verbouwstudio” of “interieurbureau” voelt te klein. Jouw werk gaat over architectuur,
          ruimte, materiaal en sfeer als één geheel. Welke richting past?
        </p>
        <OpenCard accent={A} label="Kies een richting">
          <ChoicePicker stageId="manifest" sectionId="naam" label="Naam-richting studio" choices={naamChoices} allowOther accent={A} columns={1} />
        </OpenCard>
      </Section>

      {/* luxe */}
      <Section stageId="manifest" sectionId="luxe" eyebrow="Aan jou" title="Wat is luxe voor jou?" accent={A} feedback={false}>
        <OpenCard accent={A} label="Kies wat resoneert">
          <ChoicePicker stageId="manifest" sectionId="luxe" label="Definitie van luxe" choices={luxeChoices} multi allowOther accent={A} />
        </OpenCard>
      </Section>

      {/* nooit */}
      <Section stageId="manifest" sectionId="nooit" eyebrow="Aan jou" title="Wat ontwerpen we nooit?" accent={A} feedback={false}>
        <OpenCard accent={A} label="Meerdere mogelijk">
          <ChoicePicker stageId="manifest" sectionId="nooit" label="Nooit ontwerpen" choices={nooitChoices} multi allowOther accent={A} />
        </OpenCard>
      </Section>

      {/* materialen — 3 exercise */}
      <Section stageId="manifest" sectionId="materialen" eyebrow="Aan jou · de oefening" title="Een leeg dubbel bovenhuis van 250 m² in Amsterdam-Zuid" accent={A} feedback={false}>
        <p className="body mb-6 max-w-2xl text-ink-soft">
          Volledige vrijheid. Geen budgetlimiet. Welke drie materialen of elementen móéten er dan
          absoluut in voorkomen? Die eerste drie zeggen vaak meer over jouw ontwerp-DNA dan honderd
          moodboards.
        </p>
        <OpenCard accent={A} label="Kies precies 3">
          <MaterialPicker stageId="manifest" sectionId="materialen" label="Drie must-have materialen" materials={materials} max={3} accent={A} />
        </OpenCard>
      </Section>

      {/* gevoel */}
      <Section stageId="manifest" sectionId="gevoel" eyebrow="Aan jou" title="Hoe moet een ruimte voelen?" accent={A} feedback={false}>
        <OpenCard accent={A} label="In eigen woorden">
          <CommentTextField
            stageId="manifest"
            sectionId="gevoel"
            label="Hoe een ruimte moet voelen"
            placeholder="Schrijf vrij — één zin of een paar woorden. Wat moet iemand voelen bij binnenkomst?"
            accent={A}
          />
        </OpenCard>
      </Section>
    </StageShell>
  );
}
