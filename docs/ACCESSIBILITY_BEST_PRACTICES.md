# Accessibility Best Practices

This guide provides comprehensive accessibility best practices for developers using the Zelda UI component library.

## 🎯 Quick Start

### Essential Principles
1. **Semantic HTML** - Use proper HTML elements for their intended purpose
2. **Keyboard Navigation** - Ensure all interactive elements are keyboard accessible
3. **Screen Reader Support** - Provide meaningful labels and descriptions
4. **Focus Management** - Maintain logical focus order and visible focus indicators
5. **Color Contrast** - Ensure sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text)

## 🛠️ Development Workflow

### Linting
The project includes accessibility linting rules that will catch common issues:

```bash
pnpm lint
```

### Testing
Use our accessibility testing utilities:

```typescript
import { runAccessibilityTestSuite } from '@zelda/core/utils';

// Comprehensive test
await runAccessibilityTestSuite(<YourComponent />, {
  expectedFocusableElements: 2,
  ariaAttributes: {
    'button': 'Submit form',
  },
});
```

## 📋 Component Guidelines

### Forms
```tsx
// ✅ Good - Proper labeling and structure
<Input 
  label="Email Address"
  id="email"
  name="email"
  type="email"
  required
  aria-describedby="email-error"
/>
<div id="email-error" role="alert">
  Please enter a valid email address
</div>

// ❌ Bad - Missing labels and structure
<input placeholder="Email" />
```

### Buttons
```tsx
// ✅ Good - Clear purpose and state
<Button 
  variant="primary"
  disabled={isLoading}
  aria-label={isLoading ? 'Saving...' : 'Save document'}
>
  {isLoading ? 'Saving...' : 'Save'}
</Button>

// ❌ Bad - Unclear purpose
<Button>Click here</Button>
```

### Interactive Elements
```tsx
// ✅ Good - Keyboard accessible with proper ARIA
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  aria-label="Close dialog"
>
  ×
</div>

// ❌ Bad - Not keyboard accessible
<div onClick={handleClick}>×</div>
```

## 🔍 Testing Checklist

### Manual Testing
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (VoiceOver on macOS, NVDA on Windows)
- [ ] Verify color contrast meets WCAG standards
- [ ] Test with keyboard only (no mouse)
- [ ] Check focus indicators are visible

### Automated Testing
- [ ] Run axe-core tests on all components
- [ ] Test keyboard navigation programmatically
- [ ] Verify ARIA attributes are correct
- [ ] Test with different viewport sizes

## 🎨 Design Considerations

### Color and Contrast
- Use color as enhancement, not the only way to convey information
- Ensure text has sufficient contrast against backgrounds
- Test with color blindness simulators

### Typography
- Use relative units (rem, em) for scalable text
- Maintain readable line heights (1.4-1.6)
- Limit line length to 45-75 characters

### Layout
- Provide sufficient touch targets (44px minimum)
- Maintain consistent navigation patterns
- Use logical heading hierarchy (h1 → h2 → h3)

## 🚀 Advanced Patterns

### Live Regions
```tsx
const [message, setMessage] = useState('');

return (
  <div>
    <Button onClick={() => setMessage('Form saved successfully!')}>
      Save
    </Button>
    <div aria-live="polite" aria-atomic="true">
      {message}
    </div>
  </div>
);
```

### Focus Management
```tsx
const dialogRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (isOpen) {
    dialogRef.current?.focus();
  }
}, [isOpen]);

return (
  <div
    ref={dialogRef}
    role="dialog"
    aria-modal="true"
    tabIndex={-1}
  >
    {/* Dialog content */}
  </div>
);
```

### Skip Links
```tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only"
>
  Skip to main content
</a>
```

## 📚 Resources

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension for accessibility testing
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Built-in Chrome accessibility audit

### Guidelines
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/)

### Testing
- [Testing Library Accessibility](https://testing-library.com/docs/guide-accessibility/)
- [jest-axe Documentation](https://github.com/nickcolley/jest-axe)

## 🆘 Common Issues and Solutions

### Issue: Focus not visible
**Solution**: Ensure focus indicators are not removed with CSS
```css
/* ❌ Bad */
button:focus { outline: none; }

/* ✅ Good */
button:focus-visible { 
  outline: 2px solid blue; 
  outline-offset: 2px; 
}
```

### Issue: Screen reader not announcing changes
**Solution**: Use live regions for dynamic content
```tsx
<div aria-live="polite" id="status">
  {statusMessage}
</div>
```

### Issue: Form validation not accessible
**Solution**: Associate error messages with form fields
```tsx
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

## 📞 Support

For accessibility questions or issues:
1. Check the [Storybook documentation](https://goodcallmike.github.io/zelda-ui/)
2. Review component accessibility stories
3. Run automated tests with our utilities
4. Consult WCAG guidelines for complex scenarios