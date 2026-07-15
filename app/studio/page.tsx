"use client";

import Image from "next/image";
import { stageById } from "@/lib/stages";
import { StageShell } from "@/components/journey/StageShell";
import { Section, FilledCard, OpenCard } from "@/components/journey/Blocks";
import { ChoicePicker } from "@/components/feedback/ChoicePicker";
import { FeedbackDot } from "@/components/feedback/FeedbackDot";
import { Reveal } from "@/components/ui/Reveal";
import { pijlers, methodeStappen, aiTools, toolReactie, websiteFuncties } from "@/lib/content";

const stage = stageById("studio");
const A = stage.accent;

export default function StudioPage() {
  return (
    <StageShell
      stage={stage}
      lede="Wat de studio doet — en hoe AI je kan helpen om als één persoon een boutique studio te runnen. Eén idee hierin is misschien wel je grootste onderscheid."
    >
      {/* two pillars */}
      <Section stageId="studio" sectionId="pijlers" eyebrow="Dit weten we al" title="Twee pijlers" accent={A} feedback={false}>
        <div className="grid gap-4 sm:grid-cols-2">
          {pijlers.map((p) => (
            <FilledCard key={p.t}>
              <h3 className="display-l text-[1.4rem]">{p.t}</h3>
              <p className="body mt-2 text-ink-soft">{p.d}</p>
            </FilledCard>
          ))}
        </div>
        <div className="mt-4">
          <OpenCard accent={A} label="Klopt dit?">
            <ChoicePicker
              stageId="studio"
              sectionId="diensten"
              label="Diensten-structuur"
              choices={[
                { id: "ja", label: "Ja, twee pijlers klopt" },
                { id: "alleen-residential", label: "Alleen Residential Transformation" },
                { id: "anders", label: "Anders — ik licht toe" },
              ]}
              allowOther
              accent={A}
              columns={1}
            />
          </OpenCard>
        </div>
      </Section>

      {/* THE METHOD — the star, with meta-reveal */}
      <Section stageId="studio" sectionId="methode" eyebrow="Het idee" title="Wat je nu doet, kun jij je klanten bieden" accent={A} feedbackLabel="De begeleide methode">
        <p className="lede mb-10 max-w-2xl text-ink-soft">
          Deze reis — beelden zien, reageren, kiezen — <em>is</em> de methode. Stel je voor dat je
          klant dit doet met háár eigen huis:
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {methodeStappen.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="overflow-hidden rounded-xl border border-line bg-paper-deep/30">
                <div className="relative aspect-[16/9]">
                  <Image src={s.src} alt={s.t} fill sizes="(max-width:640px) 90vw, 45vw" className="object-cover" />
                  <span className="absolute left-3 top-3 font-display text-[1.6rem] text-paper" style={{ textShadow: "0 2px 12px rgba(0,0,0,.6)" }}>
                    {s.n}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="display-l text-[1.25rem]">{s.t}</h3>
                  <p className="body mt-1.5 text-[0.95rem] text-ink-soft">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <OpenCard accent={A} label="Jouw reactie op dit idee">
            <ChoicePicker
              stageId="studio"
              sectionId="methode-reactie"
              label="Reactie op de begeleide methode"
              choices={[
                { id: "geweldig", label: "Dit is geweldig — dit wil ik" },
                { id: "interessant", label: "Interessant, maar ik heb vragen" },
                { id: "niet-nu", label: "Niet nu" },
              ]}
              allowOther
              accent={A}
              columns={1}
            />
          </OpenCard>
        </div>
      </Section>

      {/* AI tool menu */}
      <Section stageId="studio" sectionId="ai" eyebrow="Aan jou" title="Wat van deze AI-tools wil je?" accent={A} feedback={false}>
        <div className="space-y-4">
          {aiTools.map((t) => (
            <div key={t.id} className="rounded-xl border border-line p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="display-l text-[1.3rem]">{t.label}</h3>
                  <p className="body mt-1.5 max-w-xl text-ink-soft">{t.desc}</p>
                </div>
                <FeedbackDot stageId="studio" sectionId={`ai-note-${t.id}`} label={`AI-tool: ${t.label}`} accent={A} align="left" />
              </div>
              <div className="mt-4">
                <ChoicePicker stageId="studio" sectionId={`ai-${t.id}`} label={`AI-tool — ${t.label}`} choices={toolReactie} accent={A} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* website functions */}
      <Section stageId="studio" sectionId="website-functies" eyebrow="Aan jou" title="Wat moet jouw eigen website doen?" accent={A} feedback={false}>
        <OpenCard accent={A} label="Meerdere mogelijk">
          <ChoicePicker stageId="studio" sectionId="website-functies" label="Website-functies" choices={websiteFuncties} multi allowOther accent={A} />
        </OpenCard>
      </Section>
    </StageShell>
  );
}
