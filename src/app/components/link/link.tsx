import React from 'react';

import { Link as PageLink } from 'react-router-dom';
import { LinkProps } from './link.types';

const Link = ({
  className = '',
  children,
  download,
  onClick,
  openInNewWindow,
  title,
  path,
}: LinkProps) => {
  className += ' link';
  if (!path) {
    return (
      <span className={className} style={{ opacity: '.65' }}>
        {children}
      </span>
    );
  }

  const newWindow = openInNewWindow ? '_blank' : '_self';
  path = encodeURI(path);

  const _handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (newWindow !== '_blank' && path && path.startsWith('/')) {
    return (
      <PageLink
        className={className}
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
        className={className}
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
