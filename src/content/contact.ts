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

export const contactHero = {
  eyebrow: "Contact",
  title: "Start with the enquiry and we will shape the right table around it.",
  body:
    "Bookings stay email-first so the team can reply with the right pace, menu direction, and timing. Share the essentials in the form, then use email or phone if the booking needs quicker coordination.",
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
      src: "/images/contact-form-anchor.jpg",
      alt: "Welcoming arrival moment at Salt & Fynbos",
    },
    secondary: {
      src: "/images/home-hero-drink.jpg",
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
  eyebrow: "What to send",
  title: "A few specifics help the team answer properly the first time.",
  body:
    "Preferred date, guest count, and the kind of table you are planning make the booking easier to pace. That is especially useful for private lunches, celebrations, and longer South Coast gatherings.",
  reasons: [
    "Reserve a standard lunch or supper table.",
    "Ask about a private gathering or celebration.",
    "Check seasonal menu or produce-led changes.",
    "Coordinate a group visit to Malgas.",
  ],
  notes: [
    {
      title: "Best for",
      body: "Weekend lunches, sunset suppers, and slower long-table bookings.",
    },
    {
      title: "Lead time",
      body: "Give us extra notice for groups, shared menus, or private dining requests.",
    },
    {
      title: "What helps",
      body: "Preferred date, guest count, and anything the kitchen should know early.",
    },
  ],
  channels: contactChannels,
} as const

export const contactCta = {
  eyebrow: "Before you send",
  title: "If the table already feels right, pair the enquiry with a quick look at the menu or the house story.",
  body:
    "That gives the team better context for private tables, slower lunches, and guests who want the full Salt & Fynbos rhythm rather than a quick stop.",
  actions: [
    { href: "/menu", label: "Browse the menu", variant: "sun" },
    { href: "/about", label: "Read the story", variant: "secondary" },
  ] satisfies readonly ContactAction[],
} as const
