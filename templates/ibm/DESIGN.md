# IBM — Style Reference
> An enterprise-marketing canvas faithful to Carbon Design System: white surfaces, charcoal type, IBM Blue (#0f62fe) as the single confident accent, and a deliberately flat-square aesthetic where corners stay at 0–4px. Type runs IBM Plex Sans at light weight 300 for display sizes (a brand signature) and 400/600 for body and emphasis. Cards live as thin-bordered tiles with no shadow; sections separate via subtle gray rows. The chrome is square, the typography is light, and the only color in the system is one assertive blue — the result reads as old-world enterprise gravitas reframed for the cloud era.

**Theme:** light

**Source website:** [https://www.ibm.com/](https://www.ibm.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#0f62fe` | `--color-primary` | primary role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#161616` | `--color-ink` | ink role extracted from the source design |
| ink muted | `#525252` | `--color-ink-muted` | ink muted role extracted from the source design |
| ink subtle | `#8c8c8c` | `--color-ink-subtle` | ink subtle role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| surface 1 | `#f4f4f4` | `--color-surface-1` | surface 1 role extracted from the source design |
| surface 2 | `#e0e0e0` | `--color-surface-2` | surface 2 role extracted from the source design |
| inverse canvas | `#161616` | `--color-inverse-canvas` | inverse canvas role extracted from the source design |
| inverse surface 1 | `#262626` | `--color-inverse-surface-1` | inverse surface 1 role extracted from the source design |
| inverse ink | `#ffffff` | `--color-inverse-ink` | inverse ink role extracted from the source design |
| inverse ink muted | `#c6c6c6` | `--color-inverse-ink-muted` | inverse ink muted role extracted from the source design |
| hairline | `#e0e0e0` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#161616` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| blue 60 | `#0043ce` | `--color-blue-60` | blue 60 role extracted from the source design |
| blue 80 | `#002d9c` | `--color-blue-80` | blue 80 role extracted from the source design |
| blue hover | `#0050e6` | `--color-blue-hover` | blue hover role extracted from the source design |
| semantic success | `#24a148` | `--color-semantic-success` | semantic success role extracted from the source design |
| semantic warning | `#f1c21b` | `--color-semantic-warning` | semantic warning role extracted from the source design |
| semantic error | `#da1e28` | `--color-semantic-error` | semantic error role extracted from the source design |
| semantic info | `#0f62fe` | `--color-semantic-info` | semantic info role extracted from the source design |

## Tokens — Typography

### IBM Plex Sans · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 300, 400, 600
- **Sizes:** 76px, 60px, 42px, 32px, 24px, 20px, 18px, 16px, 14px, 12px
- **Line height:** 1.17, 1.2, 1.25, 1.33, 1.4, 1.5, 1.29
- **Letter spacing:** -0.5px, -0.4px, 0, 0.16px, 0.32px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 76px | 1.17 | -0.5px | `--text-display-xl` |
| display-lg | 60px | 1.17 | -0.4px | `--text-display-lg` |
| display-md | 42px | 1.2 | 0 | `--text-display-md` |
| headline | 32px | 1.25 | 0 | `--text-headline` |
| card-title | 24px | 1.33 | 0 | `--text-card-title` |
| subhead | 20px | 1.4 | 0 | `--text-subhead` |
| body-lg | 18px | 1.5 | 0 | `--text-body-lg` |
| body | 16px | 1.5 | 0.16px | `--text-body` |
| body-sm | 14px | 1.29 | 0.16px | `--text-body-sm` |
| body-emphasis | 14px | 1.29 | 0.16px | `--text-body-emphasis` |
| caption | 12px | 1.33 | 0.32px | `--text-caption` |
| button | 14px | 1.29 | 0.16px | `--text-button` |
| eyebrow | 14px | 1.29 | 0.16px | `--text-eyebrow` |

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
| none | 0px | `--radius-none` |
| xs | 2px | `--radius-xs` |
| sm | 4px | `--radius-sm` |
| md | 6px | `--radius-md` |
| lg | 8px | `--radius-lg` |
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
- **rounded:** `{rounded.none}`
- **padding:** `12px 16px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.blue-80}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.inverse-ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `12px 16px`

### button tertiary
**Role:** button tertiary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `12px 16px`

### button ghost
**Role:** button ghost component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `12px 16px`

### button danger
**Role:** button danger component

- **backgroundColor:** `{colors.semantic-error}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.none}`
- **padding:** `12px 16px`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### feature card elevated
**Role:** feature card elevated component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### product card
**Role:** product card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.none}`
- **padding:** `32px`

### hero card
**Role:** hero card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-md}`
- **rounded:** `{rounded.none}`
- **padding:** `48px`

### cta banner
**Role:** cta banner component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.headline}`
- **rounded:** `{rounded.none}`
- **padding:** `48px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.none}`
- **padding:** `11px 16px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.none}`
- **padding:** `11px 16px`

### text input error
**Role:** text input error component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.none}`
- **padding:** `11px 16px`

### newsletter input
**Role:** newsletter input component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.none}`
- **padding:** `11px 16px`

### product tab
**Role:** product tab component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `16px 20px`

### product tab selected
**Role:** product tab selected component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-emphasis}`
- **rounded:** `{rounded.none}`
- **padding:** `16px 20px`

### resource tile
**Role:** resource tile component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `16px`

### customer logo tile
**Role:** customer logo tile component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.none}`
- **padding:** `24px`

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **height:** `48px`

### utility bar
**Role:** utility bar component

- **backgroundColor:** `{colors.surface-1}`
- **textColor:** `{colors.ink-muted}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.none}`
- **height:** `32px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.inverse-canvas}`
- **textColor:** `{colors.inverse-ink-muted}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `64px 32px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live IBM website](https://www.ibm.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.ibm.com/).
