import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SiteWordmark } from "@/components/site/SiteWordmark";
import { SITE, LUXE, NOOIT, CASES, MATERIALEN } from "@/lib/site";

export default function SiteHome() {
  return (
    <>
      {/* ---- HERO — Donkere Monoliet, verwarmd ---- */}
      <section className="relative h-[100svh] min-h-[620px] overflow-hidden" style={{ background: "var(--night)" }}>
        <Image
          src="/images/site/home-hero.webp"
          alt="Studio Verstelle — interieur"
          fill
          priority
          sizes="100vw"
          className="s-drift object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(25,23,20,0.42) 0%, rgba(25,23,20,0.05) 40%, rgba(25,23,20,0.68) 100%)" }}
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-10 sm:pb-20" style={{ color: "var(--warmwhite)" }}>
            <Reveal>
              <p className="s-eyebrow mb-5 opacity-80" style={{ color: "var(--travertine)" }}>
                {SITE.tagline}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1>
                <SiteWordmark size="xl" />
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="s-accent-serif mt-6 max-w-xl text-[clamp(1.2rem,2.6vw,1.7rem)]" style={{ color: "var(--travertine)" }}>
                {SITE.signature}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- STATEMENT — licht, editorial ---- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-32">
        <Reveal>
          <p className="s-eyebrow mb-6" style={{ color: "var(--cobalt)" }}>De studio</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="s-display-l max-w-4xl">
            Wij transformeren stedelijke woningen tot uitzonderlijke huizen.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="s-lede mt-8 max-w-2xl text-ink-soft">{LUXE}</p>
        </Reveal>
      </section>

      {/* ---- SPLITSCREEN — gallery splitscreen, haar favoriet ---- */}
      <section className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <figure className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/site/home-detail-burl.webp" alt="Burl hout en chroom" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative aspect-[4/5] overflow-hidden sm:mt-24">
              <Image src="/images/site/home-detail-mohair.webp" alt="Groen mohair" fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
            </figure>
          </Reveal>
        </div>
        <Reveal>
          <p className="s-body mt-8 max-w-xl text-ink-soft">
            Groots, met statement pieces — maar rustig. Weinig items, veel materiaal: burl,
            mohair, chroom, travertin. Gelaagdheid in plaats van volte. En licht, altijd licht —
            het goedkoopste en meest onderschatte materiaal dat er is.
          </p>
        </Reveal>
      </section>

      {/* ---- GROOTS — vide / lagen ---- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-32">
        <Reveal>
          <figure className="relative aspect-[16/9] overflow-hidden">
            <Image src="/images/site/home-groots.webp" alt="Wonen in lagen" fill sizes="100vw" className="object-cover" />
          </figure>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-[1fr,1.2fr]">
          <Reveal>
            <h3 className="s-display-m">Wonen in lagen</h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="s-body text-ink-soft">
              Een zitkuil. Een vide. Een verdieping die niet één vlak is maar een landschap.
              Wij zoeken de verrassing in de plattegrond — de ingreep die een huis een eigen
              logica geeft. Het mag als een museum ogen; het moet als thuis voelen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- PORTFOLIO TEASER ---- */}
      <section style={{ background: "var(--warmwhite-deep)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="s-display-l">Portfolio</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/site/portfolio" className="s-link s-eyebrow !tracking-[0.22em]">
                Alle cases →
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 120}>
                <Link href={`/site/portfolio/${c.slug}`} className="group block">
                  <figure className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={c.hero}
                      alt={c.title}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </figure>
                  <p className="s-index mt-4 text-[0.8rem] opacity-50">{c.index}</p>
                  <h3 className="s-display-m mt-1">{c.title}</h3>
                  <p className="s-body mt-1 text-ink-soft">{c.place}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- MATERIALEN ---- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28">
        <Reveal>
          <p className="s-eyebrow mb-6" style={{ color: "var(--cobalt)" }}>Handschrift</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="s-display-l max-w-3xl">Materiaal dat je kunt voelen</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
          {MATERIALEN.map((m, i) => (
            <Reveal key={m.id} delay={i * 60}>
              <figure>
                <div className="relative aspect-square overflow-hidden">
                  <Image src={m.src} alt={m.label} fill sizes="(max-width:640px) 33vw, 16vw" className="object-cover" />
                </div>
                <figcaption className="s-eyebrow mt-2 !text-[0.55rem] !tracking-[0.2em] opacity-60">{m.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- NOOIT — het manifest, kort ---- */}
      <section style={{ background: "var(--night)", color: "var(--warmwhite)" }}>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28">
          <Reveal>
            <p className="s-eyebrow mb-8" style={{ color: "var(--travertine)" }}>Wat u hier nooit zult vinden</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {NOOIT.map((n, i) => (
              <Reveal key={n} delay={i * 120}>
                <div className="border-t border-white/20 pt-5">
                  <span className="s-index text-[0.8rem] opacity-40">{String(i + 1).padStart(2, "0")}</span>
                  <p className="s-display-m mt-2">{n}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="s-accent-serif mt-14 max-w-2xl text-[clamp(1.15rem,2.4vw,1.5rem)]" style={{ color: "var(--travertine)" }}>
              Chic en tijdloos — maar nooit saai.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- CTA — intake ---- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-32">
        <Reveal>
          <h2 className="s-display-l max-w-3xl">Begin met drie foto&rsquo;s</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="s-lede mt-6 max-w-2xl text-ink-soft">
            Meer heeft de studio niet nodig om te laten zien wat uw huis kan worden.
            Binnen twee weken ziet u uw eigen ruimte, getransformeerd.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/site/intake"
              className="s-eyebrow rounded-full px-7 py-4 !tracking-[0.2em] transition-opacity hover:opacity-85"
              style={{ background: "var(--night)", color: "var(--warmwhite)" }}
            >
              Start de intake
            </Link>
            <Link
              href="/site/aanpak"
              className="s-eyebrow rounded-full border px-7 py-4 !tracking-[0.2em] transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--color-line-strong)" }}
            >
              Onze aanpak
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
