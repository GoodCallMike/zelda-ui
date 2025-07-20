import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Save01Icon, Download01Icon, ArrowRightIcon, PlusIcon } from '@jetstream/icons';
import { Text, TextSecondary, Heading, Label, ScreenReaderOnly } from '../Typography';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Interactive button component with multiple variants, icon support, and comprehensive accessibility features.

## Features
- **4 Visual Variants**: Primary, secondary, outline, and link styles
- **Icon Support**: Icons can be positioned left or right of text
- **Accessibility**: Full keyboard navigation, ARIA support, and focus management
- **High Contrast**: WCAG AA compliant color combinations
- **Responsive**: Works across all device sizes
- **Loading States**: Built-in disabled state handling

## When to Use
- **Primary**: Main call-to-action buttons (submit forms, confirm actions)
- **Secondary**: Supporting actions that are important but not primary
- **Outline**: Alternative actions or when you need visual hierarchy
- **Link**: Navigation or less prominent actions that look like links

## Accessibility
- Buttons are keyboard accessible with Tab navigation
- Focus indicators meet WCAG guidelines
- Proper semantic HTML button elements
- Screen reader friendly with clear labels
- High contrast colors for visibility
- Disabled state is properly communicated

## Best Practices
- Use clear, action-oriented labels ("Save Document" not "Save")
- Limit primary buttons to one per section
- Provide adequate spacing between buttons
- Use icons to enhance meaning, not replace clear text
- Consider loading states for async actions
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'link'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: false,
      description: 'Icon component to display with the button',
      table: {
        type: { summary: 'ComponentType<SVGProps<SVGSVGElement>>' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    onClick: {
      control: false,
      description: 'Click handler function',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    children: 'Save Document',
    variant: 'primary',
    icon: Save01Icon,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Continue',
    variant: 'secondary',
    icon: ArrowRightIcon,
    iconPosition: 'right',
  },
};

// Comprehensive stories with enhanced documentation
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Button Variants</Heading>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      <TextSecondary className="text-sm">
        <p><strong>Usage Guidelines:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Primary:</strong> Main actions like "Submit", "Save", "Continue"</li>
          <li><strong>Secondary:</strong> Supporting actions like "Cancel", "Back"</li>
          <li><strong>Outline:</strong> Alternative actions or secondary CTAs</li>
          <li><strong>Link:</strong> Navigation or less prominent actions</li>
        </ul>
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants with usage guidelines for each type.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Icon Positions</Heading>
        <div className="flex flex-wrap gap-3">
          <Button icon={Save01Icon} iconPosition="left">Save Document</Button>
          <Button variant="secondary" icon={ArrowRightIcon} iconPosition="right">Continue</Button>
          <Button variant="outline" icon={Download01Icon}>Download</Button>
          <Button variant="link" icon={PlusIcon}>Add New</Button>
        </div>
      </div>
      <TextSecondary className="text-sm">
        Icons enhance button meaning and improve recognition. Use 16px icons (w-4 h-4) for optimal appearance.
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons positioned left or right of the text. Icons should enhance meaning, not replace clear labels.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Button States</Heading>
        <div className="space-y-3">
          <div>
            <Label className="mb-1">Normal State</Label>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>
          <div>
            <Label className="mb-1">Disabled State</Label>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" disabled>Primary</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="outline" disabled>Outline</Button>
            </div>
          </div>
        </div>
      </div>
      <TextSecondary className="text-sm">
        Disabled buttons have reduced opacity and are not interactive. Use for unavailable actions or loading states.
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button states including normal and disabled. Disabled buttons communicate unavailable actions.',
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Keyboard Navigation</Heading>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" tabIndex={0}>Focusable Button</Button>
          <Button variant="secondary" icon={Save01Icon} tabIndex={0}>With Icon</Button>
          <Button variant="outline" tabIndex={0}>Outline Style</Button>
        </div>
        <Label className="mt-2">
          Use Tab to navigate, Enter/Space to activate
        </Label>
      </div>
      
      <div>
        <Heading className="mb-2">Screen Reader Friendly</Heading>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="primary" 
            aria-label="Save document to your account"
            icon={Save01Icon}
          >
            Save
          </Button>
          <Button 
            variant="secondary" 
            aria-describedby="delete-help"
          >
            Delete
          </Button>
          <ScreenReaderOnly id="delete-help">
            This action cannot be undone
          </ScreenReaderOnly>
        </div>
      </div>
      
      <TextSecondary className="text-sm">
        <p><strong>Accessibility Features:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Keyboard navigation with Tab, Enter, and Space</li>
          <li>Focus indicators that meet WCAG guidelines</li>
          <li>ARIA labels for additional context</li>
          <li>High contrast colors for visibility</li>
          <li>Semantic HTML button elements</li>
          <li>Proper disabled state communication</li>
        </ul>
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including keyboard navigation, ARIA labels, and screen reader support.',
      },
    },
  },
};

export const RealWorldExample: Story = {
  render: () => {
    const handleSave = () => alert('Document saved!');
    const handleCancel = () => alert('Action cancelled');
    const handleDelete = () => alert('Item deleted');
    
    return (
      <div className="space-y-6">
        <div>
          <Heading className="mb-2">Form Actions</Heading>
          <div className="flex gap-2">
            <Button variant="primary" icon={Save01Icon} onClick={handleSave}>
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
        
        <div>
          <Heading className="mb-2">Navigation</Heading>
          <div className="flex gap-2">
            <Button variant="outline" icon={ArrowRightIcon} iconPosition="right">
              Next Step
            </Button>
            <Button variant="link">
              Skip for now
            </Button>
          </div>
        </div>
        
        <div>
          <Heading className="mb-2">Destructive Action</Heading>
          <Button variant="outline" onClick={handleDelete}>
            Delete Item
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing proper button hierarchy and combinations in common UI patterns.',
      },
    },
  },
};


