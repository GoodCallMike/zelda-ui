import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Divider component for visually separating content sections with comprehensive accessibility and testing support.

## Overview

The Divider component provides visual separation between content sections. It supports horizontal and vertical orientations, text labels, alignment options, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Divider } from '@zelda/core';

// Basic usage
<Divider />

// With options
<Divider textAlign="left" dashed>
  Section Title
</Divider>
\`\`\`

## Orientations

### Horizontal Divider
\`\`\`tsx
<Divider>Section Title</Divider>
\`\`\`

### Vertical Divider
\`\`\`tsx
<Divider orientation="vertical" />
\`\`\`

## Accessibility

The Divider component is fully accessible with:

- **Semantic Markup**: Uses proper separator role for screen readers
- **ARIA Orientation**: Indicates horizontal or vertical orientation
- **Text Labels**: Provides meaningful section descriptions

\`\`\`tsx
// Accessibility example
<Divider 
  testId="section-divider"
  aria-label="Content section separator"
>
  User Profile
</Divider>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Divider testId="content-divider">Section</Divider>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('content-divider');
screen.getByRole('separator');
screen.getByLabelText('User Profile');
\`\`\`

## Best Practices

### Do
- Use meaningful text labels for section identification
- Ensure sufficient spacing around dividers
- Consider visual hierarchy and content flow

### Don't
- Overuse dividers in dense layouts
- Use dividers without clear content separation purpose
- Forget to test with screen readers
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment within the divider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
    },
    dashed: {
      control: 'boolean',
      description: 'Whether to use dashed line style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Text or content to display in the divider',
      table: {
        type: { summary: 'ReactNode' },
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-6 max-w-2xl">
      <p>Content above the divider - this could be any content like text, images, or components.</p>
      <Divider />
      <p>Content below the divider - notice the visual separation created by the horizontal line.</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic horizontal divider for separating content sections.',
      },
    },
  },
};

export const Orientations: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Horizontal (Default)</h4>
        <div className="max-w-2xl">
          <p>Content above the horizontal divider.</p>
          <Divider />
          <p>Content below the horizontal divider.</p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Vertical</h4>
        <div className="flex items-center gap-4 h-24 bg-gray-50 dark:bg-gray-800 rounded-lg px-6">
          <span className="font-medium">Navigation Item</span>
          <Divider orientation="vertical" />
          <span className="font-medium">Another Item</span>
          <Divider orientation="vertical" />
          <span className="font-medium">Final Item</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal and vertical divider orientations for different layout needs.',
      },
    },
  },
};

export const WithText: Story = {
  render: () => (
    <div className="p-6 max-w-2xl space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Text Alignment</h4>
        <div className="space-y-6">
          <div>
            <p>Content above - left-aligned divider creates progressive flow.</p>
            <Divider textAlign="left">Left Aligned</Divider>
            <p>Content below with left alignment.</p>
          </div>
          
          <div>
            <p>Content above - center alignment provides balance.</p>
            <Divider textAlign="center">Center Aligned</Divider>
            <p>Content below with center alignment.</p>
          </div>
          
          <div>
            <p>Content above - right alignment for timeline layouts.</p>
            <Divider textAlign="right">Right Aligned</Divider>
            <p>Content below with right alignment.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers with text labels and different alignment options.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="p-6 max-w-2xl space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Solid vs Dashed</h4>
        <div className="space-y-4">
          <div>
            <p>Content with solid divider - creates strong separation.</p>
            <Divider>Solid Divider</Divider>
            <p>Content below solid divider.</p>
          </div>
          
          <div>
            <p>Content with dashed divider - softer visual break.</p>
            <Divider dashed>Dashed Divider</Divider>
            <p>Content below dashed divider.</p>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Vertical Variants</h4>
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <span>Status: Active</span>
          <Divider orientation="vertical" />
          <span>Updated: 2 hours ago</span>
          <Divider orientation="vertical" dashed />
          <span>Version: 1.2.3</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different divider styles including solid and dashed variants.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Form Sections</h4>
        <div className="max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="w-full p-2 border rounded" placeholder="Enter your name" />
          </div>
          
          <Divider>Contact Information</Divider>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="w-full p-2 border rounded" placeholder="Enter your email" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input className="w-full p-2 border rounded" placeholder="Enter your phone" />
          </div>
          
          <Divider dashed>Optional Information</Divider>
          
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input className="w-full p-2 border rounded" placeholder="Enter your company" />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Navigation Bar</h4>
        <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border rounded-lg">
          <span className="font-medium">Home</span>
          <Divider orientation="vertical" />
          <span className="font-medium">Products</span>
          <Divider orientation="vertical" />
          <span className="font-medium">About</span>
          <Divider orientation="vertical" />
          <span className="font-medium">Contact</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing dividers in forms and navigation layouts.',
      },
    },
  },
};