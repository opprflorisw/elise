import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { CASES } from "@/lib/site";

export const metadata: Metadata = { title: "Portfolio — Studio Verstelle" };

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-10 sm:pt-44">
      <Reveal>
        <p className="s-eyebrow mb-5" style={{ color: "var(--cobalt)" }}>Portfolio</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="s-display-xl">Drie huizen</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="s-lede mt-6 max-w-2xl text-ink-soft">
          Concept-cases die het handschrift van de studio tonen: grote gebaren, weinig spullen,
          materiaal met diepte — en altijd één verrassing in de plattegrond.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20 sm:mt-24 sm:space-y-32">
        {CASES.map((c, i) => (
          <Reveal key={c.slug}>
            <Link href={`/site/portfolio/${c.slug}`} className="group grid items-end gap-6 sm:grid-cols-12">
              <figure
                className={`relative aspect-[16/10] overflow-hidden sm:col-span-8 ${i % 2 === 1 ? "sm:order-2" : ""}`}
              >
                <Image
                  src={c.hero}
                  alt={c.title}
                  fill
                  sizes="(max-width:640px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </figure>
              <div className={`sm:col-span-4 ${i % 2 === 1 ? "sm:order-1 sm:text-right" : ""}`}>
                <p className="s-index text-[2.6rem] leading-none opacity-25">{c.index}</p>
                <h2 className="s-display-l mt-3">{c.title}</h2>
                <p className="s-eyebrow mt-3 !tracking-[0.2em] opacity-60">
                  {c.place} · {c.kind}
                </p>
                <p className="s-body mt-4 text-ink-soft">{c.intro}</p>
                <span className="s-link s-eyebrow mt-5 inline-block !tracking-[0.22em]">Bekijk case →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
