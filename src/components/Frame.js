import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { players } from 'Architecture/constants';

import Board from './Board';
import Card from './Card';
import Pawn from './Pawn';
import History from './History';
import { Logo } from 'Components/svg';
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
    cursor: 'default',
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
    transition: '2s',
    transitionDelay: '2s',
    transform: props => (props.game.turn === players.red ?
      'rotateX(35deg) rotateZ(165deg) translateX(-300px) translateY(900px) translateZ(-550px)' :
      'rotateX(35deg) rotateZ(-15deg) translateX(300px) translateY(-900px) translateZ(-550px)'),
    transformStyle: 'preserve-3d',
    zIndex: 18,
  },
  logo: {
    position: 'absolute',
    zIndex: 10,
  },
  newGameButton: {
    zIndex: 15,
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
    },
  },
  '@keyframes startGamePulsate': {
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
    left: -200,
    zIndex: 5,
  },
  graphicTwo: {
    backgroundImage: `url("${backgroundGraphicTwo}")`,
    width: 750,
    height: 550,
    position: 'absolute',
    top: -50,
    left: 1050,
    zIndex: 5,
  },
};

export const Frame = ({ actions, classes, game }) => {
  console.log(game);
  const { cards, pawns, selectedCard, selectedPawn } = game;
  return (
    <div className={classes.perspectiveFrame}>
      <div className={classes.centerFrame}>
        <div className={classes.logo}>
          <Logo width={120} fillColor={'rgba(0, 0, 0, 0.2)'} styles={{ left: -5, top: 5 }} />
          <Logo width={120} fillColor={'black'} />
        </div>
        <div className={classes.newGameButton} onClick={actions.startNewGame}>Start New Game</div>
        <div className={classes.graphicOne} />
        <div className={classes.graphicTwo} />
        <div className={classes.tableTop}>
          <Board />
          {cards.map(card => (
            <Card
              key={`card-${card.id}`}
              cardInfo={card}
              cardSelectedHandler={(actions.cardSelected)}
              isSelected={!!(selectedCard && selectedCard.id === card.id)}
            />
          ))}
          {pawns.map(pawn => (
            <Pawn
              key={`pawn-${pawn.id}`}
              pawnInfo={pawn}
              pawnSelectedHandler={(actions.pawnSelected)}
              isSelected={!!(selectedPawn && selectedPawn.id === pawn.id)}
            />
          ))}
        </div>
        <History history={game.history} />
      </div>
    </div>
  );
};

Frame.propTypes = {
  game: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Frame);
