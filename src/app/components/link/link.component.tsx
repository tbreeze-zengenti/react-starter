import React from 'react';
import type { MouseEvent, ReactNode } from 'react';

import { Link as PageLink } from 'react-router-dom';

export type LinkProps = {
  className?: string;
  children?: ReactNode;
  download?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  openInNewWindow?: boolean;
  title?: string;
  path?: string;
};

/**
 * A custom link component that handles internal and external links.
 */
const Link = ({
  className,
  children,
  download,
  onClick,
  openInNewWindow,
  title,
  path,
}: LinkProps) => {
  // If no path is provided, render a span element
  if (!path) {
    return (
      <span className={`link link--no-path ${className ? className : ''}`}>
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

  if (target !== '_blank' && path && path.startsWith('/')) {
    // If the link is an internal route, render a PageLink component
    return (
      <PageLink
        className={`link ${className ? className : ''}`}
        download={download}
        onClick={handleClick}
        title={title}
        to={encodedPath}
      >
        {children}
      </PageLink>
    );
  } else {
    // If the link is an external URL, render an anchor element
    return (
      <a
        className={`link link--external ${className ? className : ''}`}
        download={download}
        href={encodedPath}
        onClick={handleClick}
        target={target}
        title={title}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default Link;
