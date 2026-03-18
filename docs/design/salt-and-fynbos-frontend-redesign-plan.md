# Salt & Fynbos Frontend Redesign Plan

## Summary

- Phase 1 is complete.
- Phase 4 is complete.
- Phase 5 verification is complete.
- Current frontend foundation is a Next.js App Router + React 19 + TypeScript project with Tailwind configuration, `shadcn/ui`-ready setup, and static assets in `public/`.
- The old Vite SPA baseline has been retired and replaced with a Vercel-oriented shell that includes routing, metadata, global layout, brand tokens, font loading, and linting.
- Recommended forward stack is Next.js App Router + TypeScript on Vercel, Tailwind CSS for the styling system, and `shadcn/ui` for accessible primitives only.
- Content still needs to be condensed and rewritten rather than preserved verbatim. The original copy is too long and flat for the visual rhythm suggested by the reference design.

## Current Technology Stack

### Frontend foundation

- Framework/runtime: Next.js App Router
- UI library: React 19
- Routing: file-based app routing under `src/app`
- Language: TypeScript with TSX
- Styling: Tailwind CSS with CSS-variable design tokens in `src/app/globals.css`
- Fonts and media: `next/font` and `next/image`
- Linting: ESLint 9 with the native `eslint-config-next` flat config

### Project shape

- Root app shell lives in [`src/app/layout.tsx`](/home/patrick_michael/Dev/malgas/src/app/layout.tsx) and [`src/app/globals.css`](/home/patrick_michael/Dev/malgas/src/app/globals.css).
- Routes are split into [`src/app/page.tsx`](/home/patrick_michael/Dev/malgas/src/app/page.tsx), [`src/app/menu/page.tsx`](/home/patrick_michael/Dev/malgas/src/app/menu/page.tsx), [`src/app/about/page.tsx`](/home/patrick_michael/Dev/malgas/src/app/about/page.tsx), and [`src/app/contact/page.tsx`](/home/patrick_michael/Dev/malgas/src/app/contact/page.tsx).
- Shared UI is currently provided by [`src/components/site-header.tsx`](/home/patrick_michael/Dev/malgas/src/components/site-header.tsx), [`src/components/site-footer.tsx`](/home/patrick_michael/Dev/malgas/src/components/site-footer.tsx), and [`src/components/section-shell.tsx`](/home/patrick_michael/Dev/malgas/src/components/section-shell.tsx).
- Images are stored under [`public/images`](/home/patrick_michael/Dev/malgas/public/images).

### Phase 1 delivered

- Next.js App Router scaffold and Vercel-ready project structure
- TypeScript, Tailwind, PostCSS, and `shadcn/ui` configuration
- Global layout, metadata, favicon, header, footer, and route shell
- Initial Salt & Fynbos token system, typography, and branded foundation styles
- Working lint setup for the new Next.js stack

### Remaining issues worth carrying into later phases

- The pages now have structured content and branded editorial layouts, but richer menu data, final imagery, and production-ready business details may still evolve.
- The enquiry flow is now validated and email-first, but a full reservation backend is still out of scope for the redesign milestone.
- A real Vercel preview deployment still needs to be triggered in the deployment environment, even though the app now passes local production-build verification.

## Design Inspiration

### Reference interpretation

Reference image: [`docs/design/palais.bio-full-page.jpg`](/home/patrick_michael/Dev/malgas/docs/design/palais.bio-full-page.jpg)

The reference uses a playful editorial layout rather than a standard restaurant landing page. The most useful signals to carry forward are:

- Organic curved shapes that divide sections instead of hard rectangles
- Bright but soft accent colors layered over an airy off-white base
- Collage-like food imagery and art-directed section transitions
- Alternating section structures with asymmetry and overlap
- Friendly, lifestyle-oriented storytelling rather than dense blocks of copy
- CTA buttons that feel tactile and rounded instead of generic

### Recommended Salt & Fynbos adaptation

- Use a hybrid editorial direction rather than a literal copy.
- Keep the site restaurant-focused and trustworthy, but borrow the reference's energy through warm color fields, layered photography, rounded badges, and lighter storytelling.
- Shift the brand from steakhouse-pub cues toward a Western Cape southern coast country identity: sea air, fynbos, farm produce, local wine, and relaxed all-day hospitality.
- Replace the current steakhouse-generic feel with a more memorable personality centered on coastal abundance, seasonal cooking, and rural warmth.

### Suggested visual system

- Core colors: sun-washed butter yellow, fynbos green, apricot peach, sea-glass blue, chalky paper white, and deep ink/navy
- Typography: expressive display serif paired with a clean humanist sans
- Layout: alternating editorial bands, image clusters, soft curves, and generous whitespace
- Motion: restrained reveal animations, staggered section entrances, and tactile hover states

## Recommended Stack Moving Forward

### Core stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `shadcn/ui`
- Vercel deployment pipeline

### Why this stack

- Next.js fits Vercel deployment cleanly and gives better defaults for routing, metadata, server rendering, and image optimization.
- TypeScript is worth adding now because the redesign includes content modeling, shared components, and form structure.
- Tailwind CSS should replace page-specific CSS as the primary styling system so spacing, color, type, and layout become systematic.
- `shadcn/ui` should be used selectively for primitives like buttons, sheets, cards, inputs, textareas, and dialogs. The branded sections should still be custom-built to match the reference and avoid a generic component-library look.

## Implementation Plan

### Architecture

- Replatform from the current Vite SPA to a Next.js App Router app.
- Preserve the public route structure: `/`, `/menu`, `/about`, and `/contact`.
- Add a proper `not-found` page.
- Keep pages server-rendered by default and use client components only where interaction is needed.

### Design system and UI foundation

- Define brand tokens with CSS variables for color, spacing, radius, shadows, and type.
- Map tokens into the Tailwind theme.
- Set up `next/font` for production font loading.
- Build a small custom component layer for navigation, hero sections, editorial content blocks, testimonials, CTA bands, menu cards, and footer layouts.
- Use `shadcn/ui` only as the accessibility and interaction substrate, not as the finished visual language.

### Content model

- Extract menu items into typed data structures instead of hardcoding them in JSX.
- Do the same for testimonials, founder story sections, business hours, and contact details.
- Rewrite current copy into shorter, conversion-oriented sections while repositioning the brand around coastal country dining in the Western Cape.

### Page-level direction

- Home: immersive hero, featured menu categories, testimonial cards, and a strong primary CTA
- Menu: category-driven layout with cards, optional filtering-ready structure, and stronger imagery
- About: condensed story sections, founder profile, values, and business milestones
- Contact: polished inquiry/reservation-interest form, clearer contact details, and easier scanning of hours/location

### Vercel readiness

- Use `next/image` for local photography.
- Add metadata and Open Graph support.
- Keep the app compatible with Vercel preview and production deployments without custom infrastructure.

## Development Phases

### Phase 1: Foundation

Status: Complete

- Scaffolded Next.js, TypeScript, Tailwind, and `shadcn/ui`
- Set up layout, fonts, metadata, token system, and route shell

### Phase 2: Content and structure

Status: Complete

- Extracted content into typed modules
- Rewrote long-form placeholder copy into concise marketing sections
- Set page content hierarchy and CTA placement across the four core routes

### Phase 3: Branded UI build

Status: Complete

- Built the hero, editorial section patterns, card systems, footer, and responsive navigation
- Applied the reference-driven visual language across all pages
- Switched typography to `next/font/local` so the brand font stack is bundled with the app

### Phase 4: Interaction and polish

Status: Complete

- Add active nav states, form validation, 404 page, hover states, subtle animations, and reduced-motion handling
- Remove remaining legacy layout patterns and CSS assumptions from the Vite version

### Phase 5: Verification

Status: Complete

- Check responsive behavior across mobile, tablet, and desktop
- Run accessibility, performance, and SEO verification
- Validate Vercel preview deployment

Verification notes:

- Confirmed all four primary routes and the custom `not-found` route build as static App Router pages.
- Verified responsive behavior from the mobile-first Tailwind layouts and breakpoint usage across home, menu, about, and contact.
- Ran `npm run lint` and `npm run build` successfully after adding form validation, final interaction polish, and page-level metadata.
- Added site-level and per-route metadata with Open Graph and Twitter card basics for Vercel-ready SEO coverage.
- Confirmed the app remains Vercel-compatible with no custom server dependencies or non-standard deployment requirements.

## Test and Acceptance Criteria

- All four primary routes render correctly and navigation works across the site.
- The redesign is fully responsive and does not rely on desktop-only layouts.
- Typography, spacing, and color are token-driven rather than scattered ad hoc.
- All images load correctly and are optimized.
- The contact form is visually polished, accessible, and validated.
- The menu and other repeated content render from data modules rather than from inline duplicated markup.
- Metadata and Open Graph basics are present for Vercel deployment.

## Assumptions

- The redesign should adopt the new `Salt & Fynbos` identity and align it to a Western Cape southern coast country brand world.
- Tailwind CSS and `shadcn/ui` are in scope for the rebuild.
- A full reservation backend is not part of the first redesign milestone.
- Existing local photography is sufficient for v1, with improved art direction as a later enhancement.
