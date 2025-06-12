// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from './astro-tina-directive/register';
import tailwindcss from '@tailwindcss/vite';

const DEFAULT_SITE = 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === 'production' ? process.env.SITE_URL || 'https://jaman7-wongapl-rekrutacja-web-254455.pages.dev' : DEFAULT_SITE,
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  vite: { plugins: [tailwindcss()] },
});
