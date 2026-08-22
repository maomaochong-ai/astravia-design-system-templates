# Lovable — Design System

> **Theme:** light
> **Reference:** warm parchment canvas behind a single prismatic horizon

Lovable is quiet everywhere except for one broad, prismatic hero horizon. Warm off-whites replace clinical grays; charcoal rather than black carries the interface; and Camera Plain Variable keeps display and body in the same compact voice. The gradient is an environmental brand moment, never an application control. Softly rounded surfaces create the component language, while most depth comes from inset strokes; the chat prompt is the deliberate single elevated exception.

## Colors

| Token                     | Value                                                                                                                                                                                                                                   | Usage                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `--lovable-parchment`     | `#fcfbf8`                                                                                                                                                                                                                               | Page canvas                             |
| `--lovable-warm-sand`     | `#f7f4ed`                                                                                                                                                                                                                               | Cards and secondary surfaces            |
| `--lovable-linen-border`  | `#eceae4`                                                                                                                                                                                                                               | Borders and separators                  |
| `--lovable-stone`         | `#d4d3d0`                                                                                                                                                                                                                               | Disabled borders and secondary dividers |
| `--lovable-dim-gray`      | `#5f5f5d`                                                                                                                                                                                                                               | Supporting copy and placeholders        |
| `--lovable-charcoal`      | `#1c1c1c`                                                                                                                                                                                                                               | Primary text and dark controls          |
| `--lovable-ink`           | `#030303`                                                                                                                                                                                                                               | Highest-emphasis text                   |
| `--lovable-indigo-accent` | `#3451b2`                                                                                                                                                                                                                               | Inline links and focus rings            |
| `--lovable-hero-gradient` | `linear-gradient(90deg, rgb(28, 28, 28) 0%, rgb(28, 28, 28) 33.33%, rgb(130, 188, 255) 40%, rgb(36, 131, 255) 45%, rgb(255, 102, 244) 50%, rgb(255, 48, 41) 55%, rgb(254, 123, 2) 60%, rgba(0, 0, 0, 0) 66.67%, rgba(0, 0, 0, 0) 100%)` | Full-width hero only                    |

## Typography

Camera Plain Variable is the sole family. Use `Inter Variable` or `DM Sans` only as a fallback. Set `font-feature-settings: "liga" 0`; default tracking is `-0.025em`.

| Role       | Size / line-height / tracking | Weight |
| ---------- | ----------------------------- | ------ |
| caption    | `14px / 1.5 / -0.35px`        | 400    |
| body       | `16px / 1.5 / -0.4px`         | 400    |
| subheading | `18px / 1.38 / -0.45px`       | 400    |
| heading-sm | `20px / 1.25 / -0.5px`        | 480    |
| heading    | `36px / 1.1 / -0.9px`         | 480    |
| heading-lg | `48px / 1.1 / -1.2px`         | 480    |
| display    | `60px / 1 / -1.5px`           | 480    |

## Layout, spacing and shape

The centered page is `1280px` wide at most. Major sections use `64–80px` separation; card padding is `20–24px`; tight groups use `6–8px`.

| Scale | `4` | `6` | `8` | `10` | `12` | `16` | `20` | `24` | `32` | `40` | `48` | `56` | `73` | `80` | `144` | `160` |
| ----- | --- | --- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ----- |
| Value | 4px | 6px | 8px | 10px | 12px | 16px | 20px | 24px | 32px | 40px | 48px | 56px | 73px | 80px | 144px | 160px |

| Element            | Radius  |
| ------------------ | ------- |
| Cards              | 16–24px |
| Images             | 12px    |
| Inputs             | 8px     |
| Containers         | 16px    |
| Buttons and badges | 9999px  |

## Elevation

| Token                       | Value                                                                                                              | Usage                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------- |
| `--lovable-shadow-subtle`   | `oklch(0 0 0 / 0.25) 0px 0px 0px 0.5px inset`                                                                      | Inset edge            |
| `--lovable-shadow-subtle-2` | `oklab(0 0 0 / 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` | Chat prompt elevation |
| `--lovable-shadow-subtle-3` | `oklch(0 0 0 / 0.16) 0px 0px 0px 0.5px inset`                                                                      | Subtle contained edge |

## Components

### Navigation

The sticky nav is roughly `48px` tall. It uses transparent or `rgba(255,255,255,.8)` with `blur(4px)` when scrolled and a `1px` linen bottom rule. Ghost links are 15px / 400 charcoal, with `4px 0 4px 6px` padding and only a subtle text-color hover.

### Pills

The outlined secondary pill has a transparent surface, charcoal text, `1px` linen border, and `6px 10px` padding. The primary pill is `rgba(0,0,0,.88)` with parchment text. A hero overlay pill uses `rgba(255,255,255,.8)` without a border. All are fully pill-shaped.

### Chat prompt

The prompt is Warm Sand with `24px` radius and `24px 20px` padding. Placeholder text is 16px Dim Gray. Use `--lovable-shadow-subtle` and `--lovable-shadow-subtle-2`; this is the only component that receives a drop shadow. Its small circular send control repeats the hero gradient.

### Template and warm-surface cards

Template cards have no outer chrome: a 12px thumbnail, then 16px/480 charcoal title and 14px Dim Gray description with 8px rhythm. Warm-surface cards are Warm Sand, 24px radius, `24px 20px` padding, and have neither border nor shadow.

## Rules

### Do

- Reserve the prismatic gradient for the full-width hero and its send control.
- Use `#eceae4` for every visible rule and border.
- Keep Camera Plain Variable at `-0.025em` with ligatures disabled.
- Use weight 480 for headings and 400 for body copy.
- Keep controls pill-shaped; keep images softly rounded.
- Reserve drop elevation for the chat prompt.

### Avoid

- Cool grays such as `#e5e7eb` or `#6b7280`.
- Colored CTA backgrounds or gradient text.
- A second type family.
- Sharp interactive corners.
- Drop shadows on ordinary cards and feature surfaces.
