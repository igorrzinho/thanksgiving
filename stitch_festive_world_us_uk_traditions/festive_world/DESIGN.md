---
name: Festive World
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444651'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#bb0112'
  on-secondary: '#ffffff'
  secondary-container: '#e02928'
  on-secondary-container: '#fffbff'
  tertiary: '#003212'
  on-tertiary: '#ffffff'
  tertiary-container: '#004b1f'
  on-tertiary-container: '#5ec074'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000b'
  tertiary-fixed: '#95f8a7'
  tertiary-fixed-dim: '#79db8d'
  on-tertiary-fixed: '#00210a'
  on-tertiary-fixed-variant: '#005323'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  body-xl:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system blends contemporary editorial publishing with high-legibility educational presentation patterns. Designed specifically for English language learners at the CEFR B1 threshold, the visual atmosphere balances authoritative clarity with cultural warmth and festive engagement.

### Design Movement & Aesthetic
The aesthetic draws from **Modern Editorial Minimalism** mixed with structured **Instructional UI**. It emphasizes high visual contrast, structured modular layouts, and quiet surfaces that let educational media, cultural photography, and side-by-side text comparisons lead. Instead of juvenile classroom tropes, the system projects an elevated, magazine-grade elegance suitable for interactive whiteboards, projectors, and split-screen classroom tablets.

### Target Audience & Pedagogical Tone
- **Audience:** Intermediate English learners (CEFR B1), secondary and adult ESL educators, and cultural studies cohorts.
- **Tone:** Encouraging, structured, celebratory, and clear. Visual cognitive load is kept strictly low: sentences breathe, cultural facts are chunked into bite-sized comparative modules, and vocabulary is highlighted without visual noise.

## Colors

The color architecture is built around an anchor of deep academic navy, balanced by culturally resonant festive dualities (crimson and emerald) and warm gold accents for pedagogical signaling.

### Roles & Application
- **Primary Navy (`#1E3A8A`):** Anchors headers, structural framing, navigation bars, and key instructional prompts. Communicates trust, structure, and academic clarity.
- **Festive Crimson (`#DC2626`):** Secondary accent used for US tradition callouts, urgent cues, primary festive tags, and interactive focus states.
- **Emerald Green (`#15803D`):** Tertiary accent representing UK traditional customs, evergreen motifs, correct answers, and comprehension confirmations.
- **Gold Amber (`#D97706`):** Highlight color reserved for CEFR B1 vocabulary tooltips, "Did You Know?" cultural trivia tags, and interactive stars or awards.
- **Surface & Canvas:** Base canvas is a soft, glare-reducing light slate (`#F8FAFC`). Surfaces elevate on crisp white (`#FFFFFF`) with a structural hairline border (`#E2E8F0`) to ensure contrast against ambient classroom lighting.
- **Text Palette:** Deep Slate Navy (`#0F172A`) for headlines and body copy ensures AA/AAA accessibility compliance on presentation screens. Muted instructional metadata uses Slate (`#64748B`).

## Typography

Typography prioritizes projection distance, legible letter shapes, and instant decoding for non-native readers.

### Structural Roles
- **Headlines (Outfit):** Modern geometric sans-serif featuring open counters and crisp terminal strokes. It imparts an engaging, contemporary editorial posture without distraction. Display and headline scales are tuned larger than standard web applications to support back-of-the-classroom legibility.
- **Body & Labels (Inter):** Highly rational, neutral neo-grotesque optimized for micro-legibility and long-form scannability. High x-height prevents word confusion for B1 learners encountering new vocabulary.
- **Reading Hierarchy:**
  - Slide titles and unit modules rely on `display-lg` and `headline-xl`.
  - Comparative card headings utilize `headline-md`.
  - Educational copy uses `body-xl` (for main projection slides) and `body-lg` (for individual student worksheets or split cards).
  - Badges, phonetic guides, and vocabulary metadata utilize `label-md` and `label-sm` in semi-bold and bold weights.

## Layout & Spacing

The presentation grid handles symmetrical side-by-side cultural comparisons (US vs. UK) across widescreen classroom projectors (16:9 aspect ratios) and responsive tablet viewports.

### Grid Architecture
- **Desktop & Presentation Screens (12 Columns):** Employs 24px (`1.5rem`) or 32px (`2rem`) gutters with an expansive 48px (`3rem`) outer margin. The core didactic pattern divides into two equal 6-column containers for dual-nation side-by-side comparison slides.
- **Tablet / Split View (8 Columns):** Retains side-by-side positioning with condensed 16px gutters and 24px margins.
- **Mobile Handouts (4 Columns):** Converts comparison grids into vertically stacked sequential sections with sticky country headers.

### Spacing Cadence
- Content components utilize strict multiples of 4px and 8px.
- Internal card padding is standardized to `space-lg` (24px) to give students visual breathing room around new language concepts.
- Micro-gaps between vocabulary pill icons and text rely on `space-xs` (4px) and `space-sm` (8px).

## Elevation & Depth

To preserve sharp legibility across diverse display hardware, depth relies on **low-contrast structural outlines** augmented by **subtle, diffused ambient shadows**. Avoid heavy, dark drop shadows that muddy projection screens.

### Elevation Levels
- **Level 0 (Canvas):** The base background (`#F8FAFC`), completely flat.
- **Level 1 (Editorial Cards & Panels):** Pure white background (`#FFFFFF`), defined by a 1px border in `#E2E8F0` and an ambient shadow of `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)`.
- **Level 2 (Active Cards & Focus Modules):** Slightly raised for current presentation slide or active interactive exercise. Shadow increases to `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)` with border color shifting to `#CBD5E1`.
- **Level 3 (Vocabulary Tooltips & Dropdowns):** Floating vocabulary definition modals and CEFR helper windows. Shadow of `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)` over a sharp 1px border (`#E2E8F0`).

## Shapes

The geometric framework establishes a balanced, friendly, yet rigorous profile.

### Corner Radius Standards
- **Containers & Editorial Cards:** Exactly `12px` (`0.75rem`), balancing friendly accessibility with modern magazine structure.
- **Interactive Buttons & Form Fields:** `8px` (`0.5rem`) for crisp actionable distinction.
- **Badges, Cultural Chips & Vocabulary Pills:** Full pill format (`9999px`) to create organic contrast against the structured rectilinearity of presentation cards.
- **Media Containers:** Image and video frames nested within editorial cards maintain an inner radius of `8px` (12px card radius minus 4px nested padding offset).

## Components

### 1. Country Comparison Badges
- **Structure:** Pill-shaped flags and country tags positioned at the top of comparison columns.
- **US Badge:** Crisp white or light tint background (`#EFF6FF`), 1px border (`#BFDBFE`), flag emoji (`🇺🇸`), bold navy text (`#1E3A8A`), with a miniature crimson indicator pip (`#DC2626`).
- **UK Badge:** Crisp white or light tint background (`#F0FDF4`), 1px border (`#BBF7D0`), flag emoji (`🇬🇧`), bold navy text (`#1E3A8A`), with a miniature emerald indicator pip (`#15803D`).
- **Dimensions:** Height 32px, horizontal padding 12px, font style `label-md`.

### 2. Vocabulary Callout Pills (CEFR B1)
- **Role:** Signals target vocabulary words (e.g., *“Mince Pie”*, *“Eggnog”*, *“Carols”*) directly within instructional text.
- **Visuals:** Surface colored with a gentle amber tint (`#FEF3C7`), border in `#FDE68A`, text in deep amber-brown (`#92400E`).
- **Interactive State:** Hover or focus underlines the term and displays a Level 3 popover with the CEFR level tag, phonetic pronunciation guide, and accessible definition.

### 3. Editorial Comparison Cards
- **Structure:** Crisp white surface (`#FFFFFF`), 12px radius, 1px border (`#E2E8F0`), padding 24px.
- **Header Section:** Houses the country badge and traditional title (`headline-md`).
- **Media Section:** High-definition 16:9 imagery showcasing the cultural artifact or ritual, with an overlay seasonal badge in the upper right corner.
- **Content Section:** Large, readable body text (`body-lg`) comparing customs (e.g., Thanksgiving roast turkey vs. British Christmas roast goose).

### 4. Seasonal & Topic Badges
- **Visuals:** Pill-shaped container (`9999px`), 24px height, uppercase `label-sm`.
- **Variants:**
  - *Festive General:* `#FEE2E2` fill, `#991B1B` text.
  - *Language Focus:* `#E0E7FF` fill, `#3730A3` text.
  - *Tradition Lore:* `#FEF9C3` fill, `#854D0E` text.

### 5. Buttons
- **Primary:** Background in Navy (`#1E3A8A`), white text, 8px radius, height 44px (touch-friendly for interactive screens), font `label-lg`. Hover shifts to `#172554`.
- **Secondary:** Surface `#FFFFFF`, 1px border `#CBD5E1`, text `#1E3A8A`. Hover shifts to background `#F1F5F9`.
- **Accent (Action/Quiz):** Crimson (`#DC2626`) or Emerald (`#15803D`) background with white text for decisive slide transitions and answer submissions.

### 6. Interactive Pronunciation & Audio Triggers
- **Visuals:** Circular 36px button featuring a clean speaker icon. Light slate surface (`#F1F5F9`), border `#E2E8F0`, icon in `#1E3A8A`.
- **Interaction:** Plays native US or UK audio clips with active wave animation in corresponding crimson or emerald hues.