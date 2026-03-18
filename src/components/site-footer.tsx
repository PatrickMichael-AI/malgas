import Link from "next/link"

import { CtaLink } from "@/components/cta-link"
import { businessHours, siteConfig } from "@/content/site"

export function SiteFooter() {
  return (
    <footer className="px-4 pb-4 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-border/70 bg-ink text-background shadow-float">
        <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
          <div className="max-w-lg space-y-4">
            <span className="inline-flex rounded-full border border-background/15 bg-background/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-background/70">
              Salt &amp; Fynbos
            </span>
            <p className="font-display text-4xl leading-none text-background">{siteConfig.name}</p>
            <p className="text-sm leading-7 text-background/76">{siteConfig.footerBlurb}</p>
            <CtaLink href="/contact" variant="sun" className="text-ink">
              Plan your visit
            </CtaLink>
          </div>

          <div className="space-y-3 text-sm text-background/78">
            <p className="font-medium uppercase tracking-[0.24em] text-background/55">Hours</p>
            {businessHours.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-background/12 bg-background/6 px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/55">
                  {item.label}
                </p>
                <p className="mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-background/78">
            <p className="font-medium uppercase tracking-[0.24em] text-background/55">Contact</p>
            <div className="rounded-[1.25rem] border border-background/12 bg-background/6 px-4 py-3">
              <p>{siteConfig.location}</p>
              <Link href={`mailto:${siteConfig.email}`} className="mt-2 block hover:text-background">
                {siteConfig.email}
              </Link>
              <p className="mt-2">{siteConfig.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
