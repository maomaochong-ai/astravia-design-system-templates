# Glassmorphism — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
Colourless glass over a deep night scene. The scene carries all the colour and
the glass only borrows light from it — city lights through a rain-washed window,
architectural glazing after dark. Quiet luxury rather than novelty: cinematic,
composed, and believable enough that the panels read as a material instead of an
effect.

Fits premium product pages, media and control surfaces, dashboards that sit over
imagery, and anything that wants to feel expensive at night. It is a poor fit for
dense data work, documents, and any interface that must stay legible on a flat
white page.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the night base and `night-deep` is its darker edge. The page is
  never a flat fill: it always carries two or three soft light wells.
- `moonlight` and `moon-steel` are the light-well colours, used only as large
  low-alpha radial gradients behind the glass — never as fills, text, or borders.
- Glass panels use `glass-fill` (white at 5–12%) and never exceed 15%. Glass is
  colourless; a tinted panel is the single fastest way out of this style.
- `primary` is champagne, the one accent. It appears as a low-alpha fill with a
  `primary-foreground` label on the main action, on a key figure, or as a border
  at ~40% — three appearances per screen is already generous.
- `accent` (moonlight) marks live and link states in the rare case a second
  signal is unavoidable.
- Text is `surface-foreground` at full strength for headings, ~60% for body and
  ~40% for captions. `muted` is the flat equivalent for surfaces that cannot
  carry an alpha.
- `border` is the flat equivalent of `glass-border`; prefer the alpha token so
  the edge picks up whatever the scene puts behind it.

## Typography
System font stack only — a neutral grotesque, nothing decorative.
- Headings `font-semibold tracking-tight`, 28–56px. The type is quiet; the
  material is the event.
- Body 15–16px at ~60% white with relaxed leading; captions and metadata 12–13px
  at ~40%.
- Numerals in stats and controls are `tabular-nums`, and a single key figure may
  take `primary-foreground`.
- Body measure stays at 65–75 characters. Long prose sits on `surface-raised`
  rather than on glass — text over a blurred scene is harder to read than it
  looks in a mockup.

## Shape & depth
- Radius floor is `radius-sm` (16px); panels default to `radius-lg`/`radius-2xl`
  (24–32px). Nothing square, nothing below 16px.
- Every panel is three layers, and all three are required:
  1. a colourless `glass-fill` with `backdrop-blur` at the `glass-blur` token and
     `backdrop-saturate` at `glass-saturate` — the saturation boost is what makes
     the scene's lights glow through;
  2. an inner luminance gradient (`glass-luminance`) from the top edge down;
  3. a directional shadow (`shadow-md`) — outer depth, a lit top inset edge, a
     shaded bottom inset edge.
- Drop any one layer and the panel reads as flat translucency rather than glass.
- A 2–3% film-grain overlay across the viewport removes the plastic sheen.
- Borders are `glass-border` at rest and `glass-border-hover` on hover.

## Spacing & layout
- Cards pad 24 → 32 → 40; buttons 20/12 → 24/14. Glass needs room: crowded
  panels overlap each other's blur and the depth collapses.
- Section rhythm 64 → 96; container padding 20 → 32.
- Panels sit apart over the scene rather than butting together, and they are
  never nested — a glass card inside a glass card doubles the blur and turns
  both to milk.
- Light wells are placed behind panel edges, not behind body text, so there is
  always something with structure for the glass to refract.

## Components
- **Buttons:** glass pill or `radius-sm` rectangle at `glass-fill`, with the
  primary action taking a champagne fill at low alpha, a champagne border at
  ~40%, `primary-foreground` text and `shadow-champagne`. Hover lifts 1–2px,
  brightens the border and raises the fill one step.
- **Specular sweep:** a skewed white-to-transparent highlight that travels across
  a panel on hover. One element per screen may carry it; it is a garnish.
- **Cards:** the three-layer panel, lifting on hover to `shadow-lg` with a
  brighter border.
- **Inputs:** `surface-raised` fields rather than glass, with a `glass-border`
  edge and a champagne focus ring. Fields must stay readable, and readable beats
  translucent every time.
- **Toggles and sliders:** recessed `night-deep` track holding a glass thumb; the
  active track takes champagne at low alpha.
- **Navigation:** a floating glass pill rather than a docked bar, so the scene
  continues underneath it.
- **States:** cover default, hover, keyboard focus, active, disabled, loading,
  empty, error and success. Disabled drops to `glass-fill-quiet` with no shadow;
  focus is a champagne ring, never a removed outline.

## Motion
- Spring easing throughout: `ease-glass` at `duration-base`. Nothing snaps.
- Hover lifts 1–4px and deepens the shadow one step; active presses to ~0.97.
- The specular sweep runs at `duration-sweep` with ease-out.
- No bounce, no elastic overshoot, no parallax, no fade-in-on-scroll.
- Under `prefers-reduced-motion` drop the lift and the sweep, keep the border and
  shadow change so state stays legible.

## Accessibility
- Body text at 60% white over the night scene clears 4.5:1; do not go below it
  for anything a user has to read. Captions at 40% are for metadata only.
- Contrast is measured against the darkest point the panel can sit over, not the
  average — a light well drifting behind a panel raises its background.
- Champagne text on a champagne fill works only in the `primary-foreground` /
  low-alpha-fill pairing; champagne on the night scene at small sizes does not.
- Glass must never be the only cue for state; pair it with a border, an icon or
  a label change.

## Don't
- No purple-to-pink gradients. That combination is the generic look this system
  exists to avoid.
- No tinted glass. Colour belongs to the scene, never to the panel.
- No glass fill above 15% — past that it is a solid block, not a material.
- No glass on a flat solid background; without light wells or imagery there is
  nothing to refract.
- No low blur values, and never omit the saturation boost.
- No single-layer shadow — without the lit and shaded inset edges there is no
  light direction.
- No square or small corners, and no nested glass panels.
- No second accent colour, and no gradient text.
- No glass as the default surface for everything; it is for the panels that
  matter, over a scene worth seeing.
- No fast transitions under ~200ms, and no bounce or elastic curves.
