/**
 * Test utilities for testId-based testing
 */

import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

/**
 * TestId naming conventions
 */
export const TestIdPatterns = {
  // Action-focused: btn-{action}-{context}
  button: (action: string, context?: string) =>
    context ? `btn-${action}-${context}` : `btn-${action}`,

  // Component-focused: {component}-{identifier}
  input: (identifier: string) => `input-${identifier}`,
  form: (identifier: string) => `form-${identifier}`,
  modal: (identifier: string) => `modal-${identifier}`,

  // Context-focused: {page}-{section}-{action}
  page: (page: string, section: string, action: string) =>
    `${page}-${section}-${action}`,
} as const;

/**
 * Enhanced locator helpers with testId support
 */
export class TestIdLocators {
  constructor(private page: Page) {}

  /**
   * Get element by testId
   */
  byTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  /**
   * Get button by action and context
   */
  button(action: string, context?: string): Locator {
    return this.byTestId(TestIdPatterns.button(action, context));
  }

  /**
   * Get input by identifier
   */
  input(identifier: string): Locator {
    return this.byTestId(TestIdPatterns.input(identifier));
  }

  /**
   * Get form by identifier
   */
  form(identifier: string): Locator {
    return this.byTestId(TestIdPatterns.form(identifier));
  }

  /**
   * Get modal by identifier
   */
  modal(identifier: string): Locator {
    return this.byTestId(TestIdPatterns.modal(identifier));
  }

  /**
   * Get element by page context
   */
  pageElement(page: string, section: string, action: string): Locator {
    return this.byTestId(TestIdPatterns.page(page, section, action));
  }
}

/**
 * Accessibility testing helpers
 */
export class AccessibilityHelpers {
  constructor(private page: Page) {}

  /**
   * Test keyboard navigation for a component
   */
  async testKeyboardNavigation(testId: string, expectedFocusableCount: number) {
    const component = this.page.getByTestId(testId);
    await component.focus();

    let focusableElements = 0;
    const _currentElement = await this.page.locator(':focus').first();

    // Count focusable elements by tabbing through
    for (let i = 0; i < expectedFocusableCount + 1; i++) {
      await this.page.keyboard.press('Tab');
      const newFocus = await this.page.locator(':focus').first();

      if (
        (await newFocus.isVisible()) &&
        (await component.locator(':focus').count()) > 0
      ) {
        focusableElements++;
      } else {
        break;
      }
    }

    expect(focusableElements).toBe(expectedFocusableCount);
  }

  /**
   * Test ARIA attributes for a component
   */
  async testAriaAttributes(
    testId: string,
    expectedAttributes: Record<string, string>,
  ) {
    const element = this.page.getByTestId(testId);

    for (const [attribute, expectedValue] of Object.entries(
      expectedAttributes,
    )) {
      const actualValue = await element.getAttribute(attribute);
      expect(actualValue).toBe(expectedValue);
    }
  }

  /**
   * Test screen reader announcements
   */
  async testScreenReaderAnnouncements(testId: string, expectedLabel: string) {
    const element = this.page.getByTestId(testId);
    const accessibleName =
      (await element.getAttribute('aria-label')) ||
      (await element.textContent()) ||
      (await element.getAttribute('aria-labelledby'));

    expect(accessibleName).toContain(expectedLabel);
  }
}

/**
 * Visual testing helpers with testId support
 */
export class VisualTestHelpers {
  constructor(private page: Page) {}

  /**
   * Take screenshot of component by testId
   */
  async screenshotComponent(testId: string, name: string) {
    const component = this.page.getByTestId(testId);
    await expect(component).toHaveScreenshot(`${name}.png`);
  }

  /**
   * Test component states visually
   */
  async testComponentStates(
    testId: string,
    states: Array<{
      name: string;
      action: () => Promise<void>;
    }>,
  ) {
    const component = this.page.getByTestId(testId);

    for (const state of states) {
      await state.action();
      await expect(component).toHaveScreenshot(`${testId}-${state.name}.png`);
    }
  }

  /**
   * Test responsive behavior
   */
  async testResponsive(
    testId: string,
    viewports: Array<{
      name: string;
      width: number;
      height: number;
    }>,
  ) {
    const component = this.page.getByTestId(testId);

    for (const viewport of viewports) {
      await this.page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await expect(component).toHaveScreenshot(
        `${testId}-${viewport.name}.png`,
      );
    }
  }
}

/**
 * Integration testing helpers
 */
export class IntegrationTestHelpers {
  constructor(private page: Page) {}

  /**
   * Test form submission workflow
   */
  async testFormWorkflow(
    formTestId: string,
    fields: Array<{
      testId: string;
      value: string;
    }>,
    submitButtonTestId: string,
  ) {
    // Fill form fields
    for (const field of fields) {
      await this.page.getByTestId(field.testId).fill(field.value);
    }

    // Submit form
    await this.page.getByTestId(submitButtonTestId).click();

    // Verify form submission
    const form = this.page.getByTestId(formTestId);
    await expect(form).toBeVisible();
  }

  /**
   * Test modal workflow
   */
  async testModalWorkflow(
    triggerTestId: string,
    modalTestId: string,
    closeTestId: string,
  ) {
    // Open modal
    await this.page.getByTestId(triggerTestId).click();
    await expect(this.page.getByTestId(modalTestId)).toBeVisible();

    // Close modal
    await this.page.getByTestId(closeTestId).click();
    await expect(this.page.getByTestId(modalTestId)).not.toBeVisible();
  }

  /**
   * Test search workflow
   */
  async testSearchWorkflow(
    searchInputTestId: string,
    searchButtonTestId: string,
    resultsTestId: string,
    query: string,
  ) {
    // Enter search query
    await this.page.getByTestId(searchInputTestId).fill(query);

    // Trigger search
    await this.page.getByTestId(searchButtonTestId).click();

    // Verify results
    await expect(this.page.getByTestId(resultsTestId)).toBeVisible();
  }
}

/**
 * Main test helper class combining all utilities
 */
export class ZeldaTestHelpers {
  public locators: TestIdLocators;
  public accessibility: AccessibilityHelpers;
  public visual: VisualTestHelpers;
  public integration: IntegrationTestHelpers;

  constructor(private page: Page) {
    this.locators = new TestIdLocators(page);
    this.accessibility = new AccessibilityHelpers(page);
    this.visual = new VisualTestHelpers(page);
    this.integration = new IntegrationTestHelpers(page);
  }

  /**
   * Navigate to Storybook story
   */
  async gotoStory(storyId: string) {
    await this.page.goto(`/iframe.html?id=${storyId}`);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Wait for component to be ready
   */
  async waitForComponent(testId: string) {
    await expect(this.page.getByTestId(testId)).toBeVisible();
  }
}
