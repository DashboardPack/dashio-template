# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dashio is a Bootstrap 5 admin dashboard template built with Vite 8. It uses minimal custom CSS, leveraging Bootstrap utilities wherever possible.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build to dist/
npm run preview  # Preview production build
```

## Architecture

**Entry Point:** `src/js/main.js` imports SCSS and Bootstrap JS, initializes tooltips, popovers, sidebar, and theme toggle functionality. Exposes `window.Dashio` for HTML access.

**Vite Config:** Root is `src/`, output to `dist/`. Multi-page app with entries defined in `rollupOptions.input`. Path aliases: `~bootstrap` and `~bootstrap-icons` resolve to node_modules.

**SCSS Structure:**
- `src/scss/_variables.scss` - Bootstrap variable overrides (colors, typography, components). Must be imported before Bootstrap.
- `src/scss/styles.scss` - Imports variables, Bootstrap, Bootstrap Icons, then minimal custom layout styles.

**Pages:** Main dashboard at `src/index.html`, additional pages in `src/pages/`. When adding new pages, register them in `vite.config.js` rollupOptions.input.

## Key Patterns

- Dark/light mode uses Bootstrap's native `data-bs-theme` attribute with localStorage persistence
- Sidebar toggle on mobile uses custom backdrop element with escape key support
- Theme customization done via Bootstrap variable overrides in `_variables.scss`
- Custom sidebar width controlled by `$sidebar-width` variable (280px default)
