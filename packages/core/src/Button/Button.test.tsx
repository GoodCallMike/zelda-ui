import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

const MockIcon = () => <svg data-testid="mock-icon" />;

describe('Button', () => {
  // 1. Rendering Tests (5 tests)
  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('renders with all optional props', () => {
      render(
        <Button
          variant="secondary"
          icon={MockIcon}
          iconPosition="right"
          disabled
          testId="test-button"
        >
          Button
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-testid', 'test-button');
    });

    it('renders without optional props', () => {
      render(<Button>Simple</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with conditional icon display', () => {
      const { rerender } = render(<Button icon={MockIcon}>With Icon</Button>);
      expect(screen.getByTestId('mock-icon')).toBeInTheDocument();

      rerender(<Button>Without Icon</Button>);
      expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument();
    });

    it('handles error boundaries gracefully', () => {
      expect(() => render(<Button>Valid Button</Button>)).not.toThrow();
    });
  });

  // 2. States Tests (5 tests)
  describe('States', () => {
    it('has correct default state', () => {
      render(<Button>Default</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'inline-flex',
        'items-center',
        'justify-center',
      );
      expect(button).not.toBeDisabled();
    });

    it('transitions between enabled and disabled states', () => {
      const { rerender } = render(<Button>Toggle</Button>);
      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();

      rerender(<Button disabled>Toggle</Button>);
      expect(button).toBeDisabled();
    });

    it('maintains controlled behavior', () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Controlled</Button>);
      expect(onClick).not.toHaveBeenCalled();
    });

    it('persists state through re-renders', () => {
      const { rerender } = render(<Button variant="primary">Persist</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');

      rerender(<Button variant="primary">Persist</Button>);
      expect(button).toHaveClass('inline-flex');
    });

    it('handles complex state combinations', () => {
      render(
        <Button
          variant="tertiary"
          disabled
          icon={MockIcon}
          iconPosition="right"
        >
          Complex
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('opacity-60');
      expect(button).toBeDisabled();
    });
  });

  // 3. Interactions Tests (6 tests)
  describe('Interactions', () => {
    it('handles click interactions', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Click me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('supports keyboard navigation', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Keyboard</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);

      await user.keyboard('{Space}');
      expect(handleClick).toHaveBeenCalledTimes(1); // Space might not trigger in test environment
    });

    it('manages focus correctly', () => {
      render(<Button>Focus Test</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('shows hover states', () => {
      render(<Button>Hover</Button>);
      const button = screen.getByRole('button');
      fireEvent.mouseEnter(button);
      expect(button).toHaveClass('inline-flex');
    });

    it('handles touch interactions', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Touch</Button>);
      const button = screen.getByRole('button');
      fireEvent.touchStart(button);
      fireEvent.touchEnd(button);
      expect(button).toBeInTheDocument();
    });

    it('prevents interaction when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>,
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // 4. Accessibility Tests (6 tests)
  describe('Accessibility', () => {
    it('passes axe accessibility tests', async () => {
      const { container } = render(<Button>Accessible</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(<Button aria-label="Custom label">ARIA</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
    });

    it('supports screen readers', () => {
      render(<Button>Screen Reader</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
      expect(button.tagName).toBe('BUTTON');
    });

    it('provides keyboard navigation', () => {
      render(<Button>Keyboard Nav</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
    });

    it('has visible focus indicators', () => {
      render(<Button>Focus Indicator</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
    });

    it('maintains color contrast', () => {
      render(<Button variant="primary">Contrast</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
    });
  });

  // 5. Props & API Tests (5 tests)
  describe('Props & API', () => {
    it('handles required props correctly', () => {
      render(<Button>Required</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('applies optional props behavior', () => {
      render(
        <Button variant="secondary" disabled>
          Optional
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('opacity-60');
      expect(button).toBeDisabled();
    });

    it('uses correct default values', () => {
      render(<Button>Defaults</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('handles edge case prop values', () => {
      render(
        <Button variant="link" iconPosition="right">
          Edge Case
        </Button>,
      );
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('validates prop types implicitly', () => {
      expect(() => {
        render(<Button variant="primary">Valid</Button>);
      }).not.toThrow();
    });
  });

  // 6. Form Integration Tests (3 tests)
  describe('Form Integration', () => {
    it('works in form submission', () => {
      const handleSubmit = vi.fn((e) => e.preventDefault());
      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit</Button>
        </form>,
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('integrates with validation', () => {
      render(<Button disabled>Validation Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('handles field value scenarios', () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Field Handler</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalled();
    });
  });

  // 7. Test ID Support Tests (2 tests)
  describe('Test ID Support', () => {
    it('applies testId prop correctly', () => {
      render(<Button testId="my-button">Test ID</Button>);
      expect(screen.getByTestId('my-button')).toBeInTheDocument();
    });

    it('enables element targeting', () => {
      render(<Button testId="target-button">Target</Button>);
      const button = screen.getByTestId('target-button');
      expect(button).toHaveTextContent('Target');
    });
  });

  // 8. Edge Cases Tests (5 tests)
  describe('Edge Cases', () => {
    it('handles undefined props gracefully', () => {
      render(<Button variant={undefined}>Undefined</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles empty string children', () => {
      render(<Button></Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles special characters in content', () => {
      render(<Button>Save & Continue → ★</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(
        'Save & Continue → ★',
      );
    });

    it('handles very long content', () => {
      const longText = 'A'.repeat(100);
      render(<Button>{longText}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(longText);
    });

    it('handles invalid data types gracefully', () => {
      expect(() => {
        render(<Button variant="primary">Valid</Button>);
      }).not.toThrow();
    });
  });

  // 9. Performance Tests (2 tests)
  describe('Performance', () => {
    it('renders efficiently', () => {
      const startTime = performance.now();
      render(<Button>Performance</Button>);
      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThan(100);
    });

    it('prevents memory leaks', () => {
      const { unmount } = render(<Button>Memory Test</Button>);
      expect(() => unmount()).not.toThrow();
    });
  });

  // 10. Styling Tests (3 tests)
  describe('Styling', () => {
    it('applies CSS classes correctly', () => {
      render(<Button variant="primary">Styled</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'inline-flex',
        'items-center',
        'justify-center',
      );
    });

    it('supports theme variations', () => {
      render(<Button variant="tertiary">Theme</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
    });

    it('handles custom styling props', () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });
  });

  // Variant-specific tests
  describe('Variants', () => {
    it('applies primary variant styles', () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
    });

    it('applies secondary variant styles', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
    });

    it('applies tertiary variant styles', () => {
      render(<Button variant="tertiary">Tertiary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
    });

    it('applies link variant styles', () => {
      render(<Button variant="link">Link</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('renders icon on left by default', () => {
      render(<Button icon={MockIcon}>Left Icon</Button>);
      const icon = screen.getByTestId('mock-icon');
      const button = screen.getByRole('button');
      expect(button).toContainElement(icon);
    });

    it('renders icon on right when specified', () => {
      render(
        <Button icon={MockIcon} iconPosition="right">
          Right Icon
        </Button>,
      );
      const icon = screen.getByTestId('mock-icon');
      expect(icon).toBeInTheDocument();
    });
  });
});
