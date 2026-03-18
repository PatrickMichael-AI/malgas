import type { ComponentPropsWithoutRef, ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const ctaLinkVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "border-fynbos bg-fynbos text-primary-foreground shadow-paper",
        secondary: "border-border/70 bg-background/90 text-ink hover:bg-card",
        ink: "border-ink bg-ink text-background shadow-paper",
        sun: "border-transparent bg-sun text-ink shadow-paper",
      },
      size: {
        sm: "px-4 py-2.5 text-xs",
        md: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type CtaLinkProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> &
  VariantProps<typeof ctaLinkVariants> & {
    children: ReactNode
  }

export function CtaLink({
  children,
  className,
  size,
  variant,
  ...props
}: CtaLinkProps) {
  return (
    <Link className={cn(ctaLinkVariants({ variant, size }), className)} {...props}>
      {children}
    </Link>
  )
}
