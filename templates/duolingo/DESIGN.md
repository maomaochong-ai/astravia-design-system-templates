# Duolingo — Style Reference
> A cheerful green classroom wrapped in playful geometry

**Theme:** light

Duolingo's visual identity radiates approachable warmth from a clean white canvas, punctuated by its unmistakable lime green (#58CC02) — a color so synonymous with the brand that it functions as a logo in its own right. The typeface, a rounded sans-serif with generous weight, projects friendly authority without intimidation. Surface depth is minimal: cards float on a whisper-thin shadow against Snow (#F7F7F7), while the primary green pill buttons command interaction through sheer chromatic confidence. The palette extends into a vivid spectrum of warm and cool accents — Bee yellow, Fox orange, Cardinal red, Macaw blue — each tied to a gamification mechanic (streaks, XP, hearts, gems). This is a design system that treats education as play: every component, from the rounded inputs to the progress bars, carries a subtle softness that lowers the psychological barrier to engagement. The signature rhythm break is the owl — Duo — whose illustrations punctuate empty states and achievements, anchoring the brand's personality in mascot-driven delight.

> **Source website:** [Duolingo](https://www.duolingo.com/) — Compare this extracted reference with the live official website, which remains authoritative.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| White | `#FFFFFF` | `--color-white` | Primary page background, card surfaces, button text on green |
| Snow | `#F7F7F7` | `--color-snow` | Secondary background, section fills, inactive states |
| Eel | `#3C3C3C` | `--color-eel` | Primary text, headings, body copy |
| Slug | `#777777` | `--color-slug` | Secondary text, placeholder text, muted labels |
| Swan | `#E5E5E5` | `--color-swan` | Borders, dividers, disabled state backgrounds |
| Green | `#58CC02` | `--color-green` | Primary action buttons, active states, progress, success indicators |
| Green Hover | `#4CAF00` | `--color-green-hover` | Hover state for primary green elements |
| Green Dark | `#46A302` | `--color-green-dark` | Pressed/active state for primary green elements |
| Bee | `#FFC800` | `--color-bee` | Streak indicators, XP badges, yellow accent, warning |
| Fox | `#FF9600` | `--color-fox` | Streak fire, orange accent, animated highlights |
| Cardinal | `#FF4B4B` | `--color-cardinal` | Error states, hearts/lives indicator, destructive actions |
| Macaw | `#1CB0F6` | `--color-macaw` | Info indicators, links, blue accent, skill tree highlights |
| Regalia | `#CE82FF` | `--color-regalia` | Super badge, premium accent, purple highlights |
| Basil | `#1899D6` | `--color-basil` | Info background, blue dark variant |
| Eel Light | `#4B4B4B` | `--color-eel-light` | Slightly lighter body text variant |

### Decorative / Gradient

| Name | Value | Token | Role |
|------|-------|-------|------|
| Green Gradient | `linear-gradient(180deg, #58CC02 0%, #46A302 100%)` | `--gradient-green` | Primary button gradient, progress fills |
| Super Gradient | `linear-gradient(135deg, #CE82FF 0%, #1CB0F6 100%)` | `--gradient-super` | Super/Premium badges and accents |
| Warm Gradient | `linear-gradient(135deg, #FF9600 0%, #FFC800 100%)` | `--gradient-warm` | Streak fire, warm decorative backgrounds |

## Tokens — Typography

### Feather Bold — Primary display and heading typeface · `--font-feather-bold`
- **Substitute:** Nunito
- **Weights:** 700, 800
- **Sizes:** 24px, 28px, 32px
- **Line height:** 1.17, 1.2
- **Letter spacing:** -0.02em at large sizes
- **Role:** Primary headings, section titles, hero text. Rounded letterforms reinforce the brand's approachable personality.

### Feather Regular — Body and UI text · `--font-feather`
- **Substitute:** Nunito
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 15px, 16px, 17px, 18px, 19px, 20px
- **Line height:** 1.2, 1.4, 1.5, 1.6
- **Letter spacing:** -0.01em
- **Role:** Body text, buttons, navigation, labels, descriptions. The workhorse of the UI with a wide weight range.

### Source Code Pro — Monospaced text · `--font-source-code`
- **Substitute:** ui-monospace
- **Weights:** 400, 500
- **Sizes:** 14px, 16px
- **Line height:** 1.5
- **Role:** Code snippets, technical details, special formatting.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| display | 32px | 1.17 | -0.02em | `--text-display` |
| heading-lg | 28px | 1.2 | -0.02em | `--text-heading-lg` |
| heading | 24px | 1.2 | -0.02em | `--text-heading` |
| body-lg | 20px | 1.4 | — | `--text-body-lg` |
| body | 16px | 1.5 | -0.01em | `--text-body` |
| body-sm | 15px | 1.5 | -0.01em | `--text-body-sm` |
| body-xs | 14px | 1.5 | -0.01em | `--text-body-xs` |
| caption | 12px | 1.5 | — | `--text-caption` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |

### Border Radius

| Name | Value | Token |
|------|-------|-------|
| sm | 8px | `--radius-sm` |
| md | 12px | `--radius-md` |
| lg | 16px | `--radius-lg` |
| xl | 20px | `--radius-xl` |
| 2xl | 24px | `--radius-2xl` |
| pill | 9999px | `--radius-pill` |

| Element | Value |
|---------|-------|
| cards | 16px |
| buttons | 9999px (pill) |
| inputs | 12px |
| badges | 9999px (pill) |
| illustrations | 24px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| shadow-sm | `0 1px 2px rgba(0, 0, 0, 0.05)` | `--shadow-sm` |
| shadow-md | `0 4px 12px rgba(0, 0, 0, 0.08)` | `--shadow-md` |
| shadow-lg | `0 8px 24px rgba(0, 0, 0, 0.1)` | `--shadow-lg` |
| shadow-button | `0 4px 0 #46A302` | `--shadow-button` |
| shadow-button-pressed | `0 2px 0 #46A302` | `--shadow-button-pressed` |

### Layout

- **Section gap:** 48px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 960px

## Components

### Primary Action Button
**Role:** Filled button — main CTA

Background: Green (#58CC02) with green gradient, text: White (#FFFFFF). Full pill shape with 9999px radius. Padding: 13px 24px. Font: 16px/700/1.5/-0.01em. Box-shadow: `0 4px 0 #46A302` (simulated depth). Hover: background shifts to Green Hover (#4CAF00), shadow shifts to `0 2px 0 #46A302`. Active: transform translateY(2px), shadow flattens.

### Secondary Action Button
**Role:** Outlined button

Background: transparent, text: Green (#58CC02), border: 2px solid Green (#58CC02). Full pill shape with 9999px radius. Padding: 11px 24px. Font: 16px/700/1.5/-0.01em. Hover: background rgba(88, 204, 2, 0.08).

### Ghost Button
**Role:** Text-only button

Background: transparent, text: Macaw (#1CB0F6). Padding: 8px 12px. Font: 14px/700. Hover: text-decoration underline.

### Card (Lesson)
**Role:** Interactive lesson tile

Background: White (#FFFFFF). Border-radius: 16px. Box-shadow: shadow-md. Padding: 24px. Border: 2px solid transparent. Hover: border-color: Swan (#E5E5E5). Contains skill icon, title, progress bar.

### Progress Bar
**Role:** Learning progress indicator

Background track: Swan (#E5E5E5). Fill: Green (#58CC02). Height: 8px. Border-radius: pill (9999px). Animated fill transition.

### Navigation Bar
**Role:** Top navigation

Background: White (#FFFFFF). Height: 64px. Box-shadow: `0 1px 0 rgba(0, 0, 0, 0.08)`. Logo left, navigation center, profile right. Nav items: 14px/600/Slug, active: Green (#58CC02).

### Bottom Navigation (Mobile)
**Role:** Mobile tab bar

Background: White (#FFFFFF). Height: 56px. Box-shadow: `0 -1px 0 rgba(0, 0, 0, 0.08)`. 5 tab items with icons. Active tab: Green (#58CC02), inactive: Slug (#777777).

### Input Field
**Role:** Text input

Background: White (#FFFFFF). Border: 2px solid Swan (#E5E5E5). Border-radius: 12px. Padding: 14px 16px. Font: 16px/400. Text color: Eel (#3C3C3C). Placeholder: Slug (#777777). Focus: border-color Green (#58CC02), box-shadow: `0 0 0 2px rgba(88, 204, 2, 0.2)`.

### Badge
**Role:** Status/gamification indicator

Background: varies by type (Green for XP, Bee for streak, Cardinal for hearts). Text: White. Full pill shape (9999px radius). Padding: 4px 12px. Font: 12px/700.

### Skill Node (Skill Tree)
**Role:** Interactive skill tree item

Circular icon container, 72px diameter. Background: Green (#58CC02) for unlocked, Swan (#E5E5E5) for locked. Crown icon for completed. Animated hover with scale(1.05).

## Do's and Don'ts

### Do
- Use Green (#58CC02) exclusively for primary action buttons and positive feedback — it is the brand's most recognizable signal.
- Apply the full pill radius (9999px) to all buttons and badges to maintain Duolingo's soft, approachable component language.
- Use the 3D button shadow (`0 4px 0 #46A302`) on primary green buttons to simulate physical depth — this is a signature interaction pattern.
- Reserve the warm accent spectrum (Bee, Fox, Cardinal) for gamification elements only — streaks, hearts, XP — not for general UI.
- Maintain Snow (#F7F7F7) as the secondary background for section alternation, keeping the overall canvas White (#FFFFFF).
- Use Feather Bold at 24–32px for section headings with tight line-height (1.17–1.2) to preserve the brand's confident, rounded personality.
- Keep element gaps at 16px and section gaps at 48px for comfortable reading density that matches the brand's friendly pace.

### Don't
- Do not use Green (#58CC02) for text — it is reserved for interactive elements and progress indicators.
- Do not flatten the 3D button shadow to a simple box-shadow — the `0 4px 0 #46A302` depth effect is a core brand interaction.
- Do not use sharp corners (0px radius) on any component — even cards use at least 16px radius.
- Do not pair Green with Cardinal red in the same context — red signals error/destructive actions and green signals success.
- Do not use thin font weights (200, 300) — the brand voice is bold and friendly, requiring 400+ weights.
- Do not introduce dark-mode-only surfaces (#1a1a1a etc.) in the primary theme — the brand is fundamentally light.
- Do not use Macaw (#1CB0F6) for primary actions — it is reserved for informational and link contexts.
- Do not place content directly on the White background without card elevation — use shadow-md or section Snow fills to maintain depth hierarchy.

## Imagery

Duolingo's imagery is dominated by flat, vector-style illustrations featuring its mascot Duo the owl in countless expressive poses. Illustrations use a limited palette matching the brand tokens — primarily Green, White, Eel, and accent colors — with no photorealistic rendering. Skill icons are simplified, glyph-style illustrations within circular containers. Achievement graphics add sparkle and confetti effects using the accent spectrum (Bee, Fox, Regalia). Photography is absent from the core learning experience; the brand relies entirely on illustration and iconography to convey emotion and context.

## Layout


