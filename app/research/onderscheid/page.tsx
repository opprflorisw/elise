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
  Conf,
  Est,
} from "@/components/research/Blocks";
import { pageBySlug } from "@/lib/research";
import { ChapterCoach } from "@/components/research/ChapterCoach";

export const metadata: Metadata = { title: "Onderscheid & kopieerbaarheid — Dossier" };
const P = pageBySlug("onderscheid");

export default function Page() {
  return (
    <>
      <PageHead
        n={P.n}
        eyebrow="Fundament"
        title="Het gereedschap is de gracht niet"
        lede="De vraag was: wat houdt ons overeind als iedereen morgen dezelfde AI heeft? Het antwoord blijkt weinig te maken te hebben met techniek — en één juridisch punt vraagt vandaag actie."
      />

      {/* ---- THE URGENT ONE ---- */}
      <Section title="Eerst dit: de titel">
        <div
          className="rounded-sm border-l-2 p-6 sm:p-8"
          style={{ borderColor: "var(--critical)", background: "rgba(208,59,59,0.06)" }}
        >
          <p className="r-eyebrow" style={{ color: "var(--critical)" }}>
            Raakt de live website — actie vandaag
          </p>
          <p className="r-display-l mt-3">Elise mag zich geen interieurarchitect noemen</p>
          <div className="r-body mt-5 max-w-2xl space-y-3.5 text-[var(--ink-2)]">
            <p>
              &ldquo;Interieurarchitect&rdquo; is een wettelijk beschermde titel (Wet op de
              architectentitel, art. 23 lid 1). Zonder inschrijving in het Architectenregister is het
              voeren ervan verboden — en die bescherming strekt zich uit tot{" "}
              <strong>afkortingen én woordcombinaties</strong> waarin de titel voorkomt. Dus ook
              &ldquo;binnenhuisarchitect&rdquo; en &ldquo;interieurarchitectuur&rdquo;.
            </p>
            <p>
              <strong>Het Engels biedt geen uitweg.</strong> De officiële overheidsvoorlichting
              (business.gov.nl) hanteert &ldquo;interior architect&rdquo; als de Engelse weergave van
              de beschermde titel, met de expliciete toevoeging dat dit óók geldt voor samenstellingen
              met die titel. Het register zelf gebruikt &ldquo;Interior architect&rdquo; op zijn Engelse
              site.
            </p>
            <p>
              <strong>Handhaving is geen theorie.</strong> Zowel Bureau Architectenregister als élke
              geregistreerde interieurarchitect kan vorderen, melden kan anoniem door iedereen, en de
              rechtbank Almelo wees in 2009 een dwangsom van €6.352,92 toe. De BNI publiceerde vorige
              week nog een stuk getiteld &ldquo;De titel: verdiend, niet zelfbenoemd&rdquo; — dit is een
              actief onderwerp.
            </p>
          </div>

          <div className="mt-6 border-t pt-5" style={{ borderColor: "rgba(208,59,59,0.25)" }}>
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--critical)" }}>
              Wat er stond, en wat we gedaan hebben
            </p>
            <p className="r-body mt-2.5 text-[var(--ink-2)]">
              De site zei <em>&ldquo;Interior architecture &amp; property transformation&rdquo;</em>. Dat
              is strikt genomen een <strong>grijs gebied</strong> — een vakgebiedbeschrijving is geen
              titelclaim — maar de Handelsnaamwet (art. 5b) is een tweede, zelfstandige grond zodra
              het de indruk wekt dat hier een geregistreerd interieurarchitect werkt. De asymmetrie
              is extreem: nul euro om te herstellen, tegenover een claim en een gedwongen
              rebranding. <strong>Gewijzigd naar &ldquo;Interieurontwerp &amp; woningtransformatie&rdquo;</strong>{" "}
              — veilig, Nederlands, en dichter bij wat de studio werkelijk doet.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="r-card-solid p-5">
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#12704e" }}>
              Veilig te gebruiken
            </p>
            <ul className="mt-3 space-y-1.5">
              {["Interieurontwerper", "Interior designer", "Residential Transformation Studio", "Interieurontwerp & woningtransformatie"].map((s) => (
                <li key={s} className="r-body text-[var(--ink-2)]">
                  · {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="r-card-solid p-5">
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "var(--critical)" }}>
              Verboden zonder inschrijving
            </p>
            <ul className="mt-3 space-y-1.5">
              {["Interieurarchitect", "Binnenhuisarchitect", "Interieurarchitectuur", "Interior architect / interior architecture"].map((s) => (
                <li key={s} className="r-body text-[var(--ink-2)]">
                  · {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Prose>
            <p>
              <strong>De eerste vraag aan Elise:</strong> heeft zij een erkend masterdiploma van vóór
              1 januari 2015? Zo ja, dan is geen beroepservaringperiode nodig en kost inschrijving{" "}
              <strong>€102,50 plus €83 per jaar</strong>, met een doorlooptijd van drie à vier weken.
              Dan mag de titel gewoon gevoerd worden — en wordt hij bovendien een bezit, zoals
              hieronder blijkt.
            </p>
          </Prose>
        </div>
      </Section>

      {/* ---- MOATS ---- */}
      <Section
        title="Wat er in andere vakgebieden gebeurde"
        intro="Logo-ontwerp, fotografie, copywriting, architectuur — overal kwam AI eerst voor het uitvoerende werk. Wie hield zijn prijs?"
      >
        <StatRow>
          <Stat value="+21,4%" label="Getty Editorial-omzet" sub="Tegenover +0,7% voor Creative. Het verschil: vrijwaring en aansprakelijkheid." accent="#12704e" conf="hoog" />
          <Stat value="−13%" label="Verdiensten per contract op Upwork" sub="Terwijl het volume met 90% steeg. Sneller werken werd niet meer verdienen." accent="var(--critical)" conf="hoog" />
          <Stat value=">80%" label="Bouwbedrijven met personeelstekort" sub="Topaannemers boeken 6–12 maanden vooruit" conf="hoog" />
          <Stat value="jan 2026" label="Verzekeraars voegen AI-uitsluitingen toe" sub="Wie tekent voor het resultaat, wordt schaarser — en duurder" accent="var(--series-2)" conf="middel" />
        </StatRow>

        <Thesis>
          In elk onderzocht vakgebied won hetzelfde bezit: niet wie het mooiste maakte, maar wie
          ervoor tekende. Aansprakelijkheid is de enige eigenschap die een taalmodel per definitie
          niet kan hebben.
        </Thesis>
      </Section>

      <Section title="De moat-inventaris, eerlijk gerangschikt">
        <Table
          head={["Kandidaat", "Compoundt?", "Tijd tot effect", "Kopieerbaar?", "Oordeel"]}
          rows={[
            [
              <strong key="1">Trade-netwerk & uitvoering</strong>,
              "Ja",
              "1–3 jaar",
              "Nee — het is schaarste, geen kennis",
              <strong key="1b" style={{ color: "#12704e" }}>Echt · 5/5</strong>,
            ],
            [
              <strong key="2">Aansprakelijkheid & vrijwaring</strong>,
              "Ja",
              "Direct",
              "Alleen door wie het risico wil dragen",
              <strong key="2b" style={{ color: "#12704e" }}>Echt · 5/5</strong>,
            ],
            [
              <strong key="3">Merk & portfolio</strong>,
              "Ja",
              "3–7 jaar",
              "Niet snel",
              <strong key="3b" style={{ color: "#12704e" }}>Echt · 4/5</strong>,
            ],
            [
              "Gecodificeerd stijl-DNA",
              "Deels",
              "1–2 jaar",
              "Juridisch onbeschermbaar; alleen als bedrijfsgeheim",
              <strong key="4b" style={{ color: "var(--serious)" }}>Zwak · 2/5</strong>,
            ],
            [
              "Sessie-voorkeursdata",
              "Nee",
              "—",
              "N is te klein; databankenrecht dekt gecreëerde data niet",
              <strong key="5b" style={{ color: "var(--critical)" }}>Illusie · 1/5</strong>,
            ],
            [
              "Snelheid uit de AI-backoffice",
              "Nee",
              "—",
              "Iedereen krijgt dezelfde tools tegelijk",
              <strong key="6b" style={{ color: "var(--critical)" }}>Illusie · 1/5</strong>,
            ],
            [
              "Overstapdrempel van het portaal",
              "Nee",
              "—",
              "Het is een eenmalige aankoop, geen abonnement",
              <strong key="7b" style={{ color: "var(--critical)" }}>Illusie · 1/5</strong>,
            ],
          ]}
        />

        <div className="mt-8">
          <Prose>
            <p>
              Drie van onze favoriete ideeën sneuvelen hier, en dat is de meest waardevolle uitkomst
              van dit hoofdstuk. <strong>De sessie-dataset is geen bezit</strong>: bij twintig
              projecten per jaar is N te klein om iets te leren dat een ervaren ontwerper niet al weet,
              en het databankenrecht beschermt uitdrukkelijk geen data die je zélf creëert (de
              BHB/William Hill-lijn). <strong>De AI-backoffice is geen voorsprong</strong>: Upwork laat
              zien wat er gebeurt als iedereen tegelijk sneller wordt — het volume steeg met 90% en de
              verdiensten per contract daalden met 13%. Sneller werken werd doorgegeven aan de klant,
              niet aan de zak.
            </p>
            <p>
              En het <strong>stijl-DNA is juridisch niet te beschermen</strong>. Een stijl is geen
              werk. Het enige regime dat past is het bedrijfsgeheim — wat één concrete regel oplevert:{" "}
              <strong>publiceer nooit de prompts</strong>.
            </p>
          </Prose>
        </div>
      </Section>

      <Section
        title="Het €99-scenario"
        intro="We vroegen ons af wat er gebeurt als iemand 'AI-interieurscan €99' lanceert. Het antwoord: dat is al gebeurd, en het is erger dan €99."
      >
        <Prose>
          <p>
            Spacely en Interior AI draaien voor <strong>$9 tot $99 per maand</strong> — niet per scan
            — en leveren daarvoor honderden renders. De goedkope toetreder is geen toekomstscenario
            maar de huidige werkelijkheid. En toch staat de premiumlaag nog overeind. Dat is het
            interessante gegeven.
          </p>
        </Prose>

        <div className="mt-7 space-y-3">
          {[
            {
              t: "Concurreer niet op de as waarop €99 wint",
              d: "Zij verkopen een plaatje. Wij verkopen een besluit dat gebouwd wordt en waar iemand voor tekent. Dat zijn verschillende producten die toevallig op elkaar lijken op een scherm.",
            },
            {
              t: "Erken de goedkope optie hardop",
              d: "“Een render kost tegenwoordig niets. Wat alles kost, is de verkeerde muur.” Wie de goedkope optie doodzwijgt, lijkt bang. Wie hem benoemt, herdefinieert waar het gesprek over gaat.",
            },
            {
              t: "Houd de prijs onbeweeglijk",
              d: "In vijf onderzochte sectoren at de goedkope toetreder steeds de budgetlaag op en breidde de markt naar beneden uit, terwijl premium zijn prijs hield (Reher & Sokolinski, JFE 2024). Het risico is niet dat we te duur zijn — het is dat we naar het midden zakken om te antwoorden.",
            },
            {
              t: "Bouw géén instappakket",
              d: "Precies de reflex die de literatuur afraadt. Een goedkoop pakket 'om ook die klant te bedienen' is de manier waarop premiumaanbieders zichzelf naar het midden trekken — waar ze noch de prijs noch het volume hebben.",
            },
            {
              t: "Breid uit naar garantie, niet naar methodenaam",
              d: "Bij credence goods — diensten waarvan de klant de kwaliteit nooit helemaal kan beoordelen — weegt een échte garantie zwaarder dan welke merknaam voor je werkwijze dan ook.",
            },
          ].map((s, i) => (
            <div key={s.t} className="r-card-solid flex gap-4 p-5">
              <span className="r-numeral shrink-0 text-[1.1rem] opacity-30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="r-body" style={{ fontWeight: 600 }}>
                  {s.t}
                </p>
                <p className="r-small mt-1.5">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div
            className="rounded-sm border-l-2 p-5"
            style={{ borderColor: "var(--serious)", background: "rgba(236,131,90,0.06)" }}
          >
            <p className="r-eyebrow !text-[0.55rem]" style={{ color: "#a8532c" }}>
              Een advies uit ons eigen plan sneuvelt
            </p>
            <p className="r-body mt-2.5 text-[var(--ink-2)]">
              In <code className="text-[0.85em]">investigation.md</code> stond dat we de methode een
              merknaam moesten geven en die moesten claimen. Dat advies is{" "}
              <strong>volledig onbewezen</strong>. Er is geen enkel bewijs gevonden dat het branden van
              een werkwijze bij credence goods pricing power oplevert. Een garantie wel. Doe dus het
              saaie ding, niet het leuke ding <Est />.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Wat juridisch wél kan">
        <Table
          head={["Actie", "Waar", "Kosten", "Prioriteit"]}
          rows={[
            [<strong key="1">studioverstelle.nl + .com registreren</strong>, "Registrar", "~€25/jaar", <strong key="1b" style={{ color: "var(--critical)" }}>Nu — beide zijn vrij</strong>],
            ["Merkregistratie woordmerk Benelux", "BOIP", "€271", "Hoog"],
            ["Inschrijving Architectenregister (indien diploma kwalificeert)", "Bureau Architectenregister", "€102,50 + €83/jr", "Hoog — het maakt de titel een bezit"],
            ["Prompts als bedrijfsgeheim behandelen", "Intern", "€0", "Hoog — nooit publiceren"],
            ["Auteursrecht op ontwerpen regelen in de voorwaarden", "Algemene voorwaarden", "—", "Middel"],
          ]}
          caption="verstelle.nl is sinds 2005 bezet en verstelle.com ook. studioverstelle.nl en studioverstelle.com zijn beide vrij — geverifieerd juli 2026."
        />
      </Section>

      <CounterCase>
        <p>
          <strong>De vergelijkingssectoren hadden allemaal iets wat Elise mist.</strong> Dit is de
          zwakste plek in de hele redenering, en hij komt uit het onderzoek zelf: accountants,
          advocaten en geregistreerde architecten hielden hun prijs mede doordat een{" "}
          <strong>wettelijke titel</strong> de toegang bewaakte. Precies wat een niet-ingeschreven
          interieurontwerper niet heeft. De analogie is dus zwakker dan hij oogt — en dat is meteen
          het sterkste argument om die inschrijving serieus te onderzoeken.
        </p>
        <p>
          <strong>Twee van onze drie echte moats hebben jaren nodig.</strong> Trade-netwerk: één tot
          drie jaar. Merk en portfolio: drie tot zeven. Alleen aansprakelijkheid werkt direct — en
          dat is geen onderscheid, dat is een verzekeringspremie. In jaar één heeft deze studio dus
          feitelijk <strong>geen gracht</strong>.
        </p>
        <p>
          <strong>&ldquo;Wij tekenen ervoor&rdquo; is geen marketingverhaal.</strong> Het is waar en het is
          waardevol, maar het staat op geen enkele Instagrampost die iemand deelt. De dingen die
          verkopen (mooie beelden, een slimme methode) zijn precies de dingen die kopieerbaar zijn;
          het ding dat verdedigt (risico dragen) is onzichtbaar.
        </p>
      </CounterCase>

      <Decisions>
        <Decision
          vraag="Schrijft Elise zich in bij het Architectenregister?"
          opties={[
            "Ja, als het diploma kwalificeert — €102,50 + €83/jaar",
            "Nee — we gebruiken 'interieurontwerper' en zijn veilig",
            "Later, als de studio loopt",
          ]}
          advies="Onderzoek het deze week. Als het diploma van vóór 2015 is, is dit voor ~€100 de enige toegangsbarrière die deze markt kent — en dit hoofdstuk laat zien dat een wettelijke titel precies het bezit was dat andere vakgebieden overeind hield tegen AI."
          hangtAf="Elise's diploma: erkend master, en van vóór 1-1-2015?"
        />
        <Decision
          vraag="Geven we de methode een merknaam?"
          opties={[
            "Ja — 'De Verstelle Methode', vastleggen bij BOIP",
            "Nee — investeer die energie in een garantie",
          ]}
          advies="Nee. Ons eigen plan zei van wel, maar het onderzoek vond geen enkel bewijs dat het brandmerken van een werkwijze pricing power oplevert bij diensten die de klant toch niet kan beoordelen. Een harde garantie doet dat aantoonbaar wél."
        />
        <Decision
          vraag="Welke garantie durven we te geven?"
          opties={[
            "Geld terug op de Verkenning als het niet bevalt",
            "Budgetgarantie: wij dragen de overschrijding tot X%",
            "Geen — te riskant voor een eenpitter",
          ]}
          advies="Geld terug op de Verkenning. Het is begrensd (€2.000), het maakt de eerste stap risicoloos voor de klant, en het is precies het signaal dat een credence good nodig heeft. Een budgetgarantie is voor later, met verzekering erachter."
          hangtAf="Wat de beroepsaansprakelijkheidsverzekering toestaat — zie hoofdstuk 10."
        />
      </Decisions>

      <Sources
        note="~10.700 woorden onderbouwing in research-notes/onderscheid.md, inclusief negen tegenwerpingen."
        items={[
          { t: "Wet op de architectentitel, art. 23 lid 1 (BWBR0004189)", url: "https://wetten.overheid.nl/BWBR0004189", org: "wetten.overheid.nl", jaar: "geldend 2026" },
          { t: "Registration/consultation architects register — Engelse titelvoorlichting", url: "https://business.gov.nl/regulations/registration-consultation-architects-register/", org: "business.gov.nl", jaar: "2026" },
          { t: "Rb. Almelo 27-02-2009 — dwangsom €6.352,92 wegens onrechtmatig titelgebruik", org: "Rechtspraak.nl", jaar: "2009" },
          { t: "'De titel: verdiend, niet zelfbenoemd'", org: "BNI", jaar: "juli 2026" },
          { t: "Getty Images kwartaalcijfers — Editorial +21,4% vs Creative +0,7%", org: "Getty Images", jaar: "2025–2026" },
          { t: "AI en freelance-verdiensten: +90% volume, −13% per contract", org: "Upwork-onderzoek", jaar: "2025" },
          { t: "Finance and the cheap entrant — budget layer expansion (JFE)", org: "Reher & Sokolinski", jaar: "2024" },
          { t: "Databankenrecht: British Horseracing Board / William Hill", org: "HvJ EU", jaar: "C-203/02" },
          { t: "Merkregistratie Benelux — tarieven", url: "https://www.boip.int", org: "BOIP", jaar: "2026" },
        ]}
      />

      <ChapterCoach slug="onderscheid" />

      

      <NextPage slug="positionering" title="Positionering & propositie" n="04" />
    </>
  );
}
