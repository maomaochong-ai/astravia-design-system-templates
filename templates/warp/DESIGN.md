# Warp-Inspired — Style Reference
> An inspired interpretation of Warp's design language — an agentic terminal-and-development-environment brand whose surface is a warm near-charcoal canvas (a tint warmer than pure black), broken only by clean Inter typography, the occasional Instrument Serif italic moment, and dense terminal-mockup imagery; CTAs are unusually understated, with shape geometry running tighter than most marketing sites.

**Theme:** dark

**Source website:** [https://www.warp.dev/](https://www.warp.dev/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#f7f5f0` | `--color-primary` | primary role extracted from the source design |
| on primary | `#2b2622` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#f7f5f0` | `--color-ink` | ink role extracted from the source design |
| body | `#c9c0ad` | `--color-body` | body role extracted from the source design |
| body strong | `#dad2c1` | `--color-body-strong` | body strong role extracted from the source design |
| mute | `#aea69c` | `--color-mute` | mute role extracted from the source design |
| canvas | `#2b2622` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#383330` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| hairline | `#3f3a36` | `--color-hairline` | hairline role extracted from the source design |

## Tokens — Typography

### Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 64px
- **Line height:** 70.4px
- **Letter spacing:** -1.6px
- **Role:** Brand typography family observed across the documented type scale.

### Inter, system-ui, -apple-system, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 48px, 32px, 24px, 18px, 16px, 14px, 12px
- **Line height:** 52.8px, 40px, 32px, 28px, 24px, 20px, 16px
- **Letter spacing:** -1.2px, -0.8px, -0.4px, 0
- **Role:** Brand typography family observed across the documented type scale.

### Instrument Serif, Georgia, "Times New Roman", serif · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 48px
- **Line height:** 52px
- **Letter spacing:** -0.5px
- **Role:** Brand typography family observed across the documented type scale.

### DM Mono, ui-monospace, SFMono-Regular, Menlo, monospace · `--font-family-4`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 13px, 14px
- **Line height:** 18px, 20px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 64px | 70.4px | -1.6px | `--text-display-xl` |
| display-lg | 48px | 52.8px | -1.2px | `--text-display-lg` |
| display-md | 32px | 40px | -0.8px | `--text-display-md` |
| display-sm | 24px | 32px | -0.4px | `--text-display-sm` |
| display-serif | 48px | 52px | -0.5px | `--text-display-serif` |
| body-lg | 18px | 28px | 0 | `--text-body-lg` |
| body-md | 16px | 24px | 0 | `--text-body-md` |
| body-md-strong | 16px | 24px | 0 | `--text-body-md-strong` |
| body-sm | 14px | 20px | 0 | `--text-body-sm` |
| body-sm-strong | 14px | 20px | 0 | `--text-body-sm-strong` |
| caption | 12px | 16px | 0 | `--text-caption` |
| code | 13px | 18px | 0 | `--text-code` |
| code-md | 14px | 20px | 0 | `--text-code-md` |
| button-md | 14px | 20px | 0 | `--text-button-md` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 2px | `--spacing-xxs` |
| xs | 4px | `--spacing-xs` |
| sm | 8px | `--spacing-sm` |
| md | 10px | `--spacing-md` |
| lg | 16px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| 2xl | 32px | `--spacing-2xl` |
| 3xl | 48px | `--spacing-3xl` |
| 4xl | 64px | `--spacing-4xl` |
| 5xl | 96px | `--spacing-5xl` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xxs | 1px | `--radius-xxs` |
| xs | 2px | `--radius-xs` |
| sm | 3px | `--radius-sm` |
| md | 4px | `--radius-md` |
| lg | 6px | `--radius-lg` |
| pill | 9999px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 64px
- **Card padding:** 16px
- **Element gap:** 10px
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

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.md}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.sm} {spacing.lg}`

### button secondary ghost
**Role:** button secondary ghost component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.sm} {spacing.lg}`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **padding:** `{spacing.xs}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.sm} {spacing.md}`

### card content
**Role:** card content component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### card mockup
**Role:** card mockup component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.lg}`

### download tile
**Role:** download tile component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md-strong}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### press row
**Role:** press row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **padding:** `{spacing.lg} 0`

### job row
**Role:** job row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md-strong}`
- **padding:** `{spacing.lg} 0`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.5xl} {spacing.xl}`

### content band
**Role:** content band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-md}`
- **padding:** `{spacing.5xl} {spacing.xl}`

### partner logo tile
**Role:** partner logo tile component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md-strong}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.lg}`

### testimonial card
**Role:** testimonial card component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.3xl} {spacing.xl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.`
- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`
- **item-divider:** `{colors.hairline}`

### ex app shell row
**Role:** ex app shell row component

- **description:** `Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.`
- **backgroundColor:** `{colors.canvas}`
- **activeIndicator:** `{colors.primary}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.sm} {spacing.md}`

### ex data table cell
**Role:** ex data table cell component

- **description:** `Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.`
- **headerBackground:** `{colors.canvas-soft}`
- **headerTypography:** `{typography.caption}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.sm} {spacing.md}`
- **rowBorder:** `{colors.hairline}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as feature-card with elevated shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.2xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — feature-card shape + medium shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.sm} {spacing.md}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Warp-Inspired website](https://www.warp.dev/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.warp.dev/).
