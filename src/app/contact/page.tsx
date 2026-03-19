import Image from "next/image"
import type { Metadata } from "next"

import { CtaLink } from "@/components/cta-link"
import { InquiryFormShell } from "@/components/inquiry-form-shell"
import { SectionShell } from "@/components/section-shell"
import { contactCta, contactHero, contactPlanningSection } from "@/content/contact"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Salt & Fynbos for reservations, private suppers, long-table gatherings, and produce-led dining enquiries in Malgas.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact | Salt & Fynbos",
    description:
      "Contact Salt & Fynbos for reservations, private suppers, long-table gatherings, and produce-led dining enquiries in Malgas.",
  },
}

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-12 lg:space-y-14">
      <SectionShell
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        body={contactHero.body}
        tone="ink"
        titleAs="h1"
        className="lg:py-12"
        actions={
          <>
            {contactHero.actions.map((action, index) => (
              <CtaLink
                key={action.href}
                href={action.href}
                variant={action.variant}
                className={
                  index === 0
                    ? "text-ink"
                    : "border-background/22 bg-background/12 text-background hover:bg-background/18"
                }
              >
                {action.label}
              </CtaLink>
            ))}
          </>
        }
        aside={
          <div className="grid gap-5">
            <div className="relative mb-2 min-h-[31rem] sm:min-h-[36rem] lg:min-h-[39rem]">
              <div className="absolute left-0 top-[4%] z-10 w-[67%] -rotate-[3deg] rounded-[2.2rem] border border-border/70 bg-background/98 p-3 shadow-float">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem]">
                  <Image
                    src={contactHero.images.primary.src}
                    alt={contactHero.images.primary.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20rem, 64vw"
                    priority
                  />
                </div>
              </div>

              <div className="absolute right-[3%] top-[2%] z-30 w-[42%] rotate-[4deg] rounded-[2rem] border border-border/70 bg-background/98 p-3 shadow-float">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem]">
                  <Image
                    src={contactHero.images.secondary.src}
                    alt={contactHero.images.secondary.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 14rem, 42vw"
                  />
                </div>
              </div>

              <div className="absolute bottom-[2%] right-0 z-20 w-[47%] rounded-[2rem] border border-background/14 bg-kelp/94 px-5 py-5 text-background shadow-[0_28px_70px_rgba(20,33,38,0.22)] backdrop-blur-xl sm:bottom-[1%] sm:px-6 sm:py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-background/84">
                  {contactHero.callout.eyebrow}
                </p>
                <p className="mt-3 max-w-[12ch] text-balance font-display text-[1.7rem] leading-[1.02] sm:text-[2rem]">
                  {contactHero.callout.body}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {contactHero.cards.map((card) => (
                <article key={card.title} className="postcard-panel rounded-[2rem] bg-background/10 px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background/72">
                    {card.title}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-3 block font-display text-3xl leading-tight text-background hover:text-background/80"
                    >
                      {card.body}
                    </a>
                  ) : (
                    <p className="mt-3 font-display text-3xl leading-tight text-background">
                      {card.body}
                    </p>
                  )}
                </article>
              ))}
            </div>

            <article className="postcard-panel rounded-[2rem] bg-background/10 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background/72">
                Opening rhythm
              </p>
              <div className="mt-4 space-y-3">
                {contactHero.hours.map((slot) => (
                  <div key={slot.label} className="border-b border-background/12 pb-3 last:border-b-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/72">
                      {slot.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-background/86">{slot.value}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        }
      >
        <InquiryFormShell />
      </SectionShell>

      <SectionShell
        eyebrow={contactPlanningSection.eyebrow}
        title={contactPlanningSection.title}
        body={contactPlanningSection.body}
        className="motion-delay-2 lg:py-12"
        aside={
          <div className="grid gap-4 lg:gap-5">
            {contactPlanningSection.channels.map((channel, index) => (
              <article
                key={channel.title}
                className={`postcard-panel rounded-[2rem] px-5 py-5 ${
                  index === 1 ? "bg-sea/50" : index === 2 ? "bg-apricot/52" : "bg-card"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                  {channel.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/86">{channel.value}</p>
              </article>
            ))}
          </div>
        }
      >
        <div className="grid gap-4 lg:gap-5">
          <article className="postcard-panel rounded-[2rem] bg-card/92 px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
              Best reasons to reach out
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {contactPlanningSection.reasons.map((reason) => (
                <div
                  key={reason}
                  className="contact-reason-card rounded-[1.5rem] border border-border/60 bg-background/85 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-foreground/86">{reason}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {contactPlanningSection.notes.map((note) => (
              <article
                key={note.title}
                className="contact-note-card postcard-panel rounded-[2rem] bg-background/92 px-5 py-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                  {note.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/86">{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow={contactCta.eyebrow}
        title={contactCta.title}
        body={contactCta.body}
        tone="sea"
        className="motion-delay-3 lg:py-12"
        actions={
          <>
            {contactCta.actions.map((action) => (
              <CtaLink
                key={action.href}
                href={action.href}
                variant={action.variant}
                className={action.variant === "sun" ? "!text-[#172126]" : undefined}
              >
                {action.label}
              </CtaLink>
            ))}
          </>
        }
      />
    </div>
  )
}
