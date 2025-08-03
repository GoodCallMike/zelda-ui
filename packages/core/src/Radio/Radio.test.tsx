import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders with label', () => {
    render(<Radio label="Test radio" testId="radio" />);
    const radio = screen.getByTestId('radio');
    const label = screen.getByText('Test radio');
    expect(radio).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<Radio testId="radio" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
  });

  it('applies error state correctly', () => {
    render(<Radio testId="radio" error />);
    const radio = screen.getByTestId('radio');
    expect(radio).toHaveClass('error');
  });

  it('handles disabled state', () => {
    render(<Radio testId="radio" disabled />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeDisabled();
  });

  it('accepts custom className', () => {
    render(<Radio testId="radio" className="custom-class" />);
    const label = screen.getByTestId('radio').parentElement;
    expect(label).toHaveClass('custom-class');
  });

  it('groups radio buttons with same name', () => {
    render(
      <div>
        <Radio testId="radio1" name="group" value="1" />
        <Radio testId="radio2" name="group" value="2" />
      </div>
    );
    const radio1 = screen.getByTestId('radio1');
    const radio2 = screen.getByTestId('radio2');
    expect(radio1).toHaveAttribute('name', 'group');
    expect(radio2).toHaveAttribute('name', 'group');
  });
});