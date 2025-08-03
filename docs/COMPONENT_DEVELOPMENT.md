# ⚛️ Zelda UI Component Development Guide

## Component Creation Workflow

### 1. Planning Phase
- **Check existing components** - Avoid duplicating functionality
- **Review Ant Design patterns** - Use as reference for API design
- **Define component variants** - Consider all states and sizes
- **Plan accessibility** - WCAG 2.1 AA compliance from start

### 2. File Structure
```
packages/core/src/[ComponentName]/
├── ComponentName.tsx           # Main component
├── ComponentName.module.css    # CSS modules (minimal use)
├── ComponentName.stories.tsx   # Storybook documentation
├── ComponentName.test.tsx      # Unit tests
└── index.ts                   # Exports
```

## Styling Strategy

### Priority Order (Use in this sequence):
1. **Global utility classes** (from `theme.css.ts`)
2. **CSS custom properties** (`var(--color-name)`)
3. **Inline className combinations** (using `cn()` utility)
4. **CSS modules** (only when utilities aren't sufficient)

### Global Utilities First
```tsx
// ✅ Preferred - Use global utilities
<button className={cn('font-sans text-foreground', className)}>

// ❌ Avoid - CSS modules for basic styling
<button className={cn(styles.button, className)}>
```

### CSS Custom Properties
```tsx
// ✅ Use CSS custom properties for theming
<div style={{ 
  backgroundColor: 'var(--triforce-500)',
  borderColor: 'var(--triforce-700)' 
}}>

// ❌ Don't hard-code colors
<div style={{ backgroundColor: '#d69e2e' }}>
```

### CSS Modules - Last Resort
Only use CSS modules for:
- **Complex layouts** that can't be achieved with utilities
- **Component-specific interactions** (hover, focus, active states)
- **Animations and transitions**
- **Pseudo-elements** (::before, ::after)

```css
/* ComponentName.module.css - Only for complex styling */
.complexLayout {
  display: grid;
  grid-template-areas: 
    "icon label"
    "icon description";
  grid-template-columns: auto 1fr;
  gap: 8px 12px;
}

.complexLayout::before {
  content: '';
  position: absolute;
  /* Complex pseudo-element styling */
}
```

## Component Structure Template

```tsx
import type { HTMLAttributes } from 'react';
import { cn } from '../styles';
import styles from './ComponentName.module.css'; // Only if needed

export interface ComponentNameProps extends HTMLAttributes<HTMLElement> {
  /** Component variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
  /** Component size */
  size?: 'small' | 'middle' | 'large';
  /** Whether component has error state */
  error?: boolean;
  /** Whether component is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Test identifier */
  testId?: string;
}

export const ComponentName = ({
  variant = 'primary',
  size = 'middle',
  error,
  disabled,
  className,
  testId,
  children,
  ...props
}: ComponentNameProps) => {
  return (
    <div
      className={cn(
        // Base styles using utilities
        'font-sans transition-all duration-100 ease-linear',
        
        // Variant styles
        variant === 'primary' && 'text-triforce',
        variant === 'secondary' && 'text-hyrule',
        variant === 'destructive' && 'text-ganon',
        
        // Size styles
        size === 'small' && 'text-sm p-2',
        size === 'middle' && 'text-base p-3',
        size === 'large' && 'text-lg p-4',
        
        // State styles
        error && 'text-ganon',
        disabled && 'opacity-50 cursor-not-allowed',
        
        // CSS modules only if needed
        styles.complexLayout,
        
        className
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
};
```

## Dark Mode Implementation

### Automatic Dark Mode Support
Most components get dark mode automatically through:
1. **CSS custom properties** - Colors adapt automatically
2. **Global utilities** - `text-foreground`, `text-muted` adapt
3. **Themed colors** - `text-triforce`, `text-hyrule` have dark variants

### Manual Dark Mode (CSS Modules)
Only when automatic support isn't sufficient:

```css
.component {
  background: var(--white);
  color: var(--gray-900);
}

:global(.dark) .component {
  background: var(--gray-800);
  color: var(--gray-100);
}
```

## Interactive Component Patterns

### Form Controls (Radio, Checkbox, Input)
```css
.formControl {
  /* Base state */
  background: transparent;
  border: 3px solid var(--gray-400);
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  box-shadow: 
    inset 2px 2px 0 color-mix(in srgb, var(--white) 50%, transparent),
    inset -2px -2px 0 color-mix(in srgb, var(--gray-600) 30%, transparent),
    4px 4px 0 color-mix(in srgb, var(--gray-600) 40%, transparent);
}

.formControl:hover {
  background: var(--gray-50);
  border-color: var(--triforce-500);
  box-shadow: 
    inset 2px 2px 0 var(--white),
    inset -2px -2px 0 color-mix(in srgb, var(--triforce-600) 20%, transparent),
    3px 3px 0 color-mix(in srgb, var(--triforce-600) 40%, transparent),
    0 0 6px color-mix(in srgb, var(--triforce-400) 15%, transparent);
}

.formControl:checked, .formControl:focus {
  background: linear-gradient(135deg, var(--triforce-400) 0%, var(--triforce-500) 50%, var(--triforce-600) 100%);
  border-color: var(--triforce-700);
  box-shadow: 
    inset 2px 2px 0 var(--triforce-100),
    inset -2px -2px 0 var(--triforce-700),
    4px 4px 0 var(--triforce-900),
    0 0 8px color-mix(in srgb, var(--triforce-400) 20%, transparent);
}

/* Dark mode */
:global(.dark) .formControl:checked {
  background: linear-gradient(135deg, #6b46c1 0%, #553c9a 50%, #44337a 100%);
  border-color: #312e81;
  box-shadow: 
    inset 2px 2px 0 #a78bfa,
    inset -2px -2px 0 #312e81,
    4px 4px 0 var(--black),
    0 0 20px color-mix(in srgb, #6b46c1 50%, transparent);
}
```

## Accessibility Requirements

### Always Include:
- **Semantic HTML** - Use proper elements (`button`, `input`, `label`)
- **ARIA attributes** - When semantic HTML isn't sufficient
- **Keyboard navigation** - Tab order and focus management
- **Focus indicators** - Visible focus states
- **Screen reader support** - Proper labeling and descriptions
- **Touch targets** - Minimum 44px for mobile accessibility

### Example:
```tsx
<button
  className={cn('p-2', className)} // 44px minimum touch target
  aria-label={ariaLabel}
  aria-describedby={error ? `${id}-error` : undefined}
  disabled={disabled}
  onKeyDown={handleKeyDown}
>
  {children}
</button>
```

## Testing Strategy

### Required Tests:
1. **Renders correctly** - Basic rendering test
2. **Props work** - All props affect component correctly
3. **Accessibility** - ARIA attributes and keyboard navigation
4. **User interactions** - Click, focus, keyboard events
5. **Error states** - Component handles errors gracefully

### Test Template:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders with default props', () => {
    render(<ComponentName testId="component">Content</ComponentName>);
    const component = screen.getByTestId('component');
    expect(component).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<ComponentName variant="primary" testId="component">Content</ComponentName>);
    const component = screen.getByTestId('component');
    expect(component).toHaveClass('text-triforce');
  });

  it('handles user interactions', () => {
    const handleClick = vi.fn();
    render(<ComponentName onClick={handleClick} testId="component">Content</ComponentName>);
    const component = screen.getByTestId('component');
    fireEvent.click(component);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Documentation Requirements

### Storybook Stories (Required):
1. **Default** - Basic usage
2. **Variants** - All visual variants
3. **Sizes** - All size options
4. **States** - Error, disabled, loading states
5. **Dark Mode** - Component in dark theme
6. **Real World Examples** - Integration with other components

### Follow doc-template.md for:
- Component descriptions
- ArgTypes configuration
- Story parameters
- Accessibility examples

## Common Patterns

### Connected Components (Button Groups)
```css
.connected {
  margin-left: -1px;
}

.connected:first-child {
  margin-left: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.connected:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.connected:not(:first-child):not(:last-child) {
  border-radius: 0;
}
```

### Loading States
```tsx
// Use global utilities for loading states
<div className={cn(
  'transition-opacity duration-200',
  loading && 'opacity-50 pointer-events-none'
)}>
```

### Error States
```tsx
// Consistent error styling across components
<div className={cn(
  'border-2',
  error ? 'border-ganon text-ganon' : 'border-gray-300'
)}>
```

## Performance Considerations

### Optimize Bundle Size:
- **Tree-shake friendly exports** - Named exports only
- **Minimal dependencies** - Avoid heavy libraries
- **Lazy load complex components** - Use React.lazy when appropriate
- **Memoize expensive calculations** - useMemo for complex logic

### CSS Performance:
- **Prefer utilities** - Reuse existing classes
- **Minimize CSS modules** - Reduces bundle size
- **Use CSS custom properties** - Better than CSS-in-JS runtime

## Storybook Setup Requirements

### Theme Import in Storybook
Ensure utilities are loaded by importing theme in `.storybook/preview.jsx`:
```javascript
import '../packages/theme/src'; // Loads all utilities
```

### Required Props for Stories
- **className prop** - Always include for utility class support
- **testId prop** - For automated testing
- **All variant props** - Document all available options

## Quality Checklist

Before submitting a component:

- [ ] Uses global utilities where possible
- [ ] CSS modules only for complex styling
- [ ] Dark mode support implemented
- [ ] All variants and sizes work
- [ ] **className prop included** for utility support
- [ ] Accessibility requirements met
- [ ] Tests cover main functionality
- [ ] Storybook documentation complete
- [ ] **Theme imported in Storybook** for utilities
- [ ] Follows TypeScript best practices
- [ ] Performance optimized
- [ ] Consistent with existing components