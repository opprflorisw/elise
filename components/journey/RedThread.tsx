"use client";

import { useEffect, useRef, useState } from "react";

/** A thin bordeaux line down the left margin that "draws" itself as you scroll. */
export function RedThread({ accent = "var(--color-bordeaux)" }: { accent?: string }) {
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
        raf.current = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-[18px] top-0 z-40 hidden h-screen w-[2px] sm:block"
      style={{ background: "var(--color-line)" }}
      aria-hidden
    >
      <div
        className="w-full origin-top"
        style={{ height: "100%", background: accent, transform: `scaleY(${progress})`, transition: "transform 80ms linear" }}
      />
      <div
        className="absolute -left-[3px] h-2 w-2 rounded-full"
        style={{ background: accent, top: `calc(${progress * 100}% - 4px)`, boxShadow: `0 0 0 4px color-mix(in srgb, ${accent} 20%, transparent)` }}
      />
    </div>
  );
}
