import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders message', () => {
    render(<Alert message="Test alert" />);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Alert message="Title" description="Description text" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('shows close button when closable', () => {
    render(<Alert message="Test" closable />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(<Alert message="Test" closable onClose={onClose} />);

    await user.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('applies type classes', () => {
    render(<Alert message="Error" type="error" />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
