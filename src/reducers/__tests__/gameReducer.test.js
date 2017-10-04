import { cloneDeep } from 'lodash';
import * as gameReducer from '../gameReducer';
import { players } from 'architecture/constants';
import cardsService from 'services/cards';


const initializeState = () => ({ ...cloneDeep(gameReducer.initialState), cards: cardsService.getCards(true) });

describe('gameReducer.isValidPlayer', () => {
  test('isValidPlayer only returns true for red or blue', () => {
    const expectedValidAnswers = [players.red, players.blue];
    const expectedInvalidAnswers = [null, undefined, 'green', 12, true, 3.6, [], {}];
    const validResults = expectedValidAnswers.map(testValue => gameReducer.isValidPlayer(testValue));
    const invalidResults = expectedInvalidAnswers.map(testValue => gameReducer.isValidPlayer(testValue));
    validResults.forEach(result => expect(result).toBe(true));
    invalidResults.forEach(result => expect(result).toBe(false));
  });
});

describe('gameReducer.getActiveMaster', () => {
  test('getActiveMaster returns master pawn of current player', () => {
    const state = initializeState();
    state.turn = players.blue;
    const activeMaster = gameReducer.getActiveMaster(state);
    expect(activeMaster.id).toBe('bK');
    expect(activeMaster.isMaster).toBe(true);
    expect(activeMaster.player).toBe(players.blue);
  });

  test('getActiveMaster returns undefined if turn is not set to a valid player', () => {
    const state = initializeState();
    const activeMasterNullTurn = gameReducer.getActiveMaster(state);
    state.turn = 'green';
    const activeMasterInvalidTurn = gameReducer.getActiveMaster(state);
    expect(activeMasterNullTurn).toBe(undefined);
    expect(activeMasterInvalidTurn).toBe(undefined);
  });
});

describe('gameReducer.getEnemyMaster', () => {
  test('getEnemyMaster returns master pawn of the opponent of the current player', () => {
    const state = initializeState();
    state.turn = players.blue;
    const enemyMaster = gameReducer.getEnemyMaster(state);
    expect(enemyMaster.id).toBe('rK');
    expect(enemyMaster.isMaster).toBe(true);
    expect(enemyMaster.player).toBe(players.red);
  });

  test('getEnemyMaster returns undefined if turn is not set to a valid player', () => {
    const state = initializeState();
    const enemyMasterNullTurn = gameReducer.getEnemyMaster(state);
    state.turn = 'green';
    const enemyMasterInvalidTurn = gameReducer.getEnemyMaster(state);
    expect(enemyMasterNullTurn).toBe(undefined);
    expect(enemyMasterInvalidTurn).toBe(undefined);
  });
});

describe('gameReducer.shuffleDeck', () => {
  test('Unshuffled cards have no deckPosition or location properties', () => {
    const state = initializeState();
    state.cards.forEach(card => {
      expect(card.deckPosition).toBe(undefined);
      expect(card.location).toBe(undefined);
    });
  });

  test('Shuffled cards are back in the deck and not in original order', () => {
    const state = initializeState();
    const shuffledCards = gameReducer.shuffleDeck(state.cards);
    expect(shuffledCards.some(card => card.location !== 'deck')).toBe(false);
    expect(shuffledCards.some(card => card.deckPosition !== card.physicalOrder)).toBe(true);
  });
});

describe('gameReducer.cardAtDeckPosition', () => {
  test('cardAtDeckPosition returns the requested card from the deck', () => {
    const state = initializeState();
    const shuffledCards = gameReducer.shuffleDeck(state.cards);
    const firstCard = gameReducer.cardAtDeckPosition(shuffledCards, 0);
    const tenthCard = gameReducer.cardAtDeckPosition(shuffledCards, 9);
    expect(firstCard.location).toBe('deck');
    expect(firstCard.deckPosition).toBe(0);
    expect(tenthCard.location).toBe('deck');
    expect(tenthCard.deckPosition).toBe(9);
  });

  test('cardAtDeckPosition returns undefined when an out of bounds card index is requested', () => {
    const state = initializeState();
    const shuffledCards = gameReducer.shuffleDeck(state.cards);
    const card = gameReducer.cardAtDeckPosition(shuffledCards, shuffledCards.length);
    expect(card).toBe(undefined);
  });
});
