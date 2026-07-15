// Regenerate the client-method illustrations — more descriptive of the actual workflow.
import { join } from "node:path";
import { root, runBatch } from "./gemini.mjs";
const IMG = join(root, "public/images/method");

const items = [
  {
    // Step 1 — three photos of the client's real, ordinary room (the "before")
    prompt: `An editorial documentary photo: three ordinary smartphone snapshots of a plain,
    slightly dated but real Amsterdam apartment living room (white walls, existing sofa, a window),
    printed and arranged/pinned together on a warm plaster surface, like the raw starting material
    of a project. Honest and un-styled — this is the "before". Soft daylight, no text.`,
    aspect: "16:9",
    outPath: join(IMG, "step-1.png"),
  },
  {
    // Step 2 — the SAME room shown as several AI-visualised luxe variants side by side
    prompt: `A clean triptych: the SAME living room shown three times side by side, each
    reimagined in a different luxe-eclectic interior style — one warm greige Parisian, one dusky
    espresso with green velvet, one dramatic dark walnut. Same room layout and window, different
    sculptural furniture and materials in each. Presented like AI-generated design variations of
    one space, framed as three panels. No text, no watermarks.`,
    aspect: "16:9",
    outPath: join(IMG, "step-2.png"),
  },
  {
    // Step 3 — the guided session WITH speech capture
    prompt: `A warm over-the-shoulder scene: a designer and a client sitting at a travertine
    table, looking together at a tablet that displays interior design variations. A hand gestures
    toward the screen. Across the lower third, a subtle elegant glowing audio waveform / soundwave
    ribbon in champagne-gold suggests the conversation is being listened to and captured. Intimate,
    high-end, natural light. No text.`,
    aspect: "16:9",
    outPath: join(IMG, "step-3.png"),
  },
  {
    // Step 4 — the realised exceptional interior
    prompt: `The finished, realised interior: an exceptional sculptural living room, warm and
    cinematic, walnut and travertine, one bold colour statement, 1970s chrome elegance — the same
    space from step one, now transformed into something that could be in Paris or Milan. Golden
    hour. Hero-quality. No text.`,
    aspect: "16:9",
    outPath: join(IMG, "step-4.png"),
  },
  {
    // Speech augmentation — capturing soft opinions
    prompt: `A refined conceptual image: a warm dark interior scene softly out of focus, with an
    elegant luminous audio waveform / soundwave arc flowing across it in champagne-gold and soft
    bordeaux, evoking a spoken conversation being understood. Small glowing dots along the wave
    mark captured moments. Sophisticated, editorial, atmospheric. No readable text, no watermarks.`,
    aspect: "16:9",
    outPath: join(IMG, "speech.png"),
  },
];

runBatch(items);
