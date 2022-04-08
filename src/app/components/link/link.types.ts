export interface LinkProps {
  className?: string;
  children: any;
  download?: any;
  href?: string; // Add ability to retrofit to <a href
  onClick?: (ev: any) => void;
  openInNewWindow?: boolean;
  title?: string;
  uri?: string;
}
