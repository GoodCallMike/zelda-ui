import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Heading, TextSecondary } from '../Typography';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'General/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Modal component for displaying content in overlay dialogs with comprehensive accessibility and testing support.

## Overview

The Modal component provides a way to display content in an overlay dialog that appears above the main page content. It supports various configurations, custom footers, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Modal, Button } from '@zelda/core';
import { useState } from 'react';

// Basic modal
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal
  open={open}
  title="Basic Modal"
  onOk={() => setOpen(false)}
  onCancel={() => setOpen(false)}
>
  Modal content goes here
</Modal>

// Confirmation modal
<Modal
  open={confirmOpen}
  title="Confirm Action"
  onOk={handleConfirm}
  onCancel={() => setConfirmOpen(false)}
  okText="Confirm"
  cancelText="Cancel"
>
  Are you sure you want to continue?
</Modal>
\`\`\`

## Footer Types

### Default Footer
\`\`\`tsx
<Modal
  open={open}
  title="Default Footer"
  onOk={handleOk}
  onCancel={handleCancel}
  okText="Save"
  cancelText="Cancel"
>
  Content with default OK/Cancel buttons
</Modal>
\`\`\`

### Custom Footer
\`\`\`tsx
<Modal
  open={open}
  title="Custom Footer"
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={handleCancel}>Cancel</Button>
      <Button variant="primary" onClick={handleSave}>Save</Button>
    </div>
  }
  onCancel={handleCancel}
>
  Content with custom footer buttons
</Modal>
\`\`\`

## Accessibility

The Modal component is fully accessible with:

- **Focus management**: Focus is trapped within the modal when open
- **Keyboard navigation**: ESC key closes the modal, Tab cycles through interactive elements
- **Screen reader support**: Proper ARIA labels, roles, and live regions
- **Background interaction**: Background scroll is prevented when modal is open
- **Focus restoration**: Focus returns to trigger element when modal closes

\`\`\`tsx
// Accessible modal with custom labels
<Modal
  open={open}
  title="Delete Confirmation"
  aria-label="Confirm item deletion"
  onOk={handleDelete}
  onCancel={handleCancel}
>
  This action cannot be undone
</Modal>
\`\`\`

## Testing

Built-in testing support with standard HTML attributes:

\`\`\`tsx
<Modal
  data-testid="confirmation-modal"
  open={open}
  title="Confirm"
  onOk={handleOk}
  onCancel={handleCancel}
>
  Test content
</Modal>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('confirmation-modal');
screen.getByRole('dialog', { name: 'Confirm' });
screen.getByRole('button', { name: 'OK' });
\`\`\`

## Best Practices

### Do
- Use clear, descriptive titles that explain the modal's purpose
- Provide obvious ways to close the modal (X button, Cancel, ESC key)
- Keep modal content focused and concise
- Use appropriate button labels ("Save" instead of "OK" for forms)
- Include \`data-testid\` for reliable testing

### Don't
- Stack multiple modals on top of each other
- Use modals for complex multi-step workflows
- Make modals too wide or tall for mobile devices
- Forget to handle the escape key and backdrop clicks
- Use generic button labels like "OK" for destructive actions
`,
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
    okText: {
      control: 'text',
      description: 'Text for the OK button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'OK' },
      },
    },
    cancelText: {
      control: 'text',
      description: 'Text for the Cancel button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Whether to show the close (X) button in header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    maskClosable: {
      control: 'boolean',
      description: 'Whether clicking the backdrop closes the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    centered: {
      control: 'boolean',
      description: 'Whether the modal is vertically centered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    confirmLoading: {
      control: 'boolean',
      description: 'Loading state for the OK button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'number',
      description: 'Modal width in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '520' },
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
        <Modal
          open={open}
          title="Basic Modal"
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          data-testid="default-modal"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic modal with default footer containing OK and Cancel buttons.',
      },
    },
  },
};

export const CustomFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const customFooter = (
      <div className="flex justify-between">
        <Button variant="link" onClick={() => setOpen(false)}>
          Return
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Submit
          </Button>
          <Button variant="primary" onClick={() => window.open('https://google.com', '_blank')}>
            Search on Google
          </Button>
        </div>
      </div>
    );

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal with Custom Footer</Button>
        <Modal
          open={open}
          title="Custom Footer Modal"
          footer={customFooter}
          onCancel={() => setOpen(false)}
          data-testid="custom-footer-modal"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom footer containing multiple action buttons with different layouts.',
      },
    },
  },
};

export const NoFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal without Footer</Button>
        <Modal
          open={open}
          title="No Footer Modal"
          footer={null}
          onCancel={() => setOpen(false)}
        >
          <p>This modal has no footer.</p>
          <p>You can only close it using the X button or ESC key.</p>
        </Modal>
      </>
    );
  },
};

export const ConfirmModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOk = () => {
      alert('Confirmed!');
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Confirm Modal</Button>
        <Modal
          open={open}
          title="Confirm"
          onOk={handleOk}
          onCancel={() => setOpen(false)}
          width={416}
          centered
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-yellow-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p>Are you sure you want to perform this action?</p>
              <p className="text-sm text-gray-500 mt-1">This action cannot be undone.</p>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const LoadingState: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        alert('Action completed!');
      }, 2000);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal with Async Logic</Button>
        <Modal
          open={open}
          title="Async Action"
          onOk={handleOk}
          onCancel={() => setOpen(false)}
          confirmLoading={loading}
        >
          <p>Click OK to simulate an async action.</p>
          <p>The button will show loading state for 2 seconds.</p>
        </Modal>
      </>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
      <div className="flex gap-2">
        <Button onClick={() => setOpen1(true)}>Open Modal of 1000px width</Button>
        <Button onClick={() => setOpen2(true)}>Open Modal of 300px width</Button>
        
        <Modal
          open={open1}
          title="Wide Modal"
          width={1000}
          onOk={() => setOpen1(false)}
          onCancel={() => setOpen1(false)}
        >
          <p>This modal is 1000px wide.</p>
          <p>It demonstrates how the modal can be customized for different content needs.</p>
        </Modal>

        <Modal
          open={open2}
          title="Narrow Modal"
          width={300}
          onOk={() => setOpen2(false)}
          onCancel={() => setOpen2(false)}
        >
          <p>This modal is 300px wide.</p>
          <p>Compact for simple messages.</p>
        </Modal>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [basicOpen, setBasicOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [customOpen, setCustomOpen] = useState(false);

    return (
      <div className="space-y-4">
        <div>
          <Heading className="mb-2">Modal Variants</Heading>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setBasicOpen(true)}>Basic Modal</Button>
            <Button onClick={() => setConfirmOpen(true)}>Confirm Modal</Button>
            <Button onClick={() => setCustomOpen(true)}>Custom Footer</Button>
          </div>
        </div>
        
        <TextSecondary className="text-sm">
          <p><strong>Usage Guidelines:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Basic:</strong> General content display with standard OK/Cancel buttons</li>
            <li><strong>Confirm:</strong> Confirmation dialogs with warning icons</li>
            <li><strong>Custom Footer:</strong> Complex actions requiring multiple buttons</li>
          </ul>
        </TextSecondary>

        <Modal
          open={basicOpen}
          title="Basic Modal"
          onOk={() => setBasicOpen(false)}
          onCancel={() => setBasicOpen(false)}
        >
          <p>This is a basic modal with standard footer buttons.</p>
        </Modal>

        <Modal
          open={confirmOpen}
          title="Confirm Action"
          onOk={() => setConfirmOpen(false)}
          onCancel={() => setConfirmOpen(false)}
          width={416}
          centered
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-yellow-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>Are you sure you want to continue?</div>
          </div>
        </Modal>

        <Modal
          open={customOpen}
          title="Custom Actions"
          footer={
            <div className="flex justify-between">
              <Button variant="link" onClick={() => setCustomOpen(false)}>
                Skip
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setCustomOpen(false)}>
                  Save Draft
                </Button>
                <Button variant="primary" onClick={() => setCustomOpen(false)}>
                  Publish
                </Button>
              </div>
            </div>
          }
          onCancel={() => setCustomOpen(false)}
        >
          <p>This modal has a custom footer with multiple action buttons.</p>
        </Modal>
      </div>
    );
  },
};

export const Examples: Story = {
  render: () => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);

    return (
      <div className="space-y-6">
        <div>
          <Heading className="mb-2">Delete Confirmation</Heading>
          <Button variant="outline" onClick={() => setDeleteOpen(true)}>
            Delete Item
          </Button>
        </div>

        <div>
          <Heading className="mb-2">Form Modal</Heading>
          <Button onClick={() => setFormOpen(true)}>
            Add New Item
          </Button>
        </div>

        <div>
          <Heading className="mb-2">Information Modal</Heading>
          <Button variant="link" onClick={() => setInfoOpen(true)}>
            View Details
          </Button>
        </div>

        {/* Delete Confirmation Modal */}
        <Modal
          open={deleteOpen}
          title="Delete Item"
          onOk={() => {
            alert('Item deleted!');
            setDeleteOpen(false);
          }}
          onCancel={() => setDeleteOpen(false)}
          okText="Delete"
          cancelText="Cancel"
          width={416}
          centered
          data-testid="delete-modal"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-red-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p>Are you sure you want to delete this item?</p>
              <p className="text-sm text-gray-500 mt-1">This action cannot be undone.</p>
            </div>
          </div>
        </Modal>

        {/* Form Modal */}
        <Modal
          open={formOpen}
          title="Add New Item"
          footer={
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setFormOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {
                alert('Item saved!');
                setFormOpen(false);
              }}>
                Save Item
              </Button>
            </div>
          }
          onCancel={() => setFormOpen(false)}
          width={600}
          data-testid="form-modal"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Item Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter item name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter description"
              />
            </div>
          </div>
        </Modal>

        {/* Information Modal */}
        <Modal
          open={infoOpen}
          title="Item Details"
          footer={
            <Button variant="primary" onClick={() => setInfoOpen(false)}>
              Close
            </Button>
          }
          onCancel={() => setInfoOpen(false)}
          data-testid="info-modal"
        >
          <div className="space-y-3">
            <div>
              <strong>Name:</strong> Sample Item
            </div>
            <div>
              <strong>Created:</strong> January 15, 2024
            </div>
            <div>
              <strong>Status:</strong> Active
            </div>
            <div>
              <strong>Description:</strong> This is a sample item with detailed information displayed in a modal.
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing modals in common scenarios like delete confirmations, forms, and information display.',
      },
    },
  },
};