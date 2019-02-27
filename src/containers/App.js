import React, { Component } from "react";
import { connect } from "react-redux";
import MatchUp from "../components/MatchUp";
import { Layout } from "./Layout";

import {
  addPlayer,
  loadInitialPlayers,
  removePlayer
} from "../actions/playerActions";

import faker from "faker";

//fake seed data
const generateRandomNum = () =>
  faker.random.number({
    min: 10,
    max: 50
  });

export const generatePlayer = () => ({
  name: faker.name.firstName(),
  fg: generateRandomNum(),
  ft: generateRandomNum(),
  threes: generateRandomNum(),
  pts: generateRandomNum(),
  reb: generateRandomNum(),
  ast: generateRandomNum(),
  st: generateRandomNum(),
  blk: generateRandomNum(),
  to: generateRandomNum()
});

const generateSeedPlayers = amount => {
  let allPlayers = Array.from({ length: amount }, (v, i) => i);
  allPlayers = allPlayers.map(player => generatePlayer());
  return allPlayers;
};

class App extends Component {
  componentWillMount() {
    // load initial players
    const { loadInitialPlayers } = this.props;
    const allSeedPlayers = generateSeedPlayers(4);
    console.log("loading initial players app", allSeedPlayers);
    loadInitialPlayers(allSeedPlayers);
  }

  render() {
    console.log("props", this.props);
    const { mainState, addPlayer, removePlayer } = this.props;
    return (
      <Layout>
        <MatchUp
          // allPlayers={mainState.allPlayers}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
        />
      </Layout>
    );
  }
}

export default connect(
  state => ({
    mainState: {
      allPlayers: state.players.allPlayers,
      stateHere: state
    }
  }),
  dispatch => ({
    addPlayer: formState => dispatch(addPlayer(formState)),
    loadInitialPlayers: allPlayers => dispatch(loadInitialPlayers(allPlayers)),
    removePlayer: index => dispatch(removePlayer(index))
  })
)(App);
