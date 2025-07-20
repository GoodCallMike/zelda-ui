import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('renders extra content in header', () => {
    render(<Card title="Title" extra="Extra">Content</Card>);
    expect(screen.getByText('Extra')).toBeInTheDocument();
  });

  it('renders cover image', () => {
    render(
      <Card cover={<img src="test.jpg" alt="Cover" />}>
        Content
      </Card>
    );
    expect(screen.getByAltText('Cover')).toBeInTheDocument();
  });

  it('renders actions at bottom', () => {
    const actions = [
      <button key="1">Action 1</button>,
      <button key="2">Action 2</button>
    ];
    render(<Card actions={actions}>Content</Card>);
    expect(screen.getByText('Action 1')).toBeInTheDocument();
    expect(screen.getByText('Action 2')).toBeInTheDocument();
  });

  it('applies hoverable styles', () => {
    render(<Card hoverable>Content</Card>);
    const card = screen.getByText('Content').closest('div');
    expect(card).toHaveClass('hover:shadow-md', 'cursor-pointer');
  });

  it('applies bordered styles by default', () => {
    render(<Card>Content</Card>);
    const card = screen.getByText('Content').closest('div');
    expect(card).toHaveClass('border');
  });

  it('removes border when bordered is false', () => {
    render(<Card bordered={false}>Content</Card>);
    const card = screen.getByText('Content').closest('div');
    expect(card).not.toHaveClass('border');
  });

  it('shows loading skeleton when loading', () => {
    render(<Card loading>Content</Card>);
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
    // Check for skeleton elements
    expect(document.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('applies small size classes', () => {
    render(<Card size="small" title="Title">Content</Card>);
    const header = screen.getByText('Title').closest('div');
    expect(header).toHaveClass('px-3', 'py-2');
  });

  it('handles click events when hoverable', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Card hoverable onClick={handleClick}>Content</Card>);
    
    await user.click(screen.getByText('Content').closest('div')!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  describe('Card.Meta', () => {
    it('renders avatar, title, and description', () => {
      render(
        <Card>
          <Card.Meta
            avatar={<div>Avatar</div>}
            title="Meta Title"
            description="Meta Description"
          />
        </Card>
      );
      
      expect(screen.getByText('Avatar')).toBeInTheDocument();
      expect(screen.getByText('Meta Title')).toBeInTheDocument();
      expect(screen.getByText('Meta Description')).toBeInTheDocument();
    });

    it('renders without avatar', () => {
      render(
        <Card>
          <Card.Meta
            title="Meta Title"
            description="Meta Description"
          />
        </Card>
      );
      
      expect(screen.getByText('Meta Title')).toBeInTheDocument();
      expect(screen.getByText('Meta Description')).toBeInTheDocument();
    });

    it('renders with only title', () => {
      render(
        <Card>
          <Card.Meta title="Meta Title" />
        </Card>
      );
      
      expect(screen.getByText('Meta Title')).toBeInTheDocument();
    });
  });
});