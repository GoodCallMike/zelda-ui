import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import styles from './Avatar.module.css';

describe('Avatar', () => {
  it('renders children correctly', () => {
    render(<Avatar>Test content</Avatar>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(
      <Avatar variant="primary" testId="avatar">
        Content
      </Avatar>,
    );
    const element = screen.getByTestId('avatar');
    expect(element).toHaveClass(styles.primary);
  });

  it('applies size classes correctly', () => {
    render(
      <Avatar size="large" testId="avatar">
        Content
      </Avatar>,
    );
    const element = screen.getByTestId('avatar');
    expect(element).toHaveClass(styles.large);
  });

  it('applies disabled state correctly', () => {
    render(
      <Avatar disabled testId="avatar">
        Content
      </Avatar>,
    );
    const element = screen.getByTestId('avatar');
    expect(element).toHaveClass(styles.disabled);
  });

  it('forwards additional props', () => {
    render(
      <Avatar data-custom="test" testId="avatar">
        Content
      </Avatar>,
    );
    const element = screen.getByTestId('avatar');
    expect(element).toHaveAttribute('data-custom', 'test');
  });

  it('applies custom className', () => {
    render(
      <Avatar className="custom-class" testId="avatar">
        Content
      </Avatar>,
    );
    const element = screen.getByTestId('avatar');
    expect(element).toHaveClass('custom-class');
  });
});
