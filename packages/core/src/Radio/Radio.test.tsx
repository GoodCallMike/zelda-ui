import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('Radio', () => {
  it('renders with label', () => {
    render(<Radio label="Option 1" testId="radio" value="1" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Radio
        label="Option 1"
        testId="radio"
        value="1"
        onChange={handleChange}
      />,
    );

    const radio = screen.getByTestId('radio');
    await user.click(radio);
    expect(handleChange).toHaveBeenCalled();
  });

  it('works within RadioGroup', () => {
    render(
      <RadioGroup name="test-group" testId="group">
        <Radio label="Option 1" value="1" testId="radio-1" />
        <Radio label="Option 2" value="2" testId="radio-2" />
      </RadioGroup>,
    );

    expect(screen.getByTestId('radio-1')).toBeInTheDocument();
    expect(screen.getByTestId('radio-2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Radio className="custom-class" testId="radio" />);
    const radioContainer = screen.getByTestId('radio').closest('label');
    expect(radioContainer).toHaveClass('custom-class');
  });
});
