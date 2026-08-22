# Slack — Design System

> **Theme:** light
> **Reference:** aubergine stage with white spotlights

Slack pairs an airy near-white canvas with concentrated aubergine inversions. Salesforce Avant Garde makes headlines feel architectural; Salesforce Sans keeps product and body copy direct. Purple is structural rather than decorative: Aubergine owns actions, Deep Plum owns dark bands, and a black-to-violet gradient marks only a single highlighted phrase. Product UI carries visual weight while default cards stay outlined and quiet.

## Colors

| Token                   | Value                                                                   | Usage                                 |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| `--slack-aubergine`     | `#611f69`                                                               | Filled CTAs and navigation fills      |
| `--slack-deep-plum`     | `#481a54`                                                               | Full-bleed dark bands                 |
| `--slack-purple-haze`   | `#f9f0ff`                                                               | Lilac wash and quiet panels           |
| `--slack-lavender-mist` | `#eac8fe`                                                               | Card borders and outlines             |
| `--slack-vivid-violet`  | `linear-gradient(104deg, rgb(0, 0, 0) 9.56%, rgb(186, 1, 255) 102.66%)` | Single highlighted word in a headline |
| `--slack-plum-shadow`   | `#3d0157`                                                               | Dark purple UI detail                 |
| `--slack-iris`          | `#730394`                                                               | Secondary purple fill and link accent |
| `--slack-iris-light`    | `#d17dfe`                                                               | Bright dark-band accent               |
| `--slack-channel-blue`  | `#1264a3`                                                               | In-product channels and links only    |
| `--slack-mid-blue`      | `#0b4c8c`                                                               | Short link and tag accents            |
| `--slack-carbon`        | `#1d1c1d`                                                               | Primary body text                     |
| `--slack-charcoal`      | `#454245`                                                               | Secondary text                        |
| `--slack-mid-gray`      | `#696969`                                                               | Muted chrome                          |
| `--slack-fog`           | `#edeaed`                                                               | Hairline dividers                     |
| `--slack-white`         | `#ffffff`                                                               | Cards and inverted copy               |
| `--slack-soft-white`    | `#fefbff`                                                               | Page canvas                           |

## Typography

| Role       | Family / size / line-height / tracking   | Weight |
| ---------- | ---------------------------------------- | ------ |
| eyebrow    | Salesforce Sans / `12px / 1.5 / .68px`   | 700    |
| caption    | Salesforce Sans / `14px / 1.56 / -.03px` | 400    |
| body-sm    | Salesforce Sans / `16px / 1.5 / -.16px`  | 400    |
| body       | Salesforce Sans / `18px / 1.56 / -.22px` | 400    |
| subheading | Avant Garde / `32px / 1.25 / -.26px`     | 400    |
| heading-sm | Avant Garde / `50px / 1 / -.6px`         | 400    |
| heading    | Avant Garde / `64px / 1.12 / -.77px`     | 400    |
| heading-lg | Avant Garde / `76px / 1.2 / -.91px`      | 400    |
| display    | Avant Garde / `96px / 1.08 / -1.15px`    | 400    |

Use `"Salesforce-Avant-Garde", "Inter Tight", "DM Sans", sans-serif` for display and `"Salesforce-Sans", Inter, "IBM Plex Sans", sans-serif` for UI/body.

## Layout, shape, elevation

The content rail is `1200px`. Major sections use `80–100px` rhythm; cards use `24px` padding and tight groups use `8–12px`.

| Element          | Radius |
| ---------------- | ------ |
| Buttons and tags | 4px    |
| Cards            | 16px   |
| Nav pills        | 999px  |
| Badges           | 90px   |

| Token                     | Value                                    | Usage                    |
| ------------------------- | ---------------------------------------- | ------------------------ |
| `--slack-shadow-xl`       | `rgba(0, 0, 0, 0.1) 0px 0px 32px 0px`    | Product screenshot cards |
| `--slack-shadow-subtle`   | `rgb(97, 31, 105) 0px 0px 0px 1px inset` | CTA focus inset          |
| `--slack-shadow-subtle-2` | `rgba(0, 0, 0, 0.08) 0px 1px 3px 0px`    | Sticky nav idle          |
| `--slack-shadow-lg`       | `rgba(0, 0, 0, 0.1) 0px 5px 20px 0px`    | Sticky nav active        |

## Components

- **Primary CTA:** Aubergine, white 16px/700 text, 4px radius, `19px 40px 20px`; never a pill.
- **Ghost CTA:** transparent, Plum Shadow text, same 4px geometry and no border.
- **Feature card:** transparent, `1px` Lavender Mist border, 16px radius, no shadow.
- **Product screenshot:** transparent or Steel background, 16px radius and `--slack-shadow-xl`.
- **Dark band:** Deep Plum, white display type, restrained edge decorations. The dark band provides contrast; no text shadow.

## Rules

### Do

- Use Aubergine for filled actions and Deep Plum for full dark sections.
- Keep CTA corners at 4px and default card corners at 16px.
- Apply the Vivid Violet gradient only to a single keyword in a white-section headline.
- Reserve the 32px ambient shadow for product screenshots and floating overlays.
- Use Channel Blue inside product UI, not marketing CTAs.

### Avoid

- Pill-radius primary actions.
- Gradient backgrounds on controls, cards or inputs.
- Lavender card borders on product screenshot cards.
- Blue marketing CTAs.
- Body copy below 14px or above 18px.
