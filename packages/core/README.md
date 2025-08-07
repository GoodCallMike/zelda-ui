# @zelda/core

Core UI components for the Zelda design system.

## Installation

```bash
# Install core packages
npm install @zelda/core @zelda/theme @zelda/icons

# Install peer dependencies
npm install @floating-ui/react clsx tailwind-merge

# Or with pnpm
pnpm add @zelda/core @zelda/theme @zelda/icons @floating-ui/react clsx tailwind-merge
```

## Usage

```tsx
import { Button, Input, Modal } from '@zelda/core';
import '@zelda/theme/dist/theme.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </div>
  );
}
```

## Components

- **Button** - Interactive button with variants and loading states
- **Input** - Text input with validation and styling options
- **Select** - Dropdown selection with search capabilities
- **Modal** - Overlay dialogs and modals
- **Alert** - Status messages and notifications
- **Checkbox** - Checkbox inputs with labels
- **Radio** - Radio button inputs and groups
- **Slider** - Range slider inputs
- **Toast** - Toast notifications
- **Tooltip** - Hover tooltips
- **Avatar** - User avatars with fallbacks
- **Badge** - Status badges and labels
- **Card** - Content containers
- **Divider** - Visual separators
- **Typography** - Text styling components

## Requirements

- React 18.0.0 or higher
- @zelda/theme package

## Documentation

Visit [https://goodcallmike.github.io/zelda-ui/](https://goodcallmike.github.io/zelda-ui/) for full documentation and examples.