import Image from "next/image"
import type { Metadata } from "next"
import { Suspense } from "react"

import { CtaLink } from "@/components/cta-link"
import { MenuExplorer } from "@/components/menu-explorer"
import { PageIntro } from "@/components/page-intro"
import { SectionShell } from "@/components/section-shell"
import { menuCta, menuIntro } from "@/content/menu"

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
                  priority
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

      <Suspense fallback={null}>
        <MenuExplorer />
      </Suspense>

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
