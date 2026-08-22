# OpenCode — Style Reference
> A terminal-native marketing system rendered entirely in Berkeley Mono — every word on the page, from the hero headline down to the footer fine print, is monospaced. The page itself reads like a manpage or a static-site README: warm cream canvas (`#fdfcfc`), nearly-black ink (`#201d1d`), 4px-radius rectangles for the few interactive elements, and bracketed `[+]`/`[-]` ASCII markers used as bullets. The brand's only "visual moment" is a single dark hero card that mocks up the OpenCode TUI itself — black background, monospaced terminal output, ASCII pipe characters, and a wordmark rendered as block-pixel ASCII. Every section sits as a hairline-bordered text block on the cream canvas with no shadows, no gradients, no decorative imagery, and no non-monospaced character anywhere in the system.

**Theme:** light

**Source website:** [https://opencode.ai/](https://opencode.ai/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| primary | `#201d1d` | `--color-primary` | primary role extracted from the source design |
| on primary | `#fdfcfc` | `--color-on-primary` | on primary role extracted from the source design |
| ink | `#201d1d` | `--color-ink` | ink role extracted from the source design |
| ink deep | `#0f0000` | `--color-ink-deep` | ink deep role extracted from the source design |
| charcoal | `#302c2c` | `--color-charcoal` | charcoal role extracted from the source design |
| body | `#424245` | `--color-body` | body role extracted from the source design |
| mute | `#646262` | `--color-mute` | mute role extracted from the source design |
| stone | `#6e6e73` | `--color-stone` | stone role extracted from the source design |
| ash | `#9a9898` | `--color-ash` | ash role extracted from the source design |
| canvas | `#fdfcfc` | `--color-canvas` | canvas role extracted from the source design |
| surface soft | `#f8f7f7` | `--color-surface-soft` | surface soft role extracted from the source design |
| surface card | `#f1eeee` | `--color-surface-card` | surface card role extracted from the source design |
| surface dark | `#201d1d` | `--color-surface-dark` | surface dark role extracted from the source design |
| surface dark elevated | `#302c2c` | `--color-surface-dark-elevated` | surface dark elevated role extracted from the source design |
| hairline | `rgba(15,0,0,0.12)` | `--color-hairline` | hairline role extracted from the source design |
| hairline strong | `#646262` | `--color-hairline-strong` | hairline strong role extracted from the source design |
| on dark | `#fdfcfc` | `--color-on-dark` | on dark role extracted from the source design |
| on dark mute | `#9a9898` | `--color-on-dark-mute` | on dark mute role extracted from the source design |
| accent | `#007aff` | `--color-accent` | accent role extracted from the source design |
| accent hover | `#0056b3` | `--color-accent-hover` | accent hover role extracted from the source design |
| accent active | `#004085` | `--color-accent-active` | accent active role extracted from the source design |
| warning | `#ff9f0a` | `--color-warning` | warning role extracted from the source design |
| warning hover | `#cc7f08` | `--color-warning-hover` | warning hover role extracted from the source design |
| warning active | `#995f06` | `--color-warning-active` | warning active role extracted from the source design |
| danger | `#ff3b30` | `--color-danger` | danger role extracted from the source design |
| danger hover | `#d70015` | `--color-danger-hover` | danger hover role extracted from the source design |
| danger active | `#a50011` | `--color-danger-active` | danger active role extracted from the source design |
| success | `#30d158` | `--color-success` | success role extracted from the source design |

## Tokens — Typography

### Berkeley Mono · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700, 400, 500
- **Sizes:** 38px, 16px, 14px
- **Line height:** 1.5, 1, 2
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-xl | 38px | 1.5 | 0 | `--text-display-xl` |
| heading-md | 16px | 1.5 | 0 | `--text-heading-md` |
| body-md | 16px | 1.5 | 0 | `--text-body-md` |
| body-strong | 16px | 1.5 | 0 | `--text-body-strong` |
| body-tight | 16px | 1 | 0 | `--text-body-tight` |
| link-md | 16px | 1.5 | 0 | `--text-link-md` |
| button-md | 16px | 2 | 0 | `--text-button-md` |
| caption-md | 14px | 2 | 0 | `--text-caption-md` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| xxs | 1px | `--spacing-xxs` |
| xs | 4px | `--spacing-xs` |
| sm | 8px | `--spacing-sm` |
| md | 12px | `--spacing-md` |
| lg | 16px | `--spacing-lg` |
| xl | 24px | `--spacing-xl` |
| xxl | 32px | `--spacing-xxl` |
| section | 96px | `--spacing-section` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| none | 0px | `--radius-none` |
| sm | 4px | `--radius-sm` |
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
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `4px 20px`
- **height:** `36px`

### button primary active
**Role:** button primary active component

- **backgroundColor:** `{colors.ink-deep}`
- **textColor:** `{colors.on-primary}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`

### button secondary
**Role:** button secondary component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `4px 20px`

### button tab
**Role:** button tab component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.mute}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.none}`
- **padding:** `8px 16px`

### button tab active
**Role:** button tab active component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.button-md}`
- **rounded:** `{rounded.none}`

### button disabled
**Role:** button disabled component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ash}`
- **rounded:** `{rounded.sm}`

### badge news
**Role:** badge news component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.caption-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `2px 8px`

### text input
**Role:** text input component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 12px`
- **height:** `40px`

### text input focused
**Role:** text input focused component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **rounded:** `{rounded.sm}`

### textarea
**Role:** textarea component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `12px`

### install snippet
**Role:** install snippet component

- **backgroundColor:** `{colors.surface-card}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `12px 16px`

### hero tui mockup
**Role:** hero tui mockup component

- **backgroundColor:** `{colors.surface-dark}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `64px 32px`

### tui prompt row
**Role:** tui prompt row component

- **backgroundColor:** `{colors.surface-dark-elevated}`
- **textColor:** `{colors.on-dark}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `8px 12px`

### list row
**Role:** list row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `8px 0px`

### faq row
**Role:** faq row component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.none}`
- **padding:** `12px 0px`

### testimonial row
**Role:** testimonial row component

- **backgroundColor:** `{colors.surface-soft}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.body-md}`
- **rounded:** `{rounded.sm}`
- **padding:** `16px 20px`

### chart tile
**Role:** chart tile component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.caption-md}`
- **rounded:** `{rounded.none}`
- **padding:** `16px`

### primary nav
**Role:** primary nav component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.body-strong}`
- **rounded:** `{rounded.none}`
- **height:** `56px`

### footer section
**Role:** footer section component

- **backgroundColor:** `{colors.canvas}`
- **textColor:** `{colors.body}`
- **typography:** `{typography.caption-md}`
- **rounded:** `{rounded.none}`
- **padding:** `32px 0px`

### link inline
**Role:** link inline component

- **textColor:** `{colors.ink}`
- **typography:** `{typography.link-md}`

### badge section label
**Role:** badge section label component

- **backgroundColor:** `transparent`
- **textColor:** `{colors.ink}`
- **typography:** `{typography.heading-md}`
- **rounded:** `{rounded.none}`

## Do's and Don'ts

### Do

- Use `--color-primary` for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-canvas`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live OpenCode website](https://opencode.ai/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace `--color-ink` with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://opencode.ai/).
