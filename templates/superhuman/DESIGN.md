# Superhumon-Inspired — Style Reference
> An inspired interpretation of Superhumon's design language — a fast-email productivity brand split between an editorial dark hero (deep indigo navy with violet-sky atmospheric backdrop and a portrait subject) and a quiet white content body with off-warm-grey ink. The system uses a single proprietary variable display sans, heavy weight 460–540 with tight tracking, and a deep-teal closing CTA band that breaks the indigo/white rhythm with a warm dark interlude. Buttons are tight rounded rectangles, pricing is sober and dense, and the brand reads more like a high-end newsletter than a SaaS app.

**Theme:** light

**Source website:** [https://superhuman.com/](https://superhuman.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#1b1938` | `--color-primary` | primary role extracted from the source design |
| primary deep | `#0e0c1f` | `--color-primary-deep` | primary deep role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#292827` | `--color-ink` | ink role extracted from the source design |
| ink mute | `#73706d` | `--color-ink-mute` | ink mute role extracted from the source design |
| ink faint | `#9a9794` | `--color-ink-faint` | ink faint role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#fafaf8` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| surface violet soft | `#c9b4fa` | `--color-surface-violet-soft` | surface violet soft role extracted from the source design |
| surface teal deep | `#0e3030` | `--color-surface-teal-deep` | surface teal deep role extracted from the source design |
| surface teal mid | `#155555` | `--color-surface-teal-mid` | surface teal mid role extracted from the source design |
| hairline | `#e8e4dd` | `--color-hairline` | hairline role extracted from the source design |
| hairline dark | `#3f3a52` | `--color-hairline-dark` | hairline dark role extracted from the source design |
| on dark mute | `#bcbac9` | `--color-on-dark-mute` | on dark mute role extracted from the source design |
| on dark faint | `#5a5772` | `--color-on-dark-faint` | on dark faint role extracted from the source design |

## Tokens — Typography

### 'Super Sans VF', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 540, 460, 700, 600
- **Sizes:** 64px, 48px, 28px, 22px, 20px, 18px, 16px, 18.72px, 14px, 12px
- **Line height:** 0.96, 1.14, 1.1, 1.2, 1.5, 1, 1.4
- **Letter spacing:** 0, -1.32px, -0.63px, -0.315px, -0.4px, -0.135px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 64px | 0.96 | 0 | `--text-display-xxl` |
| display-xl | 48px | 0.96 | -1.32px | `--text-display-xl` |
| display-lg | 28px | 1.14 | -0.63px | `--text-display-lg` |
| display-md | 22px | 1.1 | -0.315px | `--text-display-md` |
| heading-lg | 20px | 1.2 | -0.4px | `--text-heading-lg` |
| body-lg | 18px | 1.5 | -0.135px | `--text-body-lg` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-strong | 18.72px | 1.5 | 0 | `--text-body-strong` |
| button-md | 16px | 1 | 0 | `--text-button-md` |
| button-cap | 14px | 1 | 0 | `--text-button-cap` |
| caption | 14px | 1.4 | 0 | `--text-caption` |
| micro | 12px | 1.4 | 0 | `--text-micro` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 2px | `--spacing-xxs` |
| xs | 4px | `--spacing-xs` |
| sm | 8px | `--spacing-sm` |
| md | 12px | `--spacing-md` |
| lg | 16px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| xxl | 32px | `--spacing-xxl` |
| huge | 64px | `--spacing-huge` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 32px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### button primary dark
**Role:** button primary dark component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`

### button primary dark pressed
**Role:** button primary dark pressed component

- **backgroundColor:** `{colors.primary-deep}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`

### button on dark pill
**Role:** button on dark pill component

- **backgroundColor:** `{colors.surface-violet-soft}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `12px 20px`

### button secondary outline
**Role:** button secondary outline component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`

### button on teal
**Role:** button on teal component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.surface-teal-deep}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `10px 12px`

### card feature light
**Role:** card feature light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card pricing
**Role:** card pricing component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card pricing featured
**Role:** card pricing featured component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card teal band
**Role:** card teal band component

- **backgroundColor:** `{colors.surface-teal-deep}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-lg}`
- **rounded:** `{rounded.lg}`
- **padding:** `64px`

### card feature row
**Role:** card feature row component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `24px`

### pill tab light
**Role:** pill tab light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-cap}`
- **rounded:** `{rounded.full}`
- **padding:** `8px 16px`

### nav bar dark
**Role:** nav bar dark component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `16px 24px`

### nav bar light
**Role:** nav bar light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `16px 24px`

### link on light
**Role:** link on light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `0px`

### footer light
**Role:** footer light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-mute}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.xs}`
- **padding:** `64px 24px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Superhumon-Inspired website](https://superhuman.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://superhuman.com/).
