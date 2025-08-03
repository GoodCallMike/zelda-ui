import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { SearchLgIcon, User01Icon, Mail01Icon, EyeIcon } from '@zelda/icons';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'borderless'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Enter text...',
  },
};

export const Borderless: Story = {
  args: {
    variant: 'borderless',
    placeholder: 'Enter text...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: 'Invalid input',
    value: 'Invalid value',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input label="Username" placeholder="Enter your username" />
      <Input label="Email" placeholder="Enter your email" type="email" />
      <Input label="Password" placeholder="Enter your password" type="password" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with labels using the Typography component.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input label="Search" icon={SearchLgIcon} placeholder="Search items..." />
      <Input label="Username" icon={User01Icon} placeholder="Enter username" />
      <Input label="Email" icon={Mail01Icon} placeholder="Enter email" type="email" />
      <Input label="Password" icon={EyeIcon} iconPosition="right" placeholder="Password" type="password" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with icons from the @zelda/icons package, showing left and right positioning.',
      },
    },
  },
};