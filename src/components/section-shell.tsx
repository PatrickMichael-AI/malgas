import type { ElementType, ReactNode } from "react"

import { EditorialBand, type EditorialTone } from "@/components/editorial-band"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  actions?: ReactNode
  aside?: ReactNode
  className?: string
  eyebrow: string
  title: string
  body: string
  children?: ReactNode
  fullWidthChildren?: boolean
  reverse?: boolean
  tone?: EditorialTone
  titleAs?: Extract<ElementType, "h1" | "h2" | "h3">
}

export function SectionShell({
  actions,
  aside,
  body,
  children,
  className,
  eyebrow,
  fullWidthChildren = false,
  reverse = false,
  title,
  titleAs: Title = "h2",
  tone = "paper",
}: SectionShellProps) {
  return (
    <EditorialBand tone={tone} className={cn("px-6 py-8 sm:px-8 sm:py-10", className)}>
      <div className={cn(fullWidthChildren && children && "space-y-8")}>
        <div className={cn("grid gap-8", aside && "lg:grid-cols-[1.02fr_0.98fr] lg:items-start")}>
          <div className={cn("max-w-2xl space-y-4", reverse && aside && "lg:order-2")}>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.34em]",
                tone === "ink" ? "text-background/72" : "text-foreground/72"
              )}
            >
              {eyebrow}
            </p>
            <Title
              className={cn(
                "font-display text-4xl leading-tight sm:text-5xl",
                tone === "ink" ? "text-background" : "text-ink"
              )}
            >
              {title}
            </Title>
            <p
              className={cn(
                "text-base leading-7 sm:text-lg",
                tone === "ink" ? "text-background/86" : "text-foreground/86"
              )}
            >
              {body}
            </p>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
            {children && !fullWidthChildren ? <div className="pt-4">{children}</div> : null}
          </div>

          {aside ? (
            <div className={cn("relative lg:pl-6", reverse && "lg:order-1 lg:pl-0 lg:pr-6")}>
              {aside}
            </div>
          ) : null}
        </div>

        {children && fullWidthChildren ? <div>{children}</div> : null}
      </div>
    </EditorialBand>
  )
}
