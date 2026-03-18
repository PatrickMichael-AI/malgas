import { ArrowRight, Compass } from "lucide-react"

import { CtaLink } from "@/components/cta-link"

export default function NotFound() {
  return (
    <section className="motion-enter relative overflow-hidden rounded-[2.75rem] border border-border/70 bg-card px-6 py-10 shadow-float sm:px-8 sm:py-12">
      <div className="hero-bloom left-[-4rem] top-[-2rem] h-36 w-36 bg-sun/55" />
      <div className="hero-bloom bottom-[-4rem] right-[-2rem] h-48 w-48 bg-sea/45" />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-foreground/60 shadow-paper">
            <Compass className="h-4 w-4" />
            404
          </div>
          <h1 className="mt-5 font-display text-5xl leading-[0.92] text-ink sm:text-6xl">
            This page drifted past the reedbeds.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-foreground/78 sm:text-lg">
            The route you tried is not part of the Salt &amp; Fynbos map. Head back to the home
            page, browse the menu, or jump straight into planning a table.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CtaLink href="/">
              Back home
              <ArrowRight className="ml-2 h-4 w-4" />
            </CtaLink>
            <CtaLink href="/menu" variant="secondary">
              Browse menu
            </CtaLink>
          </div>
        </div>

        <aside className="editorial-card motion-enter motion-delay-2 bg-background/88 px-5 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
            Fast routes
          </p>
          <div className="mt-4 space-y-3">
            <CtaLink href="/contact" variant="sun" className="w-full text-ink">
              Plan a table
            </CtaLink>
            <div className="rounded-[1.5rem] border border-border/60 bg-card px-4 py-4">
              <p className="text-sm leading-7 text-foreground/78">
                Need details instead? The contact page has the current hours, email, and booking
                cues.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
