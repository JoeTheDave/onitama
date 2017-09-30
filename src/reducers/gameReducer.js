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

import gameLogicService from 'Services/gameLogic';

const calculateValidMoves = state => {
  state.actionGrid = fill(Array(25), null);

  if (state.selectedCard && state.selectedPawn) {
    gameLogicService.getValidMovesList(state.selectedPawn, state.selectedCard).forEach(validMove => {
      state.actionGrid[validMove] = !state.pawns.some(p => p.location === validMove && p.player === state.turn) ? 0 : 1;
    });

    if (state.selectedPawn.isMaster) {
      const enemyAttackSquares = (state.turn === players.blue) ? state.redAttackOptions : state.blueAttackOptions;
      state.actionGrid.forEach((square, index) => {
        if (square === 0 && enemyAttackSquares.some(s => s === index)) {
          state.actionGrid[index] = 2;
        }
      });
    }
  }

  const activeMaster = state.pawns.find(pawn => (pawn.isMaster && pawn.player === state.turn));
  if (activeMaster) {
    const enemeyAttackOptions = (state.turn === players.blue) ? state.redAttackOptions : state.blueAttackOptions;
    if (enemeyAttackOptions.some(attackOption => (attackOption === activeMaster.location))) {
      state.actionGrid[activeMaster.location] = 2;
    }
  }

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
  history: [],
  redAttackOptions: [],
  blueAttackOptions: [],
});

const executeMove = (state, squareId) => {
  if (state.actionGrid[squareId] === 0) {
    const history = state.history.slice(0);
    history.push({ pawn: state.selectedPawn, card: state.selectedCard, squareId, id: history.length });
    const turn = state.turn === players.blue ? players.red : players.blue;

    const pawns = [...state.pawns];
    const activePawn = pawns.find(p => p.id === state.selectedPawn.id);
    activePawn.location = squareId;
    const capturedPawn = pawns.find(p => p.location === activePawn.location && p.id !== activePawn.id);
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

    const cards = [...state.cards];
    const activeCard = cards.find(card => card.id === state.selectedCard.id);
    const sideCard = cards.find(card => card.location === state.turn && card.deckPosition === 3);

    sideCard.location = activeCard.location;
    sideCard.deckPosition = activeCard.deckPosition;
    activeCard.location = turn;
    activeCard.deckPosition = 3;

    return {
      ...state,
      selectedCard: null,
      selectedPawn: null,
      turn,
      pawns,
      cards,
      history,
      [`${state.turn}AttackOptions`]: gameLogicService.getPlayerAttackOptions(state.turn, pawns, cards),
    };
  }
  return state;
};

const cardSelected = (state, card) => {
  if (state.turn && card.location === state.turn && card.location.deckPosition !== '3') {
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

const cardAtDeckPosition = (cards, deckPosition) => cards.find(card => card.deckPosition === deckPosition && card.location === 'deck');

const setCardBoardLocation = (card, player, position) => {
  card.location = player;
  card.deckPosition = position;
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
      const len = cards.length;
      const turn = cardAtDeckPosition(cards, len - 5).firstPlayer;
      setCardBoardLocation(cardAtDeckPosition(cards, len - 1), 'blue', 1);
      setCardBoardLocation(cardAtDeckPosition(cards, len - 2), 'blue', 2);
      setCardBoardLocation(cardAtDeckPosition(cards, len - 3), 'red', 1);
      setCardBoardLocation(cardAtDeckPosition(cards, len - 4), 'red', 2);
      setCardBoardLocation(cardAtDeckPosition(cards, len - 5), (turn === players.blue ? 'blue' : 'red'), 3);

      return {
        ...state,
        ...newGameState,
        cards,
        turn,
        redAttackOptions: gameLogicService.getPlayerAttackOptions(players.red, state.pawns, cards),
        blueAttackOptions: gameLogicService.getPlayerAttackOptions(players.blue, state.pawns, cards),
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
