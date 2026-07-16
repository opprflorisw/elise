"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PAGES, GROUPS } from "@/lib/research";

// Dossier navigation: a persistent chapter index on desktop (this is a
// document, not an app), a collapsible sheet on mobile.
export function ResearchNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (slug: string) => pathname === `/research/${slug}`;
  const onIndex = pathname === "/research";

  const Index = ({ onNavigate }: { onNavigate?: () => void }) => (
    <nav className="space-y-6">
      <Link
        href="/research"
        onClick={onNavigate}
        className="block"
        aria-current={onIndex ? "page" : undefined}
      >
        <span
          className="r-eyebrow !text-[0.55rem]"
          style={{ color: onIndex ? "var(--series-1)" : "var(--ink-3)" }}
        >
          Samenvatting
        </span>
      </Link>
      {GROUPS.map((g) => (
        <div key={g}>
          <p className="r-eyebrow !text-[0.5rem] opacity-40">{g}</p>
          <ul className="mt-2.5 space-y-1.5">
            {PAGES.filter((p) => p.group === g).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/research/${p.slug}`}
                  onClick={onNavigate}
                  className="group flex items-baseline gap-2.5 transition-opacity hover:opacity-100"
                  style={{ opacity: active(p.slug) ? 1 : 0.62 }}
                  aria-current={active(p.slug) ? "page" : undefined}
                >
                  <span
                    className="r-numeral shrink-0 text-[0.62rem]"
                    style={{ color: active(p.slug) ? "var(--series-1)" : "var(--ink-3)" }}
                  >
                    {p.n}
                  </span>
                  <span
                    className="r-body !text-[0.86rem]"
                    style={{
                      fontWeight: active(p.slug) ? 560 : 400,
                      borderBottom: active(p.slug) ? "1px solid var(--series-1)" : "none",
                    }}
                  >
                    {p.short}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="border-t border-[var(--line)] pt-5">
        <Link href="/" onClick={onNavigate} className="r-small hover:opacity-70">
          ← De reis
        </Link>
        <br />
        <Link href="/site" onClick={onNavigate} className="r-small hover:opacity-70">
          ↗ De website
        </Link>
      </div>
    </nav>
  );

  return (
    <>
      {/* mobile bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--line)] px-5 py-3 lg:hidden"
        style={{ background: "rgba(242,237,228,0.94)", backdropFilter: "blur(10px)" }}
      >
        <Link href="/research" className="r-eyebrow !text-[0.58rem]">
          Dossier
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="r-eyebrow rounded-full border border-[var(--line-2)] px-3.5 py-1.5 !text-[0.55rem]"
          aria-expanded={open}
        >
          {open ? "Sluiten" : "Inhoud"}
        </button>
      </div>
      {open && (
        <div
          className="sticky top-[49px] z-30 border-b border-[var(--line)] px-5 py-6 lg:hidden"
          style={{ background: "rgba(242,237,228,0.98)", backdropFilter: "blur(10px)" }}
        >
          <Index onNavigate={() => setOpen(false)} />
        </div>
      )}

      {/* desktop chapter index */}
      <aside className="hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:w-56 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-[var(--line)] lg:py-10 lg:pl-8 lg:pr-5">
        <Link href="/research" className="mb-8 block">
          <p className="r-display-m leading-tight">Dossier</p>
          <p className="r-small mt-0.5">Studio Verstelle</p>
        </Link>
        <Index />
      </aside>
    </>
  );
}
