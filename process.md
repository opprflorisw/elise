# Process — The Journey Website for Elise  *(LOCKED PLAN)*

> **Status:** BUILT & DEPLOYED 2026-07-15. Live (unlisted, noindex) at
> **https://elise-inky.vercel.app** — git-linked to `opprflorisw/elise` `main`, so every push
> auto-deploys. Built by Floris **for** Elise. Images served locally from `public/`.
>
> **2026-07-15 — Elise heeft de reis doorlopen (56 reacties, zie
> [`feedback-elise.md`](./feedback-elise.md)). Op basis daarvan is de ECHTE website gebouwd
> onder [`/site`](https://elise-inky.vercel.app/site)** — bereikbaar via de "De website ↗"
> pill rechtsboven in de reis. Donkere galerie-homepage, lichte editorial binnenpagina's
> (haar "te duister"-feedback), modern-contrast typografie, wordmark STUDIO-klein /
> VERSTELLE-groot, pagina's: portfolio (3 cases), aanpak, over, intake, klantportaal.
>
> **Source of truth for content:** [`elise.md`](./elise.md) — the studio profile.

---

## 1. The core idea

A **guided, scrollable web experience** — a *decision instrument*, not a brochure. It walks
Elise through everything defined so far and harvests her feedback at every step:

```
Starting Point → Manifest → Style & Moodboards → Roles / Functionality / AI → The Website (3 designs)
```

- Parts are **filled in** (what we already know from elise.md, presented as "this is who you
  are — we discovered this together").
- Parts are **open** — structured choices + free-form feedback affordances *everywhere*.
- At the end she downloads/sends a **complete feedback export**: every choice, reaction and
  comment, with references to what and where it was given.
- **Success criterion:** Floris receives that complete export — enough input to build her
  real website without another discovery conversation.

The journey is also a **live demo of the client-method idea** (§4): what she experiences is
what she could one day offer her own clients.

---

## 2. Locked decisions (grilling session, 2026-07-15)

| # | Topic | Decision |
|---|-------|----------|
| 1 | Purpose | **Decision instrument.** Wow-factor is a means, not the goal. |
| 2 | Interactivity | **Narrative + ~10–15 structured choices**, plus a subtle "leave feedback" affordance on every section. |
| 3 | Persistence | **localStorage only.** No backend, no auth. |
| 4 | Export | **Readable summary + embedded JSON.** Download + "send to Floris" shortcut (mailto/WhatsApp share). JSON = direct build input. |
| 5 | Stage 5 concept | **Three live styled landing-page slices** as real routes (`/website/a\|b\|c`), each ~1 screen deep: genuine typography, motion, color. |
| 6 | Stage 5 mechanic | **Not "pick a winner."** Per-design, per-element reactions (typography, imagery, color, layout, motion → love-it / not-me + optional comment) + one overall comment per design. Harvest what she likes/dislikes across all three. |
| 7 | Moodboards (Stage 3) | **Curated grid of ~30–40 generated images** in themed clusters; tap ❤️/👎 per image + optional comment. |
| 8 | Imagery | **Generation-heavy: Higgsfield + Gemini API** (key in `.env.local` — never committed or shared). Her 9 WhatsApp reference photos are a welcome supplement, not a blocker. |
| 9 | Language | **Dutch narrative + established English design vocabulary** (Architectural Collectible Living, Residential Transformation…). |
| 10 | AI section (Stage 4) | **Curated menu of real tools** — all four: space visualisation, moodboard/palette generator, client intake assistant, studio ops. **Star of the stage: the guided client-method (§4) with the meta-reveal.** |
| 11 | Reusability | **One-off for Elise, content-separated:** all copy/questions/images/choices in structured data files (JSON/MDX); components bespoke to her aesthetic. |
| 12 | Timeline | **1–2 focused build sessions.** Ship while momentum is hot. |
| 13 | Access | **Unlisted Vercel URL**, shared via WhatsApp. No auth. |
| 14 | Mobile | **Mobile-first** (she lives on her iPhone). |

---

## 3. The five stages (final flow)

### Stage 1 — Starting Point (`/`)
Narrative, cinematic scroll. Where this began: not a decorator, not an architect, not a
developer — the space in between. Sets the scene; no choices yet. Ends by inviting her in.

### Stage 2 — Manifest (`/manifest`)
The one-page Studio Manifest as a **living document that fills in as she answers**.
- *Filled:* what we do / don't do, who fits, how a space should feel (from elise.md).
- *Open choices:* what luxury means to her · what she'd never design · **the 3-materials
  exercise** (empty 250 m² Amsterdam-Zuid) · studio name direction (Interior Architecture
  Studio / Residential Transformation Studio / Design Agency / other).

### Stage 3 — Style, Color & Moodboards (`/style`)
- *Filled:* the style DNA — luxe eclectic, sculptural, 30s/70s/contemporary, Paris/Milan/NY,
  never boring; the five recurring elements; the three layers.
- *Open:* the **30–40 image reaction grid** (themed clusters: sculptural furniture, materials,
  color statements, era references, lighting) · 2–3 curated color palette directions ·
  typography direction (VERSTELLE-like serif vs alternatives).

### Stage 4 — Roles, Functionality & AI (`/build`)
- *Filled:* the two service pillars (Residential Transformation / Development Advisory,
  hospitality as inspiration).
- **Headline: the guided client-method with the meta-reveal** — "what you're experiencing
  right now is a method you could offer your clients": 3 photos of a client's room →
  AI-restyled variants → guided walkthrough (self-serve or live with voice capture) →
  structured feedback → final design. (Material database = later.)
- *Open:* confirm/adjust services · react to each of the 4 supporting AI tools
  (excites me / not for me) · what her own website must do.

### Stage 5 — The Website (`/website`)
Three live landing-page designs, each a real styled route:
1. **Gallery / editorial** — Sabine Marcelis-like, image-led, sparse
2. **Warm boutique** — Mokko-like, greige, serif-led, intimate
3. **Bold eclectic** — daring color, sculptural type, the "never boring" version

Per design: element-level reactions + comments (see §2.6). Ends with **the export screen**:
her complete feedback summary (readable + JSON) and the "send to Floris" action — the
journey's single call-to-action.

---

## 4. The client-method idea (Floris, during grilling — featured in Stage 4)

The journey format doubles as **Elise's future client-interview methodology**:
1. ~3 photos of a client's actual room.
2. Generate distinct restylings of those exact spaces in her design directions.
3. Guided walkthrough — self-serve (client clicks + comments) or live (Elise presents,
   **voice recorder captures** her explanations and the client's reactions).
4. All feedback captured with references → structured input for the final design.
5. Later: material database underneath. *(Out of scope now.)*

This is both an AI-menu item for her studio **and** the narrative twist of Stage 4.

---

## 5. Technical approach (locked)

- **Stack:** Next.js (App Router) + Tailwind, deployed on Vercel (unlisted URL).
  Static-first, client-side state only (localStorage). Note: Vercel CLI not installed yet —
  install during build (`npm i -g vercel`).
- **Content architecture:** all narrative copy, questions, choice definitions and image
  manifests live in structured data files (JSON/MDX) — components render them.
- **Feedback system:** one unified model — every feedback item = `{stageId, sectionId,
  itemId?, type: choice|reaction|comment, value, timestamp}` in localStorage. The export
  serializes this with human-readable labels.
- **Imagery pipeline:** generate moodboard/backdrop/concept imagery via Higgsfield and/or
  Gemini (`.env.local` → `GEMINI_API_KEY`). Curate hard — every image must plausibly belong
  in her world (sculptural, 30s/70s/contemporary, Paris/Milan/NY; never beige-minimalist).
- **Design bar:** the journey site itself must feel like her aesthetic — greige base,
  high-contrast serif (VERSTELLE direction), sculptural layout, chic motion. If it looks
  generic, the pitch fails.
- **Security note:** the Gemini key was shared in chat — consider rotating it after the
  project; keep it only in `.env.local` (gitignored).

## 6. Build phases

- **Phase 1 — Content assembly:** write all Dutch copy per stage (from elise.md), define
  every choice moment + feedback point precisely, generate & curate the image set,
  design the export schema.
- **Phase 2 — Skeleton:** Next.js app, 5 routes + 3 concept routes, flow/navigation,
  mobile-first layout, feedback state system.
- **Phase 3 — Design pass:** typography, palette, scroll/motion, the "filled vs open" visual
  language.
- **Phase 4 — Stage 5 payoff:** the three landing-page designs + element-level feedback UI.
- **Phase 5 — Export & polish:** summary/export screen, send-to-Floris action, iPhone
  testing, deploy to unlisted Vercel URL, hand to Elise via WhatsApp.

## 7. Still open (non-blocking)

- Floris may export Elise's 9 WhatsApp reference photos into `/screenshots` as supplement.
- Exact palette options for Stage 3 (derived during Phase 1 curation).
- The playful naming of the journey itself (working title: *"Het Begin" / "The Journey"* —
  decide in Phase 1).
- Gemini key rotation after project completion.
