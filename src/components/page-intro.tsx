import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type PageIntroProps = {
  eyebrow: string
  title: string
  body: string
  badge?: string
  actions?: ReactNode
  aside?: ReactNode
  className?: string
}

export function PageIntro({
  eyebrow,
  title,
  body,
  badge,
  actions,
  aside,
  className,
}: PageIntroProps) {
  return (
    <section
      className={cn(
        "motion-enter relative overflow-hidden rounded-[2.75rem] border border-border/70 bg-card px-6 py-8 shadow-float sm:px-8 sm:py-10 lg:px-10",
        className
      )}
    >
      <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-sun/50 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-36 w-36 translate-x-6 translate-y-10 rounded-full bg-sea/45 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-5">
          {badge ? <span className="soft-chip">{badge}</span> : null}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/55">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl leading-[0.94] text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-xl text-base leading-8 text-foreground/78 sm:text-lg">
              {body}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        {aside ? <div className="relative">{aside}</div> : null}
      </div>
    </section>
  )
}
