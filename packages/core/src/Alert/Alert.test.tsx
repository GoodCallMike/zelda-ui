import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders message correctly', () => {
    render(<Alert message="Test message" testId="test-alert" />);

    expect(screen.getByTestId('test-alert')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <Alert
        message="Test message"
        description="Test description"
        testId="test-alert"
      />,
    );

    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('applies correct type styling', () => {
    render(
      <Alert message="Success message" type="success" testId="success-alert" />,
    );

    const alert = screen.getByTestId('success-alert');
    expect(alert.className).toContain('success');
  });

  it('shows default icon by default', () => {
    render(<Alert message="Info message" type="info" testId="info-alert" />);

    const alert = screen.getByTestId('info-alert');
    expect(alert.querySelector('svg')).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    render(
      <Alert
        message="No icon message"
        showIcon={false}
        testId="no-icon-alert"
      />,
    );

    const alert = screen.getByTestId('no-icon-alert');
    expect(alert.querySelector('svg')).not.toBeInTheDocument();
  });

  it('renders custom icon when provided', () => {
    const CustomIcon = () => <div data-testid="custom-icon">Custom</div>;

    render(
      <Alert
        message="Custom icon message"
        icon={<CustomIcon />}
        testId="custom-icon-alert"
      />,
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('shows close button when closable', () => {
    render(
      <Alert message="Closable message" closable testId="closable-alert" />,
    );

    expect(
      screen.getByRole('button', { name: /close alert/i }),
    ).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    render(
      <Alert
        message="Closable message"
        closable
        onClose={onClose}
        testId="closable-alert"
      />,
    );

    await user.click(screen.getByRole('button', { name: /close alert/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders custom close text', () => {
    render(
      <Alert
        message="Custom close message"
        closable
        closeText="Dismiss"
        testId="custom-close-alert"
      />,
    );

    expect(screen.getByText('Dismiss')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Alert message="Accessible message" testId="accessible-alert" />);

    const alert = screen.getByTestId('accessible-alert');
    expect(alert).toHaveAttribute('role', 'alert');
  });

  it('applies custom className', () => {
    render(
      <Alert
        message="Custom class message"
        className="custom-class"
        testId="custom-class-alert"
      />,
    );

    const alert = screen.getByTestId('custom-class-alert');
    expect(alert).toHaveClass('custom-class');
  });
});
