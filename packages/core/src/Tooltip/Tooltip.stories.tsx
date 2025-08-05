import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Tooltip component for displaying contextual information on hover with Hyrule-themed styling.

## Overview

The Tooltip component provides contextual information when users hover over or focus on elements. It supports multiple positioning options and maintains accessibility standards.

## Quick Start

\`\`\`tsx
import { Tooltip } from '@zelda/core';

// Basic usage
<Tooltip content="This is helpful information">
  <Button>Hover me</Button>
</Tooltip>

// With positioning
<Tooltip content="Tooltip content" position="bottom">
  <Button>Bottom tooltip</Button>
</Tooltip>
\`\`\`

## Positioning

The tooltip supports four positions:
- **top** (default) - Appears above the trigger element
- **bottom** - Appears below the trigger element  
- **left** - Appears to the left of the trigger element
- **right** - Appears to the right of the trigger element

## Accessibility

The Tooltip component is fully accessible:

### Keyboard Support
- **Focus**: Tooltip appears when trigger element receives focus
- **Blur**: Tooltip disappears when trigger element loses focus
- **Escape**: Can be dismissed with Escape key (when focused)

### Screen Reader Support
- Uses proper \`role="tooltip"\` attribute
- Provides accessible content through ARIA
- Maintains focus management for keyboard users

## Testing

Built-in testing support with \`testId\` props:

\`\`\`tsx
<Tooltip content="Test tooltip" testId="help-tooltip">
  <Button>Help</Button>
</Tooltip>
// Results in: data-testid="help-tooltip"
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip relative to the trigger element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    delay: {
      control: { type: 'number' },
      description: 'Delay in milliseconds before showing the tooltip',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '500' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    content: 'This is a helpful tooltip',
  },
};

export const Positions: Story = {
  name: 'All Positions',
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="flex justify-center">
        <Tooltip content="Tooltip on top" position="top">
          <Button>Top</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Tooltip on bottom" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Tooltip on left" position="left">
          <Button>Left</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Tooltip on right" position="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioning options: top, bottom, left, and right.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">
          Dark Mode Tooltips
        </h3>
        <div className="flex gap-4">
          <Tooltip content="Dark mode tooltip" position="top">
            <Button>Top</Button>
          </Tooltip>
          <Tooltip content="Another dark tooltip" position="bottom">
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip content="Left positioned" position="left">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip content="Right positioned" position="right">
            <Button>Right</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips in dark mode maintain proper contrast and visibility.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Game Interface Examples</h3>

        <div className="flex gap-4 items-center">
          <Tooltip content="Start a new adventure in Hyrule">
            <Button variant="primary">New Game</Button>
          </Tooltip>

          <Tooltip content="Continue your existing save file">
            <Button variant="default">Continue</Button>
          </Tooltip>

          <Tooltip
            content="View your collection of items and equipment"
            position="bottom"
          >
            <Button variant="default">Inventory</Button>
          </Tooltip>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Action Buttons</h3>

        <div className="flex gap-4 items-center">
          <Tooltip
            content="Permanently delete this save file - cannot be undone!"
            position="top"
          >
            <Button variant="destructive">Delete Save</Button>
          </Tooltip>

          <Tooltip
            content="Create a backup copy of your current progress"
            position="right"
          >
            <Button variant="dashed">Backup Save</Button>
          </Tooltip>

          <Tooltip content="Return to the main menu" position="left">
            <Button variant="text">Cancel</Button>
          </Tooltip>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Help & Navigation</h3>

        <div className="flex gap-4 items-center">
          <Tooltip content="Open the world map to see your current location">
            <Button variant="link">View Map</Button>
          </Tooltip>

          <Tooltip
            content="Check your current quests and objectives"
            position="bottom"
          >
            <Button variant="link">Quest Log</Button>
          </Tooltip>

          <Tooltip
            content="Adjust game settings and preferences"
            position="right"
          >
            <Button variant="text">Settings</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing tooltips in game interface contexts with helpful, descriptive content.',
      },
    },
  },
};
