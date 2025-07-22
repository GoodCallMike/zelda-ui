import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';
import { User01Icon, Settings01Icon, LogOut01Icon, Edit01Icon, Copy01Icon, Trash01Icon, ChevronDownIcon } from '@jetstream/icons';

const meta: Meta<typeof Dropdown> = {
  title: 'General/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Dropdown component for displaying contextual menus and actions with comprehensive accessibility and testing support.

## Overview

The Dropdown component provides a flexible way to display contextual actions and options in your application. It supports multiple trigger methods, positioning options, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Dropdown } from '@jetstream/core';
import { Button } from '@jetstream/core';

// Basic dropdown
<Dropdown items={[
  { key: '1', label: 'Edit', onClick: () => edit() },
  { key: '2', label: 'Delete', onClick: () => delete() }
]}>
  <Button>Actions</Button>
</Dropdown>

// With icons and dividers
<Dropdown items={[
  { key: '1', label: 'Edit', icon: <EditIcon />, onClick: () => edit() },
  { key: '2', label: 'Copy', icon: <CopyIcon />, onClick: () => copy() },
  { key: '3', label: 'Delete', icon: <DeleteIcon />, onClick: () => delete(), divider: true }
]}>
  <Button>More Actions</Button>
</Dropdown>
\`\`\`

## Triggers

### Click Trigger (Default)
\`\`\`tsx
<Dropdown trigger="click" items={menuItems}>
  <Button>Click to Open</Button>
</Dropdown>
\`\`\`

### Hover Trigger
\`\`\`tsx
<Dropdown trigger="hover" items={menuItems}>
  <Button>Hover to Open</Button>
</Dropdown>
\`\`\`

## Placement

\`\`\`tsx
// Bottom placement (default)
<Dropdown placement="bottomLeft" items={menuItems}>
  <Button>Bottom Left</Button>
</Dropdown>

// Top placement
<Dropdown placement="topRight" items={menuItems}>
  <Button>Top Right</Button>
</Dropdown>
\`\`\`

## Menu Items

\`\`\`tsx
const menuItems = [
  // Basic item
  { key: '1', label: 'Edit', onClick: () => handleEdit() },
  
  // With icon
  { key: '2', label: 'Copy', icon: <CopyIcon />, onClick: () => handleCopy() },
  
  // Disabled item
  { key: '3', label: 'Archive', disabled: true, onClick: () => handleArchive() },
  
  // With divider
  { key: '4', label: 'Delete', divider: true, onClick: () => handleDelete() }
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
  items={menuItems}
  aria-label="More actions menu"
>
  <Button aria-label="Open actions menu">
    Actions
  </Button>
</Dropdown>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Dropdown testId="actions-dropdown" items={menuItems}>
  <Button>Actions</Button>
</Dropdown>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('actions-dropdown');
screen.getByRole('button', { name: 'Actions' });
screen.getByRole('menu');
\`\`\`

## Custom Triggers

\`\`\`tsx
// Any element can be a trigger
<Dropdown items={menuItems}>
  <div className="cursor-pointer p-2 border rounded">
    Custom Trigger
  </div>
</Dropdown>

// User profile trigger
<Dropdown items={userMenuItems}>
  <div className="flex items-center gap-2 cursor-pointer">
    <Avatar>JD</Avatar>
    <span>John Doe</span>
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
    items: {
      control: false,
      description: 'Array of menu items with labels, actions, and optional properties',
      table: {
        type: { summary: 'DropdownItem[]' },
      },
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: 'How the dropdown is triggered',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'click' },
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'],
      description: 'Preferred placement of the dropdown menu',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
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

const basicItems = [
  { key: '1', label: 'Edit', onClick: () => alert('Edit clicked') },
  { key: '2', label: 'Copy', onClick: () => alert('Copy clicked') },
  { key: '3', label: 'Delete', onClick: () => alert('Delete clicked') },
];

const iconItems = [
  { key: '1', label: 'Edit', icon: <Edit01Icon className="w-4 h-4" />, onClick: () => alert('Edit clicked') },
  { key: '2', label: 'Copy', icon: <Copy01Icon className="w-4 h-4" />, onClick: () => alert('Copy clicked') },
  { key: '3', label: 'Delete', icon: <Trash01Icon className="w-4 h-4" />, onClick: () => alert('Delete clicked'), divider: true },
];

const userMenuItems = [
  { key: '1', label: 'Profile', icon: <User01Icon className="w-4 h-4" />, onClick: () => alert('Profile clicked') },
  { key: '2', label: 'Settings', icon: <Settings01Icon className="w-4 h-4" />, onClick: () => alert('Settings clicked') },
  { key: '3', label: 'Logout', icon: <LogOut01Icon className="w-4 h-4" />, onClick: () => alert('Logout clicked'), divider: true },
];

export const Default: Story = {
  args: {
    items: basicItems,
    children: <Button>Actions</Button>,
  },
};

export const ClickTrigger: Story = {
  args: {
    items: basicItems,
    trigger: 'click',
    children: <Button>Click Trigger</Button>,
  },
};

export const HoverTrigger: Story = {
  args: {
    items: basicItems,
    trigger: 'hover',
    children: <Button variant="secondary">Hover Trigger</Button>,
  },
};

export const WithIcons: Story = {
  args: {
    items: iconItems,
    children: <Button>With Icons</Button>,
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      { key: '1', label: 'Edit', onClick: () => alert('Edit clicked') },
      { key: '2', label: 'Copy', onClick: () => alert('Copy clicked'), disabled: true },
      { key: '3', label: 'Delete', onClick: () => alert('Delete clicked') },
    ],
    children: <Button>Mixed States</Button>,
  },
};

export const Triggers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dropdown items={basicItems} trigger="click">
        <Button>Click Trigger</Button>
      </Dropdown>
      <Dropdown items={basicItems} trigger="hover">
        <Button variant="secondary">Hover Trigger</Button>
      </Dropdown>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-md">
      <Dropdown items={basicItems} placement="topLeft">
        <Button variant="outline" className="text-xs">Top Left</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="top">
        <Button variant="outline" className="text-xs">Top</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="topRight">
        <Button variant="outline" className="text-xs">Top Right</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="bottomLeft">
        <Button variant="outline" className="text-xs">Bottom Left</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="bottom">
        <Button variant="outline" className="text-xs">Bottom</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="bottomRight">
        <Button variant="outline" className="text-xs">Bottom Right</Button>
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
          <Dropdown testId="actions-dropdown" items={basicItems}>
            <Button>Actions Menu</Button>
          </Dropdown>
          <Dropdown testId="user-dropdown" items={userMenuItems}>
            <Button variant="secondary">User Menu</Button>
          </Dropdown>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Use <code className="bg-gray-100 px-1 rounded">testId</code> prop for reliable test targeting
      </div>
    </div>
  ),
};



export const Examples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">User Profile Menu</h3>
        <Dropdown items={userMenuItems}>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <span className="text-sm font-medium">John Doe</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
          </div>
        </Dropdown>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Table Actions</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2 text-sm">Project Alpha</td>
                <td className="px-4 py-2">
                  <Dropdown items={iconItems}>
                    <Button variant="outline" className="text-xs px-2 py-1">•••</Button>
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

