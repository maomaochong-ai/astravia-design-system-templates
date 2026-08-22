# ElevenLabs — Style Reference
> A voice-AI brand whose marketing surfaces read like a quietly editorial print magazine. The base canvas is off-white (`#f5f5f5`) holding warm near-black ink (`#292524`); the brand voltage is photographic, not chromatic — soft pastel atmospheric gradient orbs (mint → peach → lavender → sky) drift through the page as the only "color" moments. Display runs Waldenburg Light at weight 300 — the editorial signature. Inter carries body, navigation, captions. CTAs are subtle: a near-black ink pill is the primary, a transparent outline is the secondary. The brand trusts atmospheric photography and modest type weights to do all of the brand work; there is no neon accent, no saturated CTA color, no developer-tools dark canvas.

**Theme:** light

**Source website:** [https://elevenlabs.io/](https://elevenlabs.io/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#292524` | `--color-primary` | primary role extracted from the source design |
| primary active | `#0c0a09` | `--color-primary-active` | primary active role extracted from the source design |
| ink | `#0c0a09` | `--color-ink` | ink role extracted from the source design |
| body | `#4e4e4e` | `--color-body` | body role extracted from the source design |
| body strong | `#292524` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#777169` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#a8a29e` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#e7e5e4` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#f0efed` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| hairline strong | `#d6d3d1` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#f5f5f5` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#fafafa` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| canvas deep | `#0c0a09` | `--color-canvas-deep` | canvas deep role extracted from the source design |
| surface card | `#ffffff` | `--color-surface-card` | surface card role extracted from the source design |
| surface strong | `#f0efed` | `--color-surface-strong` | surface strong role extracted from the source design |
| surface dark | `#0c0a09` | `--color-surface-dark` | surface dark role extracted from the source design |
| surface dark elevated | `#1c1917` | `--color-surface-dark-elevated` | surface dark elevated role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| on dark soft | `#a8a29e` | `--color-on-dark-soft` | on dark soft role extracted from the source design |
| gradient mint | `#a7e5d3` | `--color-gradient-mint` | gradient mint role extracted from the source design |
| gradient peach | `#f4c5a8` | `--color-gradient-peach` | gradient peach role extracted from the source design |
| gradient lavender | `#c8b8e0` | `--color-gradient-lavender` | gradient lavender role extracted from the source design |
| gradient sky | `#a8c8e8` | `--color-gradient-sky` | gradient sky role extracted from the source design |
| gradient rose | `#e8b8c4` | `--color-gradient-rose` | gradient rose role extracted from the source design |
| semantic error | `#dc2626` | `--color-semantic-error` | semantic error role extracted from the source design |
| semantic success | `#16a34a` | `--color-semantic-success` | semantic success role extracted from the source design |

## Tokens — Typography

### 'Waldenburg', 'Times New Roman', serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 300
- **Sizes:** 64px
- **Line height:** 1.05
- **Letter spacing:** -1.92px
- **Role:** Brand typography family observed across the documented type scale.

### 'Waldenburg', serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 300
- **Sizes:** 48px, 36px, 32px, 24px
- **Line height:** 1.08, 1.17, 1.13, 1.2
- **Letter spacing:** -0.96px, -0.36px, -0.32px, 0
- **Role:** Brand typography family observed across the documented type scale.

### 'Inter', sans-serif · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400, 600
- **Sizes:** 20px, 18px, 16px, 15px, 14px, 12px
- **Line height:** 1.35, 1.44, 1.5, 1.47, 1.4, 1
- **Letter spacing:** 0, 0.18px, 0.16px, 0.15px, 0.96px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-mega | 64px | 1.05 | -1.92px | `--text-display-mega` |
| display-xl | 48px | 1.08 | -0.96px | `--text-display-xl` |
| display-lg | 36px | 1.17 | -0.36px | `--text-display-lg` |
| display-md | 32px | 1.13 | -0.32px | `--text-display-md` |
| display-sm | 24px | 1.2 | 0 | `--text-display-sm` |
| title-md | 20px | 1.35 | 0 | `--text-title-md` |
| title-sm | 18px | 1.44 | 0.18px | `--text-title-sm` |
| body-md | 16px | 1.5 | 0.16px | `--text-body-md` |
| body-strong | 16px | 1.5 | 0.16px | `--text-body-strong` |
| body-sm | 15px | 1.47 | 0.15px | `--text-body-sm` |
| caption | 14px | 1.5 | 0 | `--text-caption` |
| caption-uppercase | 12px | 1.4 | 0.96px | `--text-caption-uppercase` |
| button | 15px | 1 | 0 | `--text-button` |
| nav-link | 15px | 1.4 | 0 | `--text-nav-link` |

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
| xxl | 24px | `--radius-xxl` |
| pill | 9999px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 20px
- **Max content width:** 1200px

## Components

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.nav-link}`
- **height:** `64px`

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.pill}`
- **padding:** `10px 20px`
- **height:** `40px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary-active}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.pill}`

### button outline
**Role:** button outline component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.pill}`
- **padding:** `9px 19px`
- **height:** `40px`

### button tertiary text
**Role:** button tertiary text component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-mega}`
- **padding:** `96px`

### gradient orb card
**Role:** gradient orb card component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.xxl}`
- **padding:** `32px`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `24px`

### product card stack
**Role:** product card stack component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `0`

### voice row
**Role:** voice row component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **padding:** `12px 0`

### voice icon circular
**Role:** voice icon circular component

- **backgroundColor:** `{colors.surface-strong}`
- **rounded:** `{rounded.full}`
- **size:** `32px`

### pricing tier card
**Role:** pricing tier card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `32px`

### pricing tier featured
**Role:** pricing tier featured component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `32px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 16px`
- **height:** `44px`

### badge pill
**Role:** badge pill component

- **backgroundColor:** `{colors.surface-strong}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### cta band
**Role:** cta band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-lg}`
- **padding:** `96px`

### testimonial card
**Role:** testimonial card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.xl}`
- **padding:** `32px`

### audio waveform card
**Role:** audio waveform card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.xl}`
- **padding:** `24px`

### footer
**Role:** footer component

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
- Compare major implementation decisions against [the live ElevenLabs website](https://elevenlabs.io/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://elevenlabs.io/).
