// Convert all PNGs under public/ to sized WebP, replacing the PNGs.
import sharp from "sharp";
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join, extname } from "node:path";
import { root } from "./gemini.mjs";

const rules = [
  { match: /public[\\/]images[\\/]materials/, width: 520, q: 74 },
  { match: /public[\\/]images[\\/]moodboard/, width: 760, q: 76 },
  { match: /public[\\/]design/, width: 1200, q: 78 },
  { match: /public[\\/]images[\\/]concept/, width: 1500, q: 80 },
  { match: /public[\\/]images[\\/]backdrops/, width: 1600, q: 76 },
  { match: /public[\\/]images[\\/]method/, width: 1100, q: 78 },
  { match: /public[\\/]images[\\/]research/, width: 1000, q: 76 },
  { match: /public[\\/]images[\\/]site[\\/](home-hero|case-.*-hero)/, width: 2000, q: 80 },
  { match: /public[\\/]images[\\/]site/, width: 1400, q: 78 },
];
const fallback = { width: 1400, q: 78 };

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (extname(p).toLowerCase() === ".png") queue.push(p);
  }
}

const queue = [];
walk(join(root, "public"));

let saved = 0,
  before = 0,
  after = 0;
for (const png of queue) {
  const rule = rules.find((r) => r.match.test(png)) || fallback;
  const webp = png.replace(/\.png$/i, ".webp");
  const inSize = statSync(png).size;
  await sharp(png)
    .resize({ width: rule.width, withoutEnlargement: true })
    .webp({ quality: rule.q })
    .toFile(webp);
  const outSize = statSync(webp).size;
  unlinkSync(png);
  before += inSize;
  after += outSize;
  saved++;
}
console.log(`Converted ${saved} images: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`);
