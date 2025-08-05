import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mail01Icon, SearchLgIcon, User01Icon } from '@zelda/icons';
import { Button } from '../../packages/core/src/Button';
import { Input } from '../../packages/core/src/Input';
import { Modal } from '../../packages/core/src/Modal';

describe('Component Integration Tests with testId', () => {
  describe('Login Modal Integration', () => {
    it('should handle complete login flow with testId', async () => {
      const user = userEvent.setup();
      const onLogin = jest.fn();
      const onClose = jest.fn();

      const LoginModal = ({ open }: { open: boolean }) => (
        <Modal
          testId="login-modal"
          open={open}
          onClose={onClose}
          title="Sign In"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            <div className="space-y-4">
              <Input
                testId="login-modal-email"
                label="Email"
                type="email"
                prefix={<Mail01Icon className="w-4 h-4" />}
                placeholder="your@email.com"
                required
              />
              <Input
                testId="login-modal-password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                required
              />
              <div className="flex gap-3">
                <Button
                  testId="login-modal-submit"
                  type="submit"
                  variant="primary"
                >
                  Sign In
                </Button>
                <Button
                  testId="login-modal-cancel"
                  type="button"
                  variant="text"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </Modal>
      );

      render(<LoginModal open={true} />);

      // Verify modal and form elements are present
      expect(screen.getByTestId('login-modal')).toBeInTheDocument();
      expect(screen.getByTestId('login-modal-email')).toBeInTheDocument();
      expect(screen.getByTestId('login-modal-password')).toBeInTheDocument();
      expect(screen.getByTestId('login-modal-submit')).toBeInTheDocument();
      expect(screen.getByTestId('login-modal-cancel')).toBeInTheDocument();

      // Fill out form
      const emailInput = screen.getByTestId('login-modal-email');
      const passwordInput = screen.getByTestId('login-modal-password');

      await user.type(emailInput, 'user@example.com');
      await user.type(passwordInput, 'password123');

      expect(emailInput).toHaveValue('user@example.com');
      expect(passwordInput).toHaveValue('password123');

      // Submit form
      const submitButton = screen.getByTestId('login-modal-submit');
      await user.click(submitButton);
      expect(onLogin).toHaveBeenCalledTimes(1);

      // Test cancel
      const cancelButton = screen.getByTestId('login-modal-cancel');
      await user.click(cancelButton);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Search and Filter Interface', () => {
    it('should handle search interface with multiple inputs and buttons', async () => {
      const user = userEvent.setup();
      const onSearch = jest.fn();
      const onClear = jest.fn();
      const onFilter = jest.fn();

      const SearchInterface = () => {
        const [searchQuery, setSearchQuery] = React.useState('');
        const [categoryFilter, setCategoryFilter] = React.useState('');
        const [sortOrder, setSortOrder] = React.useState('');

        const handleSearch = () => {
          onSearch({
            query: searchQuery,
            category: categoryFilter,
            sort: sortOrder,
          });
        };

        const handleClear = () => {
          setSearchQuery('');
          setCategoryFilter('');
          setSortOrder('');
          onClear();
        };

        return (
          <div className="search-interface">
            <div className="search-controls">
              <Input
                testId="search-interface-query"
                label="Search Items"
                prefix={<SearchLgIcon className="w-4 h-4" />}
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                allowClear
              />

              <Input
                testId="search-interface-category"
                label="Category"
                placeholder="Filter by category..."
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              />

              <Input
                testId="search-interface-sort"
                label="Sort By"
                placeholder="Sort order..."
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              />
            </div>

            <div className="search-actions">
              <Button
                testId="search-interface-search-btn"
                variant="primary"
                onClick={handleSearch}
              >
                Search
              </Button>

              <Button
                testId="search-interface-clear-btn"
                variant="text"
                onClick={handleClear}
              >
                Clear All
              </Button>

              <Button
                testId="search-interface-filter-btn"
                variant="default"
                onClick={() => onFilter({ category: categoryFilter })}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        );
      };

      render(<SearchInterface />);

      // Verify all elements are present
      expect(screen.getByTestId('search-interface-query')).toBeInTheDocument();
      expect(
        screen.getByTestId('search-interface-category'),
      ).toBeInTheDocument();
      expect(screen.getByTestId('search-interface-sort')).toBeInTheDocument();
      expect(
        screen.getByTestId('search-interface-search-btn'),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId('search-interface-clear-btn'),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId('search-interface-filter-btn'),
      ).toBeInTheDocument();

      // Fill out search form
      const queryInput = screen.getByTestId('search-interface-query');
      const categoryInput = screen.getByTestId('search-interface-category');
      const sortInput = screen.getByTestId('search-interface-sort');

      await user.type(queryInput, 'master sword');
      await user.type(categoryInput, 'weapons');
      await user.type(sortInput, 'name');

      // Test search functionality
      const searchButton = screen.getByTestId('search-interface-search-btn');
      await user.click(searchButton);

      expect(onSearch).toHaveBeenCalledWith({
        query: 'master sword',
        category: 'weapons',
        sort: 'name',
      });

      // Test filter functionality
      const filterButton = screen.getByTestId('search-interface-filter-btn');
      await user.click(filterButton);

      expect(onFilter).toHaveBeenCalledWith({
        category: 'weapons',
      });

      // Test clear functionality
      const clearButton = screen.getByTestId('search-interface-clear-btn');
      await user.click(clearButton);

      expect(onClear).toHaveBeenCalledTimes(1);
      expect(queryInput).toHaveValue('');
      expect(categoryInput).toHaveValue('');
      expect(sortInput).toHaveValue('');
    });
  });

  describe('User Profile Form Integration', () => {
    it('should handle profile form with validation and submission', async () => {
      const user = userEvent.setup();
      const onSave = jest.fn();
      const onCancel = jest.fn();

      const ProfileForm = () => {
        const [profile, setProfile] = React.useState({
          username: '',
          email: '',
          bio: '',
          website: '',
        });
        const [errors, setErrors] = React.useState<Record<string, string>>({});
        const [isSubmitting, setIsSubmitting] = React.useState(false);

        const validate = () => {
          const newErrors: Record<string, string> = {};

          if (!profile.username) {
            newErrors.username = 'Username is required';
          } else if (profile.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
          }

          if (!profile.email) {
            newErrors.email = 'Email is required';
          } else if (!profile.email.includes('@')) {
            newErrors.email = 'Invalid email format';
          }

          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
        };

        const handleSubmit = async () => {
          if (validate()) {
            setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
            onSave(profile);
            setIsSubmitting(false);
          }
        };

        const updateProfile = (field: string, value: string) => {
          setProfile((prev) => ({ ...prev, [field]: value }));
          // Clear error when user starts typing
          if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
          }
        };

        return (
          <div className="profile-form">
            <div className="form-fields">
              <Input
                testId="profile-form-username"
                label="Username *"
                prefix={<User01Icon className="w-4 h-4" />}
                placeholder="Choose a username"
                value={profile.username}
                onChange={(e) => updateProfile('username', e.target.value)}
                status={errors.username ? 'error' : undefined}
                aria-invalid={!!errors.username}
                showCount
                maxLength={20}
                required
              />
              {errors.username && (
                <div role="alert" className="error-message">
                  {errors.username}
                </div>
              )}

              <Input
                testId="profile-form-email"
                label="Email *"
                type="email"
                prefix={<Mail01Icon className="w-4 h-4" />}
                placeholder="your@email.com"
                value={profile.email}
                onChange={(e) => updateProfile('email', e.target.value)}
                status={errors.email ? 'error' : undefined}
                aria-invalid={!!errors.email}
                required
              />
              {errors.email && (
                <div role="alert" className="error-message">
                  {errors.email}
                </div>
              )}

              <Input
                testId="profile-form-bio"
                type="textarea"
                label="Bio"
                placeholder="Tell us about yourself..."
                value={profile.bio}
                onChange={(e) => updateProfile('bio', e.target.value)}
                showCount
                maxLength={500}
                rows={4}
              />

              <Input
                testId="profile-form-website"
                label="Website"
                addonBefore="https://"
                addonAfter=".com"
                placeholder="yoursite"
                value={profile.website}
                onChange={(e) => updateProfile('website', e.target.value)}
              />
            </div>

            <div className="form-actions">
              <Button
                testId="profile-form-save"
                variant="primary"
                onClick={handleSubmit}
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Profile'}
              </Button>

              <Button
                testId="profile-form-cancel"
                variant="text"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </div>
        );
      };

      render(<ProfileForm />);

      // Verify form elements
      expect(screen.getByTestId('profile-form-username')).toBeInTheDocument();
      expect(screen.getByTestId('profile-form-email')).toBeInTheDocument();
      expect(screen.getByTestId('profile-form-bio')).toBeInTheDocument();
      expect(screen.getByTestId('profile-form-website')).toBeInTheDocument();
      expect(screen.getByTestId('profile-form-save')).toBeInTheDocument();
      expect(screen.getByTestId('profile-form-cancel')).toBeInTheDocument();

      // Test validation - submit empty form
      const saveButton = screen.getByTestId('profile-form-save');
      await user.click(saveButton);

      // Should show validation errors
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Username is required',
      );
      expect(onSave).not.toHaveBeenCalled();

      // Fill out form with invalid data first
      const usernameInput = screen.getByTestId('profile-form-username');
      const emailInput = screen.getByTestId('profile-form-email');

      await user.type(usernameInput, 'ab'); // Too short
      await user.type(emailInput, 'invalid-email'); // Invalid format

      await user.click(saveButton);

      expect(
        screen.getByText('Username must be at least 3 characters'),
      ).toBeInTheDocument();
      expect(screen.getByText('Invalid email format')).toBeInTheDocument();

      // Fix the validation errors
      await user.clear(usernameInput);
      await user.type(usernameInput, 'hero_of_time');

      await user.clear(emailInput);
      await user.type(emailInput, 'hero@hyrule.com');

      // Fill optional fields
      const bioInput = screen.getByTestId('profile-form-bio');
      const websiteInput = screen.getByTestId('profile-form-website');

      await user.type(bioInput, 'Adventurer from the kingdom of Hyrule');
      await user.type(websiteInput, 'heroofhyrule');

      // Test character counting
      expect(screen.getByText('12/20')).toBeInTheDocument(); // username count
      expect(screen.getByText('40/500')).toBeInTheDocument(); // bio count

      // Submit valid form
      await user.click(saveButton);

      // Button should show loading state
      expect(saveButton).toHaveTextContent('Saving...');
      expect(saveButton).toBeDisabled();

      // Wait for submission to complete
      await screen.findByText('Save Profile');

      expect(onSave).toHaveBeenCalledWith({
        username: 'hero_of_time',
        email: 'hero@hyrule.com',
        bio: 'Adventurer from the kingdom of Hyrule',
        website: 'heroofhyrule',
      });

      // Test cancel functionality
      const cancelButton = screen.getByTestId('profile-form-cancel');
      await user.click(cancelButton);
      expect(onCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Game Menu Navigation Integration', () => {
    it('should handle complex menu navigation with modals', async () => {
      const user = userEvent.setup();
      const mockNavigate = jest.fn();
      const mockShowSettings = jest.fn();
      const mockShowQuitConfirm = jest.fn();

      const GameMenu = () => {
        const [showSettings, setShowSettings] = React.useState(false);
        const [showQuitConfirm, setShowQuitConfirm] = React.useState(false);

        return (
          <div className="game-menu">
            <div className="main-menu">
              <Button
                testId="game-menu-new-game"
                variant="primary"
                onClick={() => mockNavigate('/new-game')}
              >
                New Game
              </Button>

              <Button
                testId="game-menu-continue"
                variant="default"
                onClick={() => mockNavigate('/continue')}
              >
                Continue Adventure
              </Button>

              <Button
                testId="game-menu-load-save"
                variant="text"
                onClick={() => mockNavigate('/load-save')}
              >
                Load Save
              </Button>

              <Button
                testId="game-menu-settings"
                variant="text"
                onClick={() => {
                  setShowSettings(true);
                  mockShowSettings();
                }}
              >
                Settings
              </Button>

              <Button
                testId="game-menu-quit"
                variant="destructive"
                onClick={() => {
                  setShowQuitConfirm(true);
                  mockShowQuitConfirm();
                }}
              >
                Quit Game
              </Button>
            </div>

            {/* Settings Modal */}
            <Modal
              testId="settings-modal"
              open={showSettings}
              onClose={() => setShowSettings(false)}
              title="Game Settings"
            >
              <div className="settings-content">
                <Input
                  testId="settings-volume"
                  label="Master Volume"
                  type="number"
                  defaultValue="75"
                  addonAfter="%"
                />

                <Input
                  testId="settings-difficulty"
                  label="Difficulty"
                  placeholder="Select difficulty..."
                />

                <div className="settings-actions">
                  <Button
                    testId="settings-save"
                    variant="primary"
                    onClick={() => setShowSettings(false)}
                  >
                    Save Settings
                  </Button>

                  <Button
                    testId="settings-cancel"
                    variant="text"
                    onClick={() => setShowSettings(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal>

            {/* Quit Confirmation Modal */}
            <Modal
              testId="quit-confirm-modal"
              open={showQuitConfirm}
              onClose={() => setShowQuitConfirm(false)}
              title="Quit Game"
            >
              <div className="quit-confirm-content">
                <p>
                  Are you sure you want to quit? Any unsaved progress will be
                  lost.
                </p>

                <div className="quit-actions">
                  <Button
                    testId="quit-confirm-yes"
                    variant="destructive"
                    onClick={() => mockNavigate('/quit')}
                  >
                    Yes, Quit Game
                  </Button>

                  <Button
                    testId="quit-confirm-no"
                    variant="default"
                    onClick={() => setShowQuitConfirm(false)}
                  >
                    No, Continue Playing
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        );
      };

      render(<GameMenu />);

      // Verify main menu buttons
      expect(screen.getByTestId('game-menu-new-game')).toBeInTheDocument();
      expect(screen.getByTestId('game-menu-continue')).toBeInTheDocument();
      expect(screen.getByTestId('game-menu-load-save')).toBeInTheDocument();
      expect(screen.getByTestId('game-menu-settings')).toBeInTheDocument();
      expect(screen.getByTestId('game-menu-quit')).toBeInTheDocument();

      // Test navigation buttons
      await user.click(screen.getByTestId('game-menu-new-game'));
      expect(mockNavigate).toHaveBeenCalledWith('/new-game');

      await user.click(screen.getByTestId('game-menu-continue'));
      expect(mockNavigate).toHaveBeenCalledWith('/continue');

      await user.click(screen.getByTestId('game-menu-load-save'));
      expect(mockNavigate).toHaveBeenCalledWith('/load-save');

      // Test settings modal
      await user.click(screen.getByTestId('game-menu-settings'));
      expect(mockShowSettings).toHaveBeenCalledTimes(1);

      // Settings modal should be visible
      expect(screen.getByTestId('settings-modal')).toBeInTheDocument();
      expect(screen.getByTestId('settings-volume')).toBeInTheDocument();
      expect(screen.getByTestId('settings-difficulty')).toBeInTheDocument();

      // Interact with settings
      const volumeInput = screen.getByTestId('settings-volume');
      await user.clear(volumeInput);
      await user.type(volumeInput, '50');
      expect(volumeInput).toHaveValue('50');

      // Save settings
      await user.click(screen.getByTestId('settings-save'));

      // Settings modal should close
      expect(screen.queryByTestId('settings-modal')).not.toBeInTheDocument();

      // Test quit confirmation
      await user.click(screen.getByTestId('game-menu-quit'));
      expect(mockShowQuitConfirm).toHaveBeenCalledTimes(1);

      // Quit confirmation modal should be visible
      expect(screen.getByTestId('quit-confirm-modal')).toBeInTheDocument();
      expect(screen.getByTestId('quit-confirm-yes')).toBeInTheDocument();
      expect(screen.getByTestId('quit-confirm-no')).toBeInTheDocument();

      // Test "No, Continue Playing"
      await user.click(screen.getByTestId('quit-confirm-no'));
      expect(
        screen.queryByTestId('quit-confirm-modal'),
      ).not.toBeInTheDocument();

      // Open quit confirmation again and test "Yes, Quit Game"
      await user.click(screen.getByTestId('game-menu-quit'));
      await user.click(screen.getByTestId('quit-confirm-yes'));
      expect(mockNavigate).toHaveBeenCalledWith('/quit');
    });
  });

  describe('Accessibility Integration', () => {
    it('should maintain accessibility across integrated components', async () => {
      const user = userEvent.setup();

      const AccessibleForm = () => (
        <div>
          <h1>User Registration</h1>

          <form>
            <fieldset>
              <legend>Personal Information</legend>

              <Input
                testId="accessible-username"
                label="Username"
                aria-describedby="username-help"
                required
                aria-required="true"
              />
              <div id="username-help">
                Choose a unique username (3-20 characters)
              </div>

              <Input
                testId="accessible-email"
                label="Email Address"
                type="email"
                aria-describedby="email-help"
                required
                aria-required="true"
              />
              <div id="email-help">
                We'll use this for account notifications
              </div>
            </fieldset>

            <fieldset>
              <legend>Account Actions</legend>

              <Button
                testId="accessible-submit"
                type="submit"
                variant="primary"
                aria-describedby="submit-help"
              >
                Create Account
              </Button>
              <div id="submit-help">Creates your new user account</div>

              <Button
                testId="accessible-cancel"
                type="button"
                variant="text"
                aria-label="Cancel registration and return to login"
              >
                Cancel
              </Button>
            </fieldset>
          </form>
        </div>
      );

      render(<AccessibleForm />);

      // Test semantic structure
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'User Registration',
      );
      expect(screen.getByRole('form')).toBeInTheDocument();

      // Test fieldsets and legends
      const fieldsets = screen.getAllByRole('group');
      expect(fieldsets).toHaveLength(2);
      expect(screen.getByText('Personal Information')).toBeInTheDocument();
      expect(screen.getByText('Account Actions')).toBeInTheDocument();

      // Test input accessibility
      const usernameInput = screen.getByTestId('accessible-username');
      const emailInput = screen.getByTestId('accessible-email');

      expect(usernameInput).toHaveAttribute(
        'aria-describedby',
        'username-help',
      );
      expect(usernameInput).toHaveAttribute('aria-required', 'true');
      expect(usernameInput).toHaveAccessibleDescription(
        'Choose a unique username (3-20 characters)',
      );

      expect(emailInput).toHaveAttribute('aria-describedby', 'email-help');
      expect(emailInput).toHaveAttribute('aria-required', 'true');
      expect(emailInput).toHaveAccessibleDescription(
        "We'll use this for account notifications",
      );

      // Test button accessibility
      const submitButton = screen.getByTestId('accessible-submit');
      const cancelButton = screen.getByTestId('accessible-cancel');

      expect(submitButton).toHaveAttribute('aria-describedby', 'submit-help');
      expect(submitButton).toHaveAccessibleDescription(
        'Creates your new user account',
      );

      expect(cancelButton).toHaveAttribute(
        'aria-label',
        'Cancel registration and return to login',
      );
      expect(cancelButton).toHaveAccessibleName(
        'Cancel registration and return to login',
      );

      // Test keyboard navigation
      await user.tab();
      expect(usernameInput).toHaveFocus();

      await user.tab();
      expect(emailInput).toHaveFocus();

      await user.tab();
      expect(submitButton).toHaveFocus();

      await user.tab();
      expect(cancelButton).toHaveFocus();

      // Test form interaction
      await user.type(usernameInput, 'testuser');
      await user.type(emailInput, 'test@example.com');

      expect(usernameInput).toHaveValue('testuser');
      expect(emailInput).toHaveValue('test@example.com');
    });
  });
});
