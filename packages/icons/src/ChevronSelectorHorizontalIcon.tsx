import type { SVGProps } from 'react';

export const ChevronSelectorHorizontalIcon = ({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="chevron selector horizontal icon"
    {...props}
  >
    <path d="M9 7L4 12L9 17M15 7L20 12L15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
