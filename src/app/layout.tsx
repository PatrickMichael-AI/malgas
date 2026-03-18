import type { Metadata } from "next"
import type { ReactNode } from "react"
import localFont from "next/font/local"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/content/site"

import "./globals.css"

const display = localFont({
  src: [
    { path: "./fonts/DejaVuSerif.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DejaVuSerif-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
})

const bodyFont = localFont({
  src: [
    { path: "./fonts/UbuntuSans-Variable.ttf", style: "normal" },
    { path: "./fonts/UbuntuSans-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
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
      <body className={`${display.variable} ${bodyFont.variable}`}>
        <div className="page-frame flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
