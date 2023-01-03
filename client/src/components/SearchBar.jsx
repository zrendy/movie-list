import React from 'react';
import {useState} from 'react';

const SearchBar = ({handleSearch}) => {

  const [entry, setEntry] = useState('');
  var onType = function (event) {
    event.preventDefault();
    setEntry(event.target.value);
  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSearch(entry)
      setEntry('');
    }}>
      <input type="text" placeholder="Search Movies" value={entry} onChange = {onType} />
      <input type="submit" value = "Submit" />
    </form>
  )
}

export default SearchBar;