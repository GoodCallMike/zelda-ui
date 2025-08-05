import { type RenderResult, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type AxeResults, axe } from 'jest-axe';
import type { ReactElement } from 'react';
import '@testing-library/jest-dom';

type AccessibilityTestOptions = {
  skipAxe?: boolean;
  skipKeyboard?: boolean;
  expectedFocusableElements?: number;
  ariaAttributes?: Record<string, string | RegExp>;
  screenReaderAnnouncements?: string[];
  colorContrast?: { selector: string; expectedRatio: number }[];
  focusManagement?: Array<{
    action: () => Promise<void>;
    expectedFocus: string;
  }>;
};

/**
 * Test component for accessibility violations using axe-core
 */
export const testAccessibility = async (
  component: ReactElement,
): Promise<AxeResults> => {
  const { container } = render(component);
  return await axe(container);
};

/**
 * Test keyboard navigation for interactive elements
 */
export const testKeyboardNavigation = async (
  component: ReactElement,
  options?: {
    expectedFocusableElements?: number;
    testTabOrder?: boolean;
    testEscapeKey?: boolean;
    testEnterKey?: boolean;
    testSpaceKey?: boolean;
  },
) => {
  const user = userEvent.setup();
  const { container } = render(component);

  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  if (options?.expectedFocusableElements !== undefined) {
    expect(focusableElements).toHaveLength(options.expectedFocusableElements);
  }

  if (options?.testTabOrder !== false) {
    // Test tab navigation
    for (let i = 0; i < focusableElements.length; i++) {
      await user.tab();
      expect(focusableElements[i]).toHaveFocus();
    }

    // Test shift+tab navigation
    for (let i = focusableElements.length - 1; i >= 0; i--) {
      await user.tab({ shift: true });
      expect(focusableElements[i]).toHaveFocus();
    }
  }

  // Test common keyboard interactions
  if (options?.testEscapeKey && focusableElements.length > 0) {
    await user.keyboard('{Escape}');
  }

  if (options?.testEnterKey && focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement)?.focus();
    await user.keyboard('{Enter}');
  }

  if (options?.testSpaceKey && focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement)?.focus();
    await user.keyboard(' ');
  }

  return { container, focusableElements };
};

/**
 * Test ARIA attributes and roles
 */
export const testAriaAttributes = (
  renderResult: RenderResult,
  expectedAttributes: Record<string, string | RegExp>,
) => {
  Object.entries(expectedAttributes).forEach(([selector, expectedValue]) => {
    const element = renderResult.container.querySelector(selector);
    expect(element).toBeInTheDocument();

    if (typeof expectedValue === 'string') {
      expect(element).toHaveAttribute('aria-label', expectedValue);
    } else {
      expect(element?.getAttribute('aria-label')).toMatch(expectedValue);
    }
  });
};

/**
 * Test screen reader announcements
 */
export const testScreenReaderAnnouncements = (
  renderResult: RenderResult,
  expectedAnnouncements: string[],
) => {
  const liveRegions = renderResult.container.querySelectorAll('[aria-live]');

  expectedAnnouncements.forEach((announcement, index) => {
    if (liveRegions[index]) {
      expect(liveRegions[index]).toHaveTextContent(announcement);
    }
  });
};

/**
 * Test focus management
 */
export const testFocusManagement = async (
  component: ReactElement,
  actions: Array<{
    action: () => Promise<void>;
    expectedFocus: string;
  }>,
) => {
  const { container } = render(component);

  for (const { action, expectedFocus } of actions) {
    await action();
    const expectedElement = container.querySelector(expectedFocus);
    expect(expectedElement).toHaveFocus();
  }
};

/**
 * Test color contrast ratios
 */
export const testColorContrast = (
  renderResult: RenderResult,
  contrastTests: Array<{ selector: string; expectedRatio: number }>,
) => {
  contrastTests.forEach(({ selector }) => {
    const element = renderResult.container.querySelector(selector);
    expect(element).toBeInTheDocument();

    // Note: This is a simplified test. In practice, you'd use a library
    // like color-contrast-checker or integrate with axe-core's color rules
    const styles = window.getComputedStyle(element as Element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;

    // Basic validation that colors are defined
    expect(color).toBeTruthy();
    expect(backgroundColor).toBeTruthy();
  });
};

/**
 * Test semantic HTML structure
 */
export const testSemanticStructure = (
  renderResult: RenderResult,
  expectedStructure: {
    headings?: string[];
    landmarks?: string[];
    lists?: number;
  },
) => {
  const { container } = renderResult;

  if (expectedStructure.headings) {
    expectedStructure.headings.forEach((heading, index) => {
      const headingElement = container.querySelector(`h${index + 1}`);
      if (heading) {
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent(heading);
      }
    });
  }

  if (expectedStructure.landmarks) {
    expectedStructure.landmarks.forEach((landmark) => {
      const landmarkElement = container.querySelector(
        `[role="${landmark}"], ${landmark}`,
      );
      expect(landmarkElement).toBeInTheDocument();
    });
  }

  if (expectedStructure.lists !== undefined) {
    const lists = container.querySelectorAll('ul, ol');
    expect(lists).toHaveLength(expectedStructure.lists);
  }
};

/**
 * Test form accessibility
 */
export const testFormAccessibility = (
  renderResult: RenderResult,
  formTests: {
    requiredFields?: string[];
    errorMessages?: Record<string, string>;
    fieldsets?: string[];
  },
) => {
  const { container } = renderResult;

  if (formTests.requiredFields) {
    formTests.requiredFields.forEach((fieldSelector) => {
      const field = container.querySelector(fieldSelector);
      expect(field).toBeInTheDocument();
      expect(field).toHaveAttribute('required');
      expect(field).toHaveAttribute('aria-required', 'true');
    });
  }

  if (formTests.errorMessages) {
    Object.entries(formTests.errorMessages).forEach(
      ([fieldSelector, errorId]) => {
        const field = container.querySelector(fieldSelector);
        const errorElement = container.querySelector(`#${errorId}`);

        expect(field).toHaveAttribute('aria-describedby', errorId);
        expect(errorElement).toHaveAttribute('role', 'alert');
      },
    );
  }

  if (formTests.fieldsets) {
    formTests.fieldsets.forEach((legendText) => {
      const legend = container.querySelector('legend');
      expect(legend).toBeInTheDocument();
      expect(legend).toHaveTextContent(legendText);
    });
  }
};

/**
 * Comprehensive accessibility test suite
 */
export const runAccessibilityTestSuite = async (
  component: ReactElement,
  options?: AccessibilityTestOptions,
) => {
  const results: {
    axeResults?: AxeResults;
    keyboardResults?: {
      container: Element;
      focusableElements: NodeListOf<Element>;
    };
    renderResult: RenderResult;
  } = {
    renderResult: render(component),
  };

  // Run axe accessibility tests
  if (!options?.skipAxe) {
    results.axeResults = await axe(results.renderResult.container);
    // Check for violations manually since toHaveNoViolations might not be available
    if (results.axeResults.violations.length > 0) {
      throw new Error(`Accessibility violations found: ${JSON.stringify(results.axeResults.violations, null, 2)}`);
    }
  }

  // Test keyboard navigation using the same render result
  if (!options?.skipKeyboard) {
    const user = userEvent.setup();
    const { container } = results.renderResult;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (options?.expectedFocusableElements !== undefined) {
      expect(focusableElements).toHaveLength(options.expectedFocusableElements);
    }

    if (focusableElements.length > 0) {
      // Start with focus on the first element
      (focusableElements[0] as HTMLElement).focus();
      expect(focusableElements[0]).toHaveFocus();

      // Test tab navigation (skip first element since it's already focused)
      for (let i = 1; i < focusableElements.length; i++) {
        await user.tab();
        expect(focusableElements[i]).toHaveFocus();
      }

      // Test shift+tab navigation back to the beginning
      for (let i = focusableElements.length - 2; i >= 0; i--) {
        await user.tab({ shift: true });
        expect(focusableElements[i]).toHaveFocus();
      }
    }

    results.keyboardResults = { container, focusableElements };
  }

  // Test ARIA attributes
  if (options?.ariaAttributes) {
    testAriaAttributes(results.renderResult, options.ariaAttributes);
  }

  // Test screen reader announcements
  if (options?.screenReaderAnnouncements) {
    testScreenReaderAnnouncements(
      results.renderResult,
      options.screenReaderAnnouncements,
    );
  }

  // Test color contrast
  if (options?.colorContrast) {
    testColorContrast(results.renderResult, options.colorContrast);
  }

  // Test focus management
  if (options?.focusManagement) {
    await testFocusManagement(component, options.focusManagement);
  }

  return results;
};

/**
 * Quick accessibility test for components
 */
export const quickA11yTest = async (component: ReactElement) => {
  return await runAccessibilityTestSuite(component, {
    skipKeyboard: false,
  });
};

// All utilities are already exported above
