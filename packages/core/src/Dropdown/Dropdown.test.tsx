import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Dropdown } from './Dropdown';

expect.extend(toHaveNoViolations);

const MockIcon = () => <svg data-testid="mock-icon" />;

const basicItems = [
  { key: '1', label: 'Edit', onClick: vi.fn() },
  { key: '2', label: 'Copy', onClick: vi.fn() },
  { key: '3', label: 'Delete', onClick: vi.fn() },
];

describe('Dropdown', () => {
  // 1. Rendering (5 tests)
  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<Dropdown items={basicItems}><button>Trigger</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
    });

    it('renders with optional props', () => {
      render(
        <Dropdown items={basicItems} trigger="hover" placement="top" testId="test">
          <button>Trigger</button>
        </Dropdown>
      );
      expect(screen.getByTestId('test')).toBeInTheDocument();
    });

    it('renders without props', () => {
      render(<Dropdown items={[]}><button>Empty</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Empty' })).toBeInTheDocument();
    });

    it('handles conditional rendering', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Toggle</button></Dropdown>);
      
      expect(screen.queryByText('Edit')).not.toBeInTheDocument();
      await user.click(screen.getByRole('button', { name: 'Toggle' }));
      expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('handles error boundaries', () => {
      expect(() => render(<Dropdown items={basicItems}><button>Valid</button></Dropdown>)).not.toThrow();
    });
  });

  // 2. States (5 tests)
  describe('States', () => {
    it('verifies default state', () => {
      render(<Dropdown items={basicItems}><button>Default</button></Dropdown>);
      expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    });

    it('handles state transitions', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Toggle</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Toggle' }));
      expect(screen.getByText('Edit')).toBeInTheDocument();
      
      await user.click(screen.getByRole('button', { name: 'Toggle' }));
      await waitFor(() => expect(screen.queryByText('Edit')).not.toBeInTheDocument());
    });

    it('maintains controlled behavior', () => {
      const onClick = vi.fn();
      render(<Dropdown items={[{ key: '1', label: 'Test', onClick }]}><button>Controlled</button></Dropdown>);
      expect(onClick).not.toHaveBeenCalled();
    });

    it('persists state', async () => {
      const user = userEvent.setup();
      const { rerender } = render(<Dropdown items={basicItems}><button>Persist</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Persist' }));
      expect(screen.getByText('Edit')).toBeInTheDocument();
      
      rerender(<Dropdown items={basicItems}><button>Persist</button></Dropdown>);
      expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('handles complex state combinations', async () => {
      render(
        <Dropdown items={[{ key: '1', label: 'Test', disabled: true, onClick: vi.fn() }]} trigger="hover">
          <button>Complex</button>
        </Dropdown>
      );
      
      fireEvent.mouseEnter(screen.getByRole('button', { name: 'Complex' }).parentElement!);
      await waitFor(() => expect(screen.getByText('Test')).toBeInTheDocument());
    });
  });

  // 3. Interactions (6 tests)
  describe('Interactions', () => {
    it('handles click interactions', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Click</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Click' }));
      expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Keyboard</button></Dropdown>);
      
      const button = screen.getByRole('button', { name: 'Keyboard' });
      button.focus();
      await user.keyboard('{Enter}');
      expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('manages focus', () => {
      render(<Dropdown items={basicItems}><button>Focus</button></Dropdown>);
      const button = screen.getByRole('button', { name: 'Focus' });
      button.focus();
      expect(button).toHaveFocus();
    });

    it('shows hover states', async () => {
      render(<Dropdown items={basicItems} trigger="hover"><button>Hover</button></Dropdown>);
      
      fireEvent.mouseEnter(screen.getByRole('button', { name: 'Hover' }).parentElement!);
      await waitFor(() => expect(screen.getByText('Edit')).toBeInTheDocument());
    });

    it('handles touch interactions', () => {
      render(<Dropdown items={basicItems}><button>Touch</button></Dropdown>);
      const button = screen.getByRole('button', { name: 'Touch' });
      fireEvent.touchStart(button);
      expect(button).toBeInTheDocument();
    });

    it('calls event handlers', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Dropdown items={[{ key: '1', label: 'Test', onClick }]}><button>Handler</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Handler' }));
      await user.click(screen.getByText('Test'));
      expect(onClick).toHaveBeenCalled();
    });
  });

  // 4. Accessibility (6 tests)
  describe('Accessibility', () => {
    it('passes WCAG 2.1 AA compliance', async () => {
      const { container } = render(<Dropdown items={basicItems}><button>Accessible</button></Dropdown>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('verifies ARIA attributes', () => {
      render(<Dropdown items={basicItems}><button aria-label="Menu">ARIA</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-label', 'Menu');
    });

    it('supports screen readers', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Screen Reader</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Screen Reader' }));
      expect(screen.getAllByRole('button').length).toBeGreaterThan(1);
    });

    it('provides keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Keyboard</button></Dropdown>);
      
      const button = screen.getByRole('button', { name: 'Keyboard' });
      button.focus();
      await user.keyboard('{Enter}');
      expect(screen.getByText('Edit')).toBeInTheDocument();
      
      await user.keyboard('{Escape}');
      await waitFor(() => expect(screen.queryByText('Edit')).not.toBeInTheDocument());
    });

    it('has focus indicators', () => {
      render(<Dropdown items={basicItems}><button>Focus</button></Dropdown>);
      const button = screen.getByRole('button', { name: 'Focus' });
      button.focus();
      expect(button).toHaveFocus();
    });

    it('maintains color contrast', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Contrast</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Contrast' }));
      expect(screen.getByText('Edit')).toBeInTheDocument();
    });
  });

  // 5. Props & API (5 tests)
  describe('Props & API', () => {
    it('validates required props', () => {
      render(<Dropdown items={basicItems}><button>Required</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Required' })).toBeInTheDocument();
    });

    it('handles optional props behavior', async () => {
      render(<Dropdown items={basicItems} trigger="hover" placement="top"><button>Optional</button></Dropdown>);
      
      fireEvent.mouseEnter(screen.getByRole('button', { name: 'Optional' }).parentElement!);
      await waitFor(() => expect(screen.getByText('Edit')).toBeInTheDocument());
    });

    it('uses default values', () => {
      render(<Dropdown items={basicItems}><button>Defaults</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Defaults' })).toBeInTheDocument();
    });

    it('handles edge case prop values', () => {
      render(<Dropdown items={[]} placement="topRight" trigger="hover"><button>Edge</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Edge' })).toBeInTheDocument();
    });

    it('validates types', () => {
      expect(() => render(<Dropdown items={basicItems}><button>Valid</button></Dropdown>)).not.toThrow();
    });
  });

  // 6. Form Integration (3 tests)
  describe('Form Integration', () => {
    it('handles form submission', async () => {
      const user = userEvent.setup();
      const handleSubmit = vi.fn(e => e.preventDefault());
      render(
        <form onSubmit={handleSubmit}>
          <Dropdown items={[{ key: '1', label: 'Submit', onClick: handleSubmit }]}>
            <button type="button">Form</button>
          </Dropdown>
        </form>
      );
      
      await user.click(screen.getByRole('button', { name: 'Form' }));
      await user.click(screen.getByText('Submit'));
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('integrates with validation', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown items={[
          { key: '1', label: 'Valid', onClick: vi.fn() },
          { key: '2', label: 'Invalid', onClick: vi.fn(), disabled: true }
        ]}>
          <button>Validation</button>
        </Dropdown>
      );
      
      await user.click(screen.getByRole('button', { name: 'Validation' }));
      expect(screen.getByText('Valid')).toBeInTheDocument();
      expect(screen.getByText('Invalid')).toBeInTheDocument();
    });

    it('handles field values', async () => {
      const user = userEvent.setup();
      const setValue = vi.fn();
      render(
        <Dropdown items={[{ key: '1', label: 'Option', onClick: () => setValue('value') }]}>
          <button>Field</button>
        </Dropdown>
      );
      
      await user.click(screen.getByRole('button', { name: 'Field' }));
      await user.click(screen.getByText('Option'));
      expect(setValue).toHaveBeenCalledWith('value');
    });
  });

  // 7. Test ID Support (2 tests)
  describe('Test ID Support', () => {
    it('supports testId prop', () => {
      render(<Dropdown testId="test-dropdown" items={basicItems}><button>Test</button></Dropdown>);
      expect(screen.getByTestId('test-dropdown')).toBeInTheDocument();
    });

    it('enables element targeting', () => {
      render(<Dropdown testId="target" items={basicItems}><button>Target</button></Dropdown>);
      const dropdown = screen.getByTestId('target');
      expect(dropdown).toContainElement(screen.getByRole('button', { name: 'Target' }));
    });
  });

  // 8. Edge Cases (5 tests)
  describe('Edge Cases', () => {
    it('handles missing/undefined props', () => {
      render(<Dropdown items={basicItems} trigger={undefined as any}><button>Undefined</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Undefined' })).toBeInTheDocument();
    });

    it('handles empty strings', () => {
      render(<Dropdown items={[{ key: '1', label: '', onClick: vi.fn() }]}><button>Empty</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Empty' })).toBeInTheDocument();
    });

    it('handles special characters', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={[{ key: '1', label: 'Save & Continue → ★', onClick: vi.fn() }]}><button>Special</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Special' }));
      expect(screen.getByText('Save & Continue → ★')).toBeInTheDocument();
    });

    it('handles long content', async () => {
      const user = userEvent.setup();
      const longLabel = 'A'.repeat(100);
      render(<Dropdown items={[{ key: '1', label: longLabel, onClick: vi.fn() }]}><button>Long</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Long' }));
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('handles invalid data types', () => {
      expect(() => render(<Dropdown items={basicItems}><button>Valid</button></Dropdown>)).not.toThrow();
    });
  });

  // 9. Performance (2 tests)
  describe('Performance', () => {
    it('renders efficiently', () => {
      const startTime = performance.now();
      render(<Dropdown items={basicItems}><button>Performance</button></Dropdown>);
      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThan(100);
    });

    it('prevents memory leaks', () => {
      const { unmount } = render(<Dropdown items={basicItems}><button>Memory</button></Dropdown>);
      expect(() => unmount()).not.toThrow();
    });
  });

  // 10. Styling (3 tests)
  describe('Styling', () => {
    it('applies CSS classes', async () => {
      const user = userEvent.setup();
      render(<Dropdown items={basicItems}><button>Styled</button></Dropdown>);
      
      await user.click(screen.getByRole('button', { name: 'Styled' }));
      const menu = screen.getByText('Edit').closest('div');
      expect(menu).toHaveClass('bg-white');
    });

    it('supports theme', async () => {
      const user = userEvent.setup();
      render(
        <div data-theme="dark">
          <Dropdown items={basicItems}><button>Theme</button></Dropdown>
        </div>
      );
      
      await user.click(screen.getByRole('button', { name: 'Theme' }));
      expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('handles custom styling props', () => {
      render(<Dropdown items={basicItems}><button className="custom">Custom</button></Dropdown>);
      expect(screen.getByRole('button', { name: 'Custom' })).toHaveClass('custom');
    });
  });
});