import { test } from '@playwright/test';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Input Visual Tests with testId', () => {
  test('Input variants using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--variants');

    // Test each variant using testId
    await helpers.visual.screenshotComponent(
      'input-default-example',
      'input-default-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-error-example',
      'input-error-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-disabled-example',
      'input-disabled-testid',
    );
  });

  test('Input states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--user-interactions');

    // Test interactive states
    await helpers.visual.testComponentStates('input-focus-example', [
      {
        name: 'default',
        action: async () => {
          // Default state - no action needed
        },
      },
      {
        name: 'focus',
        action: async () => {
          await helpers.locators.byTestId('input-focus-example').focus();
        },
      },
      {
        name: 'filled',
        action: async () => {
          await helpers.locators
            .byTestId('input-focus-example')
            .fill('Test value');
        },
      },
    ]);
  });

  test('Input with icons using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--features');

    // Test input with different icons
    await helpers.visual.screenshotComponent(
      'input-search-icon',
      'input-search-icon-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-user-icon',
      'input-user-icon-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-mail-icon',
      'input-mail-icon-testid',
    );
  });

  test('Input validation states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--validation');

    // Test validation states
    await helpers.visual.screenshotComponent(
      'input-valid-example',
      'input-valid-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-invalid-example',
      'input-invalid-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-warning-example',
      'input-warning-testid',
    );
  });

  test('Input responsive behavior', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--variants');

    // Test responsive behavior
    await helpers.visual.testResponsive('input-default-example', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);
  });

  test('Input dark mode using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-input-testid-examples--dark-mode');

    // Test dark mode variants
    await helpers.visual.screenshotComponent(
      'input-default-dark',
      'input-default-dark-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-error-dark',
      'input-error-dark-testid',
    );
  });
});
