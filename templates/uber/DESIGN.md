# Uber-Inspired — Style Reference
> An inspired interpretation of Uber's design language — a transportation-and-delivery super-app brand whose web surface is a black-and-white duet, framed by a custom geometric display sans, accented by a single signature pill shape (radius 999px) on every interactive element, and decorated only by editorial 4:3 illustrations of riders, drivers, and city objects.

**Theme:** light

**Source website:** [https://www.uber.com/](https://www.uber.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#000000` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#000000` | `--color-ink` | ink role extracted from the source design |
| body | `#5e5e5e` | `--color-body` | body role extracted from the source design |
| mute | `#afafaf` | `--color-mute` | mute role extracted from the source design |
| hairline mid | `#4b4b4b` | `--color-hairline-mid` | hairline mid role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#efefef` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| canvas softer | `#f3f3f3` | `--color-canvas-softer` | canvas softer role extracted from the source design |
| surface pressed | `#e2e2e2` | `--color-surface-pressed` | surface pressed role extracted from the source design |
| link | `#0000ee` | `--color-link` | link role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| black elevated | `#282828` | `--color-black-elevated` | black elevated role extracted from the source design |

## Tokens — Typography

### UberMove, UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700
- **Sizes:** 52px, 36px, 32px, 24px, 20px
- **Line height:** 64px, 44px, 40px, 32px, 28px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### UberMoveText, system-ui, Helvetica Neue, Arial, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400
- **Sizes:** 18px, 16px, 14px, 12px
- **Line height:** 24px, 20px, 16px
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 52px | 64px | 0 | `--text-display-xxl` |
| display-xl | 36px | 44px | 0 | `--text-display-xl` |
| display-lg | 32px | 40px | 0 | `--text-display-lg` |
| display-md | 24px | 32px | 0 | `--text-display-md` |
| display-sm | 20px | 28px | 0 | `--text-display-sm` |
| body-lg | 18px | 24px | 0 | `--text-body-lg` |
| body-md | 16px | 24px | 0 | `--text-body-md` |
| body-md-strong | 16px | 20px | 0 | `--text-body-md-strong` |
| body-sm | 14px | 20px | 0 | `--text-body-sm` |
| body-sm-strong | 14px | 16px | 0 | `--text-body-sm-strong` |
| caption | 12px | 20px | 0 | `--text-caption` |
| button-large | 18px | 24px | 0 | `--text-button-large` |
| button-md | 16px | 20px | 0 | `--text-button-md` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 6px | `--spacing-xs` |
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
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| pill | 999px | `--radius-pill` |
| pill-tab | 36px | `--radius-pill-tab` |
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
- **typography:** `{typography.body-md-strong}`
- **padding:** `{spacing.lg} {spacing.3xl}`

### nav link
**Role:** nav link component

- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md-strong}`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.md} {spacing.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.md} {spacing.md}`

### button subtle
**Role:** button subtle component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.md} {spacing.lg}`

### button floating
**Role:** button floating component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.md}`

### button large rounded
**Role:** button large rounded component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-large}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.lg} {spacing.xl}`

### button tab translucent
**Role:** button tab translucent component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md-strong}`
- **rounded:** `{rounded.pill-tab}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### text input on soft
**Role:** text input on soft component

- **backgroundColor:** `{colors.canvas-softer}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### card content
**Role:** card content component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### card elevated
**Role:** card elevated component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### card soft tinted
**Role:** card soft tinted component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### promo card illustrated
**Role:** promo card illustrated component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### promo card on dark
**Role:** promo card on dark component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### request form card
**Role:** request form card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.lg}`

### request form input row
**Role:** request form input row component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.lg}`

### category button
**Role:** category button component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-strong}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.sm} {spacing.lg}`

### faq row
**Role:** faq row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md-strong}`
- **padding:** `{spacing.lg} 0`

### app download pill
**Role:** app download pill component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md-strong}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.md} {spacing.xl}`

### hero band light
**Role:** hero band light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xxl}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xxl}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### showcase image card
**Role:** showcase image card component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xxl}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.3xl}`

### link blue
**Role:** link blue component

- **textColor:** `{colors.link}`
- **typography:** `{typography.body-md}`

### link on dark
**Role:** link on dark component

- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`

### link mute
**Role:** link mute component

- **textColor:** `{colors.hairline-mid}`
- **typography:** `{typography.body-md}`

### link mute soft
**Role:** link mute soft component

- **textColor:** `{colors.mute}`
- **typography:** `{typography.body-md}`

### icon button circular
**Role:** icon button circular component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.3xl} {spacing.3xl}`

### ex pricing tier
**Role:** ex pricing tier component

- **description:** `Default tier card. Mirrors card-content chrome with canvas-soft surface and a faint border.`
- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.surface-pressed}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### ex pricing tier featured
**Role:** ex pricing tier featured component

- **description:** `Featured tier — polarity-flipped to ink with white text.`
- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### ex product selector
**Role:** ex product selector component

- **description:** `Plan picker — re-purposed for the brand's Ride / Eats / Reserve tier picker. Uses category-button pills inside the frame.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.none}`
- **padding:** `{spacing.2xl}`

### ex cart drawer
**Role:** ex cart drawer component

- **description:** `Subscription summary — line items per add-on (NOT a literal e-commerce cart).`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`
- **item-divider:** `{colors.surface-pressed}`

### ex app shell row
**Role:** ex app shell row component

- **description:** `Sidebar nav row. Active state uses brand primary as a left-edge indicator bar.`
- **backgroundColor:** `{colors.canvas}`
- **activeIndicator:** `{colors.primary}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md} {spacing.lg}`

### ex data table cell
**Role:** ex data table cell component

- **description:** `Default data-table th + td chrome. Header uses body-sm-strong 500 weight; body uses body-sm.`
- **headerBackground:** `{colors.canvas-soft}`
- **headerTypography:** `{typography.body-sm-strong}`
- **bodyTypography:** `{typography.body-sm}`
- **cellPadding:** `{spacing.md} {spacing.lg}`
- **rowBorder:** `{colors.surface-pressed}`

### ex auth form card
**Role:** ex auth form card component

- **description:** `Sign-in / sign-up card. Mirrors card-content chrome with text-input primitives inside.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### ex modal card
**Role:** ex modal card component

- **description:** `Modal dialog surface — same chrome as card-content with Level 2 drop shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.2xl}`

### ex empty state card
**Role:** ex empty state card component

- **description:** `Empty-state illustration frame. Generous padding on canvas-soft surface.`
- **backgroundColor:** `{colors.canvas-soft}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.3xl}`
- **captionTypography:** `{typography.body-md}`

### ex toast
**Role:** ex toast component

- **description:** `Toast notification surface — flat-cornered card-content chrome with Level 2 drop shadow.`
- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.xl}`
- **padding:** `{spacing.md} {spacing.lg}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Uber-Inspired website](https://www.uber.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.uber.com/).
