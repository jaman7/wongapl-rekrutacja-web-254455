# Test page in Astro + TinaCMS

[![Deploy Status](https://img.shields.io/badge/deployed-success-brightgreen)](https://jaman7-wongapl-rekrutacja-web-254455.pages.dev)
[![Astro](https://img.shields.io/badge/Built%20With-Astro-blueviolet)](https://astro.build/)
[![CMS](https://img.shields.io/badge/CMS-TinaCMS-orange)](https://tina.io)

**Astro + TinaCMS + TailwindCSS**, with full CMS editor integration, responsive UI and automatic deployment on **Cloudflare Pages**.

# Repozytorium

---

## 🔗 Demo

[https://jaman7-wongapl-rekrutacja-web-254455.pages.dev](https://jaman7-wongapl-rekrutacja-web-254455.pages.dev)

---

## 🔗 E2E Reports

**Playwright Report + Lighthouse Report**
[https://jaman7-wongapl-rekrutacja-web-254455-e2e.pages.dev/](https://jaman7-wongapl-rekrutacja-web-254455-e2e.pages.dev/)

---

## Technologies

- **Astro 5.x** – fast framework for building static and hybrid sites.
- **TinaCMS** – headless CMS with editable MDX pages and JSON configuration.
- **Tailwind CSS** – utility-first CSS framework.
- **TypeScript**, **Playwright**, **Lighthouse CI** – testing, quality, automation.

---

## Functions

- **Editable footer** and navigation – managed from TinaCMS (`config.json`, `footer.mdx`).
- **Content pages**: `/`, `/about`, `/blog`, with dynamic routing.
- **Blog** – pagination, categories, authors, edit preview.
- **SEO and accessibility** – Lighthouse CI with high scores (`accessibility: 1.0`, `performance: >0.9`).
- **Screenshots and E2E testing** – Playwright (tests: `footer.spec.ts`, `pagination.spec.ts`).

---

## Local launch

```bash
# Clone the repository
git clone https://github.com/jaman7/wongapl-rekrutacja-web-254455.git .

# Dependency installation
npm install

# Starting a local dev server with the TinaCMS editor
npm run dev

# Production build + Tina build
npm run build

# Local build preview
npm run preview
```

```bash
# Tests end-to-end (Playwright)
npm run test:e2e

# Test Report (HTML)
npm run test:e2e:report

# Local Lighthouse (requires global @lhci/cli)
npm run lighthouse:local

# The app will be available at:
[http://localhost:4321](http://localhost:4321)
```

---

## Architecture

```
├── src/
│ ├── pages/ # Astro Pages (.astro)
│ ├── components/ # UI components (Astro + React)
│ ├── content/ # TinaCMS Content (mdx + json)
│ ├── layouts/ # Page Layouts
├── tina/ # CMS configuration
├── public/ # Static files
├── tests/ # Tests Playwright
├── astro.config.mjs # Astro Configuration
└── wrangler.toml # Deploy do Cloudflare Pages
```

---

## Editing via CMS

- TinaCMS allows editing MDX content (blog, page) and JSON data (config.json).
- Editable from /admin in "Preview Mode" (iframe).
- Custom client:tina directive provides safe rendering in Astro.

## Application preview

![Home](https://github.com/user-attachments/assets/d5d6dd0c-9325-4f49-90f2-b53cb5e375d2)
![Home + footer](https://github.com/user-attachments/assets/33a60bce-1ab4-4f2f-b384-59c9866317a7)
![blogs](https://github.com/user-attachments/assets/c90feb65-368c-43c2-b875-112e028b2ce3)
![blog post](https://github.com/user-attachments/assets/5b7be778-50ef-4d22-b1df-0891a295379e)
![about](https://github.com/user-attachments/assets/6c576a0d-00c7-44f9-9907-d7c5c27b17be)
