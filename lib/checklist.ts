// The setup checklist — from research-notes/setup.md (48 items, phased).
// Fase A = vóór de eerste klant · B = vóór de eerste €10k · C = vóór fulltime
import type { ChecklistItem } from "@/components/research/Calculators";

export const CHECKLIST: ChecklistItem[] = [
  // ---- FASE A ----
  { id: "1", fase: "Vóór klant 1", actie: "Registreer studioverstelle.nl + studioverstelle.com — beide zijn vrij", waar: "TransIP / Cloudflare", kosten: "€25/jr · 5 min", prio: "must" },
  { id: "2", fase: "Vóór klant 1", actie: "Zet whois-privacy aan (privéadres afschermen)", waar: "registrar", kosten: "€0 · 5 min", prio: "must" },
  { id: "3", fase: "Vóór klant 1", actie: "Lees je arbeidsovereenkomst: nevenwerkzaamheden, concurrentie-, relatie-, geheimhoudings- en IE-beding", waar: "eigen dossier", kosten: "€0 · 1 uur", prio: "must" },
  { id: "4", fase: "Vóór klant 1", actie: "Meld je plannen schriftelijk bij je werkgever en vraag toestemming", waar: "e-mail", kosten: "€0 · 1 week", prio: "must" },
  { id: "5", fase: "Vóór klant 1", actie: "Bij twijfel over bedingen: 1 uur arbeidsrecht-advocaat", waar: "arbeidsrechtadvocaat", kosten: "€200–350 · 1 week", prio: "should" },
  { id: "6", fase: "Vóór klant 1", actie: "Merkvooronderzoek 'Verstelle' in BOIP + EUIPO, klassen 42/35", waar: "boip.int", kosten: "€0 · 1 uur", prio: "must" },
  { id: "7", fase: "Vóór klant 1", actie: "Check handelsnaam in het KvK-handelsregister", waar: "kvk.nl", kosten: "€0 · 15 min", prio: "must" },
  { id: "8", fase: "Vóór klant 1", actie: "Verifieer de titelvraag: kwalificeert het diploma voor het Architectenregister? Zo nee: gebruik onbeschermde termen", waar: "architectenregister.nl", kosten: "€0 · 30 min", prio: "must" },
  { id: "9", fase: "Vóór klant 1", actie: "KvK-inschrijving eenmanszaak, SBI 71112 (+71121, +7022)", waar: "KvK Amsterdam, op afspraak", kosten: "€85,15 · 1–2 wkn wachttijd", prio: "must" },
  { id: "10", fase: "Vóór klant 1", actie: "Btw-id ontvangen en controleren", waar: "Belastingdienst (automatisch)", kosten: "€0 · 1–2 wkn", prio: "must" },
  { id: "11", fase: "Vóór klant 1", actie: "Zakelijke rekening openen", waar: "Knab €7/mnd of Qonto €5/mnd", kosten: "€60–84/jr · 1–3 dagen", prio: "must" },
  { id: "12", fase: "Vóór klant 1", actie: "Aparte spaarrekening voor btw + IB — reserveer 35–40% van elke factuur", waar: "zelfde bank", kosten: "€0 · 10 min", prio: "must" },
  { id: "13", fase: "Vóór klant 1", actie: "Beroepsaansprakelijkheidsverzekering (min. €500k dekking, afgestemd op DNR2025)", waar: "Insify / Honig&Honig", kosten: "€500–900/jr · 1–3 dagen", prio: "must" },
  { id: "14", fase: "Vóór klant 1", actie: "Bedrijfsaansprakelijkheidsverzekering (AVB)", waar: "zelfde verzekeraar", kosten: "€95–400/jr · 1 dag", prio: "must" },
  { id: "15", fase: "Vóór klant 1", actie: "Check bij de BAV: claims-made? uitloopdekking? zijn AI en opnames gemeld?", waar: "verzekeraar", kosten: "€0 · 30 min", prio: "should" },
  { id: "16", fase: "Vóór klant 1", actie: "Download DNR2025 + toelichting; lees de artikelen over AI, privacy en aansprakelijkheid", waar: "nlingenieurs.nl / bna.nl", kosten: "€0 · 3 uur", prio: "must" },
  { id: "17", fase: "Vóór klant 1", actie: "Laat een consumentvariant van je voorwaarden toetsen (grijze/zwarte lijst)", waar: "bouwrecht-jurist", kosten: "€0–750 · 1–2 wkn", prio: "must" },
  { id: "18", fase: "Vóór klant 1", actie: "Bouw een offerte-/opdrachtbevestigingstemplate met voorwaarden, meerwerkclausule, betaaltermijn 14 dgn, IP- en fotografieclausule", waar: "zelf / Moneybird", kosten: "€0 · 4 uur", prio: "must" },
  { id: "19", fase: "Vóór klant 1", actie: "Leg vast dat je nooit zelf met de aannemer contracteert — inspanningsverplichting, geen resultaatsverplichting", waar: "in de voorwaarden", kosten: "€0", prio: "must" },
  { id: "20", fase: "Vóór klant 1", actie: "Ontwerp de AVG-consentflow voor opnames", waar: "zelf", kosten: "€0 · 3 uur", prio: "must" },
  { id: "21", fase: "Vóór klant 1", actie: "Kies een EU-only AI-stack (EU-region-pinned of self-hosted)", waar: "leveranciers", kosten: "€10–50/mnd · 1 dag", prio: "must" },
  { id: "22", fase: "Vóór klant 1", actie: "Teken verwerkersovereenkomsten met élke AI- en opslagleverancier; bewaar de pdf's", waar: "per leverancier", kosten: "€0 · 2 uur", prio: "must" },
  { id: "23", fase: "Vóór klant 1", actie: "Verwerkingsregister opstellen", waar: "zelf (Excel/Notion)", kosten: "€0 · 3 uur", prio: "must" },
  { id: "24", fase: "Vóór klant 1", actie: "Privacyverklaring op de website — benoem de opnames expliciet", waar: "zelf / template", kosten: "€0–250 · 3 uur", prio: "must" },
  { id: "25", fase: "Vóór klant 1", actie: "Boekhoudsoftware inrichten", waar: "Moneybird / e-Boekhouden", kosten: "€0–15/mnd · 1 uur", prio: "must" },
  { id: "26", fase: "Vóór klant 1", actie: "Google Workspace + elise@studioverstelle.nl", waar: "workspace.google.com", kosten: "€82/jr · 1 uur", prio: "must" },
  { id: "27", fase: "Vóór klant 1", actie: "Urenregistratie starten (ook als je de 1.225 niet haalt)", waar: "Toggl / Moneybird", kosten: "€0 · 15 min", prio: "should" },

  // ---- FASE B ----
  { id: "28", fase: "Vóór €10k", actie: "DPIA uitvoeren voor de opnamemethode", waar: "zelf of privacyjurist", kosten: "€0–1.500 · 1–2 wkn", prio: "must" },
  { id: "29", fase: "Vóór €10k", actie: "Automatiseer de 30-dagen-audioverwijdering (cronjob)", waar: "eigen stack", kosten: "€0 · 2 uur", prio: "must" },
  { id: "30", fase: "Vóór €10k", actie: "BOIP-merkdepot 'Studio Verstelle', klassen 42 + 35", waar: "boip.int", kosten: "€271 · 3–4 mnd", prio: "should" },
  { id: "31", fase: "Vóór €10k", actie: "Rechtsbijstandverzekering", waar: "Univé / DAS", kosten: "€180–600/jr · 1 dag", prio: "should" },
  { id: "32", fase: "Vóór €10k", actie: "Eerste btw-kwartaalaangifte — zet de vier deadlines in de agenda", waar: "Mijn Belastingdienst Zakelijk", kosten: "€0 · 1 uur/kwartaal", prio: "must" },
  { id: "33", fase: "Vóór €10k", actie: "Fotografiecontract met vaste fotograaf: rechten incl. social, pers en sublicentie klant", waar: "zelf", kosten: "€0 · 1 uur", prio: "must" },
  { id: "34", fase: "Vóór €10k", actie: "Instagram Business + Pinterest Business + LinkedIn-bedrijfspagina", waar: "gratis", kosten: "€0 · 2 uur", prio: "must" },
  { id: "35", fase: "Vóór €10k", actie: "Google Bedrijfsprofiel ('interieurontwerp Amsterdam')", waar: "google.com/business", kosten: "€0 · 1 uur", prio: "should" },
  { id: "36", fase: "Vóór €10k", actie: "Calendly koppelen aan Google Agenda", waar: "calendly.com", kosten: "€0 · 30 min", prio: "should" },
  { id: "37", fase: "Vóór €10k", actie: "Zorg voor ≥2 opdrachtgevers in jaar 1 (ondernemerschap voor de IB, geen resultaat uit overige werkzaamheden)", waar: "acquisitie", kosten: "€0 · doorlopend", prio: "must" },
  { id: "38", fase: "Vóór €10k", actie: "Voorlopige aanslag IB aanvragen — voorkomt een dreun in 2028", waar: "Belastingdienst", kosten: "€0 · 30 min", prio: "should" },
  { id: "39", fase: "Vóór €10k", actie: "BNI-lidmaatschap overwegen (netwerk, voorwaarden, collectieve verzekering)", waar: "bni.nl", kosten: "€115–455/jr", prio: "later" },
  { id: "40", fase: "Vóór €10k", actie: "Cyberverzekering overwegen zodra klantaudio structureel wordt opgeslagen", waar: "Insify / Hiscox", kosten: "€150–400/jr", prio: "later" },

  // ---- FASE C ----
  { id: "41", fase: "Vóór fulltime", actie: "AOV afsluiten — of Broodfonds + AOV met 730 dagen wachttijd", waar: "Movir / Allianz", kosten: "€600–4.200/jr · 4–8 wkn (keuring!)", prio: "must" },
  { id: "42", fase: "Vóór fulltime", actie: "Broodfonds zoeken en aanmelden (min. 20 deelnemers)", waar: "broodfonds.nl", kosten: "€225 + €12,50/mnd", prio: "should" },
  { id: "43", fase: "Vóór fulltime", actie: "Pensioen regelen (jaarruimte/lijfrente) — het werkgeverspensioen valt weg", waar: "bank/verzekeraar", kosten: "variabel · 1 mnd", prio: "must" },
  { id: "44", fase: "Vóór fulltime", actie: "Eenmanszaak vs. BV laten doorrekenen bij >€150k winst", waar: "fiscalist", kosten: "€300–600 · 2 wkn", prio: "must" },
  { id: "45", fase: "Vóór fulltime", actie: "BAV-limiet herijken bij grotere projecten", waar: "verzekeraar", kosten: "€0 · 2 uur", prio: "should" },
  { id: "46", fase: "Vóór fulltime", actie: "Vertrek via vaststellingsovereenkomst regelen — nooit zelf opzeggen (zie hoofdstuk 12)", waar: "werkgever + jurist", kosten: "€0 · 1 uur", prio: "must" },
  { id: "47", fase: "Vóór fulltime", actie: "Herbeoordeel de BAZ-status (invoering niet vóór 2030 — reken er niet op)", waar: "rijksoverheid.nl", kosten: "€0 · 30 min", prio: "later" },
  { id: "48", fase: "Vóór fulltime", actie: "Merkbewaking + BOIP-verlengingsdatum (10 jaar) in de agenda", waar: "boip.int", kosten: "€0 · 15 min", prio: "later" },
];
