import type { Metadata } from "next";
import Link from "next/link";
import {
  PrdHead,
  Flow,
  Waarde,
  Koop,
  Kpis,
  Privacy,
} from "@/components/research/Prd";
import { Section, Prose, CounterCase, Decision, Decisions, Versus, Thesis } from "@/components/research/Blocks";
import { Coach, VerderLezen, Achtergrond } from "@/components/research/Coach";
import { VisualisatieDemo } from "@/components/research/demos/Visualisatie";

export const metadata: Metadata = { title: "Visualisatie-engine — Verstelle OS" };

export default function Page() {
  return (
    <>
      <PrdHead
        n="01"
        naam="Visualisatie-engine"
        oneliner="Klantfoto's in, varianten van hún eigen kamer in het Verstelle-handschrift uit."
        verdict="hybride"
        bouwtijd="deels gebouwd — de DNA-promptlaag draait al"
        eigenaars={["AI", "Elise"]}
      />

      <Section title="Het probleem">
        <Prose>
          <p>
            Een klant kan zijn eigen huis niet anders zien dan zoals het nu is. Dat is geen gebrek
            aan verbeelding maar een eigenschap van huizen: je woont erin. Elk gesprek begint
            daarom met &ldquo;stel je voor dat deze muur weg is&rdquo;, en dat werkt niet — niet
            bij een verbouwing van anderhalve ton, waar twijfel de duurste emotie is.
          </p>
          <p>
            De engine draait dat om. Niet &ldquo;stel je voor&rdquo;, maar <strong>kijk maar</strong>.
            Niet een mooie kamer uit een tijdschrift, maar jóuw kamer, anders.
          </p>
        </Prose>
      </Section>

      <Section title="Voor wie">
        <Prose>
          <p>
            <strong>Primair: Elise.</strong> Dit is haar gereedschap, niet dat van de klant. Zij
            genereert, zij verwerpt, zij kiest wat er op tafel komt. De klant ziet nooit een
            ongefilterde uitvoer — dat is precies het verschil met een gratis app.
          </p>
          <p>
            <strong>Secundair: de klant</strong>, en pas in{" "}
            <Link href="/research/klantreis" className="r-link">
              stap 4 van de klantreis
            </Link>{" "}
            — de betaalde Verkenning. Nooit eerder. Beeld weggeven vóór er betaald is, maakt het
            beeld het product; en het beeld is niet het product.
          </p>
        </Prose>
        <Thesis>
          De AI is een lens, geen ontwerper. Wie de lens verkoopt, verkoopt iets dat €99 kost.
        </Thesis>
      </Section>

      <Section title="Wat het doet">
        <Flow
          stappen={[
            { t: "Klant uploadt drie foto's bij de intake", wie: "Klant" },
            { t: "Foto's door de DNA-promptlaag (bestaat al: tools/gemini.mjs)", wie: "AI" },
            { t: "Elise kiest de accenten per ruimte — het handschrift stuurt de generatie", wie: "Elise" },
            { t: "Per ruimte 3–5 varianten genereren", wie: "AI" },
            { t: "Geometrie-controle: is dit nog hún kamer?", wie: "Elise" },
            { t: "Elise selecteert en verwerpt — nooit ongefilterd naar de klant", wie: "Elise" },
            { t: "Geselecteerde beelden landen in de sessie", wie: "AI" },
          ]}
        />
      </Section>

      <Section title="Toegevoegde waarde">
        <Waarde
          uren="≈ 6 u"
          perWat="bespaard per Verkenning"
          toelichting="Het handmatige alternatief is een moodboard plus 3D-werk of een ingehuurde visualisatiepartij: dagen werk, of honderden euro's per beeld, en pas ná het ontwerp. De engine levert vóór het ontwerp, in minuten, voor centen. Dat verandert niet alleen de kosten maar de volgorde van het hele proces: het gesprek gaat over beelden in plaats van over woorden."
          zonder="Elise praat, de klant knikt, en pas bij oplevering blijkt of ze hetzelfde bedoelden. Dat is precies de klacht die het onderzoek in de forums terugvond — alleen dan over architecten."
        />
      </Section>

      <Section title="MVP-scope">
        <Versus
          leftTitle="Wel in de MVP"
          rightTitle="Bewust niet"
          left={[
            "Klantfoto + DNA-prompt → varianten (de promptlaag bestaat al)",
            "Elise kiest 2 accenten per serie",
            "Geometrie-checklist als handmatige stap vóór de klant",
            "Handmatige selectie — geen automatiek",
          ]}
          right={[
            "Depth-conditionering (het vangnet — pas als geometrie écht breekt)",
            "Live genereren tíjdens de sessie (kostenrisico: onbekend aantal beelden)",
            "Klant genereert zelf — dan is het een speeltje, geen methode",
            "4K-finals voor alles; alleen voor wat de klant houdt",
          ]}
        />
      </Section>

      <Section
        title="De demo"
        intro="Vier stappen, van telefoonfoto tot vastgelegde voorkeur. De vierde variant is met opzet mislukt — dat is geen bug in de demo maar de kern van het risico."
      >
        <VisualisatieDemo />
      </Section>

      <Section title="Data & privacy">
        <Privacy
          gegevens={[
            "Foto's van het interieur van een woning",
            "Adres/pandgegevens uit de intake",
            "Voorkeuren gekoppeld aan een persoon",
          ]}
          bewaren="Beelden zolang het project loopt + de portfolio-termijn na expliciete toestemming. Foto's van een woning zijn persoonsgegevens zodra ze aan een klant hangen."
          let="de huidige endpoint is de globale AI-Studio-endpoint — er is dus géén EU-dataresidentie. Voor een studio die een EU-verhaal wil voeren is dat een inconsistentie; migratie naar Vertex AI EU-regio staat als actie open."
        />
      </Section>

      <Section
        title="Koop-alternatieven"
        intro="Het model kópen we. Alles hierboven — het DNA, de selectie, de controle — is de bouwkant. Prijzen geverifieerd 16-07-2026; herverifieer voor een echte inkoopbeslissing."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Koop
            gekozen
            naam="Gemini 3 Pro Image"
            prijs="$0,134 / beeld"
            url="https://ai.google.dev/gemini-api/docs/pricing"
            wat="Begrijpt de DNA-prompt het best en fuseert referentiebeelden het sterkst. Draait al: alle beelden op deze site komen eruit. €7,02 aan beeld per Verkenning."
            oordeel="Blijven — de kwaliteit is echte waarde en €8 per sessie is geen probleem. Maar: globale endpoint, dus geen EU-residentie, en het model is een preview-naam die kan verdwijnen."
          />
          <Koop
            naam="FLUX.2 [pro] edit"
            prijs="$0,045 / beeld"
            url="https://docs.bfl.ml/quick_start/pricing"
            wat="Drie keer goedkoper. Duits bedrijf (Freiburg), open weights voor de klein-variant, en — belangrijker — expliciete depth-conditionering: de geometrie wordt een invoerkanaal in plaats van een hoop."
            oordeel="Het tweede spoor. Niet overstappen om de kosten (dat scheelt €4,66 op €2.000). Wel klaarhouden voor de dag dat een klant zegt: dit is mijn kamer niet."
          />
          <Koop
            naam="Interior AI / RoomGPT / Decor8"
            prijs="$15–199 / mnd"
            url="https://interiorai.com/"
            wat="Interieur-specifieke AI met stijl-presets: 'Scandinavisch', 'Modern', 'Minimalistisch'. Gebouwd voor makelaars die een leeg huis willen stofferen."
            oordeel="Afgewezen, en niet omdat ze slecht zijn. Hun product ís een dropdown met 'Scandinavian' — precies de stijl die het DNA expliciet afwijst. Dit is niet kopen in plaats van bouwen; dit is het verkeerde product kopen."
          />
          <Koop
            naam="Midjourney"
            prijs="$10–120 / mnd"
            wat="Mooiste beelden van het veld, geen publieke API."
            oordeel="Gediskwalificeerd. De voorwaarden verbieden automatisering en wrapper-accounts worden geband. Onbruikbaar in een pipeline, hoe mooi het ook is."
          />
        </div>
      </Section>

      <Section title="Afhankelijkheden">
        <Prose>
          <p>
            Deze tool staat aan het begin van de keten en hangt daarom nergens van af — behalve van
            de intake, die de foto&rsquo;s binnenhaalt. Alles ná deze tool hangt wél van háár af:{" "}
            <Link href="/research/tools/sessie" className="r-link">
              de sessie-tool
            </Link>{" "}
            toont haar beelden,{" "}
            <Link href="/research/tools/spraak" className="r-link">
              de spraaklaag
            </Link>{" "}
            koppelt uitspraken aan haar beeld-ID&rsquo;s, en{" "}
            <Link href="/research/tools/brief" className="r-link">
              de brief-generator
            </Link>{" "}
            citeert eruit. Als de geometrie hier breekt, breekt de hele keten.
          </p>
        </Prose>
      </Section>

      <Section title="KPI's">
        <Kpis
          items={[
            { kpi: "Geometrie-acceptatie", meet: "% varianten dat door de checklist komt zonder hergenereren. Onder de 60% is depth-conditionering geen optie meer maar een noodzaak." },
            { kpi: "Beelden per Verkenning", meet: "De enige variabele die de kostenconclusie kan kantelen. Aanname: 40–80. Meet het bij sessie 1." },
            { kpi: "Uren van foto tot selectie", meet: "Doel: onder de 2 uur. Boven de 4 is de tool een hobby." },
          ]}
        />
      </Section>

      <CounterCase>
        <p>
          <strong>Geometrie-behoud is geen eigenschap van dit model — het is geluk.</strong> Gemini
          houdt geen persistent 3D-geheugen bij; elk beeld wordt opnieuw verzonnen vanuit een
          controlbeeld. Google&rsquo;s eigen advies is veelzeggend: draai er twee of drie en kies de
          beste. De hele propositie hangt aan &ldquo;dít is jóuw kamer&rdquo;, en dat is precies
          wat niemand garandeert. Kijk naar variant A in de demo: twee ramen kloppen, lijstwerk
          klopt — en tóch is het plafond stilletjes gegroeid.
        </p>
        <p>
          <strong>Dit is beredeneerd, niet gemeten.</strong> Het bewijs voor &ldquo;Gemini heeft geen
          3D-geheugen&rdquo; is één academische paper die het model als baseline gebruikt. Het is
          goed mogelijk dat het in de praktijk prima gaat en de hele depth-route overbodig is. Dat
          hoort getest te worden op één echte kamer, niet uitgediscussieerd.
        </p>
        <p>
          <strong>De klant kan het beeld voor het ontwerp aanzien.</strong> Een render die te mooi
          is, schept een verwachting die een aannemer niet kan waarmaken. Elk beeld dat de deur
          uitgaat, heeft een gesprek nodig — nooit een bijlage in een mail. Dat kost Elise tijd, en
          tijd is het enige wat schaars is.
        </p>
      </CounterCase>

      <Coach
        doen={[
          {
            taak: "Draai je eigen woonkamer door de engine — één foto, drie varianten — en leg de checklist ernaast. Klopt de geometrie? Dít is de test die het hele dossier niet kon doen.",
            tijd: "1 avond",
          },
          {
            taak: "Probeer RoomGPT of Interior AI op diezelfde foto en noteer precies waar het faalt. Je moet kunnen uitleggen waarom jouw €2.000 anders is dan hun €15.",
            tijd: "30 min",
          },
          {
            taak: "Tel bij je eerste echte sessie hoeveel beelden je werkelijk genereert. De aanname is 40–80; als het er 300 zijn, klopt de kostenrekening niet meer.",
            tijd: "meelopen",
          },
        ]}
        denken={[
          "Wat doe je op het moment dat een klant zegt: 'mooi, maar dit is mijn huis niet'? Dat antwoord moet je vóór de eerste sessie hebben, niet erin.",
          "Laat je de mislukte variant zien aan de klant, of houd je hem achter? Het eerste bouwt vertrouwen en verkoopt jouw oog. Het tweede is veiliger.",
          "Als het model morgen verdwijnt of verdubbelt in prijs — wat is dan je plan? En hoeveel is dat plan waard bij €8 per sessie?",
          "Wat als de beelden té goed worden? Waar zit jouw waarde nog als de klant ze zelf kan maken?",
        ]}
      />

      <VerderLezen
        items={[
          {
            titel: "Gemini API — prijzen",
            url: "https://ai.google.dev/gemini-api/docs/pricing",
            waarom: "De bron onder $0,134/beeld. Controleer 'm op je eigen datum: deze modellenlijn beweegt sneller dan dit dossier.",
          },
          {
            titel: "Black Forest Labs — FLUX prijzen & docs",
            url: "https://docs.bfl.ml/quick_start/pricing",
            waarom: "Het tweede spoor: 3× goedkoper, Duits, en met echte depth-control.",
          },
          {
            titel: "Interior AI",
            url: "https://interiorai.com/",
            waarom: "Kijk zelf waarom stijl-presets het verkeerde product zijn — en waarom deze markt tóch bestaat.",
          },
          {
            titel: "Chaos Veras",
            url: "https://www.chaos.com/veras",
            waarom: "De professionele tegenhanger: rendert vanuit het échte SketchUp/Revit-model, dus geometrie kán niet driften. Het serieuze alternatief als jouw route breekt.",
          },
        ]}
      />

      <Decisions>
        <Decision
          vraag="Wanneer stappen we over op depth-conditionering?"
          opties={[
            "Nu bouwen als vangnet — voordat er een klant is",
            "Pas als de geometrie-acceptatie onder de 60% zakt",
            "Nooit — kies dan Chaos Veras en een echt 3D-model",
          ]}
          advies="Wachten, maar meten. Bouw het niet vooruit: het is een oplossing voor een probleem dat nog niet gemeten is. Zet wél de KPI aan vanaf sessie 1, en houd FLUX werkend als tweede spoor."
          hangtAf="De uitkomst van één echte test op één echte kamer."
        />
        <Decision
          vraag="Laten we de mislukte varianten zien?"
          opties={[
            "Ja — het bouwt vertrouwen en het verkoopt Elise's oog",
            "Nee — het ondermijnt de magie",
            "Alleen als de klant er zelf naar vraagt",
          ]}
          advies="Ja, en maak er een moment van. Nul van de 25 concurrenten laat zien hoe ze werken. Een studio die durft te zeggen 'deze klopt niet, kijk maar waarom' verkoopt precies het oordeelsvermogen waar de klant voor betaalt."
          hangtAf="Of Elise zich comfortabel voelt bij het tonen van eigen missers."
        />
      </Decisions>

      <Achtergrond notes={["tools-buildvsbuy"]} />

      <div className="mt-8">
        <Link href="/research/tools/sessie" className="group flex items-end justify-between gap-6 border-t border-[var(--line-2)] pt-7">
          <div>
            <p className="r-eyebrow opacity-50">Volgende tool</p>
            <p className="r-display-l mt-1.5 transition-opacity group-hover:opacity-60">Sessie-tool</p>
          </div>
          <span className="r-numeral text-[2rem] opacity-25">02</span>
        </Link>
      </div>
    </>
  );
}
