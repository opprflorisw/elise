import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { LUXE, NOOIT, PIJLERS } from "@/lib/site";

export const metadata: Metadata = { title: "Over — Studio Verstelle" };

export default function OverPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-10 sm:pt-44">
      <Reveal>
        <p className="s-eyebrow mb-5" style={{ color: "var(--cobalt)" }}>Over de studio</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="s-display-xl max-w-4xl">Tussen decorateur en architect zat een gat</h1>
      </Reveal>

      <div className="mt-14 grid gap-12 sm:mt-20 sm:grid-cols-12">
        <div className="sm:col-span-7">
          <Reveal>
            <p className="s-lede">
              Studio Verstelle is dat gat. Een residential transformation studio die stedelijke
              woningen niet inricht, maar transformeert — van plattegrond tot laatste lichtknop.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="s-body mt-6 text-ink-soft">
              De stijl van de studio is gelaagd en eclectisch: sculpturaal meubilair, de elegantie
              van de jaren dertig én zeventig naast het beste van nu, materiaal met diepte — burl,
              mohair, chroom, travertin — en kleur als één krachtig statement. Interieurs die in
              Parijs of Milaan zouden kunnen staan, maar Nederlands nuchter zijn gebouwd.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="s-body mt-6 text-ink-soft">{LUXE}</p>
          </Reveal>
          <Reveal delay={240}>
            <p className="s-accent-serif mt-10 text-[clamp(1.2rem,2.4vw,1.55rem)]" style={{ color: "var(--cobalt)" }}>
              Groots. Museum-waardig. Maar op zondagochtend volstrekt leefbaar.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150} className="sm:col-span-4 sm:col-start-9">
          <figure className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/site/over-atelier.webp" alt="Het atelier — materialen op tafel" fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover" />
          </figure>
        </Reveal>
      </div>

      {/* pillars */}
      <div className="mt-20 grid gap-6 border-t border-line pt-12 sm:mt-28 sm:grid-cols-2">
        {PIJLERS.map((p, i) => (
          <Reveal key={p.t} delay={i * 120}>
            <div>
              <p className="s-index text-[0.85rem] opacity-40">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="s-display-m mt-2">{p.t}</h2>
              <p className="s-body mt-3 text-ink-soft">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* never */}
      <Reveal>
        <div className="mt-20 border-t border-line pt-12 sm:mt-28">
          <p className="s-eyebrow opacity-60">En wat we nooit doen</p>
          <p className="s-display-m mt-4 max-w-3xl">
            {NOOIT.join(" · ")} — chic en tijdloos, maar nooit saai.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16">
          <Link
            href="/site/intake"
            className="s-eyebrow inline-block rounded-full px-7 py-4 !tracking-[0.2em] transition-opacity hover:opacity-85"
            style={{ background: "var(--night)", color: "var(--warmwhite)" }}
          >
            Kennismaken
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
