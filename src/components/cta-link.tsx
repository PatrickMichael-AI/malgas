import type { ComponentPropsWithoutRef, ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const ctaLinkVariants = cva(
  "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-[transform,box-shadow,background-color,border-color,color] duration-200 before:absolute before:inset-[1px] before:-z-10 before:rounded-full before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-200 hover:-translate-y-0.5 hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "border-fynbos/90 bg-fynbos text-primary-foreground shadow-[0_20px_36px_rgba(60,117,95,0.22)] hover:border-kelp/70 hover:bg-kelp/95 hover:shadow-[0_24px_42px_rgba(31,56,61,0.24)]",
        secondary:
          "border-border/70 bg-background/92 text-ink shadow-[0_18px_32px_rgba(40,64,71,0.08)] hover:border-ink/12 hover:bg-foam/95 hover:shadow-[0_22px_38px_rgba(40,64,71,0.12)]",
        ink: "border-ink bg-ink text-background shadow-[0_20px_36px_rgba(15,35,43,0.24)] hover:bg-kelp hover:shadow-[0_24px_42px_rgba(15,35,43,0.28)]",
        sun: "border-sun/70 bg-sun text-ink shadow-[0_20px_36px_rgba(230,180,64,0.24)] hover:bg-sun/90 hover:shadow-[0_24px_40px_rgba(230,180,64,0.3)]",
      },
      size: {
        sm: "px-4 py-2.5",
        md: "px-6 py-3.5",
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
