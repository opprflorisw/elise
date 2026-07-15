# Implementation Plan — The Journey Website for Elise

> **Status: PLAN ONLY — nothing gets built until Floris approves this document.**
> Decisions source: [`process.md`](./process.md) (locked) · Content source: [`elise.md`](./elise.md)
> Repo: `https://github.com/opprflorisw/elise.git` · Deploy: Vercel (via MCP, unlisted URL)

---

## 0. What we're building (one paragraph)

A mobile-first, Dutch-language, five-stage scrollable journey (`Start → Manifest → Stijl →
Studio & AI → Website`) that presents everything defined about Elise's studio and harvests
her decisions and feedback at every step into a single downloadable export (readable +
JSON). Stage 5 contains three live-coded landing-page design slices she reacts to
element-by-element. No backend; localStorage only. The journey itself is styled in her
design DNA and doubles as a demo of the "guided client-method" pitched in Stage 4.

---

## 1. Tech stack & repo

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16 (App Router) + TypeScript** | Static-first, Vercel-native, per-route code-splitting for the 3 concept designs |
| Styling | **Tailwind CSS v4** + CSS custom properties for the stage/concept theming | Fast iteration; design tokens as variables so the 3 concepts + 5 stages can re-skin cleanly |
| Motion | **Motion (framer-motion successor) + CSS scroll-driven animations** | Staggered reveals, scroll-triggered narrative beats; CSS-only where possible |
| State | **React context + localStorage** (`useJourneyStore` hook) | No backend (locked decision) |
| Fonts | Google Fonts via `next/font` (self-hosted at build) | Zero-layout-shift, offline-safe |
| Images | Static `/public/images/*` — curated Gemini/Higgsfield output | Generation happens at build-time via `tools/`, never at runtime |
| Deploy | GitHub `opprflorisw/elise` → Vercel project (via Vercel MCP), unlisted production URL | Locked decision |
| Analytics/auth | **None** | Audience of one |

### Repo layout

```
elise/
├── elise.md, process.md, plan.md          # the paper trail (kept in repo)
├── design-explorations/                   # Gemini concept images → Floris selects
├── tools/
│   ├── generate-designs.mjs               # landing-page concept generator (done)
│   └── generate-moodboard.mjs             # Stage-3 moodboard image generator (Phase 1)
├── content/                               # ALL copy & choice definitions (locked: content-separated)
│   ├── stage1-start.json
│   ├── stage2-manifest.json
│   ├── stage3-stijl.json
│   ├── stage4-studio.json
│   ├── stage5-website.json
│   └── moodboard.json                     # image manifest: id, file, cluster, alt
├── app/
│   ├── layout.tsx                         # fonts, theme provider, JourneyProvider
│   ├── page.tsx                           # Stage 1 — Start
│   ├── manifest/page.tsx                  # Stage 2
│   ├── stijl/page.tsx                     # Stage 3
│   ├── studio/page.tsx                    # Stage 4
│   ├── website/page.tsx                   # Stage 5 hub
│   ├── website/a/page.tsx                 # Concept A (own layout, own fonts)
│   ├── website/b/page.tsx                 # Concept B
│   ├── website/c/page.tsx                 # Concept C
│   └── overzicht/page.tsx                 # Export screen ("Jouw keuzes")
├── components/
│   ├── journey/   (JourneyNav, ProgressThread, StageIntro, NarrativeBlock, FilledCard)
│   ├── feedback/  (ChoicePicker, ReactionGrid, FeedbackDot, CommentSheet, MaterialPicker,
│   │               PaletteChooser, ElementFeedbackOverlay, ExportPanel)
│   └── concepts/  (per-concept hero components, isolated styling)
├── lib/
│   ├── store.ts                           # journey state, localStorage sync, schema below
│   ├── export.ts                          # readable summary + JSON serializer
│   └── content.ts                         # typed loaders for /content
└── public/images/                         # curated final imagery
```

---

## 2. Design system (the journey's own skin)

The journey must *feel like Elise's world* — greige, sculptural, editorial, with color as
statement. Not beige-minimalist, never generic.

### 2.1 Typography

| Role | Font | Notes |
|---|---|---|
| Wordmark / stage numerals | **Italiana** | Single-weight high-contrast serif — closest Google-font match to the STUDIO VERSTELLE reference; used big and sparse |
| Headlines / pull quotes | **Fraunces** (variable) | Optical-size + SOFT/WONK axes give it that 30s/70s eclectic character while staying chic; used for Dutch narrative headlines |
| Body / narrative | **Fraunces** text weights (72pt optical off) | Long-form Dutch reads warm and editorial |
| UI / labels / nav | **Archivo** (wide-tracked uppercase for labels) | Neutral but characterful; never Inter/Roboto |

Type scale (mobile-first): display `clamp(2.75rem → 6rem)`, tight leading (0.95) for
headlines, generous (1.7) for body. Wide letter-spacing (0.35em) on small-caps labels —
echoing the "S T U D I O" treatment in her logo reference.

### 2.2 Color

Base palette (the journey chrome):

```
--paper:      #EFEAE3   (warm greige — the VERSTELLE background)
--paper-deep: #E4DDD2   (section alternation)
--ink:        #1C1917   (warm near-black)
--line:       #1C191722 (hairlines everywhere — editorial rules)
```

**Color-as-statement, per stage** (her DNA: "color lands in ONE element"):

| Stage | Accent | Rationale |
|---|---|---|
| 1 Start | `--bordeaux #6E1423` | The Parisian red thread that literally "draws" the journey |
| 2 Manifest | `--ink` only + gold hairline `#9C7A3C` | A manifest is black on paper |
| 3 Stijl | `--cobalt #23409A` | Her sculptural blue sofa |
| 4 Studio | `--seventies #B4562A` (burnt sienna) | The 70s warmth |
| 5 Website | neutral — the 3 concepts carry their own palettes | No bias toward any concept |

Texture: subtle film grain overlay (2–3% opacity), plaster-like paper background (CSS
noise), hairline rules between sections. No gradients-on-white, no purple, ever.

### 2.3 Layout language

- **Asymmetric editorial grid** (12-col desktop, 4-col mobile) with deliberate overlap:
  images breaking column boundaries, captions rotated 90° in gutters.
- **The arch** as recurring motif (from her Parisian references): image masks
  (`clip-path`/`border-radius: 50% 50% 0 0`), section dividers, the choice-card shape.
- **A continuous "red thread"**: a thin bordeaux SVG line that draws itself down the page
  as you scroll (scroll-linked `stroke-dashoffset`), connecting stages — the visual
  metaphor of the journey. It's the one memorable thing.
- Stage numerals (`I — V`) huge in Italiana, fixed in the corner like chapter marks.

### 2.4 Motion

- One orchestrated load reveal per stage: staggered fade/translate (80ms steps), headline
  first via masked line-by-line reveal.
- Scroll-driven: narrative paragraphs fade in at 30% viewport; images scale 1.04→1.0;
  the red thread draws continuously.
- Micro: choice cards tilt 0.5° on press; the ❤️ reaction blooms with a small spring;
  feedback dots pulse once when a section enters view (invitation, not nagging).
- Respect `prefers-reduced-motion` throughout.

### 2.5 The "filled vs open" visual language

- **Filled** (established facts): set as elegant typeset paragraphs / cards with a small
  gold seal-like marker — "dit weten we al" (we already know this).
- **Open** (her choices): framed in arch-topped cards with the stage accent color and a
  handwritten-style annotation label — "aan jou" (up to you). Clear, consistent contrast
  between the two across all stages.

---

## 3. Feedback & choice system (the machine under the chic)

### 3.1 Data model (localStorage key `elise-journey-v1`)

```ts
type FeedbackItem = {
  stageId: 'start'|'manifest'|'stijl'|'studio'|'website';
  sectionId: string;          // e.g. 'manifest.naam', 'website.b.typography'
  itemId?: string;            // e.g. moodboard image id 'mb-017'
  type: 'choice'|'reaction'|'comment'|'text';
  value: string | string[];   // choice id(s), 'love'|'no', or free text
  label: string;              // human-readable question/subject (denormalized for export)
  ts: number;
};
type JourneyState = {
  items: Record<string, FeedbackItem>;     // keyed by stageId.sectionId(.itemId)
  visited: string[];                        // stage progress
  startedAt: number;
};
```

### 3.2 Components

| Component | Behaviour |
|---|---|
| `ChoicePicker` | 2–4 arch cards, single/multi select, optional "anders…" free text |
| `ReactionGrid` | Moodboard grid; tap = ❤️/👎 toggle cycle; long-press opens `CommentSheet` |
| `FeedbackDot` | Small floating affordance on EVERY section; opens `CommentSheet` bound to that sectionId |
| `CommentSheet` | Bottom sheet (mobile-first), textarea, saves comment |
| `MaterialPicker` | The 3-materials exercise: pick exactly 3 from ~12 illustrated material cards |
| `PaletteChooser` | 3 curated palettes as painted swatch strips |
| `ElementFeedbackOverlay` | Stage 5: per-concept floating panel listing 5 elements (typografie / beeld / kleur / layout / gevoel), each love/no + comment |
| `ProgressThread` | The red line + stage completion state in nav |
| `ExportPanel` | Renders readable summary grouped by stage → `Download` (HTML file with embedded JSON `<script type="application/json">`) + `Deel met Floris` (WhatsApp share / mailto with compact summary) |

### 3.3 Export format

One self-contained HTML file (`elise-keuzes.html`): styled readable recap (every choice,
reaction count per cluster, all comments with their location labels) + full `JourneyState`
JSON embedded. WhatsApp share sends a short text digest + reminds her to send the file.
*(Fallback if file download is awkward on iPhone: "kopieer alles" copies a markdown digest.)*

---

## 4. Per-stage specification (every choice moment enumerated)

### Stage 1 — `/` "Het begin" *(no choices — pure narrative)*
Beats: (1) cinematic opening — her own words as oversized quote; (2) "geen interieurontwerper,
geen architect, geen ontwikkelaar" strikethrough sequence; (3) the space in between —
*Interior Architecture & Property Transformation*; (4) invitation: "vijf hoofdstukken, jouw
keuzes" + how feedback works (30-sec explainer of dots & hearts). CTA → Manifest.

### Stage 2 — `/manifest` "Het manifest"
Living document that visually completes as she answers.
Filled: wat we doen / niet doen (from elise.md §2), voor wie (§4), hospitality als inspiratie.
| ID | Choice | Component |
|---|---|---|
| `manifest.naam` | Studio-type: Interior Architecture Studio / Residential Transformation Studio / Design Agency / anders | ChoicePicker |
| `manifest.luxe` | "Wat is luxe voor jou?" — 4 curated definitions + anders | ChoicePicker |
| `manifest.nooit` | "Wat ontwerpen we nooit?" — multi-select + anders | ChoicePicker (multi) |
| `manifest.materialen` | The 250 m² exercise — pick exactly 3 materials | MaterialPicker |
| `manifest.gevoel` | "Hoe moet een ruimte voelen?" — free text | text |

### Stage 3 — `/stijl` "De stijl"
Filled: the 5 recurring elements + 3 layers (elise.md §3) as an editorial sequence.
| ID | Choice | Component |
|---|---|---|
| `stijl.moodboard.*` | ~30–40 generated images in 5 clusters (sculpturaal meubilair / materialen / kleurstatements / jaren-30-70 / licht) | ReactionGrid |
| `stijl.palet` | 3 curated color palettes | PaletteChooser |
| `stijl.typografie` | 3 type specimens (VERSTELLE-achtig serif / modern contrast / eclectisch) | ChoicePicker |

### Stage 4 — `/studio` "De studio & AI"
Filled: two service pillars. **Headline: the client-method with the meta-reveal** ("wat je
nu doet — reageren op beelden, keuzes maken — is precies wat jij je klanten kunt bieden"),
told as a 4-step illustrated sequence (3 foto's → varianten → begeleide sessie → definitief
ontwerp).
| ID | Choice | Component |
|---|---|---|
| `studio.diensten` | Confirm/adjust the two pillars | ChoicePicker + comment |
| `studio.ai.visualisatie` / `.moodboards` / `.intake` / `.ops` | Each tool: "dit wil ik / niet voor mij" + comment | ChoicePicker ×4 |
| `studio.methode` | Reaction to the client-method itself | ChoicePicker + comment |
| `studio.website-functies` | What her own site must do (portfolio / intake / journal / klantportaal) | ChoicePicker (multi) |

### Stage 5 — `/website` "De website"
Hub explains: "drie richtingen — geen winnaar kiezen, vertel wat je aantrekt en afstoot."
Three full-viewport live concept slices (each a real route, own fonts/palette/motion,
~1.5 screens: nav + hero + one project teaser). Directions get **rebuilt from whichever
design-explorations images Floris selects** — provisional:
- **A Galerie/Editorial** (Marcelis-achtig) · **B Warm Boutique** (Mokko/VERSTELLE-achtig) · **C Gedurfd Eclectisch**
Per concept: `ElementFeedbackOverlay` → `website.{a|b|c}.{typografie|beeld|kleur|layout|gevoel}` + `website.{x}.overall` comment.
Then → `/overzicht`: completeness check ("nog 3 vragen open in Manifest"), ExportPanel. **The single CTA of the whole site: stuur alles naar Floris.**

---

## 5. Imagery pipeline

1. **Now (done):** `tools/generate-designs.mjs` → 15 landing-page concepts in
   `design-explorations/` across 5 style directions (A gallery-editorial, B warm boutique,
   C bold eclectic, D Parisian collected, E dark gallery). **Floris selects favorites** →
   those define the final three Stage-5 concepts (may remix directions).
2. **Phase 1:** `tools/generate-moodboard.mjs` → ~50 candidates in the 5 clusters
   (gemini-3-pro-image, 4:5 portrait for the grid), hand-curate down to 30–40. Every image
   must pass the DNA test: sculptural / 30s-70s-contemporary / Paris-Milan — never beige.
3. **Phase 1:** palette-strip images + material-card images (12 materials) + Stage-4
   method illustrations (3 foto's → varianten sequence, can be generated as one storyboard).
4. All finals optimized (≤200 KB, AVIF/WebP via `next/image`).

## 6. Build order (maps to the 1–2 locked sessions)

**Session 1:** scaffold Next.js + Tailwind + fonts + tokens → journey store + feedback
components → Stages 1–2 complete (content JSON + design pass) → Stage 3 with curated
imagery → deploy first preview to Vercel (via MCP) for Floris.
**Session 2:** Stage 4 → the three Stage-5 concepts (from Floris's selection) +
ElementFeedbackOverlay → `/overzicht` export → iPhone pass (safe areas, sheet UX, share
flow) → `prefers-reduced-motion` + performance pass → production deploy, unlisted URL.

**Acceptance checklist before handing to Elise:** all ~15 choice IDs write/restore
correctly after refresh · export file opens standalone & contains full JSON · WhatsApp
share works on iPhone · every section has a FeedbackDot · red thread draws on scroll ·
LCP < 2.5s on 4G · no English UI strings except design vocabulary.

## 7. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Gemini images look AI-generic → undermines the pitch | Generate 3–4× more than needed, curate ruthlessly; Floris approves the set |
| 3 concepts × own design = scope creep | Hard cap: 1.5 screens per concept, shared feedback machinery |
| iPhone file-download friction for export | "Kopieer alles" fallback + WhatsApp text digest |
| Feedback fatigue mid-journey | Progress thread shows how close she is; comments always optional; only choices count toward completeness |
| Key in `.env.local` was chat-shared | Rotate after project; never committed (gitignored) |

## 8. Approval gate — what Floris decides before build

1. **Select favorite design-exploration images** (in `design-explorations/`) → defines the 3 Stage-5 concepts.
2. Approve this plan (or mark up changes) — especially: fonts (§2.1), stage accents (§2.2), the red-thread motif (§2.3), choice list (§4), export format (§3.3).
3. Confirm the journey's working title shown to Elise (proposal: **"Het begin van de studio"**).
