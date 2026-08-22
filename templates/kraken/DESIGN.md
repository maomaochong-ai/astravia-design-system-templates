# Kraken — Style Reference
> Kraken's website is a clean, trustworthy crypto exchange that uses purple as its commanding brand color. The design operates on white backgrounds with Kraken Purple (`#7132f5`, `#5741d8`, `#5b1ecf`) creating a distinctive, professional crypto identity. The proprietary Kraken-Brand font handles display headings with bold (700) weight and negative tracking, while Kraken-Product (with IBM Plex Sans fallback) serves as the UI workhorse.

**Theme:** light

**Source website:** [https://www.kraken.com/](https://www.kraken.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| color 1 | `#7132f5` | `--color-color-1` | color 1 role extracted from the source design |
| color 2 | `#5741d8` | `--color-color-2` | color 2 role extracted from the source design |
| color 3 | `#5b1ecf` | `--color-color-3` | color 3 role extracted from the source design |
| purple subtle | `rgba(133,91,251,0.16)` | `--color-purple-subtle` | purple subtle role extracted from the source design |
| near black | `#101114` | `--color-near-black` | near black role extracted from the source design |
| cool gray | `#686b82` | `--color-cool-gray` | cool gray role extracted from the source design |
| silver blue | `#9497a9` | `--color-silver-blue` | silver blue role extracted from the source design |
| white | `#ffffff` | `--color-white` | white role extracted from the source design |
| border gray | `#dedee5` | `--color-border-gray` | border gray role extracted from the source design |
| green | `#149e61` | `--color-green` | green role extracted from the source design |
| green dark | `#026b3f` | `--color-green-dark` | green dark role extracted from the source design |
| color 12 | `rgba(148,151,169,0.08)` | `--color-color-12` | color 12 role extracted from the source design |
| color 13 | `rgba(20,158,97,0.16)` | `--color-color-13` | color 13 role extracted from the source design |
| color 14 | `rgba(104,107,130,0.12)` | `--color-color-14` | color 14 role extracted from the source design |
| color 15 | `#484b5e` | `--color-color-15` | color 15 role extracted from the source design |

## Tokens — Typography

### Kraken-Brand · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700
- **Sizes:** 48px, 36px, 28px
- **Line height:** 1.17, 1.22, 1.29
- **Letter spacing:** -1px, -0.5px
- **Role:** Brand typography family observed across the documented type scale.

### Kraken-Product · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 600, 400, 500
- **Sizes:** 22px, 16px, 14px, 12px, 7px
- **Line height:** 1.20, 1.38, 1.5, 1.33, 1.00
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| display-hero | 48px | 1.17 | -1px | `--text-display-hero` |
| section-heading | 36px | 1.22 | -0.5px | `--text-section-heading` |
| sub-heading | 28px | 1.29 | -0.5px | `--text-sub-heading` |
| feature-title | 22px | 1.20 | 0 | `--text-feature-title` |
| body | 16px | 1.38 | 0 | `--text-body` |
| body-medium | 16px | 1.38 | 0 | `--text-body-medium` |
| button | 16px | 1.38 | 0 | `--text-button` |
| caption | 14px | 1.5 | 0 | `--text-caption` |
| small | 12px | 1.33 | 0 | `--text-small` |
| micro | 7px | 1.00 | 0 | `--text-micro` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|---|---|---|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 48 | 48px | `--spacing-48` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| sm | 2px | `--radius-sm` |
| md | 0px | `--radius-md` |
| lg | 9px | `--radius-lg` |
| xl | 6px | `--radius-xl` |

### Layout

- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### buttons
**Role:** buttons component

- **description:** `Buttons treatment documented in the source analysis.`

### badges
**Role:** badges component

- **description:** `Badges treatment documented in the source analysis.`

## Do's and Don'ts

### Do

- Use the documented primary token for the brand's primary interaction treatment.
- Keep page surfaces anchored to the documented canvas token.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Kraken website](https://www.kraken.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace the documented text token with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.kraken.com/).
