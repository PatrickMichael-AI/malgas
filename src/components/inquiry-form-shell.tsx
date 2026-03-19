"use client"

import type { FormEvent } from "react"
import { useEffect, useState } from "react"
import { CheckCircle2, Mail, Phone, Trash2 } from "lucide-react"

import { ctaLinkVariants } from "@/components/cta-link"
import {
  reservationServiceWindows,
  type ReservationServiceWindow,
} from "@/content/contact"
import { siteConfig } from "@/content/site"
import {
  buildReservationMailtoHref,
  doesReservationServiceWindowMatchDate,
  getReservationServiceWindow,
  getReservationWeekday,
  isReservationDateBookable,
  loadReservations,
  removeReservation,
  RESERVATION_STORAGE_KEY,
  saveReservation,
  serviceWindowSupportsWeekday,
  type ReservationRecord,
} from "@/lib/reservations"
import { cn } from "@/lib/utils"

type ContactMode = "reservation" | "enquiry"

type ContactValues = {
  email: string
  guests: string
  name: string
  notes: string
  preferredDate: string
  serviceWindow: ReservationServiceWindow | ""
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>

type ContactFormState = {
  errors: ContactErrors
  isSubmitted: boolean
  values: ContactValues
}

const initialValues: ContactValues = {
  name: "",
  email: "",
  preferredDate: "",
  serviceWindow: "",
  guests: "",
  notes: "",
}

const modeCopy = {
  reservation: {
    chips: ["Date", "Service window", "Guest count"],
    description:
      "Choose a date, match it to the right service rhythm, and save the reservation on this device before sending the email through.",
    emailLabel: "Email this reservation",
    idleMessage:
      "Choose a date, service window, guest count, and reply email to save a reservation on this device.",
    notesLabel: "Reservation notes",
    notesPlaceholder:
      "Tell us about the occasion, timing, dietary context, or anything the kitchen should know.",
    readyBody: "This reservation is now saved on this device. Email it through now, or call if the booking is time-sensitive.",
    readyTitle: "Reservation saved",
    reviewLabel: "Reservation path",
    ribbon: "Reservation",
    sideNoteBody:
      "Reservation mode stores the booking on this device and keeps the restaurant's email-first handoff intact.",
    sideNoteTitle: "Saved locally",
    submitLabel: "Save reservation",
    successMessage:
      "Your reservation has been saved on this device. Use the summary below to review it before emailing the team.",
    title: "Choose the right path for the table.",
  },
  enquiry: {
    chips: ["Reply email", "Visit context", "Guest estimate"],
    description:
      "Use general enquiry when you need guidance, private dining context, or menu answers before you are ready to save a reservation.",
    emailLabel: "Open enquiry email",
    idleMessage: "Add the context for your message and we will draft the enquiry email for you.",
    notesLabel: "Enquiry notes",
    notesPlaceholder:
      "Tell us about the occasion, menu direction, private dining question, or anything else you need from the team.",
    readyBody: "Your drafted enquiry email is ready to send, or you can call if the message is time-sensitive.",
    readyTitle: "Enquiry draft ready",
    reviewLabel: "General enquiry",
    ribbon: "General enquiry",
    sideNoteBody:
      "Use enquiry mode if you are still shaping the plan and want a message draft instead of saving a reservation on this device.",
    sideNoteTitle: "Message-first contact",
    submitLabel: "Draft enquiry email",
    successMessage: "Your enquiry details are complete and the email draft is ready below.",
    title: "Start with the details.",
  },
} as const satisfies Record<
  ContactMode,
  {
    chips: readonly string[]
    description: string
    emailLabel: string
    idleMessage: string
    notesLabel: string
    notesPlaceholder: string
    readyBody: string
    readyTitle: string
    reviewLabel: string
    ribbon: string
    sideNoteBody: string
    sideNoteTitle: string
    submitLabel: string
    successMessage: string
    title: string
  }
>

function createEmptyFormState(): ContactFormState {
  return {
    values: { ...initialValues },
    errors: {},
    isSubmitted: false,
  }
}

function validateReservation(values: ContactValues) {
  const errors: ContactErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Enter the guest name we should hold the table under."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address so we can reply."
  }

  if (!values.preferredDate) {
    errors.preferredDate = "Choose the reservation date."
  } else if (!getReservationWeekday(values.preferredDate)) {
    errors.preferredDate = "Choose a valid reservation date."
  } else if (!isReservationDateBookable(values.preferredDate)) {
    errors.preferredDate = "Reservations are currently available from Thursday through Sunday."
  }

  if (!values.serviceWindow) {
    errors.serviceWindow = "Choose the service window that fits the day."
  } else if (
    values.preferredDate &&
    getReservationWeekday(values.preferredDate) &&
    !doesReservationServiceWindowMatchDate(values.serviceWindow, values.preferredDate)
  ) {
    errors.serviceWindow = getReservationMismatchMessage(values.preferredDate)
  }

  const guestCount = Number.parseInt(values.guests, 10)

  if (!/^\d+$/.test(values.guests) || guestCount < 1) {
    errors.guests = "Enter the number of guests for the reservation."
  }

  if (values.notes.trim().length > 0 && values.notes.trim().length < 12) {
    errors.notes = "Add a little more context or leave this field empty."
  }

  return errors
}

function getReservationMismatchMessage(date: string) {
  const weekday = getReservationWeekday(date)

  if (!weekday) {
    return "Choose the service window that matches the selected day."
  }

  const matchingServiceWindows = reservationServiceWindows.filter((serviceWindow) =>
    serviceWindowSupportsWeekday(serviceWindow.allowedWeekdays, weekday)
  )

  if (matchingServiceWindows.length === 0) {
    return "No service window is currently available for that date."
  }

  const weekdayLabel = formatWeekdayLabel(weekday)
  const matchingLabels = matchingServiceWindows
    .map((serviceWindow) => serviceWindow.label)
    .join(" or ")

  return `${weekdayLabel} supports ${matchingLabels}. Choose that service window for this reservation.`
}

function validateEnquiry(values: ContactValues) {
  const errors: ContactErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Enter your name so the team knows who to reply to."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address so we can reply."
  }

  if (values.preferredDate.trim().length < 6) {
    errors.preferredDate = "Add the date, timing, or context for your enquiry."
  }

  if (!/\d+/.test(values.guests)) {
    errors.guests = "Include a guest estimate if the enquiry relates to a table or group."
  }

  if (values.notes.trim().length > 0 && values.notes.trim().length < 12) {
    errors.notes = "Add a little more context or leave this field empty."
  }

  return errors
}

function buildEnquiryMailtoHref(values: ContactValues) {
  const subject = `Salt & Fynbos enquiry from ${values.name || "a guest"}`
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Timing or context: ${values.preferredDate}`,
    `Guest estimate: ${values.guests}`,
    "",
    "Enquiry notes:",
    values.notes || "No extra notes yet.",
  ].join("\n")

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function createReservationRecord(values: ContactValues): ReservationRecord | null {
  if (!values.serviceWindow) {
    return null
  }

  return {
    id: createReservationId(),
    createdAt: new Date().toISOString(),
    date: values.preferredDate,
    email: values.email.trim(),
    guests: Number.parseInt(values.guests, 10),
    name: values.name.trim(),
    notes: values.notes.trim(),
    serviceWindow: values.serviceWindow,
  }
}

function createReservationId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID()
  }

  return `reservation-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

function FieldShell({
  children,
  error,
}: {
  children: React.ReactNode
  error?: string
}) {
  return (
    <label className={cn("field-shell", error ? "border-apricot/80 bg-apricot/12" : undefined)}>
      {children}
      {error ? <span className="mt-3 block text-sm text-ink">{error}</span> : null}
    </label>
  )
}

export function InquiryFormShell() {
  const [mode, setMode] = useState<ContactMode>("reservation")
  const [forms, setForms] = useState<Record<ContactMode, ContactFormState>>(() => ({
    reservation: createEmptyFormState(),
    enquiry: createEmptyFormState(),
  }))
  const [savedReservations, setSavedReservations] = useState<ReservationRecord[]>([])
  const [latestSavedReservation, setLatestSavedReservation] = useState<ReservationRecord | null>(
    null
  )
  const [reservationStorageError, setReservationStorageError] = useState<string | null>(null)
  const [hasLoadedReservations, setHasLoadedReservations] = useState(false)

  const currentForm = forms[mode]
  const currentValues = currentForm.values
  const currentErrors = currentForm.errors
  const modeDetails = modeCopy[mode]
  const hasErrors = Object.keys(currentErrors).length > 0
  const activeReservationStorageError = mode === "reservation" ? reservationStorageError : null
  const mailtoHref =
    mode === "reservation"
      ? latestSavedReservation
        ? buildReservationMailtoHref(latestSavedReservation)
        : "mailto:" + siteConfig.email
      : buildEnquiryMailtoHref(currentValues)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setSavedReservations(loadReservations())
      setHasLoadedReservations(true)
    })

    function handleStorage(event: StorageEvent) {
      if (event.key === RESERVATION_STORAGE_KEY || event.key === null) {
        setSavedReservations(loadReservations())
        setHasLoadedReservations(true)
      }
    }

    window.addEventListener("storage", handleStorage)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("storage", handleStorage)
    }
  }, [])

  function handleModeChange(nextMode: ContactMode) {
    setMode(nextMode)

    if (nextMode === "enquiry") {
      setReservationStorageError(null)
    }
  }

  function updateField<K extends keyof ContactValues>(field: K, value: ContactValues[K]) {
    setForms((currentForms) => {
      const activeForm = currentForms[mode]
      const nextErrors = { ...activeForm.errors }

      if (nextErrors[field]) {
        delete nextErrors[field]
      }

      return {
        ...currentForms,
        [mode]: {
          ...activeForm,
          values: { ...activeForm.values, [field]: value },
          errors: nextErrors,
          isSubmitted: false,
        },
      }
    })

    if (mode === "reservation") {
      setReservationStorageError(null)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (mode === "reservation") {
      handleReservationSubmit()
      return
    }

    handleEnquirySubmit()
  }

  function handleReservationSubmit() {
    const nextErrors = validateReservation(currentValues)

    if (Object.keys(nextErrors).length > 0) {
      setForms((currentForms) => ({
        ...currentForms,
        reservation: {
          ...currentForms.reservation,
          errors: nextErrors,
          isSubmitted: false,
        },
      }))
      setReservationStorageError(null)
      return
    }

    const nextReservation = createReservationRecord(currentValues)

    if (!nextReservation) {
      return
    }

    const nextReservations = saveReservation(nextReservation)

    if (!nextReservations) {
      setForms((currentForms) => ({
        ...currentForms,
        reservation: {
          ...currentForms.reservation,
          isSubmitted: false,
        },
      }))
      setReservationStorageError(
        "We could not save the reservation on this device. Use email or phone if the request is time-sensitive."
      )
      return
    }

    setSavedReservations(nextReservations)
    setHasLoadedReservations(true)
    setLatestSavedReservation(nextReservation)
    setReservationStorageError(null)
    setForms((currentForms) => ({
      ...currentForms,
      reservation: {
        values: { ...initialValues },
        errors: {},
        isSubmitted: true,
      },
    }))
  }

  function handleEnquirySubmit() {
    const nextErrors = validateEnquiry(currentValues)

    setForms((currentForms) => ({
      ...currentForms,
      enquiry: {
        ...currentForms.enquiry,
        errors: nextErrors,
        isSubmitted: Object.keys(nextErrors).length === 0,
      },
    }))
  }

  function handleRemoveReservation(id: string) {
    const nextReservations = removeReservation(id)

    if (!nextReservations) {
      setReservationStorageError(
        "We could not update the saved reservations on this device. You can still email or call the team."
      )
      return
    }

    setSavedReservations(nextReservations)
    setReservationStorageError(null)

    if (latestSavedReservation?.id === id) {
      setLatestSavedReservation(null)
      setForms((currentForms) => ({
        ...currentForms,
        reservation: {
          ...currentForms.reservation,
          isSubmitted: false,
        },
      }))
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="inquiry-shell motion-enter motion-delay-1 relative overflow-hidden rounded-[2.7rem] border border-border/80 bg-card px-5 py-6 shadow-float sm:px-6 lg:px-7"
    >
      <div className="inquiry-overlay pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,191,112,0.24),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(149,198,203,0.2),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent_48%)]" />
      <div className="inquiry-orb-primary story-orb right-[-2rem] top-[-2rem] h-28 w-28 bg-sun/30" />
      <div className="inquiry-orb-secondary story-orb bottom-[-2rem] left-[-1rem] h-24 w-24 bg-sea/18" />

      <div className="relative">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="space-y-3">
            <span className="story-ribbon">{modeDetails.ribbon}</span>
            <div className="space-y-2">
              <h2 className="font-display text-4xl leading-none text-ink">{modeDetails.title}</h2>
              <p className="max-w-xl text-sm leading-7 text-foreground/85">
                {modeDetails.description}
              </p>
            </div>
          </div>

          <div className="inquiry-side-note rounded-[1.8rem] border border-border/70 bg-background/92 px-4 py-4 shadow-paper lg:max-w-[16rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
              {modeDetails.sideNoteTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground/85">{modeDetails.sideNoteBody}</p>
          </div>
        </div>

        <div className="mt-5 rounded-[1.8rem] border border-border/70 bg-background/92 p-3 shadow-paper">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Contact mode">
            <ModeButton
              active={mode === "reservation"}
              label="Reservation"
              onClick={() => handleModeChange("reservation")}
            />
            <ModeButton
              active={mode === "enquiry"}
              label="General enquiry"
              onClick={() => handleModeChange("enquiry")}
            />
          </div>
        </div>

        <div
          aria-live="polite"
          className={cn(
            "mt-5 rounded-[1.7rem] border px-4 py-4 text-sm shadow-paper",
            currentForm.isSubmitted
              ? "border-fynbos/45 bg-fynbos/12 text-foreground/90"
              : hasErrors || activeReservationStorageError
                ? "border-apricot/70 bg-apricot/18 text-foreground/90"
                : "border-border/70 bg-background/92 text-foreground/80"
          )}
        >
          {currentForm.isSubmitted ? (
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fynbos" />
              <p>{modeDetails.successMessage}</p>
            </div>
          ) : activeReservationStorageError ? (
            <p>{activeReservationStorageError}</p>
          ) : hasErrors ? (
            <p>Review the highlighted fields before continuing.</p>
          ) : (
            <p>{modeDetails.idleMessage}</p>
          )}
        </div>

        <div className="inquiry-fields-shell mt-6 rounded-[2rem] border border-border/70 bg-background/88 p-3 sm:p-4">
          <div className="mb-4 flex flex-wrap gap-3">
            {modeDetails.chips.map((chip) => (
              <span
                key={chip}
                className="inquiry-meta-chip rounded-full border border-border/70 bg-foam px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-foreground/80 shadow-paper"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FieldShell error={currentErrors.name}>
              <span className="field-label">Name</span>
              <input
                type="text"
                value={currentValues.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your full name"
                className="field-input"
                aria-invalid={Boolean(currentErrors.name)}
              />
            </FieldShell>

            <FieldShell error={currentErrors.email}>
              <span className="field-label">Email</span>
              <input
                type="email"
                value={currentValues.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="hello@example.com"
                className="field-input"
                aria-invalid={Boolean(currentErrors.email)}
              />
            </FieldShell>

            {mode === "reservation" ? (
              <>
                <FieldShell error={currentErrors.preferredDate}>
                  <span className="field-label">Date</span>
                  <input
                    type="date"
                    value={currentValues.preferredDate}
                    onChange={(event) => updateField("preferredDate", event.target.value)}
                    className="field-input"
                    aria-invalid={Boolean(currentErrors.preferredDate)}
                  />
                </FieldShell>

                <FieldShell error={currentErrors.serviceWindow}>
                  <span className="field-label">Service window</span>
                  <select
                    value={currentValues.serviceWindow}
                    onChange={(event) =>
                      updateField(
                        "serviceWindow",
                        event.target.value as ContactValues["serviceWindow"]
                      )
                    }
                    className="field-input"
                    aria-invalid={Boolean(currentErrors.serviceWindow)}
                  >
                    <option value="">Choose a service window</option>
                    {reservationServiceWindows.map((serviceWindow) => (
                      <option key={serviceWindow.id} value={serviceWindow.id}>
                        {serviceWindow.label} - {serviceWindow.timeLabel}
                      </option>
                    ))}
                  </select>
                </FieldShell>

                <FieldShell error={currentErrors.guests}>
                  <span className="field-label">Guests</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    value={currentValues.guests}
                    onChange={(event) => updateField("guests", event.target.value)}
                    placeholder="2"
                    className="field-input"
                    aria-invalid={Boolean(currentErrors.guests)}
                  />
                </FieldShell>
              </>
            ) : (
              <>
                <FieldShell error={currentErrors.preferredDate}>
                  <span className="field-label">Timing or context</span>
                  <input
                    type="text"
                    value={currentValues.preferredDate}
                    onChange={(event) => updateField("preferredDate", event.target.value)}
                    placeholder="Private lunch, weekend visit, or produce-led question"
                    className="field-input"
                    aria-invalid={Boolean(currentErrors.preferredDate)}
                  />
                </FieldShell>

                <FieldShell error={currentErrors.guests}>
                  <span className="field-label">Guest estimate</span>
                  <input
                    type="text"
                    value={currentValues.guests}
                    onChange={(event) => updateField("guests", event.target.value)}
                    placeholder="2, 4, or long-table group"
                    className="field-input"
                    aria-invalid={Boolean(currentErrors.guests)}
                  />
                </FieldShell>
              </>
            )}
          </div>

          <label
            className={cn(
              "field-shell mt-4 block",
              currentErrors.notes ? "border-apricot/80 bg-apricot/12" : undefined
            )}
          >
            <span className="field-label">{modeDetails.notesLabel}</span>
            <textarea
              value={currentValues.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              placeholder={modeDetails.notesPlaceholder}
              className="field-textarea"
              rows={5}
              aria-invalid={Boolean(currentErrors.notes)}
            />
            {currentErrors.notes ? (
              <span className="mt-3 block text-sm text-ink">{currentErrors.notes}</span>
            ) : null}
          </label>
        </div>

        <div className="inquiry-summary mt-5 rounded-[1.9rem] border border-border/70 bg-card px-4 py-4 shadow-paper">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">
                {modeDetails.reviewLabel}
              </p>
              <p className="max-w-md text-sm leading-7 text-foreground/85">
                {modeDetails.description}
              </p>
            </div>
            <button type="submit" className={ctaLinkVariants({ variant: "primary", size: "md" })}>
              {modeDetails.submitLabel}
            </button>
          </div>
        </div>

        {currentForm.isSubmitted ? (
          <div className="inquiry-ready mt-6 space-y-5 rounded-[1.9rem] border border-border/70 bg-background/96 p-4 shadow-paper">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">
                {modeDetails.readyTitle}
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground/90">{modeDetails.readyBody}</p>
              {mode === "reservation" && latestSavedReservation ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  <SummaryChip>{formatReservationDate(latestSavedReservation.date)}</SummaryChip>
                  <SummaryChip>
                    {getReservationServiceWindow(latestSavedReservation.serviceWindow)?.label}
                  </SummaryChip>
                  <SummaryChip>{formatGuestLabel(latestSavedReservation.guests)}</SummaryChip>
                </div>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className={cn(
                  ctaLinkVariants({ variant: "primary", size: "sm" }),
                  "min-w-[15rem] justify-center gap-2"
                )}
              >
                <Mail className="h-4 w-4" />
                {modeDetails.emailLabel}
              </a>
              <a
                href="tel:+27210000000"
                className={cn(
                  ctaLinkVariants({ variant: "secondary", size: "sm" }),
                  "min-w-[15rem] justify-center gap-2"
                )}
              >
                <Phone className="h-4 w-4" />
                Call the restaurant
              </a>
            </div>
          </div>
        ) : null}

        {mode === "reservation" ? (
          <div className="mt-6 rounded-[1.9rem] border border-border/70 bg-background/96 p-4 shadow-paper">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">
                  Saved reservations on this device
                </p>
                <p className="mt-2 max-w-xl text-sm leading-7 text-foreground/85">
                  Reservations stay in this browser only. They can be reviewed, removed, and
                  emailed from here.
                </p>
              </div>
              <span className="reservation-count-chip">
                {savedReservations.length} saved
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {!hasLoadedReservations ? (
                <article className="rounded-[1.6rem] border border-border/60 bg-card/92 px-4 py-4">
                  <p className="text-sm leading-7 text-foreground/82">
                    Loading saved reservations from this device.
                  </p>
                </article>
              ) : savedReservations.length === 0 ? (
                <article className="rounded-[1.6rem] border border-border/60 bg-card/92 px-4 py-4">
                  <p className="text-sm leading-7 text-foreground/82">
                    No reservations have been saved on this device yet.
                  </p>
                </article>
              ) : (
                savedReservations.map((reservation) => (
                  <article
                    key={reservation.id}
                    className="rounded-[1.6rem] border border-border/60 bg-card/92 px-4 py-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <SummaryChip>{formatReservationDate(reservation.date)}</SummaryChip>
                          <SummaryChip>
                            {getReservationServiceWindow(reservation.serviceWindow)?.label}
                          </SummaryChip>
                          <SummaryChip>{formatGuestLabel(reservation.guests)}</SummaryChip>
                        </div>
                        <div className="space-y-1">
                          <p className="font-display text-2xl leading-none text-ink">
                            {reservation.name}
                          </p>
                          <p className="text-sm leading-7 text-foreground/85">{reservation.email}</p>
                        </div>
                        <p className="text-sm leading-7 text-foreground/82">
                          {reservation.notes || "No extra notes yet."}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveReservation(reservation.id)}
                        className="reservation-remove-button"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        ) : null}
      </div>
    </form>
  )
}

function ModeButton({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "contact-mode-button",
        active && "contact-mode-button-active"
      )}
    >
      {label}
    </button>
  )
}

function SummaryChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="reservation-summary-chip">
      {children}
    </span>
  )
}

function formatReservationDate(date: string) {
  const [year, month, day] = date.split("-").map(Number)
  const parsedDate = new Date(year, month - 1, day, 12)

  return parsedDate.toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function formatGuestLabel(guests: number) {
  return `${guests} ${guests === 1 ? "guest" : "guests"}`
}

function formatWeekdayLabel(weekday: string) {
  return weekday.charAt(0).toUpperCase() + weekday.slice(1)
}
