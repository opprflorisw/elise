import type { JourneyState, FeedbackItem } from "./store";

const STAGE_NAMES: Record<string, string> = {
  start: "I · Het begin",
  manifest: "II · Het manifest",
  stijl: "III · De stijl",
  studio: "IV · De studio & AI",
  website: "V · De website",
};

const REACTION_NL: Record<string, string> = { love: "❤ mooi", no: "✕ niet ik" };

function fmtValue(item: FeedbackItem): string {
  if (item.type === "reaction") return REACTION_NL[item.value as string] || (item.value as string);
  if (Array.isArray(item.value)) return item.value.join(", ");
  return item.value as string;
}

export interface ExportSummary {
  stages: {
    id: string;
    name: string;
    items: { label: string; value: string; type: string }[];
  }[];
  totalItems: number;
  json: JourneyState;
}

export function buildSummary(state: JourneyState): ExportSummary {
  const byStage: Record<string, FeedbackItem[]> = {};
  for (const item of Object.values(state.items)) {
    (byStage[item.stageId] ||= []).push(item);
  }
  const order = ["start", "manifest", "stijl", "studio", "website"];
  const stages = order
    .filter((s) => byStage[s]?.length)
    .map((s) => ({
      id: s,
      name: STAGE_NAMES[s] || s,
      items: byStage[s]
        .sort((a, b) => a.ts - b.ts)
        .map((it) => ({ label: it.label, value: fmtValue(it), type: it.type })),
    }));
  return { stages, totalItems: Object.keys(state.items).length, json: state };
}

/** Self-contained HTML file: readable recap + embedded machine-readable JSON. */
export function buildExportHtml(state: JourneyState): string {
  const s = buildSummary(state);
  const date = new Date(state.startedAt || Date.now()).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const rows = s.stages
    .map(
      (st) => `
    <section>
      <h2>${st.name}</h2>
      <table>
        ${st.items
          .map(
            (it) => `<tr><td class="l">${escapeHtml(it.label)}</td><td class="v">${escapeHtml(it.value)}</td></tr>`
          )
          .join("")}
      </table>
    </section>`
    )
    .join("");

  return `<!doctype html><html lang="nl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Studio Verstelle — jouw keuzes</title>
<style>
  :root{--p:#efeae3;--i:#1c1917;--a:#6e1423;--l:#1c191722}
  *{box-sizing:border-box;margin:0}
  body{background:var(--p);color:var(--i);font:16px/1.6 Georgia,serif;padding:6vw;max-width:820px;margin:auto}
  .top{letter-spacing:.35em;text-transform:uppercase;font-size:.7rem}
  h1{font-weight:400;font-size:2.4rem;margin:.2rem 0 .3rem}
  .meta{color:#4a443c;margin-bottom:2.5rem;font-size:.9rem}
  h2{font-weight:400;font-size:1.2rem;letter-spacing:.06em;border-bottom:1px solid var(--l);padding-bottom:.4rem;margin:2.4rem 0 .8rem;color:var(--a)}
  table{width:100%;border-collapse:collapse}
  td{vertical-align:top;padding:.5rem 0;border-bottom:1px solid var(--l)}
  td.l{width:52%;padding-right:1.5rem;color:#4a443c;font-size:.92rem}
  td.v{font-weight:600}
  footer{margin-top:3rem;font-size:.8rem;color:#4a443c}
</style></head><body>
<div class="top">Studio Verstelle</div>
<h1>Jouw keuzes</h1>
<div class="meta">${s.totalItems} reacties · reis gestart ${date}</div>
${rows}
<footer>Dit document bevat alle keuzes en notities uit de reis, plus de ruwe data hieronder.
Stuur het naar Floris — dit is de complete input voor de website.</footer>
<script type="application/json" id="elise-journey-data">${JSON.stringify(state)}</script>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
}

/** Compact plain-text digest for WhatsApp / mail. */
export function buildDigest(state: JourneyState): string {
  const s = buildSummary(state);
  const lines = [`Studio Verstelle — mijn keuzes (${s.totalItems} reacties)`, ""];
  for (const st of s.stages) {
    lines.push(st.name);
    for (const it of st.items) lines.push(`• ${it.label}: ${it.value}`);
    lines.push("");
  }
  lines.push("(Volledige HTML met alle data staat in de download.)");
  return lines.join("\n");
}
