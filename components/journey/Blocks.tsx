"use client";

import type { StageId } from "@/lib/store";
import { FeedbackDot } from "@/components/feedback/FeedbackDot";
import { Reveal } from "@/components/ui/Reveal";

/** "Dit weten we al" — an established fact, gold-sealed. */
export function FilledCard({
  children,
  seal = "Dit weten we al",
}: {
  children: React.ReactNode;
  seal?: string;
}) {
  return (
    <div className="relative rounded-xl border border-line bg-paper-deep/40 p-6 sm:p-7">
      <span className="eyebrow mb-3 inline-flex items-center gap-2 text-[0.6rem]" style={{ color: "var(--color-gold)" }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-gold)" }} />
        {seal}
      </span>
      <div>{children}</div>
    </div>
  );
}

/** "Aan jou" — an open choice, arch-topped and accented. */
export function OpenCard({
  children,
  accent = "var(--color-bordeaux)",
  label = "Aan jou",
}: {
  children: React.ReactNode;
  accent?: string;
  label?: string;
}) {
  return (
    <div
      className="relative border p-6 pt-7 sm:p-8"
      style={{
        borderColor: accent,
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
        borderBottomLeftRadius: "0.75rem",
        borderBottomRightRadius: "0.75rem",
      }}
    >
      <span
        className="absolute -top-3 left-7 px-2 eyebrow text-[0.6rem]"
        style={{ background: "var(--color-paper)", color: accent }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

/** A titled section with a bound FeedbackDot in its header. */
export function Section({
  stageId,
  sectionId,
  eyebrow,
  title,
  accent = "var(--color-bordeaux)",
  children,
  feedback = true,
  feedbackLabel,
}: {
  stageId: StageId;
  sectionId: string;
  eyebrow?: string;
  title?: string;
  accent?: string;
  children: React.ReactNode;
  feedback?: boolean;
  feedbackLabel?: string;
}) {
  return (
    <Reveal as="section" className="mb-16 sm:mb-24">
      {(eyebrow || title || feedback) && (
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            {eyebrow && (
              <div className="eyebrow mb-2" style={{ color: accent }}>
                {eyebrow}
              </div>
            )}
            {title && <h2 className="display-l max-w-3xl">{title}</h2>}
          </div>
          {feedback && (
            <div className="mt-1 shrink-0">
              <FeedbackDot
                stageId={stageId}
                sectionId={`fb-${sectionId}`}
                label={feedbackLabel || title || sectionId}
                title={title}
                accent={accent}
              />
            </div>
          )}
        </div>
      )}
      {children}
    </Reveal>
  );
}
