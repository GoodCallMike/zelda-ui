import { test } from '@playwright/test';
import { checkA11y, injectAxe } from 'axe-playwright';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Button Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await injectAxe(page);
  });

  test('Button variants accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--variants');

    // Check overall accessibility
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });

    // Test specific button accessibility
    await helpers.accessibility.testAriaAttributes('btn-primary-example', {
      role: 'button',
      type: 'button',
    });

    await helpers.accessibility.testScreenReaderAnnouncements(
      'btn-primary-example',
      'Primary',
    );
  });

  test('Button keyboard navigation', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testid-examples--user-interactions',
    );

    // Test keyboard navigation
    await helpers.accessibility.testKeyboardNavigation(
      'btn-keyboard-example',
      1,
    );

    // Test Enter key activation
    await helpers.locators.byTestId('btn-keyboard-example').focus();
    await page.keyboard.press('Enter');

    // Test Space key activation
    await helpers.locators.byTestId('btn-keyboard-example').focus();
    await page.keyboard.press('Space');
  });

  test('Icon button accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--icon-buttons');

    // Check accessibility for icon buttons
    await checkA11y(page);

    // Verify icon buttons have proper labels
    await helpers.accessibility.testAriaAttributes('btn-icon-search', {
      'aria-label': 'Search',
    });

    await helpers.accessibility.testAriaAttributes('btn-icon-user', {
      'aria-label': 'User profile',
    });
  });

  test('Disabled button accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--variants');

    // Test disabled button accessibility
    await helpers.accessibility.testAriaAttributes('btn-disabled-example', {
      disabled: '',
      'aria-disabled': 'true',
    });

    // Verify disabled button is not focusable
    await page.keyboard.press('Tab');
    const focusedElement = await page
      .locator(':focus')
      .getAttribute('data-testid');
    test.expect(focusedElement).not.toBe('btn-disabled-example');
  });

  test('Button focus management', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testid-examples--user-interactions',
    );

    // Test focus indicators
    await helpers.locators.byTestId('btn-focus-example').focus();

    // Verify focus is visible
    const focusedButton = page.locator(':focus');
    await test.expect(focusedButton).toBeVisible();
    await test
      .expect(focusedButton)
      .toHaveAttribute('data-testid', 'btn-focus-example');
  });
});
