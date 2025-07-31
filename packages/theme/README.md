# @zelda/theme 🎨

Theme system and design tokens for the Zelda UI library.

## Installation

```bash
npm install @zelda/theme
# or
pnpm add @zelda/theme
```

## Usage

### Design Tokens

```tsx
import { colors, spacing, typography } from '@zelda/theme';

// Use design tokens
const styles = {
  color: colors.blue[600],
  padding: spacing[4],
  fontSize: typography.fontSize.lg,
};
```

### Utility Function

```tsx
import { cn } from '@zelda/theme';

// Combine classes with conditional logic
const buttonClass = cn(
  'px-4 py-2 rounded',
  isActive && 'bg-blue-600',
  disabled && 'opacity-50'
);
```

### Theme Activation

```tsx
// Default theme (automatic)
document.documentElement.setAttribute('data-theme', 'light');

// Dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Secret Hyrule theme
document.documentElement.setAttribute('data-theme', 'hyrule');
```

## Available Themes

### Light Theme (Default)
Standard light theme with blue primary colors.

### Dark Theme
Dark theme with adjusted colors for low-light environments.

### Hyrule Theme (Secret) 🗡️
Zelda-inspired theme with mystical colors:
- **Forest Night**: Deep background
- **Hyrule Green**: Primary actions
- **Triforce Gold**: Accent elements
- **Rupee Colors**: Success/info variants
- **Master Sword Blue**: Secondary accent

## Design Tokens

### Colors
- **Gray Scale**: 50-900 variants
- **Blue**: Primary color palette
- **Red**: Error/destructive states
- **Green**: Success states
- **Yellow**: Warning states

### Spacing
Consistent spacing scale from 0.5 to 96.

### Typography
Font sizes, weights, and line heights.

## CSS Variables

The theme system uses CSS custom properties:

```css
:root {
  --color-primary: #2563eb;
  --color-background: #ffffff;
  --color-foreground: #111827;
  /* ... more variables */
}
```

## License

MIT