import { cloneDeep } from 'lodash';
import * as gameReducer from '../gameReducer';
import { players } from 'architecture/constants';
import cardsService from 'services/cards';

// TODO: The ultimate test of immutability is if all tests can be run without needing to deep clone prior to each test.
const initializeState = () => ({ ...cloneDeep(gameReducer.getInitialState()), cards: cardsService.getCards(true) });

describe('gameReducer.getNewGameState', () => {
  test('should return an object with the oppropriate keys and having appropriate values initialized', () => {
    const newGameState = gameReducer.getNewGameState();
    const newGameStateKeys = Object.keys(newGameState);
    expect(newGameStateKeys.length).toBe(10);
    expect(newGameStateKeys).toContain('pawns');
    expect(newGameStateKeys).toContain('redCaptured');
    expect(newGameStateKeys).toContain('blueCaptured');
    expect(newGameStateKeys).toContain('turn');
    expect(newGameStateKeys).toContain('selectedCard');
    expect(newGameStateKeys).toContain('selectedPawn');
    expect(newGameStateKeys).toContain('history');
    expect(newGameStateKeys).toContain('redAttackOptions');
    expect(newGameStateKeys).toContain('blueAttackOptions');
    expect(newGameStateKeys).toContain('actionGrid');
    expect(newGameState.pawns.length).toBe(10);
    expect(newGameState.pawns.filter(pawn => pawn.player === players.red).length).toBe(5);
    expect(newGameState.pawns.filter(pawn => pawn.player === players.blue).length).toBe(5);
    expect(newGameState.pawns.filter(pawn => pawn.isMaster).length).toBe(2);
    expect(newGameState.pawns.filter(pawn => pawn.alive).length).toBe(10);
    // Choosing not test for the presence of each pawn by id and to verify it's start location at this point.
    expect(newGameState.redCaptured).toBe(0);
    expect(newGameState.blueCaptured).toBe(0);
    expect(newGameState.turn).toBe(null);
    expect(newGameState.selectedCard).toBe(null);
    expect(newGameState.selectedPawn).toBe(null);
    expect(newGameState.history).toEqual([]);
    expect(newGameState.redAttackOptions).toEqual([]);
    expect(newGameState.blueAttackOptions).toEqual([]);
    expect(newGameState.actionGrid.length).toBe(25);
    expect(newGameState.actionGrid.some(square => square !== null)).toBe(false);
  });
});

describe('gameReducer.getInitialState', () => {
  test('should add empty cards collection to the game state', () => {
    const newGameState = gameReducer.getNewGameState();
    const initialReducerState = gameReducer.getInitialState();
    expect(Object.keys(newGameState)).not.toContain('cards');
    expect(Object.keys(initialReducerState)).toContain('cards');
  });
});

describe('gameReducer.isValidPlayer', () => {
  test('should only return true for input values of "red" or "blue"', () => {
    const expectedValidAnswers = [players.red, players.blue];
    const expectedInvalidAnswers = [null, undefined, 'green', 12, true, 3.6, [], {}];
    const validResults = expectedValidAnswers.map(testValue => gameReducer.isValidPlayer(testValue));
    const invalidResults = expectedInvalidAnswers.map(testValue => gameReducer.isValidPlayer(testValue));
    validResults.forEach(result => expect(result).toBe(true));
    invalidResults.forEach(result => expect(result).toBe(false));
  });
});

describe('gameReducer.getActiveMaster', () => {
  test('should return the master pawn of current player', () => {
    const state = initializeState();
    state.turn = players.blue;
    const activeMaster = gameReducer.getActiveMaster(state);
    expect(activeMaster.id).toBe('bK');
    expect(activeMaster.isMaster).toBe(true);
    expect(activeMaster.player).toBe(players.blue);
  });

  test('should return undefined if turn is not set to a valid player', () => {
    const state = initializeState();
    const activeMasterNullTurn = gameReducer.getActiveMaster(state);
    state.turn = 'green';
    const activeMasterInvalidTurn = gameReducer.getActiveMaster(state);
    expect(activeMasterNullTurn).toBe(undefined);
    expect(activeMasterInvalidTurn).toBe(undefined);
  });
});

describe('gameReducer.getEnemyMaster', () => {
  test('should return the master pawn of the opponent of the current player', () => {
    const state = initializeState();
    state.turn = players.blue;
    const enemyMaster = gameReducer.getEnemyMaster(state);
    expect(enemyMaster.id).toBe('rK');
    expect(enemyMaster.isMaster).toBe(true);
    expect(enemyMaster.player).toBe(players.red);
  });

  test('should return undefined if turn is not set to a valid player', () => {
    const state = initializeState();
    const enemyMasterNullTurn = gameReducer.getEnemyMaster(state);
    state.turn = 'green';
    const enemyMasterInvalidTurn = gameReducer.getEnemyMaster(state);
    expect(enemyMasterNullTurn).toBe(undefined);
    expect(enemyMasterInvalidTurn).toBe(undefined);
  });
});

describe('gameReducer.shuffleDeck', () => {
  test('prior to being called, (unshuffled) cards should have no deckPosition or location properties', () => {
    const state = initializeState();
    state.cards.forEach(card => {
      expect(card.deckPosition).toBe(undefined);
      expect(card.location).toBe(undefined);
    });
  });

  test('after being called, (shuffled) cards should be back in the deck and not in original order', () => {
    const state = initializeState();
    const shuffledCards = gameReducer.shuffleDeck(state.cards);
    expect(shuffledCards.some(card => card.location !== 'deck')).toBe(false);
    expect(shuffledCards.some(card => card.deckPosition !== card.physicalOrder)).toBe(true);
  });
});

describe('gameReducer.cardAtDeckPosition', () => {
  test('should return the requested card from the deck', () => {
    const state = initializeState();
    const shuffledCards = gameReducer.shuffleDeck(state.cards);
    const firstCard = gameReducer.cardAtDeckPosition(shuffledCards, 0);
    const tenthCard = gameReducer.cardAtDeckPosition(shuffledCards, 9);
    expect(firstCard.location).toBe('deck');
    expect(firstCard.deckPosition).toBe(0);
    expect(tenthCard.location).toBe('deck');
    expect(tenthCard.deckPosition).toBe(9);
  });

  test('should return undefined when an out of bounds card index is requested', () => {
    const state = initializeState();
    const shuffledCards = gameReducer.shuffleDeck(state.cards);
    const card = gameReducer.cardAtDeckPosition(shuffledCards, shuffledCards.length);
    expect(card).toBe(undefined);
  });
});

describe('gameReducer.setCardBoardLocation', () => {
  test('should update location and deck position of given card in cards collection', () => {
    const state = initializeState();
    const shuffledCards = gameReducer.shuffleDeck(state.cards);
    gameReducer.setCardBoardLocation(shuffledCards[4], players.blue, 1);
    const modifiedCard = shuffledCards[4];
    expect(modifiedCard.location).toBe(players.blue);
    expect(modifiedCard.deckPosition).toBe(1);
  });
});

describe('gameReducer.calculateMovementOptions', () => {
  test('should produce a list of moveOptions equal in size to the cards attackPattern list if pawn is in center of board', () => {
    const state = initializeState();
    const selectedPawn = state.pawns.find(pawn => pawn.id === 'b1');
    const selectedCard = state.cards.find(card => card.name === 'Dragon');
    selectedPawn.location = 12; // Set pawn in the center of the board
    const movementOptions = gameReducer.calculateMovementOptions(selectedPawn, selectedCard);
    expect(movementOptions.length).toEqual(selectedCard.attackPattern.length);
  });

  test('should not produce list containing moveOptions that would fall off the board', () => {
    const state = initializeState();
    const selectedPawn = state.pawns.find(pawn => pawn.id === 'b1');
    const selectedCard = state.cards.find(card => card.name === 'Dragon');
    selectedPawn.location = 10; // Set pawn on the edge of the board
    const movementOptions = gameReducer.calculateMovementOptions(selectedPawn, selectedCard);
    expect(movementOptions.length).toEqual(selectedCard.attackPattern.length - 2);
  });

  test('should produce correct movement options based on the selected pawn location and the attackOptions of the selected card', () => {
    const state = initializeState();
    const targetPawns = state.pawns.filter(pawn => pawn.id === 'b1' || pawn.id === 'r1');
    const selectedCard = state.cards.find(card => card.name === 'Dragon');
    targetPawns.forEach(selectedPawn => {
      selectedPawn.location = 12; // Set pawn in the center of the board
      const playerVariant = (selectedPawn.player === players.blue ? 1 : -1);
      for (let x = -2; x <= 2; x++) {
        for (let y = -2; y <= 2; y++) {
          selectedCard.attackPattern = [{ x, y }];
          const movementOptions = gameReducer.calculateMovementOptions(selectedPawn, selectedCard);
          expect(movementOptions.length).toBe(1);
          expect(movementOptions[0]).toBe(selectedPawn.location + (playerVariant * -5 * y) + (playerVariant * 1 * x));
        }
      }
    });
  });
});

describe('gameReducer.getPawnAtLocation', () => {
  test('should return the pawn currently positioned at the given gridSquare', () => {
    const state = initializeState();
    const pawnAtTargetLocation = gameReducer.getPawnAtLocation(20, state.pawns);
    expect(pawnAtTargetLocation).toBeDefined();
    expect(pawnAtTargetLocation.id).toBe('b1');
  });

  test('should return null if no pawn is present at the given gridSquare', () => {
    const state = initializeState();
    const pawnAtTargetLocation = gameReducer.getPawnAtLocation(12, state.pawns);
    expect(pawnAtTargetLocation).toBeNull();
  });
});

describe('gameReducer.isFriendlyPawn', () => {
  test('should return true if given pawn belongs to given player', () => {
    const state = initializeState();
    const pawn = state.pawns.find(p => p.id === 'r1');
    const result = gameReducer.isFriendlyPawn(pawn, players.red);
    expect(result).toBe(true);
  });

  test('should return false if given pawn belongs to enemy player', () => {
    const state = initializeState();
    const pawn = state.pawns.find(p => p.id === 'b1');
    const result = gameReducer.isFriendlyPawn(pawn, players.red);
    expect(result).toBe(false);
  });

  test('should return false if no pawn is given', () => {
    const pawn = null;
    const result = gameReducer.isFriendlyPawn(pawn, players.red);
    expect(result).toBe(false);
  });
});

