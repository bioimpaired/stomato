export const LOAD_INITIAL_FORM_STATE = "LOAD_INITIAL_FORM_STATE";

export const loadInitialFormState = playerIndex => {
  console.log("action load initial form state", playerIndex);
  return {
    type: LOAD_INITIAL_FORM_STATE,
    payload: playerIndex
  };
};
