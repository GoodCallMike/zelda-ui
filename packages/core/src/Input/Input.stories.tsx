import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { SearchLgIcon, User01Icon, Mail01Icon, EyeIcon, CurrencyDollarIcon } from '@zelda/icons';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'search', 'url', 'tel', 'number', 'textarea'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'borderless'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    status: {
      control: { type: 'select' },
      options: [undefined, 'error', 'warning'],
    },
    allowClear: {
      control: { type: 'boolean' },
    },
    showCount: {
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

export const WithStatus: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input status="error" placeholder="Error state" defaultValue="Invalid value" />
      <Input status="warning" placeholder="Warning state" defaultValue="Warning value" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with error and warning status states.',
      },
    },
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

export const WithPrefixSuffix: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input label="Search" prefix={<SearchLgIcon className="w-4 h-4" />} placeholder="Search items..." />
      <Input label="Username" prefix={<User01Icon className="w-4 h-4" />} placeholder="Enter username" />
      <Input label="Email" prefix={<Mail01Icon className="w-4 h-4" />} placeholder="Enter email" type="email" />
      <Input label="Price" prefix={<CurrencyDollarIcon className="w-4 h-4" />} suffix="USD" placeholder="0.00" type="number" />
      <Input label="Website" prefix="https://" suffix=".com" placeholder="example" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with prefix and suffix content including icons and text.',
      },
    },
  },
};

export const WithClearAndCount: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input 
        label="Clearable Input" 
        placeholder="Type something..." 
        allowClear 
        defaultValue="Clear me!"
      />
      <Input 
        label="Character Count" 
        placeholder="Max 50 characters" 
        showCount 
        maxLength={50}
        defaultValue="Count my characters"
      />
      <Input 
        label="Both Features" 
        placeholder="Type something..." 
        allowClear 
        showCount 
        maxLength={100}
        defaultValue="I have both clear and count!"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with clear button and character count functionality.',
      },
    },
  },
};

export const TextareaMode: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input 
        type="textarea" 
        label="Basic Textarea" 
        placeholder="Enter your message..." 
        rows={4}
      />
      <Input 
        type="textarea" 
        label="With Character Count" 
        placeholder="Max 200 characters..." 
        showCount 
        maxLength={200}
        rows={3}
        defaultValue="This textarea has a character count!"
      />
      <Input 
        type="textarea" 
        label="Non-resizable" 
        placeholder="Cannot be resized..." 
        resize="none"
        rows={3}
      />
      <Input 
        type="textarea" 
        label="Horizontal Resize" 
        placeholder="Can resize horizontally..." 
        resize="horizontal"
        rows={3}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input component in textarea mode with various resize options and features.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark p-6 bg-gray-900 space-y-4 max-w-md">
      <Input label="Default" placeholder="Enter text..." />
      <Input label="Filled" variant="filled" placeholder="Enter text..." />
      <Input label="With Prefix" prefix={<SearchLgIcon className="w-4 h-4" />} placeholder="Search..." />
      <Input label="With Clear" allowClear defaultValue="Clear me!" />
      <Input label="Error State" status="error" defaultValue="Invalid input" />
      <Input type="textarea" label="Textarea" placeholder="Enter message..." rows={3} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input variants in dark mode with purple accent colors.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Login Form</h3>
        <Input 
          label="Email" 
          type="email" 
          prefix={<Mail01Icon className="w-4 h-4" />} 
          placeholder="hero@hyrule.com" 
        />
        <Input 
          label="Password" 
          type="password" 
          prefix={<EyeIcon className="w-4 h-4" />} 
          placeholder="Enter your password" 
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Search & Filter</h3>
        <Input 
          placeholder="Search items..." 
          prefix={<SearchLgIcon className="w-4 h-4" />} 
          allowClear 
          variant="filled"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quest Journal</h3>
        <Input 
          type="textarea" 
          label="Quest Notes" 
          placeholder="Document your adventure..." 
          showCount 
          maxLength={500} 
          rows={4} 
          allowClear
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing login forms, search interfaces, and content creation.',
      },
    },
  },
};