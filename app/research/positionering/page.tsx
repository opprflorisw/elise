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
  Stat,
  StatRow,
  Versus,
  Est,
} from "@/components/research/Blocks";
import { pageBySlug } from "@/lib/research";
import { ChapterCoach } from "@/components/research/ChapterCoach";

export const metadata: Metadata = { title: "Positionering & propositie — Dossier" };
const P = pageBySlug("positionering");

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Strategie"
        title="Verkoop de smaak. Verzwijg de machine."
        lede="Vier onderzoekssporen komen onafhankelijk op dezelfde onwelkome conclusie uit: het AI-verhaal — het leukste deel van dit plan — hoort niet in de propositie."
      />

      <Section title="Het bewijs stapelt zich op">
        <StatRow>
          <Stat value="86%" label="Consumenten die AI al gebruiken voor inspiratie" sub="Uit hoofdstuk 01 — het is een verwachting, geen onderscheid" conf="middel" />
          <Stat value="82%" label="Interieurprofessionals die AI regelmatig gebruiken" sub="69% voor visualisatie. Uit hoofdstuk 07 — het is hygiëne, geen nieuws." conf="middel" />
          <Stat value="84–88%" label="Eist een mens bij grote beslissingen" sub="Hoe hoger de inzet, hoe harder de eis" conf="middel" />
          <Stat value="81%" label="Ontwerpers die zeggen dat AI creativiteit afvlakt" sub="Een riskant frame voor wie smaak verkoopt" accent="var(--critical)" conf="middel" />
        </StatRow>

        <div className="mt-8">
          <Prose>
            <p>
              Elk hoofdstuk kwam er langs een andere weg op uit. De markt zegt: de klant gebruikt AI
              al zelf en wil bij dit bedrag juist expliciet een mens. De concurrentie zegt: de render
              is een commodity van $15 per maand, en wie AI verkoopt wordt met RoomGPT vergeleken. De
              moat-analyse zegt: het gereedschap is de gracht niet — aansprakelijkheid is dat. En de
              marketinganalyse zegt het hardst:{" "}
              <strong>ermee leiden zet een dienst van €10.000 pal naast een gratis tool</strong>.
            </p>
          </Prose>
        </div>

        <Thesis>
          De AI is het beste instrument in deze studio en het slechtste verkoopargument. Het hoort in
          de werkplaats, niet op de gevel.
        </Thesis>
      </Section>

      <Section
        title="De propositie"
        intro="Wat er overblijft als je het AI-woord eruit haalt, blijkt sterker dan wat er stond."
      >
        <div className="r-card-solid p-6 sm:p-8">
          <p className="r-eyebrow opacity-50">Eén zin</p>
          <p className="r-display-l mt-3">
            Studio-smaak van het hoogste niveau — maar je ziet je eigen huis in week één, en je weet
            wat het kost.
          </p>
          <p className="r-body mt-5 max-w-2xl text-[var(--ink-2)]">
            Geen enkel woord hierin gaat over techniek, en toch is elk deel ervan alleen waar te
            maken mét die techniek. Dat is precies goed: de klant koopt de uitkomst, niet de motor.
          </p>
        </div>

        <div className="mt-6">
          <Table
            head={["Element", "Wat het doet", "Waarom het waar is"]}
            rows={[
              [
                <strong key="1">Studio-smaak van het hoogste niveau</strong>,
                "Trekt aan · plaatst ons naast Framework en Nicemakers",
                "Het luxe-eclectische DNA is echt en Elise's smaak is het uitgangspunt van alles",
              ],
              [
                <strong key="2">Je ziet je eigen huis in week één</strong>,
                "Onderscheidt · dit doet geen enkele NL-premiumstudio",
                "Mogelijk gemaakt door AI — maar de klant hoort 'snel en concreet', niet 'AI'",
              ],
              [
                <strong key="3">Je weet wat het kost</strong>,
                "Ontwapent · 0 van 25 concurrenten doet dit",
                "Prijs van de Verkenning gepubliceerd; budget in het ontwerp",
              ],
              [
                <strong key="4">Wij laten je niet los na de tekening</strong>,
                "Sluit · dit is waar het sterkste klachtbewijs zit",
                "Verbouwbegeleiding, en iemand die tekent voor het resultaat",
              ],
            ]}
          />
        </div>
      </Section>

      <Section title="Waar het AI-verhaal wél thuishoort">
        <Versus
          leftTitle="Wél vertellen — en tegen wie"
          rightTitle="Niet vertellen"
          left={[
            "Tegen makelaars: een pand dat 90 dagen stilstaat, verbeeld in drie stijlen. Zelfde tool, andere ontvanger — hier is het schaars in plaats van gratis.",
            "Tijdens de sessie zelf: dan is het geen belofte meer maar een ervaring die de klant ondergaat.",
            "In de Aanpak-pagina, als uitleg van hoe het proces snel kan zijn — als middel, niet als kop.",
            "Tegen ontwikkelaars (pijler 2): daar is snelheid van varianten wél een zakelijk argument.",
          ]}
          right={[
            "Op de homepage — dan concurreert €10.000 met een gratis app",
            "In een persbericht — 82% van het vak doet het al; het is geen nieuws",
            "Als merknaam voor de methode — geen bewijs dat het pricing power geeft",
            "Als reden waarom wij goedkoper/sneller zijn — dat trekt de prijs omlaag",
          ]}
        />
      </Section>

      <Section
        title="Bezwaren, en wat we terugzeggen"
        intro="Deze komen gegarandeerd. Het antwoord moet klaarliggen voordat iemand het vraagt."
      >
        <div className="space-y-3">
          {[
            {
              q: "“Waarom niet gewoon Pinterest of ChatGPT?”",
              a: "Dat kunt u ook, en het kost niets. Een beeld maken is gratis geworden. Wat geld kost is de verkeerde muur, de kast die niet past en de aannemer die drie maanden later is. Wij verkopen geen plaatje — wij verkopen een besluit dat gebouwd wordt, en iemand die daarvoor tekent.",
            },
            {
              q: "“Waarom geen groot bureau?”",
              a: "Bij een groot bureau spreekt u de naam en krijgt u het team. Hier is er één iemand, en dat is degene die ook ontwerpt. Dat is meteen de beperking: wij doen een handvol huizen per jaar.",
            },
            {
              q: "“Is AI-ontwerp niet onpersoonlijk?”",
              a: "Het ontwerp is niet van een machine. Wat de machine doet, is uw kamer laten zien in een handschrift dat al bestond voordat u belde — zodat u kunt wijzen in plaats van gissen. Elk beeld dat u ziet, is door mij uitgekozen. De meeste haalt u nooit.",
            },
            {
              q: "“Wat als het gegenereerde beeld niet maakbaar is?”",
              a: "Dan is het beeld verkeerd, en dat merken we in week één in plaats van bij de aannemer. Het beeld is een taal om het over smaak te hebben — de bouwtekening komt erna, en die is wél maakbaar. Dat is precies waarom de volgorde zo is.",
            },
            {
              q: "“Waarom staat er een prijs op de site en bij niemand anders?”",
              a: "Omdat u anders moet bellen om te weten of u het zich kunt veroorloven. Dat vinden wij een rare manier om een gesprek te beginnen.",
            },
          ].map((o) => (
            <div key={o.q} className="r-card-solid p-5">
              <p className="r-body" style={{ fontWeight: 600 }}>
                {o.q}
              </p>
              <p className="r-body mt-2.5 text-[var(--ink-2)]">{o.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="De naam en de titel">
        <Prose>
          <p>
            Uit hoofdstuk 03 volgen twee harde grenzen die de taal bepalen. Het woord{" "}
            <strong>&ldquo;interieurarchitect&rdquo; is verboden</strong> zolang Elise niet in het
            Architectenregister staat — inclusief samenstellingen en inclusief het Engels.
            &ldquo;Residential Transformation Studio&rdquo; en &ldquo;interieurontwerp&rdquo; zijn veilig,
            en toevallig ook beter: ze beschrijven wat de studio dóét in plaats van welke opleiding
            iemand heeft.
          </p>
          <p>
            En de methode krijgt <strong>geen merknaam</strong>. Dat stond wel in ons oorspronkelijke
            plan, maar er is geen bewijs dat het brandmerken van een werkwijze pricing power oplevert
            bij diensten die de klant toch niet vooraf kan beoordelen. Een <strong>garantie</strong>{" "}
            doet dat aantoonbaar wel. Dus: geen &ldquo;Verstelle Methode™&rdquo;, wel &ldquo;niet
            tevreden na de Verkenning, geld terug&rdquo; <Est />.
          </p>
        </Prose>
      </Section>

      <CounterCase>
        <p>
          <strong>Zonder het AI-verhaal is de propositie minder bijzonder dan we dachten.</strong>{" "}
          &ldquo;Mooie studio die je vroeg laat meekijken en transparant is over geld&rdquo; is een goed
          bedrijf, maar het is geen uitvinding. Het AI-verhaal was wat dit plan spannend maakte — en
          dit hoofdstuk haalt het er precies uit.
        </p>
        <p>
          <strong>&ldquo;Je ziet je eigen huis in week één&rdquo; is nog steeds een AI-claim.</strong> We
          verzwijgen het woord, niet het mechanisme. Een klant die vraagt &ldquo;hoe kan dat zo
          snel?&rdquo; krijgt alsnog het eerlijke antwoord — en dan is de vraag of het weglaten ervan
          eerlijk was of alleen slim.
        </p>
        <p>
          <strong>De hele propositie rust op een pijn die niet is aangetoond.</strong> Hoofdstuk 02
          vond geen enkel Nederlands klantcitaat over &ldquo;ik kon het me niet voorstellen&rdquo;. Als
          die pijn niet bestaat, is &ldquo;je ziet je eigen huis in week één&rdquo; een antwoord op een
          vraag die niemand stelt — en dan blijft alleen transparantie over.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Halen we AI uit de propositie?"
          opties={[
            "Ja — smaak eerst, AI onzichtbaar in de werkplaats",
            "Nee — het is ons enige echte onderscheid, dus vooraan",
            "Halverwege: niet in de kop, wel op de Aanpak-pagina",
          ]}
          advies="Ja, met de Aanpak-pagina als enige uitzondering. Vier onafhankelijke onderzoekssporen komen op dezelfde conclusie uit, en de kosten van ongelijk hebben zijn asymmetrisch: als we het weglaten en het was ons onderscheid, verliezen we scherpte. Als we ermee leiden en het is een commodity, verliezen we de prijs."
          hangtAf="De vijf tot acht klantinterviews uit hoofdstuk 02."
        />
        <Decision
          vraag="Waarmee openen we tegen makelaars?"
          opties={[
            "Met de smaak — zoals bij consumenten",
            "Met de AI-visualisatie voor hun stilstaande panden",
          ]}
          advies="Met de AI-visualisatie. Dit is de scherpste vondst van het hele dossier: voor de consument is de tool gratis, voor de makelaar met een pand van 90 dagen is hij schaars. Zelfde techniek, andere ontvanger, andere waarde. Het opent bovendien precies het kanaal waar de toegang zit."
        />
        <Decision
          vraag="Welke belofte staat er op de homepage?"
          opties={[
            "'Een cocon van verbeelding, doch rust' — de sfeer",
            "'Je ziet je eigen huis in week één' — de methode",
            "Beide: sfeer boven, methode direct eronder",
          ]}
          advies="Beide, in die volgorde. De sfeer doet wat een homepage moet doen — laten voelen dat hier smaak zit. De methode vangt degene die daarna denkt 'mooi, maar hoe begin ik?'. Dat is precies de scheiding tussen aantrekken en overtuigen."
        />
      </Decisions>

      <ChapterCoach slug="positionering" />

      

      <NextPage slug="prijsmodel" title="Prijsmodel & het pad naar €250k" n="05" />
    </>
  );
}
