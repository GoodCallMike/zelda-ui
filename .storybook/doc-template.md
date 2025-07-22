# Storybook Documentation Template

## Component Description Structure

```tsx
component: `[Component] component for [primary purpose] with comprehensive accessibility and testing support.

## Overview

The [Component] component provides [main functionality]. It supports [key features] and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { [Component] } from '@jetstream/core';

// Basic usage
<[Component] [basicProps]>[content]</[Component]>

// With options
<[Component] [commonProps]>[content]</[Component]>
\`\`\`

## [Feature Categories]

### [Feature 1]
\`\`\`tsx
<[Component] [feature1Props]>[content]</[Component]>
\`\`\`

### [Feature 2]
\`\`\`tsx
<[Component] [feature2Props]>[content]</[Component]>
\`\`\`

## Accessibility

The [Component] component is fully accessible with:

- **[Accessibility feature 1]**: [Description]
- **[Accessibility feature 2]**: [Description]
- **[Accessibility feature 3]**: [Description]

\`\`\`tsx
// Accessibility example
<[Component] [accessibilityProps]>[content]</[Component]>
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
- [Best practice 1]
- [Best practice 2]
- [Best practice 3]

### Don't
- [Anti-pattern 1]
- [Anti-pattern 2]
- [Anti-pattern 3]
`,
```

## Required Stories

1. **Default** - Basic component usage
2. **[Variants]** - Different visual variants
3. **[States]** - Different component states
4. **[Features]** - Key feature demonstrations
5. **Examples** - Real-world usage examples

## ArgTypes Template

```tsx
argTypes: {
  [prop]: {
    control: '[controlType]',
    options: ['option1', 'option2'], // for select
    description: '[Prop description]',
    table: {
      type: { summary: '[type]' },
      defaultValue: { summary: '[default]' },
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