import { SET_GUESS, SET_GAME_STARTED, DECK_DRAW } from '../actions/types';

// Sets initial game state props of guess as blank and no correct guesses yet
const DEFAULT_GAME_STATE = { guess: '', correctGuesses: 0 };

const EVENS = ['2', '4', '6', '8', '10'];
const ODDS = ['ACE', '3', '5', '7', '9'];

// This reducer sets things like if the game is running, if a card is drawn
const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
  // Does different things based on what sort of action was triggered
  switch(action.type) {
    // If a SET_GUESS action goes off then the reducer modifies the guess prop
    case SET_GUESS:
      return { ...state, guess: action.guess };
      // If a SET_GAME_STARTED action goes off then this sets guess to empty and correct guessess to 0
    case SET_GAME_STARTED:
      return DEFAULT_GAME_STATE;
      // 
    case DECK_DRAW.FETCH_SUCCESS:
      const { value } = action.cards[0];
      const { guess, correctGuesses } = state;

      if (
        (guess === 'even' && EVENS.includes(value)) ||
        (guess === 'odd' && ODDS.includes(value))
      ) {
        return { ...state, correctGuesses: correctGuesses+1 };
      }

      return state;
    default:
      return state;
  }
}

export default gameStateReducer;
