import { cloneDeep, fill, flattenDeep, random, shuffle, sortBy, sortedUniq } from 'lodash';
import update from 'immutability-helper';
import {
  CARDS_RECEIVED,
  CARD_SELECTED,
  EXECUTE_AI_MOVE,
  EXECUTE_MOVE,
  PAWN_SELECTED,
  START_NEW_GAME,
  RESET_ALL_REDUCERS,
  players,
  gameTypes,
} from 'architecture/constants';

// Tested //////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getNewGameState = () => ({
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
  actionGrid: fill(Array(25), null),
});

export const getInitialState = () => ({ cards: [], ...getNewGameState() });

export const isValidPlayer = player => player === players.blue || player === players.red;

export const getActiveMaster = state => state.pawns.find(pawn =>
  (isValidPlayer(state.turn) && pawn.isMaster && pawn.player === state.turn)
);

export const getEnemyMaster = state => state.pawns.find(pawn =>
  (isValidPlayer(state.turn) && pawn.isMaster && pawn.player !== state.turn)
);

export const shuffleDeck = cards => sortBy(shuffle(cards).map((card, index) => (
  update(card, {
    location: { $set: 'deck' },
    deckPosition: { $set: index },
  })
)), 'physicalOrder');

export const cardAtDeckPosition = (cards, deckPosition) => cards.find(card => card.deckPosition === deckPosition && card.location === 'deck');

export const setCardBoardLocation = (card, location, position) => {
  card.location = location;
  card.deckPosition = position;
};

export const calculateMovementOptions = (selectedPawn, selectedCard) => {
  const movementOptions = [];
  const activePlayer = selectedPawn.player;
  const playerVariant = (activePlayer === players.blue ? 1 : -1);
  selectedCard.attackPattern.forEach(attackOption => {
    const attackTarget = selectedPawn.location + (attackOption.y * -5 * playerVariant) + (attackOption.x * playerVariant);
    const xPosition = (selectedPawn.location % 5) + (attackOption.x * playerVariant);
    if (attackTarget >= 0 && attackTarget <= 24 && xPosition >= 0 && xPosition <= 4) {
      movementOptions.push(attackTarget);
    }
  });
  return movementOptions;
};

export const getPawnAtLocation = (gridSquare, pawns) => pawns.find(pawn => pawn.location === gridSquare) || null;

export const isFriendlyPawn = (pawn, player) => !!pawn && pawn.player === player;

export const getEnemyAttackOptions = state => {
  if (state.turn === players.blue) { return state.redAttackOptions; }
  if (state.turn === players.red) { return state.blueAttackOptions; }
  return [];
};

// Non Tested //////////////////////////////////////////////////////////////////////////////////////////////////////////

const calculateValidMoves = state => {
  state.actionGrid = fill(Array(25), null);

  if (state.selectedCard && state.selectedPawn) {
    calculateMovementOptions(state.selectedPawn, state.selectedCard).forEach(moveOption => {
      state.actionGrid[moveOption] = isFriendlyPawn(getPawnAtLocation(moveOption, state.pawns), state.turn) ? 1 : 0;
    });

    if (state.selectedPawn.isMaster) {
      state.actionGrid.forEach((square, index) => {
        if (square === 0 && getEnemyAttackOptions(state).some(s => s === index)) {
          state.actionGrid[index] = 2;
        }
      });
    }
  }

  const activeMaster = getActiveMaster(state);
  if (activeMaster) {
    const enemeyAttackOptions = (state.turn === players.blue) ? state.redAttackOptions : state.blueAttackOptions;
    if (enemeyAttackOptions.some(attackOption => (attackOption === activeMaster.location))) {
      state.actionGrid[activeMaster.location] = 2;
    }
  }

  return state;
};

const getPlayerAttackOptions = (player, pawns, cards) => {
  const playerPawns = pawns.filter(pawn => pawn.player === player && pawn.alive);
  const playerCards = cards.filter(card => card.location === player && card.deckPosition < 3);
  return sortedUniq(flattenDeep(playerPawns.map(pawn => playerCards.map(card => calculateMovementOptions(pawn, card)))).sort((a, b) => a - b));
};

const startNewGame = (currentState, gameType) => {
  const state = cloneDeep(currentState);
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
    ...calculateValidMoves(getNewGameState()),
    cards,
    turn,
    aiActive: gameType === gameTypes.ai,
    redAttackOptions: getPlayerAttackOptions(players.red, state.pawns, cards),
    blueAttackOptions: getPlayerAttackOptions(players.blue, state.pawns, cards),
  };
};

const executeMove = (currentState, squareId) => {
  const state = cloneDeep(currentState);
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

    return calculateValidMoves({
      ...state,
      selectedCard: null,
      selectedPawn: null,
      turn,
      pawns,
      cards,
      history,
      [`${state.turn}AttackOptions`]: getPlayerAttackOptions(state.turn, pawns, cards),
    });
  }
  return calculateValidMoves(state);
};

const cardSelected = (currentState, card) => {
  const state = cloneDeep(currentState);
  if (state.turn && card.location === state.turn && card.deckPosition !== 3) {
    if (state.selectedCard && card.id === state.selectedCard.id) {
      return calculateValidMoves({ ...state, selectedCard: null });
    }
    return calculateValidMoves({ ...state, selectedCard: card });
  }
  return calculateValidMoves(state);
};

const pawnSelected = (currentState, pawn) => {
  const state = cloneDeep(currentState);
  if (state.turn && pawn.alive) {
    if (pawn.player === state.turn) {
      if (state.selectedPawn && pawn.id === state.selectedPawn.id) {
        return calculateValidMoves({ ...state, selectedPawn: null });
      }
      return calculateValidMoves({ ...state, selectedPawn: pawn });
    } else if (state.selectedCard && state.selectedPawn) {
      return calculateValidMoves(executeMove(state, pawn.location));
    }
  }
  return calculateValidMoves(state);
};

const executeArtificialIntelligenceMove = currentState => {
  const state = cloneDeep(currentState);
  const pawnOptions = state.pawns.filter(pawn => pawn.player === players.red && pawn.alive);
  const cardOptions = state.cards.filter(card => card.location === players.red && card.deckPosition !== 3);
  const moveOptions = [];
  cardOptions.forEach(card => {
    pawnOptions.forEach(pawn => {
      pawnSelected(cardSelected(state, card), pawn).actionGrid.forEach((moveOption, gridSquare) => {
        if (moveOption === 0) {
          moveOptions.push({ card, pawn, gridSquare });
        }
      });
    });
  });

  const selectedMove = moveOptions[random(moveOptions.length - 1)];
  return executeMove(pawnSelected(cardSelected(state, selectedMove.card), selectedMove.pawn), selectedMove.gridSquare);
};

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case CARDS_RECEIVED:
      return {
        ...state,
        cards: shuffleDeck(action.cards),
      };

    case START_NEW_GAME:
      return startNewGame(state, action.gameType);

    case CARD_SELECTED:
      return cardSelected(state, action.card);

    case PAWN_SELECTED:
      return pawnSelected(state, action.pawn);

    case EXECUTE_MOVE:
      return executeMove(state, action.squareId);

    case EXECUTE_AI_MOVE:
      return executeArtificialIntelligenceMove(state);

    case RESET_ALL_REDUCERS:
      return { ...getInitialState() };

    default:
      return state;
  }
}
