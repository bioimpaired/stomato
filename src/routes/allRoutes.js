import React from "react";
import { Switch, Route } from "react-router-dom";

import MatchUp from "../components/MatchUp";
import HomePage from "../components/HomePage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/matchup" component={MatchUp} />
      <Route path="/about" render={() => <div>about page</div>} />
    </Switch>
  );
};

export default Router;
