import type { Metadata } from "next";
import {
  PageHead,
  Section,
  Prose,
  CounterCase,
  Decisions,
  Decision,
  NextPage,
  Thesis,
  Table,
  Sources,
  Stat,
  StatRow,
  Conf,
  Est,
} from "@/components/research/Blocks";
import { Figure, Funnel } from "@/components/research/Charts";
import { pageBySlug } from "@/lib/research";

export const metadata: Metadata = { title: "De markt — Dossier" };
const P = pageBySlug("markt");

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Fundament"
        title="Niet te klein. Wel te gesloten."
        lede="De vijver is groot genoeg — dat was de makkelijke vraag. De moeilijke vraag is of Elise erbij kan, want de mensen die écht een ontwerper inhuren zijn met verrassend weinig."
      />

      <Section title="De vijf cijfers">
        <StatRow>
          <Stat value="12.800" label="Transacties/jaar in de band €500k–€2M" sub="Amsterdam, Den Haag en Rotterdam samen, 2025" conf="middel" />
          <Stat value="€80.000" label="Gemiddeld verbouwbudget" sub="De HDN 'Verbouwende Doorstromer': 42 jaar, inkomen €120k — letterlijk Elise's klant" conf="hoog" />
          <Stat value="~256" label="Huishoudens/jaar die een ontwerper inhuren" sub="In de drie steden. Dít is de echte markt, niet de 12.800." accent="var(--critical)" conf="laag" />
          <Stat value="12.915" label="Concurrerende bedrijven in NL" sub="Verdubbeld sinds 2013 — CBS 81589NED" accent="var(--serious)" conf="hoog" />
        </StatRow>
        <p className="r-small mt-4">
          Het vijfde cijfer staat hieronder in de trechter, en het is het enige dat er echt toe doet.
        </p>
      </Section>

      <Section
        title="De trechter"
        intro="Van alle woningverkopen in de drie steden naar de mensen die daadwerkelijk een interieurontwerper betalen. Beweeg over een trede voor de onderbouwing."
      >
        <Figure
          title="Van 31.443 transacties naar 256 klanten"
          note="Elke versmalling is een aanname. De laatste — 20% huurt een ontwerper in — is de zwakste en heeft geen Nederlandse bron."
          table={{
            head: ["Trede", "Aantal", "Aanname"],
            rows: [
              ["Woningtransacties in 3 steden", 31443, "CBS 85792NED (hard)"],
              ["Waarvan in de band €500k–€2M", 12800, "Lognormaal, geijkt op Kadaster-anker"],
              ["Verbouwt substantieel", 3200, "25% — schatting"],
              ["Budget ≥ €75k", 1280, "40% — schatting"],
              ["Huurt een ontwerper in", 256, "20% — GEEN Nederlandse bron"],
            ],
          }}
        >
          <Funnel
            stages={[
              {
                label: "Woningtransacties in de drie steden",
                value: 31443,
                note: "Hard cijfer uit CBS 85792NED: Amsterdam 14.683 (gem. €630.621), Den Haag 8.376, Rotterdam 8.384. Let op: makelaarssites melden vaak '11.000 verkopen in Amsterdam' — dat klopt niet.",
              },
              {
                label: "Waarvan in de band €500k – €2M",
                value: 12800,
                note: "Geschat via een lognormale verdeling, geijkt op het Kadaster-anker (84.000 van 238.800 landelijke transacties boven €500k).",
              },
              {
                label: "Verbouwt substantieel binnen ~2 jaar",
                value: 3200,
                note: "25% — schatting. ~18% van de kopers financiert een verbouwing mee bij aankoop; dat is een ondergrens.",
              },
              {
                label: "Met een budget van €75k of meer",
                value: 1280,
                note: "40% — schatting. Het HDN-gemiddelde voor de Verbouwende Doorstromer is €80.000, dus dit zit rond de mediaan.",
              },
              {
                label: "Huurt daadwerkelijk een ontwerper in",
                value: 256,
                note: "20% — de zwakste schakel in de hele keten. Hiervoor bestaat geen Nederlandse bron. Vijf gesprekken met Amsterdamse aankoopmakelaars lossen dit beter op dan verder deskresearch.",
              },
            ]}
          />
        </Figure>

        <div className="mt-8">
          <Prose>
            <p>
              Daar komen nog ongeveer <strong>400 zittende eigenaren</strong> bij die verbouwen zonder
              te verhuizen — het HDN-profiel &ldquo;Verbouwer&rdquo; is met 98.881 aanvragen landelijk
              zelfs het grootste klantprofiel van de hele hypotheekmarkt. Samen dus{" "}
              <strong>ongeveer 650 huishoudens per jaar</strong>.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="De sanity check keert om"
        intro="Dit is de belangrijkste bevinding van het hoofdstuk, en hij zegt iets anders dan we hoopten."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="r-card-solid p-6">
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#12704e" }}>
              Wat we wilden horen
            </p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              47 klanten voor €257k is <strong>0,37%</strong> van de band. Twaalf diepe projecten is{" "}
              <strong>0,09%</strong> — één op de duizend woningverkopen. Ruim onder de 1% die we als
              gezond beschouwden.
            </p>
            <p className="r-display-l mt-4" style={{ color: "#12704e" }}>
              0,37%
            </p>
          </div>
          <div className="r-card-solid p-6" style={{ borderColor: "var(--critical)", borderWidth: 2 }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--critical)" }}>
              Wat er werkelijk staat
            </p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              Maar tegen de pool die daadwerkelijk een ontwerper inhuurt — 256 huishoudens — is 47
              klanten <strong>18,4%</strong>, en zijn 12 projecten <strong>4,7%</strong>. Dat is geen
              rondingsfout meer. Dat is marktleiderschap in een niche waarvan Elise vandaag{" "}
              <strong>0% kent</strong>.
            </p>
            <p className="r-display-l mt-4" style={{ color: "var(--critical)" }}>
              18,4%
            </p>
          </div>
        </div>

        <Thesis>
          Het risico zit niet in het volume van de markt. Het zit in de toegang tot een kleine,
          gesloten pool. De vraag is niet &ldquo;zijn er genoeg mensen?&rdquo; maar &ldquo;hoe komt Elise bij
          de 256?&rdquo;
        </Thesis>

        <div className="mt-6">
          <Prose>
            <p>
              En daar volgt een strategische omkering uit die het hele plan raakt. Als de pool van
              ontwerper-kopers klein en gesloten is, maar de pool van <strong>verbouwers</strong> met
              3.200 huishoudens ruim is, dan is de Verkenning van €2.000 niet het bijproduct van het
              model — <strong>dan is het het model</strong>. Twintig Verkenningen is 0,6% van de
              verbouwers: dát is de rondingsfout waarop een plan mag rusten. De Ontwerpen volgen
              daaruit, niet uit de markt.
            </p>
          </Prose>
        </div>
      </Section>

      <Section title="Wie de klant is — en wie niet">
        <Table
          head={["Segment", "Bevinding", "Oordeel"]}
          rows={[
            [
              "Verbouwende Doorstromer (HDN-profiel)",
              "42 jaar, inkomen €120k, hypotheek €450k, verbouwbudget €80k, ~6% van de markt",
              <strong key="1" style={{ color: "#12704e" }}>De kernklant</strong>,
            ],
            [
              "Expats",
              "11–14% van de Amsterdamse aankopen, gemiddeld €591k. Weinig netwerk, dus meer behoefte aan begeleiding",
              <strong key="2" style={{ color: "#12704e" }}>Sterkste niche</strong>,
            ],
            [
              "Zittende eigenaren die verbouwen",
              "HDN-profiel 'Verbouwer': 98.881 aanvragen landelijk — het grootste klantprofiel van de hypotheekmarkt",
              <strong key="3" style={{ color: "#12704e" }}>Groot, onderschat</strong>,
            ],
            [
              "Kleine ontwikkelaars",
              "Beleggers ponden hun bezit uit — 36.000 in 2025. De markt loopt leeg, niet vol",
              <strong key="4" style={{ color: "var(--critical)" }}>Sneuvelt</strong>,
            ],
            [
              "Empty nesters via de transactiemarkt",
              "Slechts 7% van de kopers is 65+",
              <strong key="5" style={{ color: "var(--critical)" }}>Sneuvelt</strong>,
            ],
          ]}
        />
      </Section>

      <Section
        title="Wat de markt van AI vindt"
        intro="Deze cijfers horen eigenlijk in het positioneringshoofdstuk, maar ze zijn te belangrijk om te laten wachten."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat value="86%" label="Gebruikt AI al voor inspiratie" sub="Moodboards zijn gecommoditiseerd. Dit is geen onderscheid meer — het is een verwachting." accent="var(--series-2)" conf="middel" />
          <Stat value="84–88%" label="Eist menselijk toezicht bij grote beslissingen" sub="Hoe hoger de inzet, hoe harder de eis" conf="middel" />
          <Stat value="14%" label="Vertrouwt AI bij hypotheekadvies" sub="Bij geld en huis wint de mens het van de machine, ruim" accent="var(--critical)" conf="middel" />
        </div>
        <div className="mt-7">
          <Prose>
            <p>
              De conclusie is onaangenaam voor wie AI als verkoopargument wilde gebruiken:{" "}
              <strong>AI hoort in de marge, niet in de belofte</strong>. De klant gebruikt het al zelf,
              vindt het niet bijzonder, en wil bij beslissingen van deze omvang juist expliciet een
              mens zien. Wie &ldquo;AI-gedreven interieurontwerp&rdquo; op zijn gevel zet, verkoopt precies
              het deel waar de klant het minst voor wil betalen.
            </p>
          </Prose>
        </div>
      </Section>

      <CounterCase>
        <p>
          <strong>De laatste trede van de trechter is verzonnen.</strong> Dat 20% van de verbouwers
          met €75k+ een ontwerper inhuurt, is nergens in Nederland gemeten. Halveer die aanname naar
          10% en de markt is 128 huishoudens — dan is 47 klanten 37% van de hele pool. Dat getal is
          niet ambitieus meer, dat is ongeloofwaardig <Est />.
        </p>
        <p>
          <strong>De markt koelt precies nu af.</strong> De Makelaarsvereniging Amsterdam meldt over
          Q1 2026 een daling van 32% in transacties, mét een verschuiving weg van het dure segment.
          Elise&rsquo;s doelgroep wordt op dit moment kleiner, niet groter.
        </p>
        <p>
          <strong>Er zijn 12.915 concurrenten, en dat aantal is sinds 2013 verdubbeld.</strong> Een
          markt die harder in aanbieders groeit dan in vraag, is een markt die in prijs gaat zakken —
          precies tegengesteld aan het €200/uur dat hoofdstuk 05 nodig heeft.
        </p>
        <p>
          <strong>Toegang is geen marketingprobleem dat je met content oplost.</strong> Een pool van
          256 huishoudens per jaar die elkaar via makelaars en vrienden vinden, is per definitie een
          netwerkmarkt. Instagram bereikt bewonderaars; makelaars bereiken kopers.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Verkopen we aan de 256 of aan de 3.200?"
          opties={[
            "Aan de 256 die al een ontwerper inhuren — hoge intentie, gesloten netwerk",
            "Aan de 3.200 verbouwers, via de Verkenning als instap",
            "Beide, maar de Verkenning als voordeur",
          ]}
          advies="De Verkenning als voordeur naar de 3.200. Dit onderzoek keert de logica om: de Verkenning is niet het bijproduct maar de strategie. Twintig sessies is 0,6% van de verbouwers — een haalbaar getal — terwijl 12 projecten uit de 256 halen 4,7% marktaandeel vereist."
          hangtAf="Of de Verkenning daadwerkelijk converteert. Zie hoofdstuk 05 en de experimenten in 12."
        />
        <Decision
          vraag="Doen we de vijf makelaarsgesprekken vóór de rest?"
          opties={[
            "Ja — het lost de zwakste aanname op én bouwt meteen het kanaal",
            "Nee — eerst het merk en het portfolio op orde",
          ]}
          advies="Ja, en met voorrang. Vijf gesprekken met Amsterdamse aankoopmakelaars valideren de 20%-aanname beter dan welk deskonderzoek dan ook — én ze openen precies het netwerk waar de toegang zit. Het is het enige onderzoek dat tegelijk verkoop is."
        />
        <Decision
          vraag="Mikken we expliciet op expats?"
          opties={[
            "Ja — 11–14% van A'dam, gemiddeld €591k, weinig eigen netwerk",
            "Nee — dan moet alles tweetalig en verandert de toon",
          ]}
          advies="Ja, als tweede golf. Expats hebben geen zwager met een aannemer en geen vriendin die 'iemand kent' — precies de klant voor wie een transparante, begeleide methode het meeste waard is. Maar dat vraagt een Engelstalige site."
          hangtAf="Of Elise in het Engels wil werken."
        />
      </Decisions>

      <Sources
        note="Volledige onderbouwing (~13.000 woorden) in research-notes/markt.md. Alle CBS-cijfers zijn via OData opgehaald, niet overgeschreven."
        items={[
          { t: "Bestaande koopwoningen; verkoopprijzen per gemeente (85792NED)", url: "https://opendata.cbs.nl/statline/#/CBS/nl/dataset/85792NED", org: "CBS", jaar: "2025" },
          { t: "Bedrijven naar SBI: interieurarchitecten en ruimtelijk ontwerp (81589NED)", url: "https://opendata.cbs.nl/statline/#/CBS/nl/dataset/81589NED", org: "CBS", jaar: "2026" },
          { t: "Vastgoedcijfers en transacties boven €500k", org: "Kadaster", jaar: "2025" },
          { t: "Klantprofielen hypotheekmarkt — 'Verbouwende Doorstromer' en 'Verbouwer'", org: "HDN", jaar: "2026" },
          { t: "Kwartaalcijfers Q1 2026 — transacties −32%", org: "Makelaarsvereniging Amsterdam", jaar: "2026" },
          { t: "Onderzoek consumentenvertrouwen in AI bij financiële beslissingen", org: "diverse", jaar: "2025–2026" },
        ]}
      />

      <NextPage slug="concurrentie" title="De concurrentie" n="02" />
    </>
  );
}
