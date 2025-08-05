# Storybook Accessibility Documentation Template

This template provides a standardized approach for documenting accessibility features in Zelda UI component stories.

## Required Accessibility Stories

Each component should include these accessibility-focused stories:

### 1. KeyboardNavigation Story
Demonstrates keyboard interaction patterns and navigation behavior.

**Key Features:**
- Live regions for screen reader announcements
- Tab navigation order demonstration
- Component-specific keyboard shortcuts
- Interactive examples with state management
- Focus management patterns

```tsx
export const KeyboardNavigation: Story = {
  render: () => {
    const [announcement, setAnnouncement] = useState('');
    const [count, setCount] = useState(0);

    const announceNavigation = (message: string) => {
      setAnnouncement(message);
      setTimeout(() => setAnnouncement(''), 2000);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        {/* Live Region for Announcements */}
        <div aria-live="polite" className="sr-only">
          {announcement}
        </div>

        <div className="p-4 border rounded-lg bg-green-50 border-green-200">
          <Typography variant="h4" className="mb-3 text-green-800">
            ⌨️ Keyboard Navigation Patterns
          </Typography>
          <Typography variant="body2" className="text-green-700">
            Use keyboard to navigate and interact with these components.
          </Typography>
        </div>

        {/* Tab Navigation Examples */}
        <div className="space-y-4">
          <Typography variant="h5">Tab Navigation Order</Typography>
          <div className="space-y-3">
            <Component 
              label="First Component (Tab Order 1)"
              testId="tab-order-1"
              onFocus={() => announceNavigation('Focused on first component')}
            />
            <Component 
              label="Second Component (Tab Order 2)"
              testId="tab-order-2"
              onFocus={() => announceNavigation('Focused on second component')}
            />
            <Component 
              label="Third Component (Tab Order 3)"
              testId="tab-order-3"
              onFocus={() => announceNavigation('Focused on third component')}
            />
          </div>
        </div>

        {/* Component-specific keyboard patterns */}
        <div className="space-y-4">
          <Typography variant="h5">Component-Specific Navigation</Typography>
          <div className="space-y-3">
            <Component
              label="Activation Demo"
              onClick={() => {
                setCount(count + 1);
                announceNavigation(`Component activated ${count + 1} times`);
              }}
              testId="activation-demo"
            >
              Activate Me ({count})
            </Component>
            <Typography variant="body2" className="text-gray-600">
              • Use component-specific keys (Enter, Space, Arrow keys, etc.)
            </Typography>
          </div>
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

### Component-Specific Shortcuts
[Document component-specific keyboard patterns based on component type]

### Testing Examples
\`\`\`tsx
// Test keyboard navigation
test('Component supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Component label="Test" testId="keyboard-test" />);
  
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
```

### 2. ARIAAttributes Story
Shows proper ARIA attribute implementation and usage.

```tsx
export const ARIAAttributes: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      field1: '',
      field2: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = (field: string, value: any) => {
      const newErrors = { ...errors };
      // Add validation logic
      setErrors(newErrors);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
          <Typography variant="h4" className="mb-3 text-blue-800">
            🏷️ ARIA Attributes Usage
          </Typography>
          <Typography variant="body2" className="text-blue-700">
            Demonstrates proper ARIA attribute implementation.
          </Typography>
        </div>

        {/* aria-describedby examples */}
        <div className="space-y-4">
          <Typography variant="h5">aria-describedby Implementation</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Component
              label="Field with Help Text"
              aria-describedby="field-help field-requirements"
              testId="describedby-example"
            />
            <Typography variant="body2" id="field-help" className="text-gray-600 mt-1">
              Primary help text for this field
            </Typography>
            <Typography variant="body2" id="field-requirements" className="text-sm text-gray-500 mt-1">
              Additional requirements or constraints
            </Typography>
          </div>
        </div>

        {/* aria-required examples */}
        <div className="space-y-4">
          <Typography variant="h5">aria-required for Required Fields</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Component
              label="Required Field *"
              required
              aria-required="true"
              aria-describedby="required-help"
              testId="required-example"
            />
            <Typography variant="body2" id="required-help" className="text-gray-600 mt-1">
              This field is required to continue
            </Typography>
          </div>
        </div>

        {/* aria-invalid examples */}
        <div className="space-y-4">
          <Typography variant="h5">aria-invalid and Error States</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Component
              label="Validation Example"
              aria-invalid={errors.field1 ? 'true' : 'false'}
              error={!!errors.field1}
              testId="validation-example"
            />
            {errors.field1 && (
              <Typography variant="body2" className="text-red-600 mt-1" role="alert">
                {errors.field1}
              </Typography>
            )}
          </div>
        </div>

        {/* aria-label examples */}
        <div className="space-y-4">
          <Typography variant="h5">aria-label for Additional Context</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Component
              label="Search"
              aria-label="Search through available items and equipment"
              testId="aria-label-example"
            />
            <Typography variant="body2" className="text-gray-600 mt-1">
              aria-label provides additional context beyond the visible label
            </Typography>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## ARIA Attributes Implementation

### Essential ARIA Attributes
- **aria-describedby** - Links to help text and additional descriptions
- **aria-required** - Indicates required form fields
- **aria-invalid** - Communicates validation state
- **aria-label** - Provides accessible names when visual labels need enhancement
- **role="alert"** - Announces validation errors immediately

### Testing Examples
\`\`\`tsx
// Test ARIA attributes
test('Component has proper ARIA attributes', () => {
  render(
    <Component 
      label="Test Field" 
      required 
      aria-describedby="help-text"
      testId="aria-test"
    />
  );
  
  const element = screen.getByTestId('aria-test');
  expect(element).toHaveAttribute('aria-required', 'true');
  expect(element).toHaveAttribute('aria-describedby', 'help-text');
});

// Test error state ARIA
test('Component announces validation errors', () => {
  render(<ComponentWithValidation />);
  
  const element = screen.getByLabelText('Email');
  fireEvent.change(element, { target: { value: 'invalid' } });
  
  expect(element).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
});
\`\`\`
        `,
      },
    },
  },
};
```

### 3. TestingExamples Story
Provides comprehensive testing patterns and examples.

```tsx
export const TestingExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
        <Typography variant="h4" className="mb-3 text-purple-800">
          🧪 Testing Examples
        </Typography>
        <Typography variant="body2" className="text-purple-700">
          Examples showing how to test components with testId attributes and accessibility features.
        </Typography>
      </div>

      {/* Basic Testing */}
      <div className="space-y-4">
        <Typography variant="h5">Basic Component Testing</Typography>
        <div className="space-y-3">
          <Component
            testId="test-basic-component"
            label="Basic Test Component"
          />
          <Component
            testId="test-variant-component"
            label="Variant Test Component"
            variant="filled"
          />
          <Component
            testId="test-disabled-component"
            label="Disabled Test Component"
            disabled
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query components by testId
screen.getByTestId('test-basic-component')
screen.getByTestId('test-variant-component')
screen.getByTestId('test-disabled-component')`}
        </div>
      </div>

      {/* Accessibility Testing */}
      <div className="space-y-4">
        <Typography variant="h5">Accessibility Testing</Typography>
        <div className="space-y-3">
          <Component
            testId="test-accessible-component"
            label="Accessible Test Component"
            aria-describedby="test-help"
            required
            aria-required="true"
          />
          <Typography variant="body2" id="test-help" className="text-gray-600">
            This help text is linked via aria-describedby
          </Typography>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test label association
screen.getByLabelText('Accessible Test Component')

// Test ARIA attributes
expect(element).toHaveAttribute('aria-required', 'true')
expect(element).toHaveAttribute('aria-describedby', 'test-help')`}
        </div>
      </div>

      {/* User Interaction Testing */}
      <div className="space-y-4">
        <Typography variant="h5">User Interaction Testing</Typography>
        <div className="space-y-3">
          <Component
            testId="test-interaction-component"
            label="Interaction Test Component"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test user interactions
const user = userEvent.setup()
const element = screen.getByTestId('test-interaction-component')

// Test focus
await user.tab()
expect(element).toHaveFocus()

// Test interaction (click, type, etc.)
await user.click(element)
// or await user.type(element, 'test value')`}
        </div>
      </div>

      {/* Form Validation Testing */}
      <div className="space-y-4">
        <Typography variant="h5">Form Validation Testing</Typography>
        <div className="space-y-3">
          <Component
            testId="test-validation-component"
            label="Validation Test Component"
            error
            aria-invalid="true"
          />
          <Typography variant="body2" className="text-red-600" role="alert">
            This component has a validation error
          </Typography>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test validation state
const element = screen.getByTestId('test-validation-component')
expect(element).toHaveAttribute('aria-invalid', 'true')

// Test error message
expect(screen.getByRole('alert')).toHaveTextContent('validation error')`}
        </div>
      </div>

      {/* Keyboard Navigation Testing */}
      <div className="space-y-4">
        <Typography variant="h5">Keyboard Navigation Testing</Typography>
        <div className="space-y-3">
          <Component
            testId="test-keyboard-first"
            label="First Keyboard Test"
          />
          <Component
            testId="test-keyboard-second"
            label="Second Keyboard Test"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test keyboard navigation
const user = userEvent.setup()
const firstElement = screen.getByTestId('test-keyboard-first')
const secondElement = screen.getByTestId('test-keyboard-second')

// Test tab navigation
await user.tab()
expect(firstElement).toHaveFocus()

await user.tab()
expect(secondElement).toHaveFocus()`}
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

// Test component state
expect(element).toBeEnabled();
expect(element).toBeDisabled();
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test label association
const element = screen.getByLabelText('Component Label');
expect(element).toBeInTheDocument();

// Test ARIA attributes
expect(element).toHaveAttribute('aria-required', 'true');
expect(element).toHaveAttribute('aria-describedby', 'help-text');
\`\`\`

### User Interaction Testing
\`\`\`tsx
// Test user interactions
const user = userEvent.setup();
const element = screen.getByTestId('interaction-component');

// Test focus
await user.tab();
expect(element).toHaveFocus();

// Test activation
await user.click(element);
// or await user.keyboard('{Enter}');
\`\`\`

### Form Validation Testing
\`\`\`tsx
// Test validation states
const element = screen.getByTestId('validation-component');
expect(element).toHaveAttribute('aria-invalid', 'true');

// Test error announcements
expect(screen.getByRole('alert')).toHaveTextContent('Error message');
\`\`\`

### Keyboard Navigation Testing
\`\`\`tsx
// Test tab order
const user = userEvent.setup();
const elements = screen.getAllByRole('textbox'); // or appropriate role

await user.tab();
expect(elements[0]).toHaveFocus();

await user.tab();
expect(elements[1]).toHaveFocus();
\`\`\`

### Automated Accessibility Testing
\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Component has no accessibility violations', async () => {
  const { container } = render(<Component label="Test" />);
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

## Story Documentation Standards

### Component Description Template
```tsx
const meta: Meta<typeof Component> = {
  title: 'Category/Component',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: `Component description with accessibility overview.

## Accessibility Features

### Keyboard Navigation
- **Tab/Shift+Tab** - Navigate between elements
- **Enter/Space** - Activate component
- **Escape** - Cancel/close actions

### Screen Reader Support
- **Semantic Elements** - Uses proper HTML semantics
- **Label Association** - Proper labeling relationships
- **State Announcements** - Dynamic state changes announced

### ARIA Attributes
- **aria-label** - Accessible names
- **aria-describedby** - Descriptive content links
- **aria-expanded** - Expandable content state
- **role** - Semantic meaning

### Testing Support
\`\`\`tsx
// Basic testing
screen.getByTestId('component-test-id');

// Accessibility testing
screen.getByLabelText('Component Label');
expect(element).toHaveAttribute('aria-label', 'Accessible Name');
\`\`\`

## Best Practices
- Always include descriptive labels
- Use appropriate ARIA attributes
- Provide testId for reliable testing
- Support keyboard navigation
- Announce state changes to screen readers
        `,
      },
    },
  },
};
```

### Story Parameter Template
```tsx
parameters: {
  docs: {
    description: {
      story: `
## Story Description

Brief description of what this story demonstrates.

### Accessibility Features
- List of accessibility features shown
- Keyboard navigation patterns
- ARIA attribute usage

### Testing Examples
\`\`\`tsx
// Relevant testing code examples
test('Story functionality', () => {
  // Test implementation
});
\`\`\`

### Usage Notes
- Important usage considerations
- Best practices demonstrated
- Common pitfalls to avoid
      `,
    },
  },
},
```

## Component-Specific Guidelines

### Form Components
- Always associate labels with form controls
- Use aria-required for required fields
- Implement aria-invalid for validation states
- Link error messages with aria-describedby
- Provide clear focus indicators

### Interactive Components
- Support both mouse and keyboard interaction
- Use proper button vs link semantics
- Implement focus management for complex components
- Provide loading and disabled state feedback

### Navigation Components
- Use proper heading hierarchy
- Implement ARIA navigation landmarks
- Support skip links for screen readers
- Maintain logical tab order

### Modal/Overlay Components
- Implement focus trap and restoration
- Use proper dialog semantics
- Support Escape key for closing
- Prevent background interaction

## Testing Checklist

### For Every Story
- [ ] Includes testId attributes on interactive elements
- [ ] Demonstrates keyboard navigation patterns
- [ ] Shows proper ARIA attribute usage
- [ ] Provides testing code examples
- [ ] Documents accessibility features

### For Accessibility Stories
- [ ] KeyboardNavigation story with interactive examples
- [ ] ARIAAttributes story with proper implementation
- [ ] TestingExamples story with comprehensive patterns
- [ ] Clear documentation in story parameters
- [ ] Live regions for dynamic announcements

### For Documentation
- [ ] Component description includes accessibility overview
- [ ] Story descriptions explain accessibility features
- [ ] Code examples show proper testing patterns
- [ ] Best practices are clearly documented
- [ ] Common patterns are consistently applied

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Testing Library Accessibility](https://testing-library.com/docs/guide-accessibility/)
- [axe-core Testing](https://github.com/dequelabs/axe-core)