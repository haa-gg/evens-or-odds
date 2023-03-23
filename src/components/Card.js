// This component outputs the actual card you see on screen
// Hooks
import React from 'react';
import { connect } from 'react-redux';

// Set the card constant equal to a function that passes in a parameter of {cards} (the card state is defined in actions/deck.js)
// https://www.w3schools.com/react/react_es6_arrow.asp
const Card = ({ cards }) => {

  // If the cards property is empty then return null
  if (!cards[0]) return null;

  // Set the value, suit, and image to that of the first card
  const { value, suit, image } = cards[0];

  // Render the values we set above as a card on the screen
  return (
    <div>
      <h3>{value} of {suit}</h3>
      <img src={image} alt='card-image' />
    </div>
  );
}

// Makes our card component available to the rest of the app
// https://react-redux.js.org/api/connect
export default connect(
  ({ deck: { cards }}) => ({ cards })
)(Card);
