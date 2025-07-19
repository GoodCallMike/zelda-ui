import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  { key: '1', label: 'Edit', onClick: () => alert('Edit clicked') },
  { key: '2', label: 'Copy', onClick: () => alert('Copy clicked') },
  { key: '3', label: 'Delete', onClick: () => alert('Delete clicked') },
];

export const Default: Story = {
  args: {
    items: basicItems,
    children: <Button>Actions</Button>,
  },
};

export const HoverTrigger: Story = {
  args: {
    items: basicItems,
    trigger: 'hover',
    children: <Button>Hover me</Button>,
  },
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      { key: '1', label: 'Edit', onClick: () => alert('Edit clicked') },
      { key: '2', label: 'Copy', onClick: () => alert('Copy clicked'), disabled: true },
      { key: '3', label: 'Delete', onClick: () => alert('Delete clicked') },
    ],
    children: <Button>Actions</Button>,
  },
};

export const WithDividers: Story = {
  args: {
    items: [
      { key: '1', label: 'Edit', onClick: () => alert('Edit clicked') },
      { key: '2', label: 'Copy', onClick: () => alert('Copy clicked'), divider: true },
      { key: '3', label: 'Delete', onClick: () => alert('Delete clicked') },
    ],
    children: <Button>Actions</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Dropdown items={basicItems} placement="bottomLeft">
        <Button>Bottom Left</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="bottom">
        <Button>Bottom</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="bottomRight">
        <Button>Bottom Right</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="topLeft">
        <Button>Top Left</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="top">
        <Button>Top</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="topRight">
        <Button>Top Right</Button>
      </Dropdown>
    </div>
  ),
};

export const CustomTrigger: Story = {
  args: {
    items: [
      { key: '1', label: 'Profile', onClick: () => alert('Profile clicked') },
      { key: '2', label: 'Settings', onClick: () => alert('Settings clicked') },
      { key: '3', label: 'Logout', onClick: () => alert('Logout clicked'), divider: true },
    ],
    children: (
      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
          JD
        </div>
        <span className="text-sm">John Doe</span>
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    ),
  },
};