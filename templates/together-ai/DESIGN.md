# Together-AI-Inspired — Style Reference
> An inspired interpretation of Together AI's design language — an AI infrastructure platform whose surface alternates between near-black hero bands (with a three-color orange-magenta-periwinkle gradient as the single piece of brand chrome) and bright white research / pricing / docs bands, knit together by a custom display sans and an uppercase mono eyebrow face.

**Theme:** light

**Source website:** [https://www.together.ai/](https://www.together.ai/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#000000` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#000000` | `--color-ink` | ink role extracted from the source design |
| body | `#959494` | `--color-body` | body role extracted from the source design |
| hairline | `#959494` | `--color-hairline` | hairline role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas dark | `#010120` | `--color-canvas-dark` | canvas dark role extracted from the source design |
| surface dark soft | `#313641` | `--color-surface-dark-soft` | surface dark soft role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| accent orange | `#fc4c02` | `--color-accent-orange` | accent orange role extracted from the source design |
| accent magenta | `#ef2cc1` | `--color-accent-magenta` | accent magenta role extracted from the source design |
| accent periwinkle | `#bdbbff` | `--color-accent-periwinkle` | accent periwinkle role extracted from the source design |
| accent mint | `#c8f6f9` | `--color-accent-mint` | accent mint role extracted from the source design |

## Tokens — Typography

### The Future, Inter, Helvetica Neue, Arial, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400
- **Sizes:** 64px, 40px, 28px, 22px, 18px, 16px, 14px
- **Line height:** 70.4px, 48px, 32.2px, 25.3px, 23.4px, 20.8px, 19.6px
- **Letter spacing:** -1.92px, -0.8px, -0.42px, -0.22px, -0.18px, -0.16px, 0
- **Role:** Brand typography family observed across the documented type scale.

### PP Neue Montreal Mono, ui-monospace, SF Mono, Menlo, monospace · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400
- **Sizes:** 16px, 11px, 10px
- **Line height:** 16px, 11px, 15.4px, 14px
- **Letter spacing:** 0.08px, 0.55px, 0.055px, 0.05px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 64px | 70.4px | -1.92px | `--text-display-xxl` |
| display-xl | 40px | 48px | -0.8px | `--text-display-xl` |
| display-lg | 28px | 32.2px | -0.42px | `--text-display-lg` |
| display-md | 22px | 25.3px | -0.22px | `--text-display-md` |
| body-lg | 18px | 23.4px | -0.18px | `--text-body-lg` |
| body-lg-strong | 18px | 23.4px | -0.18px | `--text-body-lg-strong` |
| body-md | 16px | 20.8px | -0.16px | `--text-body-md` |
| body-md-strong | 16px | 20.8px | -0.16px | `--text-body-md-strong` |
| caption | 14px | 19.6px | 0 | `--text-caption` |
| caption-strong | 14px | 19.6px | 0 | `--text-caption-strong` |
| mono-caps-button | 16px | 16px | 0.08px | `--text-mono-caps-button` |
| mono-caps-eyebrow | 11px | 11px | 0.55px | `--text-mono-caps-eyebrow` |
| mono-caps-label | 11px | 15.4px | 0.055px | `--text-mono-caps-label` |
| mono-caption | 10px | 14px | 0.05px | `--text-mono-caption` |

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
| 4xl | 44px | `--spacing-4xl` |
| 5xl | 48px | `--spacing-5xl` |
| 6xl | 55.2px | `--spacing-6xl` |
| section | 80px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 3.25px | `--radius-xs` |
| sm | 4px | `--radius-sm` |
| md | 8px | `--radius-md` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 80px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### nav bar
**Role:** nav bar component

- **backgroundColor:** `{colors.canvas-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **padding:** `{spacing.lg} {spacing.3xl}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.mono-caps-button}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.2xl}`

### button secondary mint
**Role:** button secondary mint component

- **backgroundColor:** `{colors.accent-mint}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.mono-caps-button}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.2xl}`

### button secondary white
**Role:** button secondary white component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.mono-caps-button}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.2xl}`

### button ghost on dark
**Role:** button ghost on dark component

- **backgroundColor:** `{colors.surface-dark-soft}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.mono-caps-button}`
- **rounded:** `{rounded.sm}`

### button outline
**Role:** button outline component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `rgba(0, 0, 0, 0.08)`
- **typography:** `{typography.mono-caps-button}`
- **rounded:** `{rounded.xs}`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.full}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `rgba(0, 0, 0, 0.08)`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`

### badge neutral
**Role:** badge neutral component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `rgba(0, 0, 0, 0.08)`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xxs} {spacing.sm}`

### badge subtle on dark
**Role:** badge subtle on dark component

- **backgroundColor:** `{colors.surface-dark-soft}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xxs} {spacing.sm}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.canvas-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xxl}`
- **padding:** `{spacing.section} {spacing.3xl}`

### research band dark
**Role:** research band dark component

- **backgroundColor:** `{colors.canvas-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.section} {spacing.3xl}`

### feature tab pill
**Role:** feature tab pill component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md-strong}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.2xl}`

### pricing sub tab
**Role:** pricing sub tab component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `{spacing.sm} {spacing.lg}`

### stats card tinted
**Role:** stats card tinted component

- **backgroundColor:** `{colors.accent-mint}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xl}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.3xl}`

### research card
**Role:** research card component

- **backgroundColor:** `{colors.canvas-dark}`
- **textColor:** `{colors.on-dark}`
- **borderColor:** `rgba(255, 255, 255, 0.12)`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.2xl}`

### testimonial card
**Role:** testimonial card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.2xl}`

### article card
**Role:** article card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.2xl}`

### code editor mockup
**Role:** code editor mockup component

- **backgroundColor:** `{colors.canvas-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.mono-caption}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.2xl}`

### data table row
**Role:** data table row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `rgba(0, 0, 0, 0.08)`
- **typography:** `{typography.body-md}`
- **padding:** `{spacing.md} {spacing.lg}`

### data table header
**Role:** data table header component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.mono-caps-eyebrow}`
- **padding:** `{spacing.md} {spacing.lg}`

### toggle pill group
**Role:** toggle pill group component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.mono-caps-button}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **padding:** `{spacing.section} {spacing.3xl}`

### footer wordmark banner
**Role:** footer wordmark banner component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.display-xxl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default Pricing tier card. Mirrors article-card chrome on canvas-soft surface with a hairline border.`
- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `rgba(0, 0, 0, 0.08)`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.3xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured tier — polarity-flipped to canvas-dark with white text.`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.3xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `What's Included summary card — repurposed for the brand's GPU / inference packaging tiers.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.2xl}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — line items per add-on (NOT a literal e-commerce cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.2xl}`
- **item-divider:** `{colors.hairline}`

### ex app shell row
**Role:** ex app shell row component

- **description:** `Sidebar nav row. Active state uses brand primary as a left-edge indicator bar.`
- **backgroundColor:** `{colors.canvas}`
- **activeIndicator:** `{colors.primary}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`

### ex data table cell
**Role:** ex data table cell component

- **description:** `Mirrors the brand's pricing-page table. Header uses mono-caps-eyebrow uppercase; body uses body-md.`
- **headerBackground:** `{colors.hairline}`
- **headerTypography:** `{typography.mono-caps-eyebrow}`
- **bodyTypography:** `{typography.body-md}`
- **cellPadding:** `{spacing.md} {spacing.lg}`
- **rowBorder:** `{colors.hairline}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Mirrors article-card chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.3xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as article-card; relies on tinted scrim instead of card shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.3xl}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame. Generous padding on canvas-soft surface.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.5xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — flat-cornered article-card chrome with a soft brand-tinted drop shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.md} {spacing.lg}`
- **typography:** `{typography.body-md}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Together-AI-Inspired website](https://www.together.ai/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.together.ai/).
