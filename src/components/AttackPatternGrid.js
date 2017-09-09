import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { alignmentTypes, colors } from 'Architecture/constants';

const styles = {
  container: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  gridElement: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    margin: 1,
    float: 'left'
  },
  referencePoint: {
    backgroundColor: '#444'
  },
  attackOption: {
    backgroundColor: props => {
      switch (props.alignment) {
        case alignmentTypes.left:
          return colors.blue;
        case alignmentTypes.center:
          return colors.green;
        case alignmentTypes.right:
          return colors.red;
        default:
          return '';
      }
    }
  }
};

export const AttackPatternGrid = ({ attackPattern, alignment, classes }) => {
  const gridElements = () => {
    const elements = [];
    for (let x = 0; x < 25; x++) {
      elements.push(0);
    }
    elements[12] = 1;
    attackPattern.forEach(option => {
      elements[12 + option.x - (option.y * 5)] = 2;
    })
    return elements;
  }

  return (
    <div className={classes.container}>
      {gridElements().map((element, index) => {
        const classComposition = [classes.gridElement];
        if (element === 1) { classComposition.push(classes.referencePoint); }
        if (element === 2) { classComposition.push(classes.attackOption); }
        return (<div key={index} className={classComposition.join(' ')}></div>);
      })}
    </div>
  );
};

AttackPatternGrid.propTypes = {
  attackPattern: PropTypes.array.isRequired,
  alignment: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(AttackPatternGrid);
