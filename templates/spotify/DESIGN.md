# Spotify — Style Reference
> Spotify's web interface is a dark, immersive music player that wraps listeners in a near-black cocoon (`#121212`, `#181818`, `#1f1f1f`) where album art and content become the primary source of color. The design philosophy is "content-first darkness" — the UI recedes into shadow so that music, podcasts, and playlists can glow. Every surface is a shade of charcoal, creating a theater-like environment where the only true color comes from the iconic Spotify Green (`#1ed760`) and the album artwork itself.

**Theme:** light

**Source website:** [https://www.spotify.com/](https://www.spotify.com/)  
Use the live official website to compare and validate this extracted snapshot. The current source website remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| color 1 | `#121212` | `--color-color-1` | color 1 role extracted from the source design |
| color 2 | `#181818` | `--color-color-2` | color 2 role extracted from the source design |
| color 3 | `#1f1f1f` | `--color-color-3` | color 3 role extracted from the source design |
| color 4 | `#1ed760` | `--color-color-4` | color 4 role extracted from the source design |
| white | `#ffffff` | `--color-white` | white role extracted from the source design |
| silver | `#b3b3b3` | `--color-silver` | silver role extracted from the source design |
| near white | `#cbcbcb` | `--color-near-white` | near white role extracted from the source design |
| light | `#fdfdfd` | `--color-light` | light role extracted from the source design |
| negative red | `#f3727f` | `--color-negative-red` | negative red role extracted from the source design |
| warning orange | `#ffa42b` | `--color-warning-orange` | warning orange role extracted from the source design |
| announcement blue | `#539df5` | `--color-announcement-blue` | announcement blue role extracted from the source design |
| dark card | `#252525` | `--color-dark-card` | dark card role extracted from the source design |
| mid card | `#272727` | `--color-mid-card` | mid card role extracted from the source design |
| border gray | `#4d4d4d` | `--color-border-gray` | border gray role extracted from the source design |
| light border | `#7c7c7c` | `--color-light-border` | light border role extracted from the source design |
| light surface | `#eeeeee` | `--color-light-surface` | light surface role extracted from the source design |
| spotify green border | `#1db954` | `--color-spotify-green-border` | spotify green border role extracted from the source design |
| color 18 | `#000000` | `--color-color-18` | color 18 role extracted from the source design |

## Tokens — Typography

### SpotifyMixUI · `--font-primary`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 0.14px
- **Line height:** 1.5
- **Letter spacing:** 0
- **Role:** Brand typography family observed across the documented type scale.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| button | 0.14px | 1.5 | 0 | `--text-button` |

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
| 96 | 96px | `--spacing-96` |

### Border Radius

| Name | Value | Token |
|---|---|---|
| sm | 0px | `--radius-sm` |
| md | 9px | `--radius-md` |
| lg | 8px | `--radius-lg` |
| xl | 4px | `--radius-xl` |
| pill | 2px | `--radius-pill` |
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

### cards containers
**Role:** cards containers component

- **description:** `Cards & Containers treatment documented in the source analysis.`

### inputs
**Role:** inputs component

- **description:** `Inputs treatment documented in the source analysis.`

### navigation
**Role:** navigation component

- **description:** `Navigation treatment documented in the source analysis.`

## Do's and Don'ts

### Do

- Use the documented primary token for the brand's primary interaction treatment.
- Keep page surfaces anchored to `--color-light-surface`.
- Preserve every typography style's documented size, line height, and letter spacing.
- Compare major implementation decisions against [the live Spotify website](https://www.spotify.com/).

### Don't

- Do not introduce colors outside the documented color token set.
- Do not replace the documented text token with an arbitrary neutral.
- Do not flatten documented component states or spacing relationships.
- Do not treat this extracted snapshot as newer than the live source website.

## Layout

Use the documented spacing scale and component geometry as the implementation baseline. Validate responsive composition and current page rhythm against [the live source](https://www.spotify.com/).
