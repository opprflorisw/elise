# investigation.md — Studio Verstelle: van merk naar levensvatbaar bedrijf

> **What this document is.** A complete, self-contained work order for an AI agent (with
> subagents) to research, model and present everything needed to turn Studio Verstelle into a
> successful solopreneur business. The end deliverable of that agent is **a multi-page
> research website under `/research`** in this repo — a "business plan 101" that Elise and
> Floris can read, react to, and decide from.
>
> **What this document is NOT.** Nothing in here is built yet. Do not treat the tool specs
> as final architecture; they are MVP definitions to be validated by the research.

---

## 0. Context (read first)

### The business
- **Studio Verstelle** — Residential Transformation Studio (interior architecture &
  property transformation), Amsterdam. Run by **Elise**, starting **part-time next to her
  job**, transitioning to full-time solopreneur.
- **Financial goal:** a healthy one-person business with **≥ €250,000/yr revenue** at
  maturity. Not a startup, not a €10M ambition. Ramp: part-time year 1 → transition →
  full-time run-rate.
- **Target client:** urban homeowners in Amsterdam / Den Haag / Rotterdam, homes roughly
  €500k–€2M, renovation/interior budgets from ~€75k up. Second pillar: development
  advisory (developers, investors, hospitality) — smaller, day-rate based.
- **Positioning:** between decorator, architect and developer. Luxe eclectic style —
  sculptural, 1930s/70s/contemporary, Paris/Milan/NY. Never beige minimalism, never boring.
  Signature: *"Een cocon van verbeelding, doch rust."*

### The differentiating method (the heart of everything)
The client journey Elise will sell — already prototyped in this repo as the journey site:
1. Client sends **three photos** of their space as-is.
2. AI generates **variants of their own rooms** in the studio's design DNA.
3. **Guided session**: client reacts to every image; the conversation is **recorded**, and
   AI extracts the "soft opinions" ("dit voelt te koud", "meer messing") linked to the exact
   image they were about.
4. Everything converges into **one design incl. materials list and budget**.

Elise validated this (see `feedback-elise.md`): she wants all four AI tools and especially
the speech capture. Her own words on the process: *ideas + photos → moodboard → detailed
client conversation (speech) → final design incl. budget & materials list.*

### What already exists in this repo
- `elise.md` — studio profile & style DNA (source of truth).
- `feedback-elise.md` — Elise's 56 validated choices.
- `process.md`, `plan.md` — how the journey instrument was designed & built.
- Live site: https://elise-inky.vercel.app (journey) and `/site` (the real website).
- The **journey codebase itself is a working prototype of the session tool** — reaction
  capture, comments, export. Treat it as MVP #2's starting point, not a throwaway.

### The strategic thesis to stress-test
> The AI tool itself is **not** the moat — any freelancer can wire up image generation in a
> weekend. The moat must come from the combination of: codified taste (the DNA), a branded
> method, the compounding dataset of sessions/materials/suppliers, execution capability
> (verbouwbegeleiding — AI can't manage a contractor), portfolio & reputation, and speed of
> a solo operator with an AI back office. The research must confirm, refute or sharpen this.

---

## 1. How the agent should work

1. **Spin up subagents per research track** (§2). Tracks A–C first (they feed D–E), then
   the rest in parallel. Use the deep-research prompts in §3 verbatim or lightly adapted.
2. **Numbers over adjectives.** Every market claim needs a source + date, or an explicit
   label *[schatting]* with the reasoning shown. Confidence levels: hoog / middel / laag.
3. **NL-specific.** Dutch market, Dutch law, Dutch prices, Dutch channels. Global examples
   only as analogies.
4. **Honest counterarguments.** Every page ends with "Wat hiertegen pleit" — the strongest
   case against the recommendation. This is a decision document, not a pitch.
5. **Decision points, not conclusions.** Where a choice is Elise's to make, formulate it as
   an explicit decision card: question + options + recommendation + what it depends on.
6. **Language:** final `/research` pages in **Dutch** (Elise is the reader). Sources may be
   English. This work order is English for agent precision.
7. **Mock data is allowed and encouraged** for the interactive tool demos (§4), clearly
   labeled *fictieve data*.
8. **Do not touch `/site`** (client-facing) or the journey stages. `/research` is internal;
   keep the whole app `noindex` as it already is.

---

## 2. Research tracks

Each track lists: goal → key questions → deliverable (a `/research` page). The matching
deep-research prompt is in §3.

### Track A — Markt (market research)
**Goal:** size the realistic pond. Is there enough premium renovation demand in
A'dam/DH/R'dam for one studio to capture €250k/yr?

Key questions:
- How many housing transactions per year in the €500k–€2M band in the three cities
  (Kadaster/NVM/CBS data)? What share renovates substantially within 2 years of purchase?
- Average renovation + interior spend at this level; how is it split (construction /
  kitchen+bath / interior/furniture / fees)?
- Who are the buyers of interior architecture at this level? Segment them (dual-income
  professionals, expats, families upgrading, empty nesters, small developers). Which
  segment fits the Verstelle DNA best?
- What triggers the purchase (house purchase, renovation moment, life event)? Where do they
  search (Google, Instagram, referral, makelaar)?
- Macro trends: renovation market outlook NL 2026+, interest rates, labour shortage in
  construction (affects verbouwbegeleiding value), AI acceptance among consumers.

**Deliverable:** `/research/markt` — market size funnel (transactions → renovators →
premium segment → realistically addressable), segment cards, trend summary.
**Sanity check to include:** how many clients/yr does €250k require under the pricing model
of Track E, and what % of the addressable market is that? (Should be well under 1% — show it.)

### Track B — Concurrentie (competitor analysis)
**Goal:** map who already serves this client and where the gap is.

Key questions:
- **Direct:** 15–25 boutique interior architecture/design studios in NL serving the premium
  residential segment (Amsterdam-centric: think Nicemakers, Framework Studio, Standard
  Studio, Studio Jaimie van Schijndel-type players, plus Den Haag/Rotterdam names — agent
  must build the real list). For each: positioning, style, team size, price signals,
  services (design only vs. incl. begeleiding), channels, what they do NOT do.
- **Indirect:** high-end decorators/stylists, architects who do interiors, contractors with
  in-house design, kitchen/bathroom showroom design services.
- **New species:** online/AI interior services (NL and international: Havenly-style
  services, RoomGPT/Interior-AI-style consumer tools, IKEA/retail AI planners). What do
  they charge, what quality, who uses them, and are they moving upmarket?
- Where does *nobody* sit? Hypothesis to test: the combination of (1) premium taste, (2) a
  transparent guided method with the client's own home visualized early, (3) full
  transformation incl. begeleiding, (4) solo-studio price point below the famous studios.
- What do their clients complain about (reviews, forums)? Slow, expensive, opaque, "I
  couldn't picture it" → exactly what the method solves. Collect evidence.

**Deliverable:** `/research/concurrentie` — competitor table + positioning map (2 axes,
e.g. price × method-transparency), gap statement, "what we copy / what we avoid".

### Track C — Onderscheid & kopieerbaarheid (differentiation & moat)
**Goal:** answer Floris's core worry — *"how do we prevent being copied by some freelancer
who does it their own way with AI?"* — with evidence, not hope.

Key questions:
- What happened in adjacent creative fields when AI arrived (logo design, photography,
  copywriting)? Who kept pricing power, and what did they have in common? (Expected answer:
  taste + brand + client relationship + accountability; validate with cases.)
- Which moat candidates are real for a solo studio: brand & portfolio; codified design DNA;
  the **method as a branded product** (name it, publish it, own it); the compounding
  private dataset (every session = preference data, every project = materials/supplier/cost
  data no copycat has); the trade network & execution (aannemers, ateliers, leveranciers);
  speed & margin from the AI back office; switching costs via the klantportaal?
- What is protectable in NL/EU: trademark on name + method name (BOIP costs & process),
  copyright on designs and on the visual DNA corpus, design rights? What is NOT protectable
  (prompts, the idea of AI visualization)?
- **Title check (critical):** "interieurarchitect" is a legally protected title in NL
  (Architectenregister, Wet op de architectentitel). Verify what Elise may call herself,
  registration requirements/costs, and safe alternatives ("interieurontwerper",
  "residential transformation studio"). This affects all copy on `/site`.
- Counter-scenario: a competitor launches "AI interior scan €99" and anchors the market
  cheap. What's the defence? (Likely: never sell the visualization alone — sell the
  transformation; the AI is a lens, not the product.)

**Deliverable:** `/research/onderscheid` — moat inventory ranked by realism, copycat
scenario analysis, "what to build deliberately in year 1 to widen the gap" list, legal
protection checklist with costs.

### Track D — Waardepropositie & positionering
**Goal:** synthesize A–C into words we will actually use.

- One-line value proposition (NL) + supporting version for developers (pillar 2).
- Positioning statement: for [segment] who [struggle], Verstelle is [category] that
  [differentiator], unlike [alternatives].
- Messaging house: 3 pillars with proof points (the method, the taste, the delivery).
- Objection handling: "Waarom niet gewoon Pinterest/ChatGPT?", "Waarom geen groot bureau?",
  "Is AI-design niet onpersoonlijk?", "Wat als het gegenereerde beeld niet maakbaar is?"
- Naming decision: does the method get a brand name (e.g. "De Verstelle Methode" /
  something better)? Recommend one, with trademark check from Track C.

**Deliverable:** `/research/positionering` — the messaging house, ready-to-use copy blocks,
decision card on the method name.

### Track E — Prijsmodel & pad naar €250k
**Goal:** a defensible price list and a believable capacity model.

Key questions:
- NL benchmarks: what do interior architects/designers charge (hourly €85–150?, % of
  renovation budget 8–15%?, fixed packages)? Sources: BNI/BNO guidance, studio sites,
  industry surveys. Verify, don't assume my numbers.
- Proposed product ladder to validate & price:
  1. **De Verkenning** (paid discovery = the AI session): 3 photos → variants → guided
     session → vision doc. Fixed price, hypothesis €1.500–2.500. This is the funnel engine.
  2. **Het Ontwerp** (full design): concept → definitive design incl. materials list &
     budget. Fixed or % — hypothesis €8k–20k depending on scope.
  3. **De Transformatie** (design + verbouwbegeleiding): hypothesis 10–15% of renovation
     budget or staged fixed fees.
  4. **Advisory** (pillar 2): day rate, hypothesis €1.200–1.600/day.
  5. Optional productized small ticket: "Second opinion op je verbouwplan" — decide if it
     helps or cheapens.
- Build the **capacity model**: Elise's available hours (part-time phase ~10–15h/wk;
  full-time ~45h/wk minus acquisition/admin), hours per product WITH the AI tooling vs
  without. Where does the ceiling sit, and which mix reaches €250k? Provide 2–3 scenario
  mixes (e.g. 20 Verkenningen + 8 Ontwerpen + 4 Transformaties + 15 advisory days).
- Psychology: anchor high with Transformatie; Verkenning must feel like a no-brainer and
  credit toward the next step. Deposit/termijnen structure for cash flow.

**Deliverable:** `/research/prijsmodel` — price list with benchmark evidence, **interactive
capacity/revenue calculator** (sliders: prices, counts, hours — mock/default data from the
scenarios), sensitivity notes ("what breaks the model first").

### Track F — Klantreis & conversie (the solopreneur machine)
**Goal:** define the exact pipeline from stranger to finished project, with what's
automated, what's Elise, and the conversion math.

Stages to detail (adjust if research suggests better):
1. **Ontdekking** (channels, Track G) →
2. **Website** (`/site`) →
3. **Intake** (3 photos + 5 questions; AI qualifies & drafts response; Elise approves) →
4. **De Verkenning** (paid session — sales & product in one) →
5. **Voorstel** (AI drafts from session data; Elise curates) →
6. **Ontwerp & levering** →
7. **Nazorg & referral** (photoshoot, review, referral incentive, content harvest).

For each stage: goal, owner (AI/Elise/client), tools touched, time cost for Elise,
drop-off assumptions. Then the funnel math: e.g. 1.000 bezoekers/kwartaal → X intakes → Y
Verkenningen → Z projecten (state assumptions, compare to benchmarks found in research).
Include the part-time constraint: max 1 session/week initially — what does that imply for
marketing intensity (don't over-fill the funnel)?

**Deliverable:** `/research/klantreis` — pipeline visual, per-stage cards, **interactive
funnel calculator** sharing state/logic with the Track E calculator if convenient.

### Track G — Marketing & kanalen
**Goal:** a concrete, channel-by-channel plan a solo founder can actually execute in ~4h/wk
(part-time phase), with examples.

Channels to research & spec (NL-specific, with real examples of studios doing it well):
- **Instagram** — the signature format: before → AI-verbeelding → gerealiseerd (with client
  consent). Posting cadence, Reels vs carrousel, hashtag/locatie strategy. Find 5 NL
  interior accounts that grew organically and reverse-engineer them.
- **Pinterest** — long-tail traffic for interior searches; effort/return for a solo studio.
- **SEO / Google Business Profile** — keyword set ("interieurarchitect amsterdam",
  "verbouwing begeleiding", "huis verbouwen jaren 30" …) with volume estimates; local pack.
- **PR** — NL interior media (vtwonen, Eigen Huis & Interieur, FD Persoonlijk, Residence,
  regional). What gets a young studio featured? The AI-method angle is genuinely novel —
  assess pitchability.
- **Partnerships** — makelaars in the price band, hypotheekadviseurs, high-end kitchen/bath
  showrooms, aannemers (two-way referrals). How to structure (fee? reciprocity?).
- **LinkedIn** — only for pillar 2 (developers); light touch.
- **Referral engine** — premium segment runs on word of mouth; design the ask + incentive.
- What to SKIP deliberately (ads? TikTok? beurzen?) and why.
- Budget: what does €500–1.000/mo buy; when do paid ads make sense (probably: retargeting
  + local search only, later).

**Deliverable:** `/research/marketing` — channel cards (effort, cost, expected yield,
first-3-actions), a 90-day starter calendar, content-engine spec (how each project auto-
generates a month of content via the AI pipeline).

### Track H — Het gereedschap (tool suite: "Verstelle OS")
**Goal:** define each tool as a mini-PRD with an MVP scope on mock data; establish how they
fit together as ONE system runnable by one person. Not too technical — decision-grade.

The eight tools (validate the split; merge if sensible):

| # | Tool | Kern | MVP (mock data) | Verwachte moeilijkheid |
|---|------|------|-----------------|------------------------|
| 1 | **Visualisatie-engine** | klantfoto's → varianten in Verstelle-DNA | curated prompt-pipeline (bestaat deels: `tools/gemini.mjs`); handmatige selectie | beeld ≠ exacte ruimte (geometrie), verwachtingsmanagement, stijlconsistentie |
| 2 | **Sessie-tool** | de journey, maar per klant | journey-codebase generaliseren: project-instanties, reacties, export (bestaat als prototype!) | multi-tenant maken, auth, beeld-beheer |
| 3 | **Spraak-laag** | sessie opnemen → voorkeuren per beeld | opname → transcriptie (Whisper-klasse) → LLM koppelt uitspraken aan beelden via tijdstempels | AVG/consent, NL-spraakkwaliteit, koppeling uitspraak↔beeld |
| 4 | **Brief-generator** | sessie-data → visiedocument + moodboard + palet | LLM-template op geëxporteerde sessie-JSON | kwaliteit borgen: Elise cureert altijd |
| 5 | **Budget & materialen** | ontwerp → materialenlijst + budgetindicatie | gecureerde bibliotheek van ±100 Verstelle-materialen met prijsranges; LLM-assist voor hoeveelheden | prijsactualiteit, aansprakelijkheid bij budgetten (disclaimer-beleid) |
| 6 | **Klantportaal** | per project: beelden, keuzes, planning, budget, documenten | build-vs-buy onderzoeken: Notion/SaaS-portal eerst vs. eigen bouw in deze app | onderhoud, verwachtingen, security |
| 7 | **Studio-operatie** | CRM-light, offertes, facturen, planning | koop: Moneybird e.d. + AI-concepten voor offertes/mails; NIET bouwen | discipline, koppelingen |
| 8 | **Intake-assistent** | website-intake → kwalificatie → agenda | bestaand formulier + LLM-kwalificatie + Calendly-koppeling | tone of voice, geen klant afschrikken |

For each tool the agent must produce: doel, gebruiker, kernflow (≤6 stappen), MVP-scope met
mock data, build-vs-buy advies met kosten, moeilijkheden, voordelen, afhankelijkheden,
geschatte bouwtijd (in AI-geassisteerde avonden, niet dev-team-weken).

**System view (one page):** the shared spine is a simple data model —
`Klant → Project → Sessie → Reacties/Uitspraken → Brief → Ontwerp → Budget` — living in one
Next.js app (this repo's stack: Vercel + Postgres/Neon + auth + blob storage + AI APIs).
One diagram, one paragraph per component, a "wat we bewust NIET bouwen" list. Research
build-vs-buy for portal & CRM seriously — solopreneur time is the scarcest asset.

**Deliverable:** `/research/tools` (overview + system diagram) with a section or subpage
per tool, each with a small **interactive mock demo** where cheap (e.g. fake intake
qualifier, fake materials list with prices, fake portal screen) — mock data only.

### Track I — Kosten & marge (unit economics)
**Goal:** show that the AI layer is financially trivial and the real cost is Elise's time —
or correct that if research says otherwise.

- **Fixed monthly (verify current prices):** hosting (Vercel), domein + e-mail (Google
  Workspace), boekhouding (Moneybird), verzekeringen (beroeps- & bedrijfsaansprakelijkheid
  — get NL quotes for interior design), KvK/bank, agenda/CRM-tooling, telefoon, accountant
  (jaarlijks), buffer. Target a realistic total; hypothesis €300–600/mo excl. verzekering.
- **Variable per project (verify API pricing at research time):** image generation (~40–80
  beelden per Verkenning), transcriptie (~2u audio), LLM-extractie & drafting. Hypothesis:
  **< €25 AI-kosten per Verkenning van €1.500+** — compute it precisely and show the margin.
- Per-product contribution margins; break-even months for the part-time phase; what the
  first €5k of investment should buy (verzekering, huisstijl-fotografie, trademark, tools).

**Deliverable:** `/research/kosten` — cost tables, per-product margin cards, simple
**cost dashboard** with mock data.

### Track J — Juridisch, admin & setup ("business plan 101")
**Goal:** the complete do-this-list to exist legally and professionally in NL.

- Rechtsvorm: eenmanszaak vs BV at these revenue levels (incl. 2026 fiscal reality:
  zelfstandigenaftrek afbouw, MKB-winstvrijstelling, box 2 — research current state).
- KvK, BTW (21% on services; kwartaalaangifte), zakelijke rekening, boekhouding.
- **Part-time start next to employment:** check standard arbeidscontract issues
  (nevenwerkzaamheden clause, non-compete), and note this as a personal action for Elise.
- Verzekeringen: beroepsaansprakelijkheid (design errors → verbouwkosten!), bedrijfs-
  aansprakelijkheid, arbeidsongeschiktheid (the expensive one — get real NL quotes),
  rechtsbijstand.
- Algemene voorwaarden: DNR 2011 / BNO-model als basis; offerte- en contractstructuur;
  betalingstermijnen (aanbetaling!), meerwerk-clausules, aansprakelijkheidsplafond.
- **AVG/GDPR — extra important because of speech recording:** consent flow, retention
  policy, EU-processing of transcripts, verwerkersovereenkomsten with AI vendors, DPA
  register. Also portretrecht/consent for before-after marketing.
- IP: auteursrecht op ontwerpen (wie krijgt wat bij betaling), merkregistratie BOIP
  (naam + methodenaam), domeinnamen (verstelle.nl e.d. — check availability!).
- Titelbescherming: outcome of Track C's check reflected here as action items.
- **Accounts checklist** (the boring gold): KvK, bank, Moneybird, Google Workspace,
  Instagram Business, Pinterest Business, LinkedIn, Google Business Profile, Calendly,
  Vercel (own account/org — currently on Floris's), domein-registrar, BOIP, verzekeraars.

**Deliverable:** `/research/setup` — an **interactive checklist** grouped by phase
(voor de eerste klant / voor de eerste €10k / voor fulltime), each item with cost, time,
and where to do it. Plus the AVG-consent flow for the speech method as a spec.

### Track K — Risico's (the honest page)
**Goal:** name what can kill this, with mitigations. Minimum set to analyze:
verwachtingskloof AI-beeld vs. maakbaar ontwerp; capaciteitsplafond solo (ziekte!);
part-time geloofwaardigheid; kopieerdreiging & prijsanker-erosie; platformafhankelijkheid
(Instagram-algoritme); lange projectcycli & cashflow; scope creep in begeleiding;
aannemerskrapte; titel/juridisch; AI-API-afhankelijkheid & kostenwijzigingen; en de
persoonlijke: baan opzeggen te vroeg/te laat. For each: kans × impact, mitigatie,
early-warning-signaal.

**Deliverable:** `/research/risicos` — risk matrix + mitigation cards.

### Track L — Roadmap & beslismomenten
**Goal:** stitch everything into a phased plan with explicit gates.

- **Fase 0 — Fundament (nu, part-time):** setup-checklist (Track J), 2–3 pilotprojecten
  tegen gereduceerd tarief voor portfolio + testimonials + content, methode branden,
  Verkenning-product af.
- **Fase 1 — Machine aan:** betaalde Verkenningen live, funnel meten, 1 project tegelijk.
- **Fase 2 — Transitiepoort:** criteria om de baan op te zeggen (pipeline ≥ X maanden
  vooruit, buffer ≥ Y maanden vaste lasten, Z projecten afgerond met referenties) —
  make the gate concrete from Track E's numbers.
- **Fase 3 — Run-rate €250k:** de mix uit Track E, plus wat er dan uitbesteed wordt
  (fotografie, boekhouding, eventueel tekenwerk) — solopreneur ≠ alles zelf.
- KPI's per fase (max 5 per fase).

**Deliverable:** `/research/roadmap` — timeline visual, gate cards, KPI tables. Also feeds
the executive summary.

---

## 3. Deep-research prompts (ready to dispatch)

Run each as a separate deep-research task. Each prompt is self-contained; prepend nothing.
Cite sources with dates; prefer primary NL sources (CBS, Kadaster, NVM, KvK, BNO/BNI,
rijksoverheid.nl, BOIP) over blogs.

### Prompt 1 — Markt
> Research the Dutch market for premium residential interior architecture and renovation,
> focused on Amsterdam, Den Haag and Rotterdam, for a new one-person studio targeting
> homeowners with properties of €500k–€2M and renovation/interior budgets of €75k+.
> Deliver: (1) annual housing transactions in that price band per city (latest Kadaster/NVM
> data); (2) evidence on what share of buyers renovate substantially within ~2 years and
> typical spend distribution across construction, kitchen/bath, interior and design fees;
> (3) segmentation of premium interior-design clients in NL with buying triggers and search
> behaviour; (4) market outlook 2026–2028 for renovation (rates, construction labour
> shortage, consumer confidence); (5) evidence on Dutch consumer attitudes to AI-assisted
> design services. Format: numbered findings, each with source + year + confidence
> (high/med/low). End with the 5 numbers a business plan should quote.

### Prompt 2 — Concurrentie
> Build a competitor landscape for a premium boutique interior-architecture studio in the
> Randstad (NL). (1) Identify 15–25 direct competitors (boutique studios serving €75k+
> residential projects — e.g. Amsterdam names like Nicemakers, Framework Studio, Standard
> Studio, and equivalents in Den Haag/Rotterdam; verify and extend this list yourself).
> For each: positioning/style, services (design only vs incl. site supervision), team size,
> any public pricing signals, marketing channels, notable gaps. (2) Map indirect
> competition: high-end stylists, architects doing interiors, contractor in-house design,
> kitchen/bath showroom design. (3) Map AI/online interior services active or usable in NL
> (Havenly-style, RoomGPT/InteriorAI-style, retail planners): pricing, quality ceiling,
> target user, upmarket movement. (4) Collect recurring client complaints about premium
> interior studios from reviews/forums (slowness, opacity, cost overruns, "couldn't
> visualize it"). Output: comparison table, a 2-axis positioning map suggestion, and the
> three clearest unserved gaps.

### Prompt 3 — Moat & AI-disruptie
> Investigate how solo/boutique creative service businesses defend pricing power when AI
> commoditizes their production work. (1) Case evidence from logo design, photography,
> copywriting and architecture 2023–2026: who lost, who kept/raised prices, and which
> assets explained it (brand, taste, accountability, client relationship, execution).
> (2) For a Dutch interior studio whose method is "client's own home visualized by AI early,
> preferences captured via recorded sessions": assess realistically which moats compound —
> codified style DNA, branded method, proprietary preference/materials dataset, contractor
> network, portfolio, client portal switching costs — and rank them. (3) What is legally
> protectable in NL/EU: trademark (BOIP process + costs) for studio and method name,
> copyright on designs/imagery, design rights; what is not (prompts, the AI-visualization
> idea). (4) CRITICAL: the Dutch title "interieurarchitect" is legally protected via the
> Architectenregister — confirm current requirements, register costs, penalties for misuse,
> and safe alternative titles. (5) Analyze the "cheap anchor" scenario: a competitor sells
> AI room scans at €99 — what defensive positioning works? Output: ranked moat inventory
> with evidence, legal action list with costs, and a one-paragraph defence playbook.

### Prompt 4 — Prijzen & verdienmodel
> Benchmark pricing for interior architecture/design services in the Netherlands, premium
> residential segment, 2025–2026. (1) Hourly rates, fixed-package prices, and %-of-budget
> fees actually charged (BNO/BNI guidance, studio websites, industry surveys, job/freelance
> platforms). (2) Typical fee as % of renovation budget for full design + begeleiding.
> (3) Evidence on paid-discovery products (a €1.5k–2.5k "visualization/vision session")
> in design or adjacent premium services: do they convert, and what price points work?
> (4) Payment structuring norms (deposits, termijnen) for design projects in NL. (5) Day
> rates for development/hospitality design advisory in NL. Output: benchmark tables with
> sources; then test this revenue mix for realism at ~1.700 billable hours/yr: 20 vision
> sessions (€2k) + 8 full designs (€12k avg) + 4 design+supervision projects (€25k avg) +
> 15 advisory days (€1.4k) ≈ €250k — flag which assumption is most fragile.

### Prompt 5 — Marketing & kanalen NL
> Research customer acquisition for a premium boutique interior studio in the Randstad, run
> by one person with ~4 hours/week for marketing plus an AI content pipeline. For each
> channel — Instagram, Pinterest, SEO/Google Business Profile, PR in Dutch interior media
> (vtwonen, Eigen Huis & Interieur, Residence, FD), partnerships with makelaars/
> hypotheekadviseurs/showrooms/aannemers, referral programs, LinkedIn (for developer
> advisory) — deliver: how the premium interior client actually discovers studios (evidence),
> 3–5 NL studios executing that channel well with what's observable about their approach,
> realistic effort/yield for a solo founder, and the first three concrete actions.
> Include: search-volume estimates for ~15 Dutch keywords like "interieurarchitect
> amsterdam"; what gets young studios press coverage (is an AI-guided method newsworthy?);
> and which channels to deliberately skip in year 1. Output: channel scorecards + a 90-day
> starter plan.

### Prompt 6 — Juridisch & setup NL
> Compile the complete legal/administrative setup for a Dutch solo interior-design business
> starting part-time in 2026. Cover, with current (2026) rules and costs: (1) eenmanszaak
> vs BV at €50k → €250k revenue (income tax path incl. afbouw zelfstandigenaftrek,
> MKB-winstvrijstelling vs BV+box 2), when to switch; (2) KvK, BTW-plicht en -tarief voor
> ontwerpdiensten, kwartaalaangifte; (3) starting alongside employment: nevenwerkzaamheden/
> non-compete considerations; (4) insurance for interior designers: beroepsaansprakelijkheid,
> bedrijfsaansprakelijkheid, AOV — typical NL premiums; (5) algemene voorwaarden: DNR 2011
> vs BNO-model for a studio doing design + verbouwbegeleiding, liability caps, meerwerk;
> (6) AVG for a service that RECORDS client conversations and processes them with AI:
> consent requirements, retention, vendor DPAs, EU data processing options for
> transcription/LLM; (7) IP: ownership of designs vs client rights, portfolio/consent
> practice; (8) BOIP trademark registration process and costs. Output: a phased checklist
> (before first client / before €10k / before going full-time) with cost and effort per
> item, plus a specific consent-flow recommendation for the recorded sessions.

### Prompt 7 — Tools: build vs buy
> For a one-person Dutch design studio building an AI-assisted client workflow, research
> build-vs-buy (2026 state, EU-friendly): (1) client portals for creative studios
> (SuiteDash/Copilot/Moxie/Notion-based/etc.): pricing, white-label, NL/EU data residency;
> (2) speech-to-text for Dutch conversational audio: quality leaders (Whisper-class, NL
> accuracy), EU-processing options, price per audio hour; (3) image generation for
> photo-based interior restyling: current best APIs for "same room, new style" fidelity,
> cost per image, licensing/commercial terms, EU options; (4) lightweight CRM + invoicing
> for NL solo businesses (Moneybird etc.) and what integrates; (5) e-sign and proposal
> tools. For each category: top 3 options, monthly cost at solo scale, lock-in risk, and a
> build-vs-buy verdict given the studio already runs a custom Next.js/Vercel app. Output:
> decision table + recommended stack under €150/mo total SaaS.

### Prompt 8 — (optioneel, na A–E) Validatie-experimenten
> Design the five cheapest real-world experiments to validate demand for a premium
> AI-guided interior "Verkenning" product (€1.5k–2.5k) in Amsterdam before going full-time:
> e.g. concierge-MVP with 3 pilot clients, landing-page smoke test with ad spend cap,
> makelaar-partnership pilot, Instagram before/after series with DM funnel, open-huis
> event. For each: setup, cost, duration, success metric, kill criterion. Ground in lean
> validation best practice for high-ticket services (not SaaS).

---

## 4. The `/research` website (final deliverable spec)

**Where:** this repo, route group `app/research/`, same Next.js app. **Do not** link it
from `/site` (client-facing). Link it from the **journey** nav (next to the existing
"De website ↗" pill, e.g. "Onderzoek ↗") and from `/overzicht`. Keep global `noindex`.

**Design:** consistent with the established DNA but its own sub-identity — suggestion: the
"werkkamer/lab" register: warm-white paper base, night-dark accents, cobalt for data,
the architectural expanded-sans display type from `/site`, generous tables and charts.
Load the `frontend-design` and `dataviz` skills when building. It must feel like a
beautifully art-directed strategy document, not a dashboard template.

**Pages** (≈12): `/research` (executive summary — "Het plan op één pagina": the thesis,
the 5 market numbers, the price ladder, the funnel, the €250k mix, phase gates, top-5
risks, top-10 actions), then `/markt`, `/concurrentie`, `/onderscheid`, `/positionering`,
`/prijsmodel`, `/klantreis`, `/marketing`, `/tools` (+ per-tool sections/demos),
`/kosten`, `/setup`, `/risicos`, `/roadmap`.

**Interactive elements** (mock data, clearly labeled *fictieve data*): capacity/revenue
calculator (E), funnel calculator (F), cost dashboard (I), setup checklist with
localStorage persistence (J), and 2–3 small tool demos (H). Reuse the journey's feedback
primitives where useful — Elise reacting to research recommendations with the same
choice/comment system would be genuinely valuable for round two.

**Every page ends with:** Bronnen (sources + dates), "Wat hiertegen pleit", and
Beslispunten (decision cards for Elise/Floris).

**Definition of done:**
- [ ] All 12+ pages live, Dutch, sourced, with confidence labels.
- [ ] Executive summary readable in ≤ 10 minutes, everything else drill-down.
- [ ] All 4 calculators/interactives work with sensible defaults.
- [ ] Every track's deliverable checklist (§2) satisfied.
- [ ] Build passes, deployed to the existing Vercel project via push to `main`.
- [ ] No strategy content reachable from `/site`.

---

## 5. Open questions for Floris/Elise (the agent should surface, not decide)

1. Elise's real hourly availability in the part-time phase, and her runway/buffer target
   for the transition gate.
2. May Elise's current employment contract accommodate this (nevenwerkzaamheden)?
3. Title: is Elise registered/registrable in the Architectenregister, or do we adopt an
   alternative title studio-wide?
4. Which pilot clients (friends/family/network) are realistic for Fase 0?
5. Budget ceiling for setup (verzekering + trademark + tools + fotografie)?
6. Does the method get a public brand name, and does Floris want the tooling to remain
   Verstelle-only or eventually become a licensable product for other studios (that's a
   second business — park it, but the data model should not preclude it)?
