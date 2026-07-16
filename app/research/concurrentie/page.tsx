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
  Versus,
} from "@/components/research/Blocks";
import { Figure, PositioningMap } from "@/components/research/Charts";
import { pageBySlug } from "@/lib/research";

export const metadata: Metadata = { title: "De concurrentie — Dossier" };
const P = pageBySlug("concurrentie");

const POINTS = [
  { label: "Studio Verstelle", x: 82, y: 90, us: true },
  { label: "Framework Studio", x: 10, y: 92 },
  { label: "Nicemakers", x: 12, y: 88 },
  { label: "Bricks Studio", x: 15, y: 86 },
  { label: "Studio Modijefsky", x: 18, y: 85 },
  { label: "Kate Hume Design", x: 10, y: 84 },
  { label: "Studio Janne Wellens", x: 30, y: 78 },
  { label: "Studio Wendy Mahieu", x: 22, y: 76 },
  { label: "Remy Meijers", x: 12, y: 75 },
  { label: "Studio Michiel Wijnen", x: 22, y: 74 },
  { label: "Studio Piet Boon", x: 15, y: 72 },
  { label: "Atelier ND Interior", x: 35, y: 72 },
  { label: "Standard Studio", x: 25, y: 70 },
  { label: "Studio Francis", x: 25, y: 68 },
  { label: "Studio Ard Hoksbergen", x: 20, y: 66 },
  { label: "Studio RUIM", x: 25, y: 64 },
  { label: "Noctum", x: 28, y: 62 },
  { label: "AMstudio", x: 30, y: 60 },
  { label: "Atelier Perspective", x: 35, y: 58 },
  { label: "Lagrand Interior Design", x: 25, y: 58 },
  { label: "Studio Reinder Veenstra", x: 48, y: 58 },
  { label: "Masters of Interior Design", x: 30, y: 55 },
  { label: "HEYLIGERS architects", x: 25, y: 55 },
  { label: "BNLA Architecten", x: 35, y: 52 },
  { label: "COAST Architecten", x: 32, y: 50 },
  { label: "Buro Maak", x: 45, y: 48 },
  { label: "Estetica Design & Build", x: 55, y: 35 },
  { label: "MB Bouw & Design", x: 58, y: 25 },
  { label: "PD Interieurontwerp", x: 72, y: 38 },
  { label: "Stijlidee", x: 75, y: 30 },
  { label: "HUIZ design", x: 70, y: 35 },
  { label: "Klein Ontwerp Studio", x: 74, y: 28 },
  { label: "Decorilla", x: 68, y: 32 },
  { label: "Havenly", x: 72, y: 25 },
  { label: "Aanhuis.nl", x: 78, y: 18 },
  { label: "IKEA Interieuradvies", x: 85, y: 12 },
  { label: "IKEA Kreativ", x: 88, y: 10 },
  { label: "Keukenshowrooms", x: 80, y: 10 },
  { label: "BoConcept RoomPlanner", x: 76, y: 22 },
  { label: "Interior AI", x: 90, y: 15 },
  { label: "RoomGPT", x: 92, y: 12 },
  { label: "Coohom", x: 86, y: 18 },
  { label: "Floorplanner", x: 88, y: 8 },
];

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Fundament"
        title="Iedereen zwijgt over de prijs"
        lede="25 premium studio's onderzocht. Geen enkele publiceert een bedrag, een pakket of een stappenplan. Dat is geen toeval — en het is onze goedkoopste kans."
      />

      <Section title="Wat er te zien is">
        <StatRow>
          <Stat value="0 van 25" label="Premium studio's met een prijs op de site" sub="Geen bedrag, geen pakket, geen minimumbudget, geen stappenplan" accent="var(--critical)" conf="hoog" />
          <Stat value="€10k" label="De breuklijn" sub="Daaronder noemt iedereen exacte bedragen. Daarboven: 'neem contact op'." conf="hoog" />
          <Stat value="83K" label="Instagram-volgers Framework Studio" sub="Tegenover Nicemakers 36K, Modijefsky 18K, Bricks 2,85K" conf="hoog" />
          <Stat value="73%" label="Opgeleverd op tijd én budget" sub="Was 85% in 2021 — Exact MKB Barometer 2023" accent="var(--serious)" conf="hoog" />
        </StatRow>

        <div className="mt-8">
          <Prose>
            <p>
              De markt onder de €10.000 is volledig transparant: Stijlidee noemt €450–1.500, PD
              Interieurontwerp €750–3.650, IKEA vraagt €299 voor compleet interieuradvies. Boven de
              €10.000 valt een gordijn. Vijfentwintig van de vijfentwintig doen hetzelfde.
            </p>
            <p>
              Dat is precies wat een kuddereflex is: iedereen doet het omdat iedereen het doet. Het
              wordt uitgelegd als &ldquo;passend bij premium&rdquo;, maar het is vooral makkelijk — een
              prijs noemen dwingt je te verdedigen waarom je die waard bent.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="De kaart"
        intro="Twee assen: hoeveel je vooraf laat zien (proces, prijs, het eigen huis), en hoe uitgesproken je smaak is. Prijs is bewust geen aparte as — die correleert in deze markt bijna volledig met smaak."
      >
        <Figure
          title="De markt ligt op één diagonaal"
          note="Beweeg over een punt voor de naam. Linksboven: mooi maar gesloten. Rechtsonder: open maar smaakloos. Rechtsboven is leeg."
          table={{
            head: ["Speler", "Transparantie", "Eigenzinnigheid", "Type"],
            rows: [
              ["Studio Verstelle (doel)", 82, 90, "ons"],
              ["Framework Studio", 10, 92, "direct"],
              ["Nicemakers", 12, 88, "direct"],
              ["Bricks Studio", 15, 86, "direct"],
              ["Studio Modijefsky", 18, 85, "direct"],
              ["Studio Reinder Veenstra", 48, 58, "direct — enige transparante"],
              ["Estetica Design & Build", 55, 35, "design & build"],
              ["PD Interieurontwerp", 72, 38, "middensegment"],
              ["IKEA Kreativ", 88, 10, "tool"],
              ["RoomGPT", 92, 12, "AI-tool"],
            ],
          }}
        >
          <PositioningMap
            points={POINTS}
            xLabel="Transparantie"
            yLabel="Eigenzinnigheid"
            xLow="Zwarte doos"
            xHigh="Alles vooraf zichtbaar"
            yLow="Catalogus, neutraal"
            yHigh="Uitgesproken handschrift"
          />
        </Figure>

        <Thesis>
          De hele markt ligt op één lijn: hoe mooier het werk, hoe minder je vooraf te zien krijgt.
          Rechtsboven — uitgesproken smaak én alles vooraf zichtbaar — staat niemand. Dat is de hele
          strategie in één plaatje.
        </Thesis>
      </Section>

      <Section title="De drie gaten">
        <div className="space-y-4">
          {[
            {
              n: "Gat 1",
              t: "Prijs- en procestransparantie in het premiumsegment",
              d: "Het hardste gat, want het is meetbaar: 0 van 25. Het kost ons niets om het te dichten — geen technologie, geen investering, alleen de moed om een getal op te schrijven. Studio Reinder Veenstra is de enige die iets in die richting doet (vaste ontwerpfee per fase) en haalt daarmee Amsterdams verkeer binnen vanuit Drenthe.",
              s: "hard",
            },
            {
              n: "Gat 2",
              t: "Premium smaak × je eigen huis vroeg zien",
              d: "Visualisatie bestaat alleen bij catalogusverkopers — IKEA Kreativ, keukenshowrooms — waar het gratis is, dimensioneel klopt, en smaakloos is. En bij tools als RoomGPT, waar het generiek is. Bij de smaakmakers zit het niet: geen enkele Nederlandse premiumstudio laat de klant vroeg zijn eigen kamers zien.",
              s: "het eigenlijke onderscheid",
            },
            {
              n: "Gat 3",
              t: "Solo-prijs met studio-smaak, inclusief begeleiding",
              d: "Een barbell-markt: bovenin Framework (20 man, 3 kantoren) en Nicemakers (11–50 man); onderin stylisten die niets constructiefs aanraken. Ertussenin is dun bevolkt — maar dit is hygiëne, geen differentiatie.",
              s: "zwak",
            },
          ].map((g) => (
            <div key={g.n} className="r-card-solid p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="r-display-m">
                  <span className="r-numeral mr-2.5 opacity-30">{g.n}</span>
                  {g.t}
                </p>
                <span
                  className="r-eyebrow rounded-sm px-1.5 py-0.5 !text-[0.5rem]"
                  style={{
                    background: g.s === "zwak" ? "rgba(28,25,23,0.07)" : "rgba(42,95,214,0.11)",
                    color: g.s === "zwak" ? "var(--ink-3)" : "#1f47a3",
                  }}
                >
                  {g.s}
                </span>
              </div>
              <p className="r-body mt-2.5 text-[var(--ink-2)]">{g.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Onze hypothese, getoetst"
        intro="We dachten dat de combinatie van vier dingen ons uniek maakte. Drie ervan zijn dat niet."
      >
        <Table
          head={["Element", "Bevinding", "Oordeel"]}
          rows={[
            [
              "(a) Premium smaak",
              "Bricks Studio ('timeless eclecticism'), Standard Studio ('timeless eclectic'), Kate Hume, Framework — allemaal vergelijkbaar of sterker DNA",
              <strong key="1" style={{ color: "var(--critical)" }}>Niet uniek</strong>,
            ],
            [
              "(b) Transparante methode + het eigen huis vroeg",
              "Geen enkele NL-premiumstudio doet dit, voor zover publiek zichtbaar",
              <strong key="2" style={{ color: "#12704e" }}>Uniek</strong>,
            ],
            [
              "(c) Volledige transformatie incl. begeleiding",
              "Noctum, Masters of Interior Design, Michiel Wijnen, Wendy Mahieu en álle design&build-aannemers doen dit al",
              <strong key="3" style={{ color: "var(--critical)" }}>Niet uniek</strong>,
            ],
            [
              "(d) Solo-prijs onder de bekenden",
              "Veel solo's zijn goedkoper — maar zeldzaam in combinatie met (a)",
              <strong key="4" style={{ color: "var(--serious)" }}>Zeldzaam</strong>,
            ],
          ]}
        />

        <div className="mt-8">
          <Prose>
            <p>
              De correctie is scherp en nuttig: het onderscheidende is <strong>niet de vierslag</strong>.
              Het is <strong>(b), gedragen door (a)</strong>. De rest is hygiëne. De echte claim luidt
              dus: <em>studio-smaak van Framework-niveau, maar je ziet je eigen huis in week één en je
              weet wat het kost.</em>
            </p>
            <p>
              En binnen (b) zit de vondst niet in de AI-render — die is een commodity die je voor $15
              per maand koopt. De vondst zit in de <strong>opgenomen begeleide sessie</strong> die
              vastlegt hoe de klant reageert. Daar heeft niemand een equivalent van. Zelfs Decorilla&rsquo;s
              Platinum-pakket van €1.780 is een léveringsmodel, geen luistermodel.
            </p>
          </Prose>
        </div>
      </Section>

      <Section title="De gevaarlijkste spelers">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Framework Studio",
              w: "Gevaarlijkst op bereik",
              d: "83K Instagram op interieur alleen, AD/Vogue Living/Elle Decoration, en een materiaal-signatuur die het dichtst bij ons gewenste DNA ligt. Als zij morgen visualisatie toevoegen, is gat 2 dicht.",
            },
            {
              t: "Bricks Studio",
              w: "Gevaarlijkst op stijl — en aanvalbaar",
              d: "Gebruikt letterlijk ons vocabulaire ('timeless eclecticism') maar heeft 2,85K volgers. Hun stijlpositie is juist, hun distributie is zwak. Dat is een aanvalsvector.",
            },
            {
              t: "Design & build-aannemers",
              w: "Structureel het gevaarlijkst",
              d: "Estetica: 'ontwerp en bouw in één hand vanaf het eerste gesprek'. Zij vertellen ons ontzorgingsverhaal al — en rekenen er niets voor, want ze verdienen aan de bouw.",
            },
          ].map((c) => (
            <div key={c.t} className="r-card-solid p-5">
              <p className="r-display-m">{c.t}</p>
              <p className="r-eyebrow mt-2 !text-[0.5rem]" style={{ color: "var(--critical)" }}>
                {c.w}
              </p>
              <p className="r-small mt-3">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Wat klanten werkelijk klagen"
        intro="Hier wordt het ongemakkelijk: het sterkste klachtbewijs ondersteunt niet onze kernclaim."
      >
        <Table
          head={["Klacht", "Bewijskracht", "Ondersteunt onze claim?"]}
          rows={[
            ["Gat tussen ontwerp en uitvoering", <strong key="1" style={{ color: "#12704e" }}>Sterk</strong>, "Ja — begeleiding, niet visualisatie"],
            ["Traagheid en lange doorlooptijden", <strong key="2" style={{ color: "#12704e" }}>Sterk</strong>, "Ja — snelheid van de methode"],
            ["Ondoorzichtigheid / vertrouwensgebrek", <strong key="3" style={{ color: "var(--serious)" }}>Redelijk</strong>, "Ja — transparantie"],
            ["Budgetoverschrijding", <strong key="4" style={{ color: "var(--serious)" }}>Gemengd</strong>, "Deels"],
            ["“Ik kon het me vooraf niet voorstellen”", <strong key="5" style={{ color: "var(--critical)" }}>Zwak</strong>, "Dit ís onze kernclaim — en er is nauwelijks bewijs voor"],
            ["“De ontwerper luisterde niet”", <strong key="6" style={{ color: "var(--critical)" }}>Zwak</strong>, "Dit is onze tweede claim — idem"],
          ]}
          caption="Het beste citaat dat gevonden werd: “Ik heb een architect betaald maar een tekenaar gekregen.” Dat gaat over uitvoering, niet over verbeelding."
        />
      </Section>

      <Section title="Wat we kopiëren, wat we vermijden">
        <Versus
          leftTitle="Kopiëren"
          rightTitle="Vermijden"
          left={[
            "PD Interieurontwerp / Stijlidee: drietrapspakketten met exacte bedragen en expliciete grenzen",
            "Framework: Instagram als primair kanaal, materiaaldetail als visuele handtekening",
            "Reinder Veenstra: vaste fee per fase + regio-landingspagina's voor SEO",
            "Bricks/Standard: hun stijlvocabulaire — maar beter gedistribueerd dan zij het doen",
            "IKEA Kreativ: de verwachting dat je je eigen ruimte ziet vóór je koopt",
            "Chaos Veras: renderen vanuit het échte model, niet vanuit een prompt",
          ]}
          right={[
            "Zwijgen over prijs 'omdat het premium is' — kuddereflex, geen strategie",
            "Hospitality erbij pakken voor de omzet — precies wat de anderen van onze klant wegtrekt",
            "AI als product verkopen — dan word je vergeleken met RoomGPT à $15/maand",
            "'U weet al precies wat u wilt' — exact het tegendeel van onze these",
            "Fotorealisme beloven — beloof herkenbaarheid van de eigen ruimte",
          ]}
        />
      </Section>

      <CounterCase>
        <p>
          <strong>Ons kernbewijs is ons zwakste bewijs.</strong> Het visualisatiegat en &ldquo;de ontwerper
          luisterde niet&rdquo; zijn precies de twee thema&rsquo;s waarvoor géén enkel Nederlands klantcitaat
          te vinden was. Het enige harde cijfer is Houzz 2023: 18% noemt visualisatie een obstakel —
          wat betekent dat <strong>82% dat niet doet</strong>. We bouwen een propositie op een pijn
          waarvan we het bestaan niet konden aantonen.
        </p>
        <p>
          <strong>De klachtensectie leunt op wankel materiaal.</strong> Reddit, Trustpilot en Houzz NL
          waren geblokkeerd voor het onderzoek; wat overbleef was grotendeels één Vlaams forum uit
          2008–2012. Dat is geen bewijs, dat is anekdote met een datum.
        </p>
        <p>
          <strong>Het gat kan er zijn omdat het geen gat is.</strong> Als 25 van de 25 professionals
          hetzelfde doen, is de kans reëel dat zij iets weten dat wij niet weten — bijvoorbeeld dat
          prijstransparantie in dit segment leads kost in plaats van oplevert. &ldquo;Iedereen doet het
          verkeerd behalve wij&rdquo; is de gevaarlijkste zin in elk businessplan.
        </p>
        <p>
          <strong>Advies uit het onderzoek: vijf tot acht klantinterviews vóórdat de propositie
          vastligt.</strong> Niet met vrienden. Met mensen die het afgelopen jaar €100k+ in hun huis
          hebben gestoken.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Publiceren we prijzen, tegen de hele markt in?"
          opties={[
            "Ja — volledige pakketprijzen, zoals het middensegment",
            "Alleen de Verkenning, als instapdrempel",
            "Nee — 25 van 25 kan geen toeval zijn",
          ]}
          advies="Alleen de Verkenning. Het is de goedkoopste differentiatie die er is en het risico is beperkt tot één product. Als het leads kost, weten we dat binnen een kwartaal."
          hangtAf="De klantinterviews: vraag expliciet of het ontbreken van prijzen hen ooit heeft tegengehouden."
        />
        <Decision
          vraag="Waarop positioneren we: verbeelding of uitvoering?"
          opties={[
            "Verbeelding — je ziet je eigen huis vooraf (ons idee, zwak bewijs)",
            "Uitvoering — wij laten je niet los na de tekening (sterk bewijs, niet uniek)",
            "Beide: verbeelding trekt aan, uitvoering sluit",
          ]}
          advies="Beide, maar in die volgorde. De verbeelding is wat opvalt en deelbaar is; de uitvoering is waar het bewijs ligt en waar de klant écht bang voor is. Verbeelding is de haak, uitvoering de belofte."
          hangtAf="Of de klantinterviews de visualisatiepijn bevestigen. Zo niet: draai de volgorde om."
        />
      </Decisions>

      <Sources
        note="Circa 110 bronvermeldingen met zekerheidslabels; hieronder de dragende. Volledig in research-notes/concurrentie.md."
        items={[
          { t: "25 premium studio's — sites en Instagram geanalyseerd", org: "eigen onderzoek", jaar: "juli 2026" },
          { t: "MKB Barometer — opleverbetrouwbaarheid bouw 85% → 73%", org: "Exact", jaar: "2023" },
          { t: "Houzz-onderzoek: 18% noemt visualisatie een obstakel", org: "Houzz", jaar: "2023" },
          { t: "Pakketprijzen middensegment (€450–3.650)", org: "Stijlidee, PD Interieurontwerp", jaar: "2026" },
          { t: "Compleet interieuradvies €299", org: "IKEA NL", jaar: "2026" },
          { t: "Platinum e-design €1.780", org: "Decorilla", jaar: "2026" },
          { t: "Vaste ontwerpfee per fase + regio-SEO", org: "Studio Reinder Veenstra", jaar: "2026" },
          { t: "'Ontwerp en bouw in één hand'", org: "Estetica Design & Build", jaar: "2026" },
        ]}
      />

      <NextPage slug="onderscheid" title="Onderscheid & kopieerbaarheid" n="03" />
    </>
  );
}
