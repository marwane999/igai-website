# DESIGN SYSTEM

## Brand Colors

```css
/* Primary Palette — Moroccan-inspired warm tones */
--color-primary: #C8A45C;        /* Moroccan gold — CTAs, accents */
--color-primary-dark: #A8893A;   /* Darker gold — hover states */
--color-secondary: #1B4965;      /* Deep blue — trusted, academic */
--color-secondary-light: #2C6F9B;/* Lighter blue */
--color-accent: #D4654A;         /* Terracotta — urgency, highlights */

/* Neutral Palette */
--color-bg: #FAFAF8;             /* Warm white — page bg */
--color-bg-alt: #F5F0E8;         /* Cream — section alt bg */
--color-bg-dark: #1A1A2E;        /* Dark navy — footer */
--color-text: #2D2D2D;           /* Near-black — body */
--color-text-light: #6B6B6B;     /* Gray — secondary text */
--color-text-on-dark: #F5F0E8;   /* Light text on dark */
--color-border: #E2DCC8;         /* Subtle borders */
--color-success: #3A7D44;
--color-warning: #D4A017;
--color-error: #C43C3C;
```

## Typography

### Font Stack
- **Headings**: `Playfair Display` (serif — classic, authoritative, Arabic-friendly)
- **Body**: `Inter` (sans-serif — clean, readable, excellent for English)
- **Arabic Text**: `Noto Naskh Arabic` or `Amiri` (when Arabic script shown)

```css
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-arabic: 'Noto Naskh Arabic', 'Amiri', serif;
```

### Type Scale
```
xs: 0.75rem   (12px)    — Captions, legal
sm: 0.875rem  (14px)    — Small text, nav links
base: 1rem    (16px)    — Body
lg: 1.125rem  (18px)    — Large body
xl: 1.25rem   (20px)    — Subtitle
2xl: 1.5rem   (24px)    — Section heading (H3)
3xl: 1.875rem (30px)    — Page heading (H2)
4xl: 2.25rem  (36px)    — Hero title (H1)
5xl: 3rem     (48px)    — Large hero (desktop)
```

## Tailwind v4 Theme Configuration

```css
/* In globals.css */
@import "tailwindcss";

@theme {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', sans-serif;

  --color-primary: #C8A45C;
  --color-primary-dark: #A8893A;
  --color-secondary: #1B4965;
  --color-secondary-light: #2C6F9B;
  --color-accent: #D4654A;

  --color-bg: #FAFAF8;
  --color-bg-alt: #F5F0E8;
  --color-bg-dark: #1A1A2E;

  --color-text: #2D2D2D;
  --color-text-light: #6B6B6B;
  --color-text-on-dark: #F5F0E8;

  --color-border: #E2DCC8;

  --breakpoint-3xl: 1920px;
}

/* Custom utility example */
@utility text-balance {
  text-wrap: balance;
}
```

## Component Design Patterns

### Cards
- Rounded corners (rounded-xl = 12px)
- Subtle shadow (shadow-sm)
- Border on hover (hover:border-primary)
- Transition on hover

### Buttons
- **Primary**: gold bg, dark text, rounded, hover darkens
- **Secondary**: outlined, blue text, hover fills
- **Ghost**: transparent, hover bg
- **Size**: sm (px-4 py-1.5), base (px-6 py-2.5), lg (px-8 py-3.5)

### Image-Text Blocks (Alternating Layout)
- Desktop: `grid grid-cols-2 gap-12 items-center`
- Odd sections: image left, text right
- Even sections: image right, text left
- Mobile: stack vertically, image above text

### Section Spacing
- Desktop: `py-20` (5rem)
- Tablet: `py-16`
- Mobile: `py-12`

### Container
- Max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Star / Rating Display
- Use Lucide `Star` icons in gold
- "4.9/5 — 200+ Student Reviews"

### Testimonials
- Card with quote, avatar, name, title, institution
- Carousel (framer-motion or pure CSS)
- 3 visible on desktop, 1 on mobile

## Responsive Breakpoints
```
sm: 640px    — Mobile landscape
md: 768px    — Tablet
lg: 1024px   — Desktop
xl: 1280px   — Large desktop
2xl: 1536px  — Extra large
```

## Animations
- Use `framer-motion` sparingly
- Fade-in on scroll for sections (once, not loop)
- Count-up animation for stats
- Stagger children for feature grids
- Smooth scroll for anchor links
