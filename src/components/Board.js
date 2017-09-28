import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { colors } from 'Architecture/constants';
import ActionGridContainer from 'Containers/ActionGridContainer';
import boardBackground from 'Assets/mural.jpg';
import boardBackgroundCenter from 'Assets/ying-yang.png';
import redHome from 'Assets/ying-yang-red.png';
import blueHome from 'Assets/ying-yang-blue.png';
import boardBackgroundTexture from 'Assets/board-background-texture.png';

const boardSurfaceStyles = { width: 1600, height: 1600, position: 'absolute', top: 0, left: 0 };

const boardEdgeStyles = {
  width: 1600,
  height: 30,
  border: { style: 'solid', width: 3, color: 'black' },
  boxSizing: 'border-box',
  position: 'absolute',
  backfaceVisibility: 'hidden',
  backgroundColor: colors.gray,
};

const rotatingBoardGraphicStyles = {
  position: 'absolute',
  animationName: 'rotateGridGraphic',
  animationDuration: '60s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
};

const masterHomeGraphicStyles = { left: 1000, width: 100, height: 100, backgroundSize: [100, 100], borderRadius: 50 };

const makeBoardWidthStylesWithMargin = margin => ({
  width: 1600 - (margin * 2),
  height: 1600 - (margin * 2),
  position: 'absolute',
  top: margin,
  left: margin,
});

const boardBorderStyles = { border: { style: 'solid', width: 3, color: colors.deepRed }, boxSizing: 'border-box' };

const cardPostionStyles = {
  width: 400,
  height: 260,
  position: 'absolute',
  border: { style: 'solid', width: 10, color: colors.deepRed },
  boxSizing: 'border-box',
};

const styles = {
  gameBoard: {
    ...boardSurfaceStyles,
    backgroundImage: `url("${boardBackground}")`,
    backgroundSize: [1600, 1600],
    border: { style: 'solid', width: 1, color: 'black' },
    boxSizing: 'border-box',
  },
  boardBottomSurface: {
    ...boardSurfaceStyles,
    transform: 'translateZ(-30px)',
    boxShadow: '0px 0px 100px 20px black',
  },
  southEdge: { ...boardEdgeStyles, left: 0, top: 1585, transform: 'rotateX(-90deg) translateY(15px)' },
  westEdge: { ...boardEdgeStyles, left: 800, top: 785, transform: 'rotateX(-90deg) rotateY(90deg) translateY(15px)' },
  northEdge: { ...boardEdgeStyles, left: 0, top: -15, transform: 'rotateX(-90deg) rotateY(180deg) translateY(15px)' },
  eastEdge: { ...boardEdgeStyles, left: -800, top: 785, transform: 'rotateX(-90deg) rotateY(-90deg) translateY(15px)' },
  centerGraphicContainer: {
    ...rotatingBoardGraphicStyles,
    top: 650,
    left: 900,
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    backgroundImage: `url("${boardBackgroundCenter}")`,
    backgroundSize: [300, 300],
    borderRadius: 150,
    zIndex: 19,
  },
  blueHome: {
    ...rotatingBoardGraphicStyles,
    ...masterHomeGraphicStyles,
    top: 1125,
    backgroundImage: `url("${blueHome}")`,
  },
  redHome: {
    ...rotatingBoardGraphicStyles,
    ...masterHomeGraphicStyles,
    top: 370,
    backgroundImage: `url("${redHome}")`,
  },
  '@keyframes rotateGridGraphic': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  boardGraphicOuterFade: { ...makeBoardWidthStylesWithMargin(0), boxShadow: 'inset 0px 0px 50px 30px rgb(200, 200, 200)' },
  boardOuterBorder: { ...makeBoardWidthStylesWithMargin(10), ...boardBorderStyles },
  boardInnerBorder: { ...makeBoardWidthStylesWithMargin(20), ...boardBorderStyles },
  boardGraphicTexture: { ...makeBoardWidthStylesWithMargin(0), backgroundImage: `url("${boardBackgroundTexture}")`, opacity: 0.3 },
  cardPositionOne: { ...cardPostionStyles, top: 1300, left: 600 },
  cardPositionTwo: { ...cardPostionStyles, top: 1300, left: 1100 },
  cardPositionThree: { ...cardPostionStyles, top: 670, left: 140 },
  cardPositionFour: { ...cardPostionStyles, top: 40, left: 600 },
  cardPositionFive: { ...cardPostionStyles, top: 40, left: 1100 },
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
