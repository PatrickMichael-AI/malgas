export const contactIntro = {
  eyebrow: "Contact",
  title: "Reach out for lunch tables, private suppers, or a slower coastal weekend.",
  body:
    "Tell us when you want to come, how many guests you are gathering, and whether the table is casual, celebratory, or produce-curious. We will point you toward the right pace of lunch or supper.",
} as const

export const enquiryReasons = [
  "Reserve a standard lunch or supper table",
  "Ask about a private gathering or celebration",
  "Check seasonal menu or produce-led changes",
  "Coordinate a group visit to Malgas",
] as const

export const reservationNotes = [
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
] as const

export const contactCtas = [
  { href: "/menu", label: "Browse menu direction" },
  { href: "mailto:hello@saltandfynbos.co.za", label: "Email the team" },
] as const
