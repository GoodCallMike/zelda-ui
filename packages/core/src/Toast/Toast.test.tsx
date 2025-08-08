import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from './Toast';

describe('Toast', () => {
  it('renders with message', () => {
    render(<Toast message="Test message" testId="toast" />);
    const toast = screen.getByTestId('toast');
    expect(toast).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders different types', () => {
    render(<Toast message="Success" type="success" testId="success-toast" />);
    const toast = screen.getByTestId('success-toast');
    expect(toast).toBeInTheDocument();
  });

  it('handles close button click', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Toast message="Test" onClose={handleClose} testId="toast" />);

    const closeButton = screen.getByLabelText('Close notification');
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders action buttons', () => {
    const actions = [{ label: 'Undo', onClick: vi.fn() }];
    render(<Toast message="Test" actions={actions} testId="toast" />);

    expect(screen.getByText('Undo')).toBeInTheDocument();
  });
});
