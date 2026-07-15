// Generate landing-page design concept images via Gemini API (gemini-3-pro-image)
// Usage: node tools/generate-designs.mjs
// Reads GEMINI_API_KEY from .env.local, saves PNGs to design-explorations/

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const env = readFileSync(join(root, ".env.local"), "utf8");
const API_KEY = env.match(/GEMINI_API_KEY=(.+)/)[1].trim();
const MODEL = "gemini-3-pro-image";
const OUT = join(root, "design-explorations");
mkdirSync(OUT, { recursive: true });

// Shared context for every prompt — Elise's design DNA
const DNA = `
Design context: a landing page for a high-end boutique interior architecture studio in
Amsterdam called "STUDIO VERSTELLE" (Interior Architecture & Property Transformation).
The studio's design DNA: luxe eclectic, sculptural, architectural. A mix of 1930s, 1970s
and contemporary design. European metropolitan — Paris, Milan, New York. Sculptural
furniture as the architecture of the room, materials with depth (walnut, travertine,
natural stone, polished chrome, mohair, bouclé, smoked glass), color as a single powerful
statement, 1970s elegance (chrome, tubular frames, rounded volumes, rich fabrics).
Chic and timeless but NEVER boring, NEVER beige Scandinavian minimalism, NEVER cluttered
classic eclecticism. Gallery-like. Interiors that could only be in Paris or Milan.
The wordmark is an elegant high-contrast serif, wide letter-spaced "STUDIO" above "VERSTELLE".
`;

const RENDER = `
Render: a pixel-perfect desktop website landing page design (hero section + top navigation),
full-bleed 16:9 screenshot of the webpage design itself, photorealistic UI mockup quality,
crisp real typography (no gibberish text — use real Dutch/English words), professional
art-directed interior photography within the layout. No browser chrome, no device frame,
no watermarks. This is a website design, not an interior photo.
`;

const CONCEPTS = [
  // A — Gallery / Editorial (Sabine Marcelis direction)
  {
    id: "A1-gallery-editorial",
    prompt: `Ultra-minimal gallery/editorial website: vast off-white space, one enormous
    full-bleed photo of a sculptural chrome-and-bouclé interior, tiny wide-tracked sans-serif
    navigation, the serif wordmark small and confident. Text almost absent. Museum-like calm.`,
  },
  {
    id: "A2-gallery-oversized-type",
    prompt: `Editorial website where typography IS the hero: a massive high-contrast serif
    headline filling 60% of the viewport ("Architectonische woningtransformatie"), small
    interior photo thumbnails in an asymmetric grid below, off-white background, black text,
    one accent of burnt sienna. Feels like a design magazine cover.`,
  },
  {
    id: "A3-gallery-splitscreen",
    prompt: `Split-screen editorial website: left half pure warm-white with elegant serif
    wordmark and a short manifesto line in Dutch, right half a full-height photo of a
    travertine-and-walnut living space with a sculptural blue sofa. Hairline divider,
    tiny uppercase navigation across the top.`,
  },
  // B — Warm Boutique (Mokko / VERSTELLE greige direction)
  {
    id: "B1-boutique-greige",
    prompt: `Warm boutique website: greige/limestone background exactly like warm plaster,
    centered high-contrast serif wordmark "STUDIO VERSTELLE", beneath it a wide cinematic
    photo of a Parisian-style apartment with arched doorways and a 1970s chrome chair,
    generous whitespace, thin hairline rules, understated elegance with one bordeaux accent.`,
  },
  {
    id: "B2-boutique-intimate",
    prompt: `Intimate boutique website: warm greige canvas, asymmetric layout, a large
    portrait-orientation interior photo (herringbone floor, marble fireplace, sculptural
    round armchair) anchored right, poetic serif text block left in Dutch, small caps
    navigation, soft warm shadows, feels hand-crafted and personal like a private atelier.`,
  },
  {
    id: "B3-boutique-material",
    prompt: `Material-driven boutique website: hero built from a close-up macro texture of
    travertine stone as the background, serif wordmark embossed over it, a horizontal strip
    of three interior vignettes (walnut wall, chrome 70s lounge chair, mohair sofa in deep
    green), warm neutral palette with tactile depth.`,
  },
  // C — Bold Eclectic (the "never boring" direction)
  {
    id: "C1-bold-bordeaux",
    prompt: `Daring eclectic website: deep bordeaux-lacquer background, oversized cream serif
    typography with sculptural flair, a cut-out photo of an iconic curved 1970s sofa floating
    like an art object, chrome accents, smoked-glass texture details. Confident, dramatic,
    gallery-meets-nightclub elegance, still chic and expensive-looking.`,
  },
  {
    id: "C2-bold-cobalt-collage",
    prompt: `Bold eclectic collage website: warm ivory background but with a striking cobalt
    blue sculptural sofa photo, overlapping image cards at playful angles (arched hallway,
    travertine table, chrome floor lamp), mixed serif and modernist type sizes, one bright
    red circle accent, feels like a curated art gallery poster — daring yet refined.`,
  },
  {
    id: "C3-bold-seventies",
    prompt: `1970s-glamour website: burnt orange and chocolate brown color blocking, rounded
    corner image frames echoing 70s curves, a hero photo of a sunken lounge with tubular
    chrome furniture and smoked glass, chunky elegant serif with tight leading, subtle grain
    texture, luxurious retro-modern without being kitsch.`,
  },
  // D — Parisian Collected (chic layered apartment direction)
  {
    id: "D1-parisian-haussmann",
    prompt: `Parisian chic website: soft plaster-white background, hero photo of a Haussmann
    apartment with ornate mouldings and herringbone floors furnished with contemporary
    sculptural pieces and a single emerald velvet sofa, delicate serif italic accents in the
    typography, gold-brass hairline details, refined and cosmopolitan.`,
  },
  {
    id: "D2-parisian-arch",
    prompt: `Architectural Parisian website: the hero image framed inside a large arch shape
    (CSS arch mask), showing an enfilade of rooms with layered materials — marble, walnut,
    chrome, bordeaux drapes. Cream background, editorial serif headline in Dutch about
    transformation, tiny page-number-style navigation like a fashion lookbook.`,
  },
  {
    id: "D3-parisian-dusk",
    prompt: `Evening-mood Parisian website: dusky warm-grey background, hero photo of an
    apartment at golden hour with sculptural lighting glowing (mushroom lamps, wall washers),
    deep green and cognac leather accents, serif wordmark in champagne gold, feels like a
    private members club — seductive, warm, chic.`,
  },
  // E — Sculptural Dark Gallery (collectible design museum direction)
  {
    id: "E1-dark-gallery",
    prompt: `Dark gallery website: near-black warm charcoal background, one spotlighted photo
    of a sculptural cream bouclé chair like a museum exhibit, minimal cream serif type,
    enormous negative space, a thin brass underline detail, dramatic and quiet at once —
    collectible design presented as art.`,
  },
  {
    id: "E2-dark-material-luxe",
    prompt: `Dark luxe website: deep espresso brown background with subtle smoked-glass
    gradient, horizontal gallery strip of three glowing interior photos (chrome, travertine,
    burl wood), high-contrast serif headline in cream, one electric blue accent object,
    heavyweight sophistication like a Milanese design house.`,
  },
  {
    id: "E3-dark-monolith",
    prompt: `Monolithic dark website: full-viewport photo of a moody architectural interior
    (double-height space, vide, dramatic daylight shaft, dark walnut panelling), the serif
    wordmark and a single Dutch sentence overlaid in warm white, no other UI except a tiny
    menu dot — pure cinematic architecture.`,
  },
];

async function generate(concept, attempt = 1) {
  const body = {
    contents: [{ parts: [{ text: DNA + RENDER + "\n\nThis specific design concept:\n" + concept.prompt }] }],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
      imageConfig: { aspectRatio: "16:9" },
    },
  };
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
  }
  const json = await res.json();
  const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
  if (!part) throw new Error("No image in response: " + JSON.stringify(json).slice(0, 300));
  const file = join(OUT, `${concept.id}.png`);
  writeFileSync(file, Buffer.from(part.inlineData.data, "base64"));
  return file;
}

for (const concept of CONCEPTS) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const file = await generate(concept, attempt);
      console.log(`OK  ${concept.id} -> ${file}`);
      break;
    } catch (e) {
      console.error(`ERR ${concept.id} (attempt ${attempt}): ${e.message}`);
      if (attempt === 3) console.error(`GIVE UP ${concept.id}`);
      else await new Promise((r) => setTimeout(r, 5000 * attempt));
    }
  }
  await new Promise((r) => setTimeout(r, 2000)); // gentle pacing
}
console.log("DONE");
