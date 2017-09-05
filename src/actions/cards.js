import { CARDS_RECEIVED } from '../architecture/constants';
import cardsService from '../services/cards';

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
}
