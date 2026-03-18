# Salt & Fynbos Image Manifest

## Direction

- Bright coastal editorial, not dark fine-dining.
- Natural daylight, soft estuary haze, sun-washed interiors, tactile food.
- Western Cape South Coast mood: Malgas, river light, fynbos, orchard produce, linen, wood, ceramic, sea air.
- Avoid generic steakhouse, neon cocktail-bar, or ultra-luxury hotel imagery.
- Keep styling human and lived-in: crumbs, poured wine, hands, imperfect table moments.

## Global Prompt Add-On

Append this to every Nano Banana prompt:

`editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo`

## Manifest

| File | Use | Ratio | Nano Banana Prompt |
|---|---|---:|---|
| `home-hero-dining-room.jpg` | Home hero primary | `4:5` | `Salt & Fynbos dining room, Western Cape South Coast restaurant in Malgas, bright natural daylight, sun-washed interior, linen-draped tables, soft wood, ceramics, estuary light through windows, editorial hospitality photography, calm and inviting, warm neutrals with sea-glass and apricot accents, realistic, high detail, no people looking at camera, no city restaurant mood, no dark shadows, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `home-hero-dessert.jpg` | Home hero secondary | `1:1` | `refined country-kitchen dessert at a coastal South African restaurant, orchard fruit tart with cultured cream, ceramic plate, soft daylight, editorial food photography, bright background, tactile pastry detail, elegant but relaxed, Western Cape produce story, no harsh studio light, no garnish overload, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `home-hero-drink.jpg` | Home hero tertiary | `4:5` | `golden drink on a long-lunch table at a South Coast restaurant, condensation, ceramic and linen textures, warm afternoon light, estuary atmosphere, editorial crop, relaxed luxury, no nightclub styling, no black background, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `home-story-portrait.jpg` | Home story primary | `4:5` | `owner or host portrait in a bright coastal-country restaurant, standing naturally inside sun-washed dining room, warm and grounded expression, editorial portrait photography, South African hospitality, soft natural light, linen, wood, ceramics, no corporate headshot look, no stiff pose, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `home-story-table-detail.jpg` | Home story secondary | `1:1` | `close editorial detail of shared plate being set onto a long lunch table, hands entering frame, ceramic plates, local food, linen napkins, wine glasses catching afternoon light, relaxed coastal-country hospitality, realistic and tactile, no staged stock-photo feel, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `menu-intro-sweets.jpg` | Menu intro primary | `4:5` | `bakery and pantry sweets at Salt & Fynbos, pear tart and buttermilk pudding mood, editorial food photography, warm daylight, textured ceramic plates, country-kitchen elegance, Western Cape orchard produce, no dark moody styling, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `menu-intro-main-detail.jpg` | Menu intro secondary | `1:1` | `coastal lunch detail, plated line fish or generous lunch plate, bright natural light, modern editorial restaurant photography, South Coast produce-led cooking, ceramic plate, linen table, restrained styling, no fine-dining tweezers look, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `about-intro-room.jpg` | About intro primary | `4:5` | `interior of a Western Cape South Coast restaurant, bright and airy, estuary light, layered tables, soft wood and plaster, subtle coastal palette, editorial architecture and hospitality photography, warm, grounded, not minimal luxury hotel, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `about-intro-portrait.jpg` | About intro secondary | `1:1` | `portrait detail of the restaurant founder or host, natural relaxed posture, inside sunlit dining room, South African coastal-country hospitality, editorial, warm and authentic, no stiff branding shoot, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `about-pantry-plate.jpg` | About pantry band primary | `4:5` | `produce-led plate with herbs, citrus, seasonal vegetables, and ceramic textures, Western Cape pantry-driven cooking, bright daylight, editorial food photography, tactile, fresh, fynbos and orchard influence, no dark restaurant aesthetic, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `about-pantry-pour.jpg` | About pantry band secondary | `1:1` | `wine or local drink being poured at a long lunch table, soft afternoon light, editorial hospitality detail, linen, glass, ceramics, South Coast warmth, relaxed gathering mood, no cocktail-bar styling, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |
| `contact-form-anchor.jpg` | Optional future contact support image | `4:5` | `host stand or welcoming table moment in bright coastal restaurant, guest-arrival energy, natural light, warm hospitality, editorial documentary feel, South African country-coastal restaurant, no concierge desk look, editorial hospitality photography, natural daylight, realistic texture, bright tonal range, no heavy shadows, no generic stock-photo styling, no text, no watermark, no logo` |

## Current Slot Mapping

### Home

- Hero primary image in `src/app/page.tsx`: replace with `home-hero-dining-room.jpg`
- Hero secondary square image in `src/app/page.tsx`: replace with `home-hero-dessert.jpg`
- Hero tertiary vertical image in `src/app/page.tsx`: replace with `home-hero-drink.jpg`
- House story primary image in `src/app/page.tsx`: replace with `home-story-portrait.jpg`
- House story secondary square image in `src/app/page.tsx`: replace with `home-story-table-detail.jpg`

### Menu

- Menu intro primary image in `src/app/menu/page.tsx`: replace with `menu-intro-sweets.jpg`
- Menu intro secondary image in `src/app/menu/page.tsx`: replace with `menu-intro-main-detail.jpg`

### About

- About intro primary image in `src/app/about/page.tsx`: replace with `about-intro-room.jpg`
- About intro secondary image in `src/app/about/page.tsx`: replace with `about-intro-portrait.jpg`
- About pantry band primary image in `src/app/about/page.tsx`: replace with `about-pantry-plate.jpg`
- About pantry band secondary image in `src/app/about/page.tsx`: replace with `about-pantry-pour.jpg`

### Contact

- No dedicated contact image slot is currently in use.
- If a future visual support image is added near the enquiry form, use `contact-form-anchor.jpg`.

## Suggested Replacement Of Existing Assets

- Replace current `restaurant-interior` usage with `home-hero-dining-room.jpg` and `about-intro-room.jpg`
- Replace current `dessert` usage with `home-hero-dessert.jpg` and `menu-intro-sweets.jpg`
- Replace current `craft-beer` usage with `home-hero-drink.jpg` and `about-pantry-pour.jpg`
- Replace current `owner-leon` usage with `home-story-portrait.jpg` and `about-intro-portrait.jpg`
- Replace current `burger` usage with `home-story-table-detail.jpg` and `menu-intro-main-detail.jpg`
- Replace current `sushi-plate` usage with `about-pantry-plate.jpg`

## Logo Symbol Prompt

### Use

- Navigation roundel symbol beside the `Salt & Fynbos` wordmark
- Small-scale brand mark for header, favicon exploration, and compact identity moments

### Direction

- A typographic-brand-compatible botanical mark
- Inspired by South African fynbos, with a protea bud as the central cue
- Elegant, premium, and minimal enough to read clearly at small sizes
- Single-color oxblood / dark red linework on transparent background
- No text, no circle included, no mockup

### Nano Banana Prompt

`Create a refined botanical symbol for the restaurant brand "Salt & Fynbos", designed to sit inside an existing circular roundel next to the wordmark in a website navigation bar. Subject: a minimal South African fynbos emblem with a central protea bud and a few elegant surrounding stems or leaves. Style: premium hospitality identity, editorial, balanced, clean, vector-like linework, strong silhouette, highly legible at very small sizes, centered composition, not sketchy, not clipart, not rustic. The symbol should feel coastal-country, sun-washed, grounded, and refined. Use single-color oxblood / deep garnet linework on a transparent background. Do not include any text, badge border, mockup, shading, watercolor texture, or extra ornament. Keep the form simple enough to work at 24px to 48px while still feeling bespoke and distinctly fynbos.` 
