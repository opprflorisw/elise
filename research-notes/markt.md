# Marktonderzoek — premium residentiële interieurarchitectuur & renovatie in Nederland

**Voor:** Studio Verstelle (Elise) — eenpersoonsstudio, Amsterdam, doel €250.000 omzet/jaar bij volwassenheid
**Doelgroep:** stedelijke woningeigenaren in Amsterdam / Den Haag / Rotterdam, woning €500k–€2M, verbouw-/interieurbudget €75k+
**Peildatum onderzoek:** 16 juli 2026 — alle bronnen op die datum geraadpleegd
**Leeswijzer:** elke feitelijke claim heeft bron + URL + jaar + een betrouwbaarheidslabel `[zeker: hoog|middel|laag]`. Alles wat ík heb geschat in plaats van gevonden staat als `[schatting]` mét de redenering erbij.

---

## De vijf cijfers

De vijf getallen die in het ondernemingsplan horen te staan:

| # | Cijfer | Wat het is | Bron | Zekerheid |
|---|--------|-----------|------|-----------|
| 1 | **~12.800** | transacties per jaar in de band €500k–€2M in Amsterdam + Den Haag + Rotterdam samen (2025) | CBS 85792NED + Kadaster, eigen berekening | `[schatting]` op basis van harde data |
| 2 | **€80.000** | gemiddeld verbouwbudget van de "Verbouwende Doorstromer" — 42 jaar, inkomen €120k, hypotheek €450k. Dit is letterlijk Elise's klant. | HDN klantprofielen 2026 | `[zeker: middel]` |
| 3 | **~18%** | aandeel kopers dat bij aankoop een verbouwing meefinanciert (ondergrens; exclusief wie uit spaargeld of later verbouwt) | HDN 2025/2026 | `[zeker: middel]` |
| 4 | **~250–300** | huishoudens per jaar in de drie steden die én in de band kopen, én substantieel verbouwen, én €75k+ budget hebben, én een ontwerpprofessional inhuren — de échte adresseerbare markt | eigen trechter | `[schatting]` |
| 5 | **12.915** | interieurontwerp- en interieurarchitectuurbedrijven in Nederland (1.250 interieurarchitecten + 11.665 interieur/ruimtelijk ontwerp) | CBS 81589NED, Q2/Q3 2026 | `[zeker: hoog]` |

De spanning tussen #4 en #5 is het hele verhaal: **~275 klanten per jaar, ~12.900 aanbieders.**

---

## 1. Woningtransacties in de band €500k–€2M per stad

### 1.1 Harde basis: alle transacties per stad

CBS-tabel 85792NED (Bestaande koopwoningen; verkoopprijzen, prijsindex, regio) geeft per kwartaal het aantal verkochte bestaande koopwoningen en de gemiddelde verkoopprijs per G4-gemeente. Rechtstreeks via de OData-API opgehaald op 16-07-2026.

**Verkochte bestaande koopwoningen 2025 (som van 4 kwartalen):**

| Stad | Q1 | Q2 | Q3 | Q4 | **Totaal 2025** | Gem. verkoopprijs 2025 |
|------|----|----|----|----|-----------------|------------------------|
| Amsterdam | 2.908 | 3.595 | 3.931 | 4.249 | **14.683** | **€630.621** |
| Den Haag | 1.766 | 2.009 | 2.298 | 2.303 | **8.376** | **€465.418** |
| Rotterdam | 1.851 | 2.000 | 2.184 | 2.349 | **8.384** | **€414.579** |
| *(Utrecht, ter referentie)* | 1.278 | 1.432 | 1.551 | 1.727 | *5.988* | *€551.000* |
| **Drie steden samen** | | | | | **31.443** | |

Bron: CBS StatLine 85773/85792NED "Bestaande koopwoningen; verkoopprijzen, prijsindex 2020=100, regio", 2025 — https://opendata.cbs.nl/statline/#/CBS/nl/dataset/85792NED/table — en CBS 83625NED "Bestaande koopwoningen; gemiddelde verkoopprijzen, regio", 2025 — https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83625NED/table `[zeker: hoog]`

**Kruiscontrole:** de G4 samen komt uit op 37.431. Kadaster meldt voor 2025 "ruim 37.000" transacties in de G4 — een record. Landelijk registreerde CBS 238.695 transacties in 2025; Kadaster meldt 238.800 (+15,6% t.o.v. 2024). De bronnen sluiten op elkaar aan.
Bron: Kadaster, "Woningmarkt 4e kwartaal 2025: meeste verkopen ooit in een kwartaal", 2026 — https://www.kadaster.nl/-/woningmarkt-4e-kwartaal-2025-meeste-verkopen-ooit-in-een-kwartaal `[zeker: hoog]`

> **Let op — veelgemaakte fout.** Verschillende makelaarssites melden "ongeveer 11.000 woningen verkocht in Amsterdam in 2025". Dat cijfer is te laag; het CBS-cijfer van 14.683 is de autoriteit en sluit aan op de Kadaster-G4-optelling. Gebruik 14.683. `[zeker: hoog]`

### 1.2 Het landelijke anker voor de prijsband

Het Kadaster publiceert één direct bruikbaar bandcijfer:

> **84.000 transacties boven €500.000 in 2025** (tegen 61.000 in 2024), op een totaal van 238.800 → **35,2% van alle Nederlandse transacties lag boven €500k**, bij een landelijk gemiddelde van €480.000.

Bron: Kadaster, kwartaalbericht woningmarkt Q4 2025, gepubliceerd januari 2026 — https://www.kadaster.nl/-/woningmarkt-4e-kwartaal-2025-meeste-verkopen-ooit-in-een-kwartaal `[zeker: hoog]`

Aanvullend: 86 gemeenten hadden in 2025 een gemiddelde verkoopprijs boven €550.000; 5 gemeenten boven €750.000 (Bloemendaal, Blaricum, Wassenaar, Laren, Heemstede). Zelfde bron. `[zeker: hoog]`

### 1.3 Schatting van het bandaandeel per stad

Noch CBS noch Kadaster publiceert de prijsklasseverdeling *per gemeente*. Die moet worden geschat.

**`[schatting]` — Methode en redenering:**

1. Woningprijzen zijn bij goede benadering lognormaal verdeeld (rechtsscheef, harde ondergrens bij nul).
2. Ik kalibreer de spreidingsparameter σ op het enige harde landelijke anker: gemiddelde €480k → 35,2% boven €500k. Dat levert σ ≈ 0,63.
3. Tweede controle-anker: Kadaster meldt dat 43% van de Q4-2025-transacties onder de betaalbaarheidsgrens (~€390k) lag. Bij gemiddelde €486k (Q4) voorspelt σ=0,63 → 49% (te hoog); σ=0,55 → 45% (dichtbij). σ=0,45 → 40% (te laag).
4. Ik gebruik daarom **σ = 0,55–0,63 als bandbreedte** en rapporteer beide uitkomsten. De uitkomst blijkt weinig gevoelig voor die keuze.
5. Per stad pas ik de eigen gemiddelde verkoopprijs toe (μ = ln(gemiddelde) − σ²/2) en bereken P(€500k < X < €2M).

**Uitkomst:**

| Stad | Gem. prijs | N (2025) | Aandeel €500k–€2M | Transacties in band | >€2M |
|------|-----------|----------|-------------------|---------------------|------|
| Amsterdam | €630.621 | 14.683 | 50,5% – 55,0% | **7.400 – 8.100** | ~1% |
| Den Haag | €465.418 | 8.376 | 33,0% – 34,1% | **2.760 – 2.860** | ~0,3% |
| Rotterdam | €414.579 | 8.384 | 26,8% | **2.245 – 2.250** | ~0,2% |
| **Totaal** | | 31.443 | | **≈ 12.400 – 13.200** | |

**Centrale waarde: ~12.800 transacties per jaar in de band €500k–€2M in de drie steden (2025).** `[schatting]`

De bovengrens van €2M snijdt vrijwel niets weg (<1,6% van de Amsterdamse transacties, minder elders) — de band is in de praktijk "alles boven €500k".

**Belangrijke kanttekening bij dit getal:** het is een *transactie*-telling, geen telling van *geschikte projecten*. Zie §6 (Wat hiertegen pleit) — een groeiend deel van de Amsterdamse transacties boven €500k bestaat uit uitgeponde huurappartementen: klein, opknapbehoeftig, gekocht door starters met een leeg spaarpotje. De prijs zegt in 2025/2026 minder over het verbouwbudget dan een paar jaar geleden.

### 1.4 Wie koopt er in de steden?

Cruciaal voor de segmentatie én voor de tegenargumentatie:

- **62% van alle G4-transacties in Q1 2025 ging naar starters** (4.800 woningen; +21% j-o-j). Landelijk was de starter/doorstromer-verhouding 45%/55%. In de vier grote steden is dat dus omgedraaid.
- Starters betaalden landelijk gemiddeld **€385.000**; doorstromers **€539.000**.
- Bron: Kadaster, "Woningmarkt 1e kwartaal 2025: starters kochten in steden, doorstromers daarbuiten", 2025 — https://www.kadaster.nl/-/woningmarkt-1e-kwartaal-2025-starters-kochten-in-steden-doorstromers-daarbuiten `[zeker: hoog]`

- **57% van alle kopers in Q2 2025 was jonger dan 35**; 36% tussen 35–65; 7% ouder dan 65. Jonge kopers in de G4 betaalden méér per m² dan oudere kopers (Amsterdam >€8.800/m²), omdat zij kleine appartementen kopen.
- **Samenwonende doorstromers** betaalden in Q2 2025 gemiddeld **€640.000** — bijna €200.000 meer dan samenwonende starters. Dit is de duurste kopersgroep van Nederland.
- Bron: Kadaster, "Woningmarkt 2e kwartaal 2025: jonge koper betaalde meer per m2 in grootste steden", 2025 — https://www.kadaster.nl/-/woningmarkt-2e-kwartaal-2025-jonge-koper-betaalde-meer-per-m2-in-grootste-steden `[zeker: hoog]`

### 1.5 Actueel beeld 2026

- Q1 2026: Amsterdam 3.135 verkopen (gem. €619.117), Den Haag 1.838 (€473.541), Rotterdam 1.856 (€429.773). CBS 85792NED `[zeker: hoog]`
- NVM Q4 2025: gemiddelde transactieprijs landelijk voor het eerst **boven €500.000** (€502.000); 47.600 woningen verkocht via NVM-makelaars (+11% j-o-j); 72% verkocht boven de vraagprijs.
  Bron: NVM, 2026 — https://www.nvm.nl/nieuws/2026/nvm-gemiddelde-transactieprijs-boven-half-miljoen-bij-meer-aanbod-en-vlotte-verkopen/ `[zeker: hoog]`
- NVM Q1 2026: ~34.600 woningen verkocht, gemiddelde prijs €485.000 (−2,7% t.o.v. het kwartaal ervoor). Markt "meer in balans".
  Bron: NVM, 2026 — https://www.nvm.nl/nieuws/2026/nvm-woningmarkt-meer-in-balans-door-toename-aanbod-en-afvlakkende-prijzen/ `[zeker: middel]`
- MVA Q2 2026: 2.950 woningen verkocht in Amsterdam, gemiddelde prijs **€588.000** (−2,9% j-o-j). De daling komt door de *samenstelling*: meer kleine, minder luxe (ex-huur)appartementen.
  Bron: MVA kwartaalcijfers, 2026 — https://mva.nl/nieuws/kwartaalcijfers-q1-2026 `[zeker: middel]`

---

## 2. Verbouwen na aankoop: aandeel en bestedingsverdeling

### 2.1 Het beste beschikbare bewijs: HDN-klantprofielen

HDN (Hypotheken Data Netwerk) verwerkt vrijwel alle Nederlandse hypotheekaanvragen. In 2026 introduceerde HDN vernieuwde klantprofielen die exact deze vraag beantwoorden.

**Totale markt 2025:** 563.582 hypotheekaanvragen (+16,5% t.o.v. 2024), waarvan 344.303 in de kopersmarkt (61%) en 219.279 in de niet-kopersmarkt (39%).

**De twee kopersprofielen die verbouwen:**

| Profiel | Aandeel v/d totale markt | Leeftijd | Inkomen | Hypotheek | Verbouwbudget |
|---------|--------------------------|----------|---------|-----------|---------------|
| **Verbouwende Starter** | ~5% | 32 | — | — (70% NHG) | **€35.000** |
| **Verbouwende Doorstromer** | ~6% | 42 | €120.000 | €450.000 | **€80.000** |

Bron: InFinance, "Nieuwe HDN-klantprofielen geven scherper inzicht in 2026", 15 mei 2026, op basis van HDN-data — https://infinance.nl/hypotheken/nieuwe-hdn-klantprofielen-geven-scherper-inzicht-in-2026/ `[zeker: middel]` (secundaire weergave van HDN-primair)

**Afleiding van het percentage kopers dat verbouwt:**
- 5% + 6% = 11% van 563.582 aanvragen ≈ **62.000 aanvragen** van kopers-die-verbouwen
- Kopersmarkt = 344.303 aanvragen
- 62.000 / 344.303 = **18,0%** `[schatting]` — rekenkundig afgeleid uit HDN-cijfers

**Onafhankelijke bevestiging van dezelfde orde van grootte:** HDN-data laat zien dat het aandeel "verbouwers" tussen juli–december 2023 op 16–18% lag en tussen januari–mei 2024 opliep naar 18–22%. `[zeker: middel]`

**Dit is een ondergrens, geen bovengrens.** Het telt alleen wie de verbouwing meefinanciert in de aankoophypotheek. Het telt niet:
- wie uit spaargeld of schenking verbouwt (in het premiumsegment substantieel);
- wie 6–24 maanden ná aankoop verbouwt via een tweede hypotheek/verhoging (zie 2.2 — dat is een grote groep);
- wie klein verbouwt zonder financiering.

`[schatting]` **Mijn werkaanname voor de band €500k–€2M: 25% verbouwt substantieel binnen ~2 jaar.** Redenering: HDN-ondergrens is 18% over álle kopers, inclusief starters die niets kunnen. In de band €500k+ zit relatief meer doorstromers met overwaarde en spaargeld, en die groep verbouwt vaker (Van Bruggen: 55% van de bestaande-eigenaaraanvragen is een verhoging, vaak voor woningverbetering). Ik hoog daarom op van 18% naar 25%, met een plausibele bandbreedte 18–30%.

### 2.2 De grotere, aangrenzende markt: bestaande eigenaren die verbouwen i.p.v. verhuizen

- **De "Verbouwer" is het grootste klantprofiel van de hele Nederlandse hypotheekmarkt**: **98.881 aanvragen in 2025** (+16,3% t.o.v. 2024), gemiddeld **€58.250** geleend (+8%). Profiel: leeftijd 44, ~€60k verbouwbudget, LTV ~15%.
  Bron: HDN Jaaroverzicht 2025 — https://hdn.nl/marktcijfers/jaar-en-kwartaaloverzichten/ `[zeker: hoog]`
  → Impliceert een verbouwfinancieringsmarkt van 98.881 × €58.250 ≈ **€5,8 miljard per jaar** aan geleend verbouwgeld. `[schatting]` (simpele vermenigvuldiging)

- **55% van alle hypotheekaanvragen van bestaande woningeigenaren in H1 2025 was een verhoging (tweede hypotheek) — het hoogste percentage ooit.** In 2017–2019 koos nog 75% van die eigenaren voor het kópen van een andere woning. De gemiddelde tweede hypotheek steeg van ~€75.000 (begin 2021) naar **ruim €90.000** (2025).
  Oorzaken volgens Van Bruggen: rente van 1–2% naar ~4%; verhuiskosten boven €10.000 (overdrachtsbelasting + makelaar); woningtekort.
  Bron: Van Bruggen Adviesgroep, 4 juli 2025 — https://www.vanbruggen.nl/actueel/nieuws/2025/huiseigenaren-kiezen-steeds-vaker-voor-verbouwen-in-plaats-van-verhuizen `[zeker: middel]`

- Q1 2026: niet-kopersmarkt groeide met 6,4% naar 63.436 aanvragen, hoogste niveau sinds 2022. Verhogingen: 49.323 aanvragen (+8%), veelal voor woningverbetering/verduurzaming.
  Bron: HDN, "Woonkloof groeit, recordweek stuwt hypotheekmarkt in Q1 2026", 2026 — https://hdn.nl/nieuws/woonkloof-groeit-recordweek-stuwt-hypotheekmarkt-in-q1-2026/ `[zeker: hoog]`

**Strategische implicatie:** de "verbouwen zonder verhuizen"-markt is landelijk groter dan de "verbouwen na aankoop"-markt (98.881 vs. ~62.000 aanvragen) en groeit sneller. Een studio die zich uitsluitend op verse kopers richt, laat de grootste helft liggen.

### 2.3 Bestedingsverdeling: constructie / keuken+bad / interieur+meubels / ontwerphonorarium

**Waarschuwing over de bronkwaliteit.** Er bestaat in Nederland *geen* gezaghebbend openbaar onderzoek dat een verbouwbudget uitsplitst over deze vier categorieën. CBS, EIB en Kadaster publiceren dit niet. Wat volgt is samengesteld uit deelbronnen (deels commercieel) plus eigen redenering, en is expliciet zwakker dan §1 en §2.1.

**Bouwstenen (deelbedragen):**

| Post | Bedrag | Bron | Zekerheid |
|------|--------|------|-----------|
| Complete woning verbouwen | €60.000 – €150.000 | Homedeal, 2026 — https://www.homedeal.nl/verbouwing/verbouwing-kosten/ | `[zeker: laag]` (commerciële offertesite) |
| Badkamerrenovatie | €8.000 – €25.000 (2025: €7.500–€15.000) | idem | `[zeker: laag]` |
| Keuken (IKEA + inbouw) | €5.000 – €8.000 | idem | `[zeker: laag]` |
| Keuken (volledig op maat, NL-specialist) | €25.000 – €60.000 | idem | `[zeker: laag]` |
| Toiletverbouwing | €2.500 – €5.000 | idem | `[zeker: laag]` |
| Uurtarief aannemer 2026 | €50 – €85 excl. btw | idem | `[zeker: laag]` |
| Randstad-opslag op arbeid | +20% – 30% t.o.v. landelijk gemiddelde | idem | `[zeker: laag]` |
| Gem. besteding huishouden aan meubels/accessoires | €1.533 per jaar | De Interieur Club (o.b.v. CBS/INretail), 2025 — https://www.deinterieurclub.com/post/cijfers-en-feiten-over-de-interieurbranche | `[zeker: middel]` |
| Omvang woonbranche NL (piek) | €11,1 mld (2020); −7% in 2024; herstel +2,7% tot +4,4% in 2025; +5,5% in feb 2026 | idem / Retail Insiders | `[zeker: middel]` |

**`[schatting]` — Mijn verdeling voor een verbouwing van €80.000–€120.000 in Amsterdam (Elise's doelproject):**

| Categorie | Aandeel | Bedrag bij €100k | Redenering |
|-----------|---------|------------------|------------|
| **Constructie/bouwkundig** (sloop, uitbouw, kozijnen, installaties, isolatie, stucwerk, vloeren) | **50–60%** | €50.000 – €60.000 | Arbeid is de dominante post (aannemer €50–85/u, +20–30% Randstad). Bij €100k budget zijn keuken+bad samen zelden meer dan €40k, en interieur wordt vaak uitgesteld → de rest is bouwkundig. |
| **Keuken + badkamer** | **25–35%** | €25.000 – €35.000 | Op maat gemaakte keuken €25–60k, badkamer €8–25k. Bij een €100k-budget kiest men doorgaans één "statement" (dure keuken óf luxe badkamer), niet beide. Ondergrens: €5–8k IKEA + €8k badkamer = €13k; bovengrens: €60k + €25k = €85k, wat het hele budget zou opeten. Middenwaarde ~30%. |
| **Interieur + meubels** | **10–20%** | €10.000 – €20.000 | Gemiddelde huishouden geeft €1.533/jaar uit aan meubels; bij een verbouwing wordt 5–10 jaar aan meubelbudget in één keer uitgegeven → €8k–€15k, in het premiumsegment meer. Wordt vaak als laatste (en dus als sluitpost) ingevuld. |
| **Ontwerphonorarium** | **5–12%** | €5.000 – €12.000 | Zie hieronder. |

**Over het ontwerphonorarium specifiek.** Dit is de zwakste maar strategisch belangrijkste schatting. `[schatting]` Redenering: Elise's aanbod van €12.000 voor een volledig ontwerp komt neer op **16% van een €75k-budget** en **12% van een €100k-budget**. Bij architecten (SBI 7111) is de gemiddelde bruto marge 81,4% en het bedrijfsresultaat 20,6% van de omzet (2022; Firmfocus o.b.v. CBS/Belastingdienst — https://www.firmfocus.biz/NL/BI/branche/architecten `[zeker: laag]`). Dat zegt iets over de kostenstructuur van het bureau, niet over wat de klant accepteert. **Actiepunt: dit is niet betrouwbaar te sourcen en moet empirisch worden getest** — vijf gesprekken met Amsterdamse aannemers/keukenzaken over wat klanten feitelijk aan ontwerp uitgeven, leveren meer op dan verder deskresearch.

**Internationaal benchmark (voorzichtig):** in de VS huurde in 2024 9 op de 10 verbouwende woningeigenaren een professional in; 24% verbouwde de badkamer en 24% de keuken — een verschuiving t.o.v. het historische keukenoverwicht.
Bron: Houzz & Home Study 2025 (VS) — https://www.houzz.com/magazine/2025-u-s-houzz-and-home-renovation-trends-stsetivw-vs~181188659 `[zeker: laag]` voor Nederland — de Amerikaanse markt kent een veel hogere designer-penetratie en is **niet** representatief voor NL. Niet gebruiken als NL-bewijs.

---

## 3. Segmentatie van premium-interieurklanten in Nederland

De vijf hypothesen uit de opdracht, getoetst aan de data.

### 3.1 Tweeverdienende professionals / doorstromers — **BEVESTIGD, dit is het primaire segment**

Het bewijs is ongewoon scherp, want HDN heeft dit profiel letterlijk gedefinieerd:

> **"Verbouwende Doorstromer"** — leeftijd **42**, inkomen **€120.000**, hypotheek **€450.000**, verbouwbudget **€80.000**, ~6% van de totale hypotheekmarkt (≈34.000 aanvragen/jaar landelijk). Twee derde houdt de bestaande hypotheek naast de nieuwe financiering aan.
> Bron: HDN klantprofielen 2026 via InFinance — https://infinance.nl/hypotheken/nieuwe-hdn-klantprofielen-geven-scherper-inzicht-in-2026/ `[zeker: middel]`

Aanvullend bewijs:
- Samenwonende doorstromers betaalden in Q2 2025 gemiddeld **€640.000** — de duurste kopersgroep. (Kadaster Q2 2025) `[zeker: hoog]`
- Doorstromers betaalden landelijk €539.000 vs. starters €385.000. (Kadaster Q1 2025) `[zeker: hoog]`
- Doorstromers brachten in Q1 2026 gemiddeld €32.450 eigen middelen in (−4,4% j-o-j). (HDN Q1 2026) `[zeker: hoog]`

**Trigger:** aankoop van een grotere woning bij gezinsuitbreiding of carrièregroei, gecombineerd met overwaarde uit de vorige woning. **Timing van de trigger: het moment van het bod, niet het moment van de sleutel** — het verbouwbudget wordt in de hypotheekaanvraag vastgelegd, dus vóór de overdracht.

### 3.2 Expats / kennismigranten — **BEVESTIGD als niche, sterk geconcentreerd**

- Het aandeel internationale kopers op de Nederlandse huizenmarkt is in vijf jaar **bijna verdubbeld** (H1 2025 t.o.v. 2020); +50% t.o.v. 2019.
- Landelijk: **1,6%** van alle aankopen. Maar geconcentreerd: **Amsterdam 11–14%**, Amstelveen **20%** (hoogste van NL), ook Eindhoven/Veldhoven/Ouder-Amstel 11–14%.
- NVM-makelaars verkopen **3.000–4.000 woningen per jaar** aan kennismigranten.
- Buitenlandse kopers betaalden gemiddeld **€591.000** — €16.000 boven het landelijk gemiddelde.
- Bron: NOS o.b.v. NVM-cijfers H1 2025 — https://nos.nl/artikel/2582978-meer-buitenlanders-kopen-woning-in-nederland-bijna-verdubbeling-in-vijf-jaar `[zeker: hoog]`
- Amsterdam huisvest ~80.000–110.000 hoogopgeleide internationale werknemers met bovenmodaal salaris. `[zeker: laag]` (schatting uit journalistieke bronnen; geen primaire telling gevonden)
- De 30%-regeling (per 2027 verlaagd naar 27%) vergroot hun bestedingsruimte. `[zeker: middel]`

**`[schatting]` Waarom dit segment strategisch aantrekkelijker is dan de omvang suggereert:** expats hebben géén Nederlands netwerk, géén aannemer-van-de-buurman, en géén referentiekader voor Nederlandse bouwkosten. Precies de klant voor wie een gestructureerd, in het Engels geleverd beslisproces waarde heeft — en die niet weet dat een ontwerphonorarium "ongebruikelijk" zou zijn. Zij betalen bovengemiddeld (€591k) en kopen geconcentreerd in Amsterdam/Amstelveen. **Rekensom: 11–14% × 7.750 Amsterdamse bandtransacties ≈ 850–1.100 expat-aankopen per jaar in de band, in Amsterdam alleen.** `[schatting]`

### 3.3 Gezinnen die opwaarderen — **BEVESTIGD, maar grotendeels overlappend met 3.1**

Dit is geen apart segment maar de dominante *levensfase-motor* achter 3.1: de Verbouwende Doorstromer van 42 met €120k inkomen is in de praktijk een gezin. Aparte NL-data over "gezinnen die opwaarderen" als koopsegment heb ik niet gevonden. `[zeker: laag]` — behandel als één segment met 3.1, niet als tweede kolom in het plan.

### 3.4 Empty nesters — **DEELS ONTKRACHT als koopsegment, BEVESTIGD als verbouwsegment**

- Slechts **7% van alle kopers in Q2 2025 was ouder dan 65** (~3.750 per kwartaal landelijk, nagenoeg vlak). (Kadaster Q2 2025) `[zeker: hoog]`
- WoON 2024: "Tien procent minder 65-jarigen verhuisden dan in 2021. Veel ouderen wonen in ruime koopwoningen die ze vasthouden, deels uit comfort, deels bij gebrek aan alternatieven."
  Bron: Rijksoverheid/BZK, "Tussen wensen en wonen — Resultaten van het WoonOnderzoek Nederland 2024", april 2025 — https://www.rijksoverheid.nl/documenten/rapporten/2025/04/10/kernpublicatie-woon-24 `[zeker: hoog]`
- Van Bruggen: woningeigenaren **onder de 35** kiezen voor kópen; **oudere groepen kiezen juist steeds vaker de tweede hypotheek** voor woningverbetering en verduurzaming. `[zeker: middel]`
- HDN-profiel "Senior Doorstromer": leeftijd 70, pensioeninkomen €62.000, hypotheek €175.000, LTV 35% — koopt dus wel, maar klein.
- HDN-profiel "Box 3-belegger": leeftijd 52, ~15% van de markt, hypotheek €105.000, LTV 20%.

**Conclusie:** benader empty nesters **niet** via de transactiemarkt (ze verhuizen nauwelijks) maar via de verbouwmarkt (ze verbouwen wél, met overwaarde en lage LTV). Dit is een andere funnel: geen makelaars, wel verduurzaming/comfort/levensloopbestendigheid als ingang. Hun overwaarde is groot en hun leencapaciteit ongebruikt.

### 3.5 Kleine ontwikkelaars — **ONTKRACHT als doelgroep voor deze studio**

- Investeerders verkochten in 2025 **36.000 huurwoningen aan eigenaar-bewoners = 15% van alle transacties**; in de G4 was in Q4 2025 bijna **28%** van de door eigenaar-bewoners gekochte woningen een ex-beleggerswoning.
  Bron: Rabobank via InFinance, 12 maart 2026 — https://infinance.nl/hypotheken/rabobank-huizenprijzen-stijgen-minder-hard-in-2026/ ; Kadaster Q4 2025 `[zeker: hoog]`
- Kadaster: "woningbezit investeerders neemt verder af" (Q3 2025), "recordaantal woningen verkocht" door investeerders (Q4 2025).
  Bron: https://www.kadaster.nl/-/investeerders-4e-kwartaal-2025-recordaantal-woningen-verkocht `[zeker: hoog]`

**De beleggersstroom loopt de verkeerde kant op:** kleine beleggers *verlaten* de Nederlandse woningmarkt massaal (Wet betaalbare huur, box 3, overdrachtsbelasting). Zij kopen niet bij; zij ponden uit. Bovendien: wie wél koopt om te verhuren, koopt op rendement en betaalt per definitie niet voor premium-interieurontwerp. **Schrap dit segment uit het plan.** `[zeker: hoog]`

### 3.6 Zoekgedrag

Hier is de brondekking zwak — er bestaat geen Nederlands onderzoek naar hoe consumenten een interieurarchitect zoeken. Wat er is:

- Consumenten zoeken via Google op "interieurontwerper [stad]" en "lokale binnenhuisarchitect", om te ontdekken wie er beschikbaar is en of die te vertrouwen is.
  Bron: Chiela, 2025 — https://chiela.nl/hoe-zoeken-mensen-een-interieurontwerper-en-hoe-speel-je-daar-op-in/ `[zeker: laag]` (vakblog)
- **Mond-tot-mondreclame en Google-zoekopdrachten drijven het merendeel van de aanvragen; social media dient vooral om warme leads te vàlideren nadat iemand je naam al kent.** Pinterest functioneert als visuele zoekmachine voor interieurprofessionals; Instagram als inspiratiebron.
  Bron: SocialPilot / Dieuwertje Beerepoot, 2026 — https://www.socialpilot.co/blog/social-media-for-interior-designers `[zeker: laag]` (internationale vakblog)
- Voor de expat-niche: iamexpat.nl is een reëel oriëntatiekanaal — https://www.iamexpat.nl/housing/property-news/a-practical-guide-renovating-your-dutch-home `[zeker: laag]`

**`[schatting]` Implicatie:** als mond-tot-mond dominant is en social media alleen valideert, dan is de nulmeting voor een studio zonder netwerk hard: **er is geen warme lead om te valideren.** Het eerste jaar draait daarom niet om content maar om verwijzers: aankoopmakelaars in de band (die weten wie €650k betaalt en een kluswoning krijgt), aannemers, keukenzaken, en expat-relocation-bureaus. Dit is een testbare hypothese — en de goedkoopste te testen.

---

## 4. Marktvooruitzicht 2026–2028: NL-renovatiemarkt

### 4.1 Bouwproductie en renovatie — positief

- Totale bouwproductie: **+1,5% (2025) → +2,5% (2026) → +4,5% (2027)**. In constante prijzen groeit de bouwproductie van **€103 mld (2025) naar €118 mld (2030)**.
- Woningopleveringen: **68.000 (2025) → 80.000 (2026) → 84.000 (2027)**, daarna stabilisatie rond 85.000. Woningbouwproductie +9% (2026), +8% (2027).
- **Renovatieproductie groeit met circa 3% per jaar.** Totale woningbouwproductie inclusief renovatie: ~5% per jaar in 2026 en 2027.
- Richting 2030 nemen verduurzamingsinvesteringen toe, wat een extra impuls geeft aan herstel en verbouw van woningen (**gemiddeld ~4% per jaar**) en utiliteitsgebouwen (~3,5%).
- Bron: EIB, "Verwachtingen bouwproductie en werkgelegenheid 2026", januari 2026 — https://www.eib.nl/publicaties/verwachtingen-bouwproductie-en-werkgelegenheid-2026/ en samenvatting via Koninklijke Hibin — https://hibin.nl/nieuws/nieuwsbericht/eib-gematigde-positieve-verwachtingen-bouwproductie-bij-aanhoudende-arbeidskrapte-2026 `[zeker: hoog]`
- ABN AMRO verwacht bouwgroei van 1,0% (2025) en 2,5% (2026) — consistent met EIB.
  Bron: ABN AMRO Sectorprognoses Bouw — https://www.abnamro.nl/nl/zakelijk/insights/sectoren-en-trends/sectorprognoses/bouw/bouwsector-klimt-uit-dal.html `[zeker: middel]`

### 4.2 Rente — stabiel, op een niveau dat verbouwen stimuleert

- Hypotheekrente 10 jaar vast: **~3,58% – 4,0%** (juli 2026). Gemiddeld 10 jaar vast met NHG ~3,92%.
- Rabobank en ABN AMRO verwachten een redelijk stabiele rente in 2026; Van Bruggen geeft **60% kans dat de rente binnen de bandbreedte 3,5–4% blijft**. Kapitaalmarktrentes blijven de komende jaren betrekkelijk stabiel.
- Bronnen: Van Bruggen renteverwachting 2026 — https://www.vanbruggen.nl/hypotheekadvies/actuele-hypotheekrente/hypotheekrente-verwachting ; ING actuele hypotheekrente juli 2026 — https://www.ing.nl/particulier/hypotheek/actuele-hypotheekrente `[zeker: middel]`

**Het mechanisme dat voor Elise telt:** de rentestijging van 1–2% naar ~4% is precies wat verhuizen duur en verbouwen aantrekkelijk maakt. Iemand met een oude hypotheek tegen 1,5% verliest die rente bij verhuizing; een tweede hypotheek tegen 4% op €90k kost minder dan het rentenadeel op een volledige nieuwe hypotheek plus €10.000+ verhuiskosten (overdrachtsbelasting + makelaar). **Een stabiele rente rond 4% is dus geen tegenwind maar de motor onder de verbouwmarkt.** `[schatting]` (redenering, expliciet ondersteund door Van Bruggen 2025)

### 4.3 Arbeidsmarktkrapte in de bouw — de grootste structurele rem

- **Het EIB becijferde dat tussen 2026 en 2029 75.000 extra voltijdskrachten nodig zijn** om de geplande bouwproductie te realiseren. De groei van woningbouw en infra leidt tot extra vraag naar ruim 30.000 arbeidskrachten; de spanning blijft "onverminderd hoog".
  Bron: EIB 2026 via Hibin — https://hibin.nl/nieuws/nieuwsbericht/eib-gematigde-positieve-verwachtingen-bouwproductie-bij-aanhoudende-arbeidskrapte-2026 `[zeker: middel]`
- **Het aandeel moeilijk vervulbare vacatures is het grootst in de bouw: 71%** (industrie 53%). Landelijk was 45% van alle in 12 maanden ontstane vacatures moeilijk vervulbaar. De bouw stond in 2025 bovenaan met verhoudingsgewijs de meeste vacatures van alle sectoren. Werkgevers verwachten dat wervingsproblemen komend jaar het meest toenemen in de bouw (27%).
  Bron: UWV Werkgeversonderzoek 2025, gepubliceerd 18 februari 2026 — https://www.uwv.nl/assets-kai/files/c50c7c18-584b-4f0f-bd15-818c38b78bc9/werkgeversonderzoek-2025-daling-moeilijk-vervulbare-vacatures-18022026.pdf `[zeker: hoog]`
- Defensie-investeringen concurreren om hetzelfde technische personeel. `[zeker: middel]`

**Tweesnijdend zwaard.** Krapte drijft de bouwkosten op (Randstad-arbeid al +20–30% t.o.v. landelijk) en eet dus het ontwerpbudget op. Maar krapte maakt ook *goed voorbereide* projecten waardevoller: een aannemer met een wachtlijst kiest de klant met een compleet, beslist ontwerp boven de klant die halverwege nog nadenkt. **Dat is een verkoopbaar argument voor Elise's beslisinstrument — en het wordt de komende drie jaar sterker, niet zwakker.** `[schatting]`

### 4.4 Consumentenvertrouwen — het duidelijkste waarschuwingssignaal

- **Consumentenvertrouwen juni 2026: −39** (van −46 in mei). Grootste verbetering in ruim elf jaar — **maar nog steeds ver onder het 20-jaars gemiddelde van −11.**
- Economisch klimaat: van −72 naar **−64**.
- **Koopbereidheid: van −28 naar −22** — grootste maandelijkse verbetering sinds het begin van de metingen, maar duidelijk onder het langjarig gemiddelde van −9.
- Bron: CBS, "Consumenten minder negatief in juni", 22 juni 2026 — https://www.cbs.nl/nl-nl/nieuws/2026/26/consumenten-minder-negatief-in-juni ; reeks: CBS 83693NED — https://www.cbs.nl/nl-nl/cijfers/detail/83693NED `[zeker: hoog]`

**Lees dit goed:** het nieuws is "minder negatief", niet "positief". Koopbereidheid van −22 tegen een gemiddelde van −9 betekent dat Nederlanders grote aankopen nog altijd uitstellen. Een €12.000-ontwerphonorarium is de definitie van een uitstelbare aankoop.

### 4.5 Woningmarktvooruitzicht — de trechter krimpt

- Rabobank (12 maart 2026): huizenprijzen **+8,6% (2025) → +3,1% (2026) → +4,1% (2027)**.
- Transacties: **229.000 (2026) → ~210.000 (2027)** — tegen 238.800 in 2025.
- Reden: tijdelijk extra aanbod (uitpondgolf: 36.000 verkochte huurwoningen in 2025 = 15% van alle transacties) plus nieuwbouw (217.000 in de pijplijn). Daarna verkrapt de markt in 2027 doordat zowel de uitpondgolf als de nieuwbouw terugvalt. Structureel woningtekort blijft ~410.000.
- Cao-loonstijging: 4,2% (2026), 3,6% (2027).
- Bron: Rabobank Kwartaalbericht Woningmarkt via InFinance, 12 maart 2026 — https://infinance.nl/hypotheken/rabobank-huizenprijzen-stijgen-minder-hard-in-2026/ ; origineel: https://www.rabobank.nl/kennis/kwartaalbericht-woningmarkt `[zeker: middel]`

**Consequentie voor het ondernemingsplan:** 2025 was een uitzonderingsjaar. Van 238.800 (2025) naar ~210.000 (2027) is **−12% in twee jaar**. De ~12.800 bandtransacties uit §1 zijn een *piek*, geen basislijn. Reken voor 2027–2028 met **~11.300** (12.800 × 0,88). `[schatting]`

### 4.6 Verduurzaming — reële maar bescheiden motor

- **Extra leenruimte €20.000** bovenop de reguliere hypotheeknorm bij aankoop van een woning met label E, F of G, om het label te verbeteren (2026). Effectief >100% van de woningwaarde financierbaar.
- **Per 1 januari 2026 is de extra leenruimte voor zeer energiezuinige woningen (label A en A+) verminderd.**
- Bron: Van Bruggen leennormen 2026 — https://www.vanbruggen.nl/hypotheekadvies/leennormen ; a.s.r., "Veranderingen voor wonen en hypotheken in 2026" — https://www.asr.nl/blog/veranderingen-wonen-en-hypotheken-2026 `[zeker: middel]`
- **ISDE 2026:** subsidie voor vijf isolatietypes (spouwmuur, gevel, bodem/vloer, dak/zolder, glas). Startbedrag eerste lucht-waterwarmtepomp **verlaagd van €1.250 naar €1.025** (+€200 energielabelbonus bij A+++). Hybride warmtepomp €1.500–€3.000; volledig elektrisch €2.500–€5.000. Nieuw vanaf 2026: **€400** voor energiezuinige ventilatie in combinatie met isolatie.
  Bron: Consumentenbond, ISDE 2026 — https://www.consumentenbond.nl/energiebesparende-maatregelen/investeringssubsidie-duurzame-energie-isde `[zeker: middel]`
- Energielabelmethodiek: tot begin 2027 wordt aan een nieuwe methodiek gewerkt; eerste proefberekeningen maart 2027; NTA8800 wordt vervangen per 1 januari 2030. `[zeker: middel]`
- HDN Q1 2026: **60% van de starters** en **48% van de doorstromers** kocht een woning met label B of lager — een grote latente verduurzamingsopgave in de kopersmarkt. (HDN Q1 2026) `[zeker: hoog]`
- HDN 2025: aandeel hypotheekaanvragen met energiebesparende maatregelen **daalde naar 12,5%** (van 16%). `[zeker: middel]`
- WoON 2024: veel huiseigenaren verbeteren hun woning, **maar primair om geld te besparen of wooncomfort te verhogen — niet uit milieumotieven.** Isolatie, zonnepanelen en warmtepompen zijn populair vooral als de investering zich terugverdient. Eén op de vijf huishoudens ervaart vocht- of schimmelproblemen — aanzienlijk meer dan in 2021.
  Bron: Rijksoverheid, WoON 2024, april 2025 — https://www.rijksoverheid.nl/documenten/rapporten/2025/04/10/kernpublicatie-woon-24 `[zeker: hoog]`

**Nuchtere lezing.** De ISDE-bedragen (€1.025–€5.000) zijn te klein om een €80.000-verbouwing te veroorzaken; ze zijn hooguit een meelifter. De €20.000 extra leenruimte bij label E/F/G is materieel — maar dwingt de klant richting *technische* maatregelen, niet richting ontwerp. En het aandeel aanvragen mét energiebesparende maatregelen **daalt** (16% → 12,5%). Verduurzaming is een **aanleiding en een financieringsroute** voor een gesprek, geen zelfstandige vraagmotor voor premium-interieurontwerp. Verkoop niet "verduurzaming"; verkoop "u moet toch al de vloer eruit — laten we dan meteen bepalen hoe u wilt wonen".

---

## 5. Nederlandse consumentenhouding t.o.v. AI-ondersteunde dienstverlening

Dit is de best gedocumenteerde sectie na §1 — er zijn twee grote, recente, onafhankelijke onderzoeken.

### 5.1 CBS — "AI in de samenleving: ervaringen en opinies" (2026, data 2025)

Steekproef: 3.834 respondenten, veldwerk 23 januari – 30 juni 2025.
Bron: CBS, 2026 — https://www.cbs.nl/nl-nl/longread/diversen/2026/ai-in-de-samenleving-ervaringen-en-opinies `[zeker: hoog]`

| Bevinding | % |
|-----------|---|
| Heeft van AI gehoord | 94% |
| Begrijpt wat AI is | 55% (33% basiskennis) |
| Vindt toenemend AI-gebruik positief | **49%** |
| Denkt dat AI het leven makkelijker maakt | 42% |
| Denkt dat AI het leven ingewikkelder maakt | **42%** |
| Maakt zich zorgen over huidige maatschappelijke impact van AI | **76%** |
| **Vindt menselijk toezicht op AI essentieel** | **88%** |
| Gebruikt AI in het werk (werkenden) | 43% |
| Zeer bezorgd over verspreiding misinformatie | 69% |
| Zeer bezorgd over privacyrisico's | 63% |
| Wijst chatbots af als vervanging van doktersconsult | 65% |

**Demografische breuklijn (relevant voor Elise's doelgroep):**
- 18–25 jaar: 74% begrijpt AI; 58% ziet verbetering van het leven
- 65+: 30% begrijpt AI; 50% ziet het leven ingewikkelder worden
- **WO-opgeleiden: 80% verwacht meer AI op het werk; het meest optimistisch van alle groepen**

### 5.2 KPMG — Nationale AI Vertrouwensmonitor (Q4 2025, met Ipsos I&O)

Steekproef: 1.013 Nederlanders die bekend zijn met AI (89% van de bevolking).
Bron: KPMG Nederland, november 2025 — https://kpmg.com/nl/nl/over-ons/pers-en-media/persberichten/2025/11/nederlanders-willen-ai-met-menselijke-controle.html `[zeker: hoog]`

| Bevinding | Waarde |
|-----------|--------|
| **Gemiddeld vertrouwen in AI** | **5,8 / 10** ("voorzichtig") |
| Verwacht dat AI correcte antwoorden geeft | 37% |
| Vindt menselijk toezicht essentieel bij belangrijke beslissingen | **84%** |
| Vindt dat AI nooit volledig zelfstandig beslissingen mag nemen die het dagelijks leven raken | **83%** |
| Controleert AI-output routinematig | 70% |
| Gebruikt AI voor zoeken, inspiratie en praktische instructies | **86%** |
| Ziet AI vooral als kans | 36% |
| **Vertrouwt AI volledig bij hypotheekadvies** | **14%** |
| Vertrouwt AI voor personeelsbeoordeling / chirurgische noodzaak | <5% |
| Bezorgd over misinformatie | 89% |

Aanvullend: "Nederlanders gebruiken meer AI, maar vertrouwen het minder" — https://www.nederlanddigitaal.nl/actueel/nieuws/2026/04/28/nederlanders-gebruiken-meer-ai-maar-vertrouwen-het-minder `[zeker: middel]`

### 5.3 AI in de Nederlandse interieurbranche specifiek

- De eerste **Interieur & AI Summit (november 2025)** liet zien dat de interesse vanuit de branche groot is. De verwachting: AI vervangt de komende jaren geen banen, maar verandert het werk fundamenteel — minder repetitieve taken, meer ruimte voor creatief en strategisch denken. AI blijkt vooral een praktische aanvulling in het creatieve proces.
  Bron: De Interieur Club, Interieur AI Lab — https://www.deinterieurclub.com/interieur-ai-lab en https://www.deinterieurclub.com/post/cijfers-en-feiten-over-de-interieurbranche `[zeker: laag]` (brancheclub, geen onafhankelijk onderzoek)
- AI-tools genereren binnen seconden 3D-visualisaties, plattegronden en moodboards — de drempel voor personalisatie daalt.
  Bron: Design Express — https://designexpress.eu/benl/blog/ai-in-interieurontwerp-en-architectuur `[zeker: laag]` (leverancier)

**Er bestaat geen Nederlands consumentenonderzoek naar acceptatie van AI in interieurontwerp specifiek.** Dat is een echt gat. `[zeker: hoog]` — over de afwezigheid van de bron.

### 5.4 Wat dit betekent voor Studio Verstelle

`[schatting]` De data wijzen consistent één kant op, en het is **niet** de kant die "AI-first" suggereert:

1. **86% gebruikt AI voor "zoeken, inspiratie en praktische instructies".** Dat is exact wat een moodboard is. De klant kan de inspiratiefase zelf al doen — en doet dat ook. **Inspiratie is geen verkoopbaar product meer.** Dit is het grootste strategische signaal in dit hele rapport voor Elise's propositiekeuze.
2. **88% (CBS) / 84% (KPMG) eist menselijk toezicht bij belangrijke beslissingen.** Een verbouwing van €80.000 is voor een huishouden een van de grootste financiële beslissingen na de woningaankoop zelf. Het KPMG-cijfer van **14% vertrouwen in AI bij hypotheekadvies** is de beste beschikbare proxy: bij grote, onomkeerbare, financiële beslissingen wil de Nederlander een mens.
3. **Vertrouwen 5,8/10 en dalend** terwijl gebruik stijgt. "AI-ondersteund ontwerp" als kopregel is dus een netto risico.
4. **Maar:** WO-opgeleiden zijn de meest AI-optimistische groep — en dat is precies het profiel van de Verbouwende Doorstromer (€120k inkomen, 42 jaar). Bij hén is AI geen bezwaar, mits ondergeschikt gepresenteerd.

**Aanbeveling:** positioneer AI als *interne* versnelling (sneller varianten, sneller doorrekenen, sneller beslissen), nooit als de belofte. De belofte is de mens die de beslissing draagt. Concreet: "u beslist met alles op tafel — in vier weken in plaats van vier maanden", niet "AI-gedreven interieurontwerp". De 88%/84%-cijfers zeggen dat de menselijke autoriteit hét verkoopargument is, en het beslisinstrument het bewijs.

---

## 6. Marktomvang-trechter

Alle rekenstappen expliciet. Vetgedrukt = harde bron. Cursief = `[schatting]`.

```
STAP 0  Alle verkopen bestaande koopwoningen, 3 steden, 2025      [CBS 85792NED — zeker: hoog]
        Amsterdam                                        14.683
        Den Haag                                          8.376
        Rotterdam                                         8.384
                                                       ─────────
        TOTAAL                                           31.443

STAP 1  × aandeel in de band €500k–€2M                            [schatting: lognormaal,
        Amsterdam    14.683 × 52,8%  =  7.750             σ=0,55–0,63 gekalibreerd op
        Den Haag      8.376 × 33,5%  =  2.810             NL-anker 84.000/238.800 >€500k]
        Rotterdam     8.384 × 26,8%  =  2.250
                                     ─────────
        TOTAAL IN DE BAND               12.800            (bandbreedte 12.400 – 13.200)

STAP 2  × aandeel dat substantieel verbouwt binnen ~2 jaar        [schatting: 25%]
        12.800 × 25%                 =   3.200            Onderbouwing: HDN-ondergrens
                                                          18% van álle kopers financiert
                                                          verbouwing mee; opgehoogd naar
                                                          25% omdat de band €500k+ meer
                                                          doorstromers met overwaarde
                                                          bevat. Bandbreedte 18–30%
                                                          → 2.300 – 3.840

STAP 3  × aandeel met verbouwbudget ≥ €75.000                     [schatting: 40%]
        3.200 × 40%                  =   1.280            Onderbouwing: HDN "Verbouwende
                                                          Doorstromer" heeft gemiddeld
                                                          €80k. Bij een gemiddelde van €80k
                                                          ligt ruwweg de helft erboven;
                                                          ik corrigeer naar beneden naar
                                                          40% omdat de "Verbouwende
                                                          Starter" (€35k) meetelt in
                                                          stap 2. Bandbreedte 30–50%
                                                          → 960 – 1.600

STAP 4  × aandeel dat een ontwerpprofessional inhuurt             [schatting: 20%]
        1.280 × 20%                  =     256            Zwakste stap. Geen NL-bron.
                                                          Redenering: de meeste NL-
                                                          verbouwingen lopen via aannemer
                                                          + keukenzaak zonder aparte
                                                          ontwerper; NL kent geen VS-
                                                          achtige designer-cultuur
                                                          (VS: 9 op 10 huurt een
                                                          professional in — niet
                                                          overdraagbaar). Bandbreedte
                                                          15–25% → 190 – 320

════════════════════════════════════════════════════════════════════════════════════
ADRESSEERBARE MARKT (kopers):     ≈ 250 – 300 huishoudens per jaar, 3 steden
════════════════════════════════════════════════════════════════════════════════════
```

**Aangrenzende pool — bestaande eigenaren die verbouwen zonder te verhuizen** `[schatting]`:
```
        HDN "Verbouwer"-aanvragen NL 2025                98.881   [HDN — zeker: hoog]
        × aandeel koopwoningvoorraad in de 3 steden        ~8%    [schatting: A'dam ~141k +
                                                                   R'dam ~128k + DH ~109k
                                                                   ≈ 378k koopwoningen van
                                                                   NL's ~4,7 mln = 8,0%]
        →                                                 ~7.900 verbouwaanvragen/jaar
        Gemiddeld €58.250 — grotendeels ONDER de €75k-drempel.
        × aandeel ≥€75k (~25%) × ontwerpprofessional (20%)  ≈ 400 extra huishoudens/jaar
```

**Totale realistische pool: ≈ 650 – 700 huishoudens per jaar** (250–300 kopers + ~400 zittende eigenaren) in Amsterdam, Den Haag en Rotterdam samen.

**Aanbod tegenover die pool:** 12.915 bedrijven landelijk (§ De vijf cijfers). Ook al zit maar een fractie in de drie steden en in het premiumsegment — de verhouding is ongunstig.

**Correctie voor 2027–2028:** stap 0 krimpt met ~12% (Rabobank: 238.800 → ~210.000 transacties landelijk). Reken met **~11.300 bandtransacties** en een adresseerbare koperspool van **~220–265**. `[schatting]`

---

## 7. Sanity check: hoeveel klanten heeft Elise nodig?

### 7.1 De omzetrekening

| Product | Aantal/jaar | Prijs | Omzet |
|---------|-------------|-------|-------|
| Betaalde verkennende sessie | 20 | €2.000 | €40.000 |
| Volledig ontwerp | 8 | €12.000 | €96.000 |
| Ontwerp + begeleiding | 4 | €25.000 | €100.000 |
| Adviesdagen | 15 | €1.400 | €21.000 |
| **Totaal** | | | **€257.000** |

Dat haalt het doel van €250.000. ✓

### 7.2 Hoeveel klanten is dat?

**Bovengrens (alles losse klanten):** 20 + 8 + 4 + 15 = **47 klanten per jaar**

**Realistisch (ontwerpen en projecten converteren uit de verkennende sessies):** de 8 ontwerpen en 4 projecten komen uit de 20 verkennende sessies (60% conversie).
→ 20 verkenningsklanten + 15 adviesklanten = **35 unieke klanten per jaar**, waarvan **12 diepe projecten**.

### 7.3 Als percentage van de markt

| Noemer | Omvang | 47 klanten | 12 diepe projecten |
|--------|--------|-----------|--------------------|
| Alle transacties 3 steden (STAP 0) | 31.443 | **0,15%** | 0,04% |
| Transacties €500k–€2M (STAP 1) | 12.800 | **0,37%** | **0,09%** |
| Idem + zittende verbouwers | ~20.700 | **0,23%** | 0,06% |
| Substantiële verbouwers in de band (STAP 2) | 3.200 | 1,5% | 0,4% |
| Verbouwers met €75k+ budget (STAP 3) | 1.280 | 3,7% | 0,9% |
| **Design-kopende huishoudens (STAP 4)** | **256** | **18,4%** | **4,7%** |
| Idem incl. zittende eigenaren | ~656 | 7,2% | 1,8% |

### 7.4 Wat deze check eerlijk laat zien

**Ja — tegen de brede markt is het triviaal.** 47 klanten op 12.800 bandtransacties = **0,37%**. Op alle 31.443 transacties: **0,15%**. Twaalf diepe projecten op 12.800 transacties = **0,09%**, oftewel **één op de ruim duizend woningverkopen**. Er is geen enkele volumereden waarom dit niet zou kunnen.

**Maar de eerlijke breuk is die onderaan de tabel, en die is het opschrijven waard.** Tegen de pool die daadwerkelijk een ontwerpprofessional inhuurt (256 huishoudens/jaar), is 47 klanten **18,4%** en zijn 12 diepe projecten **4,7%**. Inclusief de zittende eigenaren zakt dat naar 7,2% respectievelijk 1,8% — beter, maar geen rondingsfout.

**Dit is de echte bevinding van deze sanity check, en hij is het omgekeerde van wat de vraag suggereert.** Het risico van dit plan zit niet in het volume van de markt; het zit in de *toegang* tot een kleine, specifieke pool waarvan Elise vandaag 0% kent. Een marktaandeel van 5% van de design-kopende huishoudens in drie steden is geen rekenkundige vanzelfsprekendheid — dat is een positie die je in jaar 3–5 verdient, met verwijzers en een portfolio, niet in jaar 1.

**Twee gevolgen voor het plan:**
1. **De verkennende sessie (€2k) en de adviesdag (€1,4k) zijn geen bijproducten — ze zijn de strategie.** Zij kunnen verkocht worden aan STAP 2 (3.200 huishoudens) of zelfs STAP 1 (12.800), want daarvoor hoeft niemand "een interieurarchitect in te huren". Zij hoeven alleen een beslissing te nemen. 20 sessies op 3.200 substantiële verbouwers = **0,6%** — dát is de rondingsfout waarop het plan kan rusten. De 12 diepe projecten volgen daaruit; ze worden niet apart verkocht.
2. **Reken niet op de smalle pool voor de omzet, maar bouw ernaartoe.** De trechter draait om: verkoop het beslismoment aan de brede band, laat het ontwerp eruit voortkomen.

---

## 8. Wat hiertegen pleit

De sterkste, op bewijs gebaseerde argumenten dat deze markt kleiner en moeilijker is dan hij lijkt. Elk punt met bron.

### 8.1 De stadsmarkt is een startersmarkt, niet een doorstromersmarkt
**62% van alle G4-transacties ging in Q1 2025 naar starters** — landelijk was dat 45%. Starters betaalden gemiddeld €385.000. De HDN "Verbouwende Starter" heeft **€35.000** verbouwbudget — minder dan de helft van Elise's drempel van €75k, en niet genoeg voor een ontwerphonorarium van €12.000.
*Kadaster Q1 2025 + HDN klantprofielen 2026 — `[zeker: hoog]`*
→ De meerderheid van de transacties in Elise's steden komt van kopers die haar dienst niet kunnen betalen. Het bandcijfer van 12.800 overschat de bruikbare markt aanzienlijk, want een deel daarvan zijn starters die €550k betalen voor een appartement en daarna blut zijn.

### 8.2 De prijsband is verontreinigd door uitponden — dure prijs, arme koper, klein huis
Investeerders verkochten in 2025 **36.000 huurwoningen aan eigenaar-bewoners = 15% van alle transacties**; in de G4 was in Q4 2025 **bijna 28%** van de door eigenaar-bewoners gekochte woningen een ex-beleggerswoning. MVA meldt over Q1 2026 expliciet dat de Amsterdamse prijs **5,8% daalde doordat er relatief meer kleine en minder luxe appartementen werden verkocht**, "vaak appartementen die kleiner zijn en soms opknapbehoeftig".
*Kadaster Q4 2025; Rabobank via InFinance 2026; MVA Q1 2026 — `[zeker: hoog]`*
→ Een groeiend deel van de "€500k+"-transacties is een klein ex-huurappartement dat een starter met moeite koopt. De prijs is geen proxy meer voor het verbouwbudget. Dit ondermijnt STAP 1 van de trechter direct.

### 8.3 Kopers hebben na de aankoop geen geld meer — dit is het scherpste cijfer
In Amsterdam bieden kopers in 2026 gemiddeld **7,8% boven de vraagprijs**; **74% van de woningen ging in Q1 2026 boven de vraagprijs**. Banken financieren maximaal 100% van de getaxeerde marktwaarde — **het overbod moet volledig uit eigen zak**. Op een woning van €630.000 is dat ~€49.000 eigen geld, alleen om te wínnen.
En dan het HDN-cijfer: **starters brengen gemiddeld €47.800 eigen middelen in; doorstromers €32.450 (−4,4% j-o-j)**.
*Adventus/SlimBieden 2026 `[zeker: laag]`; HDN Q1 2026 `[zeker: hoog]`*
→ De gemiddelde doorstromer heeft na het bod **€32.450 aan eigen geld gehad** — dat is minder dan één op maat gemaakte keuken (€25–60k). Wie niet meefinanciert in de hypotheek, verbouwt niet. Dit is precies waarom het HDN-cijfer van 18% (meefinanciering) waarschijnlijk *dichter bij de waarheid ligt* dan mijn opgehoogde 25% in STAP 2. **Als 18% de juiste waarde is, zakt de adresseerbare markt van 256 naar ~184 huishoudens per jaar** — en wordt Elise's 12 diepe projecten 6,5% van de pool.

### 8.4 Het aanbod is verpletterend
**12.915 bedrijven**: 1.250 interieurarchitecten (SBI 71112) + 11.665 interieur- en ruimtelijk ontwerp (SBI 74103, Q3 2026). Die laatste categorie is **sinds 2013 verdubbeld** en groeide nog van 11.320 (Q1 2025) naar 11.665 (Q3 2026). Daarnaast 5.560 architectenbureaus.
*CBS 81589NED — `[zeker: hoog]`; groeiduiding via De Interieur Club `[zeker: middel]`*
→ Tegenover ~650 design-kopende huishoudens per jaar in de drie steden staan ~12.900 aanbieders landelijk. Ook bij een ruime aanname dat maar 10% in deze steden actief is, is dat ~1.300 aanbieders voor ~650 klanten. **Twee aanbieders per klant.** De titel "interieurarchitect" is beschermd en de BNI heeft ruim 400 leden (https://bni.nl/home/over-de-bni/ `[zeker: middel]`) — maar de 11.665 onbeschermde "interieurontwerpers" concurreren wel om dezelfde opdracht, tegen een lagere prijs.

### 8.5 De consument stelt grote aankopen nog steeds uit
Consumentenvertrouwen **−39** (juni 2026) tegen een 20-jaars gemiddelde van **−11**. Koopbereidheid **−22** tegen een gemiddelde van **−9**. Het positieve nieuws — de grootste maandverbetering ooit gemeten — verandert niets aan het niveau: dit is nog altijd een van de slechtste standen in twintig jaar.
*CBS, juni 2026 — `[zeker: hoog]`*
→ Een ontwerphonorarium is de meest uitstelbare post in een verbouwbudget. Het is de enige post die de klant kan schrappen zonder dat het huis onaf blijft.

### 8.6 De trechter krimpt de komende twee jaar aantoonbaar
Rabobank: transacties **238.800 (2025) → 229.000 (2026) → ~210.000 (2027)** = **−12%**. Prijsgroei valt terug van +8,6% naar +3,1%. De uitpondgolf en de nieuwbouwpiek die 2025 tot recordjaar maakten, vallen in 2027 beide weg.
*Rabobank via InFinance, maart 2026 — `[zeker: middel]`*
→ Elise start op de top van de cyclus. Het cijfer van 12.800 is een piek, geen basislijn. Voor 2027–2028: ~11.300.

### 8.7 De bouwkrapte eet het ontwerpbudget op
**71% van de vacatures in de bouw is moeilijk vervulbaar** — de hoogste van alle sectoren. EIB: **75.000 extra voltijdskrachten nodig tussen 2026 en 2029**. Randstad-arbeid kost al **20–30% meer** dan het landelijk gemiddelde.
*UWV Werkgeversonderzoek 2025 (feb 2026) `[zeker: hoog]`; EIB 2026 `[zeker: middel]`*
→ Twee mechanismen, beide negatief: (a) bij een vast totaalbudget drukt duurder bouwen het ontwerphonorarium eruit; (b) Elise's "ontwerp + begeleiding"-product (€25.000, 4×/jaar) is afhankelijk van aannemers die zij niet kan sturen en die een wachtlijst hebben. Vertraging is haar reputatierisico, niet dat van de aannemer.

### 8.8 Verduurzaming is een zwakkere motor dan het beleidsverhaal suggereert
Het aandeel hypotheekaanvragen met energiebesparende maatregelen **daalde in 2025 naar 12,5%** (van 16%). De ISDE-startbijdrage voor een lucht-waterwarmtepomp is **verlaagd** van €1.250 naar €1.025. De extra leenruimte voor label A/A+-woningen is per 1 januari 2026 **verminderd**. WoON 2024: huiseigenaren verbeteren primair **om geld te besparen of comfort te verhogen, niet uit milieumotieven**, en vooral als de investering zich terugverdient.
*HDN 2025 `[zeker: middel]`; Consumentenbond ISDE 2026 `[zeker: middel]`; WoON 2024 `[zeker: hoog]`*
→ "Verduurzaming" levert geen premium-ontwerpvraag op. Het levert vraag op naar isolatie en installaties — technisch werk met een terugverdientijd, waar een ontwerphonorarium geen plek in heeft.

### 8.9 De klant kan de inspiratiefase zelf al
**86% van de AI-bekende Nederlanders gebruikt AI al voor "zoeken, inspiratie en praktische instructies"** (KPMG, Q4 2025). Precies wat een moodboard is. Tegelijk is het vertrouwen in AI **5,8/10 en dalend**, eist **84–88%** menselijk toezicht bij belangrijke beslissingen, en vertrouwt slechts **14%** AI bij hypotheekadvies.
*KPMG Nationale AI Vertrouwensmonitor 2025 `[zeker: hoog]`; CBS 2026 `[zeker: hoog]`*
→ Klemzit: de goedkope helft van het vak (inspiratie, visualisatie) is gecommoditiseerd door tools die de klant zelf heeft; de dure helft (beslissen, verantwoordelijkheid dragen) mag juist **niet** naar AI. "AI-ondersteund ontwerp" verkoopt daarom aan geen van beide kanten. Het werkt alleen als interne marge, niet als propositie.

### 8.10 Twee segmenten uit de hypothese houden geen stand
- **Kleine ontwikkelaars: schrappen.** Beleggers *verlaten* de markt (36.000 uitgeponde woningen in 2025 = 15% van alle transacties; Kadaster: "woningbezit investeerders neemt verder af"). Wie blijft, koopt op rendement en betaalt niet voor ontwerp. `[zeker: hoog]`
- **Empty nesters: niet via de transactiemarkt.** Slechts 7% van de kopers is 65+, en WoON 2024 laat zien dat 10% mínder 65-plussers verhuisden dan in 2021. Zij zijn wél bereikbaar via de verbouwmarkt (Van Bruggen: oudere eigenaren kiezen juist steeds vaker de tweede hypotheek) — maar dat is een compleet andere funnel zonder makelaars. `[zeker: hoog]`

### 8.11 De grootste zwakte van dít rapport
De hele trechter hangt vanaf STAP 4 aan één ongefundeerd getal: **het aandeel van de €75k+-verbouwers dat een ontwerpprofessional inhuurt (20%)**. Daar is geen Nederlandse bron voor. Ook de bestedingsverdeling in §2.3 leunt op commerciële offertesites. Als het werkelijke aandeel 10% is in plaats van 20%, halveert de adresseerbare markt naar ~128 huishoudens en is Elise's 12 diepe projecten **9,4%** van de pool.
→ **Dit is geen deskresearch-vraag meer. Vijf gesprekken met Amsterdamse aankoopmakelaars in de band €600k+, drie met aannemers en twee met keukenzaken beantwoorden dit beter dan enige verdere zoektocht.** Dat is de eerstvolgende actie, vóór het plan wordt vastgezet.

---

## Bronnen

Alle URL's geraadpleegd op **16 juli 2026**.

**Primaire statistiek — CBS**
- CBS StatLine 85792NED, "Bestaande koopwoningen; verkoopprijzen, prijsindex 2020=100, regio" (1e kw. 1995 – 1e kw. 2026) — https://opendata.cbs.nl/statline/#/CBS/nl/dataset/85792NED/table — via OData: https://opendata.cbs.nl/ODataApi/odata/85792NED/TypedDataSet
- CBS StatLine 83625NED, "Bestaande koopwoningen; gemiddelde verkoopprijzen, regio" (1995 t/m 2025) — https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83625NED/table
- CBS StatLine 85773NED, "Bestaande koopwoningen; verkoopprijzen prijsindex 2020=100" (jan 1995 – mei 2026) — https://www.cbs.nl/nl-nl/cijfers/detail/85773NED
- CBS StatLine 81589NED, "Bedrijven; bedrijfstak" (SBI 71112 Interieurarchitecten; 74103 Interieur en ruimtelijk ontwerp; 71111 Architecten) — https://www.cbs.nl/nl-nl/cijfers/detail/81589NED
- CBS StatLine 83693NED, "Consumentenvertrouwen, economisch klimaat en koopbereidheid; gecorrigeerd" — https://www.cbs.nl/nl-nl/cijfers/detail/83693NED
- CBS, "Consumenten minder negatief in juni", 22 juni 2026 — https://www.cbs.nl/nl-nl/nieuws/2026/26/consumenten-minder-negatief-in-juni
- CBS, "AI in de samenleving: ervaringen en opinies", 2026 (data 2025, n=3.834) — https://www.cbs.nl/nl-nl/longread/diversen/2026/ai-in-de-samenleving-ervaringen-en-opinies
- CBS, "Meer bestaande koopwoningen verkocht, minder nieuwbouw", maart 2026 — https://www.cbs.nl/nl-nl/nieuws/2026/03/meer-bestaande-koopwoningen-verkocht-minder-nieuwbouw

**Kadaster**
- Kadaster, "Woningmarkt 4e kwartaal 2025: meeste verkopen ooit in een kwartaal", 2026 — https://www.kadaster.nl/-/woningmarkt-4e-kwartaal-2025-meeste-verkopen-ooit-in-een-kwartaal
- Kadaster, "Woningmarkt 1e kwartaal 2025: starters kochten in steden, doorstromers daarbuiten", 2025 — https://www.kadaster.nl/-/woningmarkt-1e-kwartaal-2025-starters-kochten-in-steden-doorstromers-daarbuiten
- Kadaster, "Woningmarkt 2e kwartaal 2025: jonge koper betaalde meer per m2 in grootste steden", 2025 — https://www.kadaster.nl/-/woningmarkt-2e-kwartaal-2025-jonge-koper-betaalde-meer-per-m2-in-grootste-steden
- Kadaster, "Woningmarkt 3e kwartaal 2025: lagere prijs door investeerdersverkopen", 2025 — https://www.kadaster.nl/-/woningmarkt-3e-kwartaal-2025-lagere-prijs-door-investeerdersverkopen
- Kadaster, "Investeerders 4e kwartaal 2025: recordaantal woningen verkocht", 2026 — https://www.kadaster.nl/-/investeerders-4e-kwartaal-2025-recordaantal-woningen-verkocht
- Kadaster, Kwartaalberichten woningmarkt — https://www.kadaster.nl/zakelijk/vastgoedinformatie/kwartaalberichten/kwartaalberichten-woningmarkt

**NVM / MVA**
- NVM, "Gemiddelde transactieprijs boven half miljoen bij meer aanbod en vlotte verkopen" (Q4 2025), 2026 — https://www.nvm.nl/nieuws/2026/nvm-gemiddelde-transactieprijs-boven-half-miljoen-bij-meer-aanbod-en-vlotte-verkopen/
- NVM, "Woningmarkt meer in balans door toename aanbod en afvlakkende prijzen" (Q1 2026), 2026 — https://www.nvm.nl/nieuws/2026/nvm-woningmarkt-meer-in-balans-door-toename-aanbod-en-afvlakkende-prijzen/
- NVM, "Flink meer verkopen in 1e kwartaal 2025 met prijsdemping door veel 'uitpondwoningen'", 2025 — https://www.nvm.nl/nieuws/2025/nvm-flink-meer-verkopen-in-1e-kwartaal-2025-met-prijsdemping-door-veel-uitpondwoningen/
- NVM, Marktinformatie Wonen — https://www.nvm.nl/wonen/marktinformatie-wonen/
- MVA (Makelaarsvereniging Amsterdam), Kwartaalcijfers Q1 2026 — https://mva.nl/nieuws/kwartaalcijfers-q1-2026
- MVA, Woningmarktrapportages — https://www.mva.nl/over-de-mva/mva/woningmarktrapportages

**HDN (Hypotheken Data Netwerk)**
- HDN, Jaar- en kwartaaloverzichten — https://hdn.nl/marktcijfers/jaar-en-kwartaaloverzichten/
- HDN Jaaroverzicht 2025 (Verbouwer: 98.881 aanvragen, +16,3%, gem. €58.250) — https://hdnindex.hdn.nl/reports/HDN2025JAAROVERZICHT/
- HDN, "Woonkloof groeit, recordweek stuwt hypotheekmarkt in Q1 2026", 2026 — https://hdn.nl/nieuws/woonkloof-groeit-recordweek-stuwt-hypotheekmarkt-in-q1-2026/
- InFinance, "Nieuwe HDN-klantprofielen geven scherper inzicht in 2026", 15 mei 2026 (Verbouwende Starter / Verbouwende Doorstromer) — https://infinance.nl/hypotheken/nieuwe-hdn-klantprofielen-geven-scherper-inzicht-in-2026/

**Banken / economische instituten**
- EIB, "Verwachtingen bouwproductie en werkgelegenheid 2026", januari 2026 — https://www.eib.nl/publicaties/verwachtingen-bouwproductie-en-werkgelegenheid-2026/ (volledige PDF achter €25 betaalmuur; cijfers via samenvattingen)
- Koninklijke Hibin, "EIB: versnelling woningnieuwbouw, bij aanhoudende arbeidskrapte 2026", januari 2026 — https://hibin.nl/nieuws/nieuwsbericht/eib-gematigde-positieve-verwachtingen-bouwproductie-bij-aanhoudende-arbeidskrapte-2026
- EIB, "Middellange termijn scenario's voor de bouw", 2023 — https://www.eib.nl/wp-content/uploads/2023/07/Middellange-termijn-scenarios-voor-de-bouw.pdf
- Rabobank, Kwartaalbericht Woningmarkt — https://www.rabobank.nl/kennis/kwartaalbericht-woningmarkt (directe fetch gaf HTTP 403; cijfers via InFinance)
- InFinance, "Rabobank: 'Huizenprijzen stijgen minder hard in 2026'", 12 maart 2026 — https://infinance.nl/hypotheken/rabobank-huizenprijzen-stijgen-minder-hard-in-2026/
- ABN AMRO, Sectorprognoses Bouw, "Bouwsector klimt uit dal" — https://www.abnamro.nl/nl/zakelijk/insights/sectoren-en-trends/sectorprognoses/bouw/bouwsector-klimt-uit-dal.html
- ING, "Onderhouds- en verbouwmarkt: Afnemende impuls uit woningmarkt" — https://www.ing.nl/zakelijk/kennis-over-de-economie/uw-sector/outlook/onderhoud-herstel-verbouw.html (pagina leverde geen leesbare inhoud op bij fetch)
- Van Bruggen Adviesgroep, "Huiseigenaren kiezen steeds vaker voor verbouwen in plaats van verhuizen", 4 juli 2025 — https://www.vanbruggen.nl/actueel/nieuws/2025/huiseigenaren-kiezen-steeds-vaker-voor-verbouwen-in-plaats-van-verhuizen
- Van Bruggen, Hypotheekrenteverwachting 2026 — https://www.vanbruggen.nl/hypotheekadvies/actuele-hypotheekrente/hypotheekrente-verwachting
- Van Bruggen, Leennormen 2026 — https://www.vanbruggen.nl/hypotheekadvies/leennormen
- ING, Actuele hypotheekrente juli 2026 — https://www.ing.nl/particulier/hypotheek/actuele-hypotheekrente

**Overheid**
- Rijksoverheid / BZK, "Tussen wensen en wonen — Resultaten van het WoonOnderzoek Nederland 2024", 10 april 2025 (n=41.000+) — https://www.rijksoverheid.nl/documenten/rapporten/2025/04/10/kernpublicatie-woon-24
- UWV, "Werkgeversonderzoek 2025: daling moeilijk vervulbare vacatures", 18 februari 2026 — https://www.uwv.nl/assets-kai/files/c50c7c18-584b-4f0f-bd15-818c38b78bc9/werkgeversonderzoek-2025-daling-moeilijk-vervulbare-vacatures-18022026.pdf
- UWV, Krapte op de arbeidsmarkt — https://www.uwv.nl/nl/nieuws-pers-achtergrond/krapte-arbeidsmarkt
- Consumentenbond, "ISDE-subsidie 2026 om te verduurzamen" — https://www.consumentenbond.nl/energiebesparende-maatregelen/investeringssubsidie-duurzame-energie-isde
- a.s.r., "Veranderingen voor wonen en hypotheken in 2026" — https://www.asr.nl/blog/veranderingen-wonen-en-hypotheken-2026

**AI-houding**
- KPMG Nederland, "Nederlanders willen AI mét menselijke controle" — Nationale AI Vertrouwensmonitor, november 2025 (n=1.013, met Ipsos I&O) — https://kpmg.com/nl/nl/over-ons/pers-en-media/persberichten/2025/11/nederlanders-willen-ai-met-menselijke-controle.html
- KPMG, Nationale AI Vertrouwensmonitor (overzichtspagina) — https://kpmg.com/nl/nl/home/topics/digital-transformation/artificial-intelligence/algoritme-vertrouwensmonitor.html
- Nederland Digitaal, "Nederlanders gebruiken meer AI, maar vertrouwen het minder", 28 april 2026 — https://www.nederlanddigitaal.nl/actueel/nieuws/2026/04/28/nederlanders-gebruiken-meer-ai-maar-vertrouwen-het-minder
- Nederland Digitaal, "AI Barometer toont meer gebruik, maar wantrouwen blijft", 12 januari 2026 — https://www.nederlanddigitaal.nl/actueel/nieuws/2026/01/12/ai-barometer-toont-meer-gebruik-maar-wantrouwen-blijft

**Branche (lagere zekerheid — commercieel of vakblad)**
- BNI (Beroepsvereniging Nederlandse Interieurarchitecten), "Over de BNI" — ruim 400 leden — https://bni.nl/home/over-de-bni/
- De Interieur Club, "Cijfers en feiten over de interieurbranche", 2025/2026 — https://www.deinterieurclub.com/post/cijfers-en-feiten-over-de-interieurbranche
- De Interieur Club, Interieur AI Lab — https://www.deinterieurclub.com/interieur-ai-lab
- Firmfocus, Branchecijfers Architecten (SBI 7111) — https://www.firmfocus.biz/NL/BI/branche/architecten
- Firmfocus, Branchecijfers Interieurarchitecten (SBI 71112) — https://www.firmfocus.biz/NL/BI/branche/interieurarchitecten-71112
- Retail Insiders, Woninginrichting — https://www.retailinsiders.nl/branches/woninginrichting/gemengde-woonzaken/
- Homedeal, "Kosten verbouwing: wat kost een verbouwing per ruimte in 2026?" — https://www.homedeal.nl/verbouwing/verbouwing-kosten/
- NOS, "Meer buitenlanders kopen woning in Nederland, bijna verdubbeling in vijf jaar", 2025 (o.b.v. NVM) — https://nos.nl/artikel/2582978-meer-buitenlanders-kopen-woning-in-nederland-bijna-verdubbeling-in-vijf-jaar
- Chiela, "Hoe zoeken mensen een interieurontwerper en hoe speel je daar op in?" — https://chiela.nl/hoe-zoeken-mensen-een-interieurontwerper-en-hoe-speel-je-daar-op-in/
- SocialPilot, "Social Media for Interior Designers: Complete Platform Guide 2026" — https://www.socialpilot.co/blog/social-media-for-interior-designers
- Houzz, "2025 U.S. Houzz & Home Renovation Trends" (VS — niet representatief voor NL) — https://www.houzz.com/magazine/2025-u-s-houzz-and-home-renovation-trends-stsetivw-vs~181188659
- SlimBieden, "Overbieden in Amsterdam (2026) – Cijfers & Strategie" — https://www.slimbieden.nl/overbieden-amsterdam
- Adventus, "Overbieden in Amsterdam in 2026" — https://adventus.nl/overbieden-in-amsterdam-in-2026/
- iamexpat.nl, "Renovating your Dutch home: A practical guide for expats" — https://www.iamexpat.nl/housing/property-news/a-practical-guide-renovating-your-dutch-home

### Wat ik heb gezocht en níet gevonden
Expliciet vermeld, omdat de afwezigheid zelf informatie is:
- **Prijsklasseverdeling van transacties per gemeente.** Publiceert noch CBS noch Kadaster openbaar. Vandaar de lognormale schatting in §1.3.
- **Nederlands onderzoek naar de bestedingsverdeling binnen een verbouwbudget** (constructie/keuken+bad/interieur/ontwerp). Bestaat niet openbaar. §2.3 is daarom de zwakste sectie.
- **Nederlands onderzoek naar het aandeel verbouwers dat een ontwerpprofessional inhuurt.** Bestaat niet. Dit is STAP 4 van de trechter — het gevoeligste getal in dit rapport.
- **Nederlands consumentenonderzoek naar acceptatie van AI in interieurontwerp specifiek.** Bestaat niet; §5 leunt op algemene AI-houding (CBS/KPMG) als proxy.
- **Officiële telling van expats in Amsterdam.** Alleen journalistieke schattingen (80.000–110.000).
- **Tariefrichtlijnen van de BNI voor interieurarchitecten.** Niet openbaar gepubliceerd.
