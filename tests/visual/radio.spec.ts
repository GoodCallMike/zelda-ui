import { test, expect } from '@playwright/test';

test.describe('Radio Visual Tests', () => {
  test('Default Radio', async ({ page }) => {
    await page.goto('/iframe.html?id=components-radio--default');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('radio-default.png');
  });

  test('Radio with Description', async ({ page }) => {
    await page.goto('/iframe.html?id=components-radio--with-description');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('radio-description.png');
  });

  test('Radio with Error', async ({ page }) => {
    await page.goto('/iframe.html?id=components-radio--with-error');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('radio-error.png');
  });

  test('Disabled Radio', async ({ page }) => {
    await page.goto('/iframe.html?id=components-radio--disabled');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('radio-disabled.png');
  });
});