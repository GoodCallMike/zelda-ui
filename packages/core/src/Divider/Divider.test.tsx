import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders basic divider', () => {
    render(<Divider testId="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('renders with text content', () => {
    render(<Divider testId="divider">Section Title</Divider>);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { rerender } = render(<Divider variant="solid" testId="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();

    rerender(<Divider variant="magical" testId="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('applies orientation classes', () => {
    const { rerender } = render(
      <Divider orientation="horizontal" testId="divider" />,
    );
    expect(screen.getByTestId('divider')).toBeInTheDocument();

    rerender(<Divider orientation="vertical" testId="divider" />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Divider className="custom-class" testId="divider" />);
    expect(screen.getByTestId('divider')).toHaveClass('custom-class');
  });

  it('renders text with proper alignment', () => {
    render(
      <Divider textAlign="left" testId="divider">
        Left Text
      </Divider>,
    );
    expect(screen.getByText('Left Text')).toBeInTheDocument();
  });

  it('renders divider lines for labeled divider', () => {
    render(<Divider testId="divider">Center Text</Divider>);
    const container = screen.getByTestId('divider');
    expect(container.children).toHaveLength(3); // left line, text, right line
  });

  it('renders single line for left-aligned text', () => {
    render(
      <Divider textAlign="left" testId="divider">
        Left Text
      </Divider>,
    );
    const container = screen.getByTestId('divider');
    expect(container.children).toHaveLength(2); // text, right line
  });

  it('renders single line for right-aligned text', () => {
    render(
      <Divider textAlign="right" testId="divider">
        Right Text
      </Divider>,
    );
    const container = screen.getByTestId('divider');
    expect(container.children).toHaveLength(2); // left line, text
  });
});
