# Pinterest — Style Reference
> A photography-first discovery system organized around the Pinterest Red CTA, the masonry pin grid, and a soft warm-cream chrome that gets out of the imagery's way. The home page is a content-discovery tool wearing the chrome of a magazine publisher: 70px display headlines, friendly Pin Sans typography, fully-rounded pill buttons (16px) on a cream-tinted neutral palette, and a sticky red "Sign up" CTA that anchors every viewport. Pin imagery is the system's load-bearing visual element — square, portrait, and landscape pins tile in a column-based masonry grid where each tile is a fully-rounded 16px-radius card, separated by tight 8px gutters. The chrome is otherwise quiet: warm grays, true whites, and a single saturated red — no decorative gradients, no atmospheric backgrounds, no shadows beyond a soft modal scrim.

**Theme:** light

**Source website:** [https://www.pinterest.com/](https://www.pinterest.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#e60023` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| primary pressed | `#cc001f` | `--color-primary-pressed` | primary pressed role extracted from the source design |
| ink | `#000000` | `--color-ink` | ink role extracted from the source design |
| ink soft | `#211922` | `--color-ink-soft` | ink soft role extracted from the source design |
| body | `#33332e` | `--color-body` | body role extracted from the source design |
| charcoal | `#262622` | `--color-charcoal` | charcoal role extracted from the source design |
| mute | `#62625b` | `--color-mute` | mute role extracted from the source design |
| ash | `#91918c` | `--color-ash` | ash role extracted from the source design |
| stone | `#c8c8c1` | `--color-stone` | stone role extracted from the source design |
| hairline | `#dadad3` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#e5e5e0` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| on secondary | `#000000` | `--color-on-secondary` | on secondary role extracted from the source design |
| secondary bg | `#e5e5e0` | `--color-secondary-bg` | secondary bg role extracted from the source design |
| secondary pressed | `#c8c8c1` | `--color-secondary-pressed` | secondary pressed role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#fbfbf9` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#f6f6f3` | `--color-surface-card` | surface card role extracted from the source design |
| surface elevated | `#ffffff` | `--color-surface-elevated` | surface elevated role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on dark mute | `rgba(255,255,255,0.7)` | `--color-on-dark-mute` | on dark mute role extracted from the source design |
| surface dark | `#262622` | `--color-surface-dark` | surface dark role extracted from the source design |
| focus outer | `#435ee5` | `--color-focus-outer` | focus outer role extracted from the source design |
| focus inner | `#ffffff` | `--color-focus-inner` | focus inner role extracted from the source design |
| accent pressed blue | `#617bff` | `--color-accent-pressed-blue` | accent pressed blue role extracted from the source design |
| accent purple | `#7e238b` | `--color-accent-purple` | accent purple role extracted from the source design |
| accent purple deep | `#6845ab` | `--color-accent-purple-deep` | accent purple deep role extracted from the source design |
| success deep | `#103c25` | `--color-success-deep` | success deep role extracted from the source design |
| success pale | `#c7f0da` | `--color-success-pale` | success pale role extracted from the source design |
| error | `#9e0a0a` | `--color-error` | error role extracted from the source design |
| error deep | `#cc001f` | `--color-error-deep` | error deep role extracted from the source design |

## Tokens — Typography

### Pin Sans · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 700, 400, 500
- **Sizes:** 70px, 44px, 28px, 22px, 18px, 16px, 14px, 12px
- **Line height:** 1.1, 1.15, 1.2, 1.25, 1.3, 1.4, 1.5, 1
- **Letter spacing:** -1.2px, -0.8px, 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 70px | 1.1 | -1.2px | `--text-display-xl` |
| display-lg | 44px | 1.15 | -0.8px | `--text-display-lg` |
| heading-xl | 28px | 1.2 | -1.2px | `--text-heading-xl` |
| heading-lg | 22px | 1.25 | 0 | `--text-heading-lg` |
| heading-md | 18px | 1.3 | 0 | `--text-heading-md` |
| body-md | 16px | 1.4 | 0 | `--text-body-md` |
| body-strong | 16px | 1.4 | 0 | `--text-body-strong` |
| body-sm | 14px | 1.4 | 0 | `--text-body-sm` |
| body-sm-strong | 14px | 1.4 | 0 | `--text-body-sm-strong` |
| caption-md | 12px | 1.5 | 0 | `--text-caption-md` |
| caption-sm | 12px | 1.4 | 0 | `--text-caption-sm` |
| link-md | 16px | 1.4 | 0 | `--text-link-md` |
| button-md | 14px | 1 | 0 | `--text-button-md` |
| button-sm | 12px | 1 | 0 | `--text-button-sm` |

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
| xl | 24px | `--spacing-xl` |
| xxl | 32px | `--spacing-xxl` |
| section | 64px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| sm | 8px | `--radius-sm` |
| md | 16px | `--radius-md` |
| lg | 32px | `--radius-lg` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 64px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `6px 14px`
- **height:** `40px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.primary-pressed}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.secondary-bg}`
- **textColor:** `{colors.on-secondary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `6px 14px`
- **height:** `40px`

### button secondary pressed
**Role:** button secondary pressed component

- **backgroundColor:** `{colors.secondary-pressed}`
- **textColor:** `{colors.on-secondary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`

### button tertiary
**Role:** button tertiary component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **size:** `40px`

### button pill on image
**Role:** button pill on image component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `8px 14px`

### button disabled
**Role:** button disabled component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ash}`
- **rounded:** `{rounded.md}`

### search bar
**Role:** search bar component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.full}`
- **padding:** `11px 15px`
- **height:** `48px`

### search bar focused
**Role:** search bar focused component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `11px 15px`
- **height:** `44px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.md}`

### pin card
**Role:** pin card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.md}`
- **padding:** `0px`

### pin card large
**Role:** pin card large component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.lg}`
- **padding:** `0px`

### pin overlay pill
**Role:** pin overlay pill component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `6px 12px`

### filter chip
**Role:** filter chip component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `8px 16px`

### filter chip active
**Role:** filter chip active component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`

### category tile
**Role:** category tile component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-strong}`
- **rounded:** `{rounded.md}`
- **padding:** `16px`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.heading-xl}`
- **rounded:** `{rounded.md}`
- **padding:** `32px`

### feature card soft
**Role:** feature card soft component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.heading-xl}`
- **rounded:** `{rounded.md}`
- **padding:** `32px`

### modal card
**Role:** modal card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### hero cta strip
**Role:** hero cta strip component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.heading-xl}`
- **rounded:** `{rounded.none}`
- **padding:** `48px 32px`

### primary nav
**Role:** primary nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-strong}`
- **rounded:** `{rounded.none}`
- **height:** `64px`

### footer section
**Role:** footer section component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.mute}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `32px 24px`

### link inline
**Role:** link inline component

- **textColor:** `{colors.ink-soft}`
- **typography:** `{typography.link-md}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Pinterest website](https://www.pinterest.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.pinterest.com/).
