import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card testId="card">Card content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('Card content');
  });

  it('renders different variants', () => {
    render(
      <Card variant="outlined" testId="outlined-card">
        Outlined
      </Card>,
    );
    const card = screen.getByTestId('outlined-card');
    expect(card).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-class" testId="custom-card">
        Custom
      </Card>,
    );
    const card = screen.getByTestId('custom-card');
    expect(card).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(
      <Card data-custom="test" testId="props-card">
        Props
      </Card>,
    );
    const card = screen.getByTestId('props-card');
    expect(card).toHaveAttribute('data-custom', 'test');
  });
});
