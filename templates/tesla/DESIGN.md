# Tesla — Style Reference
> Tesla's website is an exercise in radical subtraction — a digital showroom where the product is everything and the interface is almost nothing. The page opens with a full-viewport hero that fills the entire screen with cinematic car photography: three vehicles arranged on polished concrete against a hazy cityscape sky, with a single model name floating above in translucent white type. There are no decorative borders, no gradients, no patterns, no shadows. The UI exists only to provide just enough navigational structure to get out of the way. Every pixel that isn't product imagery is white space, and that restraint is the design system's most powerful statement.

**Theme:** light

**Source website:** [https://www.tesla.com/](https://www.tesla.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| color 1 | `#3E6AE1` | `--color-color-1` | color 1 role extracted from the source design |
| pure white | `#FFFFFF` | `--color-pure-white` | pure white role extracted from the source design |
| light ash | `#F4F4F4` | `--color-light-ash` | light ash role extracted from the source design |
| carbon dark | `#171A20` | `--color-carbon-dark` | carbon dark role extracted from the source design |
| frosted glass | `rgba(255, 255, 255, 0.75)` | `--color-frosted-glass` | frosted glass role extracted from the source design |
| graphite | `#393C41` | `--color-graphite` | graphite role extracted from the source design |
| pewter | `#5C5E62` | `--color-pewter` | pewter role extracted from the source design |
| silver fog | `#8E8E8E` | `--color-silver-fog` | silver fog role extracted from the source design |
| cloud gray | `#EEEEEE` | `--color-cloud-gray` | cloud gray role extracted from the source design |
| pale silver | `#D0D1D2` | `--color-pale-silver` | pale silver role extracted from the source design |
| color 11 | `rgba(255,255,255,0.75)` | `--color-color-11` | color 11 role extracted from the source design |
| color 12 | `rgba(128,128,128,0.65)` | `--color-color-12` | color 12 role extracted from the source design |
| color 13 | `rgba(0,0,0,0.05)` | `--color-color-13` | color 13 role extracted from the source design |

## Tokens — Typography

### Most elements — sharp edges are the default · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 0px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Buttons (primary, secondary, nav items) — barely perceptible rounding · `--font-family-2`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 4px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| 0px | 0px | 1.5 | 0 | `--text-0px` |
| 4px | 4px | 1.5 | 0 | `--text-4px` |

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
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| sm | 4px | `--radius-sm` |
| md | 0px | `--radius-md` |
| lg | 2px | `--radius-lg` |

### Layout

- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### buttons
**Role:** buttons component

- **description:** `Buttons treatment documented in the source analysis.`

### cards containers
**Role:** cards containers component

- **description:** `Cards & Containers treatment documented in the source analysis.`

### inputs forms
**Role:** inputs forms component

- **description:** `Inputs & Forms treatment documented in the source analysis.`

### navigation
**Role:** navigation component

- **description:** `Navigation treatment documented in the source analysis.`

### image treatment
**Role:** image treatment component

- **description:** `Image Treatment treatment documented in the source analysis.`

### persistent chat bar
**Role:** persistent chat bar component

- **description:** `Persistent Chat Bar treatment documented in the source analysis.`

## Do's and Don'ts

### Do

- Use the documented primary token for the brand's primary interaction treatment.
- Keep page surfaces anchored to the documented canvas token.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Tesla website](https://www.tesla.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace the documented text token with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.tesla.com/).
