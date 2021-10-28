import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner/Spinner";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));

const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
