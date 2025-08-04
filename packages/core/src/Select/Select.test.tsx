import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';
import type { SelectOption } from './Select';

const mockOptions: SelectOption[] = [
  { value: 'sword', label: 'Master Sword' },
  { value: 'bow', label: 'Bow of Light' },
  { value: 'shield', label: 'Hylian Shield' },
  { value: 'disabled', label: 'Disabled Option', disabled: true },
];

describe('Select', () => {
  it('renders with placeholder text', () => {
    render(<Select options={mockOptions} placeholder="Choose weapon" testId="select" />);
    
    expect(screen.getByTestId('select')).toBeInTheDocument();
    expect(screen.getByText('Choose weapon')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Select options={mockOptions} label="Weapon Type" testId="select" />);
    
    expect(screen.getByText('Weapon Type')).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(<Select options={mockOptions} label="Weapon" required testId="select" />);
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} testId="select" />);
    
    const select = screen.getByTestId('select');
    await user.click(select);
    
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByText('Master Sword')).toBeInTheDocument();
  });

  it('selects option when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Select options={mockOptions} onChange={handleChange} testId="select" />);
    
    const select = screen.getByTestId('select');
    await user.click(select);
    
    const option = screen.getByText('Master Sword');
    await user.click(option);
    
    expect(handleChange).toHaveBeenCalledWith('sword');
    expect(screen.getByText('Master Sword')).toBeInTheDocument();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} testId="select" />);
    
    const select = screen.getByTestId('select');
    select.focus();
    
    // Open with Enter
    await user.keyboard('{Enter}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    // Navigate with arrow keys
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    
    // Select with Enter
    await user.keyboard('{Enter}');
    
    await waitFor(() => {
      expect(screen.getByText('Bow of Light')).toBeInTheDocument();
    });
  });

  it('closes dropdown with Escape key', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} testId="select" />);
    
    const select = screen.getByTestId('select');
    await user.click(select);
    
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    await user.keyboard('{Escape}');
    
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Select options={mockOptions} testId="select" />
        <button>Outside</button>
      </div>
    );
    
    const select = screen.getByTestId('select');
    await user.click(select);
    
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    const outsideButton = screen.getByText('Outside');
    await user.click(outsideButton);
    
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('does not select disabled options', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Select options={mockOptions} onChange={handleChange} testId="select" />);
    
    const select = screen.getByTestId('select');
    await user.click(select);
    
    const disabledOption = screen.getByText('Disabled Option');
    await user.click(disabledOption);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Select options={mockOptions} variant="default" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
    
    rerender(<Select options={mockOptions} variant="filled" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
    
    rerender(<Select options={mockOptions} variant="borderless" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Select options={mockOptions} size="small" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
    
    rerender(<Select options={mockOptions} size="medium" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
    
    rerender(<Select options={mockOptions} size="large" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('renders with status states', () => {
    const { rerender } = render(<Select options={mockOptions} status="error" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
    
    rerender(<Select options={mockOptions} status="warning" testId="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} disabled testId="select" />);
    
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
    
    await user.click(select);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('works with controlled value', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Select options={mockOptions} value="sword" onChange={handleChange} testId="select" />);
    
    expect(screen.getByText('Master Sword')).toBeInTheDocument();
    
    const select = screen.getByTestId('select');
    await user.click(select);
    
    const option = screen.getByText('Bow of Light');
    await user.click(option);
    
    expect(handleChange).toHaveBeenCalledWith('bow');
  });

  it('works with default value', () => {
    render(<Select options={mockOptions} defaultValue="bow" testId="select" />);
    
    expect(screen.getByText('Bow of Light')).toBeInTheDocument();
  });

  it('has proper ARIA attributes', () => {
    render(<Select options={mockOptions} required testId="select" />);
    
    const select = screen.getByTestId('select');
    expect(select).toHaveAttribute('role', 'combobox');
    expect(select).toHaveAttribute('aria-expanded', 'false');
    expect(select).toHaveAttribute('aria-haspopup', 'listbox');
    expect(select).toHaveAttribute('aria-required', 'true');
  });
});