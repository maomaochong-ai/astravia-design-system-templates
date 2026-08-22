# Airbnb — Style Reference
> A warm, generous consumer marketplace anchored on a clean white canvas and Airbnb Rausch (#ff385c), the single brand voltage that carries every primary CTA, search-button orb, and rating dot. Type runs Airbnb Cereal VF at modest weights — display sits at 22–28px in weight 500/600 rather than the heavy 700+ that fintech and enterprise systems use; the brand trusts photography and generous whitespace over typographic muscle. Three product entries (Homes, Experiences, Services) sit in the top nav with hand-illustrated 32-icon glyphs and "NEW" badges, signaling a marketplace expansion rather than a feature dump. Pill-shaped search bars (`{rounded.full}`), softly rounded property cards (`{rounded.lg}` ~14px), and 32px button radii read as friendly and human — there is no hard corner anywhere except the body grid.

**Theme:** light

**Source website:** [https://www.airbnb.com/](https://www.airbnb.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#ff385c` | `--color-primary` | primary role extracted from the source design |
| primary active | `#e00b41` | `--color-primary-active` | primary active role extracted from the source design |
| primary disabled | `#ffd1da` | `--color-primary-disabled` | primary disabled role extracted from the source design |
| primary error text | `#c13515` | `--color-primary-error-text` | primary error text role extracted from the source design |
| primary error text hover | `#b32505` | `--color-primary-error-text-hover` | primary error text hover role extracted from the source design |
| luxe | `#460479` | `--color-luxe` | luxe role extracted from the source design |
| plus | `#92174d` | `--color-plus` | plus role extracted from the source design |
| ink | `#222222` | `--color-ink` | ink role extracted from the source design |
| body | `#3f3f3f` | `--color-body` | body role extracted from the source design |
| muted | `#6a6a6a` | `--color-muted` | muted role extracted from the source design |
| muted soft | `#929292` | `--color-muted-soft` | muted soft role extracted from the source design |
| hairline | `#dddddd` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#ebebeb` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| border strong | `#c1c1c1` | `--color-border-strong` | border strong role extracted from the source design |
| canvas | `#ffffff` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#f7f7f7` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#ffffff` | `--color-surface-card` | surface card role extracted from the source design |
| surface strong | `#f2f2f2` | `--color-surface-strong` | surface strong role extracted from the source design |
| on primary | `#ffffff` | `--color-on-primary` | on primary role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| legal link | `#428bff` | `--color-legal-link` | legal link role extracted from the source design |
| star rating | `#222222` | `--color-star-rating` | star rating role extracted from the source design |
| scrim | `#000000` | `--color-scrim` | scrim role extracted from the source design |

## Tokens — Typography

### 'Airbnb Cereal VF', Circular, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700
- **Sizes:** 28px
- **Line height:** 1.43
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### 'Airbnb Cereal VF', Circular, sans-serif · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500, 700, 600, 400
- **Sizes:** 22px, 21px, 20px, 16px, 64px, 14px, 13px, 11px, 12px, 8px
- **Line height:** 1.18, 1.43, 1.2, 1.25, 1.1, 1.5, 1.29, 1.23, 1.33
- **Letter spacing:** -0.44px, 0, -0.18px, -1px, 0.32px
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 28px | 1.43 | 0 | `--text-display-xl` |
| display-lg | 22px | 1.18 | -0.44px | `--text-display-lg` |
| display-md | 21px | 1.43 | 0 | `--text-display-md` |
| display-sm | 20px | 1.2 | -0.18px | `--text-display-sm` |
| title-md | 16px | 1.25 | 0 | `--text-title-md` |
| title-sm | 16px | 1.25 | 0 | `--text-title-sm` |
| rating-display | 64px | 1.1 | -1px | `--text-rating-display` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-sm | 14px | 1.43 | 0 | `--text-body-sm` |
| caption | 14px | 1.29 | 0 | `--text-caption` |
| caption-sm | 13px | 1.23 | 0 | `--text-caption-sm` |
| badge | 11px | 1.18 | 0 | `--text-badge` |
| micro-label | 12px | 1.33 | 0 | `--text-micro-label` |
| uppercase-tag | 8px | 1.25 | 0.32px | `--text-uppercase-tag` |
| button-md | 16px | 1.25 | 0 | `--text-button-md` |
| button-sm | 14px | 1.29 | 0 | `--text-button-sm` |
| link | 14px | 1.43 | 0 | `--text-link` |
| nav-link | 16px | 1.25 | 0 | `--text-nav-link` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 2px | `--spacing-xxs` |
| xs | 4px | `--spacing-xs` |
| sm | 8px | `--spacing-sm` |
| md | 12px | `--spacing-md` |
| base | 16px | `--spacing-base` |
| lg | 24px | `--spacing-lg` |
| xl | 32px | `--spacing-xl` |
| xxl | 48px | `--spacing-xxl` |
| section | 64px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 4px | `--radius-xs` |
| sm | 8px | `--radius-sm` |
| md | 14px | `--radius-md` |
| lg | 20px | `--radius-lg` |
| xl | 32px | `--radius-xl` |
| full | 9999px | `--radius-full` |

### Layout

- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 12px
- **Max content width:** 1200px

## Components

### button primary
**Role:** button primary component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `14px 24px`
- **height:** `48px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.primary-active}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.sm}`

### button primary disabled
**Role:** button primary disabled component

- **backgroundColor:** `{colors.primary-disabled}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.sm}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `13px 23px`
- **height:** `48px`

### button tertiary text
**Role:** button tertiary text component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`

### button pill rausch
**Role:** button pill rausch component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `10px 20px`

### search orb
**Role:** search orb component

- **backgroundColor:** `{colors.primary}`
- **textColor:** `{colors.on-primary}`
- **rounded:** `{rounded.full}`
- **height:** `48px`

### icon button circle
**Role:** icon button circle component

- **backgroundColor:** `{colors.surface-strong}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **height:** `32px`

### icon button outline
**Role:** icon button outline component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.full}`
- **height:** `40px`

### top nav
**Role:** top nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.nav-link}`
- **height:** `80px`

### product tab active
**Role:** product tab active component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.nav-link}`
- **rounded:** `{rounded.none}`

### product tab inactive
**Role:** product tab inactive component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.nav-link}`

### search bar pill
**Role:** search bar pill component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `14px 24px`
- **height:** `64px`

### search field segment
**Role:** search field segment component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.caption}`
- **padding:** `8px 24px`

### category strip
**Role:** category strip component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.button-sm}`

### category tab active
**Role:** category tab active component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.none}`

### property card
**Role:** property card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.md}`

### property card photo
**Role:** property card photo component

- **rounded:** `{rounded.md}`

### experience card
**Role:** experience card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-md}`
- **rounded:** `{rounded.md}`

### city link block
**Role:** city link block component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.title-sm}`

### rating display card
**Role:** rating display card component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.rating-display}`

### guest favorite badge
**Role:** guest favorite badge component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.badge}`
- **rounded:** `{rounded.full}`
- **padding:** `4px 10px`

### new tag
**Role:** new tag component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.uppercase-tag}`
- **rounded:** `{rounded.full}`
- **padding:** `2px 6px`

### amenity row
**Role:** amenity row component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **padding:** `12px 0`

### reviews card
**Role:** reviews card component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`

### host card
**Role:** host card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.md}`
- **padding:** `24px`

### reservation card
**Role:** reservation card component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `24px`

### date picker day
**Role:** date picker day component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **rounded:** `{rounded.full}`

### date picker day selected
**Role:** date picker day selected component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **rounded:** `{rounded.full}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `14px 12px`
- **height:** `56px`

### footer light
**Role:** footer light component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`
- **padding:** `48px 80px`

### footer link
**Role:** footer link component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-sm}`

### legal band
**Role:** legal band component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.muted}`
- **typography:** `{typography.caption-sm}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Airbnb website](https://www.airbnb.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-primary-error-text` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.airbnb.com/).
