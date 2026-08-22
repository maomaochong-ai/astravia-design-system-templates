# ClickHouse — Style Reference
> A high-performance database interface anchored on near-pure black canvas with electric yellow as the brand voltage. White typography in confident sans, yellow CTAs, and yellow-text stat numbers carry the brand voice across every page. Code blocks and product UI fragments embed directly in dark cards. The yellow + black pairing (and yellow used scarcely as accent) is the system's signature — brand identity without atmospheric decoration.

**Theme:** dark

**Source website:** [https://clickhouse.com/](https://clickhouse.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#faff69` | `--color-primary` | primary role extracted from the source design |
| primary active | `#e6eb52` | `--color-primary-active` | primary active role extracted from the source design |
| primary disabled | `#3a3a1f` | `--color-primary-disabled` | primary disabled role extracted from the source design |
| ink | `#ffffff` | `--color-ink` | ink role extracted from the source design |
| body | `#cccccc` | `--color-body` | body role extracted from the source design |
| body strong | `#e6e6e6` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#888888` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#5a5a5a` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#2a2a2a` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#3a3a3a` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#0a0a0a` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#121212` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#1a1a1a` | `--color-surface-card` | surface card role extracted from the source design |
| surface elevated | `#242424` | `--color-surface-elevated` | surface elevated role extracted from the source design |
| surface yellow band | `#faff69` | `--color-surface-yellow-band` | surface yellow band role extracted from the source design |
| on primary | `#0a0a0a` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on yellow | `#0a0a0a` | `--color-on-yellow` | on yellow role extracted from the source design |
| accent emerald | `#22c55e` | `--color-accent-emerald` | accent emerald role extracted from the source design |
| accent rose | `#ef4444` | `--color-accent-rose` | accent rose role extracted from the source design |
| accent blue | `#3b82f6` | `--color-accent-blue` | accent blue role extracted from the source design |
| success | `#22c55e` | `--color-success` | success role extracted from the source design |
| warning | `#f59e0b` | `--color-warning` | warning role extracted from the source design |
| error | `#ef4444` | `--color-error` | error role extracted from the source design |

## Tokens — Typography

### Inter, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 600, 400, 500
- **Sizes:** 72px, 56px, 40px, 32px, 24px, 18px, 16px, 14px, 13px, 12px
- **Line height:** 1.05, 1.1, 1.15, 1.2, 1.3, 1.4, 1, 1.55
- **Letter spacing:** -2.5px, -2px, -1.5px, -1px, -0.3px, 0, 1.5px
- **Role:** Brand typography family observed across the documented type scale.

### JetBrains Mono, ui-monospace, monospace · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.55
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 72px | 1.05 | -2.5px | `--text-display-xl` |
| display-lg | 56px | 1.1 | -2px | `--text-display-lg` |
| display-md | 40px | 1.15 | -1.5px | `--text-display-md` |
| display-sm | 32px | 1.2 | -1px | `--text-display-sm` |
| title-lg | 24px | 1.3 | -0.3px | `--text-title-lg` |
| title-md | 18px | 1.4 | 0 | `--text-title-md` |
| title-sm | 16px | 1.4 | 0 | `--text-title-sm` |
| stat-display | 56px | 1 | -1.5px | `--text-stat-display` |
| body-md | 16px | 1.55 | 0 | `--text-body-md` |
| body-sm | 14px | 1.55 | 0 | `--text-body-sm` |
| caption | 13px | 1.4 | 0 | `--text-caption` |
| caption-uppercase | 12px | 1.4 | 1.5px | `--text-caption-uppercase` |
| code | 14px | 1.55 | 0 | `--text-code` |
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

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`
- **height:** `40px`

### button text link
**Role:** button text link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button}`

### button icon circular
**Role:** button icon circular component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
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
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.nav-link}`
- **height:** `64px`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.display-xl}`
- **padding:** `96px`

### hero stat card
**Role:** hero stat card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.stat-display}`

### feature card yellow
**Role:** feature card yellow component

- **backgroundColor:** `{colors.surface-yellow-band}`
- **textColor:** `{colors.on-yellow}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### feature card dark
**Role:** feature card dark component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### code window card
**Role:** code window card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### product mockup card
**Role:** product mockup card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### pricing tier card
**Role:** pricing tier card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-lg}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing tier card featured
**Role:** pricing tier card featured component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.title-lg}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### stat callout
**Role:** stat callout component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.stat-display}`

### cta band yellow
**Role:** cta band yellow component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `64px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 14px`
- **height:** `40px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.md}`

### category tab
**Role:** category tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.nav-link}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 14px`

### category tab active
**Role:** category tab active component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.nav-link}`
- **rounded:** `{rounded.md}`

### badge pill
**Role:** badge pill component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 12px`

### badge yellow
**Role:** badge yellow component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 12px`

### events card
**Role:** events card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### customer logo strip
**Role:** customer logo strip component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.body-md}`
- **padding:** `32px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.body-sm}`
- **padding:** `64px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live ClickHouse website](https://clickhouse.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://clickhouse.com/).
