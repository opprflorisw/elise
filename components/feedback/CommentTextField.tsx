"use client";

import { useState } from "react";
import { useJourney, type StageId } from "@/lib/store";

/** Inline multiline free-text field bound to a section (saves on blur). */
export function CommentTextField({
  stageId,
  sectionId,
  label,
  placeholder,
  accent = "var(--color-bordeaux)",
  rows = 3,
}: {
  stageId: StageId;
  sectionId: string;
  label: string;
  placeholder?: string;
  accent?: string;
  rows?: number;
}) {
  const { get, set, clearItem } = useJourney();
  const [text, setText] = useState<string>((get(stageId, sectionId)?.value as string) || "");

  const save = () => {
    const v = text.trim();
    if (v) set({ stageId, sectionId, type: "text", value: v, label });
    else clearItem(stageId, sectionId);
  };

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={save}
      rows={rows}
      placeholder={placeholder}
      className="body w-full resize-none rounded-lg border bg-paper-deep/30 px-4 py-3 outline-none transition-colors"
      style={{ borderColor: text ? accent : "var(--color-line)" }}
    />
  );
}
