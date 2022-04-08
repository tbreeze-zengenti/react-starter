import React, { useState, useEffect } from 'react';

export interface SearchInputProps {
  searchTerm: string;
  placeholderText: string;
  submitEvent: (e: any, a: any) => void;
  className: string;
}

const SearchInput = ({
  searchTerm,
  placeholderText,
  submitEvent,
  className,
}: SearchInputProps) => {
  const [stateValue, setStateValue] = useState(searchTerm);
  useEffect(() => setStateValue(searchTerm), [searchTerm]);

  const handleChange = (event: any) => {
    setStateValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key == 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    submitEvent && submitEvent(stateValue, 0);
  };

  return (
    <form className={className}>
      <label htmlFor="searchInput">Keyword search</label>
      <input
        type="text"
        placeholder={placeholderText ? placeholderText : 'Search'}
        autoComplete="off"
        value={stateValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        id="searchInput"
      />
      <button onClick={handleSubmit}>Go</button>
    </form>
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string,
  placeholderText: PropTypes.string,
  submitEvent: PropTypes.func,
  className: PropTypes.string,
};

export default SearchInput;
