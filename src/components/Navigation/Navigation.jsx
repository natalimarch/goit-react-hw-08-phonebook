import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={styles.NavLink}>
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
