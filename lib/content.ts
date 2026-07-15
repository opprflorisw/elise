// ============================================================
// All journey content — copy, choices, image manifests.
// Content-separated so the journey is reusable for another studio.
// ============================================================

import type { Choice } from "@/components/feedback/ChoicePicker";
import type { GridItem } from "@/components/feedback/ReactionGrid";
import type { Material } from "@/components/feedback/MaterialPicker";
import type { Palette } from "@/components/feedback/PaletteChooser";

// ---- Stage 2: Manifest ----
export const doenWij = [
  "Stedelijke woningen",
  "Hoogwaardige renovaties",
  "Architectonische ingrepen",
  "Tijdloos ontwerp",
  "Slimme budgetkeuzes",
  "Maximale ruimtelijke kwaliteit",
];
export const doenWijNiet = [
  "Landelijke villa's",
  "Klassieke interieurs",
  "Decoratie",
  "Trends",
  "“Hotel chic”",
  "Pinterest-projecten",
];

export const naamChoices: Choice[] = [
  { id: "interior-architecture", label: "Interior Architecture Studio", desc: "Nadruk op de architectonische laag — ruimte, licht, ingreep." },
  { id: "residential-transformation", label: "Residential Transformation Studio", desc: "Nadruk op de transformatie van een pand tot uitzonderlijk huis." },
  { id: "design-agency", label: "Design Agency", desc: "Breder, internationaler, minder gebonden aan “wonen”." },
];

export const luxeChoices: Choice[] = [
  { id: "materiaal", label: "Materiaal & vakmanschap", desc: "Echt marmer, massief hout, messing — dingen die je voelt." },
  { id: "ruimte", label: "Ruimte & licht", desc: "Weelde zit in volume, daglicht en zichtlijnen, niet in spullen." },
  { id: "zeldzaam", label: "Het zeldzame & verzamelde", desc: "Vintage design, kunst, objecten met een verhaal." },
  { id: "rust", label: "Rust temidden van rijkdom", desc: "Gelaagd en rijk, maar nooit druk of schreeuwerig." },
];

export const nooitChoices: Choice[] = [
  { id: "beige-minimalisme", label: "Beige minimalisme" },
  { id: "trends", label: "Trend-gedreven interieurs" },
  { id: "namaak", label: "Namaakmaterialen" },
  { id: "hotel-chic", label: "“Hotel chic”" },
  { id: "overdaad-zonder-idee", label: "Overdaad zonder idee" },
  { id: "saai", label: "Alles wat saai is" },
];

export const materials: Material[] = [
  { id: "walnoot", label: "Walnoot", src: "/images/materials/walnoot.webp" },
  { id: "travertin", label: "Travertin", src: "/images/materials/travertin.webp" },
  { id: "calacatta-viola", label: "Calacatta Viola", src: "/images/materials/calacatta-viola.webp" },
  { id: "chroom", label: "Chroom", src: "/images/materials/chroom.webp" },
  { id: "messing", label: "Messing", src: "/images/materials/messing.webp" },
  { id: "mohair-groen", label: "Mohair (groen)", src: "/images/materials/mohair-groen.webp" },
  { id: "bordeaux-lak", label: "Bordeaux lak", src: "/images/materials/bordeaux-lak.webp" },
  { id: "rookglas", label: "Rookglas", src: "/images/materials/rookglas.webp" },
  { id: "cognac-leer", label: "Cognac leer", src: "/images/materials/cognac-leer.webp" },
  { id: "boucle", label: "Bouclé", src: "/images/materials/boucle.webp" },
  { id: "kalkverf", label: "Kalkverf", src: "/images/materials/kalkverf.webp" },
  { id: "burl-hout", label: "Burl hout", src: "/images/materials/burl-hout.webp" },
];

// ---- Stage 3: Style ----
export const vijfElementen = [
  { t: "Sculpturaal meubilair", d: "Meubels zijn geen invulling van de ruimte — ze zijn de architectuur ervan. Dikke volumes, ronde vormen, sterke silhouetten." },
  { t: "Architectuur eerst", d: "Het interieur werkt zelfs zonder de meubels. De ruimte zelf is al sterk: bogen, lambrisering, zichtlijnen, hoogte." },
  { t: "Materialen met diepte", d: "Walnoot, travertin, chroom, mohair, rookglas — nooit allemaal tegelijk. Steeds een gecontroleerde spanning." },
  { t: "Kleur als statement", d: "Geen neutrale ontwerper, geen maximalist. De kleur zit in één bank, één wand, één object. Krachtig in plaats van druk." },
  { t: "De jaren 70, overal", d: "Niet retro, niet vintage — de elegantie van de jaren 70. Chroom, buisframes, ronde vormen, rookglas, gecombineerd met nu." },
];

const clusterLabels: Record<string, string> = {
  sculptuur: "Sculpturaal meubilair",
  materiaal: "Materialen",
  kleur: "Kleur als statement",
  tijdperk: "Tijdperken door elkaar",
  licht: "Licht & sfeer",
};

export function moodboard(): GridItem[] {
  const clusters = { sculptuur: 6, materiaal: 6, kleur: 6, tijdperk: 6, licht: 6 } as const;
  const items: GridItem[] = [];
  for (const [c, n] of Object.entries(clusters)) {
    for (let i = 1; i <= n; i++) {
      const id = `${c}-${String(i).padStart(2, "0")}`;
      items.push({ id, src: `/images/moodboard/${id}.webp`, cluster: clusterLabels[c] });
    }
  }
  return items;
}
export const moodboardClusters = clusterLabels;

export const palettes: Palette[] = [
  { id: "parijs-greige", name: "Parijs greige", mood: "Warm kalksteen, bordeaux accent, messing detail.", colors: ["#EDE7DE", "#C9B99F", "#6E1423", "#9C7A3C"] },
  { id: "milaan-dusk", name: "Milaan dusk", mood: "Espresso, champagne, diepgroen — avondlijk en warm.", colors: ["#423C34", "#D8C39A", "#2E4438", "#9A5B33"] },
  { id: "galerie-nacht", name: "Galerie nacht", mood: "Bijna-zwart, travertin, warm wit — cinematisch.", colors: ["#191714", "#C9B99F", "#F2EDE4", "#23409A"] },
];

export const typografie: Choice[] = [
  { id: "verstelle-serif", label: "Hoog-contrast serif", desc: "Elegant, klassiek-modern (zoals de VERSTELLE-letter). Chic en tijdloos." },
  { id: "modern-contrast", label: "Modernistisch & strak", desc: "Schreefloos, architectonisch, zelfverzekerd. Galerie-achtig." },
  { id: "eclectisch-mix", label: "Eclectische mix", desc: "Serif en schreefloos naast elkaar, met durf. Nooit saai." },
];

// ---- Stage 4: Studio & AI ----
export const pijlers = [
  { t: "Residential Transformation", d: "Van eerste idee tot oplevering: ruimtelijke visie, indeling, materiaalstrategie, lichtplan, verbouwbegeleiding, inrichting." },
  { t: "Development Advisory", d: "Voor ontwikkelaars, beleggers en hospitality. Niet de hoofdfocus — een tweede pijler." },
];

export const methodeStappen = [
  { n: "01", t: "Drie foto’s", d: "Van een bestaande ruimte van de klant.", src: "/images/method/step-1.png" },
  { n: "02", t: "Varianten", d: "Diezelfde ruimte, verschillende stijlrichtingen — met AI gevisualiseerd.", src: "/images/method/step-2.png" },
  { n: "03", t: "Begeleide sessie", d: "Zelf doorklikken én feedback geven, of samen doorlopen met een spraakopname.", src: "/images/method/step-3.png" },
  { n: "04", t: "Definitief ontwerp", d: "Alle feedback — met verwijzing naar wát en wáár — wordt de input voor het uiteindelijke ontwerp.", src: "/images/method/step-4.png" },
];

export const aiTools: { id: string; label: string; desc: string }[] = [
  { id: "visualisatie", label: "AI ruimte-visualisatie", desc: "Van moodboard naar “wat kan deze kamer worden” — beelden in jouw stijl." },
  { id: "moodboards", label: "Moodboard & palet generator", desc: "Snel moodboards en kleurpaletten bouwen in jouw ontwerp-DNA." },
  { id: "intake", label: "Klant-intake assistent", desc: "Een slimme intake op je site die het gesprek voorbereidt tot een brief." },
  { id: "ops", label: "Studio operatie", desc: "Documentatie, offertes, planning — het werk dat ontwerptijd opslokt." },
];

export const toolReactie: Choice[] = [
  { id: "wil-ik", label: "Dit wil ik" },
  { id: "misschien", label: "Misschien later" },
  { id: "niet-voor-mij", label: "Niet voor mij" },
];

export const websiteFuncties: Choice[] = [
  { id: "portfolio", label: "Portfolio / projecten" },
  { id: "intake", label: "Intake-formulier" },
  { id: "journal", label: "Journal / blog" },
  { id: "klantportaal", label: "Klantportaal" },
  { id: "over", label: "Over de studio" },
  { id: "pers", label: "Pers & publicaties" },
];

// ---- Stage 5: the 15 mockups ----
export const mockups = {
  A: ["A1-gallery-editorial", "A2-gallery-oversized-type", "A3-gallery-splitscreen"],
  B: ["B1-boutique-greige", "B2-boutique-intimate", "B3-boutique-material"],
  C: ["C1-bold-bordeaux", "C2-bold-cobalt-collage", "C3-bold-seventies"],
  D: ["D1-parisian-haussmann", "D2-parisian-arch", "D3-parisian-dusk"],
  E: ["E1-dark-gallery", "E2-dark-material-luxe", "E3-dark-monolith"],
};
export const mockupDirections: Record<string, string> = {
  A: "Galerie / editorial",
  B: "Warm boutique",
  C: "Gedurfd eclectisch",
  D: "Parijse gelaagdheid",
  E: "Donkere galerie",
};
export function mockupGrid(): GridItem[] {
  const items: GridItem[] = [];
  for (const [dir, ids] of Object.entries(mockups)) {
    ids.forEach((id) => items.push({ id, src: `/design/${id}.webp`, cluster: mockupDirections[dir], caption: id.slice(3).replace(/-/g, " ") }));
  }
  return items;
}
