import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Typography } from '../Typography';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Avatar component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Avatar component provides user representation with authentic Zelda-inspired styling. It supports image display, initials fallback, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Avatar } from '@zelda/core';

// Basic usage
<Avatar name="Link Hero" />

// With image
<Avatar src="/hero-portrait.jpg" name="Princess Zelda" />
\`\`\`

## Sizes

### Small
\`\`\`tsx
<Avatar name="Link" size="small" />
\`\`\`

### Medium (Default)
\`\`\`tsx
<Avatar name="Zelda" size="medium" />
\`\`\`

### Large
\`\`\`tsx
<Avatar name="Ganondorf" size="large" />
\`\`\`

## Dark Mode

The Avatar component automatically adapts to dark mode with Hyrule's mystical night theme:

\`\`\`tsx
// Automatic dark mode support
<div className="dark">
  <Avatar name="Shadow Link" size="large" />
  <Avatar name="Dark Zelda" size="medium" />
</div>
\`\`\`

### Dark Mode Colors
- **Background**: Deep gray with subtle borders
- **Text**: Light gray for high contrast
- **Border**: Darker gray for definition

## Real World Examples

### User Profile
\`\`\`tsx
// Hero profile interface
<div className="profile-header">
  <Avatar src="/hero-avatar.jpg" name="Hero of Time" size="large" />
  <Typography variant="h3">Hero of Time</Typography>
  <Typography variant="body2">Level 50 Warrior</Typography>
</div>
\`\`\`

### Party Management
\`\`\`tsx
// Party member list
<div className="party-panel">
  <Typography variant="h2">Adventure Party</Typography>
  <div className="party-members">
    <div className="member">
      <Avatar name="Link" size="small" />
      <span>Link - Hero</span>
    </div>
    <div className="member">
      <Avatar name="Zelda" size="small" />
      <span>Zelda - Princess</span>
    </div>
  </div>
</div>
\`\`\`

### Character Selection
\`\`\`tsx
// Character creation interface
<form className="character-form">
  <Input label="Hero Name" placeholder="Enter your name" />
  <div className="avatar-selection">
    <Avatar name="Warrior" size="large" />
    <Avatar name="Mage" size="large" />
    <Avatar name="Archer" size="large" />
  </div>
  <Button type="submit">Begin Quest</Button>
</form>
\`\`\`

### Dialog System
\`\`\`tsx
// NPC interaction dialog
<div className="dialog-box">
  <div className="npc-info">
    <Avatar name="Sage" size="medium" />
    <Typography variant="body">"Welcome, brave adventurer!"</Typography>
  </div>
  <div className="dialog-choices">
    <Button variant="primary">Accept Quest</Button>
    <Button variant="secondary">Ask for Info</Button>
    <Button variant="tertiary">Leave</Button>
  </div>
</div>
\`\`\`

## Accessibility

The Avatar component is fully accessible with:

- **Screen Reader Support**: Semantic img role with descriptive aria-label
- **Image Fallback**: Graceful degradation to initials when image fails
- **High Contrast**: Maintains visibility in both light and dark modes
- **Descriptive Labels**: Context-aware aria-label generation

\`\`\`tsx
// Accessibility example
<Avatar 
  testId="hero-avatar" 
  name="Hero of Time"
  alt="Hero of Time, legendary warrior"
/>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Avatar testId="avatar-test" name="Link" />
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('avatar-test');
screen.getByLabelText('Avatar for Link');
\`\`\`

## Best Practices

### Do
- Provide descriptive names for initials generation
- Use appropriate sizes for context (small for lists, large for profiles)
- Include alt text for enhanced accessibility
- Include \`testId\` for reliable testing

### Don't
- Use Avatar as an interactive element (wrap in button/link instead)
- Rely solely on images without name fallback
- Use overly long names that create unclear initials
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Avatar size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Appearance',
      },
    },
    name: {
      control: 'text',
      description: 'Name for generating initials and aria-label',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    src: {
      control: 'text',
      description: 'Image source URL',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    alt: {
      control: 'text',
      description: 'Image alt text for accessibility',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling with utilities',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
        category: 'Testing',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Link Hero',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Avatar name="Link" size="small" />
        <div className="text-xs mt-1">Small</div>
      </div>
      <div className="text-center">
        <Avatar name="Zelda" size="medium" />
        <div className="text-xs mt-1">Medium</div>
      </div>
      <div className="text-center">
        <Avatar name="Ganondorf" size="large" />
        <div className="text-xs mt-1">Large</div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Avatar name="Link Hero" />
        <div className="text-xs mt-1">With Name</div>
      </div>
      <div className="text-center">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          name="Zelda"
        />
        <div className="text-xs mt-1">With Image</div>
      </div>
      <div className="text-center">
        <Avatar />
        <div className="text-xs mt-1">Fallback</div>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark p-6 bg-gray-900">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar name="Link" size="small" />
        <Avatar name="Zelda" size="medium" />
        <Avatar name="Ganondorf" size="large" />
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Avatar name="Shadow Link" size="large" />
        <div className="text-gray-200">
          <div className="font-semibold">Shadow Link</div>
          <div className="text-sm text-gray-400">Dark Realm Guardian</div>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* User Profile */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h5" className="mb-4">
          User Profile
        </Typography>
        <div className="flex items-center gap-3">
          <Avatar name="Hero of Time" size="large" />
          <div>
            <div className="font-semibold">Hero of Time</div>
            <div className="text-sm text-muted">Level 50 Warrior</div>
          </div>
        </div>
      </div>

      {/* Party Management */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h5" className="mb-4">
          Adventure Party
        </Typography>
        <div className="space-y-2">
          {['Princess Zelda', 'Saria', 'Darunia'].map((name) => (
            <div key={name} className="flex items-center gap-2">
              <Avatar name={name} size="small" />
              <span className="text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Character Selection */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h5" className="mb-4">
          Character Selection
        </Typography>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <Avatar name="Warrior" size="large" />
            <div className="text-xs mt-1">Warrior</div>
          </div>
          <div className="text-center">
            <Avatar name="Mage" size="large" />
            <div className="text-xs mt-1">Mage</div>
          </div>
          <div className="text-center">
            <Avatar name="Archer" size="large" />
            <div className="text-xs mt-1">Archer</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const KeyboardNavigation: Story = {
  render: () => {
    const [announcement, setAnnouncement] = useState('');

    const announceNavigation = (message: string) => {
      setAnnouncement(message);
      setTimeout(() => setAnnouncement(''), 2000);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        {/* Live Region for Announcements */}
        <div aria-live="polite" className="sr-only">
          {announcement}
        </div>

        <div className="p-4 border rounded-lg bg-green-50 border-green-200">
          <Typography variant="h4" className="mb-3 text-green-800">
            ⌨️ Keyboard Navigation Patterns
          </Typography>
          <Typography variant="body2" className="text-green-700">
            Avatar components are typically not keyboard focusable as they are
            display elements.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Interactive Avatar Examples</Typography>
          <div className="space-y-3">
            <button
              type="button"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onFocus={() =>
                announceNavigation('Focused on Hero of Time profile')
              }
              data-testid="interactive-avatar-1"
            >
              <Avatar name="Hero of Time" size="medium" />
              <span>Hero of Time Profile</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onFocus={() =>
                announceNavigation('Focused on Princess Zelda profile')
              }
              data-testid="interactive-avatar-2"
            >
              <Avatar name="Princess Zelda" size="medium" />
              <span>Princess Zelda Profile</span>
            </button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Keyboard Navigation Patterns

### Avatar Accessibility
- **Non-interactive** - Avatars are display elements, not focusable
- **Interactive Context** - When used in buttons/links, the container handles focus
- **Screen Reader** - Proper aria-label provides context

### Testing Examples
\`\`\`tsx
// Test interactive avatar containers
test('Avatar in button supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(
    <button>
      <Avatar name="Test User" testId="avatar-button" />
      <span>User Profile</span>
    </button>
  );
  
  const button = screen.getByRole('button');
  
  await user.tab();
  expect(button).toHaveFocus();
  
  await user.keyboard('{Enter}');
  // Assert expected behavior
});
\`\`\`
        `,
      },
    },
  },
};

export const ARIAAttributes: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <Typography variant="h4" className="mb-3 text-blue-800">
          🏷️ ARIA Attributes Usage
        </Typography>
        <Typography variant="body2" className="text-blue-700">
          Demonstrates proper ARIA attribute implementation for Avatar
          components.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">role="img" Implementation</Typography>
        <div className="p-3 bg-gray-50 border rounded">
          <Avatar name="Link Hero" testId="aria-role-example" />
          <Typography variant="body2" className="text-gray-600 mt-2">
            Avatar has role="img" with descriptive aria-label
          </Typography>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Custom aria-label</Typography>
        <div className="p-3 bg-gray-50 border rounded">
          <Avatar
            name="Princess Zelda"
            alt="Princess Zelda, ruler of Hyrule"
            testId="custom-aria-example"
          />
          <Typography variant="body2" className="text-gray-600 mt-2">
            Custom alt text provides enhanced context
          </Typography>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Image Avatar with Fallback</Typography>
        <div className="p-3 bg-gray-50 border rounded">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            name="Ganondorf"
            alt="Ganondorf, King of Evil"
            testId="image-aria-example"
          />
          <Typography variant="body2" className="text-gray-600 mt-2">
            Image avatar with proper alt text and name fallback
          </Typography>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## ARIA Attributes Implementation

### Essential ARIA Attributes
- **role="img"** - Semantic meaning for avatar display
- **aria-label** - Descriptive label for screen readers
- **alt** - Image alternative text when src is provided
- **aria-hidden="true"** - Hides decorative text from screen readers

### Testing Examples
\`\`\`tsx
// Test ARIA attributes
test('Avatar has proper ARIA attributes', () => {
  render(<Avatar name="Test User" testId="aria-test" />);
  
  const element = screen.getByTestId('aria-test');
  expect(element).toHaveAttribute('role', 'img');
  expect(element).toHaveAttribute('aria-label', 'Avatar for Test User');
});

// Test image avatar accessibility
test('Image avatar has proper alt text', () => {
  render(
    <Avatar 
      src="/test.jpg" 
      name="Test User" 
      alt="Custom alt text"
      testId="image-test" 
    />
  );
  
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('alt', 'Custom alt text');
});
\`\`\`
        `,
      },
    },
  },
};

export const TestingExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
        <Typography variant="h4" className="mb-3 text-purple-800">
          🧪 Testing Examples
        </Typography>
        <Typography variant="body2" className="text-purple-700">
          Examples showing how to test Avatar components with testId attributes
          and accessibility features.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Basic Component Testing</Typography>
        <div className="space-y-3">
          <Avatar testId="test-basic-avatar" name="Link Hero" />
          <Avatar
            testId="test-image-avatar"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            name="Princess Zelda"
          />
          <Avatar testId="test-fallback-avatar" />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query avatars by testId
screen.getByTestId('test-basic-avatar')
screen.getByTestId('test-image-avatar')
screen.getByTestId('test-fallback-avatar')

// Test avatar content
expect(screen.getByTestId('test-basic-avatar')).toHaveTextContent('LH')
expect(screen.getByTestId('test-fallback-avatar')).toHaveTextContent('?')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Accessibility Testing</Typography>
        <div className="space-y-3">
          <Avatar
            testId="test-accessible-avatar"
            name="Hero of Time"
            alt="Hero of Time, legendary warrior"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test accessibility attributes
const avatar = screen.getByTestId('test-accessible-avatar')
expect(avatar).toHaveAttribute('role', 'img')
expect(avatar).toHaveAttribute('aria-label', 'Hero of Time, legendary warrior')

// Test by accessible name
screen.getByLabelText('Hero of Time, legendary warrior')

// Automated accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe'
const results = await axe(container)
expect(results).toHaveNoViolations()`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Size Variant Testing</Typography>
        <div className="flex items-center gap-4">
          <Avatar testId="test-small-avatar" name="Small" size="small" />
          <Avatar testId="test-medium-avatar" name="Medium" size="medium" />
          <Avatar testId="test-large-avatar" name="Large" size="large" />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test size variants
const smallAvatar = screen.getByTestId('test-small-avatar')
const mediumAvatar = screen.getByTestId('test-medium-avatar')
const largeAvatar = screen.getByTestId('test-large-avatar')

// Test CSS classes or computed styles
expect(smallAvatar).toHaveClass('small')
expect(mediumAvatar).toHaveClass('medium')
expect(largeAvatar).toHaveClass('large')`}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Testing Examples with testId Attributes

### Basic Testing Patterns
\`\`\`tsx
// Query by testId
const avatar = screen.getByTestId('test-avatar');
expect(avatar).toBeInTheDocument();

// Test initials generation
expect(avatar).toHaveTextContent('LH'); // for "Link Hero"
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test ARIA attributes
const avatar = screen.getByTestId('accessible-avatar');
expect(avatar).toHaveAttribute('role', 'img');
expect(avatar).toHaveAttribute('aria-label');

// Test by accessible name
screen.getByLabelText('Avatar for Link Hero');
\`\`\`

### Image Loading Testing
\`\`\`tsx
// Test image avatar
const avatar = screen.getByTestId('image-avatar');
const img = within(avatar).getByRole('img');
expect(img).toHaveAttribute('src', '/test-image.jpg');

// Test image error fallback
fireEvent.error(img);
expect(avatar).toHaveTextContent('LH'); // Falls back to initials
\`\`\`

### Automated Accessibility Testing
\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('Avatar has no accessibility violations', async () => {
  const { container } = render(<Avatar name="Test User" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`
        `,
      },
    },
  },
};
