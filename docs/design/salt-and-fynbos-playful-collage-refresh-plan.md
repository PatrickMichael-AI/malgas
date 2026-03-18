# Playful Collage Frontend Refresh for Salt & Fynbos

## Summary

- The current frontend is technically sound and already centralized well: the visual tokens live in `src/app/globals.css`, the homepage composition in `src/app/page.tsx`, and the shared inner-page hero in `src/components/page-intro.tsx`.
- The main weakness is not implementation quality but visual sameness: most sections resolve into rounded cards on a soft background, so the site feels consistent but too templated for a destination restaurant brand.
- Use the reference image as a composition model, not a literal style copy: adopt its alternating colour bands, layered circular forms, collage image stacks, and illustrated accents, then translate that into a Malgas coastal-country restaurant world.
- Chosen direction: playful collage with brand story prioritized above direct reservation conversion, while still keeping booking visible and easy.

## Key Changes

- Shift the art direction from soft editorial cards to sunlit narrative collage: paper-white base, estuary teal, citrus yellow, warm apricot, fynbos green, and ink blue, with section-by-section contrast instead of one continuous wash.
- Rebuild the homepage as a story sequence: hero with layered food/place imagery and a strong sense of place; seasonal or house promise band; signature dishes or menu rhythm collage; Malgas place story section; visit-planning strip; testimonial or trust section; branded footer CTA.
- Differentiate inner pages so they stop feeling like the same template with new copy. `Menu` should feel like a tasting guide, `About` should feel like a place-and-people story, and `Contact` should feel like a visit-planning page with narrative support instead of a generic form layout.
- Increase appetite and locality cues in imagery: favor room, landscape, table, hands, plated dishes, and local detail shots over repeated isolated food crops. If current assets are limited, treat image acquisition as part of the redesign scope.
- Add a repeatable decorative language inspired by the reference: soft circles, organic cutout shapes, subtle hand-drawn fynbos or estuary line accents, and occasional overlapping paper textures. Keep these decorative, not childish.
- Make the header lighter and more integrated with the page story. It should feel less like a floating app navbar and more like a branded editorial masthead with a persistent but secondary booking action.
- Keep motion purposeful and sparse: one page-load stagger, gentle float or parallax on decorative shapes, and restrained hover motion. Reduced-motion behavior stays first-class.

## Interfaces and Structural Changes

- Keep the existing static Next.js route structure. No route or backend or API changes.
- Replace the one-size-fits-all `PageIntro` pattern with two explicit shared primitives: a `StoryHero` for page openings and a `NarrativeBand` or `CollageSection` for alternating content bands.
- Expand the content model so pages declare presentation intent instead of relying on hard-coded index-based styling. Add explicit fields such as `theme`, `layout`, `media`, `accent`, and `cta` to the page content objects.
- Introduce a small set of section themes in the design system, for example `paper`, `sun`, `sea`, `fynbos`, and `ink`, implemented through CSS variables so sections can switch mood without one-off class logic.
- Keep the current font files for v1 to avoid dependency churn. Improve personality through scale, spacing, hierarchy, and composition first; only swap fonts later if the brand supplies new local assets.

## Test Plan

- Verify responsive layouts at mobile, tablet, and desktop widths, with special attention to overlapping collage sections and sticky header behavior.
- Verify visual contrast, focus states, keyboard navigation, and readable text over tinted backgrounds.
- Verify reduced-motion behavior, especially for decorative drift or stagger effects.
- Verify all pages still statically build, lint cleanly, and preserve current metadata and navigation behavior.
- Verify the contact flow remains usable and understandable with booking still email-first.

## Assumptions and Defaults

- The reference is being used for layout rhythm, colour blocking, and playful layering, not for literal product-brand mimicry.
- The redesign should feel more expressive and memorable, but still credible for a Western Cape south coast restaurant rather than a consumer packaged goods brand.
- Booking remains important but secondary to atmosphere and brand story on the homepage.
- The existing content-in-code approach remains in place for this phase; no CMS, booking engine, or backend integration is introduced.
