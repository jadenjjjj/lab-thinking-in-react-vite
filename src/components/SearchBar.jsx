import React from 'react';

function SearchBar(props) {
  const { filterText, onFilterTextChange } = props;

  function handleFilterTextChange(e) {
    onFilterTextChange(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
    </form>
  );
}

export default SearchBar;
