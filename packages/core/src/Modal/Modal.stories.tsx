import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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

Built-in testing support with \`testId\` prop for reliable automated testing.

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
