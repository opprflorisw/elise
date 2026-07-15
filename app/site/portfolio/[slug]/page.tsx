import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { CASES } from "@/lib/site";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  return { title: c ? `${c.title} — Studio Verstelle` : "Case — Studio Verstelle" };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) notFound();
  const next = CASES[(CASES.indexOf(c) + 1) % CASES.length];

  return (
    <article className="pb-24">
      {/* hero */}
      <header className="relative flex min-h-[72svh] items-end overflow-hidden" style={{ background: "var(--night)" }}>
        <Image src={c.hero} alt={c.title} fill priority sizes="100vw" className="s-drift object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(25,23,20,0.3) 0%, transparent 40%, rgba(25,23,20,0.62) 100%)" }} />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-10 sm:pb-16" style={{ color: "var(--warmwhite)" }}>
          <Reveal>
            <p className="s-index text-[1.1rem] opacity-70">{c.index}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="s-display-xl mt-2">{c.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="s-eyebrow mt-4 !tracking-[0.2em]" style={{ color: "var(--travertine)" }}>
              {c.place} · {c.kind}
            </p>
          </Reveal>
        </div>
      </header>

      {/* intro + facts */}
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-10 sm:pt-24">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <Reveal>
              <p className="s-lede">{c.intro}</p>
            </Reveal>
            {c.body.map((p, i) => (
              <Reveal key={i} delay={100 + i * 80}>
                <p className="s-body mt-6 text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="sm:col-span-4 sm:col-start-9">
            <Reveal delay={150}>
              <dl className="space-y-5 border-t border-line pt-5">
                {c.feiten.map((f) => (
                  <div key={f.k}>
                    <dt className="s-eyebrow !tracking-[0.2em] opacity-50">{f.k}</dt>
                    <dd className="s-body mt-1">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* gallery */}
        <div className="mt-16 sm:mt-24">
          <div className="grid gap-5 sm:grid-cols-2">
            {c.images
              .filter((im) => im.aspect === "portrait")
              .map((im, i) => (
                <Reveal key={im.src} delay={i * 120}>
                  <figure className={i % 2 === 1 ? "sm:mt-20" : ""}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src={im.src} alt={im.caption} fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <figcaption className="s-eyebrow mt-3 !text-[0.58rem] !tracking-[0.2em] opacity-55">{im.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
          </div>
          {c.images
            .filter((im) => im.aspect === "wide")
            .map((im) => (
              <Reveal key={im.src}>
                <figure className="mt-16">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={im.src} alt={im.caption} fill sizes="100vw" className="object-cover" />
                  </div>
                  <figcaption className="s-eyebrow mt-3 !text-[0.58rem] !tracking-[0.2em] opacity-55">{im.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
        </div>

        {/* next case */}
        <Reveal>
          <Link href={`/site/portfolio/${next.slug}`} className="group mt-20 block border-t border-line pt-8 sm:mt-28">
            <p className="s-eyebrow !tracking-[0.22em] opacity-50">Volgende case</p>
            <p className="s-display-l mt-2 transition-opacity group-hover:opacity-70">
              {next.title} →
            </p>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
