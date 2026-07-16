// ============================================================
// The raw research notes — the back of the dossier.
//
// Eight deep-research tracks, ~79.000 words, every claim carrying
// a source URL, a date and a confidence label. The chapters are
// the conclusion; these are the working-out. They are deliberately
// readable on the site: a conclusion you cannot check is a slogan.
// ============================================================

export type NoteSlug =
  | "markt"
  | "concurrentie"
  | "onderscheid"
  | "prijsmodel"
  | "marketing"
  | "setup"
  | "tools-buildvsbuy"
  | "validatie";

export type Note = {
  slug: NoteSlug;
  /** File in /research-notes */
  bestand: string;
  titel: string;
  lede: string;
  woorden: string;
  /** Chapter numbers this note feeds. */
  voedt: string[];
  /** The one finding from this note that changed the plan. */
  kern: string;
};

export const NOTES: Record<NoteSlug, Note> = {
  markt: {
    slug: "markt",
    bestand: "markt.md",
    titel: "Markt",
    lede: "Transacties, verbouwgedrag en segmenten in Amsterdam, Den Haag en Rotterdam.",
    woorden: "8.2k",
    voedt: ["01"],
    kern: "De vijver is klein maar niet te klein: ~256 huishoudens per jaar. Het risico is toegang, niet volume.",
  },
  concurrentie: {
    slug: "concurrentie",
    bestand: "concurrentie.md",
    titel: "Concurrentie",
    lede: "25 studio's, de indirecte concurrentie, de AI-diensten en het klachtenbewijs.",
    woorden: "8.3k",
    voedt: ["02", "04"],
    kern: "Nul van de 25 publiceert een prijs. Nul toont het proces. Dat is het goedkoopste onderscheid dat er is.",
  },
  onderscheid: {
    slug: "onderscheid",
    bestand: "onderscheid.md",
    titel: "Onderscheid",
    lede: "Wat er gebeurde in andere creatieve vakken toen AI kwam — en wat juridisch te beschermen is.",
    woorden: "10.7k",
    voedt: ["03", "04"],
    kern: "'Interieurarchitect' is een beschermde titel — óók in het Engels. Dat raakt elke regel tekst op de site.",
  },
  prijsmodel: {
    slug: "prijsmodel",
    bestand: "prijsmodel.md",
    titel: "Prijsmodel",
    lede: "Benchmarks, de productladder en de capaciteitstoets op €250k.",
    woorden: "7.2k",
    voedt: ["05", "06", "09"],
    kern: "€250k solo is geen omzetdoel maar een uurtarief-invariant van €201. De voorgestelde mix paste niet in het jaar.",
  },
  marketing: {
    slug: "marketing",
    bestand: "marketing.md",
    titel: "Marketing",
    lede: "Kanaal voor kanaal, met NL-voorbeelden, zoekvolumes en een 90-dagenplan.",
    woorden: "14.1k",
    voedt: ["07"],
    kern: "Google Bedrijfsprofiel is kanaal #1, niet Instagram. En het AI-verhaal ondermijnt het smaakverhaal.",
  },
  setup: {
    slug: "setup",
    bestand: "setup.md",
    titel: "Setup",
    lede: "Rechtsvorm, verzekeringen, AVG bij opnames, IP en de complete doe-dit-lijst.",
    woorden: "12.9k",
    voedt: ["10", "11"],
    kern: "Zeg nooit zelf op. Een vaststellingsovereenkomst behoudt WW én opent de startersregeling.",
  },
  "tools-buildvsbuy": {
    slug: "tools-buildvsbuy",
    bestand: "tools-buildvsbuy.md",
    titel: "Tools: bouwen of kopen",
    lede: "Portals, spraak, beeld, boekhouding en e-sign — met de echte prijzen van juli 2026.",
    woorden: "7.0k",
    voedt: ["08", "09", "11"],
    kern: "AI kost €8,66 per Verkenning. Het echte risico is geometrie-drift: blijft het hún kamer?",
  },
  validatie: {
    slug: "validatie",
    bestand: "validatie.md",
    titel: "Validatie",
    lede: "De vijf goedkoopste experimenten om de vraag te toetsen vóór de baan wordt opgezegd.",
    woorden: "10.5k",
    voedt: ["06", "11", "12"],
    kern: "Ons kernbewijs is ons zwakste bewijs. Praat met 5–8 klanten vóórdat de propositie vastligt.",
  },
};

export const NOTE_LIST = Object.values(NOTES);

/** Which notes sit behind each dossier chapter. */
export const CHAPTER_NOTES: Record<string, NoteSlug[]> = {
  markt: ["markt"],
  concurrentie: ["concurrentie"],
  onderscheid: ["onderscheid"],
  positionering: ["onderscheid", "concurrentie"],
  prijsmodel: ["prijsmodel"],
  klantreis: ["prijsmodel", "validatie"],
  marketing: ["marketing"],
  tools: ["tools-buildvsbuy"],
  kosten: ["tools-buildvsbuy", "prijsmodel"],
  setup: ["setup"],
  risicos: ["validatie", "setup", "tools-buildvsbuy"],
  roadmap: ["validatie"],
};
