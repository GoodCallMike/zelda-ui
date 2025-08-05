import { test } from '@playwright/test';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Button Visual Tests with testId', () => {
  test('Button variants using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--variants');

    // Test each variant using testId
    await helpers.visual.screenshotComponent(
      'btn-primary-example',
      'button-primary-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-secondary-example',
      'button-secondary-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-tertiary-example',
      'button-tertiary-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-destructive-example',
      'button-destructive-testid',
    );
  });

  test('Button states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testid-examples--user-interactions',
    );

    // Test interactive states
    await helpers.visual.testComponentStates('btn-hover-example', [
      {
        name: 'default',
        action: async () => {
          // Default state - no action needed
        },
      },
      {
        name: 'hover',
        action: async () => {
          await helpers.locators.byTestId('btn-hover-example').hover();
        },
      },
      {
        name: 'focus',
        action: async () => {
          await helpers.locators.byTestId('btn-hover-example').focus();
        },
      },
    ]);
  });

  test('Button sizes using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--variants');

    // Test different sizes
    await helpers.visual.screenshotComponent(
      'btn-small-example',
      'button-small-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-medium-example',
      'button-medium-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-large-example',
      'button-large-testid',
    );
  });

  test('Icon buttons using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--icon-buttons');

    // Test icon button variants
    await helpers.visual.screenshotComponent(
      'btn-icon-search',
      'button-icon-search-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-icon-user',
      'button-icon-user-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-icon-mail',
      'button-icon-mail-testid',
    );
  });

  test('Button responsive behavior', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--variants');

    // Test responsive behavior
    await helpers.visual.testResponsive('btn-primary-example', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);
  });

  test('Button dark mode using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button-testid-examples--dark-mode');

    // Test dark mode variants
    await helpers.visual.screenshotComponent(
      'btn-primary-dark',
      'button-primary-dark-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-secondary-dark',
      'button-secondary-dark-testid',
    );
  });
});
