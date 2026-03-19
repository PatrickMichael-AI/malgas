# Menu Filtering and Search With Phased Checklist

## Summary
- Add client-side search and filtering to `/menu` without replacing the existing four-chapter editorial structure.
- Keep the page server-rendered at the top level and move the interactive filtering into one client component.
- Support filtering with exact per-item placeholder prices, simple dietary metadata, visible card metadata, and shareable URL state.

## Key Changes
### Data model and seed content
- Extend `MenuItem` in `src/content/menu.ts` with:
  - `price: number`
  - `dietary: readonly MenuDietaryTag[]`
- Add `MenuDietaryTag` as:
  - `"vegetarian" | "vegan" | "gluten-free" | "dairy-free" | "seafood" | "meat"`
- Add a stable dietary display order and label map.
- Add fixed price-band config:
  - `under-100` => `Under R100`
  - `100-180` => `R100-R180`
  - `over-180` => `Over R180`
- Use these initial placeholder prices and tags:
  - `Charred courgettes with whipped chevin` => `118`, `["vegetarian"]`
  - `Smoked snoek croquettes` => `132`, `["seafood"]`
  - `Roasted line fish with sea herb butter` => `218`, `["seafood", "gluten-free"]`
  - `Braised lamb shoulder for two` => `295`, `["meat", "gluten-free"]`
  - `Butter beans with roasted garlic` => `96`, `["vegetarian", "dairy-free"]`
  - `Baby leaves with orchard vinaigrette` => `88`, `["vegetarian", "gluten-free"]`
  - `Pear and almond tart` => `92`, `["vegetarian"]`
  - `Buttermilk pudding with naartjie syrup` => `86`, `["vegetarian", "gluten-free"]`

### Rendering and interaction
- Move the current “Four chapters” block plus the chapter sections into one client component, `MenuExplorer`, mounted from `src/app/menu/page.tsx`.
- Keep the existing chapter-card and section visual language; filtering narrows items within chapters instead of flattening into a catalog.
- Add a filter/search bar above the “Four chapters” cards with:
  - search input
  - multi-select chapter pills
  - multi-select dietary pills
  - single-select price band pills
  - result count
  - clear-filters action
- Only show dietary pills that are actually present in the current menu data.
- When filters are active:
  - hide empty chapters
  - show per-chapter match counts on the four chapter cards
  - visually mute chapter cards with zero matches
  - show a dedicated no-results state if nothing matches
- Add a metadata row to each item card:
  - price shown as `R###`
  - dietary badges shown as small chips in the configured label order

### State contract
- Keep filter state in the URL with:
  - `q` for search text
  - repeated `chapter` params
  - repeated `diet` params
  - `price` for the selected price band
- Use `router.replace` rather than `push` so typing/filtering does not spam history.
- Use `useDeferredValue` for the search query.
- Because `useSearchParams` is involved, wrap the client explorer in `Suspense` from the server page.

## Phased Development Checklist
### Phase 1: Content Foundation
- [x] Extend `MenuItem` with `price` and `dietary`
- [x] Add `MenuDietaryTag`, label map, and tag sort order
- [x] Add fixed price-band config
- [x] Seed all eight current items with the exact placeholder prices and tags above

### Phase 2: Filtering Logic
- [x] Create pure filter helpers for search, chapter matching, dietary matching, and price-band matching
- [x] Define result counting per chapter
- [x] Define visible dietary-filter options from the current dataset
- [x] Define URL parse/serialize helpers for `q`, `chapter`, `diet`, and `price`

### Phase 3: Client Explorer Shell
- [x] Create `MenuExplorer` as a client component
- [x] Read initial filter state from the URL
- [x] Sync filter changes back to the URL with `router.replace`
- [x] Add `useDeferredValue` for search input responsiveness
- [x] Mount the explorer from `src/app/menu/page.tsx` inside `Suspense`

### Phase 4: Menu UI Integration
- [x] Add the filter/search bar above the “Four chapters” section
- [x] Preserve the existing chapter-card layout and styling
- [x] Add live match counts to the chapter cards
- [x] Hide empty chapters when filters are active
- [x] Add a no-results state with a clear-filters action
- [x] Add price and dietary badges to every visible item card

### Phase 5: Verification and Audit Update
- [x] Verify default unfiltered menu still matches current chapter order and pacing
- [x] Verify URL persistence on refresh and share
- [x] Verify no-results and clear-filters behavior
- [x] Run `npm run lint`
- [x] Run `npm run build`
- [x] Update `CHALLENGES.md` to mark menu filtering/search complete

## Test Plan
- Search matches both item name and description, case-insensitively.
- Multiple chapter filters combine with `OR`; multiple dietary filters combine with `OR`; groups combine with `AND`.
- Price filtering places each seeded item in the intended band.
- With no active filters, all four chapters and all eight items render as they do today.
- With active filters, empty chapters disappear and counts remain accurate.
- Refreshing or sharing the URL restores the same filtered state.
- Keyboard navigation and focus states remain usable for pills, search, and clear action.

## Assumptions
- Placeholder prices are acceptable for v1 and can be swapped later without changing the filtering model.
- Filtering stays fully client-side because the menu dataset is small and static.
- The challenge is only satisfied after both the filtering UI and the supporting price/dietary metadata are visible on the page.
