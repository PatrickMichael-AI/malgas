import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { CtaLink } from "@/components/cta-link"
import {
  featuredCategories,
  homeHero,
  homeHighlights,
  homeMoments,
  testimonials,
} from "@/content/home"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Salt & Fynbos in Malgas: a Western Cape southern coast country kitchen for long lunches, seasonal plates, and slower coastal dining.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Salt & Fynbos",
    description:
      "Discover Salt & Fynbos in Malgas: a Western Cape southern coast country kitchen for long lunches, seasonal plates, and slower coastal dining.",
  },
}

export default function HomePage() {
  return (
    <div className="space-y-10 pb-10">
      <section className="motion-enter relative overflow-hidden rounded-[3rem] border border-border/70 bg-coast-wash px-6 py-8 shadow-float sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="hero-bloom left-[-5rem] top-[-2rem] h-40 w-40 bg-sun/60" />
        <div className="hero-bloom bottom-[-6rem] right-[-3rem] h-64 w-64 bg-sea/55" />
        <div className="hero-bloom right-[24%] top-[8%] h-20 w-20 bg-fynbos/20" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.96fr] lg:items-center">
          <div className="max-w-2xl space-y-7">
            <span className="soft-chip">Seasonal coastal-country dining</span>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-foreground/55">
                {homeHero.eyebrow}
              </p>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.9] text-ink sm:text-6xl lg:text-7xl">
                {homeHero.title}
              </h1>
              <p className="max-w-xl text-base leading-8 text-foreground/78 sm:text-lg">
                {homeHero.body}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {homeHero.ctas.map((cta) => (
                <CtaLink
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant === "primary" ? "primary" : "secondary"}
                >
                  {cta.label}
                  {cta.variant === "primary" ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
                </CtaLink>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {homeMoments.map((moment, index) => (
                <div
                  key={moment}
                  className="rounded-[1.5rem] border border-border/70 bg-background/85 px-4 py-4 shadow-paper"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/78">{moment}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[27rem] sm:min-h-[34rem]">
            <div className="absolute left-0 top-0 w-[72%] rounded-[2.5rem] border border-border/70 bg-card p-4 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="Salt & Fynbos dining room atmosphere"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28rem, 70vw"
                  priority
                />
              </div>
            </div>

            <div className="absolute right-0 top-[8%] w-[42%] rounded-[2rem] border border-border/70 bg-background/90 p-3 shadow-paper">
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/sushi-plate.jpg"
                  alt="Seasonal plated dish"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 14rem, 38vw"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-[8%] w-[42%] rounded-[2rem] border border-border/70 bg-card p-3 shadow-paper">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/dessert.jpg"
                  alt="Pantry dessert at Salt & Fynbos"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 15rem, 34vw"
                />
              </div>
            </div>

            <div className="absolute bottom-[10%] right-[2%] max-w-[15rem] rounded-[2rem] border border-border/70 bg-apricot/90 px-5 py-5 shadow-paper">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/70">
                House feeling
              </p>
              <p className="mt-3 font-display text-3xl leading-tight text-ink">
                Sun-washed, local, and slow enough to notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="motion-enter motion-delay-1 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
        <article className="editorial-card wash-panel px-6 py-7 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/55">
            Why this feels different
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none text-ink">
            Country warmth, not steakhouse weight.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-foreground/78">
            The design language now leans into estuary air, fynbos colour, and room-to-linger
            hospitality instead of a dark, heavy restaurant cliche.
          </p>
        </article>

        <div className="grid gap-4 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <article key={item.title} className="editorial-card px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/55">
                Salt &amp; Fynbos
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/75">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="motion-enter motion-delay-2 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <article className="editorial-card px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/55">
            Featured menu rhythm
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {featuredCategories.map((category, index) => (
              <div
                key={category.title}
                className={cn(
                  "rounded-[2rem] border border-border/70 p-5 shadow-paper",
                  index === 0
                    ? "bg-background/90"
                    : index === 1
                      ? "bg-sea/55"
                      : "bg-apricot/60"
                )}
              >
                <h2 className="font-display text-3xl text-ink">{category.title}</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/75">{category.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  {category.callout}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="editorial-card bg-ink px-6 py-6 text-background sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-background/55">
            How the meal unfolds
          </p>
          <div className="mt-5 space-y-4">
            {homeMoments.map((moment, index) => (
              <div
                key={moment}
                className="rounded-[1.75rem] border border-background/12 bg-background/10 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background/55">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-background/80">{moment}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="motion-enter motion-delay-3 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="editorial-card bg-background/90 px-6 py-6">
            <p className="font-display text-3xl leading-tight text-ink">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/60">
              {testimonial.name}
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground/75">{testimonial.context}</p>
          </article>
        ))}
      </section>

      <section className="motion-enter motion-delay-4 relative overflow-hidden rounded-[2.75rem] border border-border/70 bg-sun/85 px-6 py-8 shadow-float sm:px-8">
        <div className="absolute right-0 top-0 h-48 w-48 translate-x-10 -translate-y-10 rounded-full bg-background/45" />
        <div className="absolute bottom-0 left-0 h-36 w-36 -translate-x-10 translate-y-10 rounded-full bg-sea/45" />
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/55">
              Book or browse
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Start with the menu if you want the mood. Head to contact if you are already
              planning a table.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/menu" variant="ink">
              Browse menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </CtaLink>
            <CtaLink href="/contact" variant="secondary">
              Book a table
            </CtaLink>
          </div>
        </div>
      </section>
    </div>
  )
}
