import {
  LOAD_INITIAL_FORM_STATE
  //   LOAD_INITIAL_PLAYERS,
  //   REMOVE_PLAYER,
  //   TOGGLE_PLAYER_MODAL
} from "../actions/modalActions";

const initialState = {
  initialFormState: {
    name: "",
    fg: "",
    ft: "",
    threes: "",
    pts: "",
    reb: "",
    ast: "",
    st: "",
    blk: "",
    to: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INITIAL_FORM_STATE: {
      console.log("load inital form state", action.payload);
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        initialFormState: action.payload
      };
    }
    default:
      return state;
  }
};
