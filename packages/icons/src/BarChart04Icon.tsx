import type { SVGProps } from 'react';

export const BarChart04Icon = ({
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
    aria-label={props['aria-label'] || 'Bar Chart04'}
  >
    <path
      d="M3 11L3 21M15 11L15 21M9 3L9 21M21 3V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
