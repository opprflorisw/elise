"use client";

import { useState } from "react";
import { useJourney } from "@/lib/store";
import { buildSummary, buildExportHtml, buildDigest } from "@/lib/export";

export function ExportPanel() {
  const { state } = useJourney();
  const summary = buildSummary(state);
  const [copied, setCopied] = useState(false);

  const download = () => {
    const html = buildExportHtml(state);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "studio-verstelle-keuzes.html";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(buildDigest(state));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* ignore */
    }
  };

  const share = async () => {
    const digest = buildDigest(state);
    // Try native share first (best on iPhone)
    if (navigator.share) {
      try {
        await navigator.share({ title: "Studio Verstelle — mijn keuzes", text: digest });
        return;
      } catch {
        /* fell through */
      }
    }
    const wa = `https://wa.me/?text=${encodeURIComponent(digest)}`;
    window.open(wa, "_blank");
  };

  return (
    <div className="rounded-2xl border border-line bg-paper-deep/50 p-6 sm:p-8">
      <div className="eyebrow mb-2" style={{ color: "var(--color-bordeaux)" }}>
        {summary.totalItems} reacties verzameld
      </div>
      <h3 className="display-l mb-2 text-[1.8rem]">Stuur alles naar Floris</h3>
      <p className="body mb-6 max-w-prose text-ink-soft">
        Download het overzicht met al je keuzes en notities — dit is de complete basis voor je
        website. Deel het via WhatsApp of download het bestand en stuur het door.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={share}
          className="eyebrow rounded-full px-7 py-4 text-paper"
          style={{ background: "var(--color-bordeaux)" }}
        >
          Deel met Floris
        </button>
        <button
          onClick={download}
          className="eyebrow rounded-full border border-ink/30 px-7 py-4 hover:bg-paper-deep"
        >
          Download bestand
        </button>
        <button
          onClick={copyAll}
          className="eyebrow rounded-full border border-line px-7 py-4 text-ink-soft hover:text-ink"
        >
          {copied ? "Gekopieerd ✓" : "Kopieer alles"}
        </button>
      </div>
    </div>
  );
}
