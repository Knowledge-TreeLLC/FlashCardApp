import React, {useState, useEffect} from 'react';


const Input = () => {
  
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = () => {
    fetch('http:localhost:3000/cards', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
        'front': frontText,
        'back': backText ,
        'description': category
      })
    })
      .then(() => {
        setFrontText('');
        setBackText('');
        setCategory('');
      })
  }

  return(
    <div>
      <h4>
        input?
      </h4>
      <form>
        <label htmlFor="front">Front:
          <input type="text" id="front" />
        </label>
        <label htmlFor="back">Back:
          <input type="text" id="back" />
        </label>
        <label htmlFor="category">Category:
          <input type="text" id="category" />
        </label>
        <button type="submit" onClick={onSubmit}>Add</button>
      </form>
    </div>
  )
}
export default Input;