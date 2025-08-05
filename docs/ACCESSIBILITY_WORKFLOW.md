# Accessibility Development Workflow

This guide outlines the accessibility development workflow for contributors to the Zelda UI component library.

## 🔄 Development Cycle

### 1. Design Phase
- [ ] Review designs for accessibility considerations
- [ ] Ensure color contrast meets WCAG standards
- [ ] Plan keyboard navigation flow
- [ ] Identify required ARIA attributes

### 2. Development Phase
- [ ] Use semantic HTML elements
- [ ] Implement keyboard navigation
- [ ] Add appropriate ARIA attributes
- [ ] Test with screen readers during development

### 3. Testing Phase
- [ ] Run accessibility linting: `pnpm lint:a11y`
- [ ] Execute accessibility tests: `pnpm test:a11y`
- [ ] Manual testing with keyboard only
- [ ] Screen reader testing

### 4. Documentation Phase
- [ ] Add accessibility stories to Storybook
- [ ] Document keyboard shortcuts
- [ ] Include ARIA attribute examples
- [ ] Add testing examples

## 🛠️ Tools and Commands

### Linting
```bash
# Check all accessibility rules
pnpm lint:a11y

# Fix auto-fixable accessibility issues
pnpm lint:fix
```

### Testing
```bash
# Run all accessibility tests
pnpm test:a11y

# Run specific component accessibility tests
pnpm test packages/core/src/Button/Button.a11y.test.tsx
```

### Storybook
```bash
# Start Storybook with accessibility addon
pnpm storybook
```

## 📝 Component Checklist

When creating or updating components, ensure:

### HTML Structure
- [ ] Uses semantic HTML elements
- [ ] Proper heading hierarchy
- [ ] Form labels are associated correctly
- [ ] Lists use proper markup

### Keyboard Navigation
- [ ] All interactive elements are focusable
- [ ] Tab order is logical
- [ ] Escape key closes modals/dropdowns
- [ ] Arrow keys navigate within components
- [ ] Enter/Space activate buttons

### ARIA Attributes
- [ ] `aria-label` for elements without visible text
- [ ] `aria-describedby` for additional descriptions
- [ ] `aria-expanded` for collapsible content
- [ ] `aria-selected` for selectable items
- [ ] `role` attributes when semantic HTML isn't sufficient

### Visual Design
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Text is readable at 200% zoom
- [ ] Touch targets are at least 44px

### Testing
- [ ] Automated tests pass
- [ ] Manual keyboard testing
- [ ] Screen reader testing
- [ ] Color blindness testing

## 🧪 Testing Utilities

### Basic Accessibility Test
```typescript
import { runAccessibilityTestSuite } from '@zelda/core/utils';

it('should be accessible', async () => {
  await runAccessibilityTestSuite(<YourComponent />);
});
```

### Keyboard Navigation Test
```typescript
import { testKeyboardNavigation } from '@zelda/core/utils';

it('should handle keyboard navigation', async () => {
  await testKeyboardNavigation(<YourComponent />, {
    expectedFocusableElements: 3,
  });
});
```

### ARIA Attributes Test
```typescript
import { testAriaAttributes } from '@zelda/core/utils';

it('should have correct ARIA attributes', () => {
  const { container } = render(<YourComponent />);
  testAriaAttributes(container, {
    'button': 'Submit form',
    '[role="dialog"]': /dialog title/i,
  });
});
```

## 📋 Code Review Checklist

### For Reviewers
- [ ] Component uses semantic HTML
- [ ] Keyboard navigation is implemented
- [ ] ARIA attributes are appropriate
- [ ] Focus management is correct
- [ ] Tests cover accessibility scenarios
- [ ] Storybook stories include accessibility examples

### For Authors
- [ ] All accessibility tests pass
- [ ] Manual testing completed
- [ ] Documentation updated
- [ ] Storybook stories added
- [ ] Breaking changes documented

## 🚨 Common Issues

### Missing Focus Management
```typescript
// ❌ Bad - No focus management
const Modal = ({ isOpen, onClose }) => {
  return isOpen ? <div>Modal content</div> : null;
};

// ✅ Good - Proper focus management
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);
  
  return isOpen ? (
    <div ref={modalRef} role="dialog" tabIndex={-1}>
      Modal content
    </div>
  ) : null;
};
```

### Incorrect ARIA Usage
```typescript
// ❌ Bad - Redundant ARIA
<button aria-label="Submit" role="button">Submit</button>

// ✅ Good - Appropriate ARIA
<button>Submit</button>

// ✅ Good - ARIA when needed
<button aria-label="Close dialog">×</button>
```

### Missing Keyboard Support
```typescript
// ❌ Bad - No keyboard support
<div onClick={handleClick}>Clickable</div>

// ✅ Good - Full keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Clickable
</div>
```

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [Testing Library Accessibility](https://testing-library.com/docs/guide-accessibility/)

## 🆘 Getting Help

1. Check existing accessibility stories in Storybook
2. Review similar components for patterns
3. Consult WCAG guidelines for specific requirements
4. Test with actual assistive technologies
5. Ask for accessibility review from team members