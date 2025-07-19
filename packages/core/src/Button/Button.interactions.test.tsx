import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { Save01Icon } from '@jetstream/icons';

describe('Button Interactions', () => {
  it('handles click events correctly', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard activation with Enter key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Press Enter</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    await user.keyboard('{Enter}');
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard activation with Space key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Press Space</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    await user.keyboard(' ');
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('maintains focus states correctly', async () => {
    const user = userEvent.setup();
    
    render(<Button>Focus Test</Button>);
    
    const button = screen.getByRole('button');
    
    // Test focus
    await user.tab();
    expect(button).toHaveFocus();
    
    // Test blur
    await user.tab();
    expect(button).not.toHaveFocus();
  });

  it('handles multiple rapid clicks', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Rapid Click</Button>);
    
    const button = screen.getByRole('button');
    
    // Simulate rapid clicking
    await user.click(button);
    await user.click(button);
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  it('handles hover states for interactive feedback', async () => {
    const user = userEvent.setup();
    
    render(<Button>Hover Test</Button>);
    
    const button = screen.getByRole('button');
    
    // Test hover
    await user.hover(button);
    expect(button).toHaveClass('jetstream-effect');
    
    // Test unhover
    await user.unhover(button);
    expect(button).toHaveClass('jetstream-effect'); // Class remains for CSS transitions
  });

  it('handles icon button interactions', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Button onClick={handleClick} icon={Save01Icon} aria-label="Save document">
        Save
      </Button>
    );
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('prevents default form submission when type is not submit', async () => {
    const handleSubmit = vi.fn((e) => e.preventDefault());
    const user = userEvent.setup();
    
    render(
      <form onSubmit={handleSubmit}>
        <Button type="button">Don't Submit</Button>
      </form>
    );
    
    await user.click(screen.getByRole('button'));
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});