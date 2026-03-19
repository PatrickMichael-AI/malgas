# The Oak and Barrel — UI/UX Challenge

This checklist predates the current Salt & Fynbos redesign. The repo is no longer the original bland starter, so this file now tracks what the project has already met versus what is still open.

## Audit Snapshot

- Met: 26
- Partial / Unverified: 1
- To do: 7
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
- [ ] Run a Lighthouse audit and fix all accessibility issues (Missing)
- [x] Make the navigation highlight the active page

## Expert Challenges

- [ ] Add a reservation system using localStorage (Missing)
- [ ] Implement a shopping cart / order system (Missing)
- [x] Add Framer Motion or similar for page transitions
- [ ] Create a theme switcher with multiple color schemes (Missing)
- [ ] Add internationalization (multi-language support) (Missing)
- [ ] Achieve a perfect Lighthouse score (100/100/100/100) (Missing)
- [ ] Deploy to Vercel/Netlify with a custom domain (Unverified: site URL is configured, but deployment is not proven in-repo)

## Remaining Work By Difficulty

1. Add a multi-theme switcher with multiple color schemes.
2. Add a `localStorage`-backed reservation system.
3. Add internationalization.
4. Verify deployment on Vercel/Netlify and custom-domain setup.
5. Run Lighthouse and fix accessibility and performance issues.
6. Add a shopping cart / ordering flow.
7. Chase a perfect Lighthouse score.

---

Good luck! Share your results with the community.
