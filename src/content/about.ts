export type AboutAction = {
  href: string
  label: string
  variant: "primary" | "secondary" | "ink" | "sun"
}

export type AboutStoryTone = "paper" | "sea" | "sun"

export type AboutStoryChapter = {
  body: string
  eyebrow: string
  notes: readonly {
    label: string
    value: string
  }[]
  title: string
  tone: AboutStoryTone
}

export type AboutValueCard = {
  body: string
  title: string
}

export type AboutGalleryItem = {
  alt: string
  caption: string
  src: string
  title: string
}

export type Milestone = {
  label: string
  value: string
}

export const aboutIntro = {
  eyebrow: "About",
  title: "A restaurant story anchored in place before anything else.",
  body:
    "Salt & Fynbos begins with Malgas, the estuary light, and the slower southern coast rhythm around it. The food, service, and house mood all follow from that setting rather than from borrowed city-restaurant signals.",
  badge: "Place-driven hospitality",
  actions: [
    { href: "/contact", label: "Enquire about your visit", variant: "primary" },
    { href: "/menu", label: "Browse the menu", variant: "secondary" },
  ] satisfies readonly AboutAction[],
  images: {
    primary: {
      src: "/images/about-intro-room.webp",
      alt: "Bright interior of Salt & Fynbos in Malgas",
    },
    secondary: {
      src: "/images/about-intro-portrait.webp",
      alt: "Portrait detail of the Salt & Fynbos founder or host",
    },
  },
  callout: {
    eyebrow: "Brand world",
    body: "Estuary calm, pantry craft, and a room that invites people to stay.",
    tone: "apricot",
  },
} as const

export const aboutStoryChapters = [
  {
    eyebrow: "Place first",
    title: "Malgas sets the pace long before the first plate reaches the table.",
    body:
      "The restaurant is shaped by the southern coast's softer timing: river air, weathered rooms, drive-worthy lunches, and a hospitality style that feels settled instead of performative. Guests should feel the place in the light, the spacing, and the tone before they start reading the menu closely.",
    tone: "sea",
    notes: [
      {
        label: "Setting",
        value: "A slower South Coast stop where the room feels sun-washed rather than polished.",
      },
      {
        label: "House mood",
        value: "Calm, generous, and local without leaning on coastal cliche.",
      },
    ],
  },
  {
    eyebrow: "At the table",
    title: "Meals are built for gathering, sharing, and letting the afternoon breathe.",
    body:
      "Salt & Fynbos is not arranged around quick table turns or rigid sequencing. Lunches can open gently, mains can arrive for the middle of the table, and the whole experience works best when guests are encouraged to order in waves rather than defend individual plates.",
    tone: "paper",
    notes: [
      {
        label: "Dining rhythm",
        value: "From first pour to dessert, the meal is meant to unfold rather than be rushed.",
      },
      {
        label: "Why it works",
        value: "Shared plates, local wine, and warmer pacing make the room feel immediately hospitable.",
      },
    ],
  },
] as const satisfies readonly AboutStoryChapter[]

export const aboutGallery = {
  eyebrow: "House gallery",
  title: "A closer look at the room, the pantry, and the long-table rhythm.",
  body:
    "These images hold the details that define Salt & Fynbos: estuary light, tactile ceramics, produce-led plates, local pours, and the slower hospitality cues that make the house feel lived in.",
  items: [
    {
      src: "/images/about-intro-room.webp",
      alt: "Sun-washed dining room at Salt & Fynbos",
      title: "Sun-washed room",
      caption: "The dining room stays bright, calm, and open to the estuary light.",
    },
    {
      src: "/images/about-intro-portrait.webp",
      alt: "Host portrait detail inside Salt & Fynbos",
      title: "House host",
      caption: "The story stays personal, grounded, and close to the room.",
    },
    {
      src: "/images/about-pantry-plate.webp",
      alt: "Produce-led pantry plate at Salt & Fynbos",
      title: "Pantry plate",
      caption: "Produce, herbs, and ceramics carry the pantry-led identity at close range.",
    },
    {
      src: "/images/about-pantry-pour.webp",
      alt: "Wine being poured during a long lunch at Salt & Fynbos",
      title: "Mid-pour",
      caption: "Local pours and slower lunches are part of the house rhythm.",
    },
    {
      src: "/images/home-story-table-detail.webp",
      alt: "Shared table detail with passed dishes at Salt & Fynbos",
      title: "Table detail",
      caption: "Shared plates, linen textures, and passed dishes keep the table communal.",
    },
    {
      src: "/images/contact-form-anchor.webp",
      alt: "Welcoming arrival moment at Salt & Fynbos",
      title: "Arrival mood",
      caption: "The welcome should feel settled before the first plate reaches the table.",
    },
  ] satisfies readonly AboutGalleryItem[],
} as const

export const aboutPantryBand = {
  eyebrow: "Pantry and values",
  title: "The pantry gives the restaurant its memory and the values keep it honest.",
  body:
    "Fynbos herbs, orchard fruit, preserved citrus, bakes, local wine, and market produce are not background details. They are the ingredients that make the restaurant feel rooted, and they shape how the house should speak, plate, and host.",
  tone: "sun",
  images: {
    primary: {
      src: "/images/about-pantry-plate.webp",
      alt: "Produce-led plate at Salt & Fynbos",
    },
    secondary: {
      src: "/images/about-pantry-pour.webp",
      alt: "Wine or drink poured during a long lunch at Salt & Fynbos",
    },
  },
  callout: {
    eyebrow: "House pantry",
    body: "Preserves, orchard fruit, and local pours that linger in memory.",
    tone: "sea",
  },
  cards: [
    {
      title: "Seasonal cooking",
      body: "Ingredient-led choices matter more than fixed luxury cues or heavy-handed menu theatre.",
    },
    {
      title: "Country warmth",
      body: "Hospitality should feel generous and relaxed, never stiff, over-scripted, or too polished.",
    },
    {
      title: "Long-table ease",
      body: "The room is designed for slower lunches, shared ordering, and conversations that run over time.",
    },
  ] satisfies readonly AboutValueCard[],
} as const

export const milestones = [
  { label: "Brand world", value: "Western Cape southern coast country" },
  { label: "Dining rhythm", value: "Slow lunch to sunset supper" },
  { label: "House style", value: "Sea air, pantry craft, local wine" },
] as const satisfies readonly Milestone[]

export const aboutCta = {
  eyebrow: "Next step",
  title: "If the place sounds right, the next move is simply to plan the visit.",
  body:
    "Read the menu if you want the detail, or move straight into an enquiry if you are already planning a long lunch, private table, or slower South Coast stop.",
  actions: [
    { href: "/contact", label: "Enquire about your visit", variant: "sun" },
    { href: "/menu", label: "Read the menu", variant: "secondary" },
  ] satisfies readonly AboutAction[],
} as const
