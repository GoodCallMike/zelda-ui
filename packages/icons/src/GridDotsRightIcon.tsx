import type { SVGProps } from 'react';

export const GridDotsRightIcon = ({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="grid dots right icon"
    {...props}
  >
    <path d="M7.5 3H7.51M7.5 12H7.51M7.5 21H7.51M16.5 3H16.51M16.5 12H16.51M16.5 21H16.51M12 3H12.01M12 12H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M3 3H3.01M3 12H3.01M3 21H3.01M3 16.5H3.01M3 7.5H3.01M21 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
