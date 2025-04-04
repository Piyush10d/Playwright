import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://imedengb.rd.dtcs.local/im1ws_imedengb/#/login');
  await page.locator('#userName').click();
  await page.locator('#userName').click();
});