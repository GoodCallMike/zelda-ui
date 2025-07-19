import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { SplitButton } from './SplitButton';

const mockActions = [
  { label: 'Action 1', onClick: vi.fn() },
  { label: 'Action 2', onClick: vi.fn() },
];

describe('SplitButton', () => {
  it('renders primary button with text', () => {
    const handleClick = vi.fn();
    render(<SplitButton onClick={handleClick} actions={mockActions}>Save</SplitButton>);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('calls primary onClick when main button is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<SplitButton onClick={handleClick} actions={mockActions}>Save</SplitButton>);
    
    await user.click(screen.getByText('Save'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('opens dropdown when dropdown button is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<SplitButton onClick={handleClick} actions={mockActions}>Save</SplitButton>);
    
    await user.click(screen.getByRole('button', { expanded: false }));
    expect(screen.getByText('Action 1')).toBeInTheDocument();
    expect(screen.getByText('Action 2')).toBeInTheDocument();
  });

  it('calls action onClick when dropdown item is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<SplitButton onClick={handleClick} actions={mockActions}>Save</SplitButton>);
    
    await user.click(screen.getByRole('button', { expanded: false }));
    await user.click(screen.getByText('Action 1'));
    
    expect(mockActions[0].onClick).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    const handleClick = vi.fn();
    render(<SplitButton onClick={handleClick} actions={mockActions} disabled>Save</SplitButton>);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });

  it('applies secondary variant styles', () => {
    const handleClick = vi.fn();
    render(<SplitButton onClick={handleClick} actions={mockActions} variant="secondary">Save</SplitButton>);
    
    const mainButton = screen.getByText('Save');
    expect(mainButton).toHaveClass('bg-white');
  });

  it('applies correct size classes', () => {
    const handleClick = vi.fn();
    render(<SplitButton onClick={handleClick} actions={mockActions} size="sm">Save</SplitButton>);
    
    const mainButton = screen.getByText('Save');
    expect(mainButton).toHaveClass('px-3', 'py-1.5');
  });
});