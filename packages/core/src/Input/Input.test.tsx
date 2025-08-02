import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input testId="input" />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('w-full');
  });

  it('applies variant classes correctly', () => {
    render(<Input testId="input" variant="filled" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('filled');
  });

  it('applies size classes correctly', () => {
    render(<Input testId="input" size="large" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('large');
  });

  it('applies error state correctly', () => {
    render(<Input testId="input" error />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('error');
  });

  it('handles disabled state', () => {
    render(<Input testId="input" disabled />);
    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
  });

  it('accepts custom className', () => {
    render(<Input testId="input" className="custom-class" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('custom-class');
  });
});