import { businessHours, siteConfig } from "@/content/site"

export type HomeCta = {
  href: string
  label: string
  variant: "primary" | "secondary" | "ink" | "sun"
}

export type HomeIcon = "map-pin" | "clock-3" | "wine"

export type HomeHeroDetail = {
  title: string
  value: string
  icon: HomeIcon
  tone: "paper" | "sun" | "sea"
}

export type HomeCard = {
  title: string
  description: string
}

export type HomeMenuCard = {
  chapter: string
  title: string
  description: string
  note: string
  tone: "paper" | "sea" | "sun" | "apricot"
}

export type HomeImage = {
  src: string
  alt: string
}

export type Testimonial = {
  quote: string
  name: string
  context: string
  rating: 4 | 5
}

export const homeHero = {
  eyebrow: "Western Cape southern coast country kitchen",
  title: "Salt, fynbos, long lunches, and a calmer kind of coastal dining.",
  body:
    "Salt & Fynbos is built around the slower rhythm of the southern coast: line fish, orchard fruit, pantry bakes, local wine, and tables that invite you to stay a little longer.",
  chips: [siteConfig.location, "Thursday to Sunday from midday"],
  ctas: [
    { href: "/contact", label: "Book a table", variant: "primary" },
    { href: "/menu", label: "View the menu", variant: "secondary" },
  ] satisfies readonly HomeCta[],
  details: [
    {
      title: "Location",
      value: siteConfig.location,
      icon: "map-pin",
      tone: "paper",
    },
    {
      title: "Opening rhythm",
      value: "Thursday to Sunday, from midday",
      icon: "clock-3",
      tone: "sun",
    },
    {
      title: "At the table",
      value: "Local wine, generous plates, and a slower pace",
      icon: "wine",
      tone: "sea",
    },
  ] satisfies readonly HomeHeroDetail[],
  images: {
    primary: {
      src: "/images/home-hero-dining-room.webp",
      alt: "Sun-washed Salt & Fynbos dining room in Malgas",
    },
    secondary: {
      src: "/images/home-hero-dessert.webp",
      alt: "Country-kitchen dessert served at Salt & Fynbos",
    },
    tertiary: {
      src: "/images/home-hero-drink.webp",
      alt: "Golden drink on a long lunch table at Salt & Fynbos",
    },
    spotlight: {
      eyebrow: "House feeling",
      body: "Sun-washed rooms, estuary light, and the kind of lunch that settles in for hours.",
    },
  },
} as const

export const homePlaceChapter = {
  eyebrow: "Sense of place",
  title: "South coast ease with the warmth of a country kitchen.",
  body:
    "Salt & Fynbos is shaped around Malgas rather than a city dining script: brighter rooms, easier pacing, produce-led plates, and a table that feels generous from the first pour.",
  chips: ["Estuary air and orchard produce", "Built for lunches that stretch"],
  cta: {
    href: "/about",
    label: "Read the house story",
    variant: "secondary",
  } satisfies HomeCta,
  cards: [
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
  ] satisfies readonly HomeCard[],
} as const

export const homeMenuChapter = {
  eyebrow: "Menu rhythm",
  title: "A coastal lunch that moves in four clear waves.",
  body:
    "Start with something bright for the table, settle into the main event, keep the garden close, then finish with pantry sweets that make one last coffee feel like the right decision.",
  cta: {
    href: "/menu",
    label: "Browse the menu",
    variant: "ink",
  } satisfies HomeCta,
  cards: [
    {
      chapter: "Start",
      title: "Harvest plates",
      description:
        "Something bright to wake the table: preserved citrus, local vegetables, pantry pickles, and first bites made for passing.",
      note: "Share first, settle in, then order the next round.",
      tone: "paper",
    },
    {
      chapter: "Main",
      title: "Coastal mains",
      description:
        "Line fish, slower braises, and the generous middle of the meal, built for lunches that lean toward sunset.",
      note: "The part of the menu that anchors the table.",
      tone: "sea",
    },
    {
      chapter: "Garden",
      title: "Garden sides",
      description:
        "Vegetables and grains that stay bright, generous, and close enough to the center of the plate to matter.",
      note: "Order a few and let the table build itself.",
      tone: "sun",
    },
    {
      chapter: "Sweet",
      title: "Bakery and pantry sweets",
      description:
        "Country-kitchen desserts, warm tarts, and a gentle finish that leaves room for coffee and one more conversation.",
      note: "Best taken slowly, with something local in the glass.",
      tone: "apricot",
    },
  ] satisfies readonly HomeMenuCard[],
} as const

export const homeStoryChapter = {
  eyebrow: "House story",
  title: "The room should feel tangible before you ever confirm the booking.",
  body:
    "Guests come for the menu, then remember the light, the pacing, and the easy warmth of a place that never tries too hard to prove itself.",
  cta: {
    href: "/about",
    label: "Meet the house",
    variant: "secondary",
  } satisfies HomeCta,
  images: {
    primary: {
      src: "/images/home-story-portrait.webp",
      alt: "Owner or host portrait inside Salt & Fynbos",
    },
    secondary: {
      src: "/images/home-story-table-detail.webp",
      alt: "Shared table detail during service at Salt & Fynbos",
    },
  } satisfies Record<"primary" | "secondary", HomeImage>,
} as const

export const testimonials = [
  {
    quote:
      "It feels like a lunch by the estuary that somehow turned into the best dinner of the week.",
    name: "Lara M.",
    context: "Weekend regular",
    rating: 5,
  },
  {
    quote:
      "The room is calm, the plates are generous, and the wine list makes you want to stay for sunset.",
    name: "Jaco P.",
    context: "Autumn harvest supper",
    rating: 5,
  },
  {
    quote:
      "Exactly the kind of coastal-country restaurant you hope to discover and immediately want to return to.",
    name: "Danielle R.",
    context: "First-time guest from Cape Town",
    rating: 5,
  },
] as const satisfies readonly Testimonial[]

export const homeVisitChapter = {
  eyebrow: "Visit planning",
  title: "Make the trip for a long lunch, a sunset table, or a slower Sunday in Malgas.",
  body:
    "Reservations stay easy and personal. Reach out with your preferred day, table size, and whether you are planning a quieter lunch or a gathering that should linger.",
  cta: {
    href: "/contact",
    label: "Book a table",
    variant: "sun",
  } satisfies HomeCta,
  location: {
    eyebrow: "Where",
    title: siteConfig.location,
    body: "Tucked into a slower stretch of the south coast, built for a meal worth the drive.",
  },
  hours: businessHours.slice(0, 3),
} as const
