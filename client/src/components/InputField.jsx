import React from 'react';
import {useState} from 'react';

const InputField = ({handleInput}) => {

  const [entry, setEntry] = useState('');
  var onType = function (event) {
    setEntry(event.target.value);
  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleInput(entry)
      setEntry('');
    }}>
      <input type="text" placeholder="Add Movie Title" value={entry} onChange = {onType} />
      <input type="submit" value = "Submit" />
    </form>
  )
}

export default InputField;