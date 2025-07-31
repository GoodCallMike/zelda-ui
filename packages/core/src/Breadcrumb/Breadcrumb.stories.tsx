import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Breadcrumb component for showing navigation hierarchy with comprehensive accessibility and testing support.

## Overview

The Breadcrumb component provides a way to show users their current location within a navigational hierarchy. It supports clickable links, custom separators, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Breadcrumb } from '@zelda/core';

// Basic breadcrumb
<Breadcrumb items={[
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Current Page' }
]} />

// With click handlers
<Breadcrumb items={[
  { title: 'Home', onClick: () => navigate('/') },
  { title: 'Dashboard', onClick: () => navigate('/dashboard') },
  { title: 'Settings' }
]} />
\`\`\`

## Navigation Types

### Link Navigation
\`\`\`tsx
<Breadcrumb items={[
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Current Page' }
]} />
\`\`\`

### Click Handler Navigation
\`\`\`tsx
<Breadcrumb items={[
  { title: 'Home', onClick: () => handleNavigation('home') },
  { title: 'Category', onClick: () => handleNavigation('category') },
  { title: 'Current Page' }
]} />
\`\`\`

### Mixed Navigation
\`\`\`tsx
<Breadcrumb items={[
  { title: 'Home', href: '/' },
  { title: 'Category', onClick: () => handleCategoryClick() },
  { title: 'Current Page' }
]} />
\`\`\`

## Customization

### Custom Separators
\`\`\`tsx
// Text separator
<Breadcrumb 
  separator=">"
  items={breadcrumbItems}
/>

// Icon separator
<Breadcrumb 
  separator={<ChevronRightIcon />}
  items={breadcrumbItems}
/>
\`\`\`

## Accessibility

The Breadcrumb component is fully accessible with:

- **Semantic markup**: Uses \`nav\` and \`ol\` elements for proper structure
- **ARIA labels**: Includes \`aria-label="Breadcrumb"\` for screen readers
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus management**: Clear focus indicators for all clickable items
- **Screen reader support**: Proper announcement of navigation hierarchy

\`\`\`tsx
// Accessible breadcrumb with custom aria-label
<Breadcrumb 
  aria-label="Page navigation"
  items={breadcrumbItems}
/>
\`\`\`

## Testing

Built-in testing support with standard HTML attributes:

\`\`\`tsx
<Breadcrumb 
  data-testid="page-breadcrumb"
  items={breadcrumbItems}
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('page-breadcrumb');
screen.getByRole('navigation', { name: 'Breadcrumb' });
screen.getByRole('link', { name: 'Home' });
\`\`\`

## Best Practices

### Do
- Keep breadcrumb paths concise and meaningful
- Use consistent navigation patterns (all links or all click handlers)
- Provide clear visual hierarchy with the current page
- Include \`data-testid\` for reliable testing
- Use semantic separators that make sense contextually

### Don't
- Make breadcrumbs too deep (limit to 5-7 levels)
- Use breadcrumbs as the primary navigation method
- Make the current page clickable
- Use overly complex or distracting separators
- Forget to handle navigation errors gracefully
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      description: 'Array of breadcrumb items with title and navigation properties',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
      },
    },
    separator: {
      control: 'text',
      description: 'Custom separator between breadcrumb items',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '/' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Home', href: '/' },
      { title: 'Products', href: '/products' },
      { title: 'Laptop' },
    ],
  },
};

export const NavigationTypes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Link Navigation</h3>
        <Breadcrumb items={[
          { title: 'Home', href: '/' },
          { title: 'Products', href: '/products' },
          { title: 'Current Page' },
        ]} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Click Handler Navigation</h3>
        <Breadcrumb items={[
          { title: 'Home', onClick: () => alert('Navigate to Home') },
          { title: 'Category', onClick: () => alert('Navigate to Category') },
          { title: 'Current Page' },
        ]} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Mixed Navigation</h3>
        <Breadcrumb items={[
          { title: 'Home', href: '/' },
          { title: 'Dashboard', onClick: () => alert('Navigate to Dashboard') },
          { title: 'Settings' },
        ]} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different navigation methods including links, click handlers, and mixed approaches.',
      },
    },
  },
};

export const CustomSeparators: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Default Separator (/)</h3>
        <Breadcrumb items={[
          { title: 'Home', href: '/' },
          { title: 'Products', href: '/products' },
          { title: 'Current Page' },
        ]} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Arrow Separator (&gt;)</h3>
        <Breadcrumb 
          separator=">"
          items={[
            { title: 'Home', href: '/' },
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Settings' },
          ]} 
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Icon Separator</h3>
        <Breadcrumb 
          separator={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          }
          items={[
            { title: 'Home', href: '/' },
            { title: 'Users', href: '/users' },
            { title: 'John Doe' },
          ]} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various separator styles including text and icon separators.',
      },
    },
  },
};

export const PathLengths: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Short Path</h3>
        <Breadcrumb items={[
          { title: 'Home', href: '/' },
          { title: 'Current Page' },
        ]} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium Path</h3>
        <Breadcrumb items={[
          { title: 'Home', href: '/' },
          { title: 'Products', href: '/products' },
          { title: 'Electronics', href: '/products/electronics' },
          { title: 'Laptops' },
        ]} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Long Path</h3>
        <Breadcrumb items={[
          { title: 'Home', href: '/' },
          { title: 'Applications', href: '/apps' },
          { title: 'E-commerce', href: '/apps/ecommerce' },
          { title: 'Products', href: '/apps/ecommerce/products' },
          { title: 'Electronics', href: '/apps/ecommerce/products/electronics' },
          { title: 'Laptops', href: '/apps/ecommerce/products/electronics/laptops' },
          { title: 'MacBook Pro 16"' },
        ]} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with different path lengths from short to long hierarchies.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">E-commerce Product Page</h3>
        <div className="p-4 border rounded-lg">
          <Breadcrumb 
            data-testid="product-breadcrumb"
            items={[
              { title: 'Home', href: '/' },
              { title: 'Electronics', href: '/electronics' },
              { title: 'Laptops', href: '/electronics/laptops' },
              { title: 'MacBook Pro 16"' },
            ]} 
          />
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h4 className="font-medium">MacBook Pro 16"</h4>
            <p className="text-sm text-gray-600 mt-1">Product details would appear here...</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Admin Dashboard</h3>
        <div className="p-4 border rounded-lg">
          <Breadcrumb 
            separator=">"
            data-testid="admin-breadcrumb"
            items={[
              { title: 'Dashboard', onClick: () => alert('Navigate to Dashboard') },
              { title: 'Users', onClick: () => alert('Navigate to Users') },
              { title: 'User Profile' },
            ]} 
          />
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h4 className="font-medium">User Profile Settings</h4>
            <p className="text-sm text-gray-600 mt-1">User management interface would appear here...</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Documentation Site</h3>
        <div className="p-4 border rounded-lg">
          <Breadcrumb 
            separator={
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            }
            data-testid="docs-breadcrumb"
            items={[
              { title: 'Docs', href: '/docs' },
              { title: 'Components', href: '/docs/components' },
              { title: 'Navigation', href: '/docs/components/navigation' },
              { title: 'Breadcrumb' },
            ]} 
          />
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h4 className="font-medium">Breadcrumb Component</h4>
            <p className="text-sm text-gray-600 mt-1">Component documentation would appear here...</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing breadcrumbs in different contexts like e-commerce, admin dashboards, and documentation sites.',
      },
    },
  },
};