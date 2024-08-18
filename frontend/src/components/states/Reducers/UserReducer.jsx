import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../Constants/UserConstants";

export const userReducer = (
  state = { user: {}, isAuthenticated: false },
  action
) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case USER_LOGGED_OUT:
      return { ...state, user: {}, isAuthenticate: false };
    default:
      return state;
  }
};
