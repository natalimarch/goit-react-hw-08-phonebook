import authTypes from "./auth-types";
import { combineReducers } from "redux";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
};

const userReducer = (state = initialState.user, { type, payload }) => {
  switch (type) {
    case authTypes.currentUserSuccess:
      return payload;

    default:
      return state;
  }
};

const tokenReducer = (state = initialState.token, { type, payload }) => {
  switch (type) {
    case authTypes.registerSuccess:
      return payload;
    case authTypes.loginSuccess:
      return payload;
    case authTypes.logOutSuccess:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
});
