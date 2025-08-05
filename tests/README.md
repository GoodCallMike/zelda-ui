# Testing

Zelda UI uses a comprehensive testing infrastructure with three main pillars:

1. **Automated Accessibility Testing** - WCAG compliance
2. **Visual Regression Testing** - UI consistency with testId selectors
3. **Integration Testing** - Real-world component interactions

📖 **[Complete Testing Infrastructure Guide](TESTING_INFRASTRUCTURE.md)**

## Quick Start

### Development Testing
```bash
# Unit tests
pnpm test

# Accessibility tests (fast)
pnpm test:a11y

# Visual regression tests
pnpm test:visual

# Visual tests focused on testId patterns
pnpm test:visual:testid
```

### CI Testing
```bash
# Full accessibility suite (automated)
pnpm test:a11y:ci

# All tests for CI
pnpm test:run && pnpm test:a11y && pnpm test:visual
```

## Test Types

### Accessibility Tests

**Quick Tests (for commits)**
```bash
pnpm test:a11y
```
Fast vitest-based accessibility tests using jest-axe:
- No Storybook dependency
- Individual component testing
- Pre-commit hook suitable

**Full Tests (comprehensive)**
```bash
pnpm test:a11y:full
```
Playwright + vitest accessibility tests:
- Requires Storybook running
- Complete WCAG compliance testing
- Keyboard navigation verification

**CI Tests (automated)**
```bash
pnpm test:a11y:ci
```
Automated accessibility testing for CI:
- Starts Storybook automatically
- Comprehensive accessibility reports
- Artifact generation for failures

### Visual Tests

**Standard Visual Tests**
```bash
pnpm test:visual
```
Playwright visual regression tests:
- Component state testing
- Responsive behavior verification
- Dark mode testing

**TestId-Focused Tests**
```bash
pnpm test:visual:testid
```
Visual tests using testId selectors:
- Consistent component targeting
- Integration scenario testing
- Real-world usage patterns

### Integration Tests

**Component Integration**
```bash
pnpm test --testNamePattern="integration"
```
Vitest-based integration tests:
- Multi-component workflows
- Form submission testing
- Modal interaction testing

## Test Utilities

### ZeldaTestHelpers
Comprehensive test helper class:
```typescript
import { ZeldaTestHelpers } from './utils/testid-helpers';

const helpers = new ZeldaTestHelpers(page);

// Locators with testId patterns
const button = helpers.locators.button('submit', 'login');

// Accessibility testing
await helpers.accessibility.testKeyboardNavigation('btn-example', 1);

// Visual testing
await helpers.visual.screenshotComponent('btn-example', 'button-primary');

// Integration testing
await helpers.integration.testFormWorkflow('form-login', fields, 'btn-submit');
```

### TestId Naming Conventions

- **Action-focused**: `btn-submit-login`
- **Component-focused**: `input-email`
- **Context-focused**: `profile-settings-save`

## Browser Testing

- **Desktop**: Chromium 1200x800
- **Mobile**: Pixel 5 375x667
- **Accessibility**: Desktop Chrome with axe-core

## Reporting

- **HTML Reports**: `playwright-report/`
- **JSON Results**: `test-results/`
- **CI Artifacts**: Uploaded on failure
- **Screenshots**: Visual diff comparisons

## Debug & Development

```bash
# Interactive test runner
pnpm test:visual:ui

# Update visual snapshots
pnpm test:visual:update

# Run specific test pattern
pnpm test:visual --grep="Button"
```