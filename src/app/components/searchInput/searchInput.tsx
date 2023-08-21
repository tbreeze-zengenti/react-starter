import React, { useState, useEffect } from 'react';

import { SearchInputProps } from './searchInput.types';
import SearchInputStyled from './searchInput.styled';

const SearchInput = ({
  searchTerm,
  placeholderText,
  submitEvent,
  className,
}: SearchInputProps) => {
  const [stateValue, setStateValue] = useState(searchTerm);
  useEffect(() => setStateValue(searchTerm), [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event) event.preventDefault();
    submitEvent && submitEvent(stateValue, 0);
  };

  return (
    <SearchInputStyled className={`${className ? className : ''}`}>
      <label htmlFor="searchInput">Keyword search</label>
      <input
        type="text"
        placeholder={placeholderText ? placeholderText : 'Search'}
        autoComplete="off"
        value={stateValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        id="searchInput"
      />
      <button onClick={handleSubmit}>Go</button>
    </SearchInputStyled>
  );
};

export default SearchInput;
