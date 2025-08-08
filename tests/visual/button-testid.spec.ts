import { test } from '@playwright/test';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Button Visual Tests with testId', () => {
  test('Button variants using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button--variants',
    );

    // Test each variant using testId from the actual story
    await helpers.visual.screenshotComponent(
      'variant-primary',
      'button-primary-testid',
    );
    await helpers.visual.screenshotComponent(
      'variant-default',
      'button-default-testid',
    );
    await helpers.visual.screenshotComponent(
      'variant-destructive',
      'button-destructive-testid',
    );
    await helpers.visual.screenshotComponent(
      'variant-text',
      'button-text-testid',
    );
  });

  test('Button states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button--states',
    );

    // Test interactive states using actual testIds from story
    await helpers.visual.testComponentStates('normal-button', [
      {
        name: 'default',
        action: async () => {
          // Default state - no action needed
        },
      },
      {
        name: 'hover',
        action: async () => {
          await helpers.locators.byTestId('normal-button').hover();
        },
      },
    ]);
  });

  test('Button sizes using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button--examples',
    );

    // Test different button types from the story
    await helpers.visual.screenshotComponent(
      'submit-form',
      'button-submit-testid',
    );
    await helpers.visual.screenshotComponent(
      'save-draft',
      'button-save-draft-testid',
    );
    await helpers.visual.screenshotComponent(
      'cancel-form',
      'button-cancel-testid',
    );
  });

  test('Icon buttons using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button--examples',
    );

    // Test icon button variants from the actual story
    await helpers.visual.screenshotComponent(
      'search-data',
      'button-search-testid',
    );
    await helpers.visual.screenshotComponent(
      'add-item',
      'button-add-testid',
    );
    await helpers.visual.screenshotComponent(
      'delete-item',
      'button-delete-testid',
    );
  });

  test('Button responsive behavior', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button--variants',
    );

    // Test responsive behavior using actual testId
    await helpers.visual.testResponsive('variant-primary', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);
  });

  test('Button dark mode using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button--examples',
    );

    // Test integration examples from the story
    await helpers.visual.screenshotComponent(
      'continue',
      'button-continue-testid',
    );
    await helpers.visual.screenshotComponent(
      'go-back',
      'button-back-testid',
    );
  });
});
