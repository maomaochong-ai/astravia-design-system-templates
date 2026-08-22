# Geometric Bold — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A Bauhaus poster that happens to be an interface. Flat planes of pure ink on
white, cut by 4px black rules; circles, squares and triangles carry the meaning
before any word does. Nothing recedes, nothing glows, nothing is soft — the page
is loud on purpose and reads as artwork first, UI second.

Fits art exhibitions, design studios, portfolios, and products that want to look
declarative rather than friendly.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is white and stays white; `surface-raised` is also white, because
  panels are separated by `border` (4px black), never by fill or elevation.
- `primary` is pure black: body text, every border, and inverted hero blocks
  (black panel + `primary-foreground` text).
- `muted` (earth brown) is the only secondary text color. There are no grays in
  this system — a dimmed gray reads as a mistake here.
- `accent` (blue) is the general emphasis ink: links, selected state, one
  supporting block per screen.
- `danger` (red) is the loudest ink. It doubles as the hero color block, so
  spend it once per screen and let error states own it everywhere else.
- `block-red` / `block-blue` / `block-yellow` / `block-earth` are the four poster
  inks for decorative shapes, each with a matching `-foreground` token.
- Cap any one screen at three inks + black + white. Four is already too many.

## Typography
- Headings: `font-black uppercase tracking-tight`. Weight 900 is the floor, not
  a peak — there is no such thing as a light heading here.
- Hero type is deliberately oversized and allowed to crop or run off the edge:
  roughly 60px → 96px → 160px across sm/md/lg.
- Scale below the hero: H1 36/60, H2 30/36, H3 20/24, body 14/16, small 12/14.
- Body is `font-sans font-medium` — never `font-light` or `font-normal`.
- `font-mono` for numbers, labels, captions and metadata; uppercase with wide
  tracking makes it read as part of the poster grid.
- Button and label text is `uppercase tracking-widest`.

## Spacing & layout
- Asymmetry is the layout rule. Offset the grid, let one column outweigh the
  other, hang shapes off the margin. A centered, evenly balanced page kills the
  style.
- Section rhythm: 48px → 96px → 128px vertical. Container padding 16 → 32 → 48.
- Gaps come in three steps: 8/16, 16/32, 32/48 (small / medium / large).
- Cards pad 24 → 32.
- Blocks butt directly against each other with no gutter — shared 4px rules are
  a feature, and full-bleed color panels should touch the viewport edge.

## Components
- **Borders:** 4px `border` on essentially every container. 8px for a hero
  frame, 2px only for dense table rules.
- **Radius:** `radius-*` are all 0 — hard corners. The single exception is
  `radius-full` for true circles (avatars, dots, badges, round buttons). Nothing
  in between; a 12px rounded card is off-style.
- **Buttons:** solid ink fill (`primary`, `danger`, `accent`) or white with a
  4px black border. `font-bold uppercase tracking-widest`, square corners, no
  shadow. Hover swaps the fill and text colors outright rather than shading them.
- **Cards:** white, 4px black border, flat. Hierarchy is expressed by size and
  by which ink the header block uses, not by elevation.
- **Inputs:** white field, 4px black border, `font-medium`. Focus removes the
  default outline and fills the field with `block-yellow` — the loudest possible
  focus signal, and the reason yellow is reserved.
- **Overlays:** dialogs and popovers sit on white with a 4px border and
  `shadow-lg`, which is a hard 8px black offset with zero blur. That offset is
  the only depth cue this system permits.
- **Decorative shapes:** circles, squares and triangles in the block inks,
  placed to break the grid. They may overlap and crop; they never carry text
  that matters unless the contrast pair is a `block-*` / `-foreground` match.
- **States:** cover default, hover, keyboard focus, active, disabled, loading,
  empty, error and success. Express disabled with a hatched or outlined
  treatment rather than by lowering opacity.

## Motion
- Short and mechanical: `transition-colors` at 200ms. Color swaps, not fades.
- Hover scales up ~5%, active presses down to ~95%. Nothing else moves.
- No parallax, no easing flourishes, no fade-in-on-scroll. If a transition needs
  blur or opacity to look good, it doesn't belong here.
- Respect `prefers-reduced-motion` by dropping the scale steps and keeping the
  color change.

## Accessibility
- Black on white is 21:1; keep long-form reading on that pair.
- The block inks land between roughly 3.8:1 and 5.6:1 with their paired
  foregrounds — fine for large `font-black` display type, not for 12px captions.
  Small text on a colored block should move to black on white.
- `muted` brown on white is about 7.5:1 and is the safe secondary text pair.
- Focus must always be visible; the yellow focus fill is the mechanism, so never
  strip it without replacing it with an equally loud indicator.

## Don't
- No gradients, and no soft transitions between colors.
- No shadows with blur — `shadow-sm` and `shadow-md` are `none` by design.
- No rounded corners other than 0 or a full circle.
- No opacity-based dimming (`opacity-50/60/70`) to create hierarchy.
- No light or regular font weights.
- No gray palette (`gray-100`…`gray-400`) for fills or text.
- No symmetrical, evenly centered layouts.
- No more than three inks plus black and white on one screen.
- No decorative frills — texture, glow, inner shadow, glassmorphism.
