import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TypeAhead = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3678/items')
      .then((response) => {
        setData(response.data);
      })
  })

  // I just deleted the video once this turned into a debug session that lasted too long.
  // This is where I was stuck. I initially tried to use filterSuggestions after setValue in handleTextChange
  // but it was updating the suggestions one character too late.
  // For instance, when I type D, everything shows. Then when it's Dw, I see Kent C Dodds & Dwayne Draper
  // So I tried a useEffect with a [value] second parameter, but it was still updating too late.
  // But I feel like except me missing some async bug, my code isn't that bad.

  // useEffect(() => {
  //   filterSuggestions(), [value]
  // })

  const filterSuggestions = () => {
    setSuggestions(data.filter((el) => {
      return el.toLowerCase().includes(value.toLowerCase());
    }))
  }

  const handleTextChange = (event) => {
    setValue(event.target.value)
    // I am having trouble in here. I don't know if I should call this here, or in a useEffect.
    filterSuggestions();
  }

  return (
    <React.Fragment>
      <input value={value} onChange={handleTextChange} />
      <br />
      <ul>
        {suggestions.map(el => <li value={el} key={el}>{el}</li>)}
      </ul>
    </React.Fragment>
  )

}

export default TypeAhead;