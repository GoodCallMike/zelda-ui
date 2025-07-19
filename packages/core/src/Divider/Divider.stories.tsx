import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-6 max-w-2xl">
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="p-6 max-w-2xl">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider>Section Title</Divider>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div className="p-6 max-w-2xl space-y-8">
      <div>
        <p>Content above</p>
        <Divider textAlign="left">Left</Divider>
        <p>Content below</p>
      </div>
      
      <div>
        <p>Content above</p>
        <Divider textAlign="center">Center</Divider>
        <p>Content below</p>
      </div>
      
      <div>
        <p>Content above</p>
        <Divider textAlign="right">Right</Divider>
        <p>Content below</p>
      </div>
    </div>
  ),
};

export const Dashed: Story = {
  render: () => (
    <div className="p-6 max-w-2xl">
      <p>Content above</p>
      <Divider dashed />
      <p>Content with dashed divider</p>
      <Divider dashed>Dashed with Text</Divider>
      <p>Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="p-6">
      <div className="flex items-center gap-4 h-24">
        <span>Item 1</span>
        <Divider orientation="vertical" />
        <span>Item 2</span>
        <Divider orientation="vertical" dashed />
        <span>Item 3</span>
      </div>
    </div>
  ),
};