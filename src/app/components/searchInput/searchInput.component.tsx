import React, { useState } from 'react';
import { SearchProps } from '@zengenti/contensis-react-base/search';

type SearchInputProps = {
  searchTerm: SearchProps['searchTerm'];
  updateSearchTerm: SearchProps['updateSearchTerm'];
};

const SearchInput = ({ searchTerm, updateSearchTerm }: SearchInputProps) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!searchInputValue) {
      updateSearchTerm(' ');
    } else updateSearchTerm(searchInputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit} role="search" style={{ display: 'flex' }}>
        <div>
          <input
            type="search"
            id="searchInput"
            title="search input"
            placeholder="Search"
            enterKeyHint="search"
            onChange={event => setSearchInputValue(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
      {searchTerm && <p>Search Term: {searchTerm}</p>}
    </>
  );
};

export default SearchInput;
