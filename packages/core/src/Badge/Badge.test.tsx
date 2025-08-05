import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';
import styles from './Badge.module.css';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Test content</Badge>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(
      <Badge variant="primary" testId="badge">
        Content
      </Badge>,
    );
    const element = screen.getByTestId('badge');
    expect(element).toHaveClass(styles.primary);
  });

  it('applies size classes correctly', () => {
    render(
      <Badge size="large" testId="badge">
        Content
      </Badge>,
    );
    const element = screen.getByTestId('badge');
    expect(element).toHaveClass(styles.large);
  });

  it('applies disabled state correctly', () => {
    render(
      <Badge disabled testId="badge">
        Content
      </Badge>,
    );
    const element = screen.getByTestId('badge');
    expect(element).toHaveClass(styles.disabled);
  });

  it('forwards additional props', () => {
    render(
      <Badge data-custom="test" testId="badge">
        Content
      </Badge>,
    );
    const element = screen.getByTestId('badge');
    expect(element).toHaveAttribute('data-custom', 'test');
  });

  it('applies custom className', () => {
    render(
      <Badge className="custom-class" testId="badge">
        Content
      </Badge>,
    );
    const element = screen.getByTestId('badge');
    expect(element).toHaveClass('custom-class');
  });
});
