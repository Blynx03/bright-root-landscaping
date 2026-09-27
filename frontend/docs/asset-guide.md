# BrightRoot SVG Asset Guide

Copy the three folders in this package into `frontend/src/assets/`.

## Brand

- `brand/brightroot-logo.svg` — full horizontal header/footer logo
- `brand/brightroot-mark.svg` — compact favicon, mobile or small-space mark

The full logo contains accessible title text. When used in a link, give the link an accessible label such as `aria-label="BrightRoot home"` and use an empty image alt to avoid duplicate speech.

## Interface and trust icons

- `icons/phone.svg` — header telephone link
- `icons/location.svg` — hero and CTA service-area line
- `icons/leaf.svg` — locally owned/trust item
- `icons/people.svg` — Durham Region/community trust item
- `icons/shield-check.svg` — quality/results trust item
- `icons/home.svg` — residential-specialist trust item
- `icons/arrow-right.svg` — text links
- `icons/chevron-left.svg` and `chevron-right.svg` — testimonial controls
- `icons/menu.svg` and `close.svg` — mobile-navigation states
- `icons/quote.svg` — testimonial decoration

Meaningful icons need useful `alt` text only when they communicate information not already present in adjacent text. Decorative or repeated icons should use `alt=""`.

## Decorative assets

- `decorative/botanical-branch-left.svg` — lower-left hero decoration
- `decorative/botanical-branch-right.svg` — dark-section/right-edge decoration
- `decorative/botanical-sprig.svg` — small optional section accent

Decorative assets should use `alt=""` and `aria-hidden="true"` where applicable. Keep their opacity low and disable pointer events.
