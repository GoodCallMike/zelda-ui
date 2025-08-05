# Integration Tests with testId

This directory contains comprehensive integration tests that demonstrate how to use `testId` props for reliable test automation across the Zelda UI component library.

## Overview

These tests showcase best practices for:
- **testId naming conventions** - Consistent patterns for reliable test maintenance
- **User interaction testing** - Real user workflows and behaviors
- **Component integration** - Multiple components working together
- **Accessibility testing** - Ensuring components remain accessible when tested
- **Form validation** - Complex validation scenarios with user feedback

## Test Files

### `button-testid.test.tsx`
Comprehensive tests for Button component including:
- Basic testId functionality and naming patterns
- User interactions (click, keyboard, disabled states)
- Button variants and types
- Icon buttons with accessibility labels
- ARIA attributes and expandable/toggle states
- Integration scenarios (game menus, modals, forms)
- Accessibility compliance verification

### `input-testid.test.tsx`
Comprehensive tests for Input component including:
- Basic testId functionality for text inputs and textareas
- User interactions (typing, clearing, focus/blur)
- Input variants, types, and sizes
- Advanced features (character counting, prefixes, addons)
- Form validation states and error handling
- Accessibility testing (labels, ARIA descriptions, keyboard navigation)
- Integration scenarios (login forms, search interfaces, profile forms)

### `component-integration.test.tsx`
Complex integration tests showing multiple components working together:
- **Login Modal** - Modal + Input + Button integration
- **Search Interface** - Multiple inputs with search/filter/clear functionality
- **Profile Form** - Form validation with real-time feedback
- **Game Menu Navigation** - Complex navigation with nested modals
- **Accessibility Integration** - Maintaining accessibility across components

### `setup.ts`
Test configuration and mocks for integration tests.

## testId Naming Conventions

### Recommended Patterns

1. **Action-focused**: `btn-{action}-{context}`
   ```tsx
   <Button testId="btn-save-game">Save Game</Button>
   <Button testId="btn-delete-user">Delete User</Button>
   ```

2. **Component-focused**: `{component}-{identifier}`
   ```tsx
   <Button testId="modal-close">×</Button>
   <Input testId="search-input" />
   ```

3. **Context-focused**: `{page}-{section}-{action}`
   ```tsx
   <Button testId="profile-settings-save">Save Settings</Button>
   <Input testId="login-form-email" />
   ```

### Input-specific Patterns

1. **Field-focused**: `input-{field}-{context}`
   ```tsx
   <Input testId="input-email-signup" />
   <Input testId="input-password-login" />
   ```

2. **Form-focused**: `{form}-{field}`
   ```tsx
   <Input testId="signup-email" />
   <Input testId="login-password" />
   ```

## Testing Patterns

### Basic Component Testing
```tsx
// Query by testId
const button = screen.getByTestId('btn-save-game');
expect(button).toBeInTheDocument();

// Test user interactions
const user = userEvent.setup();
await user.click(button);
expect(mockHandler).toHaveBeenCalled();
```

### Form Integration Testing
```tsx
// Test complete form workflows
const emailInput = screen.getByTestId('login-form-email');
const passwordInput = screen.getByTestId('login-form-password');
const submitButton = screen.getByTestId('login-form-submit');

await user.type(emailInput, 'user@example.com');
await user.type(passwordInput, 'password123');
await user.click(submitButton);

expect(onSubmit).toHaveBeenCalledWith({
  email: 'user@example.com',
  password: 'password123'
});
```

### Accessibility Testing
```tsx
// Test ARIA attributes
const button = screen.getByTestId('expandable-button');
expect(button).toHaveAttribute('aria-expanded', 'false');
expect(button).toHaveAttribute('aria-controls', 'menu-panel');

// Test keyboard navigation
await user.tab();
expect(button).toHaveFocus();

await user.keyboard('{Enter}');
expect(mockHandler).toHaveBeenCalled();
```

### Validation Testing
```tsx
// Test form validation
const input = screen.getByTestId('email-input');
await user.type(input, 'invalid-email');
fireEvent.blur(input);

expect(input).toHaveAttribute('aria-invalid', 'true');
expect(screen.getByRole('alert')).toHaveTextContent('Invalid email format');
```

## Running the Tests

```bash
# Run all integration tests
npm test tests/integration

# Run specific test file
npm test tests/integration/button-testid.test.tsx

# Run with coverage
npm test tests/integration -- --coverage

# Run in watch mode
npm test tests/integration -- --watch
```

## Best Practices

### Do ✅
- Use consistent testId naming patterns
- Test user workflows, not implementation details
- Include accessibility testing in integration tests
- Test error states and edge cases
- Use descriptive test names that explain the scenario
- Group related tests in describe blocks
- Test keyboard navigation and screen reader compatibility

### Don't ❌
- Rely solely on testId - combine with role-based queries
- Test internal component state directly
- Write overly complex tests that are hard to maintain
- Ignore accessibility when testing interactions
- Use generic testId names like "button1", "input2"
- Test styling details in integration tests

## Integration with Storybook

These tests complement the Storybook stories that demonstrate testId usage:
- `Button.testid-examples.stories.tsx` - Button testing examples
- `Input.testid-examples.stories.tsx` - Input testing examples

The stories provide visual documentation while these tests provide automated verification.

## Accessibility Compliance

All integration tests verify that components maintain accessibility when:
- Using testId attributes
- Interacting via keyboard
- Working with screen readers
- Handling validation states
- Managing focus

This ensures that testing infrastructure doesn't compromise the user experience for people using assistive technologies.