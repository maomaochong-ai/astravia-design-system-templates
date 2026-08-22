# Expo — Style Reference
> A React Native developer-platform whose marketing site reads like a quietly-confident infrastructure brand. The base canvas is pure white with a soft sky-blue gradient atmospheric wash behind the hero; near-black ink (`#171717`) carries body and display alike. The single brand voltage is **pure black** (`#000000`) for primary CTAs — minimal and editorial-feeling, paired with a small blue text-link accent (`#0d74ce`) reserved for inline body links. Type pairs Inter at modest weights (display 600, body 400) with JetBrains Mono on every code surface. The brand's strongest visual signature is the **device-mockup hero** — a centered MacBook + iPhone composite showing real Expo dev surfaces — over the gradient sky wash.

**Theme:** light

**Source website:** [https://expo.dev/](https://expo.dev/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#000000` | `--color-primary` | primary role extracted from the source design |
| primary active | `#1a1a1a` | `--color-primary-active` | primary active role extracted from the source design |
| text link | `#0d74ce` | `--color-text-link` | text link role extracted from the source design |
| text link secondary | `#476cff` | `--color-text-link-secondary` | text link secondary role extracted from the source design |
| ink | `#171717` | `--color-ink` | ink role extracted from the source design |
| body | `#60646c` | `--color-body` | body role extracted from the source design |
| body strong | `#171717` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#999999` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#cccccc` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#f0f0f3` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#f5f5f7` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| hairline strong | `#dcdee0` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#fafafa` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| surface card | `#ffffff` | `--color-surface-card` | surface card role extracted from the source design |
| surface strong | `#f0f0f3` | `--color-surface-strong` | surface strong role extracted from the source design |
| surface dark | `#171717` | `--color-surface-dark` | surface dark role extracted from the source design |
| surface dark elevated | `#1a1a1a` | `--color-surface-dark-elevated` | surface dark elevated role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on dark soft | `#b0b4ba` | `--color-on-dark-soft` | on dark soft role extracted from the source design |
| gradient sky light | `#cfe7ff` | `--color-gradient-sky-light` | gradient sky light role extracted from the source design |
| gradient sky mid | `#a8c8e8` | `--color-gradient-sky-mid` | gradient sky mid role extracted from the source design |
| accent warning | `#ab6400` | `--color-accent-warning` | accent warning role extracted from the source design |
| accent preview | `#8145b5` | `--color-accent-preview` | accent preview role extracted from the source design |
| accent link bright | `#47c2ff` | `--color-accent-link-bright` | accent link bright role extracted from the source design |
| semantic error | `#eb8e90` | `--color-semantic-error` | semantic error role extracted from the source design |
| semantic success | `#16a34a` | `--color-semantic-success` | semantic success role extracted from the source design |

## Tokens — Typography

### 'Inter', -apple-system, system-ui, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600
- **Sizes:** 64px
- **Line height:** 1.05
- **Letter spacing:** -1.92px
- **Role:** Brand typography family observed across the documented type scale.

### 'Inter', sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 400, 500
- **Sizes:** 48px, 36px, 28px, 22px, 18px, 16px, 14px, 13px, 11px
- **Line height:** 1.1, 1.15, 1.2, 1.25, 1.4, 1.5, 1
- **Letter spacing:** -1.44px, -1.08px, -0.84px, -0.5px, 0, 0.88px
- **Role:** Brand typography family observed across the documented type scale.

### 'JetBrains Mono', 'Fira Code', monospace · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-mega | 64px | 1.05 | -1.92px | `--text-display-mega` |
| display-xl | 48px | 1.1 | -1.44px | `--text-display-xl` |
| display-lg | 36px | 1.15 | -1.08px | `--text-display-lg` |
| display-md | 28px | 1.2 | -0.84px | `--text-display-md` |
| display-sm | 22px | 1.25 | -0.5px | `--text-display-sm` |
| title-md | 18px | 1.4 | 0 | `--text-title-md` |
| title-sm | 16px | 1.4 | 0 | `--text-title-sm` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-sm | 14px | 1.5 | 0 | `--text-body-sm` |
| caption | 13px | 1.4 | 0 | `--text-caption` |
| caption-uppercase | 11px | 1.4 | 0.88px | `--text-caption-uppercase` |
| code | 13px | 1.5 | 0 | `--text-code` |
| button | 14px | 1 | 0 | `--text-button` |
| nav-link | 14px | 1.4 | 0 | `--text-nav-link` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 8px | `--spacing-xs` |
| sm | 12px | `--spacing-sm` |
| base | 16px | `--spacing-base` |
| md | 20px | `--spacing-md` |
| lg | 24px | `--spacing-lg` |
| xl | 32px | `--spacing-xl` |
| xxl | 48px | `--spacing-xxl` |
| section | 96px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| xxl | 24px | `--radius-xxl` |
| pill | 9999px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 20px
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
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`
- **height:** `40px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary-active}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `9px 17px`
- **height:** `40px`

### button tertiary text
**Role:** button tertiary text component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.text-link}`
- **typography:** `{typography.button}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-mega}`
- **padding:** `96px`

### device mockup card
**Role:** device mockup card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.xl}`
- **padding:** `0`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### feature card dark
**Role:** feature card dark component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### workflow step card
**Role:** workflow step card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `20px`

### workflow step icon
**Role:** workflow step icon component

- **backgroundColor:** `{colors.surface-strong}`
- **rounded:** `{rounded.md}`
- **size:** `32px`

### code block
**Role:** code block component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.lg}`
- **padding:** `20px`

### ide mockup card
**Role:** ide mockup card component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.lg}`
- **padding:** `0`

### pricing tier card
**Role:** pricing tier card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing tier featured
**Role:** pricing tier featured component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 16px`
- **height:** `44px`

### badge pill
**Role:** badge pill component

- **backgroundColor:** `{colors.surface-strong}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### ecosystem tile
**Role:** ecosystem tile component

- **backgroundColor:** `{colors.surface-card}`
- **rounded:** `{rounded.md}`
- **size:** `64px`

### cta band
**Role:** cta band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `96px`

### testimonial card
**Role:** testimonial card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### footer light
**Role:** footer light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `64px 48px`

### footer link
**Role:** footer link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Expo website](https://expo.dev/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-text-link` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://expo.dev/).
