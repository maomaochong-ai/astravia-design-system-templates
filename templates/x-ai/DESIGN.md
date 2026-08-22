# SpaceXAI - Style Reference
> SpaceXAI's current web identity is radically light and editorial: a white canvas, near-black typography, generous empty space, and a restrained set of gray borders carry almost the entire interface. Universal Sans gives the oversized headlines a neutral, engineered voice, while Geist Mono is reserved for code and technical data. Primary actions invert the page into solid black pills; secondary actions stay white with a single gray outline. Hierarchy comes from scale, spacing, and rule lines. Large centered statements create the brand's signature rhythm, while product panels and API examples introduce denser technical detail without changing the monochrome system. The result feels precise, confident, and product-first.

**Theme:** light

**Source website:** [https://x.ai/](https://x.ai/)  
Verified against the live public website on 2026-08-01. The current source website remains authoritative.

## Tokens - Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#0a0a0a` | `--color-primary` | Primary CTA fill and strongest emphasis |
| primary hover | `#242424` | `--color-primary-hover` | Hover state for black filled controls |
| on primary | `#ffffff` | `--color-on-primary` | Text and icons on black controls |
| ink | `#0a0a0a` | `--color-ink` | Display headlines and primary text |
| ink soft | `#1f1f1f` | `--color-ink-soft` | Dense body copy and code text |
| body | `#4b4b4b` | `--color-body` | Supporting paragraphs |
| muted | `#848484` | `--color-muted` | Navigation, labels, metadata, and placeholders |
| hairline | `#dbdbdb` | `--color-hairline` | Outlines, dividers, and component boundaries |
| hairline strong | `#bfbfbf` | `--color-hairline-strong` | Hovered outlines and stronger separators |
| canvas | `#ffffff` | `--color-canvas` | Primary page background |
| canvas soft | `#f7f7f7` | `--color-canvas-soft` | Alternate bands and code-panel background |
| canvas raised | `#fbfbfb` | `--color-canvas-raised` | Subtle elevated or inset content surface |

## Tokens - Typography

### Universal Sans, Inter, system-ui, -apple-system, sans-serif - `--font-primary`
- **Substitute:** Inter, Arial, system-ui, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 96px, 72px, 48px, 32px, 24px, 18px, 16px, 14px
- **Line height:** 96px, 76px, 52px, 38px, 30px, 28px, 24px, 20px
- **Letter spacing:** -3.2px, -2.2px, -1.4px, -0.7px, -0.3px, 0
- **Role:** Brand display, navigation, body copy, buttons, and metrics.

### Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace - `--font-mono`
- **Substitute:** IBM Plex Mono, Source Code Pro, ui-monospace, monospace
- **Weights:** 400, 500
- **Sizes:** 13px, 12px
- **Line height:** 20px, 16px
- **Letter spacing:** 0
- **Role:** API examples, technical labels, and numeric data.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 96px | 96px | -3.2px | `--text-display-xl` |
| display-lg | 72px | 76px | -2.2px | `--text-display-lg` |
| display-md | 48px | 52px | -1.4px | `--text-display-md` |
| display-sm | 32px | 38px | -0.7px | `--text-display-sm` |
| title | 24px | 30px | -0.3px | `--text-title` |
| body-lg | 18px | 28px | 0 | `--text-body-lg` |
| body-md | 16px | 24px | 0 | `--text-body-md` |
| body-sm | 14px | 20px | 0 | `--text-body-sm` |
| label | 13px | 16px | 0 | `--text-label` |
| code | 13px | 20px | 0 | `--text-code` |

## Tokens - Spacing & Shapes

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xs | 4px | `--spacing-xs` |
| sm | 8px | `--spacing-sm` |
| md | 12px | `--spacing-md` |
| lg | 16px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| 2xl | 32px | `--spacing-2xl` |
| 3xl | 48px | `--spacing-3xl` |
| 4xl | 64px | `--spacing-4xl` |
| 5xl | 96px | `--spacing-5xl` |
| 6xl | 128px | `--spacing-6xl` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| sm | 8px | `--radius-sm` |
| md | 12px | `--radius-md` |
| lg | 16px | `--radius-lg` |
| xl | 24px | `--radius-xl` |
| pill | 9999px | `--radius-pill` |

### Layout

- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1280px
- **Reading width:** 760px

## Components

### navigation bar
**Role:** Quiet global navigation on the white page canvas.

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.body-sm}`
- **height:** `80px`
- **padding:** `0 {spacing.2xl}`
- **hover:** text changes to `{colors.ink}`
- **focus:** `2px` solid `{colors.ink}` outline with `3px` offset

### navigation link
**Role:** Low-emphasis route or dropdown trigger.

- **textColor:** `{colors.muted}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.sm} {spacing.md}`
- **hover:** text changes to `{colors.ink}`
- **active:** text uses `{colors.ink}`

### primary button
**Role:** Main conversion action such as Try for free or Get API Access.

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **borderColor:** `{colors.primary}`
- **typography:** `{typography.body-sm}` at weight `500`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.md} {spacing.xl}`
- **hover:** background and border change to `{colors.primary-hover}`
- **active:** transform `scale(0.98)`
- **focus:** `2px` solid `{colors.ink}` outline with `3px` offset

### secondary button
**Role:** Outlined action such as Contact Sales or View Documentation.

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm}` at weight `500`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.md} {spacing.xl}`
- **hover:** border changes to `{colors.hairline-strong}` and background to `{colors.canvas-soft}`
- **active:** transform `scale(0.98)`
- **focus:** `2px` solid `{colors.ink}` outline with `3px` offset

### announcement pill
**Role:** Compact product-news link above a hero statement.

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.label}`
- **rounded:** `{rounded.pill}`
- **padding:** `{spacing.sm} {spacing.lg}`
- **hover:** border changes to `{colors.hairline-strong}`

### hero band
**Role:** Oversized centered message with large areas of white space.

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xl}`
- **padding:** `{spacing.6xl} {spacing.xl}`
- **maxTextWidth:** `980px`
- **alignment:** `center`

### API code panel
**Role:** Technical example with language switching and copy action.

- **backgroundColor:** `{colors.canvas-soft}`
- **textColor:** `{colors.ink-soft}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.code}`
- **rounded:** `{rounded.lg}`
- **padding:** `{spacing.xl}`
- **hover:** border changes to `{colors.hairline-strong}`
- **focus-within:** `2px` solid `{colors.ink}` outline with `2px` offset

### metric block
**Role:** Large numeric proof point with a compact explanatory label.

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **valueTypography:** `{typography.display-md}`
- **labelTypography:** `{typography.body-sm}`
- **padding:** `{spacing.2xl} 0`

### news row
**Role:** Editorial link pairing date, title, and a directional affordance.

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-md}`
- **padding:** `{spacing.xl} 0`
- **hover:** background changes to `{colors.canvas-soft}`

### footer
**Role:** Dense navigation endpoint separated from the content by a hairline rule.

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **borderColor:** `{colors.hairline}`
- **typography:** `{typography.body-sm}`
- **padding:** `{spacing.4xl} {spacing.2xl}`
- **linkHover:** text changes to `{colors.ink}`

## Do's and Don'ts

### Do

- Use `--color-canvas` as the uninterrupted page field and `--color-ink` for the primary typographic contrast.
- Reserve `--color-primary` for filled CTAs and compact high-priority controls.
- Use `--color-muted` for navigation and metadata so the hero remains dominant.
- Keep display styles at their documented tight line heights and negative letter spacing.
- Use `--spacing-5xl` or `--spacing-6xl` around major statements to preserve the deliberate white space.
- Use `--color-hairline` to define panels and rows consistently.
- Keep primary and secondary buttons at `--radius-pill` with matching heights.
- Compare major implementation decisions against [the live SpaceXAI website](https://x.ai/).

### Don't

- Do not switch the page canvas to near-black; the verified theme is light.
- Do not use `--color-primary` for long text blocks or large background bands.
- Do not replace the large centered hero rhythm with a dense multi-column dashboard layout.
- Do not round every container to `--radius-pill`; reserve pills for actions and compact labels.
- Do not use decorative monospace copy where `--font-primary` is required for reading text.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Compose the page as a sequence of broad white bands with centered headline moments and thin horizontal rules. Keep the content width below `1280px`, preserve at least `96px` between major sections, and let dense technical panels remain secondary to the headline scale. Validate responsive composition and current page rhythm against [the live source](https://x.ai/).
