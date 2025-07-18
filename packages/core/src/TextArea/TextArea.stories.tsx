import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Core/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByLabelText('Message');
    
    await expect(textarea).toBeInTheDocument();
    await userEvent.type(textarea, 'This is a test message');
    await expect(textarea).toHaveValue('This is a test message');
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