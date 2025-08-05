# 📚 Storybook Enhancement Guide

## Accessibility-First Documentation

All component stories must include comprehensive accessibility documentation and examples. This includes:

- **KeyboardNavigation** story demonstrating keyboard interaction patterns
- **ARIAAttributes** story showing proper ARIA implementation  
- **TestingExamples** story with accessibility testing patterns
- **AccessibilityFeatures** story as a comprehensive demo

See [STORYBOOK_ACCESSIBILITY_TEMPLATE.md](./STORYBOOK_ACCESSIBILITY_TEMPLATE.md) for detailed implementation guidance.

## Interactive Documentation Strategy

### 1. Story Organization
```
Component/
├── Default - Basic usage
├── Variants - All visual variants
├── States - Interactive states (hover, focus, disabled)
├── Sizes - All size variations
├── Dark Mode - Dark theme showcase
├── Real World Examples - Integration scenarios
├── Playground - Interactive controls
└── Testing Examples - Test-friendly implementations
```

### 2. Enhanced Story Types

#### Interactive Playground Stories
```tsx
export const Playground: Story = {
  render: (args) => <Component {...args} />,
  args: {
    // Default args
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all component props.',
      },
    },
  },
};
```

#### Comparison Stories
```tsx
export const Comparison: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3>Light Mode</h3>
        <Component variant="primary">Example</Component>
      </div>
      <div className="dark bg-gray-900 p-4 rounded">
        <h3 className="text-white">Dark Mode</h3>
        <Component variant="primary">Example</Component>
      </div>
    </div>
  ),
};
```

#### Integration Stories
```tsx
export const FormIntegration: Story = {
  render: () => (
    <form className="space-y-4 max-w-md">
      <Input label="Hero Name" />
      <Select label="Class" options={classes} />
      <Button type="submit">Create Character</Button>
    </form>
  ),
};
```

### 3. Documentation Enhancements

#### Component Overview Template
```tsx
parameters: {
  docs: {
    description: {
      component: `
# ${ComponentName}

${ComponentName} provides [main functionality] with Zelda-inspired theming.

## Key Features
- ✅ Accessibility compliant (WCAG 2.1 AA)
- 🎨 Dark mode support with purple theming
- 🧪 Built-in testing support
- 📱 Responsive design
- ⌨️ Full keyboard navigation

## Quick Start
\`\`\`tsx
import { ${ComponentName} } from '@zelda/core';

<${ComponentName}>Basic usage</${ComponentName}>
\`\`\`

## Integration Examples
[Show common usage patterns]
      `,
    },
  },
},
```

### 4. Interactive Examples

#### Adventure Scenarios
```tsx
export const AdventureScenarios: Story = {
  render: () => (
    <div className="space-y-8">
      <AdventureMenu />
      <InventoryPanel />
      <QuestDialog />
      <ShopInterface />
    </div>
  ),
};
```

#### State Demonstrations
```tsx
export const StateDemo: Story = {
  render: () => {
    const [state, setState] = useState('idle');
    
    return (
      <div className="space-y-4">
        <Component state={state} />
        <div className="flex gap-2">
          <Button onClick={() => setState('loading')}>Loading</Button>
          <Button onClick={() => setState('success')}>Success</Button>
          <Button onClick={() => setState('error')}>Error</Button>
        </div>
      </div>
    );
  },
};
```

### 5. Documentation Best Practices

#### Story Descriptions
- Use adventure-themed language
- Include code examples
- Show integration patterns
- Highlight accessibility features

#### Parameter Documentation
```tsx
argTypes: {
  variant: {
    description: 'Visual style variant with Hyrule theming',
    control: 'select',
    options: ['primary', 'secondary', 'tertiary', 'destructive'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'primary' },
      category: 'Appearance',
    },
  },
},
```

#### Code Examples
```tsx
parameters: {
  docs: {
    source: {
      code: `
<Component
  variant="primary"
  size="large"
  testId="adventure-component"
>
  Start Adventure
</Component>
      `,
    },
  },
},
```

### 6. Enhanced Story Categories

#### By Complexity
- **Basic** - Simple usage
- **Intermediate** - With props and variants
- **Advanced** - Complex integrations
- **Expert** - Custom implementations

#### By Use Case
- **Forms** - Form integration examples
- **Navigation** - Menu and navigation usage
- **Feedback** - Success, error, loading states
- **Layout** - Grid and layout examples

### 7. Interactive Controls

#### Smart Defaults
```tsx
args: {
  children: 'Start Adventure',
  variant: 'primary',
  testId: 'story-component',
},
```

#### Grouped Controls
```tsx
argTypes: {
  // Appearance
  variant: { /* ... */ },
  size: { /* ... */ },
  
  // Behavior
  disabled: { /* ... */ },
  loading: { /* ... */ },
  
  // Content
  children: { /* ... */ },
  icon: { /* ... */ },
},
```

### 8. Testing Integration

#### Accessibility-First Stories
```tsx
export const KeyboardNavigation: Story = {
  render: () => {
    const [announcement, setAnnouncement] = useState('');

    return (
      <div className="space-y-8 max-w-2xl">
        <div aria-live="polite" className="sr-only">
          {announcement}
        </div>
        
        <div className="p-4 border rounded-lg bg-green-50 border-green-200">
          <Typography variant="h4" className="mb-3 text-green-800">
            ⌨️ Keyboard Navigation Patterns
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Tab Navigation Order</Typography>
          <Component 
            testId="keyboard-first" 
            onFocus={() => setAnnouncement('Focused on first element')}
          >
            First Element
          </Component>
          <Component 
            testId="keyboard-second"
            onFocus={() => setAnnouncement('Focused on second element')}
          >
            Second Element
          </Component>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Keyboard Navigation Patterns

### Universal Shortcuts
- **Tab/Shift+Tab** - Navigate between elements
- **Enter/Space** - Activate interactive elements
- **Escape** - Close overlays/cancel actions

### Testing Examples
\`\`\`tsx
// Test keyboard navigation
test('Component supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Component testId="keyboard-test" />);
  
  const element = screen.getByTestId('keyboard-test');
  
  await user.tab();
  expect(element).toHaveFocus();
  
  await user.keyboard('{Enter}');
  // Assert expected behavior
});
\`\`\`
        `,
      },
    },
  },
};

export const ARIAAttributes: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <Typography variant="h4" className="mb-3 text-blue-800">
          🏷️ ARIA Attributes Usage
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">aria-describedby Implementation</Typography>
        <Component 
          testId="aria-example"
          aria-describedby="help-text"
          aria-required="true"
        >
          Component with ARIA
        </Component>
        <Typography variant="body2" id="help-text" className="text-gray-600">
          Help text linked via aria-describedby
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## ARIA Attributes Implementation

### Essential ARIA Attributes
- **aria-label** - Accessible names
- **aria-describedby** - Links to descriptive content
- **aria-required** - Required field indication
- **aria-invalid** - Validation state

### Testing Examples
\`\`\`tsx
// Test ARIA attributes
test('Component has proper ARIA attributes', () => {
  render(<Component aria-label="Test" testId="aria-test" />);
  
  const element = screen.getByTestId('aria-test');
  expect(element).toHaveAttribute('aria-label', 'Test');
});
\`\`\`
        `,
      },
    },
  },
};

export const TestingExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
        <Typography variant="h4" className="mb-3 text-purple-800">
          🧪 Testing Examples
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Basic Component Testing</Typography>
        <Component testId="test-primary" variant="primary">
          Primary Action
        </Component>
        <Component testId="test-secondary" variant="secondary">
          Secondary Action
        </Component>
        
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query by testId
screen.getByTestId('test-primary')
screen.getByTestId('test-secondary')

// Test interactions
const user = userEvent.setup()
await user.click(screen.getByTestId('test-primary'))`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Accessibility Testing</Typography>
        <Component 
          testId="test-accessible"
          aria-label="Accessible component"
          aria-describedby="test-help"
        >
          Accessible Component
        </Component>
        <Typography variant="body2" id="test-help" className="text-gray-600">
          Help text for accessibility testing
        </Typography>
        
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test accessibility
screen.getByLabelText('Accessible component')
expect(element).toHaveAttribute('aria-describedby', 'test-help')

// Automated accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe'
const results = await axe(container)
expect(results).toHaveNoViolations()`}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Testing Examples with testId Attributes

### Basic Testing Patterns
\`\`\`tsx
// Query by testId
const element = screen.getByTestId('test-component');
expect(element).toBeInTheDocument();
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test label association
const element = screen.getByLabelText('Component Label');
expect(element).toBeInTheDocument();

// Test ARIA attributes
expect(element).toHaveAttribute('aria-required', 'true');
\`\`\`

### Automated Accessibility Testing
\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('Component has no accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`
        `,
      },
    },
  },
};
```

## Implementation Checklist

### For Each Component:
- [ ] Default story with basic usage
- [ ] Variants story showing all options
- [ ] States story with interactive states
- [ ] Dark mode story with purple theming
- [ ] Real world examples with integration
- [ ] Playground story with all controls
- [ ] **KeyboardNavigation** story with live regions and interactive patterns
- [ ] **ARIAAttributes** story with validation examples and error states
- [ ] **TestingExamples** story with comprehensive testing patterns and code examples
- [ ] **AccessibilityFeatures** story (comprehensive demo - optional for complex components)
- [ ] Adventure-themed scenarios

### Documentation Quality:
- [ ] Clear component description with accessibility overview
- [ ] Quick start code example
- [ ] Integration examples
- [ ] **Keyboard navigation patterns documented**
- [ ] **ARIA attributes usage examples**
- [ ] **Screen reader optimization notes**
- [ ] Testing guidance with testId patterns
- [ ] Best practices section
- [ ] Adventure-themed language
- [ ] Dark mode documentation

### Accessibility Requirements:
- [ ] All interactive elements have testId attributes
- [ ] Live regions (aria-live) for dynamic announcements
- [ ] Keyboard navigation patterns with focus management
- [ ] ARIA attributes with validation examples (aria-invalid, role="alert")
- [ ] Screen reader announcements with proper timing
- [ ] Form validation accessibility (aria-describedby, aria-required)
- [ ] Error states with role="alert" announcements
- [ ] Testing examples include accessibility tests with axe-core
- [ ] Component-specific keyboard shortcuts documented
- [ ] Focus indicators clearly visible across all variants