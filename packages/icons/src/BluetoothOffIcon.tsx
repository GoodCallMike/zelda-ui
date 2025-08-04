import type { SVGProps } from 'react';

export const BluetoothOffIcon = ({
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
    aria-label={props['aria-label'] || 'Bluetooth Off'}
  >
    <path
      d="M6 17L12 12V22L17.4398 17.4668M12 7V2L18 7L15.0817 9.43194M21 21L3 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
