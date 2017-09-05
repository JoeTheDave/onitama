import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { alignmentTypes, colors } from '../architecture/constants';
import AttackPatternGrid from './AttackPatternGrid';

const styles = {
  card: {
    width: 400,
    height: 220,
    float: 'left',
    margin: 10,
    border: { type: 'solid', width: 1, color: 'black' },
    backgroundColor: 'rgba(224, 221, 191, 0.7)',
    borderRadius: 10,
    padding: 10
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  leftContent: {
    width: '60%',
    height: '100%',
    position: 'absolute',
    left: 0
  },
  cardName: {
    width: '100%',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 120
  },
  rightContent: {
    width: '40%',
    height: '100%',
    position: 'absolute',
    right: 0
  },
  bottomContent: {
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    padding: 10,
    boxSizing: 'border-box'
    // Not sure how to modify these classes with Props.  that would allow a major refactor
  },
  wisdom: {
    width: '90%',
    display: 'inline-block',
    fontSize: 10,
    color: '#444',
    textAlign: 'center',
    paddingTop: 3
  },
  redBackground: { backgroundColor: colors.opaqueRed },
  greenBackground: { backgroundColor: colors.opaqueGreen },
  blueBackground: { backgroundColor: colors.opaqueBlue },
  redContent: { color: colors.red },
  greenContent: { color: colors.green },
  blueContent: { color: colors.blue }

  // Possible Google Fonts
  // font-family: 'Caudex', serif;
  // font-family: 'IM Fell English SC', serif;
  // font-family: 'Holtwood One SC', serif;
  // font-family: 'Kotta One', serif;

};

export const Card = ({ cardInfo, classes }) => {
  const { alignment, attackPattern, name, text } = cardInfo;

  const getBackground = () => {
    switch (alignment) {
      case alignmentTypes.left:
        return classes.blueBackground;
      case alignmentTypes.center:
        return classes.greenBackground;
      case alignmentTypes.right:
        return classes.redBackground;
      default:
        return '';
    }
  };

  const getContentColor = () => {
    switch (alignment) {
      case alignmentTypes.left:
        return classes.blueContent;
      case alignmentTypes.center:
        return classes.greenContent;
      case alignmentTypes.right:
        return classes.redContent;
      default:
        return '';
    }
  };

  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <div className={classes.leftContent}>
          <div className={`${classes.cardName} ${getContentColor()}`}>{name.toUpperCase()}</div>
        </div>
        <div className={classes.rightContent}>
          <AttackPatternGrid attackPattern={attackPattern} alignment={alignment} />
        </div>
        <div className={`${classes.bottomContent} ${getBackground()}`}>
          <div className={classes.wisdom}>{`"${text}"`}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Card);
