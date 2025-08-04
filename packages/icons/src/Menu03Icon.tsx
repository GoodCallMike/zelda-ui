import type { SVGProps } from 'react';

export const Menu03Icon = ({
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
    aria-label={props['aria-label'] || 'Menu03'}
  >
    <path
      d="M3 12H21M3 6H21M3 18H15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
