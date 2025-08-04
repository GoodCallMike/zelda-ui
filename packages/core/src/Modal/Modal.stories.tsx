import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { Typography } from '../Typography';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'General/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Modal component for Hyrule-themed interfaces with magical animations and comprehensive accessibility support.

## Overview

The Modal component provides overlay dialogs with authentic Zelda-inspired styling and magical entrance animations. It supports multiple sizes, customizable content, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Modal } from '@zelda/core';

// Basic usage
const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)} title="Adventure Awaits">
  <p>Your quest begins here...</p>
</Modal>
\`\`\`

## Features

### Magical Animations
- **3D Entrance**: Scale, rotation, and blur effects for dramatic appearance
- **Backdrop Blur**: Mystical backdrop with smooth blur animation
- **Shimmer Header**: Animated gradient border on the header
- **Bounce Effect**: Overshoots then settles for satisfying interaction

### Sizes
- **Small**: Confirmations and simple dialogs
- **Medium**: Standard forms and content (default)
- **Large**: Complex forms and detailed content
- **Fullscreen**: Maximum content display

## Accessibility

The Modal component is fully accessible with:

- **Focus Management**: Traps focus within modal and restores on close
- **Keyboard Navigation**: Escape key closes modal, proper tab order
- **Screen Reader Support**: Proper ARIA attributes and semantic structure
- **Body Scroll Lock**: Prevents background scrolling when modal is open

## Testing

Built-in testing support with comprehensive \`testId\` props:

### Test Identifiers
\`\`\`tsx
<Modal testId="user-settings-modal" />
// Results in: data-testid="user-settings-modal"
\`\`\`

### Testing Examples
\`\`\`tsx
// Query modal
screen.getByTestId('user-settings-modal');

// Test modal opening
fireEvent.click(screen.getByText('Open Settings'));
expect(screen.getByTestId('user-settings-modal')).toBeInTheDocument();

// Test keyboard navigation
fireEvent.keyDown(document, { key: 'Escape' });
expect(screen.queryByTestId('user-settings-modal')).not.toBeInTheDocument();

// Test focus management
const modal = screen.getByTestId('user-settings-modal');
expect(modal).toHaveFocus();
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test ARIA attributes
const modal = screen.getByRole('dialog');
expected(modal).toHaveAttribute('aria-modal', 'true');
expected(modal).toHaveAttribute('aria-labelledby');

// Test focus trap
fireEvent.keyDown(modal, { key: 'Tab' });
// Focus should remain within modal
\`\`\`

## Best Practices

### Do
- Use appropriate size for content (small for confirmations, large for forms)
- Provide clear, descriptive titles
- Include proper action buttons in content
- Use \`maskClosable={false}\` for critical confirmations

### Don't
- Stack multiple modals without proper UX consideration
- Make modals too wide for mobile screens
- Use modals for simple notifications (use Toast instead)
- Forget to handle the onClose callback`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'text',
      description: 'Modal title displayed in header',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'fullscreen'],
      description: 'Size variant of the modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Whether to show close button in header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    maskClosable: {
      control: 'boolean',
      description: 'Whether clicking backdrop closes modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Basic Modal">
          <Typography variant="body1">Some contents...</Typography>
          <Typography variant="body1">Some contents...</Typography>
          <Typography variant="body1">Some contents...</Typography>
        </Modal>
      </>
    );
  },
};

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Adventure Awaits"
        >
          <Typography variant="body1" className="mb-4">
            Your journey through Hyrule begins with a single step. Are you ready
            to face the challenges ahead?
          </Typography>
          <div className="flex gap-2 justify-end">
            <Button variant="default" onClick={() => setOpen(false)}>
              Not Yet
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Begin Adventure
            </Button>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic modal with title, content, and action buttons.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<
      'small' | 'medium' | 'large' | 'fullscreen'
    >('medium');
    const [open, setOpen] = useState(false);

    return (
      <>
        <div className="flex gap-2 mb-4">
          <Button
            onClick={() => {
              setSize('small');
              setOpen(true);
            }}
          >
            Small
          </Button>
          <Button
            onClick={() => {
              setSize('medium');
              setOpen(true);
            }}
          >
            Medium
          </Button>
          <Button
            onClick={() => {
              setSize('large');
              setOpen(true);
            }}
          >
            Large
          </Button>
          <Button
            onClick={() => {
              setSize('fullscreen');
              setOpen(true);
            }}
          >
            Fullscreen
          </Button>
        </div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`${size.charAt(0).toUpperCase() + size.slice(1)} Modal`}
          size={size}
        >
          <Typography variant="body1">
            This is a {size} modal demonstrating different size options for
            various use cases.
          </Typography>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Different modal sizes: small for confirmations, medium for standard content, large for complex forms, and fullscreen for maximum display.',
      },
    },
  },
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Save File
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="⚠️ Delete Save File"
          size="small"
          maskClosable={false}
        >
          <Typography variant="body1" className="mb-4">
            Are you sure you want to delete "Hero's Journey"? This action cannot
            be undone.
          </Typography>
          <div className="flex gap-2 justify-end">
            <Button variant="default" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete Forever
            </Button>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Confirmation modal for destructive actions. Uses small size and prevents accidental closure.',
      },
    },
  },
};

export const AsyncClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSave = () => {
      setLoading(true);
      setTimeout(() => {
        setOpen(false);
        setLoading(false);
      }, 2000);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Save Game Progress</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Save Game"
          closable={!loading}
          maskClosable={!loading}
        >
          <Typography variant="body1" className="mb-4">
            Your progress will be saved to the selected slot. This may take a
            moment.
          </Typography>
          <div className="flex gap-2 justify-end">
            <Button
              variant="default"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save Game'}
            </Button>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modal with async operations. Prevents closure during loading state.',
      },
    },
  },
};

export const Information: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="default" onClick={() => setOpen(true)}>
          Quest Details
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="🗡️ The Master Sword Quest"
          size="medium"
        >
          <div className="space-y-4">
            <Typography variant="body1">
              <strong>Objective:</strong> Retrieve the legendary Master Sword
              from the Lost Woods
            </Typography>
            <Typography variant="body2">
              The Master Sword has been sleeping in the Lost Woods for
              centuries, waiting for a hero worthy enough to wield it. Only one
              pure of heart can draw the blade from its pedestal.
            </Typography>
            <Typography variant="body2">
              <strong>Requirements:</strong> Complete the three trials of
              courage, wisdom, and power.
            </Typography>
          </div>
          <div className="flex justify-end mt-6">
            <Button variant="primary" onClick={() => setOpen(false)}>
              Accept Quest
            </Button>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Information modal for displaying detailed content with single action.',
      },
    },
  },
};

export const CustomizedFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Inventory Actions</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Item Management"
        >
          <Typography variant="body1" className="mb-4">
            What would you like to do with the selected items?
          </Typography>
          <div className="flex gap-2 justify-end">
            <Button variant="text" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="default" onClick={() => setOpen(false)}>
              Move to Storage
            </Button>
            <Button variant="dashed" onClick={() => setOpen(false)}>
              Sell Items
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Drop Items
            </Button>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modal with multiple action buttons showing different variants and purposes.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      document.body.classList.add('dark');
      setOpen(true);
    };

    const handleClose = () => {
      // amazonq-ignore-next-line
      // eslint-disable-next-line security/detect-object-injection
      document.body.classList.remove('dark');
      setOpen(false);
    };

    return (
      <div className="dark bg-gray-900 p-6 rounded">
        <Typography variant="h3" className="mb-4">
          🌙 Ganon's Domain
        </Typography>
        <Button onClick={handleOpen}>Enter Shadow Realm</Button>
        <Modal
          open={open}
          onClose={handleClose}
          title="⚡ Shadow Magic Portal"
          size="medium"
        >
          <div className="space-y-4">
            <Typography variant="body1">
              You stand before a portal crackling with dark energy. The air
              itself seems to whisper with malevolent power.
            </Typography>
            <Typography variant="body2">
              Entering this realm will test your courage against Ganon's
              minions. Are you prepared for the darkness ahead?
            </Typography>
          </div>
          <div className="flex gap-2 justify-end mt-6">
            <Button variant="default" onClick={handleClose}>
              Retreat
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enter Portal
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dark mode transforms the modal with purple mystical theming and enhanced glow effects.',
      },
    },
  },
};

export const AccessibilityFeatures: Story = {
  render: () => {
    const [basicModal, setBasicModal] = useState(false);
    const [focusModal, setFocusModal] = useState(false);
    const [keyboardModal, setKeyboardModal] = useState(false);
    const [ariaModal, setAriaModal] = useState(false);
    const [screenReaderModal, setScreenReaderModal] = useState(false);
    const [announcement, setAnnouncement] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleFormSubmit = () => {
      setAnnouncement('Form submitted successfully!');
      setScreenReaderModal(false);
      setTimeout(() => setAnnouncement(''), 3000);
    };

    return (
      <div className="space-y-8">
        <div className="p-4 border rounded-lg bg-blue-50">
          <Typography variant="h4" className="mb-3">
            🔍 Modal Accessibility Comprehensive Demo
          </Typography>
          <Typography variant="body2" className="mb-4">
            This story demonstrates the Modal's complete accessibility features including focus management, 
            keyboard navigation, ARIA attributes, and screen reader optimizations.
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Button onClick={() => setBasicModal(true)}>Basic Features</Button>
            <Button onClick={() => setFocusModal(true)}>Focus Management</Button>
            <Button onClick={() => setKeyboardModal(true)}>Keyboard Navigation</Button>
            <Button onClick={() => setAriaModal(true)}>ARIA Attributes</Button>
            <Button onClick={() => setScreenReaderModal(true)}>Screen Reader</Button>
          </div>
        </div>

        {/* Live Region for Announcements */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </div>

        {/* Basic Accessibility Features Modal */}
        <Modal
          open={basicModal}
          onClose={() => setBasicModal(false)}
          title="Basic Accessibility Features"
          testId="basic-accessibility-modal"
        >
          <div className="space-y-4">
            <Typography variant="body1">
              This modal demonstrates fundamental accessibility features:
            </Typography>
            
            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <Typography variant="body2" className="font-semibold text-green-800 mb-2">
                  ✅ Semantic Structure
                </Typography>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>• <code>role="dialog"</code> - Identifies as dialog</li>
                  <li>• <code>aria-modal="true"</code> - Modal behavior</li>
                  <li>• <code>aria-labelledby</code> - References title</li>
                  <li>• Semantic HTML structure</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <Typography variant="body2" className="font-semibold text-blue-800 mb-2">
                  🔒 Focus Management
                </Typography>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• Focus trapped within modal</li>
                  <li>• Focus restored on close</li>
                  <li>• Background scroll prevented</li>
                  <li>• Logical tab order maintained</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <Typography variant="body2" className="font-semibold text-purple-800 mb-2">
                  ⌨️ Keyboard Support
                </Typography>
                <ul className="text-sm space-y-1 text-purple-700">
                  <li>• <kbd className="bg-white px-1 rounded">Escape</kbd> closes modal</li>
                  <li>• <kbd className="bg-white px-1 rounded">Tab</kbd> navigates elements</li>
                  <li>• <kbd className="bg-white px-1 rounded">Enter/Space</kbd> activates buttons</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 justify-end mt-6">
              <Button variant="default" onClick={() => setBasicModal(false)} testId="basic-close">
                Close
              </Button>
            </div>
          </div>
        </Modal>

        {/* Focus Management Demo */}
        <Modal
          open={focusModal}
          onClose={() => setFocusModal(false)}
          title="Focus Management Demonstration"
          testId="focus-management-modal"
        >
          <div className="space-y-6">
            <Typography variant="body1">
              Focus is automatically managed when the modal opens and closes:
            </Typography>
            
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <Typography variant="body2" className="text-yellow-800 mb-3">
                  <strong>Focus Trap Demo:</strong> Use Tab and Shift+Tab to navigate. 
                  Focus will cycle through elements and cannot escape the modal.
                </Typography>
              </div>

              <div className="space-y-3">
                <Input
                  label="First Input"
                  placeholder="Focus starts here when modal opens"
                  testId="focus-first-input"
                />
                <Input
                  label="Second Input"
                  placeholder="Tab to navigate between elements"
                  testId="focus-second-input"
                />
                <Select
                  label="Select Option"
                  placeholder="Select an option"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                  testId="focus-select"
                />
                <Input
                  type="textarea"
                  label="Textarea"
                  placeholder="Multi-line input field"
                  rows={3}
                  testId="focus-textarea"
                />
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <Typography variant="body2" className="text-green-800">
                  <strong>Try this:</strong> Navigate with Tab/Shift+Tab. Notice how focus 
                  cycles through elements and returns to the first when reaching the end.
                </Typography>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setFocusModal(false)} testId="focus-cancel">
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setFocusModal(false)} testId="focus-save">
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Keyboard Navigation Guide */}
        <Modal
          open={keyboardModal}
          onClose={() => setKeyboardModal(false)}
          title="Keyboard Navigation Patterns"
          size="large"
          testId="keyboard-navigation-modal"
        >
          <div className="space-y-6">
            <Typography variant="body1">
              Complete keyboard navigation patterns for modal interactions:
            </Typography>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Keyboard Shortcuts */}
              <div className="space-y-4">
                <Typography variant="h4">🎹 Keyboard Shortcuts</Typography>
                <div className="space-y-2">
                  {[
                    { key: 'Escape', action: 'Close modal immediately' },
                    { key: 'Tab', action: 'Move to next focusable element' },
                    { key: 'Shift + Tab', action: 'Move to previous focusable element' },
                    { key: 'Enter', action: 'Activate focused button or submit form' },
                    { key: 'Space', action: 'Activate focused button or checkbox' },
                    { key: 'Arrow Keys', action: 'Navigate within select/radio groups' },
                  ].map(({ key, action }) => (
                    <div key={key} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">{action}</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">
                        {key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-4">
                <Typography variant="h4">🔧 Interactive Demo</Typography>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full" testId="keyboard-primary">
                    Primary Action (Enter/Space)
                  </Button>
                  <Button variant="default" className="w-full" testId="keyboard-secondary">
                    Secondary Action
                  </Button>
                  <Input 
                    label="Text Input" 
                    placeholder="Type and use Tab to navigate" 
                    testId="keyboard-input"
                  />
                  <Select
                    label="Dropdown"
                    placeholder="Use Arrow keys when open"
                    options={[
                      { value: 'a', label: 'Option A' },
                      { value: 'b', label: 'Option B' },
                      { value: 'c', label: 'Option C' },
                    ]}
                    testId="keyboard-select"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <Typography variant="body2" className="text-blue-800">
                <strong>Accessibility Tip:</strong> This modal demonstrates proper keyboard navigation. 
                Try using only your keyboard to interact with all elements. Press Escape at any time to close.
              </Typography>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setKeyboardModal(false)} testId="keyboard-close">
                Close Guide
              </Button>
            </div>
          </div>
        </Modal>

        {/* ARIA Attributes Demo */}
        <Modal
          open={ariaModal}
          onClose={() => setAriaModal(false)}
          title="ARIA Attributes in Practice"
          testId="aria-attributes-modal"
          aria-describedby="aria-description"
        >
          <div className="space-y-6">
            <Typography variant="body1" id="aria-description">
              This modal demonstrates proper ARIA attribute usage for enhanced accessibility:
            </Typography>

            <div className="space-y-4">
              {/* Modal-specific ARIA */}
              <div className="p-3 bg-gray-50 border rounded">
                <Typography variant="body2" className="font-semibold mb-2">
                  Modal ARIA Attributes
                </Typography>
                <div className="text-sm space-y-1 font-mono">
                  <div>role="dialog"</div>
                  <div>aria-modal="true"</div>
                  <div>aria-labelledby="modal-title"</div>
                  <div>aria-describedby="aria-description"</div>
                </div>
              </div>

              {/* Form with ARIA */}
              <div className="space-y-3">
                <Typography variant="body2" className="font-semibold">
                  Form Elements with ARIA
                </Typography>
                
                <Input
                  label="Required Field"
                  placeholder="This field is required"
                  required
                  aria-required="true"
                  aria-describedby="required-help"
                  testId="aria-required-input"
                />
                <Typography variant="body2" id="required-help" className="text-sm text-gray-600">
                  This field must be completed before submission
                </Typography>

                <Input
                  label="Email with Validation"
                  type="email"
                  placeholder="user@example.com"
                  aria-invalid="false"
                  aria-describedby="email-help"
                  testId="aria-email-input"
                />
                <Typography variant="body2" id="email-help" className="text-sm text-gray-600">
                  Enter a valid email address for notifications
                </Typography>

                <div>
                  <Typography variant="body2" className="font-semibold mb-2">
                    Options Group
                  </Typography>
                  <div role="group" aria-labelledby="options-label">
                    <Typography variant="body2" id="options-label" className="mb-2">
                      Notification Preferences
                    </Typography>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" aria-describedby="email-notifications-desc" />
                        <span>Email notifications</span>
                      </label>
                      <Typography variant="body2" id="email-notifications-desc" className="text-sm text-gray-600 ml-6">
                        Receive updates via email
                      </Typography>
                      
                      <label className="flex items-center gap-2">
                        <input type="checkbox" aria-describedby="sms-notifications-desc" />
                        <span>SMS notifications</span>
                      </label>
                      <Typography variant="body2" id="sms-notifications-desc" className="text-sm text-gray-600 ml-6">
                        Receive updates via text message
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button 
                variant="default" 
                onClick={() => setAriaModal(false)}
                aria-label="Cancel and close ARIA demonstration modal"
                testId="aria-cancel"
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                onClick={() => setAriaModal(false)}
                aria-label="Save settings and close modal"
                testId="aria-save"
              >
                Save Settings
              </Button>
            </div>
          </div>
        </Modal>

        {/* Screen Reader Optimized Modal */}
        <Modal
          open={screenReaderModal}
          onClose={() => setScreenReaderModal(false)}
          title="Screen Reader Optimized Form"
          testId="screen-reader-modal"
        >
          <div className="space-y-6">
            <Typography variant="body1">
              This modal is optimized for screen reader users with clear labels, 
              descriptions, and status announcements:
            </Typography>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
              <Input
                label="Full Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
                required
                aria-required="true"
                aria-describedby="name-help"
                testId="sr-name-input"
              />
              <Typography variant="body2" id="name-help" className="text-sm text-gray-600">
                Your name will be used for personalized communications
              </Typography>

              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@example.com"
                required
                aria-required="true"
                aria-describedby="email-format-help"
                testId="sr-email-input"
              />
              <Typography variant="body2" id="email-format-help" className="text-sm text-gray-600">
                We'll use this to send you important updates and notifications
              </Typography>

              <Input
                type="textarea"
                label="Message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us how we can help you..."
                rows={4}
                aria-describedby="message-help"
                testId="sr-message-input"
              />
              <Typography variant="body2" id="message-help" className="text-sm text-gray-600">
                Describe your inquiry or feedback in detail (optional)
              </Typography>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <Typography variant="body2" className="text-blue-800">
                  <strong>Screen Reader Note:</strong> All form fields have descriptive labels 
                  and help text. Required fields are clearly marked and announced.
                </Typography>
              </div>

              <div className="flex gap-2 justify-end">
                <Button 
                  type="button"
                  variant="default" 
                  onClick={() => setScreenReaderModal(false)}
                  aria-label="Cancel form submission and close modal"
                  testId="sr-cancel"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  variant="primary"
                  aria-label="Submit contact form"
                  testId="sr-submit"
                >
                  Submit Form
                </Button>
              </div>
            </form>
          </div>
        </Modal>

        {/* Success Announcement */}
        {announcement && (
          <div 
            role="status" 
            aria-live="polite" 
            className="fixed bottom-4 right-4 bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded shadow-lg"
          >
            {announcement}
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Comprehensive Modal Accessibility

This story demonstrates all accessibility features of the Modal component:

### ARIA Attributes Implementation
- **role="dialog"** - Identifies the modal as a dialog element
- **aria-modal="true"** - Indicates this is a modal dialog that requires user interaction
- **aria-labelledby** - References the modal title element for accessible naming
- **aria-describedby** - Links to descriptive content that explains the modal's purpose
- **aria-required** - Marks required form fields for screen readers
- **aria-invalid** - Indicates validation state of form inputs

### Keyboard Navigation Patterns
- **Escape Key** - Immediately closes the modal from any focused element
- **Tab Navigation** - Moves focus forward through interactive elements
- **Shift+Tab** - Moves focus backward through interactive elements
- **Enter/Space** - Activates buttons and form controls
- **Arrow Keys** - Navigate within select dropdowns and radio groups

### Focus Management
- **Focus Trap** - Focus is contained within the modal and cycles through elements
- **Initial Focus** - Focus moves to the first interactive element when modal opens
- **Focus Restoration** - Focus returns to the trigger element when modal closes
- **Logical Tab Order** - Elements are focused in a logical, predictable sequence

### Screen Reader Optimizations
- **Semantic Structure** - Uses proper HTML elements and ARIA roles
- **Descriptive Labels** - All interactive elements have clear, contextual labels
- **Help Text Association** - Form fields are linked to their help text via aria-describedby
- **Status Announcements** - Important changes are announced via live regions
- **Group Labeling** - Related form controls are grouped with proper labels

### Testing Patterns
\`\`\`tsx
// Test modal accessibility
test('Modal is accessible', async () => {
  const user = userEvent.setup()
  render(<ModalComponent />)
  
  // Open modal
  await user.click(screen.getByText('Open Modal'))
  
  // Test ARIA attributes
  const modal = screen.getByRole('dialog')
  expect(modal).toHaveAttribute('aria-modal', 'true')
  expect(modal).toHaveAttribute('aria-labelledby')
  
  // Test focus management
  expect(modal).toHaveFocus()
  
  // Test keyboard navigation
  await user.keyboard('{Tab}')
  expect(screen.getByTestId('first-input')).toHaveFocus()
  
  // Test escape key
  await user.keyboard('{Escape}')
  expect(modal).not.toBeInTheDocument()
})

// Test with axe-core
test('Modal has no accessibility violations', async () => {
  const { container } = render(<ModalComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
\`\`\`

### Best Practices Demonstrated
1. **Clear Modal Purpose** - Each modal has a descriptive title and purpose
2. **Proper Form Labels** - All form inputs have associated labels
3. **Error Handling** - Validation errors are clearly communicated
4. **Status Updates** - Important changes are announced to screen readers
5. **Consistent Interaction** - All modals behave predictably
6. **Escape Routes** - Users can always exit the modal easily
        `,
      },
    },
  },
};

export const TestingExamples: Story = {
  render: () => {
    const [modalType, setModalType] = useState<string | null>(null);

    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-lg bg-purple-50">
          <Typography variant="h4" className="mb-3">
            🧪 Testing Examples
          </Typography>
          <Typography variant="body2" className="mb-4">
            Examples with proper testId attributes for automated testing.
          </Typography>
          <div className="flex gap-3 flex-wrap">
            <Button
              testId="open-basic-modal"
              onClick={() => setModalType('basic')}
            >
              Basic Modal
            </Button>
            <Button
              testId="open-form-modal"
              onClick={() => setModalType('form')}
            >
              Form Modal
            </Button>
            <Button
              testId="open-confirmation-modal"
              onClick={() => setModalType('confirmation')}
            >
              Confirmation Modal
            </Button>
          </div>
        </div>

        {/* Basic Modal */}
        <Modal
          open={modalType === 'basic'}
          onClose={() => setModalType(null)}
          title="Basic Test Modal"
          testId="basic-test-modal"
        >
          <div className="space-y-4">
            <Typography variant="body1" testId="modal-content">
              This modal has testId attributes for reliable testing.
            </Typography>
            <div className="flex gap-2 justify-end">
              <Button
                testId="cancel-button"
                variant="default"
                onClick={() => setModalType(null)}
              >
                Cancel
              </Button>
              <Button
                testId="confirm-button"
                variant="primary"
                onClick={() => setModalType(null)}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal>

        {/* Form Modal */}
        <Modal
          open={modalType === 'form'}
          onClose={() => setModalType(null)}
          title="Form Test Modal"
          testId="form-test-modal"
        >
          <form className="space-y-4">
            <Input testId="name-input" label="Name" placeholder="Enter name" />
            <Input
              testId="email-input"
              label="Email"
              type="email"
              placeholder="Enter email"
            />
            <Select
              testId="role-select"
              label="Role"
              options={[
                { value: 'admin', label: 'Administrator' },
                { value: 'user', label: 'User' },
              ]}
            />
            <div className="flex gap-2 justify-end">
              <Button
                testId="form-cancel"
                variant="default"
                onClick={() => setModalType(null)}
              >
                Cancel
              </Button>
              <Button
                testId="form-submit"
                variant="primary"
                onClick={() => setModalType(null)}
              >
                Submit
              </Button>
            </div>
          </form>
        </Modal>

        {/* Confirmation Modal */}
        <Modal
          open={modalType === 'confirmation'}
          onClose={() => setModalType(null)}
          title="Confirm Action"
          size="small"
          testId="confirmation-test-modal"
          maskClosable={false}
        >
          <div className="space-y-4">
            <Typography variant="body1" testId="confirmation-message">
              Are you sure you want to proceed with this action?
            </Typography>
            <div className="flex gap-2 justify-end">
              <Button
                testId="confirmation-cancel"
                variant="default"
                onClick={() => setModalType(null)}
              >
                Cancel
              </Button>
              <Button
                testId="confirmation-confirm"
                variant="destructive"
                onClick={() => setModalType(null)}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Testing examples with proper testId attributes:

\`\`\`tsx
// Test queries
screen.getByTestId('basic-test-modal');
screen.getByTestId('modal-content');
screen.getByTestId('confirm-button');

// User interactions
await user.click(screen.getByTestId('open-basic-modal'));
await user.click(screen.getByTestId('confirm-button'));

// Form testing
await user.type(screen.getByTestId('name-input'), 'John Doe');
await user.selectOptions(screen.getByTestId('role-select'), 'admin');

// Keyboard testing
await user.keyboard('{Escape}'); // Close modal
\`\`\`
        `,
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', class: 'warrior' });

    return (
      <div className="space-y-8 max-w-4xl">
        {/* Character Creation */}
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-4">
            🎮 Game Interface Examples
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Typography variant="h4">Character Management</Typography>
              <div className="space-y-2">
                <Button
                  variant="primary"
                  onClick={() => setActiveModal('character')}
                >
                  Create New Character
                </Button>
                <Button
                  variant="default"
                  onClick={() => setActiveModal('inventory')}
                >
                  Manage Inventory
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => setActiveModal('delete')}
                >
                  Delete Character
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Typography variant="h4">Game Actions</Typography>
              <div className="space-y-2">
                <Button
                  variant="default"
                  onClick={() => setActiveModal('quest')}
                >
                  View Quest Log
                </Button>
                <Button
                  variant="dashed"
                  onClick={() => setActiveModal('settings')}
                >
                  Game Settings
                </Button>
                <Button variant="text" onClick={() => setActiveModal('help')}>
                  Help & Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Character Creation Modal */}
        <Modal
          open={activeModal === 'character'}
          onClose={() => setActiveModal(null)}
          title="⚔️ Create New Hero"
          size="large"
        >
          <form className="space-y-6">
            <div>
              <Input
                label="Hero Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter your hero's name"
              />
            </div>
            <div>
              <Select
                label="Character Class"
                value={formData.class}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, class: value }))
                }
                options={[
                  { value: 'warrior', label: '⚔️ Warrior - Master of combat' },
                  { value: 'mage', label: '🔮 Mage - Wielder of magic' },
                  { value: 'archer', label: '🏹 Archer - Expert marksman' },
                  { value: 'rogue', label: '🗡️ Rogue - Shadow assassin' },
                ]}
              />
            </div>
            <div className="flex gap-3 justify-end pt-4">
              <Button variant="default" onClick={() => setActiveModal(null)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setActiveModal(null)}>
                Create Hero
              </Button>
            </div>
          </form>
        </Modal>

        {/* Inventory Modal */}
        <Modal
          open={activeModal === 'inventory'}
          onClose={() => setActiveModal(null)}
          title="🎒 Inventory Management"
          size="large"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Typography variant="h4" className="mb-4">
                Items
              </Typography>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'Master Sword',
                  'Hylian Shield',
                  'Bow of Light',
                  'Triforce Shard',
                  'Health Potion',
                  'Magic Scroll',
                ].map((item) => (
                  <div key={item} className="p-3 border rounded text-center">
                    <Typography variant="body2" className="mb-2">
                      {item}
                    </Typography>
                    <div className="flex gap-1 justify-center">
                      <Button variant="text" className="text-xs p-1">
                        Use
                      </Button>
                      <Button variant="text" className="text-xs p-1">
                        Drop
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Typography variant="h4">Quick Actions</Typography>
              <div className="space-y-2">
                <Button variant="default" className="w-full">
                  Sort Items
                </Button>
                <Button variant="dashed" className="w-full">
                  Auto-Organize
                </Button>
                <Button variant="destructive" className="w-full">
                  Drop Junk
                </Button>
              </div>
            </div>
          </div>
        </Modal>

        {/* Delete Confirmation */}
        <Modal
          open={activeModal === 'delete'}
          onClose={() => setActiveModal(null)}
          title="⚠️ Delete Character"
          size="small"
          maskClosable={false}
        >
          <div className="space-y-4">
            <Typography variant="body1">
              Are you sure you want to delete "Link the Hero"?
            </Typography>
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <Typography variant="body2" className="text-red-800">
                <strong>Warning:</strong> This will permanently delete:
              </Typography>
              <ul className="text-sm text-red-700 mt-2 space-y-1">
                <li>• 47 hours of gameplay</li>
                <li>• All collected items and rupees</li>
                <li>• Quest progress and achievements</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-6">
            <Button variant="default" onClick={() => setActiveModal(null)}>
              Keep Character
            </Button>
            <Button variant="destructive" onClick={() => setActiveModal(null)}>
              Delete Forever
            </Button>
          </div>
        </Modal>

        {/* Other Modals */}
        <Modal
          open={activeModal === 'quest'}
          onClose={() => setActiveModal(null)}
          title="📜 Active Quests"
          size="medium"
        >
          <div className="space-y-4">
            <div className="p-4 border rounded">
              <Typography variant="h4">🗡️ The Master Sword</Typography>
              <Typography variant="body2">
                Find the legendary blade in the Lost Woods
              </Typography>
              <div className="mt-2">
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  In Progress
                </span>
              </div>
            </div>
            <div className="p-4 border rounded">
              <Typography variant="h4">🏰 Rescue Princess Zelda</Typography>
              <Typography variant="body2">
                Infiltrate Ganon's castle and save the princess
              </Typography>
              <div className="mt-2">
                <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Not Started
                </span>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          open={activeModal === 'settings'}
          onClose={() => setActiveModal(null)}
          title="⚙️ Game Settings"
          size="medium"
        >
          <div className="space-y-6">
            <div>
              <Typography variant="h4" className="mb-3">
                Audio
              </Typography>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Master Volume</span>
                  <input type="range" className="w-32" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Music Volume</span>
                  <input type="range" className="w-32" />
                </div>
              </div>
            </div>
            <div>
              <Typography variant="h4" className="mb-3">
                Graphics
              </Typography>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Quality</span>
                  <select className="border rounded px-2 py-1">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setActiveModal(null)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setActiveModal(null)}>
                Save Settings
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          open={activeModal === 'help'}
          onClose={() => setActiveModal(null)}
          title="❓ Help & Tutorial"
          size="large"
        >
          <div className="space-y-6">
            <div>
              <Typography variant="h4" className="mb-3">
                Getting Started
              </Typography>
              <Typography variant="body1" className="mb-4">
                Welcome to the world of Hyrule! Here are some basic controls to
                get you started on your adventure.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h4" className="mb-3">
                  Movement
                </Typography>
                <ul className="space-y-2 text-sm">
                  <li>• WASD or Arrow Keys - Move</li>
                  <li>• Space - Jump</li>
                  <li>• Shift - Run</li>
                  <li>• Ctrl - Crouch</li>
                </ul>
              </div>
              <div>
                <Typography variant="h4" className="mb-3">
                  Combat
                </Typography>
                <ul className="space-y-2 text-sm">
                  <li>• Left Click - Attack</li>
                  <li>• Right Click - Block</li>
                  <li>• Q - Use Item</li>
                  <li>• E - Interact</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing Modal components in game interfaces including character creation, inventory management, confirmations, and settings.',
      },
    },
  },
};
