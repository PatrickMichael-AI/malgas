# The Oak and Barrel — UI/UX Challenge

This checklist predates the current Salt & Fynbos redesign. The repo is no longer the original bland starter, so this file now tracks what the project has already met versus what is still open.

## Audit Snapshot

- Met: 17
- Partial / Unverified: 6
- To do: 10
- Verification used for this audit: local `npm run lint` and `npm run build` both passed

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
- [ ] Create a proper hero section with text overlay on the home page image (Partial: hero is rebuilt, but text is not overlaid on the image)
- [x] Add a sticky/fixed navigation bar
- [ ] Style the testimonials section with star ratings and card layouts (Partial: card layout exists, star ratings do not)
- [ ] Add smooth scrolling and page transitions (Partial: smooth scrolling exists, page transitions do not)
- [ ] Create a proper image gallery with consistent sizing (Partial: editorial image stacks exist, but no gallery feature)
- [ ] Add a "Back to Top" button (Missing)
- [ ] Fix the CSS specificity conflicts between pages (Unverified: rewrite likely resolved this, but the repo does not prove it)

## Advanced Challenges

- [x] Extract the hardcoded menu data into a separate data file and render with `.map()`
- [ ] Add menu filtering/search (by category, price range, dietary info) (Missing)
- [ ] Implement dark mode with a toggle (Missing)
- [x] Add form validation to the contact/reservation form
- [x] Add Open Graph meta tags for social media sharing
- [x] Implement lazy loading for images
- [x] Add animations and micro-interactions (subtle, tasteful ones)
- [ ] Run a Lighthouse audit and fix all accessibility issues (Missing)
- [x] Make the navigation highlight the active page

## Expert Challenges

- [ ] Add a reservation system using localStorage (Missing)
- [ ] Implement a shopping cart / order system (Missing)
- [ ] Add Framer Motion or similar for page transitions (Missing)
- [ ] Create a theme switcher with multiple color schemes (Missing)
- [ ] Add internationalization (multi-language support) (Missing)
- [ ] Achieve a perfect Lighthouse score (100/100/100/100) (Missing)
- [ ] Deploy to Vercel/Netlify with a custom domain (Unverified: site URL is configured, but deployment is not proven in-repo)

## Remaining Work By Difficulty

1. Add a Back to Top button.
2. Add star ratings to the testimonials section.
3. Convert the home hero to true text-on-image overlay.
4. Verify and, if needed, fix cross-page CSS specificity issues.
5. Build a proper image gallery with consistent sizing.
6. Add real page transitions; if implemented with Framer Motion, this can close both transition-related challenges.
7. Add dark mode with a toggle.
8. Add menu filtering/search, including the missing price and dietary metadata needed to support it.
9. Add a multi-theme switcher with multiple color schemes.
10. Add a `localStorage`-backed reservation system.
11. Add internationalization.
12. Verify deployment on Vercel/Netlify and custom-domain setup.
13. Run Lighthouse and fix accessibility and performance issues.
14. Add a shopping cart / ordering flow.
15. Chase a perfect Lighthouse score.

---

Good luck! Share your results with the community.
