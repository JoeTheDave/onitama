import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from 'actions';
import ActionGrid from 'components/ActionGrid';

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    game: bindActionCreators(actionCreators.game, dispatch),
  },
});

export class ActionGridContainer extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
  };

  render() {
    return (
      <ActionGrid game={this.props.game} actions={this.props.actions.game} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionGridContainer);
