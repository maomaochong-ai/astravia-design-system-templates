# Meadow Buddies

A woodland fitness companion for small daily wins. `demo.html` contains a three-screen product study (Profile, Discover, Leader Board), a token reference, component states, an off-style comparison and a narrow-screen adaptation. It is a static, offline reference, not an account or workout service.

## Atmosphere

Friendly, sunlit and quietly playful. A sage landscape surrounds soft white mobile screens; apricot activity cards and little woodland characters make progress feel approachable. The product is a habit-building companion rather than a performance dashboard. Flat illustrations, rounded silhouette masks and sparse, delicate icon strokes carry the personality. Depth comes from overlapping sheets and a diffuse screen shadow.

## Color roles

- `surface` is the quiet reference-page ground; `surface-raised` is the white app screen and bottom sheet.
- `surface-foreground` is warm, dark text. `muted` supports secondary explanations and inactive icons, with sufficient contrast for readable text.
- `primary` is cocoa for compact action pills and the selected navigation disc; `primary-foreground` is the text or icon on it.
- `accent` is the sage presentation stage, activity-card fill and landscape midground. `sage-light` supports profile scenery; `sage-dark` anchors woodland characters, progress arcs and the first-place podium.
- `apricot` fills warm activity cards and the leaderboard sky. `apricot-light` softens icon wells and sandy foregrounds. `honey` accents reward coins and the third-place podium; `ochre` is the darker, readable gold for links.
- `danger` is restrained terracotta for negative rank changes and the second-place podium. Rank changes include a signed number and direction marker, so color is not the only signal.
- `mist` separates the navigation tray and ranking rows. `border` is a fine divider, not a heavy outline. `stage-end` closes the presentation background with a pale gray-green gradient; `stone` carries the reward banner.
- Literal palette values live in `theme.css`. The standalone demo mirrors those tokens in its own `:root`.

## Typography

The local `font-sans` stack has a friendly, rounded humanist shape. No font download is required. Main screen headings are 30–34px, medium weight with slightly tight tracking; centered navigation titles are 15–16px. At the 320px specimen width, body labels are 11–13px and metadata 10–11px. Live narrow-screen examples use at least 12px labels. Large numbers use a tabular rhythm; section labels in the reference use small uppercase letterspacing. Dense blocks of uppercase text are absent from the product screens.

## Spacing & layout

The desktop presentation shows three 320 × 690px phones with 44px corners, 40px gutters and a 36px upward step between screens. Product padding is 22px; local spacing follows a 4/8/12/16/24px rhythm. Profile and leaderboard use an illustrated upper field with a white sheet overlapping below. Discover uses a white body, a small reward banner, four equal shortcuts, two tall illustrated exercise cards and a pale bottom navigation tray.

Below 1120px, the presentation becomes a single centered column in the same reading order. Individual phone widths shrink to the available viewport without cropping their text. Reference grids collapse below 700px. Nothing relies on a sideways document scroll. On a real mobile surface, the phone specimen becomes a full-width screen: outer shadows and presentation offsets disappear, touch targets reach 44px, explanatory text becomes 12px or larger, and cards preserve their illustrated lower half. Safe-area padding belongs to any fixed production navigation.

## Components

- **Profile:** a centered title; a circular frog avatar with an incomplete progress ring; a hexagonal level badge, points and friend count; four quiet preference rows; one selected cocoa navigation disc.
- **Reward banner:** a stone-colored rounded rectangle with a level badge at the left, two short encouragement lines and a honey progress ring with a visible percentage at the right.
- **Shortcuts:** four equal circle wells containing small line icons. Text labels remain outside the circles.
- **Exercise cards:** apricot strength training and sage running, paired side by side. The top carries a short title, description and cocoa action pill; animal art occupies the lower half and stays behind the text. The numbered corner ribbon is small and terracotta.
- **Leaderboard:** an apricot landscape above a 2–1–3 podium; a frog winner, two companion portraits and a small honey ribbon. The overlapping white sheet has five ranking rows with rank, colored animal avatar, name, reward points and signed direction. The current user has a fine cocoa outline.
- **Characters:** original inline SVG primitives produce expressive eyes, rounded cheeks, spotted frog faces, tall rabbit ears and a long crocodile muzzle. They are artwork, never substitutes for functional icons. Decorative art is hidden from assistive technology.
- **Controls:** short cocoa pills, subtle pale icon wells, visible keyboard focus and disabled styling. Demo navigation uses real document anchors; mock account rows and rank data are static specimens. The native disclosure in the component reference demonstrates a working, script-free expanded state.

## Motion

Feedback is limited to 140ms color, outline and shadow changes. Hover is a supplement to visible selection, not the only way to reveal controls. Touch and keyboard interaction preserve the same information. Reduced-motion preferences remove transitions. There are no entrance sequences, looping characters or moving progress values in the reference.

## Don't

- Neon green, cold black and heavy offset shadows break the soft woodland atmosphere.
- Glass blur, glossy 3D characters, gradients inside every control and oversized pill containers compete with the flat illustration language.
- A generic marketing hero cannot replace the actual Profile / Discover / Leader Board product screens.
- Tiny low-contrast action text, icon-only rank changes and hidden hover-only actions lose essential information.
- Artwork does not cover labels, crop faces accidentally or replace semantic controls.
- The original reference screenshot is not part of this entry. Source attribution is limited to what is known in `meta.json`; the implementation does not claim ownership or licensing of the supplied image.
