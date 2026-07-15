"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { StageMeta } from "@/lib/stages";
import { nextStage } from "@/lib/stages";
import { useJourney } from "@/lib/store";
import { JourneyNav } from "./JourneyNav";
import { RedThread } from "./RedThread";

export function StageShell({
  stage,
  children,
  lede,
}: {
  stage: StageMeta;
  children: React.ReactNode;
  lede?: string;
}) {
  const { visit } = useJourney();
  useEffect(() => {
    visit(stage.id);
  }, [stage.id, visit]);

  const next = nextStage(stage.id);

  return (
    <>
      <JourneyNav />
      <RedThread accent={stage.accent} />

      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-28 pt-24 sm:px-10 sm:pt-32">
        {/* stage header */}
        <div className="mb-14 sm:mb-20">
          <div className="mb-6 flex items-baseline gap-4">
            <span className="font-display leading-none text-[clamp(3rem,10vw,6rem)]" style={{ color: stage.accent }}>
              {stage.numeral}
            </span>
            <span className="eyebrow text-ink-soft">Hoofdstuk {stage.index} / 5</span>
          </div>
          <h1 className="display-xl">{stage.title}</h1>
          {lede && <p className="lede mt-6 max-w-2xl text-ink-soft">{lede}</p>}
        </div>

        {children}

        {/* next-stage CTA */}
        {next && (
          <div className="mt-24 border-t border-line pt-8">
            <Link href={next.path} className="group inline-flex flex-col gap-1">
              <span className="eyebrow text-ink-soft">Volgende hoofdstuk</span>
              <span className="display-l inline-flex items-center gap-3 transition-transform group-hover:translate-x-1">
                {next.title}
                <span style={{ color: next.accent }}>→</span>
              </span>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
