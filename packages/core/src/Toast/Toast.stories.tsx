import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useRef, useState } from 'react';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Toast } from './Toast';
import { ToastContainer } from './ToastContainer';
import { ToastProvider, useToast } from './ToastManager';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Temporary notifications that provide immediate feedback without interrupting the user's workflow.

\`\`\`tsx
import { Toast } from '@zelda/core';

// Essential feedback
<Toast message="Changes saved successfully" type="success" />

// Auto-dismiss notification
<Toast 
  message="Settings updated" 
  type="success" 
  duration={3000}
  onClose={() => console.log('Toast closed')}
/>
\`\`\`

## Types
- **success** - Positive outcomes and confirmations
- **error** - Problems requiring attention
- **warning** - Cautions and important notices
- **info** - Neutral information and updates

## Positions
- **top-right** - Default position (recommended)
- **top-left**, **top-center** - Alternative top positions
- **bottom-right**, **bottom-left**, **bottom-center** - Bottom positions

## Accessibility & Testing
- Auto-dismisses after configurable duration or manual close
- Close button accessible via keyboard navigation
- Uses semantic \`role="alert"\` for immediate screen reader announcement
- Portal rendering ensures proper z-index layering

> **Your Responsibility**: Provide clear, concise message text. This component handles timing and accessibility announcements.

\`\`\`tsx
// Testing approach
const toast = screen.getByRole('alert');
expect(toast).toHaveTextContent('Changes saved');
fireEvent.click(screen.getByRole('button', { name: /close/i }));
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast semantic type and visual style',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    message: {
      control: 'text',
      description: 'Toast message content',
      table: {
        type: { summary: 'string' },
      },
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
      description: 'Auto-dismiss duration in milliseconds (0 to disable)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
      },
    },
    position: {
      control: 'select',
      options: [
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top-center',
        'bottom-center',
      ],
      description: 'Toast position on screen',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-right' },
      },
    },
    visible: {
      control: 'boolean',
      description: 'Whether toast is visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Changes saved successfully',
    type: 'success',
    duration: 5000,
    visible: true,
  },
};

export const Types: Story = {
  render: () => {
    const [toasts, setToasts] = useState<
      Array<{
        id: number;
        type: 'success' | 'error' | 'warning' | 'info';
        message: string;
      }>
    >([]);
    const nextIdRef = useRef(1);

    const showToast = useCallback(
      (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
        const id = nextIdRef.current++;
        setToasts((prev) => [...prev, { id, type, message }]);
      },
      [],
    );

    const hideToast = useCallback((id: number) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Button
            onClick={() =>
              showToast('success', 'Operation completed successfully')
            }
          >
            Success Toast
          </Button>
          <Button
            onClick={() => showToast('error', 'Failed to save changes')}
          >
            Error Toast
          </Button>
          <Button onClick={() => showToast('warning', 'Storage space low')}>
            Warning Toast
          </Button>
          <Button onClick={() => showToast('info', 'New feature available')}>
            Info Toast
          </Button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              visible={true}
              onClose={() => hideToast(toast.id)}
              duration={4000}
            />
          ))}
        </ToastContainer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Different toast types with appropriate colors and icons for various message contexts.',
      },
    },
  },
};

export const Positions: Story = {
  render: () => {
    const [activePosition, setActivePosition] = useState<string | null>(null);

    const positions = [
      { key: 'top-left', label: 'Top Left' },
      { key: 'top-center', label: 'Top Center' },
      { key: 'top-right', label: 'Top Right' },
      { key: 'bottom-left', label: 'Bottom Left' },
      { key: 'bottom-center', label: 'Bottom Center' },
      { key: 'bottom-right', label: 'Bottom Right' },
    ];

    const showToast = (position: string) => {
      setActivePosition(position);
      setTimeout(() => setActivePosition(null), 3000);
    };

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {positions.map((pos) => (
            <Button
              key={pos.key}
              onClick={() => showToast(pos.key)}
              size="small"
            >
              {pos.label}
            </Button>
          ))}
        </div>

        <ToastContainer
          position={
            activePosition as
              | 'top-right'
              | 'top-left'
              | 'bottom-right'
              | 'bottom-left'
              | 'top-center'
              | 'bottom-center'
              | null
          }
        >
          {activePosition && (
            <Toast
              message={`Toast positioned at ${activePosition}`}
              type="info"
              visible={true}
              onClose={() => setActivePosition(null)}
            />
          )}
        </ToastContainer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toast can be positioned in six different locations on the screen.',
      },
    },
  },
};

export const AutoDismiss: Story = {
  render: () => {
    const [toast, setToast] = useState<{
      visible: boolean;
      duration: number;
    } | null>(null);

    const showToast = (duration: number) => {
      setToast({ visible: true, duration });
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => showToast(2000)}>2 Second Toast</Button>
          <Button onClick={() => showToast(5000)}>5 Second Toast</Button>
          <Button onClick={() => showToast(0)}>Manual Close Only</Button>
        </div>

        {toast && (
          <Toast
            message={`Auto-dismiss in ${toast.duration === 0 ? 'manual close only' : `${toast.duration / 1000} seconds`}`}
            type="success"
            visible={toast.visible}
            duration={toast.duration}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toasts can auto-dismiss after a specified duration or require manual closing.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [toasts, setToasts] = useState<
      Array<{
        id: number;
        type: 'success' | 'error' | 'warning' | 'info';
        message: string;
      }>
    >([]);
    const nextIdRef = useRef(1);

    const showToast = useCallback(
      (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
        const id = nextIdRef.current++;
        setToasts((prev) => [...prev, { id, type, message }]);
      },
      [],
    );

    const hideToast = useCallback((id: number) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
      <div className="space-y-6">
        <div className="flex gap-2 flex-wrap">
          <Button
            onClick={() => showToast('success', 'Profile updated successfully')}
          >
            Success
          </Button>
          <Button
            onClick={() => showToast('error', 'Connection failed')}
          >
            Error
          </Button>
          <Button
            onClick={() => showToast('warning', 'Storage limit reached')}
          >
            Warning
          </Button>
          <Button
            onClick={() => showToast('info', 'New update available')}
          >
            Info
          </Button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              visible={true}
              onClose={() => hideToast(toast.id)}
              duration={4000}
            />
          ))}
        </ToastContainer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Practical examples showing different toast types with professional messaging.',
      },
    },
  },
};

export const WithProvider: Story = {
  render: () => {
    const TestComponent = () => {
      const { showToast } = useToast();

      return (
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() =>
                showToast({
                  message: '✅ Success toast!',
                  type: 'success',
                  duration: 3000,
                })
              }
            >
              Success
            </Button>
            <Button
              onClick={() =>
                showToast({
                  message: '❌ Error toast!',
                  type: 'error',
                  duration: 4000,
                })
              }
            >
              Error
            </Button>
            <Button
              onClick={() =>
                showToast({
                  message: '⚠️ Warning toast!',
                  type: 'warning',
                  duration: 5000,
                })
              }
            >
              Warning
            </Button>
            <Button
              onClick={() =>
                showToast({
                  message: 'ℹ️ Info toast!',
                  type: 'info',
                  duration: 2000,
                })
              }
            >
              Info
            </Button>
          </div>
          <Button
            onClick={() =>
              showToast({
                message:
                  'File uploaded successfully! What would you like to do next?',
                type: 'success',
                duration: 0,
                actions: [
                  {
                    label: 'View File',
                    onClick: () => alert('Viewing file...'),
                  },
                  { label: 'Share', onClick: () => alert('Sharing file...') },
                ],
              })
            }
            variant="outline"
          >
            Toast with Actions
          </Button>
        </div>
      );
    };

    return (
      <ToastProvider position="top-right" maxToasts={3}>
        <TestComponent />
      </ToastProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Using ToastProvider for proper toast management with independent timers.',
      },
    },
  },
};


