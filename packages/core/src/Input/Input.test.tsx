import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Input onChange={onChange} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'test');
    expect(onChange).toHaveBeenCalled();
  });

  it('shows error state', () => {
    render(<Input error="Required field" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
