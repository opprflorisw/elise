import type { Metadata } from "next";
import { PageHead, Section, Prose, CounterCase, Decisions, Decision, NextPage, Thesis, Table, Est } from "@/components/research/Blocks";
import { Pipeline, Owner, type Stage } from "@/components/research/Pipeline";
import { FunnelCalculator } from "@/components/research/Calculators";
import { pageBySlug } from "@/lib/research";

export const metadata: Metadata = { title: "Klantreis & conversie — Dossier" };
const P = pageBySlug("klantreis");

const STAGES: Stage[] = [
  {
    n: "01",
    t: "Ontdekking",
    doel: "Iemand met een huis en een plan ziet werk van de studio en herkent zichzelf erin.",
    eigenaar: ["Elise", "AI"],
    tools: ["Instagram", "Google", "Doorverwijzing", "Content-motor"],
    tijd: "4 u/week totaal",
    detail:
      "Vrijwel niemand koopt een interieurarchitect na één post. Wat de ontdekkingsfase moet doen is smaller: bewijzen dat deze studio een eigen handschrift heeft, en dat het handschrift van jou is. Daarom is het signatuurformaat — foto vooraf, AI-verbeelding, gerealiseerd resultaat — geen marketingtruc maar het product zelf, in het openbaar uitgevoerd.",
    drop: "Mooie beelden zonder plaats of prijsklasse trekken bewonderaars, geen kopers. Elke post moet impliciet zeggen: dit is een stadswoning, dit is een echt budget.",
  },
  {
    n: "02",
    t: "De website",
    doel: "Van 'mooi' naar 'dit kan bij mij' — en dan naar de intake.",
    eigenaar: ["AI"],
    tools: ["/site", "Portfolio", "Aanpak-pagina"],
    tijd: "0 u — draait vanzelf",
    detail:
      "De site heeft één taak: de bezoeker laten begrijpen dat de eerste stap klein is. Niet 'neem contact op voor een vrijblijvend gesprek' (dat kost hen sociale moed), maar 'stuur drie foto's' (dat kost hen twee minuten). De Aanpak-pagina doet het zware werk: die maakt van een dure onbekende dienst een begrijpelijk proces met een zichtbaar einde.",
    drop: "Bezoekers die het prijsniveau niet kunnen inschatten, haken af uit angst. Ergens moet een getal staan.",
  },
  {
    n: "03",
    t: "De intake",
    doel: "Kwalificeren: past dit pand, dit budget en deze mens bij de studio?",
    eigenaar: ["Klant", "AI", "Elise"],
    tools: ["Intakeformulier", "Intake-assistent (LLM)", "Agenda"],
    tijd: "10 min Elise per intake",
    detail:
      "De klant stuurt drie foto's en beantwoordt vijf vragen. De AI structureert dat tot een korte brief, schat de kansrijkheid in (past het budget bij de ambitie? staat het pand in het werkgebied? is de vraag interieur of eigenlijk een aannemersvraag?) en schrijft een conceptantwoord. Elise leest, corrigeert, verstuurt. Zij beslist altijd — de AI stelt alleen voor.",
    drop: "Een te strak formulier schrikt af; een te vaag formulier levert onbruikbare intakes. Vijf vragen is het maximum.",
  },
  {
    n: "04",
    t: "De Verkenning",
    doel: "De klant ziet zijn eigen huis, getransformeerd — en betaalt daarvoor.",
    eigenaar: ["AI", "Elise", "Klant"],
    tools: ["Visualisatie-engine", "Sessie-tool", "Spraak-laag"],
    tijd: "6–8 u Elise",
    detail:
      "Dit is tegelijk het product én het verkoopgesprek, en juist die dubbelrol maakt het krachtig. De klant koopt geen belofte maar een uitkomst: beelden van zijn eigen kamers, een begeleid gesprek, en een visiedocument. Als hij daarna niet verder gaat, heeft hij nog steeds waarde gekregen en heeft de studio betaald gekregen voor de tijd. Er bestaat geen verliesscenario waarin Elise gratis heeft gewerkt.",
    drop: "De grootste val: de klant denkt dat het gegenereerde beeld het ontwerp ís. Vanaf de eerste minuut moet duidelijk zijn dat het beeld een taal is, geen bouwtekening.",
  },
  {
    n: "05",
    t: "Het voorstel",
    doel: "Van sessie naar getekend akkoord, zonder weken stilte.",
    eigenaar: ["AI", "Elise"],
    tools: ["Brief-generator", "Offertesjabloon", "E-sign"],
    tijd: "1–2 u Elise",
    detail:
      "Het voorstel schrijft zichzelf grotendeels: alle reacties en uitspraken uit de sessie zitten al in het systeem, gekoppeld aan de beelden waar ze over gingen. De AI stelt een concept op; Elise cureert. Cruciaal is de snelheid — binnen 48 uur na de sessie, nu het beeld nog gloeit. Een voorstel dat twee weken later komt, concurreert met een afgekoelde herinnering.",
    drop: "Scope die niet dichtgetimmerd is bij het voorstel, wordt later gratis meerwerk.",
  },
  {
    n: "06",
    t: "Ontwerp & levering",
    doel: "Eén uitzonderlijk ontwerp, inclusief materialenlijst en budget.",
    eigenaar: ["Elise", "AI"],
    tools: ["Materialenbibliotheek", "Budget-tool", "Klantportaal"],
    tijd: "40–120 u afhankelijk van pakket",
    detail:
      "Hier verdient de AI zijn plek niet met beelden maar met het onglamoureuze werk: materialenlijsten, hoeveelheden, budgetregels, documentatie. Het ontwerp zelf blijft mensenwerk — dat is precies waarvoor betaald wordt. Het portaal houdt de klant rustig doordat hij zonder te bellen kan zien waar het staat.",
    drop: "Verbouwbegeleiding is waar uren ongemerkt weglopen. Zonder harde afspraken over aantal bouwvergaderingen loopt de marge leeg.",
  },
  {
    n: "07",
    t: "Nazorg & doorvertelling",
    doel: "Eén project omzetten in het volgende project — en in een maand content.",
    eigenaar: ["Elise", "AI"],
    tools: ["Fotoshoot", "Content-motor", "Referral-vraag"],
    tijd: "4–6 u",
    detail:
      "Het premium segment loopt op mond-tot-mondreclame, maar doorverwijzingen komen zelden vanzelf — ze worden gevraagd, op het juiste moment: bij oplevering, als de klant het meest enthousiast is. Tegelijk levert elk project de grondstof voor de content-motor: de vooraf-foto's, de AI-varianten en de eindfotografie zijn samen een maand aan posts. Eén project voedt zo de ontdekkingsfase van het volgende.",
    drop: "Zonder vastgelegde toestemming voor beeldgebruik verdampt het beste marketingmateriaal dat je hebt.",
  },
];

export default function Page() {
  return (
    <>
      <PageHead n={P.n} eyebrow="De machine" title="Van vreemde tot opgeleverd huis" lede={P.lede} />

      <Section title="Het uitgangspunt">
        <Prose>
          <p>
            Een eenpitter kan niet én ontwerpen én verkopen én administreren én zichtbaar zijn — niet
            als elk van die dingen handwerk blijft. De enige manier waarop dit bedrijf werkt, is dat
            de pijplijn zichzelf grotendeels draait en Elise alleen daar staat waar haar oordeel het
            verschil maakt.
          </p>
          <p>
            Daarom is elke stap hieronder toegewezen aan een eigenaar: <Owner who="AI" /> doet het
            voorbereidende en het repeterende, <Owner who="Elise" /> beslist en ontwerpt, en{" "}
            <Owner who="Klant" /> doet meer werk dan hij doorheeft — hij levert namelijk zijn eigen
            brief aan.
          </p>
        </Prose>
        <Thesis>
          De AI schrijft nooit het laatste woord. Zij bereidt voor, ordent en concipieert; Elise
          cureert. Op het moment dat de AI het ontwerp zou bepalen, verkoopt de studio precies dat
          wat iedereen kan namaken.
        </Thesis>
      </Section>

      <Section
        title="De pijplijn"
        intro="Klik een stap open voor het gereedschap, de tijd die het Elise kost en de plek waar het misgaat."
      >
        <Pipeline stages={STAGES} />
      </Section>

      <Section
        title="De rekensom"
        intro="Alle percentages hieronder zijn aannames, geen metingen. Ze staan hier niet om te bewijzen dat het werkt, maar om zichtbaar te maken welke aanname het model draagt — en dus welke we het eerst moeten toetsen."
      >
        <FunnelCalculator
          defaults={{
            bezoekers: 1000,
            naarIntake: 2,
            intakeNaarGesprek: 60,
            gesprekNaarVerkenning: 40,
            verkenningNaarProject: 50,
          }}
        />
        <div className="mt-6">
          <Prose>
            <p>
              De gevoeligste knop is de laatste: <strong>Verkenning → doorlopend project</strong>. Bij
              50% draagt het model; bij 25% verdubbelt het aantal Verkenningen dat nodig is en loopt de
              agenda vol met werk dat nooit doorgroeit. Dit is het ene getal dat de pilotprojecten
              moeten meten <Est />.
            </p>
            <p>
              Let ook op de omgekeerde valkuil. In de deeltijdfase kan Elise ongeveer{" "}
              <strong>één sessie per week</strong> aan. Een trechter die meer aanlevert dan dat is geen
              succes maar een probleem: wachttijd bij een onbewezen studio is de snelste manier om een
              warme lead koud te laten worden. Marketing wordt pas opgevoerd als de capaciteit meegroeit.
            </p>
          </Prose>
        </div>
      </Section>

      <Section title="Wie doet wat, en hoeveel uur kost dat">
        <Table
          head={["Stap", "Eigenaar", "Uur Elise", "Wat AI overneemt"]}
          rows={[
            ["01 Ontdekking", <Owner key="a" who="AI" />, "4 u/week (alle projecten samen)", "Content maken uit bestaand projectmateriaal"],
            ["02 Website", <Owner key="b" who="AI" />, "0", "Draait vanzelf"],
            ["03 Intake", <Owner key="c" who="Elise" />, "10 min", "Kwalificatie + conceptantwoord"],
            ["04 Verkenning", <Owner key="d" who="Elise" />, "6–8 u", "Beeldgeneratie, opname, koppelen van uitspraken aan beelden"],
            ["05 Voorstel", <Owner key="e" who="Elise" />, "1–2 u", "Concept-visiedocument en offerte uit sessiedata"],
            ["06 Ontwerp", <Owner key="f" who="Elise" />, "40–120 u", "Materialenlijst, hoeveelheden, documentatie"],
            ["07 Nazorg", <Owner key="g" who="Elise" />, "4–6 u", "Content-oogst uit het project"],
          ]}
          caption="Urenschattingen zijn modelaannames en moeten na drie pilotprojecten worden vervangen door gemeten tijd."
        />
      </Section>

      <CounterCase>
        <p>
          <strong>De dubbelrol van de Verkenning kan tegen ons werken.</strong> Een product dat
          tegelijk verkoopgesprek is, kan door de klant gelezen worden als een dure offerte. Als de
          markt betaalde discovery niet accepteert, valt de motor onder de trechter weg en staan we met
          een gewone studio die gratis moet pitchen.
        </p>
        <p>
          <strong>Zeven stappen is veel voor één persoon.</strong> Elke stap is een plek waar een lead
          blijft liggen omdat Elise die week een deadline had. Een pijplijn is pas een machine als
          niemand hem hoeft te duwen — en tot de tooling er staat, duwt Elise.
        </p>
        <p>
          <strong>De cijfers hierboven zijn verzonnen.</strong> Ze zijn intern consistent en dat is
          precies het gevaar: een kloppend model voelt als bewijs. Er is nul waarneming onder deze
          trechter tot de eerste pilots draaien.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Communiceren we een prijs op de website?"
          opties={[
            "Nee — prijs pas na het gesprek, zoals de meeste studio's",
            "Ja, alleen de Verkenning (bijv. 'vanaf €1.950')",
            "Ja, een volledige prijsindicatie per pakket",
          ]}
          advies="Toon de prijs van de Verkenning. Dat is precies het middel dat zelfselectie mogelijk maakt zonder de grote projecten te ankeren, en het haalt de spanning uit de eerste stap."
          hangtAf="Of we bereid zijn leads te verliezen die op prijs afhaken — dat is een voordeel, geen verlies."
        />
        <Decision
          vraag="Wat gebeurt er met het bedrag van de Verkenning als de klant doorgaat?"
          opties={[
            "Volledig verrekenen, met een vervaltermijn van 90 dagen",
            "Deels verrekenen (bijv. 50%)",
            "Niet verrekenen — zoals de dichtstbijzijnde comp het bewust doet",
          ]}
          advies="Volledig verrekenen binnen 90 dagen. Bij een verhouding van 1 : 9,5 (€2.000 tegenover €19.000) is de trede dan cognitief gratis, en de vervaltermijn zet druk op de beslissing — wat precies is wat een trage premiumverkoop nodig heeft."
          hangtAf="Zie hoofdstuk 05: de dichtstbijzijnde comp (Ontwerpcheck, €1.450) verrekent bewust níét. Dat is een kans om ons op te onderscheiden, of een waarschuwing dat het niet nodig is."
        />
      </Decisions>

      <NextPage slug="marketing" title="Marketing & kanalen" n="07" />
    </>
  );
}
