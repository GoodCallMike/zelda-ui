import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-yellow-500', 'text-blue-900');
  });

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-200', 'text-gray-900');
  });

  it('handles press events', async () => {
    const handlePress = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onPress={handlePress}>Press me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('applies disabled styles when disabled', () => {
    render(<Button isDisabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('opacity-50');
    expect(button).toBeDisabled();
  });

  it('includes jetstream effect class', () => {
    render(<Button>Jetstream</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('jetstream-effect');
  });
});