import type { ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

export type EditorialTone = "paper" | "sea" | "sun" | "ink" | "apricot"

type EditorialBandProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  decorate?: boolean
  motion?: boolean
  motionDelay?: 0 | 1 | 2 | 3 | 4
  tone?: EditorialTone
}

const toneClasses: Record<EditorialTone, string> = {
  paper: "bg-card",
  sea: "bg-sea/55",
  sun: "bg-sun/78",
  ink: "bg-ink text-background",
  apricot: "bg-apricot/70",
}

const orbPrimaryClasses: Record<EditorialTone, string> = {
  paper: "bg-sun/45",
  sea: "bg-sun/35",
  sun: "bg-background/35",
  ink: "bg-sun/20",
  apricot: "bg-background/28",
}

const orbSecondaryClasses: Record<EditorialTone, string> = {
  paper: "bg-sea/38",
  sea: "bg-background/28",
  sun: "bg-sea/28",
  ink: "bg-background/12",
  apricot: "bg-sea/20",
}

const ringClasses: Record<EditorialTone, string> = {
  paper: "",
  sea: "",
  sun: "",
  ink: "border-background/15",
  apricot: "",
}

const motionDelayClasses = {
  0: "",
  1: "motion-delay-1",
  2: "motion-delay-2",
  3: "motion-delay-3",
  4: "motion-delay-4",
} as const

export function EditorialBand({
  as: Component = "section",
  children,
  className,
  decorate = true,
  motion = true,
  motionDelay = 0,
  tone = "paper",
}: EditorialBandProps) {
  return (
    <Component
      className={cn(
        "story-shell",
        toneClasses[tone],
        motion && "motion-enter",
        motionDelayClasses[motionDelay],
        className
      )}
    >
      {decorate ? (
        <>
          <div className={cn("story-orb -left-8 top-8 h-28 w-28", orbPrimaryClasses[tone])} />
          <div
            className={cn(
              "story-orb bottom-0 right-0 h-36 w-36 translate-x-6 translate-y-10",
              orbSecondaryClasses[tone]
            )}
          />
          <div className={cn("scribble-ring right-[22%] top-[14%] h-24 w-24", ringClasses[tone])} />
        </>
      ) : null}

      <div className="relative">{children}</div>
    </Component>
  )
}
