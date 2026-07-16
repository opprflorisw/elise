# Studio Verstelle — juridische, fiscale en administratieve opzet

> Onderzoeksnotitie. Peildatum: **16 juli 2026**. Alle bedragen zijn 2026-cijfers tenzij anders vermeld.
> Uitgangssituatie: Elise, Amsterdam, start **parttime naast een dienstverband**, groeipad ~€50k → €250k omzet.
> Diensten: interieurontwerp, verbouwbegeleiding, ontwikkeladvies. Kernmethode: **opnemen van klantgesprekken + AI-verwerking**.
>
> Notatie: elke claim heeft een bron + zekerheidsniveau `[zeker: hoog|middel|laag]`. Eigen berekeningen/inschattingen zijn gemarkeerd `[schatting]`.
> Dit is onderzoek, geen fiscaal of juridisch advies. De drie punten die écht een professional verdienen staan onder *Wat hiertegen pleit*.

---

## 1. Rechtsvorm: eenmanszaak vs. BV

### 1.1 De 2026-cijfers (geverifieerd)

| Post | 2026 | Bron | Zekerheid |
|---|---|---|---|
| Zelfstandigenaftrek | **€1.200** (was €2.470 in 2025; wordt €900 in 2027) | [Belastingdienst — Zelfstandigenaftrek 2026](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/ondernemersaftrek-2026/zelfstandigenaftrek-2026), 16-07-2026 | [zeker: hoog] |
| Startersaftrek | **€2.123** (bovenop zelfstandigenaftrek; max 3× in eerste 5 jaar) | idem | [zeker: hoog] |
| MKB-winstvrijstelling | **12,70%** van de winst ná ondernemersaftrek | [Belastingdienst — Mkb-winstvrijstelling 2026](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/mkb-winstvrijstelling-2026), 16-07-2026 | [zeker: hoog] |
| **Aftrekbeperking** | Voordeel van ondernemersaftrek + MKB-vrijstelling wordt berekend tegen **max. 37,56%** | idem | [zeker: hoog] |
| Urencriterium | **1.225 uur** per kalenderjaar | [Belastingdienst — Urencriterium](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/voorwaarden_urencriterium), 16-07-2026 | [zeker: hoog] |
| Box 1 schijf 1 | tot **€38.883** → **35,75%** | [KVK — Belastingtarieven 2026](https://www.kvk.nl/geldzaken/belastingtarieven-2026/), 16-07-2026 | [zeker: hoog] |
| Box 1 schijf 2 | €38.883 – **€78.426** → **37,56%** | idem | [zeker: hoog] |
| Box 1 schijf 3 | vanaf €78.426 → **49,50%** | idem | [zeker: hoog] |
| Vennootschapsbelasting | tot €200.000 → **19%**; daarboven **25,8%** | idem + [Belastingdienst — Tarieven Vpb](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/vennootschapsbelasting/tarieven_vennootschapsbelasting), 16-07-2026 | [zeker: hoog] |
| Box 2 | tot **€68.843** → **24,5%**; daarboven **31%** | [KVK](https://www.kvk.nl/geldzaken/belastingtarieven-2026/), 16-07-2026 | [zeker: hoog] |
| Gebruikelijk loon DGA | **€58.000** (was €56.000) | idem | [zeker: hoog] |
| Algemene heffingskorting | max **€3.115** | idem | [zeker: hoog] |
| Arbeidskorting | max **€5.685** | idem | [zeker: middel] — een andere bron noemt €5.712; verschil is marginaal |

> **Let op de aftrekbeperking.** Dit is het onderbelichte punt. In 2026 leveren de zelfstandigenaftrek én de MKB-winstvrijstelling maximaal 37,56% op — óók als je marginaal 49,5% betaalt. Bij hoge winst is de MKB-vrijstelling dus ~12% minder waard dan je op het eerste gezicht zou rekenen. [zeker: hoog]

### 1.2 Wat het urencriterium in 2026 nog waard is — de rekensom

Dit is de belangrijkste en meest contra-intuïtieve uitkomst van dit onderzoek.

De aftrekposten verlagen je belastbare winst. Maar over het afgetrokken bedrag pas je géén MKB-vrijstelling meer toe, dus het netto-effect is `aftrek × (1 − 12,7%) × marginaal tarief (max 37,56%)`.

**Mét startersaftrek (eerste 3 jaar):**
```
Zelfstandigenaftrek + startersaftrek = €1.200 + €2.123 = €3.323
Netto verlaging belastbare winst      = €3.323 × (1 − 0,127) = €2.901
Belastingvoordeel                     = €2.901 × 37,56%      ≈ €1.090 per jaar
```

**Zónder startersaftrek (vanaf jaar 4):**
```
Zelfstandigenaftrek alleen = €1.200
Netto verlaging            = €1.200 × 0,873 = €1.048
Belastingvoordeel          = €1.048 × 37,56% ≈ €394 per jaar
```
`[schatting]` — eigen berekening op basis van de geverifieerde 2026-cijfers hierboven.

**Conclusie:** het urencriterium (1.225 uur ≈ **24 uur/week** het hele jaar door) is in de starterfase ~**€1.090/jaar** waard en daarna ~**€394/jaar**. Dat is een fundamenteel andere afweging dan een paar jaar geleden (in 2022 was de zelfstandigenaftrek nog €6.310 — [dezaak.nl](https://www.dezaak.nl/financien/belastingen/zo-profiteer-je-van-de-zelfstandigenaftrek/), 16-07-2026, [zeker: middel]).

> **Implicatie voor Elise:** je hoeft je parttime start *niet* te verwringen om 1.225 uur te halen. €394/jaar is geen reden om je uren te forceren — en zeker geen reden om een urenregistratie te vervalsen (dat is fraude). De **MKB-winstvrijstelling van 12,7% krijg je sowieso, ook zónder urencriterium** — dat is verreweg de grootste aftrekpost en die is *niet* aan het urencriterium gekoppeld. [zeker: hoog — [Belastingdienst mkb-winstvrijstelling](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/mkb_winstvrijstelling)]

### 1.3 Urencriterium naast loondienst — het grensurencriterium

Twee eisen, cumulatief:
1. **≥ 1.225 uur** aan de onderneming, én
2. **het "grotendeelscriterium"**: méér dan 50% van je totale werktijd moet naar de onderneming gaan.
   [Rabobank — Het urencriterium](https://www.rabobank.nl/bedrijven/eigen-bedrijf-starten/belasting/het-urencriterium-hoe-zit-dat), 16-07-2026, [zeker: hoog]

**Dit is de kern van het probleem bij een parttime start.** Werk je 3 dagen (24 uur) in loondienst, dan zou je >24 uur/week aan de studio moeten besteden om aan het grotendeelscriterium te voldoen — praktisch onhaalbaar naast een baan.

**De startersuitzondering redt dit gedeeltelijk:** in de eerste 5 jaar geldt het grotendeelscriterium **niet**, als je in minstens 1 van de 5 voorafgaande jaren geen ondernemer was. Je hoeft dan alleen nog de 1.225 uur te halen. [KVK — De magische 1.225 uur](https://www.kvk.nl/starten/de-magische-1225-uur-alles-over-het-urencriterium/), 16-07-2026, [zeker: hoog]

**Praktisch:** 1.225 uur ≈ 24 uur/week × 51 weken. Naast een baan van 3 dagen is dat ~60 uur/week totaal. Haalbaar? Ja. Verstandig? Voor €1.090/jaar: **nee.** Zie 1.2.

Meetellen mogen: acquisitie, administratie, reistijd, marketing, website, cursussen, offertes — **alle** uren voor de onderneming, niet alleen declarabele. Bewijslast ligt bij Elise; de Belastingdienst kan een urenregistratie opvragen. [Belastingdienst](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/voorwaarden_urencriterium), 16-07-2026, [zeker: hoog]

> **Advies:** houd vanaf dag 1 een simpele urenregistratie bij (Moneybird/Toggl). Kost niets, en als je onverwacht 1.225 haalt pak je de aftrek mee. Maar stuur er niet op.

### 1.4 Scenario A — parttime start (~€50k omzet)

Aanname: omzet €50.000, kosten €10.000 → **winst €40.000**, naast een salaris van €45.000. `[schatting — aannames]`

```
Winst                              €40.000
− zelfstandigenaftrek              −€1.200
− startersaftrek                   −€2.123
                                   ────────
                                   €36.677
− MKB-winstvrijstelling 12,7%      −€4.658
                                   ────────
Belastbare winst                   €32.019
```
Deze €32.019 **stapelt bovenop het salaris van €45.000** → totaal box 1 ≈ €77.019. Dat valt vrijwel volledig in schijf 2 (37,56%).

```
Belasting over de winst ≈ €32.019 × 37,56% ≈ €12.026
Effectieve druk op €40.000 winst          ≈ 30,1%
```
`[schatting]` — exclusief effecten op arbeidskorting-afbouw, die het marginale tarief in de praktijk enkele procentpunten hoger maken.

> **Het stapeleffect is het belangrijkste inzicht hier.** Omdat het salaris de eerste schijf al opvult, wordt élke euro winst belast tegen minimaal 37,56% — niet 35,75%. Reserveer daarom **~35–40% van je winst** voor de aanslag. Doe dit vanaf de eerste factuur op een aparte spaarrekening. De belastingaanslag over jaar 1 komt pas in 2027–2028 en is de klassieke starterskiller. [zeker: hoog]

**BV in deze fase?** Nee. Het gebruikelijk loon van €58.000 is bij €40.000 winst simpelweg niet op te brengen (er zijn afwijkingsmogelijkheden bij verlies/aanloop, maar dat kost adviseurskosten en discussie met de Belastingdienst). Eenmanszaak is hier onbetwist. [zeker: hoog]

### 1.5 Scenario B — het omslagpunt: de arithmetiek

Aanname fulltime: omzet €250.000, kosten €60.000 (verzekeringen, software, onderaannemers, werkplek, marketing, boekhouder) → **winst €190.000**. `[schatting — aannames]`

**Eenmanszaak bij €190.000 winst:**
```
Winst                                    €190.000
− zelfstandigenaftrek                     −€1.200
− MKB-winstvrijstelling 12,7% (€23.978)  −€23.978
                                         ─────────
Belastbare winst                         €164.822

Belasting:
  €38.883        × 35,75%  =  €13.901
  €39.543        × 37,56%  =  €14.852
  €86.396        × 49,50%  =  €42.766
                              ────────
                              €71.519
+ aftrekbeperking-correctie:
  €25.178 × (49,5% − 37,56%) = €3.006
                              ────────
Totaal IB                     €74.525
Heffingskortingen             €0 (volledig afgebouwd)
                              ────────
NETTO                         €115.475   (effectieve druk 39,2%)
```

**BV bij €190.000 winst (alles uitkeren):**
```
DGA-salaris                              €58.000
  Loonbelasting                           €21.081
  − algemene heffingskorting              −€1.240
  − arbeidskorting                        −€4.713
                                         ─────────
  Netto loonbelasting                     €15.128
  Netto salaris                           €42.872

Vpb-grondslag: €190.000 − €58.000 − €3.776 (ZVW wg-heffing 6,51%) = €128.224
  Vpb 19%                                 €24.363
  Winst na Vpb                           €103.861

Dividend €103.861:
  €68.843 × 24,5% = €16.867
  €35.018 × 31,0% = €10.856
                    ────────
  Box 2 totaal      €27.723
  Netto dividend    €76.138

Totaal netto = €42.872 + €76.138        = €119.010
− extra BV-kosten (jaarrekening, Vpb-aangifte) ≈ −€2.500
                                         ─────────
NETTO                                    €116.510
```
`[schatting]` — eigen berekening; heffingskortingen benaderd via de standaard-afbouwpercentages.

**Uitkomst: BV ≈ €116.510 vs. eenmanszaak ≈ €115.475 → verschil ~€1.035 in het voordeel van de BV. Dat is ruis.**

**Tussenpunt — €100.000 winst:**
```
Eenmanszaak: netto ≈ €68.605
BV (alles uitkeren): netto ≈ €63.748
→ eenmanszaak wint met ~€4.857
```
`[schatting]`

### 1.6 Verdict rechtsvorm

| Winst | Advies |
|---|---|
| tot ~€100k | **Eenmanszaak**, duidelijk. BV kost je geld. |
| €100k – €175k | **Eenmanszaak**, tenzij niet-fiscale redenen doorslaggevend zijn. |
| ~€175k – €200k | **Omslagpunt** bij volledige uitkering. Fiscaal een wasdrogerij — beslis op niet-fiscale gronden. |
| >€200k, of winst blijft in de zaak | **BV** wordt structureel gunstiger. |

**Het omslagpunt bij volledige uitkering ligt volgens deze berekening rond €175k–€200k winst** `[schatting]` — dus ruwweg bij €230k–€260k omzet. Dat is precies aan het einde van Elise's groeipad.

> **Belangrijke nuance — mijn cijfer wijkt af van wat je online leest.** Veelgelezen bronnen noemen een omslagpunt van €90.000–€150.000 ([Sarabel](https://www.sarabeladministratie.nl/kennisbank/omslagpunt-eenmanszaak-bv-2026), [Finny](https://finny-accountant.nl/eenmanszaak-of-bv-2026/), 16-07-2026, [zeker: laag]). Mijn berekening komt hoger uit. De verklaring: die bronnen rekenen doorgaans (a) met winstinhouding in de BV in plaats van volledige uitkering — dan wordt box 2 uitgesteld en wint de BV eerder, (b) laten de arbeidskorting over winst uit onderneming weg, of (c) rekenen met een lager DGA-salaris. **Als Elise winst in de BV laat staan (bijv. om te herinvesteren of een pand te kopen), verschuift het omslagpunt naar ~€100k.** Laat dit doorrekenen door een fiscalist vóór de omzetting — het is een beslissing van enkele duizenden euro's per jaar en mijn cijfers zijn een model, geen advies. [zeker: laag → dit expliciet laten toetsen]

**Niet-fiscale redenen die eerder voor een BV pleiten:**
- **Aansprakelijkheid.** Bij verbouwbegeleiding kan een ontwerpfout tot zeer hoge schade leiden. In een eenmanszaak is er geen scheiding tussen privé- en zakelijk vermogen: een claim boven je verzekerde som raakt je huis en spaargeld. **Dit is bij Elise's dienstverlening een serieus argument — de BAV blijft echter de eerste verdedigingslinie, ook mét een BV.** [zeker: hoog]
- **Uitstraling** richting ontwikkelaars/investeerders (pijler 2: ontwikkeladvies). Professionele opdrachtgevers contracteren liever met een BV. [zeker: middel]
- **Groei met personeel**, of het aantrekken van een compagnon.
- **Winst reserveren** voor investeringen.

> **Praktisch advies:** start als eenmanszaak. Herbeoordeel bij structureel >€150k winst. Een eenmanszaak kan later **geruisloos of ruisend** worden ingebracht in een BV — je zit niet vast. [zeker: middel]

---

## 2. KvK-inschrijving

| Item | Detail | Bron | Zekerheid |
|---|---|---|---|
| Kosten inschrijving | **€85,15** eenmalig, geen jaarlijkse kosten | [ZZP Kompas](https://zzp-kompas.nl/kvk-inschrijven-kosten/) / [Finom](https://finom.co/nl-nl/blog/kosten-kvk-inschrijving/), 16-07-2026 | [zeker: middel] — verifieer op kvk.nl bij afspraak |
| Gewaarmerkt uittreksel | €9,60 | idem | [zeker: middel] |
| Betaling | Pin op kantoor, geen contant geld | idem | [zeker: middel] |
| Aftrekbaar? | Ja — aanloopkosten, zakelijk aftrekbaar | idem | [zeker: hoog] |
| Termijn | Inschrijven kan vanaf 1 week vóór tot 1 week ná de start | [Ondernemersplein](https://ondernemersplein.overheid.nl/bedrijf-starten/inschrijven-bij-kvk/inschrijven-bij-kvk/), 16-07-2026 | [zeker: middel] |
| Btw-id | Krijg je automatisch van de Belastingdienst, meestal direct/binnen 2 weken na KvK-inschrijving | idem | [zeker: middel] |

### SBI-codes

Je mag **meerdere** SBI-codes registreren; de eerste is de hoofdactiviteit. [zeker: hoog]

| SBI | Omschrijving | Rol voor Studio Verstelle |
|---|---|---|
| **71112** | **Interieurarchitecten** | **Hoofdcode.** Dekt precies de positionering (interieurarchitectuur, ruimtelijk ontwerp). [BoldData](https://bolddata.nl/nl/sbi-code/sbi-code-71112/), 16-07-2026, [zeker: hoog] |
| **71111** | Architecten (bouwkunde) | Alleen als ze structureel bouwkundig ontwerp doet. Let op: de **titel "architect" is wettelijk beschermd** (Wet op de architectentitel) — zonder inschrijving in het architectenregister mag je jezelf geen architect noemen. "Interieurarchitect" is óók een beschermde titel. Zie waarschuwing hieronder. [zeker: middel] |
| **71121** | Ingenieurs en overig technisch ontwerp en advies | Past bij **verbouwbegeleiding / directievoering**. [zeker: middel] |
| **74103** | Interieur- en ruimtelijk ontwerp | Alternatief/aanvullend op 71112. [zeker: middel] |
| **7022** | Organisatie-advies | Past bij **ontwikkeladvies** (pijler 2). [zeker: laag] |

> ⚠️ **Titelbescherming — actiepunt voor Elise.** "Interieurarchitect" is een **wettelijk beschermde titel** onder de Wet op de architectentitel. Je mag die titel alleen voeren als je bent ingeschreven in het architectenregister van het Bureau Architectenregister (BA). De SBI-code 71112 heet weliswaar "interieurarchitecten", maar **een SBI-code geeft je géén recht op de titel.** Gezien de positionering in `elise.md` ("Interior Architecture Studio", "architectonische woningtransformatie") is dit een reëel risico. [zeker: middel — **laten verifiëren bij architectenregister.nl**]
>
> **Workaround die vrijwel iedereen gebruikt:** de Engelse termen ("interior architecture", "interior designer", "design studio") en omschrijvingen als "interieurontwerp" / "ruimtelijk ontwerp" zijn **niet** beschermd. De beschermde titel is specifiek het Nederlandse woord "interieurarchitect". Dit is precies waarom Elise's voorkeur voor "Interior Architecture Studio" (uit `elise.md`) fiscaal én juridisch handig uitpakt. Verifieer dit wel. [zeker: laag]

**Handelsnaam.** Inschrijving bij de KvK geeft je een handelsnaamrecht, maar dat is **niet** hetzelfde als een merkrecht (zie §9). Check vóór inschrijving het KvK-handelsregister én het BOIP-merkenregister op "Verstelle". [zeker: hoog]

---

## 3. BTW

### 3.1 Tarief: 21% op alles

| Dienst | Tarief |
|---|---|
| Interieurontwerp | **21%** |
| Verbouwbegeleiding / directievoering | **21%** |
| Ontwikkeladvies | **21%** |

**Dit vraagt uitleg, want er circuleert veel verouderde informatie.**

Het **verlaagde 9%-tarief** voor werkzaamheden aan woningen geldt volgens de Belastingdienst uitsluitend voor: **isoleren, schilderen, stukadoren en behangen** van woningen ouder dan 2 jaar, plus **schoonmaken** (zonder leeftijdseis). Architecten, ontwerp en bouwbegeleiding worden op die pagina **nergens genoemd**. [Belastingdienst — Btw-tarief werkzaamheden aan woningen](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/werkzaamheden_aan_woningen/werkzaamheden_aan_woningen), geraadpleegd 16-07-2026, [zeker: hoog]

Waar de verwarring vandaan komt: er **was** een goedkeuring van de staatssecretaris van Financiën waarbij het verlaagde tarief gold voor "het ontwerpen en vervaardigen van bouwtekeningen door architecten en dergelijke ondernemers, mits zij tevens de renovatie van de woning begeleiden". Die goedkeuring gold **uitsluitend van 1 maart 2013 tot 1 januari 2015** en is onderdeel van de tijdelijke crisismaatregel die per 1 juli 2015 volledig is vervallen. [Taxlive](https://www.taxlive.nl/nl/documenten/nieuws/laag-btw-tarief-ook-voor-tuinonderhoud-en-bouwtekeningen-architecten/) / [beleidsbesluit 28-02-2013 via btwadvies.com](https://www.btwadvies.com/sites/default/files/pub16/Nr.9%20Vraag%20en%20antwoord%20verlaagd%20BTW-tarief%20bouw.pdf), 16-07-2026, [zeker: middel]

> **Conclusie: Studio Verstelle factureert 21% btw over alles.** Zoekresultaten en blogs die 9% of 6% suggereren voor architectendiensten zijn verouderd (6% was het oude lage tarief, vóór 2019). Zet dit niet in je offertes tot een fiscalist het tegendeel bevestigt. [zeker: hoog]

**Wél relevant voor Elise's klanten:** de **aannemer** mag over zijn *arbeidsloon* 9% rekenen voor isoleren/schilderen/stukadoren/behangen bij woningen >2 jaar. Materialen blijven 21%. Dit is een argument dat Elise in gesprekken over budget kan gebruiken — het scheelt de klant echt geld — maar het raakt haar eigen factuur niet. [zeker: hoog]

### 3.2 Aangifte

- **Kwartaalaangifte** is de standaard voor starters, en is voor Elise het juiste ritme. Aangifte + betaling binnen 1 maand na het kwartaal (Q1 → 30 april, etc.). [zeker: hoog]
- Maandaangifte alleen als je structureel terugvraagt (niet van toepassing) of bij hoge afdracht.
- **Reserveer de btw apart.** Btw is nooit jouw geld. Bij €250k omzet gaat er €52.500 btw doorheen — dat is een bedrag waar je bedrijf aan kan overlijden als je het als werkkapitaal gebruikt.

### 3.3 KOR — doen of niet?

De **kleineondernemersregeling**: btw-vrijstelling bij < **€20.000** omzet per jaar. Sinds 2025 moet je omzet óók in het voorafgaande kalenderjaar onder €20.000 blijven. [KVK — KOR gebruiken](https://www.kvk.nl/geldzaken/kleineondernemersregeling-gebruiken/), 16-07-2026, [zeker: hoog]

**Advies: niet doen. De KOR is voor Studio Verstelle schadelijk.** Drie redenen:

1. **De omzetgrens sluit het bedrijfsmodel uit.** Bij een doelomzet van €50k in fase 1 kom je er direct overheen. Overschrijd je €20.000 mid-jaar, dan vervalt de KOR **per direct** en moet je vanaf die transactie btw afdragen — een administratieve nachtmerrie halverwege een project. [zeker: hoog]
2. **Je verliest btw-aftrek op je investeringen.** Precies in de startfase maak je de grootste kosten: laptop, software, camera, verzekeringen, website, meubelmonsters, auto. Bij €15.000 aan startinvesteringen laat je ~€2.600 aan btw-teruggaaf liggen. [zeker: hoog]
3. **Je klanten hebben er niks aan — of last van.** Elise's klanten zijn deels particulieren (die zien alleen een lagere prijs — een klein voordeel) maar deels **ontwikkelaars, investeerders en hospitality** (pijler 2). Die zijn btw-plichtig en **rekenen btw gewoon door**; voor hen is jouw btw kostenneutraal. Erger: een leverancier zonder btw-nummer oogt bij professionele opdrachtgevers als een hobbyist. Bij een studio die zich positioneert op high-end herenhuizen van €500k–€2M is dat een positioneringsprobleem, geen fiscaal probleem. [zeker: middel]

> **Verdict: geen KOR. Gewoon btw-plichtig vanaf dag 1, kwartaalaangifte.** Positieve bijvangst: de btw-teruggaaf op je startinvesteringen is in jaar 1 feitelijk een rentevrije subsidie op je opstartkosten.

---

## 4. Starten naast loondienst

### 4.1 Nevenwerkzaamhedenbeding — is het nog afdwingbaar?

**Grotendeels niet.** Sinds **1 augustus 2022** geldt **artikel 7:653a BW**, dat artikel 9 van EU-richtlijn 2019/1152 implementeert (Wet transparante en voorspelbare arbeidsvoorwaarden).

De regel: **een verbod op nevenwerkzaamheden is nietig, tenzij de werkgever een objectieve rechtvaardigingsgrond heeft.** [ICTRecht — Art 7:653a BW](https://www.ictrecht.nl/blog/art-7653a-bw-wat-houdt-het-nevenwerkzaamhedenbeding-precies-in), 16-07-2026, [zeker: hoog]

Kernpunten:
- **Onmiddellijke werking**: geldt óók voor arbeidsovereenkomsten die vóór 1-8-2022 zijn gesloten. Een oud contract met een hard verbod is dus grotendeels een dode letter. [Palthe Oberman](https://paltheoberman.nl/werkgever-let-op-artikel-7653a-bw-heeft-onmiddellijke-werking/), 16-07-2026, [zeker: hoog]
- **Bewijslast bij de werkgever.** Hij moet aantonen dat de rechtvaardiging *objectief*, *proportioneel* en *noodzakelijk* is. [zeker: hoog]
- **De rechtvaardiging mag op het moment van beroep worden gegeven** — hij hoeft niet in het contract te staan. Een beding zonder motivering is dus niet automatisch nietig; de werkgever kan de grond later aanvoeren. [Sprengers Advocaten](https://www.sprengersadvocaten.nl/actueel/blog/meer-transparantie-over-het-verbod-op-nevenwerkzaamheden-dekt-artikel-7653a-bw-de-lading/), 16-07-2026, [zeker: middel]
- **Geldige gronden** (niet-limitatief, uit de richtlijn): gezondheid & veiligheid, bescherming van vertrouwelijke bedrijfsinformatie, **vermijden van belangenconflicten**, integriteit van openbare dienst. [zeker: hoog]
- **Benadelingsverbod** (lid 2): de werkgever mag Elise niet benadelen (bijv. promotie onthouden) omdat zij zich op dit recht beroept. [zeker: hoog]

**Wat dit voor Elise betekent:** een generiek "geen nevenwerkzaamheden zonder toestemming" is waarschijnlijk niet afdwingbaar. **Maar** — en dit is de reële risicofactor — als haar werkgever in een aanpalende sector zit (architectuur, vastgoed, bouw, interieur), dan is **"vermijden van belangenconflicten" een sterke, kansrijke rechtvaardigingsgrond.** Dan kan het beding wél standhouden.

### 4.2 Concurrentie- en relatiebeding — een ander regime

**Let op: dit is juridisch iets heel anders en veel steviger.** Art. 7:653a BW gaat over *nevenwerkzaamheden tijdens dienstverband*. Een **concurrentiebeding** (art. 7:653 BW) en een **relatiebeding** blijven gewoon geldig, mits schriftelijk overeengekomen met een meerderjarige werknemer. Bij een tijdelijk contract is bovendien een schriftelijke motivering van zwaarwegende bedrijfsbelangen vereist. [zeker: hoog]

Een relatiebeding dat verbiedt om klanten/relaties van de werkgever te benaderen kan Elise's **acquisitie** direct raken — juist omdat haar eerste klanten waarschijnlijk uit haar bestaande netwerk komen.

> ⚠️ **PERSOONLIJKE ACTIE VOOR ELISE — dit kan niemand anders voor haar doen.**
> Pak je arbeidsovereenkomst erbij (én het personeelshandboek/de cao, waar dit soort bedingen vaak verstopt zit) en zoek op:
> 1. **nevenwerkzaamheden** — verbod of meldplicht? (een *meldplicht* is toegestaan en blijft gewoon gelden)
> 2. **concurrentiebeding** — reikwijdte, duur, geografisch bereik
> 3. **relatiebeding** — welke relaties, hoe lang
> 4. **geheimhoudingsbeding**
> 5. **IE-/uitvindingenbeding** — claimt je werkgever rechten op werk dat je in eigen tijd maakt? Dit is een onderschat risico voor een ontwerper.
>
> **Aanbevolen route:** ga niet in de aanval. Meld je plannen **proactief en schriftelijk** bij je werkgever en vraag om schriftelijke toestemming. Het kost je weinig, en het verschil tussen "ze wist het en zei niets" en "ze deed het stiekem" is bij een eventueel conflict enorm — ook voor je reputatie in een kleine markt. Twijfel je over de reikwijdte: **1 uur arbeidsrecht-advocaat (~€200–€350 excl. btw `[schatting]`) is hier goed besteed geld.** Doe dit vóór je eerste klant, niet erna.

### 4.3 Overige aandachtspunten naast loondienst

- **Ondernemerschap voor de IB**: de Belastingdienst beoordeelt zelfstandigheid, ondernemersrisico, aantal opdrachtgevers, investeringen, streven naar winst. Bij een parttime start met 1–2 opdrachtgevers kan de Belastingdienst je winst als **"resultaat uit overige werkzaamheden" (ROW)** aanmerken in plaats van winst uit onderneming. Dan verlies je de MKB-winstvrijstelling. **Meerdere opdrachtgevers in jaar 1 is dus ook fiscaal van belang.** [zeker: middel]
- **Wet DBA / handhaving schijnzelfstandigheid**: sinds 1-1-2025 handhaaft de Belastingdienst weer actief. Voor Elise's model (projectmatig, eigen ontwerp, eigen materiaal, meerdere klanten) is dit een klein risico — mits ze niet feitelijk als quasi-werknemer bij één ontwikkelaar zit. [zeker: middel]
- **Ziektewet/WIA-dekking** loopt via de loondienst zolang die er is. **Dat is precies de reden om de AOV-beslissing (§5) uit te stellen tot vlak vóór de overstap naar fulltime — maar niet langer.**
- **Pensioen**: je bouwt via je werkgever nog pensioen op. Bij fulltime overstap valt dat weg. Fiscaal kun je dan via de **jaarruimte** in een lijfrente storten. [zeker: hoog]

---

## 5. Verzekeringen

### 5.1 Overzicht met premie-indicaties

| Verzekering | Premie-indicatie | Dekking | Prioriteit | Bron |
|---|---|---|---|---|
| **Beroepsaansprakelijkheid (BAV)** | **vanaf €355/jr** (bij €250k verzekerd per aanspraak); **vanaf €35,50/mnd (≈€426/jr)** bij Insify; realistisch **€500–€900/jr** voor deze dienstverlening | Vermogensschade door ontwerpfouten, verkeerd advies | **KRITIEK** | [Bavspecialist](https://www.bavspecialist.nl/voor-wie-is-een-bav/beroep/interieurarchitect) / [Insify](https://www.insify.nl/verzekering/interieur-architect/), 16-07-2026, [zeker: middel] |
| **Bedrijfsaansprakelijkheid (AVB)** | **vanaf €7,95/mnd (≈€95/jr)**; range **€100–€400/jr** | Zaak- en letselschade aan derden (je stoot een vaas om, iemand struikelt over je meetlint) | Must | [Insify](https://www.insify.nl/bedrijfsaansprakelijkheidverzekering-avb/kosten/) / [VEZA](https://www.vezaverzekeringen.nl/artikelen/wat-kost-een-bedrijfsaansprakelijkheidsverzekering), 16-07-2026, [zeker: middel] |
| **Rechtsbijstand zakelijk** | **€15–€50/mnd (€180–€600/jr)**; vaak vanaf ~€350/jr | Incasso, contractconflicten, conflict met aannemer | Should | [ikwordzzper](https://www.ikwordzzper.nl/zzp-kennisbank/verzekeringen/wat-kosten-verzekeringen-voor-zzp-ers/), 16-07-2026, [zeker: middel] |
| **AOV** | **€50–€200/mnd** bij lange wachttijd; **~€350/mnd** bij korte wachttijd/ruime dekking; indicatie €140/mnd bij lange wachttijd | Inkomen bij arbeidsongeschiktheid | Bij fulltime: **KRITIEK** | [keuze.nl](https://www.keuze.nl/zzp/aov-kosten) / [Expert-Zoom](https://expert-zoom.com/nl/magazine/financiele-planning/arbeidsongeschiktheidsverzekering-zzp-2026-aov-versus-inkomensverzekering-vergelijken), 16-07-2026, [zeker: laag] |
| **Broodfonds** | **€225 eenmalig** inschrijving + **€12,50/mnd** contributie + zelfgekozen inleg (enkele tientallen tot €100+/mnd) | Max **2 jaar** schenkingen bij ziekte | Alternatief/aanvulling | [Broodfonds.nl — Kosten](https://www.broodfonds.nl/hoe_het_werkt/kosten), 16-07-2026, [zeker: hoog] |

**Fase 1 totaal verzekeringen (parttime, nog in loondienst): ~€600–€1.100/jaar** (BAV + AVB, evt. rechtsbijstand). `[schatting]`

### 5.2 De BAV is bij Elise geen luxe — dit is het risico dat de studio kan doden

Dit verdient nadruk omdat het bij ontwerpstudio's structureel wordt onderschat.

**Het scenario:** Elise adviseert een draagmuur te verwijderen, of maakt een fout in een maatvoering, of adviseert een materiaal dat in een natte ruimte faalt. De aannemer bouwt het. Zes maanden later moet het eruit. De schade is niet haar honorarium van €15.000 — de schade is de **verbouwing van €200.000 die opnieuw moet.** Dat is **zuivere vermogensschade**, en die is *alleen* gedekt onder een **BAV**, niet onder een AVB.

Zonder BAV en zonder BV betekent zo'n claim: je huis en je spaargeld. Dit is de belangrijkste reden waarom §6 (algemene voorwaarden met aansprakelijkheidsbeperking) en §5 (BAV) **samen** moeten worden geregeld — de een zonder de ander is een half dak.

**Let op bij het afsluiten:**
- **Sluit de dekking aan op je algemene voorwaarden.** Als je DNR2025 hanteert met een aansprakelijkheidslimiet, moet je verzekeraar die voorwaarden accepteren. Er bestaat een speciale **Raampolis Beroepsaansprakelijkheid** voor architecten/adviesbureaus die is afgestemd op de DNR. [Honig & Honig](https://www.honigenhonig.nl/raampolis-beroepsaansprakelijkheidsverzekering-architecten-advies-en-ingenieursbureaus), 16-07-2026, [zeker: middel]
- **Claims-made vs. loss-occurrence**: vrijwel alle BAV's zijn *claims-made* — gedekt is de claim die tíjdens de looptijd wordt gemeld. Stop je met de studio, dan heb je **uitloopdekking** (na-risico) nodig, vaak 3–5 jaar. Vraag hier expliciet naar; het wordt zelden uit zichzelf aangeboden.
- **Verzekerde som**: €250.000 is de instap, maar bij verbouwingen van €200k+ aan woningen van €500k–€2M is **€500.000–€1.000.000 realistischer.** De DNR2025/DNR2011 gaat standaard uit van een keuze tussen €1.000.000 en €2.500.000 (zie §6). Stem dit af. [zeker: middel]
- **Meld je opnames/AI-methode.** Een cyberincident met opnamebestanden is een reëel risico; DNR2025 sluit cyberschade deels uit (zie §6). Overweeg een **cyberverzekering** (~€150–€400/jr `[schatting]`) zodra er structureel audio van klanten wordt opgeslagen.

### 5.3 AOV vs. broodfonds — en de BAZ die eraan komt

**Zolang Elise in loondienst is, is een AOV grotendeels overbodig** — ze is via haar werkgever gedekt door de Ziektewet/WIA. Dit is een van de weinige echte voordelen van de parttime start: je stelt de duurste post uit.

**Bij de overstap naar fulltime wordt dit meteen de grootste vaste last.** Een AOV van €200/mnd = €2.400/jaar is normaal; bij ruime dekking loopt het naar €350/mnd = €4.200/jaar.

| | AOV | Broodfonds |
|---|---|---|
| Duur uitkering | Tot eindleeftijd (bijv. 67/68) | **Max. 2 jaar** |
| Kosten | €50–€350/mnd | €12,50/mnd + inleg (~€50–€100/mnd) |
| Karakter | Verzekering, juridisch afdwingbaar | Schenkkring, **geen** juridisch recht op uitkering |
| Acceptatie | Medische keuring | Geen keuring |
| Groep | n.v.t. | Min. 20, max. ~50 deelnemers |

**De essentiële nuance:** een broodfonds is **geen vervanging** voor een AOV — het stopt na 2 jaar, precies op het moment dat langdurige arbeidsongeschiktheid écht financieel verwoestend wordt. [keuze.nl — Broodfonds of AOV](https://www.keuze.nl/zzp/broodfonds-of-aov), 16-07-2026, [zeker: hoog]

> **De slimme combinatie:** **Broodfonds** (dekt jaar 1–2, goedkoop, geen keuring) **+ AOV met lange eigenrisicoperiode van 730 dagen** (neemt het daarna over, en is door de lange wachttijd fors goedkoper). Dit is aanzienlijk goedkoper dan een AOV met korte wachttijd en dekt het staartrisico wél af. [zeker: middel]
> Halverwege 2026 zijn er 677 broodfondsen met ~32.000 deelnemers. [Broodfonds.nl](https://www.broodfonds.nl/meest_gestelde_vragen), 16-07-2026, [zeker: middel]

**De BAZ komt — maar niet snel.** Het wetsvoorstel **Basisverzekering Arbeidsongeschiktheid Zelfstandigen** is op **23 maart 2026** naar de Tweede Kamer gestuurd door minister Aartsen. Op 7 april 2026 is het in behandeling genomen; schriftelijke vragenronde liep tot 20 mei 2026. [Tweede Kamer — wetsvoorstel 36912](https://www.tweedekamer.nl/kamerstukken/wetsvoorstellen/detail?qry=wetsvoorstel%3A36912&cfg=wetsvoorsteldetails) / [Rijksoverheid, 13-03-2026](https://www.rijksoverheid.nl/actueel/nieuws/2026/03/13/kabinet-komt-met-betaalbare-basisverzekering-voor-zelfstandigen-bij-arbeidsongeschiktheid), 16-07-2026, [zeker: hoog]

- Verwachte premie: **5,4% van de winst, max. ~€171 bruto/mnd**
- Uitkering: ~70% van inkomen, max. minimumloon; wachttijd ~1 jaar
- **Verwachte invoering: niet vóór 2030** [AOV Kompas](https://aovkompas.nl/blog-verplichte-aov-zzp-baz/), 16-07-2026, [zeker: middel]

> **Wat dit voor de planning betekent:** de BAZ is voor Elise's fulltime-beslissing (waarschijnlijk 2027–2028) **niet relevant** — hij komt te laat. Maar: (a) de dekking is mager (max. minimumloon), dus een aanvullende AOV blijft nodig; (b) reken niet op de BAZ als excuus om de AOV-beslissing uit te stellen. Herbeoordeel dit bij de fulltime-overstap; wetgeving kan schuiven. [zeker: middel]

---

## 6. Algemene voorwaarden

### 6.1 Belangrijke correctie: DNR 2011 is niet meer de actuele versie — het is DNR2025

Op **15 december 2025** hebben **BNA** en **NLingenieurs** samen **DNR2025** gelanceerd — de eerste grondige herziening sinds 2011. [Techniek Nederland](https://www.technieknederland.nl/nieuws/nlingenieurs-en-bna-lanceren-dnr2025) / [Van Doorne — De Nieuwe Regeling 2025](https://www.vandoorne.com/artikelen/de-nieuwe-regeling-2025-een-welkome-modernisering/), 16-07-2026, [zeker: hoog]

**Wat er verandert t.o.v. DNR 2011 (versie 2013):**

| | DNR 2011 (2013) | DNR2025 |
|---|---|---|
| Omvang | 59 artikelen / 38 pagina's | **22 artikelen / 28 pagina's** |
| Vervaltermijnen | Meerdere (art. 16) | **Eén**: 5 jaar na beëindiging/oplevering (art. 14.11), voor professionele opdrachtgevers |
| Schadebegrip | Ruimer | **Verfijnd**: alleen schade die redelijkerwijs toerekenbaar is |
| Uitsluitingen | Beperkt | **+ reputatieschade, gederfde rente, vertragingsschade, cyberschade** (ondanks gebruikelijke preventieve maatregelen) |
| Constructieve veiligheid | — | **Nieuw art. 10** |
| Digitalisering / **AI** / privacy | — | **Nieuw opgenomen** |

[Van Doorne](https://www.vandoorne.com/artikelen/de-nieuwe-regeling-2025-een-welkome-modernisering/) / [BLD Ekelmans](https://www.bld-ekelmans.com/nieuwe-versie-van-de-algemene-voorwaarden-voor-adviseurs-in-de-bouw-de-dnr2025/), 16-07-2026, [zeker: middel]

> **Dat DNR2025 expliciet bepalingen over AI en privacy bevat, is voor Studio Verstelle direct relevant** — het is de enige branchevoorwaardenset die de AI-methode juridisch al adresseert. Lees art. over digitalisering/AI vóór je hem hanteert; het kan zijn dat er meld- of instemmingsverplichtingen in staan die je consentflow (§7) raken. [zeker: laag — **de hoofdtekst zelf nog niet doorgenomen; doen vóór gebruik**]
> Hoofddocument (PDF): [BNA-NLingenieurs DNR2025 Hoofddocument](https://www.nlingenieurs.nl/assets/Documenten/3f2504e0-4f89-11d3-9a0c-0305e82c3301a9f7c2exQp8/BNA-NLingenieurs_5997-DNR2025-Hoofddocument.pdf) · [Toelichting](https://www.nlingenieurs.nl/assets/Documenten/3f2504e0-4f89-11d3-9a0c-0305e82c3301a9f7c2exQp8/BNA-NLingenieurs_5997-DNR2025-Toelichting.pdf)

### 6.2 De drie opties vergeleken

| | **DNR2025** | **BNO-voorwaarden** | **BNI** |
|---|---|---|---|
| Voor wie | Adviseurs in de bouw: architecten, ingenieurs, **interieurarchitecten** | Ontwerpers (grafisch, ruimtelijk, industrieel) | Interieurarchitecten (BNI verwijst zelf naar DNR2025) |
| Aansprakelijkheid | Beperkt tot **€1.000.000 of €2.500.000** — partijen kiezen bij aanvang | Beperkt tot **het honorarium** | Volgt DNR |
| Bouwfase / directievoering | **Ja, volledig geregeld** | Nee | Via DNR |
| Complexiteit | Middel (22 art.) | Laag | — |
| Herkenbaarheid bij aannemers/opdrachtgevers | **Zeer hoog** — de standaard in de bouw | Laag in de bouwkolom | Middel |

Onder **DNR 2011** was de aansprakelijkheid in beginsel beperkt tot **het bedrag van de advieskosten** (art. 15 lid 2), met een keuze tussen €1.000.000 of €2.500.000 als bovengrens. [Flipse Izeboud](https://www.flipse-izeboud.nl/dnr-2011/), 16-07-2026, [zeker: middel]

De **BNO-voorwaarden** beperken aansprakelijkheid tot het honorarium, zijn korter en zijn "in het algemeen beter voor typische ontwerpopdrachten" — maar ze zijn geschreven voor een *ontwerp*, niet voor een *gebouw*. [Vergelijking DNR 2011 vs. AV BNO 2013 (PDF)](https://ruimtedoorruimte.nl/resource/file/normal/3d951b55fcf52d7c66996b8414c90f6a2a5156ef_7246.pdf), 16-07-2026, [zeker: middel]

### 6.3 Advies: DNR2025 als basis

**Waarom DNR2025 en niet BNO:**
1. Elise doet **verbouwbegeleiding**. Dat is precies waar BNO-voorwaarden ophouden en DNR doorgaat: directievoering, oplevering, aanbesteding, meerwerk, waarschuwingsplicht, constructieve veiligheid.
2. **Aannemers en professionele opdrachtgevers kennen de DNR.** Bij pijler 2 (ontwikkeladvies) is dit een gunningsvoorwaarde, geen detail.
3. DNR2025 regelt **AI en privacy** — uniek relevant voor deze studio.
4. Verzekeraars hebben er **kant-en-klare polissen** voor (Raampolis).

**Waar je op moet letten:**

- ⚠️ **Consumenten vs. professionals.** De DNR is geschreven voor professionele opdrachtgevers. Elise's kernklant is een **particulier** (een echtpaar met een herenhuis) = **consument**. Consumenten worden beschermd door de **"grijze en zwarte lijst"** (art. 6:236/6:237 BW): een vergaande aansprakelijkheidsbeperking richting een consument kan **vernietigbaar** zijn. De 5-jaars vervaltermijn in DNR2025 art. 14.11 geldt blijkens de toelichting expliciet voor de **professionele** opdrachtgever. Voor consumenten bestaat de **Consumentenregeling 2013** (BNA). [zeker: middel]
  > **Dit is een reëel gat in de standaardaanpak.** Je hebt waarschijnlijk **twee sets voorwaarden** nodig: DNR2025 voor ontwikkelaars/zakelijke klanten, en een consumentvariant (Consumentenregeling 2013 of een op maat gemaakte set) voor particulieren. **Laat dit door een jurist toetsen** — een aansprakelijkheidsbeperking die in een procedure sneuvelt is erger dan geen beperking, want je hebt erop vertrouwd.
- **Terhandstelling.** Algemene voorwaarden gelden alleen als je ze **vóór of bij het sluiten van de overeenkomst** ter hand stelt (art. 6:233 sub b BW). Een verwijzing "gedeponeerd bij de KvK" is bij consumenten **niet** genoeg. **Stuur de PDF mee met elke offerte** en laat de klant tekenen voor ontvangst. Dit is de goedkoopste juridische maatregel die bestaat en wordt structureel vergeten. [zeker: hoog]
- **Betalingstermijn.** Wettelijk max. **30 dagen** (B2B mag 60 bij expliciete afspraak, mits niet kennelijk onbillijk). Advies voor een startende studio: **14 dagen**, en **werk met voorschotten/termijnen** — nooit meer dan één maand werk onbetaald uitstaan.
- **Meerwerk.** Cruciaal bij verbouwingen. Leg vast: meerwerk **altijd schriftelijk** vooraf akkoord (mail volstaat), met prijs en gevolgen voor planning. Zonder deze clausule wordt élke scopewijziging een discussie. Bij consumenten geldt bovendien art. 7:755 BW: de opdrachtgever hoeft prijsverhoging **niet** te betalen als je hem niet tijdig hebt gewaarschuwd — **de bewijslast van die waarschuwing ligt bij Elise.**
- **Als de aannemer faalt.** Dit is het scenario dat een studio kapotmaakt: de aannemer bouwt slecht, de klant wijst naar Elise. **Leg expliciet vast:** (a) Elise contracteert **niet** met de aannemer — de klant is opdrachtgever van de aannemer, Elise voert alleen directie namens de klant; (b) Elise is **niet aansprakelijk** voor tekortkomingen van de aannemer; (c) Elise heeft een **inspannings**verplichting (toezicht), geen **resultaats**verplichting. Deze drie zinnen zijn het verschil tussen een lastig gesprek en een claim van €200.000. [zeker: hoog]
  > Contracteer **nooit** zelf met de aannemer en factureer **nooit** bouwkosten door — dan word je hoofdaannemer, met resultaatsverplichting en volledige aansprakelijkheid voor het bouwwerk. Dit is de meest voorkomende en duurste fout in dit vak.

**Waar te halen:**
- DNR2025: gratis PDF via [NLingenieurs](https://www.nlingenieurs.nl) / [BNA](https://bna.nl/kennis/dnr/wat-is-dnr/) [zeker: middel]
- BNI-lidmaatschap: **€115** (1e jaar na afstuderen), €225 (2e), €340 (3e), €455 (4e). [BNI — contributie](https://bni.nl/voor-interieurarchitecten/contributie/), 16-07-2026, [zeker: middel] — voor niet-starters gelden andere tarieven; check de site.
- Op maat laten maken: **€500–€1.500** `[schatting]` bij een bouwrecht-jurist. Voor de consumentenvariant is dit waarschijnlijk het geld waard.

---

## 7. AVG/GDPR voor de opgenomen sessies

**Dit is het onderdeel met het grootste juridische risico én het grootste onderscheidend vermogen.** De opnamemethode is Elise's USP; hij is ook het enige onderdeel van haar bedrijf waarvoor de Autoriteit Persoonsgegevens een boete kan opleggen.

### 7.1 Is een opname persoonsgegevens? Ja.

Een gespreksopname is een verwerking van persoonsgegevens: stem is biometrisch identificeerbaar, en de inhoud gaat over de woning, het gezin, de financiën en de smaak van de klant. Bovendien: **een klantgesprek over een woning bevat vrijwel zeker bijzondere persoonsgegevens** — gezondheid ("we willen een slaapkamer beneden vanwege mijn rug"), gezinssamenstelling, soms religie ("een gebedsruimte"), financiële situatie. Dat verhoogt de lat. [zeker: middel]

### 7.2 Grondslag: toestemming of uitvoering overeenkomst?

De AVG kent zes grondslagen. Voor Elise zijn er drie in beeld:

| Grondslag | Bruikbaar? | Analyse |
|---|---|---|
| **Toestemming** (art. 6.1.a) | **Ja — dit is de juiste** | Vereist: vrij, specifiek, geïnformeerd, ondubbelzinnig, intrekbaar, en Elise moet kunnen **bewijzen** dat ze is gegeven |
| **Uitvoering overeenkomst** (art. 6.1.b) | **Nee** | Alleen als de verwerking **noodzakelijk** is voor de overeenkomst. Elise kan haar ontwerp ook maken met aantekeningen. De opname is een *verbetering*, geen *noodzaak*. Deze grondslag houdt geen stand. |
| **Gerechtvaardigd belang** (art. 6.1.f) | **Riskant** | Vereist een belangenafweging. Bij een 2 uur durende opname in iemands **woning** over persoonlijke onderwerpen wint het privacybelang van de klant vrijwel zeker. Niet op bouwen. |

De AP is expliciet dat toestemming **vrij, specifiek, geïnformeerd en ondubbelzinnig** moet zijn, en dat een vaag "dit gesprek kan worden opgenomen" **niet volstaat** — de klant moet een echte keuze hebben. [Autoriteit Persoonsgegevens — Grondslag toestemming](https://www.autoriteitpersoonsgegevens.nl/en/themes/basic-gdpr/gdpr-basics/legal-basis-of-consent), 16-07-2026, [zeker: middel — pagina gaf 403 bij direct ophalen; inhoud via zoekresultaten en secundaire bronnen bevestigd]

> **"One-party consent" bestaat niet in het AVG-domein.** De strafrechtelijke regel (art. 139a Sr) dat je een gesprek waaraan je zélf deelneemt mag opnemen zonder toestemming van de ander, betekent alleen dat je **niet strafbaar** bent. Het zegt **niets** over de AVG. Zodra je de opname **zakelijk verwerkt, opslaat en door AI haalt**, ben je verwerkingsverantwoordelijke en heb je een AVG-grondslag nodig. Deze verwarring is wijdverbreid en gevaarlijk. [zeker: middel]

**Verdict: expliciete, aantoonbare toestemming. Schriftelijk (of aantoonbaar digitaal), vóór de opname begint.**

**De consequentie die je moet accepteren:** toestemming moet **vrij** zijn. Dat betekent dat een klant **nee** moet kunnen zeggen **zonder de dienst te verliezen.** Als Elise zegt "zonder opname kan ik je niet helpen", is de toestemming niet vrij en dus **ongeldig** — en valt de hele juridische basis onder de methode weg. **Er moet dus een werkbaar plan B zijn: gewoon aantekeningen maken.** Dit is de belangrijkste ontwerpbeperking van de hele methode. [zeker: middel]

### 7.3 Verwerkersovereenkomsten (DPA's) en EU-dataresidentie

Elke AI-leverancier die audio of transcript verwerkt is **verwerker**; Elise is **verwerkingsverantwoordelijke**. Een **verwerkersovereenkomst is verplicht** (art. 28 AVG) en moet er zijn **vóór** de eerste verwerking. [Coding Agency — AI en AVG](https://coding.agency/kennisbank/ai-avg-proof-openai-anthropic), 16-07-2026, [zeker: hoog]

**Checklist per leverancier:**
- [ ] DPA getekend (vaak: aanvinken in de accountinstellingen — doe dat, en bewaar de PDF)
- [ ] **EU-dataresidentie** — niet alleen opslag, maar ook **inference**
- [ ] **Zero data retention** / geen training op jouw data
- [ ] Subverwerkerslijst bekend
- [ ] Doorgifte buiten de EU: SCC's aanwezig?

> ⚠️ **De val:** *"Storing call recordings in an EU S3 bucket does not make your voice pipeline compliant if a US-based transcription API processes those files during inference."* [Gladia](https://www.gladia.io/blog/data-residency-for-voice-and-transcription-data-eu-us-and-ai-compliance), 16-07-2026, [zeker: middel]
> Opslag in de EU is **niet** genoeg. De **verwerking** moet in de EU plaatsvinden.

**Opties:**
- **OpenAI**: EU-endpoint `eu.api.openai.com` beschikbaar sinds februari 2025. [Wavect](https://wavect.io/blog/eu-data-residency-ai-apps-2026/), 16-07-2026, [zeker: middel]
- **Azure OpenAI**: expliciete no-training default via Microsoft's DPA, **region pinning** voor dataresidentie, en **modified abuse monitoring** om het 30-daagse retentievenster uit te schakelen (moet je aanvragen). [Meetily](https://meetily.ai/llm-privacy/azure), 16-07-2026, [zeker: middel]
- **Self-hosted Whisper + lokale LLM** (bijv. Ollama): audio verlaat de EU/je eigen infrastructuur nooit. Meeste controle, meeste werk. [Transcribeer.nl](https://transcribeer.nl/blog/avg-en-transcriptie-wat-moet-u-weten), 16-07-2026, [zeker: middel]

> **Aanbeveling: kies bewust voor een EU-verwerkende stack** (Azure OpenAI met region pinning in West-Europa, of self-hosted Whisper). Dit is niet alleen compliance — het is **marketing.** "Uw gesprek wordt in Nederland verwerkt en na 24 maanden gewist" is een zin die vertrouwen wint bij precies het klantsegment dat Elise wil (vermogende professionals die gevoelig zijn over hun privéleven). Maak van de beperking een verkoopargument.

### 7.4 EU-VS-doorgifte: de status in juli 2026 is instabiel

**Dit is de meest actuele en meest onderschatte bevinding van dit onderzoek.**

**Tijdlijn:**
- Sept 2024: het EU-Gerecht wijst de **Latombe**-klacht af; DPF blijft overeind. [IAPP](https://iapp.org/news/a/european-general-court-dismisses-latombe-challenge-upholds-eu-us-data-privacy-framework), [zeker: hoog]
- 31 okt 2025: Latombe gaat in **hoger beroep** — zaak **C-703/25 P** bij het Hof van Justitie. Per mei 2026 nog geen zittingsdatum. [zeker: middel]
- **29 juni 2026**: het **Amerikaanse Supreme Court** oordeelt in **Trump v. Slaughter** (6-3) dat wettelijke beperkingen op de bevoegdheid van de president om FTC-commissarissen te ontslaan **ongrondwettig** zijn. De FTC is daarmee **niet langer onafhankelijk**. [noyb](https://noyb.eu/en/us-supreme-court-just-blew-eu-us-data-transfers) / [activeMind](https://www.activemind.legal/guides/dpf-supreme-court/), 16-07-2026, [zeker: middel]
- **Waarom dit het DPF raakt:** de Europese Commissie beroept zich in het adequaatheidsbesluit **259 keer** op de "onafhankelijke" FTC als toezichthouder. EU-recht eist onafhankelijk toezicht bij doorgifte naar derde landen. Die pijler is nu weg. [noyb](https://noyb.eu/en/us-supreme-court-just-blew-eu-us-data-transfers), 16-07-2026, [zeker: middel]
- noyb heeft de Commissie formeel verzocht het besluit in te trekken en bereidt een vernietigingsprocedure voor.

**Status vandaag (16-07-2026): het DPF is formeel nog geldig.** Het adequaatheidsbesluit blijft van kracht tot de Commissie het intrekt of het Hof het vernietigt. Certificeerde organisaties mogen er nog op vertrouwen. [zeker: hoog]

**Maar:** juristen verwachten een uitspraak/opinie eind 2026 – begin 2027, en gezien Schrems I en II is de kans op vernietiging reëel. [Berkeley Technology Law Journal](https://btlj.org/2026/02/third-times-the-charm-the-fate-of-the-eu-u-s-data-privacy-framework/), 16-07-2026, [zeker: laag]

> **Wat Elise moet doen:** **bouw de opname-pipeline zó dat er geen persoonsgegevens naar de VS gaan.** Niet omdat het vandaag verboden is — dat is het niet — maar omdat een Schrems III je methode van de ene op de andere dag illegaal maakt, midden in een lopend project, met audio die je al hebt. Een EU-only stack is nu een kleine keuze; over een jaar is het mogelijk een dure migratie. **Dit is het beste voorbeeld van een beslissing die nú €0 kost en later €10.000.**

### 7.5 Bewaartermijn

De AVG noemt geen concrete termijnen — je moet zelf een termijn bepalen en **onderbouwen** (opslagbeperking, art. 5.1.e).

**Voorstel** `[schatting — eigen advies, geen wettelijke norm]`:

| Data | Termijn | Onderbouwing |
|---|---|---|
| **Ruwe audio** | **Wissen zodra transcript + extractie gevalideerd zijn — richtlijn: 30 dagen na de sessie** | Audio is de meest indringende vorm (stem = biometrisch, toon, achtergrondgeluid, kinderen). Zodra het transcript er is, is de audio niet meer nodig. Dit is de belangrijkste maatregel: **je grootste risico wordt je kleinste.** |
| **Transcript** | **Duur van het project + 24 maanden** | Nodig voor uitvoering en voor verweer bij klachten |
| **Geëxtraheerde voorkeuren** (het ontwerpdossier) | **Duur van het project + 7 jaar** | Aansluiten bij de fiscale bewaarplicht en de vervaltermijn van DNR2025 (5 jaar, art. 14.11) |
| **Factuur-/projectadministratie** | **7 jaar** | Wettelijke fiscale bewaarplicht |

> **De 30-dagen-audioregel is het krachtigste onderdeel van je hele privacyverhaal.** Hij is makkelijk uit te leggen ("de opname zelf gooien we binnen een maand weg"), technisch triviaal te automatiseren, en hij verkleint je risico bij een datalek drastisch. Automatiseer het met een cronjob — een bewaartermijn die je handmatig moet uitvoeren, wordt niet uitgevoerd.

### 7.6 Verwerkingsregister

**Ja, Elise is verplicht een verwerkingsregister bij te houden** — óók als eenmanszaak zonder personeel.

Art. 30 lid 5 AVG kent een uitzondering voor organisaties met <250 medewerkers, **maar die vervalt** als (a) de verwerking een **risico** inhoudt voor rechten en vrijheden, (b) de verwerking **niet incidenteel** is, of (c) er **bijzondere categorieën** persoonsgegevens worden verwerkt. [Ondernemersplein — Verwerkingsregister opstellen](https://ondernemersplein.overheid.nl/wetten-en-regels/verwerkingsregister-opstellen/) / [Gegevensbeschermingsautoriteit](https://www.gegevensbeschermingsautoriteit.be/professioneel/avg/register-van-verwerkingsactiviteiten/zijn-er-uitzonderingen), 16-07-2026, [zeker: hoog]

**Elise raakt alle drie de uitzonderingen.** Structureel gesprekken opnemen in privéwoningen is per definitie niet-incidenteel, risicovol, en bevat bijzondere gegevens. Register = verplicht.

**Praktisch:** een Excel/Notion-tabel volstaat. Kolommen: verwerkingsdoel, categorieën betrokkenen, categorieën gegevens, ontvangers/verwerkers, doorgifte buiten EU, bewaartermijn, beveiligingsmaatregelen. Tijd: **2–3 uur** eenmalig. Kosten: **€0**.

### 7.7 DPIA — waarschijnlijk verplicht

Een **Data Protection Impact Assessment** is verplicht bij "waarschijnlijk hoog risico" (art. 35 AVG). Indicatoren die hier samenkomen: (a) **systematische en uitgebreide** verwerking, (b) **bijzondere persoonsgegevens**, (c) **innovatieve technologie** (AI), (d) verwerking in de **privésfeer** (de woning). De AP hanteert een lijst waarbij twee of meer criteria een DPIA indiceren.

> **Neem aan dat je er een nodig hebt.** Een DPIA is geen ramp: het is een gestructureerd document (~4–8 uur, of €750–€1.500 bij een privacyjurist `[schatting]`) waarin je het risico beschrijft en je maatregelen benoemt. Het dwingt je bovendien tot precies de keuzes die hierboven staan (EU-stack, 30-dagen-audio, consentflow). Bijkomend voordeel: het is het document waarmee je een zakelijke opdrachtgever overtuigt dat je methode volwassen is. [zeker: middel — **laten toetsen**]

### 7.8 Portretrecht & marketingfoto's van klantwoningen

Twee aparte rechten, die vaak worden verward:

1. **AVG/portretrecht — personen.** Herkenbare personen in beeld = persoonsgegevens. De AP hanteert een duidelijke lijn: gebruik je beeldmateriaal van herkenbare personen voor externe communicatie (website, social media, brochures), dan is **expliciete toestemming vrijwel altijd vereist.** [MaasISO](https://www.maasiso.nl/kennis/blog/avg-beeldmateriaal-toestemming/), 16-07-2026, [zeker: middel]
2. **De woning zelf.** Een interieur zonder personen is geen portret. **Maar**: een herkenbaar interieur + adres + "de woning van familie X" = alsnog persoonsgegevens, en het raakt de privacy van bewoners direct (inbraakrisico, sociale gevoeligheid — juist bij vermogende klanten die niet willen dat hun huis op Instagram staat).

**Cruciaal onderscheid:** toestemming om te **fotograferen** is **niet** hetzelfde als toestemming om te **publiceren**. Dit zijn juridisch twee losse handelingen en dit is de meest gemaakte fout. [Charlotte's Law](https://www.charlotteslaw.nl/over-privacy-de-avg-en-het-portretrecht-voor-fotografen/), 16-07-2026, [zeker: hoog]

**Bij opdrachtfotografie** (Elise huurt een fotograaf) geldt bovendien art. 20 Auteurswet: bij een in opdracht gemaakt portret mag de maker **niet** publiceren zonder toestemming van de geportretteerde. En: **de fotograaf houdt het auteursrecht** tenzij je dat contractueel regelt — zie §8.

> **Regel dit in het contract, niet achteraf.** Neem in de opdrachtbevestiging een **aparte, apart te ondertekenen clausule** op:
> - [ ] Toestemming voor fotografie na oplevering
> - [ ] Toestemming voor publicatie op website/portfolio
> - [ ] Toestemming voor publicatie op social media (Instagram/Pinterest) — **apart aanvinken**
> - [ ] Toestemming voor pers/publicaties (bijv. een interieurtijdschrift) — **apart aanvinken**
> - [ ] Wel/niet vermelden van locatie (stad wel, adres nooit)
> - [ ] Wel/niet vermelden van naam van bewoners (default: **nooit**)
> - [ ] Intrekbaar? (juridisch: ja. Praktisch: leg vast dat reeds gedrukte publicaties niet worden teruggehaald)
>
> **Doe dit bij de start van het project, niet bij oplevering** — bij oplevering heb je geen onderhandelingspositie meer en is de klant moe. Bij een portfolio-gedreven studio zonder portfolio is dit existentieel: **zonder publicatierechten op je eerste 3 projecten heb je over 2 jaar geen website.**
>
> **Overweeg een tegenprestatie:** korting op het honorarium in ruil voor publicatierechten. Dat maakt de toestemming ook aantoonbaar "vrij gegeven" én het is eerlijk — je krijgt er echt iets waardevols voor.

---

## 8. IP: wie is eigenaar van het ontwerp?

### 8.1 De hoofdregel

**Het auteursrecht op het ontwerp blijft bij Elise.** Ook na volledige betaling. Dit is de wettelijke default (art. 1 Auteurswet: de maker heeft het auteursrecht) en wordt bevestigd door de DNR.

Onder **DNR 2011**:
- **Art. 45**: documenten die de adviseur aan de opdrachtgever levert **worden eigendom van de opdrachtgever** en mogen door hem **voor dat project** worden gebruikt — **nadat hij aan zijn financiële verplichtingen heeft voldaan.**
- **Art. 46**: de adviseur heeft het **uitsluitend recht** op openbaarmaking, verwezenlijking en verveelvoudiging van zijn ontwerpen, tekeningen, schetsen, foto's, maquettes en modellen.
- **Art. 48**: de opdrachtgever mag het advies **niet geheel of gedeeltelijk hergebruiken** zonder uitdrukkelijke schriftelijke toestemming.

[DNR 2011 (PDF)](https://buroborgland.nl/wp-content/uploads/2023/04/DNL_DNR-2011_20190913.pdf) / [Dirkzwager — Auteursrecht van de architect](https://www.dirkzwager.nl/kennis/artikelen/auteursrecht-van-de-architect-in-een-project), 16-07-2026, [zeker: middel]

> **Het onderscheid dat alles regelt:** de klant koopt **de drager** (de tekeningen) en **een gebruiksrecht voor dít project, één keer**. Hij koopt **niet het auteursrecht**.

**Praktische gevolgen:**
- De klant mag het ontwerp **één keer realiseren**, op **dat adres**. [zeker: middel]
- De klant mag **niet** hetzelfde ontwerp op zijn tweede woning bouwen, of doorverkopen aan zijn broer, of aan een ontwikkelaar geven om 20× te herhalen. Wil hij dat: **apart honorarium**. Dit is bij pijler 2 (ontwikkeladvies) financieel zeer relevant — een ontwikkelaar die een concept 40× herhaalt, moet daarvoor betalen.
- **Betaling is een opschortende voorwaarde.** Betaalt de klant niet, dan heeft hij **geen gebruiksrecht** — hij mag het ontwerp dan niet (laten) uitvoeren. **Dit is Elise's sterkste incassomiddel** en veel effectiever dan een incassobureau: een klant met een aannemer die maandag begint, betaalt vrijdag. Zet dit expliciet in je voorwaarden én noem het (vriendelijk) in je betalingsherinnering.

### 8.2 Persoonlijkheidsrechten (art. 25 Aw)

Ook als je het auteursrecht zou overdragen, houd je **persoonlijkheidsrechten**: recht op naamsvermelding, en recht je te verzetten tegen **misvorming of aantasting** die je reputatie schaadt. Deze zijn **niet overdraagbaar** (deels wel voor afstand vatbaar). Voor een studio die op signatuur wordt gebouwd, is naamsvermelding het belangrijkste. [zeker: middel]

### 8.3 Wat Elise moet vastleggen

- [ ] **Auteursrecht blijft bij Studio Verstelle** — expliciet, ook al is dat de wettelijke default. Klanten gaan er intuïtief van uit dat ze "het ontwerp kopen".
- [ ] **Gebruiksrecht**: eenmalige realisatie, op het genoemde adres, na volledige betaling.
- [ ] **Portfoliorecht**: Elise mag het werk tonen in portfolio, op de website, op social media en in de pers. **Dit is geen detail — dit is het bedrijfsmodel.** Zie §7.8.
- [ ] **Naamsvermelding** bij publicatie door de klant of door derden (makelaar bij verkoop! — een makelaarsfoto van jouw interieur is gratis marketing, mits je naam erbij staat).
- [ ] **Uitbreiding gebruiksrecht** = apart honorarium (herhaling, tweede locatie, overdracht).
- [ ] **Bij beëindiging/niet-betaling**: geen gebruiksrecht.
- [ ] **Fotografie**: koop bij de fotograaf **expliciet de rechten** (of een ruime licentie incl. social media, pers en sublicentie aan de klant). **Standaard houdt de fotograaf het auteursrecht** en betaal je per gebruik. Dit is een klassieke, dure verrassing bij het eerste tijdschriftinterview. [zeker: hoog]
- [ ] **AI-output**: leg vast dat de door AI gegenereerde extractie/samenvatting onderdeel is van jouw werkproces. Let op: **puur AI-gegenereerd werk zonder menselijke creatieve inbreng is naar huidig inzicht niet auteursrechtelijk beschermd** — Elise's eigen creatieve keuzes zijn wat het ontwerp beschermbaar maakt. Praktisch geen probleem (haar ontwerp is duidelijk menselijk), maar relevant als de AI ooit meer gaat "ontwerpen". [zeker: laag]

---

## 9. Merkregistratie BOIP

### 9.1 Waarom (en waarom een handelsnaam niet genoeg is)

KvK-inschrijving geeft een **handelsnaamrecht**: bescherming tegen verwarringwekkend gebruik, maar alleen in het gebied waar je feitelijk actief bent en alleen voor je handelsnaam. Een **merkrecht** geeft een exclusief recht in de hele Benelux voor de geregistreerde klassen, en beschermt óók je logo en een methodenaam. Voor een studio die op naam en signatuur wordt gebouwd, is dat het verschil tussen een claim kunnen leggen en toekijken. [zeker: hoog]

### 9.2 Kosten (Benelux, via BOIP)

| Post | Bedrag |
|---|---|
| Basistarief, 1 klasse, 10 jaar | **€244** |
| 2e klasse | **+€27** |
| 3e en elke volgende klasse | **+€81** |

[BOIP — Wat kost een merkregistratie](https://support.boip.int/hc/nl/articles/23546410404497-Wat-kost-een-merkregistratie), 16-07-2026, [zeker: middel — BOIP-pagina's gaven 403 bij direct ophalen; cijfers via zoekresultaten en meerdere secundaire bronnen consistent]

**Rekenvoorbeeld Studio Verstelle (klassen 42 + 35 + 20):** €244 + €27 + €81 = **€352** voor 10 jaar. `[schatting]`

### 9.3 Welke klassen?

| Klasse | Inhoud | Nodig? |
|---|---|---|
| **42** | Ontwerpdiensten: **interieurontwerp, architectuur, bouwkundig ontwerp en advies** | **JA — de kernklasse** |
| **35** | Zakelijk advies, marketing, detailhandelsdiensten | **JA** — dekt **ontwikkeladvies** (pijler 2) en toekomstige verkoop/curatie |
| **37** | Bouw, verbouwing, **bouwtoezicht/-begeleiding** | **Overwegen** — dekt verbouwbegeleiding. Let op: kan de indruk wekken dat je aannemer bent (zie §6.3 — dat wil je juist níét) |
| **20** | Meubelen | Later — alleen bij een eigen meubellijn |
| **41** | Opleiding, workshops | Later |

> **Voor een methodenaam** (bijv. de AI-gespreksmethode): registreer die **apart** in klasse 42 (+ eventueel 41 als je hem ooit gaat onderwijzen). Een tweede merk = opnieuw €244+. Overweeg of de methodenaam echt merkwaarde heeft of dat hij beter als beschrijvende dienstnaam kan functioneren — een merk dat je niet gebruikt, vervalt na 5 jaar wegens **non-usus**.

### 9.4 Proces

1. **Vooronderzoek** — *doe dit eerst.* Zoek gratis in het [BOIP-register](https://www.boip.int) en het EUIPO-register op "Verstelle" in klassen 42/35. BOIP toetst bij inschrijving **niet** op oudere merken; ze registreren gewoon en een oudere merkhouder kan je later aanpakken. **Een merk dat je registreert zonder onderzoek geeft schijnzekerheid.** Kosten: €0 zelf, of een officieel BOIP-onderzoek (~€150–€300 `[schatting]`), of via een merkenbureau (all-in €525+ Benelux [Merkenbureau Van Asselt](https://www.merkenbureau-vanasselt.nl/merkregistratie-kosten/), 16-07-2026, [zeker: laag]).
2. **Depot** online via boip.int — ~30 min.
3. **Formele toetsing + publicatie**; **oppositietermijn 2 maanden** waarin derden bezwaar kunnen maken.
4. **Inschrijving** — normale procedure ~**3–4 maanden**; **spoedinschrijving** is mogelijk tegen meerprijs (binnen enkele dagen ingeschreven, maar oppositie blijft mogelijk). [zeker: middel]
5. Geldig **10 jaar**, onbeperkt verlengbaar.

> **Timing:** doe het **vooronderzoek vóór** je de KvK-inschrijving en de domeinnaam vastlegt. Als "Verstelle" al als merk bestaat in klasse 42, wil je dat wéten vóór je briefpapier, logo, website en Instagram-handle eraan hangt. Het depot zelf kan wachten tot de naam definitief is — maar het onderzoek niet.
>
> **Let op:** "Verstelle" lijkt een achternaam. Eigen achternamen zijn registreerbaar als merk, maar bieden een zwakkere bescherming tegen naamgenoten die hun eigen naam te goeder trouw gebruiken. [zeker: laag]

---

## 10. Domeinnamen — geverifieerd op 16-07-2026

| Domein | Status | Details |
|---|---|---|
| **verstelle.nl** | ❌ **BEZET** | Geregistreerd sinds **20-10-2005**. Registrar: **The Registrar Company B.V.** (Spijkerisse). Laatste wijziging: 06-05-2026. Nameservers ns1/ns2.satserver.nl. Resolvt naar **87.236.98.81**. DNSSEC actief. [zeker: hoog — geverifieerd via [SIDN RDAP](https://rdap.sidn.nl/domain/verstelle.nl) + DNS-lookup] |
| **verstelle.com** | ❌ **BEZET** | Niet beschikbaar voor registratie. [zeker: hoog — Vercel domains API] |
| **studioverstelle.nl** | ✅ **VRIJ** | SIDN RDAP geeft **404 = niet geregistreerd**. Geen DNS-record. [zeker: hoog — geverifieerd via [SIDN RDAP](https://rdap.sidn.nl/domain/studioverstelle.nl) + DNS] |
| **studioverstelle.com** | ✅ **VRIJ** | **$11,25/jaar** (≈ €10,50). [zeker: hoog — Vercel domains API] |
| **studioverstelle.eu** | ✅ **VRIJ** | Prijs niet opgegeven; ~€10–€15/jr `[schatting]` |
| **verstelle.studio** | ✅ **VRIJ** | **$21,99/jaar** (≈ €20,50). [zeker: hoog — Vercel domains API] |

> **verstelle.nl is al 20 jaar in handen van een derde.** Het IP (87.236.98.81) en de satserver.nl-nameservers wijzen op een parkeerpagina of een kleine hostingklant — het is dus mogelijk te koop, maar een domein dat sinds 2005 wordt aangehouden en in mei 2026 nog is aangepast, is waarschijnlijk in gebruik of bewust vastgehouden. Reken op een **onderhandeling van honderden tot enkele duizenden euro's** `[schatting]`, en begin er niet aan vóór de merknaam definitief is.

**Advies:**
1. **Registreer vandaag** `studioverstelle.nl` + `studioverstelle.com` (~**€25/jaar** samen). Dit kost minder dan een lunch en de naam ligt vast. **Doe dit vóór je de naam ergens publiek noemt** — domeinnamen worden gesnipet door bots die KvK-registraties en merkdepots monitoren. Dit is de meest urgente actie in dit hele document, puur omdat het risico onomkeerbaar is en de kosten nul.
2. Overweeg `verstelle.studio` als merknaam-domein (past bij "Studio Verstelle" en oogt design-forward).
3. `.nl` als primair (NL-markt, SEO, vertrouwen); `.com` doorverwijzen (expats zijn een doelgroep — zie `elise.md`).
4. Benader de houder van `verstelle.nl` **pas later**, anoniem, en pas als de studio loopt. Zodra "Studio Verstelle" zichtbaar is, gaat de vraagprijs omhoog.
5. **Zet privacy/whois-bescherming aan** bij registratie — anders staat Elise's privéadres publiek in het register.

---

## 11. Accounts- en toolingchecklist met kosten

| Categorie | Optie | Kosten | Advies |
|---|---|---|---|
| **KvK** | Inschrijving eenmanszaak | **€85,15** eenmalig | Must |
| **Belastingdienst** | Btw-id + IB-ondernemerschap | €0 | Automatisch na KvK |
| **Zakelijke bank** | **Knab** | **€7/mnd** excl. btw; eerste 500 transacties gratis | **Beste prijs/kwaliteit voor solo** |
| | **bunq** Easy Business | vanaf **€7,99/mnd** | Beste app, goede boekhoudkoppelingen |
| | **Qonto** | vanaf **€5/mnd** excl. btw | Goedkoopst; subrekeningen, virtuele kaarten |
| | ING / Rabobank / ABN | **€9,50–€10/mnd** + transactiekosten | Alleen als je later financiering wilt |
| | *Bron* | [ZakelijkVooruit](https://www.zakelijkvooruit.nl/zakelijke-bankrekening-zzp/) / [Qonto](https://qonto.com/nl/blog/bedrijfsbeheer/zakelijke-rekening/beste-zakelijke-rekening-voor-zzp) / [Ondernemersland](https://ondernemerland.nl/zakelijke-bankrekening-2026-vergeleken/), 16-07-2026 | [zeker: middel] |
| **Boekhouding** | **Moneybird** | **€15/mnd** (Starter, 20 transacties) · **€28** (Groei, 50) · **€39** (Onbeperkt) — excl. btw; 60 dagen gratis | **Aanrader**: mooiste facturen (past bij het merk), beste UX |
| | **e-Boekhouden** | **€7,95/mnd** (ZZP) · **€13,90/mnd** (ZZP Compleet, incl. facturatie); **15 maanden gratis** voor starters | Goedkoopst; 15 maanden gratis is voor een parttime start uitstekend |
| | *Bron* | [Moneybird prijzen](https://www.moneybird.nl/prijzen/) / [zzp-tools](https://zzp-tools.com/moneybird/) / [SoftwareKiezer](https://softwarekiezer.nl/kenniscentrum/e-boekhouden-kosten-2026-prijzen-alle-nederlandse-pakketten), 16-07-2026 | [zeker: middel] |
| **Boekhouder** | Jaarlijkse IB-aangifte | **€600–€2.500/jr** | Jaar 1: laat minimaal de aangifte doen (~€600–€900 `[schatting]`) |
| **E-mail/office** | **Google Workspace** Business Starter | **€6,80/gebruiker/mnd** (jaarcontract) of **€8,10** (flexibel) | Must — `elise@studioverstelle.nl` |
| | *Bron* | [Google Workspace pricing](https://workspace.google.com/pricing?hl=nl) / [TotalWorkspace](https://totalworkspace.nl/blog/google-workspace-licenties-prijzen-2026), 16-07-2026 | [zeker: middel] |
| **Domeinen** | studioverstelle.nl + .com | **~€25/jr** samen | **Must — vandaag** |
| **Hosting** | **Vercel** Hobby | **€0** | Volstaat voor de site (al live) |
| | Vercel Pro | **$20/gebruiker/mnd** | Pas bij commercieel gebruik/custom domein met teamfeatures |
| | *Bron* | [Vercel pricing](https://vercel.com/pricing), 16-07-2026 | [zeker: hoog] |
| **Agenda/booking** | **Calendly** Free | **€0** (1 event type) | Start hier |
| | Calendly Standard | **€10/mnd** | Bij >1 gesprekstype |
| | *Bron* | [Calendly pricing](https://calendly.com/pricing), 16-07-2026 | [zeker: middel] |
| **Instagram Business** | Account | **€0** | Must — primair kanaal voor dit vak |
| **Pinterest Business** | Account | **€0** | Must — hoge intentie bij interieur |
| **LinkedIn** | Persoonlijk + bedrijfspagina | **€0** | Must voor pijler 2 (ontwikkelaars) |
| | LinkedIn Premium | ~€40/mnd | Later, alleen voor acquisitie pijler 2 |
| **Google Business Profile** | Lokaal profiel | **€0** | Should — "interieurarchitect Amsterdam" |
| **BOIP** | Merk, 2 klassen | **€271** (10 jaar) | Should — na vooronderzoek |
| **Verzekeringen** | BAV + AVB | **€500–€1.100/jr** | **Must vóór eerste klant** |
| | Rechtsbijstand | €180–€600/jr | Should |
| | AOV | €600–€4.200/jr | Bij fulltime |
| **AI-stack** | Azure OpenAI / OpenAI EU | **~€10–€50/mnd** `[schatting]` bij dit volume | Must — EU-region |
| | Transcriptie (Whisper) | ~€0,006/min ≈ **€0,72/uur audio** `[schatting]` | Verwaarloosbaar |
| **Opslag** | Google Drive (in Workspace) | inbegrepen | Let op: EU-residentie configureren |
| **Urenregistratie** | Toggl Free / Moneybird | €0 | Should (urencriterium-bewijs) |

### Kostenoverzicht fase 1 (vóór/rond de eerste klant)

**Eenmalig:**
```
KvK-inschrijving                         €85
Domeinen (.nl + .com, jaar 1)            €25
BOIP-merk (2 klassen, 10 jaar)          €271
Algemene voorwaarden (DNR2025 gratis;
  consumentvariant laten toetsen)   €0–€750  [schatting]
Arbeidsrecht-advies (1 uur)        €200–€350  [schatting]
                                   ──────────
                                   €581 – €1.481
```

**Jaarlijks terugkerend:**
```
BAV + AVB                          €500 – €1.100
Rechtsbijstand (optioneel)           €0 – €600
Zakelijke rekening (Knab)                  €84
Boekhouding (e-Boekhouden: 15 mnd
  gratis → €0 in jaar 1;
  Moneybird Starter: €180)               €0 – €180
Google Workspace                           €82
Domeinen                                   €25
AI-stack                            €120 – €600  [schatting]
Boekhouder (IB-aangifte)            €600 – €900  [schatting]
                                   ──────────────
                                   €1.411 – €3.571
```

> **Totale investering fase 1: ~€2.000 – €5.000 in jaar 1** `[schatting]`, waarvan **~€600–€1.500 vóór de eerste klant** moet zijn geregeld. Vrijwel alles is **btw-aftrekbaar** (dus effectief ~21% goedkoper) **en** aftrekbaar van de winst (nog eens ~37,56%). **Netto-effect: ongeveer de helft.** Dit is geen bedrijf met een hoge instapdrempel — de schaarse resource is Elise's tijd, niet haar geld.

---

## Gefaseerde checklist

**Fasen:** `A` = vóór de eerste klant · `B` = vóór de eerste €10k omzet · `C` = vóór/bij de overstap naar fulltime

| # | Fase | Actie | Waar | Kosten | Doorlooptijd | Prioriteit |
|---|---|---|---|---|---|---|
| 1 | A | **Registreer studioverstelle.nl + studioverstelle.com** — onomkeerbaar risico, nul kosten | TransIP / Vercel / Cloudflare | €25/jr | 5 min | **must** |
| 2 | A | Zet whois-privacy aan (privéadres afschermen) | registrar | €0 | 5 min | must |
| 3 | A | **Lees je arbeidsovereenkomst**: nevenwerkzaamheden, concurrentie-, relatie-, geheimhoudings- en IE-beding | eigen dossier | €0 | 1 uur | **must** |
| 4 | A | **Meld je plannen schriftelijk bij je werkgever; vraag toestemming** | e-mail | €0 | 1 week | **must** |
| 5 | A | Bij twijfel over bedingen: 1 uur arbeidsrecht-advocaat | Amsterdamse arbeidsrechtadvocaat | €200–€350 | 1 week | should |
| 6 | A | **Merkvooronderzoek "Verstelle"** in BOIP + EUIPO, klassen 42/35 | boip.int / euipo.europa.eu | €0 | 1 uur | **must** |
| 7 | A | Check handelsnaam in KvK-handelsregister | kvk.nl | €0 | 15 min | must |
| 8 | A | **Verifieer titelbescherming**: mag je "interieurarchitect" voeren? Zo nee: kies Engelse/onbeschermde termen | architectenregister.nl | €0 | 30 min | **must** |
| 9 | A | **KvK-inschrijving** eenmanszaak, SBI 71112 (+71121, +7022) | KvK-kantoor Amsterdam, op afspraak | €85,15 | 1–2 wkn wachttijd; 30 min afspraak | **must** |
| 10 | A | Btw-id ontvangen + controleren | Belastingdienst (automatisch) | €0 | 1–2 wkn | must |
| 11 | A | **Zakelijke rekening openen** (Knab €7/mnd of Qonto €5/mnd) | knab.nl / qonto.com | €60–€84/jr | 1–3 dagen | **must** |
| 12 | A | **Aparte spaarrekening voor btw + IB** — reserveer 35–40% van elke factuur | zelfde bank | €0 | 10 min | **must** |
| 13 | A | **Beroepsaansprakelijkheidsverzekering (BAV)** afsluiten — min. €500k dekking, afgestemd op DNR2025 | Insify / Bavspecialist / Raampolis via Honig&Honig | €500–€900/jr | 1–3 dagen | **must** |
| 14 | A | **Bedrijfsaansprakelijkheid (AVB)** afsluiten | zelfde verzekeraar | €95–€400/jr | 1 dag | **must** |
| 15 | A | Check bij BAV: claims-made? uitloopdekking? AI/opnames gemeld? | verzekeraar | €0 | 30 min | should |
| 16 | A | **Download DNR2025 + toelichting; lees art. over AI/privacy en aansprakelijkheid** | nlingenieurs.nl / bna.nl | €0 | 3 uur | **must** |
| 17 | A | **Laat een consumentvariant van je voorwaarden toetsen** (grijze/zwarte lijst!) | bouwrecht-jurist | €0–€750 | 1–2 wkn | **must** |
| 18 | A | Bouw offerte-/opdrachtbevestigingstemplate mét: voorwaarden als bijlage, meerwerkclausule, betaaltermijn 14 dgn, IP-clausule, fotografieclausule | zelf / Moneybird | €0 | 4 uur | **must** |
| 19 | A | **Leg vast: je contracteert nooit zelf met de aannemer** — inspanningsverplichting, geen resultaatsverplichting | in voorwaarden | €0 | — | **must** |
| 20 | A | **Ontwerp de AVG-consentflow voor opnames** (zie hieronder) | zelf | €0 | 3 uur | **must** |
| 21 | A | **Kies een EU-only AI-stack** (Azure OpenAI region-pinned W-Europa of self-hosted Whisper) | azure.com | €10–€50/mnd | 1 dag | **must** |
| 22 | A | **Teken DPA's** met élke AI-/opslagleverancier; bewaar de PDF's | per leverancier | €0 | 2 uur | **must** |
| 23 | A | **Verwerkingsregister opstellen** (Excel/Notion) | zelf | €0 | 3 uur | **must** |
| 24 | A | **Privacyverklaring** op de website (opnames expliciet benoemen!) | zelf / template | €0–€250 | 3 uur | **must** |
| 25 | A | Boekhoudsoftware (e-Boekhouden: 15 mnd gratis) | e-boekhouden.nl | €0 jaar 1 | 1 uur | must |
| 26 | A | Google Workspace + `elise@studioverstelle.nl` | workspace.google.com | €82/jr | 1 uur | must |
| 27 | A | Urenregistratie starten (ook als je 1.225 niet haalt) | Toggl / Moneybird | €0 | 15 min | should |
| 28 | B | **DPIA uitvoeren** voor de opnamemethode | zelf of privacyjurist | €0–€1.500 | 1–2 wkn | **must** |
| 29 | B | **Automatiseer de 30-dagen-audioverwijdering** (cronjob) | eigen stack | €0 | 2 uur | **must** |
| 30 | B | **BOIP-merkdepot** "Studio Verstelle", klassen 42 + 35 | boip.int | €271 | 30 min depot; 3–4 mnd inschrijving | **should** |
| 31 | B | Rechtsbijstandverzekering | Univé / Centraal Beheer / DAS | €180–€600/jr | 1 dag | should |
| 32 | B | **Eerste btw-kwartaalaangifte** — zet de 4 deadlines in je agenda | Mijn Belastingdienst Zakelijk | €0 | 1 uur/kwartaal | **must** |
| 33 | B | **Fotografiecontract** met vaste fotograaf: koop rechten/ruime licentie incl. social + pers + sublicentie klant | zelf | €0 (afspraak) | 1 uur | **must** |
| 34 | B | Instagram Business + Pinterest Business + LinkedIn-bedrijfspagina | gratis | €0 | 2 uur | must |
| 35 | B | Google Business Profile ("interieurontwerp Amsterdam") | google.com/business | €0 | 1 uur | should |
| 36 | B | Calendly (Free) koppelen aan Google Agenda | calendly.com | €0 | 30 min | should |
| 37 | B | **Zorg voor ≥2 opdrachtgevers in jaar 1** (ondernemerschap IB, geen ROW) | acquisitie | €0 | doorlopend | **must** |
| 38 | B | Voorlopige aanslag IB aanvragen (voorkomt een dreun in 2028) | Belastingdienst | €0 | 30 min | should |
| 39 | B | BNI-lidmaatschap overwegen (netwerk + voorwaarden + collectieve verzekering) | bni.nl | €115–€455/jr | 2 wkn | later |
| 40 | B | Cyberverzekering overwegen zodra klantaudio structureel wordt opgeslagen | Insify / Hiscox | €150–€400/jr | 1 dag | later |
| 41 | C | **AOV afsluiten** — of Broodfonds + AOV met 730 dgn wachttijd | Movir / Allianz / broodfonds.nl | €600–€4.200/jr | 4–8 wkn (medische keuring!) | **must** |
| 42 | C | Broodfonds zoeken en aanmelden (min. 20 deelnemers) | broodfonds.nl | €225 + €12,50/mnd + inleg | 1–3 mnd | should |
| 43 | C | **Pensioen regelen** (jaarruimte/lijfrente) — werkgeverspensioen valt weg | bank/verzekeraar | variabel | 1 mnd | **must** |
| 44 | C | **Eenmanszaak vs. BV laten doorrekenen** bij >€150k winst (mijn omslagpunt ~€175k–€200k wijkt af van de blogs!) | fiscalist | €300–€600 | 2 wkn | **must** |
| 45 | C | Arbeidsongeschiktheidsrisico + BAV-limiet herijken bij grotere projecten | verzekeraar | €0 | 2 uur | should |
| 46 | C | Opzegtermijn loondienst + einddatum plannen; concurrentiebeding herlezen | eigen dossier | €0 | 1 uur | must |
| 47 | C | Herbeoordeel BAZ-status (invoering niet vóór 2030 — reken er niet op) | rijksoverheid.nl | €0 | 30 min | later |
| 48 | C | Merkbewaking + verlengingsdatum BOIP (10 jaar) in agenda | boip.int | €0 | 15 min | later |

---

## AVG-consentflow voor opnames

**Ontwerpprincipe:** toestemming moet **vrij, specifiek, geïnformeerd en ondubbelzinnig** zijn — en Elise moet kunnen **bewijzen** dat ze is gegeven. Tegelijk mag het niet aanvoelen als een juridische horde die de sfeer verpest. Bij een studio die het van vertrouwen en intimiteit moet hebben, is een klungelig consentmoment een commercieel probleem, geen alleen-juridisch probleem.

**De oplossing: maak de toestemming onderdeel van de belofte, niet een disclaimer ervoor.** De klant moet denken *"wat professioneel"*, niet *"wat eng"*.

### Stap 1 — Bij de offerte (schriftelijk, dagen vóór het gesprek)

In de opdrachtbevestiging, als **apart kopje** (niet weggestopt in de algemene voorwaarden — toestemming in algemene voorwaarden is per definitie **niet specifiek** en dus ongeldig):

> **Onze werkwijze: het gesprek als ontwerpmateriaal**
>
> Wij nemen ons gesprek met uw toestemming op. Dat doen we omdat het beste van uw huis in de details van uw verhaal zit — hoe u 's ochtends door de kamer loopt, waar u wel of niet tot rust komt. Die nuances gaan verloren in aantekeningen.
>
> De opname wordt automatisch uitgeschreven en geanalyseerd, zodat wij niets missen van wat u belangrijk vindt.
>
> - **Verwerking uitsluitend binnen de EU.** De opname verlaat Europa niet.
> - **De audio wissen wij binnen 30 dagen.** Daarna houden wij alleen de uitgeschreven tekst.
> - **De tekst bewaren wij tot 24 maanden na uw project.**
> - **Uw gegevens worden nooit gebruikt om AI-modellen te trainen.**
> - **U kunt uw toestemming altijd intrekken** — dan wissen wij alles, zonder gevolgen voor uw project.
> - **Liever geen opname?** Dat kan. Dan maken wij aantekeningen op de ouderwetse manier. **Uw keuze verandert niets aan onze dienstverlening of de prijs.**
>
> ☐ Ja, u mag ons gesprek opnemen en verwerken zoals hierboven beschreven
> ☐ Nee, liever niet
>
> *Handtekening ______________ Datum ______________*

**Waarom zo:**
- **Twee vakjes, geen voorafgevinkt vakje.** Een vooraf aangevinkt vakje is **geen** geldige toestemming (vaste EU-rechtspraak, o.a. *Planet49*).
- **De "nee"-optie moet echt bestaan en echt gratis zijn.** Zonder een werkbaar plan B is de toestemming niet vrij → ongeldig → de hele methode is onrechtmatig. Dit is het scharnierpunt van het hele hoofdstuk.
- **Dagen vóór het gesprek**, niet op de drempel. Toestemming onder tijdsdruk, met de ontwerper al in je woonkamer, is aanvechtbaar als niet-vrij.
- **Motivatie eerst, techniek daarna.** De klant koopt het vakmanschap, niet de compliance.

### Stap 2 — Aan het begin van het gesprek (mondeling, ~20 seconden)

> *"Voordat we beginnen: u heeft aangegeven dat ik ons gesprek mag opnemen — klopt dat nog steeds? [wacht op antwoord] Fijn. Ik zet hem nu aan. Als er iets is wat u liever niet opgenomen wilt hebben, zegt u het gewoon, dan pauzeer ik. En als u zich later bedenkt, gooi ik alles weg."*

**Dan pas op record.**

- **Bevestig mondeling, ook al is er getekend.** Toestemming is intrekbaar; de schriftelijke toestemming van vorige week zegt niets over vandaag.
- **Neem de bevestiging óp** (de eerste 20 seconden van de opname) — dat is je bewijs. Bewijslast ligt bij Elise.
- **Bied een pauzeknop.** Dit is het moment dat het beste werkt: het geeft de klant controle, en juist dán vertelt hij de gevoelige dingen. Het is goed AVG-beleid en tegelijk goede gespreksvoering.
- **Zijn er meer aanwezigen?** (partner, kinderen, aannemer, ouders) — **iedereen** moet toestemmen. Vraag het expliciet aan tafel. Dit wordt structureel vergeten en is een reëel risico: bij een echtpaar tekent vaak maar één persoon de offerte.

### Stap 3 — Tijdens

- Respecteer elke pauzevraag onmiddellijk en zichtbaar.
- Neem **geen** gesprekken op waar de klant niet bij is (bijv. met de aannemer) onder dezelfde toestemming — dat vergt aparte toestemming.

### Stap 4 — Na afloop (binnen 48 uur)

> *"Bijgevoegd de samenvatting van ons gesprek en de voorkeuren die ik eruit heb gehaald. Loopt u het even na — als ik u ergens verkeerd begrepen heb, hoor ik het graag. De geluidsopname wissen wij op [datum, 30 dagen na gesprek]."*

**Dit is de slimste stap in de hele flow, en hij is niet primair juridisch:**
- Het is **transparantie** (AVG art. 12–14) en het maakt de bewaartermijn concreet en controleerbaar.
- Het is **kwaliteitscontrole**: AI-extractie hallucineert. De klant corrigeert gratis.
- Het is **verkoop**: de klant ziet zwart-op-wit dat hij gehoord is. Dat is precies de belofte van de methode. Dit document is waarschijnlijk het moment waarop de klant besluit dat Elise anders is dan de vorige drie studio's.
- Het is **bewijs** dat het ontwerp op de wensen van de klant is gebaseerd — nuttig bij een latere klacht ("dit heb ik nooit gevraagd").

### Stap 5 — Retentie (geautomatiseerd)

| Wanneer | Wat |
|---|---|
| Dag 30 | **Audio automatisch gewist** (cronjob, geen handmatige actie) |
| Project + 24 mnd | Transcript gewist |
| Project + 7 jr | Ontwerpdossier + administratie gewist |
| Bij intrekking | **Alles binnen 30 dagen gewist**, schriftelijke bevestiging aan klant |

### Wat je nog nodig hebt

- [ ] **Privacyverklaring** op de website die de opnames **expliciet** benoemt (niet "wij kunnen gegevens verwerken", maar "wij nemen adviesgesprekken op")
- [ ] **Verwerkingsregister** met deze verwerking erin
- [ ] **DPIA** (§7.7)
- [ ] **DPA's** met alle verwerkers
- [ ] **Procedure voor inzage-/verwijderverzoeken** — je moet binnen **1 maand** reageren
- [ ] **Datalekprocedure** — melden bij de AP binnen **72 uur**. Weet vooraf hoe je dat doet; je gaat het niet uitzoeken op het moment dat je laptop uit de auto is gestolen.
- [ ] **Versleutelde opslag** + 2FA op alles. Een laptop met 40 uur klantaudio is een datalek op wielen. **Volledige schijfversleuteling (BitLocker/FileVault) is verplichte kost** — zonder is een gestolen laptop een meldplichtig datalek; mét is het meestal een verloren laptop.

---

## Wat hiertegen pleit

Eerlijke tegenwerpingen bij het bovenstaande.

**1. Mijn omslagpunt eenmanszaak/BV (~€175k–€200k) wijkt af van de gangbare literatuur (€90k–€150k).**
Ik heb de arithmetiek getoond, maar mijn model maakt aannames die de uitkomst sterk sturen: volledige winstuitkering, €60k kosten, DGA-salaris precies op €58.000, en benaderde heffingskortingen. Als Elise winst in de BV laat staan, verschuift het punt naar ~€100k. Als het "meest vergelijkbare dienstbetrekking"-criterium een hoger gebruikelijk loon dan €58.000 afdwingt (bij een winst van €190k is dat goed denkbaar), verandert het beeld opnieuw. **Beschouw §1.5 als een denkraam, niet als een uitkomst.** Dit is punt 44 op de checklist en het is geen formaliteit.

**2. De "vrije toestemming"-eis kan de methode ondermijnen — en ik heb dat opgelost op papier, niet in de praktijk.**
Ik schrijf dat er een plan B moet zijn ("dan maken we aantekeningen"). Maar als de AI-verwerking écht de kern van de methode is — zoals de opdracht stelt — dan is "u mag ook nee zeggen" deels een fictie: het product ís dan minder goed zonder opname. Een toezichthouder zou kunnen redeneren dat de toestemming niet vrij is omdat de klant feitelijk een mindere dienst krijgt. **Tegenargument:** de dienst is het ontwerp, niet het transcript; goede ontwerpers werkten 100 jaar met aantekeningen. Maar dit is een spanning die niet volledig oplosbaar is en die Elise bewust moet accepteren. Een privacyjurist zou hier scherper op moeten kijken dan ik kan.

**3. Ik heb DNR2025 niet zelf gelezen.**
Mijn aanbeveling (DNR2025 als basis) rust op secundaire bronnen: Van Doorne, BLD Ekelmans, Techniek Nederland. Dat zijn goede bronnen, maar ik heb de hoofdtekst (28 pagina's, 22 artikelen) niet doorgenomen. Specifiek de artikelen over **AI en privacy** — die ik als doorslaggevend argument aanvoer — ken ik alleen uit een samenvatting. Het is mogelijk dat die bepalingen juist *beperkingen* opleggen aan Elise's methode in plaats van hem te faciliteren. **Lees de PDF vóór je hem hanteert** (checklist #16).

**4. De consumentenkwestie kan mijn hele §6-advies omkeren.**
Ik adviseer DNR2025, maar Elise's kernklant is een consument, en de DNR is voor professionals geschreven. Het is denkbaar dat een jurist concludeert dat de **Consumentenregeling 2013** of een maatwerkset de betere basis is voor haar hoofdstroom, met DNR2025 alleen voor pijler 2. Dan is mijn advies half fout. Ik heb de Consumentenregeling niet onderzocht.

**5. De premie-indicaties zijn "vanaf"-prijzen en dus systematisch te laag.**
€355/jaar voor een BAV is een marketingprijs bij €250k dekking voor een laagrisico-profiel. Elise doet verbouwbegeleiding aan panden van €500k–€2M. Reken op **€800–€1.500/jaar** voor realistische dekking (€500k–€1M), niet op €355. Verzekeraars kunnen bovendien terugdeinzen voor de AI-/opnamecomponent of voor "bouwbegeleiding" als activiteit. **Vraag echte offertes; de tabel in §5.1 is een startpunt voor een gesprek, geen begroting.**

**6. Het KOR-advies is stelliger dan de zekerheid rechtvaardigt.**
Ik zeg "geen KOR", en bij €50k omzet is dat mechanisch juist (je zit boven €20k). Maar als de eerste 12 maanden trager gaan dan gepland — heel gewoon bij een parttime start met lange verkooptrajecten — en de omzet blijft onder €20k, dan is het argument minder eenduidig. Ook dan zou ik het niet doen (btw-aftrek op startinvesteringen + positionering), maar de afweging is dan een échte afweging.

**7. Het architectentitel-punt is een waarschuwing zonder verificatie.**
Ik heb §2's titelbescherming niet kunnen bevestigen bij het Bureau Architectenregister — het is gebaseerd op algemene kennis van de Wet op de architectentitel, niet op een geraadpleegde bron. De bewering dat de Engelse termen vrij zijn, is expliciet `[zeker: laag]`. Gezien Elise's positionering ("Interior Architecture Studio") is dit belangrijk genoeg om echt uit te zoeken, en ik heb het niet gedaan.

**8. Het DPF-verhaal kan als alarmisme worden gelezen.**
Het DPF is vandaag geldig. Ik adviseer een EU-only stack op basis van een risico dat zich mogelijk pas in 2027 materialiseert, en misschien nooit. **Tegenargument:** de kosten van een EU-only keuze zijn nu vrijwel nul (Azure region-pinning is een dropdown), en de kosten van een migratie later zijn hoog. Asymmetrisch risico rechtvaardigt een asymmetrische keuze. Maar wie vandaag OpenAI's US-endpoint gebruikt, doet niets illegaals.

**9. Deze hele lijst kan verlammend werken — en dat is het echte risico.**
48 checklistitems voor een studio die nog geen klant heeft, is een uitstekende manier om nooit te beginnen. **De eerlijke samenvatting: 8 dingen moeten écht af vóór klant 1** (domeinen, arbeidscontract checken, KvK, bank, BAV+AVB, voorwaarden, consentflow, EU-stack) — samen ~€600–€1.500 en ongeveer twee weken doorlooptijd, waarvan het meeste wachttijd is. **De rest is fase B en C en kan wachten.** Zoals `elise.md` terecht stelt: het Studio Manifest is belangrijker dan het logo. Dit document is de saaie infrastructuur onder dat manifest — het is een middel, geen doel. Als deze lijst ertoe leidt dat Elise drie maanden administratie doet in plaats van drie maanden acquisitie, heeft hij schade aangericht.

---

## Bronnen

**Belastingdienst / KVK / Rijksoverheid**
- [Belastingdienst — Zelfstandigenaftrek 2026](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/ondernemersaftrek-2026/zelfstandigenaftrek-2026) — 16-07-2026
- [Belastingdienst — Mkb-winstvrijstelling 2026](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/mkb-winstvrijstelling-2026) — 16-07-2026
- [Belastingdienst — Voorwaarden urencriterium](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/voorwaarden_urencriterium) — 16-07-2026
- [Belastingdienst — Tarieven vennootschapsbelasting](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/vennootschapsbelasting/tarieven_vennootschapsbelasting) — 16-07-2026
- [Belastingdienst — Btw-tarief werkzaamheden aan woningen](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/werkzaamheden_aan_woningen/werkzaamheden_aan_woningen) — 16-07-2026
- [Belastingdienst — Woningen ouder dan 2 jaar](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/werkzaamheden_aan_woningen/woningen_ouder_dan_2_jaar) — 16-07-2026
- [KVK — Belastingtarieven 2026](https://www.kvk.nl/geldzaken/belastingtarieven-2026/) — 16-07-2026
- [KVK — De magische 1.225 uur](https://www.kvk.nl/starten/de-magische-1225-uur-alles-over-het-urencriterium/) — 16-07-2026
- [KVK — Kleineondernemersregeling gebruiken](https://www.kvk.nl/geldzaken/kleineondernemersregeling-gebruiken/) — 16-07-2026
- [KVK — Zo werkt een Broodfonds of schenkkring](https://www.kvk.nl/starten/zo-werkt-een-broodfonds-of-schenkkring/) — 16-07-2026
- [Ondernemersplein — Inschrijven bij KVK](https://ondernemersplein.overheid.nl/bedrijf-starten/inschrijven-bij-kvk/inschrijven-bij-kvk/) — 16-07-2026
- [Ondernemersplein — Verwerkingsregister opstellen](https://ondernemersplein.overheid.nl/wetten-en-regels/verwerkingsregister-opstellen/) — 16-07-2026
- [Rijksoverheid — Kabinet komt met betaalbare basisverzekering voor zelfstandigen (13-03-2026)](https://www.rijksoverheid.nl/actueel/nieuws/2026/03/13/kabinet-komt-met-betaalbare-basisverzekering-voor-zelfstandigen-bij-arbeidsongeschiktheid) — 16-07-2026
- [Tweede Kamer — Wetsvoorstel 36912 (Wet BAZ)](https://www.tweedekamer.nl/kamerstukken/wetsvoorstellen/detail?qry=wetsvoorstel%3A36912&cfg=wetsvoorsteldetails) — 16-07-2026
- [Open.overheid.nl — Belangrijkste wijzigingen belastingen 2026](https://open.overheid.nl/documenten/c3d48c04-1009-4ffe-a54b-cebf13427ab5/file) — 16-07-2026

**Arbeidsrecht**
- [ICTRecht — Art 7:653a BW nevenwerkzaamhedenbeding](https://www.ictrecht.nl/blog/art-7653a-bw-wat-houdt-het-nevenwerkzaamhedenbeding-precies-in) — 16-07-2026
- [Palthe Oberman — Art. 7:653a BW heeft onmiddellijke werking](https://paltheoberman.nl/werkgever-let-op-artikel-7653a-bw-heeft-onmiddellijke-werking/) — 16-07-2026
- [Sprengers Advocaten — Dekt artikel 7:653a BW de lading?](https://www.sprengersadvocaten.nl/actueel/blog/meer-transparantie-over-het-verbod-op-nevenwerkzaamheden-dekt-artikel-7653a-bw-de-lading/) — 16-07-2026
- [Van Doorne — Algeheel verbod op nevenwerkzaamheden niet meer toegestaan](https://www.vandoorne.com/artikelen/algeheel-verbod-op-nevenwerkzaamheden-straks-niet-meer-toegestaan/) — 16-07-2026

**Algemene voorwaarden / bouwrecht / IP**
- [BNA — Wat is De Nieuwe Regeling (DNR)?](https://bna.nl/kennis/dnr/wat-is-dnr/) — 16-07-2026
- [NLingenieurs — DNR2025 Hoofddocument (PDF)](https://www.nlingenieurs.nl/assets/Documenten/3f2504e0-4f89-11d3-9a0c-0305e82c3301a9f7c2exQp8/BNA-NLingenieurs_5997-DNR2025-Hoofddocument.pdf) — 16-07-2026
- [NLingenieurs — DNR2025 Toelichting (PDF)](https://www.nlingenieurs.nl/assets/Documenten/3f2504e0-4f89-11d3-9a0c-0305e82c3301a9f7c2exQp8/BNA-NLingenieurs_5997-DNR2025-Toelichting.pdf) — 16-07-2026
- [Van Doorne — De Nieuwe Regeling 2025: een welkome modernisering](https://www.vandoorne.com/artikelen/de-nieuwe-regeling-2025-een-welkome-modernisering/) — 16-07-2026
- [BLD Ekelmans — Nieuwe versie algemene voorwaarden: de DNR2025](https://www.bld-ekelmans.com/nieuwe-versie-van-de-algemene-voorwaarden-voor-adviseurs-in-de-bouw-de-dnr2025/) — 16-07-2026
- [Techniek Nederland — NLingenieurs en BNA lanceren DNR2025 (15-12-2025)](https://www.technieknederland.nl/nieuws/nlingenieurs-en-bna-lanceren-dnr2025) — 16-07-2026
- [Flipse Izeboud — DNR 2011 en aansprakelijkheid](https://www.flipse-izeboud.nl/dnr-2011/) — 16-07-2026
- [Vergelijking DNR 2011 en AV BNO 2013 (PDF)](https://ruimtedoorruimte.nl/resource/file/normal/3d951b55fcf52d7c66996b8414c90f6a2a5156ef_7246.pdf) — 16-07-2026
- [DNR 2011 volledige tekst (PDF)](https://buroborgland.nl/wp-content/uploads/2023/04/DNL_DNR-2011_20190913.pdf) — 16-07-2026
- [Dirkzwager — Auteursrecht van de architect in een project](https://www.dirkzwager.nl/kennis/artikelen/auteursrecht-van-de-architect-in-een-project) — 16-07-2026
- [BNI — Contributie](https://bni.nl/voor-interieurarchitecten/contributie/) · [BNI — Juridisch](https://bni.nl/voor-interieurarchitecten/ondernemen/) — 16-07-2026

**AVG / privacy / AI**
- [Autoriteit Persoonsgegevens — Legal basis of consent](https://www.autoriteitpersoonsgegevens.nl/en/themes/basic-gdpr/gdpr-basics/legal-basis-of-consent) — 16-07-2026 *(403 bij direct ophalen; inhoud via zoekresultaten)*
- [noyb — US Supreme Court just blew up EU-US Data Transfers](https://noyb.eu/en/us-supreme-court-just-blew-eu-us-data-transfers) — 16-07-2026
- [activeMind — EU-U.S. DPF at risk following U.S. Supreme Court ruling](https://www.activemind.legal/guides/dpf-supreme-court/) — 16-07-2026
- [IAPP — General Court dismisses Latombe challenge](https://iapp.org/news/a/european-general-court-dismisses-latombe-challenge-upholds-eu-us-data-privacy-framework) — 16-07-2026
- [Berkeley Technology Law Journal — Third Time's the Charm? (02-2026)](https://btlj.org/2026/02/third-times-the-charm-the-fate-of-the-eu-u-s-data-privacy-framework/) — 16-07-2026
- [Gladia — Data residency for voice and transcription data](https://www.gladia.io/blog/data-residency-for-voice-and-transcription-data-eu-us-and-ai-compliance) — 16-07-2026
- [Wavect — EU Data Residency for AI Apps 2026](https://wavect.io/blog/eu-data-residency-ai-apps-2026/) — 16-07-2026
- [Meetily — Azure OpenAI Data Retention Policy 2026](https://meetily.ai/llm-privacy/azure) — 16-07-2026
- [Coding Agency — AI en AVG: OpenAI en Anthropic veilig gebruiken](https://coding.agency/kennisbank/ai-avg-proof-openai-anthropic) — 16-07-2026
- [Transcribeer.nl — AVG en transcriptie](https://transcribeer.nl/blog/avg-en-transcriptie-wat-moet-u-weten) — 16-07-2026
- [Gegevensbeschermingsautoriteit (BE) — Register: zijn er uitzonderingen?](https://www.gegevensbeschermingsautoriteit.be/professioneel/avg/register-van-verwerkingsactiviteiten/zijn-er-uitzonderingen) — 16-07-2026
- [Charlotte's Law — Privacy, AVG en portretrecht voor fotografen](https://www.charlotteslaw.nl/over-privacy-de-avg-en-het-portretrecht-voor-fotografen/) — 16-07-2026
- [MaasISO — AVG beeldmateriaal toestemming (2026)](https://www.maasiso.nl/kennis/blog/avg-beeldmateriaal-toestemming/) — 16-07-2026

**Verzekeringen**
- [Bavspecialist — BAV interieurarchitect](https://www.bavspecialist.nl/voor-wie-is-een-bav/beroep/interieurarchitect) — 16-07-2026
- [Insify — Verzekeringen interieurarchitect](https://www.insify.nl/verzekering/interieur-architect/) — 16-07-2026
- [Insify — Kosten bedrijfsaansprakelijkheidsverzekering](https://www.insify.nl/bedrijfsaansprakelijkheidverzekering-avb/kosten/) — 16-07-2026
- [VEZA — Kosten BAV architect](https://www.vezaverzekeringen.nl/artikelen/beroepsaansprakelijkheidsverzekering-architect-wat-kost-het-echt) — 16-07-2026
- [Honig & Honig — Raampolis beroepsaansprakelijkheid architecten](https://www.honigenhonig.nl/raampolis-beroepsaansprakelijkheidsverzekering-architecten-advies-en-ingenieursbureaus) — 16-07-2026
- [ikwordzzper — Wat kosten verzekeringen voor zzp'ers](https://www.ikwordzzper.nl/zzp-kennisbank/verzekeringen/wat-kosten-verzekeringen-voor-zzp-ers/) — 16-07-2026
- [keuze.nl — Kosten AOV zzp 2026](https://www.keuze.nl/zzp/aov-kosten) · [keuze.nl — Broodfonds of AOV](https://www.keuze.nl/zzp/broodfonds-of-aov) — 16-07-2026
- [Broodfonds.nl — Kosten](https://www.broodfonds.nl/hoe_het_werkt/kosten) · [Broodfonds.nl — Veelgestelde vragen](https://www.broodfonds.nl/meest_gestelde_vragen) — 16-07-2026
- [AOV Kompas — Verplichte AOV zzp (BAZ)](https://aovkompas.nl/blog-verplichte-aov-zzp-baz/) — 16-07-2026

**Merken & domeinen**
- [BOIP — Wat kost een merkregistratie](https://support.boip.int/hc/nl/articles/23546410404497-Wat-kost-een-merkregistratie) — 16-07-2026 *(403 bij direct ophalen; via zoekresultaten)*
- [BOIP — Tarieven](https://www.boip.int/nl/ie-professionals/registratie-onderhoud/tarieven) — 16-07-2026 *(403 bij direct ophalen)*
- [SIDN RDAP — verstelle.nl](https://rdap.sidn.nl/domain/verstelle.nl) — geverifieerd 16-07-2026
- [SIDN RDAP — studioverstelle.nl](https://rdap.sidn.nl/domain/studioverstelle.nl) — 404 (vrij), geverifieerd 16-07-2026
- Vercel Domains API — beschikbaarheid + prijzen, geverifieerd 16-07-2026

**Tooling & banken**
- [Moneybird — Prijzen](https://www.moneybird.nl/prijzen/) · [zzp-tools — Moneybird prijzen 2026](https://zzp-tools.com/moneybird/) — 16-07-2026
- [SoftwareKiezer — e-Boekhouden kosten 2026](https://softwarekiezer.nl/kenniscentrum/e-boekhouden-kosten-2026-prijzen-alle-nederlandse-pakketten) — 16-07-2026
- [ZakelijkVooruit — Zakelijke bankrekening zzp](https://www.zakelijkvooruit.nl/zakelijke-bankrekening-zzp/) — 16-07-2026
- [Qonto — Beste zakelijke rekening voor zzp 2026](https://qonto.com/nl/blog/bedrijfsbeheer/zakelijke-rekening/beste-zakelijke-rekening-voor-zzp) — 16-07-2026
- [Ondernemersland — Zakelijke bankrekening 2026 vergeleken](https://ondernemerland.nl/zakelijke-bankrekening-2026-vergeleken/) — 16-07-2026
- [Google Workspace — Prijzen](https://workspace.google.com/pricing?hl=nl) · [TotalWorkspace — Licenties en prijzen 2026](https://totalworkspace.nl/blog/google-workspace-licenties-prijzen-2026) — 16-07-2026
- [Calendly — Pricing](https://calendly.com/pricing) — 16-07-2026
- [Vercel — Pricing](https://vercel.com/pricing) — 16-07-2026

**Fiscale analyse (secundair, [zeker: laag] — ter vergelijking met eigen berekening)**
- [Sarabel — Omslagpunt eenmanszaak/bv 2026](https://www.sarabeladministratie.nl/kennisbank/omslagpunt-eenmanszaak-bv-2026) — 16-07-2026
- [Finny — Eenmanszaak of BV in 2026](https://finny-accountant.nl/eenmanszaak-of-bv-2026/) — 16-07-2026
- [Rabobank — Het urencriterium 2026](https://www.rabobank.nl/bedrijven/eigen-bedrijf-starten/belasting/het-urencriterium-hoe-zit-dat) — 16-07-2026
- [Taxlive — Laag btw-tarief bouwtekeningen architecten](https://www.taxlive.nl/nl/documenten/nieuws/laag-btw-tarief-ook-voor-tuinonderhoud-en-bouwtekeningen-architecten/) — 16-07-2026
- [btwadvies.com — Vraag en antwoord verlaagd btw-tarief bouw (PDF)](https://www.btwadvies.com/sites/default/files/pub16/Nr.9%20Vraag%20en%20antwoord%20verlaagd%20BTW-tarief%20bouw.pdf) — 16-07-2026
- [ZZP Kompas — KvK inschrijven kosten](https://zzp-kompas.nl/kvk-inschrijven-kosten/) · [Finom — Kosten KvK-inschrijving](https://finom.co/nl-nl/blog/kosten-kvk-inschrijving/) — 16-07-2026
- [BoldData — SBI-code 71112](https://bolddata.nl/nl/sbi-code/sbi-code-71112/) — 16-07-2026
- [Merkenbureau Van Asselt — Merkregistratie kosten](https://www.merkenbureau-vanasselt.nl/merkregistratie-kosten/) — 16-07-2026
