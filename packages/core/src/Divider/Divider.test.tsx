import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders basic divider', () => {
    render(<Divider testId="divider" />);
    const divider = screen.getByTestId('divider');
    expect(divider).toBeInTheDocument();
  });

  it('renders with text content', () => {
    render(<Divider testId="text-divider">Section</Divider>);
    const divider = screen.getByTestId('text-divider');
    expect(divider).toBeInTheDocument();
    expect(screen.getByText('Section')).toBeInTheDocument();
  });

  it('renders different orientations', () => {
    render(<Divider orientation="vertical" testId="vertical-divider" />);
    const divider = screen.getByTestId('vertical-divider');
    expect(divider).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Divider className="custom-class" testId="custom-divider" />);
    const divider = screen.getByTestId('custom-divider');
    expect(divider).toHaveClass('custom-class');
  });
});
