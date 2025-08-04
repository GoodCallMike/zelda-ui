import type { SVGProps } from 'react';

export const FlipBackwardIcon = ({
  className = 'size-4',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    {...props}
    aria-label={props['aria-label'] || 'Flip Backward'}
  >
    <path
      d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
