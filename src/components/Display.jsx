import React, { useState, useEffect } from 'react';

const Display = (props) => {
  //const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([]);
  const allCards = [];

  const getCards = () => {
    fetch('http://localhost:3000/cards')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCards(data);
      })
      .catch(err => console.log(err));

  }
  for (let i = 0; i < cards.length; i += 1) {
    allCards.push(<h1 key={i}>{`${cards[i].front}, ${cards[i].back}`}</h1>);
  }
  console.log('here: ', allCards);
  return (
    <div>
      <h2>Cards</h2>
      <div>
        <button onClick={getCards}>Generate Cards</button>
      </div>
      <div>
        {allCards}
      </div>
    </div>
  )
}

export default Display;