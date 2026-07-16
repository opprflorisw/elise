# instructions.md — Studio Verstelle: van dossier naar werkinstrument

> **What this document is.** A complete, self-contained work order for an AI agent (with
> subagents) to upgrade the existing `/research` dossier from a *reading* document into a
> *working* instrument: full PRDs + clickable mock demos for every tool we intend to build,
> a buy-catalogue with real options and links, the raw research notes readable on the site,
> competitor links everywhere, and a business-coach layer ("do this yourself / think about
> this") on every chapter. Then ship it: **committed, pushed, live on Vercel, with one
> hardcoded login on the whole site** (`eliseverstelle@hotmail.com` / `joosensjors`).
>
> **What this document is NOT.** This is not a rewrite of the dossier. The 12 chapters,
> their findings, calculators and design system are done and correct. You are *extending*
> them. Do not re-research what `research-notes/` already answers; do not soften findings
> that are inconvenient (the dossier's value is that it broke the original plan in places).
>
> **Access model (updated by Floris):** ONE login gate on the **entire deployment** —
> journey, `/site` and `/research` alike. Hardcoded credentials, no real auth system:
> user `eliseverstelle@hotmail.com`, password `joosensjors`. Nothing inside the site
> carries its own password; the only barrier is at the front door of the Vercel link.
>
> **Predecessor documents:** `investigation.md` (the research work order — completed),
> `feedback-elise.md` (Elise's 56 choices), `elise.md` (style DNA). Read all three first.

---

## 0. Context (read first)

### Where the project stands
- **Repo:** github.com/opprflorisw/elise — one Next.js 15 App Router app (React 19,
  Tailwind v4 CSS-first, TypeScript) containing three surfaces:
  1. **The journey** (`/`, 5 stages) — the decision instrument Elise completed.
  2. **`/site`** — the real client-facing website (dark gallery home, light inner pages).
  3. **`/research`** — the internal business dossier: 12 Dutch chapters + executive
     summary, grouped Fundament → Strategie → Machine → Uitvoering (`lib/research.ts`),
     4 interactive calculators, own "werkkamer" sub-identity (`.research` scope in
     `app/globals.css`: warm paper `#f2ede4`, night ink, cobalt data accents, Archivo
     expanded caps, 32px grid background).
- **Raw research notes:** `research-notes/*.md` — 8 files, ~60.000 words, every claim
  with source URL + date + confidence label (`[zeker: hoog/middel/laag]` / `[schatting]`):
  `markt.md`, `concurrentie.md`, `onderscheid.md`, `prijsmodel.md`, `marketing.md`,
  `setup.md`, `tools-buildvsbuy.md`, `validatie.md`.
- **Current git state:** the entire `/research` build (plus 4 small file edits) is
  **local and uncommitted** — deliberately, Floris wanted to review first. Your job
  includes committing and shipping it all.
- **Vercel:** project `elise` (team "Floris' projects"), git-linked to `main` → every
  push auto-deploys. Live at https://elise-inky.vercel.app. The whole app is `noindex`.
- **Shared components you must reuse** (do not invent parallel ones):
  `components/research/Blocks.tsx` (PageHead, Section, Prose, Conf, Est, Stat, Table,
  CounterCase, Decision(s), Sources, NextPage, Thesis, Versus),
  `components/research/Charts.tsx` (Figure, Funnel, PositioningMap, StackedBars,
  CostBars, RiskMatrix), `components/research/Calculators.tsx`,
  `components/research/Pipeline.tsx`, `components/research/Tools.tsx`.

### Findings that constrain everything you write (do not contradict these)
1. **€250k solo = €201/uur invariant.** The originally proposed mix needed 1.895 h against
   1.242 available. Any tool PRD that claims time savings must express them in hours,
   because hours are the binding constraint — AI costs are noise (€8,66/Verkenning, 99,6%
   gross margin on AI).
2. **AI comes OUT of the client-facing proposition.** 86% of consumers already use AI;
   leading with it puts a €10.000 service next to a free app. Tools are internal leverage
   ("de machinekamer"), not marketing. PRDs may be enthusiastic about AI internally;
   client-visible surfaces sell taste, method and delivery.
3. **Geometry drift is the #1 technical risk.** No image model *guarantees* "this is still
   your room". Gemini 3 Pro Image is the current choice; FLUX.2 depth-conditioning is the
   prepared fallback. Every visualisation-related PRD must carry this risk explicitly.
4. **"interieurarchitect" is a protected title** (Wet op de architectentitel, incl. the
   English "interior architect/architecture" and compound words). All copy — including
   your new pages — uses "interieurontwerp", "interior designer", "Residential
   Transformation Studio".
5. **The weakest evidence is our core claim.** No Dutch client quote supports the
   "I couldn't visualize it" pain (Houzz 2023: only 18% call it an obstacle). Do not
   present the method's premise as proven; the dossier recommends 5–8 client interviews
   first, and the coach layer you build should push Elise toward exactly that.

---

## 1. How to work

1. **Language:** all new site content in **Dutch** (Elise is the reader). This work order
   is English for agent precision. Keep the dossier's tone: precise, honest, art-directed
   strategy document — never dashboard-template, never consultant-fluff.
2. **Design:** load the `frontend-design` and `dataviz` skills before touching UI. Stay
   inside the `.research` scope and its existing tokens. New components follow the
   established idiom (Archivo expanded kickers, Fraunces prose, hairline borders,
   travertine accents, cobalt only for data/interactive).
3. **Honesty markers stay:** every new factual claim gets a source + date or `[schatting]`;
   confidence labels via the existing `Conf` component. Mock data is always labeled
   **"fictieve data"** visibly in the UI.
4. **Verify locally before pushing:** `npm run build` clean, all routes 200, no console
   errors, no horizontal scroll, calculators still work, localStorage keys unchanged.
5. **Do not touch** `/site` content, the journey stages, or `feedback-elise.md`. The only
   allowed edit outside `/research` + middleware is the nav pill wiring that already
   exists.
6. **Subagents:** parallelize per workstream (they are independent until the final deploy).
   Suggested split: WS-A gate+notes, WS-B chapter enrichment, WS-C PRDs+demos, WS-D
   buy-catalogue, then one integration/verify pass.
7. **Commit style:** small commits per workstream on `main` (repo convention: descriptive
   single-line messages). Push once everything passes locally — pushing deploys production.

---

## 2. Workstream A1 — one login on the whole site

**Goal:** the **entire deployment** — journey, `/site`, `/research`, everything — is
inaccessible until you log in once. Hardcoded credentials, deliberately simple: **no
auth provider, no database, no accounts, no reset flow.** Just a branded login screen
that keeps strangers out of the Vercel link.

- **User:** `eliseverstelle@hotmail.com`
- **Password:** `joosensjors`
- **No other passwords anywhere on the site.** `/research` gets no gate of its own —
  once past the front door, everything is open. (This replaces the earlier
  research-only gate idea entirely; if any `/research-toegang` remnant exists, remove it.)

### Spec
- **Hardcode the credentials** as constants in the middleware/handler (Floris's explicit
  choice — no env vars needed). Compare the SHA-256 of the submitted password against a
  precomputed hash constant rather than the plaintext, purely so the password isn't
  grep-able in the client bundle; the email may be a plain constant.
- **`middleware.ts`** (repo root), matcher: everything EXCEPT `/inloggen`, the auth
  route handler, `_next/*`, and static assets (images, fonts, favicon, robots). Use a
  negative-lookahead matcher, e.g.
  `["/((?!inloggen|api/login|_next|images|favicon|.*\\.(?:png|jpg|webp|svg|ico|txt|xml)).*)"]`
  — but verify against the actual `public/` layout so no page asset 404s behind the gate.
  (Static assets stay reachable by direct URL; that is acceptable — the goal is "prevent
  anyone looking at it", not defense-grade security.)
  - Read cookie `verstelle-login`. Valid token (SHA-256 of `email:password`, compared
    constant-time) → pass through. Otherwise redirect to `/inloggen?van=<pathname>`.
  - **Fail closed:** no cookie → no content, under all circumstances.
- **`/inloggen`** — one branded login page for the whole site: night-dark full-bleed,
  the Verstelle wordmark treatment (STUDIO small / VERSTELLE large), **two fields**
  (e-mailadres + wachtwoord), Dutch microcopy ("Deze site is nog niet openbaar.").
  Wrong credentials → subtle shake + "Dat klopt niet — probeer het nog eens." This is
  the first Verstelle thing a visitor sees; it must look like the brand, not a popup.
- **Route handler** `app/api/login/route.ts` (POST): check both fields against the
  hardcoded values (email case-insensitive, trimmed); on success set an **httpOnly,
  secure, sameSite=lax** cookie, maxAge 30 days, redirect to `van` or `/`.
- Keep global `noindex`; additionally send `X-Robots-Tag: noindex` from the middleware
  on every response for belt-and-braces.

### ⚠️ Pre-flight decision — surface to Floris BEFORE pushing
**The repo is public.** Once pushed, `research-notes/*.md`, the PRDs and all strategy
content are readable by anyone on GitHub — the password only guards the *website*.
Options: (a) flip the repo to private (Vercel's git integration keeps working; the
jsDelivr image loader was already removed so nothing depends on the repo being public),
or (b) accept the exposure. **Recommendation: (a), flip to private first.** Ask Floris;
do not push strategy content to a public repo without an explicit go.

---

## 3. Workstream A2 — the raw notes, readable on the site

**Goal:** Elise can read every underlying research note in the same art direction as the
dossier — the "achterkant" of each chapter. No more "trust the summary": the evidence is
one click away.

### Spec
- **Routes:** `/research/notities` (index) + `/research/notities/[slug]` (one per file).
  Server components; read the markdown from `research-notes/` at build time with `fs`
  (they ship with the deploy because they're in the repo — nothing dynamic needed).
- **Rendering:** `react-markdown` + `remark-gfm` (the notes are table-heavy — GFM tables
  are non-negotiable). Style the output inside `.research`: Fraunces prose, existing
  table treatment, every table wrapped in the `.r-scroll` overflow container (some
  tables are 8 columns wide), blockquotes as travertine-tinted callouts, external links
  cobalt with `target="_blank" rel="noopener"`.
- **Make the honesty markers visual:** post-process or component-map the literal strings
  `[zeker: hoog]`, `[zeker: middel]`, `[zeker: laag]`, `[schatting]` into the existing
  `Conf`/`Est` badge visuals instead of raw bracket text. (A rehype/remark text-replace
  or a regex pass over the markdown before rendering is fine.)
- **Index page:** 8 cards — title, chapter(s) it feeds, word count, onderzoeksdatum
  (2026-07-16), one-line description, and a warning line: *"Dit zijn ruwe
  onderzoeksnotities: momentopnames met bronnen en zekerheidslabels, geen eindoordeel."*
- **Chapter ↔ note mapping** (drives the per-chapter "achtergrond" links of WS-B):

  | Chapter | Note file(s) |
  |---|---|
  | 01 markt | markt.md |
  | 02 concurrentie | concurrentie.md |
  | 03 onderscheid | onderscheid.md |
  | 04 positionering | onderscheid.md, concurrentie.md |
  | 05 prijsmodel | prijsmodel.md |
  | 06 klantreis | prijsmodel.md, validatie.md |
  | 07 marketing | marketing.md |
  | 08 tools | tools-buildvsbuy.md |
  | 09 kosten | tools-buildvsbuy.md, prijsmodel.md |
  | 10 setup | setup.md |
  | 11 risicos | validatie.md, setup.md, tools-buildvsbuy.md |
  | 12 roadmap | validatie.md |

- Register the notes hub in the `/research` chapter nav (a distinct entry or footer link
  "De notities →" — it is background, not chapter 13; keep the 12-chapter structure).

---

## 4. Workstream B — every chapter becomes a starting point, not an endpoint

**Goal (Floris verbatim):** each page is a nice overview, but (a) you can see the
background information, (b) there's more information available, and (c) each page coaches
the reader — tips, tricks, homework, own-research questions — "like a business coach".

### New shared components (in `components/research/Blocks.tsx` or a sibling file)
1. **`Achtergrond`** — a slim strip near the top or bottom of each chapter: "Gebaseerd op
   [notitie-naam] (~N woorden, 2026-07-16) → Lees de ruwe notities". Links per the
   mapping table above.
2. **`VerderLezen`** — external further-reading list: 4–8 curated links per chapter
   (primary sources from the notes: CBS/Kadaster/NVM, BNO, BOIP, Architectenregister,
   Houzz research, competitor sites, vendor pricing pages). Each link: title, one-line
   why-read-this, domain chip. Lift the URLs from `research-notes/` — they are already
   collected and dated there; do not re-search the web for what the notes already cite.
3. **`Coach`** — the business-coach block, visually distinct (travertine-tinted card,
   kicker "AAN DE SLAG"), two halves:
   - **"Zelf doen"** — 2–4 concrete homework items with time estimates.
   - **"Om over na te denken"** — 3–5 pointed questions, written *to Elise* (je/jij),
     coach-toned: warm but not soft.

Order at the foot of every chapter: content → `Coach` → `VerderLezen` → `Achtergrond` →
`Sources` → "Wat hiertegen pleit" → `Decisions` → `NextPage` (keep existing blocks;
slot the new ones in coherently and consistently across all 12).

### Per-chapter coach content (write these out fully in Dutch; this is the brief)
- **01 Markt** — Zelf doen: browse funda 30 min in the €500k–2M band in je eigen buurt en
  tel hoeveel "kluswoningen" je ziet; check de laatste NVM-kwartaalcijfers zelf (link).
  Vragen: in welk van de vier segmenten kén je daadwerkelijk mensen? Voelt ~256
  huishoudens/jaar als krap of als genoeg — en wat zegt dat over hoe belangrijk toegang
  (netwerk) wordt t.o.v. zichtbaarheid?
- **02 Concurrentie** — Zelf doen: bezoek 5 studiosites uit de lijst (links, WS-B2) en
  noteer per site wat je voelt in de eerste 10 seconden; vraag bij één middensegment-
  speler (bijv. PD Interieurontwerp) een kennismaking aan en ervaar hun funnel als klant.
  Vragen: aan wie zou jíj een klant verliezen — en waarom? Wat kun jij dat Bricks Studio
  (dichtstbijzijnde stijl-DNA) niet kan? Nul van de 25 publiceert prijzen — durf jij het?
- **03 Onderscheid** — Zelf doen: zoek jezelf op in het Architectenregister en stel je
  diplomastatus definitief vast (dé openstaande juridische vraag); probeer RoomGPT of
  Interior AI op je eigen woonkamer en noteer precies waar het faalt. Vragen: welke moat
  bouw je met plezier, tien jaar lang? Wat doe je op de dag dat een concurrent
  "AI-interieurscan €99" lanceert?
- **04 Positionering** — Zelf doen: spreek de one-liner hardop uit op een verjaardag en
  kijk naar de gezichten; test 3 taglines op 5 vrienden (welke onthouden ze na een dag?).
  Vragen: overleeft "Residential Transformation Studio" het gesprek bij je huidige
  werkgever? Nederlands of Engels — wie wil je aantrekken en wie stoot je af?
- **05 Prijsmodel** — Zelf doen: zet de capaciteitscalculator op je échte beschikbare
  uren (niet de aanname) en kijk wat er breekt; bereken je persoonlijke ondergrens
  (vaste lasten ÷ factureerbare uren). Vragen: kun je "tweeduizend euro" hardop zeggen
  tegen een vreemde zonder te knipperen? Welk product schrap je als er één moet sneuvelen?
- **06 Klantreis** — Zelf doen: mystery-shop de intake van één concurrent (meet
  responstijd en toon); schrijf je eigen antwoord-op-intake-mail en lees hem hardop.
  Vragen: waar ben jíj de bottleneck in deze pijplijn? Wat gebeurt er als er drie leads
  in één week komen terwijl je een baan hebt — wie wacht, en hoe lang mag dat?
- **07 Marketing** — Zelf doen: maak vandaag het Google Bedrijfsprofiel aan (gratis, ~1
  uur, kanaal #1 uit het onderzoek); analyseer 5 IG-accounts uit de lijst en noteer hun
  cadans en formats; schrijf 3 proefposts in je eigen stem. Vragen: als 3 van je 4 uur
  per week naar één kanaal moeten — welk? Ben je bereid je gezicht te laten zien, of
  bouwen we een merk dat zonder kan?
- **08 Tools** — Zelf doen: doorloop alle demo's (WS-C) en noteer per demo of je het aan
  een klant zou laten zien; neem één echt gesprek van 30 min op (met toestemming) en
  bekijk het transcript. Vragen: voor welke tool zou je vandaag geld betalen? Wat breekt
  er als je met núl eigen tools zou starten — en is dat erg in fase 0?
- **09 Kosten** — Zelf doen: open de prijspagina's van de aanbevolen stack en controleer
  de bedragen op je eigen aanmelddatum (het onderzoek bewees dat dit soort cijfers snel
  verjaart). Vragen: wat is je persoonlijke maandburn en hoeveel maanden buffer wil je?
  Welke kostenpost schrap je het eerst in een slechte maand?
- **10 Setup** — Zelf doen: lees vanavond de nevenwerkzaamheden-clausule in je
  arbeidscontract; vraag 2 AOV-offertes aan (de dure verrassing). Vragen: eenmanszaak nu
  — bij welk winstniveau heroverwegen? En de belangrijkste van het hele dossier: **zeg
  nooit zelf op** — weet je waarom (vaststellingsovereenkomst, WW, startersregeling)?
- **11 Risico's** — Zelf doen: kies je top-3 risico's en schrijf per risico het
  early-warning-signaal op een kaartje boven je bureau. Vragen: wat is je plan bij twee
  weken ziekte midden in een Transformatie? Welk risico vermijd je om over ná te denken
  — dat is meestal de echte.
- **12 Roadmap** — Zelf doen: benader deze maand 3 concrete mensen uit je netwerk voor
  een fase-0-pilot (naam ze in je hoofd nu); prik de datum van je eerste betaalde
  Verkenning. Vragen: wat is — in getallen — jouw poort om op te zeggen (pipeline,
  buffer, afgeronde projecten)? Wie houdt je daaraan?

### WS-B2 — competitor links everywhere
On `/research/concurrentie`: every competitor name becomes an **external link** (cobalt,
`target="_blank"`, ↗ affix), and add a link-hub section **"Bekijk ze zelf"** grouped in
four clusters. All URLs below are already verified in `research-notes/concurrentie.md`
(2026-07-16) — lift the full set from there; this is the core list:

- **Premium boutique (direct):** Studio Piet Boon (pietboon.com), Nicemakers
  (nicemakers.com), Framework Studio (framework.eu), Studio Modijefsky
  (studiomodijefsky.nl), Standard Studio (standardstudio.nl), Bricks Studio
  (bricksstudio.nl), Kate Hume (katehume.com), Studio Janne Wellens (jannewellens.com),
  Atelier ND Interior (atelierndinterior.com), Studio Michiel Wijnen
  (michielwijnen.com), AMstudio (amstudio.nl), Studio Francis (studiofrancis.eu),
  Studio Ard Hoksbergen (ardhoksbergen.nl), Studio Wendy Mahieu (wendymahieu.nl),
  Atelier Perspective (atelierperspective.nl), Masters of Interior Design
  (mastersofinteriordesign.com), Noctum (noctum.nl), Lagrand (en.lagrand.nl), Studio
  Reinder Veenstra (reinderveenstra.com), Remy Meijers (remymeijers.com), BNLA (bnla.nl),
  COAST (coast.nl), Buro Maak (buromaak.nl), HEYLIGERS (heyligersarchitects.nl).
- **Middensegment met gepubliceerde prijzen (de transparantie-norm):** PD
  Interieurontwerp (pdinterieurontwerp.nl/tarieven), HUIZ design (huizdesign.nl),
  Klein Ontwerp Studio (kleinontwerpstudio.nl), By Her (byher.nl/tarieven), Stijlidee
  (stijlidee.nl), Aanhuis.nl (aanhuis.nl/interieuradvies).
- **AI / e-design:** Decorilla (decorilla.com/pricing), Havenly (havenly.com/pricing —
  niet in NL), Interior AI (interiorai.com), RoomGPT (roomgpt.io), Spacely
  (spacely.ai), Collov (collov.ai), Planner 5D, Coohom, IKEA Kreativ + IKEA Compleet
  Interieuradvies (€299/€399 — hét prijsanker), Floorplanner (floorplanner.com, NL/Rdam).
- **Pro-tools (voor hoofdstuk 08 kruislink):** Chaos Veras (chaos.com/veras), Rendair,
  PromeAI, SketchUp Diffusion.

Add one caution line: links zijn momentopnames van 2026-07-16; prijzen verlopen snel.
Cross-link this hub from `positionering` (alternatieven-argumentatie) and `tools`.

---

## 5. Workstream C — full PRDs + clickable mock demos for the build-tools

**Goal:** each tool we intend to BUILD gets (1) a real PRD page — decision-grade, not
dev-grade — and (2) an **interactive mock demo** that walks 3–6 steps with fictional
data, so Elise can *feel* each tool instead of reading about it. This upgrades the
existing `/research/tools` overview (keep it as the hub; deepen it).

### Routes
`/research/tools` (existing hub, extended) → `/research/tools/[slug]` per tool:
`visualisatie`, `sessie`, `spraak`, `brief`, `materialen`, `portaal`, `intake` (7 build
PRDs) — plus `/research/tools/kopen` (WS-D buy-catalogue).

### The PRD template (identical structure on every tool page — build it as components)
1. **Kop** — naam, one-liner, Owner-badge (AI/Elise/Klant), verdict-badge (Bouwen /
   Kopen / Hybride), bouwtijd-schatting in "AI-geassisteerde avonden".
2. **Het probleem** — 2–3 zinnen, vanuit de klant of vanuit Elise's tijd.
3. **Voor wie** — primaire + secundaire gebruiker, moment in de klantreis (link 06).
4. **Wat het doet** — kernflow als genummerde stappen (≤8), met per stap Owner-badge.
5. **Toegevoegde waarde** — kwantificeer in **uren** (constraint #1) en pas daarna in
   euro's; noem expliciet wat er zónder deze tool gebeurt (het handmatige alternatief).
6. **MVP-scope** — "Wel in de MVP" / "Bewust niet" twee-koloms; mock-data-afspraken.
7. **Demo** — het interactieve blok (spec per tool hieronder), gelabeld "fictieve data".
8. **Data & privacy** — welke persoonsgegevens, bewaartermijn, AVG-haakjes (verwijs naar
   hoofdstuk 10; spraak = zwaarste geval).
9. **Koop-alternatieven** — 2–4 bestaande producten met prijs + link + waarom (niet)
   (lift uit `tools-buildvsbuy.md`), zodat elke bouwbeslissing zichtbaar verdedigd is.
10. **Moeilijkheden & risico's** — eerlijk; geometrie-drift waar relevant.
11. **Afhankelijkheden** — welke andere tools/APIs eerst moeten bestaan.
12. **KPI's** — max 3 per tool, meetbaar.
13. **Voor Elise om over na te denken** — 3–5 coach-vragen (zelfde toon als WS-B).
14. **Beslispunten** — bestaande `Decisions` component.

### Mock world (shared across ALL demos — build once in `lib/mock.ts`)
One consistent fictional client so the demos read as one journey:
**"Familie Van Dam — bovenwoning, Sarphatiparkbuurt, Amsterdam"**, verbouwbudget
€140.000, wens: "meer licht, meer karakter, minder IKEA". Persons: Jasmijn & Roos van
Dam. Everything visibly stamped *fictieve data*. For imagery, reuse existing generated
assets from `public/images/` (journey + site sets) as the "variant" images; if a
convincing "klantfoto vooraf" (deliberately ordinary Dutch living room, daglicht,
rommelig-echt) is missing, generate 2–3 via `tools/gemini.mjs` conventions into
`public/images/research/` and optimize with `tools/optimize-images.mjs` (WebP).

### Per-tool PRD + demo specs

**C1 — Visualisatie-engine** (`/tools/visualisatie`, verdict: Hybride — koop het model,
bouw de pipeline).
- Kern: klantfoto's → varianten van *hun eigen kamer* in het Verstelle-DNA.
- Koop-alternatieven: Gemini 3 Pro Image ($0,134/beeld — huidige keuze), FLUX.2 [pro]
  edit ($0,045, Duits, depth-conditioning als geometrie-vangnet), Interior AI/RoomGPT
  (afgewezen: stijl-presets = precies wat het DNA verwerpt — citeer de notitie).
- Demo (4 stappen): (1) "klantfoto" van de Van Dam-woonkamer; (2) kies 2 van 3
  DNA-accenten (burl-hout / mohair-groen / chroom); (3) 4 varianten verschijnen
  (pre-generated, geen live API!) met een subtiele geometrie-checklist eroverheen
  ("raam op dezelfde plek? vide intact?"); (4) markeer favoriet → zie wat de engine
  "leert". Educatief doel: laat óók één bewust-mislukte variant zien (geometrie-drift)
  met uitleg — verwachtingsmanagement is onderdeel van het product.
- Risico's: geometrie-drift (hoofdrisico, link notitie), stijlconsistentie, kosten bij
  live-itereren in sessie (gemeten aanname: 40–80 beelden).

**C2 — Sessie-tool** (`/tools/sessie`, verdict: Bouwen — bestaat als prototype: de
journey-codebase zelf).
- Kern: de journey, maar per klantproject — beelden tonen, reacties (❤️/👎/💬) per beeld
  vastleggen, oogst exporteren.
- Demo (4 stappen): (1) projectkaart Van Dam openen; (2) reageer op 6 beelden met het
  échte ReactionGrid-patroon (hergebruik journey-primitieven!); (3) zie de oogst-view:
  per beeld de reacties + genoteerde quotes; (4) export-preview (JSON/HTML zoals de
  journey al kan). Dit is de goedkoopste demo — het patroon bestaat.
- Koop-alternatieven: Programa ($71/mnd, interieur-specifiek maar geen reactie-per-beeld
  zoals wij het willen), Notion (zwak in beeld-review). Verdict blijft bouwen.

**C3 — Spraak-laag** (`/tools/spraak`, verdict: Hybride — koop transcriptie, bouw de
koppeling).
- Kern: sessie opnemen → transcript met sprekers → "zachte meningen" gekoppeld aan het
  beeld dat op dat moment op het scherm stond. Dit is het bedrijfsgeheim (geen enkele
  gekochte tool koppelt uitspraak ↔ beeld-ID ↔ tijdstempel).
- Koop-alternatieven: Mistral Voxtral Mini Transcribe 2 ($0,003/min, EU-default,
  diarisatie inbegrepen — winnaar), Deepgram Nova-3 (EU-endpoint), ElevenLabs Scribe v2.
  Noem de 30-dagen-retentie van Mistral eerlijk (privacyverklaring-punt).
- Demo (4 stappen): (1) "opname" afspelen — een geschreven mock-tijdlijn van 8
  uitspraken van Jasmijn/Roos met tijdstempels; (2) transcript verschijnt met
  sprekerlabels; (3) de extractie: uitspraken worden chips ("te koud", "meer messing",
  "dit vóelt als ons") die visueel aan hun beeld klikken; (4) de oogst: per beeld de
  gekoppelde meningen — hetzelfde beeldgrid als C2, nu met spraaklaag. Geen echte audio
  nodig; het gaat om het begrip van de koppeling.
- Data & privacy is hier het zwaarst: consent-flow vóór opname (verwijs naar de spec in
  hoofdstuk 10/setup-notitie), bewaartermijn, EU-verwerking.

**C4 — Brief-generator** (`/tools/brief`, verdict: Bouwen — prompt + template).
- Kern: sessie-data (C2+C3 export) → concept-visiedocument: verhaal, moodboard-selectie,
  palet, richting per ruimte. **Elise cureert altijd** — de tool levert een concept,
  nooit een eindproduct.
- Demo (3 stappen): (1) toon de input compact (de Van Dam-oogst uit C2/C3); (2)
  "genereer" met een verzorgde reveal — het visiedocument vouwt sectie voor sectie open
  (vooraf geschreven mock-inhoud van hoge kwaliteit — dít document moet laten zien wat
  "goed" is); (3) de curatie-stap: twee zinnen gemarkeerd als "door Elise herschreven"
  om het cureren zichtbaar te maken.
- KPI: van sessie-export naar curatie-klaar concept < 1 uur Elise-tijd.

**C5 — Budget & materialen** (`/tools/materialen`, verdict: Bouwen, smal).
- Kern: gecureerde bibliotheek (~100 Verstelle-materialen met prijsranges) + LLM-assist
  voor hoeveelheden → materialenlijst + budgetindicatie met bandbreedte.
- Demo (3 stappen): (1) blader door 12 mock-materialen (kaarten: foto-loos maar
  getextureerd, naam, leverancier-type, prijsrange, "waarom Verstelle dit kiest");
  (2) selecteer 6 voor de Van Dam-woonkamer; (3) de budgetband verschijnt: laag/
  verwacht/hoog + de disclaimer-strategie ("indicatie, geen offerte") prominent.
- Moeilijkheden: prijsactualiteit, aansprakelijkheid bij budgetten (link hoofdstuk 10);
  de bibliotheek zelf is de moat — data-invoer is Elise-uren, geen code.

**C6 — Klantportaal** (`/tools/portaal`, verdict: Bouwen, bewust smal — de koopmarkt
faalt voor NL-solo: HoneyBook bestaat niet in NL, Dubsado kan geen inclusieve btw,
EU-residency zit overal achter Enterprise; citeer de notitie).
- Kern: magic-link login → per project: beelden, keuzes, planning, budget, documenten.
  De portal ís het product — de plek waar de klant het werk beoordeelt; een generieke
  suite-UI ondermijnt de merkwaarde.
- Koop-alternatieven eerlijk vermelden: Moxie Pro ($20, beste koop-optie als bouwen
  tegenvalt), SuiteDash ($19), Zoho (enige echte EU-residency op solo-prijs), Programa
  ($71, kent het vak). Plus het onderhouds-tegenargument uit de notitie ("een gekochte
  portal wordt gepatcht terwijl zij slaapt") — dat verdient een `CounterCase`.
- Demo (4 stappen): (1) magic-link-scherm (mock, knop "open de mail"); (2) portal-home
  Van Dam: hero-beeld, fase-indicator, "nieuw voor jou"-rij; (3) tab Beelden (grid met
  reactiestatus uit C2) en tab Budget (read-only band uit C5) en tab Planning (4
  mijlpalen); (4) documenten-rij (offerte "geaccepteerd via Moneybird" — kruislink
  WS-D). Alles read-only behalve de reacties.

**C7 — Intake-assistent** (`/tools/intake`, verdict: Hybride — formulier bestaat op
`/site`, bouw de kwalificatie, koop de agenda).
- Kern: intake (3 foto's + 5 vragen) → LLM-kwalificatie (budget-fit, stijl-fit,
  scope-fit) → concept-antwoordmail in Elise's toon → Elise keurt → agendalink.
- Demo (4 stappen): (1) een binnengekomen mock-intake lezen (één sterke lead, of toggle
  naar een tweede die níet past — budget €15k); (2) de kwalificatiekaart: drie
  fit-scores met redenering; (3) de concept-mail, met één zin gemarkeerd "pas dit aan";
  (4) verstuur-mock → agenda-boekingsscherm (Cal.com/Calendly-verwijzing). De
  niet-passende lead krijgt een respectvolle afwijs-mail — laat zien dat de tool ook
  néé kan zeggen zonder de merkervaring te schaden.
- Koop-alternatieven agenda: Cal.com (open-source, EU-vriendelijk) vs Calendly; noem
  beide met prijs.

### Hub-page upgrade (`/research/tools`)
- The existing SystemDiagram + tool cards stay; each card now links to its PRD page and
  shows the verdict-badge + demo-teaser ("Probeer de demo →").
- Add a build-order recommendation strip: C2 → C3 → C4 (the session spine, in that
  order, because each feeds the next) with C1 parallel and C5/C6/C7 after the first
  paid pilot — justify briefly from the roadmap phases.

---

## 6. Workstream D — the buy-catalogue (`/research/tools/kopen`)

**Goal:** one beautiful page that answers "wat kopen we gewoon?" — with per category
multiple options, links, prices, what it can do, for who, and what to watch. All content
already exists in `research-notes/tools-buildvsbuy.md` (verified 2026-07-16) — your job
is presentation + the analysis lens, not new research.

### Categories & content (per category: aanbeveling-kaart + 2–4 alternatieven-kaarten)
Each card: naam, prijs/mnd of per-eenheid, link, "wat het doet" (2–3 zinnen), "voor
wie/wanneer", EU-data-badge (✓/~/✗), lock-in-badge, en één "let op"-regel.

1. **Boekhouden + facturatie + offertes:** ★ Moneybird Start (€15 — enige met gratis
   publieke REST API op elk pakket; btw + ICP rechtstreeks; offerte-acceptatie met
   handtekening inbegrepen). Alternatieven: e-Boekhouden.nl (15 mnd gratis voor
   starters — de cash-optie), Jortt, MoneyMonk. Valkuil-regel: **nooit** Moneybird
   Compact (€3: 1 factuur/mnd, geen btw-aangifte).
2. **E-sign:** ★ niets kopen — Moneybird's acceptatie is juridisch genoeg (SES volstaat,
   art. 7:400 BW vormvrij; rechters wezen zelfs DocuSign af waar vormvereisten golden).
   Incidenteel QES: Skribble (€4,50/stuk) of Youtrust (ex-Yousign!) boven ~€10k.
3. **Transcriptie + diarisatie:** ★ Mistral Voxtral Mini Transcribe 2 ($0,003/min, EU
   default, diarisatie gratis). Alternatieven: Deepgram Nova-3 (EU-endpoint), ElevenLabs
   Scribe v2, AssemblyAI. Let op: Mistral bewaart input 30 dagen.
4. **Beeldgeneratie:** ★ Gemini 3 Pro Image ($0,134/beeld; migratie naar Vertex AI
   EU-regio als actie). Tweede spoor: FLUX.2 [pro] edit ($0,045, depth-control).
   Afwijzen met reden: Midjourney (geen API, verbiedt automatisering), interieur-SaaS
   (stijl-presets).
5. **Hosting & data:** Vercel Pro (€17,47 — Hobby mag niet commercieel) + Supabase
   (EU-regio; start Free). Domein + e-mail (Google Workspace ~€6,50).
6. **Agenda/booking:** Cal.com vs Calendly, prijs + verschil in één regel.
7. **De optelsom:** herhaal de kern-getallen als `StatRow`: vaste tech €62,06/mnd
   (opstart €40,22), AI per Verkenning €8,66 (pessimistisch €17,06), en de kanttekening
   dat 99,6% AI-marge ≠ bedrijfsmarge (Elise's uren zijn de echte kostprijs).
8. **Coach-blok** ook hier: "controleer elke prijs op je aanmelddatum — dit onderzoek
   zag drie 'bekende feiten' sneuvelen in één ronde (SignRequest is al 5 jaar geen
   NL-partij; Yousign heet Youtrust; de e-facturatiedeadlines 2027/28 bestaan niet)."

Cross-link: every PRD's "Koop-alternatieven" section links here; this page links back
to chapters 08 and 09.

---

## 7. Integration, verify, ship

1. **Exec summary update** (`/research`): add two entries to the top-10 acties if not
   present ("Doorloop de tool-demo's", "Lees de notities achter je grootste twijfel"),
   and a small pointer-row to the notes hub + PRD hub.
2. **Local verify (all must pass):** `npm run build` clean; every route 200 incl. all 7
   PRD pages, `/research/notities` + 8 note pages, `/research/tools/kopen`, `/inloggen`;
   an anonymous request (cleared cookies) to `/`, `/site`, `/research` and one deep link
   each redirects to `/inloggen`; wrong email or password rejected; correct login
   persists 30 days and returns you to the deep link; page assets (images, fonts) load
   correctly behind the gate on all three surfaces; all demos operate with keyboard +
   mouse; no console errors; no horizontal scroll on 375px; notes tables scroll within
   their container; every external link has `target="_blank" rel="noopener"`;
   "fictieve data" label visible on every demo screen.
3. **Pre-push:** resolve the public-repo decision with Floris (§2).
4. **Ship:** commit per workstream, push `main`, wait for the Vercel build, then verify
   IN PRODUCTION: https://elise-inky.vercel.app redirects to the login, the credentials
   work, journey + `/site` + `/research` all reachable after login, one PRD demo
   spot-checked, notes render, `X-Robots-Tag` present.
5. **Report back** with: live URL, the password reminder, what changed per workstream,
   and any items skipped with reasons.

### Definition of done
- [ ] The whole site behind one login (`eliseverstelle@hotmail.com` / `joosensjors`),
      hardcoded, fail-closed middleware, branded `/inloggen` page; no other passwords
      anywhere on the site.
- [ ] All 8 research notes readable on-site, GFM tables intact, confidence badges visual.
- [ ] All 12 chapters carry `Coach` + `VerderLezen` + `Achtergrond` blocks, in Dutch.
- [ ] Concurrentie page: every competitor linked + "Bekijk ze zelf" hub (4 clusters).
- [ ] 7 PRD pages complete per the 14-section template, each with a working mock demo
      on the shared Van Dam mock world, each with buy-alternatives + links.
- [ ] `/research/tools/kopen` buy-catalogue live with all 7 categories + optelsom.
- [ ] Tools hub upgraded (links, verdict badges, build-order strip).
- [ ] Everything committed, pushed, live on Vercel, verified in production.
- [ ] Public-repo decision explicitly resolved with Floris before push.

---

## 8. Open questions (surface, don't decide)

1. Repo private vs public (§2) — needs Floris's call before anything ships.
2. Should Elise get her own Vercel/GitHub accounts now (currently everything runs on
   Floris's) — setup chapter says yes eventually; timing is theirs.
3. The demos use pre-generated imagery. When do we spend a session doing a **live**
   end-to-end test (real photos → real variants → real recording → real transcript)?
   The dossier says the 40–80-beelden assumption and geometry-drift *must be measured*,
   not reasoned — propose it as the first fase-0 action.
4. Does the "Van Dam" mock world eventually become the public portfolio's "fictief
   voorbeeldproject", or stays it internal? (Affects how polished C1's imagery must be.)
5. The credentials (`eliseverstelle@hotmail.com` / `joosensjors`) are now written in
   this repo. If the repo stays public, the login is public — one more argument for §2
   option (a). Note the login also guards `/site`: fine pre-launch, but the day the
   real website should go live for clients, the middleware matcher must exempt `/site`
   (or the gate must come off) — park that as a launch-day action.
