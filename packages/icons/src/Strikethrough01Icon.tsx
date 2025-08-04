import type { SVGProps } from 'react';

export const Strikethrough01Icon = ({
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
    aria-label={props['aria-label'] || 'Strikethrough01'}
  >
    <path
      d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12M18 8C18 5.79086 16.2091 4 14 4H10C7.79086 4 6 5.79086 6 8M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
