"use client";

import { useEffect, useState } from "react";
import { useJourney, type StageId } from "@/lib/store";

interface Props {
  open: boolean;
  onClose: () => void;
  stageId: StageId;
  sectionId: string;
  itemId?: string;
  label: string;
  title: string;
  accent?: string;
}

/** Bottom-sheet free-text comment bound to a specific section/item. */
export function CommentSheet({
  open,
  onClose,
  stageId,
  sectionId,
  itemId,
  label,
  title,
  accent = "var(--color-bordeaux)",
}: Props) {
  const { get, set, clearItem } = useJourney();
  const existing = get(stageId, sectionId, itemId);
  const [text, setText] = useState<string>((existing?.value as string) || "");

  useEffect(() => {
    if (open) setText((get(stageId, sectionId, itemId)?.value as string) || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const save = () => {
    const v = text.trim();
    if (v) set({ stageId, sectionId, itemId, type: "comment", value: v, label });
    else clearItem(stageId, sectionId, itemId);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      style={{ background: "rgba(28,25,23,0.42)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-paper px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6 sm:rounded-2xl"
        style={{
          borderTop: `2px solid ${accent}`,
          animation: "reveal-up 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-1 eyebrow" style={{ color: accent }}>
          Jouw notitie
        </div>
        <h3 className="display-l mb-3 text-[1.4rem]">{title}</h3>
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Wat voel je hierbij? Wat trekt je aan, wat juist niet?"
          rows={4}
          className="body w-full resize-none rounded-lg border border-line bg-paper-deep/40 px-4 py-3 outline-none focus:border-ink/40"
        />
        <div className="mt-4 flex items-center justify-between gap-3">
          <button onClick={onClose} className="eyebrow text-ink-soft hover:text-ink">
            Annuleren
          </button>
          <button
            onClick={save}
            className="eyebrow rounded-full px-6 py-3 text-paper"
            style={{ background: accent }}
          >
            Bewaren
          </button>
        </div>
      </div>
    </div>
  );
}
