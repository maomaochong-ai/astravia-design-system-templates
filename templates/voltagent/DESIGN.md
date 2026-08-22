# Voltagent-Inspired — Style Reference
> An inspired interpretation of Voltagent's design language — a developer-focused AI agent engineering platform whose surface is an unrelenting near-black canvas broken only by a single electric-green brand accent, code-editor mockups inside the hero, and a precise grid of dark feature cards that read like a documentation site dressed as marketing.

**Theme:** dark

**Source website:** [https://voltagent.dev/](https://voltagent.dev/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#00d992` | `--color-primary` | primary role extracted from the source design |
| primary soft | `#2fd6a1` | `--color-primary-soft` | primary soft role extracted from the source design |
| primary deep | `#10b981` | `--color-primary-deep` | primary deep role extracted from the source design |
| on primary | `#101010` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#f2f2f2` | `--color-ink` | ink role extracted from the source design |
| ink strong | `#ffffff` | `--color-ink-strong` | ink strong role extracted from the source design |
| body | `#bdbdbd` | `--color-body` | body role extracted from the source design |
| mute | `#8b949e` | `--color-mute` | mute role extracted from the source design |
| hairline | `#3d3a39` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#b8b3b0` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| canvas | `#101010` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#1a1a1a` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| canvas text soft | `#f5f6f7` | `--color-canvas-text-soft` | canvas text soft role extracted from the source design |

## Tokens — Typography

### Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 700, 600
- **Sizes:** 60px, 36px, 24px, 20px
- **Line height:** 60px, 40px, 32px, 28px
- **Letter spacing:** -0.65px, -0.9px, -0.6px, 0
- **Role:** Brand typography family observed across the documented type scale.

### Inter, system-ui, -apple-system, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 400, 500
- **Sizes:** 14px, 18px, 16px, 12px
- **Line height:** 20px, 28px, 26px, 24px, 23px, 16px
- **Letter spacing:** 2.52px, 0.45px, 0
- **Role:** Brand typography family observed across the documented type scale.

### SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 18px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### SFMono-Regular, Menlo, Monaco, Consolas, monospace · `--font-family-4`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 550
- **Sizes:** 13px
- **Line height:** 16px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 60px | 60px | -0.65px | `--text-display-xl` |
| display-lg | 36px | 40px | -0.9px | `--text-display-lg` |
| display-md | 24px | 32px | -0.6px | `--text-display-md` |
| display-sm | 20px | 28px | 0 | `--text-display-sm` |
| eyebrow-mono | 14px | 20px | 2.52px | `--text-eyebrow-mono` |
| eyebrow-uppercase | 18px | 28px | 0.45px | `--text-eyebrow-uppercase` |
| body-lg | 18px | 28px | 0 | `--text-body-lg` |
| body-md | 16px | 26px | 0 | `--text-body-md` |
| body-md-strong | 16px | 24px | 0 | `--text-body-md-strong` |
| body-sm | 14px | 20px | 0 | `--text-body-sm` |
| body-sm-strong | 14px | 23px | 0 | `--text-body-sm-strong` |
| caption | 12px | 16px | 0 | `--text-caption` |
| caption-strong | 12px | 16px | 0 | `--text-caption-strong` |
| code | 13px | 18px | 0 | `--text-code` |
| code-strong | 13px | 16px | 0 | `--text-code-strong` |
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
| xl | 20px | `--spacing-xl` |
| 2xl | 24px | `--spacing-2xl` |
| 3xl | 32px | `--spacing-3xl` |
| 4xl | 40px | `--spacing-4xl` |
| 5xl | 48px | `--spacing-5xl` |
| 6xl | 64px | `--spacing-6xl` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
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
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.md} {spacing.3xl}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### button outline on dark
**Role:** button outline on dark component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### button ghost green
**Role:** button ghost green component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary-soft}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### button pill tag
**Role:** button pill tag component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.xs} {spacing.md}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### card feature
**Role:** card feature component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.2xl}`

### card feature emphasized
**Role:** card feature emphasized component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### code mockup
**Role:** code mockup component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### code inline chip
**Role:** code inline chip component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.canvas-text-soft}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xxs} {spacing.sm}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.5xl} {spacing.3xl}`

### content band
**Role:** content band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `{spacing.5xl} {spacing.3xl}`

### green divider band
**Role:** green divider band component

- **backgroundColor:** `{colors.canvas}`
- **borderColor:** `{colors.primary}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.4xl} {spacing.3xl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.`
- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.2xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.2xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.2xl}`

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
- **headerBackground:** `{colors.canvas-soft}`
- **headerTypography:** `{typography.caption}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.md} {spacing.lg}`
- **rowBorder:** `{colors.hairline}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.2xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as feature-card with elevated shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.2xl}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame.`
- **backgroundColor:** `{colors.canvas-soft}`
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
- Compare major implementation decisions against [the live Voltagent-Inspired website](https://voltagent.dev/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://voltagent.dev/).
