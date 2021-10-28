import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { authUserToken } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const Header = () => {
  const isLoggedIn = useSelector(authUserToken);
  return (
    <header className={styles.Header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
