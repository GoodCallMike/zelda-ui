import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from './index';

const meta: Meta = {
  title: 'Icons/Overview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Icon library for the Jetstream design system. All icons are 16x16px by default and use \`currentColor\` for easy theming.

## Usage

\`\`\`tsx
import { CalendarIcon, SearchLgIcon, UserCircleIcon } from '@jetstream/icons';

<CalendarIcon className="w-4 h-4 text-blue-500" />
<SearchLgIcon />
<UserCircleIcon style={{ color: 'red', width: 24, height: 24 }} />
\`\`\`

## Available Icons

Browse all ${Object.keys(Icons).length} available icons below:`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const AllIcons: Story = {
  render: () => {
    const iconEntries = Object.entries(Icons);
    
    return (
      <div className="grid grid-cols-6 gap-4 p-4">
        {iconEntries.map(([name, IconComponent]) => (
          <div 
            key={name}
            className="flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <IconComponent className="size-8 mb-2" />
            <span className="text-xs text-center text-gray-600 dark:text-gray-400">
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Icons.CalendarIcon className="w-4 h-4" />
        <p className="text-xs mt-1">16px (default)</p>
      </div>
      <div className="text-center">
        <Icons.CalendarIcon className="w-5 h-5" />
        <p className="text-xs mt-1">20px</p>
      </div>
      <div className="text-center">
        <Icons.CalendarIcon className="w-6 h-6" />
        <p className="text-xs mt-1">24px</p>
      </div>
      <div className="text-center">
        <Icons.CalendarIcon className="w-8 h-8" />
        <p className="text-xs mt-1">32px</p>
      </div>
    </div>
  ),
};

export const IconColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icons.HeartIcon className="w-6 h-6 text-red-500" />
      <Icons.HeartIcon className="w-6 h-6 text-blue-500" />
      <Icons.HeartIcon className="w-6 h-6 text-green-500" />
      <Icons.HeartIcon className="w-6 h-6 text-purple-500" />
      <Icons.HeartIcon className="w-6 h-6 text-gray-400" />
    </div>
  ),
};