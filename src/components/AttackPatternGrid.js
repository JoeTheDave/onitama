import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { alignmentTypes, colors } from '../architecture/constants';

const styles = {
  gridElement: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    margin: 1,
    float: 'left'
  }
};

export const AttackPatternGrid = ({ attackPattern, alignment, classes }) => {

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

  const gridElements = () => {
    const elements = [];
    for (let x = 0; x < 25; x++) {
      elements.push(null);
    }
    return elements;
  }

  return (
    <div>
      {gridElements().map((element, index) => (
        <div key={index} className={classes.gridElement}></div>
      ))}
    </div>
  );
};

AttackPatternGrid.propTypes = {
  attackPattern: PropTypes.array.isRequired,
  alignment: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(AttackPatternGrid);
