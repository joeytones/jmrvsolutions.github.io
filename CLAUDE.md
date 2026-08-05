# JMRV Solutions Website

A single-page marketing/brochure site for JMRV Solutions, a business consulting
firm (strategic consulting, operational optimization, analytics). Owned by
Joseph Coletta (GitHub: joeytones).

## Deployment

- Hosted on **GitHub Pages**, repo `joeytones/jmrvsolutions.github.io`.
- Custom domain via `CNAME` → `www.jmrvsolutions.com`.
- **No build step.** Pushing to `main` deploys directly — GitHub Pages serves
  the files in this repo as-is. Live within about a minute of a push.
- Local preview: any static file server works, e.g. `python3 -m http.server`
  from this folder, then open `http://localhost:<port>/index.html`.

## Architecture — read before suggesting a framework

The site is deliberately **plain HTML/CSS/JS with no build tooling** — no
React/Vue/Astro/Vite, nothing to compile. This was a considered choice, not
an oversight:

1. It's one page. A framework buys nothing a brochure site needs yet.
2. The owner plans to occasionally pull in output from external design
   tools (Figma exports, Webflow, AI design tools, etc.), which produce
   plain HTML/CSS/JS. A build pipeline would sit between that output and
   the live site, adding friction for no benefit.

Don't propose migrating to a framework unless the site's needs genuinely
outgrow this (e.g. a real content-managed blog) — raise it as a question
first, since it changes the deploy story (no longer a zero-build push-to-
deploy setup).

## Current structure

- `index.html` — all page markup and content
- `styles.css` — small custom CSS that Tailwind's utility classes can't
  express (fade-in-up scroll reveal, ghost-border gradient outline,
  neon-glow box-shadows, the floating-logo keyframe animation, and the
  Material Symbols icon-font base rule — Google's font `<link>` only
  ships `@font-face`, not the class that turns ligature text into icons)
- `script.js` — small interactive bits (scroll-to-top button,
  copy-email-to-clipboard, dynamic footer year, mobile hamburger-menu
  toggle, fade-in-up IntersectionObserver)
- Uses **Tailwind CDN** (`cdn.tailwindcss.com`, with an inline
  `tailwind.config` script for theme colors/type/spacing) and Google
  Fonts (Space Grotesk, Geist, JetBrains Mono, Material Symbols) via
  CDN `<script>`/`<link>` tags — not npm packages, still zero build step.
- `JMRV_Logo.png`, `favicon-*.png` — static assets, referenced directly.
- `DESIGN.md` — the design-system source (colors, type scale, spacing,
  component/elevation rules) the current dark "Obsidian Nexus" theme is
  built from. Treat it as the palette/typography reference for any
  future visual work — check it before inventing new colors ad hoc.

As of the overhaul in August 2026, the site moved from a light
Bootstrap+AOS "brochure" layout to a dark, minimal Tailwind-CDN theme
(hero + three short concept sections + footer), based on a template the
owner supplied and `DESIGN.md`'s palette. Real logo in the hero, existing
favicons kept as-is, testimonials/features/services sections dropped
intentionally (see Roadmap).

## Roadmap (not yet built)

1. **Contact form** — replace the `mailto:` link in the footer with a real
   form. Likely candidates: Formspree or a similar service that doesn't
   need a backend, to stay consistent with the no-build-step approach.
2. **Better copy for the concept sections** — "Strategic Dominance" /
   "Systemic Evolution" / "The New Intelligence" are the placeholder
   headlines/body copy from the template used to rebuild the site. The
   owner intends to revisit these with real JMRV-specific messaging.
3. **Expand the hamburger menu** — right now the mobile nav only holds a
   single "Contact" link (see `#mobileMenu` in `index.html`, toggle logic
   in `script.js`). As more sections get added back to the page, the
   owner wants to explore attaching them to this nav/hamburger menu
   rather than leaving it single-purpose.
4. Nothing beyond this is committed to yet — check with the owner before
   assuming scope (e.g. blog, CMS, booking widget) is in play.

## Git identity

Commits should be authored as `joeytones <43315120+joeytones@users.noreply.github.com>`
(GitHub CLI auth is set up on this machine via `gh auth login`, HTTPS
protocol, so pushes work without additional credential setup).
