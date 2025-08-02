# 🗡️ Zelda UI Documentation Template

## Component Description Structure

```tsx
component: `[Component] component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The [Component] component provides [main functionality] with authentic Zelda-inspired styling. It supports [key features] and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { [Component] } from '@zelda/core';

// Basic usage
<[Component] [basicProps]>[content]</[Component]>

// With Hyrule theming
<[Component] [commonProps]>[content]</[Component]>
\`\`\`

## Variants

### Primary (Triforce Gold)
\`\`\`tsx
<[Component] variant="primary">[content]</[Component]>
\`\`\`

### Secondary (Rupee Green)
\`\`\`tsx
<[Component] variant="secondary">[content]</[Component]>
\`\`\`

### Tertiary (Hyrule Blue)
\`\`\`tsx
<[Component] variant="tertiary">[content]</[Component]>
\`\`\`

### Destructive (Ganon Red)
\`\`\`tsx
<[Component] variant="destructive">[content]</[Component]>
\`\`\`

## Accessibility

The [Component] component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic elements with proper labeling
- **Focus Indicators**: Clear visual focus states for keyboard users

\`\`\`tsx
// Accessibility example
<[Component] testId="adventure-btn">[content]</[Component]>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<[Component] testId="component-test">[content]</[Component]>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('component-test');
\`\`\`

## Best Practices

### Do
- Use primary for main actions (like "Start Adventure")
- Use destructive for dangerous actions (like "Delete Save")
- Provide clear, action-oriented labels
- Include \`testId\` for reliable testing

### Don't
- Use multiple primary variants in the same context
- Use destructive variant for non-destructive actions
- Make component text too long for the pixel-art styling
`,
```

## Required Stories

1. **Default** - Basic component usage with primary variant
2. **Variants** - All Hyrule-themed variants (primary, secondary, tertiary, destructive)
3. **States** - Normal, hover, active, and disabled states
4. **Hyrule Interface** - Real-world Zelda-themed usage examples
5. **Examples** - Adventure-themed component demonstrations

## ArgTypes Template

```tsx
argTypes: {
  variant: {
    control: 'select',
    options: ['primary', 'secondary', 'tertiary', 'destructive'],
    description: 'Hyrule-themed visual variant',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the component is disabled',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  testId: {
    control: 'text',
    description: 'Test identifier for automated testing',
    table: {
      type: { summary: 'string' },
    },
  },
},
```

## Zelda Color Palette Reference

- **triforce-*** - Golden yellow (primary theme)
- **hyrule-*** - Royal blue (kingdom colors)
- **rupee-*** - Emerald green (currency/nature)
- **ganon-*** - Crimson red (danger/destruction)
- **sheikah-*** - Mystic purple (ancient tech)
- **kokiri-*** - Forest green (nature/success)
- **zora-*** - Aqua blue (water domain)
- **goron-*** - Volcanic orange (fire/warnings)
- **fairy-*** - Magical pink (healing/magic)