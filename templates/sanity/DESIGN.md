# Sanity — Style Reference
> Sanity's website is a developer-content platform rendered as a nocturnal command center -- dark, precise, and deeply structured. The entire experience sits on a near-black canvas (`#0b0b0b`) that reads less like a "dark mode toggle" and more like the natural state of a tool built for people who live in terminals. Where most CMS marketing pages reach for friendly pastels and soft illustration, Sanity leans into the gravity of its own product: structured content deserves a structured stage.

**Theme:** light

**Source website:** [https://www.sanity.io/](https://www.sanity.io/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| color 1 | `#0b0b0b` | `--color-color-1` | color 1 role extracted from the source design |
| color 2 | `#212121` | `--color-color-2` | color 2 role extracted from the source design |
| color 3 | `#353535` | `--color-color-3` | color 3 role extracted from the source design |
| color 4 | `#797979` | `--color-color-4` | color 4 role extracted from the source design |
| color 5 | `#b9b9b9` | `--color-color-5` | color 5 role extracted from the source design |
| color 6 | `#ededed` | `--color-color-6` | color 6 role extracted from the source design |
| color 7 | `#ffffff` | `--color-color-7` | color 7 role extracted from the source design |
| color 8 | `#0052ef` | `--color-color-8` | color 8 role extracted from the source design |
| color 9 | `#f36458` | `--color-color-9` | color 9 role extracted from the source design |
| pure black | `#000000` | `--color-pure-black` | pure black role extracted from the source design |
| light blue | `#55beff` | `--color-light-blue` | light blue role extracted from the source design |
| color 12 | `#afe3ff` | `--color-color-12` | color 12 role extracted from the source design |
| neon green | `#19d600` | `--color-neon-green` | neon green role extracted from the source design |
| error red | `#dd0000` | `--color-error-red` | error red role extracted from the source design |
| gpc green | `#37cd84` | `--color-gpc-green` | gpc green role extracted from the source design |
| color 16 | `#072227` | `--color-color-16` | color 16 role extracted from the source design |

## Tokens — Typography

### Inter, system-ui, sans-serif · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 1px, 2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 3px, 99999px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| space-1 | 1px | 1.5 | 0 | `--text-space-1` |
| space-2 | 2px | 1.5 | 0 | `--text-space-2` |
| space-3 | 4px | 1.5 | 0 | `--text-space-3` |
| space-4 | 6px | 1.5 | 0 | `--text-space-4` |
| space-5 | 8px | 1.5 | 0 | `--text-space-5` |
| space-6 | 12px | 1.5 | 0 | `--text-space-6` |
| space-7 | 16px | 1.5 | 0 | `--text-space-7` |
| space-8 | 24px | 1.5 | 0 | `--text-space-8` |
| space-9 | 32px | 1.5 | 0 | `--text-space-9` |
| space-10 | 48px | 1.5 | 0 | `--text-space-10` |
| space-11 | 64px | 1.5 | 0 | `--text-space-11` |
| radius-xs | 3px | 1.5 | 0 | `--text-radius-xs` |
| radius-md | 6px | 1.5 | 0 | `--text-radius-md` |
| radius-lg | 12px | 1.5 | 0 | `--text-radius-lg` |
| radius-pill | 99999px | 1.5 | 0 | `--text-radius-pill` |

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
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| sm | 6px | `--radius-sm` |
| md | 9px | `--radius-md` |
| lg | 5px | `--radius-lg` |
| xl | 2px | `--radius-xl` |
| pill | 3px | `--radius-pill` |
| r6 | 1px | `--radius-r6` |

### Layout

- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### buttons
**Role:** buttons component

- **description:** `Buttons treatment documented in the source analysis.`

### cards
**Role:** cards component

- **description:** `Cards treatment documented in the source analysis.`

### inputs
**Role:** inputs component

- **description:** `Inputs treatment documented in the source analysis.`

### navigation
**Role:** navigation component

- **description:** `Navigation treatment documented in the source analysis.`

### badges pills
**Role:** badges pills component

- **description:** `Badges / Pills treatment documented in the source analysis.`

## Do's and Don'ts

### Do

- Use the documented primary token for the brand's primary interaction treatment.
- Keep page surfaces anchored to the documented canvas token.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Sanity website](https://www.sanity.io/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace the documented text token with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.sanity.io/).
