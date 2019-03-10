import React from "react";
import MatchUp from "../components/MatchUp";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={MatchUp} />
      <Route path="/about" render={() => <div>about page</div>} />
    </Switch>
  );
};

export default Router;
