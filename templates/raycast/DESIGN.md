# Raycast — Style Reference
> Raycast's marketing system reads like an extended product screenshot. The chrome IS the in-product chrome at marketing scale: pure-near-black canvas, hairline 1px borders, command-palette-style cards, Inter typography with the ss03 stylistic set enabled site-wide, white CTA pill, and a small set of saturated category accent colors (yellow / red / green / blue) reserved for extension and feature illustrations. Section rhythm is generous (~96px) but the page never breaks tonal continuity — the whole site sits in one continuous dark mode.

**Theme:** dark

**Source website:** [https://www.raycast.com/](https://www.raycast.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#ffffff` | `--color-primary` | primary role extracted from the source design |
| primary pressed | `#e8e8e8` | `--color-primary-pressed` | primary pressed role extracted from the source design |
| on primary | `#000000` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#f4f4f6` | `--color-ink` | ink role extracted from the source design |
| body | `#cdcdcd` | `--color-body` | body role extracted from the source design |
| charcoal | `#d3d3d4` | `--color-charcoal` | charcoal role extracted from the source design |
| mute | `#9c9c9d` | `--color-mute` | mute role extracted from the source design |
| ash | `#6a6b6c` | `--color-ash` | ash role extracted from the source design |
| stone | `#434345` | `--color-stone` | stone role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on dark mute | `rgba(255,255,255,0.72)` | `--color-on-dark-mute` | on dark mute role extracted from the source design |
| canvas | `#07080a` | `--color-canvas` | canvas role extracted from the source design |
| surface | `#0d0d0d` | `--color-surface` | surface role extracted from the source design |
| surface elevated | `#101111` | `--color-surface-elevated` | surface elevated role extracted from the source design |
| surface card | `#121212` | `--color-surface-card` | surface card role extracted from the source design |
| button fg | `#18191a` | `--color-button-fg` | button fg role extracted from the source design |
| hairline | `#242728` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `rgba(255,255,255,0.08)` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| hairline strong | `rgba(255,255,255,0.16)` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| accent blue | `#57c1ff` | `--color-accent-blue` | accent blue role extracted from the source design |
| accent blue soft | `rgba(87,193,255,0.15)` | `--color-accent-blue-soft` | accent blue soft role extracted from the source design |
| accent red | `#ff6161` | `--color-accent-red` | accent red role extracted from the source design |
| accent red soft | `rgba(255,97,97,0.15)` | `--color-accent-red-soft` | accent red soft role extracted from the source design |
| accent green | `#59d499` | `--color-accent-green` | accent green role extracted from the source design |
| accent green soft | `rgba(89,212,153,0.15)` | `--color-accent-green-soft` | accent green soft role extracted from the source design |
| accent yellow | `#ffc533` | `--color-accent-yellow` | accent yellow role extracted from the source design |
| accent yellow soft | `rgba(255,197,51,0.15)` | `--color-accent-yellow-soft` | accent yellow soft role extracted from the source design |
| hero stripe start | `#ff5757` | `--color-hero-stripe-start` | hero stripe start role extracted from the source design |
| hero stripe end | `#a1131a` | `--color-hero-stripe-end` | hero stripe end role extracted from the source design |
| key bg start | `#121212` | `--color-key-bg-start` | key bg start role extracted from the source design |
| key bg end | `#0d0d0d` | `--color-key-bg-end` | key bg end role extracted from the source design |

## Tokens — Typography

### Inter · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 500, 400
- **Sizes:** 64px, 56px, 24px, 22px, 20px, 18px, 16px, 14px, 13px, 12px
- **Line height:** 1.1, 1.17, 1.6, 1.15, 1.4, 1.5
- **Letter spacing:** 0, 0.2px, 0.1px, 0.4px, 0.3px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 64px | 1.1 | 0 | `--text-display-xl` |
| display-lg | 56px | 1.17 | 0.2px | `--text-display-lg` |
| heading-xl | 24px | 1.6 | 0.2px | `--text-heading-xl` |
| heading-lg | 22px | 1.15 | 0 | `--text-heading-lg` |
| heading-md | 20px | 1.4 | 0.2px | `--text-heading-md` |
| heading-sm | 18px | 1.4 | 0.2px | `--text-heading-sm` |
| body-lg | 18px | 1.6 | 0 | `--text-body-lg` |
| body-md | 16px | 1.6 | 0 | `--text-body-md` |
| body-strong | 16px | 1.4 | 0.2px | `--text-body-strong` |
| body-sm | 14px | 1.6 | 0 | `--text-body-sm` |
| body-sm-strong | 14px | 1.6 | 0.2px | `--text-body-sm-strong` |
| caption-md | 13px | 1.4 | 0.1px | `--text-caption-md` |
| caption-sm | 12px | 1.5 | 0.4px | `--text-caption-sm` |
| link-md | 16px | 1.4 | 0.3px | `--text-link-md` |
| button-md | 14px | 1.6 | 0.2px | `--text-button-md` |

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
| section | 96px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 10px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 96px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 16px`
- **height:** `36px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.primary-pressed}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 16px`
- **height:** `36px`

### button tertiary
**Role:** button tertiary component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 16px`
- **height:** `36px`

### button disabled
**Role:** button disabled component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.ash}`
- **rounded:** `{rounded.md}`

### install button
**Role:** install button component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `6px 14px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 12px`
- **height:** `36px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.md}`

### store search bar
**Role:** store search bar component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 16px`
- **height:** `44px`

### command palette row
**Role:** command palette row component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `6px 10px`

### command palette row active
**Role:** command palette row active component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`

### pill tab
**Role:** pill tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `4px 10px`

### pill tab active
**Role:** pill tab active component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.full}`

### badge pro
**Role:** badge pro component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark-mute}`
- **typography:** `{typography.caption-sm}`
- **rounded:** `{rounded.xs}`
- **padding:** `2px 6px`

### badge info soft
**Role:** badge info soft component

- **backgroundColor:** `{colors.accent-blue-soft}`
- **textColor:** `{colors.accent-blue}`
- **typography:** `{typography.caption-sm}`
- **rounded:** `{rounded.xs}`
- **padding:** `2px 8px`

### keycap
**Role:** keycap component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.caption-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `1px 6px`
- **height:** `20px`

### command palette card
**Role:** command palette card component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `0px`

### feature card dark
**Role:** feature card dark component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### feature card elevated
**Role:** feature card elevated component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### store extension card
**Role:** store extension card component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `16px`

### pricing tier card
**Role:** pricing tier card component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### pricing tier card featured
**Role:** pricing tier card featured component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### hero stripe band
**Role:** hero stripe band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xl}`
- **rounded:** `{rounded.none}`
- **padding:** `96px 48px`

### app icon tile
**Role:** app icon tile component

- **backgroundColor:** `{colors.surface-card}`
- **rounded:** `{rounded.md}`
- **size:** `48px`

### app icon tile large
**Role:** app icon tile large component

- **backgroundColor:** `{colors.surface-card}`
- **rounded:** `{rounded.md}`
- **size:** `64px`

### primary nav
**Role:** primary nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.none}`
- **height:** `56px`

### footer section
**Role:** footer section component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `64px 48px`

### link inline
**Role:** link inline component

- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.link-md}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Raycast website](https://www.raycast.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.raycast.com/).
