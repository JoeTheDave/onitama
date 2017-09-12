import { CARDS_RECEIVED, START_NEW_GAME } from 'Architecture/constants';
import cardsService from 'Services/cards';

export function startNewGame() {
  return {
    type: START_NEW_GAME
  };
};

const cardsReceived = (cards) => {
  return {
    type: CARDS_RECEIVED,
    cards
  };
};

export function getCards() {
  return (dispatch) => {
    return cardsService.getCards().then(cards => {
      dispatch(cardsReceived(cards));
    }).catch(error => {
      throw(error);
    });
  };
};
