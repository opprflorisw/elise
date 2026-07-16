import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Stat, StatRow, Thesis, Table, Conf } from "@/components/research/Blocks";
import { PAGES, GROUPS } from "@/lib/research";

export const metadata: Metadata = { title: "Dossier — Studio Verstelle" };

const VERDICTS = [
  {
    k: "Is er markt?",
    a: "Ja — maar niet waar we keken",
    d: "12.800 transacties per jaar in de band €500k–€2M. Maar de pool die daadwerkelijk een ontwerper inhuurt is ~256 huishoudens. Tegen die pool is ons plan 18,4% marktaandeel. Het probleem is geen volume — het is toegang.",
    c: "var(--serious)",
    to: "markt",
  },
  {
    k: "Is er een gat?",
    a: "Ja, en het is gênant simpel",
    d: "0 van de 25 premium studio's publiceert een prijs, een pakket of een stappenplan. Boven €10k valt overal een gordijn. Niemand combineert uitgesproken smaak met vooraf zichtbaar zijn.",
    c: "#12704e",
    to: "concurrentie",
  },
  {
    k: "Kunnen we gekopieerd worden?",
    a: "Het gereedschap wel. De rest kost jaren.",
    d: "Alleen aansprakelijkheid, het aannemersnetwerk en het portfolio zijn echte grachten. De sessie-dataset, de AI-snelheid en de portal-drempel zijn illusies. En: Elise mag zich vandaag geen interieurarchitect noemen.",
    c: "var(--critical)",
    to: "onderscheid",
  },
  {
    k: "Klopt €250k?",
    a: "Niet zoals we het rekenden",
    d: "De eerste mix vroeg 1.895 uur waar er 1.242 zijn — een werkweek van 69 uur. €250k solo is geen omzetdoel maar een uurtarief: €201. Elke mix moet daar landen.",
    c: "var(--critical)",
    to: "prijsmodel",
  },
  {
    k: "Is AI ons verhaal?",
    a: "Nee. En ermee leiden schaadt ons.",
    d: "86% van de consumenten gebruikt AI al; 82% van het vak ook. Ermee leiden zet een dienst van €10.000 pal naast een gratis app. De AI hoort in de werkplaats, niet op de gevel.",
    c: "var(--critical)",
    to: "positionering",
  },
  {
    k: "Wat kost de techniek?",
    a: "€8,66 per sessie",
    d: "Brutomarge 99,6%. De vaste techniek is €62 per maand. Wie dit een AI-bedrijf noemt, kijkt naar 0,4% van de kostprijs. De fotograaf is duurder dan de AI.",
    c: "#12704e",
    to: "kosten",
  },
];

export default function ResearchIndex() {
  return (
    <>
      {/* ---- HEAD ---- */}
      <header className="border-b border-[var(--line-2)] pb-12">
        <Reveal>
          <p className="r-eyebrow" style={{ color: "var(--series-1)" }}>
            Intern dossier · juli 2026
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="r-display-xl mt-4 max-w-3xl">Van merk naar bedrijf</h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="r-lede mt-6 max-w-2xl">
            Twaalf onderzoeksporen, ruim tweehonderd bronnen, en één ongemakkelijke uitkomst: het
            bedrijf kan bestaan, maar bijna niets van wat we dachten dat het bijzonder maakte, hield
            stand.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="r-small mt-5 max-w-2xl">
            Leestijd van deze pagina: tien minuten. Alles eronder is uitwerking. Elk hoofdstuk eindigt
            met &ldquo;Wat hiertegen pleit&rdquo; en met beslispunten die aan Elise en Floris zijn — niet
            aan het onderzoek.
          </p>
        </Reveal>
      </header>

      {/* ---- THE THESIS ---- */}
      <section className="mt-16">
        <Reveal>
          <h2 className="r-display-l">Het plan op één pagina</h2>
        </Reveal>
        <Thesis>
          Studio-smaak van het hoogste niveau — maar je ziet je eigen huis in week één, en je weet
          wat het kost. Geen woord daarin gaat over techniek, en toch is elk deel ervan alleen waar
          te maken mét die techniek.
        </Thesis>

        <Reveal>
          <div className="mt-8">
            <StatRow>
              <Stat value="€201" label="Benodigd effectief uurtarief" sub="€250.000 ÷ 1.242 declarabele uren. De harde grens onder alles." accent="var(--critical)" conf="hoog" />
              <Stat value="256" label="Huishoudens/jaar die een ontwerper inhuren" sub="In A'dam, Den Haag en Rotterdam samen. Elise kent er vandaag 0%." accent="var(--critical)" conf="laag" />
              <Stat value="0 van 25" label="Concurrenten met een prijs op de site" sub="Onze goedkoopste differentiatie" accent="#12704e" conf="hoog" />
              <Stat value="€8,66" label="AI-kosten per Verkenning" sub="99,6% brutomarge. Niet de kostenpost." accent="#12704e" conf="hoog" />
            </StatRow>
          </div>
        </Reveal>
      </section>

      {/* ---- VERDICTS ---- */}
      <section className="mt-20">
        <Reveal>
          <h2 className="r-display-l border-t border-[var(--line-2)] pt-5">De zes oordelen</h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {VERDICTS.map((v, i) => (
            <Reveal key={v.k} delay={i * 60}>
              <Link
                href={`/research/${v.to}`}
                className="r-card-solid group block border-l-2 p-5 transition-colors hover:bg-[rgba(42,95,214,0.02)]"
                style={{ borderLeftColor: v.c }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="r-body opacity-60">{v.k}</p>
                  <span className="r-small opacity-0 transition-opacity group-hover:opacity-50">
                    lees verder →
                  </span>
                </div>
                <p className="r-display-m mt-1.5" style={{ color: v.c }}>
                  {v.a}
                </p>
                <p className="r-body mt-2.5 max-w-2xl text-[var(--ink-2)]">{v.d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- WHAT BROKE ---- */}
      <section className="mt-20">
        <Reveal>
          <h2 className="r-display-l border-t border-[var(--line-2)] pt-5">
            Wat het onderzoek sloopte
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="r-body mt-4 max-w-2xl text-[var(--ink-2)]">
            Dit is de nuttigste lijst in het dossier. Elk van deze ideeën stond in ons eigen plan en
            geen ervan overleefde contact met bewijs.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-7">
            <Table
              head={["Wat we dachten", "Wat blijkt", "Hoofdstuk"]}
              rows={[
                [
                  "De AI-methode is ons onderscheid",
                  "Het is hygiëne. 86% van de consumenten gebruikt AI al. Ermee leiden zet €10.000 naast een gratis app.",
                  <Link key="1" href="/research/positionering" className="r-link">04</Link>,
                ],
                [
                  "De sessie-dataset wordt een voorsprong",
                  "N is te klein, en het databankenrecht beschermt zelf-gecreëerde data niet. Illusie.",
                  <Link key="2" href="/research/onderscheid" className="r-link">03</Link>,
                ],
                [
                  "De AI-backoffice geeft ons marge",
                  "Upwork: +90% volume, −13% verdiensten per contract. Sneller werken wordt doorgegeven aan de klant.",
                  <Link key="3" href="/research/onderscheid" className="r-link">03</Link>,
                ],
                [
                  "Brand de methode als product",
                  "Geen enkel bewijs dat dat pricing power geeft. Een garantie aantoonbaar wel.",
                  <Link key="4" href="/research/onderscheid" className="r-link">03</Link>,
                ],
                [
                  "20 Verkenningen + 8 Ontwerpen + 4 Transformaties = €250k",
                  "Vraagt 1.895 uur waar er 1.242 zijn. Mist met een factor 1,5.",
                  <Link key="5" href="/research/prijsmodel" className="r-link">05</Link>,
                ],
                [
                  "Het Ontwerp kost €12k",
                  "Dat is €126/uur — medior-tarief voor premium werk. Moet naar €17–19k, anders bestaat er geen haalbare mix.",
                  <Link key="6" href="/research/prijsmodel" className="r-link">05</Link>,
                ],
                [
                  "Onze klant heeft een verbouwbudget vanaf €75k",
                  "Dan is De Transformatie onbereikbaar: 12,5% van €75k is €9.375. De Transformatie-klant heeft €320k nodig.",
                  <Link key="7" href="/research/prijsmodel" className="r-link">05</Link>,
                ],
                [
                  "Hypotheekadviseurs zijn een partnerkanaal",
                  "AFM-provisieverbod, en Elise kan er zelf vergunningplichtig van worden.",
                  <Link key="8" href="/research/marketing" className="r-link">07</Link>,
                ],
                [
                  "Instagram bouwt de pijplijn",
                  "Instagram is bewijs, geen acquisitie. Klanten komen via mensen; Instagram is waar ze verifiëren.",
                  <Link key="9" href="/research/marketing" className="r-link">07</Link>,
                ],
                [
                  "We baseren de voorwaarden op DNR 2011",
                  "DNR2025 sinds december 2025. En die is voor zakelijke opdrachtgevers — Elise's klant is consument.",
                  <Link key="10" href="/research/setup" className="r-link">10</Link>,
                ],
                [
                  "'Interior architecture' op de website",
                  "Beschermde titel, ook in het Engels, ook in samenstellingen. Gewijzigd.",
                  <Link key="11" href="/research/onderscheid" className="r-link">03</Link>,
                ],
              ]}
            />
          </div>
        </Reveal>
      </section>

      {/* ---- THE UNPROVEN ---- */}
      <section className="mt-20">
        <Reveal>
          <div
            className="rounded-sm border-l-2 p-6 sm:p-8"
            style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
          >
            <p className="r-eyebrow" style={{ color: "var(--critical)" }}>
              Als u één ding onthoudt
            </p>
            <p className="r-display-l mt-3">Ons kernbewijs is ons zwakste bewijs</p>
            <div className="r-body mt-4 max-w-2xl space-y-3.5 text-[var(--ink-2)]">
              <p>
                Het hele plan rust op de aanname dat mensen zich hun eigen huis niet kunnen
                voorstellen, en dat ze daaronder lijden. Daar is in Nederland{" "}
                <strong>geen enkel klantcitaat voor gevonden</strong>. Het enige harde cijfer is
                Houzz 2023: 18% noemt visualisatie een obstakel — wat betekent dat{" "}
                <strong>82% dat niet doet</strong>.
              </p>
              <p>
                Het sterkste klachtbewijs dat wél gevonden werd, gaat over iets anders:{" "}
                <em>&ldquo;Ik heb een architect betaald maar een tekenaar gekregen.&rdquo;</em> Dat gaat
                over uitvoering, niet over verbeelding.
              </p>
              <p style={{ color: "var(--ink)", fontWeight: 500 }}>
                Vijf tot acht klantinterviews — met mensen die het afgelopen jaar €100k+ in hun huis
                staken, niet met vrienden — vóórdat de propositie vastligt.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---- TEN ACTIONS ---- */}
      <section className="mt-20">
        <Reveal>
          <h2 className="r-display-l border-t border-[var(--line-2)] pt-5">Deze maand</h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="r-body mt-4 max-w-2xl text-[var(--ink-2)]">
            Merk op wat er niet in staat: iets bouwen. Dat is opzettelijk.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-7 space-y-2">
            {[
              { a: "studioverstelle.nl + .com registreren — beide zijn vrij", k: "€25", u: true },
              { a: "Fotografie-, publicatie- en opnamerecht in het standaardcontract", k: "1 uur", u: true },
              { a: "Arbeidscontract lezen: nevenwerkzaamheden en IE-beding", k: "1 uur", u: true },
              { a: "Titelvraag uitzoeken bij het Architectenregister", k: "30 min", u: false },
              { a: "Vijf makelaarsgesprekken — toetst de twee zwaarste risico's tegelijk", k: "€0", u: false },
              { a: "Vijf tot acht klantinterviews over de visualisatiepijn", k: "€0", u: false },
              { a: "FLUX Depth testen op één echte kamer", k: "1 avond", u: false },
              { a: "Gesprek over eigendom van de tooling", k: "€0", u: false },
              { a: "Google Bedrijfsprofiel claimen — de local pack is leeg", k: "1 uur", u: false },
              { a: "Arbeidsrechtjurist over de vaststellingsovereenkomst", k: "€200–350", u: false },
            ].map((x, i) => (
              <div key={x.a} className="r-card-solid flex items-baseline gap-4 p-4">
                <span className="r-numeral shrink-0 text-[0.8rem] opacity-35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="r-body flex-1" style={{ fontWeight: x.u ? 600 : 400 }}>
                  {x.a}
                </span>
                <span className="r-small shrink-0 opacity-60">{x.k}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---- CHAPTER INDEX ---- */}
      <section className="mt-20">
        <Reveal>
          <h2 className="r-display-l border-t border-[var(--line-2)] pt-5">De twaalf hoofdstukken</h2>
        </Reveal>
        <div className="mt-8 space-y-8">
          {GROUPS.map((g) => (
            <div key={g}>
              <p className="r-eyebrow !text-[0.5rem] opacity-40">{g}</p>
              <div className="mt-3 space-y-1.5">
                {PAGES.filter((p) => p.group === g).map((p) => (
                  <Reveal key={p.slug}>
                    <Link
                      href={`/research/${p.slug}`}
                      className="group flex items-baseline gap-4 border-b border-[var(--line)] py-3 transition-colors hover:bg-[rgba(42,95,214,0.02)]"
                    >
                      <span className="r-numeral shrink-0 text-[0.85rem] opacity-35">{p.n}</span>
                      <span className="min-w-0 flex-1">
                        <span className="r-body" style={{ fontWeight: 560 }}>
                          {p.title}
                        </span>
                        <span className="r-small ml-3 opacity-70">{p.lede}</span>
                      </span>
                      <span className="r-small shrink-0 opacity-0 transition-opacity group-hover:opacity-50">
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- METHOD NOTE ---- */}
      <section className="mt-20">
        <Reveal>
          <div className="border-t border-[var(--line-2)] pt-8">
            <h2 className="r-display-m">Hoe dit dossier tot stand kwam</h2>
            <p className="r-body mt-4 max-w-2xl text-[var(--ink-2)]">
              Acht parallelle onderzoekssporen, elk met opdracht om het plan te <em>weerleggen</em> in
              plaats van te bevestigen. Alle cijfers hebben een bron met datum en een
              zekerheidslabel (<Conf level="hoog" /> <Conf level="middel" /> <Conf level="laag" />);
              alles wat geredeneerd is in plaats van gevonden, draagt het label{" "}
              <span
                className="r-eyebrow rounded-sm px-1 py-0.5 !text-[0.5rem]"
                style={{ background: "rgba(28,25,23,0.07)", color: "var(--ink-3)" }}
              >
                schatting
              </span>
              . De volledige onderzoeksnotities staan in <code className="text-[0.85em]">research-notes/</code> —
              ongeveer 60.000 woorden.
            </p>
            <p className="r-small mt-4 max-w-2xl">
              Wat dit dossier <strong>niet</strong> is: een pitch. Er is geen scenario doorgerekend
              waarin alles meezit, en de tegenwerpingen zijn niet weggeschreven. Waar het onderzoek
              ons ongelijk gaf, staat dat er — meestal in de tabel &ldquo;wat het onderzoek
              sloopte&rdquo;.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
