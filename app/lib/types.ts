export enum Player {
  red,
  blue,
}

export enum AlignmentType {
  left,
  right,
  center,
}

export enum CombatantType {
  pawn,
  master,
}

export interface Card {
  name: string;
  firstPlayer: Player;
  text: string;
  attackPattern: {
    x: number;
    y: number;
  }[];
  alignment: AlignmentType;
}

export type CoordinateRange = 0 | 1 | 2 | 3 | 4;

export interface Combatant {
  type: CombatantType;
  location: {
    x: CoordinateRange;
    y: CoordinateRange;
  };
}

export interface GameState {
  activePlayer: Player;
  redPlayerCards: Card[];
  bluePlayerCards: Card[];
  transientCard: Card;
  redPlayerCombatants: Combatant[];
  bluePlayerCombatants: Combatant[];
}
