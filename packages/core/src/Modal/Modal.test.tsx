import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders when open is true', () => {
    render(
      <Modal open={true} title="Test Modal">
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    render(
      <Modal open={false} title="Test Modal">
        Modal content
      </Modal>
    );
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('calls onCancel when close button is clicked', async () => {
    const handleCancel = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Modal open={true} title="Test Modal" onCancel={handleCancel}>
        Modal content
      </Modal>
    );
    
    const closeButton = screen.getByLabelText('Close modal');
    await user.click(closeButton);
    
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onOk when OK button is clicked', async () => {
    const handleOk = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Modal open={true} title="Test Modal" onOk={handleOk}>
        Modal content
      </Modal>
    );
    
    const okButton = screen.getByText('OK');
    await user.click(okButton);
    
    expect(handleOk).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when Cancel button is clicked', async () => {
    const handleCancel = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Modal open={true} title="Test Modal" onCancel={handleCancel}>
        Modal content
      </Modal>
    );
    
    const cancelButton = screen.getByText('Cancel');
    await user.click(cancelButton);
    
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when Escape key is pressed', () => {
    const handleCancel = vi.fn();
    
    render(
      <Modal open={true} title="Test Modal" onCancel={handleCancel}>
        Modal content
      </Modal>
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  it('renders custom footer when provided', () => {
    const customFooter = <div>Custom Footer</div>;
    
    render(
      <Modal open={true} title="Test Modal" footer={customFooter}>
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('Custom Footer')).toBeInTheDocument();
    expect(screen.queryByText('OK')).not.toBeInTheDocument();
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });

  it('does not render footer when footer is null', () => {
    render(
      <Modal open={true} title="Test Modal" footer={null}>
        Modal content
      </Modal>
    );
    
    expect(screen.queryByText('OK')).not.toBeInTheDocument();
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });

  it('renders custom button text', () => {
    render(
      <Modal 
        open={true} 
        title="Test Modal" 
        okText="Confirm" 
        cancelText="Dismiss"
        onOk={() => {}}
        onCancel={() => {}}
      >
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Dismiss')).toBeInTheDocument();
  });

  it('shows loading state on OK button', () => {
    render(
      <Modal 
        open={true} 
        title="Test Modal" 
        confirmLoading={true}
        onOk={() => {}}
      >
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeDisabled();
  });

  it('does not show close button when closable is false', () => {
    render(
      <Modal open={true} title="Test Modal" closable={false}>
        Modal content
      </Modal>
    );
    
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  it('applies custom width', () => {
    render(
      <Modal open={true} title="Test Modal" width={800}>
        Modal content
      </Modal>
    );
    
    const modal = screen.getByText('Modal content').closest('[style*="width"]');
    expect(modal).toHaveStyle('width: 800px');
  });

  it('applies string width', () => {
    render(
      <Modal open={true} title="Test Modal" width="50%">
        Modal content
      </Modal>
    );
    
    const modal = screen.getByText('Modal content').closest('[style*="width"]');
    expect(modal).toHaveStyle('width: 50%');
  });

  it('renders without title', () => {
    render(
      <Modal open={true} onCancel={() => {}}>
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('Modal content')).toBeInTheDocument();
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('renders only OK button when onCancel is not provided', () => {
    render(
      <Modal open={true} title="Test Modal" onOk={() => {}}>
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('OK')).toBeInTheDocument();
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });

  it('renders only Cancel button when onOk is not provided', () => {
    render(
      <Modal open={true} title="Test Modal" onCancel={() => {}}>
        Modal content
      </Modal>
    );
    
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.queryByText('OK')).not.toBeInTheDocument();
  });

  it('prevents body scroll when open', () => {
    const { rerender } = render(
      <Modal open={true} title="Test Modal">
        Modal content
      </Modal>
    );
    
    expect(document.body.style.overflow).toBe('hidden');
    
    rerender(
      <Modal open={false} title="Test Modal">
        Modal content
      </Modal>
    );
    
    expect(document.body.style.overflow).toBe('');
  });
});