import {
  CARDS_RECEIVED,
  CARD_SELECTED,
  EXECUTE_AI_MOVE,
  EXECUTE_MOVE,
  PAWN_SELECTED,
  START_NEW_GAME,
  gameTypes,
} from 'architecture/constants';
import cardsService from 'services/cards';

export function startNewGameAgainstAI() {
  return {
    type: START_NEW_GAME,
    gameType: gameTypes.ai,
  };
}

export function startNewGameAgainstLocal() {
  return {
    type: START_NEW_GAME,
    gameType: gameTypes.local,
  };
}

export function startNewGameAgainstRemote() {
  return {
    type: 'not-implemented',
  };
}

const cardsReceived = cards => ({
  type: CARDS_RECEIVED,
  cards,
});

export function getCards() {
  return dispatch => cardsService.getCards().then(cards => {
    dispatch(cardsReceived(cards));
  }).catch(error => {
    throw (error);
  });
}

export function cardSelected(card) {
  return {
    type: CARD_SELECTED,
    card,
  };
}

export function pawnSelected(pawn) {
  return {
    type: PAWN_SELECTED,
    pawn,
  };
}

export function executeMove(squareId) {
  return {
    type: EXECUTE_MOVE,
    squareId,
  };
}

export function executeAiMove() {
  return {
    type: EXECUTE_AI_MOVE,
  };
}
