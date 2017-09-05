import { CARDS_RECEIVED, RESET_ALL_REDUCERS } from '../architecture/constants';

const initialState = {
  cards: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_RECEIVED:
      return {
        cards: action.cards
      };

    case RESET_ALL_REDUCERS:
      return { ...initialState };

    default:
      return state;
  }
}
