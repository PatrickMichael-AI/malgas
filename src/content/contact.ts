import { businessHours, contactChannels, siteConfig } from "@/content/site"

export type ContactAction = {
  href: string
  label: string
  variant: "primary" | "secondary" | "ink" | "sun"
}

export type ContactCard = {
  body: string
  href?: string
  title: string
}

export type ReservationWeekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"

export type ReservationServiceWindow = "late-lunch" | "sunset-supper" | "slow-coastal-lunch"

export type ReservationServiceWindowConfig = {
  allowedWeekdays: readonly ReservationWeekday[]
  id: ReservationServiceWindow
  label: string
  timeLabel: string
}

export const reservationServiceWindows = [
  {
    id: "late-lunch",
    label: "Late lunch",
    timeLabel: "12:00 - late lunch",
    allowedWeekdays: ["thursday", "friday"],
  },
  {
    id: "sunset-supper",
    label: "Sunset supper",
    timeLabel: "12:00 - sunset supper",
    allowedWeekdays: ["saturday"],
  },
  {
    id: "slow-coastal-lunch",
    label: "Slow coastal lunch",
    timeLabel: "12:00 - slow coastal lunch",
    allowedWeekdays: ["sunday"],
  },
] satisfies readonly ReservationServiceWindowConfig[]

export const contactHero = {
  eyebrow: "Contact",
  title: "Choose the right contact path, then we will shape the table or the reply around it.",
  body:
    "Use reservation mode to save a table request on this device before emailing it through, or use general enquiry for private dining questions, produce-led menu notes, and plans that still need shaping. The restaurant still replies email-first so timing, menu direction, and hosting details can be handled properly.",
  actions: [
    {
      href: `mailto:${siteConfig.email}`,
      label: "Email the team",
      variant: "sun",
    },
    {
      href: "tel:+27210000000",
      label: "Call the restaurant",
      variant: "secondary",
    },
  ] satisfies readonly ContactAction[],
  cards: [
    {
      title: "Where",
      body: siteConfig.location,
    },
    {
      title: "Email",
      body: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      title: "Phone",
      body: siteConfig.phone,
      href: "tel:+27210000000",
    },
  ] satisfies readonly ContactCard[],
  images: {
    primary: {
      src: "/images/contact-form-anchor.webp",
      alt: "Welcoming arrival moment at Salt & Fynbos",
    },
    secondary: {
      src: "/images/home-hero-drink.webp",
      alt: "Drink detail from a long lunch table at Salt & Fynbos",
    },
  },
  callout: {
    eyebrow: "Arrival mood",
    body: "A slower welcome, an easier table, and time to settle before the first pour.",
    tone: "sea",
  },
  hours: businessHours,
} as const

export const contactPlanningSection = {
  eyebrow: "Two ways in",
  title: "Reservations and message-first enquiries now start in the same place.",
  body:
    "Save a reservation when the date and table rhythm are clear, or send a general enquiry when you need guidance before locking anything in. Either way, a little context helps the team answer properly the first time.",
  reasons: [
    "Save a lunch or supper reservation on this device before emailing it through.",
    "Ask about a private gathering or celebration before fixing the table details.",
    "Check seasonal menu or produce-led changes through a general enquiry.",
    "Coordinate a group visit to Malgas with either a saved reservation or a message-first enquiry.",
  ],
  notes: [
    {
      title: "Reservation mode",
      body: "Best when the date, service window, and guest count are already clear enough to save locally.",
    },
    {
      title: "General enquiry",
      body: "Best when you need guidance on private dining, produce-led pacing, or a plan that is still taking shape.",
    },
    {
      title: "What still helps",
      body: "Preferred timing, guest count, and anything the kitchen or front of house should know early.",
    },
  ],
  channels: contactChannels,
} as const

export const contactCta = {
  eyebrow: "Before you send",
  title: "If the table or the enquiry already feels right, pair it with a quick look at the menu or the house story.",
  body:
    "That gives the team better context for saved reservations, private tables, slower lunches, and guests who want the full Salt & Fynbos rhythm rather than a quick stop.",
  actions: [
    { href: "/menu", label: "Browse the menu", variant: "sun" },
    { href: "/about", label: "Read the story", variant: "secondary" },
  ] satisfies readonly ContactAction[],
} as const
