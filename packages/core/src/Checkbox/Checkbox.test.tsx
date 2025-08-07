import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles checked state', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Checkbox label="Test" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('shows as disabled', () => {
    render(<Checkbox label="Disabled" loading />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('applies error styling', () => {
    render(<Checkbox label="Test" error="Required" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('_error_d3dbe7');
  });
});
