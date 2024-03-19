import React, { useState, useEffect } from 'react';

export type SearchInputProps = {
  className?: string;
  placeholder?: string;
  submit: (term: string) => void; // Callback function invoked when the search term is submitted.
  value?: string;
};

/**
 * A component for displaying a search input field.
 */
const SearchInput = ({
  className,
  placeholder,
  submit,
  value = '',
}: SearchInputProps) => {
  const [_value, _setValue] = useState(value);

  /**
   * Handles changes to the search input value.
   */
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    _setValue(e.currentTarget.value);
  };

  /**
   * Handles form submission of the search input.
   */
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit(_value);
  };

  useEffect(() => {
    _setValue(value);
  }, [value]);

  return (
    <form
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
    </form>
  );
};

export default SearchInput;
