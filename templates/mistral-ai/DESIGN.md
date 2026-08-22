# Mistral AI — Design System

> **Theme:** light
> **Reference:** warm parchment with a campfire heart

Mistral's system is a sunlit workshop on cream-ivory paper. Ember orange is the only chromatic voice, used as precise punctuation against a near-black, single-weight Arial world. A dramatic amber landscape opens the site, while the remaining pages return to tactile parchment, generous breathing room, and dark product panels that cast long olive-gold shadows. Hierarchy comes from large, tightly tracked scale rather than boldness.

## Colors

| Token                 | Value     | Usage                                     |
| --------------------- | --------- | ----------------------------------------- |
| `--mistral-parchment` | `#fffaeb` | Default page canvas and section fill      |
| `--mistral-card`      | `#ffffff` | Elevated cards and product shells         |
| `--mistral-ink`       | `#1f1f1f` | Primary text, headings, nav               |
| `--mistral-carbon`    | `#000000` | Dark primary actions and highest contrast |
| `--mistral-graphite`  | `#3c3c3c` | Supporting copy and hover borders         |
| `--mistral-ember`     | `#fa520f` | Arrow icons, M-mark, active indicators    |
| `--mistral-butter`    | `#fff0c2` | Tags and low-frequency decorative blocks  |
| `--mistral-honeycomb` | `#ecdaa2` | Warm hairlines and visible dividers       |

## Typography

Arial is the only family: `Arial, Helvetica, Inter, system-ui, sans-serif`. Every role uses weight 400 and `-0.025em` tracking; hierarchy is scale-driven.

| Role       | Size / line-height / tracking |
| ---------- | ----------------------------- |
| caption    | `14px / 1.43 / -0.35px`       |
| body-sm    | `16px / 1.5 / -0.4px`         |
| body       | `24px / 1.33 / -0.6px`        |
| subheading | `32px / 1.15 / -0.8px`        |
| heading-sm | `38px / 1 / -0.95px`          |
| heading    | `48px / 1 / -1.2px`           |
| heading-lg | `56px / 1 / -1.4px`           |
| display    | `82px / .95 / -2.05px`        |

## Layout and shape

The content rail is `1200px` at most. Use `80–96px` between main sections, `24px` card padding and `12px` inside tight groups.

| Scale | `4` | `8` | `12` | `16` | `20` | `24` | `32` | `36` | `40` | `48` | `64` | `72` | `80` | `100` |
| ----- | --- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| Value | 4px | 8px | 12px | 16px | 20px | 24px | 32px | 36px | 40px | 48px | 64px | 72px | 80px | 100px |

| Element                | Radius |
| ---------------------- | ------ |
| Buttons                | 6px    |
| Inputs                 | 8px    |
| Cards and dark mockups | 12px   |
| Tags                   | 9999px |

## Elevation

| Token                 | Value                                                                                                                                                                                  | Usage                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `--mistral-shadow-xl` | `rgba(127, 99, 21, 0.12) -8px 16px 39px 0px, rgba(127, 99, 21, 0.1) -33px 64px 72px 0px, rgba(127, 99, 21, 0.06) -73px 144px 97px 0px, rgba(127, 99, 21, 0.02) -130px 256px 115px 0px` | Dark product mockups and elevated panels |

The long, warm olive-gold shadow makes a dark panel feel lit by the same firelight as the hero. Do not substitute neutral gray shadows.

## Components

### Navigation

The sticky bar sits flush on Parchment at roughly 64px. Links are 16px Arial/400 Ink with 24px gaps. Pair an outlined **Contact Sales** control (Ink `1px` border, 6px radius, `16px 20px`) with a Carbon-filled **Try Studio** control using the same geometry.

### Hero landscape

The full-bleed amber/rust landscape carries the 82px display. It supports a 24px subhead and plain ghost action links whose small Ember arrow supplies the color. The gradient is environmental, not a button treatment.

### Ghost and filled actions

Ghost text actions are borderless 16px Ink with a small Ember arrow; hover adds an underline. The primary action is Carbon with white copy, 6px radius and `16px 20px` padding. The outline variant is transparent, Ink-bordered, and fills Butter on hover.

### Tags and feature list

Butter tags are 14px Ink, `8px 12px`, fully pill-shaped. Feature list items remain open text blocks: Ember arrow, 32px subheading, 16px body, then a 32px gap—no cards or dividers.

### Dark product mockup

The product surface is Ink, 12px rounded, white-text interface content on the Parchment canvas, and the sole user of `--mistral-shadow-xl`.

## Rules

### Do

- Keep `#fffaeb` as the full-page canvas; reserve white for lifted cards.
- Restrict Ember to arrows, the M-mark, active indicators and small accent geometry.
- Keep Arial at weight 400 and `-0.025em` tracking in every role.
- Use Carbon, not Ember, as the filled CTA.
- Use warm olive-gold shadows for elevated panels.
- Pair 6px action geometry with 9999px tags.

### Avoid

- Additional chromatic accents or cool-gray shadows.
- Weight 600 or 700.
- Ember-filled buttons.
- Pill-shaped buttons or cards.
- Pure white page canvases.
- Dense three-column card grids; use the text-left two-column rhythm.
