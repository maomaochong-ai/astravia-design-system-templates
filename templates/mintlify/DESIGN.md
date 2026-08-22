# Mintlify — Style Reference
> Mintlify presents documentation infrastructure with a dual-mode aesthetic — atmospheric sky-gradient marketing heroes (cloud illustration backdrops, soft cream-to-blue washes) paired with dense developer-grade documentation surfaces. The system uses Inter for UI prose, Geist Mono for code, and a signature Mintlify green ({colors.brand-green}) reserved for accent CTAs and active states. Black-pill primary buttons dominate marketing, white-on-dark inversions appear on dark hero bands, and a 3-column documentation layout (sidebar / prose / TOC) anchors the developer experience. Coverage spans homepage, startups program, pricing comparison, and the live tabs documentation page.

**Theme:** light

**Source website:** [https://www.mintlify.com/](https://www.mintlify.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#0a0a0a` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| brand green | `#00d4a4` | `--color-brand-green` | brand green role extracted from the source design |
| brand green deep | `#00b48a` | `--color-brand-green-deep` | brand green deep role extracted from the source design |
| brand green soft | `#7cebcb` | `--color-brand-green-soft` | brand green soft role extracted from the source design |
| brand tag | `#3772cf` | `--color-brand-tag` | brand tag role extracted from the source design |
| brand warn | `#c37d0d` | `--color-brand-warn` | brand warn role extracted from the source design |
| brand annotate | `#1ba673` | `--color-brand-annotate` | brand annotate role extracted from the source design |
| brand error | `#d45656` | `--color-brand-error` | brand error role extracted from the source design |
| brand cursor | `#888888` | `--color-brand-cursor` | brand cursor role extracted from the source design |
| hero sky from | `#87a8c8` | `--color-hero-sky-from` | hero sky from role extracted from the source design |
| hero sky to | `#f5e9d8` | `--color-hero-sky-to` | hero sky to role extracted from the source design |
| hero dark from | `#1a3d4a` | `--color-hero-dark-from` | hero dark from role extracted from the source design |
| hero dark to | `#2d5a4f` | `--color-hero-dark-to` | hero dark to role extracted from the source design |
| testimonial orange | `#f55a3c` | `--color-testimonial-orange` | testimonial orange role extracted from the source design |
| testimonial orange deep | `#cc3a1f` | `--color-testimonial-orange-deep` | testimonial orange deep role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas dark | `#0a0a0a` | `--color-canvas-dark` | canvas dark role extracted from the source design |
| surface | `#f7f7f7` | `--color-surface` | surface role extracted from the source design |
| surface soft | `#fafafa` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface code | `#1c1c1e` | `--color-surface-code` | surface code role extracted from the source design |
| hairline | `#e5e5e5` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#ededed` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| hairline dark | `#1f1f1f` | `--color-hairline-dark` | hairline dark role extracted from the source design |
| ink | `#0a0a0a` | `--color-ink` | ink role extracted from the source design |
| charcoal | `#1c1c1e` | `--color-charcoal` | charcoal role extracted from the source design |
| slate | `#3a3a3c` | `--color-slate` | slate role extracted from the source design |
| steel | `#5a5a5c` | `--color-steel` | steel role extracted from the source design |
| stone | `#888888` | `--color-stone` | stone role extracted from the source design |
| muted | `#a8a8aa` | `--color-muted` | muted role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on dark muted | `#b3b3b3` | `--color-on-dark-muted` | on dark muted role extracted from the source design |

## Tokens — Typography

### Inter · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 400, 500
- **Sizes:** 72px, 56px, 48px, 36px, 28px, 22px, 18px, 16px, 14px, 13px, 12px, 11px
- **Line height:** 1.05, 1.1, 1.2, 1.25, 1.3, 1.4, 1.5
- **Letter spacing:** -2px, -1.5px, -1px, -0.5px, 0, 0.5px
- **Role:** Brand typography family observed across the documented type scale.

### Geist Mono · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 14px, 13px
- **Line height:** 1.5, 1.4, 1.3
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| hero-display | 72px | 1.05 | -2px | `--text-hero-display` |
| display-lg | 56px | 1.1 | -1.5px | `--text-display-lg` |
| heading-1 | 48px | 1.1 | -1px | `--text-heading-1` |
| heading-2 | 36px | 1.2 | -0.5px | `--text-heading-2` |
| heading-3 | 28px | 1.25 | 0 | `--text-heading-3` |
| heading-4 | 22px | 1.3 | 0 | `--text-heading-4` |
| heading-5 | 18px | 1.4 | 0 | `--text-heading-5` |
| subtitle | 18px | 1.5 | 0 | `--text-subtitle` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-md-medium | 16px | 1.5 | 0 | `--text-body-md-medium` |
| body-sm | 14px | 1.5 | 0 | `--text-body-sm` |
| body-sm-medium | 14px | 1.5 | 0 | `--text-body-sm-medium` |
| caption | 13px | 1.4 | 0 | `--text-caption` |
| caption-bold | 13px | 1.4 | 0 | `--text-caption-bold` |
| micro | 12px | 1.4 | 0 | `--text-micro` |
| micro-uppercase | 11px | 1.4 | 0.5px | `--text-micro-uppercase` |
| button-md | 14px | 1.3 | 0 | `--text-button-md` |
| code-md | 14px | 1.5 | 0 | `--text-code-md` |
| code-sm | 13px | 1.4 | 0 | `--text-code-sm` |
| code-inline | 13px | 1.3 | 0 | `--text-code-inline` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 8px | `--spacing-xs` |
| sm | 12px | `--spacing-sm` |
| md | 16px | `--spacing-md` |
| lg | 20px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| xxl | 32px | `--spacing-xxl` |
| xxxl | 40px | `--spacing-xxxl` |
| section-sm | 48px | `--spacing-section-sm` |
| section | 64px | `--spacing-section` |
| section-lg | 96px | `--spacing-section-lg` |
| hero | 120px | `--spacing-hero` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| xxl | 24px | `--radius-xxl` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 64px
- **Card padding:** 20px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `10px 20px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.charcoal}`
- **textColor:** `{colors.on-primary}`

### button primary disabled
**Role:** button primary disabled component

- **backgroundColor:** `{colors.hairline}`
- **textColor:** `{colors.muted}`

### button accent green
**Role:** button accent green component

- **backgroundColor:** `{colors.brand-green}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `10px 20px`

### button on dark
**Role:** button on dark component

- **backgroundColor:** `{colors.on-dark}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `10px 20px`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.full}`
- **padding:** `10px 20px`
- **border:** `1px solid {colors.hairline}`

### button ghost
**Role:** button ghost component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 12px`

### button link
**Role:** button link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-medium}`
- **padding:** `0`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **size:** `32px`
- **border:** `1px solid {colors.hairline}`

### card base
**Role:** card base component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`
- **border:** `1px solid {colors.hairline}`

### card feature
**Role:** card feature component

- **backgroundColor:** `{colors.surface}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xxl}`

### card help
**Role:** card help component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`
- **border:** `1px solid {colors.hairline}`

### card startup perk
**Role:** card startup perk component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`
- **border:** `1px solid {colors.hairline}`

### pricing card
**Role:** pricing card component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xxl}`
- **border:** `1px solid {colors.hairline}`

### pricing card featured
**Role:** pricing card featured component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xxl}`
- **border:** `2px solid {colors.brand-green}`
- **shadow:** `rgba(0, 212, 164, 0.08) 0px 8px 24px`

### testimonial card feature
**Role:** testimonial card feature component

- **backgroundColor:** `{colors.testimonial-orange}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.section}`

### testimonial card quote
**Role:** testimonial card quote component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xxl}`
- **border:** `1px solid {colors.hairline}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.sm} {spacing.md}`
- **border:** `1px solid {colors.hairline}`
- **height:** `40px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **border:** `2px solid {colors.brand-green}`

### search pill
**Role:** search pill component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xs} {spacing.md}`
- **height:** `36px`
- **border:** `1px solid {colors.hairline}`

### segmented tab
**Role:** segmented tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-sm-medium}`
- **padding:** `{spacing.sm} {spacing.md}`
- **border:** `0 0 2px transparent solid`

### segmented tab active
**Role:** segmented tab active component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-medium}`
- **border:** `0 0 2px {colors.ink} solid`

### pill tab
**Role:** pill tab component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-sm-medium}`
- **rounded:** `{rounded.full}`
- **padding:** `8px 16px`
- **border:** `1px solid {colors.hairline}`

### pill tab active
**Role:** pill tab active component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.full}`
- **border:** `1px solid {colors.primary}`

### toggle monthly yearly
**Role:** toggle monthly yearly component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **padding:** `4px`

### badge discount
**Role:** badge discount component

- **backgroundColor:** `{colors.brand-green}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.caption-bold}`
- **rounded:** `{rounded.full}`
- **padding:** `2px 8px`

### badge required
**Role:** badge required component

- **backgroundColor:** `{colors.brand-error}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.micro-uppercase}`
- **rounded:** `{rounded.sm}`
- **padding:** `2px 6px`

### badge type
**Role:** badge type component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.code-sm}`
- **rounded:** `{rounded.sm}`
- **padding:** `2px 6px`

### badge tag
**Role:** badge tag component

- **backgroundColor:** `rgba(55, 114, 207, 0.15)`
- **textColor:** `{colors.brand-tag}`
- **typography:** `{typography.caption-bold}`
- **rounded:** `{rounded.sm}`
- **padding:** `2px 8px`

### promo banner
**Role:** promo banner component

- **backgroundColor:** `{colors.canvas-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-sm-medium}`
- **padding:** `{spacing.sm} {spacing.md}`

### code block
**Role:** code block component

- **backgroundColor:** `{colors.surface-code}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.code-md}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.md}`

### code block header
**Role:** code block header component

- **backgroundColor:** `{colors.surface-code}`
- **textColor:** `{colors.on-dark-muted}`
- **typography:** `{typography.caption}`
- **padding:** `{spacing.xs} {spacing.md}`
- **border:** `0 0 1px {colors.hairline-dark} solid`

### code inline
**Role:** code inline component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.charcoal}`
- **typography:** `{typography.code-inline}`
- **rounded:** `{rounded.xs}`
- **padding:** `2px 6px`
- **border:** `1px solid {colors.hairline}`

### property row
**Role:** property row component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.md} 0`
- **border:** `0 0 1px {colors.hairline-soft} solid`

### feature comparison table
**Role:** feature comparison table component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.md}`
- **border:** `1px solid {colors.hairline}`

### feature comparison row
**Role:** feature comparison row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **padding:** `{spacing.md} {spacing.lg}`
- **border:** `0 0 1px {colors.hairline-soft} solid`

### sidebar nav item
**Role:** sidebar nav item component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xs} {spacing.md}`

### sidebar nav item active
**Role:** sidebar nav item active component

- **backgroundColor:** `{colors.surface}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-medium}`

### sidebar section header
**Role:** sidebar section header component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.micro-uppercase}`
- **padding:** `{spacing.md} {spacing.md} {spacing.xs}`

### doc toc item
**Role:** doc toc item component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.xxs} 0`

### doc toc item active
**Role:** doc toc item active component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm-medium}`

### copy code button
**Role:** copy code button component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark-muted}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.sm}`
- **padding:** `{spacing.xxs} {spacing.xs}`
- **border:** `1px solid {colors.hairline-dark}`

### hero band sky
**Role:** hero band sky component

- **backgroundColor:** `{colors.hero-sky-from}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `0`
- **padding:** `{spacing.hero}`

### hero band dark
**Role:** hero band dark component

- **backgroundColor:** `{colors.hero-dark-from}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `0`
- **padding:** `{spacing.hero}`

### hero product mockup
**Role:** hero product mockup component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `0`
- **border:** `1px solid {colors.hairline-soft}`
- **shadow:** `rgba(0, 0, 0, 0.12) 0px 24px 48px -8px`

### logo wall item
**Role:** logo wall item component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-md-medium}`
- **padding:** `{spacing.lg}`

### faq accordion item
**Role:** faq accordion item component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.md}`
- **padding:** `{spacing.xl}`
- **border:** `1px solid {colors.hairline-soft}`

### footer region
**Role:** footer region component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.section} {spacing.xxl}`
- **border:** `1px solid {colors.hairline}`

### footer link
**Role:** footer link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.steel}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.xxs} 0`

### startup program card
**Role:** startup program card component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xxl}`
- **border:** `1px solid {colors.hairline}`

### founder quote card
**Role:** founder quote card component

- **backgroundColor:** `{colors.testimonial-orange}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xxl}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Mintlify website](https://www.mintlify.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.mintlify.com/).
