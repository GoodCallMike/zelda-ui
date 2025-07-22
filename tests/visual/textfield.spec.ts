import { test, expect } from '@playwright/test';

test.describe('TextField Visual Tests', () => {
  test('Default TextField', async ({ page }) => {
    await page.goto('/iframe.html?id=data-entry-input--default');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('textfield-default.png');
  });

  test('TextField with Error', async ({ page }) => {
    await page.goto('/iframe.html?id=data-entry-input--with-error');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('textfield-error.png');
  });

  test('TextField Focus State', async ({ page }) => {
    await page.goto('/iframe.html?id=data-entry-input--default');
    await page.locator('#storybook-root input').focus();
    await expect(page.locator('#storybook-root')).toHaveScreenshot('textfield-focus.png');
  });
});