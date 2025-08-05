import type { Meta, StoryObj } from '@storybook/react';
import { Mail01Icon, SearchLgIcon, User01Icon } from '@zelda/icons';
import { Typography } from '../Typography';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input/Testing Examples',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Comprehensive testing examples for Input component using testId attributes.

## Overview

This story demonstrates best practices for testing Input components with proper testId naming conventions, form validation testing, and accessibility verification.

## testId Naming Conventions

- **input-{field}-{context}** - Field-focused: input-email-signup, input-password-login
- **{form}-{field}** - Form-focused: signup-email, login-password
- **{component}-{identifier}** - Component-focused: search-input, filter-input

## Testing Patterns

### Basic Input Testing
\`\`\`tsx
// Query by testId
const input = screen.getByTestId('input-email-signup');
expect(input).toBeInTheDocument();

// Test input value
await user.type(input, 'test@example.com');
expect(input).toHaveValue('test@example.com');
\`\`\`

### Form Validation Testing
\`\`\`tsx
// Test validation states
const input = screen.getByTestId('input-password-login');
expect(input).toHaveAttribute('aria-invalid', 'false');

// Test error states
fireEvent.blur(input);
expect(input).toHaveAttribute('aria-invalid', 'true');
expect(screen.getByRole('alert')).toHaveTextContent('Password is required');
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test label association
const input = screen.getByLabelText('Email Address');
expect(input).toBeInTheDocument();

// Test ARIA attributes
expect(input).toHaveAttribute('aria-describedby', 'email-help');
expect(input).toHaveAttribute('aria-required', 'true');
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TestIdNamingConventions: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <Typography variant="h4" className="mb-3 text-blue-800">
          🏷️ testId Naming Conventions
        </Typography>
        <Typography variant="body2" className="text-blue-700">
          Consistent naming patterns for reliable input field testing.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Field-Focused Pattern</Typography>
        <div className="space-y-3">
          <Input
            testId="input-email-signup"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
          />
          <Input
            testId="input-password-login"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <Input
            testId="input-username-profile"
            label="Username"
            placeholder="Choose a username"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Field-focused testId pattern
const emailInput = screen.getByTestId('input-email-signup')
const passwordInput = screen.getByTestId('input-password-login')
const usernameInput = screen.getByTestId('input-username-profile')

// Clear context about field purpose and form
expect(emailInput).toBeInTheDocument()
expect(passwordInput).toHaveAttribute('type', 'password')
expect(usernameInput).toHaveAttribute('type', 'text')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Form-Focused Pattern</Typography>
        <div className="space-y-3">
          <Input
            testId="signup-email"
            label="Email"
            type="email"
            placeholder="your@email.com"
          />
          <Input
            testId="signup-password"
            label="Password"
            type="password"
            placeholder="Create password"
          />
          <Input
            testId="signup-confirm-password"
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Form-focused testId pattern
const signupEmail = screen.getByTestId('signup-email')
const signupPassword = screen.getByTestId('signup-password')
const signupConfirm = screen.getByTestId('signup-confirm-password')

// Groups related form fields together
expect(signupEmail).toBeInTheDocument()
expect(signupPassword).toBeInTheDocument()
expect(signupConfirm).toBeInTheDocument()`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Component-Focused Pattern</Typography>
        <div className="space-y-3">
          <Input
            testId="search-input"
            label="Search"
            prefix={<SearchLgIcon className="w-4 h-4" />}
            placeholder="Search items..."
            allowClear
          />
          <Input
            testId="filter-input"
            label="Filter"
            placeholder="Filter results..."
          />
          <Input
            testId="comment-input"
            type="textarea"
            label="Comment"
            placeholder="Add your comment..."
            rows={3}
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Component-focused testId pattern
const searchInput = screen.getByTestId('search-input')
const filterInput = screen.getByTestId('filter-input')
const commentInput = screen.getByTestId('comment-input')

// Describes the component's functional purpose
expect(searchInput).toBeInTheDocument()
expect(filterInput).toBeInTheDocument()
expect(commentInput).toBeInTheDocument()`}
        </div>
      </div>
    </div>
  ),
};

export const BasicInputTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="p-4 border rounded-lg bg-green-50 border-green-200">
        <Typography variant="h4" className="mb-3 text-green-800">
          ⌨️ Basic Input Testing
        </Typography>
        <Typography variant="body2" className="text-green-700">
          Testing basic input functionality including typing, clearing, and
          value changes.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Text Input Testing</Typography>
        <div className="space-y-3">
          <Input
            testId="test-text-input"
            label="Text Input"
            placeholder="Type something..."
          />
          <Input
            testId="test-email-input"
            label="Email Input"
            type="email"
            placeholder="email@example.com"
          />
          <Input
            testId="test-password-input"
            label="Password Input"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test basic input functionality
const user = userEvent.setup()
const textInput = screen.getByTestId('test-text-input')
const emailInput = screen.getByTestId('test-email-input')

// Test typing
await user.type(textInput, 'Hello World')
expect(textInput).toHaveValue('Hello World')

// Test email input
await user.type(emailInput, 'test@example.com')
expect(emailInput).toHaveValue('test@example.com')

// Test clearing input
await user.clear(textInput)
expect(textInput).toHaveValue('')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Input with Features</Typography>
        <div className="space-y-3">
          <Input
            testId="test-clearable-input"
            label="Clearable Input"
            placeholder="Type to see clear button"
            allowClear
            defaultValue="Clear me!"
          />
          <Input
            testId="test-counted-input"
            label="Character Count"
            placeholder="Max 50 characters"
            showCount
            maxLength={50}
            defaultValue="Count my characters"
          />
          <Input
            testId="test-textarea-input"
            type="textarea"
            label="Textarea"
            placeholder="Multi-line text..."
            rows={3}
            showCount
            maxLength={200}
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test input features
const user = userEvent.setup()
const clearableInput = screen.getByTestId('test-clearable-input')
const countedInput = screen.getByTestId('test-counted-input')
const textareaInput = screen.getByTestId('test-textarea-input')

// Test clear functionality
const clearButton = screen.getByLabelText('Clear input')
await user.click(clearButton)
expect(clearableInput).toHaveValue('')

// Test character counting
await user.type(countedInput, ' more text')
expect(screen.getByText(/\\d+\\/50/)).toBeInTheDocument()

// Test textarea
await user.type(textareaInput, 'Line 1\\nLine 2\\nLine 3')
expect(textareaInput).toHaveValue('Line 1\\nLine 2\\nLine 3')`}
        </div>
      </div>
    </div>
  ),
};

export const FormValidationTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="p-4 border rounded-lg bg-red-50 border-red-200">
        <Typography variant="h4" className="mb-3 text-red-800">
          ✅ Form Validation Testing
        </Typography>
        <Typography variant="body2" className="text-red-700">
          Testing form validation states, error handling, and user feedback.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Validation States</Typography>
        <div className="space-y-3">
          <Input
            testId="input-valid-state"
            label="Valid Input"
            placeholder="Valid input example"
            defaultValue="valid@example.com"
          />
          <Input
            testId="input-error-state"
            label="Error Input"
            status="error"
            placeholder="Error state example"
            defaultValue="invalid-email"
          />
          <Input
            testId="input-warning-state"
            label="Warning Input"
            status="warning"
            placeholder="Warning state example"
            defaultValue="weak-password"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test validation states
const validInput = screen.getByTestId('input-valid-state')
const errorInput = screen.getByTestId('input-error-state')
const warningInput = screen.getByTestId('input-warning-state')

// Test valid state
expect(validInput).not.toHaveAttribute('aria-invalid', 'true')

// Test error state
expect(errorInput).toHaveAttribute('aria-invalid', 'true')

// Test warning state (still valid but with warning)
expect(warningInput).not.toHaveAttribute('aria-invalid', 'true')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Required Fields</Typography>
        <div className="space-y-3">
          <Input
            testId="input-required-field"
            label="Required Field *"
            placeholder="This field is required"
            required
            aria-required="true"
          />
          <Input
            testId="input-optional-field"
            label="Optional Field"
            placeholder="This field is optional"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test required field validation
const requiredInput = screen.getByTestId('input-required-field')
const optionalInput = screen.getByTestId('input-optional-field')

// Test required attribute
expect(requiredInput).toHaveAttribute('required')
expect(requiredInput).toHaveAttribute('aria-required', 'true')

// Test optional field
expect(optionalInput).not.toHaveAttribute('required')
expect(optionalInput).not.toHaveAttribute('aria-required', 'true')

// Test form validation
const form = requiredInput.closest('form')
fireEvent.submit(form)
expect(requiredInput).toHaveAttribute('aria-invalid', 'true')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Dynamic Validation</Typography>
        <div className="space-y-3">
          <Input
            testId="input-email-validation"
            label="Email Validation"
            type="email"
            placeholder="Enter valid email"
            aria-describedby="email-help"
          />
          <Typography
            variant="body2"
            id="email-help"
            className="text-gray-600 text-sm"
          >
            Must be a valid email address format
          </Typography>
          <Input
            testId="input-password-validation"
            label="Password Validation"
            type="password"
            placeholder="Min 8 characters"
            showCount
            maxLength={50}
            aria-describedby="password-help"
          />
          <Typography
            variant="body2"
            id="password-help"
            className="text-gray-600 text-sm"
          >
            Must be at least 8 characters with numbers and symbols
          </Typography>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test dynamic validation
const user = userEvent.setup()
const emailInput = screen.getByTestId('input-email-validation')
const passwordInput = screen.getByTestId('input-password-validation')

// Test email validation
await user.type(emailInput, 'invalid-email')
fireEvent.blur(emailInput)
expect(emailInput).toHaveAttribute('aria-invalid', 'true')

await user.clear(emailInput)
await user.type(emailInput, 'valid@example.com')
fireEvent.blur(emailInput)
expect(emailInput).not.toHaveAttribute('aria-invalid', 'true')

// Test password validation
await user.type(passwordInput, '123')
expect(passwordInput).toHaveAttribute('aria-invalid', 'true')

await user.type(passwordInput, '45678!@#')
expect(passwordInput).not.toHaveAttribute('aria-invalid', 'true')`}
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
        <Typography variant="h4" className="mb-3 text-purple-800">
          ♿ Accessibility Testing
        </Typography>
        <Typography variant="body2" className="text-purple-700">
          Testing accessibility features including ARIA attributes, label
          associations, and keyboard navigation.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Label Association</Typography>
        <div className="space-y-3">
          <Input
            testId="input-with-label"
            label="Username"
            placeholder="Enter username"
          />
          <Input
            testId="input-with-aria-label"
            aria-label="Search through inventory items"
            placeholder="Search..."
            prefix={<SearchLgIcon className="w-4 h-4" />}
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test label association
const labeledInput = screen.getByTestId('input-with-label')
const ariaLabeledInput = screen.getByTestId('input-with-aria-label')

// Test label association
expect(screen.getByLabelText('Username')).toBe(labeledInput)

// Test aria-label
expect(ariaLabeledInput).toHaveAttribute(
  'aria-label', 
  'Search through inventory items'
)

// Test accessible name
expect(labeledInput).toHaveAccessibleName('Username')
expect(ariaLabeledInput).toHaveAccessibleName('Search through inventory items')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">ARIA Descriptions</Typography>
        <div className="space-y-3">
          <Input
            testId="input-with-description"
            label="Password"
            type="password"
            placeholder="Enter password"
            aria-describedby="password-requirements"
          />
          <Typography
            variant="body2"
            id="password-requirements"
            className="text-gray-600 text-sm"
          >
            Must be at least 8 characters with uppercase, lowercase, numbers,
            and symbols
          </Typography>
          <Input
            testId="input-with-help-and-error"
            label="Email"
            type="email"
            status="error"
            placeholder="Enter email"
            aria-describedby="email-help email-error"
          />
          <Typography
            variant="body2"
            id="email-help"
            className="text-gray-600 text-sm"
          >
            We'll use this to send you important updates
          </Typography>
          <Typography
            variant="body2"
            id="email-error"
            className="text-red-600 text-sm"
            role="alert"
          >
            Please enter a valid email address
          </Typography>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test ARIA descriptions
const passwordInput = screen.getByTestId('input-with-description')
const emailInput = screen.getByTestId('input-with-help-and-error')

// Test single description
expect(passwordInput).toHaveAttribute('aria-describedby', 'password-requirements')
expect(passwordInput).toHaveAccessibleDescription(
  'Must be at least 8 characters with uppercase, lowercase, numbers, and symbols'
)

// Test multiple descriptions
expect(emailInput).toHaveAttribute('aria-describedby', 'email-help email-error')

// Test error announcement
const errorMessage = screen.getByRole('alert')
expect(errorMessage).toHaveTextContent('Please enter a valid email address')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Keyboard Navigation</Typography>
        <div className="space-y-3">
          <Input
            testId="input-keyboard-first"
            label="First Input"
            placeholder="Tab to me first"
          />
          <Input
            testId="input-keyboard-second"
            label="Second Input"
            placeholder="Tab to me second"
          />
          <Input
            testId="input-keyboard-disabled"
            label="Disabled Input"
            placeholder="Skip me"
            disabled
          />
          <Input
            testId="input-keyboard-third"
            label="Third Input"
            placeholder="Tab to me third"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test keyboard navigation
const user = userEvent.setup()
const firstInput = screen.getByTestId('input-keyboard-first')
const secondInput = screen.getByTestId('input-keyboard-second')
const disabledInput = screen.getByTestId('input-keyboard-disabled')
const thirdInput = screen.getByTestId('input-keyboard-third')

// Test tab order
await user.tab()
expect(firstInput).toHaveFocus()

await user.tab()
expect(secondInput).toHaveFocus()

// Disabled input should be skipped
await user.tab()
expect(thirdInput).toHaveFocus()
expect(disabledInput).not.toHaveFocus()

// Test shift+tab (reverse)
await user.tab({ shift: true })
expect(secondInput).toHaveFocus()`}
        </div>
      </div>
    </div>
  ),
};

export const IntegrationTesting: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="p-4 border rounded-lg bg-teal-50 border-teal-200">
        <Typography variant="h4" className="mb-3 text-teal-800">
          🔗 Integration Testing
        </Typography>
        <Typography variant="body2" className="text-teal-700">
          Testing inputs within complex forms and user workflows.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Login Form</Typography>
        <div className="p-4 border rounded bg-gray-50">
          <Typography variant="body2" className="mb-3 font-semibold">
            User Authentication
          </Typography>
          <div className="space-y-3">
            <Input
              testId="login-form-email"
              label="Email"
              type="email"
              prefix={<Mail01Icon className="w-4 h-4" />}
              placeholder="your@email.com"
              required
            />
            <Input
              testId="login-form-password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <Input
              testId="login-form-remember"
              type="checkbox"
              label="Remember me"
            />
          </div>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test login form integration
test('Login form handles user input correctly', async () => {
  const user = userEvent.setup()
  const onSubmit = jest.fn()
  
  render(<LoginForm onSubmit={onSubmit} />)
  
  // Fill out form
  const emailInput = screen.getByTestId('login-form-email')
  const passwordInput = screen.getByTestId('login-form-password')
  const rememberCheckbox = screen.getByTestId('login-form-remember')
  
  await user.type(emailInput, 'user@example.com')
  await user.type(passwordInput, 'password123')
  await user.click(rememberCheckbox)
  
  // Submit form
  const submitButton = screen.getByRole('button', { name: 'Sign In' })
  await user.click(submitButton)
  
  expect(onSubmit).toHaveBeenCalledWith({
    email: 'user@example.com',
    password: 'password123',
    remember: true
  })
})`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Search Interface</Typography>
        <div className="p-4 border rounded bg-gray-50">
          <Typography variant="body2" className="mb-3 font-semibold">
            Item Search
          </Typography>
          <div className="space-y-3">
            <Input
              testId="search-interface-query"
              label="Search Items"
              prefix={<SearchLgIcon className="w-4 h-4" />}
              placeholder="Search for items..."
              allowClear
            />
            <Input
              testId="search-interface-filter"
              label="Category Filter"
              placeholder="Filter by category..."
            />
            <Input
              testId="search-interface-sort"
              label="Sort Order"
              placeholder="Sort by..."
            />
          </div>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test search interface integration
test('Search interface updates results correctly', async () => {
  const user = userEvent.setup()
  const onSearch = jest.fn()
  
  render(<SearchInterface onSearch={onSearch} />)
  
  const queryInput = screen.getByTestId('search-interface-query')
  const filterInput = screen.getByTestId('search-interface-filter')
  
  // Test search query
  await user.type(queryInput, 'sword')
  expect(onSearch).toHaveBeenCalledWith({
    query: 'sword',
    filter: '',
    sort: ''
  })
  
  // Test filter
  await user.type(filterInput, 'weapons')
  expect(onSearch).toHaveBeenCalledWith({
    query: 'sword',
    filter: 'weapons',
    sort: ''
  })
  
  // Test clear functionality
  const clearButton = screen.getByLabelText('Clear input')
  await user.click(clearButton)
  expect(queryInput).toHaveValue('')
})`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Profile Form</Typography>
        <div className="p-4 border rounded bg-gray-50">
          <Typography variant="body2" className="mb-3 font-semibold">
            User Profile
          </Typography>
          <div className="space-y-3">
            <Input
              testId="profile-form-username"
              label="Username"
              prefix={<User01Icon className="w-4 h-4" />}
              placeholder="Choose username"
              showCount
              maxLength={20}
            />
            <Input
              testId="profile-form-bio"
              type="textarea"
              label="Bio"
              placeholder="Tell us about yourself..."
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
            />
          </div>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test profile form integration
test('Profile form validates and saves correctly', async () => {
  const user = userEvent.setup()
  const onSave = jest.fn()
  
  render(<ProfileForm onSave={onSave} />)
  
  const usernameInput = screen.getByTestId('profile-form-username')
  const bioInput = screen.getByTestId('profile-form-bio')
  const websiteInput = screen.getByTestId('profile-form-website')
  
  // Fill out profile
  await user.type(usernameInput, 'hero_of_time')
  await user.type(bioInput, 'Adventurer from Hyrule')
  await user.type(websiteInput, 'mysite')
  
  // Test character counting
  expect(screen.getByText('12/20')).toBeInTheDocument() // username count
  expect(screen.getByText('22/500')).toBeInTheDocument() // bio count
  
  // Save profile
  const saveButton = screen.getByRole('button', { name: 'Save Profile' })
  await user.click(saveButton)
  
  expect(onSave).toHaveBeenCalledWith({
    username: 'hero_of_time',
    bio: 'Adventurer from Hyrule',
    website: 'https://mysite.com'
  })
})`}
        </div>
      </div>
    </div>
  ),
};
