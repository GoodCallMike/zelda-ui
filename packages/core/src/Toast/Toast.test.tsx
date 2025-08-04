import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Toast } from './Toast';

// Mock createPortal to render in the same container
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (children: React.ReactNode) => children,
}));

describe('Toast', () => {
  const defaultProps = {
    message: 'Test toast message',
    testId: 'toast',
  };

  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders with default props', () => {
    render(<Toast {...defaultProps} />);
    expect(screen.getByText('Test toast message')).toBeInTheDocument();
    expect(screen.getByTestId('toast')).toBeInTheDocument();
  });

  it('renders different toast types', () => {
    const { rerender } = render(<Toast {...defaultProps} type="success" />);
    expect(screen.getByTestId('toast')).toHaveClass('success');

    rerender(<Toast {...defaultProps} type="error" />);
    expect(screen.getByTestId('toast')).toHaveClass('error');

    rerender(<Toast {...defaultProps} type="warning" />);
    expect(screen.getByTestId('toast')).toHaveClass('warning');

    rerender(<Toast {...defaultProps} type="info" />);
    expect(screen.getByTestId('toast')).toHaveClass('info');
  });

  it('renders appropriate icons for each type', () => {
    const { rerender } = render(<Toast {...defaultProps} type="success" />);
    expect(screen.getByTestId('toast')).toBeInTheDocument();

    rerender(<Toast {...defaultProps} type="error" />);
    expect(screen.getByTestId('toast')).toBeInTheDocument();

    rerender(<Toast {...defaultProps} type="warning" />);
    expect(screen.getByTestId('toast')).toBeInTheDocument();

    rerender(<Toast {...defaultProps} type="info" />);
    expect(screen.getByTestId('toast')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Toast {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByLabelText('Close notification');
    fireEvent.click(closeButton);
    
    expect(screen.getByTestId('toast')).toHaveClass('exiting');
    
    // Fast-forward the exit animation
    jest.advanceTimersByTime(300);
    
    expect(onClose).toHaveBeenCalled();
  });

  it('auto-dismisses after specified duration', async () => {
    const onClose = jest.fn();
    render(<Toast {...defaultProps} duration={2000} onClose={onClose} />);
    
    expect(screen.getByTestId('toast')).toBeInTheDocument();
    
    // Fast-forward past the duration
    jest.advanceTimersByTime(2000);
    
    expect(screen.getByTestId('toast')).toHaveClass('exiting');
    
    // Fast-forward the exit animation
    jest.advanceTimersByTime(300);
    
    expect(onClose).toHaveBeenCalled();
  });

  it('does not auto-dismiss when duration is 0', () => {
    const onClose = jest.fn();
    render(<Toast {...defaultProps} duration={0} onClose={onClose} />);
    
    expect(screen.getByTestId('toast')).toBeInTheDocument();
    
    // Fast-forward a long time
    jest.advanceTimersByTime(10000);
    
    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByTestId('toast')).not.toHaveClass('exiting');
  });

  it('does not render when visible is false', () => {
    render(<Toast {...defaultProps} visible={false} />);
    expect(screen.queryByTestId('toast')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Toast {...defaultProps} className="custom-toast" />);
    expect(screen.getByTestId('toast')).toHaveClass('custom-toast');
  });

  it('applies correct position classes', () => {
    const { rerender } = render(<Toast {...defaultProps} position="top-right" />);
    expect(screen.getByTestId('toast').parentElement).toHaveClass('topRight');

    rerender(<Toast {...defaultProps} position="bottom-left" />);
    expect(screen.getByTestId('toast').parentElement).toHaveClass('bottomLeft');

    rerender(<Toast {...defaultProps} position="top-center" />);
    expect(screen.getByTestId('toast').parentElement).toHaveClass('topCenter');
  });

  it('updates visibility when visible prop changes', () => {
    const { rerender } = render(<Toast {...defaultProps} visible={true} />);
    expect(screen.getByTestId('toast')).toBeInTheDocument();

    rerender(<Toast {...defaultProps} visible={false} />);
    expect(screen.queryByTestId('toast')).not.toBeInTheDocument();
  });

  it('resets exit state when becoming visible again', () => {
    const { rerender } = render(<Toast {...defaultProps} visible={true} />);
    expect(screen.getByTestId('toast')).toBeInTheDocument();
    expect(screen.getByTestId('toast')).not.toHaveClass('exiting');

    // Trigger close
    const closeButton = screen.getByLabelText('Close notification');
    fireEvent.click(closeButton);
    expect(screen.getByTestId('toast')).toHaveClass('exiting');

    // Make visible again before exit completes
    rerender(<Toast {...defaultProps} visible={true} />);
    expect(screen.getByTestId('toast')).not.toHaveClass('exiting');
  });
});