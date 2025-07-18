import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Core/TextField',
  component: TextField,
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
    label: 'Username',
    placeholder: 'Enter your username',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Username');
    
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'john_doe');
    await expect(input).toHaveValue('john_doe');
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email',
    description: 'We will never share your email with anyone else.',
    placeholder: 'Enter your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    errorMessage: 'Password must be at least 8 characters long.',
    placeholder: 'Enter your password',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-describedby',
            enabled: true,
          },
          {
            id: 'aria-invalid',
            enabled: true,
          },
        ],
      },
    },
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    value: 'This field is disabled',
  },
};