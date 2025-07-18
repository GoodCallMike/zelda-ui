import { test, expect } from '@playwright/test';

test.describe('Button Visual Tests', () => {
  test('Primary Button', async ({ page }) => {
    await page.goto('/iframe.html?id=core-button--primary');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('button-primary.png');
  });

  test('Secondary Button', async ({ page }) => {
    await page.goto('/iframe.html?id=core-button--secondary');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('button-secondary.png');
  });

  test('Disabled Button', async ({ page }) => {
    await page.goto('/iframe.html?id=core-button--disabled');
    await expect(page.locator('#storybook-root')).toHaveScreenshot('button-disabled.png');
  });

  test('Button Hover State', async ({ page }) => {
    await page.goto('/iframe.html?id=core-button--primary');
    await page.locator('#storybook-root button').first().hover();
    await expect(page.locator('#storybook-root')).toHaveScreenshot('button-hover.png');
  });
});