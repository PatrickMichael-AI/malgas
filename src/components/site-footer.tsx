import Link from "next/link"

import { CtaLink } from "@/components/cta-link"
import { businessHours, siteConfig } from "@/content/site"

export function SiteFooter() {
  return (
    <footer className="px-4 pb-4 pt-16 sm:px-6 lg:px-8">
      <div className="story-shell mx-auto max-w-[90rem] bg-kelp text-background">
        <div className="story-orb left-[-4rem] top-[-4rem] h-40 w-40 bg-sun/16" />
        <div className="story-orb bottom-[-5rem] right-[-2rem] h-52 w-52 bg-sea/16" />
        <div className="relative px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-8 border-b border-background/12 pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex rounded-full border border-background/16 bg-background/12 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-background/82">
                Western Cape South Coast
              </span>
              <div className="space-y-3">
                <p className="font-display text-4xl leading-none text-background sm:text-5xl">
                  {siteConfig.name}
                </p>
                <p className="max-w-xl text-base leading-8 text-background/86">
                  {siteConfig.footerBlurb}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <CtaLink href="/contact" variant="sun" className="text-ink">
                Plan your visit
              </CtaLink>
              <CtaLink
                href="/menu"
                variant="secondary"
                className="border-background/18 bg-background/10 text-background hover:bg-background/15"
              >
                Browse menu
              </CtaLink>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr_1fr]">
            <div className="rounded-[2rem] border border-background/12 bg-background/7 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-background/72">
                House rhythm
              </p>
              <div className="mt-4 space-y-3 text-sm text-background/86">
                {businessHours.slice(0, 3).map((item) => (
                  <div key={item.label} className="border-b border-background/10 pb-3 last:border-b-0">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-background/70">
                      {item.label}
                    </p>
                    <p className="mt-2 leading-7">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-background/12 bg-background/7 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-background/72">
                Find us
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-background/86">
                <p>{siteConfig.location}</p>
                <Link href={`mailto:${siteConfig.email}`} className="block transition-colors duration-200 hover:text-background">
                  {siteConfig.email}
                </Link>
                <p>{siteConfig.phone}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-background/12 bg-background/7 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-background/72">
                House note
              </p>
              <p className="mt-4 text-sm leading-7 text-background/86">
                Estuary lunches, pantry-led cooking, and a slower table that feels worth the drive.
              </p>
              <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-background/66">
                {siteConfig.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
