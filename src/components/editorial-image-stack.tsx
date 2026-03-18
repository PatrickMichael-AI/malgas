import Image from "next/image"

import { cn } from "@/lib/utils"

type EditorialImage = {
  alt: string
  src: string
}

type EditorialImageStackProps = {
  callout: {
    body: string
    eyebrow: string
    tone?: "paper" | "sea" | "sun" | "apricot" | "ink"
  }
  calloutClassName?: string
  className?: string
  primary: EditorialImage
  primaryClassName?: string
  primarySizes?: string
  secondary: EditorialImage
  secondaryClassName?: string
  secondarySizes?: string
}

const calloutToneClasses = {
  paper: "border-border/80 bg-background/98 text-ink backdrop-blur-xl",
  sea: "border-background/14 bg-kelp/94 text-background backdrop-blur-xl",
  sun: "border-ink/12 bg-sun/97 text-ink backdrop-blur-xl",
  apricot: "border-ink/12 bg-apricot/97 text-ink backdrop-blur-xl",
  ink: "border-background/14 bg-ink/95 text-background backdrop-blur-xl",
} as const

const calloutEyebrowClasses = {
  paper: "text-foreground/82",
  sea: "text-background/84",
  sun: "text-ink/84",
  apricot: "text-ink/84",
  ink: "text-background/82",
} as const

export function EditorialImageStack({
  callout,
  calloutClassName,
  className,
  primary,
  primaryClassName,
  primarySizes = "(min-width: 1024px) 18rem, 60vw",
  secondary,
  secondaryClassName,
  secondarySizes = "(min-width: 1024px) 16rem, 40vw",
}: EditorialImageStackProps) {
  const tone = callout.tone ?? "sea"

  return (
    <div className={cn("relative min-h-[22rem] sm:min-h-[26rem]", className)}>
      <div
        className={cn(
          "absolute left-0 top-0 w-[70%] -rotate-[4deg] rounded-[2rem] border border-border/70 bg-background/98 p-3 shadow-float",
          primaryClassName
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            className="object-cover"
            sizes={primarySizes}
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-0 right-0 w-[48%] rotate-[5deg] rounded-[2rem] border border-border/70 bg-background/98 p-3 shadow-float",
          secondaryClassName
        )}
      >
        <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
          <Image
            src={secondary.src}
            alt={secondary.alt}
            fill
            className="object-cover"
            sizes={secondarySizes}
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-[8%] left-[41%] w-[48%] min-w-[14rem] rounded-[2rem] border px-5 py-5 shadow-[0_28px_70px_rgba(20,33,38,0.22)] sm:px-6 sm:py-6",
          calloutToneClasses[tone],
          calloutClassName
        )}
      >
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.24em]",
            calloutEyebrowClasses[tone]
          )}
        >
          {callout.eyebrow}
        </p>
        <p className="mt-3 max-w-[12ch] text-balance font-display text-[1.7rem] leading-[1.02] sm:text-[2rem]">
          {callout.body}
        </p>
      </div>
    </div>
  )
}
