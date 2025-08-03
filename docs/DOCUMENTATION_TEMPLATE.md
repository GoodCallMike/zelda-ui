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

## Dark Mode

The [Component] component automatically adapts to dark mode with Hyrule's mystical night theme:

\`\`\`tsx
// Automatic dark mode support
<div className="dark">
  <[Component] variant="primary">[content]</[Component]>
  <[Component] variant="secondary">[content]</[Component]>
</div>
\`\`\`

### Dark Mode Colors
- **Primary**: Mystic purple with ethereal glow
- **Secondary**: Deep forest green with moonlight accents
- **Destructive**: Crimson red with shadow effects

## Real World Examples

### Adventure Interface
\`\`\`tsx
// Game menu interface
<div className="adventure-menu">
  <[Component] variant="primary">Start Adventure</[Component]>
  <[Component] variant="secondary">Load Game</[Component]>
  <[Component] variant="tertiary">Settings</[Component]>
</div>
\`\`\`

### Inventory Management
\`\`\`tsx
// Item management with other components
<div className="inventory-panel">
  <Typography variant="h2">Hero's Inventory</Typography>
  <div className="item-actions">
    <[Component] size="small">Use Item</[Component]>
    <[Component] size="small" variant="destructive">Drop Item</[Component]>
  </div>
</div>
\`\`\`

### Form Integration
\`\`\`tsx
// Character creation form
<form className="character-form">
  <Input label="Hero Name" placeholder="Enter your name" />
  <RadioGroup label="Choose your path">
    <Radio value="warrior">Warrior</Radio>
    <Radio value="mage">Mage</Radio>
    <Radio value="archer">Archer</Radio>
  </RadioGroup>
  <div className="form-actions">
    <[Component] type="submit" variant="primary">Begin Quest</[Component]>
    <[Component] type="button" variant="secondary">Cancel</[Component]>
  </div>
</form>
\`\`\`

### Dialog System
\`\`\`tsx
// NPC interaction dialog
<div className="dialog-box">
  <Typography variant="body">"Welcome, brave adventurer!"</Typography>
  <div className="dialog-choices">
    <[Component] variant="primary">Accept Quest</[Component]>
    <[Component] variant="secondary">Ask for Info</[Component]>
    <[Component] variant="tertiary">Leave</[Component]>
  </div>
</div>
\`\`\`

### Dark Mode Real World Examples
\`\`\`tsx
// Complex night mode interface with themed panels
<div className="dark p-6 bg-gray-900 space-y-6">
  <Typography variant="h2" className="text-purple-300">🌙 Night Mode Interface</Typography>
  
  {/* Purple-themed panel */}
  <div className="space-y-4 p-4 border border-purple-700 rounded-lg bg-purple-950">
    <Typography variant="h4" className="text-purple-300 flex items-center gap-2">
      ⚔️ Combat Settings
    </Typography>
    <div className="grid grid-cols-2 gap-4">
      <[Component] variant="primary">Attack Mode</[Component]>
      <[Component] variant="secondary">Defend</[Component]>
    </div>
  </div>
  
  {/* Gray-themed panel with validation states */}
  <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
    <Typography variant="h4" className="text-gray-300 flex items-center gap-2">
      🎒 Quick Inventory
    </Typography>
    <div className="space-y-3">
      <[Component] status="warning" variant="primary">Equipped Item</[Component]>
      <[Component] status="error" variant="destructive">Broken Item</[Component]>
    </div>
  </div>
  
  {/* Blue-themed panel */}
  <div className="space-y-4 p-4 border border-blue-700 rounded-lg bg-blue-950">
    <Typography variant="h4" className="text-blue-300 flex items-center gap-2">
      🗺️ Map Settings
    </Typography>
    <div className="grid grid-cols-1 gap-3">
      <[Component] variant="tertiary">Detailed View</[Component]>
      <[Component] variant="primary">Show Markers</[Component]>
    </div>
  </div>
</div>
\`\`\`

## Accessibility

The [Component] component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic elements with proper labeling
- **Focus Indicators**: Clear visual focus states for keyboard users
- **High Contrast**: Maintains accessibility in both light and dark modes

\`\`\`tsx
// Accessibility example
<[Component] testId="adventure-btn" aria-label="Start your adventure">[content]</[Component]>
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
4. **Dark Mode** - Component appearance in dark theme with mystical styling
5. **Real World Examples** - Integration with other components (forms, dialogs, menus)
6. **Hyrule Interface** - Adventure-themed usage scenarios
7. **Examples** - Comprehensive component demonstrations

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
  className: {
    control: 'text',
    description: 'Additional CSS classes for styling with utilities',
    table: {
      type: { summary: 'string' },
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