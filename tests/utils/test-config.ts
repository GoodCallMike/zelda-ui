/**
 * Test configuration and constants
 */

export const TestConfig = {
  // Viewport sizes for responsive testing
  viewports: {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1200, height: 800 },
    wide: { width: 1920, height: 1080 },
  },

  // Accessibility testing options
  accessibility: {
    rules: {
      // Disable color-contrast rule for visual tests (handled separately)
      'color-contrast': { enabled: false },
      // Focus on structural accessibility
      'landmark-one-main': { enabled: true },
      'page-has-heading-one': { enabled: false }, // Not applicable for components
      region: { enabled: false }, // Not applicable for isolated components
    },
    tags: ['wcag2a', 'wcag2aa', 'wcag21aa'],
  },

  // Visual testing thresholds
  visual: {
    threshold: 0.2,
    maxDiffPixels: 100,
  },

  // Timeouts
  timeouts: {
    default: 5000,
    navigation: 10000,
    accessibility: 15000,
  },

  // Storybook story patterns
  stories: {
    button: {
      variants: 'general-button-testid-examples--variants',
      interactions: 'general-button-testid-examples--user-interactions',
      icons: 'general-button-testid-examples--icon-buttons',
      darkMode: 'general-button-testid-examples--dark-mode',
    },
    input: {
      variants: 'general-input-testid-examples--variants',
      interactions: 'general-input-testid-examples--user-interactions',
      features: 'general-input-testid-examples--features',
      validation: 'general-input-testid-examples--validation',
      darkMode: 'general-input-testid-examples--dark-mode',
    },
    integration: {
      loginModal: 'integration-component-integration--login-modal',
      searchInterface: 'integration-component-integration--search-interface',
      profileForm: 'integration-component-integration--profile-form',
      gameMenu: 'integration-component-integration--game-menu',
    },
  },
} as const;

/**
 * Common test data
 */
export const TestData = {
  // Form test data
  forms: {
    login: {
      email: 'test@example.com',
      password: 'password123',
    },
    profile: {
      name: 'Link Hero',
      email: 'link@hyrule.com',
      bio: 'Hero of Hyrule',
    },
    search: {
      query: 'zelda components',
    },
  },

  // Expected accessibility attributes
  aria: {
    button: {
      role: 'button',
      type: 'button',
    },
    input: {
      type: 'text',
    },
    iconButton: {
      search: { 'aria-label': 'Search' },
      user: { 'aria-label': 'User profile' },
      mail: { 'aria-label': 'Mail' },
    },
  },
} as const;

/**
 * Test utilities for common operations
 */
export const TestUtils = {
  /**
   * Wait for animations to complete
   */
  waitForAnimations: async (page: Page) => {
    await page.waitForTimeout(300); // Standard animation duration
  },

  /**
   * Ensure element is stable before screenshot
   */
  waitForStability: async (page: Page) => {
    await page.waitForLoadState('networkidle');
    await TestUtils.waitForAnimations(page);
  },

  /**
   * Generate test ID for screenshot
   */
  generateScreenshotId: (
    component: string,
    variant: string,
    state?: string,
  ) => {
    const parts = [component, variant];
    if (state) parts.push(state);
    return `${parts.join('-')}-testid`;
  },
} as const;
