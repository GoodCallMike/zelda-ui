# Zelda UI Accessibility Guide

## Overview

The Zelda UI component library is designed with accessibility as a core principle, ensuring WCAG 2.1 AA compliance and excellent user experience for all users, including those using assistive technologies.

## Accessibility Standards

### WCAG 2.1 AA Compliance

All components meet or exceed WCAG 2.1 AA standards:

- **Perceivable**: Information is presentable in ways users can perceive
- **Operable**: Interface components are operable by all users
- **Understandable**: Information and UI operation are understandable
- **Robust**: Content is robust enough for various assistive technologies

### Supported Assistive Technologies

- Screen readers (NVDA, JAWS, VoiceOver, TalkBack)
- Keyboard navigation
- Voice control software
- High contrast mode
- Screen magnification tools

## Component Accessibility Features

### Universal Features

All components include:

- **Semantic HTML**: Proper HTML elements and structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Support**: Proper ARIA attributes and announcements
- **High Contrast**: Support for high contrast mode
- **Text Scaling**: Readable at 200% zoom level
- **Testing Support**: Built-in testId attributes

### Component-Specific Features

#### Button
- Semantic `<button>` elements
- Clear focus indicators
- Proper ARIA labeling
- Keyboard activation (Enter/Space)
- Loading and disabled state announcements

#### Input
- Label association with `<label>` elements
- ARIA attributes for validation states
- Character count announcements
- Error message associations
- Placeholder text accessibility

#### Modal
- Focus trap within modal
- Focus restoration on close
- Proper dialog semantics
- Escape key handling
- Background scroll prevention

#### Select
- Combobox ARIA pattern
- Keyboard navigation (Arrow keys)
- Option selection announcements
- Search functionality
- Proper labeling

#### Checkbox/Radio
- Semantic form controls
- Clear state announcements
- Keyboard navigation
- Group labeling
- Mixed state support

## Keyboard Navigation

### Universal Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Move to next focusable element |
| `Shift + Tab` | Move to previous focusable element |
| `Enter` | Activate buttons, links, and form controls |
| `Space` | Activate buttons and checkboxes |
| `Escape` | Close modals, dropdowns, and overlays |
| `Arrow Keys` | Navigate within components (menus, tabs, etc.) |

### Component-Specific Navigation

#### Modal
- `Escape` - Close modal
- `Tab` - Cycle through modal elements
- Focus trapped within modal

#### Select/Dropdown
- `Arrow Up/Down` - Navigate options
- `Enter/Space` - Select option
- `Escape` - Close dropdown
- `Home/End` - First/last option

#### Form Controls
- `Tab` - Move between form fields
- `Arrow Keys` - Navigate radio groups
- `Space` - Toggle checkboxes

## ARIA Attributes Reference

### Common ARIA Attributes

| Attribute | Purpose | Usage |
|-----------|---------|-------|
| `aria-label` | Accessible name | When visible label isn't sufficient |
| `aria-labelledby` | References labeling element | Links to heading or label |
| `aria-describedby` | References description | Links to help text or errors |
| `aria-expanded` | Expansion state | For collapsible elements |
| `aria-selected` | Selection state | For selectable items |
| `aria-checked` | Checked state | For checkboxes and radio buttons |
| `aria-disabled` | Disabled state | For disabled elements |
| `aria-invalid` | Validation state | For form validation |
| `aria-required` | Required field | For mandatory form fields |
| `aria-live` | Live region | For dynamic content updates |
| `role` | Element purpose | Defines semantic meaning |

### Component-Specific ARIA

#### Modal
```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
```

#### Button
```tsx
<button
  aria-label="Close dialog"
  aria-expanded="false"
  aria-haspopup="menu"
>
```

#### Input
```tsx
<input
  aria-describedby="help-text error-message"
  aria-required="true"
  aria-invalid="false"
/>
```

## Testing Accessibility

### Automated Testing

#### Using jest-axe

```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Component has no accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

#### Using @testing-library/jest-dom

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Button is accessible', async () => {
  const user = userEvent.setup();
  render(<Button>Click me</Button>);
  
  const button = screen.getByRole('button', { name: 'Click me' });
  expect(button).toBeInTheDocument();
  
  // Test keyboard activation
  await user.tab();
  expect(button).toHaveFocus();
  
  await user.keyboard('{Enter}');
  // Assert expected behavior
});
```

### Manual Testing

#### Keyboard Testing Checklist

- [ ] All interactive elements are reachable via keyboard
- [ ] Tab order is logical and intuitive
- [ ] Focus indicators are clearly visible
- [ ] All functionality available via mouse is also available via keyboard
- [ ] No keyboard traps (except intentional ones like modals)

#### Screen Reader Testing Checklist

- [ ] All content is announced properly
- [ ] Interactive elements have clear labels
- [ ] Form fields have associated labels
- [ ] Error messages are announced
- [ ] Dynamic content changes are announced
- [ ] Navigation landmarks are present

#### Visual Testing Checklist

- [ ] Text is readable at 200% zoom
- [ ] Focus indicators are visible in high contrast mode
- [ ] Color is not the only way information is conveyed
- [ ] Sufficient color contrast ratios (4.5:1 for normal text)

## Best Practices

### Do's

#### General
- Use semantic HTML elements
- Provide clear, descriptive labels
- Implement proper focus management
- Test with keyboard navigation
- Test with screen readers
- Include ARIA attributes when needed
- Provide alternative text for images

#### Forms
- Associate labels with form controls
- Group related form controls
- Provide clear error messages
- Indicate required fields
- Use fieldsets for radio button groups

#### Interactive Elements
- Use buttons for actions, links for navigation
- Provide clear focus indicators
- Ensure sufficient click/touch targets (44px minimum)
- Provide feedback for user actions

### Don'ts

#### General
- Don't rely on color alone to convey information
- Don't remove focus indicators
- Don't use placeholder text as labels
- Don't create keyboard traps (except modals)
- Don't use generic link text like "click here"

#### ARIA
- Don't overuse ARIA attributes
- Don't change semantic meaning unnecessarily
- Don't use ARIA to fix bad HTML
- Don't forget to test ARIA implementations

## Dark Mode Accessibility

### High Contrast Support

The Zelda UI library supports high contrast mode in both light and dark themes:

```css
@media (prefers-contrast: high) {
  .button {
    border-width: 2px;
    outline-width: 3px;
  }
}
```

### Color Contrast

All color combinations meet WCAG AA contrast requirements:

- **Normal text**: 4.5:1 contrast ratio
- **Large text**: 3:1 contrast ratio
- **Interactive elements**: 3:1 contrast ratio

### Reduced Motion

Respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .modal {
    animation: none;
    transition: none;
  }
}
```

## Resources

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Accessibility Resources](https://webaim.org/)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

### Screen Readers
- [NVDA (Windows)](https://www.nvaccess.org/)
- [JAWS (Windows)](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver (macOS/iOS)](https://www.apple.com/accessibility/mac/vision/)
- [TalkBack (Android)](https://support.google.com/accessibility/android/answer/6283677)

## Getting Help

If you encounter accessibility issues or have questions:

1. Check component documentation for accessibility examples
2. Review this guide for best practices
3. Test with automated tools like axe
4. Test manually with keyboard and screen readers
5. Open an issue in the repository with detailed information

Remember: Accessibility is not a feature to be added later—it's a fundamental aspect of good user experience design.