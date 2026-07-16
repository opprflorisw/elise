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
import { CapacityCalculator } from "@/components/research/Calculators";
import { Figure, StackedBars } from "@/components/research/Charts";
import { pageBySlug } from "@/lib/research";
import { ChapterCoach } from "@/components/research/ChapterCoach";

export const metadata: Metadata = { title: "Prijsmodel & het pad naar €250k — Dossier" };
const P = pageBySlug("prijsmodel");

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Strategie"
        title="€250.000 is een uurtarief, geen omzetdoel"
        lede="De prijzen blijken verdedigbaar. De agenda niet. Dit hoofdstuk gaat over het enige getal dat het model draagt — en dat is niet de omzet."
      />

      <Section title="De invariant">
        <Prose>
          <p>
            Het onderzoek begon met een voorgestelde mix — 20 Verkenningen, 8 Ontwerpen, 4
            Transformaties, 15 adviesdagen — die netjes op €257.000 uitkwam. Die mix is doorgerekend
            tegen de werkelijkheid van een werkjaar, en hij klopt niet. Niet marginaal:{" "}
            <strong>met een factor 1,5</strong>.
          </p>
          <p>
            Daar zit meteen de belangrijkste les van dit hele hoofdstuk. Een omzetdoel is een
            optelsom die altijd uitkomt als je hard genoeg schuift met aantallen. Een{" "}
            <strong>uurtarief</strong> is dat niet — dat is een natuurwet.
          </p>
        </Prose>

        <div className="my-8">
          <StatRow>
            <Stat value="€201" label="Benodigd effectief uurtarief" sub="€250.000 gedeeld door 1.242 declarabele uren. Elk scenario moet hier landen." accent="var(--critical)" conf="hoog" />
            <Stat value="1.242" label="Declarabele uren fulltime" sub="45 u/wk × 46 wk × 60% declarabel — al optimistisch t.o.v. de sector" conf="hoog" />
            <Stat value="1.895" label="Uren die de eerste mix vroeg" sub="Een werkweek van 69 uur, 46 weken lang" accent="var(--critical)" conf="middel" />
            <Stat value="3,3×" label="Het sectorgemiddelde" sub="Gemiddelde zzp-omzet in de sector is €76k. €250k is geen gemiddeld jaar." conf="hoog" />
          </StatRow>
        </div>

        <Thesis>
          Er bestaat geen mix van producten die €250.000 solo haalt onder de €200 per uur. Elke
          discussie over aantallen is een omweg; de enige echte vraag is of deze studio €200 per uur
          waard is.
        </Thesis>
      </Section>

      <Section
        title="Wat de markt werkelijk vraagt"
        intro="Eerst het goede nieuws: de prijzen die we in gedachten hadden, zijn verdedigbaar. Ze zijn alleen niet hoog genoeg."
      >
        <Table
          head={["Niveau", "Uurtarief", "Bron", "Zekerheid"]}
          rows={[
            ["Zzp-architect, marktbreed", "€90 gemiddeld", "Knab 2026, n > 20.000", <Conf key="1" level="hoog" />],
            ["Interieurontwerper", "€78 · Randstad €85–150", "HAMI, maart 2026", <Conf key="2" level="hoog" />],
            ["Starter", "€50–70", "De Interieurclub", <Conf key="3" level="middel" />],
            ["Medior", "€70–100", "De Interieurclub", <Conf key="4" level="middel" />],
            ["Senior", "€100–150", "De Interieurclub", <Conf key="5" level="middel" />],
            ["Director / studio-eigenaar", "€125–200+", "De Interieurclub", <Conf key="6" level="middel" />],
            ["Absolute plafond", "€250", "STATE of Interior", <Conf key="7" level="laag" />],
          ]}
          caption="Let op waar €201/uur landt: aan de bovenkant van 'director', bij een studio die nog geen portfolio heeft."
        />

        <div className="mt-10">
          <Table
            head={["Honorariumvorm", "Marktrange", "Onderbouwing"]}
            rows={[
              ["Ontwerp + verbouwbegeleiding", "10–15% van de bouwsom", "Vier onafhankelijke bronnen: Kraal 8–15%, STATE/HAMI 10–20%, Homedeal 5–15%"],
              ["Alleen ontwerp", "5–8% van de bouwsom", "Idem"],
              ["Volledig woningontwerp, massamarkt", "€2.500–6.500", "Vergelijkingssites"],
              ["Volledig woningontwerp, premium", "€9.750+ of €90–100/m²", "Rebecca van Lier — de bruikbaarste brug naar hogere prijzen"],
              ["Fasering", "45 / 25 / 15 / 15", "Marktnorm"],
            ]}
          />
        </div>

        <div className="mt-8">
          <Prose>
            <p>
              Twee correcties op wat we dachten te weten. Ten eerste:{" "}
              <strong>DNR 2011 is achterhaald</strong> — sinds december 2025 geldt DNR 2025, met 22
              in plaats van 59 artikelen. Alles wat we op DNR 2011 baseerden, moet herzien.
            </p>
            <p>
              Ten tweede, en verrassender: <strong>de tariefrichtlijn van BNI of BNO bestaat niet</strong>{" "}
              — en mág niet bestaan. De ACM verbiedt brancheorganisaties tariefadvies te geven. Dat
              betekent dat élke benchmark hierboven afkomstig is van óf vergelijkingssites (die er
              belang bij hebben dat prijzen laag lijken) óf van studio&rsquo;s zelf (die er belang bij
              hebben dat ze hoog lijken). Er is geen neutrale bron. Dat is geen detail — het betekent
              dat we onze prijs niet kunnen &ldquo;opzoeken&rdquo;, alleen kunnen kiezen en verdedigen.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="De ladder, met echte prijzen"
        intro="Dezelfde vier treden als in het oorspronkelijke plan. Alleen de bedragen zijn gecorrigeerd naar wat het model nodig heeft én de markt toestaat."
      >
        <Table
          head={["Product", "Omvang", "Uren", "Prijs", "€/uur", "Rol"]}
          rows={[
            [
              <strong key="a">De Verkenning</strong>,
              "1 dag: intake, AI-sessie, plandocument met plattegrondvarianten en budgetindicatie",
              "10 u",
              <strong key="b">€2.000</strong>,
              "€200",
              "Instap, kwalificatie, werkkapitaal. 100% vooraf.",
            ],
            [
              <strong key="c">Het Ontwerp</strong>,
              "Volledig woningontwerp 120–200 m²: SO/VO/DO, materialenlijst, lichtplan, budgetraming",
              "95 u",
              <strong key="d">€19.000</strong>,
              "€200",
              "De winstmotor. Hier zit het geld.",
            ],
            [
              <strong key="e">De Transformatie</strong>,
              "Het Ontwerp + aanbesteding + begeleiding 6–9 maanden",
              "190 u",
              <strong key="f">12,5%, min. €40.000</strong>,
              "€211",
              "Diepte en referentiemateriaal. Max 2–4 per jaar.",
            ],
            [
              <strong key="g">Advisory</strong>,
              "Blok van 3–5 dagen met deliverable, voor ontwikkelaars",
              "9 u/dag",
              <strong key="h">€1.500/dag</strong>,
              "€167",
              "Cashflow en netwerk.",
            ],
          ]}
          caption="Prijsverhouding 1 : 9,5 : 20. Die verhouding maakt de Verkenning cognitief bijna gratis — zeker met verrekening."
        />

        <div className="mt-8">
          <Prose>
            <p>
              De grootste correctie zit bij <strong>Het Ontwerp</strong>. Onze hypothese was €8.000–20.000
              met een gemiddelde van €12.000. Maar €12.000 voor 95 uur is €126 per uur — een
              medior-tarief voor premium werk. Bij €12.000 bestaat er geen enkele mix die €250k haalt.
              De prijs moet naar <strong>€17.000–19.000</strong>, en €8.000 is ronduit bedrijfsdodend:
              dat is €84 per uur, onder het sectorgemiddelde.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="De structurele fout in ons eigen profiel"
        intro="Dit is de belangrijkste vondst van het hele hoofdstuk, en hij komt uit onze eigen documenten."
      >
        <div
          className="rounded-sm border-l-2 p-6"
          style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
        >
          <Prose>
            <p style={{ color: "var(--ink)" }}>
              Het studioprofiel zegt: klanten met verbouwbudgetten <strong>vanaf €75.000</strong>. De
              Transformatie rekent 12,5% van het verbouwbudget. Twaalf en een half procent van €75.000
              is <strong>€9.375</strong> — dat is Ontwerp-geld, geen Transformatie-geld.
            </p>
            <p style={{ color: "var(--ink)" }}>
              Andersom: een Transformatie van €40.000 vereist een verbouwbudget van{" "}
              <strong>€320.000</strong>. Dat is meer dan vier keer ons eigen genoemde minimum.
            </p>
            <p style={{ color: "var(--ink)" }}>
              <strong>De Transformatie-klant ís de €75k-klant niet.</strong> Dat zijn twee
              verschillende mensen, in twee verschillende huizen, met twee verschillende gesprekken.
              Zolang we dat niet erkennen, verkopen we een ladder waarvan de bovenste trede voor bijna
              niemand van onze doelgroep bereikbaar is.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="Drie wegen naar €250k"
        intro="Elk scenario respecteert dezelfde harde grens van 1.242 declarabele uren. Merk op dat ze alle drie op ongeveer €200 per uur uitkomen — dat is geen toeval, dat is de natuurwet."
      >
        <Figure
          title="Omzetopbouw per scenario"
          note="Alle drie halen het doel binnen de beschikbare uren. Ze verschillen in risico, niet in uitkomst."
          table={{
            head: ["Scenario", "Verkenning", "Ontwerp", "Transformatie", "Advisory", "Totaal", "Uren"],
            rows: [
              ["1 · Echte prijzen", "€40k", "€114k", "€80k", "€16k", "€250k", "1.240"],
              ["2 · Transformatie-zwaar", "€30k", "€54k", "€160k", "€8k", "€252k", "1.210"],
              ["3 · Verkenning + advies", "€75k", "€85k", "€40k", "€51k", "€251k", "1.253"],
              ["Deeltijd (jaar 1)", "€16k", "€32k", "—", "€13k", "€61k", "342"],
            ],
          }}
        >
          <StackedBars
            categories={["1 · Echte prijzen", "2 · Transformatie-zwaar", "3 · Verkenning + advies", "Deeltijd jaar 1"]}
            series={[
              { label: "De Verkenning", values: [40, 30, 75, 16] },
              { label: "Het Ontwerp", values: [114, 54, 85, 32] },
              { label: "De Transformatie", values: [80, 160, 40, 0] },
              { label: "Advisory", values: [16, 8, 51, 13] },
            ]}
            target={{ value: 250, label: "doel €250k" }}
          />
        </Figure>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              t: "1 · Zelfde ladder, echte prijzen",
              rec: true,
              b: "20 Verkenningen · 6 Ontwerpen à €19k · 2 Transformaties · 10 adviesdagen",
              w: "Houdt de ladder intact, verandert alleen de prijzen. Leunt op Het Ontwerp — de hoogste AI-hefboom, de beste cashflow, het minste risico. Vraagt 40% conversie van Verkenning naar vervolg.",
              e: "€202/u · 100% bezetting",
            },
            {
              t: "2 · Transformatie-zwaar",
              rec: false,
              b: "12 Verkenningen · 3 Ontwerpen · 4 Transformaties · 5 adviesdagen",
              w: "Beste portfoliomateriaal, maar vier gelijktijdige verbouwingen betekent vier aannemers en €30–60k onderhanden werk. Vereist vier klanten met €320k+ budget per jaar — een smalle vijver.",
              e: "€208/u · 97% bezetting",
            },
            {
              t: "3 · Verkenning + advies als motor",
              rec: false,
              b: "30 Verkenningen · 5 Ontwerpen · 1 Transformatie · 32 adviesdagen",
              w: "Beste cashflow van de drie. Maar 30 Verkenningen is er één per anderhalve week, en 32 adviesdagen vraagt zes tot tien vaste zakelijke relaties. Het minst ontwerp-inhoudelijke scenario — wíl Elise dit?",
              e: "€200/u · 101% bezetting",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="r-card-solid p-5"
              style={s.rec ? { borderColor: "var(--series-1)", borderWidth: 2 } : undefined}
            >
              {s.rec && (
                <p className="r-eyebrow mb-2 !text-[0.5rem]" style={{ color: "var(--series-1)" }}>
                  Aanbevolen
                </p>
              )}
              <p className="r-display-m">{s.t}</p>
              <p className="r-small mt-2.5" style={{ color: "var(--ink)" }}>
                {s.b}
              </p>
              <p className="r-small mt-3">{s.w}</p>
              <p className="r-eyebrow mt-4 !text-[0.55rem]" style={{ color: "var(--series-1)" }}>
                {s.e}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Reken zelf"
        intro="De defaults hieronder zijn de aanbevolen ladder uit scenario 1. Probeer een mix te vinden die €250k haalt binnen de uren — de rekenmachine waarschuwt zodra de agenda breekt."
      >
        <CapacityCalculator
          defaults={[
            { id: "verkenning", label: "De Verkenning", prijs: 2000, uren: 10, aantal: 20, prijsMax: 5000 },
            { id: "ontwerp", label: "Het Ontwerp", prijs: 19000, uren: 95, aantal: 6, prijsMax: 40000 },
            { id: "transformatie", label: "De Transformatie", prijs: 40000, uren: 190, aantal: 2, prijsMax: 80000 },
            { id: "advies", label: "Advisory (per dag)", prijs: 1600, uren: 9, aantal: 10, prijsMax: 3000 },
          ]}
          urenBeschikbaar={1242}
          doel={250000}
        />
      </Section>

      <Section
        title="De AI-hefboom komt een jaar te laat"
        intro="Alles hierboven rekent met 'uren mét AI'. Dat is in jaar 1 een fictie."
      >
        <Table
          head={["Product", "Uren zonder AI", "Uren met AI", "Besparing", "Waar de winst zit"]}
          rows={[
            ["De Verkenning", "15 u", "10 u", "−33%", "Visualisatie live in de sessie; document half automatisch"],
            ["Het Ontwerp", "130 u", "95 u", "−27%", "Concept-exploratie, 3D, materiaal- en aannemersdocumentatie"],
            ["De Transformatie", "225 u", "190 u", "−16%", "Alléén in het ontwerpdeel — begeleiding is onverkort mensenwerk"],
            ["Advisory", "9 u/dag", "9 u/dag", "0%", "Een dag is een dag"],
          ]}
        />
        <div className="mt-8">
          <Prose>
            <p>
              Let op de asymmetrie, want die draait de intuïtie om:{" "}
              <strong>AI comprimeert het ontwerp, niet de begeleiding</strong>. Hoe zwaarder de mix
              leunt op De Transformatie, hoe minder de AI oplevert. Dat maakt Het Ontwerp
              winstgevender dan De Transformatie — precies andersom dan je zou verwachten <Est />.
            </p>
            <p>
              En dan de J-curve. Ontwerpers boeken pas ná zes maanden ongeveer 30% efficiëntiewinst,
              maar verliezen in de eerste twee tot drie maanden <strong>15–20% productiviteit</strong>{" "}
              tijdens het leren. <strong>Reken in jaar 1 dus met de kolom &ldquo;zonder AI&rdquo;</strong> — of
              erger. De besparing is een jaar-2-effect, en wie hem in jaar 1 inboekt, plant een
              teleurstelling.
            </p>
          </Prose>
        </div>
      </Section>

      <Section title="Het deeltijdplafond">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat value="345" label="Declarabele uren in deeltijd" sub="12,5 u/wk × 46 weken × 60%" conf="middel" />
          <Stat value="€60k" label="Realistisch plafond jaar 1" sub="8 Verkenningen, 2 Ontwerpen, 8 adviesdagen — 99% bezet" accent="var(--series-2)" conf="middel" />
          <Stat value="€45–50k" label="Met de J-curve erin" sub="Als er in jaar 1 met 'zonder AI'-uren gerekend wordt" accent="var(--serious)" conf="laag" />
        </div>
        <div className="mt-7">
          <Prose>
            <p>
              Eén conclusie is geen keuze maar een feit:{" "}
              <strong>geen Transformaties in de deeltijdfase</strong>. Een verbouwing vraagt
              beschikbaarheid op doordeweekse ochtenden — bouwvergaderingen worden niet in het weekend
              gepland. Zolang Elise een baan heeft, is de bovenste trede van de ladder onbereikbaar.
            </p>
          </Prose>
        </div>
      </Section>

      <CounterCase>
        <p>
          <strong>€250k is 3,3× het sectorgemiddelde van €76k.</strong> Dat is geen ambitieus jaar,
          dat is een uitzonderlijk jaar — in jaar één van een studio zonder portfolio, naast een baan
          begonnen. Het model is niet onmogelijk, maar het is ook niet &ldquo;gewoon hard werken&rdquo;.
        </p>
        <p>
          <strong>Het conversiebewijs bestaat niet.</strong> De veelgeciteerde 85%-conversie voor
          betaalde discovery komt van een cursusverkoper. In geen enkele markt is een onafhankelijk
          cijfer te vinden. Onze 40%-aanname is een gok met een net pak aan.
        </p>
        <p>
          <strong>De 60% declarabel is optimistisch, niet conservatief.</strong> Knab meet 25
          declarabele uren per week bij zzp-architecten; HAMI meet er 21 bij interieurontwerpers. Ons
          model rekent met 27. Bij 50% declarabel — realistischer voor jaar 1 — stijgt de eis naar{" "}
          <strong>€242 per uur</strong>. Dat is boven élke Nederlandse benchmark die we vonden. Dan is
          de echte vraag niet meer welke mix, maar wanneer de eerste medewerker komt.
        </p>
        <p>
          <strong>Het ankereffect is zwakker dan we hoopten.</strong> Een meta-analyse vond 11
          betrouwbare decoy-effecten in 91 pogingen, vrijwel uitsluitend bij goedkope producten met
          lage betrokkenheid. Bij een beslissing van €20.000 over je eigen huis rekent niemand
          cognitief af — die belt zijn partner.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Voor welk verbouwbudget is deze studio er eigenlijk?"
          opties={[
            "Vanaf €75k — dan vervalt De Transformatie als product en is Het Ontwerp de top",
            "Vanaf €300k — dan klopt de ladder, maar het klantprofiel moet herschreven",
            "Twee sporen: Ontwerp voor €75k+, Transformatie voor €300k+",
          ]}
          advies="Twee sporen, expliciet benoemd. Maar erken dan ook dat het twee verschillende marketingverhalen zijn tegen twee verschillende mensen — en kies er één om mee te beginnen."
          hangtAf="De marktomvang van €300k+ verbouwingen in de drie steden — zie hoofdstuk 01."
        />
        <Decision
          vraag="Wordt de Verkenning verrekend bij doorgang?"
          opties={[
            "Volledig verrekenen binnen 90 dagen (aanbeveling uit dit onderzoek)",
            "Niet verrekenen — zoals de dichtstbijzijnde comp (Ontwerpcheck, €1.450) het bewust doet",
            "Half verrekenen",
          ]}
          advies="Volledig verrekenen, met een vervaltermijn van 90 dagen. Het maakt de trede cognitief gratis én zet druk op de beslissing. Dat de comp het niet doet, is een kans: wij kunnen het als voordeel verkopen."
          hangtAf="Of we cashflow of conversie belangrijker vinden in jaar 1."
        />
        <Decision
          vraag="Wat is de prijs van Het Ontwerp?"
          opties={["€19.000 vast", "€110/m² met een minimum van €15.000", "Beide: /m² met een bodem"]}
          advies="Per vierkante meter met een bodem. Het schaalt eerlijk mee met het pand, het is uitlegbaar aan de klant, en het beschermt tegen kleine projecten die evenveel werk zijn."
          hangtAf="Of Elise dit kan uitleggen zonder dat het aanvoelt als een aannemersofferte."
        />
        <Decision
          vraag="Rekenen we in jaar 1 met de AI-besparing?"
          opties={["Ja — anders is het plafond te laag", "Nee — J-curve, reken met 'zonder AI'", "Half"]}
          advies="Nee. Reken jaar 1 met de kolom 'zonder AI' en behandel elke besparing als meevaller. Een plan dat de meevaller alvast uitgeeft, is geen plan."
        />
      </Decisions>

      <Sources
        note="48 bronnen zijn geraadpleegd; hieronder de dragende. De volledige lijst met zekerheidslabels staat in research-notes/prijsmodel.md."
        items={[
          { t: "Zzp-tarievenonderzoek (n > 20.000)", org: "Knab", jaar: "2026" },
          { t: "Tarieven interieurontwerpers Nederland", org: "HAMI", jaar: "maart 2026" },
          { t: "Tarieven naar senioriteit", org: "De Interieurclub", jaar: "2025" },
          { t: "Honorariumpercentages verbouw", org: "Kraal Architecten / STATE of Interior / Homedeal", jaar: "2025–2026" },
          { t: "DNR 2025 — nieuwe rechtsverhouding opdrachtgever–architect", org: "BNA/NLingenieurs", jaar: "december 2025" },
          { t: "Ontwerpcheck in 1 dag — €1.450 (dichtstbijzijnde comp)", org: "Adrianne van Dijken", jaar: "2026" },
          { t: "Advies aan huis €1.250 · woningontwerp €9.750+ · €90–100/m²", org: "Rebecca van Lier", jaar: "2026" },
          { t: "What architects expect from AI tools in 2026 (n ≈ 800)", url: "https://www.archdaily.com/1040024/what-architects-expect-from-ai-tools-in-2026", org: "Chaos × Architizer", jaar: "31-03-2026" },
          { t: "AI for small interior design studios: the real math", url: "https://monaverse.com/blog/ai-for-small-interior-design-studios", org: "MONA", jaar: "2026" },
          { t: "AI in architectural visualization — 2025/2026 reality check (J-curve)", url: "https://ravelin3d.com/blog/ai-in-architectural-visualization-revolution-or-hype-2025-2026-reality-check.html", org: "Ravelin3D", jaar: "2026" },
        ]}
      />

      <ChapterCoach slug="prijsmodel" />

      

      <NextPage slug="klantreis" title="Klantreis & conversie" n="06" />
    </>
  );
}
