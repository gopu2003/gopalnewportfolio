# SPEC.md — Portfolio Build

## Layout Map
1. Nav — logo only, no auth/search
2. Hero — avatar, name, role, location, "Open to Work" pill, experience years
3. About — bio paragraph
4. Badge Callout — static badge graphic + CTA button
5. Experience Strip — row of company logos
6. Portfolio Grid — case study cards (cover, title, tags, external link)
7. Footer — socials only

## Components
- Hero.jsx        <- profile.json
- AboutCard.jsx    <- profile.json.bio
- BadgeCallout.jsx <- static
- ExperienceStrip.jsx <- companies.json
- PortfolioGrid.jsx / CaseStudyCard.jsx <- caseStudies.json

## Data Contracts
See src/data/*.json for schemas.

## Rules
- No backend, no API calls, no auth.
- All content sourced from JSON only.
- Design tokens locked in tailwind.config.js — do not touch after Phase 0.

## Design System (Phase 5 — Light Theme)
- Global theme is light: `bg-white text-black` on the root wrapper in App.jsx. Every section
  (Nav, About, Badge, Experience, Portfolio, Footer) uses black-on-white styling
  (e.g. `bg-black/5 border-black/10 text-black/70` instead of the old white/dark equivalents).
- The grid-paper background (`.hero-grid-bg` in src/index.css) is scoped to the Hero section
  only. No other section gets the grid pattern.
- No full-bleed background image or dark overlay on Hero — that approach was replaced by the
  sticker-collage layout below.

## Hero Component (Phase 5 — Sticker Collage)
Reference: desk-mat/collage hero (light grid background, scattered "sticker" images, bold
headline on the right).

- Container: `relative hero-grid-bg` with `aspect-[1567/1057]` (desktop reference ratio).
- 8 decorative image slots, positioned absolutely (`Sticker` sub-component in Hero.jsx), sourced
  from `profile.json.heroImages`: `photo`, `cautionSign`, `computer`, `coffee`, `cabinet`,
  `nameTag`, `notepad`, `welcomeMat`. Each key is a URL string; empty string renders a dashed
  placeholder box labeled with the slot name until a real image is supplied.
- Stickers are hidden below `md` breakpoint (collage layout is desktop-only); the headline text
  block remains visible and stacks full-width on mobile.
- Text block (top-right area of the collage): eyebrow row (`location` + "Open to Work" pill from
  `openToWork`), bold headline from `profile.json.heroTagline`, and a small caption line with
  `name`, `role`, `experienceYears`.
- To add real images later: just fill in the corresponding URL under `heroImages` in
  profile.json — no component changes needed.
