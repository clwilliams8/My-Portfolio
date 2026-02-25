# Portfolio Project — Claude Code Instructions

## CRITICAL: Never edit files in `dist/`

The `dist/` directory is **entirely generated** by `gulp`. Any direct edits to files in `dist/` **will be wiped out** on the next build. Always edit source files only:

| What to edit | Source location | Compiles to |
|---|---|---|
| HTML/templates | `src/html/**/*.njk` | `dist/**/*.html` |
| Sass/CSS | `src/assets/sass/*.scss` | `dist/assets/css/*.css` |
| JavaScript | `src/assets/js/*.js` | `dist/assets/js/main.js` (bundled) |
| Images | `src/assets/images/**` | `dist/images/**` (optimized) |
| Webfonts | `src/assets/webfonts/*` | `dist/assets/webfonts/*` |

## Build system

- **Node version:** 22+ (use `nvm use` to auto-switch via .nvmrc)
- **Full build:** `gulp` (default task — compiles everything + cache busts)
- **Watch mode:** `gulp watch` (recompiles on source changes)
- **Local testing:** `npx serve dist` (serves dist/ as root so absolute paths work)
- **Deploy:** `npm run deploy` (GitHub Pages)

## Gulp pipeline details

- **JS bundling:** jQuery, browser.min, breakpoints.min, util, main.js, and nanogallery2 are concatenated into a single `dist/assets/js/main.js` and minified with terser. Order matters (jQuery first).
- **Images:** Optimized via gulp-imagemin with binary encoding.
- **Cache busting:** After build, all `?v=` query strings in compiled HTML are updated with a timestamp.
- **HTML partials:** Nunjucks templates in `src/html/partials/` are included via `{% include %}`.

## CRITICAL: Use relative paths in HTML templates

All asset paths in HTML partials must be **relative** (no leading `/`). Example:
- `assets/js/main.js` — correct
- `/assets/js/main.js` — WRONG, breaks Live Server (which serves from project root, not `dist/`)

Absolute paths only work when `dist/` is served as the site root (GitHub Pages, `npx serve dist`). Relative paths work everywhere.

## Key source files

- `src/html/index.njk` — Homepage template
- `src/html/partials/sidebar-footer.html` — Sidebar navigation + footer
- `src/html/partials/head.html` — `<head>` tag (CSS, meta, analytics)
- `src/html/partials/scripts.html` — Script tags (loaded at bottom)
- `src/html/partials/header-socialLinks.html` — Header with social icons
- `src/assets/sass/main.scss` — Main stylesheet
- `src/assets/sass/custom.scss` — Custom overrides
- `src/assets/js/main.js` — Custom JS (sidebar toggle, breakpoints, etc.)
