import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import styles from './Tooltip.module.css';

describe('Tooltip', () => {
  it('renders children correctly', () => {
    render(<Tooltip>Test content</Tooltip>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(
      <Tooltip variant="primary" testId="tooltip">
        Content
      </Tooltip>,
    );
    const element = screen.getByTestId('tooltip');
    expect(element).toHaveClass(styles.primary);
  });

  it('applies size classes correctly', () => {
    render(
      <Tooltip size="large" testId="tooltip">
        Content
      </Tooltip>,
    );
    const element = screen.getByTestId('tooltip');
    expect(element).toHaveClass(styles.large);
  });

  it('applies disabled state correctly', () => {
    render(
      <Tooltip disabled testId="tooltip">
        Content
      </Tooltip>,
    );
    const element = screen.getByTestId('tooltip');
    expect(element).toHaveClass(styles.disabled);
  });

  it('forwards additional props', () => {
    render(
      <Tooltip data-custom="test" testId="tooltip">
        Content
      </Tooltip>,
    );
    const element = screen.getByTestId('tooltip');
    expect(element).toHaveAttribute('data-custom', 'test');
  });

  it('applies custom className', () => {
    render(
      <Tooltip className="custom-class" testId="tooltip">
        Content
      </Tooltip>,
    );
    const element = screen.getByTestId('tooltip');
    expect(element).toHaveClass('custom-class');
  });
});
