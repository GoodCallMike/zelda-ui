import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders horizontal divider by default', () => {
    const { container } = render(<Divider />);
    const divider = container.firstChild as HTMLElement;
    expect(divider).toHaveClass('h-px');
  });

  it('renders vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.firstChild as HTMLElement;
    expect(divider).toHaveClass('w-px');
  });

  it('renders with text content', () => {
    render(<Divider>Section Title</Divider>);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('applies dashed style', () => {
    const { container } = render(<Divider dashed />);
    const divider = container.firstChild as HTMLElement;
    expect(divider).toHaveClass('border-dashed');
  });

  it('applies custom className', () => {
    const { container } = render(<Divider className="custom-class" />);
    const divider = container.firstChild as HTMLElement;
    expect(divider).toHaveClass('custom-class');
  });

  it('handles text alignment', () => {
    const { container } = render(<Divider textAlign="left">Left Text</Divider>);
    expect(screen.getByText('Left Text')).toBeInTheDocument();
    // Check that the structure is correct for left alignment
    const dividerContainer = container.firstChild as HTMLElement;
    expect(dividerContainer).toHaveClass('flex');
  });
});