import { test, expect } from '@playwright/test';

test.describe('SplitButton Visual Tests', () => {
  test('Primary SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?id=general-splitbutton--primary');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('splitbutton-primary.png');
  });

  test('Secondary SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?id=general-splitbutton--secondary');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('splitbutton-secondary.png');
  });

  test('Disabled SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?id=general-splitbutton--states');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('splitbutton-disabled.png');
  });
});