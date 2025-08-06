# Accessibility Guide

Complete accessibility guide for the Zelda UI component library.

## 🚀 Quick Start

### Testing Utilities
```typescript
import { quickA11yTest, runAccessibilityTestSuite } from '@zelda/core/utils';

// Quick test
await quickA11yTest(<YourComponent />);

// Comprehensive test
await runAccessibilityTestSuite(<YourComponent />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit form' },
});
```

### Development Commands
```bash
pnpm lint:a11y    # Check accessibility rules
pnpm test:a11y    # Run accessibility tests
```

## 📋 Component Checklist

### HTML Structure
- [ ] Uses semantic HTML elements
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Form labels are associated correctly

### Keyboard Navigation
- [ ] All interactive elements are focusable
- [ ] Tab order is logical
- [ ] Escape key closes modals/dropdowns
- [ ] Enter/Space activate buttons

### ARIA Attributes
- [ ] `aria-label` for elements without visible text
- [ ] `aria-describedby` for additional descriptions
- [ ] `aria-expanded` for collapsible content
- [ ] `role` attributes when semantic HTML isn't sufficient

### Visual Design
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards (4.5:1)
- [ ] Text is readable at 200% zoom
- [ ] Touch targets are at least 44px

## 🧪 Testing Patterns

### Basic Testing
```tsx
// Automated accessibility test
test('Component is accessible', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// Keyboard navigation test
test('Component supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Component testId="test-component" />);
  
  await user.tab();
  expect(screen.getByTestId('test-component')).toHaveFocus();
  
  await user.keyboard('{Enter}');
  // Assert expected behavior
});

// ARIA attributes test
test('Component has proper ARIA attributes', () => {
  render(<Component aria-label="Test label" />);
  expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test label');
});
```

### Form Testing
```tsx
test('Form is accessible', () => {
  render(<Form />);
  
  // Test label association
  const input = screen.getByLabelText('Email Address');
  expect(input).toBeInTheDocument();
  
  // Test validation
  fireEvent.change(input, { target: { value: 'invalid' } });
  expect(input).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
});
```

## 🎯 Implementation Guidelines

### Semantic HTML First
```tsx
// ✅ Good - Semantic HTML
<button type="submit" disabled={isLoading}>
  {isLoading ? 'Saving...' : 'Save'}
</button>

// ❌ Bad - Non-semantic
<div onClick={handleSave}>Save</div>
```

### Proper Labeling
```tsx
// ✅ Good - Multiple labeling strategies
<Input
  label="Email Address"
  id="email"
  required
  aria-describedby="email-help email-error"
/>
<div id="email-help">We'll never share your email</div>
{error && (
  <div id="email-error" role="alert">{error}</div>
)}
```

### Focus Management
```tsx
// ✅ Good - Proper focus management
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else if (previousFocus.current) {
      previousFocus.current.focus();
    }
  }, [isOpen]);
  
  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {/* Modal content */}
    </div>
  );
};
```

### Live Regions for Dynamic Content
```tsx
const StatusMessage = ({ message, type = 'polite' }) => (
  <div
    aria-live={type}
    aria-atomic="true"
    className="sr-only"
  >
    {message}
  </div>
);
```

## 📚 Storybook Documentation

### Required Stories
Each component should include:

1. **Default** - Interactive playground
2. **Variants** - All visual variants
3. **AccessibilityFeatures** - Comprehensive accessibility demo
4. **Examples** - Real-world integration

### Accessibility Story Template
```tsx
export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Keyboard Navigation */}
      <div className="p-4 bg-green-50 border border-green-200 rounded">
        <Typography variant="body2" className="text-green-800 mb-3">
          <strong>Try this:</strong> Use Tab to navigate, Enter/Space to activate.
        </Typography>
        <div className="flex gap-3">
          <Button variant="primary" testId="keyboard-primary">
            Primary Action
          </Button>
          <Button variant="default" testId="keyboard-secondary">
            Secondary Action
          </Button>
        </div>
      </div>

      {/* ARIA Attributes */}
      <div className="space-y-3">
        <Typography variant="h4">ARIA Attributes</Typography>
        <Button
          variant="destructive"
          aria-label="Delete user account permanently"
          aria-describedby="delete-warning"
          testId="delete-account"
        >
          Delete
        </Button>
        <Typography variant="body2" id="delete-warning" className="text-red-600">
          ⚠️ This action cannot be undone
        </Typography>
      </div>

      {/* Testing Examples */}
      <div className="space-y-3">
        <Typography variant="h4">Testing Examples</Typography>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test accessibility
screen.getByTestId('keyboard-primary')
expect(element).toHaveAttribute('aria-label', 'Expected label')`}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Accessibility Features

### Keyboard Navigation
- **Tab/Shift+Tab** - Navigate between elements
- **Enter/Space** - Activate buttons
- **Escape** - Close overlays

### ARIA Attributes
- **aria-label** - Accessible names
- **aria-describedby** - Additional descriptions
- **role="alert"** - Error announcements

### Testing
\`\`\`tsx
// Basic accessibility test
await quickA11yTest(<Component />);

// Comprehensive test
await runAccessibilityTestSuite(<Component />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit form' },
});
\`\`\`
        `,
      },
    },
  },
};
```

## 🔧 Common Patterns

### Skip Links
```tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50"
>
  Skip to main content
</a>
```

### Accessible Data Tables
```tsx
<table role="table" aria-label="User data">
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {data.map((row, index) => (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.email}</td>
      </tr>
    ))}
  </tbody>
</table>
```

### Focus Trap (Modals)
```tsx
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;
      
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();
      
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
```

## 🆘 Common Issues & Solutions

### Issue: Focus not visible
```css
/* ❌ Bad */
button:focus { outline: none; }

/* ✅ Good */
button:focus-visible { 
  outline: 2px solid #0066cc; 
  outline-offset: 2px; 
}
```

### Issue: Screen reader not announcing changes
```tsx
// ✅ Solution: Use live regions
<div aria-live="polite" id="status">
  {statusMessage}
</div>
```

### Issue: Form validation not accessible
```tsx
// ✅ Solution: Associate errors with fields
<Input
  aria-invalid={hasError}
  aria-describedby={hasError ? 'error-message' : undefined}
/>
{hasError && (
  <div id="error-message" role="alert">
    {errorMessage}
  </div>
)}
```

## 📱 Mobile Accessibility

### Touch Targets
```css
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}
```

### Responsive Focus Management
```tsx
const useResponsiveFocus = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return { isMobile };
};
```

## 🔗 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Testing Library Accessibility](https://testing-library.com/docs/guide-accessibility/)