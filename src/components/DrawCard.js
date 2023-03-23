// This component renders the draw card button and describes what it does when you click it 
// Import thunk for async function
import { isAsyncThunkAction } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
// Import the fetchDrawCard since we want to use that action on our button
import { fetchDrawCard } from '../actions/deck';

// Defining DrawCard as a function that gets passed the deck_id and the fetchDrawCard action
const DrawCard = ({ deck_id, fetchDrawCard }) => {
  return (
    <div>
      {/* Here's the button that will be rendered and when you click it the fetchDrawCard function fires and gets passed the deck ID */}
      <button onClick={fetchDrawCard(deck_id)}>Draw the next card!</button>
    </div>
  )
}

// Sending updated properties to the state
const mapDispatchToProps = dispatch => {
  return {
    // Specifically it's sending back what card was drawn
    fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
  }
}

// This is saying it's fine for the rest of the app to access these properties 
// https://react-redux.js.org/api/connect
export default connect(
  ({ deck: { deck_id } }) => ({ deck_id }),
  mapDispatchToProps
)(DrawCard);
