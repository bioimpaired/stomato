import { LOGIN, LOGOUT } from "../actions/authActions";

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { isAuthenticated: true };
    }
    case LOGOUT: {
      return { isAuthenticated: false };
    }
    default:
      return state;
  }
};
