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

  it('opens calendar when button is clicked', async () => {
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('closes calendar when clicking outside', async () => {
    const user = userEvent.setup();
    
    render(
      <div>
        <DatePicker label="Date" />
        <div data-testid="outside">Outside</div>
      </div>
    );
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(screen.getByRole('grid')).toBeInTheDocument();
    
    await user.click(screen.getByTestId('outside'));
    
    expect(screen.queryByRole('grid')).not.toBeInTheDocument();
  });

  it('selects date from calendar', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<DatePicker label="Date" onChange={handleChange} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    const dateButton = screen.getByText('15');
    await user.click(dateButton);
    
    expect(handleChange).toHaveBeenCalledWith(expect.any(Date));
  });
});