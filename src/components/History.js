import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import HistoryItem from './HistoryItem';

const styles = {
  history: {
    // border: { style: 'solid', width: 1, color: 'black' },
    overflowY: 'auto',
    width: 300,
    height: 200,
    position: 'absolute',
    top: 800,
    left: 1050,
    zIndex: 5,
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
