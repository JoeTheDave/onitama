import { flattenDeep, sortedUniq } from 'lodash';
import { players } from 'Architecture/constants';

const getValidMovesList = (selectedPawn, selectedCard) => {
  const validMoves = [];
  const activePlayer = selectedPawn.player;
  const playerVariant = (activePlayer === players.blue ? 1 : -1);
  selectedCard.attackPattern.forEach(attackOption => {
    const attackTarget = selectedPawn.location + (attackOption.y * -5 * playerVariant) + (attackOption.x * playerVariant);
    const xPosition = (selectedPawn.location % 5) + (attackOption.x * playerVariant);
    if (attackTarget >= 0 && attackTarget <= 24 && xPosition >= 0 && xPosition <= 4) {
      validMoves.push(attackTarget);
    }
  });
  return validMoves;
};

const getPlayerAttackOptions = (player, pawns, cards) => {
  const playerPawns = pawns.filter(pawn => pawn.player === player && pawn.alive);
  const playerCards = cards.filter(card => card.location === player && card.deckPosition < 3);
  return sortedUniq(flattenDeep(playerPawns.map(pawn => playerCards.map(card => getValidMovesList(pawn, card)))).sort((a, b) => a - b));
};

export default {
  getPlayerAttackOptions,
  getValidMovesList,
};
