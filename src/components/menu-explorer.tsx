"use client"

import { startTransition, useDeferredValue, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, Search, X } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { SectionShell } from "@/components/section-shell"
import {
  menuChapters,
  menuDietaryTagLabels,
  menuPriceBands,
  menuSequence,
  type MenuChapter,
  type MenuDietaryTag,
  type MenuPriceBand,
} from "@/content/menu"
import {
  buildMenuFilterSearchParams,
  filterMenuChapters,
  getMenuChapterMatchCounts,
  getMenuResultCount,
  getMenuVisibleDietaryOptions,
  hasActiveMenuFilters,
  parseMenuFilterState,
  type MenuFilterState,
} from "@/lib/menu-filters"
import { cn } from "@/lib/utils"

const chapterToneClasses = {
  paper: {
    band: "paper",
    aside: "bg-background/92",
    item: "bg-card/88",
  },
  sea: {
    band: "sea",
    aside: "bg-background/86",
    item: "bg-background/88",
  },
  sun: {
    band: "sun",
    aside: "bg-background/86",
    item: "bg-background/88",
  },
  apricot: {
    band: "apricot",
    aside: "bg-background/86",
    item: "bg-background/88",
  },
} as const

const sequenceCardClasses = {
  Start: "bg-background/92",
  Main: "bg-sea/52 lg:translate-y-8",
  Garden: "bg-sun/70",
  Sweet: "bg-apricot/62 lg:translate-y-4",
} as const

const chapterIds = {
  Start: "menu-start",
  Main: "menu-main",
  Garden: "menu-garden",
  Sweet: "menu-sweet",
} as const

export function MenuExplorer() {
  const pathname = usePathname() ?? "/menu"
  const router = useRouter()
  const searchParams = useSearchParams()
  const filterPanelRef = useRef<HTMLDivElement>(null)

  const parsedFilters = useMemo(
    () => parseMenuFilterState(new URLSearchParams(searchParams?.toString() ?? "")),
    [searchParams]
  )

  const [queryInput, setQueryInput] = useState(parsedFilters.q)
  const [shouldRevealFilterPanel, setShouldRevealFilterPanel] = useState(false)
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setQueryInput((currentQuery) => (currentQuery === parsedFilters.q ? currentQuery : parsedFilters.q))
    })

    return () => window.cancelAnimationFrame(frame)
  }, [parsedFilters.q])
  const deferredQuery = useDeferredValue(queryInput)

  const effectiveFilters = useMemo(
    () => ({
      ...parsedFilters,
      q: deferredQuery.trim(),
    }),
    [deferredQuery, parsedFilters]
  )

  const filteredChapters = useMemo(
    () => filterMenuChapters(menuChapters, effectiveFilters),
    [effectiveFilters]
  )

  const activeFilters = hasActiveMenuFilters(effectiveFilters)
  const visibleChapters = activeFilters
    ? filteredChapters.filter((chapter) => chapter.items.length > 0)
    : filteredChapters
  const chapterMatchCounts = useMemo(
    () => getMenuChapterMatchCounts(menuChapters, effectiveFilters),
    [effectiveFilters]
  )
  const dietaryOptions = useMemo(() => getMenuVisibleDietaryOptions(menuChapters), [])
  const resultCount = getMenuResultCount(filteredChapters)
  const canClearFilters = activeFilters || queryInput.trim().length > 0
  const filtersAreCleared =
    parsedFilters.q.length === 0 &&
    parsedFilters.chapters.length === 0 &&
    parsedFilters.dietary.length === 0 &&
    parsedFilters.price === null &&
    !activeFilters

  useEffect(() => {
    if (!shouldRevealFilterPanel || !filtersAreCleared) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const frame = window.requestAnimationFrame(() => {
      filterPanelRef.current?.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion ? "auto" : "smooth",
      })
      setShouldRevealFilterPanel(false)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [filtersAreCleared, shouldRevealFilterPanel])

  function handleChapterToggle(chapter: MenuChapter["chapter"]) {
    const chapters = parsedFilters.chapters.includes(chapter)
      ? parsedFilters.chapters.filter((value) => value !== chapter)
      : [...parsedFilters.chapters, chapter]

    replaceFilters(router, pathname, {
      ...parsedFilters,
      chapters,
    })
  }

  function handleDietaryToggle(tag: MenuDietaryTag) {
    const dietary = parsedFilters.dietary.includes(tag)
      ? parsedFilters.dietary.filter((value) => value !== tag)
      : [...parsedFilters.dietary, tag]

    replaceFilters(router, pathname, {
      ...parsedFilters,
      dietary,
    })
  }

  function handlePriceToggle(price: MenuPriceBand) {
    replaceFilters(router, pathname, {
      ...parsedFilters,
      price: parsedFilters.price === price ? null : price,
    })
  }

  function handleQueryChange(nextQuery: string) {
    setQueryInput(nextQuery)

    const trimmedQuery = nextQuery.trim()

    if (trimmedQuery === parsedFilters.q) {
      return
    }

    startTransition(() => {
      replaceFilters(router, pathname, {
        ...parsedFilters,
        q: trimmedQuery,
      })
    })
  }

  function handleClearFilters(revealFilterPanel = false) {
    setQueryInput("")
    setShouldRevealFilterPanel(revealFilterPanel)
    replaceFilters(router, pathname, {
      q: "",
      chapters: [],
      dietary: [],
      price: null,
    })
  }

  function handleClearQuery() {
    setQueryInput("")
    replaceFilters(router, pathname, {
      ...parsedFilters,
      q: "",
    })
  }

  return (
    <>
      <SectionShell
        eyebrow={menuSequence.eyebrow}
        title={menuSequence.title}
        body={menuSequence.body}
        fullWidthChildren
        className="motion-delay-1 lg:py-12"
      >
        <div className="space-y-6" ref={filterPanelRef}>
          <div className="postcard-panel rounded-[2rem] bg-background/92 px-5 py-5">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-5">
                <label className="field-shell block">
                  <span className="field-label">Search the menu</span>
                  <div className="mt-3 flex items-center gap-3">
                    <Search className="h-4.5 w-4.5 shrink-0 text-foreground/60" />
                    <input
                      type="search"
                      value={queryInput}
                      onChange={(event) => handleQueryChange(event.target.value)}
                      placeholder="Search dishes, ingredients, or mood."
                      className="w-full border-0 bg-transparent p-0 text-sm text-ink placeholder:text-foreground/55 focus:outline-none focus:ring-0"
                    />
                  </div>
                </label>

                <div className="space-y-4">
                  <FilterGroup label="Chapter">
                    {menuChapters.map((chapter) => (
                      <FilterPill
                        key={chapter.chapter}
                        active={parsedFilters.chapters.includes(chapter.chapter)}
                        onClick={() => handleChapterToggle(chapter.chapter)}
                      >
                        {chapter.chapter}
                      </FilterPill>
                    ))}
                  </FilterGroup>

                  <FilterGroup label="Dietary">
                    {dietaryOptions.map((tag) => (
                      <FilterPill
                        key={tag}
                        active={parsedFilters.dietary.includes(tag)}
                        onClick={() => handleDietaryToggle(tag)}
                      >
                        {menuDietaryTagLabels[tag]}
                      </FilterPill>
                    ))}
                  </FilterGroup>

                  <FilterGroup label="Price band">
                    {menuPriceBands.map((band) => (
                      <FilterPill
                        key={band.id}
                        active={parsedFilters.price === band.id}
                        onClick={() => handlePriceToggle(band.id)}
                      >
                        {band.label}
                      </FilterPill>
                    ))}
                  </FilterGroup>
                </div>
              </div>

              <div className="grid gap-4">
                <article className="menu-results-card rounded-[1.75rem] border border-border/60 bg-card/90 px-4 py-4 shadow-paper">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                    Matching dishes
                  </p>
                  <p className="mt-3 font-display text-4xl leading-none text-ink">{resultCount}</p>
                  <p className="mt-3 text-sm leading-7 text-foreground/84">
                    {activeFilters
                      ? "Filters are narrowing the menu within the existing four-course rhythm."
                      : "Search and filter without losing the chapter structure of the menu."}
                  </p>
                </article>

                <button
                  type="button"
                  onClick={() => handleClearFilters()}
                  disabled={!canClearFilters}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-[transform,background-color,border-color,color] duration-200",
                    canClearFilters
                      ? "border-fynbos/80 bg-fynbos text-background shadow-paper hover:-translate-y-0.5 hover:bg-fynbos/90"
                      : "cursor-not-allowed border-border/50 bg-background/60 text-foreground/50"
                  )}
                >
                  <X className="h-4 w-4" />
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          {activeFilters ? (
            <article className="postcard-panel rounded-[2rem] bg-card/92 px-5 py-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/72">
                    Filtered results
                  </p>
                  <div className="space-y-2">
                    <p className="font-display text-3xl leading-tight text-ink">
                      Showing {formatMatchCount(resultCount).toLowerCase()} across the menu.
                    </p>
                    <p className="max-w-2xl text-sm leading-7 text-foreground/84">
                      The chapter overview below now reflects the active search and filters, and
                      the result sections only show matching dishes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {parsedFilters.q ? (
                    <ActiveFilterChip
                      label={`Search: ${parsedFilters.q}`}
                      onRemove={handleClearQuery}
                    />
                  ) : null}
                  {parsedFilters.chapters.map((chapter) => (
                    <ActiveFilterChip
                      key={chapter}
                      label={chapter}
                      onRemove={() => handleChapterToggle(chapter)}
                    />
                  ))}
                  {parsedFilters.dietary.map((tag) => (
                    <ActiveFilterChip
                      key={tag}
                      label={menuDietaryTagLabels[tag]}
                      onRemove={() => handleDietaryToggle(tag)}
                    />
                  ))}
                  {parsedFilters.price ? (
                    <ActiveFilterChip
                      label={getPriceBandLabel(parsedFilters.price)}
                      onRemove={() => handlePriceToggle(parsedFilters.price!)}
                    />
                  ) : null}
                </div>
              </div>
            </article>
          ) : null}

          <div className="grid gap-4 lg:grid-cols-4">
            {menuChapters.map((chapter) => {
              const matchCount = chapterMatchCounts[chapter.chapter]
              const isMuted = activeFilters && matchCount === 0
              const isChapterSelected =
                parsedFilters.chapters.length === 0 || parsedFilters.chapters.includes(chapter.chapter)
              const CardTag = isMuted ? "div" : "a"
              const helperCopy =
                matchCount > 0
                  ? "Matching dishes remain in this chapter."
                  : "No dishes match here right now."

              return (
                <CardTag
                  key={chapter.chapter}
                  {...(isMuted ? { "aria-disabled": true } : { href: `#${chapterIds[chapter.chapter]}` })}
                  className={cn(
                    "postcard-panel group block transition-[transform,box-shadow,border-color,background-color,opacity] duration-200",
                    activeFilters ? "rounded-[1.7rem] px-4 py-4" : "rounded-[2rem] px-5 py-5",
                    !isMuted && "hover:-translate-y-1 hover:shadow-float focus-visible:-translate-y-1 focus-visible:shadow-float",
                    isMuted && "opacity-45",
                    activeFilters && isChapterSelected && "ring-2 ring-fynbos/35 ring-offset-2 ring-offset-background",
                    sequenceCardClasses[chapter.chapter]
                  )}
                >
                  {activeFilters ? (
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/72">
                            Chapter
                          </p>
                          <h3 className="mt-2 font-display text-[2rem] leading-none text-ink">
                            {chapter.chapter}
                          </h3>
                        </div>
                        <span className="rounded-full border border-border/60 bg-background/82 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-foreground/80">
                          {formatMatchCount(matchCount)}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium leading-6 text-ink">{chapter.summary}</p>
                        <p className="text-sm leading-6 text-foreground/80">{helperCopy}</p>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={cn(
                            "menu-chapter-status-chip rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em]",
                            isChapterSelected
                              ? "menu-chapter-status-chip-active border-fynbos/35 bg-fynbos/10 text-fynbos"
                              : "menu-chapter-status-chip-muted border-border/60 bg-background/80 text-foreground/78"
                          )}
                        >
                          {isChapterSelected ? "In results" : "Hidden"}
                        </span>
                        {!isMuted ? (
                          <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/74 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink">
                            View results
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/72">
                        {chapter.chapter}
                      </p>
                      <h3 className="mt-3 font-display text-3xl leading-tight text-ink">{chapter.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/84">{chapter.summary}</p>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/74">
                          Jump to section
                        </span>
                        {!isMuted ? (
                          <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/74 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink">
                            Jump
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        ) : null}
                      </div>
                    </>
                  )}
                </CardTag>
              )
            })}
          </div>
        </div>
      </SectionShell>

      {activeFilters && resultCount === 0 ? (
        <section className="postcard-panel rounded-[2.35rem] bg-card/92 px-6 py-8 text-center shadow-paper sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/72">
            No matches
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            No dishes match this combination yet.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/86">
            Clear the filters or widen the search to bring the full menu rhythm back into view.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => handleClearFilters(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-fynbos/80 bg-fynbos px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-background shadow-paper transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-fynbos/90"
            >
              <X className="h-4 w-4" />
              Clear filters
            </button>
          </div>
        </section>
      ) : (
        <div className="space-y-6 lg:space-y-8">
          {visibleChapters.map((chapter, index) => {
            const toneClasses = chapterToneClasses[chapter.tone]

            return (
              <section key={chapter.chapter} id={chapterIds[chapter.chapter]} className="scroll-mt-32">
                <SectionShell
                  eyebrow={chapter.chapter}
                  title={chapter.title}
                  body={
                    activeFilters
                      ? `${formatMatchCount(chapter.items.length)} in this chapter.`
                      : chapter.description
                  }
                  tone={toneClasses.band}
                  reverse={index % 2 === 1}
                  className={cn(
                    index === 0
                      ? "motion-delay-2 lg:py-12"
                      : index === 1
                        ? "motion-delay-3 lg:py-12"
                        : "motion-delay-4 lg:py-12"
                  )}
                  actions={
                    activeFilters ? (
                      <span className="soft-chip">{formatMatchCount(chapter.items.length)}</span>
                    ) : undefined
                  }
                  aside={
                    activeFilters ? undefined : (
                      <div className="grid gap-4">
                        <article className={cn("postcard-panel rounded-[2rem] px-5 py-5", toneClasses.aside)}>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                            {chapter.moodTitle}
                          </p>
                          <p className="mt-3 font-display text-3xl leading-tight text-ink">
                            {chapter.mood}
                          </p>
                        </article>

                        <article className="postcard-panel rounded-[2rem] bg-card/92 px-5 py-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                            {chapter.noteTitle}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-foreground/86">{chapter.note}</p>
                        </article>
                      </div>
                    )
                  }
                >
                  <div className="grid gap-3 md:grid-cols-2">
                    {chapter.items.map((item) => (
                      <article
                        key={item.name}
                        className={cn(
                          "rounded-[1.7rem] border border-border/60 px-4 py-4 shadow-paper",
                          toneClasses.item
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p className="font-medium text-ink">{item.name}</p>
                          <span className="menu-price-chip shrink-0 rounded-full border border-border/60 bg-background/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/82">
                            {formatMenuPrice(item.price)}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-foreground/84">{item.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.dietary.map((tag) => (
                            <span
                              key={`${item.name}-${tag}`}
                              className={cn(
                                "rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em]",
                                parsedFilters.dietary.includes(tag)
                                  ? "border-fynbos/70 bg-fynbos text-background"
                                  : "border-border/60 bg-card/86 text-foreground/78"
                              )}
                            >
                              {menuDietaryTagLabels[tag]}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </SectionShell>
              </section>
            )
          })}
        </div>
      )}

      {isMounted && canClearFilters
        ? createPortal(
            <button
              type="button"
              onClick={() => handleClearFilters(true)}
              className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-fynbos/80 bg-fynbos px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-background shadow-[0_18px_38px_rgba(24,50,58,0.24)] backdrop-blur-xl transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-fynbos/90 sm:bottom-6 sm:left-6"
            >
              <X className="h-4 w-4" />
              <span>Clear filters</span>
            </button>,
            document.body
          )
        : null}
    </>
  )
}

function replaceFilters(
  router: ReturnType<typeof useRouter>,
  pathname: string,
  filters: MenuFilterState
) {
  const nextSearch = buildMenuFilterSearchParams(filters).toString()

  router.replace(nextSearch ? `${pathname}?${nextSearch}` : pathname, { scroll: false })
}

function ActiveFilterChip({
  label,
  onRemove,
}: {
  label: string
  onRemove: () => void
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/88 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-foam/95"
    >
      <span>{label}</span>
      <X className="h-3.5 w-3.5" />
    </button>
  )
}

function FilterGroup({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  return (
    <div className="space-y-2">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-foreground/72">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function FilterPill({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5",
        active
          ? "border-fynbos/80 bg-fynbos text-background shadow-paper"
          : "border-border/70 bg-card/88 text-foreground/80 hover:bg-background hover:text-ink"
      )}
    >
      {children}
    </button>
  )
}

function formatMenuPrice(price: number) {
  return `R${price}`
}

function formatMatchCount(count: number) {
  if (count === 0) {
    return "No matches"
  }

  return count === 1 ? "1 match" : `${count} matches`
}

function getPriceBandLabel(priceBand: MenuPriceBand) {
  return menuPriceBands.find((band) => band.id === priceBand)?.label ?? priceBand
}
