# Webflow-Inspired — Style Reference
> An inspired interpretation of Webflow's design language — a visual web development platform whose surface contrasts a deep near-black `#080808` primary against a generous white canvas, broken by a five-stop chromatic accent system (purple / pink / blue / orange / green) that maps to the brand's product categories, and anchored by the proprietary WF Visual Sans family used at restrained 500 / 600 weights with negative tracking.

**Theme:** light

**Source website:** [https://webflow.com/](https://webflow.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#080808` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#080808` | `--color-ink` | ink role extracted from the source design |
| ink strong | `#222222` | `--color-ink-strong` | ink strong role extracted from the source design |
| body | `#363636` | `--color-body` | body role extracted from the source design |
| body mid | `#5a5a5a` | `--color-body-mid` | body mid role extracted from the source design |
| mute | `#898989` | `--color-mute` | mute role extracted from the source design |
| mute soft | `#ababab` | `--color-mute-soft` | mute soft role extracted from the source design |
| hairline | `#d8d8d8` | `--color-hairline` | hairline role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| accent purple | `#7a3dff` | `--color-accent-purple` | accent purple role extracted from the source design |
| accent pink | `#ed52cb` | `--color-accent-pink` | accent pink role extracted from the source design |
| accent blue | `#3b89ff` | `--color-accent-blue` | accent blue role extracted from the source design |
| accent blue deep | `#006acc` | `--color-accent-blue-deep` | accent blue deep role extracted from the source design |
| accent blue info | `#146ef5` | `--color-accent-blue-info` | accent blue info role extracted from the source design |
| accent orange | `#ff6b00` | `--color-accent-orange` | accent orange role extracted from the source design |
| accent green | `#00d722` | `--color-accent-green` | accent green role extracted from the source design |
| accent yellow | `#ffae13` | `--color-accent-yellow` | accent yellow role extracted from the source design |
| accent red | `#ee1d36` | `--color-accent-red` | accent red role extracted from the source design |

## Tokens — Typography

### WF Visual Sans Variable, Inter, system-ui, -apple-system, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600
- **Sizes:** 80px
- **Line height:** 83.2px
- **Letter spacing:** -0.8px
- **Role:** Brand typography family observed across the documented type scale.

### WF Visual Sans Variable, Inter, system-ui, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 500, 400, 550
- **Sizes:** 56px, 44.8px, 32px, 24px, 20px, 15px, 12px, 28.8px, 16px, 14px, 12.8px
- **Line height:** 58.24px, 46.6px, 41.6px, 31.2px, 28px, 19.5px, 12px, 46.08px, 25.6px, 22.4px, 15.36px
- **Letter spacing:** 0, 1.5px, 0.6px, -0.288px, -0.16px
- **Role:** Brand typography family observed across the documented type scale.

### WFVisualSans-Mono, Inconsolata, ui-monospace, SFMono-Regular, Menlo, monospace · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 18px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 80px | 83.2px | -0.8px | `--text-display-xxl` |
| display-xl | 56px | 58.24px | 0 | `--text-display-xl` |
| display-lg | 44.8px | 46.6px | 0 | `--text-display-lg` |
| display-md | 32px | 41.6px | 0 | `--text-display-md` |
| display-sm | 24px | 31.2px | 0 | `--text-display-sm` |
| display-xs | 20px | 28px | 0 | `--text-display-xs` |
| eyebrow-uppercase | 15px | 19.5px | 1.5px | `--text-eyebrow-uppercase` |
| eyebrow-uppercase-sm | 12px | 12px | 0.6px | `--text-eyebrow-uppercase-sm` |
| body-lg | 28.8px | 46.08px | -0.288px | `--text-body-lg` |
| body-md | 16px | 25.6px | -0.16px | `--text-body-md` |
| body-md-strong | 16px | 25.6px | -0.16px | `--text-body-md-strong` |
| body-sm | 14px | 22.4px | 0 | `--text-body-sm` |
| body-sm-strong | 14px | 22.4px | 0 | `--text-body-sm-strong` |
| caption | 12.8px | 15.36px | 0 | `--text-caption` |
| caption-mono | 12px | 18px | 0 | `--text-caption-mono` |
| button-md | 16px | 25.6px | -0.16px | `--text-button-md` |

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
| xs | 2px | `--radius-xs` |
| sm | 4px | `--radius-sm` |
| md | 8px | `--radius-md` |
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
- **padding:** `{spacing.lg} {spacing.3xl}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-strong}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.xl}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.xl}`

### button text arrow
**Role:** button text arrow component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **padding:** `{spacing.xl} 0`

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
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### badge info
**Role:** badge info component

- **backgroundColor:** `{colors.accent-blue-info}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.sm}`

### badge info soft
**Role:** badge info soft component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.accent-blue-info}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.sm}`

### card feature
**Role:** card feature component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### card feature dark
**Role:** card feature dark component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### card pricing
**Role:** card pricing component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xxl}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-xxl}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### content band
**Role:** content band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### category card purple
**Role:** category card purple component

- **backgroundColor:** `{colors.accent-purple}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### category card blue
**Role:** category card blue component

- **backgroundColor:** `{colors.accent-blue}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### category card orange
**Role:** category card orange component

- **backgroundColor:** `{colors.accent-orange}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### category card green
**Role:** category card green component

- **backgroundColor:** `{colors.accent-green}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### category card pink
**Role:** category card pink component

- **backgroundColor:** `{colors.accent-pink}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body-mid}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.`
- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.2xl}`
- **item-divider:** `{colors.hairline}`

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
- **headerBackground:** `{colors.canvas}`
- **headerTypography:** `{typography.caption}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.md} {spacing.lg}`
- **rowBorder:** `{colors.hairline}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as feature-card with elevated shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.3xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — feature-card shape + medium shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md} {spacing.lg}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Webflow-Inspired website](https://webflow.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://webflow.com/).
