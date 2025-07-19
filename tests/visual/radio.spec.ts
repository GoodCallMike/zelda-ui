import { test, expect } from '@playwright/test';

test.describe('Radio Visual Tests', () => {
  test('Default Radio', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-radio--default&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('radio-default.png');
  });

  test('Radio with Description', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-radio--with-description&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('radio-description.png');
  });

  test('Radio with Error', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-radio--with-error&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('radio-error.png');
  });

  test('Disabled Radio', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-radio--disabled&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('radio-disabled.png');
  });

  test('Radio Group', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-radio--radio-group&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('radio-group.png');
  });

  test('Radio Focus State', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-radio--default&viewMode=story');
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('radio-focus.png');
  });
});