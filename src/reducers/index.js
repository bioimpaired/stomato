import { combineReducers } from "redux";

import playersReducer from "./playersReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  players: playersReducer,
  modal: modalReducer
});
