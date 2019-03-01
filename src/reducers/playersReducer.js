import {
  ADD_PLAYER,
  LOAD_INITIAL_PLAYERS,
  REMOVE_PLAYER,
  UPDATE_PLAYER
} from "../actions/playerActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INITIAL_PLAYERS: {
      console.log("reducer initial reduce", action.payload);
      return {
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
    case REMOVE_PLAYER: {
      console.log("reducer remove player", state.allPlayers);
      state.allPlayers.splice(action.payload, 1);
      console.log("after splice", state.allPlayers);
      return {
        ...state,
        allPlayers: state.allPlayers
      };
    }
    case UPDATE_PLAYER: {
      console.log("reducer update player", action);
      const allPlayersWithUpdatedPlayer = state.allPlayers.map(
        (player, index) =>
          action.playerIndex === index ? action.payload : player
      );
      return {
        ...state,
        allPlayers: allPlayersWithUpdatedPlayer
      };
    }
    default:
      console.log("reducer default");
      return state;
  }
};
