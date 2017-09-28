import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import utilityService from 'Services/utility';
import { colors } from 'Architecture/constants';

const styles = {
  item: {
    cursor: 'pointer',
  },
  move: {
    fontSize: 22,
    fontFamily: 'Caudex',
    color: props => (colors[props.move.pawn.player]),
  },
};

export const HistoryItem = ({ classes, move, clickHandler }) => {
  return (
    <div className={classes.item} onClick={clickHandler}>
      <span className={classes.move}>
        {`${move.card.name} : ${utilityService.resolveSquareName(move.pawn.location)} => ${utilityService.resolveSquareName(move.squareId)}`}
      </span>
    </div>
  );
};

HistoryItem.propTypes = {
  classes: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
  move: PropTypes.object.isRequired,
};

HistoryItem.defaultProps = {
  clickHandler: () => {},
};

export default injectSheet(styles)(HistoryItem);
