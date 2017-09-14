import { shuffle } from 'lodash';
import { CARDS_RECEIVED, START_NEW_GAME, RESET_ALL_REDUCERS, players } from 'Architecture/constants';

const newGameState = {
  pawns: [
    { id: 'r1', location: 0, player: players.red, isMaster: false },
    { id: 'r2', location: 1, player: players.red, isMaster: false },
    { id: 'rK', location: 2, player: players.red, isMaster: true },
    { id: 'r3', location: 3, player: players.red, isMaster: false },
    { id: 'r4', location: 4, player: players.red, isMaster: false },
    { id: 'b1', location: 20, player: players.blue, isMaster: false },
    { id: 'b2', location: 21, player: players.blue, isMaster: false },
    { id: 'bK', location: 22, player: players.blue, isMaster: true },
    { id: 'b3', location: 23, player: players.blue, isMaster: false },
    { id: 'b4', location: 24, player: players.blue, isMaster: false },
  ],
  activeCards: {
    card1: null,
    card2: null,
    card3: null,
    card4: null,
    card5: null,
  },
  turn: null,
};

const shuffleDeck = cards => shuffle(cards).map((card, index) => ({
  ...card,
  location: `deck-${index}`,
}));

const initialState = {
  cards: [],
  ...newGameState,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_RECEIVED:
      return {
        ...state,
        cards: shuffleDeck(action.cards),
      };
    case START_NEW_GAME:
      const cards = shuffleDeck(state.cards);
      cards[cards.length - 1].location = 'blue-1';
      cards[cards.length - 2].location = 'blue-2';
      cards[cards.length - 3].location = 'red-1';
      cards[cards.length - 4].location = 'red-2';
      return {
        ...state,
        ...newGameState,
        cards,
      };
    case RESET_ALL_REDUCERS:
      return { ...initialState };

    default:
      return state;
  }
}
