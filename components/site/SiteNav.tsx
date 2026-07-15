"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { SiteWordmark } from "./SiteWordmark";

// Transparent over the dark home hero; solid warm-white bar once scrolled
// or on the light inner pages.
export function SiteNav() {
  const pathname = usePathname();
  const onHome = pathname === "/site";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = onHome && !scrolled;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        color: dark ? "var(--warmwhite)" : "var(--color-ink)",
        background: dark ? "transparent" : "rgba(242, 237, 228, 0.92)",
        backdropFilter: dark ? "none" : "blur(10px)",
        borderBottom: dark ? "1px solid transparent" : "1px solid rgba(28,25,23,0.1)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10">
        <Link href="/site" className="transition-opacity hover:opacity-70">
          <SiteWordmark size="sm" />
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`s-link s-eyebrow hidden !tracking-[0.22em] sm:inline-block ${
                pathname.startsWith(n.href) ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
              style={
                pathname.startsWith(n.href)
                  ? { textDecoration: "underline", textUnderlineOffset: "6px", textDecorationThickness: "1px" }
                  : undefined
              }
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/site/portaal"
            className="s-eyebrow rounded-full border px-4 py-2 !tracking-[0.18em] transition-all hover:opacity-80"
            style={{ borderColor: "currentcolor" }}
          >
            Klantportaal
          </Link>
        </nav>
      </div>
    </header>
  );
}
