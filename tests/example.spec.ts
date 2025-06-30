import { test, expect } from '@playwright/test';

test('test login page', { tag: '@fast'}, async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('button', { name: 'Product' }).click();
  await page.getByRole('link', { name: 'Actions Automate any workflow' }).click();
  await expect(page.getByRole('heading', { name: 'Automate your workflow from' })).toBeVisible();
  await expect(page.locator('#hero-section-brand-heading')).toContainText('Automate your workflow from idea to production');
  await page.getByRole('link', { name: 'Issues' }).click();
  await expect(page.locator('#hero-section-brand-heading')).toContainText('Project planning for developers');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.isClosed();
  //New changes in master
  await page.getByRole('link', { name: 'Issues' }).click();
  await expect(page.locator('#hero-section-brand-heading')).toContainText('Project planning for developers');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.close();
});