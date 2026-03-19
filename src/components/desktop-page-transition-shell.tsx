"use client"

import type { ReactNode } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

type DesktopPageTransitionShellProps = {
  children: ReactNode
}

const transition = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1],
} as const

const settledState = {
  opacity: 1,
  y: 0,
  scale: 1,
  filter: "blur(0px)",
} as const

const enteringState = {
  opacity: 0,
  y: 36,
  scale: 0.972,
  filter: "blur(18px)",
} as const

const exitingState = {
  opacity: 0,
  y: -28,
  scale: 1.012,
  filter: "blur(12px)",
} as const

export function DesktopPageTransitionShell({
  children,
}: DesktopPageTransitionShellProps) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduceMotion ? settledState : enteringState}
        animate={settledState}
        exit={reduceMotion ? settledState : exitingState}
        transition={reduceMotion ? { duration: 0 } : transition}
        className="relative will-change-[opacity,transform,filter]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
