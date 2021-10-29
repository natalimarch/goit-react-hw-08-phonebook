import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
// import api from "../../api";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure("User is already exist");
    return error.response.status;
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure("You enter a wrong login or/and password");
    return error.response.status;
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return error.response.status;
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return error.response.status;
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;

// export const register = createAsyncThunk("auth/login", async (newUser) => {
//   try {
//     const data = await api.userSignup(newUser);
//     api.token.set(data.token);
//     return data;
//   } catch (error) {
//     Notify.failure("You enter a wrong login or/and password");
//     return error.response.status;
//   }
// });
// // export const register = (newUser) => async (dispatch) => {
// //   dispatch(authActions.getRegisterStart());
// //   try {
// //     const data = await api.userSignup(newUser);
// //     token.set(data.token);
// //     dispatch(authActions.getRegisterSuccess(data));
// //   } catch (error) {
// //     dispatch(authActions.getRegisterError(error));
// //     Notify.failure("User is already exist");
// //     return error.response.status;
// //   }
// // };

// // export const login = (newLogin) => async (dispatch) => {
// //   dispatch(authActions.getLoginStart());
// //   try {
// //     const data = await api.userLogin(newLogin);
// //     token.set(data.token);
// //     dispatch(authActions.getLoginSuccess(data));
// //   } catch (error) {
// //     dispatch(authActions.getLoginError(error));
// //     Notify.failure("You enter a wrong login or/and password");
// //     return error.response.status;
// //   }
// // };

// export const logIn = createAsyncThunk("auth/login", async (newLogin) => {
//   try {
//     const data = await api.userLogin(newLogin);
//     api.token.set(data.token);
//     return data;
//   } catch (error) {
//     Notify.failure("You enter a wrong login or/and password");
//     return error.response.status;
//   }
// });

// // export const logout = (newLogout) => async (dispatch) => {
// //   dispatch(authActions.getLogoutStart());
// //   try {
// //     const data = await api.userLogout(newLogout);
// //     token.unset();
// //     dispatch(authActions.getLogoutSuccess(data));
// //   } catch (error) {
// //     dispatch(authActions.getLogoutError(error));
// //     return error.response.status;
// //   }
// // };

// export const logOut = createAsyncThunk("auth/logout", async (newLogout) => {
//   try {
//     await api.userLogout(newLogout);
//     api.token.unset();
//   } catch (error) {
//     return error.response.status;
//   }
// });

// // export const getUser = () => async (dispatch, getState) => {
// //   const state = getState();
// //   const hasToken = state.auth.token;

// //   if (hasToken === null) {
// //     return;
// //   }

// //   token.set(hasToken);

// //   dispatch(authActions.getCurrentUserStart());

// //   try {
// //     const data = await api.getCurrentUser();
// //     dispatch(authActions.getCurrentUserSuccess(data));
// //   } catch (error) {
// //     dispatch(authActions.getCurrentUserError(error));
// //     return error.response.status;
// //   }
// // };

// export const fetchCurrentUser = createAsyncThunk(
//   "auth/getUser",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const hasToken = state.auth.token;

//     if (hasToken === null) {
//       return thunkAPI.rejectWithValue();
//     }

//     api.token.set(hasToken);
//     try {
//       const data = api.getCurrentUser;
//       return data;
//     } catch (error) {
//       return error.response.status;
//     }
//   }
// );

// const operations = {
//   register,
//   logIn,
//   logOut,
//   fetchCurrentUser,
// };

// export default operations;

// // export const addToPhonebook = (newContact) => {
// //     const addContacts = async (dispatch) => {
// //       dispatch(actions.addToPhonebookRequest());

// //       try {
// //         const data = await api.addNewContact(newContact);
// //         dispatch(actions.addToPhonebookSuccess(data));
// //       } catch (error) {
// //         dispatch(actions.addToPhonebookError(error));
// //       }
// //     };
// //     return addContacts;
// //   };
