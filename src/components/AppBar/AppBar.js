import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from "../../redux/auth";
import styles from "./AppBar.module.css";

export default function MainAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar
      position="static"
      className={styles.header}
      sx={{
        backgroundColor: "blue",
        transition: "all 0.4s ease 0s",
        flexDirection: "row",
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
