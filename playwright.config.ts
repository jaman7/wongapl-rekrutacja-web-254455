import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 10000,
  retries: 0,
  reporter: [['html', { outputFolder: 'playwright-report/html-report', open: 'never' }]],
  use: {
    headless: true,
    baseURL: 'https://jaman7-wongapl-rekrutacja-web-254455.pages.dev',
  },
});
