# 🗡️ Zelda UI Documentation Template

## Documentation Philosophy

Documentation is not an afterthought—it's a critical feature that drives adoption, reduces bugs, and fosters collaboration. Every component story is both documentation and a test case.

## Component Description Structure

```tsx
component: `[One sentence describing function and primary benefit].

\`\`\`tsx
import { [Component] } from 'zelda-ui-core';

// Primary usage pattern
<[Component]>[Most common example]</[Component]>

// Key variant
<[Component] variant="primary">[Enhanced example]</[Component]>
\`\`\`

## Variants
- **primary** - [When to use] ([visual indicator])
- **destructive** - [When to use] ([visual indicator])

## Accessibility & Testing
- [Key keyboard interactions]
- [ARIA implementation]
- [Consumer responsibilities]

\`\`\`tsx
// Testing approach
const element = screen.getByTestId('component-id');
expect(element).toBeEnabled();
await user.click(element);
\`\`\``,
```

## Essential Stories

### 1. Default Story
- **Purpose**: Interactive playground with primary usage
- **Requirements**: Well-configured argTypes for optimal developer experience
- **Controls**: Focus on props developers will actually manipulate

### 2. Variants Story
- **Purpose**: Visual gallery of all component variants in one story
- **Requirements**: Demonstrates complete range of appearances
- **Layout**: Side-by-side comparison for easy scanning

### 3. Examples Story
- **Purpose**: Real-world integration scenarios
- **Requirements**: Shows component working with other components
- **Context**: Demonstrates actual usage patterns, not isolated examples

## Accessibility Documentation

### Keyboard Interactions Table
Document expected keyboard behavior referencing WAI-ARIA patterns:

| Key | Action |
|-----|--------|
| Enter/Space | [Specific behavior] |
| Tab | [Focus behavior] |
| Escape | [If applicable] |

### ARIA Implementation
- **Role**: [Component's semantic role]
- **States**: [Dynamic ARIA states managed]
- **Properties**: [Static ARIA properties]

### Consumer Responsibilities
**Critical**: Explicitly define what the consumer must provide for accessibility:

> **Your Responsibility**: You must provide [specific requirement, e.g., "a descriptive aria-label"]. This component provides [what's built-in].

## Testing Strategy Documentation

### Multi-Layer Testing Approach
| Test Type | Purpose | Tool | Coverage |
|-----------|---------|------|----------|
| Unit | Logic & rendering | Jest + RTL | Prop handling, state |
| Interaction | User flows | Storybook play functions | Click, type, navigation |
| Visual | UI consistency | Chromatic | Layout, styling, themes |
| A11y | WCAG compliance | @storybook/addon-a11y | Automated violations |

### Test Documentation Requirements
- Link to unit test files and coverage reports
- Highlight stories with play functions for interaction testing
- Explain visual regression workflow and link to test history

## ArgTypes Configuration

```tsx
argTypes: {
  // Most critical prop first
  variant: {
    control: 'select',
    options: ['primary', 'default', 'destructive'],
    description: 'Visual style and semantic meaning',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'default' },
    },
  },
  // Behavioral props
  disabled: {
    control: 'boolean',
    description: 'Prevents user interaction',
  },
  // Always include for testing
  testId: {
    control: 'text',
    description: 'Test identifier for automated testing',
  },
  // Hide internal/advanced props from controls
  className: { table: { disable: true } },
},
```

## Advanced Topics (When Applicable)

### Theming Support
- Document how component responds to theme changes
- Include interactive theme switcher using @storybook/addon-themes
- Explain design token usage

### Performance Considerations
For complex components, document:
- Memoization strategies
- Data requirements for optimal performance
- Virtualization (for lists)
- Lazy loading patterns

### Versioning & Changes
- Link to component's CHANGELOG.md
- Mark deprecated props with migration guidance
- Indicate component maturity level (Alpha, Beta, Stable)

## Documentation Anti-Patterns

### ❌ Avoid
- Verbose introductions explaining obvious functionality
- Separate testing documentation (integrate with main docs)
- Documenting every possible prop combination
- Generic examples ("Click me", "Hello world")
- Academic explanations without practical guidance

### ✅ Do
- Lead with code examples
- Use domain-specific, realistic content
- Group related information (accessibility + testing)
- Prioritize common use cases (80/20 rule)
- Provide clear "when to use" guidance

## Quality Checklist

### Foundation
- [ ] Component wrapped in correct providers (ThemeProvider, etc.)
- [ ] Meta configured with `tags: ['autodocs']`
- [ ] Clear narrative explaining purpose and use cases

### Interactive Playground
- [ ] Primary story with well-configured argTypes
- [ ] Controls focus on developer-relevant props
- [ ] Realistic default values and examples

### Story Gallery
- [ ] All variants demonstrated in single story
- [ ] States story showing normal/disabled/loading
- [ ] Examples story with real-world integration

### Accessibility
- [ ] All stories pass @storybook/addon-a11y with zero violations
- [ ] Keyboard interactions documented in table format
- [ ] ARIA implementation clearly explained
- [ ] Consumer responsibilities explicitly defined

### Testing
- [ ] Testing strategy overview provided
- [ ] Links to unit tests and coverage reports
- [ ] Key user flows tested with play functions
- [ ] Visual regression workflow explained

### Advanced (If Applicable)
- [ ] Theming behavior documented with interactive switcher
- [ ] Performance considerations for complex components
- [ ] Changelog linked and deprecations marked
- [ ] Component maturity level indicated

## Writing Guidelines

### Tone
- **Concise**: Every word adds value
- **Practical**: Focus on implementation, not theory
- **Authoritative**: Clear guidance on when/how to use

### Structure
- **Inverted pyramid**: Most important information first
- **Scannable**: Use bullets, tables, and clear headings
- **Progressive**: Build complexity gradually

### Examples
- **Realistic**: Use domain-appropriate content ("Save Game", not "Click Me")
- **Complete**: Include necessary imports and context
- **Purposeful**: Each example demonstrates something new