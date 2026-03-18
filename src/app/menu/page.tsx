import Image from "next/image"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

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

const chapterIds = {
  Start: "menu-start",
  Main: "menu-main",
  Garden: "menu-garden",
  Sweet: "menu-sweet",
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
    <div className="space-y-10 pb-12 lg:space-y-14">
      <PageIntro
        eyebrow={menuIntro.eyebrow}
        title={menuIntro.title}
        body={menuIntro.body}
        badge={menuIntro.badge}
        tone="sun"
        className="lg:py-12"
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
        className="motion-delay-1 lg:py-12"
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {menuChapters.map((chapter) => (
            <a
              key={chapter.chapter}
              href={`#${chapterIds[chapter.chapter]}`}
              className={cn(
                "postcard-panel group block rounded-[2rem] px-5 py-5 transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-y-1 hover:shadow-float focus-visible:-translate-y-1 focus-visible:shadow-float",
                sequenceCardClasses[chapter.chapter]
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/72">
                {chapter.chapter}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-ink">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/84">{chapter.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/74 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink">
                Jump to section
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </SectionShell>

      <div className="space-y-6 lg:space-y-8">
        {menuChapters.map((chapter, index) => {
          const toneClasses = chapterToneClasses[chapter.tone]

          return (
            <section key={chapter.chapter} id={chapterIds[chapter.chapter]} className="scroll-mt-32">
              <SectionShell
                eyebrow={chapter.chapter}
                title={chapter.title}
                body={chapter.description}
                tone={toneClasses.band}
                reverse={index % 2 === 1}
                className={cn(
                  index === 0 ? "motion-delay-2 lg:py-12" : index === 1 ? "motion-delay-3 lg:py-12" : "motion-delay-4 lg:py-12"
                )}
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
            </section>
          )
        })}
      </div>

      <SectionShell
        eyebrow={menuCta.eyebrow}
        title={menuCta.title}
        body={menuCta.body}
        tone="ink"
        className="motion-delay-4 lg:py-12"
        actions={
          <CtaLink href={menuCta.href} variant="sun" className="text-ink">
            {menuCta.label}
          </CtaLink>
        }
      />
    </div>
  )
}
