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

![Logic Gate Simulator](https://github.com/user-attachments/assets/aaa7c7f0-2dbb-48c9-8d02-15fa931799ac)
![Logic Minimizer Table](https://github.com/user-attachments/assets/ef2e3edf-a332-4e78-9622-b5be362c7bc9)
![Logic Minimizer Schematic](https://github.com/user-attachments/assets/3dd5e254-00f7-4314-92da-852e4454bba6)
