export type MenuAction = {
  href: string
  label: string
  variant: "primary" | "secondary" | "ink" | "sun"
}

export type MenuChapterTone = "paper" | "sea" | "sun" | "apricot"

export type MenuItem = {
  description: string
  name: string
}

export type MenuChapter = {
  chapter: "Start" | "Main" | "Garden" | "Sweet"
  description: string
  items: readonly MenuItem[]
  mood: string
  moodTitle: string
  note: string
  noteTitle: string
  summary: string
  title: string
  tone: MenuChapterTone
}

export const menuIntro = {
  eyebrow: "Menu",
  title: "A menu paced around the way a long South Coast lunch actually unfolds.",
  body:
    "At Salt & Fynbos, the meal moves in sequence rather than in stiff restaurant categories: something bright to start, a generous middle, good things from the garden, and a sweet finish worth stretching the afternoon for.",
  badge: "Menu for long lunches",
  actions: [
    { href: "/contact", label: "Plan your table", variant: "primary" },
    { href: "/about", label: "Read the story", variant: "secondary" },
  ] satisfies readonly MenuAction[],
  images: {
    primary: {
      src: "/images/menu-intro-sweets.jpg",
      alt: "Bakery and pantry sweets at Salt & Fynbos",
    },
    secondary: {
      src: "/images/menu-intro-main-detail.jpg",
      alt: "Coastal lunch detail at Salt & Fynbos",
    },
  },
  callout: {
    eyebrow: "Dining rhythm",
    body: "Built to be ordered in waves, not in a rush.",
    tone: "sea",
  },
} as const

export const menuSequence = {
  eyebrow: "Four chapters",
  title: "Start, main, garden, and sweet.",
  body:
    "The page follows the same rhythm we want at the table: a clear beginning, a confident center, vegetables that still matter, and dessert that earns the extra coffee.",
} as const

export const menuChapters = [
  {
    chapter: "Start",
    title: "Open with bright, salty plates for the middle of the table.",
    description:
      "The first round should wake everything up: preserved citrus, soft dairy, pantry pickles, and small plates that make the table feel shared immediately.",
    summary: "A bright opening built for passing plates and first pours.",
    moodTitle: "At the table",
    mood: "Briny, citrus-led, and easy enough to order before everyone has fully sat down.",
    noteTitle: "Best ordered",
    note: "Two or three plates to share, then pause before moving deeper into the meal.",
    tone: "paper",
    items: [
      {
        name: "Charred courgettes with whipped chevin",
        description: "Mint, lemon oil, toasted seeds, and warm farm bread.",
      },
      {
        name: "Smoked snoek croquettes",
        description: "Served with herb mayo and pickled cucumber.",
      },
    ],
  },
  {
    chapter: "Main",
    title: "Settle into the generous center of the meal.",
    description:
      "This is the part that holds the room a little longer: line fish, slower braises, market vegetables, and mains that feel substantial without losing the lightness of the coast.",
    summary: "The confident middle, strong enough for supper but still built for daylight.",
    moodTitle: "House pace",
    mood: "Unhurried mains that invite another bottle and make lunch feel like the whole point of the day.",
    noteTitle: "What anchors it",
    note: "Line fish, softer meats, and warm greens that keep one foot near the estuary.",
    tone: "sea",
    items: [
      {
        name: "Roasted line fish with sea herb butter",
        description: "Served with crushed potatoes and warm greens.",
      },
      {
        name: "Braised lamb shoulder for two",
        description: "Soft polenta, pan juices, and market vegetables.",
      },
    ],
  },
  {
    chapter: "Garden",
    title: "Keep the produce close to the center of the table.",
    description:
      "The garden chapter is not filler. Beans, leaves, grains, and warm vegetables are treated like part of the main event, bringing lift and colour back into the meal.",
    summary: "Vegetables and grains that keep the whole table brighter.",
    moodTitle: "Built for sharing",
    mood: "Order a few at once and let the plate shapes, herbs, and textures do the balancing work.",
    noteTitle: "Why it matters",
    note: "The meal stays lighter, longer, and more distinctly South Coast when the produce still leads.",
    tone: "sun",
    items: [
      {
        name: "Butter beans with roasted garlic",
        description: "Olive oil, lemon, and crispy pangrattato.",
      },
      {
        name: "Baby leaves with orchard vinaigrette",
        description: "Soft herbs, radish, and shaved pecorino.",
      },
    ],
  },
  {
    chapter: "Sweet",
    title: "Finish with pantry sweets that feel country rather than formal.",
    description:
      "Dessert should land gently: warm fruit, cultured cream, soft puddings, and enough restraint that coffee, dessert wine, or one last conversation still feels easy.",
    summary: "A softer finish, more country kitchen than dessert trolley.",
    moodTitle: "Final stretch",
    mood: "The point where the table slows down again and nobody is in a hurry to stand up.",
    noteTitle: "Best with",
    note: "Coffee, dessert wine, and the willingness to let the afternoon run slightly over plan.",
    tone: "apricot",
    items: [
      {
        name: "Pear and almond tart",
        description: "Served warm with cultured cream.",
      },
      {
        name: "Buttermilk pudding with naartjie syrup",
        description: "Soft, bright, and gently citrus-led.",
      },
    ],
  },
] as const satisfies readonly MenuChapter[]

export const menuCta = {
  eyebrow: "Group booking",
  title: "Planning a long lunch, private table, or slower gathering in Malgas?",
  body:
    "Use the contact page for larger bookings, private suppers, or a table that should move through the full menu rhythm without being rushed.",
  href: "/contact",
  label: "Plan your table",
} as const
