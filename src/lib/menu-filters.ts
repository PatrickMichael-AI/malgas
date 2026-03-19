import {
  menuDietaryTagLabels,
  menuDietaryTagOrder,
  menuPriceBands,
  type MenuChapter,
  type MenuDietaryTag,
  type MenuItem,
  type MenuPriceBand,
} from "@/content/menu"

export type MenuFilterState = {
  chapters: MenuChapter["chapter"][]
  dietary: MenuDietaryTag[]
  price: MenuPriceBand | null
  q: string
}

export type FilteredMenuChapter = Omit<MenuChapter, "items"> & {
  items: MenuItem[]
}

const validChapters = new Set<MenuChapter["chapter"]>(["Start", "Main", "Garden", "Sweet"])
const validDietaryTags = new Set<MenuDietaryTag>(menuDietaryTagOrder)
const validPriceBands = new Set<MenuPriceBand>(menuPriceBands.map((band) => band.id))

export const emptyMenuFilterState: MenuFilterState = {
  q: "",
  chapters: [],
  dietary: [],
  price: null,
}

export function normalizeMenuQuery(query: string) {
  return query.trim().toLowerCase()
}

export function matchesMenuSearch(
  chapter: MenuChapter["chapter"],
  item: MenuItem,
  query: string
) {
  const normalizedQuery = normalizeMenuQuery(query)

  if (!normalizedQuery) {
    return true
  }

  const searchText = [
    chapter,
    item.name,
    item.description,
    ...item.dietary.map((tag) => menuDietaryTagLabels[tag]),
  ]
    .join(" ")
    .toLowerCase()

  return searchText.includes(normalizedQuery)
}

export function matchesMenuChapter(
  chapter: MenuChapter["chapter"],
  selectedChapters: readonly MenuChapter["chapter"][]
) {
  return selectedChapters.length === 0 || selectedChapters.includes(chapter)
}

export function matchesMenuDietary(
  item: MenuItem,
  selectedDietary: readonly MenuDietaryTag[]
) {
  return (
    selectedDietary.length === 0 ||
    selectedDietary.some((tag) => item.dietary.includes(tag))
  )
}

export function matchesMenuPriceBand(item: MenuItem, priceBand: MenuPriceBand | null) {
  if (!priceBand) {
    return true
  }

  if (priceBand === "under-100") {
    return item.price < 100
  }

  if (priceBand === "100-180") {
    return item.price >= 100 && item.price <= 180
  }

  return item.price > 180
}

export function matchesMenuFilters(
  chapter: MenuChapter["chapter"],
  item: MenuItem,
  filters: MenuFilterState
) {
  return (
    matchesMenuChapter(chapter, filters.chapters) &&
    matchesMenuSearch(chapter, item, filters.q) &&
    matchesMenuDietary(item, filters.dietary) &&
    matchesMenuPriceBand(item, filters.price)
  )
}

export function filterMenuChapters(
  chapters: readonly MenuChapter[],
  filters: MenuFilterState
): FilteredMenuChapter[] {
  return chapters.map((chapter) => ({
    ...chapter,
    items: chapter.items.filter((item) => matchesMenuFilters(chapter.chapter, item, filters)),
  }))
}

export function getMenuChapterMatchCounts(
  chapters: readonly MenuChapter[],
  filters: MenuFilterState
): Record<MenuChapter["chapter"], number> {
  const counts = {
    Start: 0,
    Main: 0,
    Garden: 0,
    Sweet: 0,
  } satisfies Record<MenuChapter["chapter"], number>

  for (const chapter of chapters) {
    counts[chapter.chapter] = chapter.items.filter((item) =>
      matchesMenuFilters(chapter.chapter, item, filters)
    ).length
  }

  return counts
}

export function getMenuVisibleDietaryOptions(chapters: readonly MenuChapter[]) {
  const presentTags = new Set<MenuDietaryTag>()

  for (const chapter of chapters) {
    for (const item of chapter.items) {
      for (const tag of item.dietary) {
        presentTags.add(tag)
      }
    }
  }

  return menuDietaryTagOrder.filter((tag) => presentTags.has(tag))
}

export function getMenuResultCount(filteredChapters: readonly FilteredMenuChapter[]) {
  return filteredChapters.reduce((total, chapter) => total + chapter.items.length, 0)
}

export function hasActiveMenuFilters(filters: MenuFilterState) {
  return (
    filters.q.length > 0 ||
    filters.chapters.length > 0 ||
    filters.dietary.length > 0 ||
    filters.price !== null
  )
}

export function parseMenuFilterState(searchParams: URLSearchParams): MenuFilterState {
  const q = searchParams.get("q")?.trim() ?? ""
  const chapters = dedupeValues(searchParams.getAll("chapter")).filter(isMenuChapter)
  const dietary = dedupeValues(searchParams.getAll("diet")).filter(isMenuDietaryTag)
  const priceParam = searchParams.get("price")

  return {
    q,
    chapters,
    dietary,
    price: isMenuPriceBand(priceParam) ? priceParam : null,
  }
}

export function buildMenuFilterSearchParams(filters: MenuFilterState) {
  const searchParams = new URLSearchParams()

  if (filters.q.trim()) {
    searchParams.set("q", filters.q.trim())
  }

  for (const chapter of filters.chapters) {
    searchParams.append("chapter", chapter)
  }

  for (const tag of filters.dietary) {
    searchParams.append("diet", tag)
  }

  if (filters.price) {
    searchParams.set("price", filters.price)
  }

  return searchParams
}

function dedupeValues(values: readonly string[]) {
  return [...new Set(values)]
}

function isMenuChapter(value: string): value is MenuChapter["chapter"] {
  return validChapters.has(value as MenuChapter["chapter"])
}

function isMenuDietaryTag(value: string): value is MenuDietaryTag {
  return validDietaryTags.has(value as MenuDietaryTag)
}

function isMenuPriceBand(value: string | null): value is MenuPriceBand {
  return value !== null && validPriceBands.has(value as MenuPriceBand)
}
