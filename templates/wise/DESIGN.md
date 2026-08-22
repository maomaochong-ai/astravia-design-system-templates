# Wise-Inspired — Style Reference
> An inspired interpretation of Wise's design language — a global money-transfer brand whose surface combines an unusually heavy near-black display sans (weight 900 at 64–126 px) with a vivid lime-green brand accent, sage-tinted surface neutrals, and rounded white cards on a pale green-tinted canvas; the whole system reads more like a Scandinavian fintech magazine than a bank.

**Theme:** light

**Source website:** [https://wise.com/](https://wise.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#9fe870` | `--color-primary` | primary role extracted from the source design |
| on primary | `#0e0f0c` | `--color-on-primary` | on primary role extracted from the source design |
| primary active | `#cdffad` | `--color-primary-active` | primary active role extracted from the source design |
| primary neutral | `#c5edab` | `--color-primary-neutral` | primary neutral role extracted from the source design |
| primary pale | `#e2f6d5` | `--color-primary-pale` | primary pale role extracted from the source design |
| ink | `#0e0f0c` | `--color-ink` | ink role extracted from the source design |
| ink deep | `#163300` | `--color-ink-deep` | ink deep role extracted from the source design |
| body | `#454745` | `--color-body` | body role extracted from the source design |
| mute | `#868685` | `--color-mute` | mute role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#e8ebe6` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| positive | `#2ead4b` | `--color-positive` | positive role extracted from the source design |
| positive deep | `#054d28` | `--color-positive-deep` | positive deep role extracted from the source design |
| warning | `#ffd11a` | `--color-warning` | warning role extracted from the source design |
| warning deep | `#b86700` | `--color-warning-deep` | warning deep role extracted from the source design |
| warning content | `#4a3b1c` | `--color-warning-content` | warning content role extracted from the source design |
| negative | `#d03238` | `--color-negative` | negative role extracted from the source design |
| negative deep | `#a72027` | `--color-negative-deep` | negative deep role extracted from the source design |
| negative darkest | `#a7000d` | `--color-negative-darkest` | negative darkest role extracted from the source design |
| negative bg | `#320707` | `--color-negative-bg` | negative bg role extracted from the source design |
| accent orange | `#ffc091` | `--color-accent-orange` | accent orange role extracted from the source design |
| accent cyan | `#38c8ff` | `--color-accent-cyan` | accent cyan role extracted from the source design |

## Tokens — Typography

### Wise Sans, Inter, system-ui, -apple-system, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 900
- **Sizes:** 126px
- **Line height:** 107.1px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Wise Sans, Inter, system-ui, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 900, 400
- **Sizes:** 96px, 64px, 47px, 40px
- **Line height:** 81.6px, 54.4px, 70.5px, 34px
- **Letter spacing:** 0, -0.108px
- **Role:** Brand typography family observed across the documented type scale.

### Inter, system-ui, sans-serif · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 400
- **Sizes:** 32px, 24px, 20px, 16px, 14px, 12px
- **Line height:** 38.4px, 31.2px, 30px, 24px, 20px, 16px
- **Letter spacing:** -0.96px, -0.48px, 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-mega | 126px | 107.1px | 0 | `--text-display-mega` |
| display-xxl | 96px | 81.6px | 0 | `--text-display-xxl` |
| display-xl | 64px | 54.4px | 0 | `--text-display-xl` |
| display-lg | 47px | 70.5px | -0.108px | `--text-display-lg` |
| display-md | 40px | 34px | 0 | `--text-display-md` |
| display-sm | 32px | 38.4px | -0.96px | `--text-display-sm` |
| display-xs | 24px | 31.2px | -0.48px | `--text-display-xs` |
| body-lg | 20px | 30px | 0 | `--text-body-lg` |
| body-md | 16px | 24px | 0 | `--text-body-md` |
| body-md-strong | 16px | 24px | 0 | `--text-body-md-strong` |
| body-sm | 14px | 20px | 0 | `--text-body-sm` |
| body-sm-strong | 14px | 20px | 0 | `--text-body-sm-strong` |
| caption | 12px | 16px | 0 | `--text-caption` |
| button-md | 16px | 24px | 0 | `--text-button-md` |

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
| 2xl | 32px | `--spacing-2xl` |
| 3xl | 48px | `--spacing-3xl` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| sm | 8px | `--radius-sm` |
| md | 12px | `--radius-md` |
| lg | 16px | `--radius-lg` |
| xl | 24px | `--radius-xl` |
| pill | 9999px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 64px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### nav bar
**Role:** nav bar component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-strong}`
- **padding:** `{spacing.md} {spacing.xl}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-strong}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.md} {spacing.xl}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.md} {spacing.xl}`

### button tertiary
**Role:** button tertiary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.md} {spacing.xl}`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **padding:** `{spacing.sm}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md} {spacing.lg}`

### card content
**Role:** card content component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### card feature sage
**Role:** card feature sage component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### card feature green
**Role:** card feature green component

- **backgroundColor:** `{colors.primary-pale}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### card feature dark
**Role:** card feature dark component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-mega}`
- **padding:** `{spacing.3xl} {spacing.xl}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.display-mega}`
- **padding:** `{spacing.3xl} {spacing.xl}`

### content band
**Role:** content band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-md}`
- **padding:** `{spacing.3xl} {spacing.xl}`

### currency converter card
**Role:** currency converter card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### badge positive
**Role:** badge positive component

- **backgroundColor:** `{colors.primary-pale}`
- **textColor:** `{colors.positive-deep}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.xs} {spacing.md}`

### badge negative
**Role:** badge negative component

- **backgroundColor:** `{colors.negative-bg}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.xs} {spacing.md}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.canvas-soft}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.3xl} {spacing.xl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.`
- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.mute}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`
- **item-divider:** `{colors.canvas-soft}`

### ex app shell row
**Role:** ex app shell row component

- **description:** `Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.`
- **backgroundColor:** `{colors.canvas}`
- **activeIndicator:** `{colors.primary}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### ex data table cell
**Role:** ex data table cell component

- **description:** `Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.`
- **headerBackground:** `{colors.canvas-soft}`
- **headerTypography:** `{typography.caption}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.md} {spacing.lg}`
- **rowBorder:** `{colors.canvas-soft}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as feature-card with elevated shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.xl}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.3xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — feature-card shape + medium shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.md} {spacing.lg}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Wise-Inspired website](https://wise.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://wise.com/).
