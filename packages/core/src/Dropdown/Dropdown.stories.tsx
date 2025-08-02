import {
  ChevronDownIcon,
  Copy01Icon,
  Edit01Icon,
  LogOut01Icon,
  Settings01Icon,
  Trash01Icon,
  User01Icon,
} from '@zelda/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'General/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Dropdown component for displaying contextual quest menus and hero actions with comprehensive accessibility and testing support.

## Overview

The Dropdown component provides a flexible way to display contextual actions and options in your Hyrule adventure interface. It supports multiple trigger methods, positioning options, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Dropdown } from '@zelda/core';
import { Button } from '@zelda/core';

// Basic quest dropdown
<Dropdown items={[
  { key: '1', label: 'Edit Quest', onClick: () => editQuest() },
  { key: '2', label: 'Abandon Quest', onClick: () => abandonQuest() }
]}>
  <Button>Quest Actions</Button>
</Dropdown>

// With icons and dividers
<Dropdown items={[
  { key: '1', label: 'Equip Item', icon: <EquipIcon />, onClick: () => equip() },
  { key: '2', label: 'Store Item', icon: <StoreIcon />, onClick: () => store() },
  { key: '3', label: 'Discard Item', icon: <DiscardIcon />, onClick: () => discard(), divider: true }
]}>
  <Button>Inventory Actions</Button>
</Dropdown>
\`\`\`

## Triggers

### Click Trigger (Default)
\`\`\`tsx
<Dropdown trigger="click" items={questItems}>
  <Button>Click to Open Quest Menu</Button>
</Dropdown>
\`\`\`

### Hover Trigger
\`\`\`tsx
<Dropdown trigger="hover" items={questItems}>
  <Button>Hover for Quick Actions</Button>
</Dropdown>
\`\`\`

## Placement

\`\`\`tsx
// Bottom placement (default)
<Dropdown placement="bottomLeft" items={questItems}>
  <Button>Bottom Left Menu</Button>
</Dropdown>

// Top placement
<Dropdown placement="topRight" items={questItems}>
  <Button>Top Right Menu</Button>
</Dropdown>
\`\`\`

## Menu Items

\`\`\`tsx
const questItems = [
  // Basic item
  { key: '1', label: 'Edit Quest', onClick: () => handleEditQuest() },
  
  // With icon
  { key: '2', label: 'Share Map', icon: <MapIcon />, onClick: () => handleShareMap() },
  
  // Disabled item
  { key: '3', label: 'Cast Spell', disabled: true, onClick: () => handleCastSpell() },
  
  // With divider
  { key: '4', label: 'Abandon Quest', divider: true, onClick: () => handleAbandonQuest() }
];
\`\`\`

## Accessibility

The Dropdown component is fully accessible with:

- **Keyboard navigation**: Tab, Enter, Space, Arrow keys, and Escape support
- **Focus management**: Proper focus restoration and trapping
- **Screen reader support**: ARIA attributes and semantic markup
- **Click outside**: Automatic closing when clicking outside
- **High contrast**: WCAG AA compliant focus indicators
- **Disabled states**: Properly communicated to assistive technologies

\`\`\`tsx
// Custom accessibility labels
<Dropdown 
  items={questItems}
  aria-label="Quest actions menu"
>
  <Button aria-label="Open quest menu">
    Quest Actions
  </Button>
</Dropdown>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Dropdown testId="quest-dropdown" items={questItems}>
  <Button>Quest Actions</Button>
</Dropdown>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('quest-dropdown');
screen.getByRole('button', { name: 'Quest Actions' });
screen.getByRole('menu');
\`\`\`

## Custom Triggers

\`\`\`tsx
// Any element can be a trigger
<Dropdown items={questItems}>
  <div className="cursor-pointer p-2 border rounded">
    Custom Quest Trigger
  </div>
</Dropdown>

// Hero profile trigger
<Dropdown items={heroMenuItems}>
  <div className="flex items-center gap-2 cursor-pointer">
    <Avatar>⚡</Avatar>
    <span>Hero of Hyrule</span>
    <ChevronDownIcon />
  </div>
</Dropdown>
\`\`\`

## Best Practices

### Do
- Use clear, action-oriented labels
- Group related actions with dividers
- Place destructive actions at the bottom
- Limit menu items to 7-10 for usability
- Provide \`testId\` for reliable testing
- Use click trigger for better accessibility

### Don't
- Create overly long menus
- Mix different types of actions without grouping
- Use hover trigger as the only interaction method
- Forget to handle disabled states
- Place critical actions in hard-to-reach positions

## Performance

- **Floating UI**: Efficient positioning with automatic collision detection
- **Event delegation**: Optimized event handling
- **Portal rendering**: Prevents z-index issues
- **Lazy rendering**: Menu only renders when open`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: 'How the dropdown is triggered',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
      ],
      description: 'Preferred placement of the dropdown menu',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const questItems = [
  { key: '1', label: 'Edit Quest', onClick: () => alert('Quest edited') },
  { key: '2', label: 'Share Map', onClick: () => alert('Map shared') },
  { key: '3', label: 'Abandon Quest', onClick: () => alert('Quest abandoned') },
];

const inventoryItems = [
  {
    key: '1',
    label: 'Equip Item',
    icon: <Edit01Icon className="w-4 h-4" />,
    onClick: () => alert('Item equipped'),
  },
  {
    key: '2',
    label: 'Store Item',
    icon: <Copy01Icon className="w-4 h-4" />,
    onClick: () => alert('Item stored'),
  },
  {
    key: '3',
    label: 'Discard Item',
    icon: <Trash01Icon className="w-4 h-4" />,
    onClick: () => alert('Item discarded'),
    divider: true,
  },
];

const heroMenuItems = [
  {
    key: '1',
    label: 'Hero Profile',
    icon: <User01Icon className="w-4 h-4" />,
    onClick: () => alert('Profile opened'),
  },
  {
    key: '2',
    label: 'Game Settings',
    icon: <Settings01Icon className="w-4 h-4" />,
    onClick: () => alert('Settings opened'),
  },
  {
    key: '3',
    label: 'Return to Title',
    icon: <LogOut01Icon className="w-4 h-4" />,
    onClick: () => alert('Returned to title'),
    divider: true,
  },
];

export const Default: Story = {
  render: () => (
    <Dropdown items={questItems}>
      <Button>Quest Actions</Button>
    </Dropdown>
  ),
};

export const ClickTrigger: Story = {
  render: () => (
    <Dropdown items={questItems} trigger="click">
      <Button>Click to Open</Button>
    </Dropdown>
  ),
};

export const HoverTrigger: Story = {
  render: () => (
    <Dropdown items={questItems} trigger="hover">
      <Button variant="secondary">Hover to Open</Button>
    </Dropdown>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Dropdown items={inventoryItems}>
      <Button>Inventory Actions</Button>
    </Dropdown>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Dropdown items={[
      { key: '1', label: 'Use Potion', onClick: () => alert('Potion used') },
      {
        key: '2',
        label: 'Cast Spell',
        onClick: () => alert('Spell cast'),
        disabled: true,
      },
      { key: '3', label: 'Equip Sword', onClick: () => alert('Sword equipped') },
    ]}>
      <Button>Item Actions</Button>
    </Dropdown>
  ),
};

export const Triggers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dropdown items={questItems} trigger="click">
        <Button>Quest Menu</Button>
      </Dropdown>
      <Dropdown items={questItems} trigger="hover">
        <Button variant="secondary">Quick Actions</Button>
      </Dropdown>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-md">
      <Dropdown items={questItems} placement="topLeft">
        <Button variant="tertiary" className="text-xs">
          ↖ Top Left
        </Button>
      </Dropdown>
      <Dropdown items={questItems} placement="top">
        <Button variant="tertiary" className="text-xs">
          ↑ Top
        </Button>
      </Dropdown>
      <Dropdown items={questItems} placement="topRight">
        <Button variant="tertiary" className="text-xs">
          ↗ Top Right
        </Button>
      </Dropdown>
      <Dropdown items={questItems} placement="bottomLeft">
        <Button variant="tertiary" className="text-xs">
          ↙ Bottom Left
        </Button>
      </Dropdown>
      <Dropdown items={questItems} placement="bottom">
        <Button variant="tertiary" className="text-xs">
          ↓ Bottom
        </Button>
      </Dropdown>
      <Dropdown items={questItems} placement="bottomRight">
        <Button variant="tertiary" className="text-xs">
          ↘ Bottom Right
        </Button>
      </Dropdown>
    </div>
  ),
};

export const Testing: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">With Test IDs</h3>
        <div className="flex flex-wrap gap-2">
          <Dropdown testId="quest-dropdown" items={questItems}>
            <Button>Quest Menu</Button>
          </Dropdown>
          <Dropdown testId="hero-dropdown" items={heroMenuItems}>
            <Button variant="secondary">Hero Menu</Button>
          </Dropdown>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Use <code className="bg-gray-100 px-1 rounded">testId</code> prop for
        reliable test targeting
      </div>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Hero Profile Menu</h3>
        <Dropdown items={heroMenuItems}>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
            <Avatar className="bg-triforce-600 text-white">⚡</Avatar>
            <span className="text-sm font-medium">Hero of Hyrule</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
          </div>
        </Dropdown>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Quest Log Actions</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Quest
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2 text-sm">🏰 Rescue Princess Zelda</td>
                <td className="px-4 py-2">
                  <Dropdown items={inventoryItems}>
                    <Button variant="tertiary" className="text-xs px-2 py-1">
                      •••
                    </Button>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};
