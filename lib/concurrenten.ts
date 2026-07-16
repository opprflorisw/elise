// ============================================================
// De concurrenten, met links.
//
// Alle URL's geverifieerd op 2026-07-16 (research-notes/concurrentie.md).
// Ze zijn momentopnames: sites verhuizen, studio's stoppen, prijzen
// verlopen. Eén naam uit de startlijst — "Studio Jaimie van Schijndel" —
// bleek na gericht zoeken niet te bestaan; die staat hier dus niet.
//
// Waarom dit een eigen bestand is: de lijst is bewijsmateriaal, geen
// opsmuk. Hij hoort controleerbaar te zijn zonder door een pagina te
// hoeven scrollen.
// ============================================================

export type Concurrent = {
  naam: string;
  url: string;
  plaats: string;
  /** Wat ze zijn, in één zin. */
  wat: string;
  /** Waarom ze ertoe doen voor ons — of juist niet. */
  gat?: string;
  /** Instagram-bereik, waar bekend [zeker: middel — via zoeksnippets] */
  ig?: string;
};

export type Cluster = {
  id: string;
  titel: string;
  intro: string;
  items: Concurrent[];
};

export const CLUSTERS: Cluster[] = [
  {
    id: "boutique",
    titel: "Premium boutique — de directe groep",
    intro:
      "Wie deze klant al bedient. Nul van hen publiceert een prijs, nul toont het proces stap voor stap, en nul gebruikt AI-visualisatie van het eigen huis van de klant als verkoopargument.",
    items: [
      { naam: "Studio Piet Boon", url: "https://pietboon.com/", plaats: "Oostzaan", wat: "Luxe totaalconcepten sinds 1983; tijdloos en gebalanceerd.", gat: "Onbereikbaar voor het €75k-segment; 'veilig luxe' in plaats van eigenzinnig.", ig: "146K" },
      { naam: "Nicemakers", url: "https://www.nicemakers.com/", plaats: "Amsterdam", wat: "Internationaal geprezen, energie-gedreven, warm-eclectisch.", gat: "Hospitality-gedreven; particulier is één van vier markten. Geen zichtbaar proces.", ig: "36K" },
      { naam: "Framework Studio", url: "https://framework.eu/", plaats: "A'dam / Parijs / Ibiza", wat: "Signatuur op unieke materialen en ambachtelijke technieken.", gat: "Meest directe stijlconcurrent — maar 3 kantoren, 20 man, Lagerfeld-niveau klanten. Een €75k-verbouwing is te klein.", ig: "83K" },
      { naam: "Studio Modijefsky", url: "https://www.studiomodijefsky.nl/", plaats: "Amsterdam", wat: "Kleur, textuur, traditie; sterk eigen handschrift.", gat: "Hospitality-zwaar; de particuliere klant krijgt een hospitality-proces.", ig: "18K" },
      { naam: "Standard Studio", url: "https://standardstudio.nl/", plaats: "Amsterdam", wat: "'Timeless eclectic', vintage en verhalende objecten, expliciet anti-trendy.", gat: "Stijl-DNA ligt dicht bij ons, maar commercieel-first en opvallend zwak IG-bereik.", ig: "5.7K" },
      { naam: "Bricks Studio", url: "https://bricksstudio.nl/", plaats: "Amsterdam", wat: "'Timeless eclecticism': antiek plus onconventionele texturen en paletten.", gat: "Stijl-DNA het dichtst bij ons van allemaal — en tóch maar 2.85K volgers. Bereik is dus geen bewijs van smaak.", ig: "2.85K" },
      { naam: "Kate Hume", url: "https://www.katehume.com/", plaats: "Amsterdam", wat: "Brits; zeldzaam kleurgevoel, eclectische vondsten, maatwerk voor HNW.", gat: "Alleen HNW, internationaal, sereen-elegant in plaats van gedurfd.", ig: "8.5K" },
      { naam: "Studio Janne Wellens", url: "https://www.jannewellens.com/", plaats: "Amsterdam", wat: "Belgisch; interieurontwerp, styling en een eigen galerie.", gat: "Meest vergelijkbaar qua schaal (solo) — maar styling/galerie-model, geen verbouwbegeleiding.", ig: "6.5K" },
      { naam: "Studio Michiel Wijnen", url: "https://www.michielwijnen.com/", plaats: "Amsterdam", wat: "Volledig ontwerp van concept tot realisatie, incl. projectmanagement.", gat: "Doet al 'concept t/m realisatie' solo — de dichtstbijzijnde structurele analogie. Maar klantenlijst is overwegend B2B." },
      { naam: "Atelier ND Interior", url: "https://www.atelierndinterior.com/", plaats: "Amsterdam", wat: "Warm, persoonlijk, authentiek en vol kleur.", gat: "Kleurpositionering overlapt met ons; schaal onbekend." },
      { naam: "AMstudio", url: "https://amstudio.nl/", plaats: "Amsterdam", wat: "Karaktervolle interieurs, 30+ jaar maatwerkervaring, ook transformatie.", gat: "Weinig stijl-uitgesprokenheid in de etalage; zwakke marketing." },
      { naam: "Studio Francis", url: "https://www.studiofrancis.eu/", plaats: "A'dam, grachtengordel", wat: "Full-service interieur en architectuur, gespecialiseerd in woningrenovatie.", gat: "Zelfde niche als wij — maar nauwelijks vindbaar. Dat is zelf een les." },
      { naam: "Studio Ard Hoksbergen", url: "https://ardhoksbergen.nl/", plaats: "Amsterdam West", wat: "Architectuur-eerst; functionele ruimte en duurzaamheid. Archiprix 2012, Abe Bonnema 2020.", gat: "Architect, geen decorateur — mist de sfeer en de eclectiek." },
      { naam: "Studio Wendy Mahieu", url: "http://wendymahieu.nl/", plaats: "Den Haag", wat: "End-to-end residentiële projecten, high-end, sinds 2014.", gat: "Sterkste Den Haag-concurrent. Ontwikkelaars-afhankelijk." },
      { naam: "Atelier Perspective", url: "https://www.atelierperspective.nl/", plaats: "Den Haag", wat: "Ruimtelijk, elegant, karaktervol; 12+ jaar.", gat: "'Elegant' is niet hetzelfde als eigenzinnig." },
      { naam: "Masters of Interior Design", url: "https://mastersofinteriordesign.com/", plaats: "Rotterdam", wat: "Sinds 2008; totaalprojecten voor 'mensen die precies weten wat ze willen'.", gat: "Die positionering is het exacte tegenovergestelde van onze begeleide methode. Nuttig contrast." },
      { naam: "Noctum", url: "https://www.noctum.nl/", plaats: "Rotterdam", wat: "Luxe maatwerk; ontwerp én realisatie, Italiaans topdesign.", gat: "Italiaans-luxe idioom, niet eclectisch." },
      { naam: "Lagrand Interior Design", url: "https://en.lagrand.nl/", plaats: "Rotterdam", wat: "Exclusief en verfijnd; penthouses met panorama.", gat: "Nieuwbouw/penthouse-gericht, niet transformatie van bestaand." },
      { naam: "Studio Reinder Veenstra", url: "https://reinderveenstra.com/binnenhuisarchitect-amsterdam", plaats: "A'dam / Drenthe", wat: "High-end, persoonlijk. Vaste ontwerpfee per fase, realisatie op nacalculatie.", gat: "De enige van de premium-groep die zijn tariefstructuur benoemt — al zonder bedragen. Sterke SEO met regio-landingspagina's." },
      { naam: "Remy Meijers", url: "https://remymeijers.com/", plaats: "Utrecht", wat: "'The Shape of Silence'; high-end, precisie, ingetogen.", gat: "Ingetogen en rustig is expliciet niet ons DNA — maar wel een sterke merknaam." },
      { naam: "BNLA Architecten", url: "https://bnla.nl/architect-luxe-verbouwing", plaats: "Amsterdam", wat: "Exclusief wonen: luxe verbouwing, monumenten, grachtenpanden.", gat: "Architect-esthetiek; interieursfeer is bijproduct. Sterke SEO." },
      { naam: "COAST Architecten", url: "https://coast.nl/nl/architect-amsterdam/", plaats: "Amsterdam", wat: "High-end verbouwing en luxe interieur; 15+ jaar.", gat: "Bouwkundig-first, net als BNLA." },
      { naam: "Buro Maak", url: "https://www.buromaak.nl/", plaats: "Amsterdam", wat: "Luxe woningbouw en complexe interieurs.", gat: "Publiceert uitleg over hoe ontwerpkosten worden bepaald — educatief, maar nog steeds geen eigen prijs." },
      { naam: "HEYLIGERS architects", url: "https://www.heyligersarchitects.nl/", plaats: "Amsterdam", wat: "Restauratie, architectuur en interieur; grachtenpanden.", gat: "Monument- en restauratienadruk." },
    ],
  },
  {
    id: "midden",
    titel: "Het middensegment — de transparantie-norm",
    intro:
      "Deze partijen publiceren wél gewoon hun prijzen. Zij zetten daarmee de verwachting die de klant meeneemt naar ons gesprek. Het hoogste geverifieerde punt in het hele onderzoek is ~€8.650 all-in — nog altijd tien keer onder een verbouwbudget van €75k.",
    items: [
      { naam: "PD Interieurontwerp", url: "https://www.pdinterieurontwerp.nl/tarieven", plaats: "NL", wat: "Brons €750 (3u) · Zilver vanaf €3.150 · Goud vanaf €3.650 + €3.000–5.000 stylingbudget.", gat: "Het hoogste geverifieerde prijspunt van de hele markt — en het plafond van dit segment." },
      { naam: "HUIZ design", url: "https://www.huizdesign.nl/interieurontwerp/tarieven", plaats: "NL", wat: "Uurtarief €90 excl. btw; pakketten vanaf €1.595.", gat: "Precies het prijspunt van onze Verkenning — maar dan voor een compleet ontwerp." },
      { naam: "Klein Ontwerp Studio", url: "https://www.kleinontwerpstudio.nl/kosten-interieuradvies", plaats: "NL", wat: "Pakketten vanaf €745; strippenkaart vanaf €395.", gat: "De strippenkaart is een interessant model: laagdrempelig binnenkomen." },
      { naam: "By Her Interior Design", url: "https://byher.nl/tarieven/", plaats: "NL", wat: "Drie pakketten met duidelijke prijzen.", gat: "Standaard drie-pakketten-structuur — de norm in dit segment." },
      { naam: "Stijlidee", url: "https://www.stijlidee.nl/interieuradvies-tarieven-pakketten-stijlidee-utrecht/", plaats: "Utrecht", wat: "Brons 3u €450+ · Zilver 5u €750+ · Goud 10u €1.500+ incl. 3D. Quick Fix €245.", gat: "Laat zien hoe ver je kunt afprijzen met uur-pakketten." },
      { naam: "Aanhuis.nl", url: "https://aanhuis.nl/interieuradvies/", plaats: "NL", wat: "Gratis kennismaking · €195 materialenplan (wordt tegoedbon) · €950 studiopakket.", gat: "Het tegoedbon-model is precies wat wij met de Verkenning willen doen — bekijk hoe zij het formuleren." },
    ],
  },
  {
    id: "ai",
    titel: "AI & e-design — de nieuwe soort",
    intro:
      "Waar de €99-dreiging vandaan komt. Belangrijk: geen van deze partijen kan een €75k+-klant bedienen — het gat is structureel, niet cosmetisch. Maar ze zetten wél het prijsanker in het hoofd van de klant.",
    items: [
      { naam: "Decorilla", url: "https://www.decorilla.com/pricing", plaats: "US, bedient EU online", wat: "Brons €539 · Zilver €779 · Goud €990 · Platinum vanaf €1.780.", gat: "Sterkste upmarket-signaal van de hele categorie: Platinum claimt expliciet 'comprehensive gut renovations' mét projectmanagement. Houd deze in de gaten." },
      { naam: "Havenly", url: "https://havenly.com/pricing", plaats: "US", wat: "Online $199/kamer · In-Person $699.", gat: "Niet beschikbaar in NL. Catalogus-gedreven meubelshoppen." },
      { naam: "Interior AI", url: "https://interiorai.com/", plaats: "NL-maker, wereldwijd", wat: "Pro $49 · Premium $99 · Ultra $199 per maand.", gat: "Verkoopt stijl-presets. Blijft fundamenteel een diffusion-transformatie, niet ruimtelijk accuraat." },
      { naam: "RoomGPT", url: "https://www.roomgpt.io/", plaats: "wereldwijd", wat: "Gratis tier; Pro ~$15/mnd.", gat: "Style-transfer over je eigen foto. Geometrie los behouden, niet dimensioneel accuraat. Dit is het €99-anker in levenden lijve — probeer het zelf." },
      { naam: "Spacely AI", url: "https://www.spacely.ai/pricing", plaats: "wereldwijd", wat: "Gratis 40 credits; Starter $12,75/mnd.", gat: "Consumentenniveau; EUR ondersteund." },
      { naam: "Collov AI", url: "https://collov.ai/", plaats: "US", wat: "$21–79/mnd; AI Design Agent ~$7/kamer; hardware 'AI Desk A1' $2.500.", gat: "Duidelijkste upmarket-pivot: van consumenten-app naar B2B makelaars-staging en retail-hardware." },
      { naam: "Planner 5D", url: "https://planner5d.com/", plaats: "wereldwijd", wat: "Gratis; Premium $4,99/mnd incl. AI Design Generator.", gat: "Schematisch en catalogus-gedreven; niet fotoreal-first." },
      { naam: "Coohom", url: "https://www.coohom.com/", plaats: "wereldwijd", wat: "Pro $29/mnd. De prijspagina heet letterlijk 'Designer Plans'.", gat: "Richt zich al op werkende ontwerpers — 4K/8K, video-walkthroughs." },
      { naam: "IKEA — Compleet Interieuradvies", url: "https://www.ikea.com/nl/nl/customer-service/services/interior-design-service-home/", plaats: "NL", wat: "Basisadvies €29,99/uur · Compleet Interieuradvies €299 (Family) / €399.", gat: "Dít is het prijsanker dat élke Nederlandse klant in zijn hoofd heeft. Incl. moodboard, productlijst, lichtplan, plattegrond en 3D — voor €299." },
      { naam: "IKEA Kreativ", url: "https://www.ikea.com/us/en/home-design/", plaats: "wereldwijd", wat: "Gratis; scant de ruimte met de telefooncamera tot een 'lifelike room replica with accurate dimensions'.", gat: "Dimensioneel accuraat op de échte ruimte — een echte technische prestatie. Maar vastgeklonken aan één catalogus." },
      { naam: "Floorplanner", url: "https://floorplanner.com/pricing", plaats: "Rotterdam", wat: "Nederlands bedrijf sinds 2007, 25M+ gebruikers. Gratis · $5 · $29/mnd.", gat: "Bewijs dat een NL-partij hierin wereldwijd kan winnen." },
    ],
  },
  {
    id: "pro",
    titel: "Pro-tools — wat vakgenoten écht gebruiken",
    intro:
      "De belangrijkste correctie op het AI-verhaal: professionele visualisatie werkt vanuit het échte CAD/BIM-model, dus de geometrie kán niet driften. Dat is het serieuze alternatief voor onze route.",
    items: [
      { naam: "Chaos Veras", url: "https://www.chaos.com/veras", plaats: "wereldwijd", wat: "Rendert vanuit het échte SketchUp/Revit/Rhino-model, niet uit een vrije prompt. Educatief $24/mnd.", gat: "Meest professionele tool uit het hele onderzoek — en het beste antwoord op geometrie-drift, als je bereid bent eerst een 3D-model te maken." },
      { naam: "SketchUp Diffusion", url: "https://www.sketchup.com/", plaats: "wereldwijd", wat: "Gratis bij SketchUp Pro.", gat: "Cruciaal bewijs: de eigen AI-tool van een grote CAD-leverancier noemt zichzelf expliciet 'only useful during the early ideation phase' — Auto Prompt ziet trappen aan voor hellingbanen." },
      { naam: "Rendair AI", url: "https://www.rendair.ai/", plaats: "wereldwijd", wat: "Creator $20 · Pro $50 · TeamPro $200/mnd. Heeft Nano Banana 2 toegevoegd.", gat: "Expliciet voor architecten en interieurontwerpers." },
      { naam: "PromeAI", url: "https://www.promeai.pro/", plaats: "wereldwijd", wat: "Gratis + ~$29–39/mnd.", gat: "Positioneert op ROI voor 'design studios' versus uitbesteden aan freelancers — dat is letterlijk onze markt, van de andere kant benaderd." },
    ],
  },
];

export const ALLE_CONCURRENTEN = CLUSTERS.flatMap((c) => c.items);
