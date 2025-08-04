import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    children: <div>Modal content</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders when open', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<Modal {...defaultProps} open={false} />);
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('renders close button by default', () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('hides close button when closable is false', () => {
    render(<Modal {...defaultProps} title="Test Modal" closable={false} />);
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} title="Test Modal" />);
    
    fireEvent.click(screen.getByLabelText('Close modal'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked and maskClosable is true', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} testId="modal" />);
    
    const backdrop = screen.getByTestId('modal');
    fireEvent.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when backdrop is clicked and maskClosable is false', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} maskClosable={false} testId="modal" />);
    
    const backdrop = screen.getByTestId('modal');
    fireEvent.click(backdrop);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Modal {...defaultProps} size="small" testId="modal" />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    rerender(<Modal {...defaultProps} size="large" testId="modal" />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Modal {...defaultProps} className="custom-modal" testId="modal" />);
    expect(document.querySelector('.custom-modal')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  it('prevents body scroll when open', () => {
    const { unmount } = render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
    
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});