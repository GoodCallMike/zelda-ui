import type { SVGProps } from 'react';

export const BarChart03Icon = ({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="bar chart 03 icon"
    {...props}
  >
    <path d="M6 20V4M18 20V16M12 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
