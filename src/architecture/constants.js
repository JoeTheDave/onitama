// Redux state transitions
export const CARDS_RECEIVED = 'CARDS_RECEIVED';
export const CARD_SELECTED = 'CARD_SELECTED';
export const EXECUTE_AI_MOVE = 'EXECUTE_AI_MOVE';
export const EXECUTE_MOVE = 'EXECUTE_MOVE';
export const PAWN_SELECTED = 'PAWN_SELECTED';
export const START_NEW_GAME = 'START_NEW_GAME';
export const RESET_ALL_REDUCERS = 'RESET_ALL_REDUCERS';

export const players = {
  red: 'red',
  blue: 'blue',
};

export const alignmentTypes = {
  left: 'left',
  right: 'right',
  center: 'center',
};

export const gameTypes = {
  ai: 'ai',
  local: 'local',
};

export const colors = {
  blue: 'rgb(90, 120, 140)',
  red: 'rgb(145, 85, 75)',
  green: 'rgb(130, 140, 120)',
  slightGray: 'rgb(250, 250, 250)',
  gray: 'rgb(150, 150, 150)',
  darkGray: 'rgb(68, 68, 68)',
  opaqueBlue: 'rgba(90, 120, 140, 0.4)',
  opaqueRed: 'rgba(145, 85, 75, 0.3)',
  opaqueGreen: 'rgba(130, 140, 120, 0.5)',
  characterColor: 'rgba(100, 100, 100, 0.6)',
  opaqueWhite: 'rgba(255, 255, 255, 0.4)',
  validGreen: 'rgba(0, 255, 0, 0.4)',
  invalidRed: 'rgba(255, 0, 0, 0.4)',
  deepRed: 'rgb(119, 0, 0)',
  cardTan: 'rgba(224, 221, 191, 0.8)',
  pawnRed: 'rgba(200, 0, 0, 0.4)',
  pawnBlue: 'rgba(0, 0, 200, 0.4)',
};
