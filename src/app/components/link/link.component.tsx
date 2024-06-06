import React from 'react';
import { Link as PageLink } from 'react-router-dom';
import type { MouseEvent, ReactNode } from 'react';

export type LinkProps = {
  path?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  download?: string;
  openInNewWindow?: boolean;
  title?: string;
  className?: string;
};
type LinkElement = HTMLSpanElement & HTMLAnchorElement;

/**
 * A custom link component that handles internal and external links.
 */
const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const {
    path,
    children,
    onClick,
    download,
    openInNewWindow,
    title,
    className = '',
  } = props;

  // If no path is provided, render a span element
  if (!path) {
    return (
      <span className={`link link--no-path ${className}`} ref={forwardedRef}>
        {children}
      </span>
    );
  }

  // Determine whether to open the link in a new window/tab
  const target = openInNewWindow ? '_blank' : '_self';

  // Encode the path URI
  const encodedPath = encodeURI(path);

  // Event handler for click event
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (target !== '_blank' && path?.startsWith('/')) {
    // If the link is an internal route, render a PageLink component
    return (
      <PageLink
        to={encodedPath}
        title={title}
        onClick={handleClick}
        download={download}
        className={`link ${className}`}
        ref={forwardedRef}
      >
        {children}
      </PageLink>
    );
  } else {
    // If the link is an external URL, render an anchor element
    return (
      <a
        href={encodedPath}
        rel="noopener noreferrer"
        title={title}
        onClick={handleClick}
        target={target}
        download={download}
        className={`link link--external ${className}`}
        ref={forwardedRef}
      >
        {children}
      </a>
    );
  }
});
Link.displayName = 'Link';

export default Link;
