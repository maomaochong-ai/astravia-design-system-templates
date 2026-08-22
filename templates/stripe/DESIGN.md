# Stripi-Inspired — Style Reference
> An inspired interpretation of Stripi's design language — a financial-infrastructure brand built on a deep navy ink, an electric indigo primary, and a recurring atmospheric gradient mesh that occupies the upper third of nearly every marketing page. The system pairs the proprietary Sohne family at thin (300) weights with negative letter-spacing for editorial-density display headlines, and uses tabular-figure body type where money and numerics matter. Buttons are tight-radius pills, cards live on near-white surfaces, and the dashboard track flips polarity to a familiar dark-app shell.

**Theme:** light

**Source website:** [https://stripe.com/](https://stripe.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#533afd` | `--color-primary` | primary role extracted from the source design |
| primary deep | `#4434d4` | `--color-primary-deep` | primary deep role extracted from the source design |
| primary press | `#2e2b8c` | `--color-primary-press` | primary press role extracted from the source design |
| primary soft | `#665efd` | `--color-primary-soft` | primary soft role extracted from the source design |
| primary bg subdued hover | `#b9b9f9` | `--color-primary-bg-subdued-hover` | primary bg subdued hover role extracted from the source design |
| brand dark 900 | `#1c1e54` | `--color-brand-dark-900` | brand dark 900 role extracted from the source design |
| ink | `#0d253d` | `--color-ink` | ink role extracted from the source design |
| ink secondary | `#273951` | `--color-ink-secondary` | ink secondary role extracted from the source design |
| ink mute | `#64748d` | `--color-ink-mute` | ink mute role extracted from the source design |
| ink mute 2 | `#61718a` | `--color-ink-mute-2` | ink mute 2 role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#f6f9fc` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| canvas cream | `#f5e9d4` | `--color-canvas-cream` | canvas cream role extracted from the source design |
| hairline | `#e3e8ee` | `--color-hairline` | hairline role extracted from the source design |
| hairline input | `#a8c3de` | `--color-hairline-input` | hairline input role extracted from the source design |
| ruby | `#ea2261` | `--color-ruby` | ruby role extracted from the source design |
| magenta | `#f96bee` | `--color-magenta` | magenta role extracted from the source design |
| lemon | `#9b6829` | `--color-lemon` | lemon role extracted from the source design |
| shadow blue | `#003770` | `--color-shadow-blue` | shadow blue role extracted from the source design |

## Tokens — Typography

### sohne-var, 'SF Pro Display', system-ui, -apple-system, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 300, 400
- **Sizes:** 56px, 48px, 32px, 26px, 22px, 20px, 18px, 16px, 15px, 14px, 13px, 11px, 10px
- **Line height:** 1.03, 1.15, 1.1, 1.12, 1.4, 1
- **Letter spacing:** -1.4px, -0.96px, -0.64px, -0.26px, -0.22px, -0.2px, 0, -0.42px, -0.39px, 0.1px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 56px | 1.03 | -1.4px | `--text-display-xxl` |
| display-xl | 48px | 1.15 | -0.96px | `--text-display-xl` |
| display-lg | 32px | 1.1 | -0.64px | `--text-display-lg` |
| display-md | 26px | 1.12 | -0.26px | `--text-display-md` |
| heading-lg | 22px | 1.1 | -0.22px | `--text-heading-lg` |
| heading-md | 20px | 1.4 | -0.2px | `--text-heading-md` |
| heading-sm | 18px | 1.4 | 0 | `--text-heading-sm` |
| body-lg | 16px | 1.4 | 0 | `--text-body-lg` |
| body-md | 15px | 1.4 | 0 | `--text-body-md` |
| body-tabular | 14px | 1.4 | -0.42px | `--text-body-tabular` |
| button-md | 16px | 1 | 0 | `--text-button-md` |
| button-sm | 14px | 1 | 0 | `--text-button-sm` |
| caption | 13px | 1.4 | -0.39px | `--text-caption` |
| micro | 11px | 1.4 | 0 | `--text-micro` |
| micro-cap | 10px | 1.15 | 0.1px | `--text-micro-cap` |

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
| xxl | 32px | `--spacing-xxl` |
| huge | 64px | `--spacing-huge` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| pill | 9999px | `--radius-pill` |

### Layout

- **Section gap:** 32px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### button primary pill
**Role:** button primary pill component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`

### button primary pill pressed
**Role:** button primary pill pressed component

- **backgroundColor:** `{colors.primary-press}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`

### button on dark
**Role:** button on dark component

- **backgroundColor:** `{colors.brand-dark-900}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 12px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 12px`

### card feature light
**Role:** card feature light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card pricing
**Role:** card pricing component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card pricing featured
**Role:** card pricing featured component

- **backgroundColor:** `{colors.brand-dark-900}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card cream band
**Role:** card cream band component

- **backgroundColor:** `{colors.canvas-cream}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### card dashboard mockup
**Role:** card dashboard mockup component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-tabular}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### pill tag soft
**Role:** pill tag soft component

- **backgroundColor:** `{colors.primary-bg-subdued-hover}`
- **textColor:** `{colors.primary-deep}`
- **typography:** `{typography.micro-cap}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 8px`

### nav bar on mesh
**Role:** nav bar on mesh component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `16px 24px`

### link on light
**Role:** link on light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xs}`
- **padding:** `0px`

### footer light
**Role:** footer light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-mute}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.xs}`
- **padding:** `64px 24px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Stripi-Inspired website](https://stripe.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://stripe.com/).
