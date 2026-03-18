import Image from "next/image"
import type { Metadata } from "next"

import { CtaLink } from "@/components/cta-link"
import { PageIntro } from "@/components/page-intro"
import { SectionShell } from "@/components/section-shell"
import { menuChapters, menuCta, menuIntro, menuSequence } from "@/content/menu"
import { cn } from "@/lib/utils"

const chapterToneClasses = {
  paper: {
    band: "paper",
    aside: "bg-background/92",
    item: "bg-card/88",
  },
  sea: {
    band: "sea",
    aside: "bg-background/86",
    item: "bg-background/88",
  },
  sun: {
    band: "sun",
    aside: "bg-background/86",
    item: "bg-background/88",
  },
  apricot: {
    band: "apricot",
    aside: "bg-background/86",
    item: "bg-background/88",
  },
} as const

const sequenceCardClasses = {
  Start: "bg-background/92",
  Main: "bg-sea/52 lg:translate-y-8",
  Garden: "bg-sun/70",
  Sweet: "bg-apricot/62 lg:translate-y-4",
} as const

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the Salt & Fynbos menu shaped by coast, pantry, market produce, line fish, garden sides, and bakery sweets.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    url: "/menu",
    title: "Menu | Salt & Fynbos",
    description:
      "Browse the Salt & Fynbos menu shaped by coast, pantry, market produce, line fish, garden sides, and bakery sweets.",
  },
}

export default function MenuPage() {
  return (
    <div className="space-y-8 pb-10">
      <PageIntro
        eyebrow={menuIntro.eyebrow}
        title={menuIntro.title}
        body={menuIntro.body}
        badge={menuIntro.badge}
        tone="sun"
        actions={
          <>
            {menuIntro.actions.map((action) => (
              <CtaLink key={action.href} href={action.href} variant={action.variant}>
                {action.label}
              </CtaLink>
            ))}
          </>
        }
        aside={
          <div className="relative min-h-[31rem] sm:min-h-[36rem] lg:min-h-[40rem]">
            <div className="absolute left-0 top-[4%] z-10 w-[66%] -rotate-[3deg] rounded-[2.2rem] border border-border/70 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem]">
                <Image
                  src={menuIntro.images.primary.src}
                  alt={menuIntro.images.primary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 64vw"
                />
              </div>
            </div>

            <div className="absolute right-[3%] top-[6%] z-30 w-[42%] rotate-[4deg] rounded-[2rem] border border-border/70 bg-background/98 p-3 shadow-float">
              <div className="relative aspect-square overflow-hidden rounded-[1.65rem]">
                <Image
                  src={menuIntro.images.secondary.src}
                  alt={menuIntro.images.secondary.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 14rem, 42vw"
                />
              </div>
            </div>

            <div className="absolute bottom-[7%] right-0 z-20 w-[46%] rounded-[2rem] border border-border/80 bg-background/97 px-5 py-5 text-ink shadow-[0_28px_70px_rgba(20,33,38,0.22)] backdrop-blur-xl sm:px-6 sm:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/82">
                {menuIntro.callout.eyebrow}
              </p>
              <p className="mt-3 max-w-[12ch] text-balance font-display text-[1.7rem] leading-[1.02] text-ink sm:text-[2rem]">
                {menuIntro.callout.body}
              </p>
            </div>
          </div>
        }
      />

      <SectionShell
        eyebrow={menuSequence.eyebrow}
        title={menuSequence.title}
        body={menuSequence.body}
        className="motion-delay-1"
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {menuChapters.map((chapter) => (
            <article
              key={chapter.chapter}
              className={cn("postcard-panel rounded-[2rem] px-5 py-5", sequenceCardClasses[chapter.chapter])}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/72">
                {chapter.chapter}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-ink">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/84">{chapter.summary}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <div className="space-y-4">
        {menuChapters.map((chapter, index) => {
          const toneClasses = chapterToneClasses[chapter.tone]

          return (
            <SectionShell
              key={chapter.chapter}
              eyebrow={chapter.chapter}
              title={chapter.title}
              body={chapter.description}
              tone={toneClasses.band}
              reverse={index % 2 === 1}
              className={cn(index === 0 ? "motion-delay-2" : index === 1 ? "motion-delay-3" : "motion-delay-4")}
              aside={
                <div className="grid gap-4">
                  <article className={cn("postcard-panel rounded-[2rem] px-5 py-5", toneClasses.aside)}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                      {chapter.moodTitle}
                    </p>
                    <p className="mt-3 font-display text-3xl leading-tight text-ink">
                      {chapter.mood}
                    </p>
                  </article>

                  <article className="postcard-panel rounded-[2rem] bg-card/92 px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                      {chapter.noteTitle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/86">{chapter.note}</p>
                  </article>
                </div>
              }
            >
              <div className="grid gap-3 md:grid-cols-2">
                {chapter.items.map((item) => (
                  <article
                    key={item.name}
                    className={cn(
                      "rounded-[1.7rem] border border-border/60 px-4 py-4 shadow-paper",
                      toneClasses.item
                    )}
                  >
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="mt-2 text-sm leading-7 text-foreground/84">{item.description}</p>
                  </article>
                ))}
              </div>
            </SectionShell>
          )
        })}
      </div>

      <SectionShell
        eyebrow={menuCta.eyebrow}
        title={menuCta.title}
        body={menuCta.body}
        tone="ink"
        className="motion-delay-4"
        actions={
          <CtaLink href={menuCta.href} variant="sun" className="text-ink">
            {menuCta.label}
          </CtaLink>
        }
      />
    </div>
  )
}
