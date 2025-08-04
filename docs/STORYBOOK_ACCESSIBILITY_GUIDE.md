# Storybook Accessibility Documentation Guide

## Overview

This guide provides comprehensive accessibility documentation patterns for Zelda UI component stories. Each component story should include accessibility examples that demonstrate keyboard navigation, ARIA attributes, and screen reader optimizations.

## Accessibility Story Structure

### Required Accessibility Stories

Each component should include these accessibility-focused stories:

1. **AccessibilityFeatures** - Comprehensive accessibility demonstration
2. **KeyboardNavigation** - Keyboard interaction patterns
3. **ScreenReaderSupport** - Screen reader optimizations
4. **ARIAAttributes** - ARIA attribute usage examples

### Story Template

```tsx
export const AccessibilityFeatures: Story = {
  render: () => {
    // Interactive state management
    const [state, setState] = useState(initialState);
    
    return (
      <div className="space-y-8">
        {/* Introduction */}
        <div className="p-4 border rounded-lg bg-blue-50">
          <Typography variant="h4" className="mb-3">
            🔍 Accessibility Features Demo
          </Typography>
          <Typography variant="body2" className="mb-4">
            Comprehensive accessibility demonstration for [Component Name].
          </Typography>
        </div>

        {/* Keyboard Navigation */}
        <AccessibilitySection title="⌨️ Keyboard Navigation">
          {/* Interactive examples */}
        </AccessibilitySection>

        {/* ARIA Attributes */}
        <AccessibilitySection title="🏷️ ARIA Attributes">
          {/* ARIA examples */}
        </AccessibilitySection>

        {/* Screen Reader Support */}
        <AccessibilitySection title="📢 Screen Reader Support">
          {/* Screen reader examples */}
        </AccessibilitySection>

        {/* Focus Management */}
        <AccessibilitySection title="🎯 Focus Management">
          {/* Focus examples */}
        </AccessibilitySection>

        {/* Testing Examples */}
        <AccessibilitySection title="🧪 Testing Examples">
          {/* Testing patterns */}
        </AccessibilitySection>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Comprehensive Accessibility Features

[Detailed documentation of accessibility features]

### Keyboard Navigation Patterns
- **Key combinations and their actions**

### ARIA Attributes Usage
- **Specific ARIA attributes and their purposes**

### Screen Reader Optimizations
- **How the component works with screen readers**

### Testing Patterns
\`\`\`tsx
// Testing examples
\`\`\`
        `,
      },
    },
  },
};
```

## Keyboard Navigation Patterns

### Universal Keyboard Shortcuts

| Key Combination | Action | Usage |
|----------------|--------|-------|
| `Tab` | Move to next focusable element | Navigation between interactive elements |
| `Shift + Tab` | Move to previous focusable element | Reverse navigation |
| `Enter` | Activate buttons, links, form controls | Primary activation |
| `Space` | Activate buttons, checkboxes | Alternative activation |
| `Escape` | Close modals, dropdowns, overlays | Cancel/close actions |
| `Arrow Keys` | Navigate within components | Component-specific navigation |

### Component-Specific Patterns

#### Button
```tsx
// Keyboard navigation example
<div className="p-4 bg-green-50 border border-green-200 rounded">
  <Typography variant="body2" className="text-green-800 mb-3">
    <strong>Try this:</strong> Use Tab to navigate between buttons, 
    Enter or Space to activate them.
  </Typography>
  <div className="flex gap-3 flex-wrap">
    <Button variant="primary" testId="keyboard-primary">
      Primary Action
    </Button>
    <Button variant="default" testId="keyboard-secondary">
      Secondary Action
    </Button>
  </div>
</div>
```

#### Modal
```tsx
// Modal keyboard patterns
const keyboardShortcuts = [
  { key: 'Escape', action: 'Close modal immediately' },
  { key: 'Tab', action: 'Move to next focusable element' },
  { key: 'Shift + Tab', action: 'Move to previous focusable element' },
  { key: 'Enter', action: 'Activate focused button' },
];

return (
  <div className="space-y-2">
    {keyboardShortcuts.map(({ key, action }) => (
      <div key={key} className="flex justify-between items-center p-2 bg-gray-50 rounded">
        <span className="text-sm">{action}</span>
        <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">
          {key}
        </kbd>
      </div>
    ))}
  </div>
);
```

#### Form Controls
```tsx
// Form keyboard navigation
<div className="space-y-3">
  <Input
    label="First Input"
    placeholder="Tab to navigate here first"
    testId="keyboard-first"
  />
  <Input
    label="Second Input"
    placeholder="Then tab here"
    testId="keyboard-second"
  />
  <Select
    label="Select Option"
    options={options}
    testId="keyboard-select"
  />
</div>
```

## ARIA Attributes Reference

### Essential ARIA Attributes

#### aria-label
```tsx
// Provides accessible name when visual text isn't sufficient
<Button
  variant="destructive"
  aria-label="Delete user account permanently"
  testId="delete-account"
>
  Delete
</Button>
```

#### aria-describedby
```tsx
// Links to additional descriptive content
<Input
  label="Password"
  type="password"
  aria-describedby="password-requirements"
  testId="password-input"
/>
<Typography
  variant="body2"
  id="password-requirements"
  className="text-gray-600"
>
  Must be at least 8 characters with numbers and symbols
</Typography>
```

#### aria-expanded
```tsx
// Indicates expandable content state
<Button
  variant="default"
  onClick={() => setExpanded(!expanded)}
  aria-expanded={expanded}
  aria-controls="expandable-content"
  testId="expand-button"
>
  {expanded ? 'Hide' : 'Show'} Options ▼
</Button>
```

#### aria-live
```tsx
// Announces dynamic content changes
<div
  aria-live="polite"
  aria-atomic="true"
  className="text-sm text-blue-600"
>
  {statusMessage}
</div>
```

#### role attributes
```tsx
// Defines semantic meaning
<div role="group" aria-labelledby="action-group-label">
  <Typography variant="body2" id="action-group-label" className="sr-only">
    File actions
  </Typography>
  <Button aria-label="Save file">Save</Button>
  <Button aria-label="Delete file">Delete</Button>
</div>
```

## Screen Reader Optimizations

### Context-Rich Labels
```tsx
// Bad: Ambiguous labels
<Button variant="text">Edit</Button>

// Good: Clear context
<Button variant="text" aria-label="Edit user profile settings">
  Edit
</Button>
```

### Icon Button Labels
```tsx
// Icon buttons need accessible names
<Button
  variant="default"
  icon={SearchIcon}
  aria-label="Search through inventory items"
  testId="search-icon"
/>
```

### Status Announcements
```tsx
// Dynamic status updates
const [announcement, setAnnouncement] = useState('');

const handleAction = () => {
  setAnnouncement('Action completed successfully');
  setTimeout(() => setAnnouncement(''), 3000);
};

return (
  <>
    <Button onClick={handleAction}>Perform Action</Button>
    <div aria-live="assertive" aria-atomic="true" className="sr-only">
      {announcement}
    </div>
  </>
);
```

### Form Field Associations
```tsx
// Proper label associations
<Input
  label="Hero Name"
  placeholder="Enter your hero name"
  aria-describedby="hero-name-help"
  required
  aria-required="true"
  testId="hero-name-input"
/>
<Typography
  variant="body2"
  id="hero-name-help"
  className="text-gray-600"
>
  Choose a unique name for your character (3-20 characters)
</Typography>
```

## Focus Management Patterns

### Focus Indicators
```tsx
// Clear focus indicators for all interactive elements
<div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
  <Typography variant="body2" className="text-yellow-800 mb-3">
    <strong>Focus Indicators:</strong> All elements have clear focus 
    states for keyboard users.
  </Typography>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    <Button variant="primary">Focus me</Button>
    <Button variant="default">Then me</Button>
    <Button variant="dashed">Then me</Button>
  </div>
</div>
```

### Focus Trap (Modals)
```tsx
// Focus management in modals
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Focus Trap Demo"
>
  <div className="space-y-3">
    <Input label="First Input" testId="focus-first" />
    <Input label="Second Input" testId="focus-second" />
    <Button variant="primary">Submit</Button>
  </div>
</Modal>
```

### Skip Links
```tsx
// Skip navigation for screen readers
<Button 
  variant="link" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-white p-2 border"
>
  Skip to main content
</Button>
```

## Testing Patterns

### Automated Accessibility Testing
```tsx
// jest-axe testing
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Component has no accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Keyboard Testing
```tsx
// Keyboard interaction testing
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Component is keyboard accessible', async () => {
  const user = userEvent.setup();
  render(<Component />);
  
  const button = screen.getByRole('button', { name: 'Submit' });
  
  // Test keyboard navigation
  await user.tab();
  expect(button).toHaveFocus();
  
  // Test keyboard activation
  await user.keyboard('{Enter}');
  // Assert expected behavior
});
```

### Screen Reader Testing
```tsx
// Screen reader compatibility testing
test('Component is screen reader accessible', () => {
  render(<Component />);
  
  // Test semantic elements
  const button = screen.getByRole('button', { name: 'Submit Form' });
  expect(button).toBeInTheDocument();
  
  // Test ARIA attributes
  expect(button).toHaveAttribute('aria-label', 'Submit contact form');
  
  // Test form labels
  const input = screen.getByLabelText('Email Address');
  expect(input).toBeInTheDocument();
});
```

### TestId Patterns
```tsx
// Consistent testId naming
<div className="space-y-3">
  <Button testId="test-primary-action" variant="primary">
    Primary Action
  </Button>
  <Button testId="test-secondary-action" variant="default">
    Secondary Action
  </Button>
  <Input testId="test-email-input" label="Email" type="email" />
</div>

// Usage in tests
screen.getByTestId('test-primary-action');
screen.getByTestId('test-email-input');
```

## Documentation Standards

### Story Parameters
```tsx
parameters: {
  docs: {
    description: {
      story: `
## Comprehensive Accessibility Features

This story demonstrates all accessibility features:

### Keyboard Navigation Patterns
- **Tab/Shift+Tab** - Navigate between elements
- **Enter/Space** - Activate buttons
- **Escape** - Close overlays

### ARIA Attributes Usage
- **aria-label** - Accessible names
- **aria-describedby** - Additional descriptions
- **aria-expanded** - Expandable content state

### Screen Reader Support
- Semantic HTML elements
- Proper labeling and descriptions
- Status announcements
- Clear focus management

### Testing Patterns
\`\`\`tsx
// Example testing code
screen.getByRole('button', { name: 'Submit' });
expect(element).toHaveAttribute('aria-label', 'Close dialog');
\`\`\`
      `,
    },
  },
},
```

## Component-Specific Guidelines

### Button Components
- Always include clear, descriptive text or aria-label
- Support both Enter and Space key activation
- Provide loading and disabled state announcements
- Use proper button vs link semantics

### Form Components
- Associate labels with form controls
- Provide validation feedback via aria-invalid
- Use aria-required for required fields
- Link help text with aria-describedby

### Modal Components
- Implement focus trap and restoration
- Use proper dialog semantics (role="dialog")
- Support Escape key for closing
- Prevent background scroll

### Navigation Components
- Provide skip links for screen readers
- Use proper heading hierarchy
- Implement ARIA navigation landmarks
- Support keyboard navigation patterns

## Best Practices Checklist

### For Every Component Story
- [ ] Includes comprehensive accessibility examples
- [ ] Demonstrates keyboard navigation patterns
- [ ] Shows proper ARIA attribute usage
- [ ] Includes screen reader optimizations
- [ ] Provides testing examples with testId attributes
- [ ] Documents accessibility features in story parameters

### For Interactive Demos
- [ ] Includes instructions for keyboard users
- [ ] Provides visual feedback for interactions
- [ ] Announces important state changes
- [ ] Maintains logical focus order
- [ ] Supports high contrast mode

### For Documentation
- [ ] Explains accessibility features clearly
- [ ] Provides code examples for testing
- [ ] References WCAG guidelines where applicable
- [ ] Includes real-world usage patterns
- [ ] Documents known limitations or considerations

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Accessibility Resources](https://webaim.org/)
- [axe-core Testing Library](https://github.com/dequelabs/axe-core)
- [Testing Library Accessibility](https://testing-library.com/docs/guide-accessibility/)