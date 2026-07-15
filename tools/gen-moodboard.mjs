// Stage-3 moodboard: ~30 images across 5 clusters, 4:5 portrait.
import { join } from "node:path";
import { root, runBatch } from "./gemini.mjs";
const OUT = join(root, "public/images/moodboard");

const clusters = {
  sculptuur: [
    "A single sculptural bouclé lounge chair with rounded organic volumes, gallery lighting, cream tones",
    "A curved chrome-and-leather 1970s sofa photographed as a sculpture against a warm plaster wall",
    "A monolithic travertine coffee table with an organic silhouette, soft shadow, minimal setting",
    "A sculptural cognac leather modular sofa with tubular chrome frame, editorial angle",
    "A rounded burl-wood sideboard with sculptural relief doors, dramatic side light",
    "An abstract bronze sculpture on a stone plinth in a sunlit gallery-like interior",
  ],
  materiaal: [
    "Macro detail of book-matched walnut wall panelling with warm directional light",
    "Macro detail of Calacatta Viola marble with bold burgundy veining, luxurious",
    "Macro of travertine stone surface, honeyed and tactile, raking light",
    "Detail of polished chrome tubular furniture reflecting a warm interior",
    "Detail of deep green mohair upholstery, rich pile, soft shadow",
    "Detail of smoked glass and brass hardware, moody and refined",
  ],
  kleur: [
    "An interior vignette with one electric cobalt blue velvet sofa as the sole color statement in a cream room",
    "An interior with a single bordeaux lacquered wall and chrome accents, dramatic",
    "A deep emerald green velvet armchair against warm limestone plaster",
    "A burnt-orange 1970s sunken lounge with chocolate brown accents",
    "A rich ochre curtain drenched in golden light beside a sculptural chair",
    "A dusty rose plaster room with a single sculptural brass floor lamp",
  ],
  tijdperk: [
    "A 1930s-inspired arched doorway enfilade with contemporary sculptural furniture, Parisian",
    "A 1970s conversation pit with tubular chrome furniture and smoked glass, luxe retro",
    "An Art Deco marble fireplace paired with a modern bouclé chair, eclectic mix",
    "A Milanese 1970s interior with rounded volumes, rich woods and chrome, warm",
    "A Haussmann apartment with ornate mouldings and bold contemporary art, cosmopolitan",
    "A vintage Italian design lounge with mixed decades, chic and layered",
  ],
  licht: [
    "A mushroom-shaped opaline table lamp glowing in a dusky warm interior",
    "Golden hour light raking across a walnut-panelled living room, atmospheric",
    "A cluster of smoked-glass pendant lights over a sculptural dining setting",
    "Dramatic daylight shaft falling through a double-height vide space",
    "A sculptural chrome arc floor lamp casting warm pools of light at dusk",
    "Wall-washer lighting grazing a textured plaster wall, moody and architectural",
  ],
};

const items = [];
for (const [cluster, prompts] of Object.entries(clusters)) {
  prompts.forEach((p, i) => {
    items.push({
      prompt: `Moodboard reference image (single subject, editorial interior photography): ${p}.`,
      aspect: "4:5",
      outPath: join(OUT, `${cluster}-${String(i + 1).padStart(2, "0")}.png`),
    });
  });
}
runBatch(items);
