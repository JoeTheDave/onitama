import { shuffle, take, range } from 'lodash';
import { cards } from '~/lib/cards';
import { CombatantType } from '~/lib/types';

import type { Card, GameState, Combatant, Player } from '~/lib/types';

export class Game implements GameState {
  activePlayer: Player;
  redPlayerCards: Card[];
  bluePlayerCards: Card[];
  transientCard: Card;
  redPlayerCombatants: Combatant[];
  bluePlayerCombatants: Combatant[];

  constructor(state: GameState) {
    if (state.redPlayerCards.length !== 2) {
      throw new Error(
        'Invalid Game State: redPlayerCards must have a length of 2.',
      );
    }
    if (state.bluePlayerCards.length !== 2) {
      throw new Error(
        'Invalid Game State: bluePlayerCards must have a length of 2.',
      );
    }
    this.activePlayer = state.activePlayer;
    this.redPlayerCards = state.redPlayerCards;
    this.bluePlayerCards = state.bluePlayerCards;
    this.transientCard = state.transientCard;
    this.redPlayerCombatants = state.redPlayerCombatants;
    this.bluePlayerCombatants = state.bluePlayerCombatants;
  }

  static generateNewGame() {
    const cardSelection = take(shuffle(shuffle(cards)), 5);
    const redPlayerCards = [cardSelection.pop(), cardSelection.pop()] as Card[];
    const bluePlayerCards = [
      cardSelection.pop(),
      cardSelection.pop(),
    ] as Card[];
    const transientCard = cardSelection.pop() as Card;
    const activePlayer = transientCard?.firstPlayer;
    const redPlayerCombatants = range(5).map(
      (i) =>
        ({
          location: {
            x: i,
            y: 0,
          },
          type: i === 2 ? CombatantType.master : CombatantType.pawn,
        } as Combatant),
    );
    const bluePlayerCombatants = range(5).map(
      (i) =>
        ({
          location: {
            x: 4 - i,
            y: 4,
          },
          type: i === 2 ? CombatantType.master : CombatantType.pawn,
        } as Combatant),
    );
    const game: GameState = {
      redPlayerCards,
      bluePlayerCards,
      transientCard,
      activePlayer,
      redPlayerCombatants,
      bluePlayerCombatants,
    };
    return game;
  }
}
