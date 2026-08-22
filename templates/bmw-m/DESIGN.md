# BMW-M — Style Reference
> A motorsport-engineering interface anchored on a near-black canvas with white BMW Type Next Latin display headlines in confident UPPERCASE. The brand carries no decorative voltage — its energy comes from full-bleed automotive photography (cars on tracks, driver-cockpit shots, carbon-fiber detail) and the iconic M tricolor stripe (light blue → dark blue → red) used sparingly as a brand signature on logos, dividers, and motorsport chrome. Type stays light to medium weight to feel European-engineered, never American-bombastic.

**Theme:** dark

**Source website:** [https://www.bmw-m.com/](https://www.bmw-m.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#ffffff` | `--color-primary` | primary role extracted from the source design |
| ink | `#ffffff` | `--color-ink` | ink role extracted from the source design |
| body | `#bbbbbb` | `--color-body` | body role extracted from the source design |
| body strong | `#e6e6e6` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#7e7e7e` | `--color-muted` | muted role extracted from the source design |
| hairline | `#3c3c3c` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#262626` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#000000` | `--color-canvas` | canvas role extracted from the source design |
| surface card | `#1a1a1a` | `--color-surface-card` | surface card role extracted from the source design |
| surface elevated | `#262626` | `--color-surface-elevated` | surface elevated role extracted from the source design |
| surface soft | `#0d0d0d` | `--color-surface-soft` | surface soft role extracted from the source design |
| on primary | `#000000` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| m blue light | `#0066b1` | `--color-m-blue-light` | m blue light role extracted from the source design |
| m blue dark | `#1c69d4` | `--color-m-blue-dark` | m blue dark role extracted from the source design |
| m red | `#e22718` | `--color-m-red` | m red role extracted from the source design |
| bmw blue | `#1c69d4` | `--color-bmw-blue` | bmw blue role extracted from the source design |
| electric blue | `#0653b6` | `--color-electric-blue` | electric blue role extracted from the source design |
| carbon gray | `#2b2b2b` | `--color-carbon-gray` | carbon gray role extracted from the source design |
| warning | `#f4b400` | `--color-warning` | warning role extracted from the source design |
| success | `#0fa336` | `--color-success` | success role extracted from the source design |

## Tokens — Typography

### BMWTypeNextLatin, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 400
- **Sizes:** 80px, 56px, 40px, 32px, 24px, 20px, 18px, 14px, 12px
- **Line height:** 1, 1.05, 1.1, 1.15, 1.3, 1.4
- **Letter spacing:** 0, 1.5px, 0.5px
- **Role:** Brand typography family observed across the documented type scale.

### BMWTypeNextLatin Light, BMWTypeNextLatin, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 300
- **Sizes:** 16px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### BMWTypeNextLatin Light, sans-serif · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 300
- **Sizes:** 14px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 80px | 1 | 0 | `--text-display-xl` |
| display-lg | 56px | 1.05 | 0 | `--text-display-lg` |
| display-md | 40px | 1.1 | 0 | `--text-display-md` |
| display-sm | 32px | 1.15 | 0 | `--text-display-sm` |
| title-lg | 24px | 1.3 | 0 | `--text-title-lg` |
| title-md | 20px | 1.4 | 0 | `--text-title-md` |
| title-sm | 18px | 1.4 | 0 | `--text-title-sm` |
| label-uppercase | 14px | 1.3 | 1.5px | `--text-label-uppercase` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-sm | 14px | 1.5 | 0 | `--text-body-sm` |
| caption | 12px | 1.4 | 0.5px | `--text-caption` |
| button | 14px | 1 | 1.5px | `--text-button` |
| nav-link | 14px | 1.4 | 0.5px | `--text-nav-link` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 8px | `--spacing-xs` |
| sm | 12px | `--spacing-sm` |
| md | 16px | `--spacing-md` |
| lg | 24px | `--spacing-lg` |
| xl | 40px | `--spacing-xl` |
| xxl | 64px | `--spacing-xxl` |
| section | 96px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 2px | `--radius-xs` |
| sm | 4px | `--radius-sm` |
| md | 6px | `--radius-md` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `16px 32px`
- **height:** `48px`

### button primary outline
**Role:** button primary outline component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `16px 32px`
- **height:** `48px`

### button on light
**Role:** button on light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `16px 32px`

### button icon
**Role:** button icon component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.full}`
- **size:** `48px`

### text link
**Role:** text link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.label-uppercase}`

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.nav-link}`
- **height:** `64px`

### hero photo band
**Role:** hero photo band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xl}`
- **padding:** `96px`

### m stripe divider
**Role:** m stripe divider component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **height:** `4px`

### feature photo card
**Role:** feature photo card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### model card
**Role:** model card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### magazine article card
**Role:** magazine article card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### spec cell
**Role:** spec cell component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### cookie consent card
**Role:** cookie consent card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### category tab
**Role:** category tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.label-uppercase}`
- **padding:** `12px 0`

### category tab active
**Role:** category tab active component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.label-uppercase}`
- **padding:** `12px 0`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `12px 16px`
- **height:** `48px`

### chatbot launcher
**Role:** chatbot launcher component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### cta band photo
**Role:** cta band photo component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-md}`
- **padding:** `80px`

### motorsport photo card
**Role:** motorsport photo card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.none}`

### carousel arrow
**Role:** carousel arrow component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.full}`
- **size:** `48px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `64px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live BMW-M website](https://www.bmw-m.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.bmw-m.com/).
