import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "./Layout";
import Router from "../routes/allRoutes";

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

export const generateRandomUUID = length => faker.random.alphaNumeric(length);

// players should have ids
export const generatePlayer = () => ({
  uuid: generateRandomUUID(8),
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
    const { addPlayer, removePlayer } = this.props;
    return (
      <Layout>
        <Router />
      </Layout>
    );
  }
}

export default connect(
  // state => ({
  //     allPlayers: state.players.allPlayers,
  //     stateHere: state
  // }),
  null,
  dispatch => ({
    addPlayer: formState => dispatch(addPlayer(formState)),
    loadInitialPlayers: allPlayers => dispatch(loadInitialPlayers(allPlayers)),
    removePlayer: index => dispatch(removePlayer(index))
  })
)(App);
