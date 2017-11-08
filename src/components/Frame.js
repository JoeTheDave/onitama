import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { players } from 'architecture/constants';

import Board from './Board';
import Card from './Card';
import Pawn from './Pawn';
import History from './History';
import { Logo } from 'components/svg';
import backgroundGraphicOne from 'assets/abstract-background-decoration-one.jpg';
import backgroundGraphicTwo from 'assets/abstract-background-decoration-two.jpg';

const newGameButtonStyles = {
  zIndex: 15,
  position: 'absolute',
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
};

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
    transform: props => (props.game.turn === players.red && !props.game.aiActive ?
      'rotateX(35deg) rotateZ(165deg) translateX(-300px) translateY(900px) translateZ(-550px)' :
      'rotateX(35deg) rotateZ(-15deg) translateX(300px) translateY(-900px) translateZ(-550px)'),
    transformStyle: 'preserve-3d',
    zIndex: 18,
  },
  logo: {
    position: 'absolute',
    zIndex: 10,
  },
  newGameButtonAI: {
    ...newGameButtonStyles,
    top: 110,
    left: 20,
  },
  newGameButtonLocal: {
    ...newGameButtonStyles,
    top: 140,
    left: 10,
  },
  newGameButtonRemote: {
    ...newGameButtonStyles,
    top: 170,
    left: 0,
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
        <div className={classes.newGameButtonAI} onClick={actions.startNewGameAgainstAI}>New Game vs AI</div>
        <div className={classes.newGameButtonLocal} onClick={actions.startNewGameAgainstLocal}>New Game vs Local Opponent</div>
        <div className={classes.newGameButtonRemote} onClick={actions.startNewGameAgainstRemote}>New Game vs Remote Opponent</div>
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
              disableSelection={game.aiActive && game.turn === players.red}
            />
          ))}
          {pawns.map(pawn => (
            <Pawn
              key={`pawn-${pawn.id}`}
              pawnInfo={pawn}
              pawnSelectedHandler={(actions.pawnSelected)}
              isSelected={!!(selectedPawn && selectedPawn.id === pawn.id)}
              disableSelection={game.aiActive && game.turn === players.red}
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
