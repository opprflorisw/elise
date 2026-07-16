// Imagery for the tool demos in /research — the "Van Dam" mock world.
//
// Two registers here, deliberately:
//  1. The KLANTFOTO's are anti-DNA on purpose. They must look like a real phone
//     snapshot of an ordinary Amsterdam upstairs flat — the honest "before" a
//     client actually sends in. Using a beautiful image here would make the demo
//     lie about what the engine does.
//  2. The VARIANTEN are full DNA — the same room, transformed.
//  3. One variant is deliberately BROKEN (geometry drift) because expectation
//     management is part of the product, not a disclaimer.
import { join } from "node:path";
import { runBatch, root } from "./gemini.mjs";

// The client photos must escape the studio DNA entirely.
const PLAIN = `
Photograph: an ordinary, real, slightly messy Dutch home interior, shot on a phone by the
resident. Amateur snapshot quality: slightly crooked horizon, flat daylight from the window,
no styling, no art direction. An upstairs flat ("bovenwoning") in Amsterdam, 1930s building.
Generic contemporary IKEA-ish furniture, white walls, laminate or plain oak floor, a bit of
clutter — a laptop, a plant, a throw blanket. It is not ugly, it is just unremarkable and real.
Absolutely NOT a magazine photo. No styling, no drama, no text, no people, no watermarks.
`;

const SHOTS = [
  // ---- the client's own photos (deliberately plain) ----
  {
    out: "klantfoto-woonkamer",
    aspect: "4:3",
    raw: PLAIN + `
      The living room of the flat, photographed from the doorway. Two tall 1930s windows
      with plain white frames on the left wall, a modest sofa against the right wall, a low
      coffee table, a flat-screen TV on a small cabinet. Original wooden floor, worn.
      Ceiling has simple 1930s mouldings. Daylight, overcast.`,
  },
  {
    out: "klantfoto-eetkamer",
    aspect: "4:3",
    raw: PLAIN + `
      The adjoining dining area of the same flat, straight-on. A plain rectangular dining
      table with four mismatched chairs, a pendant lamp too high above it, a radiator under
      the window, a bare wall waiting for something. Same worn wooden floor.`,
  },
  {
    out: "klantfoto-detail",
    aspect: "1:1",
    raw: PLAIN + `
      Close detail of the same flat: the corner where the 1930s window frame meets the wall
      and the worn wooden floor. Cheap white paint over old wood, a radiator pipe, a scuff
      mark. Honest, unremarkable, real.`,
  },

  // ---- the variants: same room, Verstelle DNA ----
  {
    out: "variant-burl",
    aspect: "4:3",
    prompt: `
      The SAME 1930s Amsterdam living room as a plain client photo: two tall windows on the
      LEFT wall in exactly the same position, the same ceiling mouldings, the same room
      proportions and camera position from the doorway. Now transformed in the studio's
      handwriting: a sculptural burl-wood cabinet as the room's anchor, a deep curved sofa,
      polished chrome accents, a single powerful color statement. The architecture of the
      room is UNCHANGED — same windows, same wall positions, same ceiling height. Only the
      interior is new. Editorial, art-directed, gallery-like.`,
  },
  {
    out: "variant-mohair",
    aspect: "4:3",
    prompt: `
      The SAME 1930s Amsterdam living room, same camera position from the doorway, two tall
      windows on the LEFT wall in the same position, same ceiling mouldings and proportions.
      Transformed with a mohair-green register: a deep green mohair curved sofa as the
      sculptural centre, travertine side table, smoked glass, tubular chrome. Same
      architecture, new interior. Editorial, gallery-like.`,
  },
  {
    out: "variant-chroom",
    aspect: "4:3",
    prompt: `
      The SAME 1930s Amsterdam living room, same camera position, two tall windows on the
      LEFT wall, same mouldings and proportions. Transformed with a chrome-and-glass
      register: tubular chrome seating, a smoked-glass low table, a sculptural floor lamp,
      one rich fabric as the counterweight. 1970s elegance in a 1930s room. Same
      architecture, new interior. Editorial, gallery-like.`,
  },
  {
    out: "variant-eetkamer",
    aspect: "4:3",
    prompt: `
      The SAME dining area of a 1930s Amsterdam flat, same camera position, window and
      radiator in the same place. Transformed: a sculptural round dining table in stone,
      1970s chrome-and-mohair chairs, a statement pendant hung at the right height, one
      bold artwork on the bare wall. Same architecture, new interior. Editorial.`,
  },

  // ---- the honest failure: geometry drift ----
  {
    out: "variant-drift",
    aspect: "4:3",
    prompt: `
      A 1930s Amsterdam living room in the studio's handwriting — burl wood, chrome, a deep
      curved sofa, rich color. BUT the architecture has subtly drifted from the original
      room: there is now only ONE window instead of two and it has moved toward the centre
      of the wall, the ceiling is noticeably higher, the room is wider, and the mouldings
      have a different profile. Beautiful but architecturally a different room. Editorial,
      gallery-like.`,
  },
];

runBatch(
  SHOTS.map((s) => ({
    aspect: s.aspect,
    // the plain client photos bypass the DNA prompt entirely
    prompt: s.raw ?? s.prompt,
    skipDNA: Boolean(s.raw),
    outPath: join(root, "public/images/research-raw", `${s.out}.png`),
  }))
);
