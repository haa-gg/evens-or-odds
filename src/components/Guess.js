// This component displays the evens or odds guess buttons
import React from 'react';
import { connect } from 'react-redux';
// this imports an even and odd action that... you guessed it are actions that set you guess to evens or odds
import { setGuessEven, setGuessOdd } from '../actions/guess';

// Displays the visual component when the Guess function is called
const Guess = ({ guess, setGuessEven, setGuessOdd}) => {
  return (
    <div>
      <h3>Will it be even or odd?</h3>
      <div>
        <button
          onClick={setGuessEven}
          style={guess === 'even' ? { border: '2px solid #43a047' } : null}
        >Even</button>
        {' '}
        <button
          onClick={setGuessOdd}
          style={guess === 'odd' ? { border: '2px solid #43a047' } : null}
        >Odd</button>
      </div>
    </div>
  )
}

// Lets the app see these states
export default connect(
  ({ gameState: { guess }}) => ({ guess }),
  { setGuessEven, setGuessOdd }
)(Guess);
