import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/research/Markdown";
import { Reveal } from "@/components/ui/Reveal";
import { NOTES, NOTE_LIST, type NoteSlug } from "@/lib/notes";
import { PAGES } from "@/lib/research";

export function generateStaticParams() {
  return NOTE_LIST.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = NOTES[slug as NoteSlug];
  if (!note) return {};
  return { title: `${note.titel} — Notities` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = NOTES[slug as NoteSlug];
  if (!note) notFound();

  // The notes ship with the deploy — they live in the repo, so this is a
  // build-time read, not a runtime one.
  const bron = readFileSync(join(process.cwd(), "research-notes", note.bestand), "utf8");

  const i = NOTE_LIST.findIndex((n) => n.slug === note.slug);
  const vorige = NOTE_LIST[i - 1];
  const volgende = NOTE_LIST[i + 1];
  const hoofdstukken = PAGES.filter((p) => note.voedt.includes(p.n));

  return (
    <>
      <header className="border-b border-[var(--line-2)] pb-9">
        <Reveal>
          <Link href="/research/notities" className="r-eyebrow hover:opacity-70" style={{ color: "var(--series-1)" }}>
            ← Alle notities
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="r-display-xl mt-4 max-w-4xl">{note.titel}</h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="r-lede mt-5 max-w-2xl">{note.lede}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5">
            <span className="r-small !text-[0.72rem]">
              <span className="opacity-45">Onderzocht</span> 16 juli 2026
            </span>
            <span className="r-small !text-[0.72rem]">
              <span className="opacity-45">Omvang</span> {note.woorden} woorden
            </span>
            {hoofdstukken.length > 0 && (
              <span className="flex flex-wrap items-center gap-2">
                <span className="r-small !text-[0.72rem] opacity-45">Voedt</span>
                {hoofdstukken.map((h) => (
                  <Link
                    key={h.slug}
                    href={`/research/${h.slug}`}
                    className="r-eyebrow rounded-full border px-3 py-1 !text-[0.46rem] transition-colors hover:bg-[rgba(42,95,214,0.06)]"
                    style={{ borderColor: "var(--line-2)", color: "var(--series-1)" }}
                  >
                    {h.n} {h.short}
                  </Link>
                ))}
              </span>
            )}
          </div>
        </Reveal>
      </header>

      <div
        className="mt-8 rounded-sm border-l-2 p-5"
        style={{ borderColor: "var(--warning)", background: "rgba(250,178,25,0.07)" }}
      >
        <p className="r-small">
          <strong>Ruwe onderzoeksnotitie.</strong> Momentopname van 16 juli 2026, met bronnen en
          zekerheidslabels — geen eindoordeel. Prijzen en feiten verouderen snel; herverifieer
          voordat je er geld aan uitgeeft.{" "}
          <Link href="/research/notities" className="r-link">
            Lees eerst de leeswijzer
          </Link>
          .
        </p>
      </div>

      <article className="mt-10">
        <Markdown>{bron}</Markdown>
      </article>

      <nav className="mt-16 grid gap-2.5 border-t border-[var(--line-2)] pt-7 sm:mt-24 sm:grid-cols-2">
        {vorige ? (
          <Link href={`/research/notities/${vorige.slug}`} className="group">
            <p className="r-eyebrow opacity-50">Vorige notitie</p>
            <p className="r-display-m mt-1.5 transition-opacity group-hover:opacity-60">
              ← {vorige.titel}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {volgende && (
          <Link href={`/research/notities/${volgende.slug}`} className="group sm:text-right">
            <p className="r-eyebrow opacity-50">Volgende notitie</p>
            <p className="r-display-m mt-1.5 transition-opacity group-hover:opacity-60">
              {volgende.titel} →
            </p>
          </Link>
        )}
      </nav>
    </>
  );
}
