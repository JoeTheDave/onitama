import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from 'Actions';
import ActionGrid from 'Components/ActionGrid';

const mapStateToProps = state => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  actions: {
    game: bindActionCreators(actionCreators.game, dispatch)
  },
});

export class ActionGridContainer extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ActionGrid game={this.props.game} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionGridContainer);
