import type { SVGProps } from 'react';

export const SpacingWidth01Icon = ({
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
    aria-label={props['aria-label'] || 'Spacing Width01'}
  >
    <path
      d="M6 12H18M6 12L8 9M6 12L8 15M18 12L16 9M18 12L16 15M21 21V3M3 21V3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
