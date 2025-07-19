import { test, expect } from '@playwright/test';

test.describe('SplitButton Visual Tests', () => {
  test('Primary SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-splitbutton--primary&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('splitbutton-primary.png');
  });

  test('Secondary SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-splitbutton--secondary&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('splitbutton-secondary.png');
  });

  test('Small SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-splitbutton--small&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('splitbutton-small.png');
  });

  test('Large SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-splitbutton--large&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('splitbutton-large.png');
  });

  test('Disabled SplitButton', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-splitbutton--disabled&viewMode=story');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('splitbutton-disabled.png');
  });

  test('SplitButton with Dropdown Open', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-splitbutton--primary&viewMode=story');
    await page.locator('button[aria-haspopup="menu"]').click();
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('splitbutton-dropdown-open.png');
  });

  test('SplitButton Focus State', async ({ page }) => {
    await page.goto('/iframe.html?args=&id=components-splitbutton--primary&viewMode=story');
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="root"]')).toHaveScreenshot('splitbutton-focus.png');
  });
});