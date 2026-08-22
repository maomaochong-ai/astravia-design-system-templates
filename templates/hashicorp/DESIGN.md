# HashiCorp — Style Reference
> An enterprise-infrastructure marketing canvas built around a near-black ground (#000000) and a system of per-product accent colors — Terraform purple, Vault yellow, Consul pink, Waypoint cyan, Vagrant blue — that act as identity tokens rather than decorative palette. Display type is hashicorpSans set in 600/700 with tight 1.17–1.21 line-heights; body type runs the same family at 500 weight with relaxed 1.50–1.71 line-heights. Cards live as charcoal surfaces with 1px translucent gray borders; product showcase cards lift into per-product chromatic gradients. The system reads as confident, technical, and intentionally multi-product — every section quietly signals which HashiCorp tool it represents.

**Theme:** dark

**Source website:** [https://www.hashicorp.com/](https://www.hashicorp.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#000000` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| accent blue | `#2b89ff` | `--color-accent-blue` | accent blue role extracted from the source design |
| ink | `#ffffff` | `--color-ink` | ink role extracted from the source design |
| ink muted | `#b2b6bd` | `--color-ink-muted` | ink muted role extracted from the source design |
| ink subtle | `#656a76` | `--color-ink-subtle` | ink subtle role extracted from the source design |
| canvas | `#000000` | `--color-canvas` | canvas role extracted from the source design |
| surface 1 | `#15181e` | `--color-surface-1` | surface 1 role extracted from the source design |
| surface 2 | `#1f232b` | `--color-surface-2` | surface 2 role extracted from the source design |
| surface 3 | `#3b3d45` | `--color-surface-3` | surface 3 role extracted from the source design |
| hairline | `#3b3d45` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#252830` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| inverse canvas | `#ffffff` | `--color-inverse-canvas` | inverse canvas role extracted from the source design |
| inverse ink | `#000000` | `--color-inverse-ink` | inverse ink role extracted from the source design |
| product terraform | `#7b42bc` | `--color-product-terraform` | product terraform role extracted from the source design |
| product terraform bright | `#911ced` | `--color-product-terraform-bright` | product terraform bright role extracted from the source design |
| product vault | `#ffcf25` | `--color-product-vault` | product vault role extracted from the source design |
| product consul | `#e62b1e` | `--color-product-consul` | product consul role extracted from the source design |
| product waypoint | `#14c6cb` | `--color-product-waypoint` | product waypoint role extracted from the source design |
| product waypoint deep | `#12b6bb` | `--color-product-waypoint-deep` | product waypoint deep role extracted from the source design |
| product vagrant | `#1868f2` | `--color-product-vagrant` | product vagrant role extracted from the source design |
| product nomad | `#00ca8e` | `--color-product-nomad` | product nomad role extracted from the source design |
| product boundary | `#f24c53` | `--color-product-boundary` | product boundary role extracted from the source design |
| amber 100 | `#fbeabf` | `--color-amber-100` | amber 100 role extracted from the source design |
| amber 200 | `#bb5a00` | `--color-amber-200` | amber 200 role extracted from the source design |
| blue 7 | `#101a59` | `--color-blue-7` | blue 7 role extracted from the source design |
| semantic success | `#00ca8e` | `--color-semantic-success` | semantic success role extracted from the source design |
| semantic warning | `#ffcf25` | `--color-semantic-warning` | semantic warning role extracted from the source design |
| semantic error | `#e62b1e` | `--color-semantic-error` | semantic error role extracted from the source design |
| semantic visited | `#a737ff` | `--color-semantic-visited` | semantic visited role extracted from the source design |

## Tokens — Typography

### hashicorpSans · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 600, 500
- **Sizes:** 80px, 56px, 40px, 28px, 22px, 20px, 18px, 16px, 14px, 13px, 12px
- **Line height:** 1.17, 1.18, 1.19, 1.21, 1.35, 1.69, 1.5, 1.71, 1.38, 1.29, 1.23
- **Letter spacing:** -2.5px, -1.6px, -1.0px, -0.6px, -0.4px, -0.2px, 0, 0.2px, 0.6px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 80px | 1.17 | -2.5px | `--text-display-xl` |
| display-lg | 56px | 1.18 | -1.6px | `--text-display-lg` |
| display-md | 40px | 1.19 | -1.0px | `--text-display-md` |
| headline | 28px | 1.21 | -0.6px | `--text-headline` |
| card-title | 22px | 1.18 | -0.4px | `--text-card-title` |
| subhead | 20px | 1.35 | -0.2px | `--text-subhead` |
| body-lg | 18px | 1.69 | 0 | `--text-body-lg` |
| body | 16px | 1.5 | 0 | `--text-body` |
| body-sm | 14px | 1.71 | 0 | `--text-body-sm` |
| caption | 13px | 1.38 | 0.2px | `--text-caption` |
| button | 14px | 1.29 | 0 | `--text-button` |
| eyebrow | 12px | 1.23 | 0.6px | `--text-eyebrow` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| hair | 1px | `--spacing-hair` |
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
| xxl | 24px | `--radius-xxl` |
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

- **backgroundColor:** `{colors.inverse-canvas}`
- **textColor:** `{colors.inverse-ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.inverse-canvas}`
- **textColor:** `{colors.inverse-ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.surface-2}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### button tertiary
**Role:** button tertiary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### button product terraform
**Role:** button product terraform component

- **backgroundColor:** `{colors.product-terraform}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### button product vault
**Role:** button product vault component

- **backgroundColor:** `{colors.product-vault}`
- **textColor:** `{colors.inverse-ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### button product waypoint
**Role:** button product waypoint component

- **backgroundColor:** `{colors.product-waypoint}`
- **textColor:** `{colors.inverse-ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### product card
**Role:** product card component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### product card terraform
**Role:** product card terraform component

- **backgroundColor:** `{colors.product-terraform}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### product card vault
**Role:** product card vault component

- **backgroundColor:** `{colors.product-vault}`
- **textColor:** `{colors.inverse-ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### product card waypoint
**Role:** product card waypoint component

- **backgroundColor:** `{colors.product-waypoint}`
- **textColor:** `{colors.inverse-ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### pricing card
**Role:** pricing card component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing card featured
**Role:** pricing card featured component

- **backgroundColor:** `{colors.surface-2}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### resource card
**Role:** resource card component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.lg}`
- **padding:** `16px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 14px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 14px`

### product pill
**Role:** product pill component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.xs}`
- **height:** `64px`

### comparison row
**Role:** comparison row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.xs}`

### cta banner
**Role:** cta banner component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.subhead}`
- **rounded:** `{rounded.xxl}`
- **padding:** `48px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.xs}`
- **padding:** `64px 32px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live HashiCorp website](https://www.hashicorp.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.hashicorp.com/).
