import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

const getPawnStyles = () => {
  return {
    width: 120,
    height: 200,
    position: 'absolute',
    border: { style: 'solid', width: 1, color: 'black' },
    boxSizing: 'border-box',
  };
};

const styles = {
  pawn: {
    ...getPawnStyles(),
    height: 120,
    transform: 'rotateY(0deg) translateX(600px) translateY(300px)',
    transformStyle: 'preserve-3d',
  },
  northWall: {
    ...getPawnStyles(),
    transform: 'rotateX(90deg) translateY(100px) translateZ(100px)'
  },
  eastWall: {
    ...getPawnStyles(),
    transform: 'rotateX(90deg) rotateY(90deg) translateY(100px) translateZ(60px) translateX(-40px)'
  },
  southWall: {
    ...getPawnStyles(),
    transform: 'rotateX(90deg) rotateY(180deg) translateY(100px) translateZ(20px)'
  },
  westWall: {
    ...getPawnStyles(),
    transform: 'rotateX(90deg) rotateY(270deg) translateY(100px) translateZ(60px) translateX(40px)'
  },
  topWall: {
    ...getPawnStyles(),
    height: 120,
    transform: 'translateZ(200px)',
  },
  red: {
    backgroundColor: 'rgba(200, 0, 0, 0.4)',
  },
  blue: {
    backgroundColor: 'rgba(0, 0, 200, 0.4)',
  },
};
for (let i = 0; i < 25; i++) {
  const x = i % 5;
  const y = Math.floor(i / 5);
  styles[`location${i}`] = {
    transform: `translateX(${615 + (x * 188)}px) translateY(${365 + (y * 188)}px) translateZ(1px)`
  }
}

export const Pawn = ({ classes, pawnInfo }) => {
  const { player } = pawnInfo;
  const appliedClasses = [classes.pawn, classes[`location${pawnInfo.location}`] ];
  return (
    <div className={appliedClasses.join(' ')}>
      <div className={[classes.northWall, classes[player.toLowerCase()]].join(' ')}></div>
      <div className={[classes.eastWall, classes[player.toLowerCase()]].join(' ')}></div>
      <div className={[classes.southWall, classes[player.toLowerCase()]].join(' ')}></div>
      <div className={[classes.westWall, classes[player.toLowerCase()]].join(' ')}></div>
      <div className={[classes.topWall, classes[player.toLowerCase()]].join(' ')}></div>
    </div>
  );
};

Pawn.propTypes = {
  classes: PropTypes.object.isRequired,
  pawnInfo: PropTypes.object.isRequired
};

export default injectSheet(styles)(Pawn);
