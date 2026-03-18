import type { Metadata } from "next"
import Image from "next/image"

import { CtaLink } from "@/components/cta-link"
import { PageIntro } from "@/components/page-intro"
import { menuCategories, menuCta, menuIntro } from "@/content/menu"
import { cn } from "@/lib/utils"

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
        badge="Menu for long lunches"
        actions={
          <>
            <CtaLink href="/contact">Plan your table</CtaLink>
            <CtaLink href="/about" variant="secondary">
              Read the story
            </CtaLink>
          </>
        }
        aside={
          <div className="relative min-h-[22rem] sm:min-h-[26rem]">
            <div className="absolute left-0 top-0 w-[72%] rounded-[2rem] border border-border/70 bg-card p-3 shadow-paper">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/dessert.jpg"
                  alt="Salt & Fynbos dessert course"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 60vw"
                />
              </div>
            </div>
            <div className="absolute bottom-[4%] right-0 w-[48%] rounded-[2rem] border border-border/70 bg-sea/60 px-5 py-6 shadow-paper">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
                Dining rhythm
              </p>
              <p className="mt-3 font-display text-3xl leading-tight text-ink">
                Built to be ordered in waves, not in a rush.
              </p>
            </div>
          </div>
        }
      />

      <section className="motion-enter motion-delay-1 grid gap-4 lg:grid-cols-2">
        {menuCategories.map((category, index) => (
          <article
            key={category.name}
            className={cn(
              "rounded-[2.25rem] border border-border/70 p-5 shadow-paper sm:p-6",
              index === 0
                ? "bg-background/92"
                : index === 1
                  ? "bg-sea/45"
                  : index === 2
                    ? "bg-card"
                    : "bg-apricot/55"
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/55">
              {category.note}
            </p>
            <h2 className="mt-4 font-display text-4xl text-ink">{category.name}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/75">{category.description}</p>
            <div className="mt-6 space-y-3">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.6rem] border border-border/60 bg-background/85 px-4 py-4"
                >
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="mt-2 text-sm leading-7 text-foreground/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="motion-enter motion-delay-2 relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-ink px-6 py-8 text-background shadow-float sm:px-8">
        <div className="absolute right-0 top-0 h-40 w-40 translate-x-8 -translate-y-6 rounded-full bg-background/10" />
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-background/55">
          Reservation cue
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-background">{menuCta.title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-background/78">{menuCta.body}</p>
        <CtaLink href={menuCta.href} variant="sun" className="mt-6 text-ink">
          {menuCta.label}
        </CtaLink>
      </section>
    </div>
  )
}
