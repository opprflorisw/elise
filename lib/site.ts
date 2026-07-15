// ============================================================
// Content for the REAL Studio Verstelle website (/site).
// Every choice here traces back to Elise's feedback — see
// feedback-elise.md for the source answers.
// ============================================================

export const SITE = {
  name: "Studio Verstelle",
  tagline: "Residential Transformation Studio",
  sub: "Interior architecture & property transformation — Amsterdam",
  signature: "Een cocon van verbeelding, doch rust.",
};

export const NAV = [
  { href: "/site/portfolio", label: "Portfolio" },
  { href: "/site/aanpak", label: "Aanpak" },
  { href: "/site/over", label: "Over" },
  { href: "/site/intake", label: "Intake" },
];

// ---- manifest-driven copy ----
export const LUXE =
  "Luxe is voor ons twee dingen tegelijk: rust temidden van rijkdom, en materiaal & vakmanschap dat je kunt voelen.";

export const NOOIT = ["Beige-minimalisme", "Trends", "Overdaad zonder idee"];

export const PIJLERS = [
  {
    t: "Residential Transformation",
    d: "Van eerste idee tot oplevering: ruimtelijke visie, indeling, materiaalstrategie, lichtplan, verbouwbegeleiding en inrichting van stedelijke woningen.",
  },
  {
    t: "Development Advisory",
    d: "Ruimtelijke en materiële strategie voor ontwikkelaars, beleggers en hospitality — het handschrift van de studio op grotere schaal.",
  },
];

export const MATERIALEN = [
  { id: "burl-hout", label: "Burl hout", src: "/images/materials/burl-hout.webp" },
  { id: "mohair-groen", label: "Mohair, groen", src: "/images/materials/mohair-groen.webp" },
  { id: "chroom", label: "Chroom", src: "/images/materials/chroom.webp" },
  { id: "travertin", label: "Travertin", src: "/images/materials/travertin.webp" },
  { id: "walnoot", label: "Walnoot", src: "/images/materials/walnoot.webp" },
  { id: "rookglas", label: "Rookglas", src: "/images/materials/rookglas.webp" },
];

// ---- portfolio cases (concept cases — the studio's handwriting) ----
export type Case = {
  slug: string;
  index: string;
  title: string;
  place: string;
  kind: string;
  intro: string;
  body: string[];
  hero: string;
  images: { src: string; aspect: "portrait" | "wide"; caption: string }[];
  feiten: { k: string; v: string }[];
};

export const CASES: Case[] = [
  {
    slug: "grachtenpand",
    index: "01",
    title: "Het grachtenpand",
    place: "Amsterdam, Grachtengordel",
    kind: "Volledige transformatie",
    intro:
      "Een negentiende-eeuws grachtenpand, teruggebracht tot zijn grandeur — en daarna gelaagd met bordeaux, chroom en rookglas.",
    body: [
      "De architectuur eerst: plafonds vrijgelegd, de enfilade hersteld, zichtlijnen over de volle diepte van het pand. Pas dan de laag die het van een mooi huis een eigen huis maakt — een bordeaux statement-bank, een salontafel van chroom en rookglas, één groot doek boven de schouw.",
      "Weinig items, veel materiaal. Kalkverf, visgraat, marmer, burl. Overdag ruim en helder; 's avonds vouwt het huis zich om je heen in drie lagen lamplicht.",
    ],
    hero: "/images/site/case-gracht-hero.webp",
    images: [
      { src: "/images/site/case-gracht-1.webp", aspect: "portrait", caption: "De schouw — één doek, één lamp, verder niets" },
      { src: "/images/site/case-gracht-2.webp", aspect: "portrait", caption: "De enfilade hersteld: eten met zicht door het hele huis" },
      { src: "/images/site/case-gracht-3.webp", aspect: "wide", caption: "'s Avonds: drie lagen lamplicht" },
    ],
    feiten: [
      { k: "Programma", v: "Woonverdieping & suite" },
      { k: "Ingreep", v: "Indeling, restauratie, interieur" },
      { k: "Signatuur", v: "Bordeaux, chroom, visgraat" },
    ],
  },
  {
    slug: "zitkuil",
    index: "02",
    title: "De zitkuil",
    place: "Den Haag, Statenkwartier",
    kind: "Verbouwing & interieur",
    intro:
      "Eén verdieping lager beginnen te wonen: een zitkuil in groen mohair, omzoomd door travertin, onder een boog van chroom.",
    body: [
      "Lagen op één verdieping — het idee waar dit huis om draait. De woonkamer werd verlaagd tot een conversation pit, volledig bekleed in diepgroen mohair. Je stapt er niet een kamer in, je daalt er in af.",
      "De rest van het huis is bewust stil gehouden: travertin, kalkverf, één cobalt stoel in de hal als enige kleur. Grote gebaren, weinig spullen. 's Avonds gloeit de kuil van binnenuit — een cocon van verbeelding, doch rust.",
    ],
    hero: "/images/site/case-kuil-hero.webp",
    images: [
      { src: "/images/site/case-kuil-1.webp", aspect: "portrait", caption: "Mohair treden, burl boekenrichel" },
      { src: "/images/site/case-kuil-2.webp", aspect: "portrait", caption: "De hal: rookglas, chroom en één cobalt statement" },
      { src: "/images/site/case-kuil-3.webp", aspect: "wide", caption: "De kuil bij avond — licht uit de travertin rand" },
    ],
    feiten: [
      { k: "Programma", v: "Woonhuis, begane grond" },
      { k: "Ingreep", v: "Constructief verlagen, interieur" },
      { k: "Signatuur", v: "Mohair-groen, travertin, chroom" },
    ],
  },
  {
    slug: "vide-loft",
    index: "03",
    title: "De vide",
    place: "Rotterdam, voormalig pakhuis",
    kind: "Casco-transformatie",
    intro:
      "Een pakhuis met zes meter hoogte. In plaats van een tussenvloer die de ruimte doodt: een vide die haar viert.",
    body: [
      "De verleiding was om vierkante meters te stapelen. Wij deden het omgekeerde: één wand van donkere walnoot over twee verdiepingen, een zwevende mezzanine, en het daglicht van de fabrieksramen vrij spel geven.",
      "Beneden één monumentale cobalt bank op een plint van travertin — het enige grote gebaar dat de ruimte nodig heeft. Groots en museaal, maar op sokken op zondagochtend volstrekt leefbaar.",
    ],
    hero: "/images/site/case-vide-hero.webp",
    images: [
      { src: "/images/site/case-vide-1.webp", aspect: "portrait", caption: "Vanaf de mezzanine: wonen in lagen" },
      { src: "/images/site/case-vide-2.webp", aspect: "portrait", caption: "De keuken: walnoot, travertin, chroom" },
      { src: "/images/site/case-vide-3.webp", aspect: "wide", caption: "Gouden uur op de walnootwand" },
    ],
    feiten: [
      { k: "Programma", v: "Loft, 210 m²" },
      { k: "Ingreep", v: "Casco, vide, interieur" },
      { k: "Signatuur", v: "Walnoot, cobalt, daglicht" },
    ],
  },
];

// ---- aanpak (the guided method, incl. speech — Elise: "spraak-ja") ----
export const AANPAK = [
  {
    n: "01",
    t: "Drie foto's",
    d: "Het begint klein: u stuurt drie foto's van uw ruimte zoals die nú is. Geen opmeting, geen moodboard-huiswerk, geen jargon.",
    src: "/images/method/step-1.webp",
  },
  {
    n: "02",
    t: "Uw huis, verbeeld",
    d: "Binnen dagen ziet u uw eigen kamers terug in meerdere richtingen — het handschrift van de studio op úw muren. Niet praten over abstracte ideeën, maar samen naar beelden wijzen.",
    src: "/images/method/step-2.webp",
  },
  {
    n: "03",
    t: "Het gesprek",
    d: "We lopen samen door de varianten. Het gesprek wordt opgenomen: elke reactie — “dit voelt te koud”, “meer messing” — wordt vastgelegd bij het exacte beeld waar het over ging. Zo gaat niets van uw smaak verloren.",
    src: "/images/method/step-3.webp",
  },
  {
    n: "04",
    t: "Eén ontwerp",
    d: "Alles komt samen in één uitgewerkt ontwerp — inclusief materialenlijst en budget. Geen verrassingen, geen giswerk: u heeft elke keuze zien aankomen.",
    src: "/images/method/step-4.webp",
  },
];

// ---- intake form ----
export const INTAKE_BUDGET = [
  "Tot € 100.000",
  "€ 100.000 – € 250.000",
  "€ 250.000 – € 500.000",
  "Boven € 500.000",
  "Weet ik nog niet",
];

export const INTAKE_TYPE = [
  "Volledige transformatie",
  "Verbouwing & interieur",
  "Alleen interieur",
  "Advies / second opinion",
];
