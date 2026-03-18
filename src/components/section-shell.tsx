import type { ReactNode } from "react"

type SectionShellProps = {
  eyebrow: string
  title: string
  body: string
  children?: ReactNode
}

export function SectionShell({ eyebrow, title, body, children }: SectionShellProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card px-6 py-8 shadow-paper sm:px-8 sm:py-10">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-foreground/55">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
        <p className="text-base leading-7 text-foreground/78 sm:text-lg">{body}</p>
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  )
}
