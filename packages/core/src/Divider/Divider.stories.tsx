import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `A divider component to visually separate content sections.

## Usage

\`\`\`tsx
import { Divider } from '@jetstream/core';

// Basic divider
<Divider />

// With text
<Divider>Section Title</Divider>

// Vertical divider
<Divider orientation="vertical" />
\`\`\`

## Advanced Usage

### Text Alignment
\`\`\`tsx
<Divider textAlign="left">Left aligned</Divider>
<Divider textAlign="center">Center aligned</Divider>
<Divider textAlign="right">Right aligned</Divider>
\`\`\`

### Styling Variants
\`\`\`tsx
<Divider dashed>Dashed divider</Divider>
<Divider orientation="vertical" dashed />
\`\`\`

## Features

- **Horizontal/Vertical** - Support for both orientations
- **Text content** - Optional text or content within divider
- **Text alignment** - Left, center, or right alignment
- **Dashed style** - Optional dashed line appearance
- **Accessible** - Proper semantic markup for screen readers

## Accessibility

### Semantic Markup
- Uses appropriate ARIA roles for content separation
- Proper contrast ratios for visibility
- Screen reader friendly text content

### Best Practices
- Use meaningful text content when applicable
- Ensure sufficient spacing around dividers
- Consider dark mode compatibility
- Test with screen readers for content flow`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment within the divider',
    },
    dashed: {
      control: 'boolean',
      description: 'Whether to use dashed line style',
    },
    children: {
      control: 'text',
      description: 'Text or content to display in the divider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `The most basic usage of the Divider component. Creates a simple horizontal line to separate content sections.
        
**When to use:**
- Separating different sections of content
- Creating visual breaks in long content
- Organizing information hierarchically

**Key features:**
- Automatically adapts to light/dark themes
- Maintains consistent spacing (16px margin top/bottom)
- Uses semantic border styling for accessibility`,
      },
    },
  },
  render: () => (
    <div className="p-6 max-w-2xl">
      <p>Content above the divider - this could be any content like text, images, or components.</p>
      <Divider />
      <p>Content below the divider - notice the visual separation created by the horizontal line.</p>
    </div>
  ),
};

export const WithText: Story = {
  parameters: {
    docs: {
      description: {
        story: `Dividers can include text or other content to provide context about the sections they separate.
        
**When to use:**
- Creating labeled sections in forms or content
- Adding descriptive headers between content blocks
- Organizing content with meaningful categories

**Implementation details:**
- Text is centered by default with padding on both sides
- Divider lines extend to fill available space around text
- Text color automatically adapts to theme (gray-500 in light, gray-400 in dark)
- Supports any ReactNode content, not just text`,
      },
    },
  },
  render: () => (
    <div className="p-6 max-w-2xl">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This content represents the first section.</p>
      <Divider>Section Title</Divider>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This content is clearly separated and labeled.</p>
    </div>
  ),
};

export const TextAlignment: Story = {
  parameters: {
    docs: {
      description: {
        story: `Control the horizontal alignment of text within dividers using the \`textAlign\` prop.
        
**Alignment options:**
- **Left**: Text appears on the left with a short line, long line extends to the right
- **Center** (default): Text is centered with equal lines on both sides
- **Right**: Text appears on the right with a short line, long line extends to the left

**Use cases:**
- **Left alignment**: For progressive disclosure or step-by-step content
- **Center alignment**: For balanced, formal section headers
- **Right alignment**: For timeline layouts or right-to-left reading patterns

**Technical implementation:**
- Uses flexbox for precise alignment control
- Short lines are fixed at 24px (w-6 class)
- Long lines use flex-1 to fill remaining space`,
      },
    },
  },
  render: () => (
    <div className="p-6 max-w-2xl space-y-8">
      <div>
        <p>Content above - notice how the left-aligned divider creates a progressive feel</p>
        <Divider textAlign="left">Left Aligned</Divider>
        <p>Content below - the long line extends to the right, creating visual flow</p>
      </div>
      
      <div>
        <p>Content above - center alignment provides perfect balance</p>
        <Divider textAlign="center">Center Aligned</Divider>
        <p>Content below - equal lines on both sides create symmetry</p>
      </div>
      
      <div>
        <p>Content above - right alignment works well for timeline layouts</p>
        <Divider textAlign="right">Right Aligned</Divider>
        <p>Content below - the long line extends to the left</p>
      </div>
    </div>
  ),
};

export const Dashed: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the \`dashed\` prop to create dividers with dashed lines instead of solid lines.
        
**When to use dashed dividers:**
- Creating softer, less prominent separations
- Indicating temporary or optional sections
- Providing visual variety in content-heavy layouts
- Suggesting flexibility or work-in-progress states

**Visual characteristics:**
- Uses CSS \`border-dashed\` property
- Maintains same spacing and color as solid dividers
- Works with all alignment options and text content
- Automatically adapts to light/dark themes

**Accessibility considerations:**
- Dashed lines may be less visible for users with visual impairments
- Ensure sufficient contrast ratios are maintained
- Consider using text labels for important section breaks`,
      },
    },
  },
  render: () => (
    <div className="p-6 max-w-2xl">
      <p>Content above - solid dividers create strong separation</p>
      <Divider />
      <p>Content with dashed divider - notice the softer visual break</p>
      <Divider dashed />
      <p>More content - dashed dividers work great with text labels too</p>
      <Divider dashed>Optional Section</Divider>
      <p>Content below - the dashed style suggests this section might be temporary or optional</p>
    </div>
  ),
};

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story: `Vertical dividers separate content horizontally, perfect for inline layouts and navigation elements.
        
**When to use vertical dividers:**
- Separating navigation items or breadcrumbs
- Creating columns in inline layouts
- Dividing toolbar buttons or action groups
- Separating metadata or status indicators

**Technical specifications:**
- Fixed width of 1px (w-px class)
- Default height of 24px (h-6 class) - can be overridden
- Horizontal margin of 8px on each side (mx-2 class)
- Uses left border instead of top border for vertical orientation

**Layout considerations:**
- Parent container should use flexbox with \`items-center\` for proper alignment
- Ensure adequate spacing between items (gap-4 or similar)
- Consider the height of surrounding content for visual balance
- Works well with both solid and dashed styles`,
      },
    },
  },
  render: () => (
    <div className="p-6">
      <div className="flex items-center gap-4 h-24 bg-gray-50 dark:bg-gray-800 rounded-lg px-6">
        <span className="font-medium">Navigation Item</span>
        <Divider orientation="vertical" />
        <span className="font-medium">Another Item</span>
        <Divider orientation="vertical" dashed />
        <span className="font-medium">Final Item</span>
      </div>
      
      <div className="mt-6 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
        <span>Status: Active</span>
        <Divider orientation="vertical" />
        <span>Updated: 2 hours ago</span>
        <Divider orientation="vertical" />
        <span>Version: 1.2.3</span>
      </div>
    </div>
  ),
};