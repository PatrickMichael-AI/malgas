"use client"

import type { ReactNode } from "react"
import { Suspense, lazy, useSyncExternalStore } from "react"

type PageTransitionShellProps = {
  children: ReactNode
}

const DesktopPageTransitionShell = lazy(() =>
  import("@/components/desktop-page-transition-shell").then((module) => ({
    default: module.DesktopPageTransitionShell,
  }))
)

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {}
  }

  const mediaQuery = window.matchMedia("(min-width: 768px)")
  mediaQuery.addEventListener("change", callback)

  return () => mediaQuery.removeEventListener("change", callback)
}

function getSnapshot() {
  return window.matchMedia("(min-width: 768px)").matches
}

function getServerSnapshot() {
  return false
}

export function PageTransitionShell({ children }: PageTransitionShellProps) {
  const enableDesktopTransitions = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  if (!enableDesktopTransitions) {
    return <div>{children}</div>
  }

  return (
    <Suspense fallback={<div>{children}</div>}>
      <DesktopPageTransitionShell>{children}</DesktopPageTransitionShell>
    </Suspense>
  )
}
