import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const mockItems = [
    { key: '1', label: 'Edit', onClick: vi.fn() },
    { key: '2', label: 'Delete', onClick: vi.fn() },
  ];

  it('renders trigger element', () => {
    render(
      <Dropdown items={mockItems}>
        <button>Actions</button>
      </Dropdown>
    );
    
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('shows dropdown on click', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown items={mockItems}>
        <button>Actions</button>
      </Dropdown>
    );
    
    await user.click(screen.getByText('Actions'));
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('calls item onClick when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown items={mockItems}>
        <button>Actions</button>
      </Dropdown>
    );
    
    await user.click(screen.getByText('Actions'));
    await user.click(screen.getByText('Edit'));
    
    expect(mockItems[0].onClick).toHaveBeenCalled();
  });

  it('closes dropdown after item click', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown items={mockItems}>
        <button>Actions</button>
      </Dropdown>
    );
    
    await user.click(screen.getByText('Actions'));
    await user.click(screen.getByText('Edit'));
    
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
  });

  it('handles disabled items', async () => {
    const user = userEvent.setup();
    const disabledItems = [
      { key: '1', label: 'Edit', onClick: vi.fn(), disabled: true },
    ];
    
    render(
      <Dropdown items={disabledItems}>
        <button>Actions</button>
      </Dropdown>
    );
    
    await user.click(screen.getByText('Actions'));
    const editButton = screen.getByText('Edit');
    
    expect(editButton).toBeDisabled();
    await user.click(editButton);
    expect(disabledItems[0].onClick).not.toHaveBeenCalled();
  });

  it('shows dividers when specified', async () => {
    const user = userEvent.setup();
    const itemsWithDivider = [
      { key: '1', label: 'Edit', onClick: vi.fn(), divider: true },
      { key: '2', label: 'Delete', onClick: vi.fn() },
    ];
    
    render(
      <Dropdown items={itemsWithDivider}>
        <button>Actions</button>
      </Dropdown>
    );
    
    await user.click(screen.getByText('Actions'));
    const divider = document.querySelector('.border-t');
    expect(divider).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Dropdown items={mockItems}>
          <button>Actions</button>
        </Dropdown>
        <div>Outside</div>
      </div>
    );
    
    await user.click(screen.getByText('Actions'));
    expect(screen.getByText('Edit')).toBeInTheDocument();
    
    await user.click(screen.getByText('Outside'));
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
  });
});