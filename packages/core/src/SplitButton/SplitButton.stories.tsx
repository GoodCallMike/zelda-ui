import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Label, TextSecondary } from '../Typography';
import { SplitButton } from './SplitButton';

const meta: Meta<typeof SplitButton> = {
  title: 'General/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A split button combines a primary action button with a dropdown menu of related secondary actions, providing quick access to the most common action while keeping related options easily accessible.

## Features
- **Primary + Secondary Actions**: Main button for primary action, dropdown for alternatives
- **Multiple Variants**: Primary, secondary, and outline styles
- **Flexible Sizing**: Small, medium, and large sizes
- **Icon Support**: Add icons to enhance visual recognition
- **Accessibility**: Full keyboard navigation and screen reader support
- **Disabled States**: Support for disabled primary button and individual menu items

## When to Use
- **Save Operations**: Save with options like "Save as Draft", "Save & Close"
- **Export Functions**: Export with different format options
- **Publish Actions**: Publish with scheduling or draft options
- **Deploy Operations**: Deploy to different environments
- **Share Features**: Share with different privacy or format settings

## Accessibility
- Keyboard navigation with Tab, Enter, Space, and Arrow keys
- ARIA attributes for screen readers
- Focus management between button and dropdown
- Proper semantic markup with button roles
- High contrast focus indicators

## Best Practices
- Use the primary button for the most common action
- Keep secondary actions related to the primary action
- Limit dropdown items to 5-7 for optimal usability
- Use clear, action-oriented labels
- Group destructive actions separately
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant of the split button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the split button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire split button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    actions: {
      control: false,
      description: 'Array of secondary actions for the dropdown menu',
      table: {
        type: { summary: 'SplitButtonAction[]' },
      },
    },
    onClick: {
      control: false,
      description: 'Primary button click handler',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultActions = [
  { label: 'Save as Draft', onClick: () => alert('Saved as draft') },
  { label: 'Save & Close', onClick: () => alert('Saved and closed') },
  { label: 'Save & New', onClick: () => alert('Saved and creating new') },
];

export const Primary: Story = {
  args: {
    children: 'Save',
    onClick: () => alert('Primary save action'),
    actions: defaultActions,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Export',
    onClick: () => alert('Export action'),
    actions: [
      { label: 'Export as PDF', onClick: () => alert('Exported as PDF') },
      { label: 'Export as CSV', onClick: () => alert('Exported as CSV') },
      { label: 'Export as Excel', onClick: () => alert('Exported as Excel') },
    ],
    variant: 'secondary',
  },
};

// Comprehensive stories with enhanced documentation
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Split Button Variants</Heading>
        <div className="flex flex-wrap gap-4">
          <SplitButton
            variant="primary"
            onClick={() => alert('Primary save')}
            actions={defaultActions}
          >
            Save
          </SplitButton>
          <SplitButton
            variant="secondary"
            onClick={() => alert('Secondary export')}
            actions={[
              { label: 'Export as PDF', onClick: () => alert('PDF export') },
              { label: 'Export as CSV', onClick: () => alert('CSV export') },
            ]}
          >
            Export
          </SplitButton>
          <SplitButton
            variant="outline"
            onClick={() => alert('Outline share')}
            actions={[
              { label: 'Share Link', onClick: () => alert('Link shared') },
              {
                label: 'Share via Email',
                onClick: () => alert('Email shared'),
              },
            ]}
          >
            Share
          </SplitButton>
        </div>
      </div>
      <TextSecondary className="text-sm">
        <p>
          <strong>Usage Guidelines:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Primary:</strong> Main call-to-action split buttons
          </li>
          <li>
            <strong>Secondary:</strong> Supporting actions with alternatives
          </li>
          <li>
            <strong>Outline:</strong> Less prominent actions or secondary CTAs
          </li>
        </ul>
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All available split button variants with usage guidelines for each type.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Split Button Sizes</Heading>
        <div className="flex flex-wrap items-center gap-4">
          <div className="space-y-2">
            <Label>Small</Label>
            <SplitButton
              size="sm"
              onClick={() => alert('Small action')}
              actions={defaultActions}
            >
              Actions
            </SplitButton>
          </div>
          <div className="space-y-2">
            <Label>Medium (Default)</Label>
            <SplitButton
              onClick={() => alert('Medium action')}
              actions={defaultActions}
            >
              Actions
            </SplitButton>
          </div>
          <div className="space-y-2">
            <Label>Large</Label>
            <SplitButton
              size="lg"
              onClick={() => alert('Large action')}
              actions={defaultActions}
            >
              Actions
            </SplitButton>
          </div>
        </div>
      </div>
      <TextSecondary className="text-sm">
        Choose size based on context: small for compact interfaces, large for
        prominent actions.
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Different sizes available for split buttons to match your interface density needs.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Split Button States</Heading>
        <div className="space-y-3">
          <div>
            <Label className="mb-1">Normal State</Label>
            <div className="flex flex-wrap gap-2">
              <SplitButton
                onClick={() => alert('Normal action')}
                actions={defaultActions}
              >
                Save
              </SplitButton>
            </div>
          </div>
          <div>
            <Label className="mb-1">Disabled State</Label>
            <div className="flex flex-wrap gap-2">
              <SplitButton
                disabled
                onClick={() => alert('Should not fire')}
                actions={defaultActions}
              >
                Save
              </SplitButton>
            </div>
          </div>
          <div>
            <Label className="mb-1">Mixed States (Some Actions Disabled)</Label>
            <div className="flex flex-wrap gap-2">
              <SplitButton
                onClick={() => alert('Publish now')}
                actions={[
                  {
                    label: 'Publish Immediately',
                    onClick: () => alert('Published'),
                  },
                  {
                    label: 'Schedule Publish',
                    onClick: () => alert('Scheduled'),
                    disabled: true,
                  },
                  {
                    label: 'Save as Draft',
                    onClick: () => alert('Draft saved'),
                  },
                ]}
              >
                Publish
              </SplitButton>
            </div>
          </div>
        </div>
      </div>
      <TextSecondary className="text-sm">
        Disabled states communicate when actions are unavailable. Individual
        menu items can be disabled independently.
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Different states including normal, disabled, and mixed states with some actions disabled.',
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Keyboard Navigation</Heading>
        <div className="flex flex-wrap gap-4">
          <SplitButton
            tabIndex={0}
            onClick={() => alert('Keyboard accessible')}
            actions={defaultActions}
          >
            Focusable Split Button
          </SplitButton>
          <SplitButton
            variant="secondary"
            tabIndex={0}
            onClick={() => alert('Secondary keyboard action')}
            actions={[
              { label: 'Option 1', onClick: () => alert('Option 1') },
              { label: 'Option 2', onClick: () => alert('Option 2') },
            ]}
          >
            Secondary Split
          </SplitButton>
        </div>
        <Label className="mt-2">
          Use Tab to focus, Enter/Space for primary action, Arrow keys for
          dropdown navigation
        </Label>
      </div>

      <div>
        <Heading className="mb-2">Screen Reader Friendly</Heading>
        <div className="flex flex-wrap gap-4">
          <SplitButton
            onClick={() => console.log('Document saved')}
            actions={[
              {
                label: 'Save as PDF',
                onClick: () => console.log('PDF saved'),
                'aria-label': 'Save document as PDF file',
              },
              {
                label: 'Save as Word',
                onClick: () => console.log('Word saved'),
                'aria-label': 'Save document as Word file',
              },
            ]}
            aria-label="Save document with format options"
          >
            Save Document
          </SplitButton>
        </div>
      </div>

      <TextSecondary className="text-sm">
        <p>
          <strong>Accessibility Features:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Full keyboard navigation support</li>
          <li>ARIA labels for screen readers</li>
          <li>Focus management between button and dropdown</li>
          <li>Semantic button and menu markup</li>
          <li>High contrast focus indicators</li>
          <li>Proper disabled state communication</li>
        </ul>
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Accessibility features including keyboard navigation, ARIA support, and screen reader compatibility.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => {
    const handleSave = () => alert('Document saved!');
    const handleExport = () => alert('Data exported!');
    const handleDeploy = () => alert('Deployed to production!');

    return (
      <div className="space-y-6">
        <div>
          <Heading className="mb-2">Document Editor</Heading>
          <div className="flex gap-2">
            <SplitButton
              variant="primary"
              onClick={handleSave}
              actions={[
                {
                  label: 'Save as Draft',
                  onClick: () => alert('Saved as draft'),
                },
                {
                  label: 'Save & Close',
                  onClick: () => alert('Saved and closed'),
                },
                {
                  label: 'Save & New',
                  onClick: () => alert('Saved and creating new'),
                },
              ]}
            >
              Save
            </SplitButton>
            <SplitButton
              variant="outline"
              onClick={handleExport}
              actions={[
                {
                  label: 'Export as PDF',
                  onClick: () => alert('PDF exported'),
                },
                {
                  label: 'Export as Word',
                  onClick: () => alert('Word exported'),
                },
                {
                  label: 'Export as HTML',
                  onClick: () => alert('HTML exported'),
                },
              ]}
            >
              Export
            </SplitButton>
          </div>
        </div>

        <div>
          <Heading className="mb-2">Deployment Pipeline</Heading>
          <SplitButton
            variant="primary"
            onClick={handleDeploy}
            actions={[
              {
                label: 'Deploy to Staging',
                onClick: () => alert('Deployed to staging'),
              },
              {
                label: 'Deploy to Development',
                onClick: () => alert('Deployed to dev'),
              },
              {
                label: 'Deploy with Rollback',
                onClick: () => alert('Deployed with rollback plan'),
              },
            ]}
          >
            Deploy to Production
          </SplitButton>
        </div>

        <div>
          <Heading className="mb-2">Content Publishing</Heading>
          <SplitButton
            variant="primary"
            onClick={() => alert('Published immediately')}
            actions={[
              {
                label: 'Schedule for Later',
                onClick: () => alert('Scheduled'),
              },
              { label: 'Save as Draft', onClick: () => alert('Draft saved') },
              {
                label: 'Preview Before Publishing',
                onClick: () => alert('Preview opened'),
              },
            ]}
          >
            Publish Now
          </SplitButton>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Real-world usage examples showing split buttons in common scenarios like document editing, deployment, and content publishing.',
      },
    },
  },
};
