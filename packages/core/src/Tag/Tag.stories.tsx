import {
  AlertTriangleIcon,
  AnnotationInfoIcon,
  CheckIcon,
  Star01Icon,
  User01Icon,
} from '@zelda/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Heading } from '../Typography';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Tag component for categorizing or markup with comprehensive accessibility and testing support.

## Overview

The Tag component provides compact labeling and categorization functionality. It supports 8 color variants, closable functionality, icon integration, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Tag } from '@zelda/core';

// Basic usage
<Tag>Default Tag</Tag>

// With options
<Tag color="blue" closable onClose={handleClose}>Closable Tag</Tag>
\`\`\`

## Color Variants

### Status Colors
\`\`\`tsx
<Tag color="green">Success</Tag>
<Tag color="red">Error</Tag>
<Tag color="yellow">Warning</Tag>
\`\`\`

### Semantic Colors
\`\`\`tsx
<Tag color="blue">Information</Tag>
<Tag color="purple">Premium</Tag>
<Tag color="pink">Featured</Tag>
\`\`\`

## Accessibility

The Tag component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic markup with ARIA labels for interactive elements
- **Color Independence**: Meaning conveyed through text and icons, not just color

\`\`\`tsx
// Accessibility example
<Tag 
  color="green" 
  aria-label="Completed status"
  role="status"
  icon={<CheckIcon />}
>
  Completed
</Tag>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Tag testId="tag-test">Test Tag</Tag>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('tag-test');
\`\`\`

## Best Practices

### Do
- Use semantic colors that align with your design system
- Provide clear, concise labels
- Include icons for better visual context when appropriate

### Don't
- Rely solely on color to convey meaning
- Use overly long text in tags
- Mix bordered and borderless styles inconsistently
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'blue',
        'green',
        'red',
        'yellow',
        'purple',
        'pink',
        'gray',
      ],
      description: 'Visual color variant of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Whether the tag displays a close button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    bordered: {
      control: 'boolean',
      description: 'Whether the tag has a border',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    icon: {
      control: false,
      description: 'Icon element to display before the tag text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClose: {
      control: false,
      description: 'Callback fired when the close button is clicked',
      table: {
        type: { summary: '(e: React.MouseEvent) => void' },
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
  args: {
    children: 'Default Tag',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The basic tag with default styling. Use for general categorization or labeling.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Tag>Default</Tag>
        <Tag color="blue">Blue</Tag>
        <Tag color="green">Green</Tag>
        <Tag color="red">Red</Tag>
        <Tag color="yellow">Yellow</Tag>
        <Tag color="purple">Purple</Tag>
        <Tag color="pink">Pink</Tag>
        <Tag color="gray">Gray</Tag>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>Color Guidelines:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Blue:</strong> Information, links, or primary actions
          </li>
          <li>
            <strong>Green:</strong> Success states, completed items, or positive
            actions
          </li>
          <li>
            <strong>Red:</strong> Errors, warnings, or destructive actions
          </li>
          <li>
            <strong>Yellow:</strong> Warnings, pending states, or attention
            needed
          </li>
          <li>
            <strong>Purple:</strong> Premium features, special categories
          </li>
          <li>
            <strong>Pink:</strong> Creative content, favorites, or highlights
          </li>
          <li>
            <strong>Gray:</strong> Neutral information, disabled states
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All available color variants. Choose colors that align with your design system and provide semantic meaning.',
      },
    },
  },
};

export const Closable: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { id: 1, label: 'React', color: 'blue' as const },
      { id: 2, label: 'TypeScript', color: 'green' as const },
      { id: 3, label: 'JavaScript', color: 'yellow' as const },
      { id: 4, label: 'CSS', color: 'purple' as const },
    ]);

    const handleClose = (id: number) => {
      setTags(tags.filter((tag) => tag.id !== id));
    };

    const resetTags = () => {
      setTags([
        { id: 1, label: 'React', color: 'blue' as const },
        { id: 2, label: 'TypeScript', color: 'green' as const },
        { id: 3, label: 'JavaScript', color: 'yellow' as const },
        { id: 4, label: 'CSS', color: 'purple' as const },
      ]);
    };

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              color={tag.color}
              closable
              onClose={() => handleClose(tag.id)}
            >
              {tag.label}
            </Tag>
          ))}
        </div>
        {tags.length === 0 && (
          <div className="text-center py-4">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              All tags have been removed
            </p>
            <button
              onClick={resetTags}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Reset Tags
            </button>
          </div>
        )}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Click the × button to remove tags. Useful for filters, selected items,
          or user-generated content.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tags with close functionality. Perfect for removable filters, selected options, or dynamic content management.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Status Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            <Tag color="green" icon={<CheckIcon className="w-3 h-3" />}>
              Completed
            </Tag>
            <Tag
              color="yellow"
              icon={<AlertTriangleIcon className="w-3 h-3" />}
            >
              Warning
            </Tag>
            <Tag color="blue" icon={<AnnotationInfoIcon className="w-3 h-3" />}>
              Information
            </Tag>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            User Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            <Tag color="blue" icon={<User01Icon className="w-3 h-3" />}>
              User
            </Tag>
            <Tag color="purple" icon={<User01Icon className="w-3 h-3" />}>
              Admin
            </Tag>
            <Tag color="yellow" icon={<Star01Icon className="w-3 h-3" />}>
              Premium
            </Tag>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Closable with Icons
          </h4>
          <div className="flex flex-wrap gap-2">
            <Tag
              color="green"
              icon={<CheckIcon className="w-3 h-3" />}
              closable
              onClose={() => console.log('Completed tag closed')}
            >
              Task Done
            </Tag>
            <Tag
              color="blue"
              icon={<User01Icon className="w-3 h-3" />}
              closable
              onClose={() => console.log('User tag closed')}
            >
              John Doe
            </Tag>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Icons provide visual context and improve recognition. Keep icons simple
        and ensure they align with the tag's meaning.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tags enhanced with icons for better visual communication. Icons should be 12px (w-3 h-3) for optimal appearance.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>(['react']);
    const [inputValue, setInputValue] = useState('');

    const availableTags = [
      { id: 'react', label: 'React', color: 'blue' as const },
      { id: 'vue', label: 'Vue', color: 'green' as const },
      { id: 'angular', label: 'Angular', color: 'red' as const },
      { id: 'svelte', label: 'Svelte', color: 'purple' as const },
    ];

    const addTag = () => {
      if (
        inputValue.trim() &&
        !selectedTags.includes(inputValue.toLowerCase())
      ) {
        setSelectedTags([...selectedTags, inputValue.toLowerCase()]);
        setInputValue('');
      }
    };

    const removeTag = (tagId: string) => {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    };

    const toggleTag = (tagId: string) => {
      if (selectedTags.includes(tagId)) {
        removeTag(tagId);
      } else {
        setSelectedTags([...selectedTags, tagId]);
      }
    };

    return (
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Selected Technologies
          </h4>
          <div className="flex flex-wrap gap-2 min-h-[2rem]">
            {selectedTags.map((tagId) => {
              const tag = availableTags.find((t) => t.id === tagId);
              return (
                <Tag
                  key={tagId}
                  color={tag?.color || 'default'}
                  closable
                  onClose={() => removeTag(tagId)}
                >
                  {tag?.label || tagId}
                </Tag>
              );
            })}
            {selectedTags.length === 0 && (
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                No technologies selected
              </span>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Available Options
          </h4>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <Tag
                key={tag.id}
                color={selectedTags.includes(tag.id) ? tag.color : 'gray'}
                className={`cursor-pointer transition-all ${
                  selectedTags.includes(tag.id)
                    ? 'opacity-50'
                    : 'hover:scale-105'
                }`}
                onClick={() => toggleTag(tag.id)}
              >
                {tag.label} {selectedTags.includes(tag.id) ? '✓' : '+'}
              </Tag>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
            Add Custom Tag
          </h4>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTag()}
              placeholder="Enter tag name"
              className="px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            />
            <button
              onClick={addTag}
              disabled={!inputValue.trim()}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example showing tags in a real-world scenario with selection, addition, and removal functionality.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Heading className="mb-2">Tag Sizing</Heading>
        <div className="flex flex-wrap items-center gap-2">
          <Tag className="text-xs px-1.5 py-0.5">Extra Small</Tag>
          <Tag>Default Size</Tag>
          <Tag className="text-sm px-3 py-1.5">Large</Tag>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Customize tag sizes using className prop. Maintain consistent sizing
        within the same context.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Different tag sizes achieved through custom className styling. Adjust padding and font size as needed.',
      },
    },
  },
};

export const Borderless: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
          Bordered vs Borderless
        </h4>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              With Borders (Default)
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag>Default</Tag>
              <Tag color="blue">Blue</Tag>
              <Tag color="green">Green</Tag>
              <Tag color="red">Red</Tag>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Without Borders
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag bordered={false}>Default</Tag>
              <Tag color="blue" bordered={false}>
                Blue
              </Tag>
              <Tag color="green" bordered={false}>
                Green
              </Tag>
              <Tag color="red" bordered={false}>
                Red
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
          Borderless with Features
        </h4>
        <div className="flex flex-wrap gap-2">
          <Tag
            color="purple"
            bordered={false}
            icon={<Star01Icon className="w-3 h-3" />}
          >
            Featured
          </Tag>
          <Tag color="green" bordered={false} closable>
            Removable
          </Tag>
          <Tag
            color="blue"
            bordered={false}
            icon={<User01Icon className="w-3 h-3" />}
            closable
          >
            User Tag
          </Tag>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Borderless tags provide a cleaner, more minimal appearance. Use when you
        want less visual weight or in dense layouts.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tags without borders for a cleaner, more subtle appearance. Useful in dense interfaces or when you want to reduce visual noise.',
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
          Keyboard Navigation
        </h4>
        <div className="flex flex-wrap gap-2">
          <Tag tabIndex={0}>Focusable Tag</Tag>
          <Tag
            color="blue"
            closable
            onClose={() => alert('Tag closed!')}
            tabIndex={0}
          >
            Closable Tag
          </Tag>
          <Tag
            color="green"
            icon={<CheckIcon className="w-3 h-3" />}
            tabIndex={0}
          >
            Icon Tag
          </Tag>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Use Tab to navigate, Enter/Space to interact, Escape to close
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
          Screen Reader Friendly
        </h4>
        <div className="flex flex-wrap gap-2">
          <Tag
            color="green"
            aria-label="Completed status"
            role="status"
            icon={<CheckIcon className="w-3 h-3" />}
          >
            Completed
          </Tag>
          <Tag
            color="red"
            closable
            onClose={() => console.log('Error dismissed')}
            aria-label="Error message, press to dismiss"
          >
            Error
          </Tag>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>Accessibility Features:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Keyboard navigation support with tabIndex</li>
          <li>ARIA labels for screen readers</li>
          <li>Semantic roles for status indicators</li>
          <li>Focus management for interactive elements</li>
          <li>High contrast colors for visibility</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Accessibility features including keyboard navigation, ARIA labels, and screen reader support.',
      },
    },
  },
};
