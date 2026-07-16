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
  Est,
} from "@/components/research/Blocks";
import { SetupChecklist } from "@/components/research/Calculators";
import { CHECKLIST } from "@/lib/checklist";
import { pageBySlug } from "@/lib/research";

export const metadata: Metadata = { title: "Juridisch & setup — Dossier" };
const P = pageBySlug("setup");

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Uitvoering"
        title="Achtenveertig dingen, en twee die vandaag moeten"
        lede="Het saaie hoofdstuk, met de goedkoopste actie van het hele dossier erin: twee domeinnamen die op dit moment nog vrij zijn."
      />

      <Section title="De twee die niet kunnen wachten">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="r-card-solid p-6" style={{ borderColor: "var(--critical)", borderWidth: 2 }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--critical)" }}>
              Onomkeerbaar risico · nul kosten
            </p>
            <p className="r-display-m mt-2.5">De domeinnamen</p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              <strong>verstelle.nl is sinds 2005 bezet</strong> en verstelle.com ook. Maar{" "}
              <strong>studioverstelle.nl en studioverstelle.com zijn beide vrij</strong> — geverifieerd
              in juli 2026. Samen ongeveer €25 per jaar.
            </p>
            <p className="r-small mt-3">
              Dit is de meest urgente actie in het hele dossier, puur omdat het risico onomkeerbaar is
              en de kosten nul zijn. Iemand anders kan ze morgen nemen.
            </p>
          </div>
          <div className="r-card-solid p-6" style={{ borderColor: "var(--critical)", borderWidth: 2 }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--critical)" }}>
              Persoonlijk · vóór alles
            </p>
            <p className="r-display-m mt-2.5">Het arbeidscontract</p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              Nevenwerkzaamheden, concurrentie-, relatie-, geheimhoudings- en IE-beding. Vooral dat
              laatste: een IE-beding kan betekenen dat werk dat Elise &lsquo;s avonds maakt juridisch
              van haar wérkgever is.
            </p>
            <p className="r-small mt-3">
              Melden en schriftelijk toestemming vragen. Eén uur arbeidsrechtadvies (€200–350) als er
              twijfel is.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Eenmanszaak of BV">
        <StatRow>
          <Stat value="€4.900" label="Voordeel eenmanszaak bij €100k winst" sub="De eenmanszaak wint ruim" accent="#12704e" conf="middel" />
          <Stat value="€1.000" label="Voordeel BV bij €190k winst" sub="Bij ±€250k omzet — dat is ruis, geen reden" conf="middel" />
          <Stat value="€175–200k" label="Het echte omslagpunt (winst)" sub="Bij volledige uitkering. Pas aan het eind van het traject." accent="var(--series-1)" conf="middel" />
          <Stat value="€1.200" label="Zelfstandigenaftrek 2026" sub="Was €2.470. Het fiscale argument is grotendeels verdampt." accent="var(--serious)" conf="hoog" />
        </StatRow>

        <div className="mt-8">
          <Prose>
            <p>
              <strong>Eenmanszaak, zonder twijfel, tot ver in het groeipad.</strong> Dat wijkt bewust af
              van de €90k–€150k die je overal leest: die bronnen rekenen met winstinhouding of laten de
              arbeidskorting weg. Laat het toetsen bij een fiscalist zodra de winst boven €150k komt —
              dat staat als punt 44 in de lijst hieronder.
            </p>
            <p>
              Verrassender is dit: <strong>het urencriterium is de moeite niet meer waard</strong>. De
              1.225 uur levert in 2026 nog ongeveer €1.090 per jaar op mét startersaftrek, en €394
              daarna. De MKB-winstvrijstelling van 12,7% — veruit de grootste post — is er níét aan
              gekoppeld. Elise hoeft haar deeltijdstart dus niet te verwringen om een criterium te
              halen dat nauwelijks nog iets oplevert.
            </p>
          </Prose>
        </div>
      </Section>

      <Section title="De drie onderschatte punten">
        <div className="space-y-3">
          {[
            {
              t: "DNR 2011 bestaat niet meer — en DNR2025 past niet op haar klant",
              d: "BNA en NLingenieurs lanceerden DNR2025 op 15 december 2025: 22 artikelen in plaats van 59, inclusief bepalingen over AI en privacy. Maar de DNR is geschreven voor professionele opdrachtgevers, terwijl Elise's kernklant een consument is. Een aansprakelijkheidsbeperking kan dan sneuvelen op de grijze of zwarte lijst. Ze heeft waarschijnlijk twee sets voorwaarden nodig.",
              c: "var(--critical)",
            },
            {
              t: "Nooit zelf contracteren met de aannemer",
              d: "Drie zinnen in de voorwaarden — de klant is opdrachtgever van de aannemer, Elise is niet aansprakelijk voor diens tekortkomingen, en het is een inspannings- geen resultaatsverplichting — staan tussen een lastig gesprek en een claim van €200.000.",
              c: "var(--critical)",
            },
            {
              t: "21% btw op alles",
              d: "Het 9%-tarief voor architecten gold alleen van 1-3-2013 tot 1-1-2015 en is vervallen. Wie daarop rekent in een offerte, rekent zich 12 procentpunten rijk.",
              c: "var(--serious)",
            },
          ].map((s) => (
            <div key={s.t} className="r-card-solid border-l-2 p-5" style={{ borderLeftColor: s.c }}>
              <p className="r-body" style={{ fontWeight: 600 }}>
                {s.t}
              </p>
              <p className="r-small mt-1.5">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="De AVG-eis die de methode kan breken"
        intro="Hier zit het scherpste juridische punt van het hele dossier, en het raakt precies het onderdeel dat Elise het mooiste vond."
      >
        <div
          className="rounded-sm border-l-2 p-6 sm:p-8"
          style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
        >
          <p className="r-eyebrow" style={{ color: "var(--critical)" }}>
            Toestemming moet vrij zijn
          </p>
          <div className="r-body mt-4 max-w-2xl space-y-3.5 text-[var(--ink-2)]">
            <p>
              De grondslag voor het opnemen van een klantgesprek is{" "}
              <strong>expliciete, aantoonbare, vooraf gegeven toestemming</strong>. Niet &ldquo;uitvoering
              van de overeenkomst&rdquo; — de opname is een verbetering, geen noodzaak — en ook niet
              gerechtvaardigd belang.
            </p>
            <p>
              En daar volgt een consequentie uit die Elise moet accepteren:{" "}
              <strong>
                toestemming moet vrij zijn, dus &ldquo;nee&rdquo; moet kunnen zonder prijs- of
                dienstverschil
              </strong>
              . Als de sessie zonder opname duurder is, of minder oplevert, is de toestemming ongeldig
              — en valt de juridische basis onder de hele methode weg.
            </p>
            <p>
              Praktisch betekent dat: de spraak-laag is een <em>bonus</em> die de klant mag weigeren,
              nooit een voorwaarde. Het product moet ook zonder opname compleet zijn.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Table
            head={["Verplichting", "Status", "Waarom"]}
            rows={[
              ["Verwerkingsregister", <strong key="1" style={{ color: "var(--critical)" }}>Verplicht</strong>, "De uitzondering voor <250 medewerkers vervalt op alle drie de gronden"],
              ["DPIA", <strong key="2" style={{ color: "var(--serious)" }}>Vrijwel zeker</strong>, "Stelselmatige verwerking van gesprekken in de privésfeer"],
              ["Audio wissen na 30 dagen", "Sterk aanbevolen", "Zo wordt het grootste risico het kleinste — het transcript volstaat"],
              ["EU-only verwerking", <strong key="3" style={{ color: "var(--critical)" }}>Doen</strong>, "Het DPF is formeel geldig, maar het Amerikaanse Hooggerechtshof ondermijnde op 29-06-2026 in Trump v. Slaughter de onafhankelijkheid van de FTC — waar de Commissie zich 259× op beroept. Nu een dropdown, straks een migratie."],
              ["Verwerkersovereenkomsten", <strong key="4" style={{ color: "var(--critical)" }}>Verplicht</strong>, "Met élke AI- en opslagleverancier"],
            ]}
          />
        </div>
      </Section>

      <Section
        title="De lijst"
        intro="48 items in drie fasen. Afvinken blijft bewaard in deze browser. Filter op fase om te zien wat er nú moet."
      >
        <SetupChecklist items={CHECKLIST} />
      </Section>

      <Section title="Wat het kost">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat value="€581–1.481" label="Eenmalig, fase 1" sub="KvK €85, domeinen €25, BOIP €271, voorwaarden 0–€750, arbeidsrechtadvies €200–350" conf="middel" />
          <Stat value="€1.411–3.571" label="Jaarlijks" sub="Verzekeringen, boekhouding, tooling" conf="middel" />
          <Stat value="~€600–1.500" label="Nodig vóór klant 1" sub="En twee weken doorlooptijd. Dat is alles." accent="#12704e" conf="middel" />
        </div>
        <div className="mt-7">
          <Prose>
            <p>
              Grofweg de helft komt terug via btw-aftrek en winstaftrek. De drempel om te beginnen is
              dus geen geldprobleem — het is een aandachtsprobleem <Est />.
            </p>
          </Prose>
        </div>
      </Section>

      <CounterCase>
        <p>
          <strong>Achtenveertig items is precies hoe je nooit begint.</strong> Deze lijst kan een
          maandenlange voorbereidingsfase rechtvaardigen waarin geen enkele klant wordt gesproken.
          Realistisch zijn er vóór de eerste klant maar een handvol echt nodig: domeinen, KvK,
          rekening, verzekering, voorwaarden. De rest kan wachten tot er iets te beschermen valt.
        </p>
        <p>
          <strong>De consumentvraag ondergraaft de standaardvoorwaarden.</strong> DNR2025 is
          geschreven voor professionele opdrachtgevers. Elise&rsquo;s klant is een particulier met een
          herenhuis — juridisch een consument, met alle bescherming van dien. De kant-en-klare route
          bestaat dus niet; er moet maatwerk komen, en dat is de €750 in de lijst.
        </p>
        <p>
          <strong>Het AVG-punt kan het product veranderen.</strong> Als de opname weigerbaar moet zijn
          zonder gevolgen, dan is de spraak-laag — het onderdeel dat Elise het meest aansprak — per
          definitie optioneel. Een methode waarvan het kroonjuweel optioneel is, is een andere methode
          dan we dachten te bouwen.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Registreren we de domeinen vandaag?"
          opties={["Ja — €25, vijf minuten", "Wachten tot de naam definitief is"]}
          advies="Vandaag. Beide zijn nu vrij, het kost €25, en als iemand anders ze neemt is de naam weg — inclusief alles wat er in dit dossier op gebouwd is."
        />
        <Decision
          vraag="Hoe gaan we om met de vrije-toestemming-eis?"
          opties={[
            "Opname als weigerbare bonus; het product is compleet zonder",
            "Opname standaard, met een uitgebreide toestemmingsverklaring",
            "Alleen notuleren, geen audio",
          ]}
          advies="Weigerbare bonus. Het is de enige juridisch houdbare vorm, en het dwingt bovendien tot een product dat op eigen benen staat — wat sowieso beter is dan een methode die op één techniek leunt."
          hangtAf="Of de sessie zonder opname nog steeds genoeg oplevert om €2.000 te vragen."
        />
        <Decision
          vraag="Twee sets algemene voorwaarden?"
          opties={[
            "Ja — een consumentenset en een zakelijke set (DNR2025)",
            "Eén set, consumentproof gemaakt",
          ]}
          advies="Twee sets. De consument is de kernklant en de zakelijke opdrachtgever is pijler 2 — met verschillende regels. Eén set die beide moet dekken, wordt de zwakste van de twee."
        />
      </Decisions>

      <Sources
        note="~12.850 woorden met de volledige 48-item-lijst in research-notes/setup.md. Alle fiscale cijfers zijn 2026 en geverifieerd."
        items={[
          { t: "Ondernemersaftrek, zelfstandigenaftrek en MKB-winstvrijstelling 2026", url: "https://www.belastingdienst.nl", org: "Belastingdienst", jaar: "2026" },
          { t: "DNR2025 — De Nieuwe Regeling", org: "BNA / NLingenieurs", jaar: "15-12-2025" },
          { t: "Toestemming als grondslag; verwerkingsregister; DPIA", url: "https://www.autoriteitpersoonsgegevens.nl", org: "Autoriteit Persoonsgegevens", jaar: "2026" },
          { t: "Inschrijven eenmanszaak, SBI-codes, tarieven", url: "https://www.kvk.nl", org: "KvK", jaar: "2026" },
          { t: "Merkregistratie Benelux — tarieven en klassen", url: "https://www.boip.int", org: "BOIP", jaar: "2026" },
          { t: "Domeinbeschikbaarheid geverifieerd: studioverstelle.nl en .com vrij", org: "SIDN / whois", jaar: "juli 2026" },
          { t: "Trump v. Slaughter — onafhankelijkheid FTC", org: "US Supreme Court", jaar: "29-06-2026" },
        ]}
      />

      <NextPage slug="risicos" title="Risico's" n="11" />
    </>
  );
}
