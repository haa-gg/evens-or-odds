// This component displays the cards remaining and the number of correct guesses you've made
// Hook import
import React from 'react';
import { connect } from 'react-redux';

// defining this variable as a string
const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';

// Set the checkRecord variable to a function that takes in a parameter of correctGuesses
const checkRecord = correctGuesses => {

  // Set the variable "record" to a numeric version (by converting it to a number) of the correctGuessesRecordKey variable
  const record = Number(localStorage.getItem(correctGuessesRecordKey));

  // If you get a higher number of correct guesses than the record...
  if (correctGuesses > record) {

    // ... Then use the localStorage function to store the guess amount and along with the record key
    // doc on localStorage - https://www.w3schools.com/jsref/prop_win_localstorage.asp
    localStorage.setItem(correctGuessesRecordKey, correctGuesses);
// Set the record to the new value and set the newRecord state to true
    return { record: correctGuesses, isNewRecord: true };
  }
  // If there's no new record the set the new record detector to false
  return { record, isNewRecord: false };
}

// Define a variable of GameState as a function taking in the correct guesses and cards remaining
const GameState = ({ correctGuesses, remaining }) => {

  // Makes the word "guess" when you've only guessed once and "guessses" otherwise
  const guessText = correctGuesses === 1 ? 'guess' : 'guesses';

  // set value of record and isnewrecord to the values returned when the checkRecord function runs
  const { record, isNewRecord } = checkRecord(correctGuesses);
  // Set recordLabel to either a celebration thing or just the stated record based on the boolean of isNewRecord
  const recordLabel = isNewRecord ? '🎉 New record' : 'Record';

  // Output the visual component
  return (
    <div>
      <h3>{recordLabel}: {record}</h3>
      <p>{remaining} cards remaining</p>
      <p>{correctGuesses} correct {guessText}</p>
    </div>
  )
}

// Allow other parts of the app to see game state
// https://react-redux.js.org/api/connect
export default connect(
  ({
    deck: { remaining },
    gameState: { correctGuesses }
  }) => ({ remaining, correctGuesses })
)(GameState);
