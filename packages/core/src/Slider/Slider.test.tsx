import { fireEvent, render, screen } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider', () => {
  const defaultProps = {
    testId: 'slider',
  };

  it('renders with default props', () => {
    render(<Slider {...defaultProps} />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });

  it('renders with custom value', () => {
    render(<Slider {...defaultProps} value={75} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '75');
  });

  it('renders with custom range', () => {
    render(<Slider {...defaultProps} min={10} max={90} defaultValue={30} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '10');
    expect(slider).toHaveAttribute('aria-valuemax', '90');
    expect(slider).toHaveAttribute('aria-valuenow', '30');
  });

  it('handles keyboard navigation', () => {
    const onChange = jest.fn();
    render(<Slider {...defaultProps} defaultValue={50} onChange={onChange} />);
    const slider = screen.getByRole('slider');

    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledWith(51);

    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(onChange).toHaveBeenCalledWith(50); // Expect 50 since it's called from the updated value

    fireEvent.keyDown(slider, { key: 'Home' });
    expect(onChange).toHaveBeenCalledWith(0);

    fireEvent.keyDown(slider, { key: 'End' });
    expect(onChange).toHaveBeenCalledWith(100);
  });

  it('respects step value', () => {
    const onChange = jest.fn();
    render(
      <Slider
        {...defaultProps}
        defaultValue={50}
        step={5}
        onChange={onChange}
      />,
    );
    const slider = screen.getByRole('slider');

    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledWith(55);
  });

  it('handles disabled state', () => {
    const onChange = jest.fn();
    render(<Slider {...defaultProps} disabled onChange={onChange} />);
    const slider = screen.getByRole('slider');

    expect(slider).toHaveAttribute('aria-disabled', 'true');
    expect(slider).toHaveAttribute('tabIndex', '-1');

    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Slider {...defaultProps} className="custom-slider" />);
    expect(screen.getByTestId('slider')).toHaveClass('custom-slider');
  });

  it('clamps values to min/max range', () => {
    const onChange = jest.fn();
    render(
      <Slider
        {...defaultProps}
        min={10}
        max={90}
        defaultValue={90}
        onChange={onChange}
      />,
    );
    const slider = screen.getByRole('slider');

    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledWith(90); // Should not exceed max
  });

  it('handles controlled vs uncontrolled mode', () => {
    const { rerender } = render(<Slider {...defaultProps} defaultValue={30} />);
    let slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '30');

    // Switch to controlled
    rerender(<Slider {...defaultProps} value={70} />);
    slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '70');
  });
});
