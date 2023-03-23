// A whole mess of hooks to make this work
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

// Gives App all the functionality of Component then adds some additional properties
class App extends Component {
  // Different way of writing a function, https://www.w3schools.com/react/react_es6_arrow.asp
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  // Triggering the app to show up
  render() {
    //Just here for troubleshooting
    console.log('this', this);
// If there's an error then have this pop up
    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occurred.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }
// Rendering the card game
    return (
      <div>
        <h2>♡ ♤ Evens or Odds ♢ ♧</h2>
        {
          // If the game is in the started state then do this...
          this.props.gameStarted ? (
            <div>
              <h3>The game is on!</h3>
              <GameState />
              <br />
              <Guess />
              <br />
              <DrawCard />
              <hr />
              <Card />
              <hr />
              <button onClick={this.props.cancelGame}>Cancel Game</button>
            </div>
          ) : /* If it's not started then do this */ (
            <div>
              <h3>A new game awaits</h3>
              <br />
              <button onClick={this.startGame}>Start Game</button>
              <hr />
              <Instructions />
            </div>
          )
        }
      </div>
    ); 
  }
}

// Updating our state
const mapStateToProps = state => {
  console.log('state', state);

  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => fetchNewDeck(dispatch)
//   };
// }


// What does this section do?
// This is where you what parts of the app can pass info to the others (scope and scale)
// In this case it's making the listed stuff below available in the state 
// Cool discussion on the topic here: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops
const componentConnector = connect(
  mapStateToProps,
  {
    startGame,
    cancelGame,
    fetchNewDeck
  }
);

export default componentConnector(App);
