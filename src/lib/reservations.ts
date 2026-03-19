import {
  reservationServiceWindows,
  type ReservationServiceWindow,
  type ReservationWeekday,
} from "@/content/contact"
import { siteConfig } from "@/content/site"

export type ReservationRecord = {
  createdAt: string
  date: string
  email: string
  guests: number
  id: string
  name: string
  notes: string
  serviceWindow: ReservationServiceWindow
}

export const RESERVATION_STORAGE_KEY = "salt-and-fynbos-reservations:v1"

type ReservationWeekdayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

const reservationWeekdayByIndex = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
} satisfies Record<ReservationWeekdayIndex, ReservationWeekday>

const reservationServiceWindowMap = new Map(
  reservationServiceWindows.map((serviceWindow) => [serviceWindow.id, serviceWindow])
)

const validReservationServiceWindows = new Set<ReservationServiceWindow>(
  reservationServiceWindows.map((serviceWindow) => serviceWindow.id)
)

export function getReservationServiceWindow(
  serviceWindow: ReservationServiceWindow
) {
  return reservationServiceWindowMap.get(serviceWindow) ?? null
}

export function getReservationWeekday(date: string) {
  const parsedDate = parseReservationDate(date)

  if (!parsedDate) {
    return null
  }

  return reservationWeekdayByIndex[parsedDate.getDay() as ReservationWeekdayIndex]
}

export function serviceWindowSupportsWeekday(
  allowedWeekdays: readonly ReservationWeekday[],
  weekday: ReservationWeekday
) {
  return allowedWeekdays.includes(weekday)
}

export function isReservationDateBookable(date: string) {
  const weekday = getReservationWeekday(date)

  return (
    weekday !== null &&
    reservationServiceWindows.some((serviceWindow) =>
      serviceWindowSupportsWeekday(serviceWindow.allowedWeekdays, weekday)
    )
  )
}

export function doesReservationServiceWindowMatchDate(
  serviceWindow: ReservationServiceWindow,
  date: string
) {
  const weekday = getReservationWeekday(date)
  const serviceWindowConfig = getReservationServiceWindow(serviceWindow)

  return (
    weekday !== null &&
    serviceWindowConfig !== null &&
    serviceWindowSupportsWeekday(serviceWindowConfig.allowedWeekdays, weekday)
  )
}

export function sortReservations(reservations: readonly ReservationRecord[]) {
  const today = getTodayReservationDate()

  return [...reservations].sort((left, right) => {
    const leftIsUpcoming = left.date >= today
    const rightIsUpcoming = right.date >= today

    if (leftIsUpcoming !== rightIsUpcoming) {
      return leftIsUpcoming ? -1 : 1
    }

    if (left.date !== right.date) {
      return left.date.localeCompare(right.date)
    }

    return left.createdAt.localeCompare(right.createdAt)
  })
}

export function loadReservations() {
  if (typeof window === "undefined") {
    return []
  }

  try {
    const storedReservations = window.localStorage.getItem(RESERVATION_STORAGE_KEY)

    if (!storedReservations) {
      return []
    }

    const parsedReservations = JSON.parse(storedReservations)

    if (!Array.isArray(parsedReservations)) {
      return []
    }

    const validReservations = parsedReservations.flatMap((value) => {
      const reservation = parseReservationRecord(value)

      return reservation ? [reservation] : []
    })

    return sortReservations(validReservations)
  } catch {
    return []
  }
}

export function saveReservations(reservations: readonly ReservationRecord[]) {
  if (typeof window === "undefined") {
    return false
  }

  try {
    window.localStorage.setItem(
      RESERVATION_STORAGE_KEY,
      JSON.stringify(sortReservations(reservations))
    )

    return true
  } catch {
    return false
  }
}

export function saveReservation(reservation: ReservationRecord) {
  const nextReservations = sortReservations([
    ...loadReservations().filter((currentReservation) => currentReservation.id !== reservation.id),
    reservation,
  ])

  return saveReservations(nextReservations) ? nextReservations : null
}

export function removeReservation(id: string) {
  const currentReservations = loadReservations()
  const nextReservations = currentReservations.filter(
    (reservation) => reservation.id !== id
  )

  if (nextReservations.length === currentReservations.length) {
    return currentReservations
  }

  return saveReservations(nextReservations) ? nextReservations : null
}

export function buildReservationMailtoHref(reservation: ReservationRecord) {
  const serviceWindow =
    getReservationServiceWindow(reservation.serviceWindow)?.label ?? reservation.serviceWindow
  const timeLabel =
    getReservationServiceWindow(reservation.serviceWindow)?.timeLabel ?? "Service timing to confirm"
  const subject = `Salt & Fynbos reservation for ${reservation.date}`
  const body = [
    `Name: ${reservation.name}`,
    `Email: ${reservation.email}`,
    `Date: ${reservation.date}`,
    `Service window: ${serviceWindow}`,
    `Time rhythm: ${timeLabel}`,
    `Guests: ${reservation.guests}`,
    "",
    "Notes:",
    reservation.notes || "No extra notes yet.",
  ].join("\n")

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function isReservationServiceWindow(value: string): value is ReservationServiceWindow {
  return validReservationServiceWindows.has(value as ReservationServiceWindow)
}

function parseReservationDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null
  }

  const [year, month, day] = value.split("-").map(Number)
  const parsedDate = new Date(year, month - 1, day, 12)

  if (
    parsedDate.getFullYear() !== year ||
    parsedDate.getMonth() !== month - 1 ||
    parsedDate.getDate() !== day
  ) {
    return null
  }

  return parsedDate
}

function parseReservationRecord(value: unknown): ReservationRecord | null {
  if (!value || typeof value !== "object") {
    return null
  }

  const reservation = value as Partial<Record<keyof ReservationRecord, unknown>>

  if (
    typeof reservation.id !== "string" ||
    typeof reservation.name !== "string" ||
    typeof reservation.email !== "string" ||
    typeof reservation.date !== "string" ||
    typeof reservation.createdAt !== "string" ||
    typeof reservation.notes !== "string" ||
    typeof reservation.guests !== "number" ||
    !Number.isInteger(reservation.guests) ||
    reservation.guests < 1 ||
    typeof reservation.serviceWindow !== "string" ||
    !isReservationServiceWindow(reservation.serviceWindow) ||
    !parseReservationDate(reservation.date) ||
    Number.isNaN(Date.parse(reservation.createdAt))
  ) {
    return null
  }

  return {
    id: reservation.id,
    name: reservation.name.trim(),
    email: reservation.email.trim(),
    date: reservation.date,
    serviceWindow: reservation.serviceWindow,
    guests: reservation.guests,
    notes: reservation.notes.trim(),
    createdAt: reservation.createdAt,
  }
}

function getTodayReservationDate() {
  const now = new Date()
  const year = now.getFullYear()
  const month = `${now.getMonth() + 1}`.padStart(2, "0")
  const day = `${now.getDate()}`.padStart(2, "0")

  return `${year}-${month}-${day}`
}
