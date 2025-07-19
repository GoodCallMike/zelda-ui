import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Menu } from './Menu';

expect.extend(toHaveNoViolations);

describe('Menu', () => {
  it('renders menu items', () => {
    render(
      <Menu>
        <Menu.Item id="1">Item 1</Menu.Item>
        <Menu.Item id="2">Item 2</Menu.Item>
      </Menu>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('handles item selection', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(
      <Menu onSelect={handleSelect}>
        <Menu.Item id="1">Item 1</Menu.Item>
        <Menu.Item id="2">Item 2</Menu.Item>
      </Menu>
    );
    
    await user.click(screen.getByText('Item 1'));
    expect(handleSelect).toHaveBeenCalledWith('1');
  });

  it('shows selected state', () => {
    render(
      <Menu selectedKeys={['1']}>
        <Menu.Item id="1">Item 1</Menu.Item>
        <Menu.Item id="2">Item 2</Menu.Item>
      </Menu>
    );
    
    const selectedItem = screen.getByText('Item 1');
    expect(selectedItem).toHaveClass('text-blue-600');
  });

  it('handles disabled items', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(
      <Menu onSelect={handleSelect}>
        <Menu.Item id="1" disabled>Disabled Item</Menu.Item>
      </Menu>
    );
    
    const disabledItem = screen.getByText('Disabled Item');
    expect(disabledItem).toHaveClass('cursor-not-allowed');
    
    await user.click(disabledItem);
    expect(handleSelect).not.toHaveBeenCalled();
  });

  it('renders horizontal menu', () => {
    const { container } = render(
      <Menu mode="horizontal">
        <Menu.Item id="1">Item 1</Menu.Item>
      </Menu>
    );
    
    const menu = container.querySelector('ul');
    expect(menu).toHaveClass('flex');
  });

  it('renders submenu', async () => {
    const user = userEvent.setup();
    
    render(
      <Menu>
        <Menu.SubMenu id="sub1" title="Submenu">
          <Menu.Item id="1">Sub Item 1</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
    
    expect(screen.getByText('Submenu')).toBeInTheDocument();
    expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();
    
    await user.click(screen.getByText('Submenu'));
    expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
  });

  it('toggles submenu on click', async () => {
    const user = userEvent.setup();
    
    render(
      <Menu>
        <Menu.SubMenu id="sub1" title="Submenu">
          <Menu.Item id="1">Sub Item 1</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
    
    const submenuTitle = screen.getByText('Submenu');
    
    // Open submenu
    await user.click(submenuTitle);
    expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
    
    // Close submenu
    await user.click(submenuTitle);
    expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();
  });

  it('handles submenu item selection', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(
      <Menu onSelect={handleSelect}>
        <Menu.SubMenu id="sub1" title="Submenu">
          <Menu.Item id="1">Sub Item 1</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
    
    // Open submenu
    await user.click(screen.getByText('Submenu'));
    
    // Click submenu item
    await user.click(screen.getByText('Sub Item 1'));
    expect(handleSelect).toHaveBeenCalledWith('1');
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Menu selectedKeys={['1']} onSelect={() => {}}>
          <Menu.Item id="1">Item 1</Menu.Item>
          <Menu.Item id="2">Item 2</Menu.Item>
          <Menu.SubMenu id="sub1" title="Submenu">
            <Menu.Item id="3">Sub Item</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(
        <Menu>
          <Menu.Item id="1">Item 1</Menu.Item>
        </Menu>
      );
      
      const menu = screen.getByRole('list');
      expect(menu).toBeInTheDocument();
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();
      
      render(
        <Menu onSelect={handleSelect}>
          <Menu.Item id="1">Item 1</Menu.Item>
          <Menu.Item id="2">Item 2</Menu.Item>
        </Menu>
      );
      
      const firstItem = screen.getByText('Item 1');
      firstItem.focus();
      
      await user.keyboard('{Enter}');
      expect(handleSelect).toHaveBeenCalledWith('1');
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('handles rapid clicking', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();
      
      render(
        <Menu onSelect={handleSelect}>
          <Menu.Item id="1">Item 1</Menu.Item>
        </Menu>
      );
      
      const item = screen.getByText('Item 1');
      
      // Rapid clicks
      await user.click(item);
      await user.click(item);
      await user.click(item);
      
      expect(handleSelect).toHaveBeenCalledTimes(3);
    });

    it('handles submenu toggle interactions', async () => {
      const user = userEvent.setup();
      
      render(
        <Menu>
          <Menu.SubMenu id="sub1" title="Submenu">
            <Menu.Item id="1">Sub Item</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      );
      
      const submenuTitle = screen.getByText('Submenu');
      const chevron = submenuTitle.parentElement?.querySelector('svg');
      
      expect(chevron).not.toHaveClass('rotate-180');
      
      await user.click(submenuTitle);
      expect(chevron).toHaveClass('rotate-180');
      expect(screen.getByText('Sub Item')).toBeInTheDocument();
      
      await user.click(submenuTitle);
      expect(chevron).not.toHaveClass('rotate-180');
      expect(screen.queryByText('Sub Item')).not.toBeInTheDocument();
    });

    it('maintains selection state across re-renders', () => {
      const { rerender } = render(
        <Menu selectedKeys={['1']}>
          <Menu.Item id="1">Item 1</Menu.Item>
          <Menu.Item id="2">Item 2</Menu.Item>
        </Menu>
      );
      
      expect(screen.getByText('Item 1')).toHaveClass('text-blue-600');
      
      rerender(
        <Menu selectedKeys={['2']}>
          <Menu.Item id="1">Item 1</Menu.Item>
          <Menu.Item id="2">Item 2</Menu.Item>
        </Menu>
      );
      
      expect(screen.getByText('Item 1')).not.toHaveClass('text-blue-600');
      expect(screen.getByText('Item 2')).toHaveClass('text-blue-600');
    });

    it('handles context errors gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      expect(() => {
        render(<Menu.Item id="1">Orphaned Item</Menu.Item>);
      }).toThrow('Menu.Item must be used within Menu');
      
      consoleSpy.mockRestore();
    });
  });
});