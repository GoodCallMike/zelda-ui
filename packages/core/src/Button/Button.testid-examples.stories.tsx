import type { Meta, StoryObj } from '@storybook/react';
import {
  ArrowRightIcon,
  PlusIcon,
  SearchLgIcon,
  Trash01Icon,
} from '@zelda/icons';
import { Typography } from '../Typography';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'General/Button/Testing Examples',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Comprehensive testing examples for Button component using testId attributes.

## Overview

This story demonstrates best practices for testing Button components with proper testId naming conventions, user interaction patterns, and integration testing approaches.

## testId Naming Conventions

- **btn-{action}-{context}** - Descriptive action with context (btn-save-game)
- **{component}-{identifier}** - Component type with unique identifier (modal-close)
- **{page}-{section}-{action}** - Page context with section and action (profile-settings-save)

## Testing Patterns

### Basic Testing
\`\`\`tsx
// Query by testId
const button = screen.getByTestId('btn-save-game');
expect(button).toBeInTheDocument();

// Test button state
expect(button).toBeEnabled();
expect(button).not.toBeDisabled();
\`\`\`

### User Interaction Testing
\`\`\`tsx
// Test user interactions
const user = userEvent.setup();
const button = screen.getByTestId('btn-interactive-click');

// Test clicking
await user.click(button);

// Test keyboard activation
button.focus();
await user.keyboard('{Enter}');
await user.keyboard(' ');
\`\`\`

### Integration Testing
\`\`\`tsx
// Test component integration
test('Game menu navigation works correctly', async () => {
  const user = userEvent.setup();
  const mockNavigate = jest.fn();
  
  render(<GameMenu navigate={mockNavigate} />);
  
  const newGameBtn = screen.getByTestId('game-menu-new-game');
  await user.click(newGameBtn);
  
  expect(mockNavigate).toHaveBeenCalledWith('/new-game');
});
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TestIdNamingConventions: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <Typography variant="h4" className="mb-3 text-blue-800">
          🏷️ testId Naming Conventions
        </Typography>
        <Typography variant="body2" className="text-blue-700">
          Consistent naming patterns for reliable test automation and
          maintenance.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Recommended Patterns</Typography>
        <div className="p-3 bg-gray-50 border rounded mb-4">
          <ul className="text-sm space-y-2">
            <li>
              •{' '}
              <code className="bg-blue-100 px-1 rounded">
                btn-{'{action}'}-{'{context}'}
              </code>{' '}
              - Action-focused: <code>btn-save-game</code>,{' '}
              <code>btn-delete-user</code>
            </li>
            <li>
              •{' '}
              <code className="bg-blue-100 px-1 rounded">
                {'{component}'}-{'{identifier}'}
              </code>{' '}
              - Component-focused: <code>modal-close</code>,{' '}
              <code>form-submit</code>
            </li>
            <li>
              •{' '}
              <code className="bg-blue-100 px-1 rounded">
                {'{page}'}-{'{section}'}-{'{action}'}
              </code>{' '}
              - Context-focused: <code>profile-settings-save</code>,{' '}
              <code>inventory-item-use</code>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Typography variant="body2" className="font-semibold">
            Action-Focused Pattern
          </Typography>
          <div className="flex gap-3 flex-wrap">
            <Button testId="btn-save-game" variant="primary">
              Save Game
            </Button>
            <Button testId="btn-load-game" variant="default">
              Load Game
            </Button>
            <Button testId="btn-delete-save" variant="destructive">
              Delete Save
            </Button>
            <Button testId="btn-cancel-action" variant="text">
              Cancel
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Typography variant="body2" className="font-semibold">
            Component-Focused Pattern
          </Typography>
          <div className="flex gap-3 flex-wrap">
            <Button testId="modal-close" variant="text">
              ×
            </Button>
            <Button testId="form-submit" variant="primary">
              Submit
            </Button>
            <Button testId="dialog-confirm" variant="destructive">
              Confirm
            </Button>
            <Button testId="menu-toggle" variant="default">
              Menu
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Typography variant="body2" className="font-semibold">
            Context-Focused Pattern
          </Typography>
          <div className="flex gap-3 flex-wrap">
            <Button testId="profile-settings-save" variant="primary">
              Save Settings
            </Button>
            <Button testId="inventory-item-use" variant="default">
              Use Item
            </Button>
            <Button testId="quest-log-clear" variant="destructive">
              Clear Log
            </Button>
          </div>
        </div>

        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query buttons by testId
const saveBtn = screen.getByTestId('btn-save-game')
const modalClose = screen.getByTestId('modal-close')
const profileSave = screen.getByTestId('profile-settings-save')

// Verify buttons exist
expect(saveBtn).toBeInTheDocument()
expect(modalClose).toBeInTheDocument()
expect(profileSave).toBeInTheDocument()`}
        </div>
      </div>
    </div>
  ),
};

export const UserInteractionTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-green-50 border-green-200">
        <Typography variant="h4" className="mb-3 text-green-800">
          🖱️ User Interaction Testing
        </Typography>
        <Typography variant="body2" className="text-green-700">
          Testing user interactions including clicks, keyboard navigation, and
          state changes.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Click Interactions</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="btn-click-test" variant="primary">
            Click Test
          </Button>
          <Button testId="btn-double-click" variant="default">
            Double Click
          </Button>
          <Button testId="btn-right-click" variant="dashed">
            Right Click
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test click interactions
const user = userEvent.setup()
const clickBtn = screen.getByTestId('btn-click-test')

// Test single click
await user.click(clickBtn)

// Test double click
await user.dblClick(clickBtn)

// Test right click (context menu)
await user.pointer({ keys: '[MouseRight]', target: clickBtn })`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Keyboard Navigation</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="btn-keyboard-focus" variant="primary">
            Focus Test
          </Button>
          <Button testId="btn-keyboard-enter" variant="default">
            Enter Key
          </Button>
          <Button testId="btn-keyboard-space" variant="dashed">
            Space Key
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test keyboard interactions
const user = userEvent.setup()
const focusBtn = screen.getByTestId('btn-keyboard-focus')
const enterBtn = screen.getByTestId('btn-keyboard-enter')

// Test tab navigation
await user.tab()
expect(focusBtn).toHaveFocus()

// Test Enter key activation
enterBtn.focus()
await user.keyboard('{Enter}')

// Test Space key activation
await user.keyboard(' ')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">State Testing</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="btn-enabled-state" variant="primary">
            Enabled
          </Button>
          <Button testId="btn-disabled-state" variant="default" disabled>
            Disabled
          </Button>
          <Button testId="btn-loading-state" variant="primary" loading>
            Loading
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test button states
const enabledBtn = screen.getByTestId('btn-enabled-state')
const disabledBtn = screen.getByTestId('btn-disabled-state')
const loadingBtn = screen.getByTestId('btn-loading-state')

// Test enabled state
expect(enabledBtn).toBeEnabled()
expect(enabledBtn).not.toBeDisabled()

// Test disabled state
expect(disabledBtn).toBeDisabled()
expect(disabledBtn).toHaveAttribute('disabled')

// Test loading state
expect(loadingBtn).toBeDisabled()
expect(loadingBtn).toHaveAttribute('aria-busy', 'true')`}
        </div>
      </div>
    </div>
  ),
};

export const FormContextTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
        <Typography variant="h4" className="mb-3 text-purple-800">
          📝 Form Context Testing
        </Typography>
        <Typography variant="body2" className="text-purple-700">
          Testing buttons within form contexts including submission, validation,
          and reset functionality.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Form Button Types</Typography>
        <div className="space-y-3">
          <div className="flex gap-3">
            <Button testId="form-submit-btn" variant="primary" type="submit">
              Submit Form
            </Button>
            <Button testId="form-reset-btn" variant="default" type="reset">
              Reset Form
            </Button>
            <Button testId="form-cancel-btn" variant="text" type="button">
              Cancel
            </Button>
          </div>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test form button types
const submitBtn = screen.getByTestId('form-submit-btn')
const resetBtn = screen.getByTestId('form-reset-btn')
const cancelBtn = screen.getByTestId('form-cancel-btn')

// Test button types
expect(submitBtn).toHaveAttribute('type', 'submit')
expect(resetBtn).toHaveAttribute('type', 'reset')
expect(cancelBtn).toHaveAttribute('type', 'button')

// Test form submission
const form = screen.getByRole('form')
fireEvent.submit(form) // or await user.click(submitBtn)`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Validation States</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="btn-valid-form" variant="primary">
            Valid Form
          </Button>
          <Button testId="btn-invalid-form" variant="destructive" disabled>
            Invalid Form
          </Button>
          <Button testId="btn-pending-validation" variant="default" loading>
            Validating...
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test validation states
const validBtn = screen.getByTestId('btn-valid-form')
const invalidBtn = screen.getByTestId('btn-invalid-form')
const pendingBtn = screen.getByTestId('btn-pending-validation')

// Test form validity
expect(validBtn).toBeEnabled()
expect(invalidBtn).toBeDisabled()
expect(pendingBtn).toHaveAttribute('aria-busy', 'true')

// Test form submission prevention
const user = userEvent.setup()
await user.click(invalidBtn) // Should not trigger submission`}
        </div>
      </div>
    </div>
  ),
};

export const IconButtonTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-orange-50 border-orange-200">
        <Typography variant="h4" className="mb-3 text-orange-800">
          🎨 Icon Button Testing
        </Typography>
        <Typography variant="body2" className="text-orange-700">
          Testing buttons with icons including accessibility labels and icon
          presence verification.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Icon Buttons with Text</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button
            testId="btn-search-icon"
            variant="default"
            icon={SearchLgIcon}
          >
            Search
          </Button>
          <Button testId="btn-add-icon" variant="primary" icon={PlusIcon}>
            Add Item
          </Button>
          <Button
            testId="btn-delete-icon"
            variant="destructive"
            icon={Trash01Icon}
          >
            Delete
          </Button>
          <Button
            testId="btn-continue-icon"
            variant="primary"
            icon={ArrowRightIcon}
            iconPosition="right"
          >
            Continue
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test icon buttons with text
const searchBtn = screen.getByTestId('btn-search-icon')
const addBtn = screen.getByTestId('btn-add-icon')
const continueBtn = screen.getByTestId('btn-continue-icon')

// Verify button content includes text
expect(searchBtn).toHaveTextContent('Search')
expect(addBtn).toHaveTextContent('Add Item')
expect(continueBtn).toHaveTextContent('Continue')

// Test icon presence (icons render as SVG elements)
const searchIcon = searchBtn.querySelector('svg')
expect(searchIcon).toBeInTheDocument()

// Test icon position
const continueIcon = continueBtn.querySelector('svg')
expect(continueIcon).toBeInTheDocument()`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Icon-Only Buttons</Typography>
        <div className="flex gap-3">
          <Button
            testId="btn-search-only"
            variant="default"
            icon={SearchLgIcon}
            aria-label="Search through inventory items"
          />
          <Button
            testId="btn-add-only"
            variant="primary"
            icon={PlusIcon}
            aria-label="Add new item to inventory"
          />
          <Button
            testId="btn-delete-only"
            variant="destructive"
            icon={Trash01Icon}
            aria-label="Delete selected items permanently"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test icon-only buttons
const searchOnlyBtn = screen.getByTestId('btn-search-only')
const addOnlyBtn = screen.getByTestId('btn-add-only')

// Test accessibility labels for icon-only buttons
expect(searchOnlyBtn).toHaveAttribute('aria-label', 'Search through inventory items')
expect(addOnlyBtn).toHaveAttribute('aria-label', 'Add new item to inventory')

// Test icon presence
const searchIcon = searchOnlyBtn.querySelector('svg')
const addIcon = addOnlyBtn.querySelector('svg')
expect(searchIcon).toBeInTheDocument()
expect(addIcon).toBeInTheDocument()

// Test button has no text content (icon-only)
expect(searchOnlyBtn).not.toHaveTextContent(/\\w+/)`}
        </div>
      </div>
    </div>
  ),
};

export const ARIAAttributeTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-indigo-50 border-indigo-200">
        <Typography variant="h4" className="mb-3 text-indigo-800">
          🏷️ ARIA Attribute Testing
        </Typography>
        <Typography variant="body2" className="text-indigo-700">
          Testing ARIA attributes for enhanced accessibility and screen reader
          support.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Expandable Content</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button
            testId="btn-expandable"
            variant="default"
            aria-expanded="false"
            aria-controls="menu-panel"
          >
            Menu ▼
          </Button>
          <Button
            testId="btn-collapsible"
            variant="default"
            aria-expanded="true"
            aria-controls="details-panel"
          >
            Details ▲
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test expandable content ARIA
const expandBtn = screen.getByTestId('btn-expandable')
const collapseBtn = screen.getByTestId('btn-collapsible')

// Test aria-expanded states
expect(expandBtn).toHaveAttribute('aria-expanded', 'false')
expect(collapseBtn).toHaveAttribute('aria-expanded', 'true')

// Test aria-controls relationships
expect(expandBtn).toHaveAttribute('aria-controls', 'menu-panel')
expect(collapseBtn).toHaveAttribute('aria-controls', 'details-panel')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Toggle States</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="btn-toggle-on" variant="primary" aria-pressed="true">
            Feature On
          </Button>
          <Button
            testId="btn-toggle-off"
            variant="default"
            aria-pressed="false"
          >
            Feature Off
          </Button>
          <Button
            testId="btn-toggle-mixed"
            variant="dashed"
            aria-pressed="mixed"
          >
            Partial Selection
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test toggle button states
const toggleOnBtn = screen.getByTestId('btn-toggle-on')
const toggleOffBtn = screen.getByTestId('btn-toggle-off')
const toggleMixedBtn = screen.getByTestId('btn-toggle-mixed')

// Test aria-pressed states
expect(toggleOnBtn).toHaveAttribute('aria-pressed', 'true')
expect(toggleOffBtn).toHaveAttribute('aria-pressed', 'false')
expect(toggleMixedBtn).toHaveAttribute('aria-pressed', 'mixed')

// Test toggle functionality
const user = userEvent.setup()
await user.click(toggleOffBtn)
expect(toggleOffBtn).toHaveAttribute('aria-pressed', 'true')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Descriptive Labels</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button
            testId="btn-close-modal"
            variant="text"
            aria-label="Close dialog window"
          >
            ×
          </Button>
          <Button
            testId="btn-delete-account"
            variant="destructive"
            aria-label="Delete user account permanently"
            aria-describedby="delete-warning"
          >
            Delete
          </Button>
        </div>
        <Typography
          variant="body2"
          id="delete-warning"
          className="text-red-600 text-sm"
        >
          ⚠️ This action cannot be undone
        </Typography>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test descriptive ARIA labels
const closeBtn = screen.getByTestId('btn-close-modal')
const deleteBtn = screen.getByTestId('btn-delete-account')

// Test aria-label for context
expect(closeBtn).toHaveAttribute('aria-label', 'Close dialog window')
expect(deleteBtn).toHaveAttribute('aria-label', 'Delete user account permanently')

// Test aria-describedby relationships
expect(deleteBtn).toHaveAttribute('aria-describedby', 'delete-warning')

// Test accessible name calculation
expect(closeBtn).toHaveAccessibleName('Close dialog window')
expect(deleteBtn).toHaveAccessibleName('Delete user account permanently')`}
        </div>
      </div>
    </div>
  ),
};

export const IntegrationTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-teal-50 border-teal-200">
        <Typography variant="h4" className="mb-3 text-teal-800">
          🔗 Integration Testing
        </Typography>
        <Typography variant="body2" className="text-teal-700">
          Testing buttons within complex component interactions and user
          workflows.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Game Menu Navigation</Typography>
        <div className="p-4 border rounded bg-gray-50">
          <Typography variant="body2" className="mb-3 font-semibold">
            Main Menu Interface
          </Typography>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button testId="game-menu-new-game" variant="primary">
                New Game
              </Button>
              <Button testId="game-menu-continue" variant="default">
                Continue
              </Button>
              <Button testId="game-menu-load-save" variant="text">
                Load Save
              </Button>
            </div>
            <div className="flex gap-3">
              <Button testId="game-menu-settings" variant="text">
                Settings
              </Button>
              <Button testId="game-menu-credits" variant="link">
                Credits
              </Button>
              <Button testId="game-menu-quit" variant="destructive">
                Quit
              </Button>
            </div>
          </div>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Integration test example
test('Game menu navigation works correctly', async () => {
  const user = userEvent.setup()
  const mockNavigate = jest.fn()
  
  render(<GameMenu navigate={mockNavigate} />)
  
  // Test new game flow
  const newGameBtn = screen.getByTestId('game-menu-new-game')
  await user.click(newGameBtn)
  expect(mockNavigate).toHaveBeenCalledWith('/new-game')
  
  // Test settings modal
  const settingsBtn = screen.getByTestId('game-menu-settings')
  await user.click(settingsBtn)
  expect(screen.getByTestId('settings-modal')).toBeVisible()
  
  // Test quit confirmation
  const quitBtn = screen.getByTestId('game-menu-quit')
  await user.click(quitBtn)
  expect(screen.getByTestId('quit-confirmation')).toBeVisible()
})`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Modal Dialog Interactions</Typography>
        <div className="p-4 border rounded bg-gray-50">
          <Typography variant="body2" className="mb-3 font-semibold">
            Confirmation Dialog
          </Typography>
          <div className="flex gap-3">
            <Button testId="modal-confirm-action" variant="destructive">
              Confirm Delete
            </Button>
            <Button testId="modal-cancel-action" variant="default">
              Cancel
            </Button>
            <Button
              testId="modal-close-x"
              variant="text"
              aria-label="Close dialog"
            >
              ×
            </Button>
          </div>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test modal interactions
test('Modal dialog handles user actions correctly', async () => {
  const user = userEvent.setup()
  const onConfirm = jest.fn()
  const onCancel = jest.fn()
  const onClose = jest.fn()
  
  render(
    <ConfirmationModal 
      onConfirm={onConfirm}
      onCancel={onCancel}
      onClose={onClose}
    />
  )
  
  // Test confirm action
  const confirmBtn = screen.getByTestId('modal-confirm-action')
  await user.click(confirmBtn)
  expect(onConfirm).toHaveBeenCalled()
  
  // Test cancel action
  const cancelBtn = screen.getByTestId('modal-cancel-action')
  await user.click(cancelBtn)
  expect(onCancel).toHaveBeenCalled()
  
  // Test close action
  const closeBtn = screen.getByTestId('modal-close-x')
  await user.click(closeBtn)
  expect(onClose).toHaveBeenCalled()
})`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Form Workflow Testing</Typography>
        <div className="p-4 border rounded bg-gray-50">
          <Typography variant="body2" className="mb-3 font-semibold">
            Multi-Step Form
          </Typography>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button testId="form-step-back" variant="text" disabled>
                ← Back
              </Button>
              <Button testId="form-step-next" variant="primary">
                Next →
              </Button>
            </div>
            <div className="flex gap-3">
              <Button testId="form-save-draft" variant="dashed">
                Save Draft
              </Button>
              <Button testId="form-submit-final" variant="primary" disabled>
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test form workflow
test('Multi-step form navigation works correctly', async () => {
  const user = userEvent.setup()
  
  render(<MultiStepForm />)
  
  // Test initial state
  const backBtn = screen.getByTestId('form-step-back')
  const nextBtn = screen.getByTestId('form-step-next')
  const submitBtn = screen.getByTestId('form-submit-final')
  
  expect(backBtn).toBeDisabled() // First step
  expect(nextBtn).toBeEnabled()
  expect(submitBtn).toBeDisabled() // Not ready
  
  // Test navigation
  await user.click(nextBtn)
  expect(backBtn).toBeEnabled() // Can go back now
  
  // Test draft saving
  const draftBtn = screen.getByTestId('form-save-draft')
  await user.click(draftBtn)
  expect(screen.getByText('Draft saved')).toBeVisible()
})`}
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-rose-50 border-rose-200">
        <Typography variant="h4" className="mb-3 text-rose-800">
          ♿ Accessibility Testing
        </Typography>
        <Typography variant="body2" className="text-rose-700">
          Automated accessibility testing patterns and screen reader
          compatibility verification.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Automated Accessibility Tests</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="a11y-test-basic" variant="primary">
            Basic Button
          </Button>
          <Button testId="a11y-test-icon" variant="default" icon={SearchLgIcon}>
            With Icon
          </Button>
          <Button
            testId="a11y-test-aria"
            variant="destructive"
            aria-label="Delete permanently"
          >
            Delete
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Automated accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('Button has no accessibility violations', async () => {
  const { container } = render(
    <Button testId="a11y-test-basic">Test Button</Button>
  )
  
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('Icon button is accessible', async () => {
  const { container } = render(
    <Button 
      testId="a11y-test-icon" 
      icon={SearchIcon}
      aria-label="Search items"
    >
      Search
    </Button>
  )
  
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Screen Reader Testing</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="sr-test-role" variant="primary">
            Role Test
          </Button>
          <Button
            testId="sr-test-name"
            variant="default"
            aria-label="Custom accessible name"
          >
            Name Test
          </Button>
          <Button
            testId="sr-test-description"
            variant="dashed"
            aria-describedby="btn-help"
          >
            Description Test
          </Button>
        </div>
        <Typography
          variant="body2"
          id="btn-help"
          className="text-gray-600 text-sm"
        >
          This button demonstrates aria-describedby usage
        </Typography>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Screen reader compatibility tests
test('Button has correct role and accessible name', () => {
  render(<Button testId="sr-test-role">Click Me</Button>)
  
  const button = screen.getByTestId('sr-test-role')
  
  // Test semantic role
  expect(button).toHaveRole('button')
  
  // Test accessible name
  expect(button).toHaveAccessibleName('Click Me')
})

test('Button with aria-label has correct accessible name', () => {
  render(
    <Button 
      testId="sr-test-name" 
      aria-label="Custom accessible name"
    >
      Visual Text
    </Button>
  )
  
  const button = screen.getByTestId('sr-test-name')
  expect(button).toHaveAccessibleName('Custom accessible name')
})

test('Button with description is properly linked', () => {
  render(
    <>
      <Button 
        testId="sr-test-description" 
        aria-describedby="help-text"
      >
        Help Button
      </Button>
      <div id="help-text">Additional context</div>
    </>
  )
  
  const button = screen.getByTestId('sr-test-description')
  expect(button).toHaveAttribute('aria-describedby', 'help-text')
  expect(button).toHaveAccessibleDescription('Additional context')
})`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Keyboard Navigation Testing</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="kbd-test-focus" variant="primary">
            Focus Test
          </Button>
          <Button testId="kbd-test-activation" variant="default">
            Activation Test
          </Button>
          <Button testId="kbd-test-disabled" variant="dashed" disabled>
            Disabled Test
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Keyboard navigation tests
test('Button supports keyboard navigation', async () => {
  const user = userEvent.setup()
  const onClick = jest.fn()
  
  render(
    <Button testId="kbd-test-focus" onClick={onClick}>
      Keyboard Test
    </Button>
  )
  
  const button = screen.getByTestId('kbd-test-focus')
  
  // Test tab navigation
  await user.tab()
  expect(button).toHaveFocus()
  
  // Test Enter key activation
  await user.keyboard('{Enter}')
  expect(onClick).toHaveBeenCalledTimes(1)
  
  // Test Space key activation
  await user.keyboard(' ')
  expect(onClick).toHaveBeenCalledTimes(2)
})

test('Disabled button is not focusable', async () => {
  const user = userEvent.setup()
  
  render(
    <>
      <Button testId="kbd-test-before">Before</Button>
      <Button testId="kbd-test-disabled" disabled>Disabled</Button>
      <Button testId="kbd-test-after">After</Button>
    </>
  )
  
  const beforeBtn = screen.getByTestId('kbd-test-before')
  const disabledBtn = screen.getByTestId('kbd-test-disabled')
  const afterBtn = screen.getByTestId('kbd-test-after')
  
  // Tab should skip disabled button
  beforeBtn.focus()
  await user.tab()
  expect(afterBtn).toHaveFocus()
  expect(disabledBtn).not.toHaveFocus()
})`}
        </div>
      </div>
    </div>
  ),
};
