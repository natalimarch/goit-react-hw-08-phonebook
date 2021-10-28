// import { createSlice } from "@reduxjs/toolkit";
// import authOperations from "./auth-operations";

// const initialState = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   error: null,
//   currentUser: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.register.rejected](state, action) {
//       state.error = action.payload.error;
//     },
//     [authOperations.login.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logout.fulfilled](state, action) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [authOperations.getUser.fulfilled](state, action) {
//       state.user = action.payload;
//       action.payload === 401
//         ? (state.isLoggedIn = false)
//         : (state.isLoggedIn = true);
//       state.currentUser = false;
//     },
//     [authOperations.getUser.rejected](state) {
//       state.currentUser = false;
//     },
//   },
// });

// export default authSlice.reducer;
