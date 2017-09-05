import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actions';
import Card from '../Components/Card';

const mapStateToProps = state => ({
  cards: state.cards.cards
});

const mapDispatchToProps = dispatch => ({
  actions: {
    cards: bindActionCreators(actionCreators.cards, dispatch)
  },
});

export class App extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.cards.getCards();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.cards.map((card, index) => {
          return <Card key={index} cardInfo={card} />
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
