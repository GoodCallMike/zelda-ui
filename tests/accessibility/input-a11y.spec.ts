import { test } from '@playwright/test';
import { checkA11y, injectAxe } from 'axe-playwright';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Input Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await injectAxe(page);
  });

  test('Input variants accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--variants');

    // Check overall accessibility
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });

    // Test specific input accessibility
    await helpers.accessibility.testAriaAttributes('input-default-example', {
      type: 'text',
    });
  });

  test('Input label association', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--form-context');

    // Verify label association
    const input = helpers.locators.byTestId('input-email-field');
    const labelId = await input.getAttribute('aria-labelledby');

    if (labelId) {
      const label = page.locator(`#${labelId}`);
      await test.expect(label).toBeVisible();
    } else {
      // Check for aria-label
      const ariaLabel = await input.getAttribute('aria-label');
      test.expect(ariaLabel).toBeTruthy();
    }
  });

  test('Input error states accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--validation');

    // Check accessibility for error states
    await checkA11y(page);

    // Test error input accessibility
    await helpers.accessibility.testAriaAttributes('input-invalid-example', {
      'aria-invalid': 'true',
    });

    // Verify error message association
    const errorInput = helpers.locators.byTestId('input-invalid-example');
    const describedBy = await errorInput.getAttribute('aria-describedby');

    if (describedBy) {
      const errorMessage = page.locator(`#${describedBy}`);
      await test.expect(errorMessage).toBeVisible();
    }
  });

  test('Input keyboard navigation', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--user-interactions');

    // Test keyboard navigation
    await helpers.accessibility.testKeyboardNavigation(
      'input-focus-example',
      1,
    );

    // Test input focus
    await helpers.locators.byTestId('input-focus-example').focus();
    const focusedElement = await page
      .locator(':focus')
      .getAttribute('data-testid');
    test.expect(focusedElement).toBe('input-focus-example');
  });

  test('Input with icons accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--features');

    // Check accessibility for inputs with icons
    await checkA11y(page);

    // Verify icon doesn't interfere with accessibility
    await helpers.accessibility.testScreenReaderAnnouncements(
      'input-search-icon',
      'Search',
    );
  });

  test('Disabled input accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--variants');

    // Test disabled input accessibility
    await helpers.accessibility.testAriaAttributes('input-disabled-example', {
      disabled: '',
      'aria-disabled': 'true',
    });

    // Verify disabled input is not focusable
    await page.keyboard.press('Tab');
    const focusedElement = await page
      .locator(':focus')
      .getAttribute('data-testid');
    test.expect(focusedElement).not.toBe('input-disabled-example');
  });

  test('Input placeholder accessibility', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--variants');

    // Verify placeholder doesn't replace proper labeling
    const input = helpers.locators.byTestId('input-default-example');
    const hasLabel =
      (await input.getAttribute('aria-label')) ||
      (await input.getAttribute('aria-labelledby'));

    test.expect(hasLabel).toBeTruthy();
  });
});
