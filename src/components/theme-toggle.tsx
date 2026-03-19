"use client"

import { useEffect, useState } from "react"
import { MoonStar, SunMedium } from "lucide-react"

import {
  THEME_STORAGE_KEY,
  applyTheme,
  getSystemTheme,
  resolveThemePreference,
  type Theme,
} from "@/lib/theme"

function getMountedTheme(): Theme {
  const datasetTheme = document.documentElement.dataset.theme

  if (datasetTheme === "dark" || datasetTheme === "light") {
    return datasetTheme
  }

  return resolveThemePreference(localStorage.getItem(THEME_STORAGE_KEY))
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const frame = window.requestAnimationFrame(() => {
      setTheme(getMountedTheme())
    })

    function syncTheme() {
      setTheme(getMountedTheme())
    }

    function handleSystemThemeChange() {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        const nextTheme = getSystemTheme()

        applyTheme(nextTheme)
        setTheme(nextTheme)
      }
    }

    function handleStorage(event: StorageEvent) {
      if (event.key === THEME_STORAGE_KEY) {
        syncTheme()
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)
    window.addEventListener("storage", handleStorage)

    return () => {
      window.cancelAnimationFrame(frame)
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
      window.removeEventListener("storage", handleStorage)
    }
  }, [])

  function handleToggle() {
    const currentTheme = theme ?? getMountedTheme()
    const nextTheme = currentTheme === "dark" ? "light" : "dark"

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  const nextThemeLabel = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={theme ? `Switch to ${nextThemeLabel} mode` : "Toggle color theme"}
      className="site-header-toggle inline-flex h-11 items-center justify-center gap-2 rounded-[1.35rem] border border-border/70 bg-card/90 px-3 text-ink shadow-paper transition-transform duration-200 hover:-translate-y-0.5"
    >
      {theme === "dark" ? (
        <SunMedium className="h-4.5 w-4.5" />
      ) : (
        <MoonStar className="h-4.5 w-4.5" />
      )}
      <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.22em] sm:inline">
        {theme ? (theme === "dark" ? "Light mode" : "Dark mode") : "Theme"}
      </span>
    </button>
  )
}
