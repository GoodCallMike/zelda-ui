import type { Meta, StoryObj } from '@storybook/react';
import { Button, Typography } from 'zelda-ui-core';
import {
  ArrowRightIcon,
  PlusIcon,
  SearchLgIcon,
  Trash01Icon,
} from 'zelda-ui-icons';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Versatile button component for triggering actions and navigation with comprehensive accessibility support.

\`\`\`tsx
import { Button } from 'zelda-ui-core';

// Primary usage pattern
<Button>Save Changes</Button>

// Key variant
<Button variant="primary">Create Account</Button>
\`\`\`

## Variants
- **primary** - Main actions (golden yellow styling)
- **default** - Secondary actions (outlined appearance)
- **destructive** - Dangerous actions (red warning styling)
- **text** - Minimal emphasis (text-only)
- **link** - Navigation actions (link styling)
- **dashed** - Add/upload actions (dashed border)

## Accessibility & Testing
- Uses semantic button element with proper ARIA
- Supports Enter/Space activation and Tab navigation
- Maintains WCAG AA contrast ratios in all themes

\`\`\`tsx
// Testing approach
const button = screen.getByTestId('save-button');
expect(button).toBeEnabled();
await user.click(button);
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link', 'destructive'],
      description: 'Visual style and semantic meaning',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents user interaction',
    },
    icon: {
      control: false,
      description: 'Icon component to display',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position relative to text',
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
    },
    className: { table: { disable: true } },
    onClick: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Save Changes',
    testId: 'save-button',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <Button variant="primary" testId="variant-primary">
        Primary
      </Button>
      <Button variant="default" testId="variant-default">
        Default
      </Button>
      <Button variant="dashed" testId="variant-dashed">
        Dashed
      </Button>
      <Button variant="text" testId="variant-text">
        Text
      </Button>
      <Button variant="link" testId="variant-link">
        Link
      </Button>
      <Button variant="destructive" testId="variant-destructive">
        Destructive
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete range of button variants showing functional hierarchy from high to low emphasis.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div className="space-y-3">
        <Typography variant="h3">Form Actions</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" testId="submit-form">
            Submit
          </Button>
          <Button variant="default" testId="save-draft">
            Save Draft
          </Button>
          <Button variant="text" testId="cancel-form">
            Cancel
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Data Actions</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="default" icon={SearchLgIcon} testId="search-data">
            Search
          </Button>
          <Button variant="dashed" icon={PlusIcon} testId="add-item">
            Add New
          </Button>
          <Button variant="destructive" icon={Trash01Icon} testId="delete-item">
            Delete
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Navigation</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="text" testId="go-back">
            Back
          </Button>
          <Button
            variant="primary"
            icon={ArrowRightIcon}
            iconPosition="right"
            testId="continue"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world integration scenarios showing buttons working with other components.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <Button testId="normal-button">Normal</Button>
      <Button disabled testId="disabled-button">
        Disabled
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button states showing normal and disabled appearances.',
      },
    },
  },
};
