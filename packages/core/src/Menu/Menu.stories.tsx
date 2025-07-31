import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Menu component for navigation with comprehensive accessibility and testing support.

## Overview

The Menu component provides flexible navigation functionality. It supports vertical, horizontal, and inline display modes, nested submenus, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Menu } from '@zelda/core';

// Basic usage
<Menu selectedKeys={['1']} onSelect={handleSelect}>
  <Menu.Item id="1">Home</Menu.Item>
  <Menu.Item id="2">About</Menu.Item>
</Menu>

// With options
<Menu mode="horizontal" selectedKeys={selectedKeys} onSelect={handleSelect}>
  <Menu.Item id="1">Dashboard</Menu.Item>
  <Menu.SubMenu id="sub1" title="Settings">
    <Menu.Item id="2">Profile</Menu.Item>
  </Menu.SubMenu>
</Menu>
\`\`\`

## Display Modes

### Vertical Mode
\`\`\`tsx
<Menu mode="vertical" selectedKeys={selectedKeys}>
  <Menu.Item id="1">Navigation One</Menu.Item>
  <Menu.Item id="2">Navigation Two</Menu.Item>
</Menu>
\`\`\`

### Horizontal Mode
\`\`\`tsx
<Menu mode="horizontal" selectedKeys={selectedKeys}>
  <Menu.Item id="1">Home</Menu.Item>
  <Menu.Item id="2">About</Menu.Item>
</Menu>
\`\`\`

## Accessibility

The Menu component is fully accessible with:

- **Keyboard Navigation**: Arrow keys, Enter, and Space for navigation and selection
- **ARIA Support**: Proper roles, states, and properties for screen readers
- **Focus Management**: Logical focus order and visual focus indicators

\`\`\`tsx
// Accessibility example
<Menu 
  selectedKeys={selectedKeys}
  onSelect={handleSelect}
  role="menu"
  aria-label="Main navigation"
>
  <Menu.Item id="1">Home</Menu.Item>
</Menu>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Menu testId="main-menu" selectedKeys={selectedKeys}>
  <Menu.Item id="home">Home</Menu.Item>
  <Menu.Item id="about">About</Menu.Item>
</Menu>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('main-menu');
screen.getByRole('menuitem', { name: 'Home' });

// Select menu item
fireEvent.click(screen.getByRole('menuitem', { name: 'Home' }));
\`\`\`

## Best Practices

### Do
- Use semantic menu item labels
- Provide clear visual feedback for selected states
- Group related items in submenus when appropriate

### Don't
- Nest submenus more than 2 levels deep
- Use menus for non-navigation actions
- Mix different selection patterns inconsistently
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
      description: 'Menu display mode',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
    selectedKeys: {
      control: 'object',
      description: 'Array of selected menu item IDs',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    onSelect: {
      action: 'selected',
      description: 'Callback when menu item is selected',
      table: {
        type: { summary: '(key: string) => void' },
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
    const [selectedKeys, setSelectedKeys] = useState(['1']);
    
    return (
      <div className="w-64">
        <Menu selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
          <Menu.Item id="1">Navigation One</Menu.Item>
          <Menu.Item id="2">Navigation Two</Menu.Item>
          <Menu.Item id="3">Navigation Three</Menu.Item>
          <Menu.Item id="4" disabled>Disabled Item</Menu.Item>
        </Menu>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic vertical menu with selectable items and disabled state.',
      },
    },
  },
};

export const Modes: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['1']);
    
    return (
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Vertical Mode</h4>
          <div className="w-64">
            <Menu selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
              <Menu.Item id="1">Dashboard</Menu.Item>
              <Menu.Item id="2">Users</Menu.Item>
              <Menu.Item id="3">Settings</Menu.Item>
            </Menu>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Horizontal Mode</h4>
          <Menu mode="horizontal" selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
            <Menu.Item id="1">Dashboard</Menu.Item>
            <Menu.Item id="2">Users</Menu.Item>
            <Menu.Item id="3">Settings</Menu.Item>
          </Menu>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Inline Mode</h4>
          <div className="w-64 border border-gray-200 rounded-lg">
            <Menu mode="inline" selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
              <Menu.Item id="1">Dashboard</Menu.Item>
              <Menu.Item id="2">Users</Menu.Item>
              <Menu.Item id="3">Settings</Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different display modes: vertical (default), horizontal, and inline.',
      },
    },
  },
};

export const WithSubMenus: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['1']);
    
    return (
      <div className="w-64">
        <Menu selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
          <Menu.Item id="1">Dashboard</Menu.Item>
          <Menu.SubMenu id="sub1" title="User Management">
            <Menu.Item id="2">All Users</Menu.Item>
            <Menu.Item id="3">Add User</Menu.Item>
            <Menu.Item id="4">User Roles</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu id="sub2" title="Settings">
            <Menu.Item id="5">General</Menu.Item>
            <Menu.Item id="6">Security</Menu.Item>
            <Menu.Item id="7">Notifications</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item id="8">Reports</Menu.Item>
        </Menu>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with collapsible submenus for organizing related navigation items.',
      },
    },
  },
};

export const States: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['2']);
    
    return (
      <div className="w-64">
        <Menu selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
          <Menu.Item id="1">Normal Item</Menu.Item>
          <Menu.Item id="2">Selected Item</Menu.Item>
          <Menu.Item id="3" disabled>Disabled Item</Menu.Item>
          <Menu.Item id="4">Another Item</Menu.Item>
        </Menu>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different menu item states: normal, selected, and disabled.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['dashboard']);
    
    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Application Navigation</h4>
          <div className="w-64">
            <Menu selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
              <Menu.Item id="dashboard">Dashboard</Menu.Item>
              <Menu.SubMenu id="users" title="User Management">
                <Menu.Item id="all-users">All Users</Menu.Item>
                <Menu.Item id="add-user">Add User</Menu.Item>
                <Menu.Item id="user-roles">User Roles</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu id="products" title="Products">
                <Menu.Item id="all-products">All Products</Menu.Item>
                <Menu.Item id="categories">Categories</Menu.Item>
                <Menu.Item id="inventory">Inventory</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item id="reports">Reports</Menu.Item>
              <Menu.Item id="settings">Settings</Menu.Item>
            </Menu>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Horizontal Navigation Bar</h4>
          <Menu mode="horizontal" selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
            <Menu.Item id="home">Home</Menu.Item>
            <Menu.Item id="about">About</Menu.Item>
            <Menu.SubMenu id="services" title="Services">
              <Menu.Item id="web-design">Web Design</Menu.Item>
              <Menu.Item id="development">Development</Menu.Item>
              <Menu.Item id="consulting">Consulting</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item id="contact">Contact</Menu.Item>
          </Menu>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Multiple Selection</h4>
          <div className="w-64">
            <MultipleSelectionMenu />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing different menu configurations and use cases.',
      },
    },
  },
};

const MultipleSelectionMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState(['option1', 'option3']);
  
  const handleSelect = (key: string) => {
    if (selectedKeys.includes(key)) {
      setSelectedKeys(selectedKeys.filter(k => k !== key));
    } else {
      setSelectedKeys([...selectedKeys, key]);
    }
  };
  
  return (
    <Menu selectedKeys={selectedKeys} onSelect={handleSelect}>
      <Menu.Item id="option1">Option 1</Menu.Item>
      <Menu.Item id="option2">Option 2</Menu.Item>
      <Menu.Item id="option3">Option 3</Menu.Item>
      <Menu.Item id="option4">Option 4</Menu.Item>
    </Menu>
  );
};