import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Toast } from './Toast';
import { ToastContainer } from './ToastContainer';
import { ToastProvider, useToast } from './ToastManager';

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

  it('renders different toast types with correct classes', () => {
    const { rerender } = render(<Toast {...defaultProps} type="success" />);
    expect(screen.getByTestId('toast')).toHaveClass('success');

    rerender(<Toast {...defaultProps} type="error" />);
    expect(screen.getByTestId('toast')).toHaveClass('error');

    rerender(<Toast {...defaultProps} type="warning" />);
    expect(screen.getByTestId('toast')).toHaveClass('warning');

    rerender(<Toast {...defaultProps} type="info" />);
    expect(screen.getByTestId('toast')).toHaveClass('info');
  });

  it('shows progress bar when duration > 0', () => {
    render(<Toast {...defaultProps} duration={5000} />);
    const progressBar = screen.getByTestId('toast').querySelector('[class*="progressBar"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('hides progress bar when duration is 0', () => {
    render(<Toast {...defaultProps} duration={0} />);
    const progressBar = screen.getByTestId('toast').querySelector('[class*="progressBar"]');
    expect(progressBar).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Toast {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByLabelText('Close notification');
    fireEvent.click(closeButton);
    
    expect(screen.getByTestId('toast')).toHaveClass('exiting');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('auto-dismisses after specified duration', () => {
    const onClose = jest.fn();
    render(<Toast {...defaultProps} duration={2000} onClose={onClose} />);
    
    expect(screen.getByTestId('toast')).toBeInTheDocument();
    expect(onClose).not.toHaveBeenCalled();
    
    // Fast-forward past the duration
    jest.advanceTimersByTime(2000);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not auto-dismiss when duration is 0', () => {
    const onClose = jest.fn();
    render(<Toast {...defaultProps} duration={0} onClose={onClose} />);
    
    // Fast-forward a long time
    jest.advanceTimersByTime(10000);
    
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not render when visible is false', () => {
    render(<Toast {...defaultProps} visible={false} />);
    expect(screen.queryByTestId('toast')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Toast {...defaultProps} className="custom-toast" />);
    expect(screen.getByTestId('toast')).toHaveClass('custom-toast');
  });

  it('shows entering animation initially', () => {
    render(<Toast {...defaultProps} />);
    expect(screen.getByTestId('toast')).toHaveClass('entering');
    
    // After enter animation completes
    jest.advanceTimersByTime(100);
    expect(screen.getByTestId('toast')).not.toHaveClass('entering');
  });

  it('clears timer when component unmounts', () => {
    const onClose = jest.fn();
    const { unmount } = render(<Toast {...defaultProps} duration={2000} onClose={onClose} />);
    
    // Unmount before timer expires
    unmount();
    
    // Fast-forward past the duration
    jest.advanceTimersByTime(2000);
    
    // onClose should not be called since component was unmounted
    expect(onClose).not.toHaveBeenCalled();
  });

  it('resets timer when duration changes', () => {
    const onClose = jest.fn();
    const { rerender } = render(<Toast {...defaultProps} duration={2000} onClose={onClose} />);
    
    // Fast-forward halfway
    jest.advanceTimersByTime(1000);
    
    // Change duration
    rerender(<Toast {...defaultProps} duration={4000} onClose={onClose} />);
    
    // Fast-forward original remaining time
    jest.advanceTimersByTime(1000);
    
    // Should not have called onClose yet
    expect(onClose).not.toHaveBeenCalled();
    
    // Fast-forward new duration
    jest.advanceTimersByTime(4000);
    
    // Now should be called
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('ToastContainer', () => {
  it('renders children in correct position', () => {
    render(
      <ToastContainer position="top-right">
        <div data-testid="child">Test child</div>
      </ToastContainer>
    );
    
    const container = screen.getByTestId('child').parentElement;
    expect(container).toHaveClass('top-0', 'right-0', 'flex-col');
  });

  it('applies correct classes for different positions', () => {
    const { rerender } = render(
      <ToastContainer position="bottom-left">
        <div data-testid="child">Test</div>
      </ToastContainer>
    );
    
    let container = screen.getByTestId('child').parentElement;
    expect(container).toHaveClass('bottom-0', 'left-0', 'flex-col-reverse');
    
    rerender(
      <ToastContainer position="top-center">
        <div data-testid="child">Test</div>
      </ToastContainer>
    );
    
    container = screen.getByTestId('child').parentElement;
    expect(container).toHaveClass('top-0', 'left-1/2', '-translate-x-1/2', 'flex-col');
  });

  it('renders multiple children with proper spacing', () => {
    render(
      <ToastContainer position="top-right">
        <div data-testid="child1">Child 1</div>
        <div data-testid="child2">Child 2</div>
      </ToastContainer>
    );
    
    const container = screen.getByTestId('child1').parentElement;
    expect(container).toHaveClass('gap-3');
    expect(screen.getByTestId('child1')).toBeInTheDocument();
    expect(screen.getByTestId('child2')).toBeInTheDocument();
  });
});

describe('ToastProvider', () => {
  const TestComponent = () => {
    const { showToast } = useToast();
    
    return (
      <div>
        <button 
          onClick={() => showToast({ message: 'Toast 1', duration: 1000, testId: 'toast-1' })}
          data-testid="show-toast-1"
        >
          Show Toast 1 (1s)
        </button>
        <button 
          onClick={() => showToast({ message: 'Toast 2', duration: 3000, testId: 'toast-2' })}
          data-testid="show-toast-2"
        >
          Show Toast 2 (3s)
        </button>
      </div>
    );
  };

  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('dismisses multiple toasts independently based on their durations', () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    // Show both toasts
    fireEvent.click(screen.getByTestId('show-toast-1'));
    fireEvent.click(screen.getByTestId('show-toast-2'));

    // Both toasts should be visible
    expect(screen.getByTestId('toast-1')).toBeInTheDocument();
    expect(screen.getByTestId('toast-2')).toBeInTheDocument();

    // After 1 second, only toast-1 should be dismissed
    jest.advanceTimersByTime(1000);
    expect(screen.queryByTestId('toast-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('toast-2')).toBeInTheDocument();

    // After 3 seconds total, toast-2 should also be dismissed
    jest.advanceTimersByTime(2000);
    expect(screen.queryByTestId('toast-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('toast-2')).not.toBeInTheDocument();
  });
});