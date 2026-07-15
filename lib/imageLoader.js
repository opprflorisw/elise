// Custom Next.js image loader.
// Static WebP assets live in the public/ folder of the public GitHub repo and are
// served, immutably, from jsDelivr's global CDN (pinned to a commit SHA so they never
// go stale). This keeps the Vercel deploy payload source-only while images load fast.
// Override with NEXT_PUBLIC_IMG_BASE (e.g. "" to serve local /public during dev).

const DEFAULT_BASE =
  "https://cdn.jsdelivr.net/gh/opprflorisw/elise@59d62d9704b7add3bc0a16af8f3f4b699e5a88a1/public";

const BASE =
  process.env.NEXT_PUBLIC_IMG_BASE !== undefined
    ? process.env.NEXT_PUBLIC_IMG_BASE
    : DEFAULT_BASE;

export default function jsdelivrLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${BASE}${src}`;
}
