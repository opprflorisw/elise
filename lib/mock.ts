// ============================================================
// THE VAN DAM MOCK WORLD — fictieve data.
//
// One invented client, shared by every tool demo in /research, so
// the seven demos read as one project instead of seven brochures.
// Nothing here is real: no such family, no such quote, no such
// invoice. Every screen that shows this data must say so.
//
// The point of a mock world is honesty about what we do NOT know.
// Where a number is a guess (hours saved, image counts), it is a
// guess in the demo too — the research notes say measure it.
// ============================================================

export const MOCK_LABEL = "fictieve data";

export const KLANT = {
  naam: "Familie Van Dam",
  personen: "Jasmijn & Roos van Dam",
  pand: "Bovenwoning, Sarphatiparkbuurt",
  stad: "Amsterdam",
  bouwjaar: "1931",
  oppervlak: "118 m²",
  budget: "€140.000",
  budgetNum: 140000,
  wens: "Meer licht, meer karakter, minder IKEA.",
  fase: "De Verkenning",
  gestart: "4 maart",
};

// ---------------------------------------------------------------
// Beelden — de klantfoto's en de varianten
// ---------------------------------------------------------------

export type MockBeeld = {
  id: string;
  src: string;
  naam: string;
  /** DNA-accenten die deze variant stuurden */
  accenten: string[];
  /** Geometrie-controle: blijft het hún kamer? */
  geometrie: "intact" | "gedrift";
  drift?: string;
  /** Eerlijke kanttekening bij een variant die verder klopt. */
  let?: string;
};

export const KLANTFOTOS = [
  {
    id: "foto-1",
    src: "/images/research/klantfoto-woonkamer.webp",
    naam: "Woonkamer, vanuit de deur",
    ruimte: "Woonkamer",
  },
  {
    id: "foto-2",
    src: "/images/research/klantfoto-eetkamer.webp",
    naam: "Eethoek",
    ruimte: "Eetkamer",
  },
  {
    id: "foto-3",
    src: "/images/research/klantfoto-detail.webp",
    naam: "Detail: raamhoek",
    ruimte: "Woonkamer",
  },
];

export const ACCENTEN = [
  { id: "burl", naam: "Burl-hout", kleur: "#8a5a2b" },
  { id: "mohair", naam: "Mohair-groen", kleur: "#2f5d4a" },
  { id: "chroom", naam: "Chroom", kleur: "#8f9498" },
];

export const VARIANTEN: MockBeeld[] = [
  {
    id: "v-burl",
    src: "/images/research/variant-burl.webp",
    naam: "Variant A — het burl-anker",
    accenten: ["burl", "chroom"],
    geometrie: "intact",
    let:
      "Twee ramen links, zelfde lijstwerk, zelfde blik vanuit de deur — maar kijk goed: het plafond is hoger geworden dan het echt is. Precies de sluipende drift waar het onderzoek voor waarschuwt.",
  },
  {
    id: "v-mohair",
    src: "/images/research/variant-mohair.webp",
    naam: "Variant B — mohair-register",
    accenten: ["mohair", "chroom"],
    geometrie: "intact",
  },
  {
    id: "v-chroom",
    src: "/images/research/variant-chroom.webp",
    naam: "Variant C — chroom & rookglas",
    accenten: ["chroom"],
    geometrie: "intact",
  },
  {
    id: "v-drift",
    src: "/images/research/variant-drift.webp",
    naam: "Variant D — mooi, maar niet hun kamer",
    accenten: ["burl"],
    geometrie: "gedrift",
    drift:
      "Eén boograam in plaats van twee rechte ramen, een cassetteplafond dat er nooit was, lambrisering, en een kamer die twee keer zo groot is. Dit is het hoofdrisico van de hele methode: de klant zegt 'mooi' en bedoelt 'dit is mijn huis niet'. Dit beeld is echt zo gegenereerd — het is geen constructie achteraf.",
  },
];

export const VARIANT_EETKAMER: MockBeeld = {
  id: "v-eet",
  src: "/images/research/variant-eetkamer.webp",
  naam: "Eethoek — steen, chroom, één statement",
  accenten: ["chroom", "mohair"],
  geometrie: "intact",
};

/** De geometrie-checklist die Elise per beeld langsloopt vóór de klant het ziet. */
export const GEOMETRIE_CHECKS = [
  "Staan de ramen nog op dezelfde plek?",
  "Klopt de plafondhoogte?",
  "Zijn de wanden niet verschoven?",
  "Is het lijstwerk hetzelfde profiel?",
];

// ---------------------------------------------------------------
// Reacties — wat de klant klikte (sessie-tool)
// ---------------------------------------------------------------

export type Reactie = "mooi" | "niet-ik" | null;

export const MOCK_REACTIES: Record<string, { reactie: Reactie; notitie?: string }> = {
  "v-burl": { reactie: "mooi", notitie: "Dit voelt als ons, maar dan de betere versie." },
  "v-mohair": { reactie: "mooi", notitie: "Het groen durf ik wel." },
  "v-chroom": { reactie: "niet-ik", notitie: "Te koud. Dit is een lobby." },
  "v-drift": { reactie: "niet-ik", notitie: "Mooi hoor. Maar dit is ons huis niet." },
};

// ---------------------------------------------------------------
// De spraaklaag — het gesprek, met tijdstempels
// ---------------------------------------------------------------

export type Uitspraak = {
  t: string;
  /** seconden — waar de koppeling op draait */
  sec: number;
  spreker: "Jasmijn" | "Roos" | "Elise";
  tekst: string;
  /** welk beeld stond op dat moment op het scherm */
  beeld: string | null;
  /** de zachte mening die de extractie eruit haalt */
  chip?: string;
  /** het type mening — stuurt de kleur in de demo */
  soort?: "wens" | "bezwaar" | "kern";
};

export const TRANSCRIPT: Uitspraak[] = [
  {
    t: "00:12",
    sec: 12,
    spreker: "Elise",
    tekst: "Dit is jullie woonkamer, maar dan met een burl-hout anker tegen de rechterwand.",
    beeld: "v-burl",
  },
  {
    t: "00:19",
    sec: 19,
    spreker: "Jasmijn",
    tekst: "Oh. Oh wacht. Dat is… ja. Dit voelt als ons, maar dan de betere versie.",
    beeld: "v-burl",
    chip: "dit voelt als ons",
    soort: "kern",
  },
  {
    t: "00:31",
    sec: 31,
    spreker: "Roos",
    tekst: "Ik zou dat hout wel warmer willen. Dit trekt een beetje naar rood.",
    beeld: "v-burl",
    chip: "hout warmer, minder rood",
    soort: "wens",
  },
  {
    t: "01:04",
    sec: 64,
    spreker: "Roos",
    tekst: "Dat groen — dat had ik zelf nooit aangedurfd. Maar zo wel.",
    beeld: "v-mohair",
    chip: "het groen durf ik wel",
    soort: "kern",
  },
  {
    t: "01:22",
    sec: 82,
    spreker: "Jasmijn",
    tekst: "Nee. Dit is te koud. Dit is een lobby, geen huis.",
    beeld: "v-chroom",
    chip: "te koud — 'een lobby'",
    soort: "bezwaar",
  },
  {
    t: "01:38",
    sec: 98,
    spreker: "Roos",
    tekst: "Als er chroom in komt moet er iets zachts tegenover staan. Anders wordt het een kantoor.",
    beeld: "v-chroom",
    chip: "chroom alleen mét een zachte tegenhanger",
    soort: "wens",
  },
  {
    t: "02:10",
    sec: 130,
    spreker: "Jasmijn",
    tekst: "Mooi hoor. Maar wacht — waar is ons tweede raam? Dit is ons huis niet.",
    beeld: "v-drift",
    chip: "geometrie klopt niet",
    soort: "bezwaar",
  },
  {
    t: "02:41",
    sec: 161,
    spreker: "Roos",
    tekst:
      "Weet je wat het is. We wonen hier acht jaar en het voelt nog steeds als iemand anders zijn huis.",
    beeld: null,
    chip: "acht jaar, voelt nog niet van ons",
    soort: "kern",
  },
];

/** Wat de extractie per beeld oplevert — de oogst. */
export const OOGST = VARIANTEN.map((v) => ({
  beeld: v,
  reactie: MOCK_REACTIES[v.id],
  uitspraken: TRANSCRIPT.filter((u) => u.beeld === v.id && u.chip),
}));

// ---------------------------------------------------------------
// Het visiedocument — wat de brief-generator maakt
// ---------------------------------------------------------------

export const BRIEF = {
  titel: "Van Dam — Visiedocument",
  ondertitel: "Sarphatiparkbuurt · maart 2026",
  secties: [
    {
      kop: "Wat we hoorden",
      tekst:
        "Jullie wonen hier acht jaar en het voelt nog steeds als iemand anders zijn huis. Dat is niet gezegd als klacht maar als terzijde, na afloop, toen de beelden al weg waren — en het is de belangrijkste zin van het gesprek. De opdracht is niet 'mooier'. De opdracht is: dat dit huis van jullie wordt.",
      elise: true,
    },
    {
      kop: "De richting",
      tekst:
        "Een warm anker in burl-hout tegen de rechterwand, met het tweede raam als tegengewicht. Groen mag — Roos: \"dat had ik zelf nooit aangedurfd, maar zo wel.\" Chroom alleen in gezelschap: nooit zonder een zachte tegenhanger, anders wordt het wat Jasmijn een lobby noemde.",
    },
    {
      kop: "Het palet",
      tekst:
        "Burl-hout (warmer getrokken dan de eerste variant — Roos vond die naar rood neigen), mohair in dof groen, geborsteld chroom, kalkverf in een gebroken warmwit. Eén statement: het groen.",
    },
    {
      kop: "Wat we niet doen",
      tekst:
        "Geen koele minimalistische lobby-esthetiek. Geen tweede statement naast het groen — één stem per ruimte, anders schreeuwt de kamer. En het tweede raam blijft, wat er ook gebeurt.",
      elise: true,
    },
  ],
};

// ---------------------------------------------------------------
// Materialen & budget
// ---------------------------------------------------------------

export type Materiaal = {
  id: string;
  naam: string;
  categorie: "Hout" | "Steen" | "Textiel" | "Metaal" | "Afwerking" | "Glas";
  leverancier: string;
  eenheid: string;
  laag: number;
  hoog: number;
  waarom: string;
  src?: string;
};

export const MATERIALEN: Materiaal[] = [
  {
    id: "burl",
    naam: "Burl-hout fineer",
    categorie: "Hout",
    leverancier: "Gespecialiseerd fineeratelier",
    eenheid: "m²",
    laag: 180,
    hoog: 420,
    waarom: "Het anker van de studio: één vlak burl doet wat tien meubels niet doen.",
    src: "/images/materials/burl-hout.webp",
  },
  {
    id: "walnoot",
    naam: "Massief walnoot",
    categorie: "Hout",
    leverancier: "Houthandel / meubelmaker",
    eenheid: "m²",
    laag: 140,
    hoog: 260,
    waarom: "De rustige tegenhanger van burl. Waar burl schreeuwt, draagt walnoot.",
    src: "/images/materials/walnoot.webp",
  },
  {
    id: "travertin",
    naam: "Travertijn, ongevuld",
    categorie: "Steen",
    leverancier: "Natuursteenhandel",
    eenheid: "m²",
    laag: 95,
    hoog: 220,
    waarom: "Diepte zonder kleur. Doet in een 30s-pand wat marmer niet kan: meegaan.",
    src: "/images/materials/travertin.webp",
  },
  {
    id: "calacatta",
    naam: "Calacatta Viola",
    categorie: "Steen",
    leverancier: "Natuursteenhandel",
    eenheid: "m²",
    laag: 320,
    hoog: 780,
    waarom: "Alleen als hét statement. Nooit naast een tweede statement.",
    src: "/images/materials/calacatta-viola.webp",
  },
  {
    id: "mohair",
    naam: "Mohair, dof groen",
    categorie: "Textiel",
    leverancier: "Stoffenhuis (BE/IT)",
    eenheid: "m",
    laag: 85,
    hoog: 180,
    waarom: "Elise's eigen keuze uit de reis. Kleur die je pas ziet als je hem aanraakt.",
    src: "/images/materials/mohair-groen.webp",
  },
  {
    id: "boucle",
    naam: "Bouclé, wol",
    categorie: "Textiel",
    leverancier: "Stoffenhuis",
    eenheid: "m",
    laag: 60,
    hoog: 140,
    waarom: "De zachte tegenhanger die chroom nodig heeft — letterlijk uit het gesprek.",
    src: "/images/materials/boucle.webp",
  },
  {
    id: "cognac",
    naam: "Cognac-leer",
    categorie: "Textiel",
    leverancier: "Leerhandel",
    eenheid: "m²",
    laag: 110,
    hoog: 240,
    waarom: "Wordt mooier met de jaren. Een van de weinige materialen die dat doet.",
    src: "/images/materials/cognac-leer.webp",
  },
  {
    id: "chroom",
    naam: "Geborsteld chroom",
    categorie: "Metaal",
    leverancier: "Metaalatelier",
    eenheid: "stuk",
    laag: 240,
    hoog: 900,
    waarom: "70s-elegantie. Geborsteld, niet spiegelend — spiegelend wordt een lobby.",
    src: "/images/materials/chroom.webp",
  },
  {
    id: "messing",
    naam: "Ongelakt messing",
    categorie: "Metaal",
    leverancier: "Metaalatelier",
    eenheid: "stuk",
    laag: 180,
    hoog: 650,
    waarom: "Patineert. Wie glanzend messing wil, wil eigenlijk goud — dat is iets anders.",
    src: "/images/materials/messing.webp",
  },
  {
    id: "rookglas",
    naam: "Rookglas",
    categorie: "Glas",
    leverancier: "Glaszetter",
    eenheid: "m²",
    laag: 130,
    hoog: 310,
    waarom: "Maakt een ruimte dieper zonder een muur te verplaatsen.",
    src: "/images/materials/rookglas.webp",
  },
  {
    id: "kalkverf",
    naam: "Kalkverf",
    categorie: "Afwerking",
    leverancier: "Verfspeciaalzaak",
    eenheid: "m²",
    laag: 18,
    hoog: 42,
    waarom: "Vlakken die leven bij daglicht. In een 30s-pand het verschil met plamuur.",
    src: "/images/materials/kalkverf.webp",
  },
  {
    id: "bordeaux",
    naam: "Bordeaux hoogglanslak",
    categorie: "Afwerking",
    leverancier: "Spuiterij",
    eenheid: "m²",
    laag: 90,
    hoog: 210,
    waarom: "Voor als het statement een kleur moet zijn en geen materiaal.",
    src: "/images/materials/bordeaux-lak.webp",
  },
];

/** Wat de Van Dams in de demo selecteren. */
export const VANDAM_SELECTIE = ["burl", "mohair", "travertin", "chroom", "kalkverf", "boucle"];

/** Nepdata: de budgetband die daaruit rolt. Nooit een offerte. */
export const BUDGETBAND = {
  laag: 118000,
  verwacht: 143500,
  hoog: 176000,
  disclaimer:
    "Indicatie op basis van hoeveelheden uit het ontwerp en prijsranges uit de bibliotheek. Geen offerte, geen toezegging. De aannemer prijst; wij ramen.",
};

// ---------------------------------------------------------------
// Portaal — planning
// ---------------------------------------------------------------

export const MIJLPALEN = [
  { fase: "De Verkenning", datum: "4 maart", status: "klaar" as const },
  { fase: "Visiedocument", datum: "18 maart", status: "klaar" as const },
  { fase: "Definitief ontwerp", datum: "29 april", status: "loopt" as const },
  { fase: "Aannemer & planning", datum: "juni", status: "wacht" as const },
];

export const DOCUMENTEN = [
  { naam: "Offerte — De Verkenning", meta: "Geaccepteerd via Moneybird · 2 maart", status: "klaar" as const },
  { naam: "Visiedocument Van Dam", meta: "PDF · 18 maart", status: "klaar" as const },
  { naam: "Materialenlijst v2", meta: "PDF · 22 april", status: "klaar" as const },
  { naam: "Definitief ontwerp", meta: "In bewerking", status: "wacht" as const },
];

// ---------------------------------------------------------------
// Intake — twee leads: één die past, één die niet past
// ---------------------------------------------------------------

export type Lead = {
  id: string;
  naam: string;
  binnen: string;
  pand: string;
  budget: string;
  bericht: string;
  scores: { as: string; score: number; redenering: string }[];
  oordeel: "past" | "past-niet";
  concept: string;
  /** Zin die Elise volgens de demo zelf moet herschrijven. */
  markeer: string;
};

export const LEADS: Lead[] = [
  {
    id: "vandam",
    naam: "Jasmijn van Dam",
    binnen: "vandaag, 08:14",
    pand: "Bovenwoning 1931, Sarphatiparkbuurt, 118 m²",
    budget: "€120.000 – €160.000",
    bericht:
      "We wonen hier acht jaar en het voelt nog steeds als iemand anders zijn huis. We hebben geen idee waar we moeten beginnen. Het moet lichter en het moet van ons worden. Foto's zitten erbij.",
    scores: [
      {
        as: "Budget",
        score: 92,
        redenering: "€140k midden ligt ruim boven de ondergrens van €75k. Transformatie-materiaal.",
      },
      {
        as: "Stijl",
        score: 78,
        redenering:
          "\"Van ons worden\" en \"lichter\" — geen stijlwoord, wél een gevoelsopdracht. Dat is precies waar de methode voor is.",
      },
      {
        as: "Scope",
        score: 85,
        redenering: "1931, 118 m², eigenaar. Bouwkundig ingrijpen waarschijnlijk mogelijk.",
      },
    ],
    oordeel: "past",
    concept:
      "Beste Jasmijn,\n\nDank voor je bericht — en vooral voor die ene zin: dat het na acht jaar nog steeds als iemand anders zijn huis voelt. Dat is precies het soort opdracht waar deze studio voor bestaat.\n\nIk zou willen beginnen met een Verkenning. Je stuurt drie foto's, ik maak varianten van jóuw kamers, en we lopen ze samen door. Aan het eind ligt er een visiedocument — en weet je of je verder wilt.\n\nZullen we een moment prikken?\n\nElise",
    markeer:
      "Ik zou willen beginnen met een Verkenning. Je stuurt drie foto's, ik maak varianten van jóuw kamers, en we lopen ze samen door.",
  },
  {
    id: "bakker",
    naam: "Tim Bakker",
    binnen: "gisteren, 21:47",
    pand: "Appartement 2019, Zeeburgereiland, 74 m²",
    budget: "€12.000 – €15.000",
    bericht:
      "Nieuwbouw, alles is wit en saai. Zoek iemand die kan helpen met meubels uitzoeken en kleur op de muur. Budget is beperkt maar we willen wel iets moois.",
    scores: [
      {
        as: "Budget",
        score: 18,
        redenering: "€15k is ruim onder de ondergrens. Zelfs een kaal Ontwerp past hier niet in.",
      },
      {
        as: "Stijl",
        score: 55,
        redenering: "\"Wit en saai\" wijst wél op de goede onvrede. De smaak zou kunnen kloppen.",
      },
      {
        as: "Scope",
        score: 22,
        redenering: "Meubels en kleur = styling, geen transformatie. Nieuwbouw 2019: niets te transformeren.",
      },
    ],
    oordeel: "past-niet",
    concept:
      "Beste Tim,\n\nDank voor je bericht — en voor het vertrouwen. Ik ga het eerlijk zeggen: ik ben niet de juiste voor deze klus, en ik zou je een slechte dienst bewijzen door dat niet te zeggen.\n\nDeze studio werkt aan transformaties van bestaande panden, en dat begint in de praktijk rond een verbouwbudget van €75.000. Voor wat jij zoekt — meubels en kleur in een nieuwbouwappartement — betaal je bij mij vooral voor een aanpak die je niet nodig hebt.\n\nWat wél goed werkt in jouw geval is een interieurstylist met een pakketprijs; die zijn er in Amsterdam een paar hele goede. Stuur me gerust een bericht als je wilt dat ik meedenk over namen.\n\nVeel succes ermee — en \"wit en saai\" is een prima startpunt. Dat betekent dat je het ziet.\n\nElise",
    markeer:
      "Wat wél goed werkt in jouw geval is een interieurstylist met een pakketprijs; die zijn er in Amsterdam een paar hele goede.",
  },
];

// ---------------------------------------------------------------
// De AI-rekening van deze ene sessie — uit tools-buildvsbuy.md
// ---------------------------------------------------------------

export const AI_REKENING = [
  { post: "Beeldgeneratie (60 × $0,134)", bedrag: 7.02 },
  { post: "Beeld-input (240 × $0,0011)", bedrag: 0.23 },
  { post: "Transcriptie + diarisatie (120 min)", bedrag: 0.31 },
  { post: "LLM: extractie + visiedocument", bedrag: 1.1 },
];
export const AI_TOTAAL = 8.66;
