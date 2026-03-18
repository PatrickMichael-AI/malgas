export type HeroCta = {
  href: string
  label: string
  variant: "primary" | "secondary"
}

export type HomeFeature = {
  title: string
  description: string
}

export type FeaturedCategory = {
  title: string
  description: string
  callout: string
}

export type Testimonial = {
  quote: string
  name: string
  context: string
}

export const homeHero = {
  eyebrow: "Western Cape southern coast country kitchen",
  title: "Salt, fynbos, long lunches, and a calmer kind of coastal dining.",
  body:
    "Salt & Fynbos is built around the slower rhythm of the southern coast: line fish, orchard fruit, pantry bakes, local wine, and tables that invite you to stay a little longer.",
  ctas: [
    { href: "/menu", label: "View the menu", variant: "primary" },
    { href: "/contact", label: "Book a table", variant: "secondary" },
  ] satisfies readonly HeroCta[],
} as const

export const homeHighlights = [
  {
    title: "Sea air palette",
    description:
      "A coastal-country story shaped by sun-washed colour, produce-driven language, and a lighter hospitality tone.",
  },
  {
    title: "Seasonal plates",
    description:
      "The menu is structured around harvest plates, line-fish mains, garden sides, and bakery sweets rather than heavy steakhouse categories.",
  },
  {
    title: "Long-table hospitality",
    description:
      "Every page now points toward the same core promise: generous lunches, relaxed suppers, and a room made for gathering.",
  },
] as const satisfies readonly HomeFeature[]

export const featuredCategories = [
  {
    title: "Harvest plates",
    description:
      "Small plates for passing around the table, built from orchard fruit, local vegetables, and pantry pickles.",
    callout: "Share first, settle in, then order the next round.",
  },
  {
    title: "Coastal mains",
    description:
      "Line fish, slow-cooked meats, and wood-fired vegetables anchored by bright sauces and market produce.",
    callout: "A slower menu for lunch that can stretch into sunset.",
  },
  {
    title: "Bakery and pantry sweets",
    description:
      "Fruit tarts, warm puddings, and cakes that feel more country kitchen than formal dessert trolley.",
    callout: "Finish with coffee, dessert wine, and one more conversation.",
  },
] as const satisfies readonly FeaturedCategory[]

export const homeMoments = [
  "Start with something briny, bright, and easy to share.",
  "Move into the coast-and-country mains that define the table.",
  "Close with pantry sweets, local pours, and time to linger.",
] as const

export const testimonials = [
  {
    quote:
      "It feels like a lunch by the estuary that somehow turned into the best dinner of the week.",
    name: "Lara M.",
    context: "Weekend regular",
  },
  {
    quote:
      "The room is calm, the plates are generous, and the wine list makes you want to stay for sunset.",
    name: "Jaco P.",
    context: "Autumn harvest supper",
  },
  {
    quote:
      "Exactly the kind of coastal-country restaurant you hope to discover and immediately want to return to.",
    name: "Danielle R.",
    context: "First-time guest from Cape Town",
  },
] as const satisfies readonly Testimonial[]
