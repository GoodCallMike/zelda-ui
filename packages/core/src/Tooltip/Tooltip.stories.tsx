import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Contextual information overlay that appears on hover or focus to provide helpful guidance without cluttering the interface.

\`\`\`tsx
import { Tooltip } from '@zelda/core';

// Essential usage pattern
<Tooltip content="Save your changes">
  <Button>Save</Button>
</Tooltip>

// Positioned for optimal visibility
<Tooltip content="Delete permanently" position="bottom">
  <Button variant="destructive">Delete</Button>
</Tooltip>
\`\`\`

## Positions
- **top** - Default position above trigger element
- **bottom** - Below trigger for top-heavy layouts
- **left** - Left side for right-aligned content
- **right** - Right side for left-aligned content

## Accessibility & Testing
- Appears on both hover and keyboard focus
- Uses semantic \`role="tooltip"\` for screen readers
- Automatically positioned to stay within viewport
- Dismissible with Escape key when focused

> **Your Responsibility**: Provide clear, concise tooltip content. This component handles positioning and accessibility.

\`\`\`tsx
// Testing approach
const trigger = screen.getByRole('button', { name: 'Save' });
fireEvent.mouseEnter(trigger);
expect(screen.getByRole('tooltip')).toBeInTheDocument();
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip message content',
      table: {
        type: { summary: 'string' },
      },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position relative to trigger element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Show delay in milliseconds',
      table: {
        type: { summary: 'number' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Save your changes to continue later',
    children: <Button>Save</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <Tooltip content="Default position above" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Appears below trigger" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left side placement" position="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Right side placement" position="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All four positioning options for optimal tooltip placement.',
      },
    },
  },
};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div className="dark p-6 bg-gray-900 rounded-lg">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="Save changes" position="top">
        <Button>Save</Button>
      </Tooltip>
      <Tooltip content="Load file" position="bottom">
        <Button>Load</Button>
      </Tooltip>
      <Tooltip content="Application settings" position="left">
        <Button>Settings</Button>
      </Tooltip>
      <Tooltip content="Exit application" position="right">
        <Button variant="destructive">Exit</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tooltips maintain proper contrast and readability in dark mode.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div className="flex gap-4 items-center">
        <Tooltip content="Create a new project">
          <Button variant="primary">New Project</Button>
        </Tooltip>
        <Tooltip content="Open an existing project">
          <Button>Open</Button>
        </Tooltip>
        <Tooltip content="View your recent files" position="bottom">
          <Button>Recent</Button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <Tooltip
          content="Permanently delete - cannot be undone!"
          position="top"
        >
          <Button variant="destructive">Delete</Button>
        </Tooltip>
        <Tooltip content="Create backup of current work" position="right">
          <Button variant="dashed">Backup</Button>
        </Tooltip>
        <Tooltip content="Return to dashboard" position="left">
          <Button variant="text">Cancel</Button>
        </Tooltip>
      </div>

      <div className="flex gap-4 items-center">
        <Tooltip content="View project overview">
          <Button variant="link">Overview</Button>
        </Tooltip>
        <Tooltip content="Check task progress and status" position="bottom">
          <Button variant="link">Tasks</Button>
        </Tooltip>
        <Tooltip content="Adjust project settings" position="right">
          <Button variant="text">Settings</Button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Practical examples showing tooltips with various button types and positioning.',
      },
    },
  },
};
