import { test, expect } from '@playwright/test';

test.describe('Checkbox Visual Tests', () => {
  test('Default Checkbox', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-checkbox--default&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('checkbox-default.png');
  });

  test('Checkbox with Description', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-checkbox--with-description&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('checkbox-description.png');
  });

  test('Checkbox with Error', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-checkbox--with-error&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('checkbox-error.png');
  });

  test('Disabled Checkbox', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-checkbox--disabled&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('checkbox-disabled.png');
  });

  test('Checkbox Focus State', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-checkbox--default&viewMode=story');
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('checkbox-focus.png');
  });
});