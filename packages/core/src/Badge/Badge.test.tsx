import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge testId="badge">Test Badge</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('Test Badge');
  });

  it('renders different variants', () => {
    render(
      <Badge variant="primary" testId="primary-badge">
        Primary
      </Badge>,
    );
    const badge = screen.getByTestId('primary-badge');
    expect(badge).toBeInTheDocument();
  });

  it('renders different sizes', () => {
    render(
      <Badge size="large" testId="large-badge">
        Large
      </Badge>,
    );
    const badge = screen.getByTestId('large-badge');
    expect(badge).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Badge className="custom-class" testId="custom-badge">
        Custom
      </Badge>,
    );
    const badge = screen.getByTestId('custom-badge');
    expect(badge).toHaveClass('custom-class');
  });
});
