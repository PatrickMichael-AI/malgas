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

## Home Scene Prompt Set

### Use

- Full-bleed home-page scene artwork behind the header and hero
- Estuary-edge atmospheric background plate, not a literal scenic hero image
- Source direction for later static and animated botanical scene work

### Visual Requirements

- Estuary or coastal marsh mood, not generic meadow grass
- Grass or reeds must grow from a dense grounded base near the bottom edge
- Stems should rise mostly vertically, then lean gently in one wind direction
- Strongest density belongs at the lower left and lower right edges
- The middle of the frame must stay open for headline text and image overlays
- The artwork should read as atmosphere, not as line texture or cross-hatching
- No chunky leaves, no tropical plants, no flower heads, no decorative sketch style

### Reference Requirements

- Best reference:
  - estuary reeds, marsh grass, or coastal grass in wind
  - visible rooted base mass near the ground
  - stems thinning upward into wisps
  - simple silhouette or low-detail tonal treatment
- Useful pair:
  - one reference that feels correct
  - one reference that feels wrong
- Avoid references that are:
  - pencil sketch or cross-hatching based
  - tropical foliage
  - botanical illustration with isolated floating stems
  - overly photographic sunset landscapes

### SVG Translation Note

- Treat generated estuary-grass images as art-direction reference plates, not direct SVG conversion assets.
- Use them to guide density, rooted base shape, center openness, taper, and wind direction.
- Do not trace them literally for animation; the final animated SVG should be a simplified interpretation with a limited number of grouped stems and soft atmospheric layers.

### Core Nano Banana Prompt

`Wide editorial background plate for a premium coastal restaurant website hero. Estuary edge at low wind, viewed as an abstract atmospheric scene rather than a literal landscape. Dense beds of long coastal reeds and estuary grass rise naturally from the lower left and lower right edges, rooted in a soft ground mass, with stems tapering thinner as they rise and bending gently in one wind direction. The center remains open and quiet for headline text. Very subtle layered depth, elegant negative space, calm premium mood, soft organic rhythm, not busy. Style: monochrome tonal artwork, flat single-color botanical silhouette language, translucent paper-like layering, refined editorial composition, minimal detail, soft atmospheric fade, luxury hospitality branding, high-end website background. Color direction: warm pale sand / faded sage / misty estuary wash, almost duotone, no harsh contrast. Composition: full-bleed panoramic background, strongest density at the lower outer corners, stems thinning upward, no hard horizon line, no focal object, no people, no buildings, no boats, no flowers, no chunky leaves, no tropical plants. Important: the reeds must clearly grow out of a grounded base, not float as random lines. The base should feel rooted and denser near the bottom, then dissolve upward into finer wisps. Keep the middle 40 percent of the frame visually open for text and image overlays. Output: clean high-resolution horizontal background plate for a homepage hero, sophisticated, understated, atmospheric.`

### Negative Prompt

`cross-hatching, pencil sketch, random strokes, palm leaves, tropical foliage, thick fynbos blobs, busy illustration, detailed landscape, sunset photo realism, hard outlines, cluttered center, flowers, literal scenic postcard`

### Light Mode Variant

`Wide editorial background plate for a premium coastal restaurant website hero in light mode. Estuary reeds and coastal grass rise from a grounded pale sand base at the lower left and lower right edges, with soft tapering stems bending gently in one wind direction. The center remains calm and open for typography. Style: monochrome tonal artwork, flat silhouette language, translucent paper-like layers, refined hospitality editorial mood. Color direction: warm pale sand, faded sage, misted estuary blue, soft cream haze, very low contrast, sun-washed and airy. Important: dense rooted base, finer wisps upward, no random line texture, no chunky leaves, no literal landscape.`

### Dark Mode Variant

`Wide editorial background plate for a premium coastal restaurant website hero in dark mode. Estuary reeds and marsh grass emerge from a grounded low-contrast base at the lower edges, rising upward in thin tapering stems with a calm wind lean. The center stays quiet for text and image overlays. Style: monochrome tonal artwork, flat silhouette reeds, restrained atmospheric layering, premium coastal hospitality mood. Color direction: deep estuary ink, muted sage, low amber mist, dark coastal air, soft glow but no neon contrast. Important: the reeds must feel rooted and natural, not sketched or cross-hatched, and the middle field must remain visually open.`

### Graphic Silhouette Variant

`Create a panoramic full-bleed hero background using elegant estuary grass silhouettes for a luxury coastal restaurant website. Use denser rooted reed beds at the lower corners, mostly vertical stems with gentle wind bend, clean negative space through the center, and a flat monochrome editorial silhouette style. Keep forms simple, readable, and intentional, with strong grounded bases and thinner tapering stems upward. No realism, no visible line-art sketch texture, no flowers, no tropical leaves, no postcard scene.`

### Misty Atmospheric Wash Variant

`Create a panoramic estuary-edge atmospheric background for a premium hospitality homepage. Suggest dense coastal reeds emerging from soft grounded bases at the lower edges, but render them through misty tonal wash and translucent silhouette layers rather than hard graphic shapes. Keep the scene calm, refined, and spacious, with the center open for headline text. Color direction: pale sand, estuary haze, sage wash, soft coastal light. Avoid cross-hatching, random strokes, literal scenery, and busy botanical detail.`

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
