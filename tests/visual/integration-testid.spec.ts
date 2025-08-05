import { test } from '@playwright/test';
import { checkA11y, injectAxe } from 'axe-playwright';
import { ZeldaTestHelpers } from '../utils/testid-helpers';

test.describe('Integration Tests with testId - Visual & Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await injectAxe(page);
  });

  test('Login form integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('integration-component-integration--login-modal');

    // Visual test of login form
    await helpers.visual.screenshotComponent(
      'modal-login',
      'login-modal-testid',
    );

    // Accessibility test
    await checkA11y(page);

    // Test form workflow
    await helpers.integration.testFormWorkflow(
      'form-login',
      [
        { testId: 'input-email', value: 'test@example.com' },
        { testId: 'input-password', value: 'password123' },
      ],
      'btn-submit-login',
    );

    // Visual test after form interaction
    await helpers.visual.screenshotComponent(
      'modal-login',
      'login-modal-filled-testid',
    );
  });

  test('Search interface integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory(
      'integration-component-integration--search-interface',
    );

    // Visual test of search interface
    await helpers.visual.screenshotComponent(
      'search-interface',
      'search-interface-testid',
    );

    // Accessibility test
    await checkA11y(page);

    // Test search workflow
    await helpers.integration.testSearchWorkflow(
      'input-search-query',
      'btn-search-submit',
      'search-results',
      'zelda components',
    );

    // Visual test with results
    await helpers.visual.screenshotComponent(
      'search-interface',
      'search-interface-results-testid',
    );
  });

  test('Profile form integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('integration-component-integration--profile-form');

    // Test responsive behavior
    await helpers.visual.testResponsive('form-profile', [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'desktop', width: 1200, height: 800 },
    ]);

    // Accessibility test
    await checkA11y(page);

    // Test keyboard navigation through form
    await helpers.accessibility.testKeyboardNavigation('form-profile', 4); // 3 inputs + 1 button

    // Test form completion
    await helpers.integration.testFormWorkflow(
      'form-profile',
      [
        { testId: 'input-name', value: 'Link Hero' },
        { testId: 'input-email', value: 'link@hyrule.com' },
        { testId: 'input-bio', value: 'Hero of Hyrule' },
      ],
      'btn-save-profile',
    );
  });

  test('Game menu navigation integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('integration-component-integration--game-menu');

    // Visual test of menu
    await helpers.visual.screenshotComponent('game-menu', 'game-menu-testid');

    // Test menu states
    await helpers.visual.testComponentStates('game-menu', [
      {
        name: 'default',
        action: async () => {
          // Default state
        },
      },
      {
        name: 'inventory-selected',
        action: async () => {
          await helpers.locators.byTestId('btn-inventory-menu').click();
        },
      },
      {
        name: 'settings-selected',
        action: async () => {
          await helpers.locators.byTestId('btn-settings-menu').click();
        },
      },
    ]);

    // Accessibility test
    await checkA11y(page);

    // Test keyboard navigation
    await helpers.accessibility.testKeyboardNavigation('game-menu', 4); // 4 menu buttons
  });

  test('Dark mode integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    // Test light mode
    await helpers.gotoStory('integration-component-integration--login-modal');
    await helpers.visual.screenshotComponent(
      'modal-login',
      'integration-light-mode-testid',
    );

    // Test dark mode
    await helpers.gotoStory('general-button-testid-examples--dark-mode');
    await helpers.visual.screenshotComponent(
      'btn-primary-dark',
      'integration-dark-mode-testid',
    );

    // Accessibility should work in both modes
    await checkA11y(page);
  });

  test('Error states integration', async ({ page }) => {
    const helpers = new ZeldaTestHelpers(page);

    await helpers.gotoStory('integration-component-integration--profile-form');

    // Test form with validation errors
    await helpers.locators.byTestId('btn-save-profile').click(); // Submit empty form

    // Visual test of error states
    await helpers.visual.screenshotComponent(
      'form-profile',
      'profile-form-errors-testid',
    );

    // Accessibility test with errors
    await checkA11y(page);

    // Verify error announcements
    await helpers.accessibility.testAriaAttributes('input-name', {
      'aria-invalid': 'true',
    });
  });
});
