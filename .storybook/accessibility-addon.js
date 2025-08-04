// Accessibility addon configuration for Storybook
// This file configures accessibility testing and documentation features

export const accessibilityConfig = {
  // Axe-core configuration for automated accessibility testing
  axe: {
    // Rules to run for all stories
    rules: {
      // Color contrast checking
      'color-contrast': { enabled: true },
      // Keyboard navigation
      keyboard: { enabled: true },
      // Focus management
      'focus-order-semantics': { enabled: true },
      // ARIA attributes
      'aria-valid-attr': { enabled: true },
      'aria-valid-attr-value': { enabled: true },
      // Form labels
      label: { enabled: true },
      // Semantic HTML
      'button-name': { enabled: true },
      'link-name': { enabled: true },
    },
    // Tags to include in testing
    tags: ['wcag2a', 'wcag2aa', 'wcag21aa'],
  },

  // Keyboard navigation patterns documentation
  keyboardPatterns: {
    // Universal patterns
    universal: {
      Tab: 'Move to next focusable element',
      'Shift + Tab': 'Move to previous focusable element',
      Enter: 'Activate buttons, links, and form controls',
      Space: 'Activate buttons and checkboxes',
      Escape: 'Close modals, dropdowns, and overlays',
    },

    // Component-specific patterns
    modal: {
      Escape: 'Close modal',
      Tab: 'Cycle through modal elements (focus trapped)',
    },

    select: {
      'Arrow Up/Down': 'Navigate options',
      'Enter/Space': 'Select option',
      Escape: 'Close dropdown',
      'Home/End': 'First/last option',
    },

    button: {
      Enter: 'Activate button',
      Space: 'Activate button',
    },

    input: {
      Tab: 'Move between form fields',
      'Arrow Keys': 'Navigate within input content',
    },

    checkbox: {
      Space: 'Toggle checkbox',
      Tab: 'Move between checkboxes',
    },

    radio: {
      'Arrow Keys': 'Navigate radio group',
      Tab: 'Move between radio groups',
    },
  },

  // ARIA attributes reference
  ariaAttributes: {
    // Common attributes
    'aria-label': {
      purpose: 'Accessible name',
      usage: "When visible label isn't sufficient",
      example: 'aria-label="Close dialog"',
    },
    'aria-labelledby': {
      purpose: 'References labeling element',
      usage: 'Links to heading or label',
      example: 'aria-labelledby="modal-title"',
    },
    'aria-describedby': {
      purpose: 'References description',
      usage: 'Links to help text or errors',
      example: 'aria-describedby="help-text error-message"',
    },
    'aria-expanded': {
      purpose: 'Expansion state',
      usage: 'For collapsible elements',
      example: 'aria-expanded="false"',
    },
    'aria-selected': {
      purpose: 'Selection state',
      usage: 'For selectable items',
      example: 'aria-selected="true"',
    },
    'aria-checked': {
      purpose: 'Checked state',
      usage: 'For checkboxes and radio buttons',
      example: 'aria-checked="false"',
    },
    'aria-disabled': {
      purpose: 'Disabled state',
      usage: 'For disabled elements',
      example: 'aria-disabled="true"',
    },
    'aria-invalid': {
      purpose: 'Validation state',
      usage: 'For form validation',
      example: 'aria-invalid="false"',
    },
    'aria-required': {
      purpose: 'Required field',
      usage: 'For mandatory form fields',
      example: 'aria-required="true"',
    },
    'aria-live': {
      purpose: 'Live region',
      usage: 'For dynamic content updates',
      example: 'aria-live="polite"',
    },
    role: {
      purpose: 'Element purpose',
      usage: 'Defines semantic meaning',
      example: 'role="dialog"',
    },
  },

  // Testing patterns
  testingPatterns: {
    // Automated testing with jest-axe
    automated: `
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Component has no accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
    `,

    // Keyboard testing
    keyboard: `
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Button is keyboard accessible', async () => {
  const user = userEvent.setup();
  render(<Button>Click me</Button>);
  
  const button = screen.getByRole('button', { name: 'Click me' });
  
  // Test keyboard navigation
  await user.tab();
  expect(button).toHaveFocus();
  
  // Test keyboard activation
  await user.keyboard('{Enter}');
  // Assert expected behavior
});
    `,

    // Screen reader testing
    screenReader: `
test('Component is screen reader accessible', () => {
  render(<Component />);
  
  // Test semantic elements
  const button = screen.getByRole('button', { name: 'Submit' });
  expect(button).toBeInTheDocument();
  
  // Test ARIA attributes
  expect(button).toHaveAttribute('aria-label', 'Submit form');
  
  // Test form labels
  const input = screen.getByLabelText('Email Address');
  expect(input).toBeInTheDocument();
});
    `,
  },
};

// Helper function to create accessibility documentation
export const createAccessibilityDocs = (
  componentName,
  specificPatterns = {},
) => {
  return {
    title: `${componentName} Accessibility`,
    description: `
## Accessibility Features

The ${componentName} component is fully accessible with WCAG 2.1 AA compliance:

### Keyboard Navigation
${Object.entries({
  ...accessibilityConfig.keyboardPatterns.universal,
  ...(specificPatterns.keyboard || {}),
})
  .map(([key, description]) => `- **${key}**: ${description}`)
  .join('\n')}

### ARIA Attributes
${Object.entries(specificPatterns.aria || {})
  .map(([attr, description]) => `- **${attr}**: ${description}`)
  .join('\n')}

### Screen Reader Support
- Semantic HTML elements
- Proper labeling and descriptions
- Status announcements
- Clear focus management

### Testing
All components include \`testId\` attributes for reliable automated testing.
    `,
  };
};
