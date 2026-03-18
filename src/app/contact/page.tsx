import type { Metadata } from "next"
import Image from "next/image"

import { CtaLink } from "@/components/cta-link"
import { InquiryFormShell } from "@/components/inquiry-form-shell"
import { PageIntro } from "@/components/page-intro"
import { contactCtas, contactIntro, enquiryReasons, reservationNotes } from "@/content/contact"
import { businessHours, contactChannels, siteConfig } from "@/content/site"

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
    <div className="space-y-8 pb-10">
      <PageIntro
        eyebrow={contactIntro.eyebrow}
        title={contactIntro.title}
        body={contactIntro.body}
        badge="Reservations and private tables"
        actions={
          <>
            <CtaLink href="mailto:hello@saltandfynbos.co.za">Email the team</CtaLink>
            <CtaLink href="/menu" variant="secondary">
              Browse the menu
            </CtaLink>
          </>
        }
        aside={
          <div className="relative min-h-[22rem] sm:min-h-[25rem]">
            <div className="absolute left-0 top-0 w-[72%] rounded-[2rem] border border-border/70 bg-card p-3 shadow-paper">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/images/craft-beer.jpg"
                  alt="Golden drink served during the Salt & Fynbos lunch service"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 18rem, 60vw"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] rounded-[2rem] border border-border/70 bg-sea/55 px-5 py-6 shadow-paper">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
                Reach us from
              </p>
              <p className="mt-3 font-display text-3xl leading-tight text-ink">
                Lunch planning to private suppers.
              </p>
            </div>
          </div>
        }
      />

      <section className="motion-enter motion-delay-2 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          <InquiryFormShell />

          <article className="rounded-[2rem] border border-border/70 bg-card p-5 shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
              Best reasons to reach out
            </p>
            <div className="mt-4 space-y-3">
              {enquiryReasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[1.5rem] border border-border/60 bg-background/85 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-foreground/78">{reason}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-border/70 bg-apricot/50 p-5 shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
              What to include
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {reservationNotes.map((note) => (
                <div
                  key={note.title}
                  className="rounded-[1.5rem] border border-border/60 bg-background/82 px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                    {note.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground/78">{note.body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-4">
          <aside className="rounded-[2rem] border border-border/70 bg-sea/45 p-5 shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
              Business details
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-foreground/78">
              <p>{siteConfig.location}</p>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-ink">
                {siteConfig.email}
              </a>
              <p>{siteConfig.phone}</p>
            </div>
          </aside>

          <aside className="rounded-[2rem] border border-border/70 bg-card p-5 shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
              Opening rhythm
            </p>
            <div className="mt-4 space-y-3">
              {businessHours.map((slot) => (
                <div key={slot.label} className="border-b border-border/70 pb-3 last:border-b-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                    {slot.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground/78">{slot.value}</p>
                </div>
              ))}
            </div>
          </aside>

          <aside className="rounded-[2rem] border border-border/70 bg-background/90 p-5 shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55">
              Good to know
            </p>
            <div className="mt-4 space-y-3">
              {contactChannels.map((channel) => (
                <div key={channel.title}>
                  <p className="text-sm font-medium text-ink">{channel.title}</p>
                  <p className="mt-1 text-sm leading-7 text-foreground/75">{channel.value}</p>
                </div>
              ))}
            </div>
          </aside>

          <aside className="rounded-[2rem] border border-border/70 bg-ink p-5 text-background shadow-paper sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background/55">
              Next step
            </p>
            <p className="mt-3 font-display text-4xl leading-tight">
              If the menu already feels right, move straight into booking.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {contactCtas.map((cta, index) => (
                <CtaLink
                  key={cta.href}
                  href={cta.href}
                  variant={index === 0 ? "sun" : "secondary"}
                  className={
                    index === 0
                      ? "text-ink"
                      : "border-background/20 bg-background/10 text-background hover:bg-background/15"
                  }
                >
                  {cta.label}
                </CtaLink>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
