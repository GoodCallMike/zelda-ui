import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders children', () => {
    render(
      <Tooltip content="Tooltip text" testId="tooltip">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" testId="tooltip">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    expect(screen.getByTestId('tooltip')).toBeInTheDocument();
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  it('hides tooltip on mouse leave', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" testId="tooltip">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);
    expect(screen.getByTestId('tooltip')).toBeInTheDocument();

    await user.unhover(button);
    expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();
  });

  it('has correct accessibility attributes', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" testId="tooltip">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText('Hover me');
    await user.hover(button);

    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toHaveAttribute('role', 'tooltip');
  });
});
