import { expect, test } from '@playwright/test';

test.describe('Paginacja bloga', () => {
  test('strona główna bloga przekierowuje na /blog/page/1', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveURL(/\/blog\/page\/1/);
  });

  test('strona /blog/page/1 zawiera karty blogowe i paginację', async ({ page }) => {
    await page.goto('/blog/page/1');

    const blogCards = page.locator('[data-testid="blog-card"]');
    await expect(blogCards.first()).toBeVisible();
    const blogCardCount = await blogCards.count();
    expect(blogCardCount).toBeGreaterThan(0);

    const pagination = page.getByRole('navigation', { name: 'pagination' });
    await expect(pagination).toBeVisible();

    const secondPageLink = pagination.getByRole('link', { name: '2' });
    await expect(secondPageLink).toBeVisible();
  });

  test('zrzut ekranu strony bloga', async ({ page }) => {
    await page.goto('/blog/page/1');
    await page.screenshot({ path: 'screenshots/blog-page.png', fullPage: true });
  });
});
