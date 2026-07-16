# Tools: bouwen of kopen — Studio Verstelle

> Onderzoek d.d. **2026-07-16**. Alle prijzen geverifieerd op de bron-pagina's op die datum.
> Wisselkoers gehanteerd: **EUR/USD = 1,1448** (ECB/live, 2026-07-16) [zeker: hoog]
> Leidende vraag: *de oprichter is één persoon, parttime. Haar tijd is het schaarste goed. Bouwen of kopen?*

---

## Samenvatting in één alinea

De AI-kostprijs per Verkenning is **€8,66** in het basisscenario en **€17,06** in een pessimistisch scenario — ruim onder de hypothese van €25, bij een verkoopprijs van €1.500–2.500. De hypothese is dus **bevestigd, met een factor ~3 marge**. Beeldgeneratie is 81% van die kostprijs; transcriptie is ruis (€0,31 voor 2 uur). De vaste tech-maandlasten komen uit op **€62,06/mnd** — 41% van de €150-grens, en €40,22 in de opstartfase. De verrassing zit niet in de kosten maar in de **koopmarkt**: voor een Nederlandse solo-studio is die op twee plekken kapot (klantportals: HoneyBook bestaat niet in NL, Dubsado kan geen inclusieve btw, EU-data zit overal achter Enterprise) en op twee plekken uitstekend (Moneybird voor boekhouden; e-sign hoef je niet eens te kopen). Het grootste risico is niet geld maar **geometrie-drift**: het hele aanbod staat of valt met "dít is jóuw kamer", en geen enkel groot beeldmodel gáránderert dat — Gemini houdt geen persistent 3D-geheugen bij, dus geometrie-behoud is emergent gedrag, geen eigenschap.

**In één zin:** koop de AI (Gemini + Voxtral) en de administratie (Moneybird), bouw de portal en de sessie-pipeline zelf, en besteed de vrijgekomen aandacht aan het enige dat de propositie kan breken — of de kamer herkenbaar blijft.

---

## 1. Klantportals voor creatieve studio's

Alle prijzen = goedkoopste bruikbare tier bij **1 gebruiker**, geraadpleegd 2026-07-16.

| optie | kosten/mnd | EU-data | lock-in risico | geschikt? | oordeel |
|---|---|---|---|---|---|
| **SuiteDash** Start | $19 [zeker: hoog] | ✗ US (AWS), DPF-deelnemer, DPA niet onderhandelbaar [zeker: hoog] | Midden-hoog | Deels | Goedkoopste échte white-label: custom domain + eigen logo + eigen login op $19. Maar generieke "business suite"-UI; jouw beeld wordt een bestandsrij, geen portfolio |
| **Assembly** (ex-Copilot, hernoemd 30-09-2025) | $39 Starter / $149 custom domain / **$399** volledige white-label [zeker: hoog] | ✗ US (AWS+Vercel), geen EU-regio [zeker: hoog] | Hoog | ✗ | "Powered by Assembly" weghalen kost $399/mnd. Absurd op solo-schaal |
| **Moxie** Pro | **$20** (jaarbetaling) / $25 mnd [zeker: hoog] | ✗ US, doorgifte via SCC's [zeker: hoog] | Midden | **Ja** | Beste kóóp-optie: white-label portal + custom domain op $20, incl. facturen/offertes/scheduling |
| **Notion** Plus + custom domain | €9,50 + ~$9 domein ≈ €18 [zeker: hoog] | ✗ EU-residency alléén op Enterprise (sales-assisted, Frankfurt) [zeker: hoog] | Laag (markdown-export) | ✗ | Gasten gratis t/m 10. Maar beeld-review is zwak: geen reactie-per-afbeelding, geen versies |
| **Dubsado** Starter | $335/jr ≈ $28 [zeker: hoog] | ✗ US [zeker: middel] | Midden | ✗ | **Btw alleen exclusief** — tax wordt per regel bovenop gerekend, geen inclusieve prijzen [zeker: hoog]. Voor NL-particulieren (prijs incl. btw verplicht) structureel fout |
| **HoneyBook** | $29–109 [zeker: hoog] | n.v.t. | n.v.t. | ✗✗ **Onbruikbaar** | **Niet beschikbaar in NL.** Alleen VS/CA/VK/AU; geen EUR-accountvaluta [zeker: hoog] |
| **Bonsai** | $9–49/user (jaar) [zeker: hoog] | ✗ US, SCC's [zeker: middel] | Midden | ✗ | Branding weg pas op Premium ($29); custom domain alleen Elite ($49, min. 3 users) en "verwacht 2026" [zeker: middel] |
| **Clinked** | $11/user Start-Up, maar $239 Standard [zeker: hoog] | ~ EU-datacenter alléén op Enterprise [zeker: hoog] | Hoog | ✗ | Prijst zichzelf eruit; EU zit achter de duurste deur |
| **Zoho** Projects | $4–14/user [zeker: middel] | ✓✓ **Ja — zoho.eu, Amsterdam + Dublin** [zeker: hoog] | Laag-midden | Deels | Enige met échte EU-residency op solo-prijs. Maar datacenter is bij aanmaak permanent [zeker: middel], en de UI is ambtelijk |
| **Programa** (interieur-specifiek) | $71 (1 seat) [zeker: hoog] | ✗ AU/US (AWS) [zeker: middel] | Midden | Deels | Enige die de vakinhoud kent: specs/materiaallijsten, moodboards, budget, timeline, akkoord. Duur, geen white-label |
| **Studio Designer** | $72–109/user [zeker: middel] | ✗ US | Midden | ✗ | Voor 3–15-mansbureaus met zware inkoop. Overkill |
| **Zelf bouwen** in de bestaande Next.js-app | €0–25 infra [schatting] | ✓✓ Volledig zelf te kiezen (EU-regio) | Geen | **Ja** | Behoefte is smal; de app draait al |

### Oordeel: **bouwen — maar bewust smal**

De koopmarkt faalt hier op een specifieke plek. Elke serieuze white-label-optie is een Amerikaanse *all-in-one* die zijn geld verdient met facturatie, contracten en CRM — en juist dát deel is in Nederland het zwakst: HoneyBook kán niet eens (geen NL, geen EUR), Dubsado kan geen inclusieve btw, en EU-dataresidentie zit overal achter Enterprise (Notion, Clinked) of ontbreekt volledig (Assembly, Moxie, SuiteDash, Bonsai) [zeker: hoog]. Je betaalt dus voor een halve suite waarvan de administratieve helft in NL rammelt, terwijl de portal-helft — het enige wat je écht nodig hebt — generiek blijft.

En die behoefte is klein: **inloggen, beeld zien, erop reageren, budget en planning bekijken.** Dat is magic-link-auth, een imagegrid, een reactie-tabel en twee read-only views. In een bestaande Next.js 15 / React 19-app met een werkende beeldpipeline is dat realistisch een paar dagen werk [schatting] — geen maanden. Daar staat een principieel argument tegenover: de portal is voor een interieurstudio geen bijzaak maar **het product zelf**. Het is de plek waar de klant je werk beoordeelt. Een SuiteDash-bestandsrij ondermijnt precies de merkwaarde die je verkoopt. Dit is het zeldzame geval waarin bouwen nauwelijks duurder is in tijd én beter is in uitkomst.

**Als het tóch kopen wordt** (bijv. omdat ze ook offertes, contracten en urenregistratie in één pakket wil): **Moxie Pro, $20/mnd** — white-label + custom domain voor een tiende van Assembly's $399 [zeker: hoog].

---

## 2. Speech-to-text voor Nederlands gespreksaudio

De sessie is ~2 uur NL-spraak, twee of meer sprekers, en **diarisatie is een harde eis** (welke uitspraak is van de klant en welke van Elise — anders is de "zachte mening" niet toewijsbaar).

| optie | prijs per audio-uur | EU-data | diarisatie | lock-in | geschikt? | oordeel |
|---|---|---|---|---|---|---|
| **Mistral Voxtral Mini Transcribe 2** | **$0,18** ($0,003/min) [zeker: hoog] | ✓✓ **EU by default** (Frans bedrijf, La Plateforme EU-hosted) [zeker: hoog] | ✓ **inbegrepen**, geen meerprijs [zeker: hoog] | Laag (open weights beschikbaar) | ✓✓ | **Winnaar.** Goedkoopst, EU, diarisatie gratis, NL native ondersteund, tot 3 uur per request. ~4% WER op FLEURS (multilingual gemiddelde) [zeker: middel] |
| **ElevenLabs Scribe v2** | $0,22 [zeker: hoog] | ✗ geen EU-residency gevonden [zeker: middel] | ✓ tot 48 sprekers [zeker: middel] | Laag | ✓ | Sterke kwaliteit, prijs -40% sinds 11-03-2026. Maar US, en geen expliciete EU-toezegging |
| **Deepgram Nova-3** | $0,26 batch + $0,12 diarisatie ≈ **$0,38** [zeker: middel] | ✓ **dedicated EU-endpoint** `api.eu.deepgram.com` [zeker: hoog] | ✓ maar **betaald** ($0,0020/min) | Laag | ✓ | Goede EU-optie. Let op: prijspagina en derde partijen spreken elkaar tegen over batch ($0,0043 vs $0,0077/min) — zie noot |
| **AssemblyAI Universal** | $0,27 (99 talen, vlak tarief) [zeker: middel] | ✓ self-serve EU-endpoint [zeker: middel] | ✓ inbegrepen | Laag | ✓ | Prima, maar duurder dan Voxtral zonder duidelijk NL-voordeel |
| **Gladia** (FR) | $0,61 async Starter; ~$0,20 op Growth met commit [zeker: middel] | ✓ EU-residency, maar **contractueel alleen op Enterprise** [zeker: middel] | ✓ inbegrepen | Laag | Deels | EU-bedrijf (Frankrijk), maar op solo-schaal 3× de prijs van Voxtral |
| **Azure / Google Speech** | ~$0,60–1,00 [schatting] | ✓ EU-regio's | ✓ | Midden | ✗ | Duurder, ouder, en de cloud-consoles kosten je tijd |
| **Lokale Whisper large-v3 + pyannote** (WhisperX) | ~€0,04 (stroom) [schatting] | ✓✓ **Data verlaat het pand niet** | ✓ via pyannote | Geen | Deels | Zie hieronder |
| **OpenAI gpt-4o-transcribe** | $0,36 ($0,006/min) [zeker: hoog] | ✗ | ✗ geen native diarisatie | Laag | ✗ | Diarisatie ontbreekt = diskwalificerend |
| **Midjourney/n.v.t.** | — | — | — | — | — | — |

**Noot over Deepgram [zeker: middel]:** de prijspagina rendert Nova-3 pre-recorded als `$0,0077/min` en streaming als `$0,0048/min`, wat omgekeerd is aan de norm (streaming is doorgaans duurder) en aan wat meerdere derde partijen melden (batch $0,0043, streaming $0,0077). Waarschijnlijk een kolomverwisseling bij het uitlezen. Het verschil is voor deze use-case ±€0,35 per sessie — irrelevant voor de beslissing, maar wees er alert op bij een échte inkoopbeslissing.

### Nederlandse nauwkeurigheid: wat we wél en niet weten

Er bestaat **geen onafhankelijke, actuele NL-specifieke WER-benchmark** die alle aanbieders naast elkaar zet [zeker: hoog]. Wat we hebben:
- Whisper large-v3 op Nederlands: ~3,1% WER op FLEURS, ~5,5% op Common Voice [zeker: laag — cijfers uit secundaire bronnen, niet uit een primaire paper]
- Voxtral Mini Transcribe 2: ~4% WER op FLEURS (gemiddelde over top-10 talen, NL expliciet in de grafieken) [zeker: middel]
- De grote aanbieders publiceren vrijwel uitsluitend Engelse benchmarks [zeker: hoog]

**Praktische consequentie:** kies niet op benchmarkcijfers die er niet zijn. Test op één echte sessie-opname. Nederlands is een goed-bedeelde taal (alle genoemde modellen ondersteunen het natively); de kwaliteitsverschillen zullen kleiner zijn dan het verschil tussen een goede en slechte microfoon.

### Is lokale Whisper haalbaar voor 2 uur sessie?

**Technisch ja, praktisch nee — maar hij is wél je privacy-vangnet.** WhisperX haalt met batched inference tot ~70× realtime op GPU, realistisch ~30× inclusief alignment en diarisatie [zeker: middel]. Twee uur audio is dan grofweg 4–12 minuten op een laptop met fatsoenlijke GPU [zeker: laag — sterk hardware-afhankelijk]. De bekende bottleneck is pyannote-diarisatie, die berucht traag is: er zijn meldingen van 90 minuten audio die >1 uur diariseren, zelfs op een RTX 3090 [zeker: middel].

Dat is niet het echte bezwaar. Het echte bezwaar is dat je **€0,31 per sessie bespaart** en daarvoor een CUDA/pyannote/ffmpeg-toolchain moet onderhouden op een laptop van een parttime ondernemer. Dat is exact de verkeerde ruil voor iemand wiens tijd het schaarste goed is. **Koop de API.**

### Oordeel

**Kopen: Mistral Voxtral Mini Transcribe 2.** Het is tegelijk de goedkoopste, de enige met EU-hosting als *default* in plaats van als optie, en diarisatie zit zonder meerprijs inbegrepen. Voor een Nederlandse studio die klantgesprekken over hun eigen huis opneemt, is "Europees bedrijf, EU-hosting, GDPR als uitgangspunt" geen bijzaak maar precies het verhaal dat je aan die klant wilt vertellen. **Let op:** Mistral bewaart API-input standaard **30 dagen** voor abuse-monitoring; Zero Data Retention is alleen beschikbaar op het Scale-plan [zeker: middel]. Voor opnames van iemands woonkamer is dat een punt om te noemen in je privacyverklaring.

---

## 3. Beeldgeneratie: "dezelfde kamer, nieuwe stijl"

Dit is de kern van het product en tegelijk het grootste technische risico. De belofte is niet "hier is een mooie kamer" maar **"hier is jóuw kamer, anders"**. Als de muren verschuiven, het raam van plek verandert of de vide verdwijnt, stort de propositie in.

| optie | kosten/beeld | EU-data | licentie commercieel | geometrie-behoud | lock-in | geschikt? | oordeel |
|---|---|---|---|---|---|---|---|
| **Gemini 3 Pro Image** (huidig) | **$0,134** (1K/2K), $0,24 (4K), input $0,0011/beeld [zeker: hoog] | ~ Alleen via **Vertex AI** EU-regio's; de AI-Studio-endpoint die nu gebruikt wordt is **globaal** [zeker: hoog] | ✓ Gebruiker bezit output, royaltyvrij, API-data niet gebruikt voor training [zeker: hoog] | **Emergent, niet afgedwongen** — zie hieronder | Midden | ✓ | Beste prompt-begrip en referentiebeeld-fusie. Duurste per beeld. SynthID-watermerk onzichtbaar ingebed [zeker: hoog] |
| **FLUX.2 [pro] edit** | **$0,045** (vanaf 1MP) [zeker: hoog] | ~ BFL = **Freiburg (DE) + San Francisco**, dual HQ; GDPR-conform, SOC 2 Type II + ISO 27001; **multi-region**, dus geen EU-only garantie. Zero-data-retention alleen enterprise [zeker: middel] | ✓ API-output commercieel gelicentieerd [zeker: hoog] | Beter: multi-referentie tot 10 beelden [zeker: middel] | Laag | ✓✓ | **3× goedkoper dan Gemini.** Duitse oorsprong + self-hosting-optie = sterkste EU-verhaal van het veld |
| **FLUX.2 [max]** | $0,07 [zeker: hoog] | ~ idem | ✓ | idem | Laag | ✓ | Hoogste kwaliteit in de FLUX-lijn |
| **FLUX.1 Kontext [pro]** | $0,04 [zeker: hoog] | ~ idem | ✓ | Speciaal voor *editing* getraind | Laag | ✓ | Vorige generatie, maar edit-specifiek en goedkoop |
| **FLUX.2 [klein] 9B** | $0,015 [zeker: hoog] | ✓ open weights → zelf te hosten in EU | ✓ open-source licentie (15-01-2026) [zeker: middel] | Via depth-LoRA (zie onder) | **Geen** | ✓ | Goedkoopste; open weights = volledige controle |
| **OpenAI gpt-image-2** | ~$0,03 (1K) / $0,05 (2K) / $0,06 (4K) [zeker: middel]; token-basis $30/M output [zeker: hoog] | ✗ | ✓ | Verwerkt referentiebeelden **altijd op high fidelity** → edits kosten 2–3× de baseline [zeker: middel] | Midden | Deels | Prijs onvoorspelbaar bij edit-zware workflows |
| **Stable Diffusion + ControlNet** (zelf-gehost) | ~€0,00 marginaal + GPU-huur | ✓✓ volledig | ✓ | ✓✓ **Expliciet afgedwongen** | Geen | Deels | Zie "geometrie" hieronder |
| **Midjourney** | $10–120/mnd [zeker: hoog] | ✗ | ~ Volledige rechten pas op Pro ($60) [zeker: hoog] | n.v.t. | Hoog | ✗✗ **Diskwalificeer** | **Geen publieke API, en de voorwaarden verbieden automatisering** — accounts via wrappers worden geband [zeker: hoog]. Onbruikbaar in een pipeline |
| **Interieur-specifieke API's** (ModelsLab $0,002/beeld, Decor8 $0,20, MeltFlex, InteriorAI, HomeDesigns) | $0,002–0,63 [zeker: laag — vrijwel uitsluitend SEO-bronnen] | ✗ | ? | Claimen depth-behoud | Hoog | ✗ | **Verkeerde gereedschap** — zie hieronder |

### Waarom de interieur-specifieke tools afvallen

Dit is het belangrijkste inhoudelijke inzicht van deze sectie. Tools als InteriorAI, Decor8, RoomGPT en HomeDesigns verkopen **stijl-presets**: "Scandinavisch", "Modern", "Industrieel", "Minimalistisch". Ze zijn gebouwd voor makelaars die een leeg huis willen stofferen — virtual staging, volume, generiek.

Elise's hele waarde is het tegenovergestelde. Uit haar eigen Design DNA (`elise.md`, `tools/gemini.mjs`):

> *"luxe eclectic, sculptural, architectural … NEVER beige Scandinavian minimalism, NEVER cluttered classic eclecticism … Interiors that could only be in Paris or Milan."*

Een tool waarvan het product een dropdown met "Scandinavian" is, is niet een suboptimale keuze — het is **precies de stijl die ze expliciet afwijst**. Wat zij nodig heeft is een model dat *haar* signatuur uit referentiebeelden overneemt en op *deze* kamer toepast. Dat kan alleen met een algemeen model met referentiebeeld-conditionering (Gemini, FLUX). De interieur-SaaS is hier niet "kopen i.p.v. bouwen" — het is het verkeerde product kopen.

*(Kanttekening: de prijzen en claims van deze categorie komen vrijwel uitsluitend uit SEO-marketingblogs, niet uit geverifieerde documentatie. Behandel elk cijfer hierboven als onbetrouwbaar. Dat versterkt de conclusie eerder dan dat het haar verzwakt.)*

### Is er in 2026 échte geometrie-behoudende restyle die naïef prompten verslaat?

**Ja — en dit is het antwoord op de belangrijkste technische vraag in dit onderzoek.**

Het onderscheid dat ertoe doet:

- **Gemini 3 Pro Image / Nano Banana Pro** doet "native image editing": je stuurt het origineel plus een instructie, en het model past aan wat je vraagt en laat de rest staan. Maar het model **houdt géén expliciet persistent 3D-geheugen bij** — elk beeld wordt onafhankelijk gegenereerd vanuit een controlbeeld en een stijlreferentie [zeker: middel, bron: PanoWorld-paper, arXiv 2026]. Geometrie-behoud is dus een **emergente eigenschap van goed prompten**, geen garantie. Google's eigen advies is veelzeggend: draai 2–3 varianten en kies de beste [zeker: middel].
- **Depth-geconditioneerde ControlNet** doet het fundamenteel anders: er wordt een **diepte-map uit de foto geëxtraheerd** en die map wordt als harde conditionering aan het diffusieproces meegegeven. De muren, ramen en zichtlijnen kúnnen niet driften, omdat de geometrie geen suggestie is maar een invoerkanaal. Voor architectonische en interieurscènes is `Zoe-DepthMapPreprocessor` de aangewezen depth-generator [zeker: middel].

Concreet beschikbaar in 2026:
- **FLUX.1 Depth [dev]** — het diffusiemodel is hertraind mét diepte-conditionering [zeker: middel]
- **FLUX ControlNet Union Pro 2.0** — "lock in structure using a control image", beschikbaar via o.a. WaveSpeed [zeker: middel]
- **`refcontrol-FLUX.2-klein-9B-reference-depth-lora`** (HuggingFace) — reference + depth-fusie bovenop FLUX.2 Klein 9B: exact de combinatie *"deze geometrie + die stijlreferentie"* die dit product nodig heeft [zeker: middel]
- **SD + ControlNet-depth** zelf-gehost — de volwassen, best gedocumenteerde route [zeker: hoog]

**Oordeel voor deze sectie:** *blijf voorlopig kopen (Gemini), maar bouw de depth-route als vangnet.* Gemini 3 Pro Image begrijpt Elise's DNA-prompt het best en levert vandaag de mooiste beelden — dat is echte waarde, en €8 per sessie is geen probleem. Maar de propositie hangt aan geometrie-behoud dat het model niet gáránderert. Zodra een klant zegt *"dit is mijn kamer niet"*, is het antwoord niet "beter prompten" maar **depth-conditionering**. Houd FLUX.2 (3× goedkoper, Duits bedrijf, open weights voor de klein-variant, expliciete depth-control) klaar als tweede spoor — en test 'm op één echte kamer voordat het nodig is.

---

## 4. Lichtgewicht CRM + facturatie voor NL-zzp

Alle prijzen **excl. btw** tenzij vermeld. Peildatum 2026-07-16.

| optie | kosten/mnd (solo) | EU-data | lock-in risico | geschikt? | oordeel |
|---|---|---|---|---|---|
| **Moneybird — Start** | **€15** [zeker: hoog] | ✓ NL-bedrijf, AWS Frankfurt (EER), ISO 27001, verwerkersovereenkomst [zeker: hoog] | **Laag** — open REST API, UBL/PDF-export, maandelijks opzegbaar | ✓✓ | **Winnaar.** Enige met volwassen publieke API op **élk** pakket, gratis. Offerte-acceptatie mét handtekening ingebouwd. Peppol zonder meerprijs |
| **e-Boekhouden.nl — ZZP** | €9,95 (actie €4,98 bij 12 mnd); Standaard €14,50; +Factureren €24 [zeker: hoog] | ✓ NL [zeker: middel] | Laag-midden — REST API + legacy SOAP | ✓ | Goedkoopst; **15 mnd gratis voor starters** [zeker: hoog]. ZZP-tier max 240 boekingen/jr. API bestaat (Swagger) maar is ruwer/ouder. Sterke #2 |
| **Jortt — ZZP** | €19,95 (intro €9,95 3 mnd); MKB €24,95 [zeker: hoog] | ✓ NL [zeker: middel] | **Midden** — API pas vanaf **MKB (€24,95)** én app-registratie via support-mail [zeker: hoog] | Deels | Nette REST API (OAuth2, Peppol-verzending), maar tier-gated + handmatige onboarding. Duurder voor minder API-vrijheid |
| **Tellow** | Gratis; Basis €12,99; Plus €22,99; Compleet €69,99 [zeker: hoog] | ✓ NL [zeker: middel] | **Hoog** — geen publieke developer-portal gevonden [zeker: middel] | ✗ | **Afvaller.** Btw-aangifte én offertes pas vanaf **Plus €22,99** — duurder dan Moneybird Start voor minder. Geen publieke API |
| **Rompslomp** | Starter €0 (5 fact./mnd); Puur Factuur €7,95; Basic €13,50 [zeker: hoog] | ✓ NL [zeker: middel] | Hoog — API niet publiek gedocumenteerd [zeker: laag] | Deels | Beste gratis tier, btw-aangifte op álle betaalde tiers. Valt af op de API-eis |
| **MoneyMonk** (outsider) | Basis €9; Pro €32,50; Starter 15 mnd gratis [zeker: middel] | ✓ NL [zeker: middel] | Midden | Deels | Gebouwd voor uren/projecten-zzp'ers — past conceptueel bij een ontwerpstudio. API-verhaal zwak |

**Btw-aangifte:** Moneybird dient btw-aangifte én ICP-opgaaf **rechtstreeks bij de Belastingdienst** in [zeker: hoog]. KOR is geen softwarefunctie maar een regeling — onder KOR doe je in beginsel géén btw-aangifte meer [zeker: hoog].

⚠️ **Valkuil: neem niet Moneybird Compact (€3).** Letterlijk uit de helpdesk: *"met het Compact-pakket kun je maximaal 1 verkoopfactuur per maand versturen en geen btw-aangifte doen"* [zeker: hoog]. Start is de eerste bruikbare tier.

⚠️ **Weerlegging — de NL e-facturatiedeadlines van 2027/2028 bestaan niet.** Meerdere vendor-blogs claimen dat NL-bedrijven >€800.000 omzet per 1-1-2027 en álle bedrijven per 1-1-2028 verplicht via Peppol moeten e-factureren. **Dat is onjuist.** De feiten: ViDA is aangenomen 11-03-2025; per **1-7-2030** geldt e-facturatie voor **grensoverschrijdende** intra-EU B2B; over **binnenlandse B2B in NL is nog géén besluit genomen** — het kabinet zegde duidelijkheid toe voor "zomer 2026" en plant internetconsultatie in Q4 2026 [zeker: hoog]. Bovendien factureert een interieurstudio grotendeels aan **particulieren (B2C)** — e-facturatiemandaten raken B2B/B2G. Peppol-ready zijn via Moneybird is gratis meegenomen, geen reden tot haast.

### Oordeel: **kopen — Moneybird Start, €15/mnd excl. btw**

Ja, dit is de voor de hand liggende "buy" — maar niet om de voor de hand liggende reden. **De keuze wordt beslist door de API, niet door de prijs.** Het prijsverschil tussen alle kandidaten is €5–10/mnd (ruis), terwijl het API-verschil bepaalt of de Next.js-app überhaupt automatisch kan factureren. Moneybird is de enige van de vijf met een publieke, gedocumenteerde REST API (`POST /sales_invoices`, apart `/estimates`-endpoint, UBL-download, OAuth2) die **gratis is en op élk pakket beschikbaar** [zeker: middel-hoog]. Jortt zet de API achter een duurdere tier plús handmatige registratie; Tellow en Rompslomp hebben er geen.

**e-Boekhouden.nl is de serieuze heroverweging**: €5/mnd goedkoper en **15 maanden gratis voor starters** — relevant voor iemand die net begint. Kies die als de API-ambitie sneuvelt of als cash-out in jaar 1 telt.

**Bouw dit niet zelf.** Facturatie en btw zijn gereguleerd, saai, en veranderen continu (zie de ViDA-verwarring hierboven). Dit is precies het werk dat je wegkoopt om tijd over te houden voor het onderscheidende deel.

---

## 5. E-sign & offertes

### Wat is juridisch écht nodig?

**eIDAS (Verordening (EU) 910/2014)** kent drie niveaus: **SES** (aanvinken, getypte naam, canvas-handtekening), **AES** (uniek verbonden aan ondertekenaar, exclusieve controle, wijziging detecteerbaar), **QES** (AES + gekwalificeerd certificaat).

De vier regels die ertoe doen:
1. **Art. 25(1) eIDAS**: rechtsgevolg mag niet worden ontzegd *enkel omdat* een handtekening elektronisch is [zeker: hoog].
2. **Alleen QES** heeft van rechtswege automatisch hetzelfde rechtsgevolg als een natte handtekening [zeker: hoog].
3. **Art. 3:15a lid 1 BW**: SES en AES hebben dezelfde rechtsgevolgen *"indien de gebruikte methode voldoende betrouwbaar is, gelet op het doel waarvoor de elektronische handtekening is gebruikt en op alle overige omstandigheden van het geval"* — een **glijdende schaal**, geen vinkje [zeker: hoog].
4. **Beslissend:** een interieurontwerpovereenkomst is een **overeenkomst van opdracht (art. 7:400 BW)** en dus **vormvrij**. Er is wettelijk **helemaal geen handtekening vereist** voor geldigheid. De handtekening dient het *bewijs* (vrije bewijsleer, art. 152 Rv), niet de totstandkoming [zeker: hoog].

➡️ **Is "klik om te accepteren" rechtsgeldig in NL? Ja. SES volstaat** voor een normale interieurontwerp-offerte.

| optie | kosten/mnd | EU-data | lock-in | geschikt? | oordeel |
|---|---|---|---|---|---|
| **Moneybird offerte-acceptatie** (al inbegrepen) | **€0 extra** (zit in de €15) [zeker: hoog] | ✓ EER, ISO 27001 | **Geen** — je hebt het al | ✓✓ | **Winnaar.** SES + handtekening-canvas + **naam, e-mail én IP-adres** vastgelegd + bevestigingsmail. Moneybird zelf: *"Dit biedt voldoende zekerheid voor de meeste opdrachten"* [zeker: hoog] |
| **Youtrust** (ex-Yousign) | Free (2/mnd); One €9; Plus €23/user [zeker: hoog] | ✓✓ *"Data is hosted in the EU"* (FR) [zeker: hoog] | Laag | Als backup | **Beste betaalde EU-optie.** QES vanaf €10/handtekening. **Let op: Yousign heet sinds zomer 2026 Youtrust** [zeker: hoog] |
| **Skribble** | Vanaf €9; **los: AES €2,50 / QES €4,50** [zeker: middel-hoog] | ~ CH/EU [zeker: middel] | Laag | Als backup | Scherpste **pay-per-use** voor als er écht QES nodig is |
| **DocuSign** | Personal €9 (5 envelopes); Standard €23/user; Business Pro €38 [zeker: middel-hoog] | ✗ US; EU-regio op hogere tiers [zeker: laag] | Midden-hoog | ✗ | **Afvaller.** Levert **SES — hetzelfde niveau als Moneybird** — voor €9–23/mnd extra |
| **Dropbox Sign** | Essentials $15/user; Standard $25 (min. 2 users) [zeker: middel] | ✗ US | Midden | ✗ | Duurder, USD, geen meerwaarde op SES-niveau |
| **SignRequest** | Prijspagina **404** op 2026-07-16 [zeker: hoog] | ✗ Was NL — **nu onderdeel van Box (VS)** sinds 2021 [zeker: hoog] | **Hoog** | ✗ | **De "NL/EU"-reputatie is achterhaald.** Box-eigendom, en **geen publieke API meer sinds dec. 2022** [zeker: middel-hoog] |
| **Zoho Sign** | Free (5/mnd); Standard ~$10/user [zeker: middel] | ~ IN/US; EU-DC niet bevestigd [zeker: laag] | Midden | ✗ | Losse tool náást Moneybird = dubbele administratie zonder juridische winst |
| **PandaDoc** | Free (5/mnd); Starter $19; **Business $49** (offertes pas hier) [zeker: hoog] | ✗ US | Hoog | ✗ | Overkill |
| **Better Proposals** | ~$13–29/user [zeker: laag-middel] | ✗ UK/US | Hoog | ✗ | Alleen zinnig als de *presentatie* van de offerte het knelpunt is — maar dat lost haar eigen Next.js-site al op |

### Oordeel: **niets kopen. €0 extra.**

**De hypothese klopt: de offerte-acceptatie van het boekhoudpakket is genoeg.** De redenering is niet "goedkoop is goed genoeg", maar dat **een betaalde tool juridisch niets extra's levert op het niveau dat hier speelt**. DocuSign Standard (€23/mnd) levert exact hetzelfde eIDAS-niveau (SES) als Moneybird (€0 extra). Je kunt je hier niet uit het risico *kópen*; alleen een sprong naar AES/QES verandert de juridische positie werkelijk — en die is voor vormvrije opdrachten niet vereist.

⚠️ **Het scherpste bewijs hiervoor:** Nederlandse rechters hebben **DocuSign- en Adobe Sign-handtekeningen al afgewezen** als onvoldoende betrouwbaar — Rb Den Haag 08-05-2018 (DocuSign), Rb Amsterdam 11-12-2019 (DocuSign), Rb Zeeland-West-Brabant 07-10-2020 (Adobe Sign, borgtocht, ondanks sms-verificatie) [zeker: middel-hoog]. Die zaken betroffen stukken mét een wettelijk vormvereiste — precies waar de lat hoger ligt. Het merk DocuSign koopt geen rechtsgeldigheid.

**Concreet:**
1. **Standaard:** Moneybird-offertes met "online accepteren en ondertekenen". €0.
2. **Verklaar algemene voorwaarden van toepassing** in de offerte en stuur ze mee — bewijsrechtelijk meer waard dan welk duurder handtekeningetje ook [zeker: hoog].
3. **Uitzondering:** bij grote opdrachten adviseert Moneybird zelf een fysieke handtekening [zeker: hoog]. Hanteer een drempel — bijv. **>€10.000** [schatting] — en koop dán **incidenteel** QES bij Skribble (€4,50/handtekening) of Youtrust (vanaf €10). Pay-per-use, géén abonnement.
4. **Niet doen:** SignRequest kiezen om zijn "NL/EU"-imago — dat klopt niet meer.

**eIDAS 2.0 / EUDI-wallet** (Verordening (EU) 2024/1183): lidstaten moeten eind 2026 een wallet aanbieden; NL heeft vertraging gesignaleerd. Acceptatieplicht voor de private sector pas ~12 mnd ná uitrol (≈ eind 2027) en alleen voor gereguleerde sectoren en zeer grote platforms [zeker: middel-hoog]. **Verandert vóór 2027 niets voor een interieurstudio** — en maakt QES daarna juist goedkoper. Reden te meer om nu geen abonnement aan te gaan.

---

## De AI-kostprijs per Verkenning

**Aannames:** ~40–80 gegenereerde beelden, ~2 uur opgenomen audio (transcriptie + diarisatie), LLM-werk voor extractie + het opstellen van een visiedocument (~150k tokens in, ~20k uit). Basisscenario = 60 beelden.

### Basisscenario (60 beelden)

| component | eenheid | aantal | prijs/eenheid | totaal (USD) | totaal (EUR) |
|---|---|---|---|---|---|
| Beeldgeneratie | beeld 1K/2K | 60 | $0,134 | $8,04 | €7,02 |
| Beeld-input (kamerfoto + stijlrefs) | inputbeeld | 240 (4/call) | $0,0011 | $0,26 | €0,23 |
| Transcriptie + diarisatie | audiominuut | 120 | $0,003 | $0,36 | €0,31 |
| LLM extractie + visiedocument | 1M tokens in | 0,15 | $5,00 | $0,75 | €0,66 |
| LLM output | 1M tokens uit | 0,02 | $25,00 | $0,50 | €0,44 |
| **TOTAAL** | | | | **$9,91** | **€8,66** |

*Prijsbronnen: Gemini — ai.google.dev/gemini-api/docs/pricing (2026-07-16); Voxtral — mistral.ai/pricing/api (2026-07-16); LLM — Claude Opus 4.8 $5/$25 per M tokens (2026-06-24) [alle zeker: hoog]*

### Bandbreedte

| scenario | beelden | totaal USD | totaal EUR | brutomarge bij €2.000 |
|---|---|---|---|---|
| Laag | 40 | $7,15 | **€6,24** | €1.993,76 (99,69%) |
| **Basis** | **60** | **$9,91** | **€8,66** | **€1.991,34 (99,57%)** |
| Hoog | 80 | $12,68 | **€11,08** | €1.988,92 (99,45%) |
| **Pessimistisch** (80 gegenereerd + 50% retries + 10× 4K-finals + 200k tokens in) | 120 | $19,53 | **€17,06** | €1.982,94 (99,15%) |

### Conclusie: hypothese bevestigd

**Zelfs het pessimistische scenario (€17,06) blijft onder de €25.** De hypothese klopt met een factor ~3 marge in het basisscenario. Brutomarge bij €2.000 verkoopprijs: **99,57%**.

### Wat dit getal ons echt vertelt

Drie observaties die belangrijker zijn dan het totaal:

1. **Beeld is ~81% van de kostprijs** (€7,02 van €8,66). Alle optimalisatie-energie hoort daar te zitten en nergens anders. Overstappen op FLUX.2 [pro] edit ($0,045) zou de beeldkosten met 66% verlagen — naar €2,36 — en de totale sessiekosten naar ~€4. Dat is een besparing van €4,66 per sessie op een omzet van €2.000. **Doe dit niet om de kosten.** Doe het alleen als FLUX betere geometrie levert.
2. **Transcriptie is ruis.** €0,31 voor twee uur. De keuze tussen Voxtral, Deepgram en ElevenLabs verschilt €0,05–0,70 per sessie. Kies dus op **EU-hosting en diarisatiekwaliteit**, niet op prijs — het prijsverschil is economisch betekenisloos.
3. **De AI-kosten zijn irrelevant voor de bedrijfsvoering.** Bij €2.000 verkoop is de AI-kostprijs 0,4% van de omzet. De echte kostprijs van een Verkenning is **Elise's uren**. Als de AI-pipeline haar 3 uur bespaart, is dat honderden euro's waard — 40× de complete AI-rekening. Elke beslissing hierna moet daarom op *tijd* worden geoptimaliseerd, niet op geld. Wees royaal met retries, varianten en 4K-finals: het kost niets en het kan wél een sessie beter maken.

---

## Vaste maandlasten (tech)

| post | plan | kosten/mnd | EU-data | noodzakelijk? |
|---|---|---|---|---|
| **Vercel** | Pro ($20, incl. $20 usage-credit, 1 TB transfer, 10M edge requests) [zeker: hoog] | **€17,47** | ~ EU-regio selecteerbaar | Ja — Hobby mag niet commercieel |
| **Supabase** (DB + auth + storage) | Pro ($25: 8 GB DB, 100 GB storage, 250 GB egress, daily backups) [zeker: hoog] | **€21,84** | ✓ EU-regio bij aanmaak | Ja — maar start op Free (€0) |
| **Moneybird** | Start (€15 excl. btw = €18,15 incl.) [zeker: hoog] | **€15,00** | ✓ NL / AWS Frankfurt | Ja |
| **E-sign** | *geen* — zit in Moneybird | **€0,00** | ✓ | Nee |
| **Domein** | .nl/.com | **~€1,25** [schatting] | ✓ | Ja |
| **E-mail** | Google Workspace Starter / Fastmail | **~€6,50** [schatting] | ~ | Ja |
| **AI (variabel)** | Gemini + Mistral, pay-as-you-go | €0 vast + €8,66/sessie | zie §2/§3 | — |
| **TOTAAL VAST** | | **€62,06/mnd** (excl. btw) | | |

**Ruim binnen de €150-doelstelling — op 41% ervan.** Aanscherpingen:

- **Opstartfase: €40,22/mnd.** Start Supabase op **Free** (€0) tot de eerste betalende klant. Kies e-Boekhouden.nl i.p.v. Moneybird en de eerste 15 maanden zijn zelfs gratis → **€25,22/mnd** [zeker: hoog] — maar dan lever je de API in (zie §4).
- **Vercel Hobby is geen optie.** Letterlijk uit de docs: *"the Hobby plan restricts users to non-commercial, personal use only"* [zeker: hoog]. De €17,47 is onvermijdelijk.
- **De AI-kosten zijn volledig variabel** en schalen 1-op-1 met omzet — er is geen vaste AI-verplichting. Bij nul sessies betaal je nul AI. Dat is precies de goede vorm voor een parttime start.
- **Btw is geen kostenpost** maar cashflow: als btw-plichtig ondernemer trek je de voorbelasting af. Reken met excl.-btw-bedragen. Let op: **buitenlandse diensten (Vercel, Supabase, Google, Mistral) vallen onder btw-verlegging** — je geeft ze aan bij de btw-aangifte en trekt ze in dezelfde aangifte weer af [zeker: middel].
- **Breekpunt:** de vaste lasten zijn ~3% van één verkochte Verkenning (€2.000). Eén sessie per maand dekt de complete tech-stack 32×.

---

## Aanbevolen stack

### KOPEN

| wat | keuze | waarom |
|---|---|---|
| **Transcriptie + diarisatie** | **Mistral Voxtral Mini Transcribe 2** ($0,003/min) | Goedkoopst, EU-hosting als *default*, diarisatie gratis inbegrepen, NL native, 3 uur per request. EU-verhaal is hier ook marketing |
| **Beeldgeneratie** | **Gemini 3 Pro Image** (blijven; $0,134/beeld) | Beste DNA-prompt-begrip; werkt al. €8/sessie is geen probleem. **Migreer naar Vertex AI EU-regio** — zie risico's |
| **LLM-extractie + visiedocument** | **Claude Opus 4.8** of **Gemini 3.1 Pro** (€0,47–1,09/sessie) | Kwaliteitsbeslissing, geen kostenbeslissing. Mistral Large 3 (€0,09) als EU-alternatief |
| **Boekhouden + facturatie + btw** | **Moneybird Start** (€15/mnd excl. btw) | Enige met gratis publieke REST API op élk pakket → de Next.js-app kan zelf factureren. Btw + ICP rechtstreeks naar de Belastingdienst. Peppol gratis meegenomen. *Alternatief: e-Boekhouden.nl, 15 mnd gratis voor starters, als cash in jaar 1 zwaarder weegt dan de API* |
| **E-sign / offerte-acceptatie** | **Niets kopen — Moneybird's ingebouwde acceptatie** (€0) | SES volstaat voor een vormvrije opdracht (art. 7:400 BW). DocuSign levert hetzelfde niveau voor €23/mnd. Koop QES incidenteel bij (Skribble €4,50) boven ~€10.000 |
| **Hosting** | **Vercel Pro** + **Supabase** (EU-regio) | Draait al; EU-regio lost het datavraagstuk in één keer op |

### BOUWEN (in de bestaande Next.js-app)

| wat | waarom bouwen |
|---|---|
| **De klantportal** (login, beeldgrid, budget, planning) | De koopmarkt biedt geen NL-geschikte, white-label, EU-gehoste optie op solo-prijs. En de portal *is* het product — daar wil je geen generieke suite-UI. Behoefte is smal: magic-link, imagegrid, twee read-only views |
| **De ReactionGrid** (❤️/👎 + commentaar per beeld) | Bestaat niet als product. Dit is de kern van de methode: meningen die aan een specifiek beeld hangen. Codebase heeft het patroon al (`website.verkenning.{A1..E3}` in `plan.md`) |
| **De sessie-pipeline** (opname → transcript → diarisatie → extractie → koppeling aan beeld-ID) | Dit is het bedrijfsgeheim. Geen enkele tool koppelt "wat werd gezegd, door wie, op welk moment" aan "welk beeld toen op het scherm stond". Bouw dun: het is orkestratie van drie API's |
| **Het visiedocument-genereren** | Prompt + template. Kopen heeft geen zin |

### NIET DOEN

- **Midjourney** — geen publieke API, voorwaarden verbieden automatisering; wrapper-accounts worden geband [zeker: hoog]
- **HoneyBook** — bestaat niet in NL, geen EUR-accountvaluta [zeker: hoog]
- **Dubsado** — kan geen inclusieve btw; structureel fout voor NL-particulieren [zeker: hoog]
- **Tellow** — btw-aangifte én offertes pas vanaf €22,99: duurder dan Moneybird voor minder, en geen publieke API [zeker: hoog]
- **Moneybird Compact (€3)** — 1 factuur per maand en géén btw-aangifte. Onbruikbaar [zeker: hoog]
- **SignRequest** — niet meer NL/EU (Box/VS sinds 2021), geen publieke API sinds dec. 2022 [zeker: middel-hoog]
- **DocuSign / Dropbox Sign / PandaDoc** — €9–49/mnd voor exact hetzelfde eIDAS-niveau (SES) dat Moneybird gratis levert
- **Interieur-specifieke AI-SaaS** — verkoopt stijl-presets; precies wat Elise's DNA expliciet afwijst
- **Lokale Whisper** — bespaart €0,31/sessie, kost een CUDA/pyannote-toolchain om te onderhouden
- **Assembly white-label ($399/mnd)** — 46× de AI-kosten per sessie, voor een logo

---

## Wat hiertegen pleit

Eerlijke tegenargumenten, want het bovenstaande is te netjes.

1. **"Bouwen" is de standaardconclusie van een engineer, en dat zou je moeten wantrouwen.** Ik concludeer bouwen voor de portal terwijl de leidende vraag expliciet is "haar tijd is het schaarste goed". De inschatting "een paar dagen werk" is een [schatting] zonder onderbouwing — en softwareschattingen zijn structureel te optimistisch. Bovendien: bouwen is niet het probleem, **onderhouden** is het probleem. Een gekochte portal wordt gepatcht terwijl zij slaapt; een gebouwde niet. Als deze app over 8 maanden een security-update of een gebroken dependency heeft en zij zit midden in een project, dan is Moxie's $20 achteraf goedkoop geweest. **Het tegenargument dat blijft staan:** de portal is haar etalage, en Moxie's etalage is niet van haar.

2. **De marge van 99,57% is waar en tegelijk misleidend.** Het is de brutomarge op *AI-kosten*, niet op de Verkenning. Als een Verkenning haar 12 uur kost, is de echte kostprijs bij €80/uur ~€960 en de marge ~52%. Het getal €8,66 is nuttig om te weten dat AI-kosten geen beslissingsfactor zijn — niet om te denken dat dit een 99%-marge-bedrijf is. **Presenteer dit getal nooit zonder die kanttekening.**

3. **De 40–80 beelden zijn een aanname, geen meting.** Als de sessie in de praktijk 300 beelden nodig blijkt te hebben (iteratief, live, tijdens het gesprek), is de rekening €40 en klopt de hypothese niet meer. Het model schaalt lineair met beelden en beelden zijn 81% van de kosten. Dit is de enige variabele die de conclusie kan kantelen — meet 'm bij de eerste echte sessie.

4. **Mistral bewaart 30 dagen.** Ik beveel Voxtral aan mede op het EU/GDPR-verhaal, maar API-input wordt standaard 30 dagen bewaard voor abuse-monitoring, en Zero Data Retention zit achter het Scale-plan [zeker: middel]. Dat is een opname van iemands woonkamer plus hun meningen erover. Verdedigbaar, maar het is geen "de data blijft van jou" — het is "de data staat 30 dagen bij een Frans bedrijf". Lokale Whisper is dan alsnog het enige eerlijke antwoord op een klant die écht doorvraagt.

5. **Het geometrie-argument is deels theoretisch.** Ik baseer "Gemini heeft geen persistent 3D-geheugen" op één academische paper die het model als baseline gebruikt [zeker: middel] — niet op eigen tests met echte kamerfoto's. Het is mogelijk dat Gemini 3 Pro Image in de praktijk prima geometrie vasthoudt en de hele depth-ControlNet-route overbodig is. **Dit hoort getest, niet beredeneerd.**

6. **Verificatie-zwakte in de prijzen.** Deepgram's eigen prijspagina sprak zichzelf tegen (zie §2). De interieur-API-prijzen komen uit SEO-blogs. Gemini's "3 Pro Image"-prijzen zijn zeker (ai.google.dev), maar de pagina toont inmiddels "Gemini 3.1 Pro Preview" en "3.5 Flash" als tekstmodellen — de modellenlijn beweegt sneller dan dit document. **Controleer prijzen opnieuw voor een echte inkoopbeslissing.**

7. **Vendor-risico op één leverancier.** De aanbevolen stack hangt voor het duurste onderdeel (beeld) aan één Amerikaanse leverancier met een preview-model. `gemini-3-pro-image` kan hernoemd, herprijsd of uitgefaseerd worden. De code heeft het model hard-coded op één plek (`tools/gemini.mjs:9`) — dat is gelukkig goed, maar maak er een env-var van en houd FLUX als tweede spoor werkend.

8. **Dit document verjaart snel — en dat is aantoonbaar, niet theoretisch.** Dit onderzoek heeft in één ronde drie breed verspreide aannames omvergeworpen die tot vandaag door professionals worden herhaald: SignRequest is al 5 jaar geen NL-partij meer, Yousign heet sinds deze zomer Youtrust, en de veelgeciteerde Nederlandse e-facturatiedeadlines van 2027/2028 **bestaan niet**. Als drie "bekende feiten" binnen één onderzoek sneuvelen, is de basisverwachting dat over zes maanden een deel van dít document ook onjuist is. **Behandel elk cijfer hier als een momentopname met bronvermelding, niet als een vaststaand feit** — dat is precies waarom elke regel een URL, een datum en een zekerheidsmarkering heeft. Herverifieer voor elke echte inkoopbeslissing.

9. **De GDPR-bevinding is genegeerd in de aanbeveling — bewust, maar het is een schuld.** Ik beveel aan om Gemini te blijven gebruiken, terwijl §3 vaststelt dat de huidige endpoint (`generativelanguage.googleapis.com`, `tools/gemini.mjs:37`) **globaal** is en dus geen EU-dataresidentie kent. Dat betekent dat foto's van iemands woonkamer nu buiten de EU verwerkt kúnnen worden. Voor een studio die "EU-first" als verhaal wil voeren, is dat een inconsistentie. De migratie naar Vertex AI EU-regio is bovendien niet gratis in tijd (GCP-project, ADC-auth, ander SDK-pad) — en de nieuwste beeldmodellen zijn daar mogelijk **niet** single-region EU beschikbaar [zeker: middel]. Dit is dus een echte trade-off, geen afvinkpunt.

---

## Bronnen

Alle URL's geraadpleegd **2026-07-16**.

### Klantportals
- https://suitedash.com/pricing/ · https://suitedash.com/gdpr/ · https://suitedash.com/white-label/ · https://help.suitedash.com/article/472-start-plan
- https://assembly.com/pricing · https://assembly.com/copilot-rebrand · https://security.assembly.com/ · https://www.businesswire.com/news/home/20250930437243/en/
- https://www.withmoxie.com/pricing · https://www.withmoxie.com/terms-legal/data-processing
- https://www.notion.com/pricing · https://www.notion.com/help/data-residency
- https://www.dubsado.com/pricing · https://help.dubsado.com/en/articles/15000563-add-tax-to-an-invoice
- https://www.honeybook.com/pricing · https://www.honeybook.com/faqs · https://www.honeybook.com/blog/honeybook-now-available-uk-australia
- https://www.hellobonsai.com/pricing · https://clinked.com/pricing
- https://www.zoho.com/privacy.html · https://www.zoho.com/news/zoho-expands-footprints-europe-with-data-centers.html · https://www.zoho.com/projects/zohoprojects-pricing.html
- https://programa.design/pricing · https://www.studiodesigner.com/pricing/

### Speech-to-text
- https://mistral.ai/pricing/api/ (Voxtral Mini Transcribe 2 = $0,003/min) [zeker: hoog]
- https://mistral.ai/news/voxtral-transcribe-2/ (04-02-2026; diarisatie inbegrepen, 13 talen incl. NL, 3 uur/request, ~4% WER FLEURS)
- https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data (EU by default)
- https://deepgram.com/pricing (Nova-3, diarisatie $0,0020/min, EU-endpoint api.eu.deepgram.com)
- https://elevenlabs.io/pricing/api (Scribe v2 $0,22/uur) · https://elevenlabs.io/blog/introducing-scribe-v2
- https://www.assemblyai.com/pricing · https://www.assemblyai.com/blog/99-languages
- https://www.gladia.io/blog/deepgram-pricing · https://support.gladia.io/
- https://github.com/m-bain/whisperx · https://github.com/pyannote/pyannote-audio/issues/1452 (diarisatie-traagheid)
- https://developers.openai.com/api/docs/pricing (gpt-4o-transcribe $0,006/min)

### Beeldgeneratie
- https://ai.google.dev/gemini-api/docs/pricing (Gemini 3 Pro Image: $0,134 1K/2K, $0,24 4K, input $0,0011, $120/M image tokens) [zeker: hoog]
- https://docs.bfl.ml/quick_start/pricing (FLUX.2 pro $0,03 / pro-edit $0,045 / max $0,07 / flex $0,05 / klein 9B $0,015; FLUX.1 Kontext pro $0,04, max $0,08)
- https://bfl.ai/licensing · https://bfl.ai/pricing
- https://developers.openai.com/api/docs/pricing (gpt-image-2: $8/M image input, $30/M image output)
- https://deepmind.google/models/gemini-image/pro/ · https://blog.google/innovation-and-ai/products/nano-banana-pro/
- https://arxiv.org/pdf/2605.17916 (PanoWorld — "neither model maintains an explicit persistent 3D memory")
- https://huggingface.co/thedeoxen/refcontrol-FLUX.2-klein-9B-reference-depth-lora
- https://wavespeed.ai/models/wavespeed-ai/flux-controlnet-union-pro-2.0
- https://comfyui-wiki.com/en/tutorial/advanced/how-to-use-depth-controlnet-with-sd1.5 (Zoe-DepthMapPreprocessor voor interieurs)
- https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans (geen publieke API; automatisering verboden)
- https://ai.google.dev/gemini-api/terms (output-eigendom, commercieel gebruik)
- https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency (EU-regio's; europe-west4 = Nederland)

### Boekhouden & facturatie (§4)
- https://www.moneybird.nl/prijzen/ (Compact €3 / Start €15 / Groei €29 / Compleet €41; *"Alle genoemde prijzen zijn exclusief btw"*)
- https://helpcenter.moneybird.nl/nl/articles/207465-welk-pakket-je-moet-kiezen (Compact: 1 factuur/mnd, géén btw-aangifte)
- https://helpcenter.moneybird.nl/nl/articles/207464-pakketten-in-moneybird (Peppol zonder meerprijs)
- https://developer.moneybird.com/api/sales_invoices/ (REST, JSON, Bearer/OAuth2, `POST /sales_invoices`, estimates-endpoint, UBL-download)
- https://helpcenter.moneybird.nl/nl/articles/207365-zelf-een-koppeling-maken · https://www.moneybird.nl/blog/automatiseer-jouw-boekhouding-met-zapier/ (API gratis voor elke gebruiker; Zapier)
- https://www.moneybird.nl/functies/btw-aangifte/ · https://helpcenter.moneybird.nl/nl/articles/207677-icp-aangifte-doen-vanuit-moneybird (btw + ICP rechtstreeks naar Belastingdienst)
- https://helpcenter.moneybird.nl/nl/articles/207379-online-factuur-betalen-via-mollie · https://www.moneybird.nl/functies/online-betaalmethoden/ (Mollie, iDEAL|Wero, SEPA)
- https://www.moneybird.nl/blog/data-analyse-en-privacy/ · https://helpcenter.moneybird.nl/nl/articles/207559-veilige-boekhouding-in-de-cloud (EER/AWS Frankfurt, ISO 27001)
- https://www.e-boekhouden.nl/prijzen · https://api.e-boekhouden.nl/swagger/index.html (ZZP €9,95; 15 mnd gratis voor starters)
- https://www.jortt.nl/prijs/ · https://developer.jortt.nl/ (API vanaf MKB €24,95; app-registratie via support)
- https://www.tellow.nl/prijs/ · https://rompslomp.nl/tarieven · https://www.moneymonk.nl/prijzen
- https://www.belastingdienst.nl/.../kleineondernemersregeling/ (KOR: geen btw-aangifte meer)

### ViDA / e-facturatie (§4)
- https://www.taxence.nl/nieuws/kabinetsreactie-rapport-vida-e-facturatie-en-digitale-rapportage/ (11-03-2026 — **géén besluit binnenlandse B2B; duidelijkheid zomer 2026; 1-7-2030 grensoverschrijdend**)
- https://www.nextens.nl/fiscaal-nieuws/nieuws/cat2/e-facturatie-verplichting-nederland-waar-staat-den-haag-nu-echt/ (19-08-2025 — *"Nederland is vooralsnog terughoudend"*)
- https://www.accountancyvanmorgen.nl/2026/07/02/ict-ai-verplichte-e-facturatie-welke-keuzes-zijn-er-nog-te-maken/ (02-07-2026 — consultatie Q4 2026)
- https://edicom.nl/blog/vida-de-eu-bevordert-elektronische-b2b-facturatie (ViDA aangenomen 11-03-2025)
- ⚠️ **Weerlegd:** https://tronvoice.eu/blog/e-facturatie-verplicht-nederland-gids — claimt €800k-drempel per 1-1-2027 en algehele plicht per 1-1-2028; **niet onderbouwd en strijdig met de bronnen hierboven**

### E-sign — juridisch (§5)
- https://www.viajuridica.nl/informatiesoorten/wetstoelichtingen/elektronisch-vermogensrechtelijk-rechtsverkeer-art-3-15a-3-15f-bw (letterlijke tekst art. 3:15a BW)
- https://www.schaap.eu/elektronische-handtekeningen-en-het-rechtsverkeer/ (drie niveaus; glijdende schaal; **jurisprudentie**: Rb Den Haag 08-05-2018 en Rb Amsterdam 11-12-2019 (DocuSign), Rb Zeeland-West-Brabant 07-10-2020 (Adobe Sign))
- https://www.rdi.nl/documenten/2024/10/28/wettelijke-verplichtingen-geavanceerde-elektronische-handtekening (AES-vereisten, RDI)
- https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/915931811/ (Verordening (EU) 2024/1183)
- https://www.gataca.io/resources/blog/eIDAS2-timeline/ (EUDI-tijdlijn; NL-vertraging; private acceptatieplicht ≈ eind 2027)

### E-sign — tools (§5)
- https://helpcenter.moneybird.nl/nl/articles/207188-accepteren-van-een-offerte-offerte-accepteren (naam/e-mail/IP vastgelegd; bevestigingsmail)
- https://helpcenter.moneybird.nl/nl/articles/207187-rechtsgeldigheid-online-ondertekenen-offerte (*"voldoende zekerheid voor de meeste opdrachten"*; fysieke handtekening bij grote bedragen)
- https://youtrust.com/pricing-application · https://youtrust.com/yousign-becomes-youtrust (**rebrand Yousign → Youtrust, zomer 2026**; *"Data is hosted in the EU"*; QES vanaf €10)
- https://www.skribble.com/en-eu/pricing/ (AES €2,50 / QES €4,50 per handtekening)
- https://ecom.docusign.com/nl-NL/plans-and-pricing/esignature (Personal €9 / Standard €23 / Business Pro €38)
- https://signrequest.com/en/signrequest-is-joining-box (overname door Box, 2021) · https://www.signwell.com/resources/signrequest-alternatives/ (geen publieke API meer sinds dec. 2022)
- https://www.zoho.com/sign/pricing.html · https://www.pandadoc.com/pricing/ · https://betterproposals.io/pricing · https://verdocs.com/dropbox-sign-pricing/

### Hosting & infra
- https://vercel.com/pricing · https://vercel.com/docs/plans/pro-plan (Pro $20 incl. $20 credit, 1 TB transfer, 10M edge requests)
- https://vercel.com/docs/plans/hobby (*"the Hobby plan restricts users to non-commercial, personal use only"*) [zeker: hoog]
- https://supabase.com/pricing (Pro $25: 8 GB DB, 100 GB storage, 250 GB egress)

### LLM-prijzen
- Claude Opus 4.8 $5/$25 per M tokens; Sonnet 5 $3/$15 (intro $2/$10 t/m 2026-08-31); Haiku 4.5 $1/$5. Batch = 50%; cache-read ~0,1×, cache-write 1,25× (5 min) / 2× (1 uur). Bron: Anthropic-modelcatalogus, gecachet 2026-06-24 [zeker: hoog]
- https://ai.google.dev/gemini-api/docs/pricing (Gemini 3.1 Pro Preview $2/$12 ≤200k; 3.5 Flash $1,50/$9; 3 Flash Preview $0,50/$3)
- https://mistral.ai/pricing/api/ (Mistral Large 3 $0,50/$1,50; Medium 3.5 $1,50/$7,50; Small 4 $0,15/$0,60)

### Wisselkoers
- https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html (EUR/USD 1,1448 op 2026-07-16) [zeker: hoog]

### Interne bronnen
- `C:\Users\fwyer\Documents\claude\elise\elise.md` — studioprofiel & Design DNA
- `C:\Users\fwyer\Documents\claude\elise\tools\gemini.mjs` — huidige beeldpipeline (`MODEL = "gemini-3-pro-image"`, regel 9)
- `C:\Users\fwyer\Documents\claude\elise\plan.md` — ReactionGrid-patroon (`website.verkenning.{A1..E3}`)
