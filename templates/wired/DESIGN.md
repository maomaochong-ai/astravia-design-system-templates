# Wired-Inspired — Style Reference
> An inspired interpretation of Wired's design language — a flagship technology-magazine brand whose surface is a strict editorial duet of stark black wordmark on white canvas, anchored by a tall narrow custom display serif for hero headlines, a humanist serif body face for long-form reading, and a clean sans face for metadata; layout reads like a printed magazine ported to the web with very little marketing chrome.

**Theme:** light

**Source website:** [https://www.wired.com/](https://www.wired.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#000000` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#000000` | `--color-ink` | ink role extracted from the source design |
| ink soft | `#1a1a1a` | `--color-ink-soft` | ink soft role extracted from the source design |
| body | `#757575` | `--color-body` | body role extracted from the source design |
| hairline | `#e0e0e0` | `--color-hairline` | hairline role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#f5f5f5` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| link | `#057dbc` | `--color-link` | link role extracted from the source design |

## Tokens — Typography

### WiredDisplay, "Times New Roman", Georgia, serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 64px, 48px, 32px, 26px
- **Line height:** 59.52px, 50.4px, 35.2px, 28.08px
- **Letter spacing:** -0.5px, -0.4px, -0.3px, 0
- **Role:** Brand typography family observed across the documented type scale.

### Apercu, "Helvetica Neue", Helvetica, Arial, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 400
- **Sizes:** 20px, 17px, 14px, 12px, 16px
- **Line height:** 24px, 20px, 22px, 18px, 16px
- **Letter spacing:** -0.28px, 0, -0.144px, 0.4px, 0.3px
- **Role:** Brand typography family observed across the documented type scale.

### BreveText, Georgia, "Times New Roman", serif · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 700
- **Sizes:** 19px, 16px, 12.73px
- **Line height:** 27.93px, 24px, 28px
- **Letter spacing:** 0.108px, 0.09px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-hero | 64px | 59.52px | -0.5px | `--text-display-hero` |
| display-lg | 48px | 50.4px | -0.4px | `--text-display-lg` |
| display-md | 32px | 35.2px | -0.3px | `--text-display-md` |
| display-sm | 26px | 28.08px | 0 | `--text-display-sm` |
| display-xs | 20px | 24px | -0.28px | `--text-display-xs` |
| body-serif-lg | 19px | 27.93px | 0.108px | `--text-body-serif-lg` |
| body-serif-md | 16px | 24px | 0.09px | `--text-body-serif-md` |
| body-md | 17px | 20px | 0 | `--text-body-md` |
| body-md-strong | 17px | 22px | -0.144px | `--text-body-md-strong` |
| body-sm | 14px | 18px | 0.4px | `--text-body-sm` |
| body-sm-strong | 14px | 18px | 0.4px | `--text-body-sm-strong` |
| byline | 12.73px | 28px | 0.108px | `--text-byline` |
| caption | 12px | 16px | 0 | `--text-caption` |
| button-md | 16px | 20px | 0.3px | `--text-button-md` |

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
| 4xl | 48px | `--spacing-4xl` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
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
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.md} {spacing.xl}`

### button outline
**Role:** button outline component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.none}`
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
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.md} {spacing.lg}`

### story card large
**Role:** story card large component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-md}`
- **padding:** `{spacing.lg}`

### story card
**Role:** story card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xs}`
- **padding:** `{spacing.md}`

### story row
**Role:** story row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md-strong}`
- **padding:** `{spacing.lg} 0`

### category eyebrow
**Role:** category eyebrow component

- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-strong}`

### byline row
**Role:** byline row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.byline}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-hero}`
- **padding:** `{spacing.4xl} {spacing.xl}`

### masthead band
**Role:** masthead band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md-strong}`
- **padding:** `{spacing.md} {spacing.xl}`

### hairline divider
**Role:** hairline divider component

- **borderColor:** `{colors.hairline}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.4xl} {spacing.xl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.`
- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`
- **item-divider:** `{colors.hairline}`

### ex app shell row
**Role:** ex app shell row component

- **description:** `Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.`
- **backgroundColor:** `{colors.canvas}`
- **activeIndicator:** `{colors.primary}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.md} {spacing.lg}`

### ex data table cell
**Role:** ex data table cell component

- **description:** `Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.`
- **headerBackground:** `{colors.canvas-soft}`
- **headerTypography:** `{typography.caption}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.md} {spacing.lg}`
- **rowBorder:** `{colors.hairline}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as feature-card with elevated shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.3xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — feature-card shape + medium shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.md} {spacing.lg}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Wired-Inspired website](https://www.wired.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.wired.com/).
