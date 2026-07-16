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
import { CostDashboard } from "@/components/research/Calculators";
import { pageBySlug } from "@/lib/research";
import { ChapterCoach } from "@/components/research/ChapterCoach";

export const metadata: Metadata = { title: "Kosten & marge — Dossier" };
const P = pageBySlug("kosten");

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Uitvoering"
        title="De AI kost €8,66"
        lede="De these was dat de rekenkracht triviaal is en Elise's tijd de echte kostenpost. Dat is nagerekend met actuele prijzen en het klopt — met ruime marge."
      />

      <Section title="De uitkomst">
        <StatRow>
          <Stat value="€8,66" label="AI-kosten per Verkenning" sub="60 beelden, 2 uur transcriptie, LLM-extractie en concept" accent="#12704e" conf="hoog" />
          <Stat value="99,6%" label="Brutomarge op een Verkenning van €2.000" sub="De AI is niet de kostenpost" accent="#12704e" conf="hoog" />
          <Stat value="€62" label="Vaste techniek per maand" sub="41% van het budget van €150 dat we onszelf gaven" accent="#12704e" conf="hoog" />
          <Stat value="€17,06" label="Pessimistisch scenario" sub="120 beelden, retries, 4K-eindbeelden — nog steeds ver onder €25" conf="middel" />
        </StatRow>

        <Thesis>
          De hypothese was &ldquo;onder €25 per sessie&rdquo;. Het antwoord is €8,66, en zelfs in het
          slechtste scenario €17. Wie dit bedrijf ziet als een AI-bedrijf, kijkt naar 0,4% van de
          kostprijs.
        </Thesis>
      </Section>

      <Section
        title="De twee soorten kosten"
        intro="Links wat het kost om te bestaan, ook in een maand zonder klant. Rechts wat één sessie aan rekenkracht kost. Schuif met het aantal sessies om te zien hoe weinig dat uitmaakt."
      >
        <CostDashboard
          vast={[
            { label: "Vercel Pro (hosting)", value: 20, note: "De applicatie draait hier al" },
            { label: "Supabase (EU-regio)", value: 22, note: "Database + opslag; gratis in de startfase" },
            { label: "Moneybird Start", value: 15, note: "Enige NL-pakket met een gratis publieke API op élk tarief" },
            { label: "Domeinen", value: 2, note: "studioverstelle.nl + .com" },
            { label: "E-sign", value: 0, note: "Niets kopen — zie hieronder" },
            { label: "Google Workspace", value: 3, note: "Mail op het eigen domein" },
          ]}
          variabel={[
            { label: "Beeldgeneratie (60 × €0,134)", value: 8.04, note: "Gemini 3 Pro Image — 81% van de kostprijs" },
            { label: "Transcriptie + diarisatie (2 u)", value: 0.31, note: "Mistral Voxtral Mini — $0,003/min, EU-hosting standaard" },
            { label: "LLM-extractie & conceptdocument", value: 0.31, note: "~150k tokens in, ~20k uit" },
          ]}
          verkoopprijs={2000}
        />
      </Section>

      <Section title="Waar het geld écht heen gaat">
        <Prose>
          <p>
            De vaste techniek is €62 per maand. De volledige studio-overhead is een heel ander verhaal
            — en die staat grotendeels los van software:
          </p>
        </Prose>
        <div className="mt-6">
          <Table
            head={["Post", "Per jaar", "Toelichting"]}
            rows={[
              ["Marketing & fotografie", "€8.000", "Interieurfotografie is geen luxe maar het portfolio zelf"],
              ["Werkplek", "€5.000", "Thuis of een plek in een collectief"],
              ["Software & AI", "€4.000", "Inclusief alle sessies, ruim gerekend"],
              ["Beroepsaansprakelijkheid", "€1.500", "Ontwerpfouten kunnen verbouwkosten veroorzaken"],
              ["Boekhouding", "€1.500", "Uitbesteden — dit is geen ontwerptijd waard"],
              ["BNI-lidmaatschap", "€575", "Optioneel; zie de titelvraag in hoofdstuk 03"],
              ["Overig", "€2.000", "Buffer"],
              [<strong key="t">Totaal</strong>, <strong key="t2">≈ €22.575</strong>, <strong key="t3">≈ 9% van €250k omzet</strong>],
            ]}
            caption="Schattingen op basis van de setup-research; de verzekeringspremies moeten met echte offertes worden vervangen."
          />
        </div>

        <div className="mt-8">
          <Prose>
            <p>
              Let op de verhouding. De AI kost bij twintig sessies <strong>€173 per jaar</strong>. De
              fotografie kost €8.000. Het duurste onderdeel van een AI-gedreven studio is de camera —
              en daarna de mens die hem vasthoudt.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="Wat we kopen en wat we niet kopen"
        intro="De build-vs-buy-uitkomsten, met een paar verrassingen."
      >
        <Table
          head={["Categorie", "Verdict", "Waarom"]}
          rows={[
            [
              "Transcriptie",
              <strong key="1" style={{ color: "#12704e" }}>Kopen — Mistral Voxtral Mini</strong>,
              "$0,003/min, EU-hosting standaard (niet als optie), diarisatie gratis inbegrepen, Nederlands native. Kies hier op EU-hosting, niet op prijs — het scheelt toch maar €0,31.",
            ],
            [
              "Beeldgeneratie",
              <strong key="2" style={{ color: "#12704e" }}>Houden — Gemini 3 Pro Image</strong>,
              "€0,134 per beeld en het begrijpt haar DNA-prompt het best. Maar zie het risico hieronder.",
            ],
            [
              "Boekhouding",
              <strong key="3" style={{ color: "#12704e" }}>Kopen — Moneybird Start (€15)</strong>,
              "Het enige NL-pakket met een gratis publieke REST-API op élk tarief, dus de app kan zelf factureren. BTW en ICP gaan rechtstreeks naar de Belastingdienst.",
            ],
            [
              "Klantportaal",
              <strong key="4" style={{ color: "var(--series-1)" }}>Bouwen</strong>,
              "De koopmarkt is voor een NL-eenpitter kapot: HoneyBook bestaat hier niet (geen euro's), Dubsado kan geen BTW-inclusieve prijzen, en EU-dataresidentie zit overal achter Enterprise. En: het portaal ís het product — daar wordt haar waarde beoordeeld.",
            ],
            [
              "E-sign",
              <strong key="5" style={{ color: "var(--critical)" }}>Niets kopen — €0</strong>,
              "Een ontwerpovereenkomst is vormvrij (art. 7:400 BW); een gewone elektronische handtekening volstaat. DocuSign (€23/mnd) levert exact hetzelfde eIDAS-niveau dat Moneybird gratis geeft — en Nederlandse rechters hebben DocuSign- en Adobe Sign-handtekeningen al twee keer verworpen.",
            ],
          ]}
        />
      </Section>

      <Section title="Het echte technische risico">
        <div
          className="rounded-sm border-l-2 p-6"
          style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.05)" }}
        >
          <p className="r-eyebrow" style={{ color: "var(--critical)" }}>
            Geometrie-drift
          </p>
          <p className="r-display-m mt-2.5">&ldquo;Dat is mijn kamer niet&rdquo;</p>
          <div className="r-body mt-4 max-w-2xl space-y-3.5 text-[var(--ink-2)]">
            <p>
              De hele belofte is: <em>jouw</em> kamer, opnieuw ingericht. Maar Gemini houdt{" "}
              <strong>geen expliciet persistent 3D-geheugen</strong> bij — elk beeld wordt zelfstandig
              gegenereerd. Geometriebehoud is dus <strong>emergent uit de prompt, niet afgedwongen</strong>.
              Google&rsquo;s eigen advies is veelzeggend: genereer twee of drie varianten en kies de beste.
            </p>
            <p>
              Als een klant zegt &ldquo;dat is mijn kamer niet&rdquo;, is het antwoord niet een betere
              prompt. Diepte-geconditioneerde modellen — FLUX.1 Depth, ControlNet Union Pro 2.0 —
              dwingen de geometrie <strong>structureel</strong> af. Ze zijn bovendien ongeveer drie
              keer goedkoper, en het is een Duits bedrijf.
            </p>
            <p>
              <strong>Actie: test FLUX op één echte kamer vóórdat het nodig is.</strong> Niet als het
              misgaat bij een betalende klant.
            </p>
          </div>
        </div>
      </Section>

      <CounterCase>
        <p>
          <strong>De lage AI-kosten bewijzen niets over het bedrijf.</strong> €8,66 per sessie is
          fantastisch en volstrekt irrelevant als de sessie zelf niet verkoopt. Deze pagina meet de
          goedkoopste factor in het hele model met de grootste precisie — dat is comfortabel, niet
          nuttig.
        </p>
        <p>
          <strong>Drie breed herhaalde &lsquo;feiten&rsquo; bleken onjuist</strong> tijdens dit
          onderzoek: SignRequest is sinds 2021 geen NL/EU-dienst meer (het is Amerikaans, van Box),
          Yousign heet inmiddels Youtrust, en de Nederlandse e-factureringsdeadlines van 2027/2028
          bestaan simpelweg niet. Dat verlooptempo is zélf de waarschuwing:{" "}
          <strong>verifieer elke prijs opnieuw vóór aankoop</strong>.
        </p>
        <p>
          <strong>De overhead van €22.575 is grotendeels geschat.</strong> Vooral de
          verzekeringspremies zijn niet met offertes onderbouwd, en juist beroepsaansprakelijkheid
          voor iemand die verbouwingen begeleidt kan fors afwijken van €1.500 <Est />.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Testen we FLUX Depth naast Gemini?"
          opties={[
            "Ja — één echte kamer, deze maand",
            "Nee — Gemini werkt en we hebben de prompt al",
          ]}
          advies="Ja. Het kost een avond en het adresseert het enige technische risico dat de belofte kan breken. Bijkomend: drie keer goedkoper en Europees. Als Gemini wint, weten we dat ook."
        />
        <Decision
          vraag="Bouwen we het klantportaal zelf?"
          opties={[
            "Ja — de koopmarkt is kapot voor NL-solo's",
            "Nee — start met een gedeelde map en een sjabloon",
          ]}
          advies="Nee, nog niet. Het onderzoek zegt terecht dat kopen hier niet werkt, maar daaruit volgt niet dat we moeten bouwen — alleen dat we niet moeten kopen. Begin met een map en een sjabloon, en bouw pas als drie klanten erom vragen."
          hangtAf="Zie hoofdstuk 08: eerst drie klanten volledig met de hand bedienen."
        />
      </Decisions>

      <Sources
        note="420 regels met beslistabellen per categorie in research-notes/tools-buildvsbuy.md; alle prijzen zijn van de leveranciers' eigen pagina's in juli 2026."
        items={[
          { t: "Voxtral / Mini Transcribe — prijzen en EU-hosting", org: "Mistral AI", jaar: "2026" },
          { t: "Gemini API image pricing", org: "Google", jaar: "2026" },
          { t: "Prijzen en API-toegang per pakket", org: "Moneybird", jaar: "2026" },
          { t: "FLUX.1 Depth / Kontext — diepte-geconditioneerde generatie", org: "Black Forest Labs", jaar: "2026" },
          { t: "ControlNet Union Pro 2.0", org: "open source", jaar: "2026" },
          { t: "Art. 7:400 BW — vormvrijheid van de overeenkomst van opdracht", url: "https://wetten.overheid.nl", org: "wetten.overheid.nl", jaar: "geldend 2026" },
          { t: "Vercel Pro pricing", org: "Vercel", jaar: "2026" },
          { t: "Supabase pricing (EU-regio)", org: "Supabase", jaar: "2026" },
        ]}
      />

      <ChapterCoach slug="kosten" />

      

      <NextPage slug="setup" title="Juridisch & setup" n="10" />
    </>
  );
}
