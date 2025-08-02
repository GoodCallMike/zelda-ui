import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';
import { Save01Icon } from '@zelda/icons';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('should not have accessibility violations - primary variant', async () => {
    const { container } = render(<Button variant="primary">Primary Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations - secondary variant', async () => {
    const { container } = render(<Button variant="secondary">Secondary Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations - tertiary variant', async () => {
    const { container } = render(<Button variant="tertiary">Tertiary Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations - link variant', async () => {
    const { container } = render(<Button variant="link">Link Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations when disabled', async () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations with icon', async () => {
    const { container } = render(
      <Button icon={Save01Icon} iconPosition="left">
        Save Document
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should not have accessibility violations with icon only', async () => {
    const { container } = render(
      <Button icon={Save01Icon} aria-label="Save document" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});