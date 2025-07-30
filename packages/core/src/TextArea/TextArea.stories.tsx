import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Data Entry/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `TextArea component for multi-line text input with comprehensive accessibility and testing support.

## Overview

The TextArea component provides a way to collect multi-line text input from users. It supports validation states, descriptions, auto-resizing, character limits, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { TextArea } from '@jetstream/core';

// Basic textarea
<TextArea
  label="Message"
  placeholder="Enter your message..."
  onChange={(e) => handleChange(e.target.value)}
/>

// With description and validation
<TextArea
  label="Feedback"
  description="Please provide detailed feedback"
  required
  errorMessage={error}
  onChange={(e) => handleFeedback(e.target.value)}
/>

// With character limit
<TextArea
  label="Bio"
  maxLength={500}
  showCount
  placeholder="Tell us about yourself..."
/>
\`\`\`

## Sizes and Layout

### Row Configuration
\`\`\`tsx
// Small textarea
<TextArea label="Short note" rows={3} />

// Medium textarea (default)
<TextArea label="Description" rows={5} />

// Large textarea
<TextArea label="Long content" rows={10} />
\`\`\`

### Auto-resize
\`\`\`tsx
<TextArea
  label="Auto-expanding"
  autoSize
  placeholder="This textarea will grow as you type..."
/>

// With min/max rows
<TextArea
  label="Controlled auto-size"
  autoSize={{ minRows: 3, maxRows: 8 }}
/>
\`\`\`

## Validation States

### Required Field
\`\`\`tsx
<TextArea
  label="Required field"
  required
  placeholder="This field is required"
/>
\`\`\`

### Error State
\`\`\`tsx
<TextArea
  label="Field with error"
  errorMessage="This field is required"
  placeholder="Enter valid content"
/>
\`\`\`

### Character Limits
\`\`\`tsx
<TextArea
  label="Limited input"
  maxLength={200}
  showCount
  placeholder="Maximum 200 characters"
/>
\`\`\`

## Accessibility

The TextArea component is fully accessible with:

- **Keyboard navigation**: Tab to focus, standard text editing shortcuts
- **ARIA attributes**: Proper labeling, descriptions, and error states
- **Screen reader support**: Label association and error announcements
- **Focus management**: Clear focus indicators and logical tab order
- **Error communication**: ARIA invalid states and describedby relationships
- **Character count**: Screen reader accessible count updates

\`\`\`tsx
// Accessible textarea with all features
<TextArea
  label="Accessible feedback"
  description="Provide your thoughts on the new feature"
  aria-describedby="feedback-help"
  required
  errorMessage={error}
  maxLength={500}
  showCount
/>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<TextArea
  testId="feedback-textarea"
  label="Feedback"
  placeholder="Enter feedback"
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('feedback-textarea');
screen.getByRole('textbox', { name: 'Feedback' });
screen.getByPlaceholderText('Enter feedback');
\`\`\`

## Best Practices

### Do
- Use clear, descriptive labels that explain the expected content
- Provide helpful placeholder text as examples
- Set appropriate row counts for expected content length
- Use character limits for fields with constraints
- Include \`testId\` for reliable testing
- Handle validation and error states gracefully

### Don't
- Use textarea for single-line input (use Input instead)
- Make textareas too small for expected content
- Forget to handle keyboard navigation properly
- Use placeholder text as the only label
- Set unreasonably low character limits
- Ignore accessibility requirements for error states`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Helper text displayed below the label',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when empty',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
      table: {
        type: { summary: 'number' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
      },
    },
    showCount: {
      control: 'boolean',
      description: 'Whether to show character count',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    label: 'Message',
    placeholder: 'Enter your message...',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Feedback',
    description: 'Please provide detailed feedback about your experience.',
    placeholder: 'Your feedback...',
    rows: 6,
  },
};

export const WithError: Story = {
  args: {
    label: 'Comments',
    errorMessage: 'Comments must be at least 10 characters long.',
    placeholder: 'Enter your comments...',
  },
};

export const Required: Story = {
  args: {
    label: 'Description',
    required: true,
    placeholder: 'Enter a description...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    disabled: true,
    value: 'This textarea is disabled and cannot be edited.',
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">TextArea States</h3>
        <div className="space-y-4">
          <TextArea
            label="Normal State"
            placeholder="Enter your text..."
            testId="normal-textarea"
          />
          <TextArea
            label="Required Field"
            required
            placeholder="This field is required"
            testId="required-textarea"
          />
          <TextArea
            label="With Error"
            errorMessage="This field is required"
            placeholder="Fix the error"
            testId="error-textarea"
          />
          <TextArea
            label="Disabled State"
            disabled
            value="This textarea is disabled"
            testId="disabled-textarea"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the textarea including normal, required, error, and disabled states.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">TextArea Sizes</h3>
        <div className="space-y-4">
          <TextArea
            label="Small (3 rows)"
            rows={3}
            placeholder="Small textarea for short content"
            testId="small-textarea"
          />
          <TextArea
            label="Medium (5 rows)"
            rows={5}
            placeholder="Medium textarea for moderate content"
            testId="medium-textarea"
          />
          <TextArea
            label="Large (8 rows)"
            rows={8}
            placeholder="Large textarea for extensive content"
            testId="large-textarea"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of textareas with varying row counts for different content lengths.',
      },
    },
  },
};

export const Features: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">TextArea Features</h3>
        <div className="space-y-4">
          <TextArea
            label="With Character Count"
            maxLength={200}
            showCount
            placeholder="Maximum 200 characters"
            testId="count-textarea"
          />
          <TextArea
            label="Auto-resize"
            autoSize
            placeholder="This textarea will grow as you type"
            testId="auto-resize-textarea"
          />
          <TextArea
            label="Controlled Auto-resize"
            autoSize={{ minRows: 3, maxRows: 6 }}
            placeholder="Auto-resize with min 3 and max 6 rows"
            testId="controlled-auto-resize-textarea"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Advanced features including character counting, auto-resize, and controlled auto-resize functionality.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Form</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <TextArea
            label="Message"
            description="Please describe your inquiry in detail"
            placeholder="How can we help you?"
            rows={5}
            required
            testId="contact-message"
          />
          <TextArea
            label="Additional Comments"
            description="Any additional information you'd like to share"
            placeholder="Optional comments..."
            rows={3}
            testId="contact-comments"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">User Profile</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <TextArea
            label="Bio"
            description="Tell others about yourself"
            placeholder="Write a brief bio..."
            maxLength={500}
            showCount
            autoSize={{ minRows: 3, maxRows: 6 }}
            testId="profile-bio"
          />
          <TextArea
            label="Experience"
            description="Describe your professional experience"
            placeholder="Share your work experience..."
            rows={6}
            testId="profile-experience"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Feedback Form</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <TextArea
            label="Feedback"
            description="Your feedback helps us improve our service"
            placeholder="Please share your thoughts..."
            required
            rows={4}
            testId="feedback-text"
          />
          <TextArea
            label="Suggestions"
            description="Any suggestions for improvement?"
            placeholder="Optional suggestions..."
            maxLength={300}
            showCount
            rows={3}
            testId="feedback-suggestions"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing textareas in contact forms, user profiles, and feedback forms with proper testing IDs.',
      },
    },
  },
};