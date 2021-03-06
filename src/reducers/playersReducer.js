import {
  ADD_PLAYER,
  LOAD_INITIAL_PLAYERS,
  REMOVE_PLAYER,
  TOGGLE_PLAYER_MODAL
} from "../actions/playerActions";

// modal should be in another reducer
const initialState = { playerModalOpen: false };

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
    case REMOVE_PLAYER: {
      console.log("reducer remove player", state.allPlayers);
      state.allPlayers.splice(action.payload, 1);
      console.log("after splice", state.allPlayers);
      return {
        ...state,
        allPlayers: state.allPlayers
      };
    }
    case TOGGLE_PLAYER_MODAL: {
      console.log("reducer toggle player modal", state.playerModalOpen);
      return {
        ...state,
        playerModalOpen: !state.playerModalOpen
      };
    }
    default:
      console.log("reducer default");
      return initialState;
  }
};
