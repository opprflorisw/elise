import type { Metadata } from "next";
import Link from "next/link";
import { PrdHead, Flow, Waarde, Koop, Kpis, Privacy } from "@/components/research/Prd";
import { Section, Prose, CounterCase, Decision, Decisions, Versus, Thesis } from "@/components/research/Blocks";
import { Coach, VerderLezen, Achtergrond } from "@/components/research/Coach";
import { MaterialenDemo } from "@/components/research/demos/Materialen";

export const metadata: Metadata = { title: "Budget & materialen — Verstelle OS" };

export default function Page() {
  return (
    <>
      <PrdHead
        n="05"
        naam="Budget & materialen"
        oneliner="Honderd materialen met een prijsrange en een reden — en daaruit een band, nooit een getal."
        verdict="bouwen"
        bouwtijd="4–6 avonden, maar begin bij de bibliotheek"
        eigenaars={["Elise", "AI"]}
      />

      <Section title="Het probleem">
        <Prose>
          <p>
            &ldquo;Wat gaat dit ongeveer kosten?&rdquo; is de tweede vraag die een klant stelt, en
            vandaag is het antwoord ofwel stilte ofwel een getal dat Elise ter plekke verzint. Beide
            kosten haar een klant: de stilte omdat twijfel de duurste emotie is, het getal omdat een
            verzonnen getal vroeg of laat een belofte blijkt.
          </p>
          <p>
            Ondertussen zoekt ze bij élk project dezelfde prijzen opnieuw op. Hetzelfde burl-fineer,
            dezelfde natuursteenhandel, dezelfde mohair — elke keer vanaf nul, elke keer een beetje
            anders. De kennis ontstaat wel, maar hij landt nergens.
          </p>
        </Prose>
        <Thesis>
          Begin niet bij de software. Begin bij de bibliotheek — die is het bedrijf; de tool eromheen
          is een paar avonden.
        </Thesis>
      </Section>

      <Section title="Voor wie">
        <Prose>
          <p>
            <strong>Primair: Elise.</strong> De bibliotheek is haar geheugen, buiten haar hoofd
            gezet. Zij voert in, zij bepaalt de range, zij schrijft de reden erbij — en die reden is
            geen documentatie maar het product: het is haar smaak, expliciet gemaakt en herbruikbaar.
          </p>
          <p>
            <strong>Secundair: de klant</strong>, en dan uitsluitend als lezer. Hij ziet de band in{" "}
            <Link href="/research/tools/portaal" className="r-link">
              het portaal
            </Link>{" "}
            — read-only, met de disclaimer eraan vast — vanaf het{" "}
            <Link href="/research/klantreis" className="r-link">
              Definitief ontwerp
            </Link>
            , niet eerder. Een budgetband tijdens de Verkenning is een prijskaartje op een gesprek
            dat nog over gevoel gaat.
          </p>
        </Prose>
      </Section>

      <Section title="Wat het doet">
        <Flow
          stappen={[
            { t: "Elise voert een materiaal in: naam, leverancier, eenheid, laag, hoog — en waaróm zij dit kiest", wie: "Elise" },
            { t: "De bibliotheek groeit per project; na twintig projecten weet deze studio wat dingen écht kosten", wie: "Elise" },
            { t: "Bij een ontwerp selecteert Elise de materialen per ruimte", wie: "Elise" },
            { t: "Hoeveelheden erbij — een ruwe schatting uit het ontwerp, die Elise corrigeert", wie: "AI" },
            { t: "laag × hoeveelheid en hoog × hoeveelheid: er rolt een band uit, geen getal", wie: "AI" },
            { t: "Elise legt de band naast haar gevoel. Klopt de band niet, dan klopt de bibliotheek niet", wie: "Elise" },
            { t: "De band verschijnt in het portaal — read-only, met de disclaimer vastgeklonken", wie: "Klant" },
          ]}
        />
      </Section>

      <Section title="Toegevoegde waarde">
        <Waarde
          uren="≈ 3 u"
          perWat="bespaard per ontwerp"
          toelichting="Drie uur prijzen opzoeken, oude mails doorspitten en leverancierssites afstruinen — per project, elke keer opnieuw. Bij het uurtarief-invariant van €201 is dat ~€600 per ontwerp, en het loopt op met elk project. Maar de echte waarde zit niet in die drie uur: het zit erin dat de kennis blijft. De eerste vulling kost Elise 15 à 20 uur van haar eigen tijd — dat is de investering, en hij verdient zich terug rond project drie. Dit is de enige tool in de lijst waarvan het waardevolste deel geen code is."
          zonder="Elk budgetgesprek begint met een uur zoeken, en het antwoord is elke keer nét anders — want het wordt elke keer opnieuw verzonnen. Erger: de kennis blijft in Elise's hoofd zitten, waar hij niet opstapelt, niet overdraagbaar is en verdwijnt zodra haar aandacht ergens anders is."
        />
      </Section>

      <Section title="MVP-scope">
        <Versus
          leftTitle="Wel in de MVP"
          rightTitle="Bewust niet"
          left={[
            "~100 materialen: naam, leverancier, eenheid, prijsrange — desnoods in een spreadsheet",
            "\"Waarom Verstelle dit kiest\" per materiaal — de smaak opgeschreven",
            "Handmatige selectie per project",
            "Eén band (laag / verwacht / hoog) met de disclaimer eraan vast",
          ]}
          right={[
            "Live leveranciersprijzen via koppelingen — de prijzen die tellen zijn onderhandeld, niet gepubliceerd",
            "Automatische hoeveelheden uit een 3D-model — ander vak, ander product",
            "Eén getal in plaats van een band — één getal is een toezegging",
            "Inkoop, bestellingen en marges — dat is Studio Designer's terrein, en dat bureau bestaat hier niet",
          ]}
        />
      </Section>

      <Section
        title="De demo"
        intro="Drie stappen: de bibliotheek, de selectie, de band. Let vooral op stap 1 — dat is het hele product. De rest is opmaak."
      >
        <MaterialenDemo />
      </Section>

      <Section title="Data & privacy">
        <Privacy
          gegevens={[
            "Materiaalvoorkeuren, gekoppeld aan een adres",
            "Het verbouwbudget van een huishouden — een financieel gegeven",
            "Leverancierscondities: geen persoonsgegeven, wél het bedrijfsgeheim van een derde",
          ]}
          bewaren="De bibliotheek is bedrijfsdata en blijft — dat is het punt van een bibliotheek. De projectselectie en de band hangen aan een klant en volgen de projecttermijn."
          let="het scherpste risico hier is niet privacy maar aansprakelijkheid. Een budgetband die een klant als toezegging leest, ís in de praktijk een toezegging — ongeacht de kleine lettertjes in de interface. De disclaimer hoort in je algemene voorwaarden en in de offerte, niet alleen in een kadertje op een scherm."
        />
      </Section>

      <Section
        title="Koop-alternatieven"
        intro="Prijzen geverifieerd 16-07-2026 in de bouwen-of-kopen-notitie; herverifieer voor een echte inkoopbeslissing. Let op welke kaart hier de groene rand heeft — dat is geen grap."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Koop
            gekozen
            naam="Een spreadsheet"
            prijs="€ 0"
            wat="Twaalf kolommen: naam, categorie, leverancier, eenheid, laag, hoog, waarom. Werkt vanavond, op elke laptop, zonder deploy."
            oordeel="Dit is eerlijk gezegd de juiste MVP. De bibliotheek is 90% van de waarde en 0% van de code; een spreadsheet blokkeert niets en bewijst alles. Bouw de tool pas als de spreadsheet zó goed gevuld is dat je hem niet meer wilt missen — dan weet je ook precies wat je bouwt."
          />
          <Koop
            naam="Programa"
            prijs="$71 / mnd"
            url="https://programa.design/pricing"
            wat="Enige in het veld dat het vak kent: specificaties, materiaallijsten, moodboards, budget, timeline en klantakkoord in één pakket. Eén seat."
            oordeel="Afgewezen, maar met respect. Het heeft materiaallijsten — het heeft niet ónze lijst. De honderd materialen met Elise's reden erbij zijn precies het deel dat geen enkel pakket levert; je zou Programa kunnen kopen en er alsnog dezelfde winter aan invoeren in moeten stoppen. Dan betaal je $852 per jaar voor de opmaak eromheen."
          />
          <Koop
            naam="Studio Designer"
            prijs="$72–109 / gebruiker"
            url="https://www.studiodesigner.com/pricing/"
            wat="Het zware gereedschap: inkoop, orders, marges, voorraad. Gebouwd voor bureaus van 3 tot 15 man met echte inkoopstromen."
            oordeel="Overkill, en niet zomaar een beetje. Dit lost een probleem op dat een solo-studio niet heeft: er is geen inkoopafdeling, er zijn geen orders, er is één persoon met een oog. Je koopt hier een administratie waar je vervolgens medewerkers bij nodig hebt."
          />
        </div>
      </Section>

      <Section title="Afhankelijkheden">
        <Prose>
          <p>
            Deze tool hangt aan het ontwerp — dus aan alles wat ervóór komt. Zonder{" "}
            <Link href="/research/tools/brief" className="r-link">
              het visiedocument
            </Link>{" "}
            zijn er geen richtingen om materialen aan op te hangen, en zonder ontwerp zijn er geen
            hoeveelheden en dus geen band. Wat erna komt is één ding:{" "}
            <Link href="/research/tools/portaal" className="r-link">
              het portaal
            </Link>{" "}
            toont de band read-only. Er hangt verder niets van deze tool af — en dat is precies
            waarom hij achteraan in de bouwvolgorde staat en de bibliotheek vooraan in de agenda.
          </p>
        </Prose>
      </Section>

      <Section title="KPI's">
        <Kpis
          items={[
            {
              kpi: "Materialen in de bibliotheek",
              meet: "Het enige cijfer dat vandaag al kan bewegen. Doel: 40 vóór het eerste betaalde ontwerp, 100 na project vijf. Onder de 40 is de band gokwerk met een grafiekje.",
            },
            {
              kpi: "Band versus aannemersofferte",
              meet: "Valt de echte prijs binnen laag–hoog? Dit is de enige toets die telt. Drie keer mis en de bibliotheek is decoratie — dan hoort er geen band meer naar buiten.",
            },
            {
              kpi: "Uren van selectie naar band",
              meet: "Doel: onder de 30 minuten. Duurt het langer, dan was de spreadsheet sneller — en dan is de spreadsheet het antwoord, niet een verwijt.",
            },
          ]}
        />
      </Section>

      <CounterCase>
        <p>
          <strong>Prijzen verouderen sneller dan je bijhoudt.</strong> Een bibliotheek van honderd
          materialen die achttien maanden oud is, geeft een band die er zelfverzekerd uitziet en
          €30.000 naast zit. Dat is erger dan geen indicatie: geen indicatie laat de klant vragen,
          een verkeerde indicatie laat hem rekenen. En bijhouden is precies het soort werk dat
          nooit dringend is — tot de dag dat het te laat is. Elk cijfer in die bibliotheek hoort een
          datum te dragen, net als elke regel in dit dossier.
        </p>
        <p>
          <strong>Een band die een klant leest, is een belofte die hij hoort.</strong> Je kunt
          &ldquo;indicatie, geen offerte&rdquo; in kapitalen zetten en er tóch aan gehouden worden —
          in het gesprek, in de relatie, en in het ergste geval bij een geschil. Dit is geen
          UI-vraagstuk maar een aansprakelijkheidsvraagstuk, en het hoort thuis in de algemene
          voorwaarden en bij de verzekeraar, niet in een grijs kadertje onder een balkje. Zolang dat
          niet geregeld is, is de veiligste band geen band.
        </p>
        <p>
          <strong>De tool is de beloning; de bibliotheek is het werk.</strong> Vier avonden bouwen
          voelt productief, en het is de aangenaamste manier om het invoeren van honderd materialen
          uit te stellen. Wees eerlijk over de volgorde: als de bibliotheek er over een half jaar
          nog niet is, was dit geen tool-probleem en zou geen enkel pakket — Programa niet, Studio
          Designer niet — het opgelost hebben.
        </p>
      </CounterCase>

      <Coach
        doen={[
          {
            taak: "Open vanavond een spreadsheet en zet er twintig materialen in: naam, leverancier, eenheid, laag, hoog, en één zin waarom jíj dit kiest. Dat is 20% van het product en er staat geen regel code in.",
            tijd: "1 avond",
          },
          {
            taak: "Zoek de laatste drie offertes van je aannemer erbij en vul de échte betaalde prijzen in bij de materialen die je hebt gebruikt. Dit is het verschil tussen een bibliotheek en een verlanglijst.",
            tijd: "2 uur",
          },
          {
            taak: "Leg je band naast de eerstvolgende aannemersofferte die binnenkomt en kijk hoe ver je ernaast zat. Doe dat drie keer vóórdat je een band aan een klant laat zien.",
            tijd: "meelopen",
          },
        ]}
        denken={[
          "Wat doe je als een klant je band uitprint en er bij de oplevering mee zwaait? Dat antwoord moet in je algemene voorwaarden staan, niet in je hoofd.",
          "Na twintig projecten is die bibliotheek het waardevolste bezit van de studio. Waar staat hij? En wie heeft hem als je laptop morgen in de gracht ligt?",
          "Het 'waarom Verstelle dit kiest' is je smaak, opgeschreven. Wil je die eigenlijk wel opschrijven — of is hij meer waard zolang hij alleen in jouw hoofd zit?",
          "Wat is erger: geen prijsindicatie geven, of er één geven die €30.000 te laag blijkt?",
        ]}
      />

      <VerderLezen
        items={[
          {
            titel: "Programa — prijzen",
            url: "https://programa.design/pricing",
            waarom: "Het enige pakket dat het vak kent, voor $71. Kijk zelf wat je krijgt — en wat er ontbreekt: jouw honderd materialen met jouw reden erbij.",
          },
          {
            titel: "Studio Designer — prijzen",
            url: "https://www.studiodesigner.com/pricing/",
            waarom: "Het gereedschap voor bureaus met inkoopstromen. Nuttig om te zien hoe het vak eruitziet als het groeit — en om te bevestigen dat jij daar nu niet bent.",
          },
          {
            titel: "Moneybird — rechtsgeldigheid van een online geaccepteerde offerte",
            url: "https://helpcenter.moneybird.nl/nl/articles/207187-rechtsgeldigheid-online-ondertekenen-offerte",
            waarom: "Wat een geaccepteerde offerte juridisch wél is — en dus precies waarom een budgetband nooit die vorm mag aannemen.",
          },
        ]}
      />

      <Achtergrond notes={["tools-buildvsbuy"]} />

      <Decisions>
        <Decision
          vraag="Waar begint de bibliotheek: in code of in een spreadsheet?"
          opties={[
            "In de app — meteen goed, met invoerschermen en validatie",
            "In een spreadsheet — vanavond nog, twaalf kolommen",
            "In Programa ($71/mnd) met onze eigen kolommen erin",
          ]}
          advies="Spreadsheet, en begin vanavond. De bibliotheek is 90% van de waarde en 0% van de code. Bouw de tool pas op het moment dat de spreadsheet zó gevuld is dat je hem niet meer wilt missen — dan is de tool bovendien goedkoper te bouwen, want dan weet je precies wat erin moet."
          hangtAf="Niets. Dit is de enige beslissing in dit hele dossier die je vanavond kunt uitvoeren."
        />
        <Decision
          vraag="Hoe hard is de disclaimer?"
          opties={[
            "Band + kleine letters in de interface",
            "Band + een expliciete paragraaf in de algemene voorwaarden, elke keer meegestuurd",
            "Geen band naar de klant tot de aannemer heeft geprijsd",
          ]}
          advies="De tweede, en niet omdat het netter oogt: alleen wat in de voorwaarden staat, telt als het misgaat. De band is te waardevol om weg te laten — hij is precies het antwoord op de tweede vraag die elke klant stelt — maar hij is alleen verantwoord met papier eronder."
          hangtAf="Wat je verzekeraar en je algemene voorwaarden toelaten — hoofdstuk 10."
        />
      </Decisions>

      <div className="mt-8">
        <Link
          href="/research/tools/portaal"
          className="group flex items-end justify-between gap-6 border-t border-[var(--line-2)] pt-7"
        >
          <div>
            <p className="r-eyebrow opacity-50">Volgende tool</p>
            <p className="r-display-l mt-1.5 transition-opacity group-hover:opacity-60">Klantportaal</p>
          </div>
          <span className="r-numeral text-[2rem] opacity-25">06</span>
        </Link>
      </div>
    </>
  );
}
