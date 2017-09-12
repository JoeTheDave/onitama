import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  pawn: {
    width: 120,
    height: 120,
    position: 'absolute',
    backgroundColor: 'rgba(200, 0, 0, 0.5)',
    border: { style: 'solid', width: 1, color: 'black' },
    boxSizing: 'border-box',
    transform: 'rotateY(0deg) translateX(600px) translateY(300px)',
    transformStyle: 'preserve-3d',
  },
  northWall: {
    width: 120,
    height: 200,
    position: 'absolute',
    backgroundColor: 'rgba(200, 0, 0, 0.5)',
    border: { style: 'solid', width: 1, color: 'black' },
    boxSizing: 'border-box',
    transform: 'rotateX(90deg) translateY(100px) translateZ(100px)'
  }
};
for (let i = 0; i < 25; i++) {
  const x = i % 5;
  const y = Math.floor(i / 5);
  styles[`location${i}`] = {
    transform: `translateX(${615 + (x * 188)}px) translateY(${365 + (y * 188)}px) translateZ(1px)`
  }
}

export const Pawn = ({ classes, pawnInfo }) => {
  console.log(classes);
  const appliedClasses = [classes.pawn, classes[`location${pawnInfo.location}`] ];
  return (
    <div className={appliedClasses.join(' ')}>
      <div className={classes.northWall}></div>
    </div>
  );
};

Pawn.propTypes = {
  classes: PropTypes.object.isRequired,
  pawnInfo: PropTypes.object.isRequired
};

export default injectSheet(styles)(Pawn);
