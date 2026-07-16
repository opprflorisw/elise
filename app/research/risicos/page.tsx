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
} from "@/components/research/Blocks";
import { Figure, RiskMatrix, type Risk } from "@/components/research/Charts";
import { pageBySlug } from "@/lib/research";

export const metadata: Metadata = { title: "Risico's — Dossier" };
const P = pageBySlug("risicos");

const RISKS: Risk[] = [
  {
    id: "1",
    label: "De uren passen niet",
    kans: 5,
    impact: 4,
    mitigatie:
      "Al bewezen in hoofdstuk 05: de eerste mix vroeg 1.895 uur waar er 1.242 zijn. Mitigatie is prijs, niet volume — en de J-curve betekent dat jaar 1 met 'zonder AI'-uren gerekend moet worden.",
  },
  {
    id: "2",
    label: "De visualisatiepijn bestaat niet",
    kans: 3,
    impact: 5,
    mitigatie:
      "Geen enkel NL-klantcitaat gevonden; Houzz zegt 18%. Vijf tot acht klantinterviews vóórdat de propositie vastligt. Als de pijn er niet is, valt de hele propositie terug op transparantie — dan is er een ander bedrijf.",
  },
  {
    id: "3",
    label: "Toegang tot de 256",
    kans: 4,
    impact: 5,
    mitigatie:
      "De pool die écht een ontwerper inhuurt is klein en gesloten, en Elise kent er vandaag 0% van. Mitigatie: makelaars als kanaal, en de Verkenning verkopen aan de bredere pool van 3.200 verbouwers.",
  },
  {
    id: "4",
    label: "Geometrie-drift in de beelden",
    kans: 4,
    impact: 3,
    mitigatie:
      "Gemini houdt geen persistent 3D-geheugen bij; geometriebehoud is emergent, niet afgedwongen. Test FLUX Depth op één echte kamer vóórdat een betalende klant zegt: dat is mijn kamer niet.",
  },
  {
    id: "5",
    label: "Verwachtingskloof beeld ↔ maakbaar ontwerp",
    kans: 4,
    impact: 3,
    mitigatie:
      "Beloof herkenbaarheid, nooit fotorealisme. Vanaf minuut één: het beeld is een taal, geen bouwtekening. Dit staat of valt met hoe de sessie wordt ingeleid.",
  },
  {
    id: "6",
    label: "Capaciteitsplafond solo — ziekte",
    kans: 3,
    impact: 5,
    mitigatie:
      "Eén mens, geen achtervang. AOV afsluiten vóór fulltime (medische keuring duurt 4–8 weken!), of Broodfonds + AOV met lange wachttijd. Dit is de klassieke doodsoorzaak van eenpitters.",
  },
  {
    id: "7",
    label: "Zelf opzeggen = €0 WW",
    kans: 2,
    impact: 5,
    mitigatie:
      "Verwijtbaar werkloos betekent geen enkele uitkering. Vertrek via een vaststellingsovereenkomst op neutrale gronden → WW → UWV-startersregeling: 26 weken op 71%, bedrijfsinkomsten niet verrekend. Dat is meer waard dan alle vijf de experimenten samen.",
  },
  {
    id: "8",
    label: "AVG: toestemming moet vrij zijn",
    kans: 3,
    impact: 4,
    mitigatie:
      "Als 'nee' tegen de opname prijs of dienst verandert, is de toestemming ongeldig en valt de basis onder de methode weg. Maak de spraak-laag een weigerbare bonus; zorg dat het product ook zonder compleet is.",
  },
  {
    id: "9",
    label: "Scope creep in de begeleiding",
    kans: 4,
    impact: 3,
    mitigatie:
      "Begeleiding is waar uren ongemerkt weglopen en AI niets bespaart (−16%, alleen in het ontwerpdeel). Hard afspreken hoeveel bouwvergaderingen inbegrepen zijn; meerwerkclausule in de voorwaarden.",
  },
  {
    id: "10",
    label: "Aansprakelijkheid via de aannemer",
    kans: 2,
    impact: 5,
    mitigatie:
      "Nooit zelf contracteren met de aannemer. Drie zinnen in de voorwaarden staan tussen een lastig gesprek en een claim van €200.000. Plus een BAV met minimaal €500k dekking.",
  },
  {
    id: "11",
    label: "De markt koelt af",
    kans: 4,
    impact: 3,
    mitigatie:
      "MVA meldt over Q1 2026 −32% transacties, mét een verschuiving weg van het dure segment. En er zijn 12.915 concurrenten, verdubbeld sinds 2013. Mitigatie: de zittende eigenaren (die verhuizen niet) en de Verkenning als laagdrempelige instap.",
  },
  {
    id: "12",
    label: "Deeltijd-geloofwaardigheid",
    kans: 3,
    impact: 3,
    mitigatie:
      "Een klant met een verbouwing van €300k wil geen ontwerper die alleen 's avonds kan. Daarom: géén Transformaties in de deeltijdfase — dat is geen keuze maar een feit. Ontwerp en Verkenning kunnen wel.",
  },
  {
    id: "13",
    label: "Instagram slokt de vier uur op",
    kans: 4,
    impact: 2,
    mitigatie:
      "Het signatuurformat is deelbaar en voelt als vooruitgang, maar levert bewonderaars, geen kopers. Instagram op onderhoudsniveau (2 posts/week); de uren naar makelaars en het warme netwerk.",
  },
  {
    id: "14",
    label: "Tooling-afhankelijkheid van Floris",
    kans: 3,
    impact: 4,
    mitigatie:
      "De hele stack wordt gebouwd door iemand zonder aandeel in de studio. Nu vastleggen wie wat bezit — dit is de klassieke manier waarop vriendschappelijke samenwerkingen na twee jaar klappen.",
  },
];

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Uitvoering"
        title="Wat dit kan doden"
        lede="Veertien risico's uit alle voorgaande hoofdstukken, op kans en impact. De twee zwaarste zijn geen tegenslagen maar aannames die we zelf hebben gemaakt."
      />

      <Section
        title="De matrix"
        intro="Beweeg over een risico voor de mitigatie. Rechtsboven staat wat waarschijnlijk én pijnlijk is."
      >
        <Figure
          title="Kans × impact"
          note="Kleur volgt uit kans × impact. Elke stip heeft een nummer en een naam — kleur draagt hier geen informatie alleen."
          table={{
            head: ["#", "Risico", "Kans", "Impact", "Score"],
            rows: RISKS.map((r) => [r.id, r.label, r.kans, r.impact, r.kans * r.impact]),
          }}
        >
          <RiskMatrix risks={RISKS} />
        </Figure>
      </Section>

      <Section title="De twee die er echt toe doen">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="r-card-solid p-6" style={{ borderColor: "var(--critical)", borderWidth: 2 }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--critical)" }}>
              Risico 3 · kans 4 × impact 5
            </p>
            <p className="r-display-m mt-2.5">Toegang tot de 256</p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              Het is geen volumeprobleem — het is een toegangsprobleem. De mensen die daadwerkelijk
              een ontwerper inhuren vinden elkaar via makelaars en vrienden, en Elise kent er vandaag
              geen enkele. Content lost dit niet op. Alleen mensen lossen dit op.
            </p>
          </div>
          <div className="r-card-solid p-6" style={{ borderColor: "var(--critical)", borderWidth: 2 }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--critical)" }}>
              Risico 2 · kans 3 × impact 5
            </p>
            <p className="r-display-m mt-2.5">De pijn bestaat misschien niet</p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              Het hele plan rust op &ldquo;mensen kunnen zich hun huis niet voorstellen&rdquo;. Daar is
              geen Nederlands bewijs voor gevonden — het enige cijfer zegt dat 82% het géén obstakel
              vindt. Als deze aanname valt, valt de propositie, niet het bedrijf.
            </p>
          </div>
        </div>

        <Thesis>
          De gevaarlijkste risico&rsquo;s in dit dossier zijn geen dingen die ons kunnen overkomen. Het
          zijn twee zinnen die wij zelf hebben opgeschreven en nooit hebben getoetst.
        </Thesis>
      </Section>

      <Section
        title="Het persoonlijke risico dat niemand in een businessplan zet"
        intro="Uit het validatie-onderzoek, en het is financieel het grootste enkele bedrag in het hele dossier."
      >
        <div
          className="rounded-sm border-l-2 p-6"
          style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
        >
          <p className="r-display-m">Zelf opzeggen kost alles</p>
          <div className="r-body mt-4 max-w-2xl space-y-3.5 text-[var(--ink-2)]">
            <p>
              Wie zelf ontslag neemt is <strong>verwijtbaar werkloos</strong> en krijgt nul euro WW.
              Wie vertrekt via een <strong>vaststellingsovereenkomst op neutrale gronden</strong>{" "}
              behoudt het recht op WW — en kan dan gebruikmaken van de{" "}
              <strong>UWV-startersregeling</strong>: 26 weken lang 71% van het laatstverdiende loon,
              waarbij bedrijfsinkomsten <em>niet</em> worden verrekend en er geen sollicitatieplicht
              geldt.
            </p>
            <p>
              Dat is een half jaar gefinancierde aanloop. Het is meer waard dan alle vijf de
              validatie-experimenten bij elkaar, en het hangt volledig af van hoe één gesprek met een
              werkgever wordt gevoerd.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Alle veertien, met de vroegste waarschuwing">
        <Table
          head={["#", "Risico", "Score", "Vroegtijdig signaal"]}
          rows={RISKS.map((r) => [
            r.id,
            r.label,
            <strong
              key={r.id}
              style={{
                color:
                  r.kans * r.impact >= 15
                    ? "var(--critical)"
                    : r.kans * r.impact >= 9
                      ? "var(--serious)"
                      : "var(--ink-3)",
              }}
            >
              {r.kans * r.impact}
            </strong>,
            {
              "1": "De eerste drie projecten duren >20% langer dan geraamd",
              "2": "In de klantinterviews noemt niemand visualisatie spontaan",
              "3": "Na acht weken partnerships: nul doorverwijzingen",
              "4": "Een klant zegt 'dat is mijn kamer niet' — dan is het al te laat",
              "5": "Klant vraagt tijdens de sessie of het beeld 'zo gebouwd wordt'",
              "6": "Geen AOV geregeld bij de overstap",
              "7": "Het woord 'opzeggen' valt vóór het woord 'vaststellingsovereenkomst'",
              "8": "Een klant weigert de opname en er verandert iets aan prijs of levering",
              "9": "Meer dan twee onbetaalde bouwvergaderingen in één project",
              "10": "Elise wordt gevraagd 'even' de aannemer te regelen",
              "11": "Kwartaalcijfers MVA blijven dalen in het segment >€500k",
              "12": "Een klant vraagt of ze overdag beschikbaar is en het antwoord is nee",
              "13": "Volgers groeien, intakes niet",
              "14": "Er is nog steeds niets vastgelegd over eigendom van de tooling",
            }[r.id],
          ])}
        />
      </Section>

      <CounterCase>
        <p>
          <strong>Een risicomatrix is schijnprecisie.</strong> De kans- en impactscores hierboven zijn
          geen metingen — het zijn oordelen op een schaal van vijf, opgeschreven door dezelfde mensen
          die het plan bedachten. Dat een risico op 12 uitkomt in plaats van 9 betekent niets.
        </p>
        <p>
          <strong>De ergste risico&rsquo;s staan er waarschijnlijk niet in.</strong> Dit zijn de
          gevaren die we konden bedenken. Wat een eenpitter doorgaans nekt — een scheiding, een
          burn-out, een klant die procedeert, een ouder die ziek wordt — laat zich niet in deze
          matrix vangen en heeft geen mitigatie.
        </p>
        <p>
          <strong>Veertien risico&rsquo;s benoemen is niet hetzelfde als ze beheersen.</strong> Bij
          bijna elk risico hierboven is de mitigatie &ldquo;doe X&rdquo; — en X kost tijd uit dezelfde
          1.242 uur die al vol zitten.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Welk risico pakken we deze maand aan?"
          opties={[
            "Risico 2 — vijf klantinterviews over de visualisatiepijn",
            "Risico 3 — vijf makelaarsgesprekken over toegang",
            "Beide: het zijn dezelfde vijf gesprekken",
          ]}
          advies="Beide, want het zijn grotendeels dezelfde gesprekken. Vijf makelaars vertellen je én of ze doorverwijzen (risico 3) én wat hun kopers zeggen over verbeelding (risico 2). Eén actie, twee van de zwaarste risico's."
        />
        <Decision
          vraag="Hoe verlaat Elise haar baan?"
          opties={[
            "Vaststellingsovereenkomst op neutrale gronden → WW → startersregeling",
            "Gewoon opzeggen als het loopt",
          ]}
          advies="Vaststellingsovereenkomst, en dit nu al voorbereiden — niet pas als het zover is. Het verschil is 26 weken op 71% van het loon, zonder verrekening van bedrijfsinkomsten. Laat een arbeidsrechtjurist meekijken vóór het gesprek."
          hangtAf="De bereidheid van de werkgever. Daarom: eerst het gesprek over nevenwerkzaamheden goed voeren."
        />
      </Decisions>

      <NextPage slug="roadmap" title="Roadmap & beslismomenten" n="12" />
    </>
  );
}
