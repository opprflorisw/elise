// Shared Gemini image-generation helper.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const env = readFileSync(join(root, ".env.local"), "utf8");
export const API_KEY = env.match(/GEMINI_API_KEY=(.+)/)[1].trim();
export const MODEL = "gemini-3-pro-image";

export const DNA = `
Design context: imagery for a high-end boutique interior architecture studio in Amsterdam,
"STUDIO VERSTELLE" (Interior Architecture & Property Transformation).
Design DNA: luxe eclectic, sculptural, architectural. A mix of 1930s, 1970s and contemporary
design. European metropolitan — Paris, Milan, New York. Sculptural furniture as the
architecture of the room; materials with depth (walnut, travertine, natural stone, polished
chrome, mohair, bouclé, smoked glass); color as a single powerful statement; 1970s elegance
(chrome, tubular frames, rounded volumes, rich fabrics, smoked glass). Chic and timeless but
NEVER boring, NEVER beige Scandinavian minimalism, NEVER cluttered classic eclecticism.
Gallery-like. Interiors that could only be in Paris or Milan. Editorial, art-directed,
magazine-quality photography. No text, no watermarks, no people unless asked.
`;

export async function genImage({ prompt, aspect = "16:9", outPath, retries = 3 }) {
  const body = {
    contents: [{ parts: [{ text: DNA + "\n\n" + prompt }] }],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
      imageConfig: { aspectRatio: aspect },
    },
  };
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
      const json = await res.json();
      const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
      if (!part) throw new Error("no image: " + JSON.stringify(json).slice(0, 200));
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, Buffer.from(part.inlineData.data, "base64"));
      return true;
    } catch (e) {
      console.error(`  ERR ${outPath} (${attempt}): ${e.message}`);
      if (attempt === retries) return false;
      await new Promise((r) => setTimeout(r, 4000 * attempt));
    }
  }
}

export async function runBatch(items) {
  let ok = 0;
  for (const it of items) {
    const done = await genImage(it);
    if (done) { ok++; console.log(`OK  ${it.outPath}`); }
    await new Promise((r) => setTimeout(r, 1500));
  }
  console.log(`DONE ${ok}/${items.length}`);
}
