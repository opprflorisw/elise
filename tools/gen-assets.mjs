// Concept photography (B1/D3/E3 routes), materials, storyboard, backdrops.
import { join } from "node:path";
import { root, runBatch } from "./gemini.mjs";
const IMG = join(root, "public/images");

const concept = [
  // A = B1 Warm Boutique (Parisian greige)
  { prompt: "Hero interior: a Parisian apartment with arched doorways, herringbone floors, a bordeaux velvet tubular-chrome armchair, travertine fireplace, warm greige plaster walls, daylight. Cinematic wide shot.", aspect: "16:9", outPath: join(IMG, "concept-a/hero.png") },
  { prompt: "Project teaser: an elegant greige living room with a curved sofa, sculptural coffee table, one artwork, Parisian light.", aspect: "4:5", outPath: join(IMG, "concept-a/project-1.png") },
  { prompt: "Project teaser: a refined kitchen with walnut cabinetry, marble island, brass details, warm neutral palette.", aspect: "4:5", outPath: join(IMG, "concept-a/project-2.png") },
  // B = D3 Parisian Dusk (members club)
  { prompt: "Hero interior at golden hour: a warm espresso-toned apartment with glowing sculptural lighting (mushroom lamps, smoked-glass pendants), deep green velvet chairs, cognac leather sofa, walnut walls, city view at dusk. Seductive, cinematic.", aspect: "16:9", outPath: join(IMG, "concept-b/hero.png") },
  { prompt: "Project teaser at dusk: a private-club-like lounge with green velvet, cognac leather, glowing lamps, moody warmth.", aspect: "4:5", outPath: join(IMG, "concept-b/project-1.png") },
  { prompt: "Project teaser: a dusky dining room with a live-edge walnut table, smoked-glass pendants glowing, warm shadows.", aspect: "4:5", outPath: join(IMG, "concept-b/project-2.png") },
  // C = E3 Dark Monolith (cinematic)
  { prompt: "Hero interior: a dramatic double-height dark space, a daylight shaft cutting through, dark walnut panelling, black stone fireplace, a green velvet sofa and cream bouclé chairs with chrome frames, an abstract sculpture. Cinematic, moody, architectural.", aspect: "16:9", outPath: join(IMG, "concept-c/hero.png") },
  { prompt: "Project teaser: a moody architectural interior with a vide, dark materials and one sculptural furniture piece lit dramatically.", aspect: "4:5", outPath: join(IMG, "concept-c/project-1.png") },
  { prompt: "Project teaser: a dark walnut library wall with a spotlit collectible design chair, cinematic shadow.", aspect: "4:5", outPath: join(IMG, "concept-c/project-2.png") },
];

const materials = [
  ["walnoot", "book-matched warm walnut wood"],
  ["travertin", "honeyed travertine stone"],
  ["calacatta-viola", "Calacatta Viola marble with burgundy veining"],
  ["chroom", "polished chrome tubular metal"],
  ["messing", "warm brushed brass"],
  ["mohair-groen", "deep emerald green mohair velvet"],
  ["bordeaux-lak", "glossy bordeaux red lacquer"],
  ["rookglas", "smoked grey glass"],
  ["cognac-leer", "rich cognac tan leather"],
  ["boucle", "cream ivory bouclé fabric"],
  ["kalkverf", "warm greige lime plaster wall finish"],
  ["burl-hout", "swirling burl wood veneer"],
].map(([id, desc]) => ({
  prompt: `A clean material sample swatch/close-up of ${desc}, studio lit, tactile, filling the frame. Product-catalog quality.`,
  aspect: "1:1",
  outPath: join(IMG, `materials/${id}.png`),
}));

const storyboard = [
  { prompt: "Step 1 illustration: three photographs of an empty ordinary room pinned together, before transformation. Documentary, neutral.", aspect: "16:9", outPath: join(IMG, "method/step-1.png") },
  { prompt: "Step 2 illustration: the same room shown in several distinct restyled variants side by side, luxe eclectic. Collage feel.", aspect: "16:9", outPath: join(IMG, "method/step-2.png") },
  { prompt: "Step 3 illustration: a guided design-review session, a tablet showing interior variants on a travertine table with a voice recorder, warm.", aspect: "16:9", outPath: join(IMG, "method/step-3.png") },
  { prompt: "Step 4 illustration: the finished exceptional interior, sculptural and warm, the realized design. Cinematic hero.", aspect: "16:9", outPath: join(IMG, "method/step-4.png") },
];

const backdrops = [
  { prompt: "An atmospheric abstract macro of warm greige lime plaster texture, subtle, for a website background. Soft, tactile, minimal.", aspect: "16:9", outPath: join(IMG, "backdrops/plaster.png") },
  { prompt: "A cinematic dark architectural interior with a single daylight shaft, mostly negative space, for a full-bleed opening background.", aspect: "16:9", outPath: join(IMG, "backdrops/start-hero.png") },
  { prompt: "An editorial detail of a sculptural chrome-and-bouclé chair against bordeaux, moody, for a manifesto backdrop.", aspect: "16:9", outPath: join(IMG, "backdrops/manifest.png") },
];

runBatch([...concept, ...materials, ...storyboard, ...backdrops]);
