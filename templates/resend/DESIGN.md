# Resend — Style Reference
> Resend's marketing surfaces sit on a near-pure black canvas with off-white
text and a single signature color — the deep editorial-serif Domaine
Display headline mark — that gives an otherwise utilitarian developer-tool
brand its print-magazine confidence. The system pairs Domaine Display
(oversized 76px–96px serif, ss01/ss04/ss11 features on) with ABC Favorit
for body and Inter for UI. Surfaces rely on subtle 6–9% opacity gradient
glows, hairline 1px borders made from translucent white, and a strict
rounded-12px container vocabulary. There is no decorative chrome — just
type, code, and atmospheric depth.

**Theme:** dark

**Source website:** [https://resend.com/](https://resend.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#fcfdff` | `--color-primary` | primary role extracted from the source design |
| primary on | `#000000` | `--color-primary-on` | primary on role extracted from the source design |
| ink | `#fcfdff` | `--color-ink` | ink role extracted from the source design |
| body | `rgba(252,253,255,0.86)` | `--color-body` | body role extracted from the source design |
| charcoal | `rgba(252,253,255,0.7)` | `--color-charcoal` | charcoal role extracted from the source design |
| mute | `#a1a4a5` | `--color-mute` | mute role extracted from the source design |
| ash | `#888e90` | `--color-ash` | ash role extracted from the source design |
| stone | `#464a4d` | `--color-stone` | stone role extracted from the source design |
| on light | `#000000` | `--color-on-light` | on light role extracted from the source design |
| on light mute | `rgba(0,0,51,0.7)` | `--color-on-light-mute` | on light mute role extracted from the source design |
| canvas | `#000000` | `--color-canvas` | canvas role extracted from the source design |
| surface card | `#0a0a0c` | `--color-surface-card` | surface card role extracted from the source design |
| surface elevated | `#101012` | `--color-surface-elevated` | surface elevated role extracted from the source design |
| surface deep | `#06060a` | `--color-surface-deep` | surface deep role extracted from the source design |
| hairline | `rgba(255,255,255,0.06)` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `rgba(255,255,255,0.14)` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| divider soft | `rgba(255,255,255,0.04)` | `--color-divider-soft` | divider soft role extracted from the source design |
| accent orange | `#ff801f` | `--color-accent-orange` | accent orange role extracted from the source design |
| accent orange glow | `rgba(255,89,0,0.22)` | `--color-accent-orange-glow` | accent orange glow role extracted from the source design |
| accent yellow | `#ffc53d` | `--color-accent-yellow` | accent yellow role extracted from the source design |
| accent blue | `#3b9eff` | `--color-accent-blue` | accent blue role extracted from the source design |
| accent blue glow | `rgba(0,117,255,0.34)` | `--color-accent-blue-glow` | accent blue glow role extracted from the source design |
| accent green | `#11ff99` | `--color-accent-green` | accent green role extracted from the source design |
| accent green glow | `rgba(34,255,153,0.18)` | `--color-accent-green-glow` | accent green glow role extracted from the source design |
| accent red | `#ff2047` | `--color-accent-red` | accent red role extracted from the source design |
| accent red glow | `rgba(255,32,71,0.34)` | `--color-accent-red-glow` | accent red glow role extracted from the source design |
| link | `#3b9eff` | `--color-link` | link role extracted from the source design |
| surface light | `#f1f7fe` | `--color-surface-light` | surface light role extracted from the source design |

## Tokens — Typography

### Domaine Display · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 96px, 76.8px
- **Line height:** 1
- **Letter spacing:** -0.96px, -0.768px
- **Role:** Brand typography family observed across the documented type scale.

### ABC Favorit · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 56px, 20px, 16px, 14px
- **Line height:** 1.2, 1.3, 1.5, 1.43
- **Letter spacing:** -2.8px, 0, -0.8px, 0.35px
- **Role:** Brand typography family observed across the documented type scale.

### Inter · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 400
- **Sizes:** 24px, 20px, 18px, 14px, 12px
- **Line height:** 1.5, 1.3, 1.43
- **Letter spacing:** -0.4px, -0.3px, 0
- **Role:** Brand typography family observed across the documented type scale.

### Helvetica · `--font-family-4`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600
- **Sizes:** 14px
- **Line height:** 1
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Geist Mono · `--font-family-5`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.6
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xxl | 96px | 1 | -0.96px | `--text-display-xxl` |
| display-xl | 76.8px | 1 | -0.768px | `--text-display-xl` |
| display-lg | 56px | 1.2 | -2.8px | `--text-display-lg` |
| heading-md | 24px | 1.5 | -0.4px | `--text-heading-md` |
| heading-sm | 20px | 1.3 | -0.3px | `--text-heading-sm` |
| subtitle | 20px | 1.3 | 0 | `--text-subtitle` |
| body-lg | 18px | 1.5 | 0 | `--text-body-lg` |
| body-md | 16px | 1.5 | -0.8px | `--text-body-md` |
| body-sm | 14px | 1.43 | 0 | `--text-body-sm` |
| button-md | 14px | 1.43 | 0 | `--text-button-md` |
| button-sm | 14px | 1.43 | 0.35px | `--text-button-sm` |
| caption | 12px | 1.5 | 0 | `--text-caption` |
| caption-emph | 14px | 1 | 0 | `--text-caption-emph` |
| code-md | 13px | 1.6 | 0 | `--text-code-md` |

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
| xxxl | 48px | `--spacing-xxxl` |
| section | 96px | `--spacing-section` |
| band | 128px | `--spacing-band` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 96px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.primary-on}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 16px`
- **height:** `36px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.surface-light}`
- **textColor:** `{colors.primary-on}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`

### button ghost
**Role:** button ghost component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 16px`
- **height:** `36px`

### button outline
**Role:** button outline component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `7px 15px`
- **height:** `36px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.md}`
- **padding:** `10px 14px`
- **height:** `40px`

### hero stripe
**Role:** hero stripe component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.display-xxl}`
- **rounded:** `{rounded.none}`
- **padding:** `96px 32px`

### feature card
**Role:** feature card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### feature card bordered
**Role:** feature card bordered component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing tier
**Role:** pricing tier component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### pricing tier featured
**Role:** pricing tier featured component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### code window
**Role:** code window component

- **backgroundColor:** `{colors.surface-deep}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.code-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `24px`

### code tab
**Role:** code tab component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.charcoal}`
- **typography:** `{typography.code-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `6px 12px`

### email mockup
**Role:** email mockup component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.lg}`
- **padding:** `0`

### badge pill
**Role:** badge pill component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.caption}`
- **rounded:** `{rounded.full}`
- **padding:** `4px 10px`

### status dot
**Role:** status dot component

- **backgroundColor:** `{colors.accent-green}`
- **rounded:** `{rounded.full}`
- **size:** `8px`

### nav bar
**Role:** nav bar component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.none}`
- **height:** `64px`

### sub nav pill
**Role:** sub nav pill component

- **backgroundColor:** `{colors.surface-elevated}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `6px 14px`

### contributor avatar
**Role:** contributor avatar component

- **backgroundColor:** `{colors.surface-card}`
- **rounded:** `{rounded.full}`
- **size:** `32px`

### footer
**Role:** footer component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.charcoal}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.none}`
- **padding:** `64px 32px`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Resend website](https://resend.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://resend.com/).
