import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['triforce', 'hyrule', 'rupee', 'ganon'],
      description: 'Visual style variant of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Triforce: Story = {
  args: {
    children: 'Start Adventure',
    variant: 'triforce',
  },
};

export const Hyrule: Story = {
  args: {
    children: 'Visit Kingdom',
    variant: 'hyrule',
  },
};

export const Rupee: Story = {
  args: {
    children: 'Collect Rupees',
    variant: 'rupee',
  },
};

export const Ganon: Story = {
  args: {
    children: 'Face Ganon',
    variant: 'ganon',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Quest Locked',
    variant: 'triforce',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="triforce">Triforce</Button>
      <Button variant="hyrule">Hyrule</Button>
      <Button variant="rupee">Rupee</Button>
      <Button variant="ganon">Ganon</Button>
    </div>
  ),
};