// import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../api";
import authActions from "./auth-actions";

import { Notify } from "notiflix/build/notiflix-notify-aio";

// export const getPhonebook = () => {
//   const getContacts = async (dispatch, getState) => {
//     const {
//       auth: { token },
//     } = getState();
//     api.token.set(token);
//     dispatch(actions.getPhonebookContactsRequest());

//     try {
//       const data = await api.getAllContacts();
//       dispatch(actions.getPhonebookContactsSuccess(data));
//     } catch (error) {
//       dispatch(actions.getPhonebookContactsError(error));
//     }
//   };
//   return getContacts;
// };

export const register = async (newUser) => async (dispatch) => {
  dispatch(authActions.getRegisterStart());
  try {
    const data = await api.userSignup(newUser);
    api.token.set(data.token);
    dispatch(authActions.getRegisterSuccess(data));
  } catch (error) {
    dispatch(authActions.getRegisterError(error));
    Notify.failure("User is already exist");
    return error.response.status;
  }
};

export const login = async (newLogin) => async (dispatch) => {
  dispatch(authActions.getLoginStart());
  try {
    const data = await api.userLogin(newLogin);
    api.token.set(data.token);
    dispatch(authActions.getLoginSuccess(data));
  } catch (error) {
    dispatch(authActions.getLoginError(error));
    Notify.failure("You enter a wrong login or/and password");
    return error.response.status;
  }
};

// export const login = createAsyncThunk("auth/login", async (newLogin) => {
//   try {
//     const data = await api.userLogin(newLogin);
//     api.token.set(data.token);
//     // return data;
//   } catch (error) {
//     Notify.failure("You enter a wrong login or/and password");
//     return error.response.status;
//   }
// });

export const logout = async (newLogout) => async (dispatch) => {
  dispatch(authActions.getLogoutStart());
  try {
    const data = await api.userLogout(newLogout);
    api.token.unset();
    dispatch(authActions.getLogoutSuccess(data));
  } catch (error) {
    dispatch(authActions.getLogoutError(error));
    return error.response.status;
  }
};

// export const logout = createAsyncThunk("auth/logout", async (newLogout) => {
//   try {
//     await api.userLogout(newLogout);
//     api.token.unset();
//     // return data;
//   } catch (error) {
//     return error.response.status;
//   }
// });

export const getUser = async () => async (dispatch, getState) => {
  const state = getState();
  const hasToken = state.auth.token;

  if (hasToken === null) {
    return;
  }

  api.token.set(hasToken);

  dispatch(authActions.getCurrentUserStart());

  try {
    const data = await api.getCurrentUser();
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
    return error.response.status;
  }
};

// export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const hasToken = state.auth.token;

//   if (hasToken === null) {
//     return thunkAPI.rejectWithValue();
//   }

//   api.token.set(hasToken);
//   try {
//     const data = api.getCurrentUser;
//     return data;
//   } catch (error) {
//     return error.response.status;
//   }
// });

const operations = {
  register,
  login,
  logout,
};

export default operations;

// export const addToPhonebook = (newContact) => {
//     const addContacts = async (dispatch) => {
//       dispatch(actions.addToPhonebookRequest());

//       try {
//         const data = await api.addNewContact(newContact);
//         dispatch(actions.addToPhonebookSuccess(data));
//       } catch (error) {
//         dispatch(actions.addToPhonebookError(error));
//       }
//     };
//     return addContacts;
//   };
