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
