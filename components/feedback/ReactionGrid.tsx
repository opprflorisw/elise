"use client";

import Image from "next/image";
import { useState } from "react";
import { useJourney, type StageId } from "@/lib/store";
import { CommentSheet } from "./CommentSheet";

export interface GridItem {
  id: string;
  src: string;
  caption?: string;
  cluster?: string;
}

interface Props {
  stageId: StageId;
  sectionId: string;
  label: string;
  items: GridItem[];
  accent?: string;
  aspect?: string; // css aspect-ratio
}

/** Tap = cycle none → love → no. Long-press / comment button opens a note. */
export function ReactionGrid({
  stageId,
  sectionId,
  label,
  items,
  accent = "var(--color-cobalt)",
  aspect = "4 / 5",
}: Props) {
  const { get, set, clearItem } = useJourney();
  const [sheet, setSheet] = useState<GridItem | null>(null);

  const cycle = (item: GridItem) => {
    const cur = get(stageId, sectionId, item.id)?.value as string | undefined;
    const next = cur === "love" ? "no" : cur === "no" ? "" : "love";
    if (next) set({ stageId, sectionId, itemId: item.id, type: "reaction", value: next, label: `${label}: ${item.caption || item.id}` });
    else clearItem(stageId, sectionId, item.id);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => {
          const r = get(stageId, sectionId, item.id)?.value as string | undefined;
          const note = get(stageId, sectionId, `${item.id}-note`);
          return (
            <figure key={item.id} className="group relative">
              <button
                onClick={() => cycle(item)}
                className="relative block w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: aspect, outline: r === "love" ? `3px solid ${accent}` : r === "no" ? "3px solid var(--color-line-strong)" : "none", outlineOffset: "-3px" }}
              >
                <Image
                  src={item.src}
                  alt={item.caption || item.id}
                  fill
                  sizes="(max-width:640px) 45vw, (max-width:1024px) 30vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ filter: r === "no" ? "grayscale(0.85) opacity(0.55)" : undefined }}
                />
                {r && (
                  <span
                    className="bloom absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full text-[1rem] shadow-md"
                    style={{ background: r === "love" ? accent : "var(--color-ink)", color: "var(--color-paper)" }}
                  >
                    {r === "love" ? "♥" : "✕"}
                  </span>
                )}
              </button>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                {item.caption ? (
                  <figcaption className="body text-[0.72rem] leading-tight text-ink-soft">{item.caption}</figcaption>
                ) : (
                  <span />
                )}
                <button
                  onClick={() => setSheet(item)}
                  aria-label="Notitie bij dit beeld"
                  className="shrink-0 text-[0.85rem]"
                  style={{ color: note ? accent : "var(--color-line-strong)" }}
                >
                  {note ? "✎" : "+"}
                </button>
              </div>
            </figure>
          );
        })}
      </div>
      {sheet && (
        <CommentSheet
          open={!!sheet}
          onClose={() => setSheet(null)}
          stageId={stageId}
          sectionId={sectionId}
          itemId={`${sheet.id}-note`}
          label={`${label} — notitie bij ${sheet.caption || sheet.id}`}
          title={sheet.caption || "Notitie bij dit beeld"}
          accent={accent}
        />
      )}
    </>
  );
}
