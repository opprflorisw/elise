// ============================================================
// The front door. One hardcoded login for the whole site —
// journey, /site and /research alike. This is not auth: there
// are no accounts, no reset, no sessions. It exists only to
// keep the Vercel link out of strangers' hands before launch.
//
// The plaintext password lives nowhere in this repo; only the
// SHA-256 of "verstelle:<email>:<password>" does. That same
// digest is what the cookie carries, so the middleware can
// wave a visitor through with one string compare.
// ============================================================

export const COOKIE = "verstelle-login";

/** sha256("verstelle:" + email + ":" + password) */
export const TOKEN = "666eb18d609678efeae7be27c0ee20be460f92d021d41dc36020918ffd116a95";

export const MAX_AGE = 60 * 60 * 24 * 30; // 30 dagen

/** Web Crypto — works in both the edge middleware and the route handler. */
export async function digest(email: string, password: string): Promise<string> {
  const data = new TextEncoder().encode(
    `verstelle:${email.trim().toLowerCase()}:${password}`
  );
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Length-independent compare — no early exit on the first wrong byte. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
