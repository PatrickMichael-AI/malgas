import type { Metadata } from "next"
import type { ReactNode } from "react"
import localFont from "next/font/local"
import Script from "next/script"

import { BackToTopButton } from "@/components/back-to-top-button"
import { LayoutSceneHost } from "@/components/layout-scene-host"
import { PageTransitionShell } from "@/components/page-transition-shell"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/content/site"
import { themeInitScript } from "@/lib/theme"

import "./globals.css"

const display = localFont({
  src: [{ path: "./fonts/PlayfairDisplaySC-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
})

const bodyFont = localFont({
  src: [{ path: "./fonts/Karla-VariableFont_wght.ttf", weight: "200 800", style: "normal" }],
  variable: "--font-body",
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Salt & Fynbos dining room interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <div className="page-frame flex min-h-screen flex-col">
          <LayoutSceneHost />
          <SiteHeader />
          <main className="relative z-10 flex-1">
            <div className="mx-auto w-full max-w-[90rem] px-4 pb-10 pt-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14 lg:pt-14">
              <PageTransitionShell>{children}</PageTransitionShell>
            </div>
          </main>
          <BackToTopButton />
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
