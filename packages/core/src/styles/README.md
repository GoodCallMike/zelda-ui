# Jetstream Styles Architecture

## Philosophy

Our styling system follows a **token-first approach** with atomic CSS utilities, ensuring consistency, maintainability, and performance across the design system.

## Architecture

```
styles/
├── tokens/           # Design tokens (raw values)
├── utilities/        # CSS utility classes
├── theme.css.ts      # Semantic theme mappings
├── variables.css.ts  # CSS custom properties
└── index.ts          # Main export
```

## Tokens vs Utilities

### **Tokens** - The Foundation
Raw design values that define your design system:

```ts
// tokens/colors.css.ts
export const colors = {
  blue: {
    500: 'var(--blue-500)',
    600: 'var(--blue-600)',
  }
}
```

### **Utilities** - The Implementation
CSS classes that consume tokens:

```ts
// utilities/colors.css.ts
globalStyle('.bg-blue-500', {
  backgroundColor: colors.blue[500], // Uses token
});
```

## Usage

### In Components
```tsx
import { cn } from '@jetstream/core';

// Use utility classes
<div className={cn('bg-blue-500', 'text-white', 'p-4')}>
  Content
</div>
```

### In Vanilla Extract
```ts
import { colors } from '../tokens';

export const buttonStyle = style({
  backgroundColor: colors.blue[500], // Use tokens directly
  color: colors.white,
});
```

## Design Tokens

### Colors
- **Primary**: Blue scale for brand elements
- **Semantic**: Red (error), Green (success), Yellow (warning)
- **Neutral**: Gray scale for text and backgrounds

### Spacing
- **Scale**: 0, 1, 2, 3, 4, 6, 8 (4px base unit)
- **Usage**: Padding, margins, gaps

### Typography
- **Sizes**: xs, sm, base, lg, xl, 2xl
- **Weights**: normal, medium, semibold, bold

## Utility Classes

### Layout
```css
.flex, .grid, .block, .inline
.items-center, .justify-between
.w-full, .h-screen
```

### Colors
```css
.bg-blue-500, .text-white
.border-gray-300
.hover:bg-blue-600
```

### Spacing
```css
.p-4, .m-2, .gap-3
.px-6, .py-2
```

## Theme System

### Light/Dark Mode
```ts
// Automatic theme switching
globalStyle(':root', {
  '--color-background': colors.white,
  '--color-foreground': colors.gray[900],
});

globalStyle('[data-theme="dark"]', {
  '--color-background': colors.gray[900],
  '--color-foreground': colors.gray[50],
});
```

### Semantic Colors
```css
.bg-background    /* Adapts to theme */
.text-foreground  /* Adapts to theme */
.border-border    /* Adapts to theme */
```

## Best Practices

### Do ✅
- Use tokens for consistent values
- Prefer utility classes for common patterns
- Use semantic theme colors for adaptability
- Group related utilities with `cn()`

### Don't ❌
- Hardcode color values in components
- Create one-off CSS classes for simple styling
- Mix utility classes with inline styles
- Override utility classes with `!important`

## Adding New Tokens

1. **Define the token**:
```ts
// tokens/colors.css.ts
export const colors = {
  purple: {
    500: '#8b5cf6',
    600: '#7c3aed',
  }
}
```

2. **Create utilities**:
```ts
// utilities/colors.css.ts
globalStyle('.bg-purple-500', {
  backgroundColor: colors.purple[500],
});
```

3. **Use in components**:
```tsx
<div className="bg-purple-500">Content</div>
```

## Performance

- **Tree-shaking**: Only used utilities are included
- **CSS-in-JS**: Zero runtime overhead with Vanilla Extract
- **Atomic CSS**: Minimal CSS output through utility reuse
- **Critical CSS**: Base styles loaded first

## Development

### Local Development
```bash
npm run storybook  # View design system
npm run dev        # Development server
```

### Testing Styles
```bash
npm run test       # Component tests
npm run build      # Production build test
```

## Migration Guide

### From Inline Styles
```tsx
// Before
<div style={{ backgroundColor: '#3b82f6', padding: '16px' }}>

// After  
<div className="bg-blue-500 p-4">
```

### From CSS Modules
```tsx
// Before
import styles from './Button.module.css';
<button className={styles.primary}>

// After
<button className="bg-blue-500 text-white px-4 py-2 rounded">
```

## Resources

- [Storybook](http://localhost:6006) - Design system documentation
- [Vanilla Extract](https://vanilla-extract.style/) - CSS-in-JS framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility class inspiration