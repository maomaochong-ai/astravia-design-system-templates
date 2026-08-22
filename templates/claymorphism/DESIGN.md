# Claymorphism — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Every surface looks moulded out of soft modelling clay: fat rounded corners, a
candy pastel fill, a white sheen along the top edge, and a hard offset drop
beneath that reads as extruded thickness rather than a cast shadow. The page
sits on warm cream with lumps of pastel clay drifting behind the content.
Nothing is sharp, nothing is gray, nothing is flat — and when pressed, pieces
squash and spring back.

Fits kids' products, learning apps, wellness and habit trackers, playful
onboarding, and consumer products that want to feel handmade and harmless. It is
a poor fit for dense dashboards, financial data, or anything that needs to look
authoritative.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is warm cream. Backgrounds stay warm: cream, pale amber, very light
  pastel. A white, gray, or dark page kills the style outright.
- `surface-raised` is white, usually set at partial opacity over the cream so
  the page warmth still shows through.
- `primary` is clay pink, the default action color.
- `primary-foreground` is a dark neutral ink. Every tint in this palette is
  light, so white text on clay lands near 2:1 — ink is always dark here.
- `muted` is a *warm* gray for secondary text. Cool, desaturated neutrals read
  as dirt against these pastels.
- `accent` is lavender: secondary actions, selected state, informational tags.
- `danger` is a soft rose, not an alarm red. It signals through its dark ink and
  its label, never through saturation.
- `clay-pink` / `clay-mint` / `clay-lavender` / `clay-yellow` / `clay-cream` are
  the five candy tints, each with a paired `-foreground` ink tuned to its hue —
  plum on pink, deep green on mint, indigo on lavender, amber-brown on yellow
  and cream. Pair them only as matched sets.
- `gradient-page` (cream → pink → lavender) and `gradient-rainbow` (all five
  tints) are for hero surfaces; spend the rainbow once per screen at most.
- `border` is a barely-there warm line. Depth is the shadow pair's job — a
  visible border competes with the highlight and flattens the piece.
- Two or three tints per screen. All five at once reads as a color test.

## Typography
- A geometric sans with open, rounded letterforms throughout, and it must carry
  a real 900 cut. There is no monospace and no condensed face in this system,
  not even for code labels or numerals.
- Display and headings are `font-black` (900); subheads `font-bold`; body
  `font-medium`. A light or regular weight looks brittle against fat shapes.
- Heading ink is the dark neutral, body one step lighter, captions `muted`.
  Colored headings appear only as a gradient-filled accent word in a hero.
- Scale: hero 48/72, H1 36/48, H2 30/36, H3 20/24, body 16, small 14, caption 12.
- Line height is generous — 1.6 for body — so text feels as soft as the
  containers holding it. Measure stays at 65–75 characters.
- No uppercase headlines and no tight negative tracking; letterforms stay wide
  and open.

## Spacing & layout
- Padding is deliberately generous: clay pieces need room or their offset drops
  collide and depth turns into mud. Card padding 24 → 32.
- Section rhythm 64 → 96 vertical; container padding 24 → 32.
- Gaps come in three steps: 16, 24, 32. Never below 16 — adjacent drops must not
  overlap, and the drop needs clearance on the right and bottom.
- Layouts are loose and centered; content sits in a container with wide margins,
  and nothing runs edge-to-edge.
- Background blobs are lumps, not circles: asymmetric radii (`blob-radius`),
  low-saturation tints, scattered behind content and never behind small text.
- Touch targets stay at 44px minimum, which the fat radii already encourage.

## Components
- **Radius:** the scale starts at 16px; `radius-lg` (24px) is the default clay
  corner, `radius-2xl` (32px) for large cards, `radius-full` for buttons, pills,
  avatars and icon holders. There is no small-radius option — a 4px corner is
  off-style, and 0 is forbidden.
- **Shadows:** each piece uses a pair — a zero-blur offset drop plus an inset
  white top highlight. `shadow-sm` for small pieces, `shadow-md` for buttons and
  controls, `shadow-lg` for cards and hero pieces. `shadow-bloom` is the only
  blurred option, a colored halo reserved for a floating hero element.
- **Buttons:** pastel fill (flat tint or `gradient-primary`), `radius-full`,
  bold dark ink, `shadow-md`. Hover swaps to `shadow-hover` and scales to 1.04;
  active drops to `shadow-active` and scales to 0.97 — the drop shrinking under
  the press is what sells the squash. Secondary buttons are the same shape in
  `clay-mint` or `clay-lavender`; a quiet button is `clay-cream` with
  `shadow-sm`. There is no bare text link button.
- **Cards:** white at partial opacity or a single clay tint, 24–32px radius,
  `shadow-lg`, no border. A thin white bar inset near the top edge reinforces
  the moulded sheen.
- **Inputs:** cream field, `radius-xl`, and a highlight-only inner shine so the
  field reads as pressed *into* the page while everything else sits on top of
  it. Focus adds `shadow-focus-ring` and never removes the outline without
  replacing it.
- **Overlays:** dialogs are clay cards on a warm blurred scrim; they keep
  `shadow-lg` and their radius rather than growing a border.
- **Badges, tags, tabs:** `radius-full` pills in a clay tint with `shadow-sm`;
  a tab group is one pill-shaped clay track with the active tab raised inside it.
- **Toggles, sliders, progress:** the track is a recessed clay groove, the thumb
  or fill a raised piece — the same in/out language as inputs.
- **States:** cover default, hover, keyboard focus, active, disabled, loading,
  empty, error and success. Disabled loses its offset drop and keeps a faint
  highlight, so it reads as pressed flat rather than merely faded.

## Motion
- Everything springs: `duration-base` (200ms) with `ease-spring`, whose
  overshoot past 1 is what makes movement read as elastic rather than mechanical.
- Hover scales to ~1.04 and pushes the drop out; active scales to ~0.97 and
  pulls it in. Squash on press, stretch on release — that deformation is the
  signature of the style.
- Entrances scale up from ~0.95 with the same spring. No fades from zero
  opacity, no cross-screen slides, no parallax.
- Under `prefers-reduced-motion` drop the scale steps and keep the shadow and
  color change, so state stays legible.

## Accessibility
- Every tint is light, so contrast lives entirely in the `-foreground` inks.
  Pair `clay-mint` with `clay-mint-foreground`, never with white.
- Dark neutral ink on cream is roughly 14:1 and is the reading pair for long
  text; `muted` on cream clears 4.5:1 for secondary text only.
- Never set small text on `gradient-rainbow` or across a gradient seam — move it
  onto a solid tint or `surface-raised`.
- Depth is decorative, so state must never be carried by shadow alone; pair it
  with a color, icon, or text change.
- The focus ring is the keyboard affordance; a component that suppresses it owes
  an equally visible substitute.

## Don't
- No sharp or small corners: nothing below 16px, and never 0.
- No `shadow: none` on an interactive piece — a flat clay button is not clay.
- No dark, moody, or high-contrast backgrounds, and no dark-mode inversion of
  this palette. The material only works in light and warm.
- No harsh drop shadows: the offset drop stays under ~0.2 alpha, and blurred
  shadows are limited to the colored bloom.
- No cool grays or desaturated neutrals anywhere, as fill or as text.
- No monospace or condensed typefaces, and no light or regular weights.
- No neon, electric, or fully saturated colors mixed into the pastels.
- No dense layouts where offset drops overlap, and no zero-gap grids.
- No pure black or white text on a clay tint.
- No linear or abrupt easing — motion without spring reads as broken here.
