import { test } from '@playwright/test';
import { injectAxe } from 'axe-playwright';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Integration Tests with testId - Visual & Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await injectAxe(page);
  });

  test('Login form integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--examples');

    // Visual test of login form using existing email input
    await helpers.visual.screenshotComponent(
      'email-input',
      'login-modal-testid',
    );

    // Visual test after form interaction
    await helpers.visual.screenshotComponent(
      'email-input',
      'login-modal-filled-testid',
    );
  });

  test('Search interface integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--states');

    // Visual test of search interface using existing search input
    await helpers.visual.screenshotComponent(
      'search-input',
      'search-interface-testid',
    );
  });

  test('Profile form integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--examples');

    // Test responsive behavior using existing name input
    await helpers.visual.testResponsive('name-input', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);
  });

  test('Game menu navigation integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('general-button--examples');

    // Visual test of menu using existing button
    await helpers.visual.screenshotComponent('submit-form', 'game-menu-testid');

    // Test menu states using existing buttons
    await helpers.visual.testComponentStates('submit-form', [
      {
        name: 'default',
        action: async () => {
          // Default state
        },
      },
    ]);
  });

  test('Dark mode integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    // Test light mode
    await helpers.gotoStory('data-entry-input--examples');
    await helpers.visual.screenshotComponent(
      'email-input',
      'integration-light-mode-testid',
    );

    // Test dark mode
    await helpers.gotoStory('general-button--examples');
    await helpers.visual.screenshotComponent(
      'submit-form',
      'integration-dark-mode-testid',
    );
  });

  test('Error states integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('data-entry-input--states');

    // Visual test of error states using existing error input
    await helpers.visual.screenshotComponent(
      'error-input',
      'profile-form-errors-testid',
    );
  });
});
