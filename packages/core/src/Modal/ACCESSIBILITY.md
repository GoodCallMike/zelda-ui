# Modal Accessibility Guide

## Overview

The Modal component is designed with comprehensive accessibility features to ensure WCAG 2.1 AA compliance and excellent user experience for all users, including those using assistive technologies.

## ARIA Attributes

### Core ARIA Implementation

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Modal Title</h2>
  <div id="modal-description">Modal content...</div>
</div>
```

### Attribute Reference

| Attribute | Purpose | Implementation |
|-----------|---------|----------------|
| `role="dialog"` | Identifies the modal as a dialog | Applied to modal container |
| `aria-modal="true"` | Indicates modal behavior | Applied to modal container |
| `aria-labelledby` | References the modal title | Points to title element ID |
| `aria-describedby` | References modal description | Points to content element ID |
| `aria-label` | Provides accessible name | Used for backdrop and close button |
| `tabindex="-1"` | Enables programmatic focus | Applied to modal container |

## Keyboard Navigation

### Supported Key Interactions

| Key | Action | Notes |
|-----|--------|-------|
| `Escape` | Close modal | Can be disabled for critical confirmations |
| `Tab` | Move to next focusable element | Cycles within modal |
| `Shift + Tab` | Move to previous focusable element | Cycles within modal |
| `Enter` | Activate focused element | Buttons, links, form controls |
| `Space` | Activate focused element | Buttons, checkboxes |
| `Arrow Keys` | Navigate within controls | Select options, radio groups |

### Focus Management

#### Focus Trap Implementation

```tsx
// Focus is trapped within modal boundaries
const focusableElements = modal.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

// Handle Tab key to cycle focus
const handleTab = (e: KeyboardEvent) => {
  if (e.key === 'Tab') {
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
};
```

#### Focus Restoration

```tsx
// Store reference to trigger element
const triggerElement = document.activeElement;

// Restore focus when modal closes
useEffect(() => {
  return () => {
    if (triggerElement && typeof triggerElement.focus === 'function') {
      triggerElement.focus();
    }
  };
}, []);
```

## Screen Reader Support

### Semantic Structure

```tsx
<div role="dialog" aria-modal="true">
  <header>
    <h2 id="modal-title">Modal Title</h2>
    <button aria-label="Close modal">×</button>
  </header>
  <main id="modal-content">
    <p>Modal content with proper semantic structure...</p>
  </main>
  <footer>
    <button>Cancel</button>
    <button>Confirm</button>
  </footer>
</div>
```

### Announcements

Screen readers automatically announce:
- Modal opening: "Dialog opened"
- Modal title and content
- Modal closing: "Dialog closed"
- Focus changes within modal

## Testing Accessibility

### Automated Testing

```tsx
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Modal has no accessibility violations', async () => {
  const { container } = render(
    <Modal open={true} title="Test Modal">
      <p>Modal content</p>
    </Modal>
  );
  
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual Testing Checklist

#### Keyboard Navigation
- [ ] Modal opens with keyboard trigger
- [ ] Focus moves to modal when opened
- [ ] Tab cycles through modal elements only
- [ ] Escape closes modal
- [ ] Focus returns to trigger on close

#### Screen Reader Testing
- [ ] Modal title is announced
- [ ] Modal content is readable
- [ ] Interactive elements have clear labels
- [ ] Modal state changes are announced

#### Visual Testing
- [ ] Focus indicators are visible
- [ ] High contrast mode works
- [ ] Text is readable at 200% zoom
- [ ] Color is not the only indicator

## Common Patterns

### Confirmation Dialog

```tsx
<Modal
  open={open}
  onClose={onClose}
  title="Confirm Action"
  size="small"
  maskClosable={false} // Prevent accidental closure
>
  <p>Are you sure you want to delete this item?</p>
  <div>
    <Button onClick={onClose}>Cancel</Button>
    <Button variant="destructive" onClick={onConfirm}>
      Delete
    </Button>
  </div>
</Modal>
```

### Form Dialog

```tsx
<Modal
  open={open}
  onClose={onClose}
  title="Edit Profile"
  size="medium"
>
  <form onSubmit={handleSubmit}>
    <Input
      label="Name"
      required
      aria-describedby="name-help"
    />
    <div id="name-help">Enter your full name</div>
    
    <Select
      label="Role"
      required
      options={roleOptions}
    />
    
    <div>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
      <Button type="submit" variant="primary">
        Save Changes
      </Button>
    </div>
  </form>
</Modal>
```

### Information Dialog

```tsx
<Modal
  open={open}
  onClose={onClose}
  title="System Status"
  size="large"
>
  <div role="status" aria-live="polite">
    <h3>Current Status: Online</h3>
    <p>All systems are operational.</p>
  </div>
  
  <Button onClick={onClose}>
    Close
  </Button>
</Modal>
```

## Best Practices

### Do's
- Always provide a clear, descriptive title
- Use semantic HTML structure
- Implement proper focus management
- Test with keyboard navigation
- Test with screen readers
- Provide clear action buttons
- Use appropriate modal sizes

### Don'ts
- Don't stack multiple modals
- Don't use modals for simple notifications
- Don't forget to handle focus restoration
- Don't rely on color alone for information
- Don't make modals too complex
- Don't ignore keyboard users
- Don't skip accessibility testing

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide - Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)