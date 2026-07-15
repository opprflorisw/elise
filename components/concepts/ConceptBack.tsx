"use client";

import Link from "next/link";

export function ConceptBack({ color = "#1c1917" }: { color?: string }) {
  return (
    <Link
      href="/website"
      className="fixed left-3 top-3 z-[55] inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] backdrop-blur-md"
      style={{ color, background: "rgba(239,234,227,0.5)", border: `1px solid ${color}33` }}
    >
      ← Terug
    </Link>
  );
}
