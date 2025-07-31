import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from './index';

const meta: Meta = {
  title: 'Foundation/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Icon library for consistent iconography with comprehensive accessibility and testing support.

## Overview

The Icon library provides ${Object.keys(Icons).length} SVG icons optimized for web use. All icons are 16x16px by default, use currentColor for theming, and maintain WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { CalendarIcon, SearchLgIcon, UserCircleIcon } from '@jetstream/icons';

// Basic usage
<CalendarIcon />

// With styling
<SearchLgIcon className="w-6 h-6 text-blue-500" />
\`\`\`

## Icon Sizes

### Standard Sizes
\`\`\`tsx
<CalendarIcon className="w-4 h-4" />  {/* 16px */}
<CalendarIcon className="w-5 h-5" />  {/* 20px */}
<CalendarIcon className="w-6 h-6" />  {/* 24px */}
<CalendarIcon className="w-8 h-8" />  {/* 32px */}
\`\`\`

### Colors
\`\`\`tsx
<HeartIcon className="text-red-500" />
<HeartIcon className="text-blue-500" />
<HeartIcon className="text-current" />
\`\`\`

## Accessibility

The Icon library is fully accessible with:

- **Semantic meaning**: Use aria-label for standalone icons
- **Color independence**: Icons work without color information
- **Screen readers**: Proper ARIA attributes for context

\`\`\`tsx
// Accessible icon usage
<SearchIcon aria-label="Search" className="w-5 h-5" />
<button><CalendarIcon aria-hidden="true" /> Schedule</button>
\`\`\`

## Testing

Built-in testing support with icon components:

\`\`\`tsx
<CalendarIcon data-testid="calendar-icon" className="w-5 h-5" />
\`\`\`

\`\`\`tsx
// Test icon presence
expect(screen.getByTestId('calendar-icon')).toBeInTheDocument();
\`\`\`

## Best Practices

### Do
- Use consistent icon sizes within interface sections
- Provide text labels alongside icons for clarity
- Use aria-label for standalone interactive icons

### Don't
- Rely solely on icons to convey critical information
- Use icons smaller than 16px for interactive elements
- Mix different icon styles within the same interface

## Available Icons

Browse all ${Object.keys(Icons).length} available icons below:`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
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
            <span className="text-xs text-center text-gray-600 dark:text-gray-400 break-all">
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
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

export const Colors: Story = {
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

export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Icons.SearchIcon className="w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-3 py-2 border rounded-md flex-1"
        />
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Icons.PlusIcon className="w-4 h-4" aria-hidden="true" />
          Add Item
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50">
          <Icons.DownloadIcon className="w-4 h-4" aria-hidden="true" />
          Download
        </button>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Icons.InfoIcon className="w-4 h-4" aria-label="Information" />
        This is an informational message with an accessible icon.
      </div>
    </div>
  ),
};