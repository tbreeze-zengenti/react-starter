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
  uri,
}: LinkProps) => {
  className += ' link';
  if (!uri) {
    return (
      <span className={className} style={{ opacity: '.65' }}>
        {children}
      </span>
    );
  }

  const newWindow = openInNewWindow ? '_blank' : '_self';
  uri = encodeURI(uri);

  const _handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (newWindow !== '_blank' && uri && uri.startsWith('/')) {
    return (
      <PageLink
        className={className}
        download={download}
        onClick={e => _handleClick(e)}
        title={title}
        to={uri}
      >
        {children}
      </PageLink>
    );
  } else {
    return (
      <a
        className={className}
        download={download}
        href={uri}
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
