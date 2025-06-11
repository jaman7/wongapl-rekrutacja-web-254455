// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from './astro-tina-directive/register';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  vite: { plugins: [tailwindcss()] },
});
