// ============================================================
// The research dossier — page registry + shared types.
// Content per page lives in the page file; this is the spine.
// ============================================================

export type Confidence = "hoog" | "middel" | "laag";

export type ResearchPage = {
  n: string;
  slug: string;
  title: string;
  short: string;
  lede: string;
  group: "Fundament" | "Strategie" | "Machine" | "Uitvoering";
};

export const PAGES: ResearchPage[] = [
  {
    n: "01",
    slug: "markt",
    title: "De markt",
    short: "Markt",
    lede: "Hoe groot is de vijver werkelijk, en hoeveel ervan hebben we nodig?",
    group: "Fundament",
  },
  {
    n: "02",
    slug: "concurrentie",
    title: "De concurrentie",
    short: "Concurrentie",
    lede: "Wie bedient deze klant al — en waar zit niemand?",
    group: "Fundament",
  },
  {
    n: "03",
    slug: "onderscheid",
    title: "Onderscheid & kopieerbaarheid",
    short: "Onderscheid",
    lede: "Wat houdt ons overeind als iedereen morgen dezelfde AI heeft?",
    group: "Fundament",
  },
  {
    n: "04",
    slug: "positionering",
    title: "Positionering & propositie",
    short: "Positionering",
    lede: "De woorden die we echt gaan gebruiken.",
    group: "Strategie",
  },
  {
    n: "05",
    slug: "prijsmodel",
    title: "Prijsmodel & het pad naar €250k",
    short: "Prijsmodel",
    lede: "Wat we vragen, waarom dat verdedigbaar is, en of het past in een werkweek.",
    group: "Strategie",
  },
  {
    n: "06",
    slug: "klantreis",
    title: "Klantreis & conversie",
    short: "Klantreis",
    lede: "Van vreemde naar opgeleverd project — wat AI doet en wat Elise doet.",
    group: "Machine",
  },
  {
    n: "07",
    slug: "marketing",
    title: "Marketing & kanalen",
    short: "Marketing",
    lede: "Vier uur per week, en toch een gevulde pijplijn.",
    group: "Machine",
  },
  {
    n: "08",
    slug: "tools",
    title: "Het gereedschap",
    short: "Tools",
    lede: "Verstelle OS: acht tools, wat we kopen en wat we bouwen.",
    group: "Machine",
  },
  {
    n: "09",
    slug: "kosten",
    title: "Kosten & marge",
    short: "Kosten",
    lede: "Wat het draaien kost — en waarom AI niet de dure factor is.",
    group: "Uitvoering",
  },
  {
    n: "10",
    slug: "setup",
    title: "Juridisch & setup",
    short: "Setup",
    lede: "De complete doe-dit-lijst om te bestaan.",
    group: "Uitvoering",
  },
  {
    n: "11",
    slug: "risicos",
    title: "Risico's",
    short: "Risico's",
    lede: "Wat dit kan doden, en wat we eraan doen.",
    group: "Uitvoering",
  },
  {
    n: "12",
    slug: "roadmap",
    title: "Roadmap & beslismomenten",
    short: "Roadmap",
    lede: "De fasen, en de poort waar de baan wordt opgezegd.",
    group: "Uitvoering",
  },
];

export const pageBySlug = (slug: string) => PAGES.find((p) => p.slug === slug)!;

export const GROUPS = ["Fundament", "Strategie", "Machine", "Uitvoering"] as const;
