# Testing

## Accessibility Tests

### Quick Tests (for commits)
```bash
pnpm test:a11y
```
Runs fast vitest-based accessibility tests using jest-axe. These tests:
- Don't require Storybook to be running
- Test individual components in isolation
- Are suitable for pre-commit hooks

### Full Tests (for comprehensive testing)
```bash
pnpm test:a11y:full
```
Runs both vitest and Playwright accessibility tests. Requires Storybook to be running manually:
```bash
pnpm storybook  # In one terminal
pnpm test:a11y:full  # In another terminal
```

## Visual Tests
```bash
pnpm test:visual
```
Runs Playwright visual regression tests against Storybook.