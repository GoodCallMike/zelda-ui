import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

// Mock the styles to avoid vanilla-extract issues in tests
vi.mock('../styles', () => ({
  cn: (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' '),
  useClickOutside: (callback: () => void) => ({ current: null }),
}));

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select', () => {
  it('renders with placeholder', () => {
    render(<Select options={mockOptions} placeholder="Select an option" />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-label', 'Select dropdown');
  });

  it('renders with aria-label', () => {
    render(<Select options={mockOptions} aria-label="Custom select" />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-label', 'Custom select');
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} />);
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    expect(select).toHaveAttribute('aria-expanded', 'true');
  });

  it('handles option selection', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Select options={mockOptions} onChange={handleChange} />);
    
    const select = screen.getByRole('combobox');
    await user.click(select);
    
    const option = screen.getByText('Option 1');
    await user.click(option);
    
    expect(handleChange).toHaveBeenCalledWith('option1', mockOptions[0]);
  });

  it('supports multiple selection', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Select options={mockOptions} mode="multiple" onChange={handleChange} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-label', 'Multi-select dropdown');
    
    await user.click(select);
    const option = screen.getByText('Option 1');
    await user.click(option);
    
    expect(handleChange).toHaveBeenCalledWith(['option1'], [mockOptions[0]]);
  });

  it('applies disabled state', () => {
    render(<Select options={mockOptions} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('applies focus ring classes', () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('focus:ring-2', 'focus:border-blue-500');
  });
});