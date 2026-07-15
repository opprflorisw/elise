// Imagery for the REAL Studio Verstelle website (/site) — driven by Elise's feedback:
// galerie-nacht palette (dark cinematic hero, light editorial body), burl wood, green
// mohair, chrome, sunken lounge (zitkuil), vide/double-height, grand-but-calm, light
// as an essential ingredient. "Een cocon van verbeelding, doch rust."
import { join } from "node:path";
import { root, runBatch } from "./gemini.mjs";
const IMG = join(root, "public/images/site");

const items = [
  // ---- HOME ----
  {
    prompt: `Hero image, cinematic wide interior: a grand near-black gallery-like living room
    at dusk. Charcoal-black limewashed walls, honed travertine floor, one monumental sculptural
    sofa in deep cobalt blue as the single colour statement, a low burl-wood coffee table,
    polished chrome floor lamp casting warm pools of light. Tall dark-framed windows with the
    last warm daylight. Dramatic yet WARM and inviting — not gloomy. Museum-calm but livable.`,
    aspect: "21:9",
    outPath: join(IMG, "home-hero.png"),
  },
  {
    prompt: `A grand double-height living space with a vide / mezzanine, flooded with soft
    daylight. Warm white and travertine tones, one sculptural staircase, a single oversized
    pendant light. Layered levels, generous emptiness, a few strong statement pieces only.
    Light, airy, monumental yet serene.`,
    aspect: "16:9",
    outPath: join(IMG, "home-groots.png"),
  },
  {
    prompt: `Close editorial detail: a burl-wood credenza with dramatic swirling grain, a
    polished chrome sculptural object on top, warm directional light raking across the
    surfaces. Dark warm background, rich texture. Luxurious material photography.`,
    aspect: "4:5",
    outPath: join(IMG, "home-detail-burl.png"),
  },
  {
    prompt: `A sculptural curved sofa upholstered in deep green mohair, standing like a
    sculpture in a light warm-white room with travertine floor, soft daylight from a tall
    window, subtle chrome side table. Calm, gallery-like, one strong statement.`,
    aspect: "4:5",
    outPath: join(IMG, "home-detail-mohair.png"),
  },
  // ---- CASE 1: canal apartment, Parisian layering ----
  {
    prompt: `A renovated Amsterdam canal-house living room, Parisian layering: warm greige
    limewash walls, restored high ceilings with subtle mouldings, herringbone oak floor, a
    bordeaux velvet statement sofa, 1970s chrome-and-smoked-glass coffee table, sculptural
    vintage armchair. Tall canal windows with soft daylight. Elegant, layered, calm.`,
    aspect: "16:9",
    outPath: join(IMG, "case-gracht-hero.png"),
  },
  {
    prompt: `Same Amsterdam canal house: a corner with a marble fireplace, above it one large
    bold abstract artwork, a burl-wood side table with a chrome lamp, warm greige walls.
    Vertical editorial composition, soft natural light.`,
    aspect: "4:5",
    outPath: join(IMG, "case-gracht-1.png"),
  },
  {
    prompt: `Same Amsterdam canal house: the dining area — a travertine dining table with
    sculptural 1970s chairs, a dramatic pendant lamp low over the table, view through original
    panelled doors into the next room (enfilade). Layered sightlines, warm daylight.`,
    aspect: "4:5",
    outPath: join(IMG, "case-gracht-2.png"),
  },
  {
    prompt: `Same Amsterdam canal house at evening: warm lamplight only, layered pools of
    light from three different sculptural lamps, bordeaux and greige tones, cocoon-like
    intimacy. Cinematic but warm.`,
    aspect: "16:9",
    outPath: join(IMG, "case-gracht-3.png"),
  },
  // ---- CASE 2: sunken lounge, seventies ----
  {
    prompt: `A spectacular sunken conversation pit (zitkuil) in a modernist home: the lounge
    dug one level down, upholstered fully in deep green mohair, surrounded by a travertine
    floor plateau, a chrome arc lamp bending over it, floor-to-ceiling windows to a garden.
    1970s elegance made contemporary. Grand, playful, calm. Daylight.`,
    aspect: "16:9",
    outPath: join(IMG, "case-kuil-hero.png"),
  },
  {
    prompt: `Detail of the same green-mohair sunken lounge: the corner where the upholstered
    steps descend, a burl-wood built-in ledge holding a stack of art books and a chrome
    object, warm afternoon sun striping across the mohair.`,
    aspect: "4:5",
    outPath: join(IMG, "case-kuil-1.png"),
  },
  {
    prompt: `Same modernist home: a hallway with a dramatic ceiling-height smoked-glass and
    chrome room divider, travertine floor, one cobalt blue sculptural chair as statement,
    daylight from a skylight above. Architectural, gallery-like.`,
    aspect: "4:5",
    outPath: join(IMG, "case-kuil-2.png"),
  },
  {
    prompt: `The green mohair sunken lounge at night: recessed warm lighting glowing from
    under the travertine edge, the chrome arc lamp lit, dark windows, intimate cocoon
    atmosphere — warm and enveloping, never gloomy.`,
    aspect: "16:9",
    outPath: join(IMG, "case-kuil-3.png"),
  },
  // ---- CASE 3: loft with vide, dark walnut drama ----
  {
    prompt: `A converted industrial loft with a double-height vide: dark walnut panelled
    wall rising two storeys, a suspended steel mezzanine, huge factory windows pouring in
    daylight, a monumental cobalt blue modular sofa below, travertine plinth coffee table.
    Dramatic contrast of dark wood and bright daylight. Grand, museum-calm, livable.`,
    aspect: "16:9",
    outPath: join(IMG, "case-vide-hero.png"),
  },
  {
    prompt: `Same loft: view from the mezzanine down into the living space — the cobalt sofa
    from above, sightlines across levels, a sculptural spiral stair in dark steel, daylight.
    Layered architecture, vertical editorial composition.`,
    aspect: "4:5",
    outPath: join(IMG, "case-vide-1.png"),
  },
  {
    prompt: `Same loft: the kitchen — dark walnut cabinetry with dramatic grain, a monolithic
    travertine island, chrome fixtures, one wall in warm white limewash, morning light.
    Minimal count of objects, maximum material depth.`,
    aspect: "4:5",
    outPath: join(IMG, "case-vide-2.png"),
  },
  {
    prompt: `Same loft at golden hour: low sun through the factory windows striping the dark
    walnut wall, the cobalt sofa glowing, one chrome floor lamp lit. Cinematic warmth.`,
    aspect: "16:9",
    outPath: join(IMG, "case-vide-3.png"),
  },
  // ---- OVER + PORTAAL ----
  {
    prompt: `An interior architect's atelier work table seen from above at an angle: material
    samples arranged with intent — a slab of burl wood, deep green mohair swatches, polished
    chrome samples, travertine offcuts, a bordeaux lacquer chip — plus a pencil sketch of a
    floor plan and a small architectural model. Warm daylight, greige linen surface.
    Editorial still life, no people.`,
    aspect: "4:5",
    outPath: join(IMG, "over-atelier.png"),
  },
  {
    prompt: `A quiet architectural detail: a warm-lit niche in a travertine wall holding a
    single chrome sculptural object, soft shadow gradient, near-black surroundings with warm
    light. Serene, precious, gallery-like.`,
    aspect: "16:9",
    outPath: join(IMG, "portaal.png"),
  },
];

runBatch(items);
