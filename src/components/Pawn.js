import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { MasterIcon } from 'components/svg';
import { colors } from 'architecture/constants';

const getPawnStyles = () => ({
  width: 120,
  position: 'absolute',
  border: { style: 'solid', width: 1, color: 'black' },
  boxSizing: 'border-box',
  transition: '2s, box-shadow 0.5s',
  cursor: 'pointer',
  zIndex: 100,
});

const styles = {
  pawn: {
    ...getPawnStyles(),
    height: 120,
    transform: 'rotateY(0deg) translateX(600px) translateY(300px)',
    transformStyle: 'preserve-3d',
  },
  northWall: {
    ...getPawnStyles(),
    height: props => (props.pawnInfo.isMaster ? 200 : 120),
    transformStyle: 'preserve-3d',
    transform: props => (props.pawnInfo.isMaster ?
      'rotateX(90deg) translateY(100px) translateZ(100px)' :
      'rotateX(90deg) translateY(60px) translateZ(60px)'),
  },
  eastWall: {
    ...getPawnStyles(),
    height: props => (props.pawnInfo.isMaster ? 200 : 120),
    transformStyle: 'preserve-3d',
    transform: props => (props.pawnInfo.isMaster ?
      'rotateX(90deg) rotateY(90deg) translateY(100px) translateZ(60px) translateX(-40px)' :
      'rotateX(90deg) rotateY(90deg) translateY(60px) translateZ(60px)'),
  },
  southWall: {
    ...getPawnStyles(),
    height: props => (props.pawnInfo.isMaster ? 200 : 120),
    transformStyle: 'preserve-3d',
    transform: props => (props.pawnInfo.isMaster ?
      'rotateX(90deg) rotateY(180deg) translateY(100px) translateZ(20px)' :
      'rotateX(90deg) rotateY(180deg) translateY(60px) translateZ(60px)'),
  },
  westWall: {
    ...getPawnStyles(),
    height: props => (props.pawnInfo.isMaster ? 200 : 120),
    transformStyle: 'preserve-3d',
    transform: props => (props.pawnInfo.isMaster ?
      'rotateX(90deg) rotateY(270deg) translateY(100px) translateZ(60px) translateX(40px)' :
      'rotateX(90deg) rotateY(270deg) translateY(60px) translateZ(60px)'),
  },
  topWall: {
    ...getPawnStyles(),
    height: 120,
    transform: props => (props.pawnInfo.isMaster ? 'translateZ(200px)' : 'translateZ(120px)'),
  },
  red: {
    backgroundColor: colors.pawnRed,
  },
  blue: {
    backgroundColor: colors.pawnBlue,
  },
  selected: {
    boxShadow: '0 0 5px 5px gold',
  },
  masterIconPosition: {
    width: 100,
    margin: [70, 'auto', 0, 'auto'],
    transform: 'rotateX(180deg)',
  },
};
for (let i = 0; i < 25; i++) {
  const x = i % 5;
  const y = Math.floor(i / 5);
  styles[`location${i}`] = {
    transform: `translateX(${615 + (x * 188)}px) translateY(${365 + (y * 188)}px) translateZ(1px)`,
  };
  if (i < 4) {
    styles[`location${25 + i}`] = {
      transform: `translateX(${40 + (i * 130)}px) translateY(365px) translateZ(1px)`,
    };
    styles[`location${29 + i}`] = {
      transform: `translateX(${40 + (i * 130)}px) translateY(1117px) translateZ(1px)`,
    };
  }
}


export const Pawn = ({ classes, isSelected, pawnInfo, pawnSelectedHandler }) => {
  const { player } = pawnInfo;
  const buildClasses = baseClass => {
    const classList = [baseClass, classes[player]];
    if (baseClass === classes.pawn) { classList.push(classes[`location${pawnInfo.location}`]); }
    if (isSelected) { classList.push(classes.selected); }
    return classList.join(' ');
  };
  const handleClick = () => {
    pawnSelectedHandler(pawnInfo);
  };

  return (
    <div className={buildClasses(classes.pawn)} onClick={handleClick}>
      <div className={buildClasses(classes.northWall)}>
        {pawnInfo.isMaster && <div className={classes.masterIconPosition}><MasterIcon width={100} /></div>}
      </div>
      <div className={buildClasses(classes.eastWall)}>
        {pawnInfo.isMaster && <div className={classes.masterIconPosition}><MasterIcon width={100} /></div>}
      </div>
      <div className={buildClasses(classes.southWall)}>
        {pawnInfo.isMaster && <div className={classes.masterIconPosition}><MasterIcon width={100} /></div>}
      </div>
      <div className={buildClasses(classes.westWall)}>
        {pawnInfo.isMaster && <div className={classes.masterIconPosition}><MasterIcon width={100} /></div>}
      </div>
      <div className={buildClasses(classes.topWall)} />
    </div>
  );
};

Pawn.propTypes = {
  classes: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  pawnInfo: PropTypes.object.isRequired,
  pawnSelectedHandler: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Pawn);
