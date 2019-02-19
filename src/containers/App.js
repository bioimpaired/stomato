import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MatchUp from "../components/MatchUp";

import { addPlayer, loadInitialPlayers } from "../actions/playerActions";

class App extends Component {
  componentWillMount() {
    // load initial players
    const { loadInitialPlayers } = this.props;
    console.log("loading initial players app");
    loadInitialPlayers();
  }

  render() {
    console.log("props", this.props);
    const { mainState, addPlayer } = this.props;
    return (
      <div className="App">
        <header className="App-header" />
        container
        <MatchUp allPlayers={mainState.allPlayers} addPlayer={addPlayer} />
      </div>
    );
  }
}

export default connect(
  state => ({
    mainState: { allPlayers: state.players.allPlayers }
  }),
  dispatch => ({
    addPlayer: () => dispatch(addPlayer()),
    loadInitialPlayers: () => dispatch(loadInitialPlayers())
  })
)(App);
