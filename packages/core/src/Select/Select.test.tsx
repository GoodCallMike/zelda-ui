import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Select } from './Select';

const mockOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

describe('Select', () => {
  it('renders with placeholder', () => {
    render(<Select options={mockOptions} placeholder="Choose option" />);
    expect(screen.getByText('Choose option')).toBeInTheDocument();
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} />);

    const select = screen.getByRole('combobox');
    await user.click(select);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('calls onChange when option selected', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Select options={mockOptions} onChange={onChange} />);

    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByText('Option 1'));

    expect(onChange).toHaveBeenCalledWith('1');
  });

  it('shows disabled state', () => {
    render(<Select options={mockOptions} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('tabindex', '-1');
  });
});
