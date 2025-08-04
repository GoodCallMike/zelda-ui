import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Test checkbox" testId="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    const label = screen.getByText('Test checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<Checkbox testId="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('applies error state correctly', () => {
    render(<Checkbox testId="checkbox" error />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Checkbox testId="checkbox" disabled />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('accepts custom className', () => {
    render(<Checkbox testId="checkbox" className="custom-class" />);
    const label = screen.getByTestId('checkbox').parentElement;
    expect(label).toHaveClass('custom-class');
  });
});
