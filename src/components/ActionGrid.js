import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import utilityService from 'services/utility';
import { players, colors } from 'architecture/constants';

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
    border: { style: 'solid', width: 3, color: colors.darkGray },
    boxSizing: 'border-box',
    backgroundColor: colors.opaqueWhite,
  },
  validMove: {
    backgroundColor: colors.validGreen,
    cursor: 'pointer',
  },
  invalidMove: {
    backgroundColor: colors.invalidRed,
  },
  check: {
    animationName: 'checkWarning',
    animationDuration: '0.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  '@keyframes checkWarning': {
    '0%': { backgroundColor: colors.invalidRed },
    '50%': { backgroundColor: colors.opaqueWhite },
    '100%': { backgroundColor: colors.invalidRed },
  },
  squareNameP1: {
    fontSize: 36,
    color: 'gray',
    margin: 15,
    pointerEvents: 'none',
    transition: '2s',
    transitionDelay: '2s',
    opacity: props => ((props.game.turn === players.blue || props.game.aiActive) ? 1 : 0),
  },
  squareNameP2: {
    fontSize: 36,
    color: 'gray',
    margin: 15,
    pointerEvents: 'none',
    transition: '2s',
    transitionDelay: '2s',
    transform: 'rotateZ(180deg) translateY(-50px)',
    opacity: props => ((props.game.turn === players.red && !props.game.aiActive) ? 1 : 0),
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
        if (square === 0) { appliedClasses.push(classes.validMove); }
        if (square === 1) { appliedClasses.push(classes.invalidMove); }
        if (square === 2) { appliedClasses.push(classes.check); }
        const squareName = utilityService.resolveSquareName(index);
        return (
          <div key={index} data-id={index} className={appliedClasses.join(' ')} onClick={executeMoveHandler}>
            <div className={classes.squareNameP1}>{squareName}</div>
            <div className={classes.squareNameP2}>{squareName}</div>
          </div>
        );
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
