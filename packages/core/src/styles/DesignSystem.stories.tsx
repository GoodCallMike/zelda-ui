import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    docs: {
      description: {
        component: `
# Jetstream Design System

A comprehensive design system built with CSS-in-JS utilities and CSS variables for consistent, scalable UI development.

## Architecture

The design system is built on three core layers:

1. **CSS Variables** - Design tokens defined in \`variables.css\`
2. **Utility Classes** - Generated CSS classes in \`utilities.css.ts\`
3. **Components** - React components that use the utilities

## Getting Started

Import the design system utilities in your component:

\`\`\`tsx
import { cn } from '@jetstream/core';

// Use utility classes
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <span className="text-lg font-semibold text-gray-900">Hello World</span>
</div>

// Combine with conditional classes
<button className={cn(
  'px-4 py-2 rounded-md transition-colors',
  isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
)}>
  Click me
</button>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
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

export const UtilityClasses: Story = {
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

export const CSSVariables: Story = {
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

export const LayoutPatterns: Story = {
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
        <h3 className="text-xl font-semibold mb-4">Usage</h3>
        <p className="text-gray-600 mb-4">
          Dark mode is controlled by the <code className="bg-gray-100 px-2 py-1 rounded">data-theme="dark"</code> attribute on a parent element.
          Use <code className="bg-gray-100 px-2 py-1 rounded">dark:</code> prefixed classes for dark mode styles.
        </p>
        
        <code className="text-sm bg-gray-100 p-4 rounded block">
          {`<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  <p className="text-gray-600 dark:text-gray-400">
    This text adapts to light and dark themes
  </p>
</div>`}
        </code>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Common Dark Mode Patterns</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Background & Text</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              bg-white dark:bg-gray-800<br/>
              text-gray-900 dark:text-gray-100<br/>
              text-gray-600 dark:text-gray-400
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Borders</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              border-gray-300 dark:border-gray-600<br/>
              border-gray-200 dark:border-gray-700
            </code>
          </div>

          <div>
            <h4 className="font-medium mb-2">Interactive States</h4>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              hover:bg-gray-100 dark:hover:bg-gray-700<br/>
              focus:ring-blue-500 dark:focus:ring-blue-400
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Example Component</h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Dark Mode Card
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This card automatically adapts to light and dark themes using our utility classes.
          </p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
            Button
          </button>
        </div>
      </section>
    </div>
  ),
};