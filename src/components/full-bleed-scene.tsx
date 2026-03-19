import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type FullBleedSceneProps = {
  children: ReactNode
  className?: string
  sceneClassName?: string
}

export function FullBleedScene({
  children,
  className,
  sceneClassName,
}: FullBleedSceneProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 w-screen -translate-x-1/2 overflow-hidden",
        className
      )}
    >
      <div className={cn("relative h-full w-full", sceneClassName)}>{children}</div>
    </div>
  )
}
