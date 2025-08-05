import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlusIcon, SearchLgIcon, Trash01Icon } from '@zelda/icons';
import { Button } from '../../packages/core/src/Button';

describe('Button testId Integration Tests', () => {
  describe('Basic testId functionality', () => {
    it('should render button with testId attribute', () => {
      render(<Button testId="test-button">Click me</Button>);

      const button = screen.getByTestId('test-button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-testid', 'test-button');
    });

    it('should query buttons by different testId patterns', () => {
      render(
        <div>
          <Button testId="btn-save-game" variant="primary">
            Save Game
          </Button>
          <Button testId="modal-close" variant="text">
            ×
          </Button>
          <Button testId="profile-settings-save" variant="default">
            Save Settings
          </Button>
        </div>,
      );

      // Test different naming conventions
      expect(screen.getByTestId('btn-save-game')).toBeInTheDocument();
      expect(screen.getByTestId('modal-close')).toBeInTheDocument();
      expect(screen.getByTestId('profile-settings-save')).toBeInTheDocument();
    });
  });

  describe('User interaction testing with testId', () => {
    it('should handle click interactions via testId', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Button testId="btn-click-test" onClick={handleClick}>
          Click Test
        </Button>,
      );

      const button = screen.getByTestId('btn-click-test');
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should handle keyboard activation via testId', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Button testId="btn-keyboard-test" onClick={handleClick}>
          Keyboard Test
        </Button>,
      );

      const button = screen.getByTestId('btn-keyboard-test');
      button.focus();

      // Test Enter key
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);

      // Test Space key
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(2);
    });

    it('should test disabled state via testId', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Button testId="btn-disabled-test" disabled onClick={handleClick}>
          Disabled Button
        </Button>,
      );

      const button = screen.getByTestId('btn-disabled-test');

      expect(button).toBeDisabled();

      // Clicking disabled button should not trigger handler
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should test loading state via testId', () => {
      render(
        <Button testId="btn-loading-test" loading>
          Loading Button
        </Button>,
      );

      const button = screen.getByTestId('btn-loading-test');

      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
    });
  });

  describe('Button variants testing with testId', () => {
    it('should test all button variants', () => {
      render(
        <div>
          <Button testId="btn-primary" variant="primary">
            Primary
          </Button>
          <Button testId="btn-default" variant="default">
            Default
          </Button>
          <Button testId="btn-dashed" variant="dashed">
            Dashed
          </Button>
          <Button testId="btn-text" variant="text">
            Text
          </Button>
          <Button testId="btn-link" variant="link">
            Link
          </Button>
          <Button testId="btn-destructive" variant="destructive">
            Destructive
          </Button>
        </div>,
      );

      // Verify all variants render correctly
      expect(screen.getByTestId('btn-primary')).toBeInTheDocument();
      expect(screen.getByTestId('btn-default')).toBeInTheDocument();
      expect(screen.getByTestId('btn-dashed')).toBeInTheDocument();
      expect(screen.getByTestId('btn-text')).toBeInTheDocument();
      expect(screen.getByTestId('btn-link')).toBeInTheDocument();
      expect(screen.getByTestId('btn-destructive')).toBeInTheDocument();
    });

    it('should test button types via testId', () => {
      render(
        <form>
          <Button testId="form-submit" type="submit">
            Submit
          </Button>
          <Button testId="form-reset" type="reset">
            Reset
          </Button>
          <Button testId="form-button" type="button">
            Button
          </Button>
        </form>,
      );

      expect(screen.getByTestId('form-submit')).toHaveAttribute(
        'type',
        'submit',
      );
      expect(screen.getByTestId('form-reset')).toHaveAttribute('type', 'reset');
      expect(screen.getByTestId('form-button')).toHaveAttribute(
        'type',
        'button',
      );
    });
  });

  describe('Icon button testing with testId', () => {
    it('should test icon buttons with text', () => {
      render(
        <div>
          <Button testId="btn-search-icon" icon={SearchLgIcon}>
            Search
          </Button>
          <Button testId="btn-add-icon" icon={PlusIcon}>
            Add Item
          </Button>
          <Button testId="btn-delete-icon" icon={Trash01Icon}>
            Delete
          </Button>
        </div>,
      );

      const searchBtn = screen.getByTestId('btn-search-icon');
      const addBtn = screen.getByTestId('btn-add-icon');
      const deleteBtn = screen.getByTestId('btn-delete-icon');

      // Verify button content includes text
      expect(searchBtn).toHaveTextContent('Search');
      expect(addBtn).toHaveTextContent('Add Item');
      expect(deleteBtn).toHaveTextContent('Delete');

      // Verify icons are present (rendered as SVG elements)
      expect(searchBtn.querySelector('svg')).toBeInTheDocument();
      expect(addBtn.querySelector('svg')).toBeInTheDocument();
      expect(deleteBtn.querySelector('svg')).toBeInTheDocument();
    });

    it('should test icon-only buttons with aria-label', () => {
      render(
        <div>
          <Button
            testId="btn-search-only"
            icon={SearchLgIcon}
            aria-label="Search through inventory"
          />
          <Button
            testId="btn-add-only"
            icon={PlusIcon}
            aria-label="Add new item"
          />
        </div>,
      );

      const searchBtn = screen.getByTestId('btn-search-only');
      const addBtn = screen.getByTestId('btn-add-only');

      // Test accessibility labels
      expect(searchBtn).toHaveAttribute(
        'aria-label',
        'Search through inventory',
      );
      expect(addBtn).toHaveAttribute('aria-label', 'Add new item');

      // Test accessible names
      expect(searchBtn).toHaveAccessibleName('Search through inventory');
      expect(addBtn).toHaveAccessibleName('Add new item');
    });
  });

  describe('ARIA attributes testing with testId', () => {
    it('should test expandable buttons', async () => {
      const user = userEvent.setup();
      let expanded = false;
      const handleClick = jest.fn(() => {
        expanded = !expanded;
      });

      const { rerender } = render(
        <Button
          testId="btn-expandable"
          onClick={handleClick}
          aria-expanded={expanded}
          aria-controls="menu-panel"
        >
          Menu {expanded ? '▲' : '▼'}
        </Button>,
      );

      const button = screen.getByTestId('btn-expandable');

      // Test initial state
      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveAttribute('aria-controls', 'menu-panel');

      // Test expansion
      await user.click(button);
      expect(handleClick).toHaveBeenCalled();

      // Re-render with updated state
      rerender(
        <Button
          testId="btn-expandable"
          onClick={handleClick}
          aria-expanded={expanded}
          aria-controls="menu-panel"
        >
          Menu {expanded ? '▲' : '▼'}
        </Button>,
      );

      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('should test toggle buttons', async () => {
      const user = userEvent.setup();
      let pressed = false;
      const handleToggle = jest.fn(() => {
        pressed = !pressed;
      });

      const { rerender } = render(
        <Button
          testId="btn-toggle"
          onClick={handleToggle}
          aria-pressed={pressed}
        >
          Feature {pressed ? 'On' : 'Off'}
        </Button>,
      );

      const button = screen.getByTestId('btn-toggle');

      // Test initial state
      expect(button).toHaveAttribute('aria-pressed', 'false');

      // Test toggle
      await user.click(button);
      expect(handleToggle).toHaveBeenCalled();

      // Re-render with updated state
      rerender(
        <Button
          testId="btn-toggle"
          onClick={handleToggle}
          aria-pressed={pressed}
        >
          Feature {pressed ? 'On' : 'Off'}
        </Button>,
      );

      expect(button).toHaveAttribute('aria-pressed', 'true');
    });
  });

  describe('Integration scenarios with testId', () => {
    it('should test game menu navigation flow', async () => {
      const user = userEvent.setup();
      const mockNavigate = jest.fn();
      const mockShowModal = jest.fn();

      const GameMenu = () => (
        <div>
          <Button
            testId="game-menu-new-game"
            onClick={() => mockNavigate('/new-game')}
          >
            New Game
          </Button>
          <Button
            testId="game-menu-continue"
            onClick={() => mockNavigate('/continue')}
          >
            Continue
          </Button>
          <Button
            testId="game-menu-settings"
            onClick={() => mockShowModal('settings')}
          >
            Settings
          </Button>
          <Button
            testId="game-menu-quit"
            onClick={() => mockShowModal('quit-confirm')}
            variant="destructive"
          >
            Quit
          </Button>
        </div>
      );

      render(<GameMenu />);

      // Test new game navigation
      const newGameBtn = screen.getByTestId('game-menu-new-game');
      await user.click(newGameBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/new-game');

      // Test continue navigation
      const continueBtn = screen.getByTestId('game-menu-continue');
      await user.click(continueBtn);
      expect(mockNavigate).toHaveBeenCalledWith('/continue');

      // Test settings modal
      const settingsBtn = screen.getByTestId('game-menu-settings');
      await user.click(settingsBtn);
      expect(mockShowModal).toHaveBeenCalledWith('settings');

      // Test quit confirmation
      const quitBtn = screen.getByTestId('game-menu-quit');
      await user.click(quitBtn);
      expect(mockShowModal).toHaveBeenCalledWith('quit-confirm');
    });

    it('should test modal dialog interactions', async () => {
      const user = userEvent.setup();
      const onConfirm = jest.fn();
      const onCancel = jest.fn();
      const onClose = jest.fn();

      const ConfirmationModal = () => (
        <div role="dialog" aria-modal="true">
          <h2>Confirm Action</h2>
          <p>Are you sure you want to delete this save file?</p>
          <div>
            <Button
              testId="modal-confirm-action"
              variant="destructive"
              onClick={onConfirm}
            >
              Yes, Delete
            </Button>
            <Button
              testId="modal-cancel-action"
              variant="default"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              testId="modal-close-x"
              variant="text"
              onClick={onClose}
              aria-label="Close dialog"
            >
              ×
            </Button>
          </div>
        </div>
      );

      render(<ConfirmationModal />);

      // Test confirm action
      const confirmBtn = screen.getByTestId('modal-confirm-action');
      await user.click(confirmBtn);
      expect(onConfirm).toHaveBeenCalledTimes(1);

      // Test cancel action
      const cancelBtn = screen.getByTestId('modal-cancel-action');
      await user.click(cancelBtn);
      expect(onCancel).toHaveBeenCalledTimes(1);

      // Test close action
      const closeBtn = screen.getByTestId('modal-close-x');
      await user.click(closeBtn);
      expect(onClose).toHaveBeenCalledTimes(1);

      // Test accessibility
      expect(closeBtn).toHaveAttribute('aria-label', 'Close dialog');
      expect(closeBtn).toHaveAccessibleName('Close dialog');
    });

    it('should test form submission workflow', async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn();
      const onReset = jest.fn();
      const onCancel = jest.fn();

      const FormComponent = () => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input name="username" placeholder="Username" />
          <input name="email" type="email" placeholder="Email" />

          <div>
            <Button testId="form-submit-btn" type="submit">
              Submit Form
            </Button>
            <Button testId="form-reset-btn" type="reset" onClick={onReset}>
              Reset Form
            </Button>
            <Button testId="form-cancel-btn" type="button" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      );

      render(<FormComponent />);

      const submitBtn = screen.getByTestId('form-submit-btn');
      const resetBtn = screen.getByTestId('form-reset-btn');
      const cancelBtn = screen.getByTestId('form-cancel-btn');

      // Test button types
      expect(submitBtn).toHaveAttribute('type', 'submit');
      expect(resetBtn).toHaveAttribute('type', 'reset');
      expect(cancelBtn).toHaveAttribute('type', 'button');

      // Test form submission
      await user.click(submitBtn);
      expect(onSubmit).toHaveBeenCalledTimes(1);

      // Test reset
      await user.click(resetBtn);
      expect(onReset).toHaveBeenCalledTimes(1);

      // Test cancel
      await user.click(cancelBtn);
      expect(onCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility compliance with testId', () => {
    it('should maintain accessibility when using testId', () => {
      render(
        <div>
          <Button testId="accessible-button">Accessible Button</Button>
          <Button testId="labeled-button" aria-label="Custom accessible name">
            Visual Text
          </Button>
          <Button testId="described-button" aria-describedby="btn-description">
            Described Button
          </Button>
          <div id="btn-description">Additional context for the button</div>
        </div>,
      );

      const accessibleBtn = screen.getByTestId('accessible-button');
      const labeledBtn = screen.getByTestId('labeled-button');
      const describedBtn = screen.getByTestId('described-button');

      // Test semantic roles
      expect(accessibleBtn).toHaveRole('button');
      expect(labeledBtn).toHaveRole('button');
      expect(describedBtn).toHaveRole('button');

      // Test accessible names
      expect(accessibleBtn).toHaveAccessibleName('Accessible Button');
      expect(labeledBtn).toHaveAccessibleName('Custom accessible name');
      expect(describedBtn).toHaveAccessibleName('Described Button');

      // Test descriptions
      expect(describedBtn).toHaveAttribute(
        'aria-describedby',
        'btn-description',
      );
      expect(describedBtn).toHaveAccessibleDescription(
        'Additional context for the button',
      );
    });

    it('should support keyboard navigation with testId', async () => {
      const user = userEvent.setup();

      render(
        <div>
          <Button testId="first-button">First</Button>
          <Button testId="second-button">Second</Button>
          <Button testId="third-button" disabled>
            Third (Disabled)
          </Button>
          <Button testId="fourth-button">Fourth</Button>
        </div>,
      );

      const firstBtn = screen.getByTestId('first-button');
      const secondBtn = screen.getByTestId('second-button');
      const thirdBtn = screen.getByTestId('third-button');
      const fourthBtn = screen.getByTestId('fourth-button');

      // Test tab navigation
      await user.tab();
      expect(firstBtn).toHaveFocus();

      await user.tab();
      expect(secondBtn).toHaveFocus();

      // Disabled button should be skipped
      await user.tab();
      expect(fourthBtn).toHaveFocus();
      expect(thirdBtn).not.toHaveFocus();

      // Test reverse tab navigation
      await user.tab({ shift: true });
      expect(secondBtn).toHaveFocus();
    });
  });
});
