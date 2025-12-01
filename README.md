# Dashio - Bootstrap 5 Admin Dashboard Template

A modern admin dashboard template built with Bootstrap 5.3 and Vite 7. Includes 21 ready-to-use pages, Chart.js integration, and a runtime color switcher.

[![Live Preview](dashio-preview.png)](https://dashboardpack.github.io/dashio-template/)

**[Live Demo](https://dashboardpack.github.io/dashio-template/)**

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`

## Build

```bash
npm run build    # Output to dist/
npm run preview  # Preview production build
```

## Tech Stack

- **Vite 7** - Build tool with hot module replacement
- **Bootstrap 5.3.8** - CSS framework with native dark mode
- **Bootstrap Icons 1.13** - Icon library
- **Chart.js 4** - Charts and graphs
- **Sass** - CSS preprocessor

## Pages Included

| Category | Pages |
|----------|-------|
| **Dashboards** | Main, Analytics, E-commerce, CRM, Projects, SaaS, Finance |
| **Core** | Tables, Forms, Charts |
| **Auth** | Login, Register, Forgot Password |
| **Account** | Profile, Settings |
| **Apps** | Notifications, Calendar, Kanban |
| **Utility** | Pricing, 404 Error, 500 Error |

## Project Structure

```
src/
├── index.html              # Dashboard
├── pages/                  # All other pages
├── js/
│   ├── main.js             # App initialization, theme, color switcher
│   └── charts.js           # Chart.js configuration
└── scss/
    ├── _variables.scss     # Bootstrap variable overrides
    └── styles.scss         # Main styles + color switcher overrides
```

## Features

### Dark/Light Mode

Toggle via the moon/sun icon in the header. Automatically detects system preference and saves choice to localStorage.

### Color Switcher (Demo Mode)

Click the palette icon to change the primary color. All primary-colored elements update instantly including buttons, links, form elements, charts, and sidebar.

**Disable for production:** In `vite.config.js`, set:

```js
define: {
  __DASHIO_DEMO__: false
}
```

This hides the color picker UI. Any previously saved color still applies.

### Charts

Six chart types are configured in `src/js/charts.js`:
- Line, Bar, Area (with axes)
- Doughnut, Pie, Polar Area

Charts automatically adapt to theme changes and color switcher selections.

## Customization

### Change Default Colors

Edit `src/scss/_variables.scss`:

```scss
$primary: #4f46e5;
$success: #10b981;
$danger: #ef4444;
```

### Add a New Page

1. Create HTML file in `src/pages/`
2. Add entry to `vite.config.js`:

```js
rollupOptions: {
  input: {
    // ...existing entries
    myPage: resolve(root, 'pages/my-page.html')
  }
}
```

3. Add navigation link to sidebar in your HTML

### Sidebar Navigation

The sidebar uses Bootstrap nav classes. Active page is marked with `.active`:

```html
<a class="nav-link active" href="/pages/tables.html">
  <i class="bi bi-table"></i>
  <span>Tables</span>
</a>
```

## Requirements

Node.js 20.19+ or 22.12+

## License

MIT
