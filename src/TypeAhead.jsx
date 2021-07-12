import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TypeAhead = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('http://localhost:3678/items')
      .then((response) => {
        console.log(response)
      })
  }, [])

  return (
    <div>Something</div>
  )

}

export default TypeAhead;