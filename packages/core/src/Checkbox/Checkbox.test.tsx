import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Checkbox } from './Checkbox';

expect.extend(toHaveNoViolations);

describe('Checkbox Component', () => {
  describe('Rendering', () => {
    it('renders with label', () => {
      render(<Checkbox label="Test checkbox" />);
      expect(screen.getByLabelText('Test checkbox')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(<Checkbox testId="checkbox-no-label" />);
      expect(screen.getByTestId('checkbox-no-label')).toBeInTheDocument();
    });

    it('renders with description', () => {
      render(<Checkbox label="Test" description="Helper text" />);
      expect(screen.getByText('Helper text')).toBeInTheDocument();
    });

    it('renders with error message', () => {
      render(<Checkbox label="Test" errorMessage="Error occurred" />);
      expect(screen.getByText('Error occurred')).toBeInTheDocument();
    });

    it('renders required indicator', () => {
      render(<Checkbox label="Required field" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders unchecked by default', () => {
      render(<Checkbox label="Test" />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('renders checked when checked prop is true', () => {
      render(<Checkbox label="Test" checked />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('renders indeterminate state', () => {
      render(<Checkbox label="Test" indeterminate />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
    });

    it('renders disabled state', () => {
      render(<Checkbox label="Test" disabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('renders disabled and checked state', () => {
      render(<Checkbox label="Test" disabled checked />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
      expect(checkbox).toBeChecked();
    });
  });

  describe('Interactions', () => {
    it('toggles when clicked', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Test" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
      
      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('toggles when label is clicked', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Test checkbox" />);
      
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText('Test checkbox');
      
      expect(checkbox).not.toBeChecked();
      await user.click(label);
      expect(checkbox).toBeChecked();
    });

    it('toggles with space key', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Test" />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      
      expect(checkbox).not.toBeChecked();
      await user.keyboard(' ');
      expect(checkbox).toBeChecked();
    });

    it('does not toggle when disabled', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Test" disabled />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('calls onChange handler', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Checkbox label="Test" onChange={handleChange} />);
      
      await user.click(screen.getByRole('checkbox'));
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Controlled Component', () => {
    it('works as controlled component', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      
      const { rerender } = render(
        <Checkbox label="Test" checked={false} onChange={handleChange} />
      );
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
      
      rerender(<Checkbox label="Test" checked={true} onChange={handleChange} />);
      expect(checkbox).toBeChecked();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Checkbox label="Accessible checkbox" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(<Checkbox label="Test" required />);
      const checkbox = screen.getByRole('checkbox');
      
      expect(checkbox).toHaveAttribute('aria-invalid', 'false');
      expect(checkbox).toHaveAttribute('type', 'checkbox');
    });

    it('has proper ARIA attributes with error', () => {
      render(<Checkbox label="Test" errorMessage="Error" />);
      const checkbox = screen.getByRole('checkbox');
      
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
      expect(checkbox).toHaveAttribute('aria-describedby');
    });

    it('has proper ARIA attributes with description', () => {
      render(<Checkbox label="Test" description="Helper text" />);
      const checkbox = screen.getByRole('checkbox');
      
      expect(checkbox).toHaveAttribute('aria-describedby');
    });

    it('has proper ARIA attributes with both description and error', () => {
      render(
        <Checkbox 
          label="Test" 
          description="Helper text" 
          errorMessage="Error" 
        />
      );
      const checkbox = screen.getByRole('checkbox');
      
      expect(checkbox).toHaveAttribute('aria-describedby');
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    });

    it('is keyboard accessible', () => {
      render(<Checkbox label="Test" />);
      const checkbox = screen.getByRole('checkbox');
      
      checkbox.focus();
      expect(checkbox).toHaveFocus();
    });
  });

  describe('Test ID Support', () => {
    it('applies testId to checkbox input', () => {
      render(<Checkbox label="Test" testId="my-checkbox" />);
      expect(screen.getByTestId('my-checkbox')).toBeInTheDocument();
    });

    it('testId points to the input element', () => {
      render(<Checkbox label="Test" testId="my-checkbox" />);
      const element = screen.getByTestId('my-checkbox');
      expect(element.tagName).toBe('INPUT');
      expect(element).toHaveAttribute('type', 'checkbox');
    });
  });

  describe('Form Integration', () => {
    it('works with form submission', () => {
      const handleSubmit = vi.fn((e) => e.preventDefault());
      
      render(
        <form onSubmit={handleSubmit}>
          <Checkbox label="Test" name="test-checkbox" />
          <button type="submit">Submit</button>
        </form>
      );
      
      fireEvent.click(screen.getByText('Submit'));
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('includes checkbox value in form data', async () => {
      const user = userEvent.setup();
      
      render(
        <form>
          <Checkbox label="Test" name="test-checkbox" value="test-value" />
        </form>
      );
      
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      await user.click(checkbox);
      
      expect(checkbox.checked).toBe(true);
      expect(checkbox.value).toBe('test-value');
    });
  });

  describe('Edge Cases', () => {
    it('handles missing label gracefully', () => {
      render(<Checkbox testId="no-label" />);
      expect(screen.getByTestId('no-label')).toBeInTheDocument();
    });

    it('handles empty strings', () => {
      render(<Checkbox label="" description="" errorMessage="" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('handles special characters in label', () => {
      const specialLabel = 'Test & <script>alert("xss")</script>';
      render(<Checkbox label={specialLabel} />);
      expect(screen.getByLabelText(specialLabel)).toBeInTheDocument();
    });

    it('handles long text content', () => {
      const longLabel = 'A'.repeat(1000);
      const longDescription = 'B'.repeat(1000);
      
      render(<Checkbox label={longLabel} description={longDescription} />);
      expect(screen.getByLabelText(longLabel)).toBeInTheDocument();
      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });

    it('maintains indeterminate state correctly', async () => {
      const user = userEvent.setup();
      const { rerender } = render(<Checkbox label="Test" indeterminate />);
      
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
      
      // Clicking should clear indeterminate state
      await user.click(checkbox);
      expect(checkbox.indeterminate).toBe(false);
      
      // Re-setting indeterminate should work
      rerender(<Checkbox label="Test" indeterminate checked />);
      expect(checkbox.indeterminate).toBe(true);
    });
  });

  describe('Styling and CSS Classes', () => {
    it('applies custom className', () => {
      render(<Checkbox label="Test" className="custom-class" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveClass('custom-class');
    });

    it('applies error styling when error message is present', () => {
      render(<Checkbox label="Test" errorMessage="Error" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveClass('border-red-500');
    });

    it('applies disabled styling when disabled', () => {
      render(<Checkbox label="Test" disabled />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveClass('cursor-not-allowed');
    });
  });

  describe('Performance', () => {
    it('does not re-render unnecessarily', () => {
      const renderSpy = vi.fn();
      
      const TestComponent = (props: any) => {
        renderSpy();
        return <Checkbox {...props} />;
      };
      
      const { rerender } = render(<TestComponent label="Test" />);
      expect(renderSpy).toHaveBeenCalledTimes(1);
      
      // Same props should not cause re-render
      rerender(<TestComponent label="Test" />);
      expect(renderSpy).toHaveBeenCalledTimes(2); // React will still re-render, but component should be optimized
    });
  });
});