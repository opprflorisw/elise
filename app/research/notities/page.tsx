import type { Metadata } from "next";
import Link from "next/link";
import { PageHead, Section, Prose, Thesis } from "@/components/research/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { NOTE_LIST } from "@/lib/notes";
import { PAGES } from "@/lib/research";

export const metadata: Metadata = { title: "De notities — Dossier" };

export default function Page() {
  return (
    <>
      <PageHead
        n="—"
        eyebrow="De achterkant"
        title="De ruwe notities"
        lede="Acht onderzoekssporen, ~79.000 woorden, elke bewering met een bron en een zekerheidslabel. Dit is het werk waar de twaalf hoofdstukken een samenvatting van zijn."
      />

      <Section title="Waarom dit hier staat">
        <Prose>
          <p>
            Een dossier dat alleen conclusies toont, vraagt om vertrouwen. Dat is precies wat je
            niet moet geven aan een document dat bepaalt of je je baan opzegt. Daarom staat het
            onderliggende werk hier gewoon: de tabellen, de bronnen, de tegenspraak, en de plekken
            waar het onderzoek zichzelf corrigeerde.
          </p>
          <p>
            Deze notities zijn geschreven door acht onderzoeksagenten die één opdracht hadden:{" "}
            <strong>probeer het plan onderuit te halen</strong>. Dat is gelukt — op meer punten dan
            prettig was. Wat je hier leest is dus geen onderbouwing van een idee, maar de
            worsteling ermee.
          </p>
        </Prose>
        <Thesis>
          Een conclusie die je niet kunt controleren, is een leus.
        </Thesis>
      </Section>

      <Section
        title="De acht sporen"
        intro="Per notitie: waar hij over gaat, welke hoofdstukken erop leunen, en de ene bevinding die het plan veranderde."
      >
        <div className="space-y-2.5">
          {NOTE_LIST.map((n, i) => (
            <Reveal key={n.slug} delay={i * 40}>
              <Link
                href={`/research/notities/${n.slug}`}
                className="r-card-solid group block p-5 transition-colors hover:bg-[rgba(42,95,214,0.02)] sm:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                  <span className="r-display-m transition-opacity group-hover:opacity-60">
                    {n.titel} <span className="opacity-30">→</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="r-eyebrow !text-[0.48rem] opacity-45">
                      hoofdstuk {n.voedt.join(" · ")}
                    </span>
                    <span className="r-numeral text-[0.8rem] opacity-45">{n.woorden} woorden</span>
                  </span>
                </div>

                <p className="r-small mt-2">{n.lede}</p>

                <p
                  className="r-accent-serif mt-4 border-l-2 pl-4 text-[0.95rem] leading-[1.55] text-[var(--ink)]"
                  style={{ borderColor: "var(--series-1)" }}
                >
                  {n.kern}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Hoe je ze moet lezen">
        <Prose>
          <p>
            Elke bewering draagt een label. <strong>Zeker: hoog</strong> betekent: primaire bron,
            gecontroleerd, datum erbij. <strong>Middel</strong> betekent: plausibel, maar de bron is
            secundair of de cijfers spreken elkaar ergens tegen. <strong>Laag</strong> betekent: dit
            is het beste wat we vonden en het is niet genoeg. <strong>Schatting</strong> betekent:
            geen bron, wel een redenering — en die redenering staat erbij.
          </p>
          <p>
            Die labels zijn geen decoratie. Het zwakste bewijs in dit hele dossier zit onder onze
            eigen kernclaim: dat mensen zich hun verbouwde huis niet kunnen voorstellen. Daar is
            geen enkel Nederlands klantcitaat voor gevonden, en het enige harde cijfer zegt dat 82%
            het géén obstakel vindt. Dat staat er gewoon, in{" "}
            <Link href="/research/notities/concurrentie" className="r-link">
              de concurrentienotitie
            </Link>
            , met waarschuwing en al.
          </p>
        </Prose>

        <div
          className="mt-7 rounded-sm border-l-2 p-5 sm:p-6"
          style={{ borderColor: "var(--warning)", background: "rgba(250,178,25,0.07)" }}
        >
          <p className="r-eyebrow" style={{ color: "#8a5f04" }}>
            Houdbaarheid
          </p>
          <div className="r-body mt-3 max-w-2xl space-y-3 !text-[0.94rem] text-[var(--ink-2)]">
            <p>
              Alles hier is een <strong>momentopname van 16 juli 2026</strong>. Dat is geen
              formaliteit: dit onderzoek zag in één ronde drie breed herhaalde &ldquo;bekende
              feiten&rdquo; sneuvelen — SignRequest is al vijf jaar geen Nederlandse partij meer,
              Yousign heet inmiddels Youtrust, en de veelgeciteerde Nederlandse
              e-facturatiedeadlines van 2027/2028 bestaan niet.
            </p>
            <p>
              Als drie zekerheden binnen één onderzoek omvallen, is de verwachting dat over zes
              maanden een deel van dít document ook onjuist is.{" "}
              <strong>Herverifieer elk cijfer voordat je er geld aan uitgeeft.</strong> Daarvoor
              staan die bron-URL&rsquo;s erbij.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Terug naar de conclusies">
        <div className="grid gap-2.5 sm:grid-cols-2">
          {PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/research/${p.slug}`}
              className="r-card flex items-baseline gap-3 p-3.5 transition-colors hover:bg-[rgba(42,95,214,0.03)]"
            >
              <span className="r-numeral shrink-0 text-[0.7rem] opacity-40">{p.n}</span>
              <span className="r-body !text-[0.88rem]">{p.title}</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
