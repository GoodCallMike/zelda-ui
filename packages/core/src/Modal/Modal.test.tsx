import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders when open', () => {
    render(
      <Modal open onClose={vi.fn()} title="Test Modal">
        Modal content
      </Modal>,
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <Modal open={false} onClose={vi.fn()} title="Test Modal">
        Modal content
      </Modal>,
    );
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal open onClose={onClose} title="Test Modal">
        Content
      </Modal>,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it('handles escape key', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal open onClose={onClose} title="Test Modal">
        Content
      </Modal>,
    );

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
  });
});
