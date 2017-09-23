import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  move: {
    fontSize: 22,
    color: props => (props.move.pawn.player),
  },
};

const resolveSquareName = location => {
  const column = (location % 5) + 1;
  const row = 'ABCDE'[Math.floor(location / 5)];
  return row + column;
};

export const HistoryItem = ({ classes, move }) => (
  <div >
    <span className={classes.move}>{`${move.card.name} ${resolveSquareName(move.pawn.location)} => ${resolveSquareName(move.squareId)}`}</span>
  </div>
);

HistoryItem.propTypes = {
  classes: PropTypes.object.isRequired,
  move: PropTypes.object.isRequired,
};

export default injectSheet(styles)(HistoryItem);
