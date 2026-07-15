"use client";

import { useJourney, type StageId } from "@/lib/store";

export interface Palette {
  id: string;
  name: string;
  mood: string;
  colors: string[];
}

export function PaletteChooser({
  stageId,
  sectionId,
  label,
  palettes,
  accent = "var(--color-cobalt)",
}: {
  stageId: StageId;
  sectionId: string;
  label: string;
  palettes: Palette[];
  accent?: string;
}) {
  const { get, set, clearItem } = useJourney();
  const selected = get(stageId, sectionId)?.value as string | undefined;

  const pick = (id: string) => {
    if (selected === id) clearItem(stageId, sectionId);
    else set({ stageId, sectionId, type: "choice", value: id, label });
  };

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {palettes.map((p) => {
        const on = selected === p.id;
        return (
          <button
            key={p.id}
            onClick={() => pick(p.id)}
            className="overflow-hidden rounded-xl border text-left transition-all"
            style={{
              borderColor: on ? accent : "var(--color-line)",
              transform: on ? "translateY(-3px)" : undefined,
              boxShadow: on ? "0 10px 30px rgba(28,25,23,0.1)" : undefined,
            }}
          >
            <div className="flex h-24">
              {p.colors.map((c, i) => (
                <span key={i} className="flex-1" style={{ background: c }} />
              ))}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="display-l text-[1.2rem]">{p.name}</h4>
                {on && (
                  <span className="grid h-5 w-5 place-items-center rounded-full text-paper" style={{ background: accent }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                )}
              </div>
              <p className="body mt-1 text-[0.85rem] text-ink-soft">{p.mood}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
