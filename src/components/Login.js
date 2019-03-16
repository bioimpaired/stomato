import React from "react";
import { connect } from "react-redux";

import { loginCurrentUser } from "../actions/authActions";

const Login = ({ loginCurrentUser }) => {
  const handleLogin = e => {
    e.preventDefault();
    console.log("login in");
    loginCurrentUser();
  };

  return (
    <div>
      click here to login
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    loginCurrentUser: () => dispatch(loginCurrentUser())
  })
)(Login);
