# Accessibility Developer Guide

A comprehensive guide for developers using the Zelda UI component library to build accessible applications.

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
pnpm add @zelda/core
```

### 2. Import Testing Utilities
```typescript
import { 
  runAccessibilityTestSuite,
  quickA11yTest,
  testKeyboardNavigation,
  testFormAccessibility 
} from '@zelda/core/utils';
```

### 3. Configure Your IDE
Add these VS Code extensions for better accessibility development:
- axe Accessibility Linter
- WAVE Evaluation Tool
- Color Oracle (color blindness simulator)

## 🛠️ Development Workflow

### Linting Integration
The project includes comprehensive accessibility linting rules. Run these commands during development:

```bash
# Check all accessibility rules
pnpm lint:a11y

# Fix auto-fixable accessibility issues
pnpm lint:fix

# Run accessibility tests
pnpm test:a11y
```

### Pre-commit Hooks
Accessibility checks are automatically run on every commit:
- Accessibility linting (`pnpm lint:a11y`)
- Accessibility tests (`pnpm test:a11y`)
- General linting (`pnpm lint`)
- Unit tests (`pnpm test:run`)

## 🧪 Testing Your Components

### Basic Accessibility Test
```typescript
import { quickA11yTest } from '@zelda/core/utils';

test('MyComponent is accessible', async () => {
  await quickA11yTest(<MyComponent />);
});
```

### Comprehensive Testing
```typescript
import { runAccessibilityTestSuite } from '@zelda/core/utils';

test('MyComponent comprehensive accessibility', async () => {
  await runAccessibilityTestSuite(<MyComponent />, {
    expectedFocusableElements: 2,
    ariaAttributes: {
      'button[type="submit"]': 'Submit form',
      'input[type="email"]': /email/i,
    },
    colorContrast: [
      { selector: '.primary-button', expectedRatio: 4.5 },
    ],
  });
});
```

### Form Testing
```typescript
import { testFormAccessibility } from '@zelda/core/utils';

test('Form accessibility', () => {
  const { container } = render(<MyForm />);
  
  testFormAccessibility({ container }, {
    requiredFields: ['#email', '#password'],
    errorMessages: {
      '#email': 'email-error',
      '#password': 'password-error',
    },
    fieldsets: ['Login Information'],
  });
});
```

### Keyboard Navigation Testing
```typescript
import { testKeyboardNavigation } from '@zelda/core/utils';

test('Keyboard navigation', async () => {
  await testKeyboardNavigation(<MyComponent />, {
    expectedFocusableElements: 3,
    testEscapeKey: true,
    testEnterKey: true,
    testSpaceKey: true,
  });
});
```

## 📋 Component Implementation Guidelines

### 1. Semantic HTML First
```tsx
// ✅ Good - Semantic HTML
<button type="submit" disabled={isLoading}>
  {isLoading ? 'Saving...' : 'Save'}
</button>

// ❌ Bad - Non-semantic
<div onClick={handleSave}>Save</div>
```

### 2. Proper Labeling
```tsx
// ✅ Good - Multiple labeling strategies
<Input
  label="Email Address"
  id="email"
  name="email"
  type="email"
  required
  aria-describedby="email-help email-error"
  placeholder="Enter your email"
/>
<div id="email-help">We'll never share your email</div>
{error && (
  <div id="email-error" role="alert">
    {error}
  </div>
)}

// ❌ Bad - Missing labels
<input placeholder="Email" />
```

### 3. Focus Management
```tsx
// ✅ Good - Proper focus management
const DialogComponent = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      dialogRef.current?.focus();
    } else if (previousFocus.current) {
      previousFocus.current.focus();
    }
  }, [isOpen]);
  
  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      tabIndex={-1}
    >
      <h2 id="dialog-title">Dialog Title</h2>
      {/* Dialog content */}
    </div>
  );
};
```

### 4. Keyboard Interactions
```tsx
// ✅ Good - Full keyboard support
const CustomButton = ({ onClick, children, ...props }) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(event);
    }
  };
  
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
};
```

### 5. Live Regions for Dynamic Content
```tsx
// ✅ Good - Announce changes to screen readers
const StatusMessage = ({ message, type = 'polite' }) => {
  return (
    <div
      aria-live={type}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
};

// Usage
const [status, setStatus] = useState('');

const handleSave = async () => {
  try {
    await saveData();
    setStatus('Data saved successfully');
  } catch (error) {
    setStatus('Error saving data');
  }
};

return (
  <>
    <button onClick={handleSave}>Save</button>
    <StatusMessage message={status} />
  </>
);
```

## 🎨 Design System Integration

### Color and Contrast
```tsx
// Use design tokens that meet WCAG standards
const theme = {
  colors: {
    primary: '#0066cc',      // 4.5:1 contrast on white
    secondary: '#6c757d',    // 4.5:1 contrast on white
    success: '#28a745',      // 3:1 contrast on white (large text)
    error: '#dc3545',        // 4.5:1 contrast on white
  },
};

// Test contrast in your components
test('Button has sufficient contrast', () => {
  const { container } = render(<Button variant="primary">Click me</Button>);
  
  testColorContrast(container, [
    { selector: '.btn-primary', expectedRatio: 4.5 },
  ]);
});
```

### Typography
```tsx
// ✅ Good - Scalable typography
const Text = styled.p`
  font-size: 1rem;        /* 16px base */
  line-height: 1.5;       /* 24px */
  max-width: 65ch;        /* Optimal reading length */
`;

// ✅ Good - Heading hierarchy
<main>
  <h1>Page Title</h1>
  <section>
    <h2>Section Title</h2>
    <h3>Subsection Title</h3>
  </section>
</main>
```

## 🔧 Advanced Patterns

### Skip Links
```tsx
const SkipLink = () => (
  <a
    href="#main-content"
    className="skip-link"
    style={{
      position: 'absolute',
      left: '-9999px',
      zIndex: 999,
      padding: '8px 16px',
      background: '#000',
      color: '#fff',
      textDecoration: 'none',
    }}
    onFocus={(e) => {
      e.target.style.left = '6px';
      e.target.style.top = '6px';
    }}
    onBlur={(e) => {
      e.target.style.left = '-9999px';
    }}
  >
    Skip to main content
  </a>
);
```

### Accessible Modals
```tsx
const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Trap focus within modal
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
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title">{title}</h2>
        {children}
        <button onClick={onClose} aria-label="Close modal">
          ×
        </button>
      </div>
    </div>
  );
};
```

### Accessible Data Tables
```tsx
const DataTable = ({ data, columns }) => (
  <table role="table" aria-label="User data">
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            aria-sort={column.sortDirection}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={column.key}>
              {row[column.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
```

## 📱 Mobile Accessibility

### Touch Targets
```css
/* Ensure touch targets are at least 44px */
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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return { isMobile };
};
```

## 🧪 Testing Checklist

### Manual Testing
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Verify color contrast meets WCAG standards
- [ ] Test with keyboard only
- [ ] Check focus indicators are visible
- [ ] Test with 200% zoom
- [ ] Verify touch targets are adequate (mobile)

### Automated Testing
- [ ] Run axe-core tests
- [ ] Test keyboard navigation
- [ ] Verify ARIA attributes
- [ ] Test form accessibility
- [ ] Check semantic structure
- [ ] Validate color contrast

### Performance Testing
- [ ] Test with slow network connections
- [ ] Verify components work without JavaScript
- [ ] Test with reduced motion preferences
- [ ] Check high contrast mode compatibility

## 🔗 Resources

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)
- [Color Contrast Analyzers](https://www.tpgi.com/color-contrast-checker/)

### Guidelines
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/)

### Testing
- [Testing Library Accessibility Guide](https://testing-library.com/docs/guide-accessibility/)
- [jest-axe Documentation](https://github.com/nickcolley/jest-axe)

## 🆘 Common Issues and Solutions

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

## 📞 Support

For accessibility questions:
1. Check the [Storybook documentation](https://goodcallmike.github.io/zelda-ui/)
2. Review component accessibility stories
3. Run automated tests with our utilities
4. Consult WCAG guidelines for complex scenarios