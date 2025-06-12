import { expect, test } from '@playwright/test';

test.describe('Stopka', () => {
  test('powinna zawierać istniejące linki', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toContainText('GitHub');
    await expect(footer).toContainText('Home');
    await expect(footer).toContainText('About');
  });

  test('nie zawiera podejrzanego inline JS', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    const scripts = footer.locator('script');
    const count = await scripts.count();

    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent();
      expect(content).not.toMatch(/(eval|document\.write|innerHTML)/);
    }
  });
});
