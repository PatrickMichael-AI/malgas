import type { Metadata } from "next"
import Image from "next/image"

import { CtaLink } from "@/components/cta-link"
import { PageIntro } from "@/components/page-intro"
import { aboutCta, aboutIntro, milestones, storySections, values } from "@/content/about"
import { cn } from "@/lib/utils"

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
    <div className="space-y-8 pb-10">
      <PageIntro
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        body={aboutIntro.body}
        badge="Place-driven hospitality"
        actions={
          <CtaLink href={aboutCta.href} variant="primary">
            {aboutCta.label}
          </CtaLink>
        }
        aside={
          <div className="relative min-h-[22rem] sm:min-h-[26rem]">
            <div className="absolute left-0 top-0 w-[70%] rounded-[2rem] border border-border/70 bg-card p-3 shadow-paper">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="Salt & Fynbos dining room interior"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 18rem, 60vw"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[50%] rounded-[2rem] border border-border/70 bg-apricot/70 px-5 py-6 shadow-paper">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">
                Brand world
              </p>
              <p className="mt-3 font-display text-3xl leading-tight text-ink">
                Estuary calm, pantry craft, and a room that invites people to stay.
              </p>
            </div>
          </div>
        }
      />

      <section className="motion-enter motion-delay-1 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          {storySections.map((section, index) => (
            <article
              key={section.title}
              className={cn(
                "rounded-[2rem] border border-border/70 p-5 shadow-paper sm:p-6",
                index === 1 ? "bg-sea/45" : "bg-background/90"
              )}
            >
              <h2 className="font-display text-4xl text-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/75">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="space-y-4">
          <article className="rounded-[2rem] border border-border/70 bg-card p-5 shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/55">
              Values
            </p>
            <div className="mt-4 space-y-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-[1.5rem] border border-border/60 bg-apricot/35 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-foreground/78">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/70 bg-ink p-5 text-background shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-background/55">
              House markers
            </p>
            <div className="mt-4 space-y-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.label}
                  className="border-b border-background/12 pb-3 last:border-b-0"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/55">
                    {milestone.label}
                  </p>
                  <p className="mt-2 font-display text-2xl text-background">{milestone.value}</p>
                </div>
              ))}
            </div>
          </article>

          <CtaLink href={aboutCta.href} variant="sun" className="text-ink">
            {aboutCta.label}
          </CtaLink>
        </div>
      </section>
    </div>
  )
}
