# Apple — Style Reference
> A photography-first interface that turns marketing into a museum gallery. Edge-to-edge product tiles alternate light and dark canvases, framed by SF Pro Display headlines with negative letter-spacing and a single Action Blue (#0066cc) interactive color. UI chrome recedes so the product can speak — no decorative gradients, no shadows on chrome, only the one signature drop-shadow under product imagery resting on a surface.

**Theme:** light

**Source website:** [https://www.apple.com/](https://www.apple.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#0066cc` | `--color-primary` | primary role extracted from the source design |
| primary focus | `#0071e3` | `--color-primary-focus` | primary focus role extracted from the source design |
| primary on dark | `#2997ff` | `--color-primary-on-dark` | primary on dark role extracted from the source design |
| ink | `#1d1d1f` | `--color-ink` | ink role extracted from the source design |
| body | `#1d1d1f` | `--color-body` | body role extracted from the source design |
| body on dark | `#ffffff` | `--color-body-on-dark` | body on dark role extracted from the source design |
| body muted | `#cccccc` | `--color-body-muted` | body muted role extracted from the source design |
| ink muted 80 | `#333333` | `--color-ink-muted-80` | ink muted 80 role extracted from the source design |
| ink muted 48 | `#7a7a7a` | `--color-ink-muted-48` | ink muted 48 role extracted from the source design |
| divider soft | `#f0f0f0` | `--color-divider-soft` | divider soft role extracted from the source design |
| hairline | `#e0e0e0` | `--color-hairline` | hairline role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas parchment | `#f5f5f7` | `--color-canvas-parchment` | canvas parchment role extracted from the source design |
| surface pearl | `#fafafc` | `--color-surface-pearl` | surface pearl role extracted from the source design |
| surface tile 1 | `#272729` | `--color-surface-tile-1` | surface tile 1 role extracted from the source design |
| surface tile 2 | `#2a2a2c` | `--color-surface-tile-2` | surface tile 2 role extracted from the source design |
| surface tile 3 | `#252527` | `--color-surface-tile-3` | surface tile 3 role extracted from the source design |
| surface black | `#000000` | `--color-surface-black` | surface black role extracted from the source design |
| surface chip translucent | `#d2d2d7` | `--color-surface-chip-translucent` | surface chip translucent role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |

## Tokens — Typography

### SF Pro Display, system-ui, -apple-system, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 400
- **Sizes:** 56px, 40px, 28px, 21px
- **Line height:** 1.07, 1.1, 1.14, 1.19
- **Letter spacing:** -0.28px, 0, 0.196px, 0.231px
- **Role:** Brand typography family observed across the documented type scale.

### SF Pro Text, system-ui, -apple-system, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 300, 400
- **Sizes:** 34px, 24px, 17px, 14px, 18px, 12px, 10px
- **Line height:** 1.47, 1.5, 1.24, 2.41, 1.43, 1.29, 1, 1.3
- **Letter spacing:** -0.374px, 0, -0.224px, -0.12px, -0.08px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| hero-display | 56px | 1.07 | -0.28px | `--text-hero-display` |
| display-lg | 40px | 1.1 | 0 | `--text-display-lg` |
| display-md | 34px | 1.47 | -0.374px | `--text-display-md` |
| lead | 28px | 1.14 | 0.196px | `--text-lead` |
| lead-airy | 24px | 1.5 | 0 | `--text-lead-airy` |
| tagline | 21px | 1.19 | 0.231px | `--text-tagline` |
| body-strong | 17px | 1.24 | -0.374px | `--text-body-strong` |
| body | 17px | 1.47 | -0.374px | `--text-body` |
| dense-link | 17px | 2.41 | 0 | `--text-dense-link` |
| caption | 14px | 1.43 | -0.224px | `--text-caption` |
| caption-strong | 14px | 1.29 | -0.224px | `--text-caption-strong` |
| button-large | 18px | 1 | 0 | `--text-button-large` |
| button-utility | 14px | 1.29 | -0.224px | `--text-button-utility` |
| fine-print | 12px | 1 | -0.12px | `--text-fine-print` |
| micro-legal | 10px | 1.3 | -0.08px | `--text-micro-legal` |
| nav-link | 12px | 1 | -0.12px | `--text-nav-link` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 8px | `--spacing-xs` |
| sm | 12px | `--spacing-sm` |
| md | 17px | `--spacing-md` |
| lg | 24px | `--spacing-lg` |
| xl | 32px | `--spacing-xl` |
| xxl | 48px | `--spacing-xxl` |
| section | 80px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 5px | `--radius-xs` |
| sm | 8px | `--radius-sm` |
| md | 11px | `--radius-md` |
| lg | 18px | `--radius-lg` |
| pill | 9999px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 17px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.pill}`
- **padding:** `11px 22px`

### button primary focus
**Role:** button primary focus component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.pill}`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.pill}`

### button secondary pill
**Role:** button secondary pill component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.pill}`
- **padding:** `11px 22px`

### button dark utility
**Role:** button dark utility component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-utility}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 15px`

### button pearl capsule
**Role:** button pearl capsule component

- **backgroundColor:** `{colors.surface-pearl}`
- **textColor:** `{colors.ink-muted-80}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 14px`

### button store hero
**Role:** button store hero component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-large}`
- **rounded:** `{rounded.pill}`
- **padding:** `14px 28px`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.surface-chip-translucent}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **size:** `44px`

### text link
**Role:** text link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.body}`

### text link on dark
**Role:** text link on dark component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.primary-on-dark}`
- **typography:** `{typography.body}`

### global nav
**Role:** global nav component

- **backgroundColor:** `{colors.surface-black}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.nav-link}`
- **height:** `44px`

### sub nav frosted
**Role:** sub nav frosted component

- **backgroundColor:** `{colors.canvas-parchment}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.tagline}`
- **height:** `52px`

### product tile light
**Role:** product tile light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `80px`

### product tile parchment
**Role:** product tile parchment component

- **backgroundColor:** `{colors.canvas-parchment}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `80px`

### product tile dark
**Role:** product tile dark component

- **backgroundColor:** `{colors.surface-tile-1}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `80px`

### product tile dark 2
**Role:** product tile dark 2 component

- **backgroundColor:** `{colors.surface-tile-2}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.none}`

### product tile dark 3
**Role:** product tile dark 3 component

- **backgroundColor:** `{colors.surface-tile-3}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.none}`

### store utility card
**Role:** store utility card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-strong}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### configurator option chip
**Role:** configurator option chip component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.pill}`
- **padding:** `12px 16px`

### configurator option chip selected
**Role:** configurator option chip selected component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.pill}`

### search input
**Role:** search input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.pill}`
- **padding:** `12px 20px`
- **height:** `44px`

### floating sticky bar
**Role:** floating sticky bar component

- **backgroundColor:** `{colors.canvas-parchment}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **height:** `64px`
- **padding:** `12px 32px`

### environment quote card
**Role:** environment quote card component

- **backgroundColor:** `{colors.surface-tile-1}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-lg}`
- **rounded:** `{rounded.none}`
- **padding:** `80px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas-parchment}`
- **textColor:** `{colors.ink-muted-80}`
- **typography:** `{typography.fine-print}`
- **padding:** `64px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Apple website](https://www.apple.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.apple.com/).
