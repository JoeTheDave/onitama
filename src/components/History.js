import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { colors } from 'Architecture/constants';
import HistoryItem from './HistoryItem';

const styles = {
  history: {
    // border: { style: 'solid', width: 1, color: 'black' },
    backgroundColor: colors.slightGray,
    overflowY: 'auto',
    width: 300,
    height: 150,
    position: 'absolute',
    top: 820,
    left: 1100,
    zIndex: 5,
    transition: '2s',
    padding: 10,
    borderRadius: 10,
    opacity: props => (props.history.length > 0 ? 1 : 0),
  },
};

export const History = ({ classes, history }) => (
  <div className={classes.history}>
    {history.map(move => (
      <HistoryItem key={`move-${move.id}`} move={move} />
    ))}
  </div>
);

History.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
};

export default injectSheet(styles)(History);
