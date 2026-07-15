"use client";

import { useState } from "react";
import { useJourney, type StageId } from "@/lib/store";
import { CommentSheet } from "./CommentSheet";

/** A small, quiet affordance placed on any section — opens a bound comment sheet. */
export function FeedbackDot({
  stageId,
  sectionId,
  label,
  title,
  accent = "var(--color-bordeaux)",
  align = "right",
}: {
  stageId: StageId;
  sectionId: string;
  label: string;
  title?: string;
  accent?: string;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const { get } = useJourney();
  const has = !!get(stageId, sectionId);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Notitie toevoegen: ${label}`}
        className={`group inline-flex items-center gap-2 ${align === "right" ? "flex-row" : "flex-row-reverse"}`}
      >
        <span
          className="grid h-7 w-7 place-items-center rounded-full border transition-all group-hover:scale-110"
          style={{
            borderColor: has ? accent : "var(--color-line-strong)",
            background: has ? accent : "transparent",
            color: has ? "var(--color-paper)" : "var(--color-ink-soft)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <span
          className="eyebrow text-[0.6rem] opacity-0 transition-opacity group-hover:opacity-70"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {has ? "Notitie" : "Notitie +"}
        </span>
      </button>
      <CommentSheet
        open={open}
        onClose={() => setOpen(false)}
        stageId={stageId}
        sectionId={sectionId}
        label={label}
        title={title || label}
        accent={accent}
      />
    </>
  );
}
