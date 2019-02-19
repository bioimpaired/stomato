export const ADD_PLAYER = "ADD_PLAYER";
export const LOAD_INITIAL_PLAYERS = "LOAD_INITIAL_PLAYERS";

export const loadInitialPlayers = () => {
  console.log("loading initial players action");
  return {
    type: LOAD_INITIAL_PLAYERS,
    payload: [1, 2, 3, 4]
  };
};

export const addPlayer = () => {
  console.log("action adding player");
  return {
    type: ADD_PLAYER,
    payload: 99
  };
};
