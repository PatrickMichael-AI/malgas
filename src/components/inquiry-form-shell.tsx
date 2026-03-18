"use client"

import type { FormEvent } from "react"
import { useMemo, useState } from "react"
import { CheckCircle2, Mail, Phone } from "lucide-react"

import { ctaLinkVariants } from "@/components/cta-link"
import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

type InquiryValues = {
  name: string
  email: string
  preferredDate: string
  guests: string
  notes: string
}

type InquiryErrors = Partial<Record<keyof InquiryValues, string>>

const initialValues: InquiryValues = {
  name: "",
  email: "",
  preferredDate: "",
  guests: "",
  notes: "",
}

function validateInquiry(values: InquiryValues) {
  const errors: InquiryErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Enter the guest name we should hold the table under."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address so we can reply."
  }

  if (values.preferredDate.trim().length < 6) {
    errors.preferredDate = "Tell us the day or service window you have in mind."
  }

  if (!/\d+/.test(values.guests)) {
    errors.guests = "Include a guest count, even if the group size may still change."
  }

  if (values.notes.trim().length > 0 && values.notes.trim().length < 12) {
    errors.notes = "Add a little more context or leave this field empty."
  }

  return errors
}

function buildMailtoHref(values: InquiryValues) {
  const subject = `Salt & Fynbos enquiry for ${values.preferredDate}`
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Preferred date: ${values.preferredDate}`,
    `Guests: ${values.guests}`,
    "",
    "Notes:",
    values.notes || "No extra notes yet.",
  ].join("\n")

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function InquiryFormShell() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<InquiryErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const mailtoHref = useMemo(() => buildMailtoHref(values), [values])
  const hasErrors = Object.keys(errors).length > 0

  function updateField<K extends keyof InquiryValues>(field: K, value: InquiryValues[K]) {
    setValues((current) => ({ ...current, [field]: value }))

    setErrors((current) => {
      if (!current[field]) {
        return current
      }

      const next = { ...current }
      delete next[field]
      return next
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateInquiry(values)
    setErrors(nextErrors)
    setIsSubmitted(Object.keys(nextErrors).length === 0)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="motion-enter motion-delay-1 rounded-[2rem] border border-border/70 bg-card px-5 py-6 shadow-paper sm:px-6"
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/55">
          Booking enquiry
        </p>
        <h2 className="font-display text-4xl leading-none text-ink">Start with the details.</h2>
        <p className="text-sm leading-7 text-foreground/75">
          Share the basics and we will steer you toward the right lunch, supper, or private
          table rhythm.
        </p>
      </div>

      <div
        aria-live="polite"
        className={cn(
          "mt-4 rounded-[1.5rem] border px-4 py-3 text-sm",
          isSubmitted
            ? "border-fynbos/35 bg-fynbos/10 text-foreground/80"
            : hasErrors
              ? "border-apricot/60 bg-apricot/18 text-foreground/80"
              : "border-border/60 bg-background/70 text-foreground/65"
        )}
      >
        {isSubmitted ? (
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fynbos" />
            <p>
              Your enquiry details are complete. Use the drafted email below to send them through
              while the booking flow is still email-first.
            </p>
          </div>
        ) : hasErrors ? (
          <p>Review the highlighted fields before sending the enquiry.</p>
        ) : (
          <p>Preferred date, guest count, and reply email are the essentials.</p>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label
          className={cn("field-shell", errors.name ? "border-apricot/80 bg-apricot/12" : undefined)}
        >
          <span className="field-label">Name</span>
          <input
            type="text"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
            className="field-input"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
          />
          {errors.name ? (
            <span id="inquiry-name-error" className="mt-3 block text-sm text-ink">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label
          className={cn(
            "field-shell",
            errors.email ? "border-apricot/80 bg-apricot/12" : undefined
          )}
        >
          <span className="field-label">Email</span>
          <input
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="hello@example.com"
            className="field-input"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
          />
          {errors.email ? (
            <span id="inquiry-email-error" className="mt-3 block text-sm text-ink">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label
          className={cn(
            "field-shell",
            errors.preferredDate ? "border-apricot/80 bg-apricot/12" : undefined
          )}
        >
          <span className="field-label">Preferred date</span>
          <input
            type="text"
            value={values.preferredDate}
            onChange={(event) => updateField("preferredDate", event.target.value)}
            placeholder="Friday lunch or Saturday supper"
            className="field-input"
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? "inquiry-date-error" : undefined}
          />
          {errors.preferredDate ? (
            <span id="inquiry-date-error" className="mt-3 block text-sm text-ink">
              {errors.preferredDate}
            </span>
          ) : null}
        </label>

        <label
          className={cn(
            "field-shell",
            errors.guests ? "border-apricot/80 bg-apricot/12" : undefined
          )}
        >
          <span className="field-label">Guests</span>
          <input
            type="text"
            value={values.guests}
            onChange={(event) => updateField("guests", event.target.value)}
            placeholder="2, 4, or long-table group"
            className="field-input"
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "inquiry-guests-error" : undefined}
          />
          {errors.guests ? (
            <span id="inquiry-guests-error" className="mt-3 block text-sm text-ink">
              {errors.guests}
            </span>
          ) : null}
        </label>
      </div>

      <label
        className={cn(
          "field-shell mt-4 block",
          errors.notes ? "border-apricot/80 bg-apricot/12" : undefined
        )}
      >
        <span className="field-label">Notes</span>
        <textarea
          value={values.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          placeholder="Tell us about the occasion, timing, or anything the kitchen should know."
          className="field-textarea"
          rows={5}
          aria-invalid={Boolean(errors.notes)}
          aria-describedby={errors.notes ? "inquiry-notes-error" : undefined}
        />
        {errors.notes ? (
          <span id="inquiry-notes-error" className="mt-3 block text-sm text-ink">
            {errors.notes}
          </span>
        ) : null}
      </label>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-md text-xs uppercase tracking-[0.22em] text-foreground/55">
          Long lunches, private tables, and produce-led menu questions all start here.
        </p>
        <button type="submit" className={ctaLinkVariants({ variant: "primary", size: "md" })}>
          Start your enquiry
        </button>
      </div>

      {isSubmitted ? (
        <div className="mt-6 grid gap-3 rounded-[1.75rem] border border-border/60 bg-background/82 p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
              Enquiry ready
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground/78">
              Send the drafted message now, or call if your booking is time-sensitive.
            </p>
          </div>
          <a
            href={mailtoHref}
            className={cn(ctaLinkVariants({ variant: "primary", size: "sm" }), "gap-2")}
          >
            <Mail className="h-4 w-4" />
            Open email draft
          </a>
          <a
            href="tel:+27210000000"
            className={cn(ctaLinkVariants({ variant: "secondary", size: "sm" }), "gap-2")}
          >
            <Phone className="h-4 w-4" />
            Call the restaurant
          </a>
        </div>
      ) : null}
    </form>
  )
}
