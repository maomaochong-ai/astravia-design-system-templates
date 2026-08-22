# Vodafone-Inspired — Style Reference
> An inspired interpretation of Vodafone's design language — a telecom super-brand whose web surface alternates between editorial photography hero bands with massive uppercase display headlines and clean white content bands, anchored by the company's signature scarlet red CTA and the proprietary Vodafone display sans set at impossibly heavy 800 weight.

**Theme:** light

**Source website:** [https://www.vodafone.com/](https://www.vodafone.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#e60000` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#25282b` | `--color-ink` | ink role extracted from the source design |
| body | `#7e7e7e` | `--color-body` | body role extracted from the source design |
| mute | `#bebebe` | `--color-mute` | mute role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#f2f2f2` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |

## Tokens — Typography

### Vodafone, Vodafone Rg, Helvetica Neue, Arial, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 800, 300, 700, 400, 600
- **Sizes:** 144px, 126px, 90px, 48px, 40px, 32px, 24px, 16px, 22px, 18px, 14px, 12px
- **Line height:** 114px, 113px, 84px, 52px, 44px, 40px, 24px, 28px, 20px, 22px, 16px, 21px
- **Letter spacing:** -1px, 0, 0.5691px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-hero | 144px | 114px | -1px | `--text-display-hero` |
| display-xxl | 126px | 113px | -1px | `--text-display-xxl` |
| display-xl | 90px | 84px | 0 | `--text-display-xl` |
| display-lg | 48px | 52px | 0 | `--text-display-lg` |
| display-md | 40px | 44px | 0 | `--text-display-md` |
| display-sm | 32px | 40px | 0 | `--text-display-sm` |
| display-xs | 24px | 24px | 0 | `--text-display-xs` |
| eyebrow-uppercase | 16px | 24px | 0 | `--text-eyebrow-uppercase` |
| body-lg | 22px | 24px | 0 | `--text-body-lg` |
| body-md | 18px | 28px | 0 | `--text-body-md` |
| body-md-strong | 18px | 28px | 0 | `--text-body-md-strong` |
| body-sm | 16px | 20px | 0 | `--text-body-sm` |
| body-sm-strong | 16px | 22px | 0 | `--text-body-sm-strong` |
| caption | 14px | 16px | 0 | `--text-caption` |
| caption-strong | 14px | 21px | 0 | `--text-caption-strong` |
| caption-uppercase | 12px | 16px | 0.5691px | `--text-caption-uppercase` |
| button-md | 18px | 28px | 0 | `--text-button-md` |

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
| xl | 20px | `--spacing-xl` |
| 2xl | 24px | `--spacing-2xl` |
| 3xl | 32px | `--spacing-3xl` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 1px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| card | 6px | `--radius-card` |
| pill-md | 32px | `--radius-pill-md` |
| pill-lg | 60px | `--radius-pill-lg` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 64px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### nav bar
**Role:** nav bar component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.lg} {spacing.3xl}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **borderColor:** `{colors.primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill-lg}`
- **padding:** `{spacing.md} {spacing.2xl}`

### button outline red
**Role:** button outline red component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary}`
- **borderColor:** `{colors.primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill-lg}`
- **padding:** `{spacing.md} {spacing.2xl}`

### button outline dark
**Role:** button outline dark component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill-lg}`
- **padding:** `{spacing.md} {spacing.2xl}`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.canvas}`
- **rounded:** `{rounded.full}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### badge chip
**Role:** badge chip component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption-strong}`
- **rounded:** `{rounded.pill-md}`
- **padding:** `{spacing.xs} {spacing.md}`

### card content
**Role:** card content component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`

### card hero
**Role:** card hero component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-sm}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-hero}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### hero band red
**Role:** hero band red component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### content band light
**Role:** content band light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-md}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### speechmark logo orb
**Role:** speechmark logo orb component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.sm}`

### divider on dark
**Role:** divider on dark component

- **borderColor:** `{colors.on-dark}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default tier card. Mirrors card-content chrome with canvas-soft surface and a hairline border.`
- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.mute}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured tier — polarity-flipped to ink with white text and white pill CTA inside.`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`

### ex product selector
**Role:** ex product selector component

- **description:** `Tariff-tier picker — repurposed as the brand's plan selector with badge-chip chips inside the frame.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — line items per tariff add-on, light hairline dividers.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`
- **item-divider:** `{colors.mute}`

### ex app shell row
**Role:** ex app shell row component

- **description:** `Sidebar nav row. Active state uses brand primary as a left-edge indicator bar.`
- **backgroundColor:** `{colors.canvas}`
- **activeIndicator:** `{colors.primary}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### ex data table cell
**Role:** ex data table cell component

- **description:** `Default data-table cell chrome. Header uses caption-uppercase mono-style eyebrow; body uses body-sm.`
- **headerBackground:** `{colors.canvas-soft}`
- **headerTypography:** `{typography.caption-uppercase}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.md} {spacing.lg}`
- **rowBorder:** `{colors.mute}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Mirrors card-content chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as card-content; brand uses scrim, not card shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.lg}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame on canvas-soft with generous interior padding.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.card}`
- **padding:** `{spacing.3xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — card-content shape with caption-strong body.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Vodafone-Inspired website](https://www.vodafone.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.vodafone.com/).
