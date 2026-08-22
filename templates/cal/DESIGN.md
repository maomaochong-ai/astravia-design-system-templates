# Cal.com — Design System

> **Theme:** Light · **Voice:** Monochrome Utility, Human Touch

Cal is a scheduling product whose interface feels precise, quiet and useful. The visual system is predominantly black, white and graduated neutral gray. Blue is a deliberately scarce functional accent for tertiary links and informational states; Google colors appear only in integration marks.

## Homepage visual observations

The public marketing homepage uses the same restrained product language at a larger scale. Treat the following as a visual snapshot for the landing-page direction, not as a replacement for the token system below.

- **Canvas and frame:** an off-white page carries a centered content column of roughly 1120px. The hero is a white, softly elevated frame with a thin neutral edge and approximately 8–10px corners; it is intentionally more tactile than the surrounding canvas.
- **Header:** a compact ~68px header uses the Cal.com wordmark, small medium-weight navigation, an understated “Sign in” text action, and a near-black, ~8px rounded “Get started” button.
- **Hero hierarchy:** a small release pill may precede the headline. The headline is a dense near-black display at roughly 56–60px on desktop, with tight negative tracking and a ~1.03 line height. Supporting copy is lighter, smaller and clearly secondary.
- **Primary conversion:** the hero demonstrates a stacked dark Google-sign-up button and a light email button, followed by low-contrast “No credit card required” helper text. Avoid large colored CTAs.
- **Scheduling demo:** the hero’s product fragment is a white booking surface with a fine divider between meeting details and a compact monthly calendar. Use a small avatar, concise duration chips, a dark selected date, quiet gray availability dates, and compact Cal Video/time-zone metadata.
- **Trust and rhythm:** a low-contrast logo strip follows the hero. Large horizontal bands, generous vertical breathing room, 8–12px product cards, thin #e5e7eb-like dividers and soft elevation create the calm marketing rhythm.
- **Feature imagery:** use realistic scheduling primitives—availability rows, calendar grids, booking cards, reminder notifications and integration marks—rather than abstract illustrations or decorative color fields.

The bundled preview remains a **design-token reference page**. Its hero applies these homepage observations so the reference feels recognizably Cal.com while the rest of the page continues to expose colors, type, spacing, surfaces, shadows and components.

## Foundations

### Color

| Token            | Value     | Usage                                       |
| ---------------- | --------- | ------------------------------------------- |
| `ink`            | `#101010` | Primary text, primary CTA, dark footer      |
| `action-blue`    | `#0099ff` | Tertiary links and informational highlights |
| `white`          | `#ffffff` | Cards and elevated scheduling surfaces      |
| `paper`          | `#f4f4f4` | Main page background and quiet fills        |
| `graphite`       | `#242424` | Secondary text and controls                 |
| `slate`          | `#6b7280` | Muted text                                  |
| `stone`          | `#898989` | Subtle labels                               |
| `silver`         | `#e5e7eb` | Input and control borders                   |
| `info-banner-bg` | `#eff6fe` | Informational banner background             |
| `google-blue`    | `#4285f4` | Google integration mark only                |
| `google-yellow`  | `#fbbc04` | Google integration mark only                |
| `google-green`   | `#34a853` | Google integration mark only                |
| `google-red`     | `#ea4335` | Google integration mark only                |

### Typography

Use **Cal Sans** for headings (fallback: Poppins or Gilroy), and **Cal Sans UI Variable Light** for reading text (fallback: Inter Light). Inter is used for compact product UI; Matter remains the tertiary utility face.

| Role          | Family                            | Weight | Size / line height | Tracking |
| ------------- | --------------------------------- | -----: | ------------------ | -------- |
| Caption       | Cal Sans UI Variable Light, Inter |    300 | 12px / 1.4         | -0.24px  |
| Body small    | Cal Sans UI Variable Light, Inter |    300 | 14px / 1.5         | -0.20px  |
| Body          | Cal Sans UI Variable Light, Inter |    300 | 16px / 1.5         | -0.19px  |
| Subheading    | Cal Sans UI Variable Light, Inter |    300 | 18px / 1.4         | -0.20px  |
| Heading small | Cal Sans, Poppins                 |    600 | 20px / 1.3         | 0.20px   |
| Heading       | Cal Sans, Poppins                 |    600 | 24px / 1.3         | 0.24px   |
| Heading large | Cal Sans, Poppins                 |    600 | 48px / 1.1         | 0.48px   |
| Display       | Cal Sans, Poppins                 |    600 | 64px / 1.1         | 0.64px   |

### Spacing

Use the 4px rhythm: `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `28`, `32`, `40`, `48`, `80`.

### Radius

`4`, `8`, `12`, `16`, `29`, `100`, `120`, `1000`, `9999` px. Inputs use 8px; cards use 12px; small tags and pill buttons use 9999px.

### Shadows

| Token      | Value                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| `sm`       | `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`                                         |
| `subtle`   | `rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset`                                                                        |
| `sm-2`     | `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`  |
| `sm-3`     | `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px` |
| `sm-4`     | `rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`                                                                                 |
| `subtle-2` | `rgb(255, 255, 255) 0px 2px 0px 0px inset`                                                                               |
| `subtle-3` | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 2px 0px`                                                |

## Layout

- Content maximum: `1200px`
- Section gap: `96px`
- Standard card padding: `24px`
- Product UI cards are white, 12px rounded, and use an extremely subtle shadow instead of a card border.

## Components

### Buttons and controls

| Component       | Treatment                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------- |
| Primary CTA     | Ink fill, white UI text, pill radius, 12px × 24px padding                                     |
| Secondary ghost | Transparent or paper fill, graphite text, 1px silver border, pill radius, 12px × 24px padding |
| Header CTA      | Ink fill, white 14px UI text, 8px radius, 8px × 16px padding                                  |
| Tag             | Paper fill or silver edge, graphite text, 9999px radius, 4px × 12px padding                   |
| Navigation link | Graphite Cal Sans UI, 14–16px, no underline                                                   |

### Scheduling widget

The scheduling surface is the principal product fragment: white background, 16px internal padding, 12px radius and `sm-4` shadow. Date selection is a compact ink circle; time choices use quiet silver borders and become ink only when selected. Use readable, functional labels rather than decorative graphics.

### Informational state and integrations

Informational banners use `info-banner-bg` with an `action-blue` link. Google colors are confined to the Google integration mark and are not promoted into general UI accents.

## Usage guidance

**Do**

- Keep core UI monochrome and let spacing, type and surface hierarchy carry emphasis.
- Use Cal Sans for headings and Cal Sans UI / Inter for body and product UI text.
- Use 8–12px cards with quiet elevation and ample internal space.
- Use product screenshots, scheduling fragments and integration marks as imagery.

**Avoid**

- Adding new core UI colors or broad blue decoration.
- Gradients, sharp corners, heavy borders on cards, or lifestyle / abstract imagery.
- Font weights above 600.
- Setting paragraph copy in the display face.

## Accessibility

Maintain visible keyboard focus, semantic controls, readable contrast, and reduced-motion behavior. Motion should be limited to a single calm product-surface entrance and disabled for `prefers-reduced-motion`.

## Deliverables

- [tokens.json](tokens.json) — DTCG-compatible token source
- [variables.css](variables.css) — CSS custom properties
- [theme.css](theme.css) — Tailwind v4 theme mapping
- [preview.html](preview.html) — standalone visual reference

## Source

Reset from the supplied **Cal.com — Style Reference: Monochrome Utility, Human Touch**. Values are intentionally limited to what that reference specifies.
