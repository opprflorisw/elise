import type { Metadata } from "next";
import {
  PageHead,
  Section,
  Prose,
  CounterCase,
  Decisions,
  Decision,
  NextPage,
  Thesis,
  Table,
  Sources,
  Stat,
  StatRow,
  Est,
} from "@/components/research/Blocks";
import { pageBySlug } from "@/lib/research";

export const metadata: Metadata = { title: "Marketing & kanalen — Dossier" };
const P = pageBySlug("marketing");

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="De machine"
        title="Elise heeft geen bereik nodig"
        lede="Vijftien klanten per jaar is 0,14% van alleen al de Amsterdamse woningverkopen. Elke strategie die begint met 'meer bereik' is voor deze studio het verkeerde antwoord."
      />

      <Section title="Het rekensommetje dat alles bepaalt">
        <StatRow>
          <Stat value="12–20" label="Projecten per jaar" sub="Dat is de hele opgave" conf="middel" />
          <Stat value="1 per 2,5–4 wk" label="Nieuwe klanten die nodig zijn" sub="Niet per dag. Niet per week. Per maand." conf="middel" />
          <Stat value="0,14%" label="Van de Amsterdamse woningverkopen" sub="11.000 verkopen in 2025, gemiddeld €627.000" conf="middel" />
          <Stat value="4 u/week" label="Beschikbaar voor marketing" sub="52 uur per kwartaal. Dat is alles." accent="var(--series-2)" conf="hoog" />
        </StatRow>

        <Thesis>
          Ze heeft geen publiek nodig. Ze heeft een handvol juiste gesprekken nodig. Dat verandert
          niet hoe hard we marketen — het verandert wat marketing hier überhaupt betekent.
        </Thesis>
      </Section>

      <Section
        title="De omkering"
        intro="Dit is de belangrijkste bevinding van het hoofdstuk, en hij zet de gebruikelijke kanaallogica op zijn kop."
      >
        <Prose>
          <p>
            De premium klant komt binnen via een <strong>mens</strong> — een makelaar, een vriend, een
            vorige klant — en <strong>verifieert vervolgens online</strong>: website, Instagram,
            Google. Dat is geen detail over de volgorde. Het betekent dat kanalen twee verschillende
            functies hebben, en dat je ze niet door elkaar mag halen.
          </p>
        </Prose>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="r-card-solid p-6" style={{ borderColor: "var(--series-1)", borderWidth: 2 }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--series-1)" }}>
              Kanalen die vertrouwen overdragen
            </p>
            <p className="r-display-m mt-2">= acquisitie</p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              Partnerships, doorverwijzing, het warme netwerk. Hier komen klanten vandaan. Hier gaan
              de uren heen.
            </p>
          </div>
          <div className="r-card-solid p-6">
            <p className="r-eyebrow !text-[0.55rem] opacity-60">Kanalen die vertrouwen bewijzen</p>
            <p className="r-display-m mt-2">= infrastructuur</p>
            <p className="r-body mt-3 text-[var(--ink-2)]">
              Instagram, de website, Google Bedrijfsprofiel. Dit levert geen klanten op — dit is waar
              de doorverwijzing op landt en waar zij besluit of je echt bent.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Prose>
            <p>
              <strong>
                Instagram is in jaar 1 dus geen leadkanaal — het is het bewijsmateriaal.
              </strong>{" "}
              Wie dat omdraait, verbrandt zijn vier uur aan het verzamelen van bewonderaars in plaats
              van kopers. Dat is precies de val waar het signatuurformat ons in kan lokken: het is
              deelbaar en het voelt als vooruitgang.
            </p>
          </Prose>
        </div>
      </Section>

      <Section title="De kanalen, gewogen op opbrengst per uur">
        <Table
          head={["Kanaal", "Functie", "Uur/wk", "Tijd tot effect", "Oordeel"]}
          rows={[
            [
              <strong key="0">Google Bedrijfsprofiel + reviews</strong>,
              "Bewijs — maar het belt terug",
              "~20 u eenmalig, dan 0",
              "3–6 maanden",
              <strong key="0b" style={{ color: "#12704e" }}>Kanaal #1</strong>,
            ],
            [
              <strong key="1">Partnerships met makelaars</strong>,
              "Overdracht — acquisitie",
              "1–1,5",
              "4–8 weken",
              <strong key="1b" style={{ color: "#12704e" }}>Kanaal #2</strong>,
            ],
            [
              <strong key="2">Warm netwerk → referral-motor</strong>,
              "Overdracht — acquisitie",
              "0,5",
              "Direct, maar bouwt traag",
              <strong key="2b" style={{ color: "#12704e" }}>Kanaal #3 — levert klant 1–5</strong>,
            ],
            [
              <strong key="3">Instagram</strong>,
              "Bewijs — infrastructuur",
              "1,5",
              "6–18 maanden",
              <strong key="3b" style={{ color: "var(--series-1)" }}>Noodzakelijk, niet verkopend</strong>,
            ],
            [
              "PR in woonbladen",
              "Bewijs — infrastructuur",
              "opportunistisch",
              "6–12 maanden",
              "Pas met portfolio — en nooit als AI-verhaal",
            ],
            [
              "Pinterest",
              "Bewijs",
              "0",
              "12+ maanden",
              <span key="6b" style={{ color: "var(--ink-3)" }}>Account claimen, dan negeren</span>,
            ],
            [
              "LinkedIn",
              "Overdracht — alleen pijler 2",
              "0,25",
              "3–6 maanden",
              "Visitekaartje",
            ],
          ]}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="r-card-solid p-5">
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#12704e" }}>
              De local pack is verrassend leeg
            </p>
            <p className="r-body mt-2.5 text-[var(--ink-2)]">
              Geteld op 16 juli 2026: de <strong>nummer 3 in Amsterdam heeft 8 reviews</strong>, nummer
              5 heeft er vijf. Met tien à vijftien echte reviews staat Elise in de top 3; met dertig is
              ze koploper. Studio Frieda May staat op #2 met een 06-nummer en een verborgen adres — het
              bewijs dat het servicegebied-model werkt zonder pand.
            </p>
            <p className="r-small mt-2.5">
              Twee mitsen: dat verborgen adres blijft het rankinganker (woont ze niet in Amsterdam, dan
              valt dit om), en zulke lage reviewaantallen kunnen óók betekenen dat de prijs klein is.
              Plafond realistisch: 1–5 telefoontjes per maand.
            </p>
          </div>
          <div className="r-card-solid p-5">
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#12704e" }}>
              Eén productieve makelaar boekt haar vol
            </p>
            <p className="r-body mt-2.5 text-[var(--ink-2)]">
              35% van álle Nederlandse hypotheekaanvragen betreft een woning mét verbouwing. Het
              HDN-profiel &ldquo;Verbouwende Doorstromer&rdquo; is ongeveer 6% van de markt en is haar
              ideale klant tot op de euro. Ze heeft <strong>0,05% van dat segment</strong> nodig.
            </p>
            <p className="r-small mt-2.5">
              Dit is ook het enige kanaal dat géén portfolio vereist en binnen vier tot acht weken kan
              werken — precies wat een studio zonder verleden nodig heeft.
            </p>
          </div>
        </div>
      </Section>

      <Section title="De val bij hypotheekadviseurs">
        <div
          className="rounded-sm border-l-2 p-6"
          style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
        >
          <p className="r-eyebrow" style={{ color: "var(--critical)" }}>
            Lees dit vóór er geld wordt afgesproken
          </p>
          <div className="r-body mt-4 max-w-2xl space-y-3.5 text-[var(--ink-2)]">
            <p>
              In <code className="text-[0.85em]">investigation.md</code> stond
              &ldquo;hypotheekadviseurs&rdquo; doodleuk in het rijtje partners. Dat blijkt een reëel
              juridisch risico, en wel in twee onafhankelijke opzichten.
            </p>
            <p>
              <strong>Elise geld ontvangen voor het aanbrengen van klanten bij een adviseur: niet
              doen.</strong> Artikel 86c BGfo verbiedt provisie — &ldquo;in welke vorm dan ook&rdquo; —
              rond hypothecair krediet, en de AFM heeft expliciet gesteld dat aanbrengvergoedingen
              aan <em>alle</em> derden hieronder vallen.
            </p>
            <p>
              <strong>En erger: ze kan er zelf vergunningplichtig van worden.</strong> Alleen
              contactgegevens doorgeven is geen bemiddelen. Maar zodra ze méér doorgeeft — inkomen,
              woonsituatie, gewenst bedrag — bemiddelt ze in de zin van de Wft en is een
              AFM-vergunning vereist. En zij gaat <em>per definitie</em> over verbouwbudgetten praten.
              Dat is de kern van haar gesprek.
            </p>
            <p>
              De andere richting — Elise betáált een adviseur voor een verwijzing naar háár
              ontwerpdienst — is grijs, niet zwart. Maar &ldquo;grijs&rdquo; is geen basis voor een
              kanaal waar het bedrijf op moet leunen.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Prose>
            <p>
              <strong>Makelaars zijn wél het juiste kanaal</strong> — daar geldt dit verbod niet, en
              de timing is bovendien beter: het moment van de sleuteloverdracht is precies wanneer de
              klant met een leeg huis en een plan staat.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="Is de AI-methode pitchbaar aan de pers?"
        intro="Onomwonden: nee. En het onderzoek gaat verder dan dat — het stelt dat ermee leiden ons actief schaadt."
      >
        <div
          className="rounded-sm border-l-2 p-6 sm:p-8"
          style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
        >
          <p className="r-display-m">Haar AI-verhaal ondermijnt haar stijlverhaal</p>
          <div className="r-body mt-4 max-w-2xl space-y-3.5 text-[var(--ink-2)]">
            <p>
              Vier signalen wijzen dezelfde kant op. <strong>82% van de interieurprofessionals</strong>{" "}
              gebruikt AI al regelmatig, 69% voor visualisatie — het is hygiëne, geen nieuws.
              &ldquo;Jouw eigen kamer, geen generieke render&rdquo; is inmiddels een{" "}
              <strong>gratis consumentenfeature</strong> (RoomGPT, Canva, en Nederlandse apps als
              DecorAI en ThuisAI). <strong>81% van de ontwerpers</strong> zegt dat AI creativiteit
              afvlakt — een riskant frame voor iemand die smaak verkoopt. En woonbladen publiceren
              sowieso geen methodes: ze publiceren afgewerkte, exclusieve, professioneel
              gefotografeerde huizen.
            </p>
            <p>
              Het gevolg is scherper dan &ldquo;het werkt niet&rdquo;.{" "}
              <strong>
                Ermee leiden zet een dienst van €10.000 pal naast een gratis tool.
              </strong>{" "}
              De klant maakt die vergelijking dan zelf, en wij hebben hem uitgenodigd.
            </p>
          </div>

          <div className="mt-6 border-t pt-5" style={{ borderColor: "rgba(208,59,59,0.25)" }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#12704e" }}>
              Eén herkadering redt het
            </p>
            <p className="r-body mt-2.5 text-[var(--ink-2)]">
              Voor de consument is visualisatie een commodity. Maar{" "}
              <strong>
                voor een makelaar met een pand dat al negentig dagen stilstaat, is precies diezelfde
                tool schaars
              </strong>
              . Zelfde techniek, andere ontvanger, totaal andere waarde. Daar — en niet in de pers,
              en niet op de homepage — is het AI-verhaal wél een verkoopargument.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Wat we bewust overslaan"
        intro="Met vier uur per week is 'niet doen' de belangrijkste beslissing. Elk kanaal hieronder is afgewezen met bewijs, niet met onderbuik."
      >
        <div className="space-y-3">
          {[
            {
              t: "Beurzen — ook in jaar 2 niet",
              d: "Het bewijs is ongewoon hard: DPG Media stopte op 22-11-2024 met de vtwonen&design beurs ná 30 jaar, wegens dalende bezoekersaantallen. De opvolger Woondesignhub haalde zijn eerste editie in 2025 niet eens. Een stand van 20 m² kost €8.000–15.000 plus een week van haar leven — op een onbewezen beurs wiens voorganger juist wegens publieksgebrek is opgedoekt. Beursbezoekers oriënteren zich op bankstellen; Elise's klant heeft net een herenhuis gekocht.",
            },
            {
              t: "TikTok",
              d: "4,2 miljoen NL-gebruikers, maar 43% is 12–27 jaar. Dat is de doelgroep van iemand die op kamers gaat, niet van iemand met een verbouwbudget van €80.000.",
            },
            {
              t: "Advertenties in jaar 1",
              d: "€900 koopt in dit segment ongeveer 400 bezoekers, waar de norm voor een betrouwbare test 1.000–3.000 is. Het kan het idee dóden maar niet bevestigen — zie hoofdstuk 12.",
            },
            {
              t: "Pinterest actief bespelen",
              d: "Het werkt in deze categorie, maar op een termijn van 12+ maanden. Account claimen, domein verifiëren, en dan een jaar negeren.",
            },
          ].map((s) => (
            <div key={s.t} className="r-card-solid p-5">
              <p className="r-body" style={{ fontWeight: 600 }}>
                {s.t}
              </p>
              <p className="r-small mt-1.5">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Het eerste kwartaal"
        intro="52 uur, opzettelijk front-loaded met de dingen die later niet meer te repareren zijn."
      >
        <Table
          head={["Weken", "Waar de uren heen gaan", "Waarom nu"]}
          rows={[
            [
              <strong key="1">1–2</strong>,
              "Contract met fotografie-, publicatie- en opnamerecht + AVG-toestemming (2 u) · de lijst van 30 (1,5 u) · Google Bedrijfsprofiel (1,5 u) · Instagram-bio als filter (1 u) · LinkedIn (1 u) · Pinterest claimen (0,5 u)",
              "Achteraf toestemming vragen aan iemand met een huis van €2M gaat vaak mis. Zonder die toestemming bestaat het signatuurformat niet, bestaat de PR-route niet, en bestaat het portfolio niet.",
            ],
            [
              <strong key="2">3–4</strong>,
              "Interieurfotograaf voor haar eigen huis (3 u, ~€1.000–2.000) · 10 van de 30 persoonlijk benaderen (3 u) · Instagram 2 posts/week starten (2 u)",
              "Haar eigen huis ís haar portfolio. Dat is geen noodgreep — het is de klassieke route, en zij is dan zelf het bewonersverhaal dat woonbladen eisen.",
            ],
            [
              <strong key="3">5–8</strong>,
              "De partnerships-stoot: makelaarskantoren in de band €500k–€2M",
              "Dit is de kern van het kwartaal en het enige echte acquisitiekanaal.",
            ],
            [
              <strong key="4">9–13</strong>,
              "Opvolging, eerste Verkenningen, content oogsten uit wat er gebeurt",
              "Nu pas zichtbaarheid — als er iets te bewijzen valt.",
            ],
          ]}
          caption="De vraag aan de lijst van 30 is één zin: “Ken je iemand die net iets bijzonders heeft gekocht en niet weet wat hij ermee moet?” Geen aankondiging, geen nieuwsbrief."
        />
      </Section>

      <CounterCase>
        <p>
          <strong>Het signatuurformat is precies de verleiding waar dit hoofdstuk voor waarschuwt.</strong>{" "}
          Voor-foto, AI-verbeelding, resultaat — het is deelbaar, het voelt als vooruitgang, en het
          levert bewonderaars op. Bewonderaars zijn geen kopers. Als de vier uur daarheen lekken,
          heeft Elise over een jaar een mooi account en geen omzet.
        </p>
        <p>
          <strong>Makelaars als kanaal zijn onbewezen.</strong> Het is de logische keuze op basis van
          timing en vertrouwensoverdracht, maar er is geen enkel bewijs geleverd dat Amsterdamse
          makelaars in dit segment daadwerkelijk doorverwijzen naar interieurontwerpers — of dat ze
          dat al aan iemand anders doen <Est />.
        </p>
        <p>
          <strong>Vier uur per week is misschien gewoon te weinig.</strong> Het hele plan hangt aan
          één acquisitiekanaal dat langzaam opbouwt. Als de partnerships niet aanslaan, is er geen
          plan B binnen het urenbudget — en dan is de enige uitweg meer uren, wat betekent: minder
          ontwerpen.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Waar gaan de vier uur naartoe in kwartaal 1?"
          opties={[
            "Partnerships met makelaars + het warme netwerk",
            "Instagram opbouwen — het merk moet er eerst staan",
            "Gelijk verdeeld over beide",
          ]}
          advies="Partnerships en netwerk, met Instagram op onderhoudsniveau (2 posts per week, geen strategie). Instagram is bewijs, geen acquisitie — en bewijs heeft pas nut als er iemand kijkt omdat een mens haar naam noemde."
        />
        <Decision
          vraag="Schrappen we hypotheekadviseurs als partnerkanaal?"
          opties={[
            "Ja — provisieverbod en vergunningrisico",
            "Alleen zonder geldstroom, puur wederkerig",
            "Nee, met juridisch advies vooraf",
          ]}
          advies="Schrappen als betaald kanaal. Een wederkerige relatie zonder geldstroom mag, maar het vergunningrisico blijft zodra Elise inhoudelijk over budgetten praat — en dat doet ze altijd. De opbrengst weegt niet op tegen een AFM-gesprek."
        />
        <Decision
          vraag="Fotograferen we Elise's eigen huis als eerste portfolio?"
          opties={["Ja — €1.000–2.000, week 3", "Nee — wachten op een echt project"]}
          advies="Ja, meteen. Het is de klassieke route voor een startende studio, het levert direct bewijsmateriaal, en het maakt haar zelf tot het bewonersverhaal dat woonbladen nodig hebben. Wachten op een klant die je zonder portfolio niet krijgt, is een cirkel."
        />
      </Decisions>

      <Sources
        note="Volledige kanaalanalyse met scorecards en zoekvolumes in research-notes/marketing.md."
        items={[
          { t: "Provisieverbod hypothecair krediet (art. 86c BGfo)", url: "https://www.afm.nl/nl-nl/sector/adviseurs-bemiddelaars-en-gevolmachtigde-agenten/beloning/provisieverbod", org: "AFM", jaar: "2026" },
          { t: "Welke activiteiten zijn vergunningplichtig", url: "https://www.afm.nl/nl-nl/sector/adviseurs-bemiddelaars-en-gevolmachtigde-agenten/vergunning-nodig/welke-activiteiten-een-vergunning", org: "AFM", jaar: "2026" },
          { t: "vtwonen&design beurs stopt na 30 jaar", url: "https://www.interieurjournaal.com/vt-wonen-design-beurs-stopt/", org: "Interieurjournaal", jaar: "22-11-2024" },
          { t: "Woonbeurs naar 2026 — Woondesignhub haalde 2025 niet", url: "https://www.interieurjournaal.com/woonbeurs-naar-2026/", org: "Interieurjournaal", jaar: "2025" },
          { t: "NVM: gemiddelde transactieprijs boven half miljoen", url: "https://www.nvm.nl/nieuws/2026/nvm-gemiddelde-transactieprijs-boven-half-miljoen-bij-meer-aanbod-en-vlotte-verkopen/", org: "NVM", jaar: "Q4 2025" },
          { t: "Woningverkopen Amsterdam 2025", url: "https://heerenmakelaars.nl/hoeveel-woningen-zijn-er-in-amsterdam-verkocht-in-2025/", org: "Heeren Makelaars", jaar: "2025" },
          { t: "Kosten beursstand (update 2026)", url: "https://destandbouwkoning.nl/prijzen-en-kosten-beursstand/", org: "De Standbouw Koning", jaar: "2026" },
        ]}
      />

      <NextPage slug="tools" title="Het gereedschap" n="08" />
    </>
  );
}
