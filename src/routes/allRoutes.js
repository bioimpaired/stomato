import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import MatchUp from "../components/MatchUp";
import HomePage from "../components/HomePage";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <PrivateRoute path="/matchup" component={MatchUp} />
      <Route path="/about" render={() => <div>about page</div>} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default withRouter(
  connect(state => ({
    auth: state.auth
  }))(Router)
);
