import { render, screen } from '@testing-library/react';
import { Empty } from './Empty';

describe('Empty', () => {
  it('renders with default description', () => {
    render(<Empty />);
    expect(screen.getByText('No data')).toBeInTheDocument();
  });

  it('renders with custom description', () => {
    render(<Empty description="No items found" />);
    expect(screen.getByText('No items found')).toBeInTheDocument();
  });

  it('renders without description when set to null', () => {
    render(<Empty description={null} />);
    expect(screen.queryByText('No data')).not.toBeInTheDocument();
  });

  it('renders custom image when provided as string', () => {
    render(<Empty image="https://example.com/image.png" />);
    const img = screen.getByAltText('Empty');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.png');
  });

  it('renders custom image when provided as ReactNode', () => {
    render(<Empty image={<div data-testid="custom-image">Custom</div>} />);
    expect(screen.getByTestId('custom-image')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Empty>
        <button>Create New</button>
      </Empty>
    );
    expect(screen.getByRole('button', { name: 'Create New' })).toBeInTheDocument();
  });

  it('renders simple image style', () => {
    const { container } = render(<Empty imageStyle="simple" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '64');
    expect(svg).toHaveAttribute('height', '64');
  });

  it('renders default image style', () => {
    const { container } = render(<Empty imageStyle="default" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '64');
    expect(svg).toHaveAttribute('height', '41');
  });

  it('applies custom className', () => {
    const { container } = render(<Empty className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('passes through HTML attributes', () => {
    render(<Empty data-testid="empty-component" />);
    expect(screen.getByTestId('empty-component')).toBeInTheDocument();
  });
});