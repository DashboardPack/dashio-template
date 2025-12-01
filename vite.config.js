import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const root = resolve(import.meta.dirname, 'src')

export default defineConfig({
  root,
  base: '/dashio-template/',
  define: {
    // Set to false in production to hide the color switcher demo feature
    __DASHIO_DEMO__: true
  },
  resolve: {
    alias: {
      '~bootstrap': resolve(import.meta.dirname, 'node_modules/bootstrap'),
      '~bootstrap-icons': resolve(import.meta.dirname, 'node_modules/bootstrap-icons')
    }
  },
  build: {
    outDir: resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        // Dashboard variants
        dashboardAnalytics: resolve(root, 'pages/dashboard-analytics.html'),
        dashboardEcommerce: resolve(root, 'pages/dashboard-ecommerce.html'),
        dashboardCrm: resolve(root, 'pages/dashboard-crm.html'),
        dashboardProjects: resolve(root, 'pages/dashboard-projects.html'),
        dashboardSaas: resolve(root, 'pages/dashboard-saas.html'),
        dashboardFinance: resolve(root, 'pages/dashboard-finance.html'),
        // Core pages
        tables: resolve(root, 'pages/tables.html'),
        forms: resolve(root, 'pages/forms.html'),
        charts: resolve(root, 'pages/charts.html'),
        // Auth pages
        login: resolve(root, 'pages/login.html'),
        register: resolve(root, 'pages/register.html'),
        forgotPassword: resolve(root, 'pages/forgot-password.html'),
        // Account pages
        profile: resolve(root, 'pages/profile.html'),
        settings: resolve(root, 'pages/settings.html'),
        // App pages
        notifications: resolve(root, 'pages/notifications.html'),
        calendar: resolve(root, 'pages/calendar.html'),
        kanban: resolve(root, 'pages/kanban.html'),
        // Utility pages
        pricing: resolve(root, 'pages/pricing.html'),
        error404: resolve(root, 'pages/404.html'),
        error500: resolve(root, 'pages/500.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
