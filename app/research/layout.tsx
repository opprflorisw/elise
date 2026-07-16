import type { Metadata } from "next";
import { ResearchNav } from "@/components/research/ResearchNav";

export const metadata: Metadata = {
  title: "Dossier — Studio Verstelle",
  description: "Intern onderzoeksdossier: van merk naar levensvatbaar bedrijf.",
  robots: { index: false, follow: false },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="research min-h-screen lg:flex">
      <ResearchNav />
      <div className="min-w-0 flex-1">
        <main className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-10 sm:pt-16">{children}</main>
        <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-10">
          <p className="r-small mx-auto max-w-4xl">
            Intern werkdocument · niet gedeeld, niet geïndexeerd · opgesteld juli 2026.
            Cijfers met een bron zijn gecontroleerd; alles met{" "}
            <span
              className="r-eyebrow rounded-sm px-1 py-0.5 !text-[0.5rem]"
              style={{ background: "rgba(28,25,23,0.07)" }}
            >
              schatting
            </span>{" "}
            is een redenering, geen feit.
          </p>
        </footer>
      </div>
    </div>
  );
}
