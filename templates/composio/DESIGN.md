# Composio — Style Reference
> A developer-tools brand for AI-agent tool integration whose marketing surfaces lean into a dark, technical aesthetic with a single deep-electric-blue voltage (`#0007cd`). The page floor is near-black (`#0f0f0f`); cards float above on subtle gray-tinted surfaces. abcDiatype carries display and body in a single sans family with weights 400-600. The brand's strongest visual signature is a four-pane terminal-style mockup (a 2×2 grid of dark code/output panels) with a central blue spotlight glow — used as the homepage hero anchor.

**Theme:** dark

**Source website:** [https://composio.dev/](https://composio.dev/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#0007cd` | `--color-primary` | primary role extracted from the source design |
| primary active | `#0005a3` | `--color-primary-active` | primary active role extracted from the source design |
| primary glow | `#1a26ff` | `--color-primary-glow` | primary glow role extracted from the source design |
| ink | `#ffffff` | `--color-ink` | ink role extracted from the source design |
| body | `#a8a8a8` | `--color-body` | body role extracted from the source design |
| body strong | `#ffffff` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#888888` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#666666` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#222222` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#1a1a1a` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| hairline strong | `#333333` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#0f0f0f` | `--color-canvas` | canvas role extracted from the source design |
| canvas deep | `#000000` | `--color-canvas-deep` | canvas deep role extracted from the source design |
| surface card | `#181818` | `--color-surface-card` | surface card role extracted from the source design |
| surface card elevated | `#222222` | `--color-surface-card-elevated` | surface card elevated role extracted from the source design |
| surface strong | `#2a2a2a` | `--color-surface-strong` | surface strong role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| accent cyan | `#00d4ff` | `--color-accent-cyan` | accent cyan role extracted from the source design |
| accent violet | `#7b3aed` | `--color-accent-violet` | accent violet role extracted from the source design |
| semantic error | `#ff4d4d` | `--color-semantic-error` | semantic error role extracted from the source design |
| semantic success | `#33d17a` | `--color-semantic-success` | semantic success role extracted from the source design |

## Tokens — Typography

### 'abcDiatype', ui-sans-serif, system-ui, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 600, 400
- **Sizes:** 72px, 56px, 44px, 32px, 24px, 18px, 16px, 14px, 13px, 11px
- **Line height:** 1.05, 1.1, 1.15, 1.25, 1.4, 1.5, 1
- **Letter spacing:** -2.16px, -1.68px, -1.32px, -0.96px, -0.5px, 0, 0.88px
- **Role:** Brand typography family observed across the documented type scale.

### 'JetBrains Mono', 'Fira Code', monospace · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-mega | 72px | 1.05 | -2.16px | `--text-display-mega` |
| display-xl | 56px | 1.05 | -1.68px | `--text-display-xl` |
| display-lg | 44px | 1.1 | -1.32px | `--text-display-lg` |
| display-md | 32px | 1.15 | -0.96px | `--text-display-md` |
| display-sm | 24px | 1.25 | -0.5px | `--text-display-sm` |
| title-md | 18px | 1.4 | 0 | `--text-title-md` |
| title-sm | 16px | 1.4 | 0 | `--text-title-sm` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-sm | 14px | 1.5 | 0 | `--text-body-sm` |
| caption | 13px | 1.4 | 0 | `--text-caption` |
| caption-uppercase | 11px | 1.4 | 0.88px | `--text-caption-uppercase` |
| code | 13px | 1.5 | 0 | `--text-code` |
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
| base | 16px | `--spacing-base` |
| md | 20px | `--spacing-md` |
| lg | 24px | `--spacing-lg` |
| xl | 32px | `--spacing-xl` |
| xxl | 48px | `--spacing-xxl` |
| section | 96px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
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
- **Element gap:** 20px
- **Max content width:** 1200px

## Components

### top nav dark
**Role:** top nav dark component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.nav-link}`
- **height:** `64px`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`
- **height:** `40px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary-active}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.md}`

### button secondary dark
**Role:** button secondary dark component

- **backgroundColor:** `{colors.surface-card-elevated}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`
- **height:** `40px`

### button outline
**Role:** button outline component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `9px 17px`
- **height:** `40px`

### button tertiary text
**Role:** button tertiary text component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.button}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.display-mega}`
- **padding:** `96px`

### terminal mockup grid
**Role:** terminal mockup grid component

- **backgroundColor:** `{colors.canvas-deep}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.xl}`
- **padding:** `32px`

### terminal pane
**Role:** terminal pane component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.lg}`
- **padding:** `20px`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `28px`

### toolkit card
**Role:** toolkit card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.title-sm}`
- **rounded:** `{rounded.lg}`
- **padding:** `20px`

### toolkit icon
**Role:** toolkit icon component

- **backgroundColor:** `{colors.surface-card-elevated}`
- **rounded:** `{rounded.md}`
- **size:** `40px`

### spotlight glow card
**Role:** spotlight glow card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `48px`

### code block
**Role:** code block component

- **backgroundColor:** `{colors.canvas-deep}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.lg}`
- **padding:** `20px`

### badge pill
**Role:** badge pill component

- **backgroundColor:** `{colors.surface-card-elevated}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 16px`
- **height:** `44px`

### search input
**Role:** search input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 16px`
- **height:** `40px`

### cta band spotlight
**Role:** cta band spotlight component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body-strong}`
- **typography:** `{typography.display-lg}`
- **padding:** `96px`

### testimonial card
**Role:** testimonial card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### footer dark
**Role:** footer dark component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`
- **padding:** `64px 48px`

### footer link
**Role:** footer link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Composio website](https://composio.dev/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://composio.dev/).
