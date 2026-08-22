# PostHog — Style Reference
> A playful developer-tools system rendered on a warm cream canvas with hand-drawn hedgehog mascots dotted across every page like marginalia in a sketchbook. The chrome reads like a friendly engineering blog: olive-gray ink (#4d4f46) for body, deep olive-charcoal (#23251d) for headlines, IBM Plex Sans Variable typography in tight 1.43-line-height paragraphs, and a single saturated yellow-orange CTA pill (#f7a501) carrying every primary action. The system actively rejects the genre's typical somber dark-tech aesthetic in favor of a creamy, textbook-illustration sensibility — bordered cards stack on the cream canvas with 4–6px radii, doc sidebars use rounded outline-icon mini-illustrations, and the home page leans on cartoon characters (hedgehogs in lab coats, hedgehogs at terminals, hedgehogs in lounge chairs) as its signature decoration. Code samples and product analytics charts live inside white-on-cream cards with thin olive borders; the contrast between the playful illustration and the data-dense product imagery is the brand's signature voice.

**Theme:** light

**Source website:** [https://posthog.com/](https://posthog.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#f7a501` | `--color-primary` | primary role extracted from the source design |
| primary pressed | `#dd9001` | `--color-primary-pressed` | primary pressed role extracted from the source design |
| primary active | `#b17816` | `--color-primary-active` | primary active role extracted from the source design |
| on primary | `#23251d` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#23251d` | `--color-ink` | ink role extracted from the source design |
| body | `#4d4f46` | `--color-body` | body role extracted from the source design |
| charcoal | `#33342d` | `--color-charcoal` | charcoal role extracted from the source design |
| mute | `#6c6e63` | `--color-mute` | mute role extracted from the source design |
| ash | `#9b9c92` | `--color-ash` | ash role extracted from the source design |
| stone | `#b6b7af` | `--color-stone` | stone role extracted from the source design |
| hairline | `#bfc1b7` | `--color-hairline` | hairline role extracted from the source design |
| hairline soft | `#dcdfd2` | `--color-hairline-soft` | hairline soft role extracted from the source design |
| on dark | `#ffffff` | `--color-on-dark` | on dark role extracted from the source design |
| canvas | `#eeefe9` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#e5e7e0` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#ffffff` | `--color-surface-card` | surface card role extracted from the source design |
| surface doc | `#fcfcfa` | `--color-surface-doc` | surface doc role extracted from the source design |
| surface dark | `#23251d` | `--color-surface-dark` | surface dark role extracted from the source design |
| link blue | `#1d4ed8` | `--color-link-blue` | link blue role extracted from the source design |
| link teal | `#1078a3` | `--color-link-teal` | link teal role extracted from the source design |
| accent blue | `#2c84e0` | `--color-accent-blue` | accent blue role extracted from the source design |
| accent blue soft | `#dceaf6` | `--color-accent-blue-soft` | accent blue soft role extracted from the source design |
| accent red | `#cd4239` | `--color-accent-red` | accent red role extracted from the source design |
| accent red soft | `#f7d6d3` | `--color-accent-red-soft` | accent red soft role extracted from the source design |
| accent green | `#2c8c66` | `--color-accent-green` | accent green role extracted from the source design |
| accent green soft | `#d9eddf` | `--color-accent-green-soft` | accent green soft role extracted from the source design |
| accent purple | `#7c44a6` | `--color-accent-purple` | accent purple role extracted from the source design |
| accent purple soft | `#e7d8ee` | `--color-accent-purple-soft` | accent purple soft role extracted from the source design |
| focus ring | `rgba(59,130,246,0.5)` | `--color-focus-ring` | focus ring role extracted from the source design |

## Tokens — Typography

### IBM Plex Sans Variable · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 800, 600, 400, 500
- **Sizes:** 36px, 24px, 21px, 20px, 18px, 16px, 15px, 14px, 13px, 12px
- **Line height:** 1.5, 1.33, 1.4, 1.56, 1.71, 1.43, 1
- **Letter spacing:** 0, -0.6px, -0.5px
- **Role:** Brand typography family observed across the documented type scale.

### ui-monospace · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.43
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Source Code Pro · `--font-family-3`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 500
- **Sizes:** 14px
- **Line height:** 1.43
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 36px | 1.5 | 0 | `--text-display-xl` |
| display-lg | 24px | 1.33 | -0.6px | `--text-display-lg` |
| heading-lg | 21px | 1.4 | -0.5px | `--text-heading-lg` |
| heading-md | 20px | 1.4 | 0 | `--text-heading-md` |
| heading-sm | 18px | 1.5 | 0 | `--text-heading-sm` |
| heading-sm-mixed | 18px | 1.56 | 0 | `--text-heading-sm-mixed` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-strong | 16px | 1.5 | 0 | `--text-body-strong` |
| body-sm | 15px | 1.71 | 0 | `--text-body-sm` |
| body-sm-strong | 15px | 1.71 | 0 | `--text-body-sm-strong` |
| body-xs | 14px | 1.43 | 0 | `--text-body-xs` |
| caption-md | 14px | 1.71 | 0 | `--text-caption-md` |
| caption-sm | 13px | 1.5 | 0 | `--text-caption-sm` |
| caption-xs | 12px | 1.33 | 0 | `--text-caption-xs` |
| utility-xs | 12px | 1.33 | 0 | `--text-utility-xs` |
| link-md | 16px | 1.5 | 0 | `--text-link-md` |
| button-md | 14px | 1.5 | 0 | `--text-button-md` |
| button-sm | 13px | 1 | 0 | `--text-button-sm` |
| code-sm | 14px | 1.43 | 0 | `--text-code-sm` |
| code-xs | 14px | 1.43 | 0 | `--text-code-xs` |

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
| section | 80px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| xs | 2px | `--radius-xs` |
| sm | 4px | `--radius-sm` |
| md | 6px | `--radius-md` |
| lg | 8px | `--radius-lg` |
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
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 16px`
- **height:** `40px`

### button primary pressed
**Role:** button primary pressed component

- **backgroundColor:** `{colors.primary-pressed}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 16px`
- **height:** `40px`

### button tertiary
**Role:** button tertiary component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 12px`

### button disabled
**Role:** button disabled component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.ash}`
- **rounded:** `{rounded.md}`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 12px`
- **height:** `36px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.md}`

### search input
**Role:** search input component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 12px`
- **height:** `36px`

### product card
**Role:** product card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `24px`

### doc card
**Role:** doc card component

- **backgroundColor:** `{colors.surface-doc}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `24px`

### feature tile
**Role:** feature tile component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.heading-sm-mixed}`
- **rounded:** `{rounded.md}`
- **padding:** `20px`

### pricing tier card
**Role:** pricing tier card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `32px`

### hedgehog mascot card
**Role:** hedgehog mascot card component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `24px`

### product tab
**Role:** product tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-strong}`
- **rounded:** `{rounded.md}`
- **padding:** `8px 12px`

### product tab active
**Role:** product tab active component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-strong}`
- **rounded:** `{rounded.md}`

### pill tab
**Role:** pill tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.full}`
- **padding:** `6px 14px`

### pill tab active
**Role:** pill tab active component

- **backgroundColor:** `{colors.ink}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.button-sm}`
- **rounded:** `{rounded.full}`

### badge uppercase
**Role:** badge uppercase component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.body}`
- **typography:** `{typography.utility-xs}`
- **rounded:** `{rounded.none}`

### badge promo
**Role:** badge promo component

- **backgroundColor:** `{colors.accent-blue-soft}`
- **textColor:** `{colors.link-blue}`
- **typography:** `{typography.caption-xs}`
- **rounded:** `{rounded.full}`
- **padding:** `2px 8px`

### banner tip blue
**Role:** banner tip blue component

- **backgroundColor:** `{colors.accent-blue-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `16px 20px`

### banner tip green
**Role:** banner tip green component

- **backgroundColor:** `{colors.accent-green-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `16px 20px`

### banner tip red
**Role:** banner tip red component

- **backgroundColor:** `{colors.accent-red-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `16px 20px`

### banner tip purple
**Role:** banner tip purple component

- **backgroundColor:** `{colors.accent-purple-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.md}`
- **padding:** `16px 20px`

### code block
**Role:** code block component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.code-sm}`
- **rounded:** `{rounded.md}`
- **padding:** `16px 20px`

### inline code
**Role:** inline code component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.code-xs}`
- **rounded:** `{rounded.xs}`
- **padding:** `2px 6px`

### primary nav
**Role:** primary nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-strong}`
- **rounded:** `{rounded.none}`
- **height:** `56px`

### sub nav strip
**Role:** sub nav strip component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-xs}`
- **rounded:** `{rounded.none}`
- **height:** `40px`

### doc sidebar
**Role:** doc sidebar component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-xs}`
- **rounded:** `{rounded.none}`
- **width:** `240px`

### footer section
**Role:** footer section component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-xs}`
- **rounded:** `{rounded.none}`
- **padding:** `32px 24px`

### link inline
**Role:** link inline component

- **textColor:** `{colors.link-teal}`
- **typography:** `{typography.link-md}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live PostHog website](https://posthog.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://posthog.com/).
