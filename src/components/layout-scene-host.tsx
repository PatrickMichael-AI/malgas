"use client"

import { usePathname } from "next/navigation"

import { HomeHeroScene } from "@/components/home-hero-scene"

export function LayoutSceneHost() {
  const pathname = usePathname()
  const sceneVariant = pathname === "/" ? "home" : "none"

  if (sceneVariant === "none") {
    return null
  }

  return (
    <div aria-hidden="true" className="layout-scene-host">
      <div className="layout-scene-viewport" data-scene={sceneVariant}>
        <HomeHeroScene />
      </div>
    </div>
  )
}
