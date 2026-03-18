import type { ReactNode } from "react"

import { EditorialBand, type EditorialTone } from "@/components/editorial-band"
import { cn } from "@/lib/utils"

type PageIntroProps = {
  eyebrow: string
  title: string
  body: string
  badge?: string
  actions?: ReactNode
  aside?: ReactNode
  className?: string
  tone?: EditorialTone
}

export function PageIntro({
  eyebrow,
  title,
  body,
  badge,
  actions,
  aside,
  className,
  tone = "paper",
}: PageIntroProps) {
  return (
    <EditorialBand tone={tone} className={cn("px-6 py-8 sm:px-8 sm:py-10 lg:px-10", className)}>
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-5">
          {badge ? (
            <span
              className={cn(
                "soft-chip",
                tone === "ink" && "border-background/18 bg-background/12 text-background/86"
              )}
            >
              {badge}
            </span>
          ) : null}
          <div className="space-y-4">
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.32em]",
                tone === "ink" ? "text-background/72" : "text-foreground/72"
              )}
            >
              {eyebrow}
            </p>
            <h1
              className={cn(
                "font-display text-4xl leading-[0.9] sm:text-5xl lg:text-6xl",
                tone === "ink" ? "text-background" : "text-ink"
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "max-w-xl text-base leading-8 sm:text-lg",
                tone === "ink" ? "text-background/86" : "text-foreground/86"
              )}
            >
              {body}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        {aside ? <div className="relative lg:pl-6">{aside}</div> : null}
      </div>
    </EditorialBand>
  )
}
