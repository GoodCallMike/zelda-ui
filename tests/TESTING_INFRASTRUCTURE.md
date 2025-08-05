# Testing Infrastructure

This document outlines the comprehensive testing infrastructure for Zelda UI, including automated accessibility testing, visual regression tests using testId selectors, and test utilities.

## Overview

The testing infrastructure consists of three main pillars:

1. **Automated Accessibility Testing** - Ensures WCAG compliance
2. **Visual Regression Testing** - Maintains visual consistency using testId selectors
3. **Integration Testing** - Tests real-world component interactions

## Test Structure

```
tests/
├── accessibility/          # Automated accessibility tests
│   ├── button-a11y.spec.ts
│   └── input-a11y.spec.ts
├── integration/            # Integration tests with testId
│   ├── button-testid.test.tsx
│   ├── input-testid.test.tsx
│   └── component-integration.test.tsx
├── visual/                 # Visual regression tests
│   ├── button-testid.spec.ts
│   ├── input-testid.spec.ts
│   └── integration-testid.spec.ts
└── utils/                  # Test utilities
    ├── testid-helpers.ts
    └── test-config.ts
```

## TestId Naming Conventions

### Action-Focused Pattern
```typescript
// btn-{action}-{context}
'btn-submit-login'
'btn-cancel-modal'
'btn-search-header'
```

### Component-Focused Pattern
```typescript
// {component}-{identifier}
'input-email'
'modal-login'
'form-profile'
```

### Context-Focused Pattern
```typescript
// {page}-{section}-{action}
'profile-settings-save'
'game-menu-inventory'
'search-results-filter'
```

## Test Utilities

### ZeldaTestHelpers

Main helper class providing access to all testing utilities:

```typescript
import { ZeldaTestHelpers } from '../utils/testid-helpers';

const helpers = new ZeldaTestHelpers(page);

// Navigate to story
await helpers.gotoStory('general-button--primary');

// Locators
const button = helpers.locators.button('submit', 'login');

// Accessibility testing
await helpers.accessibility.testKeyboardNavigation('btn-example', 1);

// Visual testing
await helpers.visual.screenshotComponent('btn-example', 'button-primary');

// Integration testing
await helpers.integration.testFormWorkflow('form-login', fields, 'btn-submit');
```

### TestIdLocators

Enhanced locator helpers with testId support:

```typescript
// Get elements by testId patterns
helpers.locators.button('submit', 'login')     // btn-submit-login
helpers.locators.input('email')                // input-email
helpers.locators.modal('login')                // modal-login
helpers.locators.pageElement('profile', 'settings', 'save') // profile-settings-save
```

### AccessibilityHelpers

Automated accessibility testing utilities:

```typescript
// Test keyboard navigation
await helpers.accessibility.testKeyboardNavigation('component-id', 3);

// Test ARIA attributes
await helpers.accessibility.testAriaAttributes('btn-example', {
  'role': 'button',
  'aria-label': 'Submit form'
});

// Test screen reader announcements
await helpers.accessibility.testScreenReaderAnnouncements('btn-example', 'Submit');
```

### VisualTestHelpers

Visual regression testing with testId support:

```typescript
// Screenshot component by testId
await helpers.visual.screenshotComponent('btn-example', 'button-primary');

// Test component states
await helpers.visual.testComponentStates('btn-example', [
  { name: 'default', action: async () => {} },
  { name: 'hover', action: async () => await button.hover() }
]);

// Test responsive behavior
await helpers.visual.testResponsive('btn-example', [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'desktop', width: 1200, height: 800 }
]);
```

### IntegrationTestHelpers

Real-world workflow testing:

```typescript
// Test form workflow
await helpers.integration.testFormWorkflow(
  'form-login',
  [
    { testId: 'input-email', value: 'test@example.com' },
    { testId: 'input-password', value: 'password123' }
  ],
  'btn-submit-login'
);

// Test modal workflow
await helpers.integration.testModalWorkflow(
  'btn-open-modal',
  'modal-login',
  'btn-close-modal'
);
```

## Running Tests

### Development
```bash
# Unit tests
pnpm test

# Accessibility tests (fast)
pnpm test:a11y

# Visual regression tests
pnpm test:visual

# Visual tests with testId focus
pnpm test:visual:testid
```

### CI/CD
```bash
# Full accessibility suite (with Storybook)
pnpm test:a11y:ci

# All tests in CI
pnpm test:run && pnpm test:a11y && pnpm test:visual
```

## CI Configuration

The CI pipeline includes:

1. **Unit Tests** - Fast component tests
2. **Accessibility Tests** - WCAG compliance verification
3. **Visual Regression Tests** - UI consistency checks
4. **Artifact Upload** - Test reports and screenshots on failure

### GitHub Actions Jobs

- **test** - Runs unit, accessibility, and visual tests
- **accessibility** - Dedicated accessibility testing with detailed reports
- **build** - Ensures project builds successfully

## Test Configuration

### Accessibility Rules
- WCAG 2.1 AA compliance
- Focus management testing
- Screen reader compatibility
- Keyboard navigation verification

### Visual Testing
- Threshold: 0.2 (20% pixel difference tolerance)
- Max diff pixels: 100
- Multiple viewport testing (mobile, tablet, desktop)
- Dark mode testing

### Browser Support
- Chromium (primary)
- Mobile viewport testing
- Responsive behavior verification

## Best Practices

### TestId Usage
1. Always include `testId` prop in components
2. Use consistent naming conventions
3. Prefer semantic testIds over generic ones
4. Include context when necessary

### Accessibility Testing
1. Test keyboard navigation paths
2. Verify ARIA attributes
3. Check focus management
4. Test with screen readers in mind

### Visual Testing
1. Test component states (hover, focus, disabled)
2. Include responsive breakpoints
3. Test dark mode variants
4. Capture error states

### Integration Testing
1. Test real user workflows
2. Combine multiple components
3. Verify accessibility during interactions
4. Test form submissions and validations

## Troubleshooting

### Common Issues

**Visual test failures:**
- Check for animation timing issues
- Verify component stability before screenshots
- Review threshold settings

**Accessibility test failures:**
- Ensure proper ARIA attributes
- Check keyboard navigation order
- Verify focus management

**TestId not found:**
- Verify testId prop is passed to component
- Check naming convention consistency
- Ensure component is rendered in story

### Debug Commands
```bash
# Run tests in UI mode
pnpm test:visual:ui

# Update visual snapshots
pnpm test:visual:update

# Run specific test pattern
pnpm test:visual --grep="Button"
```

## Reporting

Test results are available in:
- `playwright-report/` - HTML reports
- `test-results/` - JSON results for CI
- Artifacts uploaded to GitHub Actions on failure

The infrastructure provides comprehensive coverage ensuring component quality, accessibility compliance, and visual consistency across the Zelda UI library.