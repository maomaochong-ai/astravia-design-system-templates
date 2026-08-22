# Spacex-Inspired — Style Reference
> An inspired interpretation of Spasex's design language — a mission-oriented aerospace brand built on pure black canvas, full-bleed photographic and video heroes of rockets and Mars landscapes, and uppercase D-DIN display type set in tight vertical leading. UI chrome is intentionally minimal a single ghost outlined pill button per band, all-caps eyebrow microtext, and a fixed top nav over photography. The system is unapologetically austere — black, white, and the imagery itself.

**Theme:** light

**Source website:** [https://www.spacex.com/](https://www.spacex.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#000000` | `--color-primary` | primary role extracted from the source design |
| ink | `#000000` | `--color-ink` | ink role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on primary mute | `#f0f0fa` | `--color-on-primary-mute` | on primary mute role extracted from the source design |
| canvas night | `#000000` | `--color-canvas-night` | canvas night role extracted from the source design |
| canvas night soft | `#0a0a0a` | `--color-canvas-night-soft` | canvas night soft role extracted from the source design |
| canvas light | `#ffffff` | `--color-canvas-light` | canvas light role extracted from the source design |
| canvas cool | `#f0f0fa` | `--color-canvas-cool` | canvas cool role extracted from the source design |
| hairline on dark | `#3a3a3f` | `--color-hairline-on-dark` | hairline on dark role extracted from the source design |
| hairline on light | `#e0e0e8` | `--color-hairline-on-light` | hairline on light role extracted from the source design |
| link on dark | `#ffffff` | `--color-link-on-dark` | link on dark role extracted from the source design |
| link blue fallback | `#0000ee` | `--color-link-blue-fallback` | link blue fallback role extracted from the source design |
| ink mute | `#5a5a5f` | `--color-ink-mute` | ink mute role extracted from the source design |

## Tokens — Typography

### D-DIN-Bold, Arial Narrow, Arial, Verdana, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700
- **Sizes:** 80px, 60px, 48px
- **Line height:** 0.95, 1.2, 1.25
- **Letter spacing:** 1.6px, 1.2px, 0.96px
- **Role:** Brand typography family observed across the documented type scale.

### D-DIN, Arial, Verdana, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 700
- **Sizes:** 16px, 13.008px, 12px
- **Line height:** 1.7, 1.5, 0.94, 2
- **Letter spacing:** 0.32px, 1.17px, 0.96px, 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 80px | 0.95 | 1.6px | `--text-display-xxl` |
| display-xl | 60px | 1.2 | 1.2px | `--text-display-xl` |
| display-lg | 48px | 1.25 | 0.96px | `--text-display-lg` |
| body-lg | 16px | 1.7 | 0.32px | `--text-body-lg` |
| body-md | 16px | 1.5 | 0.32px | `--text-body-md` |
| button-cap | 13.008px | 0.94 | 1.17px | `--text-button-cap` |
| micro-cap | 12px | 2 | 0.96px | `--text-micro-cap` |
| caption | 13.008px | 1.5 | 0 | `--text-caption` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 8px | `--spacing-xs` |
| sm | 12px | `--spacing-sm` |
| md | 16px | `--spacing-md` |
| lg | 18px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| xxl | 32px | `--spacing-xxl` |
| huge | 48px | `--spacing-huge` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| xs | 4px | `--radius-xs` |
| sm | 8px | `--radius-sm` |
| md | 16px | `--radius-md` |
| pill | 32px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 32px
- **Card padding:** 18px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### button ghost on dark
**Role:** button ghost on dark component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-cap}`
- **rounded:** `{rounded.pill}`
- **padding:** `18px 24px`

### button ghost on light
**Role:** button ghost on light component

- **backgroundColor:** `{colors.canvas-light}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-cap}`
- **rounded:** `{rounded.pill}`
- **padding:** `18px 24px`

### button filled cool
**Role:** button filled cool component

- **backgroundColor:** `{colors.canvas-cool}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-cap}`
- **rounded:** `{rounded.pill}`
- **padding:** `18px 24px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas-light}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `12px 16px`

### card photo band
**Role:** card photo band component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `0px`

### card shop product
**Role:** card shop product component

- **backgroundColor:** `{colors.canvas-light}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `16px`

### nav bar overlay
**Role:** nav bar overlay component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-cap}`
- **rounded:** `{rounded.xs}`
- **padding:** `24px 32px`

### link on dark
**Role:** link on dark component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.link-on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `0px`

### link on light
**Role:** link on light component

- **backgroundColor:** `{colors.canvas-light}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `0px`

### footer dark
**Role:** footer dark component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.xs}`
- **padding:** `32px 24px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas-night`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Spacex-Inspired website](https://www.spacex.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.spacex.com/).
