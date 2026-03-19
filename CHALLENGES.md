# The Salt & Fynbos (Oak and Barrel)— UI/UX Challenge

This checklist predates the current Salt & Fynbos redesign. The repo is no longer the original bland starter, so this file now tracks what the project has already met versus what is still open.

## Audit Snapshot

- Met: 29
- Partial / Unverified: 1
- To do: 4
- Verification used for this audit: local `npm run lint`, local `npm run build`, and manual browser verification of the reservation flow

## Lighthouse Audit Summary

- Mobile Lighthouse audits were recorded for `/`, `/menu`, `/about`, and `/contact`.
- Accessibility, Best Practices, and SEO scored `100` across the audited routes throughout the audit pass.
- Final recorded mobile Performance scores were:
  - `/`: `85`
  - `/menu`: `81`
  - `/about`: `88`
  - `/contact`: `86`
- The biggest shipped wins came from shared loading changes rather than visual simplification:
  - reduced root font preload cost
  - disabled body-font preload
  - added `priority` to above-the-fold intro images on `/menu`, `/about`, and `/contact`
  - split page transitions so mobile avoids the Framer Motion path
  - disabled the home grass-scene image on mobile
- The remaining Lighthouse headroom is mainly in shared JavaScript and the remaining display-font preload, which is why the perfect-score challenge is still open.

---

## Beginner Challenges

- [x] Change the font from Times New Roman to something modern (Google Fonts) - met via local fonts rather than Google Fonts
- [x] Pick a real color scheme (not gray and white)
- [x] Add hover effects to the navigation links
- [x] Fix the broken image on the home page (hint: check the file names)
- [x] Make the contact form actually look like a form (labels, spacing, alignment)
- [x] Add a favicon
- [x] Style the menu items as cards instead of plain text
- [x] Remove the `<hr>` tags and use better visual section dividers

## Intermediate Challenges

- [x] Make the site responsive (mobile-friendly)
- [x] Add a 404 "Page Not Found" page
- [x] Create a proper hero section with text overlay on the home page image - current layered hero composition counts as meeting this criteria
- [x] Add a sticky/fixed navigation bar
- [x] Style the testimonials section with star ratings and card layouts
- [x] Add smooth scrolling and page transitions
- [x] Create a proper image gallery with consistent sizing
- [x] Add a "Back to Top" button
- [x] Fix the CSS specificity conflicts between pages - verified clean under the current shared Tailwind and global-base styling model

## Advanced Challenges

- [x] Extract the hardcoded menu data into a separate data file and render with `.map()`
- [x] Add menu filtering/search (by category, price range, dietary info)
- [x] Implement dark mode with a toggle
- [x] Add form validation to the contact/reservation form
- [x] Add Open Graph meta tags for social media sharing
- [x] Implement lazy loading for images
- [x] Add animations and micro-interactions (subtle, tasteful ones)
- [x] Run a Lighthouse audit and fix all accessibility issues - mobile audits completed for `/`, `/menu`, `/about`, and `/contact`; accessibility, best practices, and SEO now score `100` across the audited routes
- [x] Make the navigation highlight the active page

## Expert Challenges

- [x] Add a reservation system using localStorage - `/contact` now supports a dual-mode reservation/enquiry flow with local persistence, reservation validation, saved-reservation management, and email handoff
- [ ] Implement a shopping cart / order system (Missing)
- [x] Add Framer Motion or similar for page transitions
- [ ] Create a theme switcher with multiple color schemes (Missing)
- [ ] Add internationalization (multi-language support) (Missing)
- [ ] Achieve a perfect Lighthouse score (100/100/100/100) (Partially met: mobile audits completed for `/`, `/menu`, `/about`, and `/contact`; accessibility, best practices, and SEO now score `100` across the audited routes)
- [x] Deploy to Vercel/Netlify with a custom domain

## Remaining Work By Difficulty

1. Add a multi-theme switcher with multiple color schemes.
2. Add internationalization.
3. Add a shopping cart / ordering flow.
4. Chase a perfect Lighthouse score (Partially met: mobile audits completed for `/`, `/menu`, `/about`, and `/contact`; accessibility, best practices, and SEO now score `100` across the audited routes).

---

Thank you Leaon!

