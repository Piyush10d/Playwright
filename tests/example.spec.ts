import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('button', { name: 'Product' }).click();
  await page.getByRole('link', { name: 'Actions Automate any workflow' }).click();
  await page.getByTestId('Grid-:R3b:').getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('heading', { name: 'GitHub Actions documentation' }).click();
  await expect(page.getByRole('heading', { name: 'GitHub Actions documentation' })).toBeVisible();
  await expect(page.locator('#title-h1')).toContainText('GitHub Actions documentation');
  await page.goto('https://github.com/features/actions');
});