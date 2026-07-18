# Design System: UMP GPA Calculator

## 1. Visual Theme & Atmosphere
Neo-Bauhaus architectural UI. A clinical yet extremely vibrant 3D geometric interface. The density is "Dashboard Balanced" (6) with a "Confident Asymmetric" variance (7). Motion is "Cinematic Choreography" (8). It feels like a high-end, tactile scientific calculator built from physical, colorful Bauhaus blocks (primary red, blue, yellow) suspended in a pure white studio.

## 2. Color Palette & Roles
:root {
  --canvas-white: #F9FAFB; /* Background surface */
  --pure-surface: #FFFFFF; /* Card fill */
  --charcoal-ink: #18181B; /* Primary text */
  --muted-steel: #71717A; /* Secondary text */
  --whisper-border: rgba(226, 232, 240, 0.5); /* 1px structural lines */
  --accent-primary: #DC2F2F; /* UMP Red: CTAs, active states */
  --accent-secondary: #2563EB; /* UMP Blue: Support elements */
  --accent-tertiary: #FACC15; /* Bauhaus Yellow: Highlights */
}
(Strict constraint: No neon, no purple, no gradients on text. Solid, confident architectural colors).

## 3. Typography Rules
:root {
  --font-display: 'Clash Display', sans-serif;
  --font-body: 'Geist', sans-serif;
  --font-mono: 'Geist Mono', monospace;
}
- **Display:** Clash Display — Track-tight, uppercase for major structural headers, architectural weight.
- **Body:** Geist — Relaxed leading, strictly left-aligned for data.
- **Mono:** Geist Mono — For all numbers, inputs, and calculated results (Crucial for clinical precision).
- **Banned:** Inter, Roboto, Serif fonts.

## 4. Component Stylings
- **Buttons / Chips (GPA targets):** 3D extruded physical buttons. Tactile push feedback (spring down). Primary accent fill with solid black borders (brutalist Bauhaus nod).
- **Cards (Modules):** Geometric, asymmetrical panels with sharp or highly pronounced pill-corners. Thick 2px structural borders instead of soft drop shadows. Solid block-color shadows (`box-shadow: 4px 4px 0px #18181B`).
- **Inputs/Dropdowns:** Massive, oversized form fields with mono-spaced numbers. Label above, clear structural separation.
- **Hero Section:** Split-screen asymmetric or grid-locked. Not standard centered.

## 5. Layout Principles
Grid-first responsive architecture inspired by De Stijl / Bauhaus posters. Heavy use of vertical dividing lines. No flexbox percentage math—use CSS Grid. Strict single-column collapse below 768px. Elements NEVER overlap; they snap perfectly into geometric compartments.

## 6. Motion & Interaction (Choreography Spec)
:root {
  --spring-ease: cubic-bezier(0.19, 1, 0.22, 1);
  --transition-fast: 300ms var(--spring-ease);
  --transition-slow: 600ms var(--spring-ease);
}
Spring physics for all interactive elements (stiffness: 100, damping: 20). When GPA target chips are clicked, they physically compress. Staggered cascade reveals for the list of exams. Hardware-accelerated transforms only. Banned: `transition: all 0.3s`.

## 7. Anti-Patterns (Banned)
- NO emojis replacing actual icons.
- NO Inter or generic serif fonts.
- NO pure black (`#000000`).
- NO neon/outer glow shadows.
- NO 3-column equal grid clichés.
- NO floating elements without geometric containment.
- NO AI copywriting clichés ("Elevate", "Next-Gen").
- NO centered standard hero sections.
