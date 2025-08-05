import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';
import styles from './Tooltip.module.css';

describe('Tooltip', () => {
  it('renders children correctly', () => {
    render(
      <Tooltip content="Tooltip text">
        <button type="button">Trigger</button>
      </Tooltip>,
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" testId="tooltip">
        <button type="button">Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText('Trigger');
    await user.hover(trigger);

    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip')).toBeInTheDocument();
  });

  it('hides tooltip on mouse leave', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" testId="tooltip">
        <button type="button">Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText('Trigger');
    await user.hover(trigger);
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();

    await user.unhover(trigger);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });

  it('applies position classes correctly', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" position="bottom" testId="tooltip">
        <button type="button">Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText('Trigger');
    await user.hover(trigger);

    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toHaveClass(styles.bottom);
  });

  it('has proper accessibility attributes', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" testId="tooltip">
        <button type="button">Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText('Trigger');
    await user.hover(trigger);

    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toHaveAttribute('role', 'tooltip');
  });

  it('supports all positions', async () => {
    const user = userEvent.setup();
    const positions = ['top', 'bottom', 'left', 'right'] as const;

    for (const position of positions) {
      render(
        <Tooltip
          content="Test"
          position={position}
          testId={`tooltip-${position}`}
        >
          <button type="button">Trigger {position}</button>
        </Tooltip>,
      );

      const trigger = screen.getByText(`Trigger ${position}`);
      await user.hover(trigger);

      const tooltip = screen.getByTestId(`tooltip-${position}`);
      expect(tooltip).toHaveClass(styles[position]);

      await user.unhover(trigger);
    }
  });
});
