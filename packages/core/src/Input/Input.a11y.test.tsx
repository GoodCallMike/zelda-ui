import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { runAccessibilityTestSuite } from '../utils/accessibility';
import { Input } from './Input';

expect.extend(toHaveNoViolations);

describe('Input Accessibility', () => {
  it('should pass comprehensive accessibility test suite', async () => {
    await runAccessibilityTestSuite(
      <Input label="Email" placeholder="Enter your email" />,
      {
        expectedFocusableElements: 1,
      },
    );
  });

  it('should handle keyboard navigation correctly', async () => {
    await runAccessibilityTestSuite(
      <div>
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>,
      {
        expectedFocusableElements: 2,
        skipAxe: true,
      },
    );
  });

  it('should not have accessibility violations with clear button', async () => {
    const { container } = render(
      <Input label="Search" allowClear defaultValue="test" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should announce character count to screen readers', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Input label="Message" showCount maxLength={100} />,
    );

    const input = container.querySelector('input');
    if (input) await user.type(input, 'Hello world');

    const countElement = container.querySelector('[class*="text-xs"]');
    expect(countElement).toHaveTextContent('11/100');

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should handle error state accessibly', async () => {
    const { container } = render(<Input label="Email" status="error" />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
