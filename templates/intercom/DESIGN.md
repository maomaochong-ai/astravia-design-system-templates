# Intercom — Style Reference
> An editorial customer-service marketing canvas built around a soft cream-white ground, charcoal type set in Saans (Intercom's proprietary geometric sans), and a single confident Fin Orange (#ff5600) reserved for the Fin AI brand. Cards live as floating white tiles with thin hairline borders and minimal radii (8–16px). Display headlines run Saans at weight 500 with measured negative tracking. The system reads as a careful, product-led publication: product screenshots dominate, ornament is rare, and the only place chromatic energy enters is the Fin Orange CTA.

**Theme:** light

**Source website:** [https://www.intercom.com/](https://www.intercom.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#111111` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#111111` | `--color-ink` | ink role extracted from the source design |
| ink muted | `#626260` | `--color-ink-muted` | ink muted role extracted from the source design |
| ink subtle | `#7b7b78` | `--color-ink-subtle` | ink subtle role extracted from the source design |
| ink tertiary | `#9c9fa5` | `--color-ink-tertiary` | ink tertiary role extracted from the source design |
| canvas | `#f5f1ec` | `--color-canvas` | canvas role extracted from the source design |
| surface 1 | `#ffffff` | `--color-surface-1` | surface 1 role extracted from the source design |
| surface 2 | `#ebe7e1` | `--color-surface-2` | surface 2 role extracted from the source design |
| inverse canvas | `#000000` | `--color-inverse-canvas` | inverse canvas role extracted from the source design |
| inverse surface 1 | `#313130` | `--color-inverse-surface-1` | inverse surface 1 role extracted from the source design |
| inverse ink | `#ffffff` | `--color-inverse-ink` | inverse ink role extracted from the source design |
| inverse ink muted | `#9c9fa5` | `--color-inverse-ink-muted` | inverse ink muted role extracted from the source design |
| hairline | `#d3cec6` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#ebe7e1` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| fin orange | `#ff5600` | `--color-fin-orange` | fin orange role extracted from the source design |
| report orange | `#fe4c02` | `--color-report-orange` | report orange role extracted from the source design |
| report blue | `#65b5ff` | `--color-report-blue` | report blue role extracted from the source design |
| report green | `#0bdf50` | `--color-report-green` | report green role extracted from the source design |
| report pink | `#ff2067` | `--color-report-pink` | report pink role extracted from the source design |
| report lime | `#b3e01c` | `--color-report-lime` | report lime role extracted from the source design |
| report cyan | `#03b2cb` | `--color-report-cyan` | report cyan role extracted from the source design |
| brand blue | `#0007cb` | `--color-brand-blue` | brand blue role extracted from the source design |
| semantic error | `#c41c1c` | `--color-semantic-error` | semantic error role extracted from the source design |
| semantic success | `#0bdf50` | `--color-semantic-success` | semantic success role extracted from the source design |

## Tokens — Typography

### Saans · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400
- **Sizes:** 72px, 56px, 40px, 28px, 22px, 20px, 18px, 16px, 14px, 12px, 15px
- **Line height:** 1.05, 1.1, 1.15, 1.2, 1.25, 1.4, 1.5, 1.3
- **Letter spacing:** -2.0px, -1.4px, -0.8px, -0.5px, -0.3px, -0.2px, -0.1px, 0
- **Role:** Brand typography family observed across the documented type scale.

### SaansMono · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 72px | 1.05 | -2.0px | `--text-display-xl` |
| display-lg | 56px | 1.1 | -1.4px | `--text-display-lg` |
| display-md | 40px | 1.15 | -0.8px | `--text-display-md` |
| headline | 28px | 1.2 | -0.5px | `--text-headline` |
| card-title | 22px | 1.25 | -0.3px | `--text-card-title` |
| subhead | 20px | 1.4 | -0.2px | `--text-subhead` |
| body-lg | 18px | 1.5 | -0.1px | `--text-body-lg` |
| body | 16px | 1.5 | 0 | `--text-body` |
| body-sm | 14px | 1.5 | 0 | `--text-body-sm` |
| caption | 12px | 1.4 | 0 | `--text-caption` |
| button | 15px | 1.2 | 0 | `--text-button` |
| eyebrow | 14px | 1.3 | 0 | `--text-eyebrow` |
| mono | 13px | 1.5 | 0 | `--text-mono` |

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

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.inverse-canvas}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.surface-1}`
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

### button fin
**Role:** button fin component

- **backgroundColor:** `{colors.fin-orange}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`

### pricing card
**Role:** pricing card component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### pricing card featured
**Role:** pricing card featured component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-primary}`
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

### product mockup card
**Role:** product mockup card component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.xl}`
- **padding:** `24px`

### testimonial card
**Role:** testimonial card component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-lg}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### customer logo tile
**Role:** customer logo tile component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.xs}`
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

### pricing tab default
**Role:** pricing tab default component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`

### pricing tab selected
**Role:** pricing tab selected component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.pill}`
- **padding:** `8px 16px`

### faq row
**Role:** faq row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.md}`
- **padding:** `24px`

### cta banner
**Role:** cta banner component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.headline}`
- **rounded:** `{rounded.lg}`
- **padding:** `48px`

### startup discount card
**Role:** startup discount card component

- **backgroundColor:** `{colors.surface-2}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.xs}`
- **height:** `56px`

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
- Compare major implementation decisions against [the live Intercom website](https://www.intercom.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.intercom.com/).
