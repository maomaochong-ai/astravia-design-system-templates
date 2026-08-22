# BMW — Style Reference
> BMW's corporate site — distinct from BMW M's motorsport-bombastic variant, this is a measured and settled corporate-automotive interface. On a light (cream-tinted white) canvas, BMW corporate blue (#1c69d4) carries every primary CTA; dark navy hero bands frame model photography. BMW Type Next Latin sets the entire hierarchy on two weights — heavy 700 display and Light 300 body. Configuration and reservation flows ride a card-based 4-up grid, where each card holds a model render, a name, and a "Learn More" link.

**Theme:** light

**Source website:** [https://www.bmw.com/](https://www.bmw.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#1c69d4` | `--color-primary` | primary role extracted from the source design |
| primary active | `#0653b6` | `--color-primary-active` | primary active role extracted from the source design |
| primary disabled | `#d6d6d6` | `--color-primary-disabled` | primary disabled role extracted from the source design |
| ink | `#262626` | `--color-ink` | ink role extracted from the source design |
| body | `#3c3c3c` | `--color-body` | body role extracted from the source design |
| body strong | `#1a1a1a` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#6b6b6b` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#9a9a9a` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#e6e6e6` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#cccccc` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#f7f7f7` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#fafafa` | `--color-surface-card` | surface card role extracted from the source design |
| surface strong | `#ebebeb` | `--color-surface-strong` | surface strong role extracted from the source design |
| surface dark | `#1a2129` | `--color-surface-dark` | surface dark role extracted from the source design |
| surface dark elevated | `#262e38` | `--color-surface-dark-elevated` | surface dark elevated role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on dark soft | `#bbbbbb` | `--color-on-dark-soft` | on dark soft role extracted from the source design |
| m blue light | `#0066b1` | `--color-m-blue-light` | m blue light role extracted from the source design |
| m blue dark | `#1c69d4` | `--color-m-blue-dark` | m blue dark role extracted from the source design |
| m red | `#e22718` | `--color-m-red` | m red role extracted from the source design |
| success | `#22c55e` | `--color-success` | success role extracted from the source design |
| warning | `#f59e0b` | `--color-warning` | warning role extracted from the source design |
| error | `#dc2626` | `--color-error` | error role extracted from the source design |

## Tokens — Typography

### 'BMW Type Next Latin', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700
- **Sizes:** 64px
- **Line height:** 1.05
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### 'BMW Type Next Latin', sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 300, 400
- **Sizes:** 48px, 32px, 24px, 20px, 18px, 16px, 14px, 12px, 13px
- **Line height:** 1.1, 1.15, 1.25, 1.3, 1.4, 1.55, 1
- **Letter spacing:** 0, 0.5px, 1.5px, 0.3px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 64px | 1.05 | 0 | `--text-display-xl` |
| display-lg | 48px | 1.1 | 0 | `--text-display-lg` |
| display-md | 32px | 1.15 | 0 | `--text-display-md` |
| display-sm | 24px | 1.25 | 0 | `--text-display-sm` |
| title-lg | 20px | 1.3 | 0 | `--text-title-lg` |
| title-md | 18px | 1.4 | 0 | `--text-title-md` |
| title-sm | 16px | 1.4 | 0 | `--text-title-sm` |
| body-md | 16px | 1.55 | 0 | `--text-body-md` |
| body-sm | 14px | 1.55 | 0 | `--text-body-sm` |
| caption | 12px | 1.4 | 0.5px | `--text-caption` |
| label-uppercase | 13px | 1.3 | 1.5px | `--text-label-uppercase` |
| button | 14px | 1 | 0.5px | `--text-button` |
| nav-link | 14px | 1.4 | 0.3px | `--text-nav-link` |

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
| xl | 32px | `--spacing-xl` |
| xxl | 48px | `--spacing-xxl` |
| section | 80px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 2px | `--radius-xs` |
| sm | 4px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| pill | 9999px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.nav-link}`
- **height:** `64px`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `14px 32px`
- **height:** `48px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary-active}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.none}`

### button primary disabled
**Role:** button primary disabled component

- **backgroundColor:** `{colors.primary-disabled}`
- **textColor:** `{colors.muted}`
- **rounded:** `{rounded.none}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `13px 31px`
- **height:** `48px`

### button secondary on dark
**Role:** button secondary on dark component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `13px 31px`

### button text link
**Role:** button text link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.label-uppercase}`

### text link
**Role:** text link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xl}`
- **padding:** `80px`

### hero photo band
**Role:** hero photo band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `80px`

### model card
**Role:** model card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### model card photo
**Role:** model card photo component

- **backgroundColor:** `{colors.surface-card}`
- **rounded:** `{rounded.none}`

### feature photo card
**Role:** feature photo card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### spec cell
**Role:** spec cell component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### inventory card
**Role:** inventory card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `16px`

### filter chip
**Role:** filter chip component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.none}`
- **padding:** `8px 14px`

### filter chip active
**Role:** filter chip active component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.none}`

### configurator option tile
**Role:** configurator option tile component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `16px 24px`

### configurator option tile selected
**Role:** configurator option tile selected component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.none}`
- **padding:** `15px 23px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `14px 16px`
- **height:** `48px`

### cookie consent card
**Role:** cookie consent card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### category tab
**Role:** category tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.label-uppercase}`
- **rounded:** `{rounded.none}`

### category tab active
**Role:** category tab active component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.label-uppercase}`
- **rounded:** `{rounded.none}`

### m stripe divider
**Role:** m stripe divider component

- **backgroundColor:** `transparent`
- **rounded:** `{rounded.none}`

### cta band photo
**Role:** cta band photo component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-md}`
- **padding:** `80px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `64px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live BMW website](https://www.bmw.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.bmw.com/).
