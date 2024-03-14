import React from 'react';

import { Link as PageLink } from 'react-router-dom';
import { LinkProps } from './link.types';

const Link = ({
  className,
  children,
  download,
  onClick,
  openInNewWindow,
  title,
  path,
}: LinkProps) => {
  if (!path) {
    return (
      <span className={`link link--no-path ${className ? className : ''}`}>
        {children}
      </span>
    );
  }

  const newWindow = openInNewWindow ? '_blank' : '_self';
  path = encodeURI(path);

  const _handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (newWindow !== '_blank' && path && path.startsWith('/')) {
    return (
      <PageLink
        className={`link ${className ? className : ''}`}
        download={download}
        onClick={e => _handleClick(e)}
        title={title}
        to={path}
      >
        {children}
      </PageLink>
    );
  } else {
    return (
      <a
        className={`link link--external ${className ? className : ''}`}
        download={download}
        href={path}
        onClick={e => _handleClick(e)}
        target={newWindow}
        title={title}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default Link;
