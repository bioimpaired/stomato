import { ADD_PLAYER, LOAD_INITIAL_PLAYERS } from "../actions/playerActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INITIAL_PLAYERS: {
      console.log("reducer initial reduce", action.payload);
      return {
        ...state,
        allPlayers: action.payload
      };
    }
    case ADD_PLAYER: {
      console.log("reducer add player", action.payload, state);
      return {
        ...state,
        allPlayers: [...state.allPlayers, action.payload]
      };
    }
    default:
      console.log("reducer default");
      return initialState;
  }
};
