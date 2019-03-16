import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, rest, isAuthenticated }) => {
  console.log("private before render", rest, isAuthenticated);
  return (
    <Route
      {...rest}
      render={props => {
        console.log("private render", props);
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PrivateRoute);
