import { LOGIN } from "../actions/authActions";

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { isAuthenticated: true };
    }
    default:
      return state;
  }
};
