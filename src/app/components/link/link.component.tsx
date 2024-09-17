import React from 'react';
import type { ReactNode } from 'react';
import { Link as PageLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

type LinkElement = HTMLSpanElement & HTMLAnchorElement;

export type LinkProps = {
  path?: string;
  children?: ReactNode;
  openInNewWindow?: boolean;
  className?: string;
};

/**
 * A custom link component that handles internal and external links.
 */
const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const { path, children, openInNewWindow = false, className = '' } = props;

  /**
   * If no path is provided, render a span element
   */
  if (!path) {
    return (
      <span
        className={`link link--no-path ${className ? className : ''}`}
        ref={forwardedRef}
      >
        {children}
      </span>
    );
  }

  /**
   * Encode the path URI
   */
  const encodedPath = encodeURI(path);

  if (!openInNewWindow && (!path.startsWith('/') || path.startsWith('#'))) {
    /**
     * If the link is a hash link use the HashLink component
     */
    if (path.indexOf('#') > -1) {
      return <HashLink {...props} smooth={true} to={path} />;
    }
    /**
     * If the link is an internal route, render a PageLink component <Link>
     */
    return (
      <PageLink
        className={`link ${className ? className : ''}`}
        ref={forwardedRef}
        to={encodedPath}
        {...props}
      >
        {children}
      </PageLink>
    );
  } else {
    /**
     * If the link is an external URL, render an anchor element <a>
     */
    return (
      <a
        className={`link link--external ${className ? className : ''}`}
        href={encodedPath}
        ref={forwardedRef}
        rel="noreferrer"
        target={openInNewWindow ? '_blank' : '_self'}
        {...props}
      >
        {children}
        {openInNewWindow && <span className="sr-only">(opens in new tab)</span>}
      </a>
    );
  }
});

Link.displayName = 'Link';

export default Link;
