import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';

const meta: Meta<typeof SplitButton> = {
  title: 'General/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultActions = [
  { label: 'Save as Draft', onClick: () => alert('Saved as draft') },
  { label: 'Save & Close', onClick: () => alert('Saved and closed') },
  { label: 'Save & New', onClick: () => alert('Saved and creating new') },
];

export const Primary: Story = {
  args: {
    children: 'Save',
    onClick: () => alert('Primary save action'),
    actions: defaultActions,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Export',
    onClick: () => alert('Export action'),
    actions: [
      { label: 'Export as PDF', onClick: () => alert('Exported as PDF') },
      { label: 'Export as CSV', onClick: () => alert('Exported as CSV') },
      { label: 'Export as Excel', onClick: () => alert('Exported as Excel') },
    ],
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    children: 'Actions',
    onClick: () => alert('Primary action'),
    actions: defaultActions,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Deploy',
    onClick: () => alert('Deploy to production'),
    actions: [
      { label: 'Deploy to Staging', onClick: () => alert('Deployed to staging') },
      { label: 'Deploy to Development', onClick: () => alert('Deployed to dev') },
    ],
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Save',
    onClick: () => alert('This should not fire'),
    actions: defaultActions,
    disabled: true,
  },
};

export const WithDisabledActions: Story = {
  args: {
    children: 'Publish',
    onClick: () => alert('Published'),
    actions: [
      { label: 'Publish Now', onClick: () => alert('Published now') },
      { label: 'Schedule Publish', onClick: () => alert('Scheduled'), disabled: true },
      { label: 'Save Draft', onClick: () => alert('Saved draft') },
    ],
  },
};