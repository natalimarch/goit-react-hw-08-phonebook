import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav>
      <NavLink exact to="/register" className={styles.NavLink}>
        Register
      </NavLink>
      <NavLink exact to="/login" className={styles.NavLink}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
