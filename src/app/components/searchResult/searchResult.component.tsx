import React from 'react';

import type { SearchResultProps } from '~/search/searchResults.mapper';

import Link from '~/components/link/link.component';

const SearchResult = ({ title, uri }: SearchResultProps) => {
  return <Link path={uri}>{title}</Link>;
};

export default SearchResult;
