# Notion — Style Reference

> warm paper notebook under afternoon sun

**Theme:** light

Notion reads like a well-used paper notebook under afternoon light. The warm off-white canvas avoids the clinical feel of pure white, while crisp white cards sit on top like ruled inserts. NotionInter gives product copy confident editorial scale, and Lyon Text appears only as a quiet literary accent. Blue is reserved for the primary action; marigold, coral, sky blue, and midnight paint feature cards like sticky notes. Hairline borders, compact controls, and restrained product mockup shadows keep the system tactile rather than glossy. The signature rhythm break is the colored highlight pill placed directly inside a large headline.

## Tokens — Colors

| Name         | Value     | Token                  | Role                                                                     |
| ------------ | --------- | ---------------------- | ------------------------------------------------------------------------ |
| Notion Blue  | `#0075de` | `--color-notion-blue`  | Primary CTA fill and active navigation accent                            |
| Paper Warmth | `#f6f5f4` | `--color-paper-warmth` | Page canvas, hero, and section backgrounds                               |
| Pure White   | `#ffffff` | `--color-pure-white`   | Card surfaces, elevated panels, and reversed text                        |
| Ink Black    | `#000000` | `--color-ink-black`    | Primary headings, copy, navigation, and borders; alpha creates hierarchy |
| Charcoal     | `#111111` | `--color-charcoal`     | Softer dark text for selected UI moments                                 |
| Stone        | `#757575` | `--color-stone`        | Secondary navigation, helper text, and inactive labels                   |
| Graphite     | `#615d59` | `--color-graphite`     | Warm-cast body copy on the paper canvas                                  |
| Slate        | `#696969` | `--color-slate`        | Secondary content inside cards                                           |
| Sky Tint     | `#e6f3fe` | `--color-sky-tint`     | Ghost CTA fill and tinted hover states                                   |
| Marigold     | `#ffb110` | `--color-marigold`     | Hero highlights and accent feature cards                                 |
| Coral        | `#f64932` | `--color-coral`        | Decorative card backgrounds and highlight alternates                     |
| Saffron      | `#e89d01` | `--color-saffron`      | Secondary warm-yellow background washes                                  |
| Vermillion   | `#e32d14` | `--color-vermillion`   | Saturated warm signal panels                                             |
| Mocha        | `#b18164` | `--color-mocha`        | Earthy brown accent panels                                               |
| Signal Blue  | `#097fe8` | `--color-signal-blue`  | Decorative blue backgrounds and hero accents                             |
| Sky Wash     | `#62aef0` | `--color-sky-wash`     | Airy blue feature-card backgrounds                                       |
| Midnight Ink | `#02093a` | `--color-midnight-ink` | Sparse dark feature-card surface with white text                         |

## Tokens — Typography

### NotionInter — Primary sans-serif · `--font-notioninter`

- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 20px, 22px, 24px, 40px, 42px, 48px, 54px, 72px, 96px
- **Line height:** 0.83, 1, 1.04, 1.14, 1.21, 1.27, 1.33, 1.4, 1.43, 1.5
- **Letter spacing:** -4.608px at 96px, -2.016px at 72px, -1.89px at 54px, -0.242px at 22px, 0.12px at 12px
- **OpenType features:** `"lnum", "locl" 0`
- **Role:** Product UI, navigation, body copy, and display headings. Weight 500 dominates controls; 600–700 is reserved for headings.

### Lyon Text — Editorial serif accent · `--font-lyon-text`

- **Substitute:** Source Serif Pro
- **Weights:** 400
- **Sizes:** 18px, 32px
- **Line height:** 1.25, 1.56
- **Role:** Selected body-copy moments and section introductions. It is an accent, not a parallel UI hierarchy.

### Type Scale

| Role       | Size | Line Height | Letter Spacing | Token               |
| ---------- | ---: | ----------: | -------------: | ------------------- |
| caption    | 12px |        1.33 |         0.12px | `--text-caption`    |
| body-sm    | 14px |        1.43 |              — | `--text-body-sm`    |
| body       | 16px |         1.5 |              — | `--text-body`       |
| subheading | 20px |           1 |              — | `--text-subheading` |
| heading-sm | 22px |        1.27 |       -0.242px | `--text-heading-sm` |
| heading    | 40px |         1.5 |              — | `--text-heading`    |
| heading-lg | 48px |         1.5 |              — | `--text-heading-lg` |
| display-sm | 54px |        1.04 |        -1.89px | `--text-display-sm` |
| display    | 72px |        1.21 |       -2.016px | `--text-display`    |
| display-lg | 96px |        1.04 |       -4.608px | `--text-display-lg` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token          |
| ---- | ----: | -------------- |
| 4    |   4px | `--spacing-4`  |
| 8    |   8px | `--spacing-8`  |
| 12   |  12px | `--spacing-12` |
| 16   |  16px | `--spacing-16` |
| 20   |  20px | `--spacing-20` |
| 24   |  24px | `--spacing-24` |
| 28   |  28px | `--spacing-28` |
| 32   |  32px | `--spacing-32` |
| 36   |  36px | `--spacing-36` |
| 64   |  64px | `--spacing-64` |
| 80   |  80px | `--spacing-80` |

### Border Radius

| Element |  Value | Token              |
| ------- | -----: | ------------------ |
| small   |    4px | `--radius-small`   |
| buttons |    8px | `--radius-buttons` |
| cards   |   12px | `--radius-cards`   |
| pills   | 9999px | `--radius-pills`   |

### Shadows

| Name       | Value                                                                               | Token                 | Role                          |
| ---------- | ----------------------------------------------------------------------------------- | --------------------- | ----------------------------- |
| Nav        | `0px 0.7px 1.462px 0px rgb(0% 0% 0% / 0.015), 0px 3px 9px 0px rgb(0% 0% 0% / 0.03)` | `--shadow-nav`        | Sticky navigation elevation   |
| Product UI | `0px 4px 12px rgba(0, 0, 0, 0.1)`                                                   | `--shadow-product-ui` | Hero product mockup elevation |

### Layout

- **Page max-width:** 1440px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 8px
- **Navigation height:** 64px

## Components

### Primary CTA Button

**Role:** Main conversion action

- **background:** `#0075de`
- **color:** `#ffffff`
- **font:** 14px / 500
- **radius:** 8px
- **padding:** 6px 15px
- **hover:** background shifts to `#097fe8` over 200ms ease

### Ghost CTA Button

**Role:** Secondary action beside the primary CTA

- **background:** `#e6f3fe`
- **color:** `#0075de`
- **font:** 14px / 500
- **radius:** 8px
- **padding:** 6px 15px

### Ghost Text Button

**Role:** Tertiary action in hero and feature cards

- **background:** transparent
- **color:** `rgba(0, 0, 0, 0.95)`
- **radius:** 8px
- **padding:** 6px 15px

### Outlined Text Button

**Role:** Compact mid-priority action

- **background:** transparent
- **color:** `rgba(0, 0, 0, 0.9)`
- **border:** 1px solid currentColor
- **radius:** 4px
- **padding:** 5px 10px

### Muted Nav Link

**Role:** Default navigation item

- **background:** transparent
- **color:** `rgba(0, 0, 0, 0.54)`
- **radius:** 8px
- **padding:** 12px 16px
- **hover:** color becomes `#000000` over 200ms ease

### Pill Tag

**Role:** Category or status indicator

- **background:** one flat accent fill
- **color:** `#000000` or `#ffffff` according to contrast
- **radius:** 9999px
- **padding:** 4px 12px

### White Feature Card

**Role:** Default content card on the warm canvas

- **background:** `#ffffff`
- **border:** 1px solid `rgba(0, 0, 0, 0.08)`
- **radius:** 12px
- **padding:** 24px

### Accent Feature Card

**Role:** Full-bleed colored feature panel

- **background:** `#ffb110`, `#f64932`, `#62aef0`, or another documented accent
- **radius:** 12px
- **padding:** 24px

### Dark Feature Card

**Role:** Sparse inverted island on the light page

- **background:** `#02093a`
- **color:** `#ffffff`
- **radius:** 12px
- **padding:** 24px

### Hero Highlight Pill

**Role:** Signature verb highlight within hero copy

- **background:** `#ffb110` or `#f64932`
- **color:** `#000000`
- **radius:** 9999px
- **padding:** 8px 24px

### Avatar Character Mark

**Role:** Decorative punctuation around the hero

- **size:** 40–48px
- **background:** `#ffffff`
- **border:** 2px solid one documented accent color
- **shape:** circle

### Kanban Task Card

**Role:** Product task item inside the hero mockup

- **background:** `#ffffff`
- **border:** 1px solid `rgba(0, 0, 0, 0.08)`
- **radius:** 8px
- **padding:** 8px 12px
- **text:** 14px / 500

## Surfaces

| Level | Name                | Value     | Purpose                                      |
| ----: | ------------------- | --------- | -------------------------------------------- |
|     0 | Page Canvas         | `#f6f5f4` | Warm off-white base for the entire page      |
|     1 | Card Surface        | `#ffffff` | White cards that read above the paper canvas |
|     2 | Accent Card Surface | `#ffb110` | Representative colored feature-card surface  |
|     3 | Dark Card Surface   | `#02093a` | Sparse inverted feature-card island          |

## Do's and Don'ts

### Do

- Use `#f6f5f4` for the page canvas and `#ffffff` for card surfaces.
- Reserve `#0075de` for the single primary action per view.
- Apply -4.608px tracking at 96px, -2.016px at 72px, and -1.89px at 54px.
- Separate content cards with a 1px `rgba(0, 0, 0, 0.08)` hairline.
- Use 12px corners for cards, 8px for buttons, and 9999px only for pills.
- Rotate `#ffb110`, `#f64932`, `#62aef0`, and `#02093a` across feature-card backgrounds.
- Keep hover transitions at 200ms ease.

### Don't

- Do not use `#ffffff` as the page canvas.
- Do not add shadows to content cards; reserve the two documented shadows for navigation and product UI.
- Do not introduce a second filled button color beside `#0075de`.
- Do not render all text at full `#000000`; use alpha or the documented warm neutrals for hierarchy.
- Do not use Lyon Text for navigation or interface labels.
- Do not exceed 12px radius on rectangular content.
- Do not use gradients; all color treatments are flat fills.

## Imagery

The system is illustration-first and photography-free. Flat character marks sit inside 40–48px circles with colored 2px borders, accompanied by small squiggles, arrows, and sparkles as decorative punctuation. Product screenshots are the only literal imagery: they show real Notion views such as kanban boards, documents, and agent panels. The hero product mockup is large and centered with the documented `0 4px 12px rgba(0,0,0,.1)` shadow. Accent marks remain secondary to the headline and product UI.

## Layout

Use a centered column within a 1440px maximum width and 80px vertical gaps between major sections. The hero stacks character marks, a two-line display heading with one highlight pill, editorial subcopy, two compact CTAs, and a large product UI mockup. Below it, alternate white-card grids with flat accent panels. Feature blocks use two columns where space allows and collapse to one column on narrow viewports. Navigation remains 64px high with centered links and right-aligned actions.

## Agent Prompt Guide

1. Create a centered hero on `#f6f5f4`. Set the headline at 72px NotionInter 500, line-height 1.21, tracking -2.016px, and wrap one verb in a `#ffb110` pill with 9999px radius and 8px 24px padding.
2. Create a white feature card on the warm canvas using 24px padding, 12px radius, and a 1px `rgba(0,0,0,.08)` border. Set the title at 22px/700 and body at 16px/1.5 in `#615d59`.
3. Create a marigold feature panel using `#ffb110`, 24px padding, and 12px radius. Place a product UI mockup inside with the single `0 4px 12px rgba(0,0,0,.1)` shadow.

## Similar Brands

- **Linear** — Monochrome structure, hairline cards, and tightly tracked display type.
- **Stripe** — Editorial type pairing and restrained functional color.
- **Figma** — Playful character punctuation and rotating accent hues.
- **Craft Docs** — Warm paper surfaces and document-led composition.

## Quick Start

Use [variables.css](./variables.css) for CSS custom properties, [theme.css](./theme.css) for Tailwind v4, and [tokens.json](./tokens.json) for DTCG tokens.
