# Salt & Fynbos Lighthouse Audit Worksheet

## Audit Setup
- Run against production, not `next dev`.
- Use:
  - `npm run build`
  - `npm run start`
- Audit in Chrome DevTools Lighthouse or with `npx lighthouse`.
- Use an incognito window with extensions disabled.
- Run each route in `Mobile` mode first.
- Run each route at least `2-3` times before deciding something is a real issue.

## Command Reference
### Start The App
```bash
npm run build
npm run start
```

### Create An Audit Output Folder
```bash
mkdir -p docs/audits
```

### Single-Route JSON Reports
Mobile:
```bash
npx lighthouse http://localhost:3000 --output=json --output-path=./docs/audits/home-mobile.json
npx lighthouse http://localhost:3000/menu --output=json --output-path=./docs/audits/menu-mobile.json
npx lighthouse http://localhost:3000/about --output=json --output-path=./docs/audits/about-mobile.json
npx lighthouse http://localhost:3000/contact --output=json --output-path=./docs/audits/contact-mobile.json
```

Desktop:
```bash
npx lighthouse http://localhost:3000 --preset=desktop --output=json --output-path=./docs/audits/home-desktop.json
npx lighthouse http://localhost:3000/menu --preset=desktop --output=json --output-path=./docs/audits/menu-desktop.json
npx lighthouse http://localhost:3000/about --preset=desktop --output=json --output-path=./docs/audits/about-desktop.json
npx lighthouse http://localhost:3000/contact --preset=desktop --output=json --output-path=./docs/audits/contact-desktop.json
```

### One-Shot Run For All Four Routes
```bash
mkdir -p docs/audits

npx lighthouse http://localhost:3000 --output=json --output-path=./docs/audits/home-mobile.json
npx lighthouse http://localhost:3000/menu --output=json --output-path=./docs/audits/menu-mobile.json
npx lighthouse http://localhost:3000/about --output=json --output-path=./docs/audits/about-mobile.json
npx lighthouse http://localhost:3000/contact --output=json --output-path=./docs/audits/contact-mobile.json

npx lighthouse http://localhost:3000 --preset=desktop --output=json --output-path=./docs/audits/home-desktop.json
npx lighthouse http://localhost:3000/menu --preset=desktop --output=json --output-path=./docs/audits/menu-desktop.json
npx lighthouse http://localhost:3000/about --preset=desktop --output=json --output-path=./docs/audits/about-desktop.json
npx lighthouse http://localhost:3000/contact --preset=desktop --output=json --output-path=./docs/audits/contact-desktop.json
```

### Quick Score Summary From A JSON Report
```bash
jq '.categories | map_values(.score * 100)' ./docs/audits/home-mobile.json
```

### Pull The Most Useful Audit Entries
```bash
jq '.audits | to_entries[] | select(.value.score != 1) | {id: .key, title: .value.title, score: .value.score, displayValue: .value.displayValue}' ./docs/audits/home-mobile.json
```

### Pull Core Performance Metrics
```bash
jq '{
  lcp: .audits["largest-contentful-paint"].displayValue,
  cls: .audits["cumulative-layout-shift"].displayValue,
  inp: .audits["interaction-to-next-paint"].displayValue,
  fcp: .audits["first-contentful-paint"].displayValue,
  speedIndex: .audits["speed-index"].displayValue
}' ./docs/audits/home-mobile.json
```

### Best Way To Share Results Back Here
- Export the JSON files into `docs/audits`.
- Tell me the file path, for example:
  - `docs/audits/home-mobile.json`
- Or paste:
  - score summary
  - Opportunities
  - Diagnostics
  - LCP, CLS, and INP values

## WSL / PowerShell Notes
- If Lighthouse CLI fails from WSL with `Unable to connect to Chrome`, the issue is usually Chrome launch/DevTools connection from Linux, not the app itself.
- You can run the Lighthouse CLI from PowerShell against the WSL project path with a UNC path such as:
```powershell
cd "\\wsl.localhost\Ubuntu\home\patrick_michael\Dev\malgas"
```
- Keep `npm run start` running in WSL while running Lighthouse from PowerShell.
- If `localhost:3000` does not resolve cleanly from Windows, try `http://127.0.0.1:3000`.
- If PowerShell blocks execution because of local execution policy, the practical fallback is:
  - run Lighthouse manually in Chrome DevTools
  - export `JSON`
  - save it into `/home/patrick_michael/Dev/malgas/docs/audits/`
- Manual export is fully acceptable for this audit workflow.

## Routes To Audit
1. `/`
2. `/menu`
3. `/about`
4. `/contact`

## Scoring Log
| Route | Performance | Accessibility | Best Practices | SEO | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` |  |  |  |  |  |
| `/menu` |  |  |  |  |  |
| `/about` |  |  |  |  |  |
| `/contact` |  |  |  |  |  |

## Global Known Risks
- [ ] Home full-bleed grass scene background in [`globals.css`](/home/patrick_michael/Dev/malgas/src/app/globals.css) is a CSS background image, so it bypasses `next/image` optimization.
- [ ] Large above-the-fold intro images on `/menu`, `/about`, and `/contact` may need `priority`.
- [ ] Re-check low-contrast utility text on tinted or translucent surfaces in both light and dark mode.
- [ ] Review blur, shadow, and backdrop-heavy surfaces if Performance is weak on mobile.
- [ ] Confirm fixed/floating utility buttons do not overlap important content on mobile.

## Route Worksheet

### `/`
Primary focus:
- [ ] Confirm the LCP element.
- [ ] Check whether the grass scene is increasing render cost.
- [ ] Check for layout shift in the home hero collage.
- [ ] Confirm hero text contrast in light mode.
- [ ] Confirm hero text contrast in dark mode.
- [ ] Confirm the page still feels fast on mobile.

Likely hot spots:
- [`page.tsx`](/home/patrick_michael/Dev/malgas/src/app/page.tsx#L46)
- [`globals.css`](/home/patrick_michael/Dev/malgas/src/app/globals.css#L198)
- [`layout.tsx`](/home/patrick_michael/Dev/malgas/src/app/layout.tsx#L67)

Findings:
- [ ] Performance issue logged
- [ ] Accessibility issue logged
- [ ] Best Practices issue logged
- [ ] SEO issue logged

Notes:

### `/menu`
Primary focus:
- [ ] Check whether the intro image should be `priority`.
- [ ] Check keyboard flow through search and filter pills.
- [ ] Check focus visibility on filter controls.
- [ ] Confirm fixed `Clear filters` button behaves well on mobile.
- [ ] Confirm chapter status chips and result cards pass contrast in dark mode.
- [ ] Confirm no unnecessary layout shift during filter interaction.

Likely hot spots:
- [`menu/page.tsx`](/home/patrick_michael/Dev/malgas/src/app/menu/page.tsx#L28)
- [`menu-explorer.tsx`](/home/patrick_michael/Dev/malgas/src/components/menu-explorer.tsx#L56)

Findings:
- [ ] Performance issue logged
- [ ] Accessibility issue logged
- [ ] Best Practices issue logged
- [ ] SEO issue logged

Notes:

### `/about`
Primary focus:
- [ ] Check whether the intro image should be `priority`.
- [ ] Check whether the gallery image grid is loading efficiently.
- [ ] Confirm gallery captions and section copy pass contrast in dark mode.
- [ ] Confirm no major layout shift from stacked editorial imagery.
- [ ] Confirm the page keeps good mobile spacing and tap targets.

Likely hot spots:
- [`about/page.tsx`](/home/patrick_michael/Dev/malgas/src/app/about/page.tsx#L30)
- [`editorial-gallery.tsx`](/home/patrick_michael/Dev/malgas/src/components/editorial-gallery.tsx#L1)

Findings:
- [ ] Performance issue logged
- [ ] Accessibility issue logged
- [ ] Best Practices issue logged
- [ ] SEO issue logged

Notes:

### `/contact`
Primary focus:
- [ ] Check whether the intro image should be `priority`.
- [ ] Verify all form labels, errors, and status messages are Lighthouse-clean.
- [ ] Re-check dark-mode contrast in the enquiry area and supporting cards.
- [ ] Confirm all CTA/button text passes contrast.
- [ ] Confirm no mobile overlap or tap-target issues.

Likely hot spots:
- [`contact/page.tsx`](/home/patrick_michael/Dev/malgas/src/app/contact/page.tsx#L24)
- [`inquiry-form-shell.tsx`](/home/patrick_michael/Dev/malgas/src/components/inquiry-form-shell.tsx#L77)

Findings:
- [ ] Performance issue logged
- [ ] Accessibility issue logged
- [ ] Best Practices issue logged
- [ ] SEO issue logged

Notes:

## Common Fix Buckets
### Performance
- [ ] Add `priority` to true above-the-fold LCP images where appropriate.
- [ ] Reduce heavy blur/shadow/backdrop effects if mobile paint cost is too high.
- [ ] Reassess the home scene background if it becomes the dominant cost.
- [ ] Check that all `next/image` instances have sensible `sizes`.

### Accessibility
- [ ] Fix contrast failures first.
- [ ] Confirm heading order stays logical on every route.
- [ ] Confirm all buttons and links have accessible names.
- [ ] Confirm keyboard focus remains visible everywhere.

### Best Practices
- [ ] Check for console errors during route load and interaction.
- [ ] Confirm no broken image paths or asset warnings.
- [ ] Confirm theme, transition, and filter behaviors do not trigger runtime warnings.

### SEO
- [ ] Confirm titles and descriptions look correct per route.
- [ ] Confirm canonical URLs are correct.
- [ ] Confirm Open Graph preview still works with the current OG image.

## Close-Out
- [ ] Re-run Lighthouse after fixes.
- [ ] Record final scores in the scoring table.
- [ ] Update [`CHALLENGES.md`](/home/patrick_michael/Dev/malgas/CHALLENGES.md) only after results are stable and the main issues are fixed.
