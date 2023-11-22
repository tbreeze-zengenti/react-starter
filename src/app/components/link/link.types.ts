import type { MouseEvent, ReactNode } from 'react';

export interface LinkProps {
  className?: string;
  children?: ReactNode;
  download?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  openInNewWindow?: boolean;
  title?: string;
  path?: string;
}
