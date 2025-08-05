import { test } from '@playwright/test';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Button Visual Tests with testId', () => {
  test('Button variants using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testing-examples--test-id-naming-conventions',
    );

    // Test each variant using testId from the actual story
    await helpers.visual.screenshotComponent(
      'btn-save-game',
      'button-save-game-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-load-game',
      'button-load-game-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-delete-save',
      'button-delete-save-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-cancel-action',
      'button-cancel-action-testid',
    );
  });

  test('Button states using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testing-examples--user-interaction-testing',
    );

    // Test interactive states using actual testIds from story
    await helpers.visual.testComponentStates('btn-click-test', [
      {
        name: 'default',
        action: async () => {
          // Default state - no action needed
        },
      },
      {
        name: 'hover',
        action: async () => {
          await helpers.locators.byTestId('btn-click-test').hover();
        },
      },
      {
        name: 'focus',
        action: async () => {
          await helpers.locators.byTestId('btn-click-test').focus();
        },
      },
    ]);
  });

  test('Button sizes using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testing-examples--user-interaction-testing',
    );

    // Test different button types from the story
    await helpers.visual.screenshotComponent(
      'btn-keyboard-focus',
      'button-keyboard-focus-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-keyboard-enter',
      'button-keyboard-enter-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-keyboard-space',
      'button-keyboard-space-testid',
    );
  });

  test('Icon buttons using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testing-examples--icon-button-testing',
    );

    // Test icon button variants from the actual story
    await helpers.visual.screenshotComponent(
      'btn-search-icon',
      'button-search-icon-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-add-icon',
      'button-add-icon-testid',
    );
    await helpers.visual.screenshotComponent(
      'btn-delete-icon',
      'button-delete-icon-testid',
    );
  });

  test('Button responsive behavior', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testing-examples--test-id-naming-conventions',
    );

    // Test responsive behavior using actual testId
    await helpers.visual.testResponsive('btn-save-game', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);
  });

  test('Button dark mode using testId selectors', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'general-button-testing-examples--integration-testing',
    );

    // Test integration examples from the story
    await helpers.visual.screenshotComponent(
      'game-menu-new-game',
      'button-new-game-testid',
    );
    await helpers.visual.screenshotComponent(
      'game-menu-continue',
      'button-continue-testid',
    );
  });
});
