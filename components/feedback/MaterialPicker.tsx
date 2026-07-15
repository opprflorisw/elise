"use client";

import Image from "next/image";
import { useJourney, type StageId } from "@/lib/store";

export interface Material {
  id: string;
  label: string;
  src: string;
}

/** The 250 m² exercise: pick exactly 3 materials. */
export function MaterialPicker({
  stageId,
  sectionId,
  label,
  materials,
  max = 3,
  accent = "var(--color-gold)",
}: {
  stageId: StageId;
  sectionId: string;
  label: string;
  materials: Material[];
  max?: number;
  accent?: string;
}) {
  const { get, set, clearItem } = useJourney();
  const stored = get(stageId, sectionId)?.value;
  const selected: string[] = Array.isArray(stored) ? stored : [];

  const toggle = (id: string) => {
    let next: string[];
    if (selected.includes(id)) next = selected.filter((s) => s !== id);
    else if (selected.length >= max) next = [...selected.slice(1), id];
    else next = [...selected, id];
    if (next.length) set({ stageId, sectionId, type: "choice", value: next, label });
    else clearItem(stageId, sectionId);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="eyebrow" style={{ color: accent }}>
          {selected.length} / {max} gekozen
        </span>
        <span className="rule flex-1" />
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {materials.map((m) => {
          const idx = selected.indexOf(m.id);
          const on = idx >= 0;
          return (
            <button key={m.id} onClick={() => toggle(m.id)} className="group text-left">
              <div
                className="relative aspect-square overflow-hidden rounded-lg"
                style={{ outline: on ? `3px solid ${accent}` : "none", outlineOffset: "-3px" }}
              >
                <Image
                  src={m.src}
                  alt={m.label}
                  fill
                  sizes="(max-width:640px) 30vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {on && (
                  <span
                    className="bloom absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-full text-[0.7rem] font-bold text-paper"
                    style={{ background: accent }}
                  >
                    {idx + 1}
                  </span>
                )}
              </div>
              <span className="body mt-1 block text-[0.72rem] leading-tight text-ink-soft">{m.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
