import Image from "next/image"
import type { Metadata } from "next"

import { CtaLink } from "@/components/cta-link"
import { EditorialGallery } from "@/components/editorial-gallery"
import { PageIntro } from "@/components/page-intro"
import { SectionShell } from "@/components/section-shell"
import {
  aboutCta,
  aboutGallery,
  aboutIntro,
  aboutPantryBand,
  aboutStoryChapters,
  milestones,
} from "@/content/about"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the Salt & Fynbos story: a Malgas restaurant shaped by sea air, fynbos, pantry craft, and generous long-table hospitality.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About | Salt & Fynbos",
    description:
      "Learn the Salt & Fynbos story: a Malgas restaurant shaped by sea air, fynbos, pantry craft, and generous long-table hospitality.",
  },
}

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-12 lg:space-y-14">
      <PageIntro
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        body={aboutIntro.body}
        badge={aboutIntro.badge}
        tone="sea"
        className="lg:py-12"
        actions={
          <>
            {aboutIntro.actions.map((action) => (
              <CtaLink key={action.href} href={action.href} variant={action.variant}>
                {action.label}
              </CtaLink>
            ))}
          </>
        }
        aside={
          <div className="relative min-h-[32rem] sm:min-h-[38rem] lg:min-h-[42rem]">
            <div className="absolute left-0 top-[3%] z-10 w-[66%] -rotate-[3deg] rounded-[2.2rem] border border-border/70 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem]">
                <Image
                  src={aboutIntro.images.primary.src}
                  alt={aboutIntro.images.primary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 64vw"
                  priority
                />
              </div>
            </div>

            <div className="absolute right-[4%] top-[4%] z-30 w-[42%] rotate-[4deg] rounded-[2rem] border border-border/70 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem]">
                <Image
                  src={aboutIntro.images.secondary.src}
                  alt={aboutIntro.images.secondary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 14rem, 42vw"
                />
              </div>
            </div>

            <div className="absolute bottom-[7%] right-0 z-20 w-[46%] rounded-[2rem] border border-border/80 bg-background/97 px-5 py-5 shadow-[0_28px_70px_rgba(20,33,38,0.22)] backdrop-blur-xl sm:px-6 sm:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/82">
                {aboutIntro.callout.eyebrow}
              </p>
              <p className="mt-3 max-w-[12ch] text-balance font-display text-[1.7rem] leading-[1.02] text-ink sm:text-[2rem]">
                {aboutIntro.callout.body}
              </p>
            </div>
          </div>
        }
      />

      <div className="space-y-6 lg:space-y-8">
        {aboutStoryChapters.map((chapter, index) => (
          <SectionShell
            key={chapter.title}
            eyebrow={chapter.eyebrow}
            title={chapter.title}
            body={chapter.body}
            tone={chapter.tone}
            reverse={index % 2 === 1}
            className={index === 0 ? "motion-delay-1 lg:py-12" : "motion-delay-2 lg:py-12"}
            aside={
              <div className="grid gap-4">
                {chapter.notes.map((note) => (
                  <article
                    key={note.label}
                    className="postcard-panel rounded-[2rem] bg-background/88 px-5 py-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                      {note.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/86">{note.value}</p>
                  </article>
                ))}
              </div>
            }
          />
        ))}
      </div>

      <EditorialGallery
        eyebrow={aboutGallery.eyebrow}
        title={aboutGallery.title}
        body={aboutGallery.body}
        items={aboutGallery.items}
      />

      <SectionShell
        eyebrow={aboutPantryBand.eyebrow}
        title={aboutPantryBand.title}
        body={aboutPantryBand.body}
        tone={aboutPantryBand.tone}
        className="motion-delay-3 lg:py-12"
        aside={
          <div className="relative min-h-[33rem] sm:min-h-[38rem] lg:min-h-[42rem]">
            <div className="absolute left-0 top-[4%] z-10 w-[66%] -rotate-[3deg] rounded-[2.2rem] border border-border/70 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem]">
                <Image
                  src={aboutPantryBand.images.primary.src}
                  alt={aboutPantryBand.images.primary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 64vw"
                />
              </div>
            </div>

            <div className="absolute right-[3%] top-[6%] z-30 w-[42%] rotate-[4deg] rounded-[2rem] border border-border/70 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem]">
                <Image
                  src={aboutPantryBand.images.secondary.src}
                  alt={aboutPantryBand.images.secondary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 14rem, 42vw"
                />
              </div>
            </div>

            <div className="absolute bottom-[2%] right-0 z-20 w-[46%] rounded-[2rem] border border-border/80 bg-background/97 px-5 py-5 shadow-[0_28px_70px_rgba(20,33,38,0.22)] backdrop-blur-xl sm:bottom-[1%] sm:px-6 sm:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/82">
                {aboutPantryBand.callout.eyebrow}
              </p>
              <p className="mt-3 max-w-[12ch] text-balance font-display text-[1.7rem] leading-[1.02] text-ink sm:text-[2rem]">
                {aboutPantryBand.callout.body}
              </p>
            </div>
          </div>
        }
      >
        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {aboutPantryBand.cards.map((card, index) => (
            <article
              key={card.title}
              className={`postcard-panel rounded-[2rem] px-5 py-5 ${
                index === 1 ? "bg-background/92 md:translate-y-6" : "bg-card/90"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground/86">{card.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow={aboutCta.eyebrow}
        title={aboutCta.title}
        body={aboutCta.body}
        tone="ink"
        className="motion-delay-4 lg:py-12"
        actions={
          <>
            {aboutCta.actions.map((action, index) => (
              <CtaLink
                key={action.href}
                href={action.href}
                variant={action.variant}
                className={
                  index === 0
                    ? "text-ink"
                    : "border-background/22 bg-background/12 text-background hover:bg-background/18"
                }
              >
                {action.label}
              </CtaLink>
            ))}
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {milestones.map((milestone) => (
            <article key={milestone.label} className="rounded-[1.8rem] border border-background/12 bg-background/8 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/72">
                {milestone.label}
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-background">
                {milestone.value}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  )
}
