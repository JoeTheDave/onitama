import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from 'Actions';
import Frame from 'Components/Frame';

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    game: bindActionCreators(actionCreators.game, dispatch),
  },
});

export class App extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.actions.game.getCards();
  }

  render() {
    const { game, actions } = this.props;
    return (
      <Frame game={game} startNewGameHandler={actions.game.startNewGame} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
