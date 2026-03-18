export type MenuCategory = {
  name: string
  description: string
  note: string
  items: readonly {
    name: string
    description: string
  }[]
}

export const menuIntro = {
  eyebrow: "Menu",
  title: "A menu shaped by coast, pantry, and the market run.",
  body:
    "The Salt & Fynbos menu is organised around how people actually want to eat here: a few bright plates to start, something generous in the middle, good things from the garden, and a sweet finish worth staying for.",
} as const

export const menuCategories = [
  {
    name: "Harvest plates",
    description:
      "First bites for sharing, built around preserved citrus, local vegetables, and pantry staples.",
    note: "Best ordered for the middle of the table.",
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
    name: "Line-fish and coastal mains",
    description:
      "The anchor section of the menu: relaxed mains that keep one foot near the coast.",
    note: "Built for lunch, but still strong enough for supper.",
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
    name: "Garden sides",
    description:
      "Vegetables and grains are treated like part of the main event, not filler on the side.",
    note: "Order two or three and let the table build itself.",
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
    name: "Bakery and pantry sweets",
    description:
      "Comforting desserts with a country kitchen feel and enough restraint to end the meal cleanly.",
    note: "Best with coffee or a last glass of something local.",
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
] as const satisfies readonly MenuCategory[]

export const menuCta = {
  title: "Planning a long lunch or group table?",
  body:
    "Use the contact page to enquire about larger bookings, private suppers, or a slower lunch service that spills into the afternoon.",
  href: "/contact",
  label: "Plan your table",
} as const
