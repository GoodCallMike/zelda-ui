import type { SVGProps } from 'react';

export const CurrencyYenIcon = ({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="currency yen icon"
    {...props}
  >
    <path d="M12 20.5V11.5M12 11.5L18.5001 3.5M12 11.5L5.50012 3.5M18 11.5H5.99998M17 15.5H6.99998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
