import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 10000,
  retries: 0,
  reporter: [['html']],
  use: {
    headless: true,
    baseURL: 'http://localhost:4321', // domyślny port Astro
  },
});
