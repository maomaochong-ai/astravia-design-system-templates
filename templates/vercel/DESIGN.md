# Vercel — Style Reference
> An inspired interpretation of Vercel's design language — a developer-platform brand whose surface is a stark black-and-ink duet on near-white canvas, broken at hero scale by a multi-color mesh gradient (cyan / blue / magenta / amber) that acts as the entire decorative system, paired with a custom geometric sans for headlines and a monospaced caption face for technical labels.

**Theme:** light

**Source website:** [https://vercel.com/](https://vercel.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative. 

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#171717` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#171717` | `--color-ink` | ink role extracted from the source design |
| body | `#4d4d4d` | `--color-body` | body role extracted from the source design |
| mute | `#888888` | `--color-mute` | mute role extracted from the source design |
| hairline | `#ebebeb` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#a1a1a1` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#fafafa` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| canvas soft 2 | `#f5f5f5` | `--color-canvas-soft-2` | canvas soft 2 role extracted from the source design |
| link | `#0070f3` | `--color-link` | link role extracted from the source design |
| link deep | `#0761d1` | `--color-link-deep` | link deep role extracted from the source design |
| link bg soft | `#d3e5ff` | `--color-link-bg-soft` | link bg soft role extracted from the source design |
| success | `#0070f3` | `--color-success` | success role extracted from the source design |
| error | `#ee0000` | `--color-error` | error role extracted from the source design |
| error soft | `#f7d4d6` | `--color-error-soft` | error soft role extracted from the source design |
| error deep | `#c50000` | `--color-error-deep` | error deep role extracted from the source design |
| warning | `#f5a623` | `--color-warning` | warning role extracted from the source design |
| warning soft | `#ffefcf` | `--color-warning-soft` | warning soft role extracted from the source design |
| warning deep | `#ab570a` | `--color-warning-deep` | warning deep role extracted from the source design |
| violet | `#7928ca` | `--color-violet` | violet role extracted from the source design |
| violet soft | `#d8ccf1` | `--color-violet-soft` | violet soft role extracted from the source design |
| violet deep | `#4c2889` | `--color-violet-deep` | violet deep role extracted from the source design |
| cyan | `#50e3c2` | `--color-cyan` | cyan role extracted from the source design |
| cyan soft | `#aaffec` | `--color-cyan-soft` | cyan soft role extracted from the source design |
| cyan deep | `#29bc9b` | `--color-cyan-deep` | cyan deep role extracted from the source design |
| highlight pink | `#ff0080` | `--color-highlight-pink` | highlight pink role extracted from the source design |
| highlight magenta | `#eb367f` | `--color-highlight-magenta` | highlight magenta role extracted from the source design |
| gradient develop start | `#007cf0` | `--color-gradient-develop-start` | gradient develop start role extracted from the source design |
| gradient develop end | `#00dfd8` | `--color-gradient-develop-end` | gradient develop end role extracted from the source design |
| gradient preview start | `#7928ca` | `--color-gradient-preview-start` | gradient preview start role extracted from the source design |
| gradient preview end | `#ff0080` | `--color-gradient-preview-end` | gradient preview end role extracted from the source design |
| gradient ship start | `#ff4d4d` | `--color-gradient-ship-start` | gradient ship start role extracted from the source design |
| gradient ship end | `#f9cb28` | `--color-gradient-ship-end` | gradient ship end role extracted from the source design |
| selection bg | `#171717` | `--color-selection-bg` | selection bg role extracted from the source design |
| selection fg | `#f2f2f2` | `--color-selection-fg` | selection fg role extracted from the source design |

## Tokens — Typography

### Geist, Inter, system-ui, -apple-system, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 400, 500
- **Sizes:** 48px, 32px, 24px, 20px, 18px, 16px, 14px, 12px
- **Line height:** 48px, 40px, 32px, 28px, 24px, 20px, 16px
- **Letter spacing:** -2.4px, -1.28px, -0.96px, -0.6px, 0px, 0, -0.28px
- **Role:** Brand typography family observed across the documented type scale.

### Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 12px, 13px
- **Line height:** 16px, 20px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 48px | 48px | -2.4px | `--text-display-xl` |
| display-lg | 32px | 40px | -1.28px | `--text-display-lg` |
| display-md | 24px | 32px | -0.96px | `--text-display-md` |
| display-sm | 20px | 28px | -0.6px | `--text-display-sm` |
| body-lg | 18px | 28px | 0px | `--text-body-lg` |
| body-md | 16px | 24px | 0 | `--text-body-md` |
| body-md-strong | 16px | 24px | 0 | `--text-body-md-strong` |
| body-sm | 14px | 20px | -0.28px | `--text-body-sm` |
| body-sm-strong | 14px | 20px | -0.28px | `--text-body-sm-strong` |
| caption | 12px | 16px | 0 | `--text-caption` |
| caption-mono | 12px | 16px | 0 | `--text-caption-mono` |
| code | 13px | 20px | 0 | `--text-code` |
| button-md | 14px | 20px | 0 | `--text-button-md` |
| button-lg | 16px | 24px | 0 | `--text-button-lg` |

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
| 2xl | 40px | `--spacing-2xl` |
| 3xl | 48px | `--spacing-3xl` |
| 4xl | 64px | `--spacing-4xl` |
| 5xl | 96px | `--spacing-5xl` |
| 6xl | 128px | `--spacing-6xl` |
| section | 192px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| pill-sm | 64px | `--radius-pill-sm` |
| pill | 100px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 192px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### nav bar
**Role:** nav bar component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **height:** `64px`
- **padding:** `{spacing.sm} {spacing.lg}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `{spacing.xs} {spacing.sm}`

### nav cta signup
**Role:** nav cta signup component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.sm}`
- **padding:** `0px {spacing.xs}`
- **height:** `28px`

### nav cta login
**Role:** nav cta login component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.sm}`
- **padding:** `0px {spacing.xs}`
- **height:** `28px`

### nav cta ask ai
**Role:** nav cta ask ai component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.sm}`
- **padding:** `0px {spacing.xs}`
- **height:** `28px`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-lg}`
- **rounded:** `{rounded.pill}`
- **padding:** `0px {spacing.sm}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-lg}`
- **rounded:** `{rounded.pill}`
- **padding:** `0px {spacing.sm}`

### button primary sm
**Role:** button primary sm component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `0px {spacing.xs}`

### button secondary sm
**Role:** button secondary sm component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `0px {spacing.xs}`

### tab ghost
**Role:** tab ghost component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.pill-sm}`
- **padding:** `0px {spacing.md}`

### icon button circular
**Role:** icon button circular component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **rounded:** `{rounded.full}`

### card marketing
**Role:** card marketing component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.lg}`

### card marketing large
**Role:** card marketing large component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### card soft
**Role:** card soft component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.lg}`

### template card
**Role:** template card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md}`

### code editor mockup
**Role:** code editor mockup component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.lg}`

### form input
**Role:** form input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.sm}`
- **padding:** `0px {spacing.sm}`
- **height:** `40px`

### form input sm
**Role:** form input sm component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.sm}`
- **padding:** `0px {spacing.sm}`
- **height:** `32px`

### form input lg
**Role:** form input lg component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `0px {spacing.sm}`
- **height:** `48px`

### badge secondary
**Role:** badge secondary component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.full}`
- **padding:** `0px {spacing.xs}`

### pricing card
**Role:** pricing card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### pricing card featured
**Role:** pricing card featured component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### logo strip
**Role:** logo strip component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.lg} {spacing.xl}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.4xl} {spacing.lg}`

### feature mesh band
**Role:** feature mesh band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `{spacing.5xl} {spacing.lg}`

### showcase band light
**Role:** showcase band light component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `{spacing.5xl} {spacing.lg}`

### showcase band dark
**Role:** showcase band dark component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-lg}`
- **padding:** `{spacing.5xl} {spacing.lg}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.4xl} {spacing.lg}`

### link inline
**Role:** link inline component

- **textColor:** `{colors.link}`
- **typography:** `{typography.body-md}`

### banner marketing
**Role:** banner marketing component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `{spacing.xs} {spacing.sm}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default tier card. Mirrors pricing-card chrome on canvas-soft surface with a hairline border.`
- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured tier — polarity-flipped to ink primary with white text and white CTA.`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — repurposed for the brand's GPU / inference / Pro feature tiers.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.lg}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — line items per add-on (NOT a literal e-commerce cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.lg}`
- **item-divider:** `{colors.hairline}`

### ex app shell row
**Role:** ex app shell row component

- **description:** `Sidebar nav row. Active state uses brand primary as a left-edge indicator bar.`
- **backgroundColor:** `{colors.canvas}`
- **activeIndicator:** `{colors.primary}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.sm}`

### ex data table cell
**Role:** ex data table cell component

- **description:** `Mirrors the brand's table chrome. Header uses caption-mono uppercase mono; body uses body-sm.`
- **headerBackground:** `{colors.canvas-soft}`
- **headerTypography:** `{typography.caption-mono}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.xs} {spacing.sm}`
- **rowBorder:** `{colors.hairline}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Mirrors card-marketing-large chrome with form-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as card-marketing-large with Level 5 modal shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame. Generous padding on canvas-soft.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.3xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — flat-cornered card-marketing chrome with Level 4 shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.sm} {spacing.md}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Vercel website](https://vercel.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://vercel.com/).
