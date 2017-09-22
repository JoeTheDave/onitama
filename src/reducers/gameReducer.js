import { sortBy, cloneDeep, fill, shuffle } from 'lodash';
import {
  CARDS_RECEIVED,
  CARD_SELECTED,
  EXECUTE_MOVE,
  PAWN_SELECTED,
  START_NEW_GAME,
  RESET_ALL_REDUCERS,
  players,
} from 'Architecture/constants';

const isCheck = () => {

};

const calculateValidMoves = state => {
  state.actionGrid = fill(Array(25), null);
  if (!state.selectedCard || !state.selectedPawn) {
    return state;
  }

  state.selectedCard.attackPattern.forEach(attackOption => {
    const playerVariant = (state.turn === players.blue ? 1 : -1);
    const attackTarget = state.selectedPawn.location + (attackOption.y * -5 * playerVariant) + (attackOption.x * playerVariant);
    const xPosition = (state.selectedPawn.location % 5) + (attackOption.x * playerVariant);
    if (attackTarget >= 0 && attackTarget <= 24 && xPosition >= 0 && xPosition <= 4) {
      state.actionGrid[attackTarget] = !state.pawns.some(p => p.location === attackTarget && p.player === state.turn);
    }
  });

  return state;
};

const newGameState = calculateValidMoves({
  pawns: [
    { id: 'r1', location: 0, player: players.red, isMaster: false, alive: true },
    { id: 'r2', location: 1, player: players.red, isMaster: false, alive: true },
    { id: 'rK', location: 2, player: players.red, isMaster: true, alive: true },
    { id: 'r3', location: 3, player: players.red, isMaster: false, alive: true },
    { id: 'r4', location: 4, player: players.red, isMaster: false, alive: true },
    { id: 'b1', location: 20, player: players.blue, isMaster: false, alive: true },
    { id: 'b2', location: 21, player: players.blue, isMaster: false, alive: true },
    { id: 'bK', location: 22, player: players.blue, isMaster: true, alive: true },
    { id: 'b3', location: 23, player: players.blue, isMaster: false, alive: true },
    { id: 'b4', location: 24, player: players.blue, isMaster: false, alive: true },
  ],
  redCaptured: 0,
  blueCaptured: 0,
  turn: null,
  selectedCard: null,
  selectedPawn: null,
  redInCheck: false,
  blueInCheck: false,
});

const executeMove = (state, squareId) => {
  if (state.actionGrid[squareId]) {
    const newTurn = state.turn === players.blue ? players.red : players.blue;

    const newPawns = [...state.pawns];
    const activePawn = newPawns.find(p => p.id === state.selectedPawn.id);
    activePawn.location = squareId;
    const capturedPawn = newPawns.find(p => p.location === activePawn.location && p.id !== activePawn.id);
    if (capturedPawn) {
      capturedPawn.alive = false;
      if (state.turn === players.blue) {
        capturedPawn.location = 29 + state.redCaptured;
        state.redCaptured++;
      } else {
        capturedPawn.location = 25 + state.blueCaptured;
        state.blueCaptured++;
      }
    }

    const newCards = [...state.cards];
    const activeCard = newCards.find(c => c.id === state.selectedCard.id);
    const sideCard = newCards.find(c => c.location === `${state.turn.toLowerCase()}-3`);

    sideCard.location = activeCard.location;
    activeCard.location = `${newTurn.toLowerCase()}-3`;

    return {
      ...state,
      selectedCard: null,
      selectedPawn: null,
      turn: newTurn,
      pawns: newPawns,
      cards: newCards,
    };
  }
  return state;
};

const cardSelected = (state, card) => {
  if (state.turn && card.location.split('-')[0] === state.turn.toLowerCase() && card.location.split('-')[1] !== '3') {
    if (state.selectedCard && card.id === state.selectedCard.id) {
      return { ...state, selectedCard: null };
    }
    return { ...state, selectedCard: card };
  }
  return state;
};

const pawnSelected = (state, pawn) => {
  if (state.turn) {
    if (pawn.player === state.turn) {
      if (state.selectedPawn && pawn.id === state.selectedPawn.id) {
        return { ...state, selectedPawn: null };
      }
      return { ...state, selectedPawn: pawn };
    } else if (state.selectedCard && state.selectedPawn) {
      return executeMove(state, pawn.location);
    }
  }
  return state;
};

const shuffleDeck = cards => sortBy(shuffle(cards).map((card, index) => ({
  ...card,
  location: 'deck',
  deckPosition: index,
})), 'physicalOrder');

const initialState = {
  cards: [],
  ...newGameState,
};

const cardAtDeckPosition = (cards, deckPosition) => cards.find(c => c.deckPosition === deckPosition);

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_RECEIVED:
      return {
        ...state,
        cards: shuffleDeck(action.cards),
      };

    case START_NEW_GAME:
      const cards = shuffleDeck(state.cards);
      const len = cards.length;
      const turn = cardAtDeckPosition(cards, len - 5).firstPlayer;
      cardAtDeckPosition(cards, len - 1).location = 'blue-1';
      cardAtDeckPosition(cards, len - 2).location = 'blue-2';
      cardAtDeckPosition(cards, len - 3).location = 'red-1';
      cardAtDeckPosition(cards, len - 4).location = 'red-2';
      cardAtDeckPosition(cards, len - 5).location = (turn === players.blue ? 'blue-3' : 'red-3');

      return {
        ...state,
        ...newGameState,
        cards,
        turn,
      };

    case CARD_SELECTED:
      return calculateValidMoves(cardSelected(cloneDeep(state), action.card));

    case PAWN_SELECTED:
      return calculateValidMoves(pawnSelected(cloneDeep(state), action.pawn));

    case EXECUTE_MOVE:
      return calculateValidMoves(executeMove(cloneDeep(state), action.squareId));

    case RESET_ALL_REDUCERS:
      return { ...initialState };

    default:
      return state;
  }
}
