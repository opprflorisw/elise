import type { Metadata } from "next";
import {
  PageHead,
  Section,
  Prose,
  CounterCase,
  Decisions,
  Decision,
  Thesis,
  Table,
  Sources,
  Stat,
  StatRow,
  Est,
} from "@/components/research/Blocks";
import { pageBySlug } from "@/lib/research";
import Link from "next/link";
import { ChapterCoach } from "@/components/research/ChapterCoach";

export const metadata: Metadata = { title: "Roadmap & beslismomenten — Dossier" };
const P = pageBySlug("roadmap");

const GATE = [
  "8 Verkenningen verkocht zonder refund, waarvan ≥5 buiten het eigen netwerk",
  "2 vervolgtrajecten van ≥€8k afgerond, waarvan 1 met een bruikbare referentie",
  "1 leadbron die 3 maanden achtereen ≥2 leads/maand levert zonder erom te vragen",
  "Pijplijn van 3× de maandlasten, over 2 kwartalen gemeten",
  "6 maanden vaste lasten getekend en op papier",
  "6 maanden cashbuffer, onderbouwd met een liquiditeitsbegroting",
  "Gerealiseerd tarief ≥ €90/uur (niet gefactureerd — gerealiseerd)",
  "Vertrek via vaststellingsovereenkomst geregeld, niet via opzegging",
  "Hypotheek vooraf getoetst op inkomen zonder loondienst",
  "AOV afgesloten en pensioenregeling getroffen",
];

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Uitvoering"
        title="Vijf experimenten en één poort"
        lede="Alles uit dit dossier komt hier samen: wat er getoetst moet worden vóór er iets gebouwd wordt, en waaraan Elise mag aflezen dat ze haar baan kan opzeggen."
      />

      <Section title="Fase 0 — Toetsen wat we hebben aangenomen">
        <Prose>
          <p>
            Het dossier heeft drie aannames blootgelegd waar het hele plan aan hangt en waarvoor geen
            bewijs bestaat: dat de visualisatiepijn echt is, dat de Verkenning converteert, en dat
            Elise bij de 256 kan komen. Vijf experimenten toetsen ze — samen{" "}
            <strong>ongeveer €1.775 en 143 uur</strong>, minder dan één Verkenning opbrengt.
          </p>
        </Prose>

        <div className="mt-7">
          <Table
            head={["#", "Experiment", "Kosten", "Duur", "Uren", "Wat het toetst"]}
            rows={[
              [
                "1",
                <strong key="1">20 pre-sale-gesprekken met echte kopers</strong>,
                "€0–150",
                "4 wkn",
                "25 u",
                "Bestaat de pijn? Elk gesprek eindigt met een vraag om €500 aanbetaling — dát is de meting, niet het knikken.",
              ],
              [
                "2",
                <strong key="2">Concierge MVP: 3 Verkenningen, volle prijs</strong>,
                "~€400",
                "8 wkn (harde stop)",
                "55 u",
                "Werkt de methode? €2.000 met geld-terug-garantie, alles met de hand, geen tooling.",
              ],
              [
                "3",
                <strong key="3">Makelaar-pilot met 3 kantoren</strong>,
                "~€225",
                "10 wkn",
                "22 u",
                "Is er toegang? Wederkerige verwijzing, ná de sleuteloverdracht.",
              ],
              [
                "4",
                <strong key="4">Instagram AI-serie</strong>,
                "€50–150",
                "6 wkn",
                "27 u",
                "Trekt het? CTA is een aanbetaling, niet 'stuur me een DM'.",
              ],
              [
                "5",
                <strong key="5">Smoketest met advertenties</strong>,
                "€900 cap",
                "3 wkn",
                "14 u",
                "Als laatste — €900 koopt ~400 bezoekers waar de norm 1.000–3.000 is. Kan het idee dóden, niet bevestigen.",
              ],
            ]}
            caption="Volgorde is op afhankelijkheid, niet op kosten: experiment 2 is de motor, 1 de brandstof."
          />
        </div>

        <div className="mt-8">
          <div
            className="rounded-sm border-l-2 p-6"
            style={{ borderColor: "var(--serious)", background: "rgba(236,131,90,0.06)" }}
          >
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#a8532c" }}>
              Twee ideeën uit ons eigen plan zijn geschrapt
            </p>
            <div className="r-body mt-3 max-w-2xl space-y-3 text-[var(--ink-2)]">
              <p>
                <strong>De kortingspilot is eruit.</strong> Kortingsklanten komen niet terug tegen
                volle prijs — en dit zijn precies je toekomstige referenties. Ruil portfoliorechten
                tegen een extra levering, nooit tegen prijs.
              </p>
              <p>
                <strong>Het event met het bestaande netwerk is geschrapt.</strong> Dat is letterlijk
                de false-positive-machine waar de literatuur voor waarschuwt: vrienden zeggen ja tegen
                jou, niet tegen het product.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="De fasen">
        <div className="space-y-4">
          {[
            {
              n: "Fase 0",
              t: "Fundament & toetsing",
              d: "Nu — 3 maanden",
              b: [
                "Domeinen registreren (vandaag — beide zijn vrij)",
                "Arbeidscontract lezen en het gesprek met de werkgever voeren",
                "Fotografie-, publicatie- en opnamerecht in het standaardcontract — vóór klant 1",
                "De vijf makelaarsgesprekken (toetst risico 2 én 3 tegelijk)",
                "Titelvraag uitzoeken bij het Architectenregister",
                "Experiment 1 en 2 draaien",
              ],
              k: "Doel: weten of de pijn bestaat en of de Verkenning verkoopt. Nog geen tooling bouwen.",
            },
            {
              n: "Fase 1",
              t: "Deeltijd, met een plafond",
              d: "Maand 4–15",
              b: [
                "8 Verkenningen, 2 Ontwerpen, 8 adviesdagen ≈ €60k",
                "Géén Transformaties — die vragen doordeweekse ochtenden die er niet zijn",
                "Google Bedrijfsprofiel naar 10–15 reviews",
                "Eigen huis laten fotograferen als eerste portfolio",
                "Pas nu de sessie-tool bouwen, als het handwerk voor de derde keer pijn doet",
              ],
              k: "Plafond ≈ €60k, met de J-curve erin ≈ €45–50k. Dat is geen falen — dat is de rekensom.",
            },
            {
              n: "Fase 2",
              t: "De poort",
              d: "Wanneer de tien criteria staan",
              b: [
                "Alle tien criteria hieronder — niet negen",
                "Vertrek via vaststellingsovereenkomst regelen",
                "UWV-startersregeling aanvragen (toestemming, geen recht)",
              ],
              k: "Dit is het enige moment in het dossier waar 'bijna' niet goed genoeg is.",
            },
            {
              n: "Fase 3",
              t: "Fulltime naar €250k",
              d: "Jaar 2–4",
              b: [
                "Scenario 1: 20 Verkenningen, 6 Ontwerpen à €19k, 2 Transformaties, 10 adviesdagen",
                "1.240 uur, €202/uur effectief, 100% bezetting",
                "Uitbesteden: fotografie, boekhouding, mogelijk tekenwerk",
                "Nu pas is de AI-hefboom er (jaar 2-effect)",
              ],
              k: "Solopreneur betekent niet alles zelf. Bij €200/uur is elk uur dat een ander kan doen, verlies.",
            },
          ].map((f, i) => (
            <div key={f.n} className="r-card-solid p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="r-display-m">
                  <span className="r-numeral mr-3 opacity-30">{f.n}</span>
                  {f.t}
                </p>
                <span className="r-eyebrow !text-[0.5rem]" style={{ color: "var(--series-1)" }}>
                  {f.d}
                </span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {f.b.map((x) => (
                  <li key={x} className="r-body flex gap-2.5 text-[var(--ink-2)]">
                    <span style={{ color: "var(--line-2)" }}>—</span>
                    {x}
                  </li>
                ))}
              </ul>
              <p className="r-small mt-4 border-t border-[var(--line)] pt-3">{f.k}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="De poort"
        intro="Tien criteria. Alle tien, niet negen — want de negen die makkelijk zijn, zeggen niets over de tiende die het niet is."
      >
        <div className="r-card-solid p-6">
          <ol className="space-y-3">
            {GATE.map((g, i) => (
              <li key={g} className="flex gap-4">
                <span className="r-numeral shrink-0 text-[0.85rem] opacity-40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="r-body text-[var(--ink-2)]">{g}</span>
              </li>
            ))}
          </ol>
        </div>

        <Thesis>
          De poort is geen gevoel. Het is een lijst waar je met een pen langs kunt lopen, en die je
          op een slechte dag tegenhoudt en op een goede dag doorlaat.
        </Thesis>
      </Section>

      <Section title="Twee vondsten die de opzegvraag veranderen">
        <StatRow>
          <Stat value="26 wkn" label="UWV-startersregeling op 71% WW" sub="Bedrijfsinkomsten worden niet verrekend, geen sollicitatieplicht — mits via een vaststellingsovereenkomst" accent="#12704e" conf="hoog" />
          <Stat value="€0" label="WW bij zelf opzeggen" sub="Verwijtbaar werkloos. Het duurste woord in het dossier." accent="var(--critical)" conf="hoog" />
          <Stat value="€1.248" label="Fiscaal voordeel van het urencriterium per jaar" sub="Zelfstandigenaftrek 2026 is €1.200 (was €2.470). Het fiscale argument om te springen bestaat niet meer." accent="var(--serious)" conf="hoog" />
          <Stat value="Geen" label="Grotendeelscriterium voor starters" sub="Elise haalt het urencriterium óók naast haar baan — ze hoeft haar start niet te verwringen" conf="hoog" />
        </StatRow>

        <div className="mt-7">
          <Prose>
            <p>
              Deze twee samen draaien de volgorde om. De vraag was: &ldquo;wanneer is het bedrijf groot
              genoeg om de baan op te zeggen?&rdquo; De echte vraag blijkt:{" "}
              <strong>&ldquo;hoe zorg ik dat het vertrek zelf een half jaar aanloop financiert?&rdquo;</strong>{" "}
              Dat is geen detail in de marge — het is de grootste enkele financiële hefboom in het
              hele dossier, en hij hangt aan hoe één gesprek met een werkgever verloopt.
            </p>
          </Prose>
        </div>
      </Section>

      <Section title="De tien acties voor deze maand">
        <Table
          head={["#", "Actie", "Kosten", "Waarom nu"]}
          rows={[
            ["1", <strong key="1">studioverstelle.nl + .com registreren</strong>, "€25", "Beide vrij. Onomkeerbaar als iemand anders ze neemt."],
            ["2", "Arbeidscontract lezen: nevenwerkzaamheden en IE-beding", "€0", "Een IE-beding kan betekenen dat avondwerk van de werkgever is"],
            ["3", <strong key="3">Fotografie-, publicatie- en opnamerecht in het standaardcontract</strong>, "€0 · 1 uur", "Het enige item dat onherstelbaar verdwijnt zodra klant 1 tekent zonder"],
            ["4", "Titelvraag: kwalificeert het diploma voor het Architectenregister?", "€0", "Bepaalt de taal op de hele website. Bij 'ja': €102,50 voor de enige toegangsbarrière in deze markt."],
            ["5", <strong key="5">Vijf makelaarsgesprekken</strong>, "€0", "Toetst risico 2 én 3 met dezelfde vijf gesprekken. Tegelijk verkoop."],
            ["6", "Vijf tot acht klantinterviews over de visualisatiepijn", "€0", "Vóórdat de propositie vastligt. Niet met vrienden."],
            ["7", "FLUX Depth testen op één echte kamer", "€0 · 1 avond", "Adresseert het enige technische risico dat de belofte kan breken"],
            ["8", "Gesprek over eigendom van de tooling", "€0", "Nu één gesprek; over twee jaar een conflict"],
            ["9", "Google Bedrijfsprofiel claimen", "€0", "De local pack is leeg: nummer 3 heeft 8 reviews"],
            ["10", "Arbeidsrechtjurist over de vaststellingsovereenkomst", "€200–350", "26 weken op 71% WW hangt hieraan"],
          ]}
          caption="Merk op wat er niet in staat: iets bouwen. Dat is opzettelijk."
        />
      </Section>

      <CounterCase>
        <p>
          <strong>Geen enkel experiment isoleert de AI-visualisatie.</strong> Het onderzoek zegt het
          zelf: de kernaanname blijft na alle vijf de experimenten onbewezen. We meten of de
          Verkenning verkoopt — niet of het de <em>beelden</em> zijn die haar verkopen. Het kan
          evengoed de aandacht zijn, of Elise zelf.
        </p>
        <p>
          <strong>Alle N&rsquo;s zijn te klein voor bewijs.</strong> Drie Verkenningen, twintig
          gesprekken, drie makelaars — dat zijn beslisinstrumenten, geen statistiek. Ze vertellen je
          of je door moet gaan, niet of je gelijk hebt.
        </p>
        <p>
          <strong>De markt koelt af terwijl wij plannen.</strong> De MVA meldt over Q1 2026 −32%
          transacties, met een verschuiving weg van het dure segment. Elise&rsquo;s doelgroep wordt
          precies nu kleiner. Fase 0 duurt drie maanden; de markt wacht niet <Est />.
        </p>
        <p>
          <strong>Deze roadmap veronderstelt dat Elise dit wil.</strong> Het hele dossier is
          geschreven alsof €250k het doel is. Scenario 3 uit hoofdstuk 05 is het minst
          ontwerp-inhoudelijke scenario en haalt het bedrag ook — dat is een aanwijzing dat het bedrag
          en de ambitie twee verschillende dingen zijn.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Wat gebeurt er eerst?"
          opties={[
            "De vijf makelaarsgesprekken + klantinterviews",
            "De concierge MVP met drie betalende klanten",
            "Tooling bouwen zodat de methode af is",
          ]}
          advies="De gesprekken. Ze kosten niets, ze toetsen de twee zwaarste risico's tegelijk, en ze zijn zelf al acquisitie. Tooling bouwen is de aantrekkelijkste optie en daarom de gevaarlijkste."
        />
        <Decision
          vraag="Is €250k het juiste doel?"
          opties={[
            "Ja — het is de reden dat dit een bedrijf is en geen hobby",
            "Nee — €150k met mooier werk is een beter leven",
            "Eerst €60k in deeltijd halen, dan pas herijken",
          ]}
          advies="Eerst het deeltijdplafond halen, dan herijken. €250k vraagt €200/uur en 3,3× het sectorgemiddelde; dat is haalbaar maar het is een keuze met gevolgen voor wat voor werk Elise doet. Die keuze hoeft niet vandaag."
          hangtAf="Wat Elise wil. Dat staat in geen enkel onderzoek."
        />
      </Decisions>

      <Sources
        note="954 regels in research-notes/validatie.md, met de volledige experimentopzet en de tien poortcriteria."
        items={[
          { t: "Startersregeling tijdens de startperiode", url: "https://www.uwv.nl/nl/eigen-bedrijf-starten/startperiode", org: "UWV", jaar: "2026" },
          { t: "Bedrijf starten vanuit een WW-uitkering", url: "https://www.uwv.nl/nl/eigen-bedrijf-starten/bedrijf-vanuit-ww", org: "UWV", jaar: "2026" },
          { t: "Recht op WW bij zelf ontslag nemen", url: "https://advocaat-arbeidsrecht.com/recht-op-ww-bij-zelf-ontslag-nemen", org: "Advocaat Arbeidsrecht", jaar: "2026" },
          { t: "Zelfstandigenaftrek 2026 (€1.200) en startersaftrek (€2.123)", url: "https://www.belastingdienst.nl", org: "Belastingdienst", jaar: "2026" },
          { t: "Eigen bedrijf starten vanuit de WW", url: "https://ondernemersplein.overheid.nl/bedrijf-starten/startsituaties/eigen-bedrijf-starten-vanuit-de-ww/", org: "Ondernemersplein", jaar: "2026" },
        ]}
      />

      <ChapterCoach slug="roadmap" />

      

      <div className="mt-16 border-t border-[var(--line-2)] pt-8 sm:mt-24">
        <Link href="/research" className="group block">
          <p className="r-eyebrow opacity-50">Terug naar</p>
          <p className="r-display-l mt-1.5 transition-opacity group-hover:opacity-60">
            De samenvatting →
          </p>
        </Link>
      </div>
    </>
  );
}
