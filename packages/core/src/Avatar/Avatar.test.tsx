import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with image', () => {
    render(<Avatar src="test.jpg" alt="Test user" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveAttribute('alt', 'Test user');
  });

  it('shows initials when no image', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('shows fallback when no name or image', () => {
    render(<Avatar />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container } = render(<Avatar size="large" name="Test" />);
    expect(container.firstChild).toHaveClass('_large_0d8178');
  });
});
