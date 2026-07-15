"use client";

import { useEffect, useRef, useState } from "react";

/** Fades + lifts children into view on scroll (once). Respects reduced-motion via CSS. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      className={className}
      style={{
        opacity: shown ? undefined : 0,
        animation: shown ? `reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards` : "none",
      }}
    >
      {children}
    </Comp>
  );
}
