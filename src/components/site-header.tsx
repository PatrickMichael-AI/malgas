"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { CtaLink } from "@/components/cta-link"
import { navigation, siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-border/70 bg-background/88 px-4 py-3 shadow-paper backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-apricot text-sm font-semibold uppercase tracking-[0.25em] text-ink shadow-paper">
              {siteConfig.shortName}
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-2xl leading-none text-ink">
                {siteConfig.name}
              </p>
              <p className="mt-1 hidden truncate text-[0.7rem] uppercase tracking-[0.34em] text-foreground/65 sm:block">
                {siteConfig.label}
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <nav className="flex items-center gap-2">
              {navigation.map((item) => {
                const active =
                  item.href === "/" ? pathname === item.href : pathname?.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium tracking-[0.08em] transition-[background-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5",
                      active
                        ? "bg-fynbos text-primary-foreground shadow-paper"
                        : "text-foreground/80 hover:bg-card hover:text-ink hover:shadow-paper"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <CtaLink href="/contact" size="sm" variant="sun">
              Book
            </CtaLink>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card text-ink shadow-paper transition-transform duration-200 hover:-translate-y-0.5 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div id="mobile-nav" className="mt-4 grid gap-2 border-t border-border/70 pt-4 md:hidden">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === item.href : pathname?.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-[1.35rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5",
                    active
                      ? "bg-fynbos text-primary-foreground"
                      : "bg-card text-ink hover:bg-background"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <CtaLink href="/contact" variant="sun" className="mt-1" onClick={() => setMenuOpen(false)}>
              Book a table
            </CtaLink>
          </div>
        ) : null}
      </div>
    </header>
  )
}
