import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from './Toast';
import { ToastContainer } from './ToastContainer';
import { Button } from '../Button';
import { Typography } from '../Typography';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Toast component for displaying temporary notifications with magical Link-Zelda theming and smooth animations.

## Overview

The Toast component provides user feedback through temporary notifications that appear with magical entrance animations and auto-dismiss after a configurable duration.

## Quick Start

\`\`\`tsx
import { Toast } from '@zelda/core';

// Basic toast
<Toast message="Quest completed!" type="success" />

// Auto-dismiss toast
<Toast 
  message="Settings saved" 
  type="success" 
  duration={3000}
  onClose={() => console.log('Toast closed')}
/>
\`\`\`

## Features

### Magical Theming
- **Retro borders**: Pixel-perfect inset shadows and borders
- **Type-specific colors**: Success (green), Error (red), Warning (gold), Info (blue)
- **Shimmer progress bar**: Animated Link-Zelda color gradient
- **3D entrance**: Magical scaling and rotation animation

### Smart Positioning
- **Six positions**: Top/bottom + left/center/right combinations
- **Portal rendering**: Always appears above other content
- **Responsive design**: Adapts to different screen sizes

### Accessibility
- **Auto-dismiss**: Configurable duration or manual close
- **Keyboard accessible**: Close button supports keyboard navigation
- **Screen reader friendly**: Proper ARIA attributes and semantic structure

## Best Practices

### Do
- Use appropriate types for different message contexts
- Keep messages concise and actionable
- Position toasts consistently within your app
- Provide manual close option for important messages

### Don't
- Show too many toasts simultaneously
- Use for critical errors (use Modal instead)
- Make auto-dismiss too fast for users to read
- Forget to handle the onClose callback`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast message content',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast type affecting color and icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
      description: 'Toast position on screen',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-right' },
      },
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds (0 to disable)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
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
  render: () => {
    const [visible, setVisible] = useState(true);
    
    return (
      <div className="space-y-4">
        <Button onClick={() => setVisible(true)}>
          Show Toast
        </Button>
        
        {visible && (
          <Toast
            message="This is a default toast notification"
            visible={true}
            onClose={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

export const Types: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: number; type: 'success' | 'error' | 'warning' | 'info'; message: string }>>([]);
    let nextId = 1;

    const showToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
      const id = nextId++;
      setToasts(prev => [...prev, { id, type, message }]);
    };

    const hideToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => showToast('success', '✅ Quest completed successfully!')}>
            Success Toast
          </Button>
          <Button onClick={() => showToast('error', '❌ Failed to save progress')}>
            Error Toast
          </Button>
          <Button onClick={() => showToast('warning', '⚠️ Low health warning')}>
            Warning Toast
          </Button>
          <Button onClick={() => showToast('info', 'ℹ️ New area discovered')}>
            Info Toast
          </Button>
        </div>
        
        <ToastContainer position="top-right">
          {toasts.map(toast => (
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
        story: 'Different toast types with appropriate colors and icons for various message contexts.',
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
          {positions.map(pos => (
            <Button
              key={pos.key}
              onClick={() => showToast(pos.key)}
              size="small"
            >
              {pos.label}
            </Button>
          ))}
        </div>
        
        {activePosition && (
          <Toast
            message={`Toast positioned at ${activePosition}`}
            type="info"
            position={activePosition as any}
            visible={true}
            onClose={() => setActivePosition(null)}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast can be positioned in six different locations on the screen.',
      },
    },
  },
};

export const AutoDismiss: Story = {
  render: () => {
    const [toast, setToast] = useState<{ visible: boolean; duration: number } | null>(null);

    const showToast = (duration: number) => {
      setToast({ visible: true, duration });
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => showToast(2000)}>
            2 Second Toast
          </Button>
          <Button onClick={() => showToast(5000)}>
            5 Second Toast
          </Button>
          <Button onClick={() => showToast(0)}>
            Manual Close Only
          </Button>
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
        story: 'Toasts can auto-dismiss after a specified duration or require manual closing.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => {
    const [activeToast, setActiveToast] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; message: string } | null>(null);

    const showToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
      setActiveToast({ type, message });
    };

    const hideToast = () => {
      setActiveToast(null);
    };

    return (
      <div className="dark bg-gray-900 p-6 rounded space-y-6">
        <Typography variant="h3" className="mb-4">🌙 Mystical Notifications</Typography>
        
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => showToast('success', '🌿 Nature magic restored!')}>
            Success
          </Button>
          <Button onClick={() => showToast('error', '💀 Shadow curse activated')}>
            Error
          </Button>
          <Button onClick={() => showToast('warning', '⚡ Mystical energy low')}>
            Warning
          </Button>
          <Button onClick={() => showToast('info', '🔮 Ancient rune discovered')}>
            Info
          </Button>
        </div>
        
        {activeToast && (
          <Toast
            message={activeToast.message}
            type={activeToast.type}
            visible={true}
            onClose={hideToast}
            position="top-right"
            duration={4000}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark mode transforms toasts with mystical purple theming and enhanced magical glow effects.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => {
    const [activeToast, setActiveToast] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; message: string } | null>(null);

    const showToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
      setActiveToast({ type, message });
    };

    const hideToast = () => {
      setActiveToast(null);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-6">🎮 Game Actions</Typography>
          
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => showToast('success', 'Game saved successfully!')}>
                Save Game
              </Button>
              <Button onClick={() => showToast('success', 'Settings updated!')}>
                Save Settings
              </Button>
              <Button onClick={() => showToast('info', 'Connecting to server...')}>
                Connect Online
              </Button>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => showToast('error', 'Failed to load save file')}>
                Load Error
              </Button>
              <Button onClick={() => showToast('warning', 'Connection unstable')}>
                Network Warning
              </Button>
              <Button onClick={() => showToast('info', 'Achievement unlocked: First Steps!')}>
                Achievement
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-6">⚔️ Combat System</Typography>
          
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => showToast('success', 'Critical hit! +50 damage')}>
                Critical Hit
              </Button>
              <Button onClick={() => showToast('success', 'Enemy defeated! +100 XP')}>
                Victory
              </Button>
              <Button onClick={() => showToast('info', 'Level up! You are now level 15')}>
                Level Up
              </Button>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => showToast('warning', 'Health low! Find a healing potion')}>
                Low Health
              </Button>
              <Button onClick={() => showToast('warning', 'Weapon durability critical')}>
                Weapon Warning
              </Button>
              <Button onClick={() => showToast('error', 'You have been defeated!')}>
                Defeat
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-6">🏪 Inventory & Trading</Typography>
          
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => showToast('success', 'Item purchased: Master Sword')}>
                Purchase
              </Button>
              <Button onClick={() => showToast('success', 'Item sold: Old Shield (+50 rupees)')}>
                Sell Item
              </Button>
              <Button onClick={() => showToast('info', 'New item found: Magic Potion')}>
                Item Found
              </Button>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Button onClick={() => showToast('warning', 'Inventory full! Cannot pick up item')}>
                Inventory Full
              </Button>
              <Button onClick={() => showToast('error', 'Insufficient rupees for purchase')}>
                No Money
              </Button>
              <Button onClick={() => showToast('info', 'Rare item discovered!')}>
                Rare Find
              </Button>
            </div>
          </div>
        </div>
        
        {activeToast && (
          <Toast
            message={activeToast.message}
            type={activeToast.type}
            visible={true}
            onClose={hideToast}
            position="top-right"
            duration={4000}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing Toast components in game interfaces for various user feedback scenarios including combat, inventory, and system notifications.',
      },
    },
  },
};