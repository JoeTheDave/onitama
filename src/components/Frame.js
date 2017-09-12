import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import Board from './Board';
import Card from './Card';
import Pawn from './Pawn';
import { Logo } from 'Components/svg'
import backgroundGraphicOne from 'Assets/abstract-background-decoration-one.jpg';
import backgroundGraphicTwo from 'Assets/abstract-background-decoration-two.jpg';

const styles = {
  perspectiveFrame: {
    height: '99vh',
    width: '99vw',
    perspective: 1000,
    display: 'inline-block',
    overflow: 'hidden',
    userSelect: 'none',
    cursor: 'default'
  },
  centerFrame: {
    width: 1600,
    height: 1600,
    margin: [50, 'auto'],
    position: 'relative',
  },
  tableTop: {
    width: '100%',
    height: '100%',
    position: 'relative',
    //                  45             -20                400              -1100               -200
    transform: 'rotateX(45deg) rotateZ(-20deg) translateX(400px) translateY(-1100px) translateZ(-200px)',
    transformStyle: 'preserve-3d',
  },
  logo: {
    position: 'absolute',
  },
  newGameButton: {
    position: 'absolute',
    top: 110,
    left: 20,
    fontFamily: 'IM Fell English SC',
    fontSize: 24,
    textShadow: '1px 1px 2px lightBlue, -1px 1px 2px lightBlue, 1px -1px 2px lightBlue, -1px -1px 2px lightBlue',
    cursor: 'pointer',
    '&:hover': {
      animationName: 'startGamePulsate',
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    }
  },
  [`@keyframes startGamePulsate`]: {
    '0%': { textShadow: '1px 1px 5px orange, -1px 1px 5px orange, 1px -1px 5px orange, -1px -1px 5px orange' },
    '50%': { textShadow: '5px 5px 20px orange, -5px 5px 20px orange, 5px -5px 20px orange, -5px -5px 20px orange' },
    '100%': { textShadow: '1px 1px 5px orange, -1px 1px 5px orange, 1px -1px 5px orange, -1px -1px 5px orange' },
  },
  graphicOne: {
    backgroundImage: `url("${backgroundGraphicOne}")`,
    width: 800,
    height: 590,
    position: 'absolute',
    top: 400,
    left: -200
  },
  graphicTwo: {
    backgroundImage: `url("${backgroundGraphicTwo}")`,
    width: 750,
    height: 550,
    position: 'absolute',
    top: -50,
    left: 1050
  }
};

export const Frame = ({ classes, game, startNewGameHandler }) => {
  const { cards, pawns } = game;
  return (
    <div className={classes.perspectiveFrame}>
      <div className={classes.centerFrame}>
        <div className={classes.logo}>
          <Logo width={120} fillColor={'rgba(0, 0, 0, 0.2)'} styles={{ left: -5, top: 5 }} />
          <Logo width={120} fillColor={'black'} />
        </div>
        <div className={classes.newGameButton} onClick={startNewGameHandler}>Start New Game</div>
        <div className={classes.graphicOne}></div>
        <div className={classes.graphicTwo}></div>
        <div className={classes.tableTop}>
          <Board />
          {cards.map(card => (<Card key={`card-${card.id}`} cardInfo={card} />))}
          {pawns.map(pawn => (<Pawn key={`pawn-${pawn.id}`} pawnInfo={pawn} />))}
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  game: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  startNewGameHandler: PropTypes.func.isRequired
};

export default injectSheet(styles)(Frame);
