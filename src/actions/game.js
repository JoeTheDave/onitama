import {
  CARDS_RECEIVED,
  CARD_SELECTED,
  EXECUTE_MOVE,
  PAWN_SELECTED,
  START_NEW_GAME,
} from 'Architecture/constants';
import cardsService from 'Services/cards';

export function startNewGame() {
  return {
    type: START_NEW_GAME,
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
