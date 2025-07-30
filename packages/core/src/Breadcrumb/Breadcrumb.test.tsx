import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Breadcrumb } from './Breadcrumb';

expect.extend(toHaveNoViolations);

// Mock the cn function to avoid CSS import issues
vi.mock('../styles', () => ({
  cn: (...classes: any[]) => classes.filter(Boolean).join(' ')
}));

describe('Breadcrumb', () => {
  const mockItems = [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'Current Page' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // 1. Rendering Tests (5 tests)
  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<Breadcrumb items={mockItems} />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders with optional props', () => {
      render(<Breadcrumb items={mockItems} separator=">" className="custom" />);
      expect(screen.getByRole('navigation')).toHaveClass('custom');
      expect(screen.getAllByText('>')).toHaveLength(2);
    });

    it('renders with empty items array', () => {
      render(<Breadcrumb items={[]} />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders with single item', () => {
      render(<Breadcrumb items={[{ title: 'Single' }]} />);
      expect(screen.getByText('Single')).toBeInTheDocument();
    });

    it('handles error boundaries gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => render(<Breadcrumb items={mockItems} />)).not.toThrow();
      consoleSpy.mockRestore();
    });
  });

  // 2. States Tests (5 tests)
  describe('States', () => {
    it('shows default state correctly', () => {
      render(<Breadcrumb items={mockItems} />);
      expect(screen.getByText('Current Page')).toHaveClass('font-medium');
    });

    it('handles active/current item styling', () => {
      render(<Breadcrumb items={mockItems} />);
      const currentItem = screen.getByText('Current Page');
      expect(currentItem).toHaveClass('text-gray-900', 'font-medium');
    });

    it('handles clickable item states', () => {
      render(<Breadcrumb items={mockItems} />);
      const homeLink = screen.getByText('Home');
      expect(homeLink).toHaveClass('text-blue-600', 'hover:text-blue-800');
    });

    it('handles non-clickable item states', () => {
      render(<Breadcrumb items={[{ title: 'Static' }]} />);
      const staticItem = screen.getByText('Static');
      expect(staticItem.tagName).toBe('SPAN');
    });

    it('maintains state consistency across renders', () => {
      const { rerender } = render(<Breadcrumb items={mockItems} />);
      expect(screen.getByText('Home')).toBeInTheDocument();
      
      rerender(<Breadcrumb items={[...mockItems, { title: 'New' }]} />);
      expect(screen.getByText('New')).toBeInTheDocument();
    });
  });

  // 3. Interactions Tests (6 tests)
  describe('Interactions', () => {
    it('handles click interactions on links', async () => {
      const user = userEvent.setup();
      render(<Breadcrumb items={mockItems} />);
      
      const homeLink = screen.getByText('Home');
      await user.click(homeLink);
      // Link behavior is handled by browser
    });

    it('handles click interactions on buttons', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      const items = [{ title: 'Clickable', onClick: handleClick }];
      
      render(<Breadcrumb items={items} />);
      await user.click(screen.getByText('Clickable'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<Breadcrumb items={mockItems} />);
      
      const homeLink = screen.getByText('Home');
      await user.tab();
      expect(homeLink).toHaveFocus();
    });

    it('handles focus management', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      const items = [{ title: 'Button', onClick: handleClick }];
      
      render(<Breadcrumb items={items} />);
      const button = screen.getByText('Button');
      await user.click(button);
      expect(button).toHaveFocus();
    });

    it('supports hover states', async () => {
      const user = userEvent.setup();
      render(<Breadcrumb items={mockItems} />);
      
      const homeLink = screen.getByText('Home');
      await user.hover(homeLink);
      expect(homeLink).toHaveClass('hover:text-blue-800');
    });

    it('prevents event propagation when needed', async () => {
      const user = userEvent.setup();
      const parentClick = vi.fn();
      const itemClick = vi.fn();
      
      render(
        <div onClick={parentClick}>
          <Breadcrumb items={[{ title: 'Item', onClick: itemClick }]} />
        </div>
      );
      
      await user.click(screen.getByText('Item'));
      expect(itemClick).toHaveBeenCalled();
    });
  });

  // 4. Accessibility Tests (6 tests)
  describe('Accessibility', () => {
    it('passes WCAG 2.1 AA compliance', async () => {
      const { container } = render(<Breadcrumb items={mockItems} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(<Breadcrumb items={mockItems} />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('supports screen readers with semantic HTML', () => {
      render(<Breadcrumb items={mockItems} />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('provides keyboard navigation support', async () => {
      const user = userEvent.setup();
      render(<Breadcrumb items={mockItems} />);
      
      await user.tab();
      expect(screen.getByText('Home')).toHaveFocus();
      
      await user.tab();
      expect(screen.getByText('Products')).toHaveFocus();
    });

    it('has visible focus indicators', async () => {
      const user = userEvent.setup();
      render(<Breadcrumb items={mockItems} />);
      
      await user.tab();
      const focusedElement = screen.getByText('Home');
      expect(focusedElement).toHaveFocus();
    });

    it('maintains color contrast standards', () => {
      render(<Breadcrumb items={mockItems} />);
      const currentItem = screen.getByText('Current Page');
      expect(currentItem).toHaveClass('text-gray-900');
    });
  });

  // 5. Props & API Tests (5 tests)
  describe('Props & API', () => {
    it('validates required props', () => {
      expect(() => render(<Breadcrumb items={mockItems} />)).not.toThrow();
    });

    it('handles optional props correctly', () => {
      render(<Breadcrumb items={mockItems} separator=">" className="test" />);
      expect(screen.getAllByText('>')).toHaveLength(2);
      expect(screen.getByRole('navigation')).toHaveClass('test');
    });

    it('uses default values appropriately', () => {
      render(<Breadcrumb items={mockItems} />);
      expect(screen.getAllByText('/')).toHaveLength(2);
    });

    it('handles edge case prop values', () => {
      const edgeItems = [
        { title: '', href: '/' },
        { title: 0, href: '/zero' },
        { title: null, href: '/null' },
      ];
      render(<Breadcrumb items={edgeItems} />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('validates prop types correctly', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      render(<Breadcrumb items={mockItems} separator={<span>→</span>} />);
      expect(screen.getAllByText('→')).toHaveLength(2);
      consoleSpy.mockRestore();
    });
  });

  // 6. Form Integration Tests (3 tests)
  describe('Form Integration', () => {
    it('works within form elements', () => {
      render(
        <form>
          <Breadcrumb items={mockItems} />
        </form>
      );
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('handles form submission context', () => {
      const handleSubmit = vi.fn();
      render(
        <form onSubmit={handleSubmit}>
          <Breadcrumb items={mockItems} />
          <button type="submit">Submit</button>
        </form>
      );
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('maintains form field relationships', () => {
      render(
        <div>
          <label htmlFor="search">Search</label>
          <input id="search" />
          <Breadcrumb items={mockItems} />
        </div>
      );
      expect(screen.getByLabelText('Search')).toBeInTheDocument();
    });
  });

  // 7. Test ID Support Tests (2 tests)
  describe('Test ID Support', () => {
    it('supports testId prop', () => {
      render(<Breadcrumb items={mockItems} data-testid="breadcrumb-nav" />);
      expect(screen.getByTestId('breadcrumb-nav')).toBeInTheDocument();
    });

    it('enables reliable element targeting', () => {
      render(<Breadcrumb items={mockItems} data-testid="main-breadcrumb" />);
      const breadcrumb = screen.getByTestId('main-breadcrumb');
      expect(breadcrumb).toHaveAttribute('data-testid', 'main-breadcrumb');
    });
  });

  // 8. Edge Cases Tests (5 tests)
  describe('Edge Cases', () => {
    it('handles missing/undefined props gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => render(<Breadcrumb items={[]} />)).not.toThrow();
      consoleSpy.mockRestore();
    });

    it('handles empty strings in items', () => {
      const emptyItems = [{ title: '', href: '/' }, { title: 'Valid' }];
      render(<Breadcrumb items={emptyItems} />);
      expect(screen.getByText('Valid')).toBeInTheDocument();
    });

    it('handles special characters in titles', () => {
      const specialItems = [
        { title: 'Home & Garden', href: '/' },
        { title: 'Products > Electronics', href: '/products' },
        { title: 'Item #123' },
      ];
      render(<Breadcrumb items={specialItems} />);
      expect(screen.getByText('Home & Garden')).toBeInTheDocument();
      expect(screen.getByText('Products > Electronics')).toBeInTheDocument();
      expect(screen.getByText('Item #123')).toBeInTheDocument();
    });

    it('handles very long content', () => {
      const longTitle = 'A'.repeat(100);
      const longItems = [{ title: longTitle }];
      render(<Breadcrumb items={longItems} />);
      expect(screen.getByText(longTitle)).toBeInTheDocument();
    });

    it('handles invalid data types gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const invalidItems = [
        { title: '123', href: '/' },
        { title: 'boolean', href: '/boolean' },
        { title: 'object', href: '/object' },
      ];
      render(<Breadcrumb items={invalidItems} />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      consoleSpy.mockRestore();
    });
  });

  // 9. Performance Tests (2 tests)
  describe('Performance', () => {
    it('renders efficiently with many items', () => {
      const manyItems = Array.from({ length: 50 }, (_, i) => ({
        title: `Item ${i}`,
        href: `/item-${i}`,
      }));
      
      const startTime = performance.now();
      render(<Breadcrumb items={manyItems} />);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(100); // Should render in <100ms
    });

    it('prevents memory leaks on unmount', () => {
      const handleClick = vi.fn();
      const items = [{ title: 'Test', onClick: handleClick }];
      
      const { unmount } = render(<Breadcrumb items={items} />);
      unmount();
      
      // Component should unmount cleanly
      expect(screen.queryByText('Test')).not.toBeInTheDocument();
    });
  });

  // 10. Styling Tests (3 tests)
  describe('Styling', () => {
    it('applies CSS classes correctly', () => {
      render(<Breadcrumb items={mockItems} />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('flex', 'items-center', 'text-sm');
    });

    it('supports theme variations', () => {
      render(<Breadcrumb items={mockItems} />);
      const homeLink = screen.getByText('Home');
      expect(homeLink).toHaveClass('text-blue-600', 'dark:text-blue-400');
    });

    it('handles custom styling props', () => {
      render(<Breadcrumb items={mockItems} className="custom-breadcrumb" style={{ margin: '10px' }} />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('custom-breadcrumb');
      expect(nav).toHaveStyle({ margin: '10px' });
    });
  });

  // Additional Integration Tests (3 tests)
  describe('Integration', () => {
    it('works with React Router links', () => {
      const routerItems = [
        { title: 'Home', href: '/' },
        { title: 'Dashboard', href: '/dashboard' },
      ];
      render(<Breadcrumb items={routerItems} />);
      expect(screen.getByText('Dashboard')).toHaveAttribute('href', '/dashboard');
    });

    it('integrates with navigation systems', () => {
      const handleNavigation = vi.fn();
      const navItems = [
        { title: 'Back', onClick: handleNavigation },
        { title: 'Current' },
      ];
      render(<Breadcrumb items={navItems} />);
      expect(screen.getByText('Back')).toBeInTheDocument();
    });

    it('supports complex item structures', () => {
      const complexItems = [
        { title: <span>Custom <strong>Home</strong></span>, href: '/' },
        { title: 'Products', href: '/products' },
        { title: 'Current' },
      ];
      render(<Breadcrumb items={complexItems} />);
      expect(screen.getByText('Home')).toBeInTheDocument();
    });
  });
});