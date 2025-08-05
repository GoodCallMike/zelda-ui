import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';
import styles from './Badge.module.css';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test content</Badge>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Badge variant="primary" testId="badge">Content</Badge>);
    const element = screen.getByTestId('badge');
    expect(element).toHaveClass(styles.primary);
  });

  it('applies size classes correctly', () => {
    render(<Badge size="large" testId="badge">Content</Badge>);
    const element = screen.getByTestId('badge');
    expect(element).toHaveClass(styles.large);
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class" testId="badge">Content</Badge>);
    const element = screen.getByTestId('badge');
    expect(element).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<Badge data-custom="test" testId="badge">Content</Badge>);
    const element = screen.getByTestId('badge');
    expect(element).toHaveAttribute('data-custom', 'test');
  });

  it('renders all variants', () => {
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'error'] as const;
    
    variants.forEach(variant => {
      render(<Badge variant={variant} testId={`badge-${variant}`}>Test</Badge>);
      const element = screen.getByTestId(`badge-${variant}`);
      expect(element).toHaveClass(styles[variant]);
    });
  });
});