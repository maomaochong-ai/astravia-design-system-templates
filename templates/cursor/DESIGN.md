# Cursor — Style Reference
> An AI-first code editor whose marketing site reads like a quietly-confident developer-tools brand with a warm-cream editorial canvas (`#f7f7f4`) instead of the typical dark IDE atmosphere. Near-black warm ink (`#26251e`) carries body and display alike — display sits at weight 400 with negative letter-spacing for a magazine feel rather than a bold tech voice. The single brand voltage is **Cursor Orange** (`#f54e00`) reserved for primary CTAs and the wordmark. A signature pastel timeline palette (peach, mint, blue, lavender, gold) marks AI-action stages (Thinking / Reading / Editing / Grepping / Done) — only inside in-product timeline visualizations. Cards use minimal hairlines, no shadows, generous 80px section rhythm. CursorGothic for display/body, JetBrains Mono on every code surface (which is roughly half the page).

**Theme:** light

**Source website:** [https://www.cursor.com/](https://www.cursor.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#f54e00` | `--color-primary` | primary role extracted from the source design |
| primary active | `#d04200` | `--color-primary-active` | primary active role extracted from the source design |
| ink | `#26251e` | `--color-ink` | ink role extracted from the source design |
| body | `#5a5852` | `--color-body` | body role extracted from the source design |
| body strong | `#26251e` | `--color-body-strong` | body strong role extracted from the source design |
| muted | `#807d72` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#a09c92` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#e6e5e0` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#efeee8` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| hairline strong | `#cfcdc4` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| canvas | `#f7f7f4` | `--color-canvas` | canvas role extracted from the source design |
| canvas soft | `#fafaf7` | `--color-canvas-soft` | canvas soft role extracted from the source design |
| surface card | `#ffffff` | `--color-surface-card` | surface card role extracted from the source design |
| surface strong | `#e6e5e0` | `--color-surface-strong` | surface strong role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| timeline thinking | `#dfa88f` | `--color-timeline-thinking` | timeline thinking role extracted from the source design |
| timeline grep | `#9fc9a2` | `--color-timeline-grep` | timeline grep role extracted from the source design |
| timeline read | `#9fbbe0` | `--color-timeline-read` | timeline read role extracted from the source design |
| timeline edit | `#c0a8dd` | `--color-timeline-edit` | timeline edit role extracted from the source design |
| timeline done | `#c08532` | `--color-timeline-done` | timeline done role extracted from the source design |
| semantic error | `#cf2d56` | `--color-semantic-error` | semantic error role extracted from the source design |
| semantic success | `#1f8a65` | `--color-semantic-success` | semantic success role extracted from the source design |

## Tokens — Typography

### 'CursorGothic', system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 72px
- **Line height:** 1.1
- **Letter spacing:** -2.16px
- **Role:** Brand typography family observed across the documented type scale.

### 'CursorGothic', sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 600, 500
- **Sizes:** 36px, 26px, 22px, 18px, 16px, 14px, 13px, 11px
- **Line height:** 1.2, 1.25, 1.3, 1.4, 1.5, 1
- **Letter spacing:** -0.72px, -0.325px, -0.11px, 0, 0.08px, 0.88px
- **Role:** Brand typography family observed across the documented type scale.

### 'JetBrains Mono', 'Fira Code', monospace · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-mega | 72px | 1.1 | -2.16px | `--text-display-mega` |
| display-lg | 36px | 1.2 | -0.72px | `--text-display-lg` |
| display-md | 26px | 1.25 | -0.325px | `--text-display-md` |
| display-sm | 22px | 1.3 | -0.11px | `--text-display-sm` |
| title-md | 18px | 1.4 | 0 | `--text-title-md` |
| title-sm | 16px | 1.4 | 0 | `--text-title-sm` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-tracked | 16px | 1.5 | 0.08px | `--text-body-tracked` |
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
| section | 80px | `--spacing-section` |

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

- **Section gap:** 80px
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
- **rounded:** `{rounded.md}`
- **padding:** `10px 18px`
- **height:** `40px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary-active}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `9px 17px`
- **height:** `40px`

### button tertiary text
**Role:** button tertiary text component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button}`

### button download
**Role:** button download component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.canvas}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.md}`
- **padding:** `12px 20px`
- **height:** `44px`

### hero band
**Role:** hero band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-mega}`
- **padding:** `80px`

### ide mockup card
**Role:** ide mockup card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.lg}`
- **padding:** `0`

### ide pane
**Role:** ide pane component

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.md}`
- **padding:** `16px`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### comparison card
**Role:** comparison card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### timeline pill thinking
**Role:** timeline pill thinking component

- **backgroundColor:** `{colors.timeline-thinking}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### timeline pill grep
**Role:** timeline pill grep component

- **backgroundColor:** `{colors.timeline-grep}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### timeline pill read
**Role:** timeline pill read component

- **backgroundColor:** `{colors.timeline-read}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### timeline pill edit
**Role:** timeline pill edit component

- **backgroundColor:** `{colors.timeline-edit}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### timeline pill done
**Role:** timeline pill done component

- **backgroundColor:** `{colors.timeline-done}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.caption-uppercase}`
- **rounded:** `{rounded.pill}`
- **padding:** `4px 10px`

### code block
**Role:** code block component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.lg}`
- **padding:** `20px`

### pricing tier card
**Role:** pricing tier card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing tier featured
**Role:** pricing tier featured component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.canvas}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
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
- **rounded:** `{rounded.lg}`
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
- Compare major implementation decisions against [the live Cursor website](https://www.cursor.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.cursor.com/).
