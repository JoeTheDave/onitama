import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { alignmentTypes, colors, players } from 'Architecture/constants';
import AttackPatternGrid from './AttackPatternGrid';
import { getCharacterComponent, FirstPlayerIcon, Swish } from './svg';
import cardBackground from 'Assets/card-background.png';

const styles = {
  card: {
    width: 400,
    height: 260,
    float: 'left',
    backgroundImage: `url("${cardBackground}")`,
    borderRadius: 10,
    margin: 10,
    border: { style: 'solid', width: 1, color: '#999' },
    position: 'absolute',
    top: 30,
    left: -300,
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(224, 221, 191, 0.8)',
    borderRadius: 10,
    padding: 10,
    boxSizing: 'border-box',
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  leftContent: {
    width: '55%',
    height: '100%',
    position: 'absolute',
    left: 0
  },
  character: {
    width: '100%',
    //backgroundColor: 'red',
    textAlign: 'center',
    position: 'absolute',
    top: 5,
  },
  cardName: {
    width: '100%',
    fontSize: 36,
    fontFamily: 'IM Fell English SC',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 120,
    color: 'rgba(60, 60, 60, 1)'
  },
  rightContent: {
    width: 160,
    height: '100%',
    position: 'absolute',
    right: 0
  },
  bottomContent: {
    height: 70,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    padding: [0, 10],
    boxSizing: 'border-box',
    backgroundColor: props => {
      switch (props.cardInfo.alignment) {
        case alignmentTypes.left:
          return colors.opaqueBlue;
        case alignmentTypes.center:
          return colors.opaqueGreen;
        case alignmentTypes.right:
          return colors.opaqueRed;
        default:
          return '';
      }
    }
  },
  verticalAligner: {
    height: '100%',
    width: 1,
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  wisdom: {
    width: '85%',
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: 12,
    fontFamily: 'Caudex',
    color: '#444',
    textAlign: 'center',
  },
  firstPlayerIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 40,
    height: 30,
    position: 'relative',
    right: -10,
    border: { style: 'solid', width: 2, color: colors.opaqueWhite },
    backgroundColor: props => {
      if (props.cardInfo.firstPlayer === players.red) { return colors.red; }
      if (props.cardInfo.firstPlayer === players.blue) { return colors.blue; }
    }
  }
};

export const Card = ({ cardInfo, classes }) => {
  const { alignment, attackPattern, firstPlayer, name, text } = cardInfo;
  const Character = getCharacterComponent(name);
  return (
    <div className={classes.card}>
      <div className={classes.cardBackground}>
        <div className={classes.content}>
          <div className={classes.leftContent}>
            <Swish />
            <div className={classes.character}><Character fillColor={colors.characterColor} /></div>
            <div className={classes.cardName}>{name.toUpperCase()}</div>
          </div>
          <div className={classes.rightContent}>
            <AttackPatternGrid attackPattern={attackPattern} alignment={alignment} />
          </div>
          <div className={classes.bottomContent}>
            <div className={classes.verticalAligner}></div>
            <div className={classes.wisdom}>{text.split('\n').map((textPart, index) => <div key={index}>{textPart}</div>)}</div>
            <div className={classes.firstPlayerIcon}>
              <FirstPlayerIcon />
            </div>
          </div>
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
