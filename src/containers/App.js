import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "../routes/allRoutes";
import { withRouter, Link } from "react-router-dom";

import {
  addPlayer,
  loadInitialPlayers,
  removePlayer
} from "../actions/playerActions";

import { Container, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

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
    const { addPlayer, removePlayer, isAuthenticated } = this.props;
    return (
      <React.Fragment>
        {/* maybe put navbar back into layout */}
        <Navbar color="dark" expand="sm">
          <Container>
            <NavbarBrand href="/">Stomato</NavbarBrand>
            <Navbar>
              {/* remove style for bullet point */}
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="about">About Us</Link>
                </NavLink>
              </NavItem>
              {isAuthenticated ? (
                <React.Fragment>
                  <NavItem>
                    <NavLink>
                      <Link to="/matchup">Match Up</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <button>logout</button>
                  </NavItem>
                </React.Fragment>
              ) : (
                <NavItem>
                  <NavLink>
                    <Link to="/login">Login</Link>
                  </NavLink>
                </NavItem>
              )}
            </Navbar>
          </Container>
        </Navbar>
        <Container className="p-2" />

        <div style={styles.mainBody}>
          <Router />
        </div>

        <div style={styles.footer} className="bg-dark">
          <Container>The End</Container>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  mainBody: {
    height: "100vh"
  },
  footer: {
    height: 100
  }
};

export default withRouter(
  connect(
    state => ({
      isAuthenticated: state.auth.isAuthenticated
    }),
    dispatch => ({
      addPlayer: formState => dispatch(addPlayer(formState)),
      loadInitialPlayers: allPlayers =>
        dispatch(loadInitialPlayers(allPlayers)),
      removePlayer: index => dispatch(removePlayer(index))
    })
  )(App)
);
