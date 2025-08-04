import type { SVGProps } from 'react';

export const Upload02Icon = ({
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
    aria-label={props['aria-label'] || 'Upload02'}
  >
    <path
      d="M21 3H3M18 13L12 7M12 7L6 13M12 7V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
