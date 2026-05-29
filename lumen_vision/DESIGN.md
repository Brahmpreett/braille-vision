---
name: Lumen Vision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#999077'
  outline-variant: '#4d4632'
  surface-tint: '#e9c400'
  primary: '#fff5dc'
  on-primary: '#3a3000'
  primary-container: '#ffd600'
  on-primary-container: '#705d00'
  inverse-primary: '#705d00'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#d8fcff'
  on-tertiary: '#00373a'
  tertiary-container: '#00f0fc'
  on-tertiary-container: '#00696f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe170'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#70f6ff'
  tertiary-fixed-dim: '#00dce7'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f53'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  touch-target-min: 56px
  container-padding: 24px
  gutter: 16px
  stack-gap-lg: 32px
  stack-gap-md: 20px
  stack-gap-sm: 12px
---

## Brand & Style

The design system is centered on the intersection of cutting-edge AI utility and uncompromising accessibility. The brand personality is empowering, precise, and utilitarian, aiming to evoke a sense of confidence and independence for users with visual impairments. 

The aesthetic follows a **High-Contrast Minimalism** approach. By stripping away non-essential decorative elements, the interface prioritizes cognitive ease and immediate recognition. Every visual choice—from the stark color pairings to the oversized interactive zones—is a functional decision designed to facilitate real-time Braille translation. The "AI-powered" nature is signaled not through complex gradients, but through speed, rhythmic clarity, and a futuristic, "heads-up display" efficiency.

## Colors

The palette is engineered for **AAA contrast compliance** and maximum legibility under varying light conditions. 

- **Primary High-Contrast Yellow (#FFD600):** Used exclusively for primary actions, focus indicators, and critical headlines. This color provides the highest chromatic visibility against the dark background.
- **Deep Charcoal/Black (#121212):** The base background layer, chosen to minimize screen glare and maximize the "pop" of foreground elements.
- **Surface Dark Grey (#1E1E1E):** Used for cards and secondary containers to create subtle tonal separation without introducing distracting shadows.
- **Pure White (#FFFFFF):** Reserved for primary body text and icons to ensure crispness against the charcoal base.

## Typography

This design system utilizes **Inter** for its exceptional legibility and modern, neutral tone. The typography scale is intentionally enlarged to cater to users with low vision.

- **Legibility first:** The minimum font size is set to 16px (labels), with standard body text starting at 18px-20px. 
- **Letter Spacing:** Increased letter spacing (0.01em to 0.05em) is applied across all levels to prevent "character crowding," making it easier for users to distinguish individual letters.
- **Color Logic:** Headings utilize the Primary Yellow to establish a clear information hierarchy, while body copy remains Pure White for sustained reading comfort.

## Layout & Spacing

The layout philosophy follows a **Linear Stream** model. To reduce cognitive load, elements are stacked vertically in a single-column flow wherever possible. 

- **8pt Grid System:** All spacing and sizing are multiples of 8px to ensure mathematical harmony and ease of implementation.
- **Touch Targets:** While the standard requirement is 48px, this design system mandates a **56px minimum touch target** for all interactive elements to accommodate motor-control variability.
- **Whitespace:** Significant padding (24px internal container padding) is used to isolate interactive groups, preventing accidental triggers of adjacent buttons.
- **Grid:** A simple 4-column fluid grid for mobile, emphasizing full-width components to maximize the interactive surface area.

## Elevation & Depth

To maintain high accessibility standards, depth is communicated through **Tonal Layering** rather than complex shadows. 

- **Level 0 (Background):** Deep Charcoal (#121212) - The base canvas.
- **Level 1 (Surface):** Dark Grey (#1E1E1E) - Used for cards and persistent navigation bars.
- **Level 2 (Active/Focus):** No elevation change, but a high-contrast 3px solid border in Primary Yellow (#FFD600) is applied.

Shadows are avoided to prevent "blurring" of edges, which can be difficult for low-vision users to perceive. Contrast borders are the primary method for indicating "above" or "active" states.

## Shapes

The design system uses a **Rounded (Level 2)** shape language. 

- **Standard Radius:** 0.5rem (8px) for cards and small buttons.
- **Large Radius:** 1rem (16px) for main feature containers and bottom sheets.

These softened corners provide a friendly, modern feel that balances the "harshness" of the high-contrast color palette. The roundedness also helps visually distinguish UI elements from the sharp edges of the mobile device itself.

## Components

### Buttons
- **Primary:** Solid Primary Yellow background with Black text. 56px height. Bold 18px font.
- **Secondary:** Transparent background with a 2px Primary Yellow border. 
- **Active State:** When pressed, buttons shift to a slightly desaturated yellow; they must provide haptic feedback.

### Chips & Tags
- Used for Braille grade (e.g., "Grade 1", "Grade 2").
- Dark Grey background with White text and a subtle 1px border to distinguish from the background.

### Input Fields
- Underlined or fully boxed with a 2px border. 
- The border turns Primary Yellow when focused. 
- Placeholder text must meet 4.5:1 contrast ratio against the background.

### Cards
- Surface Dark Grey (#1E1E1E) with 16px internal padding.
- Used for translation history or settings groups. 
- No drop shadows; use a 1px border (#2C2C2C) for subtle definition if necessary.

### Focus Indicators
- Every interactive element must have a 4px "Focus Ring" in Primary Yellow when navigated via screen reader or external keyboard.

### Feedback UI
- **Scanning State:** A pulsating Primary Yellow line or border indicates the AI is actively "reading" Braille dots.
- **Success/Error:** Use large, 32px icons accompanied by text labels; do not rely on color alone to communicate state.