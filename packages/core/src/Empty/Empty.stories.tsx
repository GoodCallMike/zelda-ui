import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Empty } from './Empty';
import { Button } from '../Button';

const meta: Meta<typeof Empty> = {
  title: 'Feedback/Empty',
  component: Empty,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Empty component for displaying no-data states with comprehensive accessibility and testing support.

## Overview

The Empty component provides user-friendly empty state displays when content is unavailable. It supports custom descriptions, images, action buttons, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Empty } from '@jetstream/core';

// Basic usage
<Empty description="No items found" />

// With options
<Empty 
  description="No projects yet"
  imageStyle="simple"
>
  <Button>Create Project</Button>
</Empty>
\`\`\`

## Image Variants

### Built-in Images
\`\`\`tsx
<Empty imageStyle="default" description="Default style" />
<Empty imageStyle="simple" description="Simple style" />
\`\`\`

### Custom Images
\`\`\`tsx
<Empty 
  image={<CustomIcon />}
  description="Custom image"
/>
\`\`\`

## Accessibility

The Empty component is fully accessible with:

- **Semantic Structure**: Proper HTML structure for screen readers
- **Image Alt Text**: Meaningful descriptions for visual elements
- **Clear Messaging**: Descriptive text that explains the empty state

\`\`\`tsx
// Accessibility example
<Empty 
  testId="search-results-empty"
  description="No search results found. Try adjusting your filters."
  aria-label="Empty search results"
>
  <Button aria-label="Clear all filters">Clear Filters</Button>
</Empty>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Empty testId="empty-state" description="No data" />
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('empty-state');
screen.getByText('No data');
screen.getByRole('button', { name: 'Create Item' });
\`\`\`

## Best Practices

### Do
- Provide clear, actionable descriptions
- Include relevant actions when possible
- Match the tone to your application context

### Don't
- Use generic "No data" messages without context
- Overwhelm users with too many action options
- Forget to consider the user's next logical step
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: 'text',
      description: 'Custom description text or React node',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '"No data"' },
      },
    },
    image: {
      control: 'text',
      description: 'Custom image URL or React component',
      table: {
        type: { summary: 'ReactNode | string' },
      },
    },
    imageStyle: {
      control: 'select',
      options: ['default', 'simple'],
      description: 'Built-in image style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
  args: {
    description: 'No items found',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic empty state with default image and description.',
      },
    },
  },
};

export const ImageVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Built-in Image Styles</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h5 className="font-medium mb-4">Default Style</h5>
            <Empty description="Default empty state" />
          </div>
          <div className="border rounded-lg p-6">
            <h5 className="font-medium mb-4">Simple Style</h5>
            <Empty imageStyle="simple" description="Simple empty state" />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Custom Images</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h5 className="font-medium mb-4">Custom SVG</h5>
            <Empty
              image={
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
              }
              description="All tasks completed!"
            />
          </div>
          <div className="border rounded-lg p-6">
            <h5 className="font-medium mb-4">Custom Component</h5>
            <Empty
              image={
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📁</span>
                </div>
              }
              description="No files uploaded"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different image variants including built-in styles and custom images.',
      },
    },
  },
};

export const WithActions: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="border rounded-lg p-6">
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Single Action</h4>
        <Empty 
          description="No projects yet"
          children={<Button variant="primary">Create Project</Button>}
        />
      </div>
      
      <div className="border rounded-lg p-6">
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Multiple Actions</h4>
        <Empty 
          description="No data available"
          children={
            <div className="space-x-2">
              <Button variant="primary" size="sm">Import Data</Button>
              <Button variant="outline" size="sm">Create Manually</Button>
            </div>
          }
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Empty states with action buttons to guide users toward next steps.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-3">No Description</h4>
        <Empty description={null} />
      </div>
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-3">With Description</h4>
        <Empty description="Your inbox is empty" />
      </div>
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-3">With Action</h4>
        <Empty 
          description="No notifications yet"
          children={<Button size="sm">Enable Notifications</Button>}
        />
      </div>
      <div className="border rounded-lg p-4">
        <h4 className="font-medium mb-3">Simple Style</h4>
        <Empty 
          imageStyle="simple"
          description="No records found"
          children={<Button variant="outline" size="sm">Add Record</Button>}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various empty state configurations and content options.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [projects, setProjects] = useState<string[]>([]);

    return (
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Search Results</h4>
          <div className="border rounded-lg p-6 min-h-48">
            {searchResults.length === 0 ? (
              <Empty
                description="No search results found"
                children={
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">Clear Filters</Button>
                    <Button variant="primary" size="sm">Browse All</Button>
                  </div>
                }
              />
            ) : (
              <div>Results would appear here</div>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Project Dashboard</h4>
          <div className="border rounded-lg p-6 min-h-48">
            {projects.length === 0 ? (
              <Empty
                description="Welcome! Create your first project to get started"
                children={
                  <Button 
                    variant="primary" 
                    onClick={() => setProjects(['New Project'])}
                  >
                    Create Project
                  </Button>
                }
              />
            ) : (
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <div key={index} className="p-3 border rounded">
                    {project}
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={() => setProjects([])}
                >
                  Clear Projects
                </Button>
              </div>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Data Table</h4>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="p-0">
                    <Empty
                      imageStyle="simple"
                      description="No records found"
                      children={<Button variant="outline" size="sm">Add Record</Button>}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing Empty states in search results, dashboards, and data tables.',
      },
    },
  },
};