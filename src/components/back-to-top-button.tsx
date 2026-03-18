"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

import { ctaLinkVariants } from "@/components/cta-link"
import { cn } from "@/lib/utils"

const SHOW_AFTER_SCROLL = 480

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL)
    }

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })

    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])

  function handleClick() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        ctaLinkVariants({ variant: "sun", size: "sm" }),
        "fixed bottom-4 right-4 z-50 gap-2 pl-4 pr-3 text-ink transition-[opacity,transform,box-shadow] duration-300 sm:bottom-6 sm:right-6",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" />
      <span className="hidden sm:inline">Back to top</span>
    </button>
  )
}
