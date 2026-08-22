# Vercel Dark — Style Reference

> A black deployment console with precise white type and one functional blue signal.

**Theme:** dark

This is a dark interpretation of Vercel's Geist interface language. The canvas is absolute black, the hierarchy is carried by closely spaced charcoal surfaces and thin borders, and white text is reserved for the highest-priority information. Blue is an interaction signal rather than decoration: use it for focus, links, and the occasional featured action. The visual result should feel like a clear developer workspace, not a glowing sci-fi dashboard.

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| Void | `#000000` | `--color-canvas` | Page background and deepest surface |
| Carbon | `#0a0a0a` | `--color-surface` | Raised panels and cards |
| Onyx | `#111111` | `--color-surface-raised` | Inset regions and secondary panels |
| Graphite | `#1a1a1a` | `--color-border` | Borders, dividers, and inactive controls |
| White | `#ffffff` | `--color-ink` | Primary text and inverse actions |
| Silver | `#a1a1a1` | `--color-ink-muted` | Supporting text and secondary icons |
| Slate | `#666666` | `--color-ink-subtle` | Captions and inactive labels |
| Vercel Blue | `#0070f3` | `--color-accent` | Links, focus rings, and featured actions |
| Blue Hover | `#3291ff` | `--color-accent-hover` | Hover state for blue actions |
| Red | `#ee0000` | `--color-danger` | Destructive actions and errors |

## Tokens — Typography

**Primary font:** Geist, with Inter as the open-source fallback.
**Monospace font:** Geist Mono, with `ui-monospace` as the fallback.

| Role | Size | Weight | Line height | Letter spacing | Token |
|---|---:|---:|---:|---:|---|
| Display | 48px | 600 | 48px | -2.4px | `--text-display` |
| Heading | 32px | 600 | 40px | -1.28px | `--text-heading` |
| Section title | 24px | 600 | 32px | -0.96px | `--text-title` |
| Body | 16px | 400 | 24px | 0 | `--text-body` |
| UI label | 14px | 500 | 20px | 0 | `--text-label` |
| Mono caption | 12px | 400 | 16px | 0 | `--text-caption-mono` |

## Tokens — Spacing & Shapes

**Base unit:** 4px
**Density:** compact, with clear vertical breathing room between sections.

| Name | Value | Token |
|---|---:|---|
| 1 | 4px | `--spacing-1` |
| 2 | 8px | `--spacing-2` |
| 3 | 12px | `--spacing-3` |
| 4 | 16px | `--spacing-4` |
| 6 | 24px | `--spacing-6` |
| 8 | 32px | `--spacing-8` |
| 10 | 40px | `--spacing-10` |
| 16 | 64px | `--spacing-16` |

| Element | Value | Token |
|---|---:|---|
| Controls | 6px | `--radius-sm` |
| Cards and menus | 12px | `--radius-md` |
| Large surfaces | 16px | `--radius-lg` |
| Pills and avatars | 9999px | `--radius-full` |

## Surfaces & Depth

Depth comes from surface contrast and the `#1a1a1a` hairline, not drop shadows. Use `canvas` for the page, `surface` for elevated cards, and `surface-raised` only where a second level is needed inside a card. A border is required whenever adjacent dark surfaces would otherwise merge.

## Components

### Primary Button

**Role:** One high-priority action in a view.

- background: `--color-ink` (`#ffffff`)
- color: `--color-canvas` (`#000000`)
- height: 40px
- padding: 0 14px
- border-radius: `--radius-sm` (6px)
- hover: background `#eaeaea`
- focus-visible: 2px `--color-accent` outline with a 2px canvas gap

### Accent Button

**Role:** Product-specific featured action.

- background: `--color-accent` (`#0070f3`)
- color: `#ffffff`
- height: 40px
- padding: 0 14px
- border-radius: `--radius-sm` (6px)
- hover: `--color-accent-hover` (`#3291ff`)

### Secondary Button and Input

**Role:** Secondary actions and text entry.

- background: transparent or `--color-surface`
- color: `--color-ink`
- border: 1px solid `--color-border`
- height: 40px
- border-radius: `--radius-sm` (6px)
- hover: border `#333333`, background `--color-surface-raised`
- focus-visible: same two-layer blue ring as the primary button

## Do's and Don'ts

### Do

- Keep `#000000` as the dominant canvas.
- Use `#ffffff` for primary text and the single strongest action.
- Use `#0070f3` for links, focus, and deliberate featured actions only.
- Separate adjacent dark surfaces with `#1a1a1a` borders.
- Use Geist Mono only for code, identifiers, and compact technical metadata.
- Keep control radii at 6px and card radii at 12px.

### Don't

- Don't use gradients, glows, or decorative color fields inside the product interface; reserve any campaign treatment for a single hero-scale moment.
- Don't create elevation with unobserved drop shadows; use tonal steps and borders.
- Don't use blue as a general panel background.
- Don't place muted silver text on `#0a0a0a` when it carries critical content.
- Don't round rectangular controls beyond the documented radius family.
- Don't introduce a second display typeface beside Geist.

## Agent Prompt Guide

Build a dark developer-tool interface with a `#000000` canvas, `#0a0a0a` cards, `#1a1a1a` borders, Geist typography, and compact 4px-scale spacing. Use white for primary text and the primary CTA; reserve `#0070f3` for links, focus rings, and a featured action. Use borders and surface contrast for hierarchy; keep any campaign gradient to a single hero-scale treatment and do not add shadows.
