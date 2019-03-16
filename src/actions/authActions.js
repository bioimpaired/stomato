export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginCurrentUser = () => {
  return {
    type: LOGIN,
    payload: {}
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT,
    payload: {}
  };
};
