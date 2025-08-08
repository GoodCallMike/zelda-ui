import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Visual separators that organize content into distinct sections with clear hierarchy and spacing.

\`\`\`tsx
import { Divider } from 'zelda-ui-core';

// Essential separation
<Divider />

// Enhanced visual divider
<Divider variant="magical" />

// With section label
<Divider>Settings</Divider>
\`\`\`

## Variants
- **solid** - Clean line for basic content separation
- **dashed** - Subtle pattern for softer visual breaks
- **magical** - Enhanced styling with gradient effects

## Orientations
- **horizontal** - Default for vertical content flow
- **vertical** - For side-by-side content separation

## Accessibility & Testing
- Uses semantic \`role="separator"\` for screen readers
- Maintains proper contrast ratios in all variants
- Text labels are announced appropriately

> **Your Responsibility**: Use dividers to create logical content sections. This component provides semantic separation and visual hierarchy.

\`\`\`tsx
// Testing approach
const divider = screen.getByRole('separator');
expect(divider).toBeInTheDocument();
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'magical'],
      description: 'Visual style and emphasis level',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment for labeled dividers',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
    },
    children: {
      control: 'text',
      description: 'Optional text label for the divider',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="h4" className="mb-4">
          Solid
        </Typography>
        <Divider variant="solid" />
      </div>
      <div>
        <Typography variant="h4" className="mb-4">
          Dashed
        </Typography>
        <Divider variant="dashed" />
      </div>
      <div>
        <Typography variant="h4" className="mb-4">
          Magical
        </Typography>
        <Divider variant="magical" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All divider variants showing different visual emphasis levels.',
      },
    },
  },
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="body1">Content above the divider</Typography>
        <Divider>Section Break</Divider>
        <Typography variant="body1">Content below the divider</Typography>
      </div>
      <div>
        <Typography variant="body1">Project Overview</Typography>
        <Divider variant="magical">Active Tasks</Divider>
        <Typography variant="body1">
          • Complete user interface design
        </Typography>
        <Typography variant="body1">
          • Implement authentication system
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Dividers with text labels for section headings and content organization.',
      },
    },
  },
};

export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-6">
      <Divider textAlign="left">Left Aligned</Divider>
      <Divider textAlign="center">Center Aligned</Divider>
      <Divider textAlign="right">Right Aligned</Divider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Text can be aligned to the left, center, or right of the divider.',
      },
    },
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-6 h-32">
      <Typography variant="body1">Left Content</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body1">Middle Content</Typography>
      <Divider orientation="vertical" variant="magical" />
      <Typography variant="body1">Right Content</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical dividers for separating content horizontally.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Typography variant="body1">Basic content separation</Typography>
        <Divider variant="solid" />
        <Typography variant="body1">Clean visual hierarchy</Typography>
      </div>
      <div>
        <Typography variant="body1">Enhanced section breaks</Typography>
        <Divider variant="magical">Important Section</Divider>
        <Typography variant="body1">Emphasized content areas</Typography>
      </div>
      <div className="flex items-center gap-4 h-16">
        <Typography variant="body1">Left</Typography>
        <Divider orientation="vertical" />
        <Typography variant="body1">Center</Typography>
        <Divider orientation="vertical" variant="dashed" />
        <Typography variant="body1">Right</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Practical examples showing different divider variants and orientations.',
      },
    },
  },
};
