# Home Full-Bleed Scene Host Architecture Plan

## Summary
- Move the home page atmosphere architecture from a page-level scene to a layout-level scene host so the visual can sit behind both the header and the home page content.
- Keep the hero card, collage, and editorial content constrained as foreground elements floating above that shared scene.
- Treat the layout-level scene host as the required foundation before any further artwork, motion, or tuning work.
- Current direction: use a static estuary-grass background plate first, and only consider MP4 replacement after the still composition is proven.

## Why The Previous Approach Failed
- A page-level scene begins below the header because the header is rendered outside page content in `src/app/layout.tsx`.
- That creates a visible seam between the header background and the full-bleed scene.
- If the scene is meant to feel cinematic, it must occupy the same visual field as the header.
- The prior page-scoped breakout work should be treated as exploratory, not as the final architecture.

## Key Changes
- Add a layout-level scene host behind both `SiteHeader` and `main` in `src/app/layout.tsx`.
- Let the active page provide a scene variant to that host without turning every page into a special case.
- Keep the scene host viewport-wide and outside the shared `max-w-[90rem]` content wrapper.
- Split responsibilities cleanly:
  - `LayoutSceneHost` handles stacking, placement, and lifecycle at layout level
  - `HomeHeroScene` handles the home-specific scene composition
  - `HeroFynbosAtmosphere` handles botanical artwork only
- Keep the scene host page-scoped by route:
  - home page gets the atmospheric scene
  - all other pages continue using the default background
- Do not use `position: fixed` for the scene layer.
  - keep it in normal page stacking behind header and main
  - avoid introducing a separate scroll/parallax system in this phase

## Architecture Decisions
- The scene host belongs to the layout, not the home page.
- The host sits behind `SiteHeader` and `main`, but above the base `body`/`page-frame` background.
- The home route selects the `home` scene variant; other routes select `none`.
- The header must stay visually transparent enough, or intentionally softened enough, to let the scene read through without showing a hard break.
- Motion remains deferred until the layout-level scene host and static home scene are visually correct.
- The SVG reed experiment should be treated as exploratory and may be removed once the static plate is integrated.
- Video is not the next phase. It is an optional replacement only after the static plate works in light mode, dark mode, desktop, and mobile cropping.

## Phase 1 Decisions
- `LayoutSceneHost` is a client component because route-based scene selection uses `usePathname()`.
- The host is mounted as a direct child of `.page-frame` in `src/app/layout.tsx`, before `SiteHeader` and `main`.
- The host renders only for the home route in Phase 1 and stays visually inert until the home scene migrates into it in Phase 2.
- The exploratory page-level `HomeHeroScene` mount is removed from `src/app/page.tsx` so the repo is no longer split between two competing scene architectures.

## Phase Checklist
### Phase 1: Layout Scene Host
- [x] Add a layout-level `LayoutSceneHost` behind the header and main content
- [x] Route scene selection by pathname so only `/` gets the home scene
- [x] Keep all non-home pages on the current background treatment
- [x] Verify the host sits outside the shared `max-w-[90rem]` page container

### Phase 2: Home Scene Migration
- [x] Move `HomeHeroScene` to render through the layout scene host instead of from `src/app/page.tsx`
- [x] Remove the page-level scene placement from the home page
- [x] Ensure the scene begins above the hero and continues behind the header
- [x] Verify there is no visual seam between header and scene

### Phase 3: Header Integration
- [x] Tune the header surface so it visually belongs to the scene on the home page
- [x] Keep navigation readability, contrast, and focus states intact
- [x] Decide whether the home header is fully transparent, lightly washed, or softly blurred
- [x] Verify scroll and sticky behavior still feel intentional

### Phase 4: Botanical Artwork Layer
- [x] Reintroduce or retune `HeroFynbosAtmosphere` inside `HomeHeroScene`
- [x] Keep the artwork monochrome, oversized, and edge-anchored
- [x] Verify the hero center stays visually open
- [x] Ensure the scene reads as one field from header through hero

### Phase 5: Static Background Plate
- [x] Remove or disable the SVG reed artwork from `HomeHeroScene`
- [x] Add a static full-bleed estuary-grass image plate to the layout-level home scene
- [x] Keep the strongest visual density toward the outer lower edges and preserve an open center
- [x] Verify the header and hero still read as one field with the static plate behind them

### Phase 6: Theme and Responsive Tuning
- [ ] Tune light mode opacity, masking, and crop for the static plate
- [ ] Tune dark mode so the scene remains legible but restrained
- [ ] Verify mobile cropping and header integration
- [ ] Verify desktop composition feels cinematic without crowding the hero

### Phase 7: Optional Video Upgrade
- [ ] Decide whether the static plate is sufficient without motion
- [ ] If needed, replace the static plate with an MP4 loop based on the same composition
- [ ] Keep a static fallback for reduced-motion users and low-bandwidth cases
- [ ] Verify the loop is clean and visually quieter than the foreground hero content

### Phase 8: Verification
- [ ] Verify the scene does not interfere with pointer or focus behavior
- [ ] Verify no stacking bugs with `PageTransitionShell`
- [ ] Verify sticky header behavior over the home scene
- [ ] Run `npm run lint`
- [ ] Run `npm run build`

## Test Plan
- The home scene is visible behind the header and hero with no hard seam between them.
- Non-home pages remain visually unchanged.
- Header navigation remains legible in light and dark themes.
- The hero card still reads as the primary foreground object.
- Mobile and desktop both preserve intentional cropping and hierarchy.
- Reduced-motion users receive the same composition without animation.
- If video is introduced later, it must not become necessary for the design to feel complete.

## Assumptions
- The correct architecture is layout-level, not page-level.
- Only the home page uses the scene host in v1.
- The next deliverable is a still image plate, not more SVG refinement.
- Botanical motion is optional and should only return if the static composition first proves the direction.
