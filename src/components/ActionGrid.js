import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    width: 940,
    height: 940,
    position: 'absolute',
    top: 330,
    left: 580,
    zIndex: 20,
  },
  actionSquare: {
    width: 184,
    height: 184,
    float: 'left',
    transition: '0.5s',
    margin: 2,
    border: { style: 'solid', width: 3, color: '#444' },
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  validMove: {
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    cursor: 'pointer',
  },
  invalidMove: {
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    cursor: 'pointer',
  },
};

export const ActionGrid = ({ actions, classes, game }) => {
  const executeMoveHandler = e => {
    actions.executeMove(parseInt(e.target.getAttribute('data-id')));
  };
  return (
    <div className={classes.container}>
      {game.actionGrid.map((square, index) => {
        const appliedClasses = [classes.actionSquare];
        if (square === true) { appliedClasses.push(classes.validMove); }
        if (square === false) { appliedClasses.push(classes.invalidMove); }
        return (<div key={index} data-id={index} className={appliedClasses.join(' ')} onClick={executeMoveHandler} />);
      })}
    </div>
  );
};

ActionGrid.propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
};

export default injectSheet(styles)(ActionGrid);
