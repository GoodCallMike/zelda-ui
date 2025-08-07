# @zelda/theme

Theme system and design tokens for the Zelda UI library.

## Installation

```bash
# Install theme package
npm install @zelda/theme

# Install peer dependencies
npm install clsx tailwind-merge

# Or with pnpm
pnpm add @zelda/theme clsx tailwind-merge
```

## Usage

### CSS Import

```tsx
import '@zelda/theme/dist/theme.css';
```

### Utility Functions

```tsx
import { cn } from '@zelda/theme';

function MyComponent({ className }) {
  return (
    <div className={cn('base-styles', 'conditional-styles', className)}>
      Content
    </div>
  );
}
```

## Features

- **Design tokens** - Consistent colors, spacing, typography
- **CSS variables** - Runtime theme customization
- **Utility functions** - Class name merging and conditional styling
- **Vanilla Extract** - Type-safe CSS-in-JS
- **Dark mode ready** - Built-in dark theme support

## Design Tokens

- **Colors** - Primary, secondary, semantic colors
- **Typography** - Font families, sizes, weights
- **Spacing** - Consistent spacing scale
- **Shadows** - Elevation and depth
- **Border radius** - Consistent corner rounding
- **Animations** - Smooth transitions and effects

## Customization

The theme can be customized by overriding CSS variables:

```css
:root {
  --color-primary: #your-color;
  --font-family-sans: 'Your Font', sans-serif;
}
```

## Documentation

Visit [https://goodcallmike.github.io/zelda-ui/](https://goodcallmike.github.io/zelda-ui/) for theming guides and customization examples.