export type StorySection = {
  title: string
  body: string
}

export type Milestone = {
  label: string
  value: string
}

export const aboutIntro = {
  eyebrow: "About",
  title: "A restaurant story anchored in place, not in noise.",
  body:
    "Salt & Fynbos is framed around what the Western Cape southern coast does best: sea air, fynbos, orchard produce, pantry craft, and a room that feels generous without becoming formal.",
} as const

export const storySections = [
  {
    title: "The setting",
    body:
      "The brand is rooted in Malgas and the slower tempo of the southern coast. It should feel sun-washed, relaxed, and grounded in local produce rather than polished city dining.",
  },
  {
    title: "The table",
    body:
      "Meals are imagined as long lunches and sunset suppers with dishes made for passing, sharing, and ordering in waves rather than through a rigid course structure.",
  },
  {
    title: "The pantry",
    body:
      "Fynbos herbs, orchard fruit, pickles, preserves, bakes, and local wine give the restaurant its character as much as any single signature dish.",
  },
] as const satisfies readonly StorySection[]

export const values = [
  "Seasonal cooking over fixed luxury cues",
  "Country warmth over heavy formality",
  "Shared tables, slower service, and generous pacing",
] as const

export const milestones = [
  { label: "Brand world", value: "Western Cape southern coast country" },
  { label: "Dining rhythm", value: "Slow lunch to sunset supper" },
  { label: "House style", value: "Sea air, pantry craft, local wine" },
] as const satisfies readonly Milestone[]

export const aboutCta = {
  href: "/contact",
  label: "Enquire about your visit",
} as const
