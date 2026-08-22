# Cohere — Style Reference
> Cohere's 2026 web system is a controlled enterprise AI interface built from stark white editorial space, deep green-black product bands, soft mineral surfaces, rounded media cards, and a distinctive type split between monospaced-feeling display headlines and precise Unica77 UI text.

**Theme:** light

**Source website:** [https://cohere.com/](https://cohere.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#17171c` | `--color-primary` | primary role extracted from the source design |
| cohere black | `#000000` | `--color-cohere-black` | cohere black role extracted from the source design |
| ink | `#212121` | `--color-ink` | ink role extracted from the source design |
| deep green | `#003c33` | `--color-deep-green` | deep green role extracted from the source design |
| dark navy | `#071829` | `--color-dark-navy` | dark navy role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| soft stone | `#eeece7` | `--color-soft-stone` | soft stone role extracted from the source design |
| pale green | `#edfce9` | `--color-pale-green` | pale green role extracted from the source design |
| pale blue | `#f1f5ff` | `--color-pale-blue` | pale blue role extracted from the source design |
| hairline | `#d9d9dd` | `--color-hairline` | hairline role extracted from the source design |
| border light | `#e5e7eb` | `--color-border-light` | border light role extracted from the source design |
| card border | `#f2f2f2` | `--color-card-border` | card border role extracted from the source design |
| muted | `#93939f` | `--color-muted` | muted role extracted from the source design |
| slate | `#75758a` | `--color-slate` | slate role extracted from the source design |
| body muted | `#616161` | `--color-body-muted` | body muted role extracted from the source design |
| action blue | `#1863dc` | `--color-action-blue` | action blue role extracted from the source design |
| focus blue | `#4c6ee6` | `--color-focus-blue` | focus blue role extracted from the source design |
| coral | `#ff7759` | `--color-coral` | coral role extracted from the source design |
| coral soft | `#ffad9b` | `--color-coral-soft` | coral soft role extracted from the source design |
| form focus | `#9b60aa` | `--color-form-focus` | form focus role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| error | `#b30000` | `--color-error` | error role extracted from the source design |

## Tokens — Typography

### CohereText · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 96px, 72px
- **Line height:** 1
- **Letter spacing:** -1.92px, -1.44px
- **Role:** Brand typography family observed across the documented type scale.

### Unica77 Cohere Web · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 60px, 48px, 32px, 24px, 18px, 16px, 14px, 12px
- **Line height:** 1, 1.2, 1.3, 1.4, 1.5, 1.71
- **Letter spacing:** -1.2px, -0.48px, -0.32px, 0
- **Role:** Brand typography family observed across the documented type scale.

### CohereMono · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.4
- **Letter spacing:** 0.28px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| hero-display | 96px | 1 | -1.92px | `--text-hero-display` |
| product-display | 72px | 1 | -1.44px | `--text-product-display` |
| section-display | 60px | 1 | -1.2px | `--text-section-display` |
| section-heading | 48px | 1.2 | -0.48px | `--text-section-heading` |
| card-heading | 32px | 1.2 | -0.32px | `--text-card-heading` |
| feature-heading | 24px | 1.3 | 0 | `--text-feature-heading` |
| body-large | 18px | 1.4 | 0 | `--text-body-large` |
| body | 16px | 1.5 | 0 | `--text-body` |
| button | 14px | 1.71 | 0 | `--text-button` |
| caption | 14px | 1.4 | 0 | `--text-caption` |
| mono-label | 14px | 1.4 | 0.28px | `--text-mono-label` |
| micro | 12px | 1.4 | 0 | `--text-micro` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 2px | `--spacing-xxs` |
| xs | 6px | `--spacing-xs` |
| sm | 8px | `--spacing-sm` |
| md | 12px | `--spacing-md` |
| lg | 16px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| xxl | 32px | `--spacing-xxl` |
| section | 80px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| xs | 4px | `--radius-xs` |
| sm | 8px | `--radius-sm` |
| md | 16px | `--radius-md` |
| lg | 22px | `--radius-lg` |
| xl | 30px | `--radius-xl` |
| pill | 32px | `--radius-pill` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 80px
- **Card padding:** 16px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.pill}`
- **padding:** `12px 24px`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.xs}`
- **padding:** `8px 0`

### button pill outline
**Role:** button pill outline component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.primary}`
- **typography:** `{typography.button}`
- **rounded:** `{rounded.xl}`
- **padding:** `6px 12px`

### announcement bar
**Role:** announcement bar component

- **backgroundColor:** `{colors.cohere-black}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.micro}`
- **height:** `36px`

### hero photo card
**Role:** hero photo card component

- **backgroundColor:** `{colors.canvas}`
- **rounded:** `{rounded.lg}`

### agent console card
**Role:** agent console card component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.sm}`
- **padding:** `24px`

### trust logo strip
**Role:** trust logo strip component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption}`

### capability card
**Role:** capability card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body}`
- **rounded:** `{rounded.xs}`
- **padding:** `24px`

### dark feature band
**Role:** dark feature band component

- **backgroundColor:** `{colors.deep-green}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.lg}`
- **padding:** `80px`

### product card
**Role:** product card component

- **backgroundColor:** `{colors.soft-stone}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.sm}`
- **padding:** `32px`

### blog filter chip
**Role:** blog filter chip component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.coral}`
- **typography:** `{typography.card-heading}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 14px`

### research table
**Role:** research table component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-large}`

### contact form card
**Role:** contact form card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.lg}`
- **padding:** `32px`

### footer newsletter
**Role:** footer newsletter component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.micro}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Cohere website](https://cohere.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://cohere.com/).
