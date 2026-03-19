"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { CtaLink } from "@/components/cta-link"
import { FynbosMark } from "@/components/fynbos-mark"
import { ThemeToggle } from "@/components/theme-toggle"
import { navigation, siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === "/"

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
      <div
        className={cn(
          "site-header-shell mx-auto max-w-[90rem] overflow-hidden rounded-[2.35rem] border border-border/70 bg-foam/85 shadow-tide backdrop-blur-xl",
          isHome && "site-header-shell-home border-border/55 bg-background/56 shadow-[0_22px_48px_rgba(36,53,57,0.16)]"
        )}
      >
        <div
          className={cn(
            "site-header-meta border-b border-border/60 bg-background/55 px-4 py-2.5 sm:px-5 lg:px-6 lg:py-3",
            isHome && "site-header-meta-home border-border/45 bg-background/32"
          )}
        >
          <div className="site-header-meta-copy flex flex-wrap items-center justify-between gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-foreground/74">
            <span>{siteConfig.location}</span>
            <span className="hidden md:inline">Long lunches, sunset suppers, coastal weekends</span>
          </div>
        </div>

        <div className="px-4 py-4 sm:px-5 lg:px-6 lg:py-5">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
              onClick={() => setMenuOpen(false)}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#7a2028] bg-background shadow-paper">
                <FynbosMark />
              </div>
              <div className="min-w-0">
                <p className="site-header-wordmark truncate font-display text-[1.8rem] leading-none text-ink">
                  {siteConfig.name}
                </p>
                <p className="site-header-label mt-1 hidden truncate text-[0.64rem] font-semibold uppercase tracking-[0.38em] text-foreground/74 sm:block">
                  {siteConfig.label}
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              <nav
                className={cn(
                  "site-nav-shell flex items-center gap-1 rounded-full border border-border/70 bg-card/75 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
                  isHome && "site-nav-shell-home border-border/55 bg-background/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
                )}
              >
                {navigation.map((item) => {
                  const active =
                    item.href === "/" ? pathname === item.href : pathname?.startsWith(item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "site-nav-link rounded-full px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.2em] transition-[background-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5",
                        active
                          ? "bg-kelp text-background shadow-paper"
                          : "text-foreground/78 hover:bg-background hover:text-ink"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
              <ThemeToggle />
              <CtaLink href="/contact" size="sm" variant="primary">
                Book a table
              </CtaLink>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMenuOpen((open) => !open)}
                className={cn(
                  "site-header-toggle inline-flex h-11 w-11 items-center justify-center rounded-[1.35rem] border border-border/70 bg-card/90 text-ink shadow-paper transition-transform duration-200 hover:-translate-y-0.5",
                  isHome && "site-header-toggle-home border-border/55 bg-background/52 shadow-[0_14px_30px_rgba(36,53,57,0.14)]"
                )}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
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
                      "site-mobile-link rounded-[1.6rem] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5",
                      isHome && "site-mobile-link-home border border-border/55 bg-background/52 shadow-[0_14px_30px_rgba(36,53,57,0.12)]",
                      active
                        ? "bg-kelp text-background"
                        : "bg-card/80 text-ink hover:bg-background"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <CtaLink
                href="/contact"
                variant="primary"
                className="mt-1"
                onClick={() => setMenuOpen(false)}
              >
                Book a table
              </CtaLink>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
