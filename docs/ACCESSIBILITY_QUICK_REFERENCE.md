# Accessibility Quick Reference

## 🚀 Quick Commands

```bash
# Lint accessibility issues
pnpm lint:a11y

# Run accessibility tests
pnpm test:a11y

# Fix auto-fixable issues
pnpm lint:fix
```

## 🧪 Testing Utilities

```typescript
import { 
  quickA11yTest,
  runAccessibilityTestSuite,
  testKeyboardNavigation,
  testFormAccessibility 
} from '@zelda/core/utils';

// Quick test
await quickA11yTest(<Component />);

// Comprehensive test
await runAccessibilityTestSuite(<Component />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit' },
});
```

## ✅ Essential Checklist

### HTML Structure
- [ ] Use semantic HTML elements
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Form labels and fieldsets
- [ ] Alt text for images

### ARIA
- [ ] `aria-label` for unlabeled elements
- [ ] `aria-describedby` for additional context
- [ ] `role` attributes when needed
- [ ] `aria-live` for dynamic content

### Keyboard
- [ ] All interactive elements focusable
- [ ] Logical tab order
- [ ] Visible focus indicators
- [ ] Enter/Space key support

### Forms
- [ ] Labels associated with inputs
- [ ] Required fields marked
- [ ] Error messages linked
- [ ] Fieldsets for groups

## 🎨 Design Standards

### Color Contrast
- **Normal text**: 4.5:1 minimum
- **Large text**: 3:1 minimum
- **UI components**: 3:1 minimum

### Touch Targets
- **Minimum size**: 44px × 44px
- **Spacing**: 8px between targets

### Typography
- **Line height**: 1.4-1.6
- **Line length**: 45-75 characters
- **Font size**: 16px minimum

## 🔧 Common Patterns

### Button
```tsx
<Button
  type="submit"
  disabled={isLoading}
  aria-label={isLoading ? 'Saving...' : 'Save document'}
>
  {isLoading ? 'Saving...' : 'Save'}
</Button>
```

### Input
```tsx
<Input
  label="Email"
  id="email"
  required
  aria-describedby="email-error"
/>
{error && (
  <div id="email-error" role="alert">
    {error}
  </div>
)}
```

### Modal
```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  tabIndex={-1}
>
  <h2 id="modal-title">Title</h2>
  {/* Content */}
</div>
```

### Live Region
```tsx
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

## 🚫 Common Mistakes

### ❌ Don't
- Remove focus outlines without replacement
- Use placeholder as label
- Rely only on color for information
- Use `div`/`span` for interactive elements
- Skip heading levels
- Use `tabindex` > 0

### ✅ Do
- Provide alternative text
- Use semantic HTML first
- Test with keyboard only
- Test with screen reader
- Maintain focus management
- Use proper ARIA attributes

## 📱 Mobile Considerations

- Touch targets ≥ 44px
- Sufficient spacing between elements
- Readable text at 200% zoom
- Landscape/portrait orientation support
- Voice control compatibility

## 🛠️ Browser Testing

### Screen Readers
- **macOS**: VoiceOver (Cmd + F5)
- **Windows**: NVDA (free)
- **Chrome**: ChromeVox extension

### Tools
- axe DevTools (browser extension)
- Lighthouse accessibility audit
- WAVE Web Accessibility Evaluator
- Color contrast analyzers

## 📚 Resources

- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Guidelines](https://webaim.org/)
- [Zelda UI Storybook](https://goodcallmike.github.io/zelda-ui/)