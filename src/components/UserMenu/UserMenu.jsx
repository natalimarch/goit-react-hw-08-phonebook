import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import defaultAvatar from "./default-avatar.png";

import { authSelectors, authOperations } from "../../redux/auth";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <>
      <div className={styles.Container}>
        <img src={avatar} alt="#" className={styles.Avatar} />
        <span className={styles.Name}>Добро пожаловать, {name}</span>
        <button
          type="button"
          className={styles.Btn}
          onClick={() => dispatch(authOperations.logOut())}
        >
          Выйти
        </button>
      </div>
    </>
  );
};

export default UserMenu;
