import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Create a TypeAhead component
const TypeAhead = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    axios.get('/items')
      .then(response => {
        setData(response.data);
      });
  }, []);

  const handleTextChange = (event) => {
    const updatedText = event.target.value;
    const updatedSuggestions = data.filter((el) => {
      return el.toLowerCase().includes(updatedText.toLowerCase());
    })

    setSuggestions(updatedSuggestions);
    setValue(updatedText);
  }

  return (
    <>
      <input value={value} onChange={handleTextChange} />
      <br />
      <ul>
        {suggestions.map((el) => <li value={el} key={el}>{el}</li>)}
      </ul>
    </>
  )
}

export default TypeAhead;