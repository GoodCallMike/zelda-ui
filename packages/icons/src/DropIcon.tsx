import type { SVGProps } from 'react';

export const DropIcon = ({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="drop icon"
    {...props}
  >
    <path opacity="0.12" d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9391 4.20651 11.9264 4.58152 11C5.76829 8.06817 12 2 12 2C12 2 18.2317 8.06817 19.4185 11C19.7935 11.9264 20 12.9391 20 14Z" fill="currentColor"/>
<path d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9391 4.20651 11.9264 4.58152 11C5.76829 8.06817 12 2 12 2C12 2 18.2317 8.06817 19.4185 11C19.7935 11.9264 20 12.9391 20 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
