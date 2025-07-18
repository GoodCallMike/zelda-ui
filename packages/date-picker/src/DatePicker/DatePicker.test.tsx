import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders with label', () => {
    render(<DatePicker label="Birth Date" />);
    expect(screen.getByLabelText('Birth Date')).toBeInTheDocument();
  });

  it('calls onChange with parsed date', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<DatePicker label="Date" onChange={handleChange} />);
    
    const input = screen.getByLabelText('Date');
    await user.type(input, '12/25/2023');
    
    expect(handleChange).toHaveBeenCalledWith(expect.any(Date));
  });

  it('calls onChange with null for empty input', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<DatePicker label="Date" onChange={handleChange} />);
    
    const input = screen.getByLabelText('Date');
    await user.type(input, '12/25/2023');
    await user.clear(input);
    
    expect(handleChange).toHaveBeenLastCalledWith(null);
  });

  it('displays formatted date value', () => {
    const date = new Date(2023, 11, 25); // December 25, 2023
    
    render(<DatePicker label="Date" value={date} />);
    
    const input = screen.getByDisplayValue('12/25/2023');
    expect(input).toBeInTheDocument();
  });
});