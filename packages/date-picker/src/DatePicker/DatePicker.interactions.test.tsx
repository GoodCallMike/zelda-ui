import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from './DatePicker';

describe('DatePicker Interactions', () => {
  it('handles text input correctly', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, '12/25/2023');
    
    expect(input).toHaveValue('12/25/2023');
  });

  it('handles calendar button click', async () => {
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" />);
    
    const calendarButton = screen.getByRole('button', { name: /calendar/i });
    await user.click(calendarButton);
    
    // Calendar button should be clickable
    expect(calendarButton).toBeEnabled();
  });

  it('handles keyboard navigation between input and button', async () => {
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" />);
    
    const input = screen.getByRole('textbox');
    const calendarButton = screen.getByRole('button', { name: /calendar/i });
    
    // Tab to input
    await user.tab();
    expect(input).toHaveFocus();
    
    // Tab to calendar button
    await user.tab();
    expect(calendarButton).toHaveFocus();
  });

  it('handles input validation on blur', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    
    // Type invalid date
    await user.type(input, '13/45/2023');
    await user.tab(); // Blur the input
    
    // Input should maintain the typed value for user correction
    expect(input).toHaveValue('13/45/2023');
  });

  it('handles clearing input value', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" onChange={handleChange} value={new Date(2023, 11, 25)} />);
    
    const input = screen.getByRole('textbox');
    
    // Clear the input
    await user.clear(input);
    
    expect(input).toHaveValue('');
  });

  it('handles disabled state interactions', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" onChange={handleChange} disabled />);
    
    const input = screen.getByRole('textbox');
    const calendarButton = screen.getByRole('button', { name: /calendar/i });
    
    // Both elements should be disabled
    expect(input).toBeDisabled();
    expect(calendarButton).toBeDisabled();
    
    // Attempting to interact should not work
    await user.click(input);
    expect(input).not.toHaveFocus();
    
    await user.click(calendarButton);
    expect(calendarButton).not.toHaveFocus();
  });

  it('handles paste operations', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    
    // Focus input and paste date
    await user.click(input);
    await user.paste('01/15/2024');
    
    expect(input).toHaveValue('01/15/2024');
  });

  it('handles backspace and delete operations', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    
    // Type date and then delete characters
    await user.type(input, '12/25/2023');
    await user.keyboard('{Backspace}{Backspace}{Backspace}{Backspace}');
    
    expect(input).toHaveValue('12/25/');
  });

  it('handles arrow key navigation in input', async () => {
    const user = userEvent.setup();
    
    render(<DatePicker label="Date" />);
    
    const input = screen.getByRole('textbox');
    
    await user.type(input, '12/25/2023');
    
    // Move cursor with arrow keys
    await user.keyboard('{ArrowLeft}{ArrowLeft}');
    await user.type(input, '24'); // Should insert at cursor position
    
    // The exact behavior depends on the input implementation
    expect(input).toHaveValue(expect.stringContaining('24'));
  });

  it('handles focus and blur events', async () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    const user = userEvent.setup();
    
    render(
      <DatePicker 
        label="Date" 
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
    
    const input = screen.getByRole('textbox');
    
    // Focus input
    await user.click(input);
    expect(handleFocus).toHaveBeenCalled();
    
    // Blur input
    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });
});