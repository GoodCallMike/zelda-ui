import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi } from 'vitest';
import { ToastProvider, useToast } from './ToastManager';

// Mock the dependencies to avoid theme issues
vi.mock('../styles', () => ({
  cn: (...classes: any[]) => classes.filter(Boolean).join(' ')
}));

vi.mock('../Typography', () => ({
  Typography: ({ children, ...props }: any) => <div {...props}>{children}</div>
}));

vi.mock('../Button', () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>{children}</button>
  )
}));

vi.mock('@zelda/icons', () => ({
  XIcon: () => <span>X</span>,
  CheckCircleIcon: () => <span>✓</span>,
  AlertTriangleIcon: () => <span>⚠</span>,
  InfoCircleIcon: () => <span>ℹ</span>,
  XCircleIcon: () => <span>✗</span>,
}));

vi.mock('./Toast.module.css', () => ({
  default: {
    toast: 'toast',
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info',
    entering: 'entering',
    exiting: 'exiting',
    progressBar: 'progressBar',
    successProgress: 'successProgress',
    errorProgress: 'errorProgress',
    warningProgress: 'warningProgress',
    infoProgress: 'infoProgress',
  }
}));

describe('ToastProvider - Multiple Toast Behavior', () => {
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
    vi.clearAllTimers();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
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
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.queryByTestId('toast-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('toast-2')).toBeInTheDocument();

    // After 3 seconds total, toast-2 should also be dismissed
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.queryByTestId('toast-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('toast-2')).not.toBeInTheDocument();
  });
});