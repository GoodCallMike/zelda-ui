import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Core/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'body', 'caption'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'muted', 'triforce', 'hyrule', 'rupee', 'ganon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Legend of Zelda',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'The Legend of Zelda',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Breath of the Wild',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Tears of the Kingdom',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Link awakens from a deep slumber to the voice of Zelda.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Nintendo Switch Exclusive',
  },
};

export const ZeldaColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h2" color="triforce">Triforce Golden</Typography>
      <Typography variant="h2" color="hyrule">Hyrule Royal Blue</Typography>
      <Typography variant="h2" color="rupee">Rupee Emerald</Typography>
      <Typography variant="h2" color="ganon">Ganon Crimson</Typography>
      <Typography variant="body" color="muted">Muted text for descriptions</Typography>
    </div>
  ),
};