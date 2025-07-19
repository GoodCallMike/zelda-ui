import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders with label', () => {
    render(<Radio name="test" value="option" label="Test radio" />);
    expect(screen.getByLabelText('Test radio')).toBeInTheDocument();
  });

  it('handles selection', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Radio name="test" value="option" label="Test" onChange={handleChange} />);
    
    await user.click(screen.getByLabelText('Test'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows description', () => {
    render(<Radio name="test" value="option" label="Test" description="Helper text" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Radio name="test" value="option" label="Test" errorMessage="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Radio name="test" value="option" label="Test" disabled />);
    expect(screen.getByLabelText('Test')).toBeDisabled();
  });

  it('shows required indicator', () => {
    render(<Radio name="test" value="option" label="Test" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('is checked when checked prop is true', () => {
    render(<Radio name="test" value="option" label="Test" checked />);
    expect(screen.getByLabelText('Test')).toBeChecked();
  });
});