# Claude — Style Reference
> A warm-canvas editorial interface for Anthropic's Claude product. The system anchors on a tinted cream canvas with serif display headlines, warm coral CTAs, and dark navy product surfaces (code editor mockups, model showcase cards). Brand voltage comes from the cream/coral pairing — deliberately warm and humanist where most AI brands use cool blue + slate. Type voice runs a slab-serif display ("Copernicus" / Tiempos Headline) for h1/h2 and a humanist sans for body. The signature Anthropic black-radial-spike mark anchors the wordmark.

**Theme:** light

**Source website:** [https://claude.ai/](https://claude.ai/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#cc785c` | `--color-primary` | primary role extracted from the source design |
| primary active | `#a9583e` | `--color-primary-active` | primary active role extracted from the source design |
| primary disabled | `#e6dfd8` | `--color-primary-disabled` | primary disabled role extracted from the source design |
| ink | `#141413` | `--color-ink` | ink role extracted from the source design |
| body | `#3d3d3a` | `--color-body` | body role extracted from the source design |
| body strong | `#252523` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#6c6a64` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#8e8b82` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#e6dfd8` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#ebe6df` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| canvas | `#faf9f5` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#f5f0e8` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#efe9de` | `--color-surface-card` | surface card role extracted from the source design |
| surface cream strong | `#e8e0d2` | `--color-surface-cream-strong` | surface cream strong role extracted from the source design |
| surface dark | `#181715` | `--color-surface-dark` | surface dark role extracted from the source design |
| surface dark elevated | `#252320` | `--color-surface-dark-elevated` | surface dark elevated role extracted from the source design |
| surface dark soft | `#1f1e1b` | `--color-surface-dark-soft` | surface dark soft role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#faf9f5` | `--color-on-dark` | on dark role extracted from the source design |
| on dark soft | `#a09d96` | `--color-on-dark-soft` | on dark soft role extracted from the source design |
| accent teal | `#5db8a6` | `--color-accent-teal` | accent teal role extracted from the source design |
| accent amber | `#e8a55a` | `--color-accent-amber` | accent amber role extracted from the source design |
| success | `#5db872` | `--color-success` | success role extracted from the source design |
| warning | `#d4a017` | `--color-warning` | warning role extracted from the source design |
| error | `#c64545` | `--color-error` | error role extracted from the source design |

## Tokens — Typography

### Copernicus, Tiempos Headline, serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 64px, 48px, 36px, 28px
- **Line height:** 1.05, 1.1, 1.15, 1.2
- **Letter spacing:** -1.5px, -1px, -0.5px, -0.3px
- **Role:** Brand typography family observed across the documented type scale.

### StyreneB, Inter, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400
- **Sizes:** 22px, 18px, 16px, 14px, 13px, 12px
- **Line height:** 1.3, 1.4, 1.55, 1
- **Letter spacing:** 0, 1.5px
- **Role:** Brand typography family observed across the documented type scale.

### JetBrains Mono, ui-monospace, monospace · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.6
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 64px | 1.05 | -1.5px | `--text-display-xl` |
| display-lg | 48px | 1.1 | -1px | `--text-display-lg` |
| display-md | 36px | 1.15 | -0.5px | `--text-display-md` |
| display-sm | 28px | 1.2 | -0.3px | `--text-display-sm` |
| title-lg | 22px | 1.3 | 0 | `--text-title-lg` |
| title-md | 18px | 1.4 | 0 | `--text-title-md` |
| title-sm | 16px | 1.4 | 0 | `--text-title-sm` |
| body-md | 16px | 1.55 | 0 | `--text-body-md` |
| body-sm | 14px | 1.55 | 0 | `--text-body-sm` |
| caption | 13px | 1.4 | 0 | `--text-caption` |
| caption-uppercase | 12px | 1.4 | 1.5px | `--text-caption-uppercase` |
| code | 14px | 1.6 | 0 | `--text-code` |
| button | 14px | 1 | 0 | `--text-button` |
| nav-link | 14px | 1.4 | 0 | `--text-nav-link` |

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
| xxl | 48px | `--spacing-xxl` |
| section | 96px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| pill | 9999px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`
- **height:** `40px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary-active}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.md}`

### button primary disabled
**Role:** button primary disabled component

- **backgroundColor:** `{colors.primary-disabled}`
- **textColor:** `{colors.muted}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`
- **height:** `40px`

### button secondary on dark
**Role:** button secondary on dark component

- **backgroundColor:** `{colors.surface-dark-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`

### button text link
**Role:** button text link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **size:** `36px`

### text link
**Role:** text link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.body-md}`

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.nav-link}`
- **height:** `64px`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xl}`
- **padding:** `96px`

### hero illustration card
**Role:** hero illustration card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.xl}`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### product mockup card dark
**Role:** product mockup card dark component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### code window card
**Role:** code window card component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### model comparison card
**Role:** model comparison card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing tier card
**Role:** pricing tier card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-lg}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing tier card featured
**Role:** pricing tier card featured component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-lg}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### callout card coral
**Role:** callout card coral component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### connector tile
**Role:** connector tile component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-sm}`
- **rounded:** `{rounded.lg}`
- **padding:** `20px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 14px`
- **height:** `40px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.md}`

### cookie consent card
**Role:** cookie consent card component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### category tab
**Role:** category tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.nav-link}`
- **padding:** `8px 14px`
- **rounded:** `{rounded.md}`

### category tab active
**Role:** category tab active component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.nav-link}`
- **rounded:** `{rounded.md}`

### badge pill
**Role:** badge pill component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 12px`

### badge coral
**Role:** badge coral component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 12px`

### cta band coral
**Role:** cta band coral component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-sm}`
- **rounded:** `{rounded.lg}`
- **padding:** `64px`

### cta band dark
**Role:** cta band dark component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-sm}`
- **rounded:** `{rounded.lg}`
- **padding:** `64px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark-soft}`
- **typography:** `{typography.body-sm}`
- **padding:** `64px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Claude website](https://claude.ai/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://claude.ai/).
