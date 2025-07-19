import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Skeleton } from './Skeleton';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Skeleton loading placeholder component.

## Usage

\`\`\`tsx
import { Skeleton } from '@jetstream/core';

<Skeleton loading={isLoading}>
  <div>Your content here</div>
</Skeleton>
\`\`\`

## Features

- **Avatar placeholder** - Optional avatar skeleton
- **Title and paragraph** - Configurable text placeholders  
- **Animation** - Optional pulse animation
- **Sub-components** - Button, Input, and Image skeletons
- **Dark mode** - Automatic theme adaptation`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether to show skeleton loading state',
    },
    active: {
      control: 'boolean', 
      description: 'Whether skeleton is animated',
    },
    avatar: {
      control: 'boolean',
      description: 'Show avatar placeholder',
    },
    title: {
      control: 'boolean',
      description: 'Show title placeholder',
    },
    paragraph: {
      control: 'boolean',
      description: 'Show paragraph placeholder',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: true,
    active: true,
  },
};

export const WithAvatar: Story = {
  args: {
    loading: true,
    active: true,
    avatar: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    loading: true,
    active: true,
    avatar: true,
    title: false,
  },
};

export const CustomParagraph: Story = {
  args: {
    loading: true,
    active: true,
    avatar: true,
    paragraph: { rows: 5 },
  },
};

export const Interactive: Story = {
  render: () => {
    const [loading, setLoading] = useState(true);
    
    return (
      <div className="space-y-4">
        <button
          onClick={() => setLoading(!loading)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {loading ? 'Show Content' : 'Show Skeleton'}
        </button>
        
        <Skeleton loading={loading} active avatar>
          <div className="flex gap-4">
            <Avatar>JD</Avatar>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-gray-600">
                This is the actual content that appears when loading is false.
                It can be any React content you want to show.
              </p>
            </div>
          </div>
        </Skeleton>
      </div>
    );
  },
};

export const SubComponents: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Skeleton.Button</h3>
        <div className="flex gap-2">
          <Skeleton.Button size="small" active />
          <Skeleton.Button size="default" active />
          <Skeleton.Button size="large" active />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Skeleton.Input</h3>
        <div className="space-y-2 max-w-xs">
          <Skeleton.Input size="small" active />
          <Skeleton.Input size="default" active />
          <Skeleton.Input size="large" active />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Skeleton.Image</h3>
        <div className="max-w-xs">
          <Skeleton.Image active />
        </div>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Basic</h3>
        <Skeleton active />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">With Avatar</h3>
        <Skeleton active avatar />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Complex</h3>
        <Skeleton 
          active 
          avatar={{ size: 'large' }}
          paragraph={{ rows: 4 }}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">List Item</h3>
        <div className="space-y-3">
          <Skeleton active avatar={{ size: 'small' }} paragraph={{ rows: 1 }} />
          <Skeleton active avatar={{ size: 'small' }} paragraph={{ rows: 1 }} />
          <Skeleton active avatar={{ size: 'small' }} paragraph={{ rows: 1 }} />
        </div>
      </div>
    </div>
  ),
};