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
        component: `Navigation menu component with support for horizontal, vertical, and inline modes.

## Usage

\`\`\`tsx
import { Menu } from '@jetstream/core';

const [selectedKeys, setSelectedKeys] = useState(['1']);

<Menu selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
  <Menu.Item id="1">Navigation One</Menu.Item>
  <Menu.Item id="2">Navigation Two</Menu.Item>
  <Menu.SubMenu id="sub1" title="Navigation Three">
    <Menu.Item id="3">Option 1</Menu.Item>
    <Menu.Item id="4">Option 2</Menu.Item>
  </Menu.SubMenu>
</Menu>
\`\`\`

## Features

- **Multiple modes**: Vertical (default), horizontal, and inline
- **Nested submenus**: Collapsible submenu support
- **Selection states**: Single or multiple selection
- **Keyboard navigation**: Full keyboard accessibility
- **Dark mode**: Automatic theme adaptation`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
      description: 'Menu display mode',
    },
    selectedKeys: {
      control: 'object',
      description: 'Array of selected menu item IDs',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback when menu item is selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
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
};

export const Horizontal: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['1']);
    
    return (
      <Menu mode="horizontal" selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
        <Menu.Item id="1">Mail</Menu.Item>
        <Menu.Item id="2">Calendar</Menu.Item>
        <Menu.Item id="3">Navigation Three</Menu.Item>
        <Menu.Item id="4" disabled>Disabled</Menu.Item>
      </Menu>
    );
  },
};

export const WithSubMenu: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['1']);
    
    return (
      <div className="w-64">
        <Menu selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
          <Menu.Item id="1">Navigation One</Menu.Item>
          <Menu.Item id="2">Navigation Two</Menu.Item>
          <Menu.SubMenu id="sub1" title="Navigation Three">
            <Menu.Item id="3">Option 1</Menu.Item>
            <Menu.Item id="4">Option 2</Menu.Item>
            <Menu.Item id="5">Option 3</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu id="sub2" title="Navigation Four">
            <Menu.Item id="6">Option 4</Menu.Item>
            <Menu.Item id="7">Option 5</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  },
};

export const HorizontalWithSubMenu: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['1']);
    
    return (
      <Menu mode="horizontal" selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
        <Menu.Item id="1">Mail</Menu.Item>
        <Menu.Item id="2">Calendar</Menu.Item>
        <Menu.SubMenu id="sub1" title="Settings">
          <Menu.Item id="3">Profile</Menu.Item>
          <Menu.Item id="4">Account</Menu.Item>
          <Menu.Item id="5">Preferences</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub2" title="Help">
          <Menu.Item id="6">Documentation</Menu.Item>
          <Menu.Item id="7">Support</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  },
};

export const Inline: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['1']);
    
    return (
      <div className="w-64 border border-gray-200 rounded-lg">
        <Menu mode="inline" selectedKeys={selectedKeys} onSelect={(key) => setSelectedKeys([key])}>
          <Menu.Item id="1">Dashboard</Menu.Item>
          <Menu.Item id="2">Users</Menu.Item>
          <Menu.SubMenu id="sub1" title="Products">
            <Menu.Item id="3">All Products</Menu.Item>
            <Menu.Item id="4">Categories</Menu.Item>
            <Menu.Item id="5">Inventory</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu id="sub2" title="Orders">
            <Menu.Item id="6">All Orders</Menu.Item>
            <Menu.Item id="7">Pending</Menu.Item>
            <Menu.Item id="8">Completed</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item id="9">Settings</Menu.Item>
        </Menu>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState(['1', '3']);
    
    const handleSelect = (key: string) => {
      if (selectedKeys.includes(key)) {
        setSelectedKeys(selectedKeys.filter(k => k !== key));
      } else {
        setSelectedKeys([...selectedKeys, key]);
      }
    };
    
    return (
      <div className="w-64">
        <Menu selectedKeys={selectedKeys} onSelect={handleSelect}>
          <Menu.Item id="1">Option 1</Menu.Item>
          <Menu.Item id="2">Option 2</Menu.Item>
          <Menu.Item id="3">Option 3</Menu.Item>
          <Menu.Item id="4">Option 4</Menu.Item>
        </Menu>
      </div>
    );
  },
};