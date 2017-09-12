import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { fill } from 'lodash';

const styles = {
  container: {
    width: 940,
    height: 940,
    position: 'absolute',
    top: 330,
    left: 580,
  },
  actionSquare: {
    width: 184,
    height: 184,
    float: 'left',
    margin: 2,
    border: { style: 'solid', width: 3, color: '#444' },
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  }
};

export const ActionGrid = ({ classes, game }) => {
  console.log(game);
  const squares = fill(Array(25), {});
  return (
    <div className={classes.container}>
      {squares.map((square, index) => <div key={index} className={classes.actionSquare}></div>)}
    </div>
  );
};

ActionGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired
};

export default injectSheet(styles)(ActionGrid);
