import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
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
    const container = screen.getByTestId('input').parentElement;
    expect(container).toHaveClass('filled');
  });

  it('applies size classes correctly', () => {
    render(<Input testId="input" size="large" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('large');
  });

  it('applies status classes correctly', () => {
    render(<Input testId="input" status="error" />);
    const container = screen.getByTestId('input').parentElement;
    expect(container).toHaveClass('error');
  });

  it('handles disabled state', () => {
    render(<Input testId="input" disabled />);
    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
  });

  it('renders textarea when type is textarea', () => {
    render(<Input type="textarea" testId="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('renders prefix content', () => {
    render(<Input prefix={<span>$</span>} testId="input" />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('renders suffix content', () => {
    render(<Input suffix={<span>USD</span>} testId="input" />);
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  it('shows clear button when allowClear is true and has value', () => {
    render(<Input allowClear defaultValue="test" testId="input" />);
    expect(screen.getByLabelText('Clear input')).toBeInTheDocument();
  });

  it('clears input when clear button is clicked', () => {
    const onChange = vi.fn();
    render(<Input allowClear defaultValue="test" onChange={onChange} testId="input" />);
    
    const clearButton = screen.getByLabelText('Clear input');
    fireEvent.click(clearButton);
    
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: '' })
    }));
  });

  it('shows character count when showCount is true', () => {
    render(<Input showCount maxLength={10} defaultValue="test" testId="input" />);
    expect(screen.getByText('4/10')).toBeInTheDocument();
  });

  it('highlights character count in red when over limit', () => {
    render(<Input showCount maxLength={3} defaultValue="test" testId="input" />);
    const count = screen.getByText('4/3');
    expect(count).toHaveClass('text-ganon-600');
  });

  it('handles controlled value', () => {
    const onChange = vi.fn();
    render(<Input value="controlled" onChange={onChange} testId="input" />);
    
    const input = screen.getByTestId('input');
    expect(input).toHaveValue('controlled');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('handles uncontrolled value', () => {
    render(<Input defaultValue="uncontrolled" testId="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveValue('uncontrolled');
  });

  it('applies textarea-specific props', () => {
    render(<Input type="textarea" rows={5} resize="none" testId="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveAttribute('rows', '5');
    expect(textarea).toHaveClass('none');
  });

  it('accepts custom className', () => {
    render(<Input testId="input" className="custom-class" />);
    const container = screen.getByTestId('input').parentElement?.parentElement;
    expect(container).toHaveClass('custom-class');
  });
});