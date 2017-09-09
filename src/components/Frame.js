import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import Card from './Card';

const styles = {
  perspectiveFrame: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#CCC'
  }
};

export const Frame = ({ classes, cards }) => {
  return (
    <div className={classes.perspectiveFrame}>
      {cards.map((card, index) => {
        return (<Card key={index} cardInfo={card} />);
      })}
    </div>
  );
};

Frame.propTypes = {
  cards: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Frame);
