# Supabaze-Inspired — Style Reference
> An inspired interpretation of Supabaze's design language — an open-source database platform built on a clean white-and-near-black system with a single signature emerald-green CTA, a custom humanist sans display tier, and dense product UI mockups composited above the hero. The brand reads as quietly technical: minimal chrome, a near-monochrome palette, and the green primary acting as the only chromatic event on the page.

**Theme:** light

**Source website:** [https://supabase.com/](https://supabase.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#3ecf8e` | `--color-primary` | primary role extracted from the source design |
| primary deep | `#24b47e` | `--color-primary-deep` | primary deep role extracted from the source design |
| primary soft | `#4ade80` | `--color-primary-soft` | primary soft role extracted from the source design |
| ink | `#171717` | `--color-ink` | ink role extracted from the source design |
| ink secondary | `#212121` | `--color-ink-secondary` | ink secondary role extracted from the source design |
| ink mute | `#707070` | `--color-ink-mute` | ink mute role extracted from the source design |
| ink mute 2 | `#9a9a9a` | `--color-ink-mute-2` | ink mute 2 role extracted from the source design |
| ink faint | `#b2b2b2` | `--color-ink-faint` | ink faint role extracted from the source design |
| on primary | `#171717` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#fafafa` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| canvas night | `#1c1c1c` | `--color-canvas-night` | canvas night role extracted from the source design |
| canvas night soft | `#202020` | `--color-canvas-night-soft` | canvas night soft role extracted from the source design |
| hairline | `#dfdfdf` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#c7c7c7` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| hairline cool | `#ededed` | `--color-hairline-cool` | hairline cool role extracted from the source design |
| hairline cool 2 | `#efefef` | `--color-hairline-cool-2` | hairline cool 2 role extracted from the source design |
| hairline cool 3 | `#d4d4d4` | `--color-hairline-cool-3` | hairline cool 3 role extracted from the source design |
| accent purple | `#6b01c2` | `--color-accent-purple` | accent purple role extracted from the source design |
| accent violet | `#644fc1` | `--color-accent-violet` | accent violet role extracted from the source design |
| accent purple soft | `#eddbf9` | `--color-accent-purple-soft` | accent purple soft role extracted from the source design |
| accent yellow | `#ffdb13` | `--color-accent-yellow` | accent yellow role extracted from the source design |
| accent tomato | `#ff2201` | `--color-accent-tomato` | accent tomato role extracted from the source design |
| accent pink | `#c7007e` | `--color-accent-pink` | accent pink role extracted from the source design |
| accent indigo | `#054cff` | `--color-accent-indigo` | accent indigo role extracted from the source design |
| accent crimson | `#e2005a` | `--color-accent-crimson` | accent crimson role extracted from the source design |

## Tokens — Typography

### Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400
- **Sizes:** 64px, 48px, 36px, 28px, 22px, 18px, 16px, 14px, 13px, 12px
- **Line height:** 1.1, 1.15, 1.2, 1.4, 1.55, 1.5, 1, 1.45
- **Letter spacing:** -1.92px, -1.44px, -0.72px, -0.42px, 0
- **Role:** Brand typography family observed across the documented type scale.

### ui-monospace, Menlo, Monaco, Consolas, 'Liberation Mono', monospace · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 64px | 1.1 | -1.92px | `--text-display-xxl` |
| display-xl | 48px | 1.1 | -1.44px | `--text-display-xl` |
| display-lg | 36px | 1.15 | -0.72px | `--text-display-lg` |
| display-md | 28px | 1.2 | -0.42px | `--text-display-md` |
| heading-lg | 22px | 1.2 | 0 | `--text-heading-lg` |
| heading-md | 18px | 1.4 | 0 | `--text-heading-md` |
| body-lg | 18px | 1.55 | 0 | `--text-body-lg` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| button-md | 14px | 1 | 0 | `--text-button-md` |
| caption | 13px | 1.45 | 0 | `--text-caption` |
| micro | 12px | 1.45 | 0 | `--text-micro` |
| code | 14px | 1.5 | 0 | `--text-code` |

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

### button primary green
**Role:** button primary green component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 16px`

### button primary green pressed
**Role:** button primary green pressed component

- **backgroundColor:** `{colors.primary-deep}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 16px`

### button secondary outline
**Role:** button secondary outline component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 16px`

### button on dark
**Role:** button on dark component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 16px`

### button link
**Role:** button link component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `0px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 12px`

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

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card feature dark
**Role:** card feature dark component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### code block
**Role:** code block component

- **backgroundColor:** `{colors.canvas-night}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.sm}`
- **padding:** `16px`

### pill tag green
**Role:** pill tag green component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.micro}`
- **rounded:** `{rounded.full}`
- **padding:** `2px 8px`

### pill tag soft
**Role:** pill tag soft component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.micro}`
- **rounded:** `{rounded.full}`
- **padding:** `2px 8px`

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
- Compare major implementation decisions against [the live Supabaze-Inspired website](https://supabase.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://supabase.com/).
