import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Button, Card, Typography } from '@zelda/core';
import {
  ArrowRightIcon,
  PlusIcon,
  SearchLgIcon,
  Trash01Icon,
} from '@zelda/icons';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Button component triggers actions and navigation with Zelda-themed styling and comprehensive accessibility.

\`\`\`tsx
import { Button } from '@zelda/core';

// Primary usage pattern
<Button>Start Adventure</Button>

// Key variant
<Button variant="primary">Save Game</Button>
\`\`\`

## Variants
- **primary** - Main actions (Triforce Gold styling)
- **default** - Secondary actions (outlined appearance)
- **destructive** - Dangerous actions (Ganon Red warning)
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
    children: 'Start Adventure',
    variant: 'primary',
    testId: 'adventure-button',
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
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
        <Typography variant="h3">Adventure Menu</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" testId="start-game">
            Start New Game
          </Button>
          <Button variant="default" testId="continue-game">
            Continue Adventure
          </Button>
          <Button variant="text" testId="load-save">
            Load Save
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Inventory Actions</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="default" icon={SearchLgIcon} testId="use-item">
            Use Item
          </Button>
          <Button variant="dashed" icon={PlusIcon} testId="add-item">
            Add to Inventory
          </Button>
          <Button variant="destructive" icon={Trash01Icon} testId="drop-item">
            Drop Item
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Form Actions</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="text" testId="cancel-form">
            Cancel
          </Button>
          <Button
            variant="primary"
            icon={ArrowRightIcon}
            iconPosition="right"
            testId="save-form"
          >
            Save Character
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world integration scenarios showing buttons working with other components in adventure-themed interfaces.',
      },
    },
  },
};

export const Accessibility: Story = {
  render: () => (
    <div className="p-6">
      <Typography variant="h3" className="mb-0">
        🔍 Accessibility Features Demo
      </Typography>
      <Typography variant="body2" className="mb-4">
        Comprehensive accessibility demonstration for Button component.
      </Typography>

      <div className="space-y-4">
        <Typography variant="h4">⌨️ Keyboard Navigation</Typography>
        <Card>
          <Typography
            variant="body2"
            className="text-green-800 dark:text-green-200 mb-3"
          >
            <strong>Try this:</strong> Use Tab to navigate between buttons,
            Enter or Space to activate them.
          </Typography>
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary" testId="keyboard-primary">
              Primary Action
            </Button>
            <Button variant="default" testId="keyboard-secondary">
              Secondary Action
            </Button>
            <Button variant="destructive" testId="keyboard-destructive">
              Destructive Action
            </Button>
          </div>
        </Card>

        <div className="space-y-2">
          <Typography variant="h5">Keyboard Interactions</Typography>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Key</th>
                  <th className="text-left p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                      Enter
                    </kbd>
                  </td>
                  <td className="p-2">Activates the button</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                      Space
                    </kbd>
                  </td>
                  <td className="p-2">Activates the button</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                      Tab
                    </kbd>
                  </td>
                  <td className="p-2">Moves focus to next focusable element</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h4">🏷️ ARIA Implementation</Typography>
        <Card>
          <div>
            <Typography variant="h5">Semantic Button Element</Typography>
            <Button variant="primary" testId="semantic-button">
              Semantic HTML Button
            </Button>
            <Typography
              variant="body2"
              className="text-gray-600 dark:text-gray-400 mt-1"
            >
              Uses semantic <code>&lt;button&gt;</code> element with proper role
            </Typography>
          </div>

          <div>
            <Typography variant="h5">Icon Button with aria-label</Typography>
            <Button
              variant="default"
              icon={SearchLgIcon}
              aria-label="Search inventory items"
              testId="icon-button"
            />
            <Typography
              variant="body2"
              className="text-gray-600 dark:text-gray-400 mt-1"
            >
              Icon-only button with descriptive aria-label
            </Typography>
          </div>

          <div>
            <Typography variant="h5">Disabled State</Typography>
            <Button variant="primary" disabled testId="disabled-button">
              Disabled Button
            </Button>
            <Typography
              variant="body2"
              className="text-gray-600 dark:text-gray-400 mt-1"
            >
              Properly announces disabled state to screen readers
            </Typography>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <Typography variant="h4">📢 Consumer Responsibilities</Typography>
        <Alert
          message="Your Responsibility"
          description="You must provide descriptive
            button text or aria-label for icon-only buttons. This component
            provides semantic HTML structure and keyboard navigation."
          type="info"
        ></Alert>
      </div>

      <div className="space-y-4">
        <Typography variant="h4">🧪 Testing Examples</Typography>
        <div className="p-3 text-sm">
          <pre className="p-4">{`// Test button accessibility
const button = screen.getByTestId('save-button');
expect(button).toBeEnabled();

// Test keyboard activation
const user = userEvent.setup();
await user.tab();
expect(button).toHaveFocus();
await user.keyboard('{Enter}');

// Test ARIA attributes
expect(screen.getByRole('button', { name: 'Save Game' })).toBeInTheDocument();
expect(iconButton).toHaveAttribute('aria-label', 'Search inventory');`}</pre>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Comprehensive Accessibility Features

This story demonstrates all accessibility features built into the Button component.

### Keyboard Navigation Patterns
- **Enter/Space** - Activates the button
- **Tab** - Moves focus to next focusable element
- **Shift+Tab** - Moves focus to previous focusable element

### ARIA Implementation
- **Role**: Uses semantic button element (implicit role="button")
- **States**: Properly announces disabled state
- **Properties**: Supports aria-label for additional context

### Screen Reader Support
- Semantic HTML button element
- Proper labeling and descriptions
- State announcements for disabled buttons
- Clear focus management

### Testing Patterns
\`\`\`tsx
// Basic button test
const button = screen.getByTestId('save-button');
expect(button).toBeEnabled();

// Keyboard interaction test
const user = userEvent.setup();
await user.tab();
expect(button).toHaveFocus();
await user.keyboard('{Enter}');

// Accessibility test
expect(screen.getByRole('button', { name: 'Save Game' })).toBeInTheDocument();
\`\`\`
        `,
      },
    },
  },
};
