import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import Board from './Board';
import Card from './Card';

const styles = {
  perspectiveFrame: {
    height: '99vh',
    width: '99vw',
    perspective: 1000,
    display: 'inline-block',
    overflow: 'hidden'
  },
  centerFrame: {
    width: 1600,
    height: 1600,
    margin: [50, 'auto'],
  },
  tableTop: {
    width: '100%',
    height: '100%',
    position: 'relative',
    //                  45             -20                300               -1000               -200
    transform: 'rotateX(45deg) rotateZ(-20deg) translateX(400px) translateY(-1100px) translateZ(-200px)',
    transformStyle: 'preserve-3d',
  }
};

export const Frame = ({ classes, cards }) => {
  return (
    <div className={classes.perspectiveFrame}>
      <div className={classes.centerFrame}>
        <div className={classes.tableTop}>
          <Board />
          {cards.map((card, index) => {
            return (<Card key={index} cardInfo={card} />);
          })}
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  cards: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Frame);
