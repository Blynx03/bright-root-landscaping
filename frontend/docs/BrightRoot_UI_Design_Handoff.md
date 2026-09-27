# BrightRoot Lawn & Landscape

## UI/UX Design Handoff — Homepage and React Structure

Version: 1.0  
Project: `bright-root-landscaping`  
Brand: BrightRoot Lawn & Landscape  
Tagline: Beautiful yards. Thoughtfully cared for.

## 1. Purpose

BrightRoot is a fictional portfolio concept for a professional residential landscaping and lawn-maintenance company serving Durham Region. The site must feel premium and polished without appearing exclusive, unaffordable, or corporate.

Primary audience: homeowners with small-to-medium residential properties who need recurring maintenance, garden improvements, lawn restoration, patios, interlocking, or seasonal cleanup.

Primary conversion: Request a Free Estimate.  
Secondary conversion: Call the company.

Service-area order must always be:

1. Pickering
2. Ajax
3. Whitby
4. Oshawa
5. Clarington

## 2. Professional Workflow

A professional designer/developer team normally works in this order:

1. Business brief and target customer
2. Sitemap and conversion path
3. Page content and section order
4. Low-fidelity wireframe
5. Visual system: typography, colours, spacing and imagery
6. High-fidelity desktop and mobile design
7. Component inventory and developer handoff
8. Section-by-section implementation
9. Responsive, accessibility and performance QA
10. Client review, deployment and post-launch checks

The visual mockup is only one part of the handoff. This document is the implementation source of truth.

## 3. Design Direction

Keywords: refined, natural, dependable, warm, local, confident, uncluttered.

Avoid:

- Neon or artificial greens
- Cartoon gardening graphics
- Excessive leaf decorations
- Generic AI-looking imagery
- Dense text blocks
- Heavy animation
- Cheap-looking discount language
- Luxury-estate messaging that excludes ordinary homeowners

## 4. Colour System

Create these variables in `src/styles/tokens.css`:

```css
:root {
  --color-forest-900: #102a1e;
  --color-forest-800: #173a2a;
  --color-leaf-600: #436b4f;
  --color-moss-500: #70835d;
  --color-cream-100: #f5f1e8;
  --color-paper: #fffdf8;
  --color-white: #ffffff;
  --color-ink-900: #1f2923;
  --color-ink-600: #5f6b63;
  --color-gold-500: #bd8b4b;
  --color-border: #d9ddcf;
  --color-error: #a63d40;
  --color-success: #2f6b47;
}
```

Usage rules:

- Forest 900: footer and darkest surfaces
- Forest 800: primary buttons, headings and navigation accents
- Leaf 600: icons and subtle accents
- Moss 500: quiet decorative details only
- Cream 100: alternating section backgrounds
- Paper: default page background
- Gold 500: short rules, selected details and small highlights; never long body text
- Ink 900: primary body text
- Ink 600: secondary text

## 5. Typography

Fonts:

- Display and headings: `DM Serif Display`, weight 400
- Body and interface: `Inter`, weights 400, 500 and 600
- Fallback headings: Georgia, serif
- Fallback body: system-ui, sans-serif

Import fonts in `src/styles/fonts.css` or through the HTML `<head>`.

| Token | Desktop | Tablet | Mobile | Line height | Use |
|---|---:|---:|---:|---:|---|
| Display | 4.5rem | 3.5rem | 2.625rem | 1.05 | Homepage hero only |
| H1 internal | 3.5rem | 3rem | 2.375rem | 1.10 | Page headings |
| H2 | 3rem | 2.5rem | 2.125rem | 1.15 | Major sections |
| H3 | 1.5rem | 1.375rem | 1.3125rem | 1.30 | Cards and subsections |
| Lead | 1.1875rem | 1.125rem | 1.0625rem | 1.65 | Hero supporting copy |
| Body | 1rem | 1rem | 1rem | 1.65 | Default text |
| Small | 0.875rem | 0.875rem | 0.875rem | 1.55 | Supporting details |
| Eyebrow | 0.75rem | 0.75rem | 0.75rem | 1.40 | Uppercase section label |
| Button | 0.875rem | 0.875rem | 0.875rem | 1.00 | CTAs and navigation |

Eyebrows use Inter 600, uppercase, with `0.14em` letter spacing.

Do not use text below `0.875rem` for normal site content. Eyebrow labels may use `0.75rem`.

## 6. Layout System

### Container

```css
--container-max: 75rem;
--page-gutter-desktop: 2rem;
--page-gutter-tablet: 1.5rem;
--page-gutter-mobile: 1rem;
```

All major content aligns to one centred `75rem` container. Full-width section backgrounds may extend to the viewport edges, but their content remains inside the container.

### Breakpoints

| Name | Width | Typical use |
|---|---:|---|
| Mobile | `30rem` | Small-phone refinements |
| Tablet | `48rem` | Mobile/tablet layout change |
| Laptop | `64rem` | Tablet/desktop layout change |
| Desktop | `80rem` | Wide-screen refinements |

Write mobile-first CSS. Breakpoints are guidance, not a reason to force fixed layouts that already fit.

Use these values literally in native CSS media queries. Do not define them as CSS custom properties for use inside `@media` conditions because native CSS generally cannot resolve `var()` there. You can, however, change ordinary design tokens inside a media query:

```css
@media (min-width: 48rem) {
  :root {
    --page-gutter: 1.5rem;
    --section-padding-y: 5rem;
  }
}
```

### Spacing scale

Use only this scale unless a component has a documented exception:

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.5rem;
--space-6: 2rem;
--space-7: 3rem;
--space-8: 4rem;
--space-9: 5rem;
--space-10: 6rem;
```

Section padding:

- Desktop: `6rem` top and bottom
- Tablet: `5rem` top and bottom
- Mobile: `4rem` top and bottom

Common gaps:

- Eyebrow to heading: `1rem`
- Heading to supporting copy: `1.25rem`
- Section heading block to content grid: `3rem`
- Card-to-card gap: `1.5rem` desktop, `1rem` mobile

### Where shared CSS belongs

- `tokens.css`: reusable design decisions—colours, typography values, spacing scale, container width, page gutters, section padding, radii, shadows, transitions and z-index values.
- `global.css`: reset and base behaviour—box sizing, body defaults, headings, links, buttons, images, focus states and global accessibility helpers.
- Component CSS Modules: the actual layout and styling for a component or section, such as `Header.module.css`, `Hero.module.css` and `ServicesSection.module.css`.

Recommended import order in `main.tsx`:

```ts
import './styles/tokens.css';
import './styles/fonts.css';
import './styles/global.css';
```
- Button group gap: `0.75rem`

## 7. Shape and Elevation

```css
--radius-sm: 0.5rem;
--radius-md: 0.75rem;
--radius-lg: 1rem;
--radius-xl: 1.5rem;
--radius-pill: 999rem;

--shadow-card: 0 0.75rem 2.125rem rgba(16, 42, 30, 0.10);
--shadow-floating: 0 1.25rem 3.4375rem rgba(16, 42, 30, 0.18);

--transition-fast: 160ms ease;
--transition-base: 240ms ease;
--transition-slow: 420ms ease;
```

- Primary and secondary buttons: `--radius-sm`
- Pills, badges and compact tags only: `--radius-pill`
- Service image cards: `--radius-md`
- Large image panels: `--radius-lg` or organic custom clipping where specified
- Form fields: `--radius-sm`
- Avoid shadows on every component; use them for hover elevation, floating content or important panels

## 8. Homepage Section Specification

### A. `SiteHeader`

- Height: `5.5rem` desktop; `4.5rem` mobile
- White/paper background
- Very subtle bottom border: `0.0625rem` solid Border
- Content: brand left, navigation centred/right, telephone link, estimate CTA last
- Desktop links: Services, Our Work, About, Service Area, Contact
- Mobile: brand, telephone icon and menu button; estimate CTA moves into the menu
- Sticky behaviour may be added after the static layout is complete

### B. `HeroSection`

- Minimum height: `44rem` desktop; content-driven on tablet and mobile
- Two-part editorial composition: cream copy panel left, immersive garden photograph right
- Desktop columns: approximately `44% / 56%`
- The photograph crosses into the copy panel using one large organic inward curve; implement with `clip-path` or a pseudo-element, not a rasterized frame
- Mobile: copy first and image second; remove the complex curve and use a gentle top-left radius
- Copy column maximum width: `36rem`
- Eyebrow: `Landscapes for a brighter tomorrow`
- H1: `Beautiful yards. Thoughtfully cared for.`
- Supporting copy: `Landscape design, lawn care, and seasonal maintenance for homes across Durham Region.`
- Supporting copy maximum width: `34rem`
- Primary CTA: Request a Free Estimate
- Secondary CTA: Explore Our Services
- Location line: `Serving Pickering, Ajax, Whitby, Oshawa & Clarington`
- Add subtle line-art foliage at the lower-left edge; it must not compete with the copy

Hero photography must show:

- Real residential landscaping
- Strong greenery and layered planting
- A lawn, garden or patio relevant to Ontario homeowners
- No tropical resort, commercial park or mansion-only impression
- Enough darker/quiet space for readable text

### C. `TrustBar`

- Minimum height: `6.5rem`; content-driven on mobile
- Paper background with quiet vertical separators
- Four equal columns desktop; two columns tablet; one column on narrow mobile
- Items: Locally Owned & Operated, Trusted Across Durham Region, Quality Work—Lasting Results, Residential Property Specialists
- Use restrained line icons; no coloured icon circles

### D. `ServicesSection`

- Forest 900 background with subtle botanical line art at very low opacity
- Heading and supporting copy use a two-column editorial heading row
- Heading: `Complete care for every season.`
- Three desktop columns; one mobile column
- Cards use a landscape photograph above a paper-coloured text panel
- Image aspect ratio: `4 / 3`
- Text panel padding: `1.5rem`
- Categories:
  1. Landscape Design
  2. Lawn & Garden Care
  3. Seasonal Maintenance
- Each card contains one image, H3, short paragraph and text link; do not add large icons
- Cards lift no more than `0.25rem` on hover

### E. `ProjectsPreviewSection`

- Cream background
- Editorial collage: one large project image spanning the left and centre, with two stacked detail images on the right
- Desktop grid: approximately `2fr 1fr`; collage height approximately `36rem`
- A paper information card overlaps the lower-left area of the main image
- Card label: `Featured transformation`
- Card heading: `From ordinary to extraordinary.`
- Example location: Whitby
- Images use square corners or no more than `--radius-sm`; the composition supplies the visual interest
- Mobile: information card appears before the images; images become one column

### F. `StoryTestimonialSection`

- Paper background
- Three-column desktop composition: company story, organically cropped garden image, testimonial panel
- Story heading: `More than landscapes. Stronger communities.`
- Testimonial panel uses a pale green/cream surface, oversized quotation mark and restrained carousel controls
- Use a clearly labelled sample testimonial in this portfolio concept; never imply it is a verified customer review
- Stack story, image and testimonial on mobile

### G. `ServiceAreaSection`

- Heading: `Local care across Durham Region.`
- City order: Pickering, Ajax, Whitby, Oshawa, Clarington
- Use a clean city list and short coverage statement
- Do not embed an inaccurate decorative map; add a real map only if it improves customer understanding

### H. `EstimateCtaSection`

- Full-width split composition: forest content panel left and evening garden/path photograph right
- Minimum height: `30rem` desktop
- Heading: `Let’s create a yard you’ll love coming home to.`
- Left content padding: `clamp(2rem, 5vw, 5rem)`
- Include both estimate and services CTAs plus the ordered service-area line
- Mobile: content first, photograph second; minimum image height `18rem`

### I. `SiteFooter`

- Forest 900 background
- Three desktop columns: brand, service area, contact
- Service-area order: Pickering, Ajax, Whitby, Oshawa, Clarington
- Include `Portfolio concept created for demonstration purposes.`
- Stack on mobile

## 9. Button Specification

All buttons and button-like links:

- Minimum height: `3rem`
- Horizontal padding: `1.375rem`
- Font: Inter 600, `0.875rem`
- Radius: `--radius-sm`; reserve `--radius-pill` for badges and tags
- Visible keyboard focus ring: `0.1875rem` with sufficient contrast
- Primary: Forest 800 background, white text
- Secondary on light surfaces: transparent with 1px Forest 800 border
- Secondary on photo/dark surfaces: transparent dark overlay with semi-transparent white border
- Disabled buttons must not rely on opacity alone

## 10. React Architecture

Professionals normally do not put the whole homepage into `App.tsx`. `App.tsx` should coordinate routing and global layout. Each major page section can be its own component, while small one-off text wrappers should remain inside their parent section.

Recommended structure:

```text
src/
├── app/
│   ├── App.tsx
│   └── router.tsx
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── PageContainer.tsx
│   │   ├── SiteHeader.tsx
│   │   └── SiteFooter.tsx
│   └── ui/
│       ├── ButtonLink.tsx
│       ├── SectionHeading.tsx
│       └── ServiceCard.tsx
├── data/
│   ├── projects.ts
│   └── services.ts
├── pages/
│   ├── AboutPage.tsx
│   ├── EstimatePage.tsx
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   ├── ServicesPage.tsx
│   └── NotFoundPage.tsx
├── sections/
│   └── home/
│       ├── EstimateCtaSection.tsx
│       ├── HeroSection.tsx
│       ├── ProjectsPreviewSection.tsx
│       ├── ServiceAreaSection.tsx
│       ├── ServicesSection.tsx
│       ├── StoryTestimonialSection.tsx
│       └── TrustBar.tsx
├── styles/
│   ├── global.css
│   └── tokens.css
└── main.tsx
```

Naming rules:

- React components: PascalCase
- Full homepage bands: suffix with `Section`
- Site-wide structural components: `SiteHeader`, `SiteFooter`, `PageContainer`
- Reusable cards or controls: name by purpose, such as `ServiceCard`
- Pages: suffix with `Page`
- Avoid vague names such as `Component1`, `Content`, `Box`, `Wrapper2` or `Info`

Do not create a component for every `<div>`. Extract a component when it:

- Represents a meaningful section
- Repeats
- Has its own behaviour
- Has substantial internal layout
- Will be reused on another page

## 11. Image Asset Plan

Required homepage images:

1. Hero: lush professionally landscaped Durham-region residential garden
2. Service—design: designed patio and layered planting
3. Service—lawn care: healthy maintained lawn and garden edge
4. Service—seasonal: refined autumn garden and stone steps
5. Featured transformation: completed backyard patio and garden
6. Project detail—path: natural stone path with layered planting
7. Project detail—planting: close detail of hydrangeas and garden lighting
8. Story: inviting landscaped front entrance
9. Final CTA: evening garden path leading toward a welcoming home

File naming:

```text
hero-landscaped-garden.webp
service-landscape-design.webp
service-lawn-garden-care.webp
service-seasonal-maintenance.webp
project-whitby-transformation.webp
project-stone-path-detail.webp
project-hydrangea-detail.webp
story-front-entrance.webp
cta-evening-garden.webp
```

Image rules:

- Use licensed stock or original imagery
- Save locally in the project; do not hotlink production images
- Convert to WebP or AVIF
- Hero target: 2000–2400px wide, ideally below 350KB after optimization
- Project images: 1400–1800px wide, ideally below 250KB each
- Provide meaningful `alt` text unless the image is purely decorative
- Set width and height or use `aspect-ratio` to prevent layout shift
- Keep focal subjects visible at desktop and mobile crops

Selected visual-direction source: an Unsplash garden photograph by Gaurav Kumar. Use it as a direction reference; download the licensed original from its source before including it in the final repository.

## 12. Accessibility and Interaction Rules

- Minimum normal text size: `1rem`
- Minimum touch target: `2.75rem` square; preferred CTA height `3rem`
- Semantic heading order: one H1 per page, then H2 sections and H3 card headings
- All navigation works with keyboard alone
- Visible focus states
- Text contrast meets WCAG AA
- Form fields always have visible labels
- Motion respects `prefers-reduced-motion`
- No essential information available only on hover
- Mobile menu must manage focus and expose its open state with `aria-expanded`

## 13. Homepage Build Checkpoints

### Checkpoint 1 — Foundation

- Remove Vite demo content
- Add folder structure
- Add tokens, fonts and global reset
- Build `PageContainer`, `UtilityBar`, `SiteHeader` and `SiteFooter`

### Checkpoint 2 — Hero

- Add and optimize hero image
- Build hero layout and responsive overlay
- Implement CTAs and trust points
- Test at 1440px, 1024px, 768px, 390px and 320px

### Checkpoint 3 — Main homepage content

- Trust bar
- Services
- Project preview
- Process

### Checkpoint 4 — Credibility and conversion

- Testimonials with sample labels
- Service area
- Estimate CTA
- Footer completion

### Checkpoint 5 — QA

- Keyboard navigation
- Responsive layout
- Lighthouse and image optimization
- Link and form checks
- Production build

## 14. Acceptance Criteria for the Homepage

The homepage is ready only when:

- It feels like a credible Durham Region landscaping company, not a tutorial
- The main CTA is obvious within five seconds
- The service-area order is consistent everywhere
- No horizontal scrolling occurs at 320px
- The hero text remains readable across image crops
- All images are licensed, optimized and locally stored
- Keyboard focus is visible
- The page works without animation
- The production build passes
- The design remains coherent even before the backend is connected
