import React from 'react';
import { SearchResultProps } from './searchResult.types';
import Link from '~/components/link/link';

const SearchResult = ({
  description,
  image,
  link,
  title,
}: SearchResultProps) => {
  return (
    <div
      style={{
        maxWidth: '1024px',
        display: 'grid',
        gridTemplateColumns: '60px 7fr',
      }}
    >
      <div>
        {image && (
          <img src={image.src} alt={image.alt} style={{ width: '50px' }} />
        )}
      </div>
      <div>
        <p>
          <Link path={link}>{title}</Link>
        </p>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default SearchResult;
