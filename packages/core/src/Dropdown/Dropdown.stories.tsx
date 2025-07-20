import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';
import { Heading, Label, TextSecondary } from '../Typography';
import { User01Icon, Settings01Icon, LogOut01Icon, Edit01Icon, Copy01Icon, Trash01Icon, ChevronDownIcon } from '@jetstream/icons';

const meta: Meta<typeof Dropdown> = {
  title: 'General/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A versatile dropdown menu component that provides contextual actions and options with floating UI positioning and comprehensive accessibility features.

## Features
- **Flexible Positioning**: 6 placement options with automatic collision detection
- **Multiple Triggers**: Click or hover activation
- **Rich Menu Items**: Support for icons, dividers, and disabled states
- **Accessibility**: Full keyboard navigation, ARIA support, and focus management
- **Custom Triggers**: Any React element can be used as a trigger
- **Click Outside**: Automatic closing when clicking outside
- **Escape Key**: Close with Escape key

## When to Use
- **Action Menus**: Provide contextual actions for items or sections
- **User Menus**: Profile, settings, and account-related options
- **More Options**: When you have limited space but multiple actions
- **Context Menus**: Right-click or secondary action menus
- **Navigation**: Dropdown navigation menus

## Accessibility
- Keyboard navigation with Arrow keys, Enter, and Escape
- Focus management and restoration
- ARIA attributes for screen readers
- Proper semantic markup with roles
- High contrast focus indicators
- Support for disabled items

## Best Practices
- Use clear, action-oriented labels
- Group related actions with dividers
- Place destructive actions at the bottom
- Limit menu items to 7-10 for usability
- Provide keyboard shortcuts when applicable
        `,
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
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown trigger is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Keyboard Navigation</Heading>
        <div className="flex flex-wrap gap-4">
          <Dropdown items={iconItems}>
            <Button tabIndex={0}>Focusable Dropdown</Button>
          </Dropdown>
          <Dropdown items={userMenuItems} trigger="hover">
            <Button variant="secondary" tabIndex={0}>Hover + Keyboard</Button>
          </Dropdown>
        </div>
        <Label className="mt-2">
          Use Tab to focus, Enter/Space to open, Arrow keys to navigate, Escape to close
        </Label>
      </div>
      
      <div>
        <Heading className="mb-2">Screen Reader Friendly</Heading>
        <div className="flex flex-wrap gap-4">
          <Dropdown 
            items={[
              { key: '1', label: 'Mark as read', onClick: () => console.log('Marked as read'), 'aria-label': 'Mark this item as read' },
              { key: '2', label: 'Archive', onClick: () => console.log('Archived'), 'aria-label': 'Move item to archive' },
              { key: '3', label: 'Delete', onClick: () => console.log('Deleted'), 'aria-label': 'Permanently delete this item', divider: true },
            ]}
          >
            <Button aria-label="More actions for this item">More Actions</Button>
          </Dropdown>
        </div>
      </div>
      
      <TextSecondary className="text-sm">
        <p><strong>Accessibility Features:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Full keyboard navigation with Arrow keys</li>
          <li>Focus management and restoration</li>
          <li>ARIA labels and roles for screen readers</li>
          <li>Escape key closes dropdown</li>
          <li>Click outside to close</li>
          <li>High contrast focus indicators</li>
        </ul>
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive accessibility features including keyboard navigation, ARIA support, and screen reader compatibility.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Heading className="mb-2">User Profile Menu</Heading>
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
        <Heading className="mb-2">Table Row Actions</Heading>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2 text-sm">Project Alpha</td>
                <td className="px-4 py-2 text-sm">Active</td>
                <td className="px-4 py-2">
                  <Dropdown items={iconItems}>
                    <Button variant="outline" className="text-xs px-2 py-1">•••</Button>
                  </Dropdown>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2 text-sm">Project Beta</td>
                <td className="px-4 py-2 text-sm">Pending</td>
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
      
      <div>
        <Heading className="mb-2">Bulk Actions</Heading>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">2 items selected</span>
          <Dropdown items={[
            { key: '1', label: 'Export Selected', icon: <Copy01Icon className="w-4 h-4" />, onClick: () => alert('Exported') },
            { key: '2', label: 'Archive Selected', onClick: () => alert('Archived') },
            { key: '3', label: 'Delete Selected', icon: <Trash01Icon className="w-4 h-4" />, onClick: () => alert('Deleted'), divider: true },
          ]}>
            <Button variant="outline">Bulk Actions</Button>
          </Dropdown>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing dropdowns in common UI patterns like user menus, table actions, and bulk operations.',
      },
    },
  },
};

export const MenuVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Menu Item Features</Heading>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <Label>Basic Menu</Label>
            <Dropdown items={basicItems}>
              <Button variant="outline">Basic Actions</Button>
            </Dropdown>
          </div>
          
          <div className="space-y-2">
            <Label>With Icons</Label>
            <Dropdown items={iconItems}>
              <Button variant="outline">Icon Actions</Button>
            </Dropdown>
          </div>
          
          <div className="space-y-2">
            <Label>With Disabled Items</Label>
            <Dropdown items={[
              { key: '1', label: 'Edit', icon: <Edit01Icon className="w-4 h-4" />, onClick: () => alert('Edit clicked') },
              { key: '2', label: 'Copy', icon: <Copy01Icon className="w-4 h-4" />, onClick: () => alert('Copy clicked'), disabled: true },
              { key: '3', label: 'Delete', icon: <Trash01Icon className="w-4 h-4" />, onClick: () => alert('Delete clicked') },
            ]}>
              <Button variant="outline">Mixed States</Button>
            </Dropdown>
          </div>
        </div>
      </div>
      
      <TextSecondary className="text-sm">
        <p><strong>Menu Item Options:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Icons:</strong> Enhance recognition and visual hierarchy</li>
          <li><strong>Dividers:</strong> Group related actions visually</li>
          <li><strong>Disabled:</strong> Show unavailable actions with reduced opacity</li>
          <li><strong>Custom styling:</strong> Apply additional classes for specific needs</li>
        </ul>
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different menu item configurations including icons, disabled states, and dividers for better organization.',
      },
    },
  },
};

// Comprehensive stories with enhanced documentation
export const Triggers: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Trigger Types</Heading>
        <div className="flex flex-wrap gap-4">
          <Dropdown items={basicItems} trigger="click">
            <Button>Click Trigger</Button>
          </Dropdown>
          <Dropdown items={basicItems} trigger="hover">
            <Button variant="secondary">Hover Trigger</Button>
          </Dropdown>
        </div>
      </div>
      <TextSecondary className="text-sm">
        <p><strong>Usage Guidelines:</strong></p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Click:</strong> Default behavior, better for mobile and accessibility</li>
          <li><strong>Hover:</strong> Quick access, but ensure click also works for touch devices</li>
        </ul>
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different trigger methods for opening the dropdown. Click is recommended for better accessibility.',
      },
    },
  },
};

export const Placements: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Placement Options</Heading>
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
      </div>
      <TextSecondary className="text-sm">
        Dropdown automatically adjusts position to stay within viewport bounds. Try different placements near screen edges.
      </TextSecondary>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available placement options with automatic collision detection to keep menus within viewport.',
      },
    },
  },
};

