import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders with default props', () => {
    render(<Slider testId="slider" />);
    const slider = screen.getByTestId('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('role', 'slider');
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Slider testId="slider" defaultValue={50} onChange={handleChange} />,
    );

    const slider = screen.getByTestId('slider');
    slider.focus();
    await user.keyboard('{ArrowRight}');
    expect(handleChange).toHaveBeenCalledWith(51);
  });

  it('respects min and max values', () => {
    render(<Slider testId="slider" min={10} max={90} defaultValue={50} />);
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '10');
    expect(slider).toHaveAttribute('aria-valuemax', '90');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });

  it('handles disabled state', () => {
    render(<Slider testId="slider" disabled />);
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('aria-disabled', 'true');
    expect(slider).toHaveAttribute('tabIndex', '-1');
  });
});
