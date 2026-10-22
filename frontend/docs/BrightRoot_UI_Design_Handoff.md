# BrightRoot Lawn & Landscape — Linear Build Guide

Version 2.1, aligned to GitHub commit `a170351`. This is the only implementation source of truth. Build it top to bottom; do not use the old handoff.

## 1. Locked decisions

- React + TypeScript + CSS Modules; mobile-first.
- `App.tsx` keeps the existing `<Routes>`. Put `SiteHeader` above and `SiteFooter` below them.
- Navigation opens pages: Services `/services`, Our Work `/projects`, About `/about`, Contact `/contact`.
- Logo opens `/`; estimate CTAs open `/estimate`.
- No Home or Service Area navigation item.
- Service-area order: Pickering, Ajax, Whitby, Oshawa, Clarington.
- Homepage order: Hero, TrustBar, Services, ProjectsPreview, StoryTestimonial, EstimateCTA. Footer follows.
- Unit rule: use `rem` for every CSS length in this project. Do not introduce `px` values. The thin-border token is `0.0625rem`, equivalent to one pixel at the standard root size.

## 2. Repository preservation plan

The existing repository is the starting point. Do not recreate it.

### Keep as-is

- Root `frontend/` and `backend/` folders
- `frontend/main.tsx` at the frontend root
- `src/app/App.tsx` and the existing `<Routes>` approach
- `PageContainer.tsx` and `PageContainer.module.css`
- `tokens.css`, `global.css`, `vite.config.ts`, alias `@`, and font links in `index.html`
- All seven page files
- `SiteHeader`, `SiteFooter`, ButtonLink and the empty component/data/section scaffolds
- All nine WebP images, icons and botanical SVGs
- Both documentation files

### Remove only these files

- `src/App.css` — unused Vite starter CSS
- `src/app/router.tsx` — empty and unnecessary because routes already live in `App.tsx`
- `sections/home/ServiceAreaSection.tsx` — empty and removed from the approved homepage

Deleting these three files does not discard completed work.

### Move or add assets

- Create `src/assets/brand/`.
- Move `src/assets/decorative/brightroot-mark.svg` to `src/assets/brand/brightroot-mark.svg`.
- Add the supplied `brightroot-logo.svg` to `src/assets/brand/brightroot-logo.svg`; it is currently missing from the repository.
- Keep phone, menu and close inside `src/assets/icons/`; do not move them to `decorative/`.

### Correct `App.tsx` without replacing it

- Remove the `PageContainer` that currently wraps `<Routes>`. Each page section uses its own container so full-width backgrounds can reach the viewport edges.
- Change `/about` from `<EstimatePage />` to `<AboutPage />`.
- Add `/contact` with `<ContactPage />`.
- Replace `/error` with wildcard `*` for `<NotFoundPage />`.
- Keep `SiteHeader` above and `SiteFooter` below `<Routes>`.

### Existing token names are authoritative

Keep the repository’s `--section-padding` and gap tokens. Do not rename them to `--section-padding-y`. Correct only this typo:

```css
--shadow-floating: 0 1.25rem 3.4375rem rgba(16, 42, 30, 0.18);
```

Change the existing pill radius to `--radius-pill: 999rem` for project-wide unit consistency. Add `--border-thin: 0.0625rem` to `:root` and use it for hairline borders.

## 3. Build order

1. Tokens and globals
2. PageContainer
3. SiteHeader
4. HomePage
5. HeroSection
6. TrustBar
7. ServicesSection
8. ProjectsPreviewSection
9. StoryTestimonialSection
10. EstimateCtaSection
11. SiteFooter
12. Internal pages and QA

Keep the existing empty scaffolds. Add a same-named `.module.css` only when you implement that component.

## 4. Foundation

### Tokens

Keep the approved values in `styles/tokens.css`: colours, font families/sizes, line heights, spacing scale, container width, page gutter, section padding, radii, shadows and transitions. Component classes never belong there.

Required responsive tokens:

```css
:root {
  --container-max: 75rem;
  --page-gutter: 1rem;
  --section-padding: 4rem;
}

@media (min-width: 48rem) {
  :root {
    --page-gutter: 1.5rem;
    --section-padding: 5rem;
  }
}

@media (min-width: 64rem) {
  :root {
    --page-gutter: 2rem;
    --section-padding: 6rem;
  }
}
```

Use literal media breakpoints: `30rem`, `48rem`, `64rem`, `80rem`.

### Global CSS

`global.css` owns box-sizing, body defaults, margin reset, responsive images, inherited form fonts, focus-visible and `.srOnly`. Import `tokens.css` before `global.css` in `main.tsx`.

## 5. PageContainer

**Files:** `components/layout/PageContainer.tsx` and `.module.css`.

**Purpose:** align a major section to the common `75rem` grid. Use one in normal major sections, not around cards or small groups.

```css
.pageContainer {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--container-max));
  margin-inline: auto;
}
```

**Done when:** it accepts `children` and optional `className`, centres content, and produces `1rem` mobile and `2rem` desktop gutters.

## 6. SiteHeader

**Files:** `components/layout/SiteHeader.tsx` and `.module.css`.

**Assets:** `assets/brand/brightroot-logo.svg` and `assets/icons/phone.svg`, `menu.svg`, `close.svg`.

Correct the current three broken imports before styling. The repository currently points phone and menu at `decorative/`, and the logo file is absent.

### Preserve and correct the current header

Keep `SiteHeader.tsx`; do not rewrite from scratch. Correct these items in the file you already started:

- Every `NavLink` callback currently uses braces without `return`. Return the active/inactive class string.
- Add visible children: `Services`, `Our Work`, `About`, `Contact`. The current links are self-closing and therefore display no text.
- Add `src={logoSVG}` to the mobile logo image.
- Change telephone wrappers to `<a href="tel:+19052420064">`.
- Keep `ButtonLink` for now; it can be refined after the header works.
- Add `useState` only for opening and closing the mobile menu.

Keep `SiteHeader.module.css`, but remove the temporary red/green/blue debug borders when alignment is confirmed. Fix `display: visible` to `display: flex`; fix the invalid `var()` and use `var(--border-thin) solid var(--color-border)`.

**Placement:** above `<Routes>` in `App.tsx`; one PageContainer around the complete header.

### Desktop (`64rem+`)

- Paper background; `5.5rem` height; `var(--border-thin)` bottom border.
- Grid `auto 1fr auto`: logo | navigation | phone + estimate.
- Main gap `3rem`; logo width `10.5rem`.
- Nav gap `2rem`; Inter 500, `0.875rem`.
- Active/hover: Forest 800; active underline `0.125rem` gold.
- Phone icon `1rem`; phone/CTA gap `1.5rem`.
- Estimate button: gold, Forest 900 text, `3rem` minimum height, `1.375rem` horizontal padding, small radius.

### Mobile/tablet (below `64rem`)

- `4.5rem` row: logo left; telephone icon and menu button right.
- Logo width `8.5rem`; controls at least `2.75rem` square; menu icon `1.5rem`.
- Open menu stacks the same four links plus a full-width estimate CTA.
- Menu: Paper background, `var(--border-thin)` top border, `1.5rem` vertical padding, `1rem` link gap.
- CSS shows desktop or mobile layout. React state controls only `isMenuOpen`.

### Behaviour

- `NavLink` for four nav links; `Link` for logo/estimate.
- Use router-provided `isActive`; no active-link state.
- Menu button: `aria-expanded`, `aria-controls="mobile-navigation"`, useful label.
- Selecting a mobile link closes the menu.
- Telephone placeholder: `(905) 242-0064`, `tel:+19052420064`.

**Done when:** one responsive layout is visible, routes work, active link is clear, menu works by keyboard, and there is no `20rem` overflow.

## 7. HomePage

`HomePage.tsx` only assembles the six homepage sections in the locked order. It contains no header, footer, router or outer PageContainer.

## 8. HeroSection

**Assets:** `hero-landscaped-garden.webp`, `location.svg`, `botanical-branch-left.svg`.

**Content:**

- Eyebrow: `Landscapes for a brighter tomorrow`
- H1: `Beautiful yards. Thoughtfully cared for.`
- Copy: `Landscape design, lawn care, and seasonal maintenance for homes across Durham Region.`
- CTAs: `Request a Free Estimate` and `Explore Our Services`
- Location: `Serving Pickering, Ajax, Whitby, Oshawa & Clarington`

**Desktop:** minimum height `44rem`; cream copy `44%`, image `56%`; copy max `36rem`; image reaches right viewport edge. Gaps: eyebrow→H1 `1rem`, H1→copy `1.25rem`, copy→buttons `2rem`, button gap `0.75rem`, location top `1.5rem`. Image covers; organic divider may use `clip-path`.

**Mobile/tablet:** copy then image; copy padding `4rem 0`; buttons stack below `30rem`; image minimum `22rem` mobile and `30rem` tablet; remove complex curve.

**Done when:** H1 is unique, text never overlays busy photography, location is readable, and no mobile overflow exists.

## 9. TrustBar

**Items/assets:** leaf—Locally Owned & Operated; people—Trusted Across Durham Region; shield-check—Quality Work, Lasting Results; home—Residential Property Specialists.

- Paper background, PageContainer, desktop minimum height `6.5rem`.
- Four columns desktop, two tablet, one narrow mobile.
- Icon `1.75rem`; text Inter 500 `0.875rem`; gap `0.75rem`.
- Quiet separators only in four-column layout.

**Done when:** all items use the correct order; icons have empty alt because adjacent text repeats their meaning; separators disappear when wrapping.

## 10. ServicesSection

**Assets:** three `service-*.webp` images, `botanical-branch-right.svg`, `arrow-right.svg`.

**Content:** eyebrow `Our services`; H2 `Complete care for every season.`; cards in order: Landscape Design, Lawn & Garden Care, Seasonal Maintenance. Links say `Learn More` and lead to `/services`.

- Forest 900 full-width background; `var(--section-padding)`; PageContainer.
- Heading/introduction: one column mobile, two desktop; heading white, copy white at 82%.
- Grid begins `3rem` below; one column mobile, three at `64rem`; gap `1rem`/`1.5rem`.
- Cards: `4 / 3` image over Paper text panel; panel padding `1.5rem`.
- Hover lifts no more than `0.25rem`; branch stays very faint.

**Done when:** correct image/order, equal desktop card rhythm, useful alt text, and content remains clear without hover.

## 11. ProjectsPreviewSection

**Assets:** `project-whitby-transformation.webp`, `project-stone-path-detail.webp`, `project-hydrangea-detail.webp`.

**Content:** label `Featured transformation`; H2 `From ordinary to extraordinary.`; copy `A complete backyard transformation in Whitby, featuring a natural stone patio, lush plantings and timeless detailing.`; link `View More Projects` → `/projects`.

- Cream background; section padding; PageContainer.
- Desktop collage: main image two-thirds, two stacked details one-third; height about `36rem`; detail gap `0.5rem`.
- Paper card overlaps lower-left main image; max width `22rem`, padding `2rem`, floating shadow.
- Mobile: card first and three images in one column; no overlap; image height about `16rem`.

**Done when:** card does not hide focal point, mobile removes overlap, and all images have useful alt text.

## 12. StoryTestimonialSection

**Assets:** `story-front-entrance.webp`, `quote.svg`, both chevrons.

**Content:** eyebrow `A local company rooted in community`; H2 `More than landscapes. Stronger communities.`; story copy from approved mockup; link `Our Story` → `/about`. Any quote must be labelled `Sample testimonial`.

- Paper background; desktop columns approximately `36% 28% 36%`.
- Image minimum height `31rem`; object-fit cover; organic crop allowed.
- Testimonial panel Cream 100, padding `3rem`; quote icon `2.5rem`; quote text heading font around `1.375rem`.
- Mobile stacks story, image, testimonial.
- Omit carousel controls until functional; never present sample copy as a verified review.

**Done when:** sample label is obvious, link works, image crop is natural, and any controls work by keyboard.

## 13. EstimateCtaSection

**Assets:** `cta-evening-garden.webp`, `location.svg`.

**Content:** eyebrow `Ready to get started?`; H2 `Let’s create a yard you’ll love coming home to.`; estimate and services CTAs; complete service-area line.

- Full-width split: Forest 900 left `52%`, image right `48%`; minimum `30rem`.
- Left padding `clamp(2rem, 5vw, 5rem)`; white text; gold eyebrow.
- Primary gold button; secondary transparent with white border.
- Mobile: content then image; image minimum `18rem`; buttons stack below `30rem`.

**Done when:** links work, city order is correct, contrast is strong, and photograph contains no text overlay.

## 14. SiteFooter

**Placement:** below `<Routes>` in `App.tsx`; visible on every page. The mockup accidentally omitted it.

Keep the current `SiteFooter.tsx`; finish it later rather than recreating it. Replace `Bowmanville` with `Clarington`, make the placeholder phone consistent with the header, add the logo/navigation/legal row, and place the dark full-width footer background outside its inner PageContainer. `SiteFooter.module.css` is already present and may be populated when this build step is reached.

**Content:** logo; `Thoughtful residential landscaping, lawn care and seasonal maintenance across Durham Region.`; four navigation links; complete city list; heading `Let’s talk about your property.`; placeholder phone; estimate link; `Portfolio concept created for demonstration purposes.`; `© 2026 BrightRoot Lawn & Landscape.`

- Forest 900; white text; secondary text at 72%; PageContainer.
- Main padding `4rem 0 3rem`.
- Desktop columns: brand `1.3fr`, links `0.8fr`, contact/service `1fr`; gap `3rem`; logo width `10rem`.
- Legal row: `var(--border-thin)` translucent white top border, `3rem` top margin, `1.5rem` top padding.
- Mobile stacks groups with `2rem` gaps; legal row stacks below `30rem`.

**Done when:** footer exists on every route, links work, city order/disclaimer are present, and contrast is readable.

## 15. Internal pages and final QA

Until the homepage is approved, internal pages may be placeholders with one H1 and sentence. Create Services, Projects, About, Contact, Estimate and NotFound pages.

Final checks:

- Header/current route/footer render from `App.tsx`.
- Only one H1 per page.
- Header switches at `64rem`.
- No horizontal scroll at `20rem`.
- Focus is visible and navigation works by keyboard.
- Images use correct alt treatment and aspect ratios.
- Service-area order is consistent.
- Production build passes.

## Working rule

Complete one component and its **Done when** list before continuing. If implementation exposes a design problem, update this file so there remains only one source of truth.
