import { generatePlayer } from "../containers/App";

export const ADD_PLAYER = "ADD_PLAYER";
export const LOAD_INITIAL_PLAYERS = "LOAD_INITIAL_PLAYERS";
export const REMOVE_PLAYER = "REMOVE_PLAYER";

export const loadInitialPlayers = allPlayers => {
  console.log("loading initial players action", allPlayers);
  return {
    type: LOAD_INITIAL_PLAYERS,
    payload: allPlayers
  };
};

export const addPlayer = formState => {
  console.log("action adding player");
  return {
    type: ADD_PLAYER,
    // generates player obj
    payload: formState
  };
};

export const removePlayer = index => {
  console.log("action adding player", index);
  return {
    type: REMOVE_PLAYER,
    payload: index
  };
};
