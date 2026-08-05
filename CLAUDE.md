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
- `styles.css` — all page styles
- `script.js` — small interactive bits (scroll-to-top button, AOS init,
  copy-email-to-clipboard, dynamic footer year)
- Uses Bootstrap 5 and AOS (scroll animations) via CDN `<link>`/`<script>`
  tags — not npm packages, just direct CDN includes.
- `JMRV_Logo.png`, `favicon-*.png` — static assets, referenced directly.

As of the last refactor (see git log), the original single-file version
with everything inlined was split into the three files above, plus small
accessibility fixes (ARIA labels on the nav toggle/scroll button/toast,
fixed a heading-hierarchy skip in the testimonials, dynamic copyright
year). No content or visual changes were made in that pass.

## Roadmap (not yet built)

1. **Contact form** — replace the `mailto:` link in the footer with a real
   form. Likely candidates: Formspree or a similar service that doesn't
   need a backend, to stay consistent with the no-build-step approach.
2. **Content updates** — the current copy (features, testimonials, "what
   we do" section) is placeholder-ish and the owner intends to revise it,
   possibly with help from Claude or external design tools.
3. Nothing beyond this is committed to yet — check with the owner before
   assuming scope (e.g. blog, CMS, booking widget) is in play.

## Git identity

Commits should be authored as `joeytones <43315120+joeytones@users.noreply.github.com>`
(GitHub CLI auth is set up on this machine via `gh auth login`, HTTPS
protocol, so pushes work without additional credential setup).
