import type { SVGProps } from 'react';

export const InfinityIcon = ({
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
    aria-label={props['aria-label'] || 'Infinity'}
  >
    <path
      d="M18.1777 8C23.2737 8 23.2737 16 18.1777 16C13.0827 16 11.0447 8 5.43875 8C0.85375 8 0.85375 16 5.43875 16C11.0447 16 13.0828 8 18.1788 8H18.1777Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
