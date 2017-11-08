import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from 'actions';
import Frame from 'components/Frame';
import { players } from 'architecture/constants';

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

  constructor(props) {
    super(props);
    this.aiDelayTimer = null;
  }

  componentWillMount() {
    this.props.actions.game.getCards();
  }

  componentWillUnMount() {
    if (this.aiDelayTimer) {
      clearTimeout(this.aiDelayTimer);
    }
    this.aiDelayTimer = null;
  }

  componentWillReceiveProps(nextProps) {
    const { game } = nextProps;
    if (game.aiActive && game.turn === players.red) {
      this.aiDelayTimer = setTimeout(() => {
        this.props.actions.game.executeAiMove();
      }, 2500);
    }
  }

  render() {
    const { game, actions } = this.props;
    return (
      <Frame game={game} actions={actions.game} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
