import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { NOTES, type NoteSlug } from "@/lib/notes";

// ---------------------------------------------------------------
// The coach layer. A chapter that only concludes is a report; a
// chapter that hands you homework is an instrument. Every page
// ends with: doe dit zelf → denk hierover → lees verder → kijk
// achter de conclusie.
// ---------------------------------------------------------------

export function Coach({
  doen,
  denken,
}: {
  /** Concrete homework. Each item: what to do + how long it takes. */
  doen: { taak: string; tijd: string }[];
  /** Questions written to Elise, in je/jij. Pointed, not rhetorical. */
  denken: string[];
}) {
  return (
    <Reveal>
      <section
        className="mt-16 rounded-sm border p-6 sm:mt-24 sm:p-8"
        style={{
          borderColor: "rgba(201,185,159,0.85)",
          background: "rgba(201,185,159,0.16)",
        }}
      >
        <p className="r-eyebrow" style={{ color: "#7a6a4c" }}>
          Aan de slag
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="r-display-m">Zelf doen</p>
            <ul className="mt-4 space-y-3.5">
              {doen.map((d) => (
                <li key={d.taak} className="flex gap-3">
                  <span
                    className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "#7a6a4c" }}
                    aria-hidden
                  />
                  <span>
                    <span className="r-body !text-[0.92rem] text-[var(--ink-2)]">{d.taak}</span>
                    <span className="r-eyebrow ml-2 whitespace-nowrap !text-[0.5rem] opacity-55">
                      {d.tijd}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="r-display-m">Om over na te denken</p>
            <ul className="mt-4 space-y-3.5">
              {denken.map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="r-numeral mt-[0.1rem] shrink-0 text-[0.8rem] opacity-40">?</span>
                  <span className="r-accent-serif text-[0.98rem] leading-[1.6] text-[var(--ink)]">
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export type Link = { titel: string; url: string; waarom: string };

/** Curated external reading. The URLs come from research-notes/ — already dated. */
export function VerderLezen({ items }: { items: Link[] }) {
  return (
    <Reveal>
      <section className="mt-14 border-t border-[var(--line-2)] pt-7">
        <p className="r-eyebrow opacity-50">Verder lezen</p>
        <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {items.map((l) => {
            let domein = l.url;
            try {
              domein = new URL(l.url).hostname.replace(/^www\./, "");
            } catch {
              /* laat de ruwe waarde staan */
            }
            return (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="r-body !text-[0.9rem] hover:opacity-70"
                  style={{ fontWeight: 520 }}
                >
                  {l.titel} <span className="opacity-40">↗</span>
                </a>
                <p className="r-small mt-1 !text-[0.74rem]">{l.waarom}</p>
                <p className="r-eyebrow mt-1 !text-[0.46rem] opacity-35">{domein}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </Reveal>
  );
}

/** The back of the chapter: which raw notes it was built on. */
export function Achtergrond({ notes }: { notes: NoteSlug[] }) {
  return (
    <Reveal>
      <section
        className="mt-8 rounded-sm border border-dashed p-5"
        style={{ borderColor: "var(--line-2)" }}
      >
        <p className="r-eyebrow !text-[0.5rem] opacity-50">Achter dit hoofdstuk</p>
        <p className="r-small mt-2.5 max-w-2xl">
          Dit hoofdstuk is een samenvatting. De ruwe onderzoeksnotities eronder — met alle bronnen,
          data en zekerheidslabels, inclusief wat er níét klopte — staan hier:
        </p>
        <ul className="mt-3.5 flex flex-wrap gap-2">
          {notes.map((s) => {
            const n = NOTES[s];
            return (
              <li key={s}>
                <Link
                  href={`/research/notities/${s}`}
                  className="r-eyebrow inline-block rounded-full border px-3.5 py-1.5 !text-[0.5rem] transition-colors hover:bg-[rgba(42,95,214,0.06)]"
                  style={{ borderColor: "var(--line-2)", color: "var(--series-1)" }}
                >
                  {n.titel} · {n.woorden}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Reveal>
  );
}
