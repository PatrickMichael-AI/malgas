import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Clock3, MapPin, Wine, type LucideIcon } from "lucide-react"

import { CtaLink } from "@/components/cta-link"
import {
  homeHero,
  homeMenuChapter,
  homePlaceChapter,
  homeStoryChapter,
  homeVisitChapter,
  type HomeIcon,
  testimonials,
} from "@/content/home"

const iconMap: Record<HomeIcon, LucideIcon> = {
  "map-pin": MapPin,
  "clock-3": Clock3,
  wine: Wine,
}

const detailToneClasses = {
  paper: "bg-card/98",
  sun: "bg-sun/82",
  sea: "bg-sea/78",
} as const

const menuToneClasses = {
  paper: "bg-background/96",
  sea: "bg-sea/74 md:-translate-y-5",
  sun: "bg-sun/82",
  apricot: "bg-apricot/78 md:translate-y-5",
} as const

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
    <div className="space-y-10 pb-12 lg:space-y-14">
      <section className="story-shell motion-enter bg-background/92 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="story-orb left-[-4rem] top-[-2rem] h-36 w-36 bg-sun/55" />
        <div className="story-orb right-[18%] top-[12%] h-24 w-24 bg-apricot/35" />
        <div className="story-orb bottom-[-5rem] right-[-2rem] h-52 w-52 bg-sea/45" />
        <div className="scribble-ring left-[50%] top-[14%] h-16 w-16" />

        <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl space-y-7">
            <div className="flex flex-wrap gap-3">
              {homeHero.chips.map((chip) => (
                <span key={chip} className="soft-chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-foreground/72">
                {homeHero.eyebrow}
              </p>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.88] text-ink sm:text-6xl lg:text-7xl">
                {homeHero.title}
              </h1>
              <p className="max-w-xl text-base leading-8 text-foreground/86 sm:text-lg">
                {homeHero.body}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {homeHero.ctas.map((cta) => (
                <CtaLink key={cta.href} href={cta.href} variant={cta.variant}>
                  {cta.label}
                  {cta.variant === "primary" ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
                </CtaLink>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {homeHero.details.map((detail) => {
                const Icon = iconMap[detail.icon]

                return (
                  <div
                    key={detail.title}
                    className={`collage-card px-4 py-4 ${detailToneClasses[detail.tone]}`}
                  >
                    <Icon className="h-5 w-5 text-fynbos" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                      {detail.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground/84">{detail.value}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative min-h-[34rem] sm:min-h-[40rem] lg:min-h-[42rem]">
            <div className="absolute left-0 top-0 w-[68%] rotate-[-3deg] rounded-[2.4rem] border border-border/70 bg-card p-4 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src={homeHero.images.primary.src}
                  alt={homeHero.images.primary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 32rem, 75vw"
                  priority
                />
              </div>
            </div>

            <div className="absolute right-[2%] top-[5%] w-[42%] rotate-[4deg] rounded-[2rem] border border-border/80 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
                <Image
                  src={homeHero.images.secondary.src}
                  alt={homeHero.images.secondary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 16rem, 42vw"
                />
              </div>
            </div>

            <div className="absolute bottom-[7%] left-[10%] w-[36%] -rotate-[5deg] rounded-[2rem] border border-border/80 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={homeHero.images.tertiary.src}
                  alt={homeHero.images.tertiary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 14rem, 34vw"
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[49%] min-w-[14rem] rounded-[2rem] border border-border/80 bg-background/97 px-5 py-5 shadow-[0_28px_70px_rgba(20,33,38,0.22)] backdrop-blur-xl sm:px-6 sm:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/82">
                {homeHero.images.spotlight.eyebrow}
              </p>
              <p className="mt-3 max-w-[13ch] text-balance font-display text-[1.75rem] leading-[1.02] text-ink sm:text-[2.1rem]">
                {homeHero.images.spotlight.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="motion-enter motion-delay-1 grid gap-5 lg:grid-cols-[0.94fr_1.06fr] lg:gap-6">
        <article className="story-shell bg-sea/48 px-6 py-8 sm:px-8 sm:py-9 lg:py-11">
          <div className="story-orb right-[-3rem] top-[18%] h-32 w-32 bg-background/40" />
          <div className="relative max-w-xl space-y-5">
            <span className="story-ribbon">{homePlaceChapter.eyebrow}</span>
            <h2 className="font-display text-5xl leading-[0.92] text-ink">{homePlaceChapter.title}</h2>
            <p className="text-base leading-8 text-foreground/86">{homePlaceChapter.body}</p>
            <div className="flex flex-wrap gap-3">
              {homePlaceChapter.chips.map((chip) => (
                <span key={chip} className="soft-chip">
                  {chip}
                </span>
              ))}
            </div>
            <CtaLink href={homePlaceChapter.cta.href} variant={homePlaceChapter.cta.variant}>
              {homePlaceChapter.cta.label}
            </CtaLink>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {homePlaceChapter.cards.map((item, index) => (
            <article
              key={item.title}
              className={`postcard-panel px-6 py-6 ${
                index === 0
                  ? "bg-background/92"
                  : index === 1
                    ? "bg-card md:translate-y-8"
                    : "bg-sun/62"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/72">
                Salt &amp; Fynbos
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/84">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-shell motion-enter motion-delay-2 bg-card px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
        <div className="story-orb right-[8%] top-[12%] h-52 w-52 bg-apricot/26" />
        <div className="story-orb left-[42%] bottom-[-2rem] h-40 w-40 bg-sea/32" />
        <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-12">
          <article className="max-w-lg space-y-5">
            <span className="story-ribbon">{homeMenuChapter.eyebrow}</span>
            <h2 className="font-display text-5xl leading-[0.92] text-ink">{homeMenuChapter.title}</h2>
            <p className="text-base leading-8 text-foreground/86">{homeMenuChapter.body}</p>
            <CtaLink href={homeMenuChapter.cta.href} variant={homeMenuChapter.cta.variant}>
              {homeMenuChapter.cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CtaLink>
          </article>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {homeMenuChapter.cards.map((category) => (
              <article
                key={category.title}
                className={`postcard-panel px-5 py-6 ${menuToneClasses[category.tone]}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                  {category.chapter}
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-ink">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/84">
                  {category.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/72">
                  {category.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="motion-enter motion-delay-3 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <article className="story-shell bg-sun/74 px-6 py-8 sm:px-8 sm:py-9 lg:py-11">
          <div className="story-orb bottom-[-3rem] left-[-2rem] h-32 w-32 bg-background/30" />
          <div className="relative grid gap-7 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-10">
            <div className="space-y-4">
              <span className="story-ribbon">{homeStoryChapter.eyebrow}</span>
              <h2 className="font-display text-5xl leading-[0.92] text-ink">{homeStoryChapter.title}</h2>
              <p className="text-base leading-8 text-foreground/86">{homeStoryChapter.body}</p>
              <CtaLink href={homeStoryChapter.cta.href} variant={homeStoryChapter.cta.variant}>
                {homeStoryChapter.cta.label}
              </CtaLink>
            </div>

            <div className="relative min-h-[18rem]">
              <div className="absolute left-0 top-0 w-[62%] -rotate-[4deg] rounded-[2rem] border border-border/70 bg-card p-3 shadow-paper">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={homeStoryChapter.images.primary.src}
                    alt={homeStoryChapter.images.primary.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 18rem, 48vw"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-[52%] rotate-[5deg] rounded-[2rem] border border-border/70 bg-background/92 p-3 shadow-paper">
                <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={homeStoryChapter.images.secondary.src}
                    alt={homeStoryChapter.images.secondary.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 14rem, 38vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-4 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`postcard-panel px-6 py-6 ${
                index === 1 ? "bg-apricot/68" : index === 2 ? "bg-ink text-background" : "bg-card"
              }`}
            >
              <p
                className={`font-display text-3xl leading-tight ${
                  index === 2 ? "text-background" : "text-ink"
                }`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p
                className={`mt-6 text-sm font-semibold uppercase tracking-[0.22em] ${
                  index === 2 ? "text-background/74" : "text-foreground/72"
                }`}
              >
                {testimonial.name}
              </p>
              <p
                className={`mt-2 text-sm leading-7 ${
                  index === 2 ? "text-background/86" : "text-foreground/84"
                }`}
              >
                {testimonial.context}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-shell motion-enter motion-delay-4 bg-ink px-6 py-8 text-background sm:px-8 sm:py-10 lg:py-12">
        <div className="story-orb right-[-3rem] top-[-3rem] h-44 w-44 bg-sun/16" />
        <div className="story-orb bottom-[-4rem] left-[-2rem] h-36 w-36 bg-sea/14" />
        <div className="relative grid gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-10">
          <div className="max-w-2xl space-y-4">
            <span className="story-ribbon border-background/18 bg-background/12 text-background/86">
              {homeVisitChapter.eyebrow}
            </span>
            <h2 className="font-display text-4xl leading-tight text-background sm:text-5xl">{homeVisitChapter.title}</h2>
            <p className="max-w-xl text-sm leading-7 text-background/86">{homeVisitChapter.body}</p>
            <CtaLink
              href={homeVisitChapter.cta.href}
              variant={homeVisitChapter.cta.variant}
              className="text-ink"
            >
              {homeVisitChapter.cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CtaLink>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            <article className="postcard-panel bg-background/10 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background/72">
                {homeVisitChapter.location.eyebrow}
              </p>
              <p className="mt-3 font-display text-3xl leading-tight text-background">
                {homeVisitChapter.location.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-background/84">
                {homeVisitChapter.location.body}
              </p>
            </article>

            {homeVisitChapter.hours.map((slot) => (
              <article key={slot.label} className="postcard-panel bg-background/10 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background/72">
                  {slot.label}
                </p>
                <p className="mt-3 font-display text-3xl leading-tight text-background">
                  {slot.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
