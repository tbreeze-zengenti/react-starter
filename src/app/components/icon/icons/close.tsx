import React from 'react';

export const close = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <title>Close</title>
      <path
        fill="currentColor"
        d="M2 15.4351 15.43502884 2.00007116 17.5563492 4.1213915 4.12132034 17.55642034z"
      />
      <path
        fill="currentColor"
        d="M15.4355 17.5564 2.00047116 4.12137116 4.1217915 2.0000508l13.43502884 13.43502885z"
      />
    </svg>
  );
};
