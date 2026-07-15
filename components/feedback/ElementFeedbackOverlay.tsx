"use client";

import { useState } from "react";
import { useJourney } from "@/lib/store";
import { CommentSheet } from "./CommentSheet";

const ELEMENTS = [
  { id: "typografie", label: "Typografie" },
  { id: "beeld", label: "Beeld" },
  { id: "kleur", label: "Kleur" },
  { id: "layout", label: "Layout" },
  { id: "gevoel", label: "Gevoel" },
];

/** Floating panel for reacting to one Stage-5 concept, element by element. */
export function ElementFeedbackOverlay({
  concept,
  conceptName,
  accent,
  onPaper = "var(--color-paper)",
}: {
  concept: "a" | "b" | "c";
  conceptName: string;
  accent: string;
  onPaper?: string;
}) {
  const { get, set, clearItem } = useJourney();
  const sectionId = concept;
  const [open, setOpen] = useState(true);
  const [note, setNote] = useState<{ id: string; label: string } | null>(null);

  const react = (elId: string, elLabel: string, val: "love" | "no") => {
    const cur = get("website", sectionId, elId)?.value;
    if (cur === val) clearItem("website", sectionId, elId);
    else set({ stageId: "website", sectionId, itemId: elId, type: "reaction", value: val, label: `Website ${conceptName} — ${elLabel}` });
  };

  const overallNote = get("website", sectionId, "overall");

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-3xl px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md"
          style={{ background: "rgba(239,234,227,0.92)", borderColor: accent, pointerEvents: "auto" }}
        >
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-center justify-between px-5 py-3"
          >
            <span className="eyebrow" style={{ color: accent }}>
              {conceptName} — jouw reactie
            </span>
            <span className="text-ink-soft">{open ? "▾" : "▴"}</span>
          </button>
          {open && (
            <div className="px-4 pb-4">
              <div className="grid gap-2 sm:grid-cols-5">
                {ELEMENTS.map((el) => {
                  const val = get("website", sectionId, el.id)?.value as string | undefined;
                  return (
                    <div key={el.id} className="rounded-lg border border-line bg-paper/60 p-2 text-center">
                      <div className="body mb-1.5 text-[0.72rem] font-medium">{el.label}</div>
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => react(el.id, el.label, "love")}
                          className="grid h-7 w-7 place-items-center rounded-full border text-[0.8rem] transition-all"
                          style={{ borderColor: val === "love" ? accent : "var(--color-line)", background: val === "love" ? accent : "transparent", color: val === "love" ? "var(--color-paper)" : "var(--color-ink-soft)" }}
                        >
                          ♥
                        </button>
                        <button
                          onClick={() => react(el.id, el.label, "no")}
                          className="grid h-7 w-7 place-items-center rounded-full border text-[0.75rem] transition-all"
                          style={{ borderColor: val === "no" ? "var(--color-ink)" : "var(--color-line)", background: val === "no" ? "var(--color-ink)" : "transparent", color: val === "no" ? "var(--color-paper)" : "var(--color-ink-soft)" }}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => setNote({ id: "overall", label: `Website ${conceptName} — algemeen` })}
                className="mt-2 w-full rounded-lg py-2 text-center eyebrow text-[0.6rem]"
                style={{ background: accent, color: "var(--color-paper)" }}
              >
                {overallNote ? "Algemene notitie ✎" : "Algemene notitie +"}
              </button>
            </div>
          )}
        </div>
      </div>
      {note && (
        <CommentSheet
          open={!!note}
          onClose={() => setNote(null)}
          stageId="website"
          sectionId={sectionId}
          itemId={note.id}
          label={note.label}
          title={`${conceptName} — algemene indruk`}
          accent={accent}
        />
      )}
    </>
  );
}
