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
      <Section stageId="studio" sectionId="methode" eyebrow="Het idee — jouw grootste onderscheid" title="Wat je nu doet, kun jij je klanten bieden" accent={A} feedbackLabel="De begeleide methode">
        <p className="lede mb-6 max-w-2xl text-ink-soft">
          Deze reis — beelden zien, reageren, kiezen — is geen presentatie. Het <em>ís</em> een
          werkmethode. En precies deze methode kun jij straks aan je eigen klanten bieden.
        </p>
        <p className="body mb-12 max-w-2xl text-ink-soft">
          Het begint bij iets kleins: drie foto’s. Geen opmeting, geen ellenlange briefing. De AI
          neemt de bestaande ruimte van de klant en laat zien wat het kán worden — in jóúw
          handschrift, op hún muren. Zo praat je niet langer óver abstracte ideeën, maar wijs je
          samen naar beelden. Het onzichtbare wordt ineens voelbaar.
        </p>

        {/* the 4 steps — larger, more illustrative */}
        <div className="space-y-6">
          {methodeStappen.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="grid items-stretch gap-0 overflow-hidden rounded-xl border border-line bg-paper-deep/30 sm:grid-cols-[1.2fr,1fr]">
                <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[240px]">
                  <Image src={s.src} alt={s.t} fill sizes="(max-width:640px) 100vw, 55vw" className="object-cover" />
                  <span className="absolute left-4 top-3 font-display text-[2rem] text-paper" style={{ textShadow: "0 2px 14px rgba(0,0,0,.7)" }}>
                    {s.n}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-7">
                  <h3 className="display-l text-[1.4rem]">{s.t}</h3>
                  <p className="body mt-2.5 text-[0.98rem] text-ink-soft">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* speech augmentation — capturing soft opinions */}
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border" style={{ borderColor: A }}>
            <div className="relative aspect-[16/7]">
              <Image src="/images/method/speech.webp" alt="Spraak die meeluistert" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(28,25,23,0.72))" }} />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="eyebrow text-paper" style={{ opacity: 0.9 }}>De volgende stap</span>
                <h3 className="display-l mt-1 text-paper" style={{ textShadow: "0 2px 14px rgba(0,0,0,.5)" }}>
                  En dan: de stem erbij
                </h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="body max-w-2xl text-ink-soft">
                Klikken vertelt de helft. De andere helft zit in wat mensen <em>zeggen</em> terwijl
                ze kijken. Neem je een live sessie op, dan luistert de AI mee en vangt de zachte
                meningen — <span style={{ color: A }}>“dit voelt te koud”</span>,{" "}
                <span style={{ color: A }}>“die boog vind ik prachtig”</span>,{" "}
                <span style={{ color: A }}>“meer messing”</span> — de nuances die normaal verloren
                gaan tussen twee afspraken door. Elke opmerking automatisch gekoppeld aan het beeld
                waar het over ging. Zo verlies je niets, en hoef je zelf niet te notuleren terwijl
                je ontwerpt.
              </p>
            </div>
          </div>
        </Reveal>

        {/* meta-reveal */}
        <Reveal>
          <div className="mt-8 rounded-xl bg-paper-deep/50 p-6 sm:p-8">
            <p className="lede">
              Wat jij nu ervaart, is precies dit — alleen dan met jóúw klant en háár huis. Deze hele
              reis is eigenlijk één grote demo van je eigen methode.
            </p>
          </div>
        </Reveal>

        <div className="mt-8">
          <OpenCard accent={A} label="Jouw reactie op dit idee">
            <ChoicePicker
              stageId="studio"
              sectionId="methode-reactie"
              label="Reactie op de begeleide methode"
              choices={[
                { id: "geweldig", label: "Dit is geweldig — dit wil ik" },
                { id: "spraak-ja", label: "Vooral de spraak-opname spreekt me aan" },
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
