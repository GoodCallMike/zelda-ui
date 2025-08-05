import { test } from '@playwright/test';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Input Visual Tests with testId', () => {
  test('Input variants using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'data-entry-input-testing-examples--test-id-naming-conventions',
    );

    // Test each variant using testId
    await helpers.visual.screenshotComponent(
      'input-email-signup',
      'input-email-signup-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-password-login',
      'input-password-login-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-username-profile',
      'input-username-profile-testid',
    );
  });

  test('Input states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'data-entry-input-testing-examples--basic-input-testing',
    );

    // Test interactive states
    await helpers.visual.testComponentStates('test-text-input', [
      {
        name: 'default',
        action: async () => {
          // Default state - no action needed
        },
      },
      {
        name: 'focus',
        action: async () => {
          await helpers.locators.byTestId('test-text-input').focus();
        },
      },
      {
        name: 'filled',
        action: async () => {
          await helpers.locators.byTestId('test-text-input').fill('Test value');
        },
      },
    ]);
  });

  test('Input with features using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'data-entry-input-testing-examples--basic-input-testing',
    );

    // Test input with different features
    await helpers.visual.screenshotComponent(
      'test-clearable-input',
      'input-clearable-testid',
    );
    await helpers.visual.screenshotComponent(
      'test-counted-input',
      'input-counted-testid',
    );
    await helpers.visual.screenshotComponent(
      'test-textarea-input',
      'input-textarea-testid',
    );
  });

  test('Input validation states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'data-entry-input-testing-examples--form-validation-testing',
    );

    // Test validation states
    await helpers.visual.screenshotComponent(
      'input-valid-state',
      'input-valid-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-error-state',
      'input-error-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-warning-state',
      'input-warning-testid',
    );
  });

  test('Input responsive behavior', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'data-entry-input-testing-examples--test-id-naming-conventions',
    );

    // Test responsive behavior
    await helpers.visual.testResponsive('input-email-signup', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);
  });

  test('Input accessibility using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'data-entry-input-testing-examples--accessibility-testing',
    );

    // Test accessibility features
    await helpers.visual.screenshotComponent(
      'input-with-label',
      'input-with-label-testid',
    );
    await helpers.visual.screenshotComponent(
      'input-with-aria-label',
      'input-with-aria-label-testid',
    );
  });
});
