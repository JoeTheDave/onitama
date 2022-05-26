import { shuffle } from 'lodash';
import { Game } from '~/lib/game';
import { cards } from '~/lib/cards';

import type { Card } from '~/lib/types';

describe('Game', () => {
  it('should throw if provided model that does not have the appropriate number of red player cards.', () => {
    const game = Game.generateNewGame();
    const poppedCard = game.redPlayerCards.pop() as Card;
    expect(() => new Game(game)).toThrowError(
      'Invalid Game State: redPlayerCards must have a length of 2.',
    );
    game.redPlayerCards.push(poppedCard);
    expect(() => new Game(game)).not.toThrow();
    game.redPlayerCards.push(shuffle(cards)[0]);
    expect(() => new Game(game)).toThrowError(
      'Invalid Game State: redPlayerCards must have a length of 2.',
    );
  });

  it('should throw if provided model that does not have the appropriate number of blue player cards.', () => {
    const game = Game.generateNewGame();
    const poppedCard = game.bluePlayerCards.pop() as Card;
    expect(() => new Game(game)).toThrowError(
      'Invalid Game State: bluePlayerCards must have a length of 2.',
    );
    game.bluePlayerCards.push(poppedCard);
    expect(() => new Game(game)).not.toThrow();
    game.bluePlayerCards.push(shuffle(cards)[0]);
    expect(() => new Game(game)).toThrowError(
      'Invalid Game State: bluePlayerCards must have a length of 2.',
    );
  });
});
