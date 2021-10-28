import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import defaultAvatar from "./default-avatar.png";

import authOperations from "../../redux/auth/auth-operations";
import { authUserName } from "../../redux/auth/auth-selectors";
// import Phonebook from "../Phonebook/Phonebook";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authUserName);
  const avatar = defaultAvatar;

  return (
    <>
      <div className={styles.Container}>
        <img src={avatar} alt="#" className={styles.Avatar} />
        <span className={styles.Name}>Добро пожаловать, {name}</span>
        <button type="button" onClick={() => dispatch(authOperations.logout())}>
          Выйти
        </button>
      </div>
      <nav>
        <NavLink exact to="/contacts" className={styles.NavLink}>
          Contacts
        </NavLink>
      </nav>
    </>
  );
};

export default UserMenu;
