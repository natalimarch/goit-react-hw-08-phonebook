import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.css";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HomePage from "./pages/HomePage/HomePage";
import MainAppBar from "./components/AppBar/AppBar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { authOperations } from "./redux/auth";
import Contacts from "./pages/Contacts/Contacts";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authSelectors } from "./redux/auth";

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Box className={styles.wrapperBox}>
      {isFetchingCurrentUser ? (
        <Box className={styles.wrapperProgress}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <MainAppBar />
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <Register />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <Login />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <Contacts />
            </PrivateRoute>
          </Switch>
        </>
      )}
    </Box>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
