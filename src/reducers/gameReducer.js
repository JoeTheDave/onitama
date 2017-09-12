import { shuffle } from 'lodash';
import { CARDS_RECEIVED, START_NEW_GAME, RESET_ALL_REDUCERS, players } from 'Architecture/constants';

const newGameState = {
  pawns: [
    { id: 'r1', location: 0, player: players.red },
    { id: 'r2', location: 1, player: players.red },
    { id: 'rK', location: 2, player: players.red },
    { id: 'r3', location: 3, player: players.red },
    { id: 'r4', location: 4, player: players.red },
    { id: 'b1', location: 20, player: players.blue },
    { id: 'b2', location: 21, player: players.blue },
    { id: 'bK', location: 22, player: players.blue },
    { id: 'b3', location: 23, player: players.blue },
    { id: 'b4', location: 24, player: players.blue },
  ],
  activeCards: {
    card1: null,
    card2: null,
    card3: null,
    card4: null,
    card5: null,
  },
  turn: null
};

const initialState = {
  cards: [],
  ...newGameState
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_RECEIVED:
      return {
        ...state,
        cards: shuffle(action.cards)
      };
    case START_NEW_GAME:
      return {
        ...state,
        ...newGameState
      };
    case RESET_ALL_REDUCERS:
      return { ...initialState };

    default:
      return state;
  }
}
