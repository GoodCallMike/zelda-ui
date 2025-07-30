import type { Meta, StoryObj } from '@storybook/react';

// Dummy component for documentation purposes
const DesignSystem = () => null;

const meta: Meta<typeof DesignSystem> = {
  title: 'Foundation/Design System',
  component: DesignSystem,
  parameters: {
    docs: {
      description: {
        component: `Design System component for comprehensive UI development with accessibility and testing support.

## Overview

The Design System provides a complete foundation for building consistent, scalable, and maintainable user interfaces. It supports utility-first development, responsive design, dark mode, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { cn } from '@jetstream/core';
import { Button, Card } from '@jetstream/core';

// Basic usage
<div className="flex items-center gap-4 p-6 bg-white rounded-lg">
  <span className="text-lg font-semibold">Hello World</span>
</div>

// With conditional styling
<button className={cn(
  'px-4 py-2 rounded-md transition-colors',
  isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
)}>
  Button
</button>
\`\`\`

## System Architecture

### Design Tokens
\`\`\`tsx
// CSS Variables for consistent theming
:root {
  --blue-500: #3b82f6;
  --spacing-4: 1rem;
  --text-lg: 1.125rem;
}
\`\`\`

### Utility Classes
\`\`\`tsx
// Atomic CSS classes for rapid development
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  Content
</div>
\`\`\`

## Accessibility

The Design System is fully accessible with:

- **Focus Management**: Visible focus indicators on all interactive elements
- **Color Contrast**: WCAG AA compliant color combinations
- **Responsive Design**: Mobile-first approach with proper touch targets

\`\`\`tsx
// Accessibility example
<button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Accessible Button
</button>
\`\`\`

## Testing

Built-in testing support with utility classes:

\`\`\`tsx
<div className="flex items-center" data-testid="component">
  Content
</div>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('component');
expect(element).toHaveClass('flex items-center');
\`\`\`

## Best Practices

### Do
- Use utility-first approach for rapid development
- Follow mobile-first responsive design patterns
- Include focus states for all interactive elements

### Don't
- Write custom CSS when utilities exist
- Ignore accessibility requirements
- Use dynamic class names that break purging

## Philosophy

Our design system is built on four core principles:

1. **Consistency** - Unified visual language across all components and applications
2. **Scalability** - Modular architecture that grows with your product
3. **Accessibility** - WCAG 2.1 AA compliant by default
4. **Developer Experience** - Intuitive APIs with TypeScript support

## Architecture Overview

The design system follows a layered architecture approach:

### 1. Design Tokens (Foundation Layer)
**CSS Variables** - Semantic design tokens defined in \`variables.css\`
- Color palettes with automatic dark mode support
- Typography scales using mathematical ratios
- Spacing systems based on 4px grid
- Border radius, shadows, and animation tokens

### 2. Utility Layer
**Utility Classes** - Atomic CSS classes generated in \`utilities.css.ts\`
- Layout utilities (flexbox, grid, positioning)
- Spacing utilities (margin, padding)
- Typography utilities (font sizes, weights, line heights)
- Color utilities (backgrounds, text, borders)
- Interactive utilities (hover, focus, active states)

### 3. Component Layer
**React Components** - Composable UI components built with utilities
- Primitive components (Button, Input, Card)
- Composite components (Forms, Navigation, Data Display)
- Layout components (Container, Stack, Grid)

### 4. Pattern Layer
**Design Patterns** - Common UI patterns and templates
- Page layouts and templates
- Form patterns and validation
- Navigation patterns
- Data visualization patterns

## Getting Started

### Installation & Setup

\`\`\`bash
npm install @jetstream/core @jetstream/icons
\`\`\`

### Basic Usage

\`\`\`tsx
import { cn } from '@jetstream/core';
import { Button, Card, Stack } from '@jetstream/core';

// Using utility classes directly
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <span className="text-lg font-semibold text-gray-900">Hello World</span>
</div>

// Using the cn() utility for conditional classes
<button className={cn(
  'px-4 py-2 rounded-md transition-colors font-medium',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  isActive 
    ? 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500' 
    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-500'
)}>
  {isActive ? 'Active' : 'Inactive'}
</button>

// Using pre-built components
<Card className="max-w-md">
  <Stack gap={4}>
    <h2 className="text-xl font-semibold">Component Example</h2>
    <p className="text-gray-600">This demonstrates our component-based approach.</p>
    <Button variant="primary" size="md">
      Get Started
    </Button>
  </Stack>
</Card>
\`\`\`

### Advanced Patterns

\`\`\`tsx
// Responsive design with breakpoint utilities
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {items.map(item => (
    <Card key={item.id} className="p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
    </Card>
  ))}
</div>

// Dark mode with theme-aware utilities
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <nav className="border-b border-gray-200 dark:border-gray-700">
    <div className="px-4 py-3">
      <h1 className="text-xl font-bold">Navigation</h1>
    </div>
  </nav>
</div>

// Complex interactive states
<button className={cn(
  // Base styles
  'relative px-4 py-2 rounded-md font-medium transition-all duration-200',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  
  // State-based styles
  isLoading && 'cursor-not-allowed opacity-75',
  isDisabled && 'cursor-not-allowed opacity-50',
  
  // Variant styles
  variant === 'primary' && [
    'bg-blue-500 text-white',
    'hover:bg-blue-600 active:bg-blue-700',
    'focus:ring-blue-500',
    'disabled:bg-blue-300'
  ],
  
  variant === 'secondary' && [
    'bg-gray-100 text-gray-900 border border-gray-300',
    'hover:bg-gray-200 active:bg-gray-300',
    'focus:ring-gray-500',
    'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600',
    'dark:hover:bg-gray-700'
  ]
)}>
  {isLoading ? <Spinner size="sm" /> : children}
</button>
\`\`\`

## Best Practices

### 1. Utility-First Approach
- Start with utility classes for rapid prototyping
- Extract common patterns into reusable components
- Use the \`cn()\` utility for conditional styling

### 2. Responsive Design
- Mobile-first approach with \`sm:\`, \`md:\`, \`lg:\` prefixes
- Use responsive typography and spacing
- Test across all breakpoints

### 3. Accessibility
- Always include focus states with \`focus:\` utilities
- Use semantic HTML elements
- Provide adequate color contrast
- Include ARIA attributes where needed

### 4. Performance
- Utility classes are automatically purged in production
- Use CSS variables for dynamic theming
- Minimize custom CSS in favor of utilities

### 5. Maintainability
- Follow consistent naming conventions
- Document custom components thoroughly
- Use TypeScript for better developer experience
- Leverage design tokens for consistency
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div className="prose max-w-4xl">
        <h2>Design System Components</h2>
        <p>Explore the different aspects of our design system:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Colors</h3>
            <p className="text-sm text-gray-600 mb-4">Semantic color palette with light/dark mode support</p>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <div className="w-6 h-6 bg-gray-500 rounded"></div>
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Typography</h3>
            <p className="text-sm text-gray-600 mb-4">Major third scale with consistent line heights</p>
            <div className="space-y-1">
              <div className="text-xs">Extra Small</div>
              <div className="text-sm">Small</div>
              <div className="text-base">Base</div>
              <div className="text-lg">Large</div>
            </div>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Spacing</h3>
            <p className="text-sm text-gray-600 mb-4">Consistent spacing scale for margins and padding</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500"></div>
              <div className="w-4 h-4 bg-blue-500"></div>
              <div className="w-6 h-6 bg-blue-500"></div>
              <div className="w-8 h-8 bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Utilities: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Utility Classes Reference</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Layout & Display</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Display</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .block, .inline, .inline-block<br/>
              .flex, .inline-flex, .grid, .hidden
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Position</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .relative, .absolute, .fixed<br/>
              .sticky, .static
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Flexbox</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2">Direction</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .flex-row<br/>
              .flex-col
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Align Items</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .items-start<br/>
              .items-center<br/>
              .items-end
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Justify Content</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .justify-start<br/>
              .justify-center<br/>
              .justify-end<br/>
              .justify-between
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Grid</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Template Columns</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .grid-cols-1, .grid-cols-2<br/>
              .grid-cols-3, .grid-cols-4<br/>
              .grid-cols-6, .grid-cols-12
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Column Span</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .col-span-1, .col-span-2<br/>
              .col-span-3, .col-span-4<br/>
              .col-span-6, .col-span-12
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Spacing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Padding</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .p-0, .p-1, .p-2, .p-3, .p-4, .p-6, .p-8<br/>
              .px-2, .px-3, .px-4, .px-6<br/>
              .py-1, .py-2, .py-3
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Margin</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .m-0, .m-1, .m-2, .m-4<br/>
              .mx-auto, .mb-2, .mb-4<br/>
              .mt-2, .mt-4
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Sizing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2">Width</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .w-3, .w-4, .w-5, .w-6<br/>
              .w-8, .w-10, .w-12<br/>
              .w-auto, .w-full, .w-fit
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Height</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .h-3, .h-4, .h-5, .h-6<br/>
              .h-8, .h-10, .h-12<br/>
              .h-auto, .h-full, .h-screen
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Square Size</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              .size-3, .size-4, .size-5<br/>
              .size-6, .size-8, .size-10<br/>
              .size-12
            </code>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Tokens: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">CSS Variables Reference</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Primary Colors</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              --blue-500: #3b82f6<br/>
              --blue-600: #2563eb<br/>
              --white: #ffffff
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Gray Scale</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              --gray-50 to --gray-900<br/>
              (9 shades available)
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Spacing Scale</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Base Spacing</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              --spacing-0: 0<br/>
              --spacing-1: 0.25rem (4px)<br/>
              --spacing-2: 0.5rem (8px)<br/>
              --spacing-3: 0.75rem (12px)<br/>
              --spacing-4: 1rem (16px)<br/>
              --spacing-6: 1.5rem (24px)<br/>
              --spacing-8: 2rem (32px)
            </code>
          </div>
          <div>
            <h4 className="font-medium mb-2">Sizing</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              --size-8: 2rem (32px)<br/>
              --size-64: 16rem (256px)<br/>
              --size-72: 18rem (288px)
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Typography Scale</h3>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Major Third Scale (1.25 ratio) for harmonious typography</p>
          <code className="text-sm bg-gray-100 p-4 rounded block">
            --text-xs: 0.64rem (10.24px)<br/>
            --text-sm: 0.8rem (12.8px)<br/>
            --text-base: 1rem (16px)<br/>
            --text-lg: 1.25rem (20px)<br/>
            --text-xl: 1.563rem (25px)<br/>
            --text-2xl: 1.953rem (31.25px)<br/>
            --text-3xl: 2.441rem (39.06px)<br/>
            --text-4xl: 3.052rem (48.83px)
          </code>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Border Radius</h3>
        <code className="text-sm bg-gray-100 p-2 rounded block">
          --radius-sm: 0.125rem (2px)<br/>
          --radius-md: 0.375rem (6px)<br/>
          --radius-lg: 0.5rem (8px)
        </code>
      </section>
    </div>
  ),
};

export const Patterns: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Common Layout Patterns</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Card Layout</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Card Title</h4>
          <p className="text-gray-600 mb-4">Card content goes here with proper spacing and typography.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Action
          </button>
        </div>
        <code className="text-sm bg-gray-100 p-4 rounded block mt-4">
          {`<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
  <h4 className="text-lg font-semibold mb-2">Card Title</h4>
  <p className="text-gray-600 mb-4">Card content...</p>
  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
    Action
  </button>
</div>`}
        </code>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Flex Layouts</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Horizontal Stack</h4>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div className="flex-1">
                <div className="font-medium">Title</div>
                <div className="text-sm text-gray-600">Description</div>
              </div>
              <button className="px-3 py-1 text-sm bg-gray-200 rounded">Action</button>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block mt-2">
              {`<div className="flex items-center gap-4">`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Vertical Stack</h4>
            <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded">
              <div className="font-medium">Item 1</div>
              <div className="font-medium">Item 2</div>
              <div className="font-medium">Item 3</div>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block mt-2">
              {`<div className="flex flex-col gap-3">`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Space Between</h4>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
              <span className="font-medium">Left Content</span>
              <span className="text-sm text-gray-600">Right Content</span>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block mt-2">
              {`<div className="flex justify-between items-center">`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Grid Layouts</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Responsive Grid</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="p-4 bg-gray-100 rounded text-center">
                  Item {i}
                </div>
              ))}
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block mt-2">
              {`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Equal Height Columns</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded">
                <h5 className="font-medium mb-2">Column 1</h5>
                <p className="text-sm">Short content</p>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <h5 className="font-medium mb-2">Column 2</h5>
                <p className="text-sm">Much longer content that spans multiple lines to demonstrate how grid maintains equal heights automatically.</p>
              </div>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block mt-2">
              {`<div className="grid grid-cols-2 gap-4">`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Form Layouts</h3>
        <div className="space-y-4 max-w-md">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Label</label>
            <input className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
        <code className="text-sm bg-gray-100 p-4 rounded block mt-4">
          {`<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-700">Label</label>
  <input className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
</div>

<div className="flex gap-4">
  <div className="flex-1">
    <label>First Name</label>
    <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
  </div>
  <div className="flex-1">
    <label>Last Name</label>
    <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
  </div>
</div>`}
        </code>
      </section>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Dark Mode Support</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Implementation Strategy</h3>
        <p className="text-gray-600 mb-4">
          Dark mode is controlled by the <code className="bg-gray-100 px-2 py-1 rounded">data-theme="dark"</code> attribute on a parent element (typically <code>html</code> or <code>body</code>).
          Our CSS variables automatically switch values based on this attribute, and utility classes use the <code className="bg-gray-100 px-2 py-1 rounded">dark:</code> prefix for theme-specific styles.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 className="font-medium mb-2">Theme Toggle Implementation</h4>
          <code className="text-sm bg-white p-3 rounded block">
            {`// Theme provider setup
const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

// Initialize theme on app load
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = savedTheme || systemTheme;
  document.documentElement.setAttribute('data-theme', theme);
};`}
          </code>
        </div>
        
        <code className="text-sm bg-gray-100 p-4 rounded block">
          {`<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  <p className="text-gray-600 dark:text-gray-400">
    This text adapts to light and dark themes automatically
  </p>
  <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
    Theme-aware button
  </button>
</div>`}
        </code>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Comprehensive Dark Mode Patterns</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Surface Colors (Backgrounds)</h4>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs">bg-white dark:bg-gray-900</code>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">Primary surface</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                <code className="text-xs">bg-gray-50 dark:bg-gray-800</code>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">Secondary surface</p>
              </div>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              {`// Surface hierarchy
bg-white dark:bg-gray-900        // Primary background
bg-gray-50 dark:bg-gray-800      // Secondary background  
bg-gray-100 dark:bg-gray-700     // Tertiary background
bg-gray-200 dark:bg-gray-600     // Interactive surfaces`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-3">Text Colors</h4>
            <div className="space-y-2 mb-3">
              <p className="text-gray-900 dark:text-gray-100 text-sm">Primary text (gray-900/gray-100)</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Secondary text (gray-700/gray-300)</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Tertiary text (gray-600/gray-400)</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Disabled text (gray-500/gray-500)</p>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              {`// Text hierarchy with proper contrast ratios
text-gray-900 dark:text-gray-100  // Primary text (21:1 / 21:1)
text-gray-700 dark:text-gray-300  // Secondary text (12.6:1 / 12.6:1)
text-gray-600 dark:text-gray-400  // Tertiary text (7:1 / 7:1)
text-gray-500 dark:text-gray-500  // Disabled text (4.5:1 / 4.5:1)`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-3">Borders & Dividers</h4>
            <div className="space-y-2 mb-3">
              <div className="border-t border-gray-300 dark:border-gray-600 pt-2">
                <code className="text-xs">border-gray-300 dark:border-gray-600</code> - Primary borders
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <code className="text-xs">border-gray-200 dark:border-gray-700</code> - Subtle borders
              </div>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              {`border-gray-300 dark:border-gray-600  // Primary borders
border-gray-200 dark:border-gray-700  // Subtle borders
border-gray-100 dark:border-gray-800  // Very subtle borders`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-3">Interactive States</h4>
            <div className="space-y-3 mb-3">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded transition-colors">
                Hover me
              </button>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                Focus me
              </button>
            </div>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              {`// Interactive state patterns
hover:bg-gray-100 dark:hover:bg-gray-700
focus:ring-blue-500 dark:focus:ring-blue-400
focus:ring-offset-2 dark:focus:ring-offset-gray-800
active:bg-gray-200 dark:active:bg-gray-600`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Advanced Dark Mode Techniques</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">CSS Variable Approach</h4>
            <p className="text-sm text-gray-600 mb-3">
              For complex components, use CSS variables that automatically switch based on theme:
            </p>
            <code className="text-sm bg-gray-100 p-4 rounded block">
              {`:root {
  --color-surface: #ffffff;
  --color-surface-secondary: #f9fafb;
  --color-text-primary: #111827;
}

[data-theme="dark"] {
  --color-surface: #111827;
  --color-surface-secondary: #1f2937;
  --color-text-primary: #f9fafb;
}

.my-component {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
}`}
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Image & Icon Handling</h4>
            <div className="flex gap-4 items-center mb-3">
              <div className="w-8 h-8 bg-gray-900 dark:bg-gray-100 rounded" title="Inverted square"></div>
              <div className="w-8 h-8 bg-blue-500 rounded" title="Brand color (unchanged)"></div>
              <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600 rounded" title="Neutral adapted"></div>
            </div>
            <code className="text-sm bg-gray-100 p-4 rounded block">
              {`// Icon color adaptation
<Icon className="text-gray-900 dark:text-gray-100" />

// Image with dark mode variant
<img 
  src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
  alt="Logo"
/>

// CSS filter approach for simple icons
.icon-dark-mode {
  filter: invert(1) hue-rotate(180deg);
}`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Complete Example Component</h3>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm dark:shadow-gray-900/20">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Dark Mode Card Example
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete implementation with all interactive states
              </p>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                Primary Action
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                Secondary
              </button>
            </div>
            
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Status: Active</span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span>Updated 2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        
        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
            View complete code example
          </summary>
          <code className="text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded block mt-2 overflow-x-auto">
            {`<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm dark:shadow-gray-900/20">
  <div className="flex items-start justify-between mb-4">
    <div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
        Dark Mode Card Example
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Complete implementation with all interactive states
      </p>
    </div>
    <button className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
      {/* Menu icon */}
    </button>
  </div>
  
  <div className="space-y-3">
    <div className="flex gap-3">
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
        Primary Action
      </button>
      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
        Secondary
      </button>
    </div>
    
    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>Status: Active</span>
        <span className="text-gray-400 dark:text-gray-500">•</span>
        <span>Updated 2 hours ago</span>
      </div>
    </div>
  </div>
</div>`}
          </code>
        </details>
      </section>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Best Practices & Guidelines</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">1. Utility-First Development</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2 text-green-700">✅ Do: Start with utilities</h4>
            <code className="text-sm bg-green-50 border border-green-200 p-3 rounded block">
              {`// Good: Compose styles with utilities
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Click me
</button>`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-red-700">❌ Don't: Write custom CSS first</h4>
            <code className="text-sm bg-red-50 border border-red-200 p-3 rounded block">
              {`/* Bad: Custom CSS that duplicates utilities */
.my-button {
  padding: 1rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.my-button:hover {
  background-color: #2563eb;
}`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-blue-700">💡 Better: Extract to component when needed</h4>
            <code className="text-sm bg-blue-50 border border-blue-200 p-3 rounded block">
              {`// Good: Reusable component with utility classes
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  return (
    <button
      className={cn(
        // Base styles
        'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        
        // Size variants
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',
        
        // Color variants
        variant === 'primary' && 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
        variant === 'secondary' && 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500'
      )}
      {...props}
    >
      {children}
    </button>
  );
};`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">2. Responsive Design Patterns</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Mobile-First Approach</h4>
            <p className="text-sm text-gray-600 mb-3">
              Always start with mobile styles, then enhance for larger screens using responsive prefixes.
            </p>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// Good: Mobile-first responsive design
<div className="
  flex flex-col gap-4          // Mobile: vertical stack
  md:flex-row md:gap-6        // Tablet+: horizontal layout
  lg:gap-8                    // Desktop: larger gaps
">
  <div className="
    w-full                     // Mobile: full width
    md:w-1/3                  // Tablet+: 1/3 width
    lg:w-1/4                  // Desktop: 1/4 width
  ">
    Sidebar
  </div>
  <div className="
    w-full                     // Mobile: full width
    md:w-2/3                  // Tablet+: 2/3 width
    lg:w-3/4                  // Desktop: 3/4 width
  ">
    Main content
  </div>
</div>`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Responsive Typography</h4>
            <div className="space-y-2 mb-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Responsive Heading</h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">Responsive body text that scales appropriately.</p>
            </div>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>
<p className="text-sm md:text-base lg:text-lg text-gray-600">
  Responsive body text
</p>`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">3. Accessibility Guidelines</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Focus Management</h4>
            <div className="space-y-2 mb-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Proper focus ring
              </button>
              <input className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Accessible input" />
            </div>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// Always include focus styles
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2

// For inputs, also change border color
focus:border-blue-500

// Dark mode focus rings need offset adjustment
dark:focus:ring-offset-gray-800`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Color Contrast</h4>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="bg-blue-500 text-white p-3 rounded">
                <span className="text-sm">Good contrast (4.5:1+)</span>
              </div>
              <div className="bg-yellow-200 text-yellow-800 p-3 rounded">
                <span className="text-sm">Sufficient contrast</span>
              </div>
            </div>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// Ensure sufficient contrast ratios
// Normal text: 4.5:1 minimum
// Large text: 3:1 minimum
// Interactive elements: 3:1 minimum

// Good combinations:
text-gray-900 on bg-white     // 21:1
text-white on bg-blue-500     // 4.5:1
text-blue-800 on bg-blue-100  // 7.2:1`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Interactive States</h4>
            <div className="space-y-2 mb-3">
              <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
                All states defined
              </button>
              <button disabled className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed opacity-60">
                Disabled state
              </button>
            </div>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// Define all interactive states
className={cn(
  'px-4 py-2 rounded-md transition-colors',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  
  // Default state
  'bg-gray-200 text-gray-900',
  
  // Interactive states
  'hover:bg-gray-300',
  'active:bg-gray-400',
  'focus:ring-gray-500',
  
  // Disabled state
  'disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-gray-200'
)}`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">4. Performance Optimization</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">CSS Purging</h4>
            <p className="text-sm text-gray-600 mb-3">
              Unused utility classes are automatically removed in production builds, keeping bundle sizes minimal.
            </p>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Scan these files for class usage
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Only classes found in these files will be included in the final CSS
}`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Dynamic Class Generation</h4>
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 p-3 rounded">
                <h5 className="font-medium text-red-800 mb-1">❌ Avoid: Dynamic class names</h5>
                <code className="text-xs text-red-700">
                  {`// Bad: These classes might not be included in build
const width = 'w-' + size;  // w-4, w-8, etc.
className={\`text-\${color}-500\`}  // text-red-500, text-blue-500, etc.`}
                </code>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-3 rounded">
                <h5 className="font-medium text-green-800 mb-1">✅ Better: Explicit class mapping</h5>
                <code className="text-xs text-green-700">
                  {`// Good: Explicit mapping ensures classes are preserved
const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
};

const colorClasses = {
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500'
};

className={sizeClasses[size]}`}
                </code>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Bundle Size Monitoring</h4>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// Use bundle analyzer to monitor CSS size
npm install --save-dev @next/bundle-analyzer

// Check utility usage
npx tailwindcss-cli build src/styles.css -o dist/styles.css --purge src/**/*.js

// Typical production CSS sizes:
// Base utilities: ~8-15KB gzipped
// With components: ~20-40KB gzipped
// Full framework: ~3MB+ (never ship this)`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">5. Component Architecture</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Composition over Configuration</h4>
            <code className="text-sm bg-gray-100 p-4 rounded block">
              {`// Good: Composable components
const Card = ({ children, className, ...props }) => (
  <div className={cn('bg-white rounded-lg border border-gray-200 shadow-sm', className)} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={cn('px-6 py-4 border-b border-gray-200', className)} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={cn('px-6 py-4', className)} {...props}>
    {children}
  </div>
);

// Usage
<Card>
  <CardHeader>
    <h3 className="text-lg font-semibold">Title</h3>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Variant Management</h4>
            <code className="text-sm bg-gray-100 p-4 rounded block">
              {`// Use cva (class-variance-authority) for complex variants
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button = ({ variant, size, className, ...props }) => (
  <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
);`}
            </code>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Performance: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Performance & Optimization</h2>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">Bundle Size Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-700 mb-1">8-15KB</div>
            <div className="text-sm text-green-600 mb-2">Base utilities (gzipped)</div>
            <div className="text-xs text-green-600">Layout, spacing, typography</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-700 mb-1">20-40KB</div>
            <div className="text-sm text-blue-600 mb-2">With components (gzipped)</div>
            <div className="text-xs text-blue-600">Typical production app</div>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-700 mb-1">3MB+</div>
            <div className="text-sm text-red-600 mb-2">Full framework</div>
            <div className="text-xs text-red-600">Never ship this!</div>
          </div>
        </div>
        
        <code className="text-sm bg-gray-100 p-4 rounded block">
          {`// Analyze your bundle
npm install --save-dev webpack-bundle-analyzer

// Check CSS size in production
npm run build && npx webpack-bundle-analyzer build/static/css/*.css

// Monitor utility usage
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

// Production build with purging
npx tailwindcss build src/styles.css -o dist/styles.css --purge 'src/**/*.{js,jsx,ts,tsx}'`}
        </code>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Runtime Performance</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">CSS-in-JS vs Utility Classes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 p-4 rounded">
                <h5 className="font-medium text-red-800 mb-2">❌ Runtime CSS-in-JS</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Styles computed at runtime</li>
                  <li>• JavaScript bundle overhead</li>
                  <li>• Potential layout thrashing</li>
                  <li>• Hydration mismatches</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 p-4 rounded">
                <h5 className="font-medium text-green-800 mb-2">✅ Static Utility Classes</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Pre-compiled CSS</li>
                  <li>• No runtime overhead</li>
                  <li>• Optimal caching</li>
                  <li>• SSR friendly</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Efficient Class Composition</h4>
            <code className="text-sm bg-gray-100 p-4 rounded block">
              {`// Efficient: Pre-compute class strings
const baseClasses = 'flex items-center gap-2 px-4 py-2 rounded-md transition-colors';
const variantClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
};

// Good: Minimal runtime computation
const className = cn(baseClasses, variantClasses[variant]);

// Avoid: Complex runtime logic
const className = cn(
  'flex items-center gap-2 px-4 py-2 rounded-md transition-colors',
  variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
  variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  size === 'sm' && 'text-sm px-3 py-1.5',
  size === 'lg' && 'text-lg px-6 py-3',
  disabled && 'opacity-50 cursor-not-allowed',
  // ... many more conditions
);`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Optimization Strategies</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">1. Critical CSS Inlining</h4>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// Extract critical utilities for above-the-fold content
// inline in <head> for fastest rendering

/* Critical utilities */
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.p-4 { padding: 1rem; }
.text-lg { font-size: 1.125rem; }
.font-semibold { font-weight: 600; }

// Load remaining utilities asynchronously
<link rel="preload" href="/styles/utilities.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">2. Component-Level Code Splitting</h4>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// Split utilities by component usage
// Base utilities (always loaded)
@import 'utilities/layout.css';     // flex, grid, positioning
@import 'utilities/spacing.css';    // margin, padding
@import 'utilities/typography.css'; // text sizes, weights

// Feature-specific utilities (lazy loaded)
@import 'utilities/forms.css';      // form-specific utilities
@import 'utilities/animations.css'; // animation utilities
@import 'utilities/charts.css';     // data visualization utilities

// Load conditionally based on route/component
if (route.includes('/dashboard')) {
  import('./utilities/charts.css');
}`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">3. Build-Time Optimizations</h4>
            <code className="text-sm bg-gray-100 p-3 rounded block">
              {`// tailwind.config.js - Production optimizations
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Be specific to avoid scanning unnecessary files
    '!./src/**/*.test.{js,ts,jsx,tsx}',
    '!./src/**/*.stories.{js,ts,jsx,tsx}',
  ],
  
  // Remove unused variants
  corePlugins: {
    float: false,           // Remove if not used
    clear: false,           // Remove if not used
    skew: false,            // Remove if not used
  },
  
  // Optimize for production
  ...(process.env.NODE_ENV === 'production' && {
    plugins: [
      require('@tailwindcss/forms'),
      require('tailwindcss-animate'),
    ],
  }),
};`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-3">Key Metrics to Track</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-blue-700 mb-2">Bundle Metrics</h5>
              <ul className="space-y-1 text-blue-600">
                <li>• CSS bundle size (gzipped)</li>
                <li>• Unused CSS percentage</li>
                <li>• Critical CSS coverage</li>
                <li>• Cache hit rates</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-700 mb-2">Runtime Metrics</h5>
              <ul className="space-y-1 text-blue-600">
                <li>• First Contentful Paint (FCP)</li>
                <li>• Largest Contentful Paint (LCP)</li>
                <li>• Cumulative Layout Shift (CLS)</li>
                <li>• Time to Interactive (TTI)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <code className="text-sm bg-gray-100 p-4 rounded block mt-4">
          {`// Performance monitoring setup
// 1. Bundle analysis
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/css/*.css

// 2. Lighthouse CI for automated testing
npm install --save-dev @lhci/cli
npx lhci autorun

// 3. Real User Monitoring (RUM)
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);

// 4. CSS coverage analysis
// Chrome DevTools > Coverage tab
// Identify unused CSS for optimization`}
        </code>
      </section>
    </div>
  ),
};