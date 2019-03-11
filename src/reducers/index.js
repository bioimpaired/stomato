import { combineReducers } from "redux";

import playersReducer from "./playersReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer.js";

export default combineReducers({
  players: playersReducer,
  modal: modalReducer,
  auth: authReducer
});
