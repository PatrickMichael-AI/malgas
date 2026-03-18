# Coastal Editorial Refresh for Salt & Fynbos

## Summary

- Rework the site into a bright coastal-editorial system inspired by the reference image's chaptered scroll, asymmetry, and colour bands, but grounded in Western Cape South Coast hospitality rather than playful product branding.
- Apply the refresh site-wide: homepage, shared header/footer, and the menu/about/contact routes.
- Optimize the journey for desire first, booking second: atmosphere, place, and menu rhythm before the strongest reservation ask.

## Key Changes

- Shared visual system:
  - Use a fixed estuary palette: paper, dune, sea-glass, apricot sun, and kelp ink. Each major section gets one dominant surface colour with high-contrast body text.
  - Switch typography to `Playfair Display SC` for display and `Karla` for body/UI. Use oversized hero headlines, tighter uppercase labels, and cleaner supporting copy.
  - Replace the current generic blobs/rings with subtler coastal motifs created in CSS only: contour lines, shell arcs, and fynbos strokes.
  - Remove continuous decorative drift/parallax. Keep short entrance reveals only, with full reduced-motion fallback.
  - Keep navigation simple: the current 4-route IA plus a persistent primary `Book a table` CTA. Do not add secondary anchor nav or complex menu behavior.
- Homepage:
  - Rebuild as 5 bands: hero, sense of place, menu rhythm, guest proof/house story, and visit-planning CTA.
  - Hero uses one dominant dining-room image plus two smaller supporting crops, an oversized headline, location/hours chips, a primary booking CTA, and a secondary menu CTA.
  - Alternate section background colours and image alignment to mirror the reference's pacing. Each band should carry one message and one supporting action only.
  - Use static quote cards, Malgas location, and opening rhythm as the trust layer before the final booking band.
- Inner pages:
  - `Menu`: editorial intro, four menu chapters with clearer `start / main / garden / sweet` rhythm, then a group-booking CTA.
  - `About`: place-first story chapters, pantry/value cards, and one stronger visual band instead of several similar postcard panels.
  - `Contact`: keep the email-first flow, but make the enquiry form the visual hero, move phone/email actions closer to it, and compress supporting info into concise visit cards.

## Interfaces / Types

- No route, navigation, or business-data changes.
- Refactor content modules to be chapter-driven instead of mostly one-off strings/cards:
  - shared `tone` variants for editorial bands
  - chapter/callout collections for home/about/menu/contact
  - explicit CTA metadata per chapter where needed
- Keep `CtaLink` and `InquiryFormShell`, but restyle them for the new system. Replace the current intro/section wrappers with a smaller reusable editorial set for consistent bands and image clusters.

## Build Phase Checklist

1. [x] Replace font loading with `Playfair Display SC` and `Karla`, and update Tailwind font mappings.
2. [x] Update global design tokens in `tailwind.config.ts` and `src/app/globals.css` for the new palette, shadows, surfaces, focus states, and reduced-motion-safe effects.
3. [x] Rebuild shared shell components in `src/app/layout.tsx`, `src/components/site-header.tsx`, and `src/components/site-footer.tsx` to match the editorial system.
4. [x] Replace the homepage structure in `src/app/page.tsx` with the 5-band coastal narrative layout.
5. [x] Refactor homepage content in `src/content/home.ts` into chapter-driven copy and CTA data.
6. [x] Refresh the reusable page-intro/section primitives so inner pages can share the same editorial band system.
7. [x] Rebuild the menu page and menu content around the `start / main / garden / sweet` sequence.
8. [x] Rebuild the about page and about content into stronger place-first story chapters.
9. [x] Rebuild the contact page, keeping the email-first enquiry flow while elevating the form and visit details.
10. [x] Restyle `CtaLink` and `InquiryFormShell` to match the new system without changing their behavior.
11. [x] Verify responsive layout, focus visibility, reduced motion, image loading, and sticky-header spacing on all routes.
12. [x] Run `npm run lint` and `npm run build`, then fix any regressions.

## Test Plan

- Visual QA on Home/Menu/About/Contact at 375, 768, 1024, and 1440 widths.
- Keyboard and focus-state QA for nav, mobile menu, all CTAs, and the enquiry form.
- Reduced-motion verification: no infinite decorative animation and all reveal states remain readable when motion is disabled.
- Performance QA: only above-fold hero imagery marked `priority`; all images stay on `next/image`; no layout overlap from the sticky header.
- Functional QA: contact validation, success state, generated `mailto`, phone/email links, and route CTAs.
- Run `npm run lint` and `npm run build`.

## Assumptions

- Keep the current brand name, core copy direction, and existing photography. Do not depend on new photo shoots or illustration assets.
- Interpret the reference image as pacing, asymmetry, colour blocking, and collage energy only. Do not copy its playful product-packaging aesthetic literally.
- Bookings remain email-first. No third-party reservation integration is added in this refresh.
- Build-time use of `next/font/google` is acceptable for `Playfair Display SC` and `Karla`.
