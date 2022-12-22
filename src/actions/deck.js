import {FETCH_DECKRESULT, FETCH_DECK_RESULT} from './types';

export const fetchDeckResult = deckJson => {
    const {remaining, deck_id} = deckJson;

    return { type: FETCH_DECK_RESULT, remaining, deck_id};
}

export const fetchNewDeck = dispatch => {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
    .then(response => response.json())
    .then(json => dispatch(fetchDeckResult(json)));
}