import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Home', href: '/' },
      { title: 'Products', href: '/products' },
      { title: 'Laptop' },
    ],
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      { title: 'Home', onClick: () => alert('Navigate to Home') },
      { title: 'Category', onClick: () => alert('Navigate to Category') },
      { title: 'Current Page' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { title: 'Home', href: '/' },
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Settings', href: '/settings' },
      { title: 'Profile' },
    ],
    separator: '>',
  },
};

export const IconSeparator: Story = {
  args: {
    items: [
      { title: 'Home', href: '/' },
      { title: 'Users', href: '/users' },
      { title: 'John Doe' },
    ],
    separator: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { title: 'Home', href: '/' },
      { title: 'Applications', href: '/apps' },
      { title: 'E-commerce', href: '/apps/ecommerce' },
      { title: 'Products', href: '/apps/ecommerce/products' },
      { title: 'Electronics', href: '/apps/ecommerce/products/electronics' },
      { title: 'Laptops', href: '/apps/ecommerce/products/electronics/laptops' },
      { title: 'MacBook Pro 16"' },
    ],
  },
};