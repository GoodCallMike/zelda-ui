import { test, expect } from '@playwright/test';

test.describe('Checkbox Visual Tests', () => {
  test('Default Checkbox', async ({ page }) => {
    await page.goto('/iframe.html?id=data-entry-checkbox--default');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('checkbox-default.png');
  });

  test('Checkbox with Description', async ({ page }) => {
    await page.goto('/iframe.html?id=data-entry-checkbox--with-description');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('checkbox-description.png');
  });

  test('Checkbox with Error', async ({ page }) => {
    await page.goto('/iframe.html?id=data-entry-checkbox--with-error');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('checkbox-error.png');
  });

  test('Disabled Checkbox', async ({ page }) => {
    await page.goto('/iframe.html?id=data-entry-checkbox--states');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('checkbox-disabled.png');
  });
});