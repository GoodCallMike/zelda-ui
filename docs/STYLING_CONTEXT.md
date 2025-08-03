# 🎨 Zelda UI Styling Context

## Styling Architecture

The Zelda UI design system uses **Vanilla Extract** for CSS-in-TypeScript styling, NOT Tailwind CSS.

## Key Technologies

### Vanilla Extract
- **CSS-in-TypeScript** - Type-safe CSS with zero runtime
- **CSS Modules** - Scoped styles with `.module.css.ts` files
- **Global Styles** - Theme-wide utilities in `theme.css.ts`
- **CSS Custom Properties** - Dynamic theming with CSS variables

### File Structure
```
packages/
├── theme/src/
│   ├── tokens.css.ts      # Color tokens and CSS variables
│   ├── theme.css.ts       # Global theme styles and utilities
│   ├── fonts.css.ts       # Font loading and definitions
│   ├── utilities/         # Comprehensive utility classes
│   │   ├── layout.css.ts  # Flexbox, grid, positioning
│   │   ├── sizing.css.ts  # Width, height, min/max sizes
│   │   ├── spacing.css.ts # Padding, margin, gap, space-y
│   │   ├── typography.css.ts # Font sizes, weights, alignment
│   │   └── index.css.ts   # Exports all utilities
│   └── index.ts           # Main theme export
└── core/src/
    └── [Component]/
        ├── Component.tsx           # React component
        ├── Component.module.css.ts # Vanilla Extract styles (NOT USED)
        └── Component.module.css    # Regular CSS modules
```

## Styling Patterns

### 1. CSS Modules (Current Approach)
Components use regular CSS modules with CSS custom properties:

```css
/* Component.module.css */
.button {
  background: var(--triforce-500);
  border: 3px solid var(--triforce-700);
  color: var(--white);
}

:global(.dark) .button {
  background: linear-gradient(135deg, #6b46c1 0%, #553c9a 50%, #44337a 100%);
  border-color: #312e81;
}
```

### 2. Global Theme Utilities
Defined in `theme.css.ts` using Vanilla Extract's `globalStyle`:

```typescript
// theme.css.ts
import { globalStyle } from '@vanilla-extract/css';

globalStyle('.text-triforce', { 
  color: 'var(--triforce-600)' 
});

globalStyle('.dark .text-triforce', { 
  color: 'var(--triforce-400)' 
});
```

### 3. CSS Custom Properties
All colors use CSS custom properties for dynamic theming:

```css
/* Light mode */
:root {
  --triforce-500: #d69e2e;
  --triforce-600: #b7791f;
}

/* Dark mode */
.dark {
  --triforce-500: #f6e05e;
  --triforce-600: #ecc94b;
}
```

## Component Styling Guidelines

### DO Use:
- **CSS Modules** - `Component.module.css` files
- **CSS Custom Properties** - `var(--color-name)` for theming
- **Global utilities** - Pre-defined classes from theme
- **Semantic class names** - `.button`, `.input`, `.checkbox`

### DON'T Use:
- **Tailwind classes** - `text-blue-500`, `bg-gray-100`, etc.
- **Inline styles** - `style={{ color: 'blue' }}`
- **Vanilla Extract CSS-in-TS** - `.module.css.ts` files (not currently used)
- **Hard-coded colors** - `#3182ce`, `rgb(49, 130, 206)`

## Dark Mode Implementation

### CSS Class Approach
Dark mode is activated using the `.dark` CSS class:

```tsx
// Correct
<div className="dark">
  <Typography color="triforce">Golden text</Typography>
</div>

// Incorrect
<div data-theme="dark">
  <Typography color="triforce">Golden text</Typography>
</div>
```

### CSS Selectors
Use `:global(.dark)` in CSS modules for dark mode styles:

```css
.component {
  color: var(--gray-900);
}

:global(.dark) .component {
  color: var(--gray-100);
}
```

## Typography Styling

### Themed Colors
Typography uses global utility classes, not Tailwind:

```tsx
// Correct
<Typography color="triforce">Golden text</Typography>
// Generates: <p className="text-triforce">Golden text</p>

// Incorrect
<Typography className="text-yellow-600">Golden text</Typography>
```

### Available Text Colors
- `text-foreground` - Default text color
- `text-muted` - Muted/secondary text
- `text-triforce` - Triforce gold (adapts to dark mode)
- `text-hyrule` - Hyrule blue (adapts to dark mode)
- `text-rupee` - Rupee green (adapts to dark mode)
- `text-ganon` - Ganon red (adapts to dark mode)

## Form Component Styling

### Interactive States
All form components follow the same pattern:

```css
.input {
  /* Default state */
  background: transparent;
  border: 3px solid var(--gray-400);
}

.input:hover {
  border-color: var(--triforce-500);
}

.input:checked, .input:focus {
  background: var(--triforce-500);
  border-color: var(--triforce-700);
}

:global(.dark) .input:checked {
  background: linear-gradient(135deg, #6b46c1 0%, #553c9a 50%, #44337a 100%);
  border-color: #312e81;
}
```

## Common Mistakes to Avoid

### 1. Using Tailwind Classes
```tsx
// ❌ Wrong - We don't use Tailwind
<div className="bg-blue-500 text-white p-4">

// ✅ Correct - Use CSS modules or global utilities
<div className={styles.container}>
```

### 2. Hard-coding Colors
```css
/* ❌ Wrong - Hard-coded colors */
.button {
  background: #3182ce;
  color: white;
}

/* ✅ Correct - CSS custom properties */
.button {
  background: var(--hyrule-500);
  color: var(--white);
}
```

### 3. Incorrect Dark Mode Selectors
```css
/* ❌ Wrong - data-theme attribute */
[data-theme="dark"] .component {
  color: white;
}

/* ✅ Correct - .dark class */
:global(.dark) .component {
  color: var(--gray-100);
}
```

## Storybook Integration

### Loading Utilities in Storybook
Utilities must be imported in `.storybook/preview.jsx`:
```javascript
import '../packages/theme/src'; // Loads all utility classes
```

### Available Utility Categories
- **Layout**: `flex`, `grid`, `justify-start`, `items-center`
- **Sizing**: `w-full`, `h-auto`, `max-w-4xl`
- **Spacing**: `p-4`, `gap-3`, `space-y-4`
- **Typography**: `text-sm`, `font-bold`, `leading-relaxed`

## Migration Notes

If you see Tailwind-style classes in components, they should be replaced with:
1. **CSS custom properties** for colors
2. **CSS modules** for component-specific styles  
3. **Global utilities** for common patterns (already available!)
4. **Semantic class names** that describe purpose, not appearance

## Build Process

- **Vanilla Extract** compiles CSS-in-TypeScript to regular CSS
- **CSS Modules** are processed and scoped automatically
- **Global styles** are injected into the document head
- **CSS custom properties** enable runtime theme switching