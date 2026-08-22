# Figma — Style Reference

> **Theme:** light — **Voice:** white gallery wall with a single indigo spotlight

Figma keeps interface chrome achromatic: Ink Black on Paper White, with Electric Indigo reserved for the primary action and active focus. Saturated cyan, green and orange belong to the logo; pastels belong only to displayed work. The one elevation token, `shadow-xl`, is exclusively for the 16px-radius floating hero card.

## Tokens

| Role            | Value     |
| --------------- | --------- |
| ink-black       | `#000000` |
| paper-white     | `#ffffff` |
| soft-mist       | `#e2e2e2` |
| graphite        | `#595959` |
| electric-indigo | `#4d49fc` |
| figma-cyan      | `#00b6ff` |
| figma-green     | `#24cb71` |
| figma-orange    | `#ff7237` |
| lime-wash       | `#e4ff97` |
| lilac           | `#c4baff` |
| blush           | `#ffc9c1` |
| aqua-mist       | `#c7f8fb` |
| earworm-teal    | `#33dfdf` |
| mustard         | `#b98e01` |

Typography: figmaSans (Inter fallback) for UI, figmaMono for annotations. Type scale: caption 12/1.3/0.48px; body-sm 16/1.45/-0.11px; body 18/1.4/-0.18px; heading 24/1.35/-0.24px; heading-lg 56/1.1/-0.84px; display 72/1.1/-1.44px.

Spacing: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `56px`, `60px`, `64px`, `80px`, `120px`, `180px`. Radius: icons 2px, tags and outlined controls 8px, cards 16px, primary buttons 50px.

## Components

- Hero card: white, 16px radius, 24px padding, `rgba(0, 0, 0, 0.1) 0px 24px 70px 0px` shadow, no border.
- Primary CTA: Electric Indigo, white text, 50px pill, 10px — 20px.
- Ghost navigation action: transparent, 1px Ink Black, 8px radius, 8px — 18px.
- Header CTA: Ink Black, white, 50px pill.
- Community cards: 16px radius, no border and no shadow.

## Rules

- Use one Electric Indigo CTA per viewport.
- Keep saturated colors inside the logo or displayed work, never core controls.
- Do not add shadows to gallery cards; reserve `shadow-xl` for the hero card.
- Use 56–72px weight-320 display type for section headlines.

Source: supplied Figma style reference.
