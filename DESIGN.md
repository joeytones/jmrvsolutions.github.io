---
name: Obsidian Nexus Evolution
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#81d1f0'
  on-secondary: '#003544'
  secondary-container: '#006f8a'
  on-secondary-container: '#beebff'
  tertiary: '#dbdddf'
  on-tertiary: '#2d3133'
  tertiary-container: '#bfc1c3'
  on-tertiary-container: '#4c4f51'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#b9eaff'
  secondary-fixed-dim: '#81d1f0'
  on-secondary-fixed: '#001f29'
  on-secondary-fixed-variant: '#004d62'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  baseline: 4px
  gutter-sm: 16px
  gutter-md: 24px
  margin-sm: 16px
  margin-lg: 48px
  column-gap: 24px
---

## Brand & Style

The design system evolves into a high-tech, futuristic aesthetic that blends the deep mystery of an "Obsidian" base with the energetic precision of a "Circuit-Blue" infrastructure. It is designed for developers, data architects, and tech-forward enterprises who value precision, scalability, and modern sophistication.

The visual style is a fusion of **Corporate Modern** and **Cyber-Minimalism**. It utilizes structured geometric patterns inspired by the circuit board motifs in the reference image—represented through subtle background grids, monospaced data displays, and sharp, luminous accents. The emotional response is one of controlled power, technological dominance, and crystalline clarity.

## Colors

The palette is rooted in a "Deep Obsidian" foundation to maintain the dark, mysterious core, while injecting "Tech-Cyan" as the primary driver for interactivity and focus.

- **Primary (Tech-Cyan):** A vibrant, glowing cyan (#22D3EE) used for key actions, active states, and critical data highlights. It mimics the luminosity of the light-trails in the circuit pattern.
- **Secondary (Circuit-Blue):** A mid-tone teal-blue (#0E7490) used for structural elements, secondary buttons, and less urgent information.
- **Tertiary (Electric White):** An off-white (#F8FAFC) used sparingly for high-contrast text and "hot" points in the UI where light would naturally pool.
- **Neutral (Obsidian):** A spectrum of ultra-dark navies and blacks (#020617) providing the infinite depth required for the "Nexus" theme.

Surface levels should use incremental shifts in "Obsidian" values to define hierarchy rather than borders where possible.

## Typography

Typography in this design system balances geometric futurism with technical legibility.

- **Headlines:** Use **Space Grotesk**. Its technical, slightly eccentric letterforms reflect the "circuit-board" inspiration. High-level headers should utilize tight letter spacing to feel impactful and engineered.
- **Body:** Use **Geist**. This font provides a clean, developer-centric feel that ensures comfort during long reading sessions or data analysis.
- **Labels & Data:** Use **JetBrains Mono**. All functional labels, code snippets, and metadata should be set in this monospaced typeface to reinforce the technical nature of the product. Use "all-caps" for small labels to create a "UI-as-HUD" (Heads-Up Display) effect.

## Layout & Spacing

This design system uses a **Fixed-Fluid Hybrid Grid** based on a 4px baseline.

- **Grid:** A 12-column grid for desktop with 24px gutters. On mobile, transition to a 4-column grid with 16px margins. 
- **Rhythm:** Spacing should be mathematical and consistent. Use increments of 8px (8, 16, 24, 32, 48, 64) for vertical rhythm.
- **Container Strategy:** Layouts should be centered with a maximum width of 1440px to maintain the "contained" feel of the logo's central orb. 
- **Circuit Patterns:** Use "circuit-path" lines (1px width, primary color at 20% opacity) to connect disparate sections of the UI, guiding the eye vertically or horizontally across the grid.

## Elevation & Depth

Elevation is achieved through **Tonal Layers** and **Cyan Glows** rather than traditional drop shadows.

1.  **Base:** The deepest Obsidian (#020617).
2.  **Surface:** One step lighter (#0F172A), used for cards and main containers.
3.  **Overlay:** A secondary lighter tier (#1E293B) for modals and menus.
4.  **Luminous Depth:** Active elements or "Tier 1" items should have a very subtle `0px 0px 15px` outer glow in the primary Cyan color at 15% opacity, simulating the glow of a circuit line.
5.  **Borders:** Use low-contrast, 1px solid borders (#334155) to define shapes without breaking the dark aesthetic.

## Shapes

The shape language is **Soft (0.25rem)**. While the overall feel is technical and geometric, the slight rounding prevents the UI from feeling aggressive or dated. 

- **Exceptions:** Use "Pill-shaped" roundedness for status indicators and specific "Circuit-node" buttons to mimic the circular terminals found in the reference logo's circuit paths.
- **Geometric Accents:** Decorative elements should use 45-degree angled corners (clipped corners) rather than rounding to emphasize the "engineered" aesthetic.

## Components

- **Buttons:** 
  - *Primary:* Solid Cyan background with dark text. No border.
  - *Secondary:* Ghost style with 1px Cyan border and Cyan text.
  - *Tertiary:* Ghost style with neutral text and hover-glow effect.
- **Inputs:** Dark background (#0F172A) with a bottom-only border that lights up (Cyan) on focus. Labels should be JetBrains Mono, positioned above the input.
- **Cards:** No shadow. 1px border (#334155). On hover, the border color transitions to the Secondary Circuit-Blue.
- **Chips/Status:** Use the Pill-shape. High-saturation background for status (e.g., Success = Green, but keep it within the Teal spectrum).
- **Circuit Lines:** A unique component consisting of 1px lines that can be used to "connect" headers to their content, mimicking the traces on a motherboard.
- **Data Visuals:** Charts and graphs must exclusively use the Primary, Secondary, and Tertiary color palette to maintain visual unity.