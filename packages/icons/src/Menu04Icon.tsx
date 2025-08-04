import type { SVGProps } from 'react';

export const Menu04Icon = ({
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
    aria-label={props['aria-label'] || 'Menu04'}
  >
    <path
      d="M3 12H21M3 6H21M9 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
