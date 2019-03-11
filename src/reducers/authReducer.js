import { LOGIN } from "../actions/authActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "something": {
      return {};
    }
    default:
      return state;
  }
};
