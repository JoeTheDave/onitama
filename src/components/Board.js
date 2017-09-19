import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import ActionGridContainer from 'Containers/ActionGridContainer';
import boardBackground from 'Assets/mural.jpg';
import boardBackgroundCenter from 'Assets/ying-yang.png';
import redHome from 'Assets/ying-yang-red.png';
import blueHome from 'Assets/ying-yang-blue.png';
import boardBackgroundTexture from 'Assets/board-background-texture.png';

const styles = {
  gameBoard: {
    backgroundImage: `url("${boardBackground}")`,
    backgroundSize: [1600, 1600],
    border: { style: 'solid', width: 1, color: 'black' },
    boxSizing: 'border-box',
    width: 1600,
    height: 1600,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  boardBottomSurface: {
    width: 1600,
    height: 1600,
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translateZ(-30px)',
    boxShadow: '0px 0px 100px 20px black',
  },
  southEdge: {
    width: 1600,
    height: 30,
    border: { style: 'solid', width: 3, color: 'black' },
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    top: 1585,
    transform: 'rotateX(-90deg) translateY(15px)',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgb(150, 150, 150)',
  },
  westEdge: {
    width: 1600,
    height: 30,
    border: { style: 'solid', width: 3, color: 'black' },
    boxSizing: 'border-box',
    position: 'absolute',
    left: 800,
    top: 785,
    transform: 'rotateX(-90deg) rotateY(90deg) translateY(15px)',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgb(150, 150, 150)',
  },
  northEdge: {
    width: 1600,
    height: 30,
    border: { style: 'solid', width: 3, color: 'black' },
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    top: -15,
    transform: 'rotateX(-90deg) rotateY(180deg) translateY(15px)',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgb(150, 150, 150)',
  },
  eastEdge: {
    width: 1600,
    height: 30,
    border: { style: 'solid', width: 3, color: 'black' },
    boxSizing: 'border-box',
    position: 'absolute',
    left: -800,
    top: 785,
    transform: 'rotateX(-90deg) rotateY(-90deg) translateY(15px)',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgb(150, 150, 150)',
  },
  centerGraphicContainer: {
    position: 'absolute',
    top: 650,
    left: 900,
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    backgroundImage: `url("${boardBackgroundCenter}")`,
    backgroundSize: [300, 300],
    borderRadius: 150,
    boxShadow: '0px 0px 1000px 100px white',
    transform: 'rotateZ(60deg)',
    animationName: 'rotateGridGraphic',
    animationDuration: '60s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    zIndex: 19,
  },
  blueHome: {
    position: 'absolute',
    top: 1125,
    left: 1000,
    width: 100,
    height: 100,
    backgroundImage: `url("${blueHome}")`,
    backgroundSize: [100, 100],
    borderRadius: 50,
    transform: 'rotateZ(60deg)',
    animationName: 'rotateGridGraphic',
    animationDuration: '60s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  redHome: {
    position: 'absolute',
    top: 370,
    left: 1000,
    width: 100,
    height: 100,
    backgroundImage: `url("${redHome}")`,
    backgroundSize: [100, 100],
    borderRadius: 50,
    transform: 'rotateZ(60deg)',
    animationName: 'rotateGridGraphic',
    animationDuration: '60s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  '@keyframes rotateGridGraphic': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  boardGraphicOuterFade: {
    width: 1600,
    height: 1600,
    position: 'absolute',
    top: 0,
    left: 0,
    boxShadow: 'inset 0px 0px 50px 30px rgb(200, 200, 200)',
  },
  boardOuterBorder: {
    width: 1580,
    height: 1580,
    position: 'absolute',
    top: 10,
    left: 10,
    border: { style: 'solid', width: 3, color: '#700' },
    boxSizing: 'border-box',
  },
  boardInnerBorder: {
    width: 1560,
    height: 1560,
    position: 'absolute',
    top: 20,
    left: 20,
    border: { style: 'solid', width: 3, color: '#700' },
    boxSizing: 'border-box',
  },
  boardGraphicTexture: {
    width: 1600,
    height: 1600,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: `url("${boardBackgroundTexture}")`,
    opacity: 0.3,
  },
  cardPositionOne: {
    width: 400,
    height: 260,
    position: 'absolute',
    top: 1300,
    left: 600,
    border: { style: 'solid', width: 10, color: '#700' },
    boxSizing: 'border-box',
  },
  cardPositionTwo: {
    width: 400,
    height: 260,
    position: 'absolute',
    top: 1300,
    left: 1100,
    border: { style: 'solid', width: 10, color: '#700' },
    boxSizing: 'border-box',
  },
  cardPositionThree: {
    width: 400,
    height: 260,
    position: 'absolute',
    top: 670,
    left: 140,
    border: { style: 'solid', width: 10, color: '#700' },
    boxSizing: 'border-box',
  },
  cardPositionFour: {
    width: 400,
    height: 260,
    position: 'absolute',
    top: 40,
    left: 600,
    border: { style: 'solid', width: 10, color: '#700' },
    boxSizing: 'border-box',
  },
  cardPositionFive: {
    width: 400,
    height: 260,
    position: 'absolute',
    top: 40,
    left: 1100,
    border: { style: 'solid', width: 10, color: '#700' },
    boxSizing: 'border-box',
  },
};

export const Board = ({ classes }) => (
  <div>
    <div className={classes.boardBottomSurface} />
    <div className={classes.southEdge} />
    <div className={classes.westEdge} />
    <div className={classes.northEdge} />
    <div className={classes.eastEdge} />
    <div className={classes.gameBoard}>
      <div className={classes.centerGraphicContainer} />
      <div className={classes.redHome} />
      <div className={classes.blueHome} />
      <div className={classes.boardGraphicOuterFade} />
      <div className={classes.boardOuterBorder} />
      <div className={classes.boardInnerBorder} />
      <div className={classes.cardPositionOne} />
      <div className={classes.cardPositionTwo} />
      <div className={classes.cardPositionThree} />
      <div className={classes.cardPositionFour} />
      <div className={classes.cardPositionFive} />
      <div className={classes.boardGraphicTexture} />
      <ActionGridContainer />
    </div>
  </div>
);

Board.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Board);
