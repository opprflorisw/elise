import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { SiteWordmark } from "./SiteWordmark";

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--night)", color: "var(--warmwhite)" }}>
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-10 sm:pt-24">
        <SiteWordmark size="xl" className="opacity-95" />
        <p className="s-accent-serif mt-6 text-[1.15rem]" style={{ color: "var(--travertine)" }}>
          {SITE.signature}
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="s-eyebrow opacity-50">Studio</p>
            <p className="s-body mt-3 opacity-80">
              {SITE.tagline}
              <br />
              Amsterdam
            </p>
          </div>
          <div>
            <p className="s-eyebrow opacity-50">Navigatie</p>
            <ul className="mt-3 space-y-2">
              {NAV.concat([{ href: "/site/portaal", label: "Klantportaal" }]).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="s-link s-body opacity-80 hover:opacity-100">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="s-eyebrow opacity-50">Contact</p>
            <p className="s-body mt-3 opacity-80">
              studio@verstelle.nl
              <br />
              Op afspraak
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="s-eyebrow !tracking-[0.2em] opacity-40">
            © {new Date().getFullYear()} Studio Verstelle
          </p>
          <Link href="/" className="s-link s-eyebrow !tracking-[0.2em] opacity-40 hover:opacity-80">
            ← Terug naar de reis
          </Link>
        </div>
      </div>
    </footer>
  );
}
