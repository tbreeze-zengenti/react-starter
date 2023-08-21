import type { MouseEvent, ReactNode } from 'react';

export interface LinkProps {
  className?: string;
  children?: ReactNode;
  download?: string;
  href?: string; // Add ability to retrofit to <a href
  onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void;
  openInNewWindow?: boolean;
  title?: string;
  path?: string;
}
