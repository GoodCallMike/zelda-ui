import type { SVGProps } from 'react';

export const BluetoothConnectIcon = ({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="bluetooth connect icon"
    {...props}
  >
    <path opacity="0.12" d="M15 17L9 22V12V2L15 7L9 12L15 17Z" fill="currentColor"/>
<path d="M3 7L15 17L9 22V2L15 7L3 17M18 12H18.01M15 12H15.01M21 12H21.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
