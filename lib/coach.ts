// ============================================================
// De coach-laag.
//
// Een hoofdstuk dat alleen concludeert is een rapport. Een
// hoofdstuk dat huiswerk meegeeft is een instrument. Per
// hoofdstuk: wat je zelf kunt doen (met een tijdsindicatie,
// want anders gebeurt het niet), en waar je over moet nadenken.
//
// De vragen zijn aan Elise gericht — je/jij. Warm, maar ze
// mogen schuren. Een coach die alleen aardig is, is een fan.
//
// De links komen uit research-notes/ en zijn daar al gedateerd;
// hier staat alleen waaróm je ze zou openen.
// ============================================================

import type { NoteSlug } from "@/lib/notes";

export type CoachInhoud = {
  doen: { taak: string; tijd: string }[];
  denken: string[];
  lezen: { titel: string; url: string; waarom: string }[];
  notes: NoteSlug[];
};

export const COACH: Record<string, CoachInhoud> = {
  // ------------------------------------------------------------
  markt: {
    doen: [
      {
        taak: "Blader een halfuur door funda in de band €500k–€2M in je eigen buurt en tel hoeveel woningen om een verbouwing schreeuwen. Dit is je markt, in beelden in plaats van in cijfers.",
        tijd: "30 min",
      },
      {
        taak: "Haal de laatste NVM-kwartaalcijfers erbij en kijk of het transactievolume nog klopt met dit hoofdstuk. Dit dossier is van juli 2026; de woningmarkt draait sneller dan dat.",
        tijd: "20 min",
      },
      {
        taak: "Schrijf de namen op van iedereen die je kent in de vier segmenten. Niet 'mensen zoals zij' — echte namen. Dat lijstje is je werkelijke markttoegang.",
        tijd: "15 min",
      },
    ],
    denken: [
      "In welk van de vier segmenten kén je daadwerkelijk mensen? De vijver is ~256 huishoudens per jaar; het risico is niet dat hij te klein is, maar dat je er geen toegang toe hebt.",
      "Voelt 256 als krap of als genoeg? Je hebt er zes per jaar nodig. Dat is 2,3% — maar wel 2,3% van een groep waar je vandaag 0% van kent.",
      "Wat doe je als de rente stijgt en de verbouwmarkt inzakt? Welk deel van je plan overleeft dat, en welk deel is er dan meteen niet meer?",
      "Amsterdam, Den Haag of Rotterdam — je kunt niet in drie steden geloofwaardig lokaal zijn met vier uur marketing per week. Welke kies je, en waarom die?",
    ],
    lezen: [
      {
        titel: "Kadaster — woningmarktcijfers",
        url: "https://www.kadaster.nl/zakelijk/vastgoedinformatie/vastgoedcijfers",
        waarom: "De primaire bron onder de transactiecijfers. Ververs ze zelf voordat je ze in een gesprek gebruikt.",
      },
      {
        titel: "NVM — woningmarktcijfers per kwartaal",
        url: "https://www.nvm.nl/wonen/marktinformatie/",
        waarom: "Actueler dan het Kadaster en uitgesplitst per regio. Het snelste antwoord op 'draait de markt nog?'.",
      },
      {
        titel: "CBS — bouwen en wonen",
        url: "https://www.cbs.nl/nl-nl/visualisaties/dashboard-bevolking",
        waarom: "Voor de segmentcijfers: huishoudsamenstelling, inkomens, verhuisbewegingen.",
      },
      {
        titel: "Houzz — 2023 renovatie-onderzoek",
        url: "https://pro.houzz.com/pro-learn/blog/2023-houzz-survey-offers-homeowner-renovation-insight",
        waarom: "Het beste harde cijfer over wat huiseigenaren tijdens een verbouwing werkelijk dwarszit — inclusief het cijfer dat tegen ons pleit.",
      },
    ],
    notes: ["markt"],
  },

  // ------------------------------------------------------------
  onderscheid: {
    doen: [
      {
        taak: "Zoek jezelf op in het Architectenregister en stel definitief vast of je de titel mag voeren. Dit is de grootste openstaande juridische vraag van het hele dossier — en hij hangt op één diploma.",
        tijd: "10 min",
      },
      {
        taak: "Zoek je masterdiploma op en kijk naar de datum. Vóór 1-1-2015 verandert het antwoord; erna waarschijnlijk ook, maar anders.",
        tijd: "10 min",
      },
      {
        taak: "Probeer RoomGPT of Interior AI op je eigen woonkamer en noteer exact waar het faalt. Je moet in één zin kunnen uitleggen waarom jouw €2.000 anders is dan hun €15.",
        tijd: "20 min",
      },
      {
        taak: "Kijk of studioverstelle.nl en .com nog vrij zijn. Op de onderzoeksdatum waren ze dat allebei. €25, en onomkeerbaar als iemand anders het eerst doet.",
        tijd: "5 min",
      },
    ],
    denken: [
      "Welke moat bouw je met plezier, tien jaar lang? Een voorsprong die je haat onderhouden, is geen voorsprong maar een schuld.",
      "Wat doe je op de dag dat iemand 'AI-interieurscan €99' lanceert in Amsterdam? Als je antwoord 'beter zijn' is, heb je geen antwoord.",
      "De titelbescherming voelt als een obstakel. Maar 'Residential Transformation Studio' zegt méér dan 'interieurarchitect' — is de beperking eigenlijk een cadeau?",
      "Van alle moats in dit hoofdstuk is de gecureerde materialenbibliotheek de saaiste en de sterkste. Ben je bereid om honderd materialen in te voeren voordat het leuk wordt?",
      "Als iemand jouw complete methode kopieert — de beelden, de sessie, de spraak — wat heb jij dan nog dat zij niet hebben? Als dat antwoord kort is, is er werk te doen.",
    ],
    lezen: [
      {
        titel: "Architectenregister — inschrijving en titel",
        url: "https://www.architectenregister.nl/",
        waarom: "De bron onder de titelbescherming. Zoek jezelf op; check de eisen en de kosten (~€102,50 + €83/jr).",
      },
      {
        titel: "Wet op de architectentitel",
        url: "https://wetten.overheid.nl/BWBR0004541/",
        waarom: "Artikel 23. Lees het zelf: de bescherming dekt woordcombinaties én de Engelse vorm.",
      },
      {
        titel: "BOIP — merk registreren",
        url: "https://www.boip.int/nl/ondernemers/merken",
        waarom: "Voor de naam van de studio én van de methode. Begin met de gratis beschikbaarheidscheck.",
      },
      {
        titel: "BNI — beroepsvereniging interieurarchitecten",
        url: "https://www.bni.nl/",
        waarom: "De vakvereniging: lidmaatschapseisen, DNR-voorwaarden, en het antwoord op wie zich wat mag noemen.",
      },
    ],
    notes: ["onderscheid"],
  },

  // ------------------------------------------------------------
  positionering: {
    doen: [
      {
        taak: "Zeg de one-liner hardop op een verjaardag en kijk naar het gezicht van de ander. Niet of ze het aardig vinden — of ze het begríjpen, binnen twee seconden.",
        tijd: "één verjaardag",
      },
      {
        taak: "Test drie taglines op vijf vrienden en vraag een dag later welke ze nog weten. Wat niet blijft hangen, bestaat niet.",
        tijd: "een week",
      },
      {
        taak: "Schrijf je antwoord op 'waarom niet gewoon ChatGPT?' in drie zinnen op. Je gaat die vraag honderd keer krijgen; de eerste keer wil je niet improviseren.",
        tijd: "20 min",
      },
    ],
    denken: [
      "Overleeft 'Residential Transformation Studio' het gesprek bij je huidige werkgever — en bij je moeder? Als je het moet uitleggen, is het een positionering voor de branche en niet voor de klant.",
      "Nederlands of Engels? Engels trekt expats en internationale panden aan; Nederlands trekt de Sarphatiparkbuurt aan. Wie wil je aan tafel, en wie mag je afstoten?",
      "Het onderzoek zegt: haal AI uit de propositie. Maar het is wél het interessantste aan je verhaal. Kun je leven met een verhaal dat sáái is aan de buitenkant en spannend aan de binnenkant?",
      "'Een cocon van verbeelding, doch rust' — is dat jouw zin of een mooie zin? Je gaat 'm tien jaar dragen.",
    ],
    lezen: [
      {
        titel: "Framework Studio",
        url: "https://framework.eu/",
        waarom: "De sterkste positionering van de directe groep. Kijk hoe weinig woorden ze nodig hebben.",
      },
      {
        titel: "Nicemakers — about",
        url: "https://www.nicemakers.com/about",
        waarom: "Positionering op gevoel en energie in plaats van op stijl. Precies wat jij ook probeert.",
      },
      {
        titel: "Studio Michiel Wijnen",
        url: "https://www.michielwijnen.com/about",
        waarom: "De dichtstbijzijnde structurele analogie: solo, concept t/m realisatie. Kijk hoe hij dat verwoordt.",
      },
      {
        titel: "BOIP — merk registreren",
        url: "https://www.boip.int/nl/ondernemers/merken",
        waarom: "Als de methode een naam krijgt, hoort die naam beschermd te worden vóórdat je hem publiceert.",
      },
    ],
    notes: ["onderscheid", "concurrentie"],
  },

  // ------------------------------------------------------------
  prijsmodel: {
    doen: [
      {
        taak: "Zet de capaciteitscalculator hierboven op je échte beschikbare uren — niet de aanname, maar de uren die je na je baan, je leven en je slaap overhoudt. Kijk wat er breekt.",
        tijd: "20 min",
      },
      {
        taak: "Bereken je persoonlijke ondergrens: vaste lasten gedeeld door factureerbare uren. Dat getal is je échte minimumtarief, en het is waarschijnlijk hoger dan je hoopt.",
        tijd: "30 min",
      },
      {
        taak: "Bel één bevriende ondernemer en vraag wat hij per uur rekent en of hij dat hardop durft te zeggen. Tarieven zijn een taboe; dat taboe kost je geld.",
        tijd: "20 min",
      },
    ],
    denken: [
      "Kun je 'tweeduizend euro' hardop zeggen tegen een vreemde zonder te knipperen? Oefen het. Wie zijn eigen prijs niet gelooft, krijgt hem niet.",
      "€250k is geen omzetdoel maar €201 per uur. Voelt dat als veel? Vergelijk het met een advocaat, een aannemer en een IKEA-adviseur van €29,99 — en bepaal welk vergelijk jouw klant maakt.",
      "Welk product schrap je als er één moet sneuvelen? Als het antwoord 'geen' is, heb je geen productladder maar een menukaart.",
      "De Verkenning is je funnel-motor én je product. Wat gebeurt er als klanten de Verkenning kopen en dáárna stoppen? Is dat een mislukking of een prima bedrijf?",
      "Jouw klantprofiel zegt 'vanaf €75k verbouwbudget', maar De Transformatie op 12,5% van €75k is €9.375 — Ontwerp-geld. Voor €40k Transformatie heb je een klant van €320k nodig. Welke van de twee is je echte klant?",
    ],
    lezen: [
      {
        titel: "BNO — honorariumrichtlijnen",
        url: "https://www.bno.nl/",
        waarom: "De beroepsvereniging voor ontwerpers: richtlijnen voor tarieven en voorwaarden.",
      },
      {
        titel: "PD Interieurontwerp — tarieven",
        url: "https://www.pdinterieurontwerp.nl/tarieven",
        waarom: "Het hoogste geverifieerde punt van het transparante segment: €3.650 + styling. Jouw Ontwerp begint waar hun Goud eindigt.",
      },
      {
        titel: "HUIZ design — tarieven",
        url: "https://www.huizdesign.nl/interieurontwerp/tarieven",
        waarom: "€90/uur en pakketten vanaf €1.595 — precies het prijspunt van jouw Verkenning, maar dan voor een heel ontwerp. Weet waar je tegen concurreert.",
      },
      {
        titel: "DNR 2011 — De Nieuwe Regeling",
        url: "https://www.bnl.nl/",
        waarom: "De standaardvoorwaarden voor ontwerpopdrachten in NL. Basis voor je aansprakelijkheidsplafond en meerwerkclausules.",
      },
    ],
    notes: ["prijsmodel"],
  },

  // ------------------------------------------------------------
  klantreis: {
    doen: [
      {
        taak: "Mystery-shop de intake van één concurrent: vul hun formulier in en meet hoe lang het duurt voor er iets terugkomt, en in welke toon. Dat is de lat.",
        tijd: "15 min + wachten",
      },
      {
        taak: "Schrijf je eigen antwoord-op-intake-mail en lees hem hardop voor. Klinkt het als jou, of als een bureau?",
        tijd: "30 min",
      },
      {
        taak: "Loop de demo's van de tools door en bepaal per stap: is dit een stap waar de klant vertrouwen wint, of een stap waar wij tijd winnen? Beide mag — maar weet welke het is.",
        tijd: "30 min",
      },
    ],
    denken: [
      "Waar ben jíj de bottleneck in deze pijplijn? Wees eerlijk: het is niet de techniek.",
      "Wat gebeurt er als er drie leads in één week binnenkomen terwijl je een baan hebt? Wie wacht, hoe lang mag dat, en wat zeg je tegen nummer drie?",
      "De Verkenning is verkoop én product tegelijk. Wat als iemand hem koopt met de intentie om je ideeën mee te nemen naar een goedkopere partij? Accepteer je dat als bedrijfsrisico?",
      "Op welk moment in deze reis valt het besluit — echt? Als je dat weet, weet je waar al je aandacht heen moet, en de rest mag automatisch.",
    ],
    lezen: [
      {
        titel: "Aanhuis.nl — interieuradvies",
        url: "https://aanhuis.nl/interieuradvies/",
        waarom: "Hun €195-materialenplan wordt een tegoedbon — precies de verrekenconstructie die dit hoofdstuk voorstelt. Kijk hoe zij het opschrijven.",
      },
      {
        titel: "Cal.com",
        url: "https://cal.com/",
        waarom: "De agendakoppeling aan het eind van de intake. Open source, gratis voor één persoon.",
      },
      {
        titel: "Houzz — wat huiseigenaren van een professional willen",
        url: "https://pro.houzz.com/pro-learn/blog/2023-houzz-survey-offers-homeowner-renovation-insight",
        waarom: "Planning bijhouden en heldere communicatie staan hóger dan visualisatie. Dat hoort je klantreis te vormen.",
      },
    ],
    notes: ["prijsmodel", "validatie"],
  },

  // ------------------------------------------------------------
  marketing: {
    doen: [
      {
        taak: "Maak vandaag het Google Bedrijfsprofiel aan. Gratis, en volgens dit onderzoek kanaal nummer één — nog vóór Instagram. Dit is de goedkoopste actie in het hele dossier.",
        tijd: "1 uur",
      },
      {
        taak: "Analyseer vijf Instagram-accounts uit de lijst en noteer hun cadans, hun formats en hun eerste drie seconden. Niet om te kopiëren — om te zien wat er wérkt in dit vak.",
        tijd: "45 min",
      },
      {
        taak: "Schrijf drie proefposts in je eigen stem en laat ze aan iemand lezen die je goed kent. Vraag: klink ik hier als mezelf?",
        tijd: "45 min",
      },
      {
        taak: "Bel één makelaar in jouw prijsband voor een kop koffie. Geen pitch — vraag wat hun klanten na de sleuteloverdracht als eerste vragen.",
        tijd: "1 uur",
      },
    ],
    denken: [
      "Als drie van je vier uur per week naar één kanaal moeten — welk? Het onderzoek zegt Google, je gevoel zegt waarschijnlijk Instagram. Wie heeft gelijk, en hoe kom je daarachter?",
      "Ben je bereid je gezicht te laten zien? Een studio zonder gezicht kan groeien; een studio met gezicht groeit sneller en is kwetsbaarder. Dat is een echte keuze, geen marketingdetail.",
      "Bricks Studio heeft jouw smaak en 2.850 volgers. Bereik is dus geen bewijs van smaak — maar zonder bereik geen klanten. Hoe los jij dat op waar zij het niet oplossen?",
      "Het AI-verhaal is journalistiek interessant en commercieel gevaarlijk. Vertel je het aan de pers en niet aan de klant? Kan dat, in het tijdperk van Google?",
      "Wat is je eerste post? Niet 'wat voor soort' — welke, letterlijk. Als je die niet kunt bedenken, is het kanaal nog niet van jou.",
    ],
    lezen: [
      {
        titel: "Google Bedrijfsprofiel — aanmaken",
        url: "https://www.google.com/intl/nl_nl/business/",
        waarom: "Kanaal #1 uit het onderzoek. Gratis, één uur, en het werkt terwijl je slaapt. Doe dit vandaag.",
      },
      {
        titel: "Framework Studio op Instagram",
        url: "https://www.instagram.com/frmwrkstudio/",
        waarom: "83K volgers, het hoogste bereik van de boutique-groep. Reverse-engineer hun formats.",
      },
      {
        titel: "Studio Reinder Veenstra — regio-SEO",
        url: "https://reinderveenstra.com/binnenhuisarchitect-amsterdam",
        waarom: "De sterkste SEO van de premium-groep: landingspagina's per regio. Saai, en het werkt.",
      },
      {
        titel: "vtwonen",
        url: "https://www.vtwonen.nl/",
        waarom: "Het grootste NL-interieurmedium. Kijk welk soort studio's er wél in komen — en waarom.",
      },
      {
        titel: "Residence",
        url: "https://www.residence.nl/",
        waarom: "Het high-end segment. Dichter bij jouw klant dan vtwonen, met een kleiner bereik.",
      },
    ],
    notes: ["marketing"],
  },

  // ------------------------------------------------------------
  tools: {
    doen: [
      {
        taak: "Doorloop alle zeven demo's en noteer per demo één ding: zou je dit aan een klant durven laten zien? Als het antwoord nee is, weet je wat er nog moet gebeuren.",
        tijd: "45 min",
      },
      {
        taak: "Neem één echt gesprek van dertig minuten op — met toestemming — en gooi het door een transcriptiedienst. Lees het terug. Dít is de enige manier om te weten of de spraaklaag jou echt helpt.",
        tijd: "1 avond",
      },
      {
        taak: "Begin de materialenbibliotheek. Niet in software: in een spreadsheet. Tien materialen met leverancier en prijsrange. Dat is de saaiste en sterkste moat in het dossier.",
        tijd: "1 avond",
      },
    ],
    denken: [
      "Voor welke tool zou je vandaag geld betalen als iemand hem morgen kon leveren? Dat is de tool die eerst gebouwd wordt — en de rest kan wachten.",
      "Wat breekt er als je met núl eigen tools start? Waarschijnlijk niets, in fase 0. Is dat een geruststelling of een waarschuwing?",
      "Floris bouwt dit. Wat gebeurt er met de tooling als jullie over twee jaar ruzie krijgen, of als hij geen tijd meer heeft? Dat gesprek kost vandaag een uur en over twee jaar een bedrijf.",
      "Elke avond aan software is een avond niet aan portfolio. Een studio zonder portfolio heeft geen tools nodig — die heeft klanten nodig. Weet je zeker dat de volgorde klopt?",
      "Als de tooling ooit aan andere studio's verkocht kan worden: is dat een tweede bedrijf, of een afleiding van het eerste?",
    ],
    lezen: [
      {
        titel: "Programa",
        url: "https://programa.design/",
        waarom: "De enige gekochte tool die het vak écht kent: specs, materiaallijsten, moodboards, budget. $71/mnd. Kijk wat je zou missen.",
      },
      {
        titel: "Moxie",
        url: "https://www.withmoxie.com/pricing",
        waarom: "De beste koop-optie voor een portaal: white-label + eigen domein voor $20. Het alternatief voor zelf bouwen.",
      },
      {
        titel: "Chaos Veras",
        url: "https://www.chaos.com/veras",
        waarom: "Rendert vanuit het echte 3D-model, dus geometrie kán niet driften. De professionele route die wij níét kiezen — weet waarom.",
      },
      {
        titel: "Mistral — Voxtral Transcribe",
        url: "https://mistral.ai/news/voxtral-transcribe-2/",
        waarom: "De aanbevolen spraakdienst: EU-hosting, diarisatie inbegrepen, Nederlands native.",
      },
    ],
    notes: ["tools-buildvsbuy"],
  },

  // ------------------------------------------------------------
  kosten: {
    doen: [
      {
        taak: "Open de prijspagina's van de aanbevolen stack en controleer elk bedrag op je eigen aanmelddatum. Dit onderzoek zag drie 'bekende feiten' sneuvelen in één ronde — die kans loopt jij ook.",
        tijd: "45 min",
      },
      {
        taak: "Reken je persoonlijke maandburn uit: wat kost jouw leven, los van de studio? Dat getal bepaalt je transitiepoort, niet de omzet.",
        tijd: "30 min",
      },
      {
        taak: "Vraag twee AOV-offertes aan. Dit is de duurste post in het hele plan en de enige die je écht overeind houdt als je ziek wordt.",
        tijd: "1 uur",
      },
    ],
    denken: [
      "Hoeveel maanden buffer wil je hebben voordat je opzegt? Zeg het getal hardop en kijk of je het meent.",
      "De AI-marge is 99,57% — op AI-kosten. De echte marge, met jouw uren erin, is ongeveer 52%. Welk van die twee getallen ga je onthouden? Onthoud het tweede.",
      "Welke kostenpost schrap je het eerst in een slechte maand? Als dat de verzekering is, heb je een probleem dat groter is dan die maand.",
      "€62 per maand vaste tech is niets. Betekent dat dat je te weinig uitgeeft aan gereedschap, of precies genoeg?",
    ],
    lezen: [
      {
        titel: "Moneybird — prijzen",
        url: "https://www.moneybird.nl/prijzen/",
        waarom: "€15/mnd, en de enige met een gratis publieke API. Let op: Start, niet Compact.",
      },
      {
        titel: "Vercel — prijzen",
        url: "https://vercel.com/pricing",
        waarom: "Waarom Hobby geen optie is zodra je factureert: dat plan is expliciet niet-commercieel.",
      },
      {
        titel: "Gemini API — prijzen",
        url: "https://ai.google.dev/gemini-api/docs/pricing",
        waarom: "$0,134 per beeld — de grootste variabele post. Beeld is 81% van je AI-rekening.",
      },
      {
        titel: "Belastingdienst — btw voor ondernemers",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/btw",
        waarom: "Btw is geen kostenpost maar cashflow. Let op de verleggingsregeling voor buitenlandse diensten.",
      },
    ],
    notes: ["tools-buildvsbuy", "prijsmodel"],
  },

  // ------------------------------------------------------------
  setup: {
    doen: [
      {
        taak: "Lees vanavond de nevenwerkzaamheden-clausule in je arbeidscontract. Niet morgen. Alles in dit hoofdstuk hangt aan wat daar staat.",
        tijd: "15 min",
      },
      {
        taak: "Vraag twee AOV-offertes aan en twee voor beroepsaansprakelijkheid. De eerste is de dure verrassing; de tweede dekt het scenario waarin jouw ontwerpfout een verbouwing kost.",
        tijd: "1 uur",
      },
      {
        taak: "Claim studioverstelle.nl en .com. Op de onderzoeksdatum waren beide vrij. €25 en vijf minuten.",
        tijd: "5 min",
      },
      {
        taak: "Schrijf de consent-tekst voor de opname en spreek hem hardop uit. Als hij ongemakkelijk klinkt, is hij nog niet goed — en je gaat hem bij elke sessie zeggen.",
        tijd: "30 min",
      },
    ],
    denken: [
      "De belangrijkste zin uit het hele dossier: zeg nooit zelf op. Weet je waarom? Vaststellingsovereenkomst, WW, en de UWV-startersregeling — 26 weken op 71% met je bedrijfsinkomsten er níét van afgetrokken. Dat is meer waard dan alle vijf validatie-experimenten samen.",
      "Eenmanszaak nu — bij welk winstniveau ga je heroverwegen? Zet dat getal ergens op, anders schuift het door tot je accountant het zegt.",
      "Je gaat gesprekken opnemen in de woonkamers van vreemden. Kun je met droge ogen uitleggen waar die opname staat, hoe lang, en wie hem kan horen? Zo niet, dan is de spraaklaag nog niet klaar om verkocht te worden.",
      "Wat is je plan als je twee weken ziek bent midden in een Transformatie? Dit is geen verzekeringsvraag maar een ontwerpvraag over je bedrijf.",
    ],
    lezen: [
      {
        titel: "KvK — bedrijf starten",
        url: "https://www.kvk.nl/starten/",
        waarom: "Het beginpunt: inschrijving, rechtsvorm, en de checklists die je toch moet doorlopen.",
      },
      {
        titel: "UWV — WW en starten als zelfstandige",
        url: "https://www.uwv.nl/particulieren/zelfstandigen/",
        waarom: "De startersregeling: de reden waarom je nooit zelf moet opzeggen. Lees dit vóór je een gesprek met je werkgever aangaat.",
      },
      {
        titel: "Autoriteit Persoonsgegevens — AVG",
        url: "https://www.autoriteitpersoonsgegevens.nl/",
        waarom: "Je neemt gesprekken op en verwerkt ze met AI. Dit is de toezichthouder; lees minstens de grondslagen en de bewaartermijnen.",
      },
      {
        titel: "Architectenregister",
        url: "https://www.architectenregister.nl/",
        waarom: "De titelvraag, definitief. ~€102,50 inschrijving + €83/jaar.",
      },
      {
        titel: "BOIP — merk registreren",
        url: "https://www.boip.int/nl/ondernemers/merken",
        waarom: "Naam van de studio en van de methode. Begin met de gratis check.",
      },
    ],
    notes: ["setup"],
  },

  // ------------------------------------------------------------
  risicos: {
    doen: [
      {
        taak: "Kies je top-3 risico's en schrijf per risico het early-warning-signaal op een kaartje boven je bureau. Een risico dat je pas ziet als het gebeurt, is geen risico maar een ramp.",
        tijd: "30 min",
      },
      {
        taak: "Test de geometrie-drift op één echte kamer. Het grootste technische risico in dit dossier is beredeneerd, niet gemeten — en één avond lost dat op.",
        tijd: "1 avond",
      },
      {
        taak: "Praat met vijf tot acht potentiële klanten voordat je de propositie vastzet. Dit staat hier omdat het kernbewijs onder de hele methode ontbreekt.",
        tijd: "2 weken",
      },
    ],
    denken: [
      "Wat is je plan bij twee weken ziekte midden in een Transformatie? Solo is geen risico dat je mitigeert, het is een risico dat je accepteert of afdekt.",
      "Welk risico vermijd je om over ná te denken? Dat is meestal het echte. Schrijf het op voordat je dit hoofdstuk sluit.",
      "Wat als de klantinterviews zeggen dat de visualisatiepijn niet bestaat? Ben je bereid de propositie om te gooien, of ga je het bewijs zoeken dat je gelijk hebt?",
      "Als er één ding fout mag gaan zonder dat het bedrijf omvalt — welk? En als er één ding niet fout mag gaan, beschermt je huidige plan dat dan ook echt?",
    ],
    lezen: [
      {
        titel: "Autoriteit Persoonsgegevens — AVG",
        url: "https://www.autoriteitpersoonsgegevens.nl/",
        waarom: "Het opname-risico is niet theoretisch. Ken je grondslag voordat je opneemt.",
      },
      {
        titel: "Exact — MKB Barometer bouw",
        url: "https://www.exact.com/nl/nieuws/percentage-bouwprojecten-dat-binnen-tijd-en-budget-wordt-opgeleverd-met-ruim-10-gedaald",
        waarom: "Het betrouwbaarste cijfer over uitloop: 73% van de bouwprojecten haalt tijd en budget, was 85%. Ruim één op vier loopt uit — daar zit jouw scope creep.",
      },
      {
        titel: "Vereniging Eigen Huis — verbouwen",
        url: "https://www.eigenhuis.nl/verbouwen",
        waarom: "Wat de consument leest over verbouwrisico's. Dat is de verwachting waarmee je klant binnenkomt.",
      },
    ],
    notes: ["validatie", "setup", "tools-buildvsbuy"],
  },

  // ------------------------------------------------------------
  roadmap: {
    doen: [
      {
        taak: "Benoem deze maand drie concrete mensen uit je netwerk voor een fase-0-pilot. Namen, geen types. Als je ze niet kunt noemen, is fase 0 nog niet begonnen.",
        tijd: "20 min",
      },
      {
        taak: "Prik de datum van je eerste betaalde Verkenning. Een fase zonder datum is een voornemen.",
        tijd: "5 min",
      },
      {
        taak: "Schrijf je transitiepoort in getallen op: hoeveel pipeline, hoeveel buffer, hoeveel afgeronde projecten. Geef dat briefje aan iemand die je eraan mag houden.",
        tijd: "30 min",
      },
    ],
    denken: [
      "Wat is — in getallen — jouw poort om op te zeggen? Als het 'als het goed voelt' is, ga je te vroeg of nooit.",
      "Wie houdt je aan die poort? Een gate die je zelf mag verzetten, is geen gate.",
      "Fase 0 is portfolio bouwen tegen gereduceerd tarief. Hoeveel projecten wil je gratis of goedkoop doen voordat het zonde is van je tijd — en hoe herken je dat moment?",
      "Wat is het eerste dat je uitbesteedt als het loopt? Solopreneur betekent niet alles zelf. Fotografie is meestal het antwoord; is dat bij jou ook zo?",
      "Als dit over drie jaar niet gelukt is — wat was dan waarschijnlijk de reden? Schrijf het op. Dat is je grootste risico, en je weet het nu al.",
    ],
    lezen: [
      {
        titel: "UWV — starten vanuit de WW",
        url: "https://www.uwv.nl/particulieren/zelfstandigen/",
        waarom: "De startersregeling bepaalt de vorm van je transitiepoort. Lees dit vóór je iets afspreekt met je werkgever.",
      },
      {
        titel: "KvK — ondernemersplan",
        url: "https://www.kvk.nl/starten/het-ondernemingsplan/",
        waarom: "Saai, en het dwingt je de getallen op te schrijven die je nu nog kunt vermijden.",
      },
      {
        titel: "Vereniging Eigen Huis — verbouwen",
        url: "https://www.eigenhuis.nl/verbouwen",
        waarom: "Voor je pilotprojecten: wat je klant leest en verwacht voordat hij bij jou zit.",
      },
    ],
    notes: ["validatie"],
  },
};
