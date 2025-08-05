# Component Generator

Generate new components with all necessary files and boilerplate code.

## Usage

```bash
# Using pnpm script (recommended)
pnpm generate:component <component-name>

# Direct execution
node scripts/generate-component.js <component-name>
```

## Examples

```bash
# Generate a Badge component
pnpm generate:component badge

# Generate a Card component  
pnpm generate:component card

# Generate a multi-word component (will be converted to PascalCase)
pnpm generate:component data-table  # Creates DataTable
```

## Generated Files

The generator creates a complete component structure:

```
packages/core/src/ComponentName/
├── ComponentName.tsx          # Main component
├── ComponentName.module.css   # CSS Module styles
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Unit tests
└── index.ts                   # Exports
```

It also updates `packages/core/src/index.ts` with the new component exports.

## Features

- **TypeScript support** - Full type definitions
- **CSS Modules** - Scoped styling with theme variables
- **Storybook integration** - Complete stories with controls
- **Unit tests** - Comprehensive test coverage
- **Accessibility ready** - ARIA attributes and semantic HTML
- **Theme support** - Dark/light mode compatible
- **Responsive design** - Multiple size variants