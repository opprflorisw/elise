"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STAGES } from "@/lib/stages";
import { useJourney } from "@/lib/store";
import { Wordmark } from "@/components/ui/Wordmark";

export function JourneyNav() {
  const pathname = usePathname();
  const { state } = useJourney();

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <Link href="/" className="transition-opacity hover:opacity-70">
          <Wordmark size="sm" />
        </Link>
        <nav className="flex items-center gap-1.5 sm:gap-2.5">
          <Link
            href="/research"
            className="rounded-full border px-3 py-1.5 font-sans text-[0.62rem] uppercase tracking-[0.16em] transition-all hover:opacity-75 sm:px-3.5"
            style={{ borderColor: "var(--color-cobalt)", color: "var(--color-cobalt)" }}
            title="Het onderzoeksdossier — van merk naar bedrijf"
          >
            Dossier<span className="hidden sm:inline"> ↗</span>
          </Link>
          <Link
            href="/site"
            className="mr-1 rounded-full border px-3 py-1.5 font-sans text-[0.62rem] uppercase tracking-[0.16em] transition-all hover:opacity-75 sm:mr-2 sm:px-3.5"
            style={{ borderColor: "var(--color-bordeaux)", color: "var(--color-bordeaux)" }}
            title="Bekijk de echte website — gebouwd op basis van jouw feedback"
          >
            De website<span className="hidden sm:inline"> ↗</span>
          </Link>
          {STAGES.map((s) => {
            const active = pathname === s.path || (s.path !== "/" && pathname.startsWith(s.path));
            const visited = state.visited.includes(s.id);
            return (
              <Link
                key={s.id}
                href={s.path}
                title={s.title}
                className="group relative grid place-items-center"
                aria-current={active ? "step" : undefined}
              >
                <span
                  className="grid h-6 w-6 place-items-center rounded-full border font-sans text-[0.6rem] transition-all sm:h-7 sm:w-7"
                  style={{
                    borderColor: active ? s.accent : visited ? "var(--color-line-strong)" : "var(--color-line)",
                    background: active ? s.accent : "transparent",
                    color: active ? "var(--color-paper)" : visited ? "var(--color-ink)" : "var(--color-ink-soft)",
                  }}
                >
                  {s.numeral}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mx-4 rule sm:mx-8" style={{ opacity: 0.6 }} />
    </header>
  );
}
