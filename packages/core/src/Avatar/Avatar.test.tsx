import { fireEvent, render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import styles from './Avatar.module.css';

describe('Avatar', () => {
  it('renders with name initials', () => {
    render(<Avatar name="John Doe" testId="avatar" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with image', () => {
    render(<Avatar src="test.jpg" alt="Test avatar" testId="avatar" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveAttribute('alt', 'Test avatar');
  });

  it('renders fallback when no name or image', () => {
    render(<Avatar testId="avatar" />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    render(<Avatar name="Test" size="large" testId="avatar" />);
    const element = screen.getByTestId('avatar');
    expect(element).toHaveClass(styles.large);
  });

  it('applies custom className', () => {
    render(<Avatar name="Test" className="custom-class" testId="avatar" />);
    const element = screen.getByTestId('avatar');
    expect(element).toHaveClass('custom-class');
  });

  it('handles image error gracefully', async () => {
    render(<Avatar src="invalid.jpg" name="John Doe" testId="avatar" />);
    const img = screen.getByRole('img');

    // Simulate image error
    fireEvent.error(img);

    // Wait for state update and check for initials
    expect(await screen.findByText('JD')).toBeInTheDocument();
  });
});
