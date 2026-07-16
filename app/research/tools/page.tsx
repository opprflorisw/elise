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
  Versus,
  Est,
} from "@/components/research/Blocks";
import { ToolGrid, SystemDiagram, type Tool } from "@/components/research/Tools";
import { pageBySlug } from "@/lib/research";

export const metadata: Metadata = { title: "Het gereedschap — Dossier" };
const P = pageBySlug("tools");

const TOOLS: Tool[] = [
  {
    n: "01",
    id: "visualisatie",
    naam: "Visualisatie-engine",
    kern: "Klantfoto's in, ontwerpvarianten in het Verstelle-handschrift uit.",
    verdict: "bestaat al",
    bouwtijd: "deels gebouwd",
    doel:
      "De motor onder de hele methode. Neemt drie foto's van een bestaande ruimte en levert varianten van diezelfde ruimte in het handschrift van de studio. Het verschil met een willekeurige AI-tool zit niet in het model maar in de prompt-laag: het gecodificeerde ontwerp-DNA dat elke generatie stuurt.",
    flow: [
      "Klant uploadt drie foto's bij de intake",
      "Foto's door de DNA-promptlaag (bestaat: tools/gemini.mjs)",
      "Per ruimte 3–5 stijlrichtingen genereren",
      "Elise selecteert en verwerpt — nooit ongefilterd naar de klant",
      "Geselecteerde beelden landen in de sessie",
    ],
    mvp:
      "Bestaat al in ruwe vorm: de DNA-prompt en de batch-generator draaien en hebben alle beelden op deze site gemaakt. Wat ontbreekt is de koppeling aan een klantfoto in plaats van een tekstprompt.",
    moeilijk: [
      "Geometrie: het model verzint de ruimte deels opnieuw — het is geen render van dít huis",
      "Verwachtingsmanagement: klant kan denken dat het beeld het ontwerp is",
      "Stijlconsistentie over een hele serie bewaken",
      "Maakbaarheid: een mooi beeld kan bouwkundige onzin zijn",
    ],
    voordeel:
      "Dit is wat het gesprek verandert van 'stel je voor…' naar 'kijk maar'. Het verkort de weg naar vertrouwen van maanden naar dagen.",
    afhankelijk: "De keuze van het beeldmodel — zie het onderzoek in hoofdstuk 09.",
  },
  {
    n: "02",
    id: "sessie",
    naam: "Sessie-tool",
    kern: "De reis die Elise doorliep, maar dan per klant en per project.",
    verdict: "bouwen",
    bouwtijd: "prototype bestaat",
    doel:
      "Precies de applicatie waar dit dossier in staat: beelden tonen, reageren, kiezen, opmerkingen achterlaten, en alles exporteren. Het prototype is af en bewezen — Elise heeft er 56 reacties in achtergelaten. Wat resteert is het generaliseren van één hardgecodeerde reis naar project-instanties per klant.",
    flow: [
      "Elise maakt een projectinstantie aan en laadt de geselecteerde beelden",
      "Klant krijgt een privélink",
      "Klant reageert per beeld: mooi / niet ik / opmerking",
      "Alles wordt vastgelegd met tijdstempel",
      "Export naar de brief-generator",
    ],
    mvp:
      "Het bestaande journey-codebase met een projecttabel eronder: één reis wordt veel reizen. Auth kan eerst simpelweg een geheime link zijn — dit is geen bankieren.",
    moeilijk: [
      "Van eenmalig naar multi-tenant: datamodel, beeldbeheer, toegang",
      "Beeldopslag en -levering per klant",
      "Wie mag wat zien — partners van klanten willen ook meekijken",
    ],
    voordeel:
      "Het grootste stuk werk is al gedaan en al gevalideerd door de enige gebruiker die telt. Dit is geen gok maar een verbouwing.",
  },
  {
    n: "03",
    id: "spraak",
    naam: "Spraak-laag",
    kern: "Het gesprek opnemen en de zachte meningen koppelen aan het juiste beeld.",
    verdict: "kopen + koppelen",
    bouwtijd: "2–4 avonden",
    doel:
      "Het onderdeel dat Elise er zelf uitpikte als het meest waardevolle. Klikken vertelt de helft; de andere helft zit in wat mensen zéggen terwijl ze kijken. De opname loopt tijdens de sessie, transcriptie en koppeling gebeuren erna: elke uitspraak belandt bij het beeld dat op dat moment op het scherm stond.",
    flow: [
      "Opname start na expliciete toestemming — altijd zichtbaar dat er opgenomen wordt",
      "Sessie-tool logt welk beeld wanneer in beeld was",
      "Na afloop: transcriptie met sprekerherkenning",
      "LLM koppelt uitspraken via tijdstempels aan beelden",
      "Elise ziet per beeld: de klik én het citaat",
    ],
    mvp:
      "Nepdata volstaat om het te bewijzen: een bestaand transcript plus een tijdlijn van beelden, en de koppeling laten zien. De vraag is niet of het technisch kan, maar of het lezen ervan Elise echt helpt.",
    moeilijk: [
      "AVG: opnemen mag niet stilzwijgend — toestemming moet vastgelegd zijn",
      "Nederlandse spraakherkenning met twee sprekers door elkaar",
      "Koppeling uitspraak↔beeld is fragiel als het gesprek terugspringt",
      "Bewaartermijn: een opname van iemands huiskamer is gevoelig materiaal",
    ],
    voordeel:
      "Dit is het stuk dat niemand anders doet en dat de dataset opbouwt die op termijn een echte voorsprong is. Bovendien: Elise hoeft niet te notuleren terwijl ze ontwerpt.",
    afhankelijk: "De AVG-consentflow — zie hoofdstuk 10.",
  },
  {
    n: "04",
    id: "brief",
    naam: "Brief-generator",
    kern: "Sessiedata in, visiedocument plus moodboard en palet uit.",
    verdict: "bouwen",
    bouwtijd: "2–3 avonden",
    doel:
      "De klant heeft tijdens de sessie zonder het te weten zijn eigen briefing geschreven. De generator giet die reacties en uitspraken in een leesbaar document: wat wil deze klant, waarom, en wat betekent dat voor het ontwerp. Elise cureert altijd — dit levert een concept, geen eindproduct.",
    flow: [
      "Sessie-export als JSON in",
      "LLM ordent naar thema's: ruimte, materiaal, kleur, licht, bezwaren",
      "Sjabloon vult zich met citaten van de klant zelf",
      "Elise herschrijft en tekent",
      "Document naar het portaal",
    ],
    mvp:
      "Draaien op de bestaande export van Elise's eigen reis — die 56 reacties zijn een perfecte testset. Als het daaruit een goed leesbaar visiedocument maakt, werkt het.",
    moeilijk: [
      "Kwaliteit borgen: een generiek document is erger dan geen document",
      "De toon van de studio in AI-tekst krijgen zonder dat het gelikt wordt",
    ],
    voordeel:
      "Bespaart per project uren, en — belangrijker — het document citeert de klant tegen zichzelf. Dat maakt akkoord geven makkelijk.",
  },
  {
    n: "05",
    id: "budget",
    naam: "Budget & materialen",
    kern: "Van ontwerp naar materialenlijst en budgetindicatie.",
    verdict: "bouwen",
    bouwtijd: "4–6 avonden",
    doel:
      "Elise noemde dit zelf als sluitstuk van haar proces: het einddesign inclusief budget en materialenlijst. Dit is ook de tool die op termijn de meeste eigen data opbouwt — elke afgeronde verbouwing maakt de prijsindicaties scherper. Dat is een bezit dat een kopieerder niet heeft.",
    flow: [
      "Gecureerde bibliotheek van circa honderd Verstelle-materialen met prijsranges",
      "Ontwerp koppelt materialen aan vlakken en stuks",
      "LLM stelt hoeveelheden voor",
      "Elise corrigeert — altijd",
      "Lijst plus budgetindicatie naar het portaal",
    ],
    mvp:
      "Begin bij de bibliotheek, niet bij de software: honderd materialen met leverancier en prijsrange in een simpele tabel is al waardevol zonder één regel code.",
    moeilijk: [
      "Prijzen verouderen snel; een verkeerde indicatie is erger dan geen",
      "Aansprakelijkheid: een budget dat de klant als toezegging leest",
      "De bibliotheek onderhouden kost tijd die niemand heeft",
    ],
    voordeel:
      "Dit is de plek waar de compounding dataset ontstaat. Na twintig projecten weet deze studio wat dingen echt kosten — dat is niet te kopiëren met een prompt.",
  },
  {
    n: "06",
    id: "portaal",
    naam: "Klantportaal",
    kern: "Eén plek per project: beelden, keuzes, planning, budget, documenten.",
    verdict: "kopen",
    bouwtijd: "onderzoek eerst",
    doel:
      "Elise koos het portaal expliciet als gewenste functie. Het houdt klanten rustig — ze kunnen zien waar het staat zonder te bellen — en het verhoogt de overstapdrempel. Maar het is ook de klassieke valkuil: een eigen portaal bouwen kost een eenpitter maanden onderhoud voor iets dat te koop is.",
    flow: [
      "Project aanmaken",
      "Beelden en documenten publiceren",
      "Klant ziet status, planning en budget",
      "Klant reageert in context",
      "Alles blijft bewaard als projectdossier",
    ],
    mvp:
      "Geen software: een gedeelde map plus een strak sjabloon bewijst de behoefte. Pas bouwen of kopen als drie klanten erom vragen.",
    moeilijk: [
      "Onderhoud is oneindig en onzichtbaar",
      "Verwachtingen: een portaal suggereert realtime, Elise werkt in blokken",
      "Beveiliging van privéfoto's van andermans huis",
    ],
    voordeel:
      "Rust bij de klant, minder telefoontjes, en een projectdossier dat later marketingmateriaal blijkt te zijn.",
    afhankelijk: "De build-vs-buy-uitkomst in hoofdstuk 09.",
  },
  {
    n: "07",
    id: "ops",
    naam: "Studio-operatie",
    kern: "CRM-light, offertes, facturen, planning.",
    verdict: "kopen",
    bouwtijd: "1 avond koppelen",
    doel:
      "Het onglamoureuze werk dat als eenpitter je ontwerptijd opslokt. Hier is de aanbeveling categorisch: niets zelf bouwen. Dit is opgelost, het is goedkoop, en elk uur dat hieraan besteed wordt is een uur niet ontwerpen.",
    flow: [
      "Boekhoudpakket voor facturen en BTW-aangifte",
      "Agenda-tool voor het inplannen van sessies",
      "AI schrijft concepten voor offertes en mails",
      "Elise controleert en verstuurt",
    ],
    mvp: "Kopen en aanzetten. De enige bouwvraag is of de sessie-tool een factuur mag aanmaken.",
    moeilijk: ["Discipline — de tool werkt alleen als hij gevoed wordt", "Koppelingen tussen losse pakketten"],
    voordeel: "Meteen tijdwinst, geen onderhoud, geen risico.",
  },
  {
    n: "08",
    id: "intake",
    naam: "Intake-assistent",
    kern: "Website-intake naar gekwalificeerde brief en agenda-afspraak.",
    verdict: "bouwen",
    bouwtijd: "1–2 avonden",
    doel:
      "Het formulier staat al live op /site. Wat ontbreekt is de laag erachter: de AI die de intake structureert, inschat of het past, en een conceptantwoord schrijft. Elise beslist, maar hoeft niet te beginnen met een leeg scherm.",
    flow: [
      "Klant vult vijf vragen in en uploadt drie foto's",
      "LLM structureert tot een korte brief",
      "Kansrijkheid inschatten: budget, werkgebied, type vraag",
      "Conceptantwoord klaarzetten",
      "Elise keurt goed of past aan",
    ],
    mvp: "Het bestaande formulier plus één LLM-aanroep. Dit is de goedkoopste tool in de lijst en scheelt direct tijd.",
    moeilijk: [
      "Toon: een afwijzing van een AI voelt anders dan van een mens",
      "Te streng kwalificeren kost klanten die je niet zag aankomen",
    ],
    voordeel: "Elke intake kost tien minuten in plaats van een half uur, en niets blijft liggen.",
  },
];

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="De machine"
        title="Verstelle OS"
        lede="Acht tools, één systeem, één persoon aan het roer. De vraag bij elk stuk is niet 'kan het?' maar 'moet Elise dit bezitten?'"
      />

      <Section title="De regel">
        <Prose>
          <p>
            De schaarste in dit bedrijf is niet geld en niet techniek — het is de tijd van één mens.
            Elk stuk software dat gebouwd wordt, moet daarna ook onderhouden worden, en dat onderhoud
            komt uit dezelfde uren als het ontwerpen. Daarom geldt bij elke tool dezelfde volgorde:
            eerst kijken of het te koop is, dan of het met nepdata al bewezen kan worden, en pas dan
            bouwen.
          </p>
          <p>
            Er is één uitzondering, en die is principieel: alles wat het{" "}
            <strong>handschrift of de dataset</strong> raakt, bouwen we zelf. Dat is namelijk precies
            wat we verkopen. Een gekocht portaal is inwisselbaar; een gekochte smaak bestaat niet.
          </p>
        </Prose>
        <Thesis>
          Koop wat iedereen heeft. Bouw alleen wat alleen wij kunnen hebben.
        </Thesis>
      </Section>

      <Section
        title="Het systeem als één ruggengraat"
        intro="Geen acht losse tools maar één datamodel in de bestaande applicatie. Elke tool is een venster op dezelfde gegevens — dat is wat het voor één persoon behapbaar houdt."
      >
        <SystemDiagram />
        <div className="mt-6">
          <Prose>
            <p>
              De schakel in het midden — <strong>Reacties</strong> — is het hart. Daar komen de klik
              en het citaat samen, en daar ontstaat het bezit dat zich opstapelt. Elke sessie maakt de
              volgende beter: welke stijlrichtingen worden gekozen, welke woorden gebruiken mensen als
              iets niet klopt, welke materialen komen steeds terug. Een kopieerder begint dat morgen
              op nul.
            </p>
          </Prose>
        </div>
        <div className="mt-8">
          <Versus
            leftTitle="Bouwen — dit is het bezit"
            rightTitle="Kopen — dit is inwisselbaar"
            left={[
              "Visualisatie-engine met het DNA erin",
              "Sessie-tool (het prototype draait al)",
              "Brief-generator op eigen sessiedata",
              "Materialen- en budgetbibliotheek",
              "Intake-assistent",
            ]}
            right={[
              "Boekhouding, facturen, BTW",
              "Agenda en afspraken",
              "E-sign voor offertes",
              "Klantportaal — tenzij onderzoek anders wijst",
              "Transcriptie (dienst afnemen, niet zelf draaien)",
            ]}
          />
        </div>
      </Section>

      <Section
        title="De acht tools"
        intro="Klik open voor de kernflow, de MVP met nepdata, de moeilijkheden en de reden waarom het de moeite waard is."
      >
        <ToolGrid tools={TOOLS} />
      </Section>

      <Section title="Wat we bewust niet bouwen">
        <Prose>
          <p>
            Een 3D-configurator waarin de klant zelf meubels sleept. Een marktplaats voor
            leveranciers. Een app. Een tool die het ontwerp genereert in plaats van visualiseert. Een
            eigen boekhoudkoppeling. Ieder van deze klinkt logisch en is de kortste weg naar een
            eenpitter die softwarebedrijfje speelt in plaats van interieurs maakt.
          </p>
          <p>
            En de belangrijkste: <strong>geen AI die naar de klant praat zonder Elise ertussen</strong>
            . Op het moment dat de klant merkt dat hij met een machine onderhandelt over zijn huis,
            verdwijnt precies de reden waarom hij premium betaalt <Est />.
          </p>
        </Prose>
      </Section>

      <CounterCase>
        <p>
          <strong>Acht tools is een productplan, geen studioplan.</strong> Zelfs met AI-assistentie is
          dit maanden avondwerk. Elke avond aan software is een avond niet aan portfolio, en een
          studio zonder portfolio heeft geen tools nodig — die heeft klanten nodig.
        </p>
        <p>
          <strong>De volgorde kan fataal zijn.</strong> De verleiding is om te bouwen omdat bouwen
          leuker is dan bellen. De eerste drie klanten horen volledig handmatig bediend te worden;
          pas als hetzelfde handwerk voor de derde keer pijn doet, is het een tool waard.
        </p>
        <p>
          <strong>Wij bouwen dit, niet Elise.</strong> Zolang Floris de bouwer is, is de tooling een
          afhankelijkheid van één persoon die geen aandeel in de studio heeft. Dat moet expliciet
          geregeld worden voordat er meer gebouwd wordt — niet erna.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Wat bouwen we het eerst?"
          opties={[
            "Sessie-tool generaliseren — het prototype staat al",
            "Intake-assistent — goedkoopste tijdwinst",
            "Niets: eerst drie klanten volledig handmatig bedienen",
          ]}
          advies="Niets bouwen tot er drie pilotklanten door de methode zijn geloodst met de hand. Daarna de sessie-tool, omdat die dan al bewezen is."
          hangtAf="Of er pilotklanten beschikbaar zijn in Elise's netwerk."
        />
        <Decision
          vraag="Van wie is de tooling?"
          opties={[
            "Van de studio — Floris bouwt en draagt over",
            "Van Floris — de studio neemt het af",
            "Gedeeld eigendom in een aparte entiteit",
          ]}
          advies="Nu vastleggen, wat het antwoord ook is. Dit is de klassieke manier waarop vriendschappelijke samenwerkingen twee jaar later klappen — en het kost vandaag één gesprek."
          hangtAf="Of de tooling ooit aan andere studio's verkocht zou worden."
        />
      </Decisions>

      <NextPage slug="kosten" title="Kosten & marge" n="09" />
    </>
  );
}
