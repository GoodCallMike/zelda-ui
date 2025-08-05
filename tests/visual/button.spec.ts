import { expect, test } from '@playwright/test';

test.describe('Button Visual Tests', () => {
  test('Primary Button', async ({ page }) => {
    await page.goto('/iframe.html?id=general-button--primary');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#storybook-root button')).toBeVisible();
    await expect(
      page.locator('#storybook-root button').first(),
    ).toHaveScreenshot('button-primary.png');
  });

  test('Secondary Button', async ({ page }) => {
    await page.goto('/iframe.html?id=general-button--secondary');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#storybook-root button')).toBeVisible();
    await expect(
      page.locator('#storybook-root button').first(),
    ).toHaveScreenshot('button-secondary.png');
  });

  test('Disabled Button', async ({ page }) => {
    await page.goto('/iframe.html?id=general-button--disabled');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#storybook-root button')).toBeVisible();
    await expect(
      page.locator('#storybook-root button').first(),
    ).toHaveScreenshot('button-disabled.png');
  });

  test('Button Hover State', async ({ page }) => {
    await page.goto('/iframe.html?id=general-button--primary');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#storybook-root button')).toBeVisible();
    await page.locator('#storybook-root button').first().hover();
    await expect(
      page.locator('#storybook-root button').first(),
    ).toHaveScreenshot('button-hover.png');
  });
});
