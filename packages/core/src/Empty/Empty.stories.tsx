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
        component: `Empty state component to display when there is no data or content available, providing friendly guidance and actions for users.

## Features
- **Flexible Content**: Support for custom descriptions, images, and action buttons
- **Built-in Images**: Default and simple image variants with professional styling
- **Custom Images**: Support for custom images via URL or React components
- **Action Support**: Include buttons or other interactive elements
- **Responsive Design**: Adapts to different container sizes

## When to Use
- **No Data States**: When lists, tables, or search results are empty
- **Fresh Start**: Guide new users to create their first content
- **Error Recovery**: After failed operations or when content is unavailable
- **Loading States**: As placeholder while content is being fetched

## Accessibility
- Semantic HTML structure for screen readers
- Proper alt text for images
- Clear, descriptive messaging
- Keyboard accessible action buttons

## Best Practices
- Use clear, actionable descriptions
- Provide relevant actions when possible
- Match the tone to your application
- Consider the user's context and next steps
- Keep messaging concise but helpful`,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomDescription: Story = {
  args: {
    description: 'No items found',
  },
};

export const WithAction: Story = {
  args: {
    description: 'No projects yet',
    children: <Button variant="primary">Create Project</Button>,
  },
};

export const ImageStyles: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Image Style Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h4 className="font-medium mb-4">Default Style</h4>
            <Empty description="Default empty state" />
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="font-medium mb-4">Simple Style</h4>
            <Empty imageStyle="simple" description="Simple empty state" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different built-in image styles for various use cases and design preferences.',
      },
    },
  },
};

export const CustomImage: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h4 className="font-medium mb-4">Custom SVG Icon</h4>
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
            <h4 className="font-medium mb-4">Custom Component</h4>
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
        story: 'Examples of using custom images including SVG icons and React components.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [projects, setProjects] = useState<string[]>([]);

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Search Results</h3>
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
          <h3 className="text-lg font-semibold mb-4">Project Dashboard</h3>
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
          <h3 className="text-lg font-semibold mb-4">Data Table</h3>
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

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Different Empty States</h3>
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
            <h4 className="font-medium mb-3">Multiple Actions</h4>
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
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various empty state configurations including with and without descriptions and actions.',
      },
    },
  },
};

export const Responsive: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Responsive Behavior</h3>
        <div className="space-y-4">
          <div className="w-full border rounded-lg p-6">
            <h4 className="font-medium mb-3">Full Width Container</h4>
            <Empty description="Adapts to container width" />
          </div>
          <div className="w-64 border rounded-lg p-4 mx-auto">
            <h4 className="font-medium mb-3 text-center">Narrow Container</h4>
            <Empty 
              imageStyle="simple"
              description="Works in small spaces"
              children={<Button size="sm">Action</Button>}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Empty component adapts to different container sizes while maintaining proper spacing and alignment.',
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Accessibility Features</h3>
        <div className="border rounded-lg p-6">
          <Empty
            description="Screen reader accessible empty state with proper semantic structure"
            children={
              <Button 
                aria-label="Create your first item to get started"
                variant="primary"
              >
                Get Started
              </Button>
            }
          />
        </div>
        <div className="text-sm text-gray-600 mt-4">
          <p><strong>Accessibility Features:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Semantic HTML structure for screen readers</li>
            <li>Proper alt text for images</li>
            <li>Clear, descriptive messaging</li>
            <li>Keyboard accessible action buttons</li>
            <li>Appropriate ARIA labels when needed</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility considerations and features built into the Empty component.',
      },
    },
  },
};