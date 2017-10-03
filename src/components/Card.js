import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { alignmentTypes, colors, players } from 'architecture/constants';
import AttackPatternGrid from './AttackPatternGrid';
import { getCharacterComponent, MasterIcon, Logo, Swish } from './svg';
import cardBackground from 'assets/mural.jpg';
import cardTexture from 'assets/card-texture.png';

const cardSizeStyles = { width: 400, height: 260, borderRadius: 10 };
const verticallyAlign = { display: 'inline-block', verticalAlign: 'middle' };

const styles = {
  cardContainer: {
    ...cardSizeStyles,
    transition: '2s, box-shadow 0.5s',
    cursor: 'pointer',
    position: 'absolute',
    transformStyle: 'preserve-3d',
    zIndex: props => (props.cardInfo.location === 'deck' ? props.cardInfo.deckPosition + 21 : 21),
    boxShadow: props => (props.isSelected ? '0 0 10px 10px gold' : 'none'),
    transform: props => {
      const { deckPosition, location } = props.cardInfo;
      if (location === 'deck') {
        return `translateY(1300px) translateX(100px) rotateY(180deg) translateZ(${deckPosition * -5}px)`;
      }
      if (location === 'blue' && deckPosition === 1) {
        return 'translateY(1300px) translateX(600px)';
      }
      if (location === 'blue' && deckPosition === 2) {
        return 'translateY(1300px) translateX(1100px)';
      }
      if (location === 'blue' && deckPosition === 3) {
        return 'translateY(670px) translateX(140px)';
      }
      if (location === 'red' && deckPosition === 1) {
        return 'translateY(40px) translateX(600px) rotateZ(180deg)';
      }
      if (location === 'red' && deckPosition === 2) {
        return 'translateY(40px) translateX(1100px) rotateZ(180deg)';
      }
      if (location === 'red' && deckPosition === 3) {
        return 'translateY(670px) translateX(140px) rotateZ(180deg)';
      }
      return '';
    },
  },
  card: {
    ...cardSizeStyles,
    backgroundImage: `url("${cardTexture}")`,
    border: { style: 'solid', width: 1, color: colors.darkGray },
    boxSizing: 'border-box',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  cardBackground: { width: '100%', height: '100%', backgroundColor: colors.cardTan, borderRadius: 10, padding: 10, boxSizing: 'border-box' },
  content: { width: '100%', height: '100%', position: 'relative' },
  leftContent: { width: '55%', height: '100%', position: 'absolute', left: 0 },
  character: { width: '100%', textAlign: 'center', position: 'absolute', top: 5 },
  cardName: { width: '100%', fontSize: 36, fontFamily: 'IM Fell English SC', fontWeight: 'bold', textAlign: 'center', position: 'absolute', top: 120, color: colors.darkGray },
  rightContent: { width: 160, height: '100%', position: 'absolute', right: 0 },
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
    },
  },
  verticalAligner: { ...verticallyAlign, height: '100%', width: 1 },
  wisdom: { ...verticallyAlign, width: '85%', fontSize: 12, fontFamily: 'Caudex', color: '#444', textAlign: 'center' },
  firstPlayerIcon: {
    ...verticallyAlign,
    width: 40,
    height: 30,
    position: 'relative',
    right: -10,
    border: { style: 'solid', width: 2, color: colors.opaqueWhite },
    backgroundColor: props => {
      if (props.cardInfo.firstPlayer === players.red) { return colors.red; }
      if (props.cardInfo.firstPlayer === players.blue) { return colors.blue; }
      return '';
    },
  },
  cardBack: {
    ...cardSizeStyles,
    backgroundImage: `url("${cardBackground}")`,
    backgroundSize: [400, 260],
    border: { style: 'solid', width: 1, color: colors.darkGray },
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'rotateY(180deg)',
    boxSizing: 'border-box',
    backfaceVisibility: 'hidden',
  },
  cardBackTexture: { ...cardSizeStyles, backgroundImage: `url("${cardTexture}")`, backgroundSize: [400, 260], position: 'absolute', opacity: 0.6 },
  cardBackTone: { ...cardSizeStyles, backgroundColor: 'orange', position: 'absolute', opacity: 0.6 },
  cardBackLogoContainer: { ...cardSizeStyles, position: 'absolute' },
  cardBackLogoBackground: { position: 'absolute', top: 80, left: 25 },
  cardBackLogoForeground: { position: 'absolute', top: 75, left: 30 },
};

export const Card = ({ cardInfo, cardSelectedHandler, classes }) => {
  const { alignment, attackPattern, name, text } = cardInfo;
  const Character = getCharacterComponent(name);
  const handleClick = () => {
    cardSelectedHandler(cardInfo);
  };
  return (
    <div className={classes.cardContainer} onClick={handleClick}>
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
              <div className={classes.verticalAligner} />
              <div className={classes.wisdom}>{text.split('\n').map((textPart, index) => <div key={index}>{textPart}</div>)}</div>
              <div className={classes.firstPlayerIcon}>
                <MasterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cardBack}>
        <div className={classes.cardBackTexture} />
        <div className={classes.cardBackTone} />
        <div className={classes.cardBackLogoContainer}>
          <div className={classes.cardBackLogoBackground}><Logo width={100} fillColor={'rgba(0, 0, 0, 0.3)'} /></div>
          <div className={classes.cardBackLogoForeground}><Logo width={100} fillColor={'white'} /></div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  cardSelectedHandler: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default injectSheet(styles)(Card);
