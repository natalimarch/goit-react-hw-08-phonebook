// export const authUserToken = (state) => state.auth.token;
// export const authIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const authUserName = (state) => state.auth.user.name;
// export const getCurrentUser = (state) => state.auth.currentUser;

const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;
