import React, { useState, useEffect } from 'react';

import { SearchInputProps } from './searchInput.types';
import SearchInputStyled from './searchInput.styled';

const SearchInput = ({
  className,
  placeholder,
  submit,
  value = '',
}: SearchInputProps) => {
  const [_value, _setValue] = useState(value);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    _setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit(_value);
  };

  useEffect(() => {
    _setValue(value);
  }, [value]);

  return (
    <SearchInputStyled
      onSubmit={e => handleSubmit(e)}
      autoCapitalize="off"
      className={`${className ? className : ''}`}
    >
      <label htmlFor="searchInput">Keyword search</label>
      <input
        type="search"
        value={_value}
        onChange={e => handleChange(e)}
        placeholder={placeholder ? placeholder : 'Search'}
        id="searchInput"
      />
      <button type="submit" value="search">
        Go
      </button>
    </SearchInputStyled>
  );
};

export default SearchInput;
