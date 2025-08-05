import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mail01Icon, SearchLgIcon, User01Icon } from '@zelda/icons';
import { Button } from '../../packages/core/src/Button';
import { Input } from '../../packages/core/src/Input';

describe('Input testId Integration Tests', () => {
  describe('Basic testId functionality', () => {
    it('should render input with testId attribute', () => {
      render(<Input testId="test-input" placeholder="Test input" />);

      const input = screen.getByTestId('test-input');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('data-testid', 'test-input');
    });

    it('should query inputs by different testId patterns', () => {
      render(
        <div>
          <Input testId="input-email-signup" label="Email" type="email" />
          <Input testId="signup-password" label="Password" type="password" />
          <Input testId="search-input" label="Search" />
        </div>,
      );

      // Test different naming conventions
      expect(screen.getByTestId('input-email-signup')).toBeInTheDocument();
      expect(screen.getByTestId('signup-password')).toBeInTheDocument();
      expect(screen.getByTestId('search-input')).toBeInTheDocument();
    });

    it('should handle textarea type with testId', () => {
      render(
        <Input
          testId="textarea-input"
          type="textarea"
          label="Message"
          placeholder="Enter message"
          rows={4}
        />,
      );

      const textarea = screen.getByTestId('textarea-input');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName).toBe('TEXTAREA');
    });
  });

  describe('User interaction testing with testId', () => {
    it('should handle typing via testId', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(
        <Input
          testId="typing-test-input"
          placeholder="Type here"
          onChange={handleChange}
        />,
      );

      const input = screen.getByTestId('typing-test-input');

      await user.type(input, 'Hello World');

      expect(input).toHaveValue('Hello World');
      expect(handleChange).toHaveBeenCalled();
    });

    it('should handle clear functionality via testId', async () => {
      const user = userEvent.setup();

      render(
        <Input
          testId="clearable-input"
          placeholder="Type to see clear button"
          allowClear
          defaultValue="Clear me!"
        />,
      );

      const input = screen.getByTestId('clearable-input');
      expect(input).toHaveValue('Clear me!');

      // Find and click clear button
      const clearButton = screen.getByLabelText('Clear input');
      await user.click(clearButton);

      expect(input).toHaveValue('');
    });

    it('should handle focus and blur events via testId', async () => {
      const user = userEvent.setup();
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();

      render(
        <Input
          testId="focus-test-input"
          placeholder="Focus test"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />,
      );

      const input = screen.getByTestId('focus-test-input');

      await user.click(input);
      expect(handleFocus).toHaveBeenCalled();
      expect(input).toHaveFocus();

      await user.tab();
      expect(handleBlur).toHaveBeenCalled();
      expect(input).not.toHaveFocus();
    });

    it('should handle disabled state via testId', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(
        <Input
          testId="disabled-input"
          placeholder="Disabled input"
          disabled
          onChange={handleChange}
        />,
      );

      const input = screen.getByTestId('disabled-input');

      expect(input).toBeDisabled();

      // Typing in disabled input should not work
      await user.type(input, 'Should not work');
      expect(input).toHaveValue('');
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Input variants testing with testId', () => {
    it('should test all input variants', () => {
      render(
        <div>
          <Input
            testId="input-default"
            variant="default"
            placeholder="Default"
          />
          <Input testId="input-filled" variant="filled" placeholder="Filled" />
          <Input
            testId="input-borderless"
            variant="borderless"
            placeholder="Borderless"
          />
        </div>,
      );

      expect(screen.getByTestId('input-default')).toBeInTheDocument();
      expect(screen.getByTestId('input-filled')).toBeInTheDocument();
      expect(screen.getByTestId('input-borderless')).toBeInTheDocument();
    });

    it('should test input types via testId', () => {
      render(
        <div>
          <Input testId="input-text" type="text" placeholder="Text input" />
          <Input testId="input-email" type="email" placeholder="Email input" />
          <Input
            testId="input-password"
            type="password"
            placeholder="Password input"
          />
          <Input
            testId="input-search"
            type="search"
            placeholder="Search input"
          />
          <Input
            testId="input-number"
            type="number"
            placeholder="Number input"
          />
        </div>,
      );

      expect(screen.getByTestId('input-text')).toHaveAttribute('type', 'text');
      expect(screen.getByTestId('input-email')).toHaveAttribute(
        'type',
        'email',
      );
      expect(screen.getByTestId('input-password')).toHaveAttribute(
        'type',
        'password',
      );
      expect(screen.getByTestId('input-search')).toHaveAttribute(
        'type',
        'search',
      );
      expect(screen.getByTestId('input-number')).toHaveAttribute(
        'type',
        'number',
      );
    });

    it('should test input sizes via testId', () => {
      render(
        <div>
          <Input testId="input-small" size="small" placeholder="Small input" />
          <Input
            testId="input-medium"
            size="medium"
            placeholder="Medium input"
          />
          <Input testId="input-large" size="large" placeholder="Large input" />
        </div>,
      );

      // All inputs should render (size affects styling, not functionality)
      expect(screen.getByTestId('input-small')).toBeInTheDocument();
      expect(screen.getByTestId('input-medium')).toBeInTheDocument();
      expect(screen.getByTestId('input-large')).toBeInTheDocument();
    });
  });

  describe('Input features testing with testId', () => {
    it('should test character counting via testId', async () => {
      const user = userEvent.setup();

      render(
        <Input
          testId="counted-input"
          placeholder="Max 50 characters"
          showCount
          maxLength={50}
          defaultValue="Count me"
        />,
      );

      const input = screen.getByTestId('counted-input');

      // Check initial count
      expect(screen.getByText('8/50')).toBeInTheDocument();

      // Add more text
      await user.type(input, ' more text');
      expect(screen.getByText('18/50')).toBeInTheDocument();
    });

    it('should test prefix and suffix via testId', () => {
      render(
        <div>
          <Input
            testId="input-with-prefix"
            prefix={<SearchLgIcon className="w-4 h-4" />}
            placeholder="Search..."
          />
          <Input
            testId="input-with-addons"
            addonBefore="https://"
            addonAfter=".com"
            placeholder="website"
          />
        </div>,
      );

      const prefixInput = screen.getByTestId('input-with-prefix');
      const addonInput = screen.getByTestId('input-with-addons');

      expect(prefixInput).toBeInTheDocument();
      expect(addonInput).toBeInTheDocument();

      // Check that addons are rendered
      expect(screen.getByText('https://')).toBeInTheDocument();
      expect(screen.getByText('.com')).toBeInTheDocument();
    });

    it('should test textarea features via testId', async () => {
      const user = userEvent.setup();

      render(
        <Input
          testId="textarea-features"
          type="textarea"
          placeholder="Multi-line text"
          showCount
          maxLength={200}
          rows={4}
          allowClear
          defaultValue="Line 1\nLine 2"
        />,
      );

      const textarea = screen.getByTestId('textarea-features');

      expect(textarea).toHaveValue('Line 1\nLine 2');
      expect(screen.getByText('14/200')).toBeInTheDocument();

      // Test adding more content
      await user.type(textarea, '\nLine 3');
      expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3');
      expect(screen.getByText('21/200')).toBeInTheDocument();

      // Test clear functionality
      const clearButton = screen.getByLabelText('Clear input');
      await user.click(clearButton);
      expect(textarea).toHaveValue('');
    });
  });

  describe('Form validation testing with testId', () => {
    it('should test validation states via testId', () => {
      render(
        <div>
          <Input testId="input-valid" placeholder="Valid input" />
          <Input
            testId="input-error"
            status="error"
            placeholder="Error input"
          />
          <Input
            testId="input-warning"
            status="warning"
            placeholder="Warning input"
          />
        </div>,
      );

      const validInput = screen.getByTestId('input-valid');
      const errorInput = screen.getByTestId('input-error');
      const warningInput = screen.getByTestId('input-warning');

      // Error input should have aria-invalid
      expect(errorInput).toHaveAttribute('aria-invalid', 'true');

      // Valid and warning inputs should not have aria-invalid="true"
      expect(validInput).not.toHaveAttribute('aria-invalid', 'true');
      expect(warningInput).not.toHaveAttribute('aria-invalid', 'true');
    });

    it('should test required field validation via testId', () => {
      render(
        <form>
          <Input
            testId="required-input"
            label="Required Field"
            placeholder="This is required"
            required
          />
          <Input
            testId="optional-input"
            label="Optional Field"
            placeholder="This is optional"
          />
        </form>,
      );

      const requiredInput = screen.getByTestId('required-input');
      const optionalInput = screen.getByTestId('optional-input');

      expect(requiredInput).toHaveAttribute('required');
      expect(optionalInput).not.toHaveAttribute('required');
    });

    it('should test dynamic validation via testId', async () => {
      const user = userEvent.setup();
      let isValid = true;
      const handleValidation = jest.fn((value: string) => {
        isValid = value.includes('@');
        return isValid;
      });

      const ValidationInput = () => {
        const [value, setValue] = React.useState('');
        const [error, setError] = React.useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value;
          setValue(newValue);
          const valid = handleValidation(newValue);
          setError(!valid);
        };

        return (
          <Input
            testId="validation-input"
            type="email"
            placeholder="Enter email"
            value={value}
            onChange={handleChange}
            status={error ? 'error' : undefined}
            aria-invalid={error}
          />
        );
      };

      render(<ValidationInput />);

      const input = screen.getByTestId('validation-input');

      // Test invalid input
      await user.type(input, 'invalid-email');
      expect(handleValidation).toHaveBeenCalledWith('invalid-email');
      expect(input).toHaveAttribute('aria-invalid', 'true');

      // Clear and test valid input
      await user.clear(input);
      await user.type(input, 'valid@email.com');
      expect(handleValidation).toHaveBeenCalledWith('valid@email.com');
      expect(input).not.toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Accessibility testing with testId', () => {
    it('should test label association via testId', () => {
      render(
        <div>
          <Input
            testId="labeled-input"
            label="Username"
            placeholder="Enter username"
          />
          <Input
            testId="aria-labeled-input"
            aria-label="Search through items"
            placeholder="Search..."
          />
        </div>,
      );

      const labeledInput = screen.getByTestId('labeled-input');
      const ariaLabeledInput = screen.getByTestId('aria-labeled-input');

      // Test label association
      expect(screen.getByLabelText('Username')).toBe(labeledInput);

      // Test aria-label
      expect(ariaLabeledInput).toHaveAttribute(
        'aria-label',
        'Search through items',
      );
      expect(ariaLabeledInput).toHaveAccessibleName('Search through items');
    });

    it('should test ARIA descriptions via testId', () => {
      render(
        <div>
          <Input
            testId="described-input"
            label="Password"
            placeholder="Enter password"
            aria-describedby="password-help"
          />
          <div id="password-help">Must be at least 8 characters</div>
        </div>,
      );

      const input = screen.getByTestId('described-input');

      expect(input).toHaveAttribute('aria-describedby', 'password-help');
      expect(input).toHaveAccessibleDescription(
        'Must be at least 8 characters',
      );
    });

    it('should test keyboard navigation via testId', async () => {
      const user = userEvent.setup();

      render(
        <div>
          <Input testId="first-input" placeholder="First input" />
          <Input testId="second-input" placeholder="Second input" />
          <Input
            testId="disabled-input"
            placeholder="Disabled input"
            disabled
          />
          <Input testId="third-input" placeholder="Third input" />
        </div>,
      );

      const firstInput = screen.getByTestId('first-input');
      const secondInput = screen.getByTestId('second-input');
      const disabledInput = screen.getByTestId('disabled-input');
      const thirdInput = screen.getByTestId('third-input');

      // Test tab navigation
      await user.tab();
      expect(firstInput).toHaveFocus();

      await user.tab();
      expect(secondInput).toHaveFocus();

      // Disabled input should be skipped
      await user.tab();
      expect(thirdInput).toHaveFocus();
      expect(disabledInput).not.toHaveFocus();

      // Test reverse tab navigation
      await user.tab({ shift: true });
      expect(secondInput).toHaveFocus();
    });
  });

  describe('Integration scenarios with testId', () => {
    it('should test login form integration', async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn();

      const LoginForm = () => {
        const [formData, setFormData] = React.useState({
          email: '',
          password: '',
          remember: false,
        });

        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          onSubmit(formData);
        };

        return (
          <form onSubmit={handleSubmit}>
            <Input
              testId="login-form-email"
              label="Email"
              type="email"
              prefix={<Mail01Icon className="w-4 h-4" />}
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <Input
              testId="login-form-password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            <button type="submit">Sign In</button>
          </form>
        );
      };

      render(<LoginForm />);

      const emailInput = screen.getByTestId('login-form-email');
      const passwordInput = screen.getByTestId('login-form-password');

      // Fill out form
      await user.type(emailInput, 'user@example.com');
      await user.type(passwordInput, 'password123');

      // Submit form
      const submitButton = screen.getByRole('button', { name: 'Sign In' });
      await user.click(submitButton);

      expect(onSubmit).toHaveBeenCalledWith({
        email: 'user@example.com',
        password: 'password123',
        remember: false,
      });
    });

    it('should test search interface integration', async () => {
      const user = userEvent.setup();
      const onSearch = jest.fn();

      const SearchInterface = () => {
        const [searchData, setSearchData] = React.useState({
          query: '',
          filter: '',
          sort: '',
        });

        React.useEffect(() => {
          onSearch(searchData);
        }, [searchData]);

        return (
          <div>
            <Input
              testId="search-interface-query"
              label="Search Items"
              prefix={<SearchLgIcon className="w-4 h-4" />}
              value={searchData.query}
              onChange={(e) =>
                setSearchData((prev) => ({ ...prev, query: e.target.value }))
              }
              allowClear
            />
            <Input
              testId="search-interface-filter"
              label="Category Filter"
              value={searchData.filter}
              onChange={(e) =>
                setSearchData((prev) => ({ ...prev, filter: e.target.value }))
              }
            />
            <Input
              testId="search-interface-sort"
              label="Sort Order"
              value={searchData.sort}
              onChange={(e) =>
                setSearchData((prev) => ({ ...prev, sort: e.target.value }))
              }
            />
          </div>
        );
      };

      render(<SearchInterface />);

      const queryInput = screen.getByTestId('search-interface-query');
      const filterInput = screen.getByTestId('search-interface-filter');

      // Test search query
      await user.type(queryInput, 'sword');
      expect(onSearch).toHaveBeenCalledWith({
        query: 'sword',
        filter: '',
        sort: '',
      });

      // Test filter
      await user.type(filterInput, 'weapons');
      expect(onSearch).toHaveBeenCalledWith({
        query: 'sword',
        filter: 'weapons',
        sort: '',
      });

      // Test clear functionality
      const clearButton = screen.getByLabelText('Clear input');
      await user.click(clearButton);
      expect(queryInput).toHaveValue('');
    });

    it('should test profile form integration', async () => {
      const user = userEvent.setup();
      const onSave = jest.fn();

      const ProfileForm = () => {
        const [profile, setProfile] = React.useState({
          username: '',
          bio: '',
          website: '',
        });

        const handleSave = () => {
          onSave({
            ...profile,
            website: profile.website ? `https://${profile.website}.com` : '',
          });
        };

        return (
          <div>
            <Input
              testId="profile-form-username"
              label="Username"
              prefix={<User01Icon className="w-4 h-4" />}
              value={profile.username}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, username: e.target.value }))
              }
              showCount
              maxLength={20}
            />
            <Input
              testId="profile-form-bio"
              type="textarea"
              label="Bio"
              value={profile.bio}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, bio: e.target.value }))
              }
              showCount
              maxLength={500}
              rows={4}
            />
            <Input
              testId="profile-form-website"
              label="Website"
              addonBefore="https://"
              addonAfter=".com"
              value={profile.website}
              onChange={(e) =>
                setProfile((prev) => ({ ...prev, website: e.target.value }))
              }
            />
            <Button onClick={handleSave}>Save Profile</Button>
          </div>
        );
      };

      render(<ProfileForm />);

      const usernameInput = screen.getByTestId('profile-form-username');
      const bioInput = screen.getByTestId('profile-form-bio');
      const websiteInput = screen.getByTestId('profile-form-website');

      // Fill out profile
      await user.type(usernameInput, 'hero_of_time');
      await user.type(bioInput, 'Adventurer from Hyrule');
      await user.type(websiteInput, 'mysite');

      // Test character counting
      expect(screen.getByText('12/20')).toBeInTheDocument(); // username count
      expect(screen.getByText('22/500')).toBeInTheDocument(); // bio count

      // Save profile
      const saveButton = screen.getByRole('button', { name: 'Save Profile' });
      await user.click(saveButton);

      expect(onSave).toHaveBeenCalledWith({
        username: 'hero_of_time',
        bio: 'Adventurer from Hyrule',
        website: 'https://mysite.com',
      });
    });
  });

  describe('Error handling with testId', () => {
    it('should handle form validation errors via testId', async () => {
      const user = userEvent.setup();

      const ValidatedForm = () => {
        const [errors, setErrors] = React.useState<Record<string, string>>({});
        const [values, setValues] = React.useState({ email: '', password: '' });

        const validate = (field: string, value: string) => {
          const newErrors = { ...errors };

          if (field === 'email' && value && !value.includes('@')) {
            newErrors.email = 'Invalid email format';
          } else if (field === 'email') {
            delete newErrors.email;
          }

          if (field === 'password' && value && value.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
          } else if (field === 'password') {
            delete newErrors.password;
          }

          setErrors(newErrors);
        };

        const handleChange =
          (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setValues((prev) => ({ ...prev, [field]: value }));
            validate(field, value);
          };

        return (
          <div>
            <Input
              testId="validated-email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              status={errors.email ? 'error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <div role="alert" className="error-message">
                {errors.email}
              </div>
            )}

            <Input
              testId="validated-password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange('password')}
              status={errors.password ? 'error' : undefined}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <div role="alert" className="error-message">
                {errors.password}
              </div>
            )}
          </div>
        );
      };

      render(<ValidatedForm />);

      const emailInput = screen.getByTestId('validated-email');
      const passwordInput = screen.getByTestId('validated-password');

      // Test email validation
      await user.type(emailInput, 'invalid-email');
      expect(emailInput).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Invalid email format',
      );

      // Fix email
      await user.clear(emailInput);
      await user.type(emailInput, 'valid@email.com');
      expect(emailInput).not.toHaveAttribute('aria-invalid', 'true');

      // Test password validation
      await user.type(passwordInput, '123');
      expect(passwordInput).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Password must be at least 8 characters',
      );

      // Fix password
      await user.type(passwordInput, '45678');
      expect(passwordInput).not.toHaveAttribute('aria-invalid', 'true');
    });
  });
});
