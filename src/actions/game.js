import {
  CARDS_RECEIVED,
  CARD_SELECTED,
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
