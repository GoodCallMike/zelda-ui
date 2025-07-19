import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { DatePicker } from './DatePicker';

expect.extend(toHaveNoViolations);

describe('DatePicker Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <DatePicker 
        label="Birth Date" 
        description="Enter your birth date"
        placeholder="MM/DD/YYYY"
      />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations with error', async () => {
    const { container } = render(
      <DatePicker 
        label="Birth Date" 
        errorMessage="Please enter a valid date"
      />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations when disabled', async () => {
    const { container } = render(
      <DatePicker 
        label="Birth Date" 
        disabled
      />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations with calendar open', async () => {
    const { container } = render(
      <DatePicker 
        label="Birth Date"
        value={new Date(2023, 11, 25)}
      />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});