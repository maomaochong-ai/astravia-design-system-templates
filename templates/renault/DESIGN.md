# Renault — Style Reference
> Renault's web presence pairs the freshly-modernised Renault diamond
(the 2021 flat-line rhombus mark) with a stark black-and-white canvas, a
signature Sunlight Yellow accent, and the proprietary NouvelR display
typeface. The system reads as confident, photography-first automotive — large
hero cars on neutral or atmospheric backdrops, square-edged or barely-rounded
containers, and a small disciplined palette where every coloured element is
intentional. Tile grids, full-bleed banners, and a recurring "configurator"
surface (white card, yellow accent dots, neutral product chrome) carry the
mass-market dealership tone without crossing into luxury.

**Theme:** light

**Source website:** [https://www.renault.com/](https://www.renault.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#ffed00` | `--color-primary` | primary role extracted from the source design |
| primary deep | `#e6d200` | `--color-primary-deep` | primary deep role extracted from the source design |
| on primary | `#000000` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#000000` | `--color-ink` | ink role extracted from the source design |
| body | `#222222` | `--color-body` | body role extracted from the source design |
| charcoal | `#333333` | `--color-charcoal` | charcoal role extracted from the source design |
| mute | `#666666` | `--color-mute` | mute role extracted from the source design |
| ash | `#8a8a8a` | `--color-ash` | ash role extracted from the source design |
| stone | `#c4c4c4` | `--color-stone` | stone role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on dark mute | `rgba(255,255,255,0.72)` | `--color-on-dark-mute` | on dark mute role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#f7f7f7` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#ffffff` | `--color-surface-card` | surface card role extracted from the source design |
| surface dark | `#000000` | `--color-surface-dark` | surface dark role extracted from the source design |
| surface deep | `#111111` | `--color-surface-deep` | surface deep role extracted from the source design |
| hairline | `#f2f2f2` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#000000` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| divider dark | `rgba(255,255,255,0.16)` | `--color-divider-dark` | divider dark role extracted from the source design |
| badge new | `#ffed00` | `--color-badge-new` | badge new role extracted from the source design |
| link | `#0000ee` | `--color-link` | link role extracted from the source design |
| error | `#be6464` | `--color-error` | error role extracted from the source design |
| warning | `#f0ad4e` | `--color-warning` | warning role extracted from the source design |
| success | `#8dc572` | `--color-success` | success role extracted from the source design |
| info | `#337ab7` | `--color-info` | info role extracted from the source design |

## Tokens — Typography

### NouvelR · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 600, 400
- **Sizes:** 56px, 40px, 32px, 24px, 20px, 18px, 19.2px, 16px, 14px, 14.4px, 13px, 12px, 10px
- **Line height:** 0.95, 1, 1.3, 1.5, 1.4, 1.57, 1.2, 1.45
- **Letter spacing:** 0, 0.144px, 0.13px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 56px | 0.95 | 0 | `--text-display-xl` |
| display-lg | 40px | 0.95 | 0 | `--text-display-lg` |
| display-md | 32px | 0.95 | 0 | `--text-display-md` |
| heading-lg | 24px | 0.95 | 0 | `--text-heading-lg` |
| heading-md | 20px | 0.95 | 0 | `--text-heading-md` |
| heading-sm | 18px | 1 | 0 | `--text-heading-sm` |
| subtitle | 19.2px | 1.3 | 0 | `--text-subtitle` |
| body-lg | 18px | 1.5 | 0 | `--text-body-lg` |
| body-md | 16px | 1.4 | 0 | `--text-body-md` |
| body-sm | 14px | 1.57 | 0 | `--text-body-sm` |
| button-lg | 16px | 1 | 0 | `--text-button-lg` |
| button-md | 14.4px | 1 | 0.144px | `--text-button-md` |
| button-sm | 13px | 1.2 | 0.13px | `--text-button-sm` |
| caption | 12px | 1.4 | 0 | `--text-caption` |
| overline | 10px | 1.45 | 0 | `--text-overline` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 8px | `--spacing-xs` |
| sm | 12px | `--spacing-sm` |
| md | 16px | `--spacing-md` |
| lg | 20px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| xxl | 32px | `--spacing-xxl` |
| xxxl | 40px | `--spacing-xxxl` |
| section | 80px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 2px | `--radius-xs` |
| sm | 3px | `--radius-sm` |
| md | 4px | `--radius-md` |
| pill | 46px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 80px
- **Card padding:** 20px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `14px 24px`
- **height:** `48px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.primary-deep}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xs}`

### button secondary dark
**Role:** button secondary dark component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `14px 24px`

### button outline dark
**Role:** button outline dark component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `13px 23px`

### button outline light
**Role:** button outline light component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `13px 23px`

### button pill
**Role:** button pill component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`
- **height:** `36px`

### button icon square
**Role:** button icon square component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.xs}`
- **size:** `40px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `12px 16px`
- **height:** `48px`

### hero banner
**Role:** hero banner component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.none}`
- **padding:** `0`

### promo tile light
**Role:** promo tile light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.heading-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `32px`

### promo tile dark
**Role:** promo tile dark component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.heading-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `32px`

### promo tile yellow
**Role:** promo tile yellow component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.heading-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `32px`

### vehicle card
**Role:** vehicle card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.none}`
- **padding:** `0`

### configurator row
**Role:** configurator row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `24px 0`

### configurator swatch
**Role:** configurator swatch component

- **backgroundColor:** `{colors.surface-soft}`
- **rounded:** `{rounded.full}`
- **size:** `56px`

### badge new
**Role:** badge new component

- **backgroundColor:** `{colors.badge-new}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `6px 14px`

### nav bar
**Role:** nav bar component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.none}`
- **height:** `60px`

### sub nav pill
**Role:** sub nav pill component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `64px 24px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Renault website](https://www.renault.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.renault.com/).
