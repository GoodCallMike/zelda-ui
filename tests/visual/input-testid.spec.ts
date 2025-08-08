import { test } from '@playwright/test';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Input Visual Tests with testId', () => {
  test('Input variants using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--variants');

    // Test each variant using testId
    await helpers.visual.screenshotComponent(
      'variant-default',
      'input-default-testid',
    );
    await helpers.visual.screenshotComponent(
      'variant-filled',
      'input-filled-testid',
    );
    await helpers.visual.screenshotComponent(
      'variant-borderless',
      'input-borderless-testid',
    );
  });

  test('Input states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--states');

    // Test interactive states
    await helpers.visual.testComponentStates('normal-input', [
      {
        name: 'default',
        action: async () => {
          // Default state - no action needed
        },
      },
      {
        name: 'focus',
        action: async () => {
          await helpers.locators.byTestId('normal-input').focus();
        },
      },
    ]);
  });

  test('Input with features using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--states');

    // Test input with different features
    await helpers.visual.screenshotComponent(
      'clear-input',
      'input-clearable-testid',
    );
    await helpers.visual.screenshotComponent(
      'count-input',
      'input-counted-testid',
    );
    await helpers.visual.screenshotComponent(
      'search-input',
      'input-search-testid',
    );
  });

  test('Input validation states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--states');

    // Test validation states
    await helpers.visual.screenshotComponent(
      'normal-input',
      'input-normal-testid',
    );
    await helpers.visual.screenshotComponent(
      'error-input',
      'input-error-testid',
    );
    await helpers.visual.screenshotComponent(
      'warning-input',
      'input-warning-testid',
    );
  });

  test('Input responsive behavior', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--variants');

    // Test responsive behavior
    await helpers.visual.testResponsive('variant-default', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);
  });

  test('Input accessibility using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--examples');

    // Test accessibility features
    await helpers.visual.screenshotComponent(
      'name-input',
      'input-with-label-testid',
    );
    await helpers.visual.screenshotComponent(
      'email-input',
      'input-with-aria-label-testid',
    );
  });
});
