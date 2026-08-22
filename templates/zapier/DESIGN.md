# Zapier-Inspired — Style Reference
> An inspired interpretation of Zapier's design language — a workflow-automation platform whose surface combines warm-cream neutrals (`#fffefb` canvas, `#f8f4f0` soft cream) with deep coffee ink (`#201515`) and a single saturated orange CTA accent (`#ff4f00`); typography pairs the proprietary Degular Display family at hero scale with Inter for sub-displays and body, giving the brand a confident-warm rather than cool-tech voice.

**Theme:** light

**Source website:** [https://zapier.com/](https://zapier.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#ff4f00` | `--color-primary` | primary role extracted from the source design |
| on primary | `#fffefb` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#201515` | `--color-ink` | ink role extracted from the source design |
| ink soft | `#2f2a26` | `--color-ink-soft` | ink soft role extracted from the source design |
| ink mid | `#36342e` | `--color-ink-mid` | ink mid role extracted from the source design |
| body | `#605d52` | `--color-body` | body role extracted from the source design |
| body mid | `#939084` | `--color-body-mid` | body mid role extracted from the source design |
| mute | `#c5c0b1` | `--color-mute` | mute role extracted from the source design |
| canvas | `#fffefb` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#f8f4f0` | `--color-canvas-soft` | canvas soft role extracted from the source design |

## Tokens — Typography

### Degular Display, Inter, system-ui, -apple-system, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500
- **Sizes:** 56px
- **Line height:** 56px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Degular Display, Inter, system-ui, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500
- **Sizes:** 48px, 32px, 14px
- **Line height:** 48px, 36px, 14px
- **Letter spacing:** 0, 1px
- **Role:** Brand typography family observed across the documented type scale.

### Inter, system-ui, sans-serif · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400, 600, 700
- **Sizes:** 48px, 32px, 24px, 20px, 18px, 16px, 14px, 14.4px
- **Line height:** 49.92px, 40px, 30px, 25px, 27px, 24px, 21px, 14.4px
- **Letter spacing:** 0, -0.6px, -0.5px, -0.2px, 0.144px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 56px | 56px | 0 | `--text-display-xl` |
| display-lg | 48px | 48px | 0 | `--text-display-lg` |
| display-md | 32px | 36px | 1px | `--text-display-md` |
| display-sub-lg | 48px | 49.92px | 0 | `--text-display-sub-lg` |
| display-sub-md | 32px | 40px | 0 | `--text-display-sub-md` |
| display-sub-sm | 24px | 30px | -0.6px | `--text-display-sub-sm` |
| display-xs | 20px | 25px | -0.5px | `--text-display-xs` |
| body-lg | 20px | 30px | -0.2px | `--text-body-lg` |
| body-md | 18px | 27px | 0 | `--text-body-md` |
| body-md-strong | 18px | 27px | 0 | `--text-body-md-strong` |
| body-sm | 16px | 24px | 0 | `--text-body-sm` |
| body-sm-strong | 16px | 24px | 0 | `--text-body-sm-strong` |
| caption | 14px | 21px | 0 | `--text-caption` |
| eyebrow-uppercase | 14px | 14px | 1px | `--text-eyebrow-uppercase` |
| button-md | 18px | 27px | 0 | `--text-button-md` |
| button-sm | 14.4px | 14.4px | 0.144px | `--text-button-sm` |

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
| 4xl | 64px | `--spacing-4xl` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| sm | 6px | `--radius-sm` |
| md | 12px | `--radius-md` |
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
- **padding:** `{spacing.md} {spacing.xl}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md} {spacing.xl}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md} {spacing.xl}`

### button tertiary
**Role:** button tertiary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md} {spacing.xl}`

### button text
**Role:** button text component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.sm} {spacing.lg}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### card content
**Role:** card content component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### card feature cream
**Role:** card feature cream component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### card feature dark
**Role:** card feature dark component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### pricing card
**Role:** pricing card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### pricing card featured
**Role:** pricing card featured component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.4xl} {spacing.xl}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.4xl} {spacing.xl}`

### content band cream
**Role:** content band cream component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `{spacing.4xl} {spacing.xl}`

### content band light
**Role:** content band light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `{spacing.4xl} {spacing.xl}`

### eyebrow uppercase
**Role:** eyebrow uppercase component

- **textColor:** `{colors.ink}`
- **typography:** `{typography.eyebrow-uppercase}`

### badge pill
**Role:** badge pill component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
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
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`
- **item-divider:** `{colors.mute}`

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
- **rowBorder:** `{colors.mute}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as feature-card with elevated shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`

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
- Compare major implementation decisions against [the live Zapier-Inspired website](https://zapier.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://zapier.com/).
