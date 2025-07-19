import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Test checkbox" />);
    expect(screen.getByLabelText('Test checkbox')).toBeInTheDocument();
  });

  it('handles checked state', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Checkbox label="Test" onChange={handleChange} />);
    
    await user.click(screen.getByLabelText('Test'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows description', () => {
    render(<Checkbox label="Test" description="Helper text" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Checkbox label="Test" errorMessage="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox label="Test" disabled />);
    expect(screen.getByLabelText('Test')).toBeDisabled();
  });

  it('shows required indicator', () => {
    render(<Checkbox label="Test" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});