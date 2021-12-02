import React, { useState, useEffect } from 'react';


const Input = () => {

  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = () => {
    // console.log(frontText);
    // console.log(backText);
    // console.log(category);

    fetch('http://localhost:3000/cards', {
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

  return (
    <div>
      <form>
        <label htmlFor="front">Front:
          <input type="text" id="front" value={frontText} onChange={el => setFrontText(el.target.value)}/>
        </label>   
        <br />
        <label htmlFor="back">Back:
          <input type="text" id="back" value={backText} onChange={el => setBackText(el.target.value)}/>
        </label>
        <br />
        <label htmlFor="category">Category:
          <input type="text" id="category" value={category} onChange={el => setCategory(el.target.value)}/>
        </label>
        <br />
      </form>
      <button type="submit" onClick={onSubmit}>Add</button>
    </div>
  )
}
export default Input;