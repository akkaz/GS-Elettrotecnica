# GS Elettrotecnica - Agent Documentation

## Project Overview

**Project Name:** GS Elettrotecnica Modern Website  
**Type:** React + Vite Single Page Application  
**Purpose:** Modern, responsive website for an industrial electrical and automation company  
**Tech Stack:** React 19, Vite, TailwindCSS, Framer Motion

---

## 🧠 Agent Protocol

> [!IMPORTANT]
> **CRITICAL INSTRUCTION**: You MUST always read this file (`AGENT.md`) at the start of a session to ground yourself in the project context.
> **MANDATORY UPDATE**: You MUST update this file after completing a task to reflect new architectural decisions, known issues, or completed features. Keep this documentation living and accurate.

---

## 🎨 Brand Identity

### Primary Colors
- **Main Brand Color:** `#007F8E` (Teal) - Used for primary actions, highlights, and brand elements
- **Secondary/Accent Color:** `#B20000` (Red) - Used for CTAs and important highlights
- **⚠️ DEPRECATED:** Orange (`#f97316`, `orange-500`, etc.) - **DO NOT USE** - This is an old color that should be replaced

### Color Usage Guidelines
- **Primary actions:** Use `brand` color variants (`brand-500`, `brand-600`, etc.)
- **Secondary actions:** Use `accent` color variants (`accent-500`, etc.)
- **Dark backgrounds:** Use `bg-dark` variants derived from brand teal
- **Text on dark backgrounds:** Ensure sufficient contrast (use `text-white`, `text-slate-200`, etc.)
- **Gradients:** Use brand color gradients for modern effects

### Dark Background Palette
All dark backgrounds are derived from the brand teal for consistency:
- `--color-bg-dark: #001A1D` - Darkest, for main backgrounds
- `--color-bg-dark-alt: #00333A` - Dark variant for sections
- `--color-bg-dark-card: #004C56` - Card backgrounds
- `--color-bg-dark-lighter: #006672` - Lighter dark backgrounds

---

## 📁 Project Structure

```
gs-elettrotecnica-modern/
├── public/               # Static assets (images)
├── src/
│   ├── assets/          # React assets
│   ├── components/      # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── ui/          # UI component library
│   │       ├── AnimatedNumber.jsx
│   │       ├── AuroraBackground.jsx
│   │       ├── BentoGrid.jsx
│   │       ├── CardHoverEffect.jsx
│   │       ├── FloatingParticles.jsx
│   │       ├── GlassmorphicCard.jsx
│   │       ├── InfiniteMovingCards.jsx
│   │       ├── MagneticButton.jsx
│   │       └── Timeline.jsx
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── ChiSiamoPage.jsx (About Us)
│   │   ├── ServiziPage.jsx (Services)
│   │   └── ContattiPage.jsx (Contact)
│   │   └── services/    # Individual Service Pages
│   │       ├── ImpiantiElettriciPage.jsx
│   │       ├── AutomazionePage.jsx
│   │       ├── QuadriElettriciPage.jsx
│   │       ├── EnergieRinnovabiliPage.jsx
│   │       ├── RevampingPage.jsx
│   │       └── ServiziAggiuntiviPage.jsx
│   ├── styles/
│   │   └── variables.css  # CSS custom properties (design system)
│   ├── utils/
│   │   └── cn.js        # Utility for className merging
│   ├── App.jsx          # Main app component with routing
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration with brand colors
├── vite.config.js
└── AGENT.md            # This file
```

---

## 🎯 Design System

### CSS Variables Location
All design tokens are defined in `src/styles/variables.css` and include:
- Brand colors (primary, secondary, and their variants)
- Dark background colors
- Neutral colors (text, backgrounds, borders)
- Glassmorphism variables
- Spacing scale
- Typography scale
- Transitions
- Shadows
- Border radius
- Z-index scale

### Tailwind Configuration
The `tailwind.config.js` extends Tailwind with custom brand colors that reference CSS variables:
- `brand.*` - Primary brand color variants
- `accent.*` - Secondary/accent color variants
- `bg-dark.*` - Dark background variants

### Utility Classes
Custom utility classes are defined in both `variables.css` and `index.css`:
- `.glass` - Glassmorphism effect
- `.glass-strong` - Stronger glassmorphism
- `.gradient-brand` - Brand color gradient
- `.text-gradient-brand` - Text with brand gradient
- `.transition-smooth` - Smooth transitions

---

## 🧩 Component Library

### UI Components (`src/components/ui/`)

1. **AnimatedNumber.jsx**
   - Animates numbers counting up
   - Used in stats sections

2. **AuroraBackground.jsx**
   - Animated gradient background effect
   - Used in hero sections

3. **BentoGrid.jsx**
   - Modern grid layout for content cards
   - Supports various card sizes and layouts

4. **CardHoverEffect.jsx**
   - Cards with sophisticated hover animations
   - Used for service/feature displays

5. **FloatingParticles.jsx**
   - Animated particle effects
   - Includes geometric shapes variant
   - Used for visual enhancement

6. **GlassmorphicCard.jsx**
   - Cards with glassmorphism effect
   - Configurable blur and opacity
   - Used throughout for modern aesthetic

7. **InfiniteMovingCards.jsx**
   - Infinite scrolling card carousel
   - Used for testimonials

8. **MagneticButton.jsx**
   - Buttons with magnetic hover effect
   - Used for primary CTAs

9. **Timeline.jsx**
   - Vertical timeline component
   - Used in "Chi Siamo" page for company history

### Layout Components (`src/components/`)

1. **Navigation.jsx**
   - Main navigation bar
   - Responsive design
   - Page navigation handler

2. **Footer.jsx**
   - Site footer with company info
   - Links to pages
   - Contact information

---

## 📄 Pages

### HomePage.jsx
**Sections:**
- Hero with Aurora background and animated title
- Stats section with animated counters
- Services grid with hover effects
- Testimonials with infinite scroll
- "Why Choose Us" section
- CTA section

**Key Features:**
- Framer Motion animations
- Glassmorphic cards
- Magnetic buttons
- Floating particles

### ChiSiamoPage.jsx (About Us)
**Sections:**
- Company introduction
- Timeline of company history
- Values and mission

### ServiziPage.jsx (Services)
**Sections:**
- Detailed service descriptions
- Service categories
- Technical capabilities

### ContattiPage.jsx (Contact)
**Sections:**
- Contact form
- Company information
- Location/address

---

## 🚀 Development

### Commands
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Key Dependencies
- **React 19.2.0** - UI library
- **React Router DOM 7.9.6** - Client-side routing (currently using state-based navigation)
- **Framer Motion 12.23.24** - Animation library
- **TailwindCSS 3.4.18** - Utility-first CSS framework
- **Lucide React 0.554.0** - Icon library
- **Vite (Rolldown variant)** - Build tool

---

## ⚠️ Known Issues & Technical Debt

### Color Inconsistencies
- **OLD ORANGE COLOR** still appears in several places:
  - `App.jsx` line 25: `selection:bg-orange-500` 
  - `HomePage.jsx` line 321: CheckCircle icon uses `text-orange-500`
  - `HomePage.jsx` line 346: "30+" stat uses `text-orange-500`
  - `HomePage.jsx` line 356: CTA section background uses `bg-orange-500/5`
  - `HomePage.jsx` line 362-364: CTA button uses `bg-orange-500` and `hover:bg-orange-600`
  - `index.css` line 78: `.gradient-text` uses orange gradient
  - `index.css` lines 116, 120: `.pulse-glow` animation uses orange color

### Accessibility Issues
- Text contrast issues may exist on some dark backgrounds
- Need to verify ARIA labels on interactive elements
- Focus states should be tested for keyboard navigation

### Code Quality
- Some components may have unused imports
- Potential duplicate CSS (glassmorphism defined in multiple places)
- Navigation uses state instead of React Router (could be improved)

---

## 🎨 Design Principles

### Modern Aesthetics
- **Glassmorphism:** Frosted glass effects for cards and overlays
- **Gradients:** Smooth color transitions using brand colors
- **Animations:** Subtle, purposeful animations with Framer Motion
- **Micro-interactions:** Hover effects, magnetic buttons, particle effects

### Responsive Design
- **Mobile-first approach**
- Breakpoints: sm, md, lg, xl (Tailwind defaults)
- Flexible grid layouts
- Touch-friendly interactive elements

### Performance
- Code splitting with Vite
- Lazy loading for images
- Optimized animations (GPU-accelerated)
- Minimal bundle size

---

## 📝 Content Guidelines

### Language
- **Italian** - Primary language for all content
- Professional, technical tone
- Industry-specific terminology

### Company Information
- **Name:** GS Elettrotecnica
- **Experience:** 30+ years
- **Team:** 40+ qualified collaborators
- **Facility:** 1500 m² production structure
- **Projects:** 500+ completed

### Services
1. **Impiantistica Industriale** - Industrial electrical systems
2. **Automazione Industriale** - Industrial automation (PLC, CNC)
3. **Energie Rinnovabili** - Renewable energy (solar)
4. **Revamping Macchinari** - Machinery modernization

---

## 🔧 Maintenance & Updates

### When Adding New Features
1. Follow existing component patterns
2. Use design system variables from `variables.css`
3. Ensure responsive design
4. Add appropriate animations
5. Test accessibility
6. **Use brand colors only** (teal `#007F8E` and red `#B20000`)

### When Fixing Bugs
1. Check for color inconsistencies (remove orange)
2. Verify text contrast on dark backgrounds
3. Test on multiple screen sizes
4. Ensure animations perform well
5. Validate with ESLint

### Code Style
- Use functional components with hooks
- Prefer named exports for components
- Use Tailwind classes over custom CSS when possible
- Keep components focused and reusable
- Use meaningful variable names
- Comment complex logic

---

## 🎯 Future Improvements

### High Priority
- [ ] Replace all orange colors with brand colors
- [ ] Fix text/background contrast issues
- [ ] Implement proper React Router navigation
- [ ] Add proper meta tags for SEO
- [ ] Optimize images (WebP format)

### Medium Priority
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add form validation
- [ ] Create 404 page
- [ ] Add sitemap

### Low Priority
- [ ] Add dark mode toggle
- [ ] Implement i18n for multi-language support
- [ ] Add blog section
- [ ] Create admin panel for content management
- [ ] Add analytics

---

## 📞 Contact & Support

For questions or issues related to this project, refer to the conversation history or contact the development team.

---

**Last Updated:** 2025-11-22  
**Version:** 1.0.1  
**Maintained by:** AI Agent (Antigravity)
