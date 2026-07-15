"use client";

import { useState } from "react";
import { useJourney, type StageId } from "@/lib/store";

export interface Choice {
  id: string;
  label: string;
  desc?: string;
}

interface Props {
  stageId: StageId;
  sectionId: string;
  label: string;
  choices: Choice[];
  multi?: boolean;
  allowOther?: boolean;
  accent?: string;
  columns?: 1 | 2;
}

export function ChoicePicker({
  stageId,
  sectionId,
  label,
  choices,
  multi = false,
  allowOther = false,
  accent = "var(--color-bordeaux)",
  columns = 2,
}: Props) {
  const { get, set, clearItem } = useJourney();
  const stored = get(stageId, sectionId)?.value;
  const selected: string[] = Array.isArray(stored) ? stored : stored ? [stored] : [];
  const otherStored = get(stageId, sectionId, "anders")?.value as string | undefined;
  const [other, setOther] = useState(otherStored || "");

  const commit = (next: string[]) => {
    if (next.length === 0) clearItem(stageId, sectionId);
    else
      set({
        stageId,
        sectionId,
        type: "choice",
        value: multi ? next : next[0],
        label,
      });
  };

  const toggle = (id: string) => {
    if (multi) {
      commit(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]);
    } else {
      commit(selected[0] === id ? [] : [id]);
    }
  };

  const saveOther = () => {
    const v = other.trim();
    if (v) set({ stageId, sectionId, itemId: "anders", type: "text", value: v, label: `${label} — anders` });
    else clearItem(stageId, sectionId, "anders");
  };

  return (
    <div>
      <div className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
        {choices.map((c) => {
          const on = selected.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              className="group relative overflow-hidden rounded-b-lg border p-5 text-left transition-all"
              style={{
                borderColor: on ? accent : "var(--color-line-strong)",
                background: on ? "var(--color-paper-deep)" : "transparent",
                borderTopLeftRadius: "1.6rem",
                borderTopRightRadius: "1.6rem",
                transform: on ? "translateY(-2px)" : undefined,
                boxShadow: on ? "0 8px 24px rgba(28,25,23,0.08)" : undefined,
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="lede text-[1.15rem] leading-snug">{c.label}</span>
                <span
                  className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-paper transition-all"
                  style={{
                    borderColor: on ? accent : "var(--color-line-strong)",
                    background: on ? accent : "transparent",
                  }}
                >
                  {on && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </span>
              </div>
              {c.desc && <p className="body mt-2 text-[0.92rem] text-ink-soft">{c.desc}</p>}
            </button>
          );
        })}
      </div>

      {allowOther && (
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-line px-4 py-2">
          <span className="eyebrow shrink-0 text-[0.6rem] text-ink-soft">Anders</span>
          <input
            value={other}
            onChange={(e) => setOther(e.target.value)}
            onBlur={saveOther}
            placeholder="in eigen woorden…"
            className="body w-full bg-transparent py-1 text-[0.95rem] outline-none"
          />
        </div>
      )}
    </div>
  );
}
