import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const mockItems = [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'Current Page' },
  ];

  it('renders all breadcrumb items', () => {
    render(<Breadcrumb items={mockItems} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();
  });

  it('renders links for items with href', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const homeLink = screen.getByText('Home');
    const productsLink = screen.getByText('Products');
    
    expect(homeLink.tagName).toBe('A');
    expect(homeLink).toHaveAttribute('href', '/');
    expect(productsLink.tagName).toBe('A');
    expect(productsLink).toHaveAttribute('href', '/products');
  });

  it('renders last item as plain text', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const currentPage = screen.getByText('Current Page');
    expect(currentPage.tagName).toBe('SPAN');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const itemsWithClick = [
      { title: 'Home', onClick: handleClick },
      { title: 'Current' },
    ];
    
    render(<Breadcrumb items={itemsWithClick} />);
    
    await user.click(screen.getByText('Home'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders custom separator', () => {
    render(<Breadcrumb items={mockItems} separator=">" />);
    
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
  });

  it('applies custom className', () => {
    render(<Breadcrumb items={mockItems} className="custom-class" />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('custom-class');
  });
});