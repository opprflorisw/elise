import type { Metadata } from "next";
import Link from "next/link";
import { Section, Prose, Thesis, CounterCase, Stat, StatRow, Decision, Decisions, Est } from "@/components/research/Blocks";
import { Koop } from "@/components/research/Prd";
import { Coach, VerderLezen, Achtergrond } from "@/components/research/Coach";
import { Reveal } from "@/components/ui/Reveal";
import { AI_REKENING, AI_TOTAAL } from "@/lib/mock";

export const metadata: Metadata = { title: "Wat we kopen — Verstelle OS" };

function Categorie({
  n,
  titel,
  intro,
  children,
}: {
  n: string;
  titel: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 scroll-mt-24">
      <Reveal>
        <div className="flex items-baseline gap-3 border-t border-[var(--line-2)] pt-5">
          <span className="r-numeral text-[1.1rem] opacity-30">{n}</span>
          <h2 className="r-display-l">{titel}</h2>
        </div>
      </Reveal>
      <Reveal delay={70}>
        <p className="r-body mt-3 max-w-2xl text-[var(--ink-2)]">{intro}</p>
      </Reveal>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <header className="border-b border-[var(--line-2)] pb-9">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="r-numeral text-[2.4rem] leading-none opacity-25">—</span>
            <Link href="/research/tools" className="r-eyebrow hover:opacity-70" style={{ color: "var(--series-1)" }}>
              ← Verstelle OS
            </Link>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="r-display-xl mt-4 max-w-4xl">Wat we gewoon kopen</h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="r-lede mt-5 max-w-2xl">
            Zeven categorieën, de aanbeveling plus de echte alternatieven, met prijzen van 16 juli
            2026. Alles hier is bewust géén bouwwerk — het is opgelost, het is goedkoop, en elk uur
            eraan is een uur niet ontwerpen.
          </p>
        </Reveal>
      </header>

      <Section title="De regel">
        <Prose>
          <p>
            De schaarste in dit bedrijf is niet geld en niet techniek — het is de tijd van één mens.
            Daarom is de volgorde bij elk stuk gereedschap: eerst kijken of het te koop is, dan of
            het met nepdata al bewezen kan worden, en pas dán bouwen.
          </p>
          <p>
            Er is één uitzondering, en die is principieel: alles wat het{" "}
            <strong>handschrift of de dataset</strong> raakt, bouwen we zelf. Dat is namelijk precies
            wat we verkopen. Een gekocht portaal is inwisselbaar; een gekochte smaak bestaat niet.
          </p>
        </Prose>
        <Thesis>Koop wat iedereen heeft. Bouw alleen wat alleen wij kunnen hebben.</Thesis>
      </Section>

      <Categorie
        n="01"
        titel="Boekhouden, facturen & offertes"
        intro="Dit is de voor de hand liggende koop — maar niet om de voor de hand liggende reden. Het prijsverschil tussen alle kandidaten is €5–10 per maand, oftewel ruis. De keuze wordt beslist door de API: die bepaalt of de app ooit zelf kan factureren."
      >
        <Koop
          gekozen
          naam="Moneybird — Start"
          prijs="€15 / mnd excl. btw"
          url="https://www.moneybird.nl/prijzen/"
          wat="Facturen, offertes, btw-aangifte én ICP rechtstreeks naar de Belastingdienst. Offerte-acceptatie met handtekening zit erin. Peppol gratis meegenomen. NL-bedrijf, AWS Frankfurt, ISO 27001, verwerkersovereenkomst."
          oordeel="De enige van de vijf met een publieke, gedocumenteerde REST API die gratis is en op élk pakket beschikbaar. Jortt zet 'm achter een duurdere tier plus handmatige registratie; Tellow en Rompslomp hebben er geen."
        />
        <Koop
          naam="e-Boekhouden.nl — ZZP"
          prijs="€9,95 / mnd · 15 mnd gratis voor starters"
          url="https://www.e-boekhouden.nl/tarieven"
          wat="Goedkoopst, en voor starters vijftien maanden gratis. REST API bestaat (Swagger) maar is ruwer en ouder dan die van Moneybird."
          oordeel="De serieuze heroverweging. Kies deze als cash-out in jaar 1 zwaarder weegt dan de API-ambitie. Verder een prima #2."
        />
        <Koop
          naam="Jortt — ZZP"
          prijs="€19,95 / mnd"
          url="https://www.jortt.nl/tarieven"
          wat="Nette REST API met OAuth2 en Peppol-verzending."
          oordeel="Duurder voor minder API-vrijheid: de API zit pas vanaf het MKB-pakket (€24,95) én vereist app-registratie via een support-mail."
        />
        <Koop
          naam="Tellow"
          prijs="Gratis – €69,99"
          wat="Bekende naam, gratis instap."
          oordeel="Afvaller. Btw-aangifte én offertes pas vanaf Plus (€22,99) — duurder dan Moneybird Start voor minder — en geen publieke API gevonden."
        />
      </Categorie>

      <div
        className="mt-4 rounded-sm border-l-2 p-4"
        style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
      >
        <p className="r-small">
          <strong>Valkuil — neem niet Moneybird Compact (€3).</strong> Letterlijk uit hun helpdesk:
          met Compact kun je maximaal één verkoopfactuur per maand versturen en géén btw-aangifte
          doen. Start is de eerste bruikbare tier.
        </p>
      </div>

      <Categorie
        n="02"
        titel="E-sign"
        intro="Hier is het advies: koop niets. Niet omdat goedkoop goed genoeg is, maar omdat een betaalde tool juridisch niets extra's levert op het niveau dat hier speelt."
      >
        <Koop
          gekozen
          naam="Moneybird's eigen offerte-acceptatie"
          prijs="€0 extra"
          wat="Online accepteren en ondertekenen: handtekening-canvas, plus vastlegging van naam, e-mail én IP-adres, plus bevestigingsmail."
          oordeel="Een interieurontwerpovereenkomst is een overeenkomst van opdracht (art. 7:400 BW) en dus vormvrij: er is wettelijk helemaal geen handtekening vereist. De handtekening dient het bewijs, niet de geldigheid. SES volstaat."
        />
        <Koop
          naam="Skribble — pay per use"
          prijs="AES €2,50 · QES €4,50 per handtekening"
          url="https://www.skribble.com/"
          wat="Losse gekwalificeerde handtekeningen zonder abonnement."
          oordeel="Het verstandige vangnet: koop QES incidenteel bij, boven een drempel van pakweg €10.000. Geen abonnement."
        />
        <Koop
          naam="Youtrust (ex-Yousign)"
          prijs="Gratis (2/mnd) · €9 · €23"
          url="https://youtrust.com/"
          wat="Franse aanbieder, data in de EU. QES vanaf €10 per handtekening."
          oordeel="Beste betaalde EU-optie als je er tóch een wilt. Let op: Yousign heet sinds zomer 2026 Youtrust — de oude naam circuleert nog overal."
        />
        <Koop
          naam="DocuSign / Dropbox Sign / PandaDoc"
          prijs="€9 – €49 / mnd"
          wat="De merknamen van het vak."
          oordeel="Afvallers. Ze leveren exact hetzelfde eIDAS-niveau (SES) dat Moneybird gratis levert. Sterker: Nederlandse rechters hebben DocuSign- en Adobe Sign-handtekeningen al afgewezen als onvoldoende betrouwbaar. Het merk koopt geen rechtsgeldigheid."
        />
      </Categorie>

      <Categorie
        n="03"
        titel="Transcriptie & diarisatie"
        intro="Twee uur Nederlands gespreksaudio per sessie, twee sprekers, en diarisatie is een harde eis — anders is een zachte mening niet toewijsbaar. Let op de prijzen: dit is economisch betekenisloos (€0,31 per sessie). Kies dus op EU-hosting en kwaliteit, nooit op prijs."
      >
        <Koop
          gekozen
          naam="Mistral Voxtral Mini Transcribe 2"
          prijs="$0,003 / min · €0,31 per sessie"
          url="https://mistral.ai/pricing/api/"
          wat="Goedkoopst, Nederlands native, tot 3 uur per request, en diarisatie zit zonder meerprijs inbegrepen. Frans bedrijf, EU-hosting als default in plaats van als optie."
          oordeel="Winnaar — en het EU-verhaal is hier ook marketing. Maar wees eerlijk: Mistral bewaart API-input standaard 30 dagen voor abuse-monitoring; Zero Data Retention zit op het Scale-plan. Dat is een opname van iemands woonkamer. Noem het in je privacyverklaring."
        />
        <Koop
          naam="Deepgram Nova-3"
          prijs="≈ $0,38 / uur (diarisatie apart betaald)"
          url="https://deepgram.com/pricing"
          wat="Dedicated EU-endpoint (api.eu.deepgram.com). Diarisatie kost extra ($0,0020/min)."
          oordeel="Goede EU-optie. Let op: hun eigen prijspagina spreekt zichzelf tegen over batch versus streaming — controleer dit vóór een echte inkoopbeslissing."
        />
        <Koop
          naam="ElevenLabs Scribe v2"
          prijs="$0,22 / uur"
          url="https://elevenlabs.io/pricing/api"
          wat="Sterke kwaliteit, diarisatie tot 48 sprekers, prijs sinds maart 2026 met 40% gedaald."
          oordeel="Prima kwaliteit, maar geen expliciete EU-toezegging gevonden. Voor opnames van woonkamers is dat het verschil."
        />
        <Koop
          naam="Lokale Whisper + pyannote"
          prijs="≈ €0,04 stroom"
          wat="Data verlaat het pand niet. WhisperX haalt ~30× realtime op een fatsoenlijke GPU."
          oordeel="De verkeerde ruil: bespaart €0,31 per sessie en kost een CUDA/pyannote/ffmpeg-toolchain om te onderhouden op de laptop van een parttime ondernemer. Maar hij blijft je privacy-vangnet als een klant écht doorvraagt."
        />
      </Categorie>

      <Categorie
        n="04"
        titel="Beeldgeneratie"
        intro="De kern van het product en tegelijk het grootste technische risico. De belofte is niet 'hier is een mooie kamer' maar 'hier is jóuw kamer, anders'. Zie de volledige afweging in de PRD."
      >
        <Koop
          gekozen
          naam="Gemini 3 Pro Image"
          prijs="$0,134 / beeld · €7,02 per sessie"
          url="https://ai.google.dev/gemini-api/docs/pricing"
          wat="Beste prompt-begrip en referentiebeeld-fusie. Draait al. Gebruiker bezit de output, royaltyvrij; API-data wordt niet voor training gebruikt."
          oordeel="Blijven. Maar: de endpoint die nu draait is globaal — geen EU-residentie. Migratie naar Vertex AI EU-regio staat open als actie, en is niet gratis in tijd."
        />
        <Koop
          naam="FLUX.2 [pro] edit"
          prijs="$0,045 / beeld"
          url="https://docs.bfl.ml/quick_start/pricing"
          wat="Drie keer goedkoper, Duits (Freiburg), open weights voor de klein-variant, en expliciete depth-conditionering."
          oordeel="Het tweede spoor. Overstappen zou de beeldkosten met 66% verlagen — dat scheelt €4,66 op een omzet van €2.000. Doe het dus niet om de kosten. Doe het als de geometrie breekt."
        />
        <Koop
          naam="Interieur-specifieke AI-SaaS"
          prijs="$15 – $199 / mnd"
          wat="InteriorAI, Decor8, RoomGPT, HomeDesigns: stijl-presets voor makelaars die een leeg huis willen stofferen."
          oordeel="Het verkeerde product. Hun aanbod ís een dropdown met 'Scandinavisch' — precies de stijl die het DNA expliciet afwijst. (Hun prijzen komen bovendien vrijwel uitsluitend uit SEO-blogs; behandel elk cijfer als onbetrouwbaar.)"
        />
        <Koop
          naam="Midjourney"
          prijs="$10 – $120 / mnd"
          wat="De mooiste beelden van het veld."
          oordeel="Gediskwalificeerd: geen publieke API, en de voorwaarden verbieden automatisering — wrapper-accounts worden geband. Onbruikbaar in een pipeline."
        />
      </Categorie>

      <Categorie
        n="05"
        titel="Hosting, data & domein"
        intro="Draait al. De enige echte beslissing hier is de EU-regio, en die los je op bij het aanmaken — niet erna."
      >
        <Koop
          gekozen
          naam="Vercel Pro"
          prijs="€17,47 / mnd"
          url="https://vercel.com/pricing"
          wat="Inclusief $20 usage-credit, 1 TB transfer, 10M edge requests. EU-regio selecteerbaar."
          oordeel="Onvermijdelijk: letterlijk uit de docs — het Hobby-plan is beperkt tot niet-commercieel, persoonlijk gebruik. Zodra er gefactureerd wordt, is Hobby geen optie."
        />
        <Koop
          gekozen
          naam="Supabase"
          prijs="€0 → €21,84 / mnd"
          url="https://supabase.com/pricing"
          wat="Database, auth en storage. Pro geeft 8 GB DB, 100 GB storage, dagelijkse back-ups."
          oordeel="Start op Free (€0) tot de eerste betalende klant. Let op: de EU-regio kies je bij aanmaken en die keuze is permanent."
        />
        <Koop
          naam="Domein + e-mail"
          prijs="≈ €7,75 / mnd"
          wat="Domeinregistratie plus Google Workspace Starter of Fastmail."
          oordeel="Triviaal — maar zie het coach-blok: studioverstelle.nl en .com waren op de onderzoeksdatum nog vrij. Dat is €25 en vijf minuten, en onomkeerbaar als iemand anders het doet."
        />
        <Koop
          naam="Zoho Projects"
          prijs="$4 – $14 / user"
          url="https://www.zoho.com/projects/zohoprojects-pricing.html"
          wat="De enige uit het hele portal-onderzoek met échte EU-dataresidentie op solo-prijs: Amsterdam en Dublin."
          oordeel="Bewaar deze naam. Als het zelfbouw-portaal ooit te zwaar wordt, is dit de enige koop-optie die het datavraagstuk niet doorschuift naar Enterprise."
        />
      </Categorie>

      <Categorie
        n="06"
        titel="Agenda & afspraken"
        intro="Het kleinste besluit op deze pagina. Beide werken; het verschil is een principe, geen functie."
      >
        <Koop
          gekozen
          naam="Cal.com"
          prijs="Gratis · $15 / mnd voor teams"
          url="https://cal.com/pricing"
          wat="Open source, zelf te hosten, EU-vriendelijk, gratis voor één persoon."
          oordeel="Zelfde functionaliteit als Calendly, zonder de lock-in en zonder de vraag waar de agenda van je klanten staat."
        />
        <Koop
          naam="Calendly"
          prijs="Gratis · ~$12 / user"
          url="https://calendly.com/pricing"
          wat="De standaard. Iedereen herkent het, alles koppelt ermee."
          oordeel="Prima als je nul zin hebt in gedoe. Je betaalt met de herkenbaarheid van een ander merk in jouw klantreis."
        />
      </Categorie>

      <Categorie
        n="07"
        titel="Wat we niet kopen"
        intro="Even belangrijk als de lijst hierboven, en met redenen die je één keer wilt lezen en nooit meer hoeft te onderzoeken."
      >
        <Koop
          naam="HoneyBook"
          prijs="$29 – $109 / mnd"
          wat="De bekendste all-in-one voor creatieve zzp'ers."
          oordeel="Onbruikbaar: niet beschikbaar in Nederland. Alleen VS, Canada, VK en Australië; geen EUR-accountvaluta. Dit staat in elke 'beste tools'-lijst en het kán hier gewoon niet."
        />
        <Koop
          naam="Dubsado"
          prijs="$335 / jaar"
          wat="Populair bij ontwerpstudio's in de VS."
          oordeel="Structureel fout voor Nederland: btw kan alleen exclusief — belasting wordt per regel bovenop gerekend, geen inclusieve prijzen. Voor particulieren, die prijzen incl. btw moeten zien, is dat onwerkbaar."
        />
        <Koop
          naam="SignRequest"
          prijs="—"
          wat="Ooit dé Nederlandse e-sign-partij."
          oordeel="De NL/EU-reputatie is achterhaald: onderdeel van Box (VS) sinds 2021, en geen publieke API meer sinds december 2022. Kies 'm niet om zijn imago — dat klopt al vijf jaar niet."
        />
        <Koop
          naam="Assembly (ex-Copilot)"
          prijs="$399 / mnd voor white-label"
          wat="Mooiste klantportaal van het veld."
          oordeel="Absurd op solo-schaal: $399 per maand om 'Powered by Assembly' weg te halen. Dat is 46× de complete AI-rekening per sessie, voor een logo."
        />
      </Categorie>

      <Section title="De optelsom" id="optelsom">
        <StatRow>
          <Stat value="€62,06" label="Vaste tech per maand" sub="41% van de €150-doelstelling. In de opstartfase €40,22 — Supabase op Free." conf="hoog" />
          <Stat value="€8,66" label="AI per Verkenning" sub="Pessimistisch scenario: €17,06. Beeld is 81% daarvan." accent="var(--series-2)" conf="hoog" />
          <Stat value="€0" label="Vaste AI-verplichting" sub="Volledig variabel: nul sessies is nul kosten. Precies de goede vorm voor een parttime start." accent="var(--series-3)" conf="hoog" />
          <Stat value="32×" label="Eén sessie dekt de stack" sub="De vaste lasten zijn ~3% van één verkochte Verkenning." accent="var(--series-4)" />
        </StatRow>

        <div className="mt-7">
          <p className="r-eyebrow !text-[0.5rem] opacity-50">De AI-rekening van één Verkenning</p>
          <ul className="mt-3 max-w-lg space-y-0">
            {AI_REKENING.map((r) => (
              <li key={r.post} className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-2.5">
                <span className="r-small">{r.post}</span>
                <span className="r-numeral text-[0.8rem]">€ {r.bedrag.toFixed(2).replace(".", ",")}</span>
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-4 py-2.5">
              <span className="r-body !text-[0.9rem]" style={{ fontWeight: 600 }}>
                Totaal
              </span>
              <span className="r-numeral text-[1rem]" style={{ color: "var(--series-1)", fontWeight: 600 }}>
                € {AI_TOTAAL.toFixed(2).replace(".", ",")}
              </span>
            </li>
          </ul>
          <p className="r-small mt-3 !text-[0.72rem]">
            Bij een verkoopprijs van €2.000 is dat een brutomarge van 99,57% <Est /> op de
            AI-kosten. Lees dat getal goed — zie hieronder.
          </p>
        </div>
      </Section>

      <CounterCase>
        <p>
          <strong>De marge van 99,57% is waar en tegelijk misleidend.</strong> Het is de brutomarge
          op AI-kosten, niet op de Verkenning. Als een Verkenning Elise twaalf uur kost, is de echte
          kostprijs bij €80/uur ongeveer €960 en de marge ~52%. Het getal €8,66 is nuttig om te
          weten dát AI-kosten geen beslissingsfactor zijn — niet om te denken dat dit een
          99%-margebedrijf is. <strong>Presenteer het nooit zonder die kanttekening.</strong>
        </p>
        <p>
          <strong>Dit document verjaart snel, en dat is aantoonbaar.</strong> Dit onderzoek zag in
          één ronde drie breed verspreide &ldquo;bekende feiten&rdquo; sneuvelen: SignRequest is al
          vijf jaar geen NL-partij, Yousign heet inmiddels Youtrust, en de veelgeciteerde
          Nederlandse e-facturatiedeadlines van 2027/2028 bestaan niet. Als drie zekerheden binnen
          één onderzoek omvallen, is de basisverwachting dat een deel hiervan over zes maanden ook
          onjuist is.
        </p>
        <p>
          <strong>De stack hangt voor het duurste onderdeel aan één Amerikaanse leverancier</strong>{" "}
          met een preview-model. <code>gemini-3-pro-image</code> kan hernoemd, herprijsd of
          uitgefaseerd worden. Maak er een env-var van en houd FLUX als tweede spoor werkend.
        </p>
      </CounterCase>

      <Coach
        doen={[
          {
            taak: "Controleer elke prijs op deze pagina op je eigen aanmelddatum. Niet uit wantrouwen — uit ervaring: dit onderzoek zag drie 'zekerheden' sneuvelen in één ronde.",
            tijd: "45 min",
          },
          {
            taak: "Claim studioverstelle.nl én .com. Op de onderzoeksdatum waren beide nog vrij (verstelle.nl is al sinds 2005 bezet). €25, vijf minuten, en onomkeerbaar als iemand anders het eerst doet.",
            tijd: "5 min",
          },
          {
            taak: "Maak een Moneybird-proefaccount aan en stuur jezelf één offerte met de online acceptatie erin. Dan weet je of je die €23/mnd voor DocuSign echt niet nodig hebt.",
            tijd: "30 min",
          },
          {
            taak: "Zet Supabase op Free aan en kies bewust de EU-regio. Die keuze is permanent bij het aanmaken van het project.",
            tijd: "15 min",
          },
        ]}
        denken={[
          "Als je één abonnement mag hebben in de opstartfase — welk? En waarom is het antwoord niet 'boekhouding'?",
          "Hoeveel is 'de data staat bij een Frans bedrijf, 30 dagen' waard als een klant écht doorvraagt over de opname van zijn woonkamer? Kun je dat antwoord met droge ogen geven?",
          "Je verhaal wordt EU-first, maar de beeldengine draait nu op een globale endpoint. Leef je met die inconsistentie, of los je 'm op vóórdat iemand het vraagt?",
          "Wat kost het je om te wisselen van beeldmodel als Google morgen de prijs verdubbelt? En wat zegt dat over de €4,66 die FLUX zou besparen?",
        ]}
      />

      <VerderLezen
        items={[
          { titel: "Moneybird — prijzen", url: "https://www.moneybird.nl/prijzen/", waarom: "De aanbeveling. Let op: Start, niet Compact." },
          { titel: "e-Boekhouden.nl — tarieven", url: "https://www.e-boekhouden.nl/tarieven", waarom: "Het alternatief met 15 maanden gratis voor starters." },
          { titel: "Mistral — API-prijzen", url: "https://mistral.ai/pricing/api/", waarom: "Voxtral Transcribe: $0,003/min, diarisatie inbegrepen." },
          { titel: "Mistral — dataopslag", url: "https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data", waarom: "De 30-dagen-retentie, uit hun eigen mond. Lees dit vóór je een sessie opneemt." },
          { titel: "Gemini API — prijzen", url: "https://ai.google.dev/gemini-api/docs/pricing", waarom: "$0,134/beeld — het grootste variabele bedrag in de stack." },
          { titel: "Vercel — prijzen", url: "https://vercel.com/pricing", waarom: "Waarom Hobby geen optie is zodra je factureert." },
        ]}
      />

      <Decisions>
        <Decision
          vraag="Moneybird (€15, API) of e-Boekhouden (€10, 15 mnd gratis)?"
          opties={[
            "Moneybird — de app kan later zelf factureren",
            "e-Boekhouden — €0 in het eerste jaar, API inleveren",
          ]}
          advies="Moneybird, tenzij cash in jaar 1 écht knelt. De API is het enige onderscheid dat er over drie jaar nog toe doet; €5/mnd is dat waard. Maar wees eerlijk: als er nooit automatisch gefactureerd gaat worden, is e-Boekhouden 15 maanden gratis en wint die."
          hangtAf="Of de sessie-tool ooit een factuur mag aanmaken."
        />
        <Decision
          vraag="Migreren naar Vertex AI EU-regio?"
          opties={[
            "Ja — het EU-verhaal moet kloppen vóór de eerste klant",
            "Nee — pas als een klant ernaar vraagt",
            "Nee, en het EU-verhaal ook niet voeren",
          ]}
          advies="Niet nu, maar wel vóór je 'EU-first' als verkoopargument gebruikt. Anders verkoop je iets dat niet waar is — en dat is een duurder probleem dan de migratie. Kies dus: òf migreren, òf het argument niet voeren."
          hangtAf="Of de nieuwste beeldmodellen überhaupt single-region EU beschikbaar zijn — dat was op de onderzoeksdatum onzeker."
        />
      </Decisions>

      <Achtergrond notes={["tools-buildvsbuy"]} />

      <div className="mt-8">
        <Link href="/research/kosten" className="group flex items-end justify-between gap-6 border-t border-[var(--line-2)] pt-7">
          <div>
            <p className="r-eyebrow opacity-50">Volgende</p>
            <p className="r-display-l mt-1.5 transition-opacity group-hover:opacity-60">Kosten &amp; marge</p>
          </div>
          <span className="r-numeral text-[2rem] opacity-25">09</span>
        </Link>
      </div>
    </>
  );
}
