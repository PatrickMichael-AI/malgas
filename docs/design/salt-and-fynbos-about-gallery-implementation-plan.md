# About Page Gallery Implementation With Phased Checklist

## Summary

- Add a dedicated, static gallery section to `/about`, placed after the two story chapters and before the pantry/values band.
- Use a curated editorial grid, not masonry and not a lightbox.
- Satisfy the challenge by making every gallery card use the same image ratio, the same card shell, and the same caption structure.

## Key Changes

- Add a reusable `EditorialGallery` component in `src/components/editorial-gallery.tsx`.
  - Props:
    - `eyebrow: string`
    - `title: string`
    - `body: string`
    - `items: readonly AboutGalleryItem[]`
  - Render through the existing section language:
    - wrap the gallery in `SectionShell`
    - use `tone="paper"`
    - use `className="motion-delay-3 lg:py-12"`
  - Grid rules:
    - mobile: `grid-cols-1`
    - tablet: `sm:grid-cols-2`
    - desktop: `xl:grid-cols-3`
    - shared gap rhythm: `gap-4 lg:gap-5`
  - Card rules:
    - outer shell: `postcard-panel rounded-[2rem] bg-background/92 p-3 sm:p-4`
    - image frame: `relative aspect-[4/5] overflow-hidden rounded-[1.6rem]`
    - image: `next/image`, `fill`, `object-cover`
    - caption block always visible below the image
    - no hover-only reveal, no modal, no links
  - `sizes` value:
    - `"(min-width: 1280px) 24rem, (min-width: 640px) 44vw, 92vw"`
- Add gallery content to `src/content/about.ts`.
  - New type:
    - `AboutGalleryItem = { src: string; alt: string; title: string; caption: string }`
  - New content object:
    - `eyebrow`: `House gallery`
    - `title`: `A closer look at the room, the pantry, and the long-table rhythm.`
    - `body`: `These images hold the details that define Salt & Fynbos: estuary light, tactile ceramics, produce-led plates, local pours, and the slower hospitality cues that make the house feel lived in.`
  - Exact gallery items:
    - `about-intro-room.jpg`
      - title: `Sun-washed room`
      - caption: `The dining room stays bright, calm, and open to the estuary light.`
    - `about-intro-portrait.jpg`
      - title: `House host`
      - caption: `The story stays personal, grounded, and close to the room.`
    - `about-pantry-plate.jpg`
      - title: `Pantry plate`
      - caption: `Produce, herbs, and ceramics carry the pantry-led identity at close range.`
    - `about-pantry-pour.jpg`
      - title: `Mid-pour`
      - caption: `Local pours and slower lunches are part of the house rhythm.`
    - `home-story-table-detail.jpg`
      - title: `Table detail`
      - caption: `Shared plates, linen textures, and passed dishes keep the table communal.`
    - `contact-form-anchor.jpg`
      - title: `Arrival mood`
      - caption: `The welcome should feel settled before the first plate reaches the table.`
- Integrate the gallery into `src/app/about/page.tsx`.
  - Import `aboutGallery` and `EditorialGallery`
  - Insert the gallery section between the story chapter loop and `aboutPantryBand`
  - Keep the pantry band and CTA sections otherwise unchanged
  - Do not add a new route, nav item, or separate gallery page
- Update `CHALLENGES.md` after implementation.
  - Mark `Create a proper image gallery with consistent sizing` as complete
  - Update snapshot totals to:
    - `Met: 22`
    - `Partial / Unverified: 2`
    - `To do: 9`
  - Remove the gallery item from `Remaining Work By Difficulty` and renumber the list

## Phased Development Checklist

### Phase 1: Content Foundation

- [ ] Add `AboutGalleryItem` to `src/content/about.ts`
- [ ] Add `aboutGallery` section copy and the six exact gallery items
- [ ] Reuse only existing curated images already in `public/images`

### Phase 2: Gallery Component

- [ ] Create `src/components/editorial-gallery.tsx`
- [ ] Render a fixed-ratio `4:5` image card for every item
- [ ] Keep card shell, padding, border radius, and caption spacing identical across all items
- [ ] Use `next/image` with the shared `sizes` value
- [ ] Keep the component server-rendered and interaction-free

### Phase 3: About Page Integration

- [ ] Import and mount `EditorialGallery` in `src/app/about/page.tsx`
- [ ] Place it after the story chapters and before the pantry band
- [ ] Use `tone="paper"` and `motion-delay-3 lg:py-12`
- [ ] Do not change routing or site navigation

### Phase 4: Responsive Consistency

- [ ] Verify 1-column layout on mobile
- [ ] Verify 2-column layout on tablet
- [ ] Verify 3-column layout on desktop
- [ ] Confirm all cards remain visually equal in height because of the shared `aspect-[4/5]`
- [ ] Confirm `object-cover` crops cleanly without awkward focal loss
- [ ] Confirm there is no horizontal overflow

### Phase 5: Verification and Audit Update

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Update `CHALLENGES.md` to mark the gallery challenge complete
- [ ] Confirm the remaining-work list is renumbered correctly

## Test Plan

- Confirm the gallery appears on `/about` in the planned position.
- Confirm every card uses the same visual image size and the same caption layout.
- Confirm alt text exists for every image and matches the subject of the photo.
- Confirm captions are readable without hover on mobile and desktop.
- Confirm the section still feels aligned with the existing editorial bands and spacing rhythm.
- Confirm lint and production build both pass.

## Assumptions

- "Proper image gallery with consistent sizing" means a dedicated gallery section with uniform cards, not a masonry feed.
- The first implementation is intentionally static and non-modal.
- Existing curated editorial images are sufficient; no new image generation or asset sourcing is required for v1.
- Unique stagger timing beyond the current motion utility set is unnecessary for this feature.
