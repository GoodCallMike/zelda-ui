import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders with text content', () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<Typography variant="h1">Heading</Typography>);
    const element = screen.getByText('Heading');
    expect(element.tagName).toBe('H1');
  });

  it('renders as paragraph by default', () => {
    render(<Typography>Default text</Typography>);
    const element = screen.getByText('Default text');
    expect(element.tagName).toBe('P');
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('custom-class');
  });
});
