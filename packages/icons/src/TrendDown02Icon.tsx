import type { SVGProps } from 'react';

export const TrendDown02Icon = ({
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
    aria-label={props['aria-label'] || 'Trend Down02'}
  >
    <path
      d="M7 7L17 17M17 17V7M17 17H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
